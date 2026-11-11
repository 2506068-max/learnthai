/**
 * Mali's Thai - Core Application & State Management
 * User profile, Theme engines, Interactive Learning Gym (Flashcards, Speed Drill, Typing),
 * Curriculum runner, Roleplay, Dictionary, and Service Worker Bootstrap.
 */

    /* 1. STATE & PERSISTENCE */
    const DEFAULT_STATE = {
      userName: '',
      userAvatar: '🍃',
      isLoggedIn: false,
      xp: 65,
      gems: 150,
      streak: 1,
      hearts: 5,
      completedLessons: ['u1_l1'],
      unlockedLessons: ['u1_l1', 'u1_l2'],
      soundEnabled: true,
      speechRate: 1.0,
      speakerGender: 'female',
      theme: 'light',
      thaiFontStyle: 'looped',
      thaiScriptMode: 'full',
      completedJazmiVideos: [],
      vocabDailyMission: {
        date: '',
        studiedWords: [],
        quizCompleted: false,
        quizScore: 0,
        claimed: false
      }
    };

    let appState = JSON.parse(localStorage.getItem('stimuler_thai_state') || JSON.stringify(DEFAULT_STATE));
    if (!Array.isArray(appState.unlockedLessons) || appState.unlockedLessons.length === 0) {
      appState.unlockedLessons = ['u1_l1', 'u1_l2'];
    }
    if (typeof appState.speechRate !== 'number') {
      appState.speechRate = 1.0;
    }
    if (!appState.speakerGender) {
      appState.speakerGender = 'female';
    }
    if (typeof appState.userName !== 'string') {
      appState.userName = '';
    }
    if (!appState.userAvatar) {
      appState.userAvatar = '🍃';
    }
    if (!appState.thaiFontStyle) {
      appState.thaiFontStyle = 'looped';
    }
    if (!appState.thaiScriptMode) {
      appState.thaiScriptMode = 'full';
    }
    if (!Array.isArray(appState.completedJazmiVideos)) {
      appState.completedJazmiVideos = [];
    }

    // Hydrate Daily Vocab Mission state
    const todayMissionDateStr = new Date().toISOString().slice(0, 10);
    if (!appState.vocabDailyMission || typeof appState.vocabDailyMission !== 'object') {
      appState.vocabDailyMission = {
        date: todayMissionDateStr,
        studiedWords: [],
        quizCompleted: false,
        quizScore: 0,
        claimed: false
      };
    } else if (appState.vocabDailyMission.date !== todayMissionDateStr) {
      // New day: keep studied historical set or reset daily counter
      appState.vocabDailyMission = {
        date: todayMissionDateStr,
        studiedWords: [],
        quizCompleted: false,
        quizScore: 0,
        claimed: false
      };
    }
    if (!Array.isArray(appState.vocabDailyMission.studiedWords)) {
      appState.vocabDailyMission.studiedWords = [];
    }

    function saveState() {
      localStorage.setItem('stimuler_thai_state', JSON.stringify(appState));
      // Persist to user accounts store if logged in
      if (appState.userName && appState.userName !== 'Tamu Belajar' && appState.isLoggedIn) {
        try {
          const accounts = JSON.parse(localStorage.getItem('stimuler_thai_accounts') || '{}');
          const key = appState.userName.toLowerCase();
          accounts[key] = {
            ...(accounts[key] || {}),
            name: appState.userName,
            avatar: appState.userAvatar,
            speakerGender: appState.speakerGender,
            thaiFontStyle: appState.thaiFontStyle,
            thaiScriptMode: appState.thaiScriptMode,
            completedJazmiVideos: appState.completedJazmiVideos,
            xp: appState.xp,
            streak: appState.streak,
            completedLessons: appState.completedLessons,
            unlockedLessons: appState.unlockedLessons,
            vocabDailyMission: appState.vocabDailyMission
          };
          localStorage.setItem('stimuler_thai_accounts', JSON.stringify(accounts));
        } catch (e) { }
      }
      updateTopMetrics();
      if (typeof syncUserProfileUI === 'function') {
        syncUserProfileUI();
      }
      if (typeof updateVocabDailyMissionUI === 'function') {
        updateVocabDailyMissionUI();
      }
      renderCurriculumNodes();
    }

    /* 1.1 THAI FONT & SCRIPT STYLE ENGINE */
    function applyThaiFontStyle(fontKey) {
      if (!['looped', 'loopless', 'handwritten', 'serif'].includes(fontKey)) fontKey = 'looped';
      appState.thaiFontStyle = fontKey;
      document.documentElement.setAttribute('data-thai-font', fontKey);
      document.body.setAttribute('data-thai-font', fontKey);

      const labels = {
        'looped': 'Berloop',
        'loopless': 'Tanpa Loop',
        'handwritten': 'Tulis Tangan',
        'serif': 'Serif'
      };
      const labelEl = document.getElementById('currentThaiFontLabel');
      if (labelEl) labelEl.textContent = labels[fontKey] || 'Berloop';
      const mDrawerLabel = document.getElementById('mobileDrawerCurrentFontLabel');
      if (mDrawerLabel) mDrawerLabel.textContent = labels[fontKey] || 'Berloop';

      document.querySelectorAll('.thai-font-option').forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-font') === fontKey);
      });
      document.querySelectorAll('.pill-font-btn').forEach(btn => {
        const idExpected = `pillFont${fontKey.charAt(0).toUpperCase() + fontKey.slice(1)}`;
        btn.classList.toggle('active', btn.getAttribute('data-font') === fontKey || btn.id === idExpected);
      });
    }

    function setAppThaiFontStyle(fontKey) {
      applyThaiFontStyle(fontKey);
      const dropdown = document.getElementById('headerThaiFontDropdown');
      if (dropdown) dropdown.classList.remove('open');
      saveState();
      playSynthSound('click');
      const labels = {
        'looped': 'Standar Berloop (Formal / Buku Teks)',
        'loopless': 'Modern Tanpa Loop (BTS & Urban Bangkok)',
        'handwritten': 'Tulisan Tangan Santai (Mali / Ghibli)',
        'serif': 'Klasik Serif (Formal Sastra & Koran)'
      };
      showToast(`Ragam tulisan Thai: ${labels[fontKey] || fontKey}`);
    }

    function applyThaiScriptMode(mode) {
      if (!['full', 'native'].includes(mode)) mode = 'full';
      appState.thaiScriptMode = mode;
      document.documentElement.setAttribute('data-script-mode', mode);
      document.body.setAttribute('data-script-mode', mode);

      const fullBtn = document.getElementById('btnModeScriptFull');
      const nativeBtn = document.getElementById('btnModeScriptNative');
      if (fullBtn) fullBtn.classList.toggle('active', mode === 'full');
      if (nativeBtn) nativeBtn.classList.toggle('active', mode === 'native');

      const pillFull = document.getElementById('pillModeScriptFull');
      const pillNative = document.getElementById('pillModeScriptNative');
      if (pillFull) pillFull.classList.toggle('active', mode === 'full');
      if (pillNative) pillNative.classList.toggle('active', mode === 'native');
    }

    function setAppThaiScriptMode(mode) {
      applyThaiScriptMode(mode);
      saveState();
      playSynthSound('click');
      showToast(mode === 'native' ? 'Mode Aksara Murni (Bantuan Latin disembunyikan untuk latihan baca)' : 'Mode Lengkap (Aksara + Latin aktif)');
    }

    function toggleThaiFontMenu(event) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      const dropdown = document.getElementById('headerThaiFontDropdown');
      if (dropdown) dropdown.classList.toggle('open');
    }

    // Close font menu on outside click
    window.addEventListener('click', (e) => {
      const wrap = document.getElementById('headerThaiFontWrap');
      const dropdown = document.getElementById('headerThaiFontDropdown');
      if (wrap && dropdown && !wrap.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });

    function updateTopMetrics() {
      try {
        const streakEl = document.getElementById('headerStreak');
        const xpEl = document.getElementById('headerXp');
        if (streakEl) streakEl.textContent = appState.streak;
        if (xpEl) xpEl.textContent = appState.xp;
        const rateBtn = document.getElementById('rateToggleBtn');
        if (rateBtn) {
          rateBtn.textContent = (appState.speechRate === 0.82) ? '🐢 0.8x' : '⚡ 1.0x';
        }
        updateGenderControls();
      } catch (e) {
        console.warn('Top metrics update warning:', e);
      }
    }

    function toggleSpeechRate() {
      playSynthSound('click');
      appState.speechRate = (appState.speechRate === 0.82) ? 1.0 : 0.82;
      const rateBtn = document.getElementById('rateToggleBtn');
      if (rateBtn) {
        rateBtn.textContent = (appState.speechRate === 0.82) ? '🐢 0.8x' : '⚡ 1.0x';
      }
      saveState();
      showToast(appState.speechRate === 0.82 ? 'Kecepatan Penutur Asli: 0.8x (Santai & Jelas untuk Pemula)' : 'Kecepatan Penutur Asli: 1.0x (Alami Percakapan Bangkok)');
    }

    /* GENDER SPEAKER SWITCHER & THAI GENDER GRAMMAR ENGINE */
    /* GENDER SPEAKER SWITCHER & THAI GENDER GRAMMAR ENGINE */
    function setAppSpeakerGender(gender) {
      playSynthSound('click');
      appState.speakerGender = gender;
      saveState();
      updateGenderControls();
      renderStudioPrompt();
      renderPhrasebook();
      renderRoleplayChat();
      showToast(gender === 'male'
        ? '👨 Gaya Bicara: Laki-laki (ครับ / ผม)'
        : '👩 Gaya Bicara: Perempuan (ค่ะ / คะ / ฉัน)');
    }

    function toggleSpeakerGender() {
      setAppSpeakerGender((appState.speakerGender === 'male') ? 'female' : 'male');
    }

    function setStudioPromptGender(gender) {
      setAppSpeakerGender(gender);
    }

    function setRoleplayGender(gender) {
      setAppSpeakerGender(gender);
    }

    function updateGenderControls() {
      const isMale = appState.speakerGender === 'male';
      const headerFemaleBtn = document.getElementById('headerGenderFemale');
      const headerMaleBtn = document.getElementById('headerGenderMale');
      if (headerFemaleBtn && headerMaleBtn) {
        headerFemaleBtn.classList.toggle('active', !isMale);
        headerMaleBtn.classList.toggle('active', isMale);
      }
      const legacyBtn = document.getElementById('genderToggleBtn');
      if (legacyBtn) {
        legacyBtn.innerHTML = isMale ? '👨 Pria (ครับ)' : '👩 Wanita (ค่ะ)';
        legacyBtn.style.borderColor = isMale ? 'var(--primary)' : 'var(--accent-gold)';
      }
      const studioMaleBtn = document.getElementById('promptGenderMale');
      const studioFemaleBtn = document.getElementById('promptGenderFemale');
      if (studioMaleBtn && studioFemaleBtn) {
        studioMaleBtn.classList.toggle('active', isMale);
        studioFemaleBtn.classList.toggle('active', !isMale);
      }
      const roleMaleBtn = document.getElementById('roleplayGenderMale');
      const roleFemaleBtn = document.getElementById('roleplayGenderFemale');
      if (roleMaleBtn && roleFemaleBtn) {
        roleMaleBtn.classList.toggle('active', isMale);
        roleFemaleBtn.classList.toggle('active', !isMale);
      }
      const portalFemaleBtn = document.getElementById('portalGenderFemale');
      const portalMaleBtn = document.getElementById('portalGenderMale');
      if (portalFemaleBtn && portalMaleBtn) {
        portalFemaleBtn.classList.toggle('active', !isMale);
        portalMaleBtn.classList.toggle('active', isMale);
      }
    }


    /* 5. ROLEPLAY CONVERSATIONAL SIMULATOR (12 SCENARIOS) */
    const ROLEPLAY_SCENARIOS = {
      cafe: {
        id: 'cafe',
        category: 'kuliner',
        categoryLabel: '🍜 Kuliner',
        title: 'Pesan Makanan di Kafe Sukhumvit',
        desc: 'Pesan Pad Thai, minta air es, menu rekomendasi, dan bayar tagihan.',
        icon: '🍜',
        level: 'A1 Dasar',
        partnerName: 'Pelayan Kafe (Khun Da)',
        partnerAvatar: '👩🏻',
        partnerGender: 'female',
        partnerRole: 'Penutur Asli Wanita • Bangkok Cafe',
        initialMessages: [
          { sender: 'ai', thai: 'สวัสดีค่ะ รับอะไรดีคะ?', roman: 'sà-wàt-dii khâ, ráp a-rai dii khá?', ind: 'Halo, mau pesan apa hari ini?' }
        ],
        messages: [],
        chips: [
          {
            thai: 'ขอผัดไทยหนึ่งจานครับ',
            roman: 'khɔ̌ɔ phàt-thai nèung jaan khráp',
            ind: 'Minta satu porsi Pad Thai',
            reply: { thai: 'ได้เลยค่ะ ผัดไทยกุ้งสด รอสักครู่ 5 นาทีนะคะ!', roman: 'dâi loei khâ, phàt-thai gûng sòt, rɔɔ sàk-khrûu hâa naa-thii ná khá!', ind: 'Baik, Pad Thai udang segar, tunggu 5 menit ya!' }
          },
          {
            thai: 'ขอน้ำเปล่าหนึ่งแก้วครับ',
            roman: 'khɔ̌ɔ náam-plào nèung gâew khráp',
            ind: 'Minta satu gelas air putih',
            reply: { thai: 'ใส่น้ำแข็งด้วยไหมคะ?', roman: 'sài náam-khǎeng dûay mǎi khá?', ind: 'Pakai es batu juga tidak?' }
          },
          {
            thai: 'มีเมนูแนะนำไหมครับ',
            roman: 'mii mee-nuu náe-nam mǎi khráp',
            ind: 'Ada menu rekomendasi?',
            reply: { thai: 'แนะนำต้มยำกุ้งและข้าวซอยค่ะ อร่อยมาก!', roman: 'náe-nam dtôm-yam-gûng láe khâao-sɔɔi khâ, a-rɔ̀ɔy mâak!', ind: 'Rekomendasi Tom Yum Goong dan Khao Soi, enak sekali!' }
          },
          {
            thai: 'เก็บเงินด้วยครับ',
            roman: 'gèp ngoen dûay khráp',
            ind: 'Minta bon / bayar tagihan',
            reply: { thai: 'ทั้งหมด 120 บาทค่ะ สแกนจ่ายได้นะคะ', roman: 'tháng-mòt nèung-rɔ́ɔi yîi-sìp bàat khâ, sà-gaen jàai dâi ná khá', ind: 'Total 120 Baht, bisa bayar pakai QR/Scan ya' }
          }
        ]
      },
      market: {
        id: 'market',
        category: 'belanja',
        categoryLabel: '🛍️ Belanja',
        title: 'Tawar-Menawar di Chatuchak',
        desc: 'Tanya harga pakaian, tawar diskon ramah, dan cek varian warna.',
        icon: '🛍️',
        level: 'A1 Dasar',
        partnerName: 'Penjual Pasar (Pii Somchai)',
        partnerAvatar: '👨🏻',
        partnerGender: 'male',
        partnerRole: 'Penutur Asli Pria • Chatuchak Market',
        initialMessages: [
          { sender: 'ai', thai: 'เสื้อตัวนี้สวยมากครับ สนใจไหม?', roman: 'sûea dtua níi sǔay mâak khráp, sǒn-jai mǎi?', ind: 'Baju ini bagus sekali, berminat?' }
        ],
        messages: [],
        chips: [
          {
            thai: 'อันนี้เท่าไหร่ครับ',
            roman: 'an-níi thâo-rài khráp',
            ind: 'Berapa harganya yang ini?',
            reply: { thai: 'ตัวละ 250 บาทครับ เนื้อผ้าใส่สบายมาก!', roman: 'dtua lá sɔ̌ɔng-rɔ́ɔi hâa-sìp bàat khráp, núea-phâa sài sà-baai mâak!', ind: '250 Baht per potong, bahannya sangat adem dan nyaman!' }
          },
          {
            thai: 'ลดหน่อยได้ไหมครับ',
            roman: 'lót nɔ̀ɔy dâi mǎi khráp',
            ind: 'Bisa diskon sedikit?',
            reply: { thai: 'ถ้าซื้อสองตัว ลดให้เหลือ 400 บาทครับ!', roman: 'thâa súue sɔ̌ɔng dtua, lót hâi lǔea sìi-rɔ́ɔi bàat khráp!', ind: 'Kalau ambil dua, saya diskon jadi 400 Baht ya!' }
          },
          {
            thai: 'มีสีอื่นไหมครับ',
            roman: 'mii sǐi ùen mǎi khráp',
            ind: 'Apakah ada warna lain?',
            reply: { thai: 'มีสีน้ำเงินกับสีขาวครับ ลองดูได้เลย', roman: 'mii sǐi náam-ngoen gàp sǐi khǎao khráp, lɔɔng duu dâi loei', ind: 'Ada warna biru dan putih, silakan dicoba dulu' }
          },
          {
            thai: 'เอาตัวนี้ครับ',
            roman: 'ao dtua níi khráp',
            ind: 'Saya ambil yang ini',
            reply: { thai: 'ขอบคุณมากครับ ใส่ถุงให้เรียบร้อยแล้วครับ', roman: 'khɔ̀ɔp-khun mâak khráp, sài thǔng hâi rîap-rɔ́ɔy láew khráp', ind: 'Terima kasih banyak! Sudah saya bungkus rapi' }
          }
        ]
      },
      tuktuk: {
        id: 'tuktuk',
        category: 'transport',
        categoryLabel: '🛺 Transport',
        title: 'Naik Tuk-Tuk Keliling Kota',
        desc: 'Sepakat tarif, memberi petunjuk arah, dan minta berhenti di kuil.',
        icon: '🛺',
        level: 'A1 Dasar',
        partnerName: 'Sopir Tuk-Tuk (Bang Somrak)',
        partnerAvatar: '🛺',
        partnerGender: 'male',
        partnerRole: 'Penutur Asli Pria • Bangkok Driver',
        initialMessages: [
          { sender: 'ai', thai: 'จะไปไหนครับ ไปไกลไหม?', roman: 'jà pai nǎi khráp, pai glai mǎi?', ind: 'Mau pergi ke mana? Jauh tidak?' }
        ],
        messages: [],
        chips: [
          {
            thai: 'ไปวัดอรุณเท่าไหร่ครับ',
            roman: 'pai wát a-run thâo-rài khráp',
            ind: 'Ke Wat Arun berapa harganya?',
            reply: { thai: '150 บาทครับ นั่งรับลมเย็นๆ สบายเลย!', roman: 'nèung-rɔ́ɔi hâa-sìp bàat khráp, nâng ráp lom yen-yen sà-baai loei!', ind: '150 Baht, duduk santai angin sejuk nyaman!' }
          },
          {
            thai: 'ตรงไปแล้วเลี้ยวซ้ายครับ',
            roman: 'dtrong pai láew líao sáai khráp',
            ind: 'Lurus lalu belok kiri',
            reply: { thai: 'โอเคครับ เลี้ยวซ้ายตรงสี่แยกข้างหน้านะ', roman: 'oo-kee khráp, líao sáai dtrong sìi-yâek khâang-nâa ná', ind: 'Oke, belok kiri di perempatan depan ya' }
          },
          {
            thai: 'จอดที่นี่ด้วยครับ',
            roman: 'jɔ̀ɔt thîi nîi dûay khráp',
            ind: 'Tolong berhenti di sini',
            reply: { thai: 'ถึงแล้วครับ ระวังรถมอเตอร์ไซค์ตอนลงด้วยนะ!', roman: 'thěung láew khráp, rá-wang rót mɔɔ-dtəə-sai dtɔɔn long dûay ná!', ind: 'Sudah sampai! Hati-hati motor saat turun ya' }
          }
        ]
      },
      hotel: {
        id: 'hotel',
        category: 'wisata',
        categoryLabel: '🏨 Wisata',
        title: 'Check-In Hotel di Sukhumvit',
        desc: 'Konfirmasi reservasi kamar, tanya sarapan, dan minta password WiFi.',
        icon: '🏨',
        level: 'A2 Menengah',
        partnerName: 'Resepsionis Hotel (Khun Ploy)',
        partnerAvatar: '👩‍💼',
        partnerGender: 'female',
        partnerRole: 'Penutur Asli Wanita • Sukhumvit Grand',
        initialMessages: [
          { sender: 'ai', thai: 'สวัสดีค่ะ ยินดีต้อนรับ เช็คอินใช่ไหมคะ?', roman: 'sà-wàt-dii khâ, yin-dii dtɔ̂ɔn-ráp chék-in châi mǎi khá?', ind: 'Selamat datang, mau check-in kan?' }
        ],
        messages: [],
        chips: [
          {
            thai: 'จองห้องไว้แล้วครับ',
            roman: 'jɔɔng hɔ̂ɔng wái láew khráp',
            ind: 'Saya sudah reservasi kamar',
            reply: { thai: 'ขอดูพาสปอร์ตและใบจองหน่อยค่ะ', roman: 'khɔ̌ɔ duu phâat-sà-bpɔ̀ɔt láe bai-jɔɔng nɔ̀ɔy khâ', ind: 'Boleh saya lihat paspor dan voucher reservasinya?' }
          },
          {
            thai: 'อาหารเช้าเริ่มกี่โมงครับ',
            roman: 'aa-hǎan-cháao rə̂əm gìi moong khráp',
            ind: 'Sarapan pagi mulai jam berapa?',
            reply: { thai: 'อาหารเช้าชั้น 2 เริ่มหกโมงครึ่งถึงสิบโมงเช้าค่ะ', roman: 'aa-hǎan-cháao chán sɔ̌ɔng, rə̂əm hòk moong khrûeng thěung sìp moong cháao khâ', ind: 'Sarapan di lantai 2 mulai 06.30 hingga 10.00 pagi ya' }
          },
          {
            thai: 'ขอรหัสไวไฟด้วยครับ',
            roman: 'khɔ̌ɔ rá-hàt wai-fai dûay khráp',
            ind: 'Minta password WiFi hotel',
            reply: { thai: 'รหัสไวไฟเขียนอยู่ที่ซองคีย์การ์ดค่ะ', roman: 'rá-hàt wai-fai khǐan yùu thîi sɔɔng kii-gàat khâ', ind: 'Password WiFi tertulis di amplop kartu kamar ya' }
          }
        ]
      },
      tea: {
        id: 'tea',
        category: 'kuliner',
        categoryLabel: '🍜 Kuliner',
        title: 'Kedai Minuman Cha Yen & Thai Tea',
        desc: 'Pesan Cha Yen autentik, atur tingkat kemanisan, dan pesan take-away.',
        icon: '🧋',
        level: 'A1 Dasar',
        partnerName: 'Barista Kedai (Nong Fern)',
        partnerAvatar: '🧋',
        partnerGender: 'female',
        partnerRole: 'Penutur Asli Wanita • ChaTraMue Station',
        initialMessages: [
          { sender: 'ai', thai: 'สวัสดีค่ะ ดื่มชาไทยหรือชาเขียวดีคะ?', roman: 'sà-wàt-dii khâ, dèum chaa-thai rǔue chaa-kǐao dii khá?', ind: 'Halo, mau minum Thai Tea atau Green Tea?' }
        ],
        messages: [],
        chips: [
          {
            thai: 'ขอชาไทยเย็นหวานน้อยครับ',
            roman: 'khɔ̌ɔ chaa-thai yen wǎan nɔ́ɔy khráp',
            ind: 'Minta es Thai Tea manis sedikit (low sugar)',
            reply: { thai: 'ได้ค่ะ ชาไทยเย็นหวาน 25% หอมเข้มข้นค่ะ', roman: 'dâi khâ, chaa-thai yen wǎan yîi-sìp-hâa bpəə-sen hɔ̌ɔm khêm-khǒn khâ', ind: 'Baik, Cha Yen manis 25% wangi dan kental!' }
          },
          {
            thai: 'ขอชามะนาวแก้วใหญ่ครับ',
            roman: 'khɔ̌ɔ chaa-má-naao gâew yài khráp',
            ind: 'Minta es lemon tea ukuran besar',
            reply: { thai: 'ชามะนาวเปรี้ยวหวานสดชื่น แก้วละ 40 บาทค่ะ', roman: 'chaa-má-naao bprîao wǎan sòt-chûen, gâew lá sìi-sìp bàat khâ', ind: 'Lemon Tea segar asam manis, 40 Baht per cup besar' }
          },
          {
            thai: 'ใส่ถุงกลับบ้านครับ',
            roman: 'sài thǔng glàp bâan khráp',
            ind: 'Bungkus bawa pulang (take-away)',
            reply: { thai: 'ใส่ถุงหูหิ้วพร้อมหลอดดูดให้เรียบร้อยแล้วค่ะ!', roman: 'sài thǔng hǔu-hîo phrɔ́ɔm lɔ̀ɔt-dùut hâi rîap-rɔ́ɔy láew khâ!', ind: 'Sudah dibungkus tas jinjing lengkap dengan sedotan ya!' }
          }
        ]
      },
      massage: {
        id: 'massage',
        category: 'layanan',
        categoryLabel: '💆 Layanan',
        title: 'Spa & Pijat Tradisional Nuad Thai',
        desc: 'Pilih durasi pijat tradisional, minta tekanan lebih pelan atau kuat.',
        icon: '💆‍♀️',
        level: 'A2 Menengah',
        partnerName: 'Terapis Pijat (Mae Pranom)',
        partnerAvatar: '💆‍♀️',
        partnerGender: 'female',
        partnerRole: 'Penutur Asli Wanita • Wat Pho Massage Spa',
        initialMessages: [
          { sender: 'ai', thai: 'สวัสดีค่ะ วันนี้เมื่อยตรงไหนเป็นพิเศษไหมคะ?', roman: 'sà-wàt-dii khâ, wan-níi mûeay dtrong nǎi pen phí-sèet mǎi khá?', ind: 'Halo, hari ini pegal di bagian mana secara khusus?' }
        ],
        messages: [],
        chips: [
          {
            thai: 'ขอนวดไทยโบราณสองชั่วโมงครับ',
            roman: 'khɔ̌ɔ nûat thai boo-raan sɔ̌ɔng chûa-moong khráp',
            ind: 'Minta pijat tradisional Thai 2 jam',
            reply: { thai: 'เปลี่ยนชุดที่ห้องด้านในก่อนนะคะ สบายตัวแน่นอน', roman: 'bplìian chút thîi hɔ̂ɔng dâan-nai gɔ̀ɔn ná khá, sà-baai dtua nâae-nɔɔn', ind: 'Ganti baju di kamar dalam dulu ya, pasti badan segar kembali' }
          },
          {
            thai: 'ช่วยนวดเบาๆ หน่อยครับ',
            roman: 'chûay nûat bao-bao nɔ̀ɔy khráp',
            ind: 'Tolong pijatnya pelan-pelan saja',
            reply: { thai: 'ได้ค่ะ จะผ่อนคลายเบาๆ ให้ ไม่เจ็บแน่นอนค่ะ', roman: 'dâi khâ, jà phɔ̀ɔn-khlaai bao-bao hâi, mâi jèp nâae-nɔɔn khâ', ind: 'Baik, saya pijat lembut rileks, tidak akan sakit ya' }
          },
          {
            thai: 'ตรงนี้นวดหนักๆ ได้ครับ',
            roman: 'dtrong níi nûat nàk-nàk dâi khráp',
            ind: 'Bagian ini boleh dipijat agak kencang',
            reply: { thai: 'จัดให้ค่ะ คลายเส้นที่ตึงตรงบ่าไหล่ให้นะคะ', roman: 'jàt hâi khâ, khlaai sên thîi dteung dtrong bàa-lǎi hâi ná khá', ind: 'Siap! Saya uraikan urat kaku di pundak leher ya' }
          }
        ]
      },
      airport: {
        id: 'airport',
        category: 'wisata',
        categoryLabel: '✈️ Wisata',
        title: 'Imigrasi Bandara Suvarnabhumi',
        desc: 'Jawab pertanyaan petugas imigrasi tentang durasi wisata dan hotel.',
        icon: '✈️',
        level: 'A2 Menengah',
        partnerName: 'Petugas Imigrasi (Khun Arthit)',
        partnerAvatar: '👨‍✈️',
        partnerGender: 'male',
        partnerRole: 'Penutur Asli Pria • Suvarnabhumi Airport',
        initialMessages: [
          { sender: 'ai', thai: 'สวัสดีครับ มาเที่ยวประเทศไทยใช่ไหมครับ?', roman: 'sà-wàt-dii khráp, maa thîao bprà-thêet thai châi mǎi khráp?', ind: 'Halo, datang untuk berlibur ke Thailand kan?' }
        ],
        messages: [],
        chips: [
          {
            thai: 'มาเที่ยวหนึ่งสัปดาห์ครับ',
            roman: 'maa thîao nèung sàp-daa khráp',
            ind: 'Datang berlibur selama 1 minggu',
            reply: { thai: 'ยินดีต้อนรับครับ พักที่โรงแรมไหนในกรุงเทพครับ?', roman: 'yin-dii dtɔ̂ɔn-ráp khráp, phák thîi roong-raem nǎi nai grung-thêep khráp?', ind: 'Selamat datang! Menginap di hotel mana di Bangkok?' }
          },
          {
            thai: 'พักที่โรงแรมสุขุมวิทครับ',
            roman: 'phák thîi roong-raem sù-khǔm-wít khráp',
            ind: 'Menginap di hotel kawasan Sukhumvit',
            reply: { thai: 'เรียบร้อยครับ ประทับตราให้แล้ว ขอให้เที่ยวให้สนุกครับ!', roman: 'rîap-rɔ́ɔy khráp, bprà-tháp-dtraa hâi láew, khɔ̌ɔ hâi thîao hâi sà-nùk khráp!', ind: 'Sudah beres dan dicap paspornya! Selamat menikmati liburan di Thailand!' }
          },
          {
            thai: 'นี่พาสปอร์ตครับ',
            roman: 'nîi phâat-sà-bpɔ̀ɔt khráp',
            ind: 'Ini paspor saya',
            reply: { thai: 'ขอบคุณครับ มองกล้องถ่ายรูปตรงนี้ด้วยครับ', roman: 'khɔ̀ɔp-khun khráp, mɔɔng glɔ̂ɔng thàai-rûup dtrong níi dûay khráp', ind: 'Terima kasih, silakan tatap kamera di depan ini ya' }
          }
        ]
      },
      seven: {
        id: 'seven',
        category: 'belanja',
        categoryLabel: '🛍️ Belanja',
        title: 'Belanja Cepat di 7-Eleven Thailand',
        desc: 'Minta panaskan sandwich keju, tolak kantong plastik, dan bayar tunai.',
        icon: '🏪',
        level: 'A1 Dasar',
        partnerName: 'Kasir 7-Eleven (Nong Best)',
        partnerAvatar: '🏪',
        partnerGender: 'male',
        partnerRole: 'Penutur Asli Pria • 7-Eleven Convenience Store',
        initialMessages: [
          { sender: 'ai', thai: 'เซเว่นสวัสดีครับ รับแซนด์วิชร้อนๆ ไหมครับ?', roman: 'see-wên sà-wàt-dii khráp, ráp saen-wít rɔ́ɔn-rɔ́ɔn mǎi khráp?', ind: 'Halo 7-Eleven! Mau sandwich panggang hangat?' }
        ],
        messages: [],
        chips: [
          {
            thai: 'อุ่นให้ด้วยครับ',
            roman: 'ùn hâi dûay khráp',
            ind: 'Tolong dipanaskan sekalian',
            reply: { thai: 'รอเวฟสักครู่ 2 นาทีนะครับ จะได้กรอบๆ', roman: 'rɔɔ wéep sàk-khrûu sɔ̌ɔng naa-thii ná khráp, jà dâi grɔ̀ɔp-grɔ̀ɔp', ind: 'Tunggu dihangatkan 2 menit ya, biar renyah!' }
          },
          {
            thai: 'ไม่รับถุงพลาสติกครับ',
            roman: 'mâi ráp thǔng phláat-sà-dtìk khráp',
            ind: 'Tidak perlu kantong plastik',
            reply: { thai: 'ขอบคุณที่ช่วยลดโลกร้อนครับ ยอดรวม 55 บาทครับ', roman: 'khɔ̀ɔp-khun thîi chûay lót lôok rɔ́ɔn khráp, yɔ̂ɔt ruam hâa-sìp-hâa bàat khráp', ind: 'Terima kasih bantu hemat plastik! Totalnya 55 Baht' }
          },
          {
            thai: 'จ่ายเงินสดครับ',
            roman: 'jàai ngoen sòt khráp',
            ind: 'Saya bayar tunai',
            reply: { thai: 'รับเงินมา 100 บาท ทอนเงิน 45 บาท ขอบคุณครับ!', roman: 'ráp ngoen maa nèung-rɔ́ɔi bàat, thɔɔn ngoen sìi-sìp-hâa bàat, khɔ̀ɔp-khun khráp!', ind: 'Uang diterima 100 Baht, kembalian 45 Baht, terima kasih!' }
          }
        ]
      },
      pharmacy: {
        id: 'pharmacy',
        category: 'layanan',
        categoryLabel: '💆 Layanan',
        title: 'Apotek & Konsultasi Obat',
        desc: 'Jelaskan gejala pusing, demam, sakit perut, dan aturan minum obat.',
        icon: '🏥',
        level: 'A2 Menengah',
        partnerName: 'Apoteker (Khun Mor Vipada)',
        partnerAvatar: '👩‍⚕️',
        partnerGender: 'female',
        partnerRole: 'Penutur Asli Wanita • Boots & Watsons Pharmacy',
        initialMessages: [
          { sender: 'ai', thai: 'สวัสดีค่ะ รู้สึกไม่สบายตรงไหน ปรึกษาได้นะคะ', roman: 'sà-wàt-dii khâ, rúu-sèuk mâi sà-baai dtrong nǎi, bprèuk-sǎa dâi ná khá', ind: 'Halo, merasa kurang enak badan di bagian mana? Boleh konsultasi ya' }
        ],
        messages: [],
        chips: [
          {
            thai: 'ปวดหัวและมีไข้ครับ',
            roman: 'bpùat hǔa láe mii khâi khráp',
            ind: 'Sakit kepala dan meriang/demam',
            reply: { thai: 'มียาลดไข้พาราเซตามอล ทานครั้งละ 1 เม็ดนะคะ', roman: 'mii yaa lót khâi phaa-raa-see-dtaa-mɔɔn, thaan khráng lá nèung mét ná khá', ind: 'Ada obat penurun demam Paracetamol, minum 1 butir per waktu ya' }
          },
          {
            thai: 'ปวดท้อง ท้องเสียครับ',
            roman: 'bpùat thɔ́ɔng, thɔ́ɔng sǐa khráp',
            ind: 'Sakit perut dan diare',
            reply: { thai: 'ดื่มผงเกลือแร่โออาร์เอส และทานยาแก้อักเสบในลำไส้นะคะ', roman: 'dèum phǒng glǔea-râae oo-aa-et, láe thaan yaa gâae àk-sèep nai lam-sâi ná khá', ind: 'Minum larutan oralit ORS dan tablet lambung ya' }
          },
          {
            thai: 'ทานก่อนหรือหลังอาหารครับ',
            roman: 'thaan gɔ̀ɔn rǔue lǎng aa-hǎan khráp',
            ind: 'Diminum sebelum atau sesudah makan?',
            reply: { thai: 'ทานหลังอาหารทันที แล้วดื่มน้ำตามมากๆ ค่ะ', roman: 'thaan lǎng aa-hǎan than-thii, láew dèum náam dtaam mâak-mâak khâ', ind: 'Minum segera sesudah makan dan perbanyak minum air ya' }
          }
        ]
      },
      bts: {
        id: 'bts',
        category: 'transport',
        categoryLabel: '🛺 Transport',
        title: 'Stasiun BTS Skytrain & Beli Tiket',
        desc: 'Beli single pass ke Siam, top up Rabbit card, dan tanya jalur transit.',
        icon: '🚊',
        level: 'A1 Dasar',
        partnerName: 'Petugas Loket BTS (Khun Nat)',
        partnerAvatar: '🚊',
        partnerGender: 'male',
        partnerRole: 'Penutur Asli Pria • BTS Skytrain Station',
        initialMessages: [
          { sender: 'ai', thai: 'สวัสดีครับ ซื้อตั๋วไปสถานีไหนดีครับ?', roman: 'sà-wàt-dii khráp, súue dtǔa pai sà-thǎa-nii nǎi dii khráp?', ind: 'Halo, mau beli tiket ke stasiun mana?' }
        ],
        messages: [],
        chips: [
          {
            thai: 'ไปสยามสองใบครับ',
            roman: 'pai sà-yǎam sɔ̌ɔng bai khráp',
            ind: 'Ke stasiun Siam 2 tiket',
            reply: { thai: 'ไปสถานีสยาม 2 ใบ รวมเป็น 88 บาทครับ', roman: 'pai sà-thǎa-nii sà-yǎam sɔ̌ɔng bai, ruam pen bpàaet-sìp-bpàaet bàat khráp', ind: 'Ke stasiun Siam 2 tiket, totalnya 88 Baht ya' }
          },
          {
            thai: 'เติมเงินบัตรแรบบิทหนึ่งร้อยบาทครับ',
            roman: 'dtəəm ngoen bàt ráep-bìt nèung-rɔ́ɔi bàat khráp',
            ind: 'Isi ulang saldo Rabbit Card 100 Baht',
            reply: { thai: 'แตะบัตรตรงนี้ได้เลยครับ เติมเรียบร้อยแล้ว', roman: 'dtàe bàt dtrong níi dâi loei khráp, dtəəm rîap-rɔ́ɔy láew', ind: 'Tempelkan kartu di sini, sudah berhasil diisi ulang' }
          },
          {
            thai: 'ต้องเปลี่ยนสายที่ไหนครับ',
            roman: 'dtɔ̂ɔng bplìian sǎai thîi nǎi khráp',
            ind: 'Harus transit/pindah jalur di stasiun mana?',
            reply: { thai: 'เปลี่ยนสายสีเขียวเข้มที่สถานีสยาม ชั้น 3 ครับ', roman: 'bplìian sǎai sǐi-kǐao khêm thîi sà-thǎa-nii sà-yǎam chán sǎam khráp', ind: 'Pindah ke Silom Line hijau tua di stasiun Siam lantai 3 ya' }
          }
        ]
      },
      fruit: {
        id: 'fruit',
        category: 'kuliner',
        categoryLabel: '🍜 Kuliner',
        title: 'Beli Buah Tropis di Pasar Malam',
        desc: 'Beli mangga manis Nam Dok Mai, minta dipotongkan, dan kelapa muda.',
        icon: '🥭',
        level: 'A1 Dasar',
        partnerName: 'Penjual Buah (Mae Somjit)',
        partnerAvatar: '🥭',
        partnerGender: 'female',
        partnerRole: 'Penutur Asli Wanita • Yaowarat Night Market',
        initialMessages: [
          { sender: 'ai', thai: 'มะม่วงหวานๆ ทุเรียนหอมๆ จ้า ชิมดูก่อนได้นะ!', roman: 'má-mûang wǎan-wǎan, thú-riian hɔ̌ɔm-hɔ̌ɔm jâa, chim duu gɔ̀ɔn dâi ná!', ind: 'Mangga manis, durian wangi! Boleh cicip dulu ya!' }
        ],
        messages: [],
        chips: [
          {
            thai: 'ขอมะม่วงสุกหนึ่งกิโลครับ',
            roman: 'khɔ̌ɔ má-mûang sùk nèung gì-loo khráp',
            ind: 'Minta mangga matang 1 kilogram',
            reply: { thai: 'มะม่วงน้ำดอกไม้หวานฉ่ำ กิโลละ 80 บาทจ้า', roman: 'má-mûang nám-dɔ̀ɔk-máai wǎan-chàm, gì-loo lá bpàaet-sìp bàat jâa', ind: 'Mangga Nam Dok Mai manis segar, 80 Baht per kilo ya' }
          },
          {
            thai: 'ช่วยหั่นให้ด้วยครับ',
            roman: 'chûay hàn hâi dûay khráp',
            ind: 'Tolong sekalian dipotongkan ya',
            reply: { thai: 'หั่นใส่กล่องพร้อมไม้จิ้มให้เรียบร้อยจ้ะ!', roman: 'hàn sài glɔ̀ɔng phrɔ́ɔm máai-jîm hâi rîap-rɔ́ɔy jà!', ind: 'Sudah dipotong rapi dalam kotak plus tusukan!' }
          },
          {
            thai: 'ขอมะพร้าวหวานๆ หนึ่งลูกครับ',
            roman: 'khɔ̌ɔ má-phráao wǎan-wǎan nèung lûuk khráp',
            ind: 'Minta satu butir kelapa muda yang manis',
            reply: { thai: 'มะพร้าวน้ำหอมบ้านแพ้ว เฉาะสดๆ น้ำหวานชื่นใจจ้า', roman: 'má-phráao nám-hɔ̌ɔm bâan-phâaeo, chɔ̀ sòt-sòt, náam wǎan chûen-jai jâa', ind: 'Kelapa wangi Ban Phaeo, dipapas segar airnya manis sejuk!' }
          }
        ]
      },
      photo: {
        id: 'photo',
        category: 'wisata',
        categoryLabel: '📸 Wisata',
        title: 'Kenalan & Minta Tolong Foto di Wat Arun',
        desc: 'Minta tolong ambil foto dengan latar candi, kenalan ramah, dan cerita asal negara.',
        icon: '📸',
        level: 'A1 Dasar',
        partnerName: 'Mahasiswa Lokal (Nong Chai)',
        partnerAvatar: '📸',
        partnerGender: 'male',
        partnerRole: 'Penutur Asli Pria • Bangkok University Student',
        initialMessages: [
          { sender: 'ai', thai: 'สวัสดีครับ มาคนเดียวเหรอครับ วิวตรงนี้สวยมากเลยนะ', roman: 'sà-wàt-dii khráp, maa khon diao rɔ̌ɔ khráp? wio dtrong níi sǔay mâak loei ná', ind: 'Halo! Jalan sendiri ya? Pemandangan di sini bagus sekali' }
        ],
        messages: [],
        chips: [
          {
            thai: 'ช่วยถ่ายรูปให้หน่อยได้ไหมครับ',
            roman: 'chûay thàai-rûup hâi nɔ̀ɔy dâi mǎi khráp',
            ind: 'Bisa tolong bantu ambilkan foto?',
            reply: { thai: 'ได้เลยครับ! ยืนตรงนี้เลย วิวพระปรางค์สวยมาก 1..2..3 แชะ!', roman: 'dâi loei khráp! yuun dtrong níi loei, wio phrá-bpraang sǔay mâak, nèung..sɔ̌ɔng..sǎam cháe!', ind: 'Bisa sekali! Berdiri di sini ya, pagoda Wat Arun terlihat indah. 1..2..3 Cekrek!' }
          },
          {
            thai: 'ผมมาจากประเทศอินโดนีเซียครับ',
            roman: 'phǒm maa jàak bprà-thêet in-doo-nii-siia khráp',
            ind: 'Saya berasal dari negara Indonesia',
            reply: { thai: 'ยินดีที่ได้รู้จักครับ! คนอินโดนีเซียน่ารักและเป็นมิตรมากครับ', roman: 'yin-dii thîi dâi rúu-jàk khráp! khon in-doo-nii-siia nâa-rák láe pen mít mâak khráp', ind: 'Senang berkenalan! Orang Indonesia ramah dan baik hati sekali' }
          },
          {
            thai: 'กรุงเทพฯ สวยและของกินอร่อยมากครับ',
            roman: 'grung-thêep sǔay láe khɔ̌ɔng-gin a-rɔ̀ɔy mâak khráp',
            ind: 'Bangkok sangat indah dan makanannya enak-enak',
            reply: { thai: 'ขอบคุณครับ! อย่าลืมไปลองผัดไทยกับล่องเรือแม่น้ำเจ้าพระยานะครับ', roman: 'khɔ̀ɔp-khun khráp! yàa luum bpai lɔɔng phàt-thai gàp lɔ̂ng-ruea mâae-náam jâao-phrá-yaa ná khráp', ind: 'Terima kasih! Jangan lupa coba Pad Thai dan naik kapal susur sungai Chao Phraya ya!' }
          }
        ]
      },
      taxi: {
        id: 'taxi',
        category: 'transport',
        categoryLabel: '🛺 Transport',
        title: 'Naik Taksi Meter Bangkok',
        desc: 'Minta nyalakan argo meter, pilih jalan biasa tanpa tol, dan turun di halte.',
        icon: '🚕',
        level: 'A1 Dasar',
        partnerName: 'Sopir Taksi (Lung Wichai)',
        partnerAvatar: '🚕',
        partnerGender: 'male',
        partnerRole: 'Penutur Asli Pria • Bangkok Meter Taxi',
        initialMessages: [
          { sender: 'ai', thai: 'สวัสดีครับ ไปที่ไหนครับ?', roman: 'sà-wàt-dii khráp, pai thîi nǎi khráp?', ind: 'Halo, mau pergi ke mana?' }
        ],
        messages: [],
        chips: [
          {
            thai: 'ไปสยามพารากอนครับ เปิดมิเตอร์ด้วยนะครับ',
            roman: 'pai sà-yǎam phaa-raa-gɔɔn khráp, bpə̀ət mí-dtə̂ə dûay ná khráp',
            ind: 'Pergi ke Siam Paragon, tolong nyalakan argo meter ya',
            reply: { thai: 'ได้ครับ เปิดมิเตอร์เรียบร้อยแล้วครับ ขึ้นทางด่วนไหม?', roman: 'dâi khráp, bpə̀ət mí-dtə̂ə rîap-rɔ́ɔy láew khráp, khêun thaang-dùan mǎi?', ind: 'Baik, argo sudah dinyalakan. Mau lewat jalan tol tidak?' }
          },
          {
            thai: 'ไม่ขึ้นทางด่วนครับ ไปทางธรรมดา',
            roman: 'mâi khêun thaang-dùan khráp, pai thaang tham-má-daa',
            ind: 'Tidak lewat tol, lewat jalan biasa saja',
            reply: { thai: 'โอเคครับ ถ้าทางธรรมดาอาจจะรถติดนิดหน่อยนะ', roman: 'oo-kee khráp, thâa thaang tham-má-daa àat jà rót dtìt nít-nɔ̀ɔy ná', ind: 'Oke, kalau jalan biasa mungkin agak macet sedikit ya' }
          },
          {
            thai: 'จอดตรงป้ายรถเมล์ข้างหน้าครับ',
            roman: 'jɔ̀ɔt dtrong bpâai rót-mee khâang-nâa khráp',
            ind: 'Tolong berhenti di dekat halte bus depan itu',
            reply: { thai: 'ได้เลยครับ ทั้งหมด 95 บาทครับ', roman: 'dâi loei khráp, tháng-mòt gâao-sìp-hâa bàat khráp', ind: 'Bisa, totalnya 95 Baht ya' }
          }
        ]
      },
      boat: {
        id: 'boat',
        category: 'transport',
        categoryLabel: '🛺 Transport',
        title: 'Perahu Cepat Chao Phraya Express',
        desc: 'Naik perahu bendera oranye ke Grand Palace, cek rute Iconsiam, dan jam operasional.',
        icon: '🚤',
        level: 'A1 Dasar',
        partnerName: 'Petugas Dermaga (Pii Orn)',
        partnerAvatar: '🚤',
        partnerGender: 'female',
        partnerRole: 'Penutur Asli Wanita • Chao Phraya Pier',
        initialMessages: [
          { sender: 'ai', thai: 'เรือด่วนเจ้าพระยาจ้า จะไปท่าเรือไหนคะ?', roman: 'ruea-dùan jâao-phrá-yaa jâa, jà pai thâa-ruea nǎi khá?', ind: 'Perahu cepat Chao Phraya! Mau ke dermaga mana?' }
        ],
        messages: [],
        chips: [
          {
            thai: 'ไปท่าช้าง พระบรมมหาราชวังครับ',
            roman: 'pai thâa-cháang, phrá bɔɔ-rom-má-hǎa-râat-chá-wang khráp',
            ind: 'Pergi ke dermaga Tha Chang, Grand Palace',
            reply: { thai: 'นั่งเรือธงส้มได้เลยค่ะ ค่าโดยสาร 16 บาทตลอดสาย!', roman: 'nâng ruea thong sôm dâi loei khâ, khâa dooy-sǎan sìp-hòk bàat dtà-lɔ̀ɔt sǎai!', ind: 'Bisa naik kapal bendera oranye, tarif 16 Baht flat!' }
          },
          {
            thai: 'เรือลำนี้จอดไอคอนสยามไหมครับ',
            roman: 'ruea lam níi jɔ̀ɔt ai-khɔ̂ɔn sà-yǎam mǎi khráp',
            ind: 'Apakah perahu ini berhenti di dermaga Iconsiam?',
            reply: { thai: 'ลำนี้ไม่จอดค่ะ ต้องข้ามไปขึ้นเรือข้ามฟากท่าเรือตรงข้ามนะคะ', roman: 'lam níi mâi jɔ̀ɔt khâ, dtɔ̂ng khâam bpai khêun ruea khâam-fâak thâa-ruea dtrong-khâam ná khá', ind: 'Yang ini tidak berhenti, harus seberang naik kapal penyeberangan di dermaga seberang ya' }
          },
          {
            thai: 'เรือหมดกี่โมงครับ',
            roman: 'ruea mòt gìi moong khráp',
            ind: 'Perahu terakhir habis jam berapa?',
            reply: { thai: 'เรือเที่ยวสุดท้ายหมดหนึ่งทุ่มตรงค่ะ อย่ากลับดึกนะ!', roman: 'ruea thîao sùt-tháai mòt nèung thûm dtrong khâ, yàa glàp dèuk ná!', ind: 'Perahu terakhir habis jam 7 malam tepat, jangan pulang kemalaman ya!' }
          }
        ]
      },
      simcard: {
        id: 'simcard',
        category: 'layanan',
        categoryLabel: '💆 Layanan',
        title: 'Beli SIM Card Wisatawan AIS / True',
        desc: 'Beli paket internet 5G unlimited 8 hari, registrasi paspor, dan aktivasi langsung.',
        icon: '📱',
        level: 'A1 Dasar',
        partnerName: 'Staf Operator (Nong May)',
        partnerAvatar: '📱',
        partnerGender: 'female',
        partnerRole: 'Penutur Asli Wanita • AIS Telecom Airport',
        initialMessages: [
          { sender: 'ai', thai: 'สวัสดีค่ะ สนใจซิมการ์ดท่องเที่ยวสำหรับเล่นเน็ตไหมคะ?', roman: 'sà-wàt-dii khâ, sǒn-jai sim-gàat thɔ̂ng-thîao sǎm-ràp lên nét mǎi khá?', ind: 'Halo! Berminat SIM card wisata untuk internetan?' }
        ],
        messages: [],
        chips: [
          {
            thai: 'ขอซิมเน็ตไม่อั้น 8 วันครับ',
            roman: 'khɔ̌ɔ sim nét mâi-ân bpàaet wan khráp',
            ind: 'Minta paket SIM internet unlimited 8 hari',
            reply: { thai: 'แนะนำแพ็กเกจ 8 วัน เน็ต 5G ไม่จำกัด 299 บาทค่ะ!', roman: 'náe-nam pháaek-gèet bpàaet wan, nét hâa-jii mâi jam-gàt sɔ̌ɔng-rɔ́ɔi gâao-sìp-gâao bàat khâ!', ind: 'Rekomendasi paket 8 hari, internet 5G unlimited 299 Baht!' }
          },
          {
            thai: 'ต้องลงทะเบียนพาสปอร์ตไหมครับ',
            roman: 'dtɔ̂ng long-thá-biian phâat-sà-bpɔ̀ɔt mǎi khráp',
            ind: 'Apakah wajib registrasi paspor?',
            reply: { thai: 'ต้องใช้พาสปอร์ตตัวจริงลงทะเบียนตามกฎหมายค่ะ', roman: 'dtɔ̂ng chái phâat-sà-bpɔ̀ɔt dtua jing long-thá-biian dtaam gòt-mǎai khâ', ind: 'Wajib pakai paspor asli untuk registrasi sesuai undang-undang ya' }
          },
          {
            thai: 'ช่วยเปลี่ยนซิมและตั้งค่าให้ด้วยครับ',
            roman: 'chûay bplìian sim láe dtâng-khâa hâi dûay khráp',
            ind: 'Tolong bantu ganti SIM card dan setting ya',
            reply: { thai: 'ยินดีค่ะ ใส่ซิมให้แล้ว เปิดใช้งานเน็ตได้ทันทีเลยค่ะ!', roman: 'yin-dii khâ, sài sim hâi láew, bpə̀ət chái-ngaan nét dâi than-thii loei khâ!', ind: 'Dengan senang hati, SIM sudah dipasang, internet langsung aktif!' }
          }
        ]
      },
      supermarket: {
        id: 'supermarket',
        category: 'belanja',
        categoryLabel: '🛍️ Belanja',
        title: 'Belanja Oleh-Oleh di Big C Rajdamri',
        desc: 'Cari teh bubuk & rumput laut, fasilitas packing kardus pesawat, dan Tax Refund.',
        icon: '🛒',
        level: 'A1 Dasar',
        partnerName: 'Staf Big C (Khun Keng)',
        partnerAvatar: '🛒',
        partnerGender: 'male',
        partnerRole: 'Penutur Asli Pria • Big C Supercenter',
        initialMessages: [
          { sender: 'ai', thai: 'สวัสดีครับ ได้ของฝากครบหรือยังครับ มีอะไรให้ช่วยไหม?', roman: 'sà-wàt-dii khráp, dâi khɔ̌ɔng-fàak khróp rǔue yang khráp? mii a-rai hâi chûay mǎi?', ind: 'Halo! Oleh-olehnya sudah lengkap? Ada yang bisa dibantu?' }
        ],
        messages: [],
        chips: [
          {
            thai: 'ชาไทยผงกับสาหร่ายเถ้าแก่น้อยอยู่ล็อกไหนครับ',
            roman: 'chaa-thai phǒng gàp sǎa-râai thâo-gàae-nɔ́ɔy yùu lók nǎi khráp',
            ind: 'Bubuk teh Thai dan snack rumput laut ada di lorong mana?',
            reply: { thai: 'อยู่ล็อก 4 ตรงกลางห้างเลยครับ มีโปรโมชั่นซื้อ 2 แถม 1 ด้วย!', roman: 'yùu lók sìi dtrong glaang hâang loei khráp, mii bproo-moo-chân súue sɔ̌ɔng thǎaem nèung dûay!', ind: 'Ada di lorong 4 tengah toko, sedang ada promo beli 2 gratis 1!' }
          },
          {
            thai: 'มีบริการกล่องแพ็คของสำหรับโหลดขึ้นเครื่องไหมครับ',
            roman: 'mii bɔɔ-rí-gaan glɔ̀ɔng pháaek khɔ̌ɔng sǎm-ràp lòot khêun khrûeang mǎi khráp',
            ind: 'Apakah ada kardus untuk packing bagasi pesawat?',
            reply: { thai: 'มีจุดแพ็คกล่องฟรีอยู่หลังเคาน์เตอร์แคชเชียร์ครับ', roman: 'mii jùt pháaek glɔ̀ɔng frii yùu lǎng khao-dtə̂ə khâaet-chia khráp', ind: 'Ada konter packing kardus gratis di belakang kasir' }
          },
          {
            thai: 'ขอเอกสารทำ Tax Refund ด้วยครับ',
            roman: 'khɔ̌ɔ èek-gà-sǎan tham tháaek-rii-fân dûay khráp',
            ind: 'Minta dokumen formulir untuk Tax Refund (bebas pajak turis)',
            reply: { thai: 'ยอดเกิน 2,000 บาท นำใบเสร็จไปยื่นที่เคาน์เตอร์ได้เลยครับ', roman: 'yɔ̂ɔt goen sɔ̌ɔng phan bàat, nam bai-sèt bpai yêun thîi khao-dtə̂ə dâi loei khráp', ind: 'Total belanja di atas 2,000 Baht, bawa struk ke loket Tax Refund lantai 2 ya' }
          }
        ]
      },
      temple: {
        id: 'temple',
        category: 'wisata',
        categoryLabel: '🏨 Wisata',
        title: 'Masuk Kuil Wat Pho & Sewa Sarung',
        desc: 'Beli tiket masuk patung Buddha tidur, sewa kain sarung penutup, dan aturan foto.',
        icon: '🛕',
        level: 'A1 Dasar',
        partnerName: 'Petugas Kuil (Mae Buppha)',
        partnerAvatar: '🛕',
        partnerGender: 'female',
        partnerRole: 'Penutur Asli Wanita • Wat Pho Temple Staff',
        initialMessages: [
          { sender: 'ai', thai: 'สวัสดีจ้า จะเข้าไปไหว้พระนอนด้านในใช่ไหมจ๊ะ?', roman: 'sà-wàt-dii jâa, jà khâo bpai wâi phrá nɔɔn dâan-nai châi mǎi jǎ?', ind: 'Halo! Mau masuk beribadah ke patung Buddha tidur di dalam kan?' }
        ],
        messages: [],
        chips: [
          {
            thai: 'ตั๋วเข้าชมราคาเท่าไหร่ครับ',
            roman: 'dtǔa khâo chom raa-khaa thâo-rài khráp',
            ind: 'Tiket masuk harganya berapa?',
            reply: { thai: 'ตั๋วคนละ 200 บาทจ้า ได้รับน้ำดื่มฟรีหนึ่งขวดด้วยนะ!', roman: 'dtǔa khon lá sɔ̌ɔng-rɔ́ɔi bàat jâa, dâi ráp náam dèum frii nèung khùat dûay ná!', ind: 'Tiket 200 Baht per orang, dapat gratis sebotol air minum juga!' }
          },
          {
            thai: 'ใส่กางเกงขาสั้นเข้าได้ไหมครับ',
            roman: 'sài gaang-geeng khǎa-sân khâo dâi mǎi khráp',
            ind: 'Boleh pakai celana pendek masuk?',
            reply: { thai: 'กางเกงขาสั้นเข้าไม่ได้จ้ะ ต้องเช่าผ้าถุงตรงนี้ 20 บาทนะ', roman: 'gaang-geeng khǎa-sân khâo mâi dâi jà, dtɔ̂ng chao phâa-thǔng dtrong níi yîi-sìp bàat ná', ind: 'Celana pendek tidak boleh, harus sewa kain sarung di sini 20 Baht ya' }
          },
          {
            thai: 'ข้างในถ่ายรูปได้ไหมครับ',
            roman: 'khâang-nai thàai-rûup dâi mǎi khráp',
            ind: 'Di dalam kuil boleh ambil foto?',
            reply: { thai: 'ถ่ายรูปได้จ้า แต่กรุณาถอดรองเท้าและสำรวมกิริยาด้วยนะจ๊ะ', roman: 'thàai-rûup dâi jâa, dtàae gà-rú-naa thɔ̀ɔt rɔɔng-tháo láe sǎm-ruam gì-rí-yaa dûay ná jǎ', ind: 'Boleh foto, tapi tolong lepas alas kaki dan bersikap sopan ya!' }
          }
        ]
      },
      laundry: {
        id: 'laundry',
        category: 'layanan',
        categoryLabel: '💆 Layanan',
        title: 'Cuci Pakaian Kiloan di Laundry',
        desc: 'Cuci kering pakaian harian, tanya jam pengambilan, dan minta pewangi melati.',
        icon: '🧺',
        level: 'A1 Dasar',
        partnerName: 'Pemilik Laundry (Pii Wan)',
        partnerAvatar: '🧺',
        partnerGender: 'female',
        partnerRole: 'Penutur Asli Wanita • Bangkok Clean Laundry',
        initialMessages: [
          { sender: 'ai', thai: 'สวัสดีค่ะ มีผ้ามาส่งซักกี่กิโลคะ?', roman: 'sà-wàt-dii khâ, mii phâa maa sòng sák gìi gì-loo khá?', ind: 'Halo! Bawa pakaian untuk dicuci berapa kilo?' }
        ],
        messages: [],
        chips: [
          {
            thai: 'ซักและอบแห้งด้วยครับ ทั้งหมดสามกิโล',
            roman: 'sák láe òp-hâaeng dûay khráp, tháng-mòt sǎam gì-loo',
            ind: 'Cuci dan keringkan sekalian, total 3 kilogram',
            reply: { thai: 'ซักอบแห้งกิโลละ 50 บาท ทั้งหมด 150 บาทค่ะ!', roman: 'sák òp-hâaeng gì-loo lá hâa-sìp bàat, tháng-mòt nèung-rɔ́ɔi hâa-sìp bàat khâ!', ind: 'Cuci kering 50 Baht per kilo, totalnya 150 Baht ya!' }
          },
          {
            thai: 'มารับผ้าได้กี่โมงครับ',
            roman: 'maa ráp phâa dâi gìi moong khráp',
            ind: 'Bisa ambil pakaiannya jam berapa?',
            reply: { thai: 'ซักเสร็จพร้อมพับเรียบร้อยตอนหกโมงเย็นวันนี้ค่ะ', roman: 'sák sèt phrɔ́ɔm pháp rîap-rɔ́ɔy dtɔɔn hòk moong yen wan-níi khâ', ind: 'Selesai dan terlipat rapi jam 6 sore hari ini ya' }
          },
          {
            thai: 'ขอเพิ่มน้ำยาปรับผ้านุ่มหอมๆ ด้วยครับ',
            roman: 'khɔ̌ɔ phêem náam-yaa bpràp phâa-nûm hɔ̌ɔm-hɔ̌ɔm dûay khráp',
            ind: 'Minta tambah pelembut pewangi pakaian yang harum',
            reply: { thai: 'จัดให้ค่ะ ใช้น้ำยาปรับผ้านุ่มกลิ่นดอกมะลิหอมฟุ้งแน่นอนค่ะ!', roman: 'jàt hâi khâ, chái náam-yaa bpràp phâa-nûm glìn dɔ̀ɔk má-lí hɔ̌ɔm fúng nâae-nɔɔn khâ!', ind: 'Siap! Pakai pewangi aroma melati wangi semerbak pasti harum!' }
          }
        ]
      },
      money: {
        id: 'money',
        category: 'layanan',
        categoryLabel: '💆 Layanan',
        title: 'Tukar Uang di SuperRich Exchange',
        desc: 'Tukar Rupiah ke Baht, cek kurs harian, serahkan paspor, dan minta pecahan kecil.',
        icon: '💱',
        level: 'A2 Menengah',
        partnerName: 'Teller SuperRich (Khun Thanat)',
        partnerAvatar: '💱',
        partnerGender: 'male',
        partnerRole: 'Penutur Asli Pria • SuperRich Green Exchange',
        initialMessages: [
          { sender: 'ai', thai: 'สวัสดีครับ ต้องการแลกเปลี่ยนเงินสกุลอะไรครับ?', roman: 'sà-wàt-dii khráp, dtɔ̂ng-gaan lâaek-bplìian ngoen sà-gun a-rai khráp?', ind: 'Halo, ingin tukar mata uang apa hari ini?' }
        ],
        messages: [],
        chips: [
          {
            thai: 'อยากแลกเงินรูเปียห์เป็นเงินบาทครับ',
            roman: 'yàak lâaek ngoen ruu-bpiia pen ngoen bàat khráp',
            ind: 'Mau tukar uang Rupiah Indonesia ke uang Baht Thai',
            reply: { thai: 'ได้ครับ วันนี้เรท 1,000 รูเปียห์เท่ากับ 2.2 บาทครับ', roman: 'dâi khráp, wan-níi rêet nèung phan ruu-bpiia thâo gàp sɔ̌ɔng jùt sɔ̌ɔng bàat khráp', ind: 'Bisa, kurs hari ini 1.000 Rupiah = 2.2 Baht ya' }
          },
          {
            thai: 'นี่เงินและพาสปอร์ตครับ',
            roman: 'nîi ngoen láe phâat-sà-bpɔ̀ɔt khráp',
            ind: 'Ini uang dan paspor asli saya',
            reply: { thai: 'รับเงินมาแล้วครับ ตรวจนับเงินบาทและใบเสร็จตรงนี้ด้วยนะครับ', roman: 'ráp ngoen maa láew khráp, dtrùat náp ngoen bàat láe bai-sèt dtrong níi dûay ná khráp', ind: 'Uang sudah diterima, tolong hitung uang Baht dan cek struk di depan ini ya' }
          },
          {
            thai: 'ขอธนบัตรใบละหนึ่งร้อยกับยี่สิบบาทด้วยครับ',
            roman: 'khɔ̌ɔ thá-ná-bàt bai lá nèung-rɔ́ɔi gàp yîi-sìp bàat dûay khráp',
            ind: 'Minta uang kertas pecahan 100 dan 20 Baht juga',
            reply: { thai: 'จัดให้ครับ มีแบงก์ร้อย 5 ใบ และแบงก์ยี่สิบ 10 ใบครับ', roman: 'jàt hâi khráp, mii báeng rɔ́ɔi hâa bai, láe báeng yîi-sìp sìp bai khráp', ind: 'Siap, ini uang kertas 100 ada 5 lembar dan pecahan 20 ada 10 lembar ya' }
          }
        ]
      },
      cinema: {
        id: 'cinema',
        category: 'wisata',
        categoryLabel: '🏨 Wisata',
        title: 'Nonton Bioskop di Paragon Cineplex',
        desc: 'Pesan kursi bioskop, tanya ketersediaan subtitle bahasa Inggris, dan etika lagu kerajaan.',
        icon: '🎬',
        level: 'A2 Menengah',
        partnerName: 'Staf Tiket Bioskop (Nong Praew)',
        partnerAvatar: '🎬',
        partnerGender: 'female',
        partnerRole: 'Penutur Asli Wanita • Paragon Cineplex',
        initialMessages: [
          { sender: 'ai', thai: 'สวัสดีค่ะ รับตั๋วหนังเรื่องอะไรดีคะ รอบกี่โมงดีคะ?', roman: 'sà-wàt-dii khâ, ráp dtǔa nǎng rûeang a-rai dii khá? rɔ̂ɔp gìi moong dii khá?', ind: 'Halo! Mau pesan tiket film apa dan jam tayang berapa?' }
        ],
        messages: [],
        chips: [
          {
            thai: 'ขอตั๋วสองที่นั่ง แถวตรงกลางครับ',
            roman: 'khɔ̌ɔ dtǔa sɔ̌ɔng thîi-nâng, thǎaeo dtrong glaang khráp',
            ind: 'Minta dua tiket film di baris tengah',
            reply: { thai: 'ที่นั่งแถว G ตรงกลางว่างค่ะ บัตรใบละ 260 บาทค่ะ', roman: 'thîi-nâng thǎaeo jii dtrong glaang wâang khâ, bàt bai lá sɔ̌ɔng-rɔ́ɔi hòk-sìp bàat khâ', ind: 'Kursi baris G di tengah masih kosong, tiket 260 Baht per kursi ya' }
          },
          {
            thai: 'มีซับไตเติลภาษาอังกฤษไหมครับ',
            roman: 'mii sáp-dtai-dtə̂n phaa-sǎa ang-grìt mǎi khráp',
            ind: 'Apakah ada subtitle bahasa Inggris?',
            reply: { thai: 'เรื่องนี้เสียงไทยและมีซับไตเติลภาษาอังกฤษชัดเจนค่ะ', roman: 'rûeang níi sǐang thai láe mii sáp-dtai-dtə̂n phaa-sǎa ang-grìt chát-jeen khâ', ind: 'Film ini audio bahasa Thai dengan subtitle bahasa Inggris jelas ya' }
          },
          {
            thai: 'ก่อนหนังฉายต้องยืนทำความเคารพเพลงสรรเสริญพระบารมีไหมครับ',
            roman: 'gɔ̀ɔn nǎng chǎai dtɔ̂ng yuun tham khwaam khao-róp phleeng sǎn-sə̌ən phrá-baa-rá-mii mǎi khráp',
            ind: 'Sebelum film mulai apakah harus berdiri menghormati lagu kerajaan?',
            reply: { thai: 'ใช่ค่ะ เมื่อได้ยินเสียงเพลงบรรเลง กรุณายืนตรงเพื่อแสดงความเคารพนะคะ', roman: 'châi khâ, mûea dâi-yin sǐang phleeng ban-leeng, gà-rú-naa yuun dtrong phûea sà-daeng khwaam khao-róp ná khá', ind: 'Benar, saat lagu penghormatan dimainkan, mohon berdiri tegak untuk menghormati ya' }
          }
        ]
      }
    };

    let activeRoleplayKey = 'cafe';
    let currentRoleplayCategory = 'all';
    let currentRoleplaySearch = '';

    function filterRoleplayScenarios(cat, btn) {
      playSynthSound('click');
      currentRoleplayCategory = cat;
      if (btn) {
        document.querySelectorAll('.scenario-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
      renderScenarioList();
    }

    function searchRoleplayScenarios(query) {
      currentRoleplaySearch = (query || '').toLowerCase().trim();
      renderScenarioList();
    }

    function renderScenarioList() {
      const container = document.getElementById('roleplayScenarioList');
      if (!container) return;

      const keys = Object.keys(ROLEPLAY_SCENARIOS).filter(key => {
        const s = ROLEPLAY_SCENARIOS[key];
        const matchCat = currentRoleplayCategory === 'all' || s.category === currentRoleplayCategory;
        const matchSearch = !currentRoleplaySearch ||
          s.title.toLowerCase().includes(currentRoleplaySearch) ||
          s.desc.toLowerCase().includes(currentRoleplaySearch) ||
          s.partnerName.toLowerCase().includes(currentRoleplaySearch);
        return matchCat && matchSearch;
      });

      const badge = document.getElementById('roleplayCountBadge');
      if (badge) badge.textContent = `${keys.length} Skenario`;

      if (keys.length === 0) {
        container.innerHTML = `
          <div style="text-align:center; padding:24px 12px; color:var(--text-muted); font-size:12px;">
            Tidak ada skenario yang sesuai dengan pencarian "${currentRoleplaySearch}".
          </div>
        `;
        return;
      }

      container.innerHTML = keys.map(key => {
        const s = ROLEPLAY_SCENARIOS[key];
        const isActive = key === activeRoleplayKey;
        return `
          <div class="scenario-card ${isActive ? 'active' : ''}" onclick="selectRoleplayScenario('${key}')">
            <div class="scenario-card-header">
              <div class="scenario-card-title-row">
                <span class="scenario-icon">${s.icon}</span>
                <h4>${s.title}</h4>
              </div>
              <span class="scenario-badge">${s.level}</span>
            </div>
            <p>${s.desc}</p>
            <div class="scenario-partner-tag">
              <span>${s.partnerAvatar}</span>
              <span>${s.partnerName} (${s.partnerGender === 'female' ? '👩 Wanita' : '👨 Pria'})</span>
            </div>
          </div>
        `;
      }).join('');
    }

    function renderRoleplayChat() {
      const data = ROLEPLAY_SCENARIOS[activeRoleplayKey];
      if (!data) return;

      // Initialize messages from initialMessages if empty
      if (!data.messages || data.messages.length === 0) {
        data.messages = JSON.parse(JSON.stringify(data.initialMessages));
      }

      // Update partner header elements
      const partnerNameEl = document.getElementById('roleplayPartnerName');
      const partnerAvatarEl = document.getElementById('roleplayPartnerAvatar');
      const partnerStatusEl = document.getElementById('roleplayPartnerStatus');
      if (partnerNameEl) partnerNameEl.textContent = data.partnerName;
      if (partnerAvatarEl) partnerAvatarEl.textContent = data.partnerAvatar;
      if (partnerStatusEl) {
        partnerStatusEl.textContent = `● Online • ${data.partnerRole || (data.partnerGender === 'female' ? 'Penutur Asli Wanita' : 'Penutur Asli Pria')}`;
      }

      const userGender = appState.speakerGender || 'female';
      const aiGender = data.partnerGender || 'female';
      const container = document.getElementById('roleplayChatMessages');
      if (container) {
        container.innerHTML = data.messages.map(m => {
          const msgGender = m.sender === 'user' ? userGender : aiGender;
          return `
            <div class="chat-bubble ${m.sender === 'ai' ? 'bubble-ai' : 'bubble-user'}">
              <span class="bubble-thai" onclick="speakThai('${m.thai}', '${msgGender}')" title="Klik untuk mendengar suara penutur asli Bangkok" style="cursor:pointer;">
                ${m.thai} <span style="font-size:13px; opacity:0.8; vertical-align:middle;">🔊</span>
              </span>
              <div style="font-size:12px; opacity:0.85; font-family:var(--font-mono);">${m.roman}</div>
              <div style="font-size:12px; margin-top:2px;">${m.ind}</div>
              <button class="bubble-audio-btn" onclick="speakThai('${m.thai}', '${msgGender}')" style="${m.sender === 'user' ? 'color:#ffffff; opacity:0.95;' : ''}">
                🔊 Dengar Suara Asli (${msgGender === 'male' ? '👨 Pria' : '👩 Wanita'})
              </button>
            </div>
          `;
        }).join('');
        container.scrollTop = container.scrollHeight;
      }

      const chipsContainer = document.getElementById('roleplayQuickChips');
      if (chipsContainer) {
        chipsContainer.innerHTML = data.chips.map((c, index) => {
          const isQuestion = /[?？ไหม|มั้ย|หรือ|อะไร|ที่ไหน|เมื่อไหร่|เท่าไหร่|กี่|ใคร|ทำไม]/.test(c.thai);
          const fThai = formatThaiForGender(c.thai, userGender);
          const fRoman = formatRomanForGender(c.roman, userGender, isQuestion);
          return `
            <button class="speech-chip" onclick="userSendRoleplayMessage(${index})" title="Kirim & Dengarkan lafal asli: ${fRoman}">
              <span>${fThai}</span>
              <span class="chip-speaker-tag" onclick="event.stopPropagation(); speakThai('${fThai}', '${userGender}');" title="Dengarkan sebelum kirim">🔊</span>
            </button>
          `;
        }).join('');
      }

      updateGenderControls();
    }

    function selectRoleplayScenario(key) {
      playSynthSound('click');
      activeRoleplayKey = key;
      renderScenarioList();
      renderRoleplayChat();
      const s = ROLEPLAY_SCENARIOS[key];
      const firstMsg = s?.messages[0] || s?.initialMessages[0];
      if (firstMsg) {
        speakThai(firstMsg.thai, s.partnerGender || 'female');
      }
    }

    function resetRoleplay() {
      playSynthSound('click');
      const s = ROLEPLAY_SCENARIOS[activeRoleplayKey];
      if (s) {
        s.messages = JSON.parse(JSON.stringify(s.initialMessages));
      }
      renderRoleplayChat();
      showToast('Skenario berhasil diatur ulang.');
      const firstMsg = s?.messages[0];
      if (firstMsg) {
        speakThai(firstMsg.thai, s.partnerGender || 'female');
      }
    }

    function userSendRoleplayMessage(chipIndexOrThai, maybeRoman, maybeInd) {
      playSynthSound('click');
      const s = ROLEPLAY_SCENARIOS[activeRoleplayKey];
      if (!s) return;

      let userThai, userRoman, userInd, targetReply;
      const userGender = appState.speakerGender || 'female';

      if (typeof chipIndexOrThai === 'number') {
        const c = s.chips[chipIndexOrThai];
        if (!c) return;
        const isQuestion = /[?？ไหม|มั้ย|หรือ|อะไร|ที่ไหน|เมื่อไหร่|เท่าไหร่|กี่|ใคร|ทำไม]/.test(c.thai);
        userThai = formatThaiForGender(c.thai, userGender);
        userRoman = formatRomanForGender(c.roman, userGender, isQuestion);
        userInd = c.ind;
        targetReply = c.reply;
      } else {
        userThai = chipIndexOrThai;
        userRoman = maybeRoman || '';
        userInd = maybeInd || '';
        const found = s.chips.find(c => c.thai.includes(userThai) || userThai.includes(c.thai));
        targetReply = found ? found.reply : s.chips[0]?.reply;
      }

      s.messages.push({ sender: 'user', thai: userThai, roman: userRoman, ind: userInd });
      renderRoleplayChat();

      // Speak user sentence in user's gender
      speakThai(userThai, userGender);

      // AI Partner Response
      setTimeout(() => {
        playSynthSound('correct');
        const reply = targetReply || {
          thai: 'รับทราบครับ ยินดีช่วยเหลือเสมอครับ!',
          roman: 'ráp-sâap khráp, yin-dii chûay-lǔea sà-mə̌ə khráp!',
          ind: 'Baik, senang bisa membantu!'
        };
        s.messages.push({ sender: 'ai', thai: reply.thai, roman: reply.roman, ind: reply.ind });
        renderRoleplayChat();
        speakThai(reply.thai, s.partnerGender || 'female');
      }, 1500);
    }

    function triggerRoleplayMic() {
      playSynthSound('click');
      showToast('Bicara kalimat respon Anda sekarang...');
      const s = ROLEPLAY_SCENARIOS[activeRoleplayKey];
      if (s && s.chips.length > 0) {
        setTimeout(() => userSendRoleplayMessage(0), 1400);
      }
    }

    function setRoleplayGender(gender) {
      setAppSpeakerGender(gender);
      renderRoleplayChat();
    }

    /* 6. 5 TONES & PHONETICS DATA (Lazy Loaded from data/alphabet.json) */
    let THAI_TONES = window.THAI_TONES || [];
    function renderTonesGrid() {
      const container = document.getElementById('tonesContainer');
      container.innerHTML = THAI_TONES.map(t => `
        <div class="tone-pitch-box">
          <div class="tone-svg-contour">
            <svg viewBox="0 0 100 50">
              <path d="${t.freq}" fill="none" stroke="var(--primary)" stroke-width="4" stroke-linecap="round"/>
            </svg>
          </div>
          <div>
            <h4 onclick="speakThai('${t.thai.split(' ')[0]}')" style="cursor:pointer;" title="Klik dengar nama nada asli: ${t.thai}">
              ${t.name} <span style="font-size:13px; color:var(--primary); font-family:var(--font-thai);">(${t.thai}) 🔊</span>
            </h4>
            <p>${t.desc}</p>
          </div>
          <div class="tone-examples-wrap">
            ${t.examples.map(ex => `
              <button class="tone-example-tag" onclick="speakThai('${ex.word}')" title="Klik dengar penutur asli Thai: ${ex.word}">
                🔊 ${ex.word} <span style="font-size:11px; font-weight:normal; opacity:0.85;">(${ex.roman})</span>
              </button>
            `).join('')}
          </div>
          <div style="display:flex; justify-content:flex-end;">
            <button class="btn-audio-listen" style="font-size:11px; padding:4px 10px;" onclick="playTonePitchAudio(${t.pitch}, ${t.endPitch || t.pitch})">
              ▶ Uji Pitch Synth
            </button>
          </div>
        </div>
      `).join('');
    }

    function playTonePitchAudio(startFreq, endFreq) {
      if (!appState.soundEnabled) return;
      try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(startFreq, now);
        osc.frequency.linearRampToValueAtTime(endFreq, now + 0.35);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.36);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.38);
      } catch (e) {
        console.warn(e);
      }
    }

    /* FULL 44 THAI CONSONANTS & ALPHABET DATA (Lazy Loaded from data/alphabet.json) */
    let THAI_CONSONANTS = window.THAI_CONSONANTS || [];
    let THAI_VOWELS = window.THAI_VOWELS || [];
    let THAI_TONE_MARKS = window.THAI_TONE_MARKS || [];
    let THAI_NUMERALS = window.THAI_NUMERALS || [];
    let currentAlphabetFilter = 'all';
    let currentAlphabetSearch = '';

    function getAlphabetBadgeInfo(cls) {
      switch (cls) {
        case 'mid': return { label: 'Tengah', badgeClass: 'badge-mid' };
        case 'high': return { label: 'Tinggi', badgeClass: 'badge-high' };
        case 'low': return { label: 'Rendah', badgeClass: 'badge-low' };
        case 'vowel': return { label: 'Vokal', badgeClass: 'badge-vowel' };
        case 'tone-mark': return { label: 'Tanda Nada', badgeClass: 'badge-tone-mark' };
        case 'numeral': return { label: 'Angka', badgeClass: 'badge-numeral' };
        default: return { label: 'Konsonan', badgeClass: 'badge-mid' };
      }
    }

    function renderAlphabetMatrix(filter = currentAlphabetFilter) {
      currentAlphabetFilter = filter;
      const container = document.getElementById('alphabetMatrix');
      if (!container) return;

      let allPool = [];
      if (filter === 'all') {
        allPool = THAI_CONSONANTS;
      } else if (filter === 'mid' || filter === 'high' || filter === 'low') {
        allPool = THAI_CONSONANTS.filter(c => c.class === filter);
      } else if (filter === 'vowel') {
        allPool = THAI_VOWELS;
      } else if (filter === 'tone-mark') {
        allPool = THAI_TONE_MARKS;
      } else if (filter === 'numeral') {
        allPool = THAI_NUMERALS;
      } else {
        allPool = THAI_CONSONANTS;
      }

      // Apply Search Filter if any
      const q = currentAlphabetSearch.toLowerCase().trim();
      let filtered = allPool;
      if (q) {
        filtered = allPool.filter(item =>
          (item.thai && item.thai.toLowerCase().includes(q)) ||
          (item.spoken && item.spoken.toLowerCase().includes(q)) ||
          (item.roman && item.roman.toLowerCase().includes(q)) ||
          (item.meaning && item.meaning.toLowerCase().includes(q))
        );
      }

      const counter = document.getElementById('alphabetResultCounter');
      if (counter) {
        counter.textContent = `Menampilkan ${filtered.length} huruf`;
      }

      if (filtered.length === 0) {
        container.innerHTML = `
          <div style="grid-column: 1 / -1; text-align:center; padding:36px; background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); color:var(--text-muted);">
            <div style="font-size:28px; margin-bottom:8px;">🔍</div>
            <p style="font-size:14px; margin:0;">Tidak ditemukan huruf yang cocok dengan "<strong>${currentAlphabetSearch}</strong>"</p>
            <button class="pill-filter" onclick="document.getElementById('alphabetSearchInput').value=''; onAlphabetSearch('');" style="margin-top:12px;">Reset Pencarian</button>
          </div>
        `;
        return;
      }

      container.innerHTML = filtered.map(c => {
        const info = getAlphabetBadgeInfo(c.class);
        const speakTarget = c.spoken || c.thai.replace('-', '').trim();
        return `
          <div class="glyph-card" onclick="speakThai('${speakTarget}')" title="Klik dengar pelafalan penutur Bangkok: ${c.spoken || c.thai}">
            <div class="glyph-card-header">
              <span class="glyph-badge ${info.badgeClass}">${info.label}</span>
              <div style="display:flex; align-items:center; gap:6px;">
                <button type="button" class="icon-btn-compact" onclick="event.stopPropagation(); jumpToWritingChar('${c.thai}');" title="Latih tulis aksara ini di Kanvas Digital" style="width:24px; height:24px; font-size:12px; border-radius:50%; padding:0; display:grid; place-items:center; background:rgba(16,185,129,0.15); color:var(--emerald); border:none; cursor:pointer;">✍️</button>
                <span class="glyph-audio-icon">🔊</span>
              </div>
            </div>
            <div class="glyph-thai">${c.thai}</div>
            <div class="glyph-font-variants-bar" title="Perbandingan 3 Ragam Tulisan: Berloop • Tanpa Loop • Tulis Tangan">
              <span class="variant-chip font-var-looped" style="font-family:var(--font-thai-looped);" title="Standar Berloop (Noto Sans Thai)">${c.thai}</span>
              <span class="variant-chip font-var-loopless" style="font-family:var(--font-thai-loopless);" title="Modern Tanpa Loop (Kanit / BTS)">${c.thai}</span>
              <span class="variant-chip font-var-hand" style="font-family:var(--font-thai-handwritten);" title="Tulisan Tangan Santai (Mali)">${c.thai}</span>
            </div>
            <div class="glyph-spoken">${c.spoken || ''}</div>
            <div class="glyph-roman">${c.roman}</div>
            <div class="glyph-meaning">${c.meaning}</div>
          </div>
        `;
      }).join('');
    }

    function filterAlphabetGrid(type, btn) {
      playSynthSound('click');
      const pillsContainer = document.getElementById('alphabetCategoryPills');
      if (pillsContainer) {
        pillsContainer.querySelectorAll('.pill-filter').forEach(p => p.classList.remove('active'));
      }
      if (btn) btn.classList.add('active');
      renderAlphabetMatrix(type);
    }

    function onAlphabetSearch(val) {
      currentAlphabetSearch = val || '';
      renderAlphabetMatrix(currentAlphabetFilter);
    }

    /* ALPHABET INTERACTIVE MINI-QUIZ ENGINE */
    let currentQuizLetter = null;

    function initAlphabetMiniQuiz() {
      if (!THAI_CONSONANTS || THAI_CONSONANTS.length === 0) return;
      const target = THAI_CONSONANTS[Math.floor(Math.random() * THAI_CONSONANTS.length)];
      currentQuizLetter = target;

      const distractors = THAI_CONSONANTS
        .filter(c => c.thai !== target.thai)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      const options = [target, ...distractors].sort(() => 0.5 - Math.random());

      const elLetter = document.getElementById('quizPromptLetter');
      const elOpts = document.getElementById('quizLetterOptions');
      const elFeedback = document.getElementById('quizFeedbackMsg');
      if (elLetter && elOpts) {
        elLetter.textContent = target.thai;
        if (elFeedback) elFeedback.innerHTML = '';
        elOpts.innerHTML = options.map(opt => `
          <button type="button" class="quiz-option-btn" onclick="checkAlphabetQuizAnswer('${opt.thai}')">
            <strong>${opt.spoken}</strong>
            <small>(${opt.roman} • ${opt.meaning})</small>
          </button>
        `).join('');
      }
    }

    function checkAlphabetQuizAnswer(selectedThai) {
      if (!currentQuizLetter) return;
      const elFeedback = document.getElementById('quizFeedbackMsg');
      if (selectedThai === currentQuizLetter.thai) {
        playSynthSound('success');
        speakThai(currentQuizLetter.spoken);
        appState.xp += 5;
        saveState();
        updateTopMetrics();
        if (elFeedback) {
          elFeedback.innerHTML = `<span style="color:#52b788; font-weight:700;">🎉 Benar sekali! ${currentQuizLetter.spoken} (${currentQuizLetter.roman}) • +5 XP</span>`;
        }
        setTimeout(() => initAlphabetMiniQuiz(), 1600);
      } else {
        playSynthSound('error');
        if (elFeedback) {
          elFeedback.innerHTML = `<span style="color:#fb7185; font-weight:700;">Belum tepat, coba dengarkan lagi dengan klik huruf di atas!</span>`;
        }
      }
    }

    /* 7. NATIVE AUDIO PHRASEBOOK DATASET & ENGINE */
    const NATIVE_PHRASEBOOK = [
      // Salam & Sapaan
      { category: 'salam', thai: 'สวัสดีครับ', roman: 'sà-wàt-dii khráp', meaning: 'Halo / Salam sopan (pria)' },
      { category: 'salam', thai: 'สวัสดีค่ะ', roman: 'sà-wàt-dii khâ', meaning: 'Halo / Salam sopan (wanita)' },
      { category: 'salam', thai: 'สบายดีไหมครับ', roman: 'sà-baai dii mǎi khráp', meaning: 'Apa kabar? Sehat-sehat?' },
      { category: 'salam', thai: 'ยินดีที่ได้รู้จักครับ', roman: 'yin-dii thîi dâi rúu-jàk khráp', meaning: 'Senang berkenalan dengan Anda' },
      { category: 'salam', thai: 'แล้วพบกันใหม่ครับ', roman: 'láew phóp gan mài khráp', meaning: 'Sampai jumpa lagi!' },
      { category: 'salam', thai: 'โชคดีนะครับ', roman: 'chôok-dii ná khráp', meaning: 'Semoga beruntung / sukses' },

      // Kuliner & Kafe
      { category: 'makan', thai: 'ขอเมนูหน่อยครับ', roman: 'khɔ̌ɔ mee-nuu nɔ̀ɔy khráp', meaning: 'Bisa minta buku menu?' },
      { category: 'makan', thai: 'ขอผัดไทยหนึ่งจานครับ', roman: 'khɔ̌ɔ phàt-thai nèung jaan khráp', meaning: 'Minta satu porsi Pad Thai' },
      { category: 'makan', thai: 'ไม่ใส่พริกครับ', roman: 'mâi sài phrík khráp', meaning: 'Tolong jangan pakai cabe (tidak pedas)' },
      { category: 'makan', thai: 'อร่อยมากครับ', roman: 'a-rɔ̀y mâak khráp', meaning: 'Rasanya enak sekali!' },
      { category: 'makan', thai: 'เก็บเงินด้วยครับ', roman: 'gèp ngoen dûay khráp', meaning: 'Minta tagihan / bon meja' },
      { category: 'makan', thai: 'ขอน้ำเปล่าหนึ่งแก้วครับ', roman: 'khɔ̌ɔ náam-plào nèung gâew khráp', meaning: 'Minta satu gelas air putih' },

      // Pasar & Belanja
      { category: 'pasar', thai: 'อันนี้เท่าไหร่ครับ', roman: 'an-níi thâo-rài khráp', meaning: 'Berapa harga barang yang ini?' },
      { category: 'pasar', thai: 'ลดหน่อยได้ไหมครับ', roman: 'lót nɔ̀ɔy dâi mǎi khráp', meaning: 'Bisa minta diskon sedikit?' },
      { category: 'pasar', thai: 'แพงเกินไปครับ', roman: 'phaeng goen pai khráp', meaning: 'Terlalu mahal harganya' },
      { category: 'pasar', thai: 'มีสีอื่นไหมครับ', roman: 'mii sǐi ùen mǎi khráp', meaning: 'Apakah ada pilihan warna lain?' },
      { category: 'pasar', thai: 'เอาตัวนี้ครับ', roman: 'ao dtua níi khráp', meaning: 'Saya ambil yang ini ya' },

      // Arah & Transportasi
      { category: 'jalan', thai: 'ไปสนามบินเท่าไหร่ครับ', roman: 'pai sà-nǎam-bin thâo-rài khráp', meaning: 'Berapa ongkos ke bandara Suvarnabhumi?' },
      { category: 'jalan', thai: 'ตรงไปแล้วเลี้ยวซ้ายครับ', roman: 'dtrong pai láew líao sáai khráp', meaning: 'Lurus ke depan lalu belok kiri' },
      { category: 'jalan', thai: 'จอดที่นี่ด้วยครับ', roman: 'jɔ̀ɔt thîi nîi dûay khráp', meaning: 'Tolong berhenti di sini' },
      { category: 'jalan', thai: 'ห้องน้ำอยู่ที่ไหนครับ', roman: 'hɔ̂ng-náam yùu thîi nǎi khráp', meaning: 'Kamar kecil / toilet di sebelah mana?' },
      { category: 'jalan', thai: 'ไปสถานีรถไฟฟ้าครับ', roman: 'pai sà-thǎa-nii rót-fai-fáa khráp', meaning: 'Pergi ke stasiun BTS Skytrain' },

      // Kesopanan Penting
      { category: 'salam', thai: 'ขอบคุณมากครับ', roman: 'khɔ̀ɔp-khun mâak khráp', meaning: 'Terima kasih banyak (pria)' },
      { category: 'salam', thai: 'ขอโทษครับ', roman: 'khɔ̌ɔ-thôot khráp', meaning: 'Mohon maaf / permisi' },
      { category: 'salam', thai: 'ไม่เป็นไรครับ', roman: 'mâi pen rai khráp', meaning: 'Sama-sama / tidak apa-apa (santai)' }
    ];

    function renderPhrasebook(cat = 'all') {
      const container = document.getElementById('phrasebookContainer');
      if (!container) return;
      const list = (cat === 'all') ? NATIVE_PHRASEBOOK : NATIVE_PHRASEBOOK.filter(p => p.category === cat);

      container.innerHTML = list.map(p => {
        const isQuestion = /[?？ไหม|มั้ย|หรือ|อะไร|ที่ไหน|เมื่อไหร่|เท่าไหร่|กี่|ใคร|ทำไม]/.test(p.thai);
        const femThai = formatThaiForGender(p.thai, 'female');
        const femRoman = formatRomanForGender(p.roman, 'female', isQuestion);
        const maleThai = formatThaiForGender(p.thai, 'male');
        const maleRoman = formatRomanForGender(p.roman, 'male', isQuestion);
        const cleanMeaning = p.meaning.replace(/\s*\((pria|wanita)\)/gi, '');

        return `
          <div class="phrasebook-card">
            <div style="width:100%;">
              <div style="font-size:11px; font-weight:700; color:var(--text-muted); margin-bottom:8px; font-family:var(--font-mono); text-transform:uppercase;">
                ${p.category.toUpperCase()} • 2 GAYA PENUTUR
              </div>

              <!-- Female Version -->
              <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px dashed var(--border-color); gap:8px;">
                <div>
                  <div style="font-size:18px; font-weight:700; color:var(--text); cursor:pointer;" onclick="speakThai('${femThai}', 'female')" title="Klik dengar suara penutur wanita">
                    <span style="font-size:11px; color:var(--accent-gold); font-weight:800; margin-right:4px;">👩 WANITA:</span>
                    ${femThai}
                  </div>
                  <div style="font-size:12px; color:var(--text-muted);">${femRoman}</div>
                </div>
                <button class="btn-audio-listen" style="padding:4px 10px; font-size:11px; flex-shrink:0;" onclick="speakThai('${femThai}', 'female')" title="Dengar suara wanita (ค่ะ/คะ)">
                  🔊 Suara Wanita
                </button>
              </div>

              <!-- Male Version -->
              <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; margin-top:4px; gap:8px;">
                <div>
                  <div style="font-size:18px; font-weight:700; color:var(--text); cursor:pointer;" onclick="speakThai('${maleThai}', 'male')" title="Klik dengar suara penutur pria">
                    <span style="font-size:11px; color:var(--primary); font-weight:800; margin-right:4px;">👨 PRIA:</span>
                    ${maleThai}
                  </div>
                  <div style="font-size:12px; color:var(--text-muted);">${maleRoman}</div>
                </div>
                <button class="btn-audio-listen" style="padding:4px 10px; font-size:11px; flex-shrink:0;" onclick="speakThai('${maleThai}', 'male')" title="Dengar suara pria (ครับ)">
                  🔊 Suara Pria
                </button>
              </div>

              <div class="phrase-meaning" style="margin-top:10px;">${cleanMeaning}</div>
            </div>
          </div>
        `;
      }).join('');
    }

    function filterPhrasebook(cat, btn) {
      playSynthSound('click');
      document.querySelectorAll('#phrasebookCategoryPills .pill-filter').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      renderPhrasebook(cat);
    }

    /* ==========================================================================
       7.5. VOCABULARY BANK & DAILY MISSION SYSTEM (10 WORDS & 10-QUESTION QUIZ)
       ========================================================================== */
    /* VOCABULARY BANK (Lazy Loaded from data/dictionary.json) */
    let THAI_VOCAB_BANK = window.THAI_VOCAB_BANK || [];

    // State Variables for Vocabulary Module
    let currentVocabFocusIndex = 0;
    let currentVocabGridFilter = 'daily';
    let currentVocabViewMode = 'focus'; // 'focus' | 'grid' | 'quiz'

    // 10-Question Quiz State
    let vocabQuizState = {
      questions: [],
      currentIndex: 0,
      score: 0,
      isAnswered: false,
      selectedOpt: null
    };

    function getDailyVocabList() {
      return THAI_VOCAB_BANK.filter(v => v.isDaily);
    }

    function getFilteredVocabList(category) {
      if (category === 'daily') return getDailyVocabList();
      if (category === 'all') return THAI_VOCAB_BANK;
      return THAI_VOCAB_BANK.filter(v => v.category === category);
    }

    /* Initialize Vocabulary Module */
    function initVocabularyDailyMission() {
      updateVocabDailyMissionUI();
      renderVocabFocusCard();
      renderVocabGrid('daily');
    }

    /* Update Top Banner & Daily Progress Checklist */
    function updateVocabDailyMissionUI() {
      const studied = appState.vocabDailyMission.studiedWords || [];
      const studiedCount = studied.length;
      const isQuizDone = appState.vocabDailyMission.quizCompleted;

      // Date Format
      const dateEl = document.getElementById('vocabMissionDate');
      if (dateEl) {
        const d = new Date();
        const options = { weekday: 'short', day: 'numeric', month: 'short' };
        dateEl.textContent = d.toLocaleDateString('id-ID', options);
      }

      // Step 1: Words Counter & Progress
      const countEl = document.getElementById('stepWordsCount');
      const fillEl = document.getElementById('stepWordsFill');
      const cardStep1 = document.getElementById('questStepWordsCard');
      const iconStep1 = document.getElementById('stepWordsIcon');
      if (countEl) countEl.textContent = `${studiedCount} / 10 Kata`;
      if (fillEl) fillEl.style.width = `${Math.min(100, (studiedCount / 10) * 100)}%`;
      if (cardStep1) cardStep1.classList.toggle('completed', studiedCount >= 10);
      if (iconStep1) iconStep1.textContent = studiedCount >= 10 ? '✓' : '1';

      // Step 2: Quiz Status
      const quizScoreEl = document.getElementById('stepQuizScore');
      const quizFillEl = document.getElementById('stepQuizFill');
      const cardStep2 = document.getElementById('questStepQuizCard');
      const iconStep2 = document.getElementById('stepQuizIcon');

      if (quizScoreEl && quizFillEl && cardStep2 && iconStep2) {
        if (isQuizDone) {
          quizScoreEl.textContent = `Selesai (${appState.vocabDailyMission.quizScore || 10}/10) 🎉`;
          quizFillEl.style.width = '100%';
          quizFillEl.style.background = 'var(--primary)';
          cardStep2.classList.add('completed');
          cardStep2.classList.remove('locked');
          iconStep2.textContent = '✓';
        } else if (studiedCount >= 10) {
          quizScoreEl.textContent = 'Siap Dikerjakan! ⚡';
          quizFillEl.style.width = '0%';
          cardStep2.classList.remove('locked', 'completed');
          iconStep2.textContent = '2';
        } else {
          quizScoreEl.textContent = 'Terkunci 🔒';
          quizFillEl.style.width = '0%';
          cardStep2.classList.add('locked');
          cardStep2.classList.remove('completed');
          iconStep2.textContent = '2';
        }
      }

      // Status Tag
      const statusTag = document.getElementById('vocabMissionStatusTag');
      if (statusTag) {
        if (isQuizDone) {
          statusTag.className = 'daily-status-tag completed';
          statusTag.textContent = '🎉 Misi Tuntas (+50 XP, +20 Gems)';
        } else if (studiedCount >= 10) {
          statusTag.className = 'daily-status-tag active';
          statusTag.textContent = '⚡ Kuis Terbuka (1/2 Selesai)';
        } else {
          statusTag.className = 'daily-status-tag';
          statusTag.textContent = `Belum Selesai (${studiedCount}/10 Kata)`;
        }
      }

      // Action CTA Button
      const actionBtn = document.getElementById('btnVocabDailyAction');
      if (actionBtn) {
        if (isQuizDone) {
          actionBtn.textContent = 'Misi Selesai! Ulangi Kuis 🔄';
        } else if (studiedCount >= 10) {
          actionBtn.textContent = 'Mulai Kuis 10 Soal Sekarang ➔';
        } else {
          actionBtn.textContent = `Lanjut Pelajari (${studiedCount}/10) ➔`;
        }
      }

      // Locked Screen text
      const lockedText = document.getElementById('lockedCountText');
      if (lockedText) lockedText.textContent = `${studiedCount} / 10 Kata`;

      // Sub-nav pill badge for quiz
      const pillQuiz = document.getElementById('pillQuizStatus');
      if (pillQuiz) {
        pillQuiz.textContent = isQuizDone ? '✓' : (studiedCount >= 10 ? '⚡' : '🔒');
      }

      // Sidebar badge
      const sideBadge = document.getElementById('sidebarVocabBadge');
      if (sideBadge) {
        if (isQuizDone) {
          sideBadge.textContent = '✓ 10';
          sideBadge.classList.add('completed');
        } else if (studiedCount >= 10) {
          sideBadge.textContent = '⚡ Kuis';
          sideBadge.classList.remove('completed');
        } else {
          sideBadge.textContent = `${studiedCount}/10`;
          sideBadge.classList.remove('completed');
        }
      }
    }

    /* Switch between Focus Flashcard, Grid, and Quiz views */
    function switchVocabView(viewMode) {
      playSynthSound('click');
      currentVocabViewMode = viewMode;

      const views = {
        focus: document.getElementById('vocabViewFocus'),
        grid: document.getElementById('vocabViewGrid'),
        quiz: document.getElementById('vocabViewQuiz')
      };
      const buttons = {
        focus: document.getElementById('tabBtnVocabFocus'),
        grid: document.getElementById('tabBtnVocabGrid'),
        quiz: document.getElementById('tabBtnVocabQuiz')
      };

      Object.keys(views).forEach(k => {
        if (views[k]) views[k].style.display = (k === viewMode) ? 'block' : 'none';
        if (buttons[k]) buttons[k].classList.toggle('active', k === viewMode);
      });

      if (viewMode === 'focus') {
        renderVocabFocusCard();
      } else if (viewMode === 'grid') {
        renderVocabGrid(currentVocabGridFilter);
      } else if (viewMode === 'quiz') {
        handleOpenQuizView();
      }
    }

    /* Word-by-Word Focus Card Renderer */
    function renderVocabFocusCard() {
      const container = document.getElementById('vocabFocusCard');
      if (!container) return;

      const dailyList = getDailyVocabList();
      if (currentVocabFocusIndex < 0) currentVocabFocusIndex = 0;
      if (currentVocabFocusIndex >= dailyList.length) currentVocabFocusIndex = dailyList.length - 1;

      const word = dailyList[currentVocabFocusIndex];
      const studied = appState.vocabDailyMission.studiedWords || [];
      const isStudied = studied.includes(word.id);
      const totalStudied = studied.length;

      container.innerHTML = `
        <div class="vocab-card-tags-row">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <span class="daily-badge-pill" style="font-size:10px;">${word.categoryLabel}</span>
            <span style="font-size:11px; font-weight:700; color:var(--text-muted); font-family:var(--font-mono);">${word.pos}</span>
          </div>
          <span class="glyph-badge badge-mid" style="font-size:11px;">${word.tone}</span>
        </div>

        <div class="vocab-word-display">
          <div class="vocab-big-thai" onclick="speakThai('${word.thai}')" title="Klik untuk mendengar suara penutur asli Bangkok">${word.thai}</div>
          <div class="vocab-roman-row">
            <span class="vocab-roman-text">${word.roman}</span>
            <button class="vocab-audio-circle-btn" onclick="speakThai('${word.thai}')" title="Dengarkan pengucapan asli Bangkok">
              🔊
            </button>
          </div>
        </div>

        <div class="vocab-meaning-box">
          <div class="vocab-meaning-label">Arti Bahasa Indonesia:</div>
          <div class="vocab-meaning-val">${word.meaning}</div>
        </div>

        <div class="vocab-example-block">
          <div style="font-size:11px; font-weight:700; color:var(--text-dim); text-transform:uppercase; font-family:var(--font-mono); margin-bottom:4px;">
            Contoh Kalimat Nyata:
          </div>
          <div class="vocab-ex-thai" onclick="speakThai('${word.exampleThai}')" title="Klik dengar kalimat penutur Bangkok">
            <span>${word.exampleThai}</span>
            <span style="font-size:14px; opacity:0.8;">🔊</span>
          </div>
          <div style="font-family:var(--font-mono); font-size:12px; color:var(--primary); font-weight:600;">${word.exampleRoman}</div>
          <div class="vocab-ex-indo">${word.exampleMeaning}</div>
        </div>

        <div class="vocab-focus-nav-bar">
          <button class="btn-audio-listen" onclick="prevVocabWord()" ${currentVocabFocusIndex === 0 ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
            ⬅️ Sebelumnya
          </button>

          <div style="font-family:var(--font-mono); font-size:12px; color:var(--text-dim); font-weight:700;">
            Kata #${currentVocabFocusIndex + 1} dari ${dailyList.length} • Total Dipelajari: <span style="color:var(--primary);">${totalStudied}/10</span>
          </div>

          <div style="display:flex; align-items:center; gap:8px;">
            <button class="btn-stimuler-primary" style="${isStudied ? 'background:#2d6a4f;' : ''}" onclick="markCurrentWordStudied('${word.id}')">
              ${isStudied ? '✓ Sudah Dipahami (Lanjut ➔)' : '✓ Tandai Paham &amp; Lanjut ➔'}
            </button>
          </div>
        </div>

        ${totalStudied >= 10 ? `
          <div style="margin-top:14px; padding:14px 18px; background:rgba(82, 183, 136, 0.12); border:1px solid rgba(82, 183, 136, 0.4); border-radius:var(--radius-md); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="font-size:22px;">🎉</span>
              <div>
                <strong style="color:var(--text); font-size:14px;">Syarat Langkah 1 Terpenuhi!</strong>
                <p style="font-size:12px; color:var(--text-muted); margin:0;">Anda telah mempelajari minimal 10 kosakata. Kuis Misi Harian siap dikerjakan!</p>
              </div>
            </div>
            <button class="pill-filter" style="background:var(--primary); color:#ffffff; border-color:var(--primary); font-weight:800;" onclick="switchVocabView('quiz')">
              Buka Kuis 10 Soal ➔
            </button>
          </div>
        ` : ''}
      `;
    }

    function prevVocabWord() {
      playSynthSound('click');
      if (currentVocabFocusIndex > 0) {
        currentVocabFocusIndex--;
        renderVocabFocusCard();
      }
    }

    function nextVocabWord() {
      playSynthSound('click');
      const dailyList = getDailyVocabList();
      if (currentVocabFocusIndex < dailyList.length - 1) {
        currentVocabFocusIndex++;
        renderVocabFocusCard();
      }
    }

    function markCurrentWordStudied(wordId) {
      if (!Array.isArray(appState.vocabDailyMission.studiedWords)) {
        appState.vocabDailyMission.studiedWords = [];
      }
      const studied = appState.vocabDailyMission.studiedWords;
      const isNew = !studied.includes(wordId);

      if (isNew) {
        studied.push(wordId);
        playSynthSound('correct');
        showToast('✓ Kosakata ditambahkan ke catatan harian Anda!');
        if (studied.length === 10) {
          playSynthSound('success');
          showToast('🎉 Hebat! Anda telah menguasai 10 kosakata. Kuis Misi Harian kini TERBUKA!');
        }
      } else {
        playSynthSound('click');
      }

      saveState();
      updateVocabDailyMissionUI();

      // Advance to next word
      const dailyList = getDailyVocabList();
      if (currentVocabFocusIndex < dailyList.length - 1) {
        currentVocabFocusIndex++;
      }
      renderVocabFocusCard();
    }

    /* Vocabulary Grid Renderer */
    function renderVocabGrid(category = 'daily') {
      currentVocabGridFilter = category;
      const container = document.getElementById('vocabGridContainer');
      const counterEl = document.getElementById('vocabGridCounter');
      if (!container) return;

      const list = getFilteredVocabList(category);
      if (counterEl) counterEl.textContent = `Menampilkan ${list.length} kosakata`;

      const studied = appState.vocabDailyMission.studiedWords || [];

      container.innerHTML = list.map(v => {
        const isStudied = studied.includes(v.id);
        return `
          <div class="vocab-grid-card ${isStudied ? 'studied' : ''}">
            <div class="vocab-card-top">
              <div>
                <div class="vocab-grid-thai" onclick="speakThai('${v.thai}')" title="Dengarkan pengucapan Bangkok">${v.thai}</div>
                <div class="vocab-grid-roman">${v.roman}</div>
              </div>
              <button class="btn-audio-listen" style="padding:4px 8px; font-size:12px;" onclick="speakThai('${v.thai}')" title="Putar suara asli">
                🔊
              </button>
            </div>

            <div class="vocab-grid-meaning">
              <strong>${v.meaning}</strong>
              <div style="font-size:11px; color:var(--text-dim); margin-top:2px;">${v.pos} • ${v.tone}</div>
            </div>

            <div class="vocab-grid-footer">
              <span style="font-size:11px; font-family:var(--font-mono); color:var(--primary); font-weight:700;">${v.categoryLabel}</span>
              <button class="pill-filter" style="${isStudied ? 'background:rgba(82, 183, 136, 0.15); color:#52b788; border-color:rgba(82, 183, 136, 0.4);' : ''} font-size:11px; padding:3px 10px;" onclick="toggleGridWordStudied('${v.id}')">
                ${isStudied ? '✓ Dipelajari' : '+ Pelajari'}
              </button>
            </div>
          </div>
        `;
      }).join('');
    }

    function filterVocabGrid(cat, btn) {
      playSynthSound('click');
      const pillsContainer = document.getElementById('vocabCategoryPills');
      if (pillsContainer) {
        pillsContainer.querySelectorAll('.pill-filter').forEach(p => p.classList.remove('active'));
      }
      if (btn) btn.classList.add('active');
      renderVocabGrid(cat);
    }

    function toggleGridWordStudied(wordId) {
      if (!Array.isArray(appState.vocabDailyMission.studiedWords)) {
        appState.vocabDailyMission.studiedWords = [];
      }
      const studied = appState.vocabDailyMission.studiedWords;
      const idx = studied.indexOf(wordId);
      if (idx === -1) {
        studied.push(wordId);
        playSynthSound('correct');
        showToast('✓ Kosakata ditambahkan ke target misi harian!');
        if (studied.length === 10) {
          playSynthSound('success');
          showToast('🎉 Hebat! Anda telah menguasai 10 kosakata. Kuis Misi Harian TERBUKA!');
        }
      } else {
        studied.splice(idx, 1);
        playSynthSound('click');
      }
      saveState();
      updateVocabDailyMissionUI();
      renderVocabGrid(currentVocabGridFilter);
    }

    /* 10-Question Daily Vocab Quiz Engine */
    function handleOpenQuizView() {
      const studied = appState.vocabDailyMission.studiedWords || [];
      const lockedScreen = document.getElementById('vocabQuizLockedScreen');
      const activeBox = document.getElementById('vocabQuizActiveBox');
      const resultScreen = document.getElementById('vocabQuizResultScreen');

      if (studied.length < 10) {
        if (lockedScreen) lockedScreen.style.display = 'block';
        if (activeBox) activeBox.style.display = 'none';
        if (resultScreen) resultScreen.style.display = 'none';
      } else {
        if (lockedScreen) lockedScreen.style.display = 'none';
        if (resultScreen) resultScreen.style.display = 'none';
        if (activeBox) activeBox.style.display = 'block';
        startDailyVocabQuiz();
      }
    }

    function startDailyVocabQuiz() {
      const dailyWords = getDailyVocabList();
      // Generate 10 randomized diverse questions based on daily words
      const shuffledWords = [...dailyWords].sort(() => 0.5 - Math.random());

      const questions = [];
      for (let i = 0; i < 10; i++) {
        const targetWord = shuffledWords[i % shuffledWords.length];
        const otherWords = THAI_VOCAB_BANK.filter(v => v.id !== targetWord.id);
        const distractorWords = otherWords.sort(() => 0.5 - Math.random()).slice(0, 3);

        // Variety of formats:
        // 0-3: Thai -> Indonesian Meaning
        // 4-6: Indonesian Meaning -> Thai Script
        // 7-9: Listening Quiz (SpeakThai audio -> pick Thai + Meaning)
        let qType = 'thai_to_meaning';
        if (i >= 4 && i <= 6) qType = 'meaning_to_thai';
        else if (i >= 7) qType = 'audio_listen';

        let prompt = '';
        let choices = [];
        let correctChoiceIdx = 0;

        if (qType === 'thai_to_meaning') {
          prompt = `Apa arti dari kosakata Thai: <strong>${targetWord.thai}</strong> (${targetWord.roman})?`;
          choices = [
            { text: targetWord.meaning, isCorrect: true },
            { text: distractorWords[0].meaning, isCorrect: false },
            { text: distractorWords[1].meaning, isCorrect: false },
            { text: distractorWords[2].meaning, isCorrect: false }
          ];
        } else if (qType === 'meaning_to_thai') {
          prompt = `Manakah tulisan Thai yang tepat untuk arti: <strong>"${targetWord.meaning}"</strong>?`;
          choices = [
            { text: `${targetWord.thai} (${targetWord.roman})`, isCorrect: true },
            { text: `${distractorWords[0].thai} (${distractorWords[0].roman})`, isCorrect: false },
            { text: `${distractorWords[1].thai} (${distractorWords[1].roman})`, isCorrect: false },
            { text: `${distractorWords[2].thai} (${distractorWords[2].roman})`, isCorrect: false }
          ];
        } else {
          prompt = `🎧 Dengarkan audio penutur asli Bangkok berikut lalu pilih kosakata yang diucapkan:`;
          choices = [
            { text: `${targetWord.thai} — ${targetWord.meaning}`, isCorrect: true },
            { text: `${distractorWords[0].thai} — ${distractorWords[0].meaning}`, isCorrect: false },
            { text: `${distractorWords[1].thai} — ${distractorWords[1].meaning}`, isCorrect: false },
            { text: `${distractorWords[2].thai} — ${distractorWords[2].meaning}`, isCorrect: false }
          ];
        }

        // Shuffle choices and find correct index
        choices = choices.sort(() => 0.5 - Math.random());
        correctChoiceIdx = choices.findIndex(c => c.isCorrect);

        questions.push({
          targetWord,
          type: qType,
          prompt,
          choices,
          correctChoiceIdx
        });
      }

      vocabQuizState = {
        questions,
        currentIndex: 0,
        score: 0,
        isAnswered: false,
        selectedOpt: null
      };

      renderVocabQuizQuestion();
    }

    function renderVocabQuizQuestion() {
      const q = vocabQuizState.questions[vocabQuizState.currentIndex];
      if (!q) return;

      vocabQuizState.isAnswered = false;
      vocabQuizState.selectedOpt = null;

      // Update counters
      const badgeIndex = document.getElementById('quizQuestionIndexBadge');
      const scoreBadge = document.getElementById('quizCurrentScoreBadge');
      const progressFill = document.getElementById('quizProgressFill');

      if (badgeIndex) badgeIndex.textContent = `Soal ${vocabQuizState.currentIndex + 1} dari 10`;
      if (scoreBadge) scoreBadge.textContent = `Skor: ${vocabQuizState.score} Benar`;
      if (progressFill) progressFill.style.width = `${((vocabQuizState.currentIndex + 1) / 10) * 100}%`;

      const card = document.getElementById('vocabQuestionCard');
      if (!card) return;

      const isAudioType = q.type === 'audio_listen';
      const letters = ['A', 'B', 'C', 'D'];

      card.innerHTML = `
        <div class="quiz-prompt-header">Tantangan Kuis Kosakata #${vocabQuizState.currentIndex + 1}</div>
        <h3 style="font-size:18px; font-weight:800; margin-bottom:8px; line-height:1.4;">${q.prompt}</h3>

        <div class="quiz-word-target">
          ${isAudioType ? `
            <button class="vocab-audio-circle-btn" style="width:64px; height:64px; font-size:26px;" onclick="speakThai('${q.targetWord.thai}')" title="Putar ulang suara penutur">
              🔊
            </button>
            <div style="font-size:12px; color:var(--text-muted); font-family:var(--font-mono);">Klik untuk memutar ulang audio</div>
          ` : `
            <div style="font-family:var(--font-thai); font-size:48px; font-weight:800; color:var(--primary); line-height:1.2; cursor:pointer;" onclick="speakThai('${q.targetWord.thai}')" title="Dengar lafal Bangkok">
              ${q.targetWord.thai}
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-family:var(--font-mono); font-size:16px; color:var(--text); font-weight:700;">${q.targetWord.roman}</span>
              <button class="btn-audio-listen" style="padding:2px 8px; font-size:11px;" onclick="speakThai('${q.targetWord.thai}')">🔊 Lafal</button>
            </div>
          `}
        </div>

        <div class="quiz-choices-grid" id="quizChoicesContainer">
          ${q.choices.map((c, idx) => `
            <button type="button" class="quiz-choice-btn" id="choiceBtn_${idx}" onclick="handleVocabQuizChoice(${idx})">
              <span class="choice-key">${letters[idx]}</span>
              <span class="choice-text">${c.text}</span>
            </button>
          `).join('')}
        </div>

        <div id="quizFeedbackArea" style="min-height:20px;"></div>
      `;

      // Auto play audio if listening question
      if (isAudioType) {
        setTimeout(() => speakThai(q.targetWord.thai), 300);
      }
    }

    function handleVocabQuizChoice(selectedIdx) {
      if (vocabQuizState.isAnswered) return;
      vocabQuizState.isAnswered = true;
      vocabQuizState.selectedOpt = selectedIdx;

      const q = vocabQuizState.questions[vocabQuizState.currentIndex];
      const isCorrect = (selectedIdx === q.correctChoiceIdx);

      const choiceBtns = document.querySelectorAll('.quiz-choice-btn');
      choiceBtns.forEach((btn, idx) => {
        btn.style.pointerEvents = 'none';
        if (idx === q.correctChoiceIdx) {
          btn.classList.add('correct');
        } else if (idx === selectedIdx) {
          btn.classList.add('wrong');
        }
      });

      const feedbackArea = document.getElementById('quizFeedbackArea');
      const scoreBadge = document.getElementById('quizCurrentScoreBadge');

      if (isCorrect) {
        vocabQuizState.score++;
        playSynthSound('correct');
        if (scoreBadge) scoreBadge.textContent = `Skor: ${vocabQuizState.score} Benar`;
      } else {
        playSynthSound('wrong');
      }

      // Always play Thai pronunciation of target word for auditory reinforcement
      speakThai(q.targetWord.thai);

      const isLastQuestion = (vocabQuizState.currentIndex === 9);

      if (feedbackArea) {
        feedbackArea.innerHTML = `
          <div class="quiz-feedback-banner" style="border-left-color:${isCorrect ? '#52b788' : '#fb7185'};">
            <div>
              <div style="font-size:15px; font-weight:800; color:${isCorrect ? '#52b788' : '#fb7185'}; margin-bottom:3px;">
                ${isCorrect ? '🎉 Benar Sekali!' : '⚠️ Belum Tepat!'}
              </div>
              <div style="font-size:13px; color:var(--text);">
                <strong>${q.targetWord.thai}</strong> (${q.targetWord.roman}) = <em>${q.targetWord.meaning}</em>
              </div>
            </div>
            <button class="btn-stimuler-primary" style="padding:10px 22px; font-size:13px;" onclick="nextVocabQuizQuestion()">
              ${isLastQuestion ? 'Lihat Hasil Kuis ➔' : 'Soal Selanjutnya ➔'}
            </button>
          </div>
        `;
      }
    }

    function nextVocabQuizQuestion() {
      playSynthSound('click');
      if (vocabQuizState.currentIndex < 9) {
        vocabQuizState.currentIndex++;
        renderVocabQuizQuestion();
      } else {
        finishDailyVocabQuiz();
      }
    }

    function finishDailyVocabQuiz() {
      const activeBox = document.getElementById('vocabQuizActiveBox');
      const resultScreen = document.getElementById('vocabQuizResultScreen');
      if (activeBox) activeBox.style.display = 'none';
      if (resultScreen) resultScreen.style.display = 'block';

      const finalScore = vocabQuizState.score;
      const isPassed = finalScore >= 7;

      // Update state
      appState.vocabDailyMission.quizCompleted = true;
      appState.vocabDailyMission.quizScore = finalScore;

      // Claim rewards if first time today
      if (!appState.vocabDailyMission.claimed) {
        appState.xp += 50;
        appState.gems += 20;
        appState.streak = Math.max(appState.streak, 1);
        appState.vocabDailyMission.claimed = true;
      }

      saveState();
      playSynthSound('success');

      resultScreen.innerHTML = `
        <div style="width:72px; height:72px; border-radius:50%; background:var(--primary-light); display:grid; place-items:center; font-size:36px; margin:0 auto 16px auto;">
          ${isPassed ? '🏆' : '⭐'}
        </div>
        <span class="daily-badge-pill" style="margin-bottom:12px;">MISI HARIAN KOSAKATA TUNTAS</span>
        <h2 style="font-size:26px; font-weight:800; margin-bottom:8px;">
          ${isPassed ? 'Luar Biasa! Misi Harian Berhasil!' : 'Kuis Selesai! Pertahankan Latihan!'}
        </h2>
        <p style="font-size:14px; color:var(--text-muted); max-width:520px; margin:0 auto 20px auto;">
          Anda telah menyelesaikan rangkaian belajar 10 kosakata dan menuntaskan 10 soal kuis evaluasi harian.
        </p>

        <div style="background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:20px; max-width:440px; margin:0 auto 24px auto;">
          <div style="font-size:12px; font-weight:700; color:var(--text-dim); text-transform:uppercase; font-family:var(--font-mono); margin-bottom:6px;">
            Skor Akhir Kuis
          </div>
          <div style="font-size:42px; font-weight:800; font-family:var(--font-mono); color:${isPassed ? 'var(--primary)' : 'var(--amber)'}; line-height:1;">
            ${finalScore} / 10
          </div>
          <div style="font-size:13px; color:var(--text-muted); margin-top:6px;">
            Akurasi Penguasaan: <strong>${finalScore * 10}%</strong>
          </div>
        </div>

        <div style="display:flex; justify-content:center; gap:12px; margin-bottom:28px;">
          <div class="reward-chip"><span class="reward-icon">⚡</span><strong>+50 XP Diklaim</strong></div>
          <div class="reward-chip"><span class="reward-icon">💎</span><strong>+20 Gems Diklaim</strong></div>
          <div class="reward-chip"><span class="reward-icon">🔥</span><strong>Streak Aktif</strong></div>
        </div>

        <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
          <button class="btn-stimuler-primary" onclick="startDailyVocabQuiz()">
            🔄 Ulangi Kuis 10 Soal
          </button>
          <button class="btn-audio-listen" onclick="switchVocabView('focus')">
            📖 Review Kosakata
          </button>
          <button class="btn-audio-listen" onclick="switchNavTab('curriculum')">
            📑 Lanjut ke Kurikulum Unit ➔
          </button>
        </div>
      `;
    }

    function handleVocabDailyAction() {
      playSynthSound('click');
      const studied = appState.vocabDailyMission.studiedWords || [];
      if (studied.length >= 10) {
        switchVocabView('quiz');
      } else {
        switchVocabView('focus');
      }
    }

    function resetTodayVocabMission() {
      playSynthSound('click');
      appState.vocabDailyMission.studiedWords = [];
      appState.vocabDailyMission.quizCompleted = false;
      appState.vocabDailyMission.quizScore = 0;
      appState.vocabDailyMission.claimed = false;
      saveState();
      updateVocabDailyMissionUI();
      renderVocabFocusCard();
      renderVocabGrid(currentVocabGridFilter);
      showToast('🔄 Misi harian kosakata telah direset untuk latihan baru!');
    }

    /* 7. LESSONS DATABASE & ARENA RUNNER (12 PROGRESSIVE UNITS / 48 MODULES) */
    /* 7. LESSONS DATABASE & CURRICULUM (Lazy Loaded from data/curriculum.json) */
    let CURRICULUM_UNITS = window.CURRICULUM_UNITS || [];
    let ALL_LESSONS_ORDER = window.ALL_LESSONS_ORDER || [];
    let LESSON_DATABASE = window.LESSON_DATABASE || {};
    let JAZMI_CURRICULUM_DATA = window.JAZMI_CURRICULUM_DATA || [];

    let currentSession = null;
    let currentCurriculumFilter = 'all';
    let currentCurriculumSearch = '';
    let allCurriculumUnlocked = false;

    function renderCurriculumGrid() {
      const container = document.getElementById('curriculumUnitsContainer');
      if (!container) return;

      const q = (currentCurriculumSearch || '').trim().toLowerCase();
      const filteredUnits = CURRICULUM_UNITS.filter(u => {
        const matchesLevel = (currentCurriculumFilter === 'all' || u.level === currentCurriculumFilter);
        if (!matchesLevel) return false;
        if (!q) return true;
        const inUnit = u.title.toLowerCase().includes(q) || u.desc.toLowerCase().includes(q) || u.levelLabel.toLowerCase().includes(q);
        const inLessons = u.lessons.some(l => l.title.toLowerCase().includes(q) || l.subtitle.toLowerCase().includes(q));
        return inUnit || inLessons;
      });

      if (filteredUnits.length === 0) {
        container.innerHTML = `
          <div style="text-align:center; padding:48px 20px; background:var(--bg-surface); border-radius:var(--radius-lg); border:1px dashed var(--border);">
            <div style="font-size:36px; margin-bottom:12px;">🍃</div>
            <h3 style="font-size:18px; font-weight:700; margin-bottom:6px;">Tidak ada modul yang cocok</h3>
            <p style="font-size:13px; color:var(--text-muted);">Coba cari kata kunci lain seperti "makan", "pasar", "arah", "hotel", atau "kuil".</p>
          </div>
        `;
        return;
      }

      container.innerHTML = filteredUnits.map(unit => {
        const completedCount = unit.lessons.filter(l => appState.completedLessons.includes(l.id)).length;
        const totalCount = unit.lessons.length;
        const unitProgressPct = Math.round((completedCount / totalCount) * 100);

        return `
          <div class="unit-card-bento" data-unit-id="${unit.id}">
            <div class="unit-meta-row">
              <span class="unit-number-tag">Unit ${unit.unitNumber} • ${unit.levelLabel}</span>
              <div style="display:flex; align-items:center; gap:8px;">
                <span style="font-family:var(--font-mono); font-size:12px; color:var(--text-muted); font-weight:600;">
                  ${completedCount}/${totalCount} Selesai (${unitProgressPct}%)
                </span>
              </div>
            </div>
            <h3>${unit.title}</h3>
            <p>${unit.desc}</p>
            <div class="lessons-track-row">
              ${unit.lessons.map(l => {
          const isCompleted = appState.completedLessons.includes(l.id);
          const isUnlocked = appState.unlockedLessons.includes(l.id);
          let stateClass = 'locked';
          let statusBadge = `<span class="lesson-status-icon">🔒</span>`;

          if (isCompleted) {
            stateClass = 'completed';
            statusBadge = `<span class="lesson-status-icon">✓</span><span style="font-size:11px; color:var(--emerald); font-weight:700;">SELESAI</span>`;
          } else if (isUnlocked) {
            stateClass = 'active-frontier';
            statusBadge = `<span class="lesson-status-icon">⚡</span><span style="font-size:11px; color:var(--primary); font-weight:700;">MULAI</span>`;
          }

          return `
                  <div class="lesson-item-box ${stateClass}" id="card-${l.id}" onclick="startArenaLesson('${l.id}')" title="${isUnlocked ? 'Klik untuk mulai latihan interaktif' : 'Selesaikan modul sebelumnya atau buka via tombol Buka Semua Modul'}">
                    <div class="lesson-item-header">
                      <span style="font-size:18px;">${l.icon}</span>
                      ${statusBadge}
                    </div>
                    <div class="lesson-item-title">${l.title}</div>
                    <div style="font-size:11px; color:var(--text-muted); line-height:1.2;">${l.subtitle}</div>
                  </div>
                `;
        }).join('')}
            </div>
          </div>
        `;
      }).join('');

      // Update active unit badge on header
      const activeUnit = CURRICULUM_UNITS.find(u => u.lessons.some(l => !appState.completedLessons.includes(l.id) && appState.unlockedLessons.includes(l.id))) || CURRICULUM_UNITS[0];
      const activeBadge = document.getElementById('curriculumActiveBadge');
      if (activeBadge && activeUnit) {
        activeBadge.innerHTML = `<span>Unit Aktif: #${activeUnit.unitNumber} ${activeUnit.title.split(' ')[0]} (${activeUnit.level.toUpperCase()})</span>`;
      }
    }

    function filterCurriculum(level, btn) {
      playSynthSound('click');
      currentCurriculumFilter = level;
      document.querySelectorAll('#curriculumLevelPills .pill-filter').forEach(p => p.classList.remove('active'));
      if (btn) btn.classList.add('active');
      renderCurriculumGrid();
    }

    function searchCurriculum(query) {
      currentCurriculumSearch = query;
      renderCurriculumGrid();
    }

    function toggleUnlockAllCurriculum() {
      allCurriculumUnlocked = !allCurriculumUnlocked;
      const btn = document.getElementById('btnUnlockAll');
      if (allCurriculumUnlocked) {
        ALL_LESSONS_ORDER.forEach(id => {
          if (!appState.unlockedLessons.includes(id)) appState.unlockedLessons.push(id);
        });
        if (btn) btn.textContent = '🔒 Kunci Bertahap (Mode Normal)';
        showToast('🔓 Seluruh 48 modul telah dibuka bebas!');
      } else {
        appState.unlockedLessons = ['u1_l1'];
        appState.completedLessons.forEach(id => {
          const idx = ALL_LESSONS_ORDER.indexOf(id);
          if (idx !== -1 && idx + 1 < ALL_LESSONS_ORDER.length) {
            const next = ALL_LESSONS_ORDER[idx + 1];
            if (!appState.unlockedLessons.includes(next)) appState.unlockedLessons.push(next);
          }
        });
        if (btn) btn.textContent = '🔓 Buka Semua Modul';
        showToast('🔒 Kembali ke mode berjenjang.');
      }
      saveState();
      renderCurriculumGrid();
    }

    function renderCurriculumNodes() {
      renderCurriculumGrid();
    }

    function startArenaLesson(lessonId) {
      if (!appState.unlockedLessons.includes(lessonId)) {
        playSynthSound('wrong');
        showToast('Selesaikan modul sebelumnya terlebih dahulu! 🔒');
        return;
      }
      playSynthSound('click');
      const lesson = LESSON_DATABASE[lessonId];
      if (!lesson) {
        showToast('Modul unit berikutnya sedang dikembangkan.');
        return;
      }

      currentSession = {
        lessonId,
        questions: JSON.parse(JSON.stringify(lesson.questions)),
        currentIndex: 0,
        selectedAnswer: null,
        builderSlots: [],
        activeMatchingCard: null,
        isAnswerChecked: false
      };

      document.getElementById('exerciseArena').classList.add('active');
      renderCurrentQuestion();
    }

    function closeArenaModal() {
      document.getElementById('exerciseArena').classList.remove('active');
    }

    function renderCurrentQuestion() {
      const q = currentSession.questions[currentSession.currentIndex];
      const total = currentSession.questions.length;
      const pct = (currentSession.currentIndex / total) * 100;
      document.getElementById('arenaProgressBar').style.width = `${pct}%`;

      currentSession.selectedAnswer = null;
      currentSession.builderSlots = [];
      currentSession.activeMatchingCard = null;
      currentSession.isAnswerChecked = false;

      const actionBtn = document.getElementById('arenaActionBtn');
      actionBtn.textContent = 'PERIKSA JAWABAN';
      actionBtn.disabled = true;

      document.getElementById('arenaFeedbackTitle').textContent = q.prompt;
      document.getElementById('arenaFeedbackExplain').textContent = 'Pilih salah satu respon di atas.';

      const container = document.getElementById('arenaQuestionContainer');

      if (q.type === 'choice') {
        container.innerHTML = `
          <h2 class="quiz-title-h2">${q.prompt}</h2>
          ${q.thai ? `
            <div class="prompt-box">
              <div class="prompt-thai" onclick="speakThai('${q.thai}')" title="Klik dengar lafal penutur asli" style="cursor:pointer;">
                ${q.thai} <span style="font-size:18px; opacity:0.8; vertical-align:middle;">🔊</span>
              </div>
              <div class="prompt-roman">${q.roman}</div>
              <button class="btn-audio-listen" style="margin-top:10px;" onclick="speakThai('${q.thai}')">🔊 Dengarkan</button>
            </div>
          ` : ''}
          <div class="choices-grid-stimuler">
            ${q.options.map((opt, i) => {
          const hasThai = /[\u0E00-\u0E7F]/.test(opt);
          return `
                <button class="choice-card-stimuler" onclick="selectChoice(${i}, this)">
                  <span style="display:flex; align-items:center; gap:8px;">
                    ${opt}
                    ${hasThai ? `<span class="opt-audio-icon" onclick="event.stopPropagation(); speakThai('${opt.replace(/'/g, "\\'")}');" title="Dengarkan lafal penutur asli">🔊</span>` : ''}
                  </span>
                  <span style="font-family:var(--font-mono); font-size:12px; color:var(--text-dim);">[${i + 1}]</span>
                </button>
              `;
        }).join('')}
          </div>
        `;
      } else if (q.type === 'matching') {
        const thaiCards = q.pairs.map(p => ({ text: p.thai, id: p.thai, isThai: true }));
        const labelCards = q.pairs.map(p => ({ text: p.label, id: p.thai, isThai: false }));
        const allCards = [...thaiCards, ...labelCards].sort(() => Math.random() - 0.5);

        container.innerHTML = `
          <h2 class="quiz-title-h2">${q.prompt}</h2>
          <div class="matching-grid-stimuler" id="matchingGrid">
            ${allCards.map(c => `
              <div class="matching-chip ${c.isThai ? 'thai-glyph' : ''}" data-id="${c.id}" onclick="handleMatchingCard(this)" title="Klik untuk memilih & mendengar audio">
                ${c.text}
              </div>
            `).join('')}
          </div>
        `;
      } else if (q.type === 'builder') {
        container.innerHTML = `
          <h2 class="quiz-title-h2">${q.prompt}</h2>
          <div class="builder-area" id="builderSlots" title="Klik kata untuk mendengar lafalnya"></div>
          <div class="builder-options">
            ${q.options.map(word => `
              <button class="word-token" data-word="${word}" onclick="handleWordToken(this)" title="Klik dengar lafal penutur asli: ${word}">
                ${word}
              </button>
            `).join('')}
          </div>
        `;
      }
    }

    function selectChoice(index, el) {
      if (currentSession.isAnswerChecked) return;
      playSynthSound('click');
      currentSession.selectedAnswer = index;
      document.querySelectorAll('.choice-card-stimuler').forEach(c => c.classList.remove('selected'));
      el.classList.add('selected');
      document.getElementById('arenaActionBtn').disabled = false;

      // Automatically speak Thai option if it contains Thai script
      const optText = currentSession.questions[currentSession.currentIndex].options[index];
      if (/[\u0E00-\u0E7F]/.test(optText)) {
        speakThai(optText);
      }
    }

    function handleMatchingCard(el) {
      if (el.classList.contains('matched')) return;
      playSynthSound('click');

      // Speak native Thai if card contains Thai script
      const cardText = el.textContent.trim();
      if (/[\u0E00-\u0E7F]/.test(cardText)) {
        speakThai(cardText);
      }

      if (!currentSession.activeMatchingCard) {
        currentSession.activeMatchingCard = el;
        el.classList.add('active-select');
      } else {
        const first = currentSession.activeMatchingCard;
        if (first === el) {
          first.classList.remove('active-select');
          currentSession.activeMatchingCard = null;
          return;
        }

        if (first.getAttribute('data-id') === el.getAttribute('data-id')) {
          playSynthSound('correct');
          first.classList.remove('active-select');
          first.classList.add('matched');
          el.classList.add('matched');
          currentSession.activeMatchingCard = null;

          const remaining = document.querySelectorAll('.matching-chip:not(.matched)').length;
          if (remaining === 0) {
            document.getElementById('arenaActionBtn').disabled = false;
            document.getElementById('arenaFeedbackTitle').textContent = 'Semua pasangan cocok!';
            document.getElementById('arenaFeedbackExplain').textContent = 'Tekan Lanjut untuk pertanyaan berikutnya.';
          }
        } else {
          playSynthSound('wrong');
          first.classList.remove('active-select');
          currentSession.activeMatchingCard = null;
        }
      }
    }

    function handleWordToken(btn) {
      playSynthSound('click');
      const word = btn.getAttribute('data-word');
      btn.classList.add('used');
      speakThai(word);

      currentSession.builderSlots.push(word);
      const slotContainer = document.getElementById('builderSlots');
      const token = document.createElement('button');
      token.className = 'word-token';
      token.textContent = word;
      token.onclick = () => {
        speakThai(word);
        token.remove();
        btn.classList.remove('used');
        const idx = currentSession.builderSlots.indexOf(word);
        if (idx !== -1) currentSession.builderSlots.splice(idx, 1);
        document.getElementById('arenaActionBtn').disabled = currentSession.builderSlots.length === 0;
      };
      slotContainer.appendChild(token);
      document.getElementById('arenaActionBtn').disabled = false;
    }

    function handleArenaAction() {
      const q = currentSession.questions[currentSession.currentIndex];
      const actionBtn = document.getElementById('arenaActionBtn');

      if (!currentSession.isAnswerChecked) {
        currentSession.isAnswerChecked = true;
        let isCorrect = false;

        if (q.type === 'choice') {
          isCorrect = (currentSession.selectedAnswer === q.answer);
          const cards = document.querySelectorAll('.choice-card-stimuler');
          if (cards[q.answer]) cards[q.answer].classList.add('correct');
          if (!isCorrect && cards[currentSession.selectedAnswer]) {
            cards[currentSession.selectedAnswer].classList.add('wrong');
          }
        } else if (q.type === 'matching') {
          isCorrect = true;
        } else if (q.type === 'builder') {
          const submitted = currentSession.builderSlots.join('');
          const expected = q.correctSentence.join('');
          isCorrect = (submitted === expected);
        }

        if (isCorrect) {
          playSynthSound('correct');
          document.getElementById('arenaFeedbackTitle').innerHTML = '✨ Jawaban Tepat!';
          document.getElementById('arenaFeedbackExplain').textContent = q.explain || 'Luar biasa! Lanjutkan konsistensi Anda.';
          actionBtn.textContent = 'LANJUTKAN';
          appState.xp += 10;
          if (q.type === 'builder') {
            speakThai(q.correctSentence.join(''));
          }
        } else {
          playSynthSound('wrong');
          document.getElementById('arenaFeedbackTitle').innerHTML = '❌ Belum Tepat';
          document.getElementById('arenaFeedbackExplain').textContent = q.explain || 'Perhatikan kembali struktur katanya.';
          actionBtn.textContent = 'MENGERTI, LANJUT';
        }
      } else {
        // Next question or finish
        currentSession.currentIndex++;
        if (currentSession.currentIndex < currentSession.questions.length) {
          renderCurrentQuestion();
        } else {
          // Completed lesson!
          playSynthSound('correct');
          if (!appState.completedLessons.includes(currentSession.lessonId)) {
            appState.completedLessons.push(currentSession.lessonId);
          }
          const curIdx = ALL_LESSONS_ORDER.indexOf(currentSession.lessonId);
          if (curIdx !== -1 && curIdx + 1 < ALL_LESSONS_ORDER.length) {
            const next = ALL_LESSONS_ORDER[curIdx + 1];
            if (!appState.unlockedLessons.includes(next)) {
              appState.unlockedLessons.push(next);
            }
          }
          saveState();
          renderCurriculumNodes();
          closeArenaModal();
          showToast('🎉 Pelajaran Selesai! Skor bertambah +25 XP!');
        }
      }
    }

    /* PORTAL GATEWAY & STUDENT LOGIN HELPERS */
    let selectedStudentAvatar = '🍃';

    function selectStudentAvatar(avatar, btn) {
      playSynthSound('click');
      selectedStudentAvatar = avatar;
      document.querySelectorAll('#portalAvatarRow .avatar-pick-btn').forEach(b => {
        b.classList.toggle('active', b === btn);
      });
    }

    function getSavedAccounts() {
      try {
        return JSON.parse(localStorage.getItem('stimuler_thai_accounts') || '{}');
      } catch (e) {
        return {};
      }
    }

    function saveAccounts(accounts) {
      localStorage.setItem('stimuler_thai_accounts', JSON.stringify(accounts));
    }

    let isStudentLoggingIn = false;
    function handleStudentLogin(e) {
      if (e && e.preventDefault) e.preventDefault();
      if (isStudentLoggingIn) return;
      isStudentLoggingIn = true;
      setTimeout(() => { isStudentLoggingIn = false; }, 800);

      try {
        const nameInput = document.getElementById('portalInputName');
        const pinInput = document.getElementById('portalInputPin');
        const rawName = (nameInput ? nameInput.value : '').trim();
        const pin = (pinInput ? pinInput.value : '').trim();
        const name = rawName || 'Nesya Rahma';

        const accounts = getSavedAccounts();
        const key = name.toLowerCase();

        if (accounts[key]) {
          const acc = accounts[key];
          // Always allow login: if user enters a PIN, update it to the entered PIN so user is NEVER locked out!
          if (pin) {
            acc.pin = pin;
          }
          appState.userName = acc.name || name;
          appState.userAvatar = acc.avatar || selectedStudentAvatar || '🍃';
          if (acc.speakerGender) appState.speakerGender = acc.speakerGender;
          if (acc.thaiFontStyle) appState.thaiFontStyle = acc.thaiFontStyle;
          if (acc.thaiScriptMode) appState.thaiScriptMode = acc.thaiScriptMode;
          if (Array.isArray(acc.completedJazmiVideos)) appState.completedJazmiVideos = acc.completedJazmiVideos;
          if (typeof acc.xp === 'number') appState.xp = acc.xp;
          if (typeof acc.streak === 'number') appState.streak = acc.streak;
          if (Array.isArray(acc.completedLessons)) appState.completedLessons = acc.completedLessons;
          if (Array.isArray(acc.unlockedLessons)) appState.unlockedLessons = acc.unlockedLessons;
          accounts[key] = acc;
          saveAccounts(accounts);
        } else {
          appState.userName = name;
          appState.userAvatar = selectedStudentAvatar || '🍃';
          accounts[key] = {
            name: name,
            pin: pin,
            avatar: selectedStudentAvatar || '🍃',
            speakerGender: appState.speakerGender || 'female',
            thaiFontStyle: appState.thaiFontStyle || 'looped',
            thaiScriptMode: appState.thaiScriptMode || 'full',
            completedJazmiVideos: appState.completedJazmiVideos || [],
            xp: appState.xp || 65,
            streak: appState.streak || 1,
            completedLessons: appState.completedLessons || ['u1_l1'],
            unlockedLessons: appState.unlockedLessons || ['u1_l1', 'u1_l2'],
            createdAt: new Date().toISOString()
          };
          saveAccounts(accounts);
        }

        appState.isLoggedIn = true;
        saveState();
        syncUserProfileUI();
        try { playSynthSound('success'); } catch (e) { }
        showToast(`Selamat datang, ${appState.userName}! Selamat belajar 🇹🇭`);
        enterLearningApp('alphabet');
      } catch (err) {
        console.error('Error during handleStudentLogin, forcing app entry:', err);
        enterLearningApp('alphabet');
      }
    }

    function handleGuestLogin() {
      appState.userName = 'Tamu Belajar';
      appState.userAvatar = '🍃';
      appState.isLoggedIn = true;
      saveState();
      syncUserProfileUI();
      playSynthSound('click');
      showToast('Masuk dalam Mode Tamu. Selamat belajar! 🌿');
      enterLearningApp('alphabet');
    }

    function continueAsReturningUser() {
      playSynthSound('success');
      showToast(`Selamat datang kembali, ${appState.userName || 'Pembelajar'}! 👋`);
      enterLearningApp('alphabet');
    }

    function showNewLoginForm() {
      playSynthSound('click');
      const returningView = document.getElementById('portalReturningUserView');
      const formView = document.getElementById('portalLoginForm');
      const title = document.getElementById('portalLoginTitle');
      if (returningView) returningView.style.display = 'none';
      if (formView) formView.style.display = 'block';
      if (title) title.textContent = 'Ganti Akun / Masuk Akun Baru';
      const nameInput = document.getElementById('portalInputName');
      if (nameInput) {
        nameInput.value = '';
        nameInput.focus();
      }
    }

    function handleStudentLogout() {
      playSynthSound('click');
      if (appState.userName && appState.userName !== 'Tamu Belajar') {
        const accounts = getSavedAccounts();
        const key = appState.userName.toLowerCase();
        accounts[key] = {
          ...(accounts[key] || {}),
          name: appState.userName,
          avatar: appState.userAvatar,
          speakerGender: appState.speakerGender,
          xp: appState.xp,
          streak: appState.streak,
          completedLessons: appState.completedLessons,
          unlockedLessons: appState.unlockedLessons
        };
        saveAccounts(accounts);
      }

      appState.isLoggedIn = false;
      saveState();
      syncUserProfileUI();
      openLearningPortal();
      showToast('Berhasil keluar dari akun 👋');
    }

    function syncUserProfileUI() {
      const name = appState.userName || 'Pembelajar';
      const avatar = appState.userAvatar || '🍃';
      const isLoggedIn = !!appState.isLoggedIn;

      // Header profile badge
      const headerName = document.getElementById('headerUserName');
      const headerAvatar = document.getElementById('headerUserAvatar');
      if (headerName) headerName.textContent = name;
      if (headerAvatar) headerAvatar.textContent = avatar;

      // Nav rail user card
      const navName = document.getElementById('navUserName');
      const navAvatar = document.getElementById('navUserAvatar');
      const navLevel = document.getElementById('navUserLevel');
      if (navName) navName.textContent = name;
      if (navAvatar) navAvatar.textContent = avatar;
      if (navLevel) navLevel.textContent = isLoggedIn ? `🔥 ${appState.streak} Hari • ⚡ ${appState.xp} XP` : 'Belum Masuk';

      // Returning view vs form view in portal
      const returningView = document.getElementById('portalReturningUserView');
      const formView = document.getElementById('portalLoginForm');
      const retName = document.getElementById('returningUserName');
      const retAvatar = document.getElementById('returningUserAvatar');
      const retMeta = document.getElementById('returningUserMeta');
      const title = document.getElementById('portalLoginTitle');

      if (isLoggedIn && name && name !== 'Tamu Belajar' && returningView && formView) {
        returningView.style.display = 'block';
        formView.style.display = 'none';
        if (retName) retName.textContent = name;
        if (retAvatar) retAvatar.textContent = avatar;
        if (retMeta) retMeta.textContent = `🔥 ${appState.streak} Hari Streak • ⚡ ${appState.xp} XP • CEFR A1.2`;
        if (title) title.textContent = `Akun Pembelajar Aktif: ${name}`;
      } else if (returningView && formView) {
        returningView.style.display = 'none';
        formView.style.display = 'block';
        if (title) title.textContent = 'Masuk ke Akun Pembelajar';
      }

      if (typeof applyThaiFontStyle === 'function') {
        applyThaiFontStyle(appState.thaiFontStyle || 'looped');
      }
      if (typeof applyThaiScriptMode === 'function') {
        applyThaiScriptMode(appState.thaiScriptMode || 'full');
      }
    }

    function openLearningPortal() {
      try { playSynthSound('click'); } catch (e) { }
      if (typeof toggleMobileDrawer === 'function') toggleMobileDrawer(false);
      const portal = document.getElementById('learningPortal');
      if (portal) {
        portal.style.display = 'flex';
        portal.classList.remove('portal-hidden');
        portal.classList.add('portal-visible');
        document.body.classList.add('in-portal-mode');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        syncUserProfileUI();
      }
    }

    function enterLearningApp(targetTab = 'alphabet') {
      playSynthSound('click');
      const portal = document.getElementById('learningPortal');
      if (portal) {
        portal.classList.remove('portal-visible');
        portal.classList.add('portal-hidden');
        portal.style.display = 'none';
      }
      document.body.classList.remove('in-portal-mode');
      if (!appState.isLoggedIn) {
        appState.isLoggedIn = true;
        if (!appState.userName) appState.userName = 'Nesya Rahma';
        saveState();
        syncUserProfileUI();
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (targetTab) {
        switchNavTab(targetTab);
      }
    }

    function setPortalGender(gender) {
      setAppSpeakerGender(gender);
    }

    function playPortalGreetingAudio() {
      const gender = appState.speakerGender || 'female';
      const icon = document.getElementById('portalAudioIcon');
      if (icon) icon.textContent = '⏳';
      let triggered = false;
      const onFail = () => {
        if (triggered) return;
        triggered = true;
        if (icon) icon.textContent = '🔊';
        speakThai(gender === 'male' ? 'สวัสดีครับ ยินดีต้อนรับครับ' : 'สวัสดีค่ะ ยินดีต้อนรับค่ะ', gender);
      };
      try {
        const audio = new Audio(`audio/${gender}/sawatdee.mp3`);
        audio.referrerPolicy = 'no-referrer';
        audio.onended = () => { if (icon) icon.textContent = '🔊'; };
        audio.onerror = onFail;
        const p = audio.play();
        if (p !== undefined) {
          p.catch((err) => {
            if (err && err.name === 'AbortError') return;
            onFail();
          });
        }
      } catch (e) {
        onFail();
      }
    }

    function initLearningPortal() {
        showDashboardCard();
      syncUserProfileUI();
      updateGenderControls();
      const portal = document.getElementById('learningPortal');
      if (appState.isLoggedIn) {
        // User is logged in: direct them straight into the alphabet view
        if (portal) {
          portal.classList.remove('portal-visible');
          portal.classList.add('portal-hidden');
          portal.style.display = 'none';
        }
        document.body.classList.remove('in-portal-mode');
        switchNavTab('alphabet');
      } else {
        // Not logged in: show welcoming portal
        document.body.classList.add('in-portal-mode');
        if (portal) {
          portal.style.display = 'flex';
          portal.classList.remove('portal-hidden');
          portal.classList.add('portal-visible');
        }
      }
    }


    /* ==========================================================================
       AI THAILAND HUB: TRANSLATOR, ENCYCLOPEDIA & CULTURE Q&A ENGINE
       ========================================================================== */

    let transDirection = 'id-to-th';
    let latestTranslatedThai = 'สวัสดีครับ ยินดีที่ได้รู้จักครับ';

    function switchAiHubMode(mode, btn) {
      document.querySelectorAll('#aiHubModePills .pill-filter').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
      document.querySelectorAll('.ai-tool-view').forEach(view => view.classList.remove('active'));
      const target = document.getElementById('aiTool-' + mode);
      if (target) target.classList.add('active');
    }

    /* 1. LIVE TRANSLATOR */
    function swapTranslationDirection() {
      const src = document.getElementById('transSourceLabel');
      const tgt = document.getElementById('transTargetLabel');
      const input = document.getElementById('translatorInput');
      if (transDirection === 'id-to-th') {
        transDirection = 'th-to-id';
        src.textContent = '🇹🇭 Thailand';
        tgt.textContent = '🇮🇩 Indonesia';
        input.placeholder = 'Ketik atau tempel teks bahasa Thai (contoh: ขอบคุณมากครับ, สบายดีไหม)...';
      } else {
        transDirection = 'id-to-th';
        src.textContent = '🇮🇩 Indonesia';
        tgt.textContent = '🇹🇭 Thailand';
        input.placeholder = 'Ketik kata atau kalimat yang ingin diterjemahkan (contoh: Tolong jangan pedas ya, berapa harga ini?)...';
      }
    }

    let latestFemaleThai = 'สวัสดีค่ะ ยินดีที่ได้รู้จักค่ะ';
    let latestFemaleRoman = 'sà-wàt-dii khà, yin-dii thîi dâi rúu-jàk khà';
    let latestMaleThai = 'สวัสดีครับ ยินดีที่ได้รู้จักครับ';
    let latestMaleRoman = 'sà-wàt-dii khráp, yin-dii thîi dâi rúu-jàk khráp';

    function clearTranslatorInput() {
      document.getElementById('translatorInput').value = '';
      document.getElementById('translatorResultBox').style.display = 'none';
      document.getElementById('transStatusInfo').textContent = 'Didukung Neural Translation & Penutur Asli Bangkok (2 Versi Suara)';
    }

    function quickTranslatePreset(text) {
      if (transDirection !== 'id-to-th') {
        swapTranslationDirection();
      }
      document.getElementById('translatorInput').value = text;
      performLiveTranslation();
    }

    function copyTranslationGender(gender) {
      const text = (gender === 'male') ? latestMaleThai : latestFemaleThai;
      if (!text) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(`✓ Teks versi ${gender === 'male' ? 'Laki-laki (ครับ)' : 'Perempuan (ค่ะ)'} berhasil disalin!`);
        }).catch(() => {
          showToast('Disalin: ' + text);
        });
      } else {
        showToast('✓ Teks: ' + text);
      }
    }

    function playTranslatedGenderAudio(gender) {
      if (gender === 'male') {
        speakThai(latestMaleThai, 'male');
      } else {
        speakThai(latestFemaleThai, 'female');
      }
    }

    function triggerTranslatorMic() {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        showToast('Browser belum mendukung Speech Recognition. Silakan ketik langsung.');
        return;
      }
      try {
        const recog = new SpeechRecognition();
        recog.lang = transDirection === 'id-to-th' ? 'id-ID' : 'th-TH';
        recog.interimResults = false;
        showToast('🎙️ Mendengarkan... Silakan berbicara sekarang');
        recog.onresult = (evt) => {
          const spoken = evt.results[0][0].transcript;
          document.getElementById('translatorInput').value = spoken;
          performLiveTranslation();
        };
        recog.onerror = () => {
          showToast('Tidak ada suara terdeteksi.');
        };
        recog.start();
      } catch (err) {
        showToast('Mikrofon tidak dapat diakses.');
      }
    }

    /* Offline quick translations dictionary fallback */
    const OFFLINE_THAI_DICT = {
      'halo': { thai: 'สวัสดีครับ', roman: 'sà-wàt-dii khráp', ind: 'Halo / Selamat sejahtera' },
      'terima kasih': { thai: 'ขอบคุณมากครับ', roman: 'khɔ̀ɔp-khun mâak khráp', ind: 'Terima kasih banyak' },
      'berapa harga': { thai: 'อันนี้ราคาเท่าไหร่ครับ', roman: 'an-níi raa-khaa thâo-rài khráp', ind: 'Ini berapa harganya?' },
      'jangan pedas': { thai: 'ไม่เผ็ดเลยนะครับ', roman: 'mâi phèt loei ná khráp', ind: 'Jangan pedas sama sekali ya' },
      'sedikit pedas': { thai: 'เผ็ดนิดหน่อยครับ', roman: 'phèt nít-nɔ̀ɔi khráp', ind: 'Sedikit pedas saja' },
      'toilet': { thai: 'ห้องน้ำอยู่ที่ไหนครับ', roman: 'hɔ̂ng-náam yùu thîi-nǎi khráp', ind: 'Di mana toilet?' },
      'enak': { thai: 'อร่อยมากครับ', roman: 'à-rɔ̀ɔi mâak khráp', ind: 'Sangat enak' },
      'diskon': { thai: 'ลดราคาหน่อยได้ไหมครับ', roman: 'lót raa-khaa nɔ̀ɔi dâi mǎi khráp', ind: 'Bisa diskon sedikit tidak?' },
      'bon': { thai: 'เช็คบิลด้วยครับ', roman: 'chék bin dûay khráp', ind: 'Minta bon / hitung tagihan' }
    };

    async function performLiveTranslation() {
      const inputEl = document.getElementById('translatorInput');
      const query = inputEl.value.trim();
      if (!query) {
        showToast('Ketik kalimat terlebih dahulu!');
        return;
      }

      const submitBtn = document.getElementById('translateSubmitBtn');
      const statusInfo = document.getElementById('transStatusInfo');
      const resultBox = document.getElementById('translatorResultBox');

      submitBtn.textContent = 'Menerjemahkan...';
      submitBtn.disabled = true;
      statusInfo.textContent = '⚡ Menghubungkan ke Neural Translation Service...';

      const sl = transDirection === 'id-to-th' ? 'auto' : 'th';
      const tl = transDirection === 'id-to-th' ? 'th' : 'id';

      try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&dt=rm&q=${encodeURIComponent(query)}`;
        const resp = await fetch(url);
        if (!resp.ok) throw new Error('API Response Error ' + resp.status);

        const data = await resp.json();
        let translatedText = '';
        let romanization = '';

        if (data && data[0] && Array.isArray(data[0])) {
          translatedText = data[0].map(segment => segment[0] || '').join('');
          if (data[0].length > 1 && data[0][data[0].length - 1] && typeof data[0][data[0].length - 1][3] === 'string') {
            romanization = data[0][data[0].length - 1][3];
          } else if (data[0][0] && data[0][0][3]) {
            romanization = data[0][0][3];
          }
        }

        if (!translatedText) {
          throw new Error('Empty response');
        }

        resultBox.style.display = 'block';

        if (transDirection === 'id-to-th') {
          const isQuestion = /[?？ไหม|มั้ย|หรือ|อะไร|ที่ไหน|เมื่อไหร่|เท่าไหร่|กี่|ใคร|ทำไม]/.test(translatedText) || query.includes('?');
          latestFemaleThai = formatThaiForGender(translatedText, 'female');
          latestFemaleRoman = formatRomanForGender(romanization, 'female', isQuestion);
          latestMaleThai = formatThaiForGender(translatedText, 'male');
          latestMaleRoman = formatRomanForGender(romanization, 'male', isQuestion);

          document.getElementById('transFemaleThai').textContent = latestFemaleThai;
          document.getElementById('transFemaleRoman').textContent = latestFemaleRoman || 'Aksen penutur wanita (ค่ะ/คะ) • Klik untuk mendengar';
          document.getElementById('transMaleThai').textContent = latestMaleThai;
          document.getElementById('transMaleRoman').textContent = latestMaleRoman || 'Aksen penutur pria (ครับ) • Klik untuk mendengar';

          const pref = appState.speakerGender || 'female';
          if (pref === 'male') {
            speakThai(latestMaleThai, 'male');
          } else {
            speakThai(latestFemaleThai, 'female');
          }
        } else {
          latestFemaleThai = query;
          latestMaleThai = query;
          document.getElementById('transFemaleThai').textContent = translatedText;
          document.getElementById('transFemaleRoman').textContent = `Teks Asli: ${query}`;
          document.getElementById('transMaleThai').textContent = translatedText;
          document.getElementById('transMaleRoman').textContent = `Teks Asli: ${query}`;
          speakThai(query, appState.speakerGender);
        }

        statusInfo.textContent = `✓ Berhasil diterjemahkan ke 2 gaya bicara (Laki-laki & Perempuan)`;
      } catch (err) {
        console.warn('Live translate network fallback:', err);
        let foundOffline = null;
        const lowerQ = query.toLowerCase();
        for (const [k, v] of Object.entries(OFFLINE_THAI_DICT)) {
          if (lowerQ.includes(k)) {
            foundOffline = v;
            break;
          }
        }

        resultBox.style.display = 'block';
        if (foundOffline) {
          const isQ = foundOffline.ind.includes('?');
          latestFemaleThai = formatThaiForGender(foundOffline.thai, 'female');
          latestFemaleRoman = formatRomanForGender(foundOffline.roman, 'female', isQ);
          latestMaleThai = formatThaiForGender(foundOffline.thai, 'male');
          latestMaleRoman = formatRomanForGender(foundOffline.roman, 'male', isQ);

          document.getElementById('transFemaleThai').textContent = latestFemaleThai;
          document.getElementById('transFemaleRoman').textContent = `${latestFemaleRoman} (${foundOffline.ind})`;
          document.getElementById('transMaleThai').textContent = latestMaleThai;
          document.getElementById('transMaleRoman').textContent = `${latestMaleRoman} (${foundOffline.ind})`;
          statusInfo.textContent = '✓ Diterjemahkan melalui Kamus Cerdas Bawaan (Offline)';
          speakThai(appState.speakerGender === 'male' ? latestMaleThai : latestFemaleThai, appState.speakerGender);
        } else {
          document.getElementById('transFemaleThai').textContent = query;
          document.getElementById('transFemaleRoman').textContent = 'Periksa koneksi internet untuk terjemahan daring.';
          document.getElementById('transMaleThai').textContent = query;
          document.getElementById('transMaleRoman').textContent = 'Periksa koneksi internet untuk terjemahan daring.';
          statusInfo.textContent = '⚠️ Layanan daring tidak dapat dihubungi. Menampilkan mode cadangan.';
        }
      } finally {
        submitBtn.textContent = 'Terjemahkan Sekarang ➔';
        submitBtn.disabled = false;
      }
    }

    /* 2. THAILAND ENCYCLOPEDIA & SEARCH ENGINE */
    const THAILAND_ENCYCLOPEDIA = [
      {
        id: 'wat-arun',
        category: 'wisata',
        categoryLabel: 'Destinasi & Kuil',
        title: 'Wat Arun (วัดอรุณ) - Kuil Fajar Megah',
        thai: 'วัดอรุณราชวราราม',
        phonetic: 'wát à-run râat-chá-wá-raam',
        icon: '🏛️',
        summary: 'Salah satu kuil paling ikonik di Bangkok yang berdiri megah di tepi barat Sungai Chao Phraya. Menara utamanya (prang) setinggi lebih dari 70 meter dihiasi keramik porselen Tiongkok yang memancarkan kilau indah saat terkena cahaya.',
        tips: '💡 Tips Berkunjung: Datang sore hari sebelum matahari terbenam untuk siluet spektakuler. Di sekitar kuil banyak gerai penyewaan busana tradisional Thai (Chut Thai) seharga ~200 Baht.',
        tags: ['wat arun', 'kuil fajar', 'chao phraya', 'bangkok', 'chut thai', 'spot foto']
      },
      {
        id: 'grand-palace',
        category: 'wisata',
        categoryLabel: 'Destinasi & Kuil',
        title: 'The Grand Palace & Wat Phra Kaew (พระบรมมหาราชวัง)',
        thai: 'พระบรมมหาราชวัง และ วัดพระแก้ว',
        phonetic: 'phrá bɔɔ-rom-má-hǎa-râat-chá-wang láe wát phrá kâew',
        icon: '👑',
        summary: 'Kompleks istana kerajaan yang didirikan tahun 1782 pada masa Raja Rama I. Di dalamnya terdapat Wat Phra Kaew yang menyimpan arca suci Buddha Zamrud (Emerald Buddha), pusaka paling disucikan di seluruh Thailand.',
        tips: '💡 Aturan Ketat: Wajib memakai pakaian berlengan dan celana/rok panjang di bawah lutut. Dilarang memakai celana sobek, legging ketat, atau sandal terbuka tanpa tali belakang.',
        tags: ['grand palace', 'wat phra kaew', 'emerald buddha', 'istana raja', 'bangkok']
      },
      {
        id: 'wat-pho',
        category: 'wisata',
        categoryLabel: 'Destinasi & Kuil',
        title: 'Wat Pho (วัดโพธิ์) - Buddha Berbaring Emas',
        thai: 'วัดพระเชตุพนวิมลมังคลาราม',
        phonetic: 'wát phrá chêet-tù-phon',
        icon: '🛕',
        summary: 'Kuil tertua dan terbesar di Bangkok yang menyimpan patung Buddha Berbaring berlapis emas sepanjang 46 meter dan tinggi 15 meter. Telapak kakinya dihiasi 108 simbol keberuntungan bertatahkan mutiara. Wat Pho juga diakui UNESCO sebagai tempat lahirnya pijat tradisional Thai.',
        tips: '💡 Pengalaman Menarik: Beli mangkuk berisi 108 koin perunggu seharga 20 Baht dan masukkan satu per satu ke dalam deretan pot tembaga untuk doa keberuntungan.',
        tags: ['wat pho', 'reclining buddha', 'buddha tidur', 'pijat thai', 'massage school']
      },
      {
        id: 'chatuchak',
        category: 'wisata',
        categoryLabel: 'Destinasi & Belanja',
        title: 'Pasar Akhir Pekan Chatuchak (ตลาดนัดจตุจักร)',
        thai: 'ตลาดนัดจตุจักร',
        phonetic: 'tà-làat nát jà-tù-jàk',
        icon: '🛍️',
        summary: 'Pasar akhir pekan terbesar di dunia dengan lebih dari 15.000 kios yang terbagi dalam 27 bagian, menjual busana, kerajinan tangan, suvenir, keramik, rempah-rempah, hingga karya seni kontemporer.',
        tips: '💡 Tips Belanja: Buka Sabtu & Minggu (09.00 - 18.00). Bawa uang tunai Baht secukupnya, kenakan pakaian adem, dan gunakan frasa "Lot noi dai mai krap?" untuk menawar.',
        tags: ['chatuchak', 'pasar jjt', 'weekend market', 'belanja suvenir', 'bangkok shopping']
      },
      {
        id: 'yaowarat',
        category: 'wisata',
        categoryLabel: 'Destinasi & Street Food',
        title: 'Yaowarat Chinatown (เยาวราช) - Surga Street Food Malam',
        thai: 'เยาวราช',
        phonetic: 'yao-wá-râat',
        icon: '🏮',
        summary: 'Jantung pecinan tertua di Bangkok yang berubah menjadi festival kuliner kaki lima raksasa setelah matahari terbenam. Penuh dengan papan reklame neon bernuansa klasik, toko emas bersejarah, dan aroma masakan wajan panas (wok hei).',
        tips: '💡 Waktu Terbaik: Datang mulai jam 18.30 Selasa-Minggu (Senin sebagian besar pedagang libur). Wajib coba roti bakar isi pandan mentega (Nai Ek Roll Noodles) dan seafood panggang.',
        tags: ['yaowarat', 'chinatown', 'street food malam', 'kuliner bangkok', 'roti bakar']
      },
      {
        id: 'chiang-mai',
        category: 'wisata',
        categoryLabel: 'Destinasi & Budaya',
        title: 'Chiang Mai & Wat Phra That Doi Suthep (เชียงใหม่)',
        thai: 'เชียงใหม่ และ วัดพระธาตุดอยสุเทพ',
        phonetic: 'chiang-mài láe wát phrá thâat dɔɔi sù-thêep',
        icon: '⛰️',
        summary: 'Ibukota kerajaan Lanna di utara Thailand yang dikelilingi pegunungan berkabut, kuil kayu berukir jati kuno, dan kafe artistik. Di puncak gunung Doi Suthep berdiri chedi emas suci yang menghadap langsung ke seluruh lembah kota Chiang Mai.',
        tips: '💡 Suasana: Udara di Chiang Mai jauh lebih sejuk dari Bangkok, terutama antara November hingga Februari. Sangat cocok bagi pecinta alam, budaya kuno, dan meditasi.',
        tags: ['chiang mai', 'doi suthep', 'lanna', 'utara thailand', 'gunung']
      },
      {
        id: 'phi-phi',
        category: 'wisata',
        categoryLabel: 'Destinasi & Alam',
        title: 'Kepulauan Phi Phi & Maya Bay (หมู่เกาะพีพี)',
        thai: 'หมู่เกาะพีพี และ อ่าวมาหยา',
        phonetic: 'mùu kɔ̀ phii-phii láe àao maa-hǎa',
        icon: '🏝️',
        summary: 'Gugusan pulau karang kapur spektakuler di Laut Andaman (provinsi Krabi) dengan air laut biru toska sebening kristal dan pasir putih halus. Maya Bay terkenal di dunia internasional lewat film "The Beach".',
        tips: '💡 Transportasi: Naik speedboat dari Phuket (1 jam) atau dari Krabi (45 menit). Periode terbaik adalah November-April saat ombak tenang dan sinar matahari cerah.',
        tags: ['phi phi island', 'maya bay', 'krabi', 'phuket', 'pantai andaman']
      },
      {
        id: 'pad-thai',
        category: 'kuliner',
        categoryLabel: 'Kuliner & Makanan',
        title: 'Pad Thai (ผัดไทย) - Mie Goreng Khas Kebanggaan Bangsa',
        thai: 'ผัดไทยกุ้งสด',
        phonetic: 'phàt-thai kûng sòt',
        icon: '🍜',
        summary: 'Hidangan mie beras tumis legendaris dengan udang segar, telur, tahu kuning, tauge renyah, daun kucai, dan kacang tanah sangrai tumbuk. Cita rasanya seimbang antara asam manis asam jawa (tamarind), gurih kecap ikan, dan pedas cabai bubuk.',
        tips: '💡 Cara Makan: Selalu peras jeruk nipis segar di atasnya dan aduk bersama bubuk cabai dan kacang tanah sesuai selera sebelum dinikmati.',
        tags: ['pad thai', 'mie goreng thai', 'street food', 'tamarind', 'kuliner']
      },
      {
        id: 'tom-yum',
        category: 'kuliner',
        categoryLabel: 'Kuliner & Makanan',
        title: 'Tom Yum Goong (ต้มยำกุ้ง) - Sup Pedas Asam Rempah',
        thai: 'ต้มยำกุ้ง',
        phonetic: 'tôm yam kûng',
        icon: '🍲',
        summary: 'Sup berkuah merah aromatik berisi udang galah sungai, jamur tiram, serai, daun jeruk purut, lengkuas, dan cabai rawit merah. Terdapat dua jenis kuah: Tom Yum Nam Sai (kuah bening) dan Tom Yum Nam Khon (kuah kental bersantan atau susu evaporasi).',
        tips: '💡 Kosakata Pemesanan: Katakan "Ao Tom Yum Goong Nam Khon krap" untuk memesan versi kuah kental yang kaya rasa dan lezat.',
        tags: ['tom yum', 'sup udang', 'kuah pedas', 'nam khon', 'rempah thai']
      },
      {
        id: 'som-tum',
        category: 'kuliner',
        categoryLabel: 'Kuliner & Makanan',
        title: 'Som Tum Thai (ส้มตำไทย) - Salad Pepaya Muda Segar',
        thai: 'ส้มตำไทย',
        phonetic: 'sôm tam thai',
        icon: '🥗',
        summary: 'Salad pepaya muda serut yang ditumbuk segar di dalam cobek tanah liat khas wilayah Isan. Dicampur tomat ceri, kacang panjang, kacang tanah sangrai, gula kelapa, perasan jeruk nipis, dan udang kering.',
        tips: '💡 Peringatan Pedas: Som Tum asli sangat pedas (bisa memakai 5-10 cabai rawit). Jika tidak kuat pedas, wajib bilang: "Som Tum Thai, mai phet ná khráp".',
        tags: ['som tum', 'salad pepaya', 'isan', 'pedas asam', 'makanan sehat']
      },
      {
        id: 'mango-sticky-rice',
        category: 'kuliner',
        categoryLabel: 'Kuliner & Dessert',
        title: 'Khao Niew Mamuang (ข้าวเหนียวมะม่วง) - Mango Sticky Rice',
        thai: 'ข้าวเหนียวมะม่วง',
        phonetic: 'khâao-nǐaw má-mûang',
        icon: '🥭',
        summary: 'Dessert paling dicintai turis di Thailand! Kombinasi ketan pulen yang dimasak dengan santan kental wangi daun pandan, disajikan bersama irisan mangga manis jenis Nam Dok Mai (mangga nektar bunga) dan taburan kacang hijau kupas renyah.',
        tips: '💡 Musim Terbaik: Musim puncak mangga manis kualitas terbaik jatuh pada bulan Maret hingga Mei.',
        tags: ['mango sticky rice', 'khao niew mamuang', 'ketan mangga', 'dessert thai', 'nam dok mai']
      },
      {
        id: 'cha-yen',
        category: 'kuliner',
        categoryLabel: 'Kuliner & Minuman',
        title: 'Cha Yen (ชาเย็น) - Thai Milk Tea Orisinal Bangkok',
        thai: 'ชาเย็น',
        phonetic: 'chaa-yen',
        icon: '🧋',
        summary: 'Teh susu dingin khas Thailand yang diseduh dari daun teh hitam beraroma bunga lawang (star anise), kapulaga, dan biji asam jawa, menghasilkan warna oranye tua yang khas. Disajikan dengan susu kental manis dan susu evaporasi di atas es batu serut.',
        tips: '💡 Atur Tingkat Manis: Thai Tea standar cenderung sangat manis. Jika ingin tingkat manis sedang, ucapkan: "Waan noi khráp" (หวานน้อย - manis sedikit saja).',
        tags: ['cha yen', 'thai tea', 'thai milk tea', 'minuman manis', 'es teh']
      },
      {
        id: 'salam-wai',
        category: 'budaya',
        categoryLabel: 'Budaya & Etika',
        title: 'Salam Wai (การไหว้) - Etika Menghormati Orang Lain',
        thai: 'การไหว้',
        phonetic: 'kaan-wâai',
        icon: '🙏',
        summary: 'Sikap tubuh merapatkan kedua telapak tangan di depan tubuh disertai sedikit menundukkan kepala. Tingkatan Wai terbagi tiga: (1) Sejajar dada untuk teman sebaya, (2) Ujung ibu jari menyentuh ujung hidung untuk orang tua, guru, dan senior, (3) Ujung ibu jari di antara kedua alis untuk biksu dan keluarga kerajaan.',
        tips: '💡 Aturan Wai: Orang yang lebih muda memberi Wai terlebih dahulu. Jangan memberi Wai kepada anak kecil atau staf layanan/pelayan (cukup tersenyum ramah dan ucapkan Khop Khun Krap/Kha).',
        tags: ['salam wai', 'etika bersalaman', 'budaya thai', 'sopan santun', 'penghormatan']
      },
      {
        id: 'etika-kuil',
        category: 'budaya',
        categoryLabel: 'Budaya & Etika',
        title: 'Etika Berkunjung ke Kuil Buddha (วัด)',
        thai: 'มารยาทในการเข้าวัด',
        phonetic: 'maa-rá-yâat nai kaan khâo wát',
        icon: '🛕',
        summary: 'Kuil adalah tempat peribadatan suci bagi warga Thailand. Aturan pokok meliputi: selalu melepas alas kaki sebelum masuk aula utama (Ubosot/Vihara), tidak mengarahkan telapak kaki ke arah patung Buddha atau biksu (duduk bersila atau bertumpu ke samping / phap phiap), dan wanita dilarang menyentuh fisik biksu.',
        tips: '💡 Foto Selfie: Jangan berfoto membelakangi patung Buddha dengan pose selfie yang tidak pantas, dan dilarang memanjat altar atau stupa.',
        tags: ['etika kuil', 'aturan wat', 'lepas sepatu', 'biksu', 'buddha']
      },
      {
        id: 'monarki',
        category: 'budaya',
        categoryLabel: 'Budaya & Hukum',
        title: 'Penghormatan Keluarga Kerajaan & Lagu Kebangsaan',
        thai: 'การเคารพสถาบันพระมหากษัตริย์',
        phonetic: 'kaan khao-róp sà-thǎa-ban phrá má-hǎa-kà-sàt',
        icon: '🇹🇭',
        summary: 'Institusi kerajaan sangat dihormati oleh masyarakat Thailand dan dilindungi oleh hukum Lèse-majesté yang tegas. Setiap jam 08.00 pagi dan 18.00 sore, lagu kebangsaan diputar di stasiun kereta, taman umum, dan gedung pemerintah, di mana semua orang akan berhenti berjalan dan berdiri tegak.',
        tips: '💡 Hal Tabu: Jangan pernah menginjak koin atau uang kertas Baht yang terjatuh karena terdapat gambar Raja. Di bioskop, semua penonton wajib berdiri saat lagu penghormatan kerajaan diputar sebelum film dimulai.',
        tags: ['raja thailand', 'lagu kebangsaan', 'uang baht', 'lese majeste', 'etika monarki']
      },
      {
        id: 'songkran',
        category: 'budaya',
        categoryLabel: 'Festival Budaya',
        title: 'Festival Songkran (วันสงกรานต์) - Tahun Baru Air Thai',
        thai: 'วันสงกรานต์',
        phonetic: 'wan sǒng-kraan',
        icon: '💦',
        summary: 'Perayaan tahun baru tradisional Thailand yang jatuh setiap tanggal 13-15 April. Air melambangkan pembersihan dosa, nasib buruk, dan penyegaran jiwa. Perayaan bertransformasi menjadi pesta perang air massal terbesar di dunia di jalanan Silom, Khao San Road, dan parit kota tua Chiang Mai.',
        tips: '💡 Perlengkapan Wajib: Beli tas tahan air (waterproof pouch) untuk ponsel dan paspor, kenakan kacamata renang/goggles, dan jangan menyiram air ke biksu, lansia, atau pengendara motor yang melaju kencang.',
        tags: ['songkran', 'festival air', 'tahun baru thai', 'khao san road', 'april']
      },
      {
        id: 'loy-krathong',
        category: 'budaya',
        categoryLabel: 'Festival Budaya',
        title: 'Loy Krathong (วันลอยกระทง) - Festival Lentera Sungai',
        thai: 'วันลอยกระทง',
        phonetic: 'wan lɔɔi krà-thong',
        icon: '🪷',
        summary: 'Festival lentera terapung yang dirayakan pada malam bulan purnama ke-12 penanggalan Thai (biasanya bulan November). Masyarakat melarungkan "krathong" (perahu kecil dari batang dan daun pisang berhias bunga teratai, dupa, dan lilin) ke sungai untuk menghormati Dewi Air (Phra Mae Khongkha) dan melepaskan dendam serta energi negatif.',
        tips: '💡 Rekomendasi Lokasi: Tepi Sungai Chao Phraya (Asiatique & ICONSIAM) di Bangkok, atau festival lentera terbang Yi Peng di Chiang Mai.',
        tags: ['loy krathong', 'lentera apung', 'yi peng', 'dewi air', 'november festival']
      },
      {
        id: 'bts-mrt',
        category: 'transport',
        categoryLabel: 'Transportasi Bangkok',
        title: 'BTS Skytrain & MRT Bangkok - Bebas Macet Total',
        thai: 'รถไฟฟ้าบีทีเอส และ รถไฟใต้ดินเอ็มอาร์ที',
        phonetic: 'rót-fai-fáa bee-tee-èet láe rót-fai-tâi-din em-aar-tee',
        icon: '🚝',
        summary: 'Sistem kereta layang (BTS) dan kereta bawah tanah (MRT) ber-AC dingin yang menjangkau seluruh pusat perbelanjaan, kawasan bisnis Sukhumvit, Silom, dan Chatuchak. Ini adalah moda transportasi tercepat dan paling efisien untuk menghindari kemacetan Bangkok yang legendaris.',
        tips: '💡 Kartu Pembayaran: MRT menerima kartu kredit/debit contactless (Visa/Mastercard). Untuk BTS Skytrain, Anda bisa membeli tiket koin satuan di mesin atau membeli Rabbit Card yang bisa diisi ulang.',
        tags: ['bts skytrain', 'mrt bangkok', 'rabbit card', 'kereta bangkok', 'bebas macet']
      },
      {
        id: 'tuktuk',
        category: 'transport',
        categoryLabel: 'Transportasi Unik',
        title: 'Tuk-Tuk Bangkok & Tips Tawar Menawar Tarif',
        thai: 'รถตุ๊กตุ๊ก',
        phonetic: 'rót túk-túk',
        icon: '🛺',
        summary: 'Kendaraan roda tiga bertenaga gas dengan suara knalpot khas yang menjadi simbol wisata Bangkok. Sensasi melaju di antara celah jalanan kota memberi pengalaman seru yang tak terlupakan.',
        tips: '💡 Waspada Scam: Tuk-Tuk tidak memakai argo meter. SELALU sepakati tarif sebelum naik. Waspadai supir yang menawarkan tarif murah (misal 20 Baht) dengan alasan mengantar ke toko perhiasan atau penjahit sutra, atau yang mengatakan "Grand Palace sedang tutup hari ini".',
        tags: ['tuk tuk', 'kendaraan roda tiga', 'tawar tarif', 'tips scam', 'wisata bangkok']
      },
      {
        id: 'chao-phraya-boat',
        category: 'transport',
        categoryLabel: 'Transportasi Air',
        title: 'Chao Phraya Express Boat - Berlayar Menyusuri Sejarah',
        thai: 'เรือด่วนเจ้าพระยา',
        phonetic: 'ruea-dùan jâo phrá-yaa',
        icon: '⛴️',
        summary: 'Perahu sungai penumpang yang melintasi dermaga-dermaga utama dari Sathorn (stasiun BTS Saphan Taksin) menuju Iconsiam, Wat Arun, Wat Pho, dan Grand Palace dengan tarif sangat terjangkau (16-30 Baht).',
        tips: '💡 Pilihan Bendera: Perahu berbendera oranye (Orange Flag) beroperasi setiap hari dengan tarif tetap 16 Baht ke semua dermaga penting. Ada juga Tourist Boat bendera biru dengan dek atas terbuka.',
        tags: ['chao phraya express', 'perahu sungai', 'dermaga sathorn', 'iconsiam', 'wat arun']
      }
    ];

    function renderEncyclopediaCards(items) {
      const container = document.getElementById('encycloCardsGrid');
      if (!container) return;

      if (!items || items.length === 0) {
        container.innerHTML = `
          <div style="grid-column: 1 / -1; text-align:center; padding:40px 20px; background:var(--bg-card); border-radius:var(--radius-lg); border:1px dashed var(--border-color);">
            <div style="font-size:36px; margin-bottom:12px;">🔍</div>
            <div style="font-size:16px; font-weight:700; margin-bottom:6px;">Topik Tidak Ditemukan di Database Lokal</div>
            <p style="font-size:13px; color:var(--text-muted);">Sistem secara otomatis mencoba melakukan pencarian daring melalui Wikipedia REST API.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = items.map(item => `
        <article class="encyclo-card" id="ecard-${item.id}">
          <div class="encyclo-card-header">
            <span class="encyclo-category-badge">${item.icon || '📌'} ${item.categoryLabel || item.category}</span>
            <button class="btn-audio-listen" onclick="speakThai('${item.thai}')" title="Dengarkan pengucapan penutur asli Bangkok">
              🔊 Lafal Thai
            </button>
          </div>
          <h3 class="encyclo-card-title">${item.title}</h3>
          <div class="encyclo-card-thai" onclick="speakThai('${item.thai}')" title="Klik untuk mendengar suara asli" style="cursor:pointer;">
            ${item.thai}
          </div>
          <div class="encyclo-card-roman">${item.phonetic}</div>
          <p class="encyclo-card-desc">${item.summary}</p>
          ${item.tips ? `<div class="encyclo-card-tips">${item.tips}</div>` : ''}
        </article>
      `).join('');
    }

    function filterEncyclopediaCategory(cat, btn) {
      document.querySelectorAll('#encycloFilterPills .pill-filter').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');

      if (cat === 'all') {
        renderEncyclopediaCards(THAILAND_ENCYCLOPEDIA);
        renderAiMediaCards(THAI_MEDIA_DATABASE);
      } else {
        const filtered = THAILAND_ENCYCLOPEDIA.filter(item => item.category === cat);
        renderEncyclopediaCards(filtered);
      }
    }

    async function executeEncyclopediaSearch() {
      const input = document.getElementById('encycloSearchInput');
      const query = input.value.trim().toLowerCase();
      const statusBanner = document.getElementById('encycloLiveStatus');
      const container = document.getElementById('encycloCardsGrid');

      if (!query) {
        statusBanner.style.display = 'none';
        renderEncyclopediaCards(THAILAND_ENCYCLOPEDIA);
        return;
      }

      // 1. Local Search Filter
      const matchedLocal = THAILAND_ENCYCLOPEDIA.filter(item => {
        return item.title.toLowerCase().includes(query) ||
          item.thai.includes(query) ||
          item.summary.toLowerCase().includes(query) ||
          (item.tips && item.tips.toLowerCase().includes(query)) ||
          (item.tags && item.tags.some(t => t.includes(query)));
      });

      renderEncyclopediaCards(matchedLocal);

      // 2. Fetch live extra details from Indonesian Wikipedia REST API
      statusBanner.style.display = 'block';
      statusBanner.textContent = `🔍 Sedang mencari informasi tambahan seputar "${query}" di Wikipedia Internasional...`;

      try {
        const wikiSearchUrl = `https://id.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query + ' thailand')}&utf8=&format=json&origin=*`;
        const resp = await fetch(wikiSearchUrl);
        const searchData = await resp.json();

        if (searchData && searchData.query && searchData.query.search && searchData.query.search.length > 0) {
          const topHits = searchData.query.search.slice(0, 3);
          const wikiArticles = [];

          for (const hit of topHits) {
            // Avoid duplicate if title resembles matched local card
            const pageTitle = hit.title;
            try {
              const summaryUrl = `https://id.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(pageTitle)}`;
              const sumResp = await fetch(summaryUrl);
              if (sumResp.ok) {
                const sumData = await sumResp.json();
                if (sumData.extract && sumData.extract.length > 40) {
                  wikiArticles.push({
                    title: sumData.title,
                    extract: sumData.extract,
                    thumbnail: sumData.thumbnail ? sumData.thumbnail.source : null,
                    pageUrl: sumData.content_urls ? sumData.content_urls.desktop.page : `https://id.wikipedia.org/wiki/${encodeURIComponent(pageTitle)}`
                  });
                }
              }
            } catch (sumErr) {
              console.warn('Wiki summary fetch error:', sumErr);
            }
          }

          if (wikiArticles.length > 0) {
            statusBanner.textContent = `✓ Ditemukan ${matchedLocal.length} artikel lokal & ${wikiArticles.length} artikel ensiklopedia langsung.`;

            // Append Wiki Cards to container
            wikiArticles.forEach(wiki => {
              const card = document.createElement('article');
              card.className = 'encyclo-card';
              card.style.borderLeft = '4px solid var(--accent-gold)';
              card.innerHTML = `
                <div class="encyclo-card-header">
                  <span class="encyclo-category-badge" style="background:var(--accent-gold-light); color:var(--text);">🌐 Live Ensiklopedia Wikipedia</span>
                  <a href="${wiki.pageUrl}" target="_blank" rel="noopener" class="btn-audio-listen" style="text-decoration:none;">
                    Buka Artikel ↗
                  </a>
                </div>
                <h3 class="encyclo-card-title">${wiki.title}</h3>
                ${wiki.thumbnail ? `<img src="${wiki.thumbnail}" alt="${wiki.title}" style="width:100%; height:160px; object-fit:cover; border-radius:var(--radius-md); margin:8px 0;">` : ''}
                <p class="encyclo-card-desc">${wiki.extract}</p>
                <div class="encyclo-card-tips">
                  💡 Tip Pencarian: Kata kunci ini diambil langsung dari basis data terbuka ensiklopedia Thailand.
                </div>
              `;
              container.appendChild(card);
            });
          } else {
            statusBanner.textContent = `✓ Menampilkan ${matchedLocal.length} hasil dari koleksi kurasi Nong Mali.`;
          }
        } else {
          statusBanner.textContent = matchedLocal.length > 0
            ? `✓ Menampilkan ${matchedLocal.length} hasil kurasi.`
            : `Tidak ditemukan artikel tambahan di Wikipedia.`;
        }
      } catch (err) {
        console.warn('Wikipedia search fetch error:', err);
        statusBanner.textContent = `Menampilkan ${matchedLocal.length} hasil kurasi Nong Mali.`;
      }
    }

    /* 3. THAILAND CULTURE & TRAVEL Q&A CHAT ENGINE (NONG MALI) */
    const QA_KNOWLEDGE_BASE = [
      {
        patterns: ['perempuan', 'wanita', 'laki', 'pria', 'khrap', 'kha', 'ครับ', 'ค่ะ', 'คะ', 'gaya bicara', 'gender', 'ngomong', 'beda', 'perbedaan'],
        title: 'Perbedaan Cara Bicara Penutur Laki-laki vs Perempuan dalam Bahasa Thai',
        thaiKey: 'สวัสดีครับ สวัสดีค่ะ',
        thaiPhonetic: 'sà-wàt-dii khráp (Pria) / sà-wàt-dii khà (Wanita)',
        response: `Dalam bahasa Thailand, jenis kelamin penutur menentukan partikel kesopanan dan kata ganti yang digunakan:\n\n` +
          `### 👨 Penutur Laki-laki (Pria):\n` +
          `1. **Partikel Sopan:** Selalu menggunakan **ครับ (khráp)** di akhir kalimat (baik kalimat berita, terima kasih, permohonan, maupun pertanyaan).\n` +
          `   • Contoh: *สวัสดีครับ (sà-wàt-dii khráp)* = Halo.\n` +
          `   • Contoh: *ขอบคุณครับ (khɔ̀ɔp-khun khráp)* = Terima kasih.\n` +
          `   • Contoh: *อันนี้เท่าไหร่ครับ (an-níi thâo-rài khráp)* = Berapa harganya?\n` +
          `2. **Kata Ganti "Saya":** Menggunakan **ผม (phǒm)**.\n\n` +
          `### 👩 Penutur Perempuan (Wanita):\n` +
          `1. **Partikel Sopan Kalimat Pernyataan/Salam/Jawaban:** Menggunakan **ค่ะ (khà - nada jatuh/rendah)**.\n` +
          `   • Contoh: *สวัสดีค่ะ (sà-wàt-dii khà)* = Halo.\n` +
          `   • Contoh: *ขอบคุณค่ะ (khɔ̀ɔp-khun khà)* = Terima kasih.\n` +
          `   • Contoh: *ใช่ค่ะ (châi khà)* = Ya, betul.\n` +
          `2. **Partikel Sopan Kalimat Pertanyaan/Ajakan:** Menggunakan **คะ (khá - nada tinggi melengking)**.\n` +
          `   • Contoh: *อันนี้เท่าไหร่คะ (an-níi thâo-rài khá)* = Berapa harganya?\n` +
          `   • Contoh: *ไปไหนคะ (pai nǎi khá)* = Mau ke mana?\n` +
          `3. **Kata Ganti "Saya":** Menggunakan **ฉัน (chǎn)** (umum/akrab) atau **ดิฉัน (dì-chǎn)** (formal).\n\n` +
          `*Tips Praktis:* Pria konsisten satu partikel (*khráp*), sedangkan wanita menggunakan nada jatuh *khà* saat menjawab/menyapa, dan nada naik/tinggi *khá* saat bertanya!`,
        tips: 'Ganti gaya bicara Anda kapan saja melalui tombol header atau pilih mode pria/wanita di studio latihan!'
      },
      {
        patterns: ['kuil', 'pakaian', 'baju', 'celana', 'rok', 'berpakaian', 'sopan', 'temple', 'wat'],
        title: 'Aturan Pakaian & Etika Mengunjungi Kuil di Thailand',
        thaiKey: 'การแต่งกายไปวัด',
        thaiPhonetic: 'kaan tàeng-kaai pai wát',
        response: `Berikut adalah aturan berpakaian wajib saat mengunjungi kuil Buddha di Thailand:\n\n1. **Pundak & Lengan:** Baju wajib berlengan (kaos oblong/kemeja berkerah). Tank top, sleeveless, atau baju terbuka tidak diizinkan.\n2. **Bawahan:** Celana atau rok wajib menutupi lutut (hindari celana pendek, legging ketat, atau celana jeans sobek).\n3. **Alas Kaki:** Selalu lepas sepatu dan sandal sebelum melangkah ke lantai aula suci (Ubosot). Kaus kaki diperbolehkan.\n4. **Posisi Duduk:** Saat duduk di hadapan patung Buddha atau biksu, jangan pernah menjulurkan telapak kaki ke arah mereka. Duduklah bersila atau bertumpu ke samping (posisi Phap Phiap).\n5. **Interaksi dengan Biksu:** Biksu sangat dihormati. Perempuan dilarang menyentuh fisik biksu atau menyerahkan barang langsung ke tangan biksu (taruh barang di kain penampung).`,
        tips: 'Kuil seperti Grand Palace dan Wat Phra Kaew memiliki pemeriksaan pakaian paling ketat di Bangkok. Sedia selendang atau sarung cadangan!'
      },
      {
        patterns: ['wai', 'salam', 'hormat', 'sapaan', 'tangan', 'menyapa'],
        title: 'Cara Melakukan Salam Wai (การไหว้) dan Maknanya',
        thaiKey: 'สวัสดีครับ การไหว้',
        thaiPhonetic: 'sà-wàt-dii khráp, kaan-wâai',
        response: `Salam Wai adalah gestur merapatkan kedua telapak tangan di depan dada disertai sedikit membungkuk. Maknanya adalah ungkapan hormat, salam, terima kasih, sekaligus permohonan maaf.\n\n**3 Tingkatan Salam Wai:**\n• **Tingkat 1 (Teman & Sebaya):** Telapak tangan sejajar dada, ujung jari menyentuh dagu. Ucapkan *"Sawatdee krap/kha"*.\n• **Tingkat 2 (Orang Tua, Guru, Senior):** Ujung ibu jari menyentuh ujung hidung, telunjuk di antara kedua alis, kepala membungkuk lebih dalam.\n• **Tingkat 3 (Biksu & Bangsawan):** Ujung ibu jari menyentuh dahi di antara kedua alis, tundukan kepala paling hormat.\n\n*Catatan:* Anda tidak perlu membalas Wai kepada staf hotel/pelayan restoran atau anak kecil; cukup berikan senyuman ramah dan anggukan kepala.`,
        tips: 'Orang Thailand sangat mengapresiasi wisatawan asing yang mencoba memberi salam Wai dengan tulus dan sopan.'
      },
      {
        patterns: ['pedas', 'tidak pedas', 'makan', 'cabai', 'kuliner', 'sambal', 'phet'],
        title: 'Cara Memesan Makanan Tidak Pedas di Thailand',
        thaiKey: 'ไม่เผ็ดเลยนะครับ อร่อยมาก',
        thaiPhonetic: 'mâi phèt loei ná khráp, à-rɔ̀ɔi mâak',
        response: `Masakan Thailand terkenal dengan bumbu cabai rawit (phrik khi nu) yang sangat pedas! Untuk memesan sesuai toleransi Anda, gunakan frasa sakti ini:\n\n• **"Mai Phet khráp/kha"** (ไม่เผ็ด) = Jangan pedas sama sekali.\n• **"Phet nit noi khráp/kha"** (เผ็ดนิดหน่อย) = Sedikit pedas saja (biasanya diberi 1 cabai).\n• **"Mai sai phrik khráp/kha"** (ไม่ใส่พริก) = Jangan diberi cabai sama sekali.\n• **"Mai sai phong chu-rot"** (ไม่ใส่ผงชูรส) = Tanpa MSG/micin.\n• **"Aroi maak khráp/kha"** (อร่อยมาก) = Enak sekali! (puji juru masak setelah selesai).`,
        tips: 'Ingat tambahkan partikel sopan "khráp" untuk pria dan "kha" untuk wanita di akhir kalimat.'
      },
      {
        patterns: ['biaya', 'uang', 'baht', 'harga', 'budget', 'pengeluaran', 'kurs', 'rupiah', 'makan berapa'],
        title: 'Estimasi Biaya Makan & Pengeluaran Harian di Thailand',
        thaiKey: 'อันนี้กี่บาทครับ',
        thaiPhonetic: 'an-níi kìi bàat khráp',
        response: `Estimasi budget harian wisata di Bangkok (1 THB ≈ Rp 440 - Rp 460):\n\n• **Street Food Kaki Lima:** 50 - 80 Baht (Rp 22.000 - Rp 36.000) per porsi (Pad Thai, Khao Pad, Noodle Soup).\n• **Restoran Santai / Food Court Mall (Terminal 21 Pier 21):** 40 - 100 Baht per hidangan.\n• **Minuman & Kopi 7-Eleven:** 15 - 35 Baht (Thai Tea, jus kelapa, kopi).\n• **Transportasi BTS/MRT:** 17 - 62 Baht per perjalanan tergantung jarak stasiun.\n• **Pijat Tradisional Thai (1 Jam):** 250 - 350 Baht di gerai lokal terpercaya.\n• **Rekomendasi Budget Harian Backpacker/Santai:** 500 - 800 Baht/hari di luar akomodasi hotel.`,
        tips: 'Food court "Pier 21" di mall Terminal 21 Asok terkenal sebagai food court mall termurah dan terlezat di Bangkok dengan standar higienis tinggi.'
      },
      {
        patterns: ['bts', 'mrt', 'transportasi', 'tuktuk', 'taksi', 'taxis', 'grab', 'bolt', 'macet', 'kereta'],
        title: 'Panduan Transportasi Keliling Bangkok Bebas Macet',
        thaiKey: 'ไปสถานีรถไฟฟ้าครับ',
        thaiPhonetic: 'pai sà-thǎa-nii rót-fai-fáa khráp',
        response: `Lalu lintas Bangkok pada jam sibuk (07.30-09.30 & 17.00-20.00) sangat padat. Berikut opsi terbaik:\n\n1. **BTS Skytrain & MRT Subway:** Pilihan nomor satu! Cepat, dingin, tepat waktu, dan langsung menghubungkan pusat perbelanjaan (Siam, Asok, Chatuchak, Silom).\n2. **Chao Phraya Express Boat:** Hanya 16 Baht untuk menyeberang dan berlayar ke Wat Arun, Wat Pho, dan Grand Palace tanpa tersendat lampu merah.\n3. **Grab & Bolt:** Sangat praktis untuk memesan mobil atau motor ojek online dengan tarif pasti tanpa perlu tawar-menawar.\n4. **Taksi Konvensional:** Selalu pastikan supir menyalakan argo dengan mengucapkan: *"Meter na khráp/kha?"*. Jika supir menolak dan meminta tarif borongan, turun dan cari taksi lain.\n5. **Tuk-Tuk:** Naiklah untuk hiburan atau rute pendek, dan SELALU sepakati harga di awal sebelum masuk kendaraan.`,
        tips: 'Unduh aplikasi Moovit atau Google Maps untuk melihat peta rute transit BTS dan MRT secara real-time.'
      },
      {
        patterns: ['nada', '5 nada', 'tonal', 'suara', 'pelafalan', 'pengucapan', 'aksen', 'bicara'],
        title: 'Memahami Rahasia 5 Nada dalam Bahasa Thailand',
        thaiKey: 'วรรณยุกต์ไทย 5 เสียง',
        thaiPhonetic: 'wan-ná-yúk thai hâa sǐang',
        response: `Bahasa Thai adalah bahasa bernada (tonal language). Perubahan tinggi-rendahnya nada suara mengubah total arti kata!\n\n**5 Nada Tersebut:**\n1. **Nada Datar (Mid Tone):** Suara sedang alami datar tanpa naik-turun. Contoh: มา (Maa = datang).\n2. **Nada Rendah (Low Tone):** Suara ditekan rendah di dada. Contoh: ใหม่ (Mài = baru).\n3. **Nada Jatuh (Falling Tone):** Suara dimulai tinggi lalu jatuh tegas ke bawah, seperti memanggil tegas. Contoh: ไม่ (Mâi = tidak).\n4. **Nada Tinggi (High Tone):** Suara diucapkan melengking tinggi di tenggorokan atas. Contoh: ม้า (Máa = kuda).\n5. **Nada Naik (Rising Tone):** Suara dimulai rendah lalu meliuk naik seperti nada bertanya dalam bahasa Indonesia *"Hah?!"*. Contoh: หมา (Mǎa = anjing).\n\n*Contoh Terkenal:* "Mai mai mai mai mai" bisa berarti kalimat utuh: *"Kayu baru tidak terbakar, kan?"*`,
        tips: 'Gunakan fitur Studio Audio Penutur Asli di tab sebelah untuk mendengarkan kontur nada asli Bangkok berkali-kali!'
      },
      {
        patterns: ['monarki', 'raja', 'king', 'ratu', 'lagu kerajaan', 'uang jatuh', 'lese majeste'],
        title: 'Etika & Hukum Menghormati Keluarga Kerajaan di Thailand',
        thaiKey: 'การเคารพพระมหากษัตริย์',
        thaiPhonetic: 'kaan khao-róp phrá má-hǎa-kà-sàt',
        response: `Di Thailand, keluarga kerajaan sangat dihormati oleh rakyat dan dilindungi oleh hukum pidana yang sangat tegas (Pasal 112 / Lèse-majesté).\n\n**Hal Penting yang Wajib Diingat Wisatawan:**\n1. **Lagu Kebangsaan (08.00 & 18.00):** Jika Anda berada di stasiun BTS, taman umum, atau terminal saat lagu diputar, berhentilah melangkah dan berdirilah tegak dengan tenang sampai lagu selesai.\n2. **Di Bioskop:** Sebelum film diputar, lagu pujian kerajaan (Phleng Sansoen Phra Barami) akan diperdengarkan bersama video kenegaraan. Semua penonton wajib berdiri dengan khidmat.\n3. **Uang Kertas & Koin Baht:** Gambar Raja tercetak di semua mata uang Baht. Jangan pernah menginjak koin atau uang kertas yang jatuh tertiup angin untuk menghentikannya, meremas dengan kasar, atau mencoretnya.`,
        tips: 'Sikap tenang dan menghormati norma setempat akan membuat perjalanan Anda aman dan disambut hangat.'
      },
      {
        patterns: ['halal', 'muslim', 'masjid', 'islam', 'halal food'],
        title: 'Panduan Wisatawan Muslim & Kuliner Halal di Bangkok',
        thaiKey: 'ร้านอาหารฮาลาลมีไหมครับ',
        thaiPhonetic: 'ráan aa-hǎan haa-laan mii mǎi khráp',
        response: `Thailand sangat ramah bagi wisatawan Muslim. Terdapat banyak komunitas Muslim lokal dan ribuan restoran bersertifikat Halal resmi dari The Central Islamic Council of Thailand (CICOT).\n\n**Kawasan Kuliner Halal Populer di Bangkok:**\n1. **Phaya Thai (Kawasan Phetchaburi Soi 7):** Penuh deretan kedai masakan Thai Muslim, Tom Yum halal, roti canai kari, dan nasi biryani Thai (Khao Mok Gai).\n2. **Chinatown Yaowarat:** Terdapat area muslim di jalan Charoen Krung dengan kedai bebek panggang halal legendaris.\n3. **Bang Rak & Silom:** Dekat Masjid Haroon (salah satu masjid tertua di Bangkok), banyak warung makanan halal autentik.\n4. **Mall ICONSIAM & MBK Center:** Memiliki mushola resmi yang bersih serta food court khusus halal.\n\n*Kosakata Penting:* *"Ahan Halal mii mai khráp?"* (Ada makanan halal tidak?)`,
        tips: 'Gerai 7-Eleven juga menyediakan makanan kemasan dengan logo Halal resmi, seperti sosis ayam, nasi kotak CP Halal, dan roti manis.'
      },
      {
        patterns: ['musim', 'cuaca', 'kapan ke thailand', 'bulan terbaik', 'hujan', 'panas'],
        title: 'Waktu & Musim Terbaik untuk Berlibur ke Thailand',
        thaiKey: 'ฤดูกาลในประเทศไทย',
        thaiPhonetic: 'rúe-duu-kaan nai phrà-thêet thai',
        response: `Thailand memiliki 3 musim utama:\n\n1. **Musim Sejuk/Dingin (November - Februari):** *WAKTU TERBAIK!* Suhu berkisar 22°C - 31°C dengan kelembapan rendah dan langit cerah. Sangat nyaman untuk jalan kaki di Bangkok, menjelajah kuil, dan mendaki di Chiang Mai.\n2. **Musim Panas (Maret - Mei):** Suhu bisa mencapai 36°C - 40°C. Cocok untuk liburan pulau di Krabi/Phuket dan bertepatan dengan festival perang air Songkran (13-15 April).\n3. **Musim Hujan/Monsoon (Juni - Oktober):** Hujan sering turun dalam bentuk guyuran lebat sore hari selama 1-2 jam. Keuntungannya harga hotel dan tiket pesawat jauh lebih murah serta alam pegunungan sangat hijau subur.`,
        tips: 'Bawalah payung lipat kecil dan tabir surya (sunscreen) ke mana pun Anda pergi.'
      },
      {
        patterns: ['sim card', 'internet', 'esim', 'kuota', 'sinyal', 'ais', 'truemove'],
        title: 'Rekomendasi Tourist SIM Card & Paket Internet di Thailand',
        thaiKey: 'ซื้อซิมการ์ดอินเทอร์เน็ต',
        thaiPhonetic: 'súue sim-gáat in-thəə-nèt',
        response: `Tiga operator telekomunikasi terbesar dengan sinyal 5G kencang di Thailand adalah **AIS, TrueMove H, dan DTAC**.\n\n• **Beli di Bandara (Suvarnabhumi / Don Mueang):** Konter resmi tersedia 24 jam di aula kedatangan. Tersedia Tourist SIM paket 8 hari / 15 hari / 30 hari kuota unlimited mulai ~199 - 299 Baht.\n• **eSIM Instan:** Bisa dibeli secara online sebelum berangkat via aplikasi perjalanan.\n• **Syarat Pendaftaran:** Wajib menunjukkan paspor fisik asli saat registrasi kartu SIM di Thailand sesuai regulasi pemerintah.`,
        tips: 'SIM card lokal juga bisa dibeli di gerai 7-Eleven terdekat dengan menunjukkan paspor fisik Anda.'
      },
      {
        patterns: ['scam', 'penipuan', 'waspada', 'aman', 'keamanan', 'tutup', 'permata'],
        title: 'Waspada Penipuan Wisatawan (Scam) Umum di Bangkok',
        thaiKey: 'ระวังการหลอกลวง',
        thaiPhonetic: 'rá-wang kaan lɔ̀ɔk-luang',
        response: `Secara umum Thailand adalah negara yang sangat aman dan ramah bagi wisatawan, namun kenali beberapa tipu daya klasik berikut:\n\n1. **Scam "Kuil Sedang Tutup Hari Ini":** Orang asing atau supir tuk-tuk di dekat Grand Palace/Wat Pho mendekati Anda dan berkata kuil sedang ditutup untuk upacara doa, lalu menawarkan tur perahu atau toko perhiasan murah. *Faktanya:* Kuil buka normal setiap hari! Jangan percaya dan berjalanlah langsung ke loket resmi.\n2. **Toko Permata / Penjahit Jas Sutra:** Tawaran tiket perahu/tuk-tuk murah (20 Baht) dengan syarat mampir ke toko perhiasan pemerintah bohong. Tolak dengan sopan.\n3. **Taksi Tanpa Argo:** Di depan bandara atau tempat wisata, supir meminta tarif flat mahal. Selalu mintalah argo *"Use meter please"*.`,
        tips: 'Simpan nomor Polisi Turis Thailand di ponsel Anda: 1155 (layanan telepon gratis dan berbicara bahasa Inggris).'
      }
    ];

    let qaChatHistory = [
      {
        sender: 'bot',
        text: 'Halo! Saya Nong Mali (น้องมะลิ), asisten AI budaya & perjalanan Thailand Anda. 🙏\n\nSilakan tanyakan apa saja tentang etika kuil, rekomendasi street food, transportasi Bangkok, arti salam Wai, aturan monarki, tawar-menawar harga, atau cara pelafalan kata bahasa Thai!',
        thaiAudioText: 'สวัสดีค่ะ ยินดีต้อนรับสู่ไทยแลนด์ค่ะ'
      }
    ];

    function initQaChat() {
      renderQaChatMessages();
    }

    function renderQaChatMessages() {
      const container = document.getElementById('qaChatMessages');
      if (!container) return;

      container.innerHTML = qaChatHistory.map(msg => `
        <div class="qa-msg-bubble ${msg.sender}">
          <div style="font-size:11px; font-weight:700; color:var(--text-muted); margin-bottom:4px; font-family:var(--font-mono);">
            ${msg.sender === 'user' ? '👤 Anda' : '🪷 Nong Mali AI'}
          </div>
          <div style="white-space:pre-line;">${msg.text}</div>
          ${msg.songCards && typeof renderSongCardsHtml === 'function' ? renderSongCardsHtml(msg.songCards) : ''}
          ${msg.thaiAudioText ? `
            <div style="margin-top:10px;">
              <button class="btn-audio-listen" onclick="speakThai('${msg.thaiAudioText}')" title="Dengarkan pengucapan penutur asli Bangkok">
                🔊 Dengarkan Suara Asli: "${msg.thaiAudioText}"
              </button>
            </div>
          ` : ''}
        </div>
      `).join('');

      container.scrollTop = container.scrollHeight;
      if (typeof renderFloatingChatMessages === 'function') {
        renderFloatingChatMessages();
      }
    }

    function sendQuickQaPrompt(promptText) {
      document.getElementById('qaInputField').value = promptText;
      sendQaMessage();
    }

    function triggerQaMic() {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        showToast('Browser belum mendukung Speech Recognition.');
        return;
      }
      try {
        const recog = new SpeechRecognition();
        recog.lang = 'id-ID';
        recog.interimResults = false;
        showToast('🎙️ Mendengarkan pertanyaan Anda...');
        recog.onresult = (evt) => {
          const spoken = evt.results[0][0].transcript;
          document.getElementById('qaInputField').value = spoken;
          sendQaMessage();
        };
        recog.onerror = () => {
          showToast('Suara tidak terdengar.');
        };
        recog.start();
      } catch (err) {
        showToast('Mikrofon tidak dapat diakses.');
      }
    }

    async function sendQaMessage(overrideText) {
      const input = document.getElementById('qaInputField');
      const text = (typeof overrideText === 'string' ? overrideText : (input ? input.value : '')).trim();
      if (!text) return;

      // Add user message
      qaChatHistory.push({
        sender: 'user',
        text: text
      });
      if (input && typeof overrideText !== 'string') input.value = '';
      renderQaChatMessages();

      // Check if query is about songs / music / educational shows / cartoons / YouTube
      const lowerText = text.toLowerCase();
      const mediaKeywords = ['lagu', 'musik', 'music', 'song', 'playlist', 'nyanyi', 'tontonan', 'nonton', 'kartun', 'animasi', 'film', 'serial', 'drama', 'youtube', 'kanal', 'video', 'edukasi', 'edukatif', 'peppa', 'chuggington', 'mod', 'thaipod', 'three man down', 'tilly birds', 'scrubb', 'nont tanont', 'ost', 'soundtrack'];
      const isMediaHit = mediaKeywords.some(kw => lowerText.includes(kw));

      if (isMediaHit && typeof THAI_MEDIA_DATABASE !== 'undefined') {
        let matches = THAI_MEDIA_DATABASE.filter(m =>
          m.titleRoman.toLowerCase().includes(lowerText) ||
          m.titleThai.toLowerCase().includes(lowerText) ||
          (m.titleMeaning && m.titleMeaning.toLowerCase().includes(lowerText)) ||
          (m.artist && m.artist.toLowerCase().includes(lowerText)) ||
          (m.description && m.description.toLowerCase().includes(lowerText)) ||
          m.category.toLowerCase().includes(lowerText) ||
          lowerText.includes(m.category) ||
          lowerText.includes(m.titleRoman.toLowerCase())
        );

        if (!matches.length) {
          if (lowerText.includes('kartun') || lowerText.includes('animasi') || lowerText.includes('tontonan')) {
            matches = THAI_MEDIA_DATABASE.filter(m => m.category === 'cartoon' || m.category === 'learning').slice(0, 4);
          } else {
            matches = THAI_MEDIA_DATABASE.slice(0, 4);
          }
        } else {
          matches = matches.slice(0, 4);
        }

        setTimeout(() => {
          qaChatHistory.push({
            sender: 'bot',
            text: `Sawatdee kha! 🪷 Berikut adalah rekomendasi lagu & tontonan edukatif Thailand terbaik pilihan Nong Mali lengkap dengan link akses langsung ke YouTube & Spotify: 👇`,
            songCards: matches,
            thaiAudioText: matches[0] ? matches[0].titleThai : 'สื่อการเรียนรู้ภาษาไทย'
          });
          renderQaChatMessages();
          playSynthSound('success');
        }, 300);
        return;
      }

      // Show typing indicator
      const container = document.getElementById('qaChatMessages');
      const typingEl = document.createElement('div');
      typingEl.className = 'qa-msg-bubble bot';
      typingEl.id = 'qaTypingIndicator';
      typingEl.innerHTML = `<span style="font-size:12px; color:var(--text-muted); font-family:var(--font-mono);">🪷 Nong Mali sedang berpikir & menyiapkan jawaban...</span>`;
      if (container) {
        container.appendChild(typingEl);
        container.scrollTop = container.scrollHeight;
      }

      const floatContainer = document.getElementById('floatingChatMessages');
      if (floatContainer) {
        const floatTypingEl = document.createElement('div');
        floatTypingEl.className = 'qa-msg-bubble bot';
        floatTypingEl.id = 'floatingQaTypingIndicator';
        floatTypingEl.innerHTML = `<span style="font-size:12px; color:var(--text-muted); font-family:var(--font-mono);">🪷 Nong Mali sedang berpikir & menyiapkan jawaban...</span>`;
        floatContainer.appendChild(floatTypingEl);
        floatContainer.scrollTop = floatContainer.scrollHeight;
      }

      // Process query
      setTimeout(async () => {
        const indicator = document.getElementById('qaTypingIndicator');
        if (indicator) indicator.remove();
        const floatIndicator = document.getElementById('floatingQaTypingIndicator');
        if (floatIndicator) floatIndicator.remove();

        const lowerText = text.toLowerCase();
        let bestMatch = null;
        let highestScore = 0;

        for (const item of QA_KNOWLEDGE_BASE) {
          let score = 0;
          for (const pattern of item.patterns) {
            if (lowerText.includes(pattern)) {
              score += 2;
            }
          }
          if (score > highestScore) {
            highestScore = score;
            bestMatch = item;
          }
        }

        if (bestMatch && highestScore > 0) {
          qaChatHistory.push({
            sender: 'bot',
            text: `### ${bestMatch.title}\n\n${bestMatch.response}\n\n*${bestMatch.tips}*`,
            thaiAudioText: bestMatch.thaiKey
          });
          renderQaChatMessages();
          if (bestMatch.thaiKey) {
            speakThai(bestMatch.thaiKey);
          }
        } else {
          // If inquiry looks like translation query or arbitrary Thailand question:
          // Try live answering via translation assistance
          try {
            const transUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=th&dt=t&q=${encodeURIComponent(text)}`;
            const tResp = await fetch(transUrl);
            const tData = await tResp.json();
            const thaiVer = tData && tData[0] ? tData[0].map(s => s[0]).join('') : '';

            qaChatHistory.push({
              sender: 'bot',
              text: `Terima kasih atas pertanyaannya seputar: **"${text}"**!\n\nUntuk pertanyaan spesifik ini, Anda dapat menjelajahi tab **🔍 Ensiklopedia & Wisata** atau menggunakan frasa penutur asli berikut untuk bertanya langsung di Thailand:\n\n🇹🇭 **Bahasa Thai:** ${thaiVer || 'ขอข้อมูลเพิ่มเติมเกี่ยวกับเรื่องนี้ครับ'}\n\nJika Anda ingin bertanya tentang etika kuil, rekomendasi makanan tidak pedas, transportasi BTS, salam Wai, atau penukaran uang Baht, silakan pilih salah satu tombol saran di atas!`,
              thaiAudioText: thaiVer || 'ขอบคุณครับ'
            });
            renderQaChatMessages();
            if (thaiVer) speakThai(thaiVer);
          } catch (e) {
            qaChatHistory.push({
              sender: 'bot',
              text: `Pertanyaan yang bagus mengenai **"${text}"**! 🍃\n\nUntuk mendapatkan panduan lengkap seputar etika pakaian di kuil, rekomendasi makanan tidak pedas, transportasi BTS, makna salam Wai, atau festival Songkran, coba klik salah satu tombol saran topik di atas atau gunakan fitur pencarian ensiklopedia kami.`,
              thaiAudioText: 'ขอบคุณมากครับ'
            });
            renderQaChatMessages();
          }
        }
      }, 400);
    }

    /* ==========================================================================
       COMPLETE CURRICULUM SERIES ENGINE (119 VIDEOS • MATERI 01-90)
       ========================================================================== */
    let currentJazmiFilter = 'all';
    let currentJazmiSearch = '';
    let currentJazmiModalVideoId = null;
    let currentJazmiFilteredList = [];

    function getAllJazmiLessonsFlat() {
      if (typeof JAZMI_CURRICULUM_DATA === 'undefined' || !Array.isArray(JAZMI_CURRICULUM_DATA)) return [];
      let flat = [];
      JAZMI_CURRICULUM_DATA.forEach(part => {
        if (Array.isArray(part.lessons)) {
          flat = flat.concat(part.lessons);
        }
      });
      return flat;
    }

    function renderJazmiGrid() {
      const container = document.getElementById('jazmiGridContainer');
      if (!container) return;

      const all = getAllJazmiLessonsFlat();
      const q = (currentJazmiSearch || '').toLowerCase().trim();

      let filtered = all.filter(l => {
        // Filter by Part or Games
        if (currentJazmiFilter === 'games') {
          if (!l.isGame) return false;
        } else if (currentJazmiFilter !== 'all') {
          if (String(l.part) !== String(currentJazmiFilter)) return false;
        }

        // Search text
        if (q) {
          const matchTitle = l.title && l.title.toLowerCase().includes(q);
          const matchNum = l.lessonNumber !== null && String(l.lessonNumber).includes(q);
          const matchTag = l.tag && l.tag.toLowerCase().includes(q);
          const matchPart = l.partTitle && l.partTitle.toLowerCase().includes(q);
          const matchSummary = l.summary && l.summary.toLowerCase().includes(q);
          if (!matchTitle && !matchNum && !matchTag && !matchPart && !matchSummary) return false;
        }

        return true;
      });

      currentJazmiFilteredList = filtered;

      // Update counters
      const counterEl = document.getElementById('jazmiCounterText');
      if (counterEl) {
        counterEl.textContent = `Menampilkan ${filtered.length} dari ${all.length} modul materi tulis`;
      }

      const completedCount = all.filter(l => (appState.completedJazmiVideos || []).includes(l.id)).length;
      const progressChip = document.getElementById('jazmiProgressChip');
      if (progressChip) {
        progressChip.textContent = `✅ ${completedCount} / ${all.length} Selesai`;
      }

      if (filtered.length === 0) {
        container.innerHTML = `
          <div style="grid-column: 1 / -1; text-align:center; padding:48px 20px; background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); color:var(--text-muted);">
            <div style="font-size:32px; margin-bottom:10px;">🔍</div>
            <h4 style="font-size:16px; font-weight:800; color:var(--text); margin-bottom:6px;">Tidak ada materi tertulis yang cocok</h4>
            <p style="font-size:13px; margin:0 0 14px 0;">Coba gunakan kata kunci lain seperti konsonan, vokal, nada, atau tenses.</p>
            <button class="pill-filter" onclick="document.getElementById('jazmiSearchInput').value=''; searchJazmiVideos('');">Reset Pencarian</button>
          </div>
        `;
        return;
      }

      container.innerHTML = filtered.map(item => {
        const isCompleted = (appState.completedJazmiVideos || []).includes(item.id);
        const worksheetHtml = item.worksheet ? `
          <a href="/${item.worksheet.file}" download class="jazmi-worksheet-badge" onclick="event.stopPropagation();" title="Unduh ${item.worksheet.title}">
            📄 PDF
          </a>
        ` : '';

        const keypointsHtml = (item.keyPoints || []).map(kp => `
          <li class="jazmi-keypoint-item">${kp}</li>
        `).join('');

        const sampleHtml = item.thaiSample ? `
          <div class="jazmi-sample-box" onclick="event.stopPropagation();">
            <div class="jazmi-sample-text">
              <span class="jazmi-sample-thai">${item.thaiSample.thai}</span>
              <span class="jazmi-sample-rtgs">${item.thaiSample.rtgs} • ${item.thaiSample.meaning}</span>
            </div>
            <button type="button" class="btn-audio-mini" onclick="speakThai('${item.thaiSample.thai}')" title="Dengarkan pelafalan">
              🔊 Dengar
            </button>
          </div>
        ` : '';

        return `
          <div class="jazmi-card ${isCompleted ? 'completed' : ''}" onclick="openJazmiLesson('${item.id}')" title="Klik untuk baca: ${item.title}">
            <div class="jazmi-card-top-strip">
              <div class="jazmi-card-icon-badge">
                <span class="jazmi-emblem">${item.icon || '📖'}</span>
                <span class="jazmi-badge ${item.badgeClass}">${item.tag}</span>
              </div>
              <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-dim);">Part ${item.part}</div>
            </div>

            <div class="jazmi-card-body">
              <h3 class="jazmi-card-title">${item.title}</h3>
              <p class="jazmi-card-summary">${item.summary || ''}</p>
              
              <ul class="jazmi-keypoints-list">
                ${keypointsHtml}
              </ul>

              ${sampleHtml}

              <div class="jazmi-card-actions">
                <button type="button" class="jazmi-btn-read" onclick="event.stopPropagation(); openJazmiLesson('${item.id}');">
                  <span>📖 Baca Materi Lengkap</span>
                </button>
                ${worksheetHtml}
                <button type="button" class="jazmi-check-btn" onclick="toggleJazmiLessonCompleted('${item.id}', event)" title="${isCompleted ? 'Tandai belum selesai' : 'Tandai selesai (+15 XP)'}">
                  ${isCompleted ? '✓' : '○'}
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    function filterJazmiPart(filterKey, btn) {
      playSynthSound('click');
      currentJazmiFilter = filterKey;
      const pills = document.getElementById('jazmiPartFilterPills');
      if (pills) {
        pills.querySelectorAll('.pill-filter').forEach(p => p.classList.remove('active'));
      }
      if (btn) btn.classList.add('active');
      renderJazmiGrid();
    }

    function searchJazmiVideos(val) {
      currentJazmiSearch = val || '';
      renderJazmiGrid();
    }

    function openJazmiLesson(lessonId) {
      playSynthSound('click');
      const all = getAllJazmiLessonsFlat();
      const item = all.find(l => l.id === lessonId);
      if (!item) return;

      currentJazmiModalVideoId = lessonId;
      const modal = document.getElementById('jazmiReaderModal');
      const titleEl = document.getElementById('modalJazmiTitle');
      const badgeEl = document.getElementById('modalJazmiBadge');
      const partEl = document.getElementById('modalJazmiPart');
      const bodyEl = document.getElementById('modalJazmiBody');
      const wsContainer = document.getElementById('modalJazmiWorksheetContainer');

      if (titleEl) titleEl.textContent = item.title;
      if (partEl) partEl.textContent = item.partTitle;
      if (badgeEl) {
        badgeEl.textContent = item.tag;
        badgeEl.className = `jazmi-badge ${item.badgeClass}`;
      }
      if (bodyEl) {
        bodyEl.innerHTML = item.contentHtml || `<p>${item.summary || 'Materi pembelajaran tertulis.'}</p>`;
      }
      if (wsContainer) {
        if (item.worksheet) {
          wsContainer.innerHTML = `
            <a href="/${item.worksheet.file}" download class="jazmi-worksheet-badge" title="Unduh ${item.worksheet.title}">
              📄 Unduh Lembar Latihan (PDF) ↓
            </a>
          `;
        } else {
          wsContainer.innerHTML = '';
        }
      }

      updateJazmiModalNavButtons();
      updateJazmiModalCompleteButton();

      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }

    // Alias for backward compatibility
    function openJazmiVideoModal(id) {
      openJazmiLesson(id);
    }

    function closeJazmiReaderModal() {
      const modal = document.getElementById('jazmiReaderModal');
      if (modal) modal.classList.remove('active');
      document.body.style.overflow = '';
      currentJazmiModalVideoId = null;
    }

    function closeJazmiVideoModal() {
      closeJazmiReaderModal();
    }

    function handleJazmiModalBackdropClick(event) {
      if (event.target.id === 'jazmiReaderModal' || event.target.id === 'jazmiVideoModal') {
        closeJazmiReaderModal();
      }
    }

    function navigateJazmiLesson(direction) {
      if (!currentJazmiModalVideoId) return;
      const list = currentJazmiFilteredList.length > 0 ? currentJazmiFilteredList : getAllJazmiLessonsFlat();
      const idx = list.findIndex(l => l.id === currentJazmiModalVideoId);
      if (idx === -1) return;

      const targetIdx = idx + direction;
      if (targetIdx >= 0 && targetIdx < list.length) {
        openJazmiLesson(list[targetIdx].id);
      }
    }

    function navigateJazmiVideo(dir) {
      navigateJazmiLesson(dir);
    }

    function updateJazmiModalNavButtons() {
      const list = currentJazmiFilteredList.length > 0 ? currentJazmiFilteredList : getAllJazmiLessonsFlat();
      const idx = list.findIndex(l => l.id === currentJazmiModalVideoId);
      const prevBtn = document.getElementById('btnJazmiPrev');
      const nextBtn = document.getElementById('btnJazmiNext');
      if (prevBtn) prevBtn.disabled = (idx <= 0);
      if (nextBtn) nextBtn.disabled = (idx === -1 || idx >= list.length - 1);
    }

    function updateJazmiModalCompleteButton() {
      const btn = document.getElementById('modalJazmiCompleteBtn');
      if (!btn || !currentJazmiModalVideoId) return;
      const isCompleted = (appState.completedJazmiVideos || []).includes(currentJazmiModalVideoId);
      if (isCompleted) {
        btn.textContent = '✅ Selesai (Klik Batal)';
        btn.style.background = 'var(--emerald)';
      } else {
        btn.textContent = '✅ Tandai Selesai (+15 XP)';
        btn.style.background = '';
      }
    }

    function toggleJazmiLessonCompletedCurrent() {
      if (!currentJazmiModalVideoId) return;
      toggleJazmiLessonCompleted(currentJazmiModalVideoId);
      updateJazmiModalCompleteButton();
    }

    function toggleJazmiVideoCompletedCurrent() {
      toggleJazmiLessonCompletedCurrent();
    }

    function toggleJazmiLessonCompleted(lessonId, event) {
      if (event) event.stopPropagation();
      if (!Array.isArray(appState.completedJazmiVideos)) {
        appState.completedJazmiVideos = [];
      }

      const idx = appState.completedJazmiVideos.indexOf(lessonId);
      if (idx === -1) {
        appState.completedJazmiVideos.push(lessonId);
        appState.xp = (appState.xp || 0) + 15;
        playSynthSound('success');
        showToast('Hebat! Modul tertulis ditandai selesai (+15 XP) 🎉');
      } else {
        appState.completedJazmiVideos.splice(idx, 1);
        playSynthSound('click');
        showToast('Status modul diperbarui');
      }

      saveState();
      renderJazmiGrid();
    }

    function toggleJazmiVideoCompleted(id, e) {
      toggleJazmiLessonCompleted(id, e);
    }

    // Close reader modal on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const modal = document.getElementById('jazmiReaderModal');
        if (modal && modal.classList.contains('active')) {
          closeJazmiReaderModal();
        }
      }
    });


    /* ==========================================================================
       FITUR 2: 3D FLASHCARD PINTAR (SPACED REPETITION SYSTEM)
       ========================================================================== */
    let flashcardFilter = 'all'; // 'all', 'mid', 'high', 'low', 'vowel', 'numeral'
    let flashcardDeck = [];
    let flashcardCurrentIndex = 0;
    let flashcardMasteredSet = new Set(JSON.parse(localStorage.getItem('mali_fc_mastered') || '[]'));

    function buildFlashcardDeck(filter) {
      let pool = [];

      THAI_CONSONANTS.forEach(c => {
        let ruleText = '';
        if (c.class === 'mid') {
          ruleText = '💡 Kaidah Nada: Suku kata hidup berakhiran vokal panjang = Nada Datar (Mid Tone).';
        } else if (c.class === 'high') {
          ruleText = '💡 Kaidah Nada: Suku kata hidup berakhiran vokal panjang = Nada Naik (Rising Tone).';
        } else {
          ruleText = '💡 Kaidah Nada: Suku kata hidup berakhiran vokal panjang = Nada Datar (Mid Tone).';
        }
        pool.push({
          thai: c.thai,
          spoken: c.spoken,
          roman: c.roman,
          meaning: c.meaning,
          class: c.class,
          type: 'consonant',
          badgeLabel: c.class === 'mid' ? 'Konsonan Tengah' : (c.class === 'high' ? 'Konsonan Tinggi' : 'Konsonan Rendah'),
          badgeClass: `badge-${c.class}`,
          toneRule: ruleText
        });
      });

      THAI_VOWELS.forEach(v => {
        pool.push({
          thai: v.thai,
          spoken: v.spoken,
          roman: v.roman,
          meaning: v.meaning,
          class: 'vowel',
          type: 'vowel',
          badgeLabel: 'Vokal Inti',
          badgeClass: 'badge-vowel',
          toneRule: '💡 Tips Vokal: Perhatikan perbedaan panjang pendek vokal untuk membedakan arti kata!'
        });
      });

      THAI_NUMERALS.forEach(n => {
        pool.push({
          thai: n.thai,
          spoken: n.spoken,
          roman: n.roman,
          meaning: n.meaning,
          class: 'numeral',
          type: 'numeral',
          badgeLabel: 'Angka Tradisional',
          badgeClass: 'badge-mid',
          toneRule: '💡 Penggunaan: Sering digunakan pada dokumen resmi pemerintah, uang koin Baht, dan plang sejarah.'
        });
      });

      if (filter === 'all') return pool;
      if (filter === 'mid' || filter === 'high' || filter === 'low') {
        return pool.filter(item => item.class === filter);
      }
      if (filter === 'vowel') return pool.filter(item => item.type === 'vowel');
      if (filter === 'numeral') return pool.filter(item => item.type === 'numeral');
      return pool;
    }

    function initFlashcards(filter = flashcardFilter) {
      flashcardFilter = filter;
      flashcardDeck = buildFlashcardDeck(filter);
      flashcardCurrentIndex = 0;
      renderFlashcard();
    }

    function setFlashcardFilter(filter, btn) {
      flashcardFilter = filter;
      if (btn) {
        document.querySelectorAll('#flashcardFilterPills .pill-filter').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
      }
      initFlashcards(filter);
      playSynthSound('click');
    }

    function renderFlashcard() {
      const cardEl = document.getElementById('flashcardCardElement');
      if (!cardEl) return;

      cardEl.classList.remove('flipped');

      if (!flashcardDeck || flashcardDeck.length === 0) return;
      if (flashcardCurrentIndex >= flashcardDeck.length) flashcardCurrentIndex = 0;
      if (flashcardCurrentIndex < 0) flashcardCurrentIndex = flashcardDeck.length - 1;

      const card = flashcardDeck[flashcardCurrentIndex];

      // Front
      const frontBadge = document.getElementById('flashcardFrontBadge');
      const frontGlyph = document.getElementById('flashcardFrontGlyph');
      if (frontBadge) {
        frontBadge.className = `glyph-badge ${card.badgeClass}`;
        frontBadge.textContent = card.badgeLabel;
      }
      if (frontGlyph) frontGlyph.textContent = card.thai;

      // Back
      const backBadge = document.getElementById('flashcardBackBadge');
      const backGlyph = document.getElementById('flashcardBackGlyph');
      const backTitle = document.getElementById('flashcardBackTitle');
      const backRoman = document.getElementById('flashcardBackRoman');
      const backMeaning = document.getElementById('flashcardBackMeaning');
      const backRule = document.getElementById('flashcardBackRule');

      if (backBadge) {
        backBadge.className = `glyph-badge ${card.badgeClass}`;
        backBadge.textContent = card.badgeLabel;
      }
      if (backGlyph) backGlyph.textContent = card.thai;
      if (backTitle) backTitle.textContent = card.spoken ? `${card.spoken}` : card.roman || card.thai;
      if (backRoman) backRoman.textContent = card.roman || '';
      if (backMeaning) backMeaning.textContent = `Arti: ${card.meaning || '-'}`;
      if (backRule) backRule.innerHTML = card.toneRule || '';

      // Progress & Mastery Stats
      const progressTxt = document.getElementById('flashcardProgressText');
      const masteryTxt = document.getElementById('flashcardMasteryText');
      const progressFill = document.getElementById('flashcardProgressBarFill');

      const masteredCount = flashcardDeck.filter(c => flashcardMasteredSet.has(c.thai)).length;
      const masteryPercent = Math.round((masteredCount / flashcardDeck.length) * 100) || 0;

      if (progressTxt) progressTxt.textContent = `Kartu ${flashcardCurrentIndex + 1} dari ${flashcardDeck.length}`;
      if (masteryTxt) masteryTxt.textContent = `${masteredCount} Dikuasai (${masteryPercent}%)`;
      if (progressFill) progressFill.style.width = `${((flashcardCurrentIndex + 1) / flashcardDeck.length) * 100}%`;
    }

    function flipCurrentFlashcard() {
      const cardEl = document.getElementById('flashcardCardElement');
      if (!cardEl) return;
      cardEl.classList.toggle('flipped');
      playSynthSound('click');
    }

    function rateFlashcard(isMastered) {
      if (!flashcardDeck || flashcardDeck.length === 0) return;
      const card = flashcardDeck[flashcardCurrentIndex];

      if (isMastered) {
        flashcardMasteredSet.add(card.thai);
        awardXP(5);
        playSynthSound('correct');
        showToast('Kartu Dikuasai! +5 XP ✨');
      } else {
        flashcardMasteredSet.delete(card.thai);
        playSynthSound('click');
        flashcardDeck.push(card);
        showToast('Akan diulang lagi nanti 🔄');
      }

      localStorage.setItem('mali_fc_mastered', JSON.stringify(Array.from(flashcardMasteredSet)));
      nextFlashcard();
    }

    function prevFlashcard() {
      flashcardCurrentIndex--;
      if (flashcardCurrentIndex < 0) flashcardCurrentIndex = flashcardDeck.length - 1;
      renderFlashcard();
    }

    function nextFlashcard() {
      flashcardCurrentIndex++;
      if (flashcardCurrentIndex >= flashcardDeck.length) flashcardCurrentIndex = 0;
      renderFlashcard();
    }

    function shuffleFlashcardDeck() {
      if (!flashcardDeck || flashcardDeck.length === 0) return;
      for (let i = flashcardDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcardDeck[i], flashcardDeck[j]] = [flashcardDeck[j], flashcardDeck[i]];
      }
      flashcardCurrentIndex = 0;
      renderFlashcard();
      showToast('Deck berhasil diacak! 🔀');
    }

    function resetFlashcardMastery() {
      if (!confirm('Yakin ingin mereset progres hafalan flashcard?')) return;
      flashcardMasteredSet.clear();
      localStorage.removeItem('mali_fc_mastered');
      renderFlashcard();
      showToast('Progres hafalan berhasil direset ↺');
    }

    function speakCurrentFlashcard() {
      if (!flashcardDeck || flashcardDeck.length === 0) return;
      const card = flashcardDeck[flashcardCurrentIndex];
      const target = card.spoken || card.thai.replace('-', '').trim();
      speakThai(target);
    }

    function jumpToWritingForCurrentCard() {
      if (!flashcardDeck || flashcardDeck.length === 0) return;
      const card = flashcardDeck[flashcardCurrentIndex];
      jumpToWritingChar(card.thai);
    }

    // Keyboard Shortcuts for Flashcards
    window.addEventListener('keydown', (e) => {
      const flashcardsPanel = document.getElementById('panel-flashcards');
      if (!flashcardsPanel || !flashcardsPanel.classList.contains('active')) return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.code === 'Space') {
        e.preventDefault();
        flipCurrentFlashcard();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        rateFlashcard(true);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        rateFlashcard(false);
      } else if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'p') {
        e.preventDefault();
        prevFlashcard();
      } else if (e.key === 'ArrowDown' || e.key.toLowerCase() === 'n') {
        e.preventDefault();
        nextFlashcard();
      }
    });

    /* ==========================================================================
       FITUR 3: PWA SERVICE WORKER REGISTRATION & INSTALL PROMPT
       ========================================================================== */
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').then((reg) => {
          if (reg) reg.update();
          console.log('🌿 PWA Service Worker Registered & Updated');
        }).catch(err => {
          console.log('SW registration note:', err);
        });
      });
    }

    let deferredInstallPrompt = null;
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredInstallPrompt = e;
      const installBtn = document.getElementById('btnInstallPwa');
      if (installBtn) installBtn.style.display = 'inline-flex';
    });

    function installPwaApp() {
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.then((choice) => {
          if (choice.outcome === 'accepted') {
            showToast('Aplikasi berhasil dipasang ke perangkat Anda! 📲');
          }
          deferredInstallPrompt = null;
          const installBtn = document.getElementById('btnInstallPwa');
          if (installBtn) installBtn.style.display = 'none';
        });
      } else {
        showToast('Ketuk menu browser (⋮) lalu pilih "Tambahkan ke Layar Utama"');
      }
    }


    /* ==========================================================================
       FITUR 2: SPEED DRILL GAME ENGINE (60 DETIK ARENA)
       ========================================================================== */
    let drillGameMode = 'consonants'; // 'consonants', 'tones', 'vowels', 'mixed'
    let drillTimer = null;
    let drillSecondsLeft = 60;
    let drillScore = 0;
    let drillCombo = 0;
    let drillMaxCombo = 0;
    let drillCurrentQuestion = null;
    let drillHighScore = parseInt(localStorage.getItem('mali_drill_highscore') || '0', 10);

    function setDrillGameMode(mode, btn) {
      drillGameMode = mode;
      document.querySelectorAll('#drillModeSelector .pill-filter').forEach(p => p.classList.remove('active'));
      if (btn) btn.classList.add('active');

      const startTitle = document.getElementById('drillStartTitle');
      const startDesc = document.getElementById('drillStartDesc');

      if (mode === 'consonants') {
        startTitle.textContent = 'Tantangan 3 Kelas Konsonan';
        startDesc.textContent = 'Sebuah aksara akan muncul di layar. Tebak apakah aksara tersebut termasuk Konsonan Tengah, Tinggi, atau Rendah! 60 detik cepat.';
      } else if (mode === 'tones') {
        startTitle.textContent = 'Tantangan Tebak 5 Nada Suara';
        startDesc.textContent = 'Dengarkan suara kata Thai atau lihat suku kata, lalu tebak dengan tepat salah satu dari 5 nada fonetik bahasa Thai!';
      } else if (mode === 'vowels') {
        startTitle.textContent = 'Tantangan Vokal Pendek vs Panjang';
        startDesc.textContent = 'Uji kejelian Anda membedakan bentuk serta durasi vokal pendek dan vokal panjang tradisional Thailand!';
      } else {
        startTitle.textContent = 'Grand Prix Campuran (Aksara + Nada)';
        startDesc.textContent = 'Ujian refleks terlengkap: konsonan, nada, vokal, dan angka Thai datang silih berganti secara acak!';
      }

      document.getElementById('drillHighScoreDisplay').textContent = `${drillHighScore} Poin`;
      playSynthSound('click');
    }

    function startSpeedDrillGame() {
      drillScore = 0;
      drillCombo = 0;
      drillMaxCombo = 0;
      drillSecondsLeft = 60;

      document.getElementById('drillStartScreen').style.display = 'none';
      document.getElementById('drillResultScreen').style.display = 'none';
      document.getElementById('drillPlayScreen').style.display = 'block';

      document.getElementById('drillScoreDisplay').textContent = '0';
      document.getElementById('drillSecondsLeft').textContent = '60';
      document.getElementById('drillTimerFill').style.width = '100%';
      document.getElementById('drillComboBadge').style.display = 'none';

      nextDrillQuestion();

      if (drillTimer) clearInterval(drillTimer);
      drillTimer = setInterval(() => {
        drillSecondsLeft--;
        document.getElementById('drillSecondsLeft').textContent = drillSecondsLeft;
        document.getElementById('drillTimerFill').style.width = `${(drillSecondsLeft / 60) * 100}%`;

        if (drillSecondsLeft <= 10) {
          document.getElementById('drillSecondsLeft').style.animation = 'micPulse 0.8s infinite';
        }

        if (drillSecondsLeft <= 0) {
          endSpeedDrillGame();
        }
      }, 1000);

      playSynthSound('start');
    }

    function nextDrillQuestion() {
      // Pick random question based on current mode
      let qType = drillGameMode;
      if (qType === 'mixed') {
        const types = ['consonants', 'tones', 'vowels'];
        qType = types[Math.floor(Math.random() * types.length)];
      }

      const glyphEl = document.getElementById('drillQuestionGlyph');
      const subEl = document.getElementById('drillQuestionSub');
      const replayBtn = document.getElementById('btnDrillReplayAudio');
      const answersGrid = document.getElementById('drillAnswersGrid');

      if (qType === 'consonants') {
        const rand = THAI_CONSONANTS[Math.floor(Math.random() * THAI_CONSONANTS.length)];
        drillCurrentQuestion = {
          item: rand,
          correctAnswer: rand.class,
          sound: rand.spoken || rand.thai
        };

        glyphEl.textContent = rand.thai;
        subEl.textContent = `${rand.spoken} (${rand.roman})`;
        replayBtn.style.display = 'inline-flex';

        answersGrid.innerHTML = `
          <button class="drill-ans-btn" onclick="submitDrillAnswer('mid', this)">
            <span>🟢 Kelas Tengah</span>
            <span style="font-size:12px; opacity:0.6;">(Mid)</span>
          </button>
          <button class="drill-ans-btn" onclick="submitDrillAnswer('high', this)">
            <span>🔵 Kelas Tinggi</span>
            <span style="font-size:12px; opacity:0.6;">(High)</span>
          </button>
          <button class="drill-ans-btn" onclick="submitDrillAnswer('low', this)">
            <span>🟠 Kelas Rendah</span>
            <span style="font-size:12px; opacity:0.6;">(Low)</span>
          </button>
        `;
      } else if (qType === 'tones') {
        const tones = [
          { name: 'Nada Datar (Mid)', val: 'mid', example: 'กา', roman: 'gaa' },
          { name: 'Nada Rendah (Low)', val: 'low', example: 'ข่า', roman: 'khàa' },
          { name: 'Nada Jatuh (Falling)', val: 'falling', example: 'ข้าว', roman: 'khâao' },
          { name: 'Nada Tinggi (High)', val: 'high', example: 'ค้า', roman: 'kháa' },
          { name: 'Nada Naik (Rising)', val: 'rising', example: 'ขาว', roman: 'khǎao' }
        ];
        const pick = tones[Math.floor(Math.random() * tones.length)];
        drillCurrentQuestion = {
          item: pick,
          correctAnswer: pick.val,
          sound: pick.example
        };

        glyphEl.textContent = pick.example;
        subEl.textContent = `Pelafalan: ${pick.roman}`;
        replayBtn.style.display = 'inline-flex';
        speakThai(pick.example);

        answersGrid.innerHTML = tones.map(t => `
          <button class="drill-ans-btn" onclick="submitDrillAnswer('${t.val}', this)">
            <span>${t.name}</span>
          </button>
        `).join('');
      } else {
        // Vowels
        const rand = THAI_VOWELS[Math.floor(Math.random() * THAI_VOWELS.length)];
        const isShort = rand.roman.includes('pendek');
        drillCurrentQuestion = {
          item: rand,
          correctAnswer: isShort ? 'short' : 'long',
          sound: rand.spoken || rand.thai
        };

        glyphEl.textContent = rand.thai;
        subEl.textContent = rand.spoken;
        replayBtn.style.display = 'inline-flex';

        answersGrid.innerHTML = `
          <button class="drill-ans-btn" onclick="submitDrillAnswer('short', this)">
            <span>⚡ Vokal Pendek</span>
          </button>
          <button class="drill-ans-btn" onclick="submitDrillAnswer('long', this)">
            <span>🌊 Vokal Panjang / Diftong</span>
          </button>
        `;
      }
    }

    function playDrillQuestionAudio() {
      if (drillCurrentQuestion && drillCurrentQuestion.sound) {
        speakThai(drillCurrentQuestion.sound);
      }
    }

    function submitDrillAnswer(chosen, btn) {
      if (!drillCurrentQuestion) return;

      const isCorrect = (chosen === drillCurrentQuestion.correctAnswer);

      if (isCorrect) {
        drillCombo++;
        if (drillCombo > drillMaxCombo) drillMaxCombo = drillCombo;
        const multiplier = Math.min(5, Math.max(1, Math.floor(drillCombo / 3) + 1));
        const pts = 10 * multiplier;
        drillScore += pts;

        if (btn) btn.classList.add('correct');
        playSynthSound('correct');

        const comboBadge = document.getElementById('drillComboBadge');
        if (drillCombo >= 2) {
          comboBadge.style.display = 'inline-flex';
          comboBadge.textContent = `COMBO x${multiplier} 🔥 (${drillCombo}x)`;
        }
      } else {
        drillCombo = 0;
        document.getElementById('drillComboBadge').style.display = 'none';
        if (btn) btn.classList.add('wrong');
        playSynthSound('wrong');
      }

      document.getElementById('drillScoreDisplay').textContent = drillScore;

      setTimeout(() => {
        if (drillSecondsLeft > 0) nextDrillQuestion();
      }, 350);
    }

    function endSpeedDrillGame() {
      if (drillTimer) clearInterval(drillTimer);
      drillTimer = null;

      document.getElementById('drillPlayScreen').style.display = 'none';
      document.getElementById('drillResultScreen').style.display = 'block';

      if (drillScore > drillHighScore) {
        drillHighScore = drillScore;
        localStorage.setItem('mali_drill_highscore', drillHighScore.toString());
      }

      let rank = 'C (Pemula)';
      let medal = '🥉';
      let xpEarned = 15;

      if (drillScore >= 200) {
        rank = 'S (GURU BESAR AKSARA)';
        medal = '🏆';
        xpEarned = 50;
      } else if (drillScore >= 120) {
        rank = 'A (PENUTUR MAHIR)';
        medal = '🥇';
        xpEarned = 35;
      } else if (drillScore >= 60) {
        rank = 'B (PEMBELAJAR TERAMPIL)';
        medal = '🥈';
        xpEarned = 25;
      }

      awardXP(xpEarned);
      playSynthSound('badge');

      document.getElementById('drillResultMedal').textContent = medal;
      document.getElementById('drillRankBadge').textContent = `RANK: ${rank}`;
      document.getElementById('drillFinalScore').textContent = drillScore;
      document.getElementById('drillFinalCombo').textContent = `${drillMaxCombo}x`;
      document.getElementById('drillFinalXp').textContent = `+${xpEarned} XP`;
      document.getElementById('drillHighScoreDisplay').textContent = `${drillHighScore} Poin`;
    }

    /* ==========================================================================
       FITUR: KEDMANEE THAI KEYBOARD ENGINE & TYPING TUTOR
       ========================================================================== */
    const KEDMANEE_LAYOUT = [
      // Row 1 (Numbers Row)
      [
        { normal: '_', shift: '%', latin: '`' },
        { normal: 'ๅ', shift: '+', latin: '1' },
        { normal: '/', shift: '๑', latin: '2' },
        { normal: '_', shift: '๒', latin: '3' },
        { normal: 'ภ', shift: '๓', latin: '4' },
        { normal: 'ถ', shift: '๔', latin: '5' },
        { normal: 'ุ', shift: 'ู', latin: '6' },
        { normal: 'ึ', shift: '฿', latin: '7' },
        { normal: 'ค', shift: '๕', latin: '8' },
        { normal: 'ต', shift: '๖', latin: '9' },
        { normal: 'จ', shift: '๗', latin: '0' },
        { normal: 'ข', shift: '๘', latin: '-' },
        { normal: 'ช', shift: '๙', latin: '=' }
      ],
      // Row 2 (QWERTY Row)
      [
        { normal: 'ๆ', shift: '๐', latin: 'q' },
        { normal: 'ไ', shift: '"', latin: 'w' },
        { normal: 'ำ', shift: 'ฎ', latin: 'e' },
        { normal: 'พ', shift: 'ฑ', latin: 'r' },
        { normal: 'ะ', shift: 'ธ', latin: 't' },
        { normal: 'ั', shift: 'ํ', latin: 'y' },
        { normal: 'ี', shift: '๊', latin: 'u' },
        { normal: 'ร', shift: 'ณ', latin: 'i' },
        { normal: 'น', shift: 'ฯ', latin: 'o' },
        { normal: 'ย', shift: 'ญ', latin: 'p' },
        { normal: 'บ', shift: 'ฐ', latin: '[' },
        { normal: 'ล', shift: ',', latin: ']' },
        { normal: 'ฃ', shift: 'ฅ', latin: '\\' }
      ],
      // Row 3 (Home Row)
      [
        { normal: 'ฟ', shift: 'ฤ', latin: 'a' },
        { normal: 'ห', shift: 'ฆ', latin: 's' },
        { normal: 'ก', shift: 'ฏ', latin: 'd' },
        { normal: 'ด', shift: 'โ', latin: 'f' },
        { normal: 'เ', shift: 'ฌ', latin: 'g' },
        { normal: '้', shift: '็', latin: 'h' },
        { normal: '่', shift: '๋', latin: 'j' },
        { normal: 'า', shift: 'ษ', latin: 'k' },
        { normal: 'ส', shift: 'ศ', latin: 'l' },
        { normal: 'ว', shift: 'ซ', latin: ';' },
        { normal: 'ง', shift: '.', latin: '\'' }
      ],
      // Row 4 (Bottom Row)
      [
        { normal: 'ผ', shift: '(', latin: 'z' },
        { normal: 'ป', shift: ')', latin: 'x' },
        { normal: 'แ', shift: 'ฉ', latin: 'c' },
        { normal: 'อ', shift: 'ฮ', latin: 'v' },
        { normal: 'ิ', shift: 'ฺ', latin: 'b' },
        { normal: 'ื', shift: '์', latin: 'n' },
        { normal: 'ท', shift: '?', latin: 'm' },
        { normal: 'ม', shift: 'ฒ', latin: ',' },
        { normal: 'ใ', shift: 'ฬ', latin: '.' },
        { normal: 'ฝ', shift: 'ฦ', latin: '/' }
      ]
    ];

    const TYPING_LEVELS_DATA = {
      1: [
        { thai: 'กา', roman: 'gaa', meaning: 'Gagak' },
        { thai: 'จาน', roman: 'jaan', meaning: 'Piring' },
        { thai: 'เด็ก', roman: 'dèk', meaning: 'Anak-anak' },
        { thai: 'เต่า', roman: 'dtào', meaning: 'Kura-kura' },
        { thai: 'ใบไม้', roman: 'bai-mái', meaning: 'Daun' },
        { thai: 'ปลา', roman: 'bplaa', meaning: 'Ikan' },
        { thai: 'อ่าง', roman: 'àang', meaning: 'Baskom' }
      ],
      2: [
        { thai: 'ข้าว', roman: 'khâao', meaning: 'Nasi / Makanan pokok' },
        { thai: 'น้ำ', roman: 'nám', meaning: 'Air' },
        { thai: 'มา', roman: 'maa', meaning: 'Datang' },
        { thai: 'ไป', roman: 'bpai', meaning: 'Pergi' },
        { thai: 'ดี', roman: 'dii', meaning: 'Bagus / Baik' },
        { thai: 'มี', roman: 'mii', meaning: 'Punya / Ada' },
        { thai: 'กิน', roman: 'gin', meaning: 'Makan' }
      ],
      3: [
        { thai: 'ผัดไทย', roman: 'phàt-thai', meaning: 'Pad Thai' },
        { thai: 'ส้มตำ', roman: 'sôm-dtam', meaning: 'Som Tam' },
        { thai: 'ชาเย็น', roman: 'chaa-yen', meaning: 'Teh susu dingin' },
        { thai: 'กาแฟ', roman: 'gaa-fɛɛ', meaning: 'Kopi' },
        { thai: 'เท่าไหร่', roman: 'thâo-rài', meaning: 'Berapa harganya?' },
        { thai: 'ลดได้ไหม', roman: 'lót dâi mǎi', meaning: 'Bisa diskon?' }
      ],
      4: [
        { thai: 'สวัสดีค่ะ', roman: 'sà-wàt-dii khâ', meaning: 'Halo (Sopan Wanita)' },
        { thai: 'ขอบคุณครับ', roman: 'khɔ̀ɔp-khun khráp', meaning: 'Terima kasih (Sopan Pria)' },
        { thai: 'ขอโทษค่ะ', roman: 'khɔ̌ɔ-thôot khâ', meaning: 'Maaf / Permisi' },
        { thai: 'ไม่เป็นไร', roman: 'mâi bpen rai', meaning: 'Tidak apa-apa' },
        { thai: 'สบายดีไหม', roman: 'sà-baai-dii mǎi', meaning: 'Apa kabar?' }
      ],
      5: [
        { thai: 'ยินดีต้อนรับสู่สวนภาษาไทย', roman: 'yin-dii dtɔ̂ɔn-ráp sùu sǔan phaa-sǎa-thai', meaning: 'Selamat datang di taman bahasa Thai!' },
        { thai: 'พูดภาษาไทยได้นิดหน่อยค่ะ', roman: 'phûut phaa-sǎa-thai dâi nít-nɔ̀ɔi khâ', meaning: 'Bisa bicara bahasa Thai sedikit.' },
        { thai: 'รักภาษาไทยมากครับ', roman: 'rák phaa-sǎa-thai mâak khráp', meaning: 'Sangat menyukai bahasa Thai.' }
      ]
    };

    let typingCurrentLevel = 1;
    let typingWordIndex = 0;
    let typingCharIndex = 0;
    let typingTotalKeystrokes = 0;
    let typingCorrectKeystrokes = 0;
    let typingStartTime = null;

    
      
      /* ===== Dashboard Welcome Card ===== */
      function showDashboardCard() {
        const card = document.getElementById('dashboardWelcomeCard');
        if (!card) return;
        const profile = JSON.parse(localStorage.getItem('studentProfile') || '{}');
        const name = profile.name || profile.username || 'Pelajar';
        const streak = parseInt(localStorage.getItem('currentStreak') || '0');
        const xp = parseInt(localStorage.getItem('totalXP') || localStorage.getItem('xpPoints') || '0');
        const level = profile.level || Math.max(1, Math.floor(xp / 200) + 1);

        const el = id => document.getElementById(id);
        if (el('welcomeUserName')) el('welcomeUserName').textContent = `Halo, ${name}! 🌸`;
        if (el('welcomeStreak'))  el('welcomeStreak').textContent  = streak;
        if (el('welcomeXP'))      el('welcomeXP').textContent      = xp;
        if (el('welcomeLevel'))   el('welcomeLevel').textContent   = `Level ${level}`;
        card.style.display = 'flex';
      }

      function hideDashboardCard() {
        const card = document.getElementById('dashboardWelcomeCard');
        if (card) card.style.display = 'none';
      }

      function resumeLastTab() {
        const lastTab = localStorage.getItem('mali_last_tab') || 'alphabet';
        switchNavTab(lastTab);
      }

      function saveLastTab(tabKey) {
        try { localStorage.setItem('mali_last_tab', tabKey); } catch(e) {}
      }

      /* ===== Mobile Tap-Quiz for Typing Tutor (<640px) ===== */
      let tapQuizWords = [];
      let tapQuizIndex = 0;
      let tapQuizScore = 0;

      
      let typingInputMode = 'keyboard'; // 'keyboard' | 'quiz'

      function setTypingInputMode(mode) {
        typingInputMode = mode;
        const btnKb = document.getElementById('btnModeVirtualKey');
        const btnQz = document.getElementById('btnModeTapQuiz');
        const kbWrap = document.getElementById('thaiVirtualKeyboard');
        const qzWrap = document.getElementById('typingMobileQuiz');
        const promptCard = document.querySelector('.typing-prompt-card');

        if (btnKb) btnKb.classList.toggle('active', mode === 'keyboard');
        if (btnQz) btnQz.classList.toggle('active', mode === 'quiz');

        if (mode === 'quiz') {
          if (kbWrap) kbWrap.style.display = 'none';
          if (promptCard) promptCard.style.display = 'none';
          if (qzWrap) qzWrap.style.display = 'block';
          startTapQuiz();
        } else {
          if (kbWrap) kbWrap.style.display = 'block';
          if (promptCard) promptCard.style.display = 'block';
          if (qzWrap) qzWrap.style.display = 'none';
          renderVirtualKeyboard();
          if (typeof loadTypingWord === 'function') loadTypingWord();
        }
      }

      function autoDetectTypingMode() {
        if (isMobileTyping()) {
          setTypingInputMode('quiz');
        } else {
          setTypingInputMode('keyboard');
        }
      }

      function isMobileTyping() {
        return window.innerWidth < 640;
      }

      function buildTapQuizWords() {
        const levels = {
          1: ['ก', 'ข', 'ค', 'ง', 'จ', 'ช', 'ซ', 'ญ', 'ด', 'ต'],
          2: ['ถ', 'ท', 'น', 'บ', 'ป', 'ผ', 'พ', 'ฝ', 'ฟ', 'ม'],
          3: ['ย', 'ร', 'ล', 'ว', 'ส', 'ห', 'อ', 'ฮ', 'ฉ', 'ฑ'],
          4: ['กา', 'ขา', 'คา', 'งา', 'จา', 'ชา', 'ซา', 'ดา', 'ตา', 'นา'],
          5: ['สวัสดี', 'ขอบคุณ', 'ใช่', 'ไม่', 'กิน', 'นอน', 'ไป', 'มา', 'ดี', 'แล้ว']
        };
        const lvl = typingCurrentLevel || 1;
        return (levels[lvl] || levels[1]).sort(() => Math.random() - 0.5);
      }

      function buildChoicesFor(answer, pool) {
        const others = pool.filter(w => w !== answer).sort(() => Math.random() - 0.5).slice(0, 3);
        const choices = [answer, ...others].sort(() => Math.random() - 0.5);
        return choices;
      }

      function renderTapQuiz() {
        const quizDiv = document.getElementById('typingMobileQuiz');
        if (!quizDiv) return;
        if (tapQuizIndex >= tapQuizWords.length) {
          document.getElementById('tapQuizChar').textContent = '🎉';
          document.getElementById('tapQuizLabel').textContent = `Selesai! Skor: ${tapQuizScore}/${tapQuizWords.length}`;
          document.getElementById('tapQuizChoices').innerHTML = `<button class="tap-quiz-choice correct" onclick="startTapQuiz()" style="grid-column:span 2">Main Lagi 🔄</button>`;
          document.getElementById('tapQuizProgress').textContent = '';
          return;
        }
        const word = tapQuizWords[tapQuizIndex];
        document.getElementById('tapQuizChar').textContent = word;
        document.getElementById('tapQuizLabel').textContent = 'Pilih arti / romanisasi yang benar';
        document.getElementById('tapQuizProgress').textContent = `${tapQuizIndex + 1} / ${tapQuizWords.length} · Benar: ${tapQuizScore}`;
        const choices = buildChoicesFor(word, tapQuizWords);
        document.getElementById('tapQuizChoices').innerHTML = choices.map(c =>
          `<button class="tap-quiz-choice" onclick="checkTapChoice(this,'${c.replace(/'/g,"\'")}','${word.replace(/'/g,"\'")}')">
            ${c}
          </button>`
        ).join('');
      }

      function checkTapChoice(btn, chosen, correct) {
        const btns = document.querySelectorAll('.tap-quiz-choice');
        btns.forEach(b => b.disabled = true);
        if (chosen === correct) {
          btn.classList.add('correct');
          tapQuizScore++;
          addXP && addXP(2);
        } else {
          btn.classList.add('wrong');
          btns.forEach(b => { if (b.textContent.trim() === correct) b.classList.add('correct'); });
        }
        setTimeout(() => {
          tapQuizIndex++;
          renderTapQuiz();
        }, 700);
      }

      function startTapQuiz() {
        tapQuizWords = buildTapQuizWords();
        tapQuizIndex = 0;
        tapQuizScore = 0;
        renderTapQuiz();
      }

      function initTypingMobileMode() {
        if (isMobileTyping()) {
          startTapQuiz();
        }
      }

      function renderVirtualKeyboard() {
      const container = document.getElementById('thaiVirtualKeyboard');
      if (!container) return;

      container.innerHTML = KEDMANEE_LAYOUT.map((row, rIdx) => `
        <div class="kb-row">
          ${rIdx === 3 ? '<div class="kb-key shift-key" id="kbKeyShiftL" onclick="toggleVirtualShift()"><span>Shift ⇧</span></div>' : ''}
          ${row.map(k => `
            <div class="kb-key" data-normal="${k.normal}" data-shift="${k.shift}" data-latin="${k.latin}" onclick="handleVirtualKeyClick('${k.normal}', '${k.shift}')">
              <span class="latin-hint">${k.latin.toUpperCase()}</span>
              <span class="thai-top">${k.shift}</span>
              <span class="thai-bot">${k.normal}</span>
            </div>
          `).join('')}
          ${rIdx === 3 ? '<div class="kb-key shift-key" id="kbKeyShiftR" onclick="toggleVirtualShift()"><span>Shift ⇧</span></div>' : ''}
        </div>
      `).join('') + `
        <div class="kb-row" style="margin-top:2px;">
          <div class="kb-key space-key" onclick="handleVirtualKeyClick(' ', ' ')">
            <span style="font-size:11px; opacity:0.7;">SPASI</span>
          </div>
        </div>
      `;
    }

    function setTypingLevel(lvl, btn) {
      typingCurrentLevel = lvl;
      if (isMobileTyping()) { setTimeout(initTypingMobileMode, 100); }
      typingWordIndex = 0;
      typingCharIndex = 0;
      typingTotalKeystrokes = 0;
      typingCorrectKeystrokes = 0;
      typingStartTime = null;

      document.querySelectorAll('#typingLevelSelector .pill-filter').forEach(p => p.classList.remove('active'));
      if (btn) btn.classList.add('active');

      loadTypingWord();
      playSynthSound('click');
    }

    function loadTypingWord() {
      const words = TYPING_LEVELS_DATA[typingCurrentLevel] || TYPING_LEVELS_DATA[1];
      if (typingWordIndex >= words.length) typingWordIndex = 0;

      const item = words[typingWordIndex];
      typingCharIndex = 0;

      // Render Prompt Spans
      const container = document.getElementById('typingTargetContainer');
      if (container) {
        container.innerHTML = item.thai.split('').map((ch, idx) => `
          <span class="typing-char-span ${idx === 0 ? 'current' : ''}" id="typingChar_${idx}">${ch}</span>
        `).join('');
      }

      document.getElementById('typingTargetRoman').textContent = item.roman;
      document.getElementById('typingTargetMeaning').textContent = `Arti: ${item.meaning}`;
      document.getElementById('typingWordCountDisplay').textContent = `${typingWordIndex + 1}/${words.length} Kata`;

      highlightNextKeyboardKey();
    }

    function highlightNextKeyboardKey() {
      const words = TYPING_LEVELS_DATA[typingCurrentLevel] || TYPING_LEVELS_DATA[1];
      const item = words[typingWordIndex];
      if (!item) return;

      const targetChar = item.thai[typingCharIndex];

      // Clear all active highlights
      document.querySelectorAll('.kb-key').forEach(k => {
        k.classList.remove('active-target');
        k.classList.remove('active-shift');
      });

      if (!targetChar) return;

      // Find key matching targetChar
      let matchedKey = null;
      let needShift = false;

      document.querySelectorAll('.kb-key').forEach(k => {
        if (k.getAttribute('data-normal') === targetChar) {
          matchedKey = k;
          needShift = false;
        } else if (k.getAttribute('data-shift') === targetChar) {
          matchedKey = k;
          needShift = true;
        }
      });

      if (matchedKey) {
        matchedKey.classList.add('active-target');
        if (needShift) {
          const shiftL = document.getElementById('kbKeyShiftL');
          const shiftR = document.getElementById('kbKeyShiftR');
          if (shiftL) shiftL.classList.add('active-shift');
          if (shiftR) shiftR.classList.add('active-shift');
        }
      }
    }

    function handleTypingInputChar(char) {
      if (!typingStartTime) typingStartTime = Date.now();
      typingTotalKeystrokes++;

      const words = TYPING_LEVELS_DATA[typingCurrentLevel] || TYPING_LEVELS_DATA[1];
      const item = words[typingWordIndex];
      if (!item) return;

      const targetChar = item.thai[typingCharIndex];

      if (char === targetChar) {
        typingCorrectKeystrokes++;
        playTypewriterSound(true);

        const currentSpan = document.getElementById(`typingChar_${typingCharIndex}`);
        if (currentSpan) {
          currentSpan.classList.remove('current');
          currentSpan.classList.add('typed');
        }

        typingCharIndex++;

        if (typingCharIndex >= item.thai.length) {
          // Word completed!
          awardXP(10);
          playSynthSound('correct');
          showToast(`Mantap! Kata "${item.thai}" selesai (+10 XP) 🎉`);
          checkAchievements();

          setTimeout(() => {
            nextTypingWord(false);
          }, 350);
        } else {
          const nextSpan = document.getElementById(`typingChar_${typingCharIndex}`);
          if (nextSpan) nextSpan.classList.add('current');
          highlightNextKeyboardKey();
        }
      } else {
        playTypewriterSound(false);
        const currentSpan = document.getElementById(`typingChar_${typingCharIndex}`);
        if (currentSpan) {
          currentSpan.style.color = '#ef4444';
          setTimeout(() => {
            currentSpan.style.color = '';
          }, 250);
        }
      }

      updateTypingMetrics();
    }

    function handleVirtualKeyClick(normal, shift) {
      handleTypingInputChar(normal);
    }

    function toggleVirtualShift() {
      // Toggle visual display of shift
      playSynthSound('click');
    }

    function nextTypingWord(manual = false) {
      const words = TYPING_LEVELS_DATA[typingCurrentLevel] || TYPING_LEVELS_DATA[1];
      typingWordIndex++;
      if (typingWordIndex >= words.length) {
        typingWordIndex = 0;
        showToast('Level ' + typingCurrentLevel + ' selesai! Naik level yuk 🚀');
      }
      loadTypingWord();
      if (manual) playSynthSound('click');
    }

    function playCurrentTypingAudio() {
      const words = TYPING_LEVELS_DATA[typingCurrentLevel] || TYPING_LEVELS_DATA[1];
      const item = words[typingWordIndex];
      if (item) speakThai(item.thai);
    }

    function playTypewriterSound(isCorrect) {
      // Hilangkan suara tuts keyboard saat menyentuh
      return;
    }

    function updateTypingMetrics() {
      if (!typingStartTime) return;
      const elapsedMin = (Date.now() - typingStartTime) / 60000;
      const wpm = Math.round((typingCorrectKeystrokes / 5) / (elapsedMin || 0.01)) || 0;
      const acc = Math.round((typingCorrectKeystrokes / (typingTotalKeystrokes || 1)) * 100);

      document.getElementById('typingWpmDisplay').textContent = wpm;
      document.getElementById('typingAccuracyDisplay').textContent = `${acc}%`;

      if (wpm >= 25) {
        awardAchievement('achieve_typing_speed');
      }
    }

    // Physical Keyboard Listener
    window.addEventListener('keydown', (e) => {
      const typingPanel = document.getElementById('panel-typing');
      if (!typingPanel || !typingPanel.classList.contains('active')) return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      // Prevent page scrolling on space
      if (e.key === ' ') e.preventDefault();

      // Find matching Thai character for physical key press
      const latinKey = e.key.toLowerCase();
      let thaiChar = null;

      for (const row of KEDMANEE_LAYOUT) {
        for (const k of row) {
          if (k.latin.toLowerCase() === latinKey) {
            thaiChar = e.shiftKey ? k.shift : k.normal;
            break;
          }
        }
        if (thaiChar) break;
      }

      // If user is directly typing with Thai IME keyboard input
      if (/[\u0E00-\u0E7F]/.test(e.key)) {
        thaiChar = e.key;
      }

      if (thaiChar) {
        handleTypingInputChar(thaiChar);
      }
    });

    /* ==========================================================================
       FITUR: ACHIEVEMENTS & TROPHY SHOWCASE ENGINE (12 PENCAPAIAN)
       ========================================================================== */
    const ACHIEVEMENTS_LIST = [
      { id: 'achieve_step1', title: 'Langkah Pertama', desc: 'Selesaikan atau buka materi pertama Anda di akademi.', icon: '🌱', xp: 10 },
      { id: 'achieve_44_consonants', title: 'Penakluk 44 Konsonan', desc: 'Buka dan dengarkan semua 44 konsonan resmi Thai.', icon: '🔤', xp: 25 },
      { id: 'achieve_calligraphy', title: 'Pakar Kaligrafi Digital', desc: 'Raih akurasi kanvas tulis aksara di atas 90%.', icon: '✍️', xp: 20 },
      { id: 'achieve_5_tones', title: 'Telinga Musikal 5 Nada', desc: 'Latih kepekaan 5 nada di laboratorium akustik.', icon: '🎵', xp: 20 },
      { id: 'achieve_flashcard_master', title: 'Master Flashcard SRS', desc: 'Kuasai minimal 15 kartu hafalan di Flashcard Pintar.', icon: '🎴', xp: 30 },
      { id: 'achieve_speed_100', title: 'Refleks Kilat 100 Poin', desc: 'Raih skor minimal 100 di arena Speed Drill 60 Detik.', icon: '⚡', xp: 35 },
      { id: 'achieve_speed_s_rank', title: 'Guru Besar S-Rank', desc: 'Raih skor 200+ (Rank S) di Speed Drill Arena.', icon: '🏆', xp: 50 },
      { id: 'achieve_voice_studio', title: 'Penutur Bangkok Asli', desc: 'Lakukan evaluasi pelafalan di Studio Suara Mikrofon.', icon: '🎙️', xp: 25 },
      { id: 'achieve_typing_speed', title: 'Jari Lincah Kedmanee', desc: 'Capai kecepatan mengetik 25+ WPM di Typing Tutor.', icon: '⌨️', xp: 30 },
      { id: 'achieve_jazmi_reader', title: 'Kutu Buku Aksara', desc: 'Baca minimal 5 modul teks kurikulum tertulis.', icon: '📖', xp: 35 },
      { id: 'achieve_exam_cumlaude', title: 'Lulusan Kehormatan', desc: 'Lulus Ujian Evaluasi Akhir dengan nilai minimal 75%.', icon: '🎓', xp: 50 },
      { id: 'achieve_streak_3', title: 'Semangat Membara 3 Hari', desc: 'Pertahankan streak latihan belajar selama 3 hari beruntun.', icon: '🔥', xp: 40 }
    ];

    let unlockedAchievements = new Set(JSON.parse(localStorage.getItem('mali_unlocked_badges') || '["achieve_step1"]'));

    function renderAchievementsGrid() {
      const container = document.getElementById('achievementsGridContainer');
      if (!container) return;

      container.innerHTML = ACHIEVEMENTS_LIST.map(a => {
        const isUnlocked = unlockedAchievements.has(a.id);
        return `
          <div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'}">
            <div class="achieve-icon-box">${a.icon}</div>
            <div style="flex:1;">
              <div class="achieve-title">${a.title}</div>
              <div class="achieve-desc">${a.desc}</div>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="achieve-status-badge ${isUnlocked ? 'unlocked' : 'locked'}">
                  ${isUnlocked ? '✓ TERBUKA' : '🔒 TERKUNCI'}
                </span>
                <span style="font-family:var(--font-mono); font-size:11px; font-weight:700; color:var(--primary);">+${a.xp} XP</span>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    function awardAchievement(id) {
      if (unlockedAchievements.has(id)) return;
      const item = ACHIEVEMENTS_LIST.find(a => a.id === id);
      if (!item) return;

      unlockedAchievements.add(id);
      localStorage.setItem('mali_unlocked_badges', JSON.stringify(Array.from(unlockedAchievements)));
      awardXP(item.xp);
      playSynthSound('badge');

      showToast(`🏆 PRESTASI TERBUKA: "${item.title}" (+${item.xp} XP)!`);
      renderAchievementsGrid();
    }

    function checkAchievements() {
      // Check flashcards
      if (typeof flashcardMasteredSet !== 'undefined' && flashcardMasteredSet.size >= 15) {
        awardAchievement('achieve_flashcard_master');
      }
      // Check exam
      if (typeof examScorePercent !== 'undefined' && examScorePercent >= 75) {
        awardAchievement('achieve_exam_cumlaude');
      }
    }

    /* ==========================================================================
       FITUR: KAMUS PRAKTIS THAI - INDONESIA (1.000+ KATA ESENSIAL)
       ========================================================================== */
    let currentDictCategory = 'all';
    let currentDictQuery = '';

    function initDictionary() {
      renderDictionary('all', '');
    }

    function setDictCategory(cat, btn) {
      currentDictCategory = cat;
      document.querySelectorAll('#dictCategoryPills .pill-filter').forEach(p => p.classList.remove('active'));
      if (btn) btn.classList.add('active');
      renderDictionary(currentDictCategory, currentDictQuery);
      playSynthSound('click');
    }

    function onDictSearch(val) {
      currentDictQuery = (val || '').toLowerCase().trim();
      renderDictionary(currentDictCategory, currentDictQuery);
    }

    function renderDictionary(cat = currentDictCategory, q = currentDictQuery) {
      const container = document.getElementById('dictGridContainer');
      if (!container) return;

      if (typeof THAI_DICTIONARY === 'undefined' || !THAI_DICTIONARY.length) {
        container.innerHTML = '<div style="padding:24px; text-align:center; color:var(--text-muted);">Memuat kamus...</div>';
        return;
      }

      let filtered = THAI_DICTIONARY;
      if (cat !== 'all') {
        filtered = filtered.filter(item => item.cat === cat);
      }

      if (q) {
        filtered = filtered.filter(item =>
          (item.thai && item.thai.toLowerCase().includes(q)) ||
          (item.roman && item.roman.toLowerCase().includes(q)) ||
          (item.id && item.id.toLowerCase().includes(q))
        );
      }

      document.getElementById('dictTotalCountBadge').textContent = `📚 ${filtered.length} Entri Ditemukan`;

      if (filtered.length === 0) {
        container.innerHTML = `
          <div style="grid-column: 1 / -1; text-align:center; padding:48px 20px; background:var(--bg-card); border-radius:var(--radius-lg); border:1px solid var(--border);">
            <div style="font-size:36px; margin-bottom:10px;">🔍</div>
            <h4 style="font-size:16px; font-weight:700; margin-bottom:4px;">Tidak ada kata yang cocok dengan "${q}"</h4>
            <p style="font-size:13px; color:var(--text-muted);">Coba gunakan kata kunci lain dalam bahasa Indonesia atau ejaan latin.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = filtered.map(item => `
        <div class="dict-card">
          <div>
            <div class="dict-card-top">
              <span class="dict-thai">${item.thai}</span>
              <button type="button" class="icon-btn-compact" onclick="speakThai('${item.thai}')" title="Dengar Suara Penutur Bangkok" style="border-radius:50%; width:32px; height:32px;">🔊</button>
            </div>
            <div class="dict-roman">${item.roman}</div>
            <div class="dict-id">${item.id}</div>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; padding-top:10px; border-top:1px solid var(--border);">
            <span class="dict-tone-rule">🎵 ${item.tone}</span>
            <div style="display:flex; gap:6px;">
              <button class="btn-subtle-nav" onclick="jumpToWritingChar('${item.thai[0]}')" title="Latih tulis aksara ini di Kanvas" style="font-size:11px; padding:3px 8px;">✍️</button>
              <button class="btn-subtle-nav" onclick="openVoiceStudioModal({thai:'${item.thai}', roman:'${item.roman}', meaning:'${item.id}'})" title="Latih pelafalan di Studio Suara" style="font-size:11px; padding:3px 8px;">🎙️</button>
            </div>
          </div>
        </div>
      `).join('');
    }

    /* ==========================================================================
       FITUR: DATABASE LAGU THAILAND POPULER & SEARCH ENGINE
       ========================================================================== */

    /* ==========================================================================
       DATABASE & FITUR: PENCARIAN LAGU & TONTONAN EDUKATIF THAILAND
       ========================================================================== */
    const THAI_MEDIA_DATABASE = [
      // 1. LAGU POP & HITS THAILAND
      {
        id: 'media-s1',
        category: 'song',
        level: 'Pop Hits / Melankolis',
        titleThai: 'ฝนตกไหม',
        titleRoman: 'Fon Tok Mai',
        titleMeaning: 'Apakah Hujan Turun di Sana?',
        artist: 'Three Man Down',
        description: 'Lagu viral Thailand paling ikonik. Kosakata: ฝน (hujan), ตก (turun), คิดถึง (rindu), ฟ้า (langit). Lirik: "ฝนตกอีกแล้ว เหม่อมองฟ้า คิดถึงเธอ..."',
        youtubeUrl: 'https://www.youtube.com/watch?v=F_fDcf6J5e0',
        spotifyUrl: 'https://open.spotify.com/search/Three%20Man%20Down%20Fon%20Tok%20Mai',
        audioText: 'ฝนตกไหม'
      },
      {
        id: 'media-s2',
        category: 'song',
        level: 'Pop Hits Viral',
        titleThai: 'คิดแต่ไม่ถึง',
        titleRoman: 'Khit Tae Mai Thueng',
        titleMeaning: 'Memikirkanmu Tapi Tak Pernah Sampai',
        artist: 'Tilly Birds',
        description: 'Lagu pop indie dengan pengucapan kata "คิด" (berpikir/merasa) yang berulang-ulang, sangat bagus untuk melatih artikulasi nada Tinggi.',
        youtubeUrl: 'https://www.youtube.com/watch?v=sU1H4kC03sE',
        spotifyUrl: 'https://open.spotify.com/search/Tilly%20Birds%20Khit%20Tae%20Mai%20Thueng',
        audioText: 'คิดแต่ไม่ถึง'
      },
      {
        id: 'media-s3',
        category: 'song',
        level: 'Balada Romantis Mengharukan',
        titleThai: 'โต๊ะริม',
        titleRoman: 'Tok Rim (Melt)',
        titleMeaning: 'Meja di Sudut',
        artist: 'NONT TANONT',
        description: 'Hits romantis lembut dengan tempo vokal santai. Kosakata tatapan mata (สายตา), senyuman (รอยยิ้ม), dan lumer/meleleh (ละลาย).',
        youtubeUrl: 'https://www.youtube.com/watch?v=b4N34xH2t9U',
        spotifyUrl: 'https://open.spotify.com/search/NONT%20TANONT%20Tok%20Rim',
        audioText: 'โต๊ะริม'
      },
      {
        id: 'media-s4',
        category: 'song',
        level: 'OST Drama Romantis',
        titleThai: 'พิง',
        titleRoman: 'Phing (Lean On)',
        titleMeaning: 'Bersandar',
        artist: 'NONT TANONT (OST Krachao Seeda)',
        description: 'Balada emosional dengan tempo lambat, memudahkan pendengar menangkap akhir nada dan konsonan mati Thailand.',
        youtubeUrl: 'https://www.youtube.com/watch?v=b0wX3Z6B7qM',
        spotifyUrl: 'https://open.spotify.com/search/NONT%20TANONT%20Phing',
        audioText: 'พิง'
      },
      {
        id: 'media-s5',
        category: 'song',
        level: 'Indie Pop / Soundtrack Serial',
        titleThai: 'คู่กัน',
        titleRoman: 'Khuu Kan (Together)',
        titleMeaning: 'Ditakdirkan Bersama',
        artist: 'Scrubb (OST 2gether The Series)',
        description: 'Lagu soundtrack serial paling terkenal di Asia Tenggara. Melodi gitar akustik ceria dengan kosakata percakapan kasual sehari-hari.',
        youtubeUrl: 'https://www.youtube.com/watch?v=gT8oB9i8aZg',
        spotifyUrl: 'https://open.spotify.com/search/Scrubb%20Khuu%20Kan',
        audioText: 'คู่กัน'
      },
      {
        id: 'media-s6',
        category: 'song',
        level: 'Synth-Pop Lembut',
        titleThai: 'สายตาหลอกกันไม่ได้',
        titleRoman: 'Saai-taa Lork Kan Mai Dai',
        titleMeaning: 'Sorot Mata Tak Bisa Berbohong',
        artist: 'Ink Waruntorn',
        description: 'Penyanyi wanita Thailand berkarakter vokal jernih dan manis. Sangat ideal untuk melatih pendengaran intonasi wanita Bangkok.',
        youtubeUrl: 'https://www.youtube.com/watch?v=bB20U5m6DCE',
        spotifyUrl: 'https://open.spotify.com/search/Ink%20Waruntorn%20Eyes%20Dont%20Lie',
        audioText: 'สายตาหลอกกันไม่ได้'
      },
      {
        id: 'media-s7',
        category: 'song',
        level: 'City Pop / Nada Santai',
        titleThai: 'รู้งี้เป็นแฟนกันตั้งนานแล้ว',
        titleRoman: 'Ruu Ngi Pen Faen Kan Tang Naan Laew (Safe Zone)',
        titleMeaning: 'Tahu Gini Sudah Jadi Pacar Sejak Dulu',
        artist: 'Billkin & PP Krit',
        description: 'Duet hits paling populer dengan irama groovy. Penuh frasa percakapan modern anak muda Bangkok (รู้งี้, ตั้งนานแล้ว, แฟน).',
        youtubeUrl: 'https://www.youtube.com/watch?v=UqQc9h5R4_Y',
        spotifyUrl: 'https://open.spotify.com/search/Billkin%20PP%20Krit%20Safe%20Zone',
        audioText: 'รู้งี้เป็นแฟนกันตั้งนานแล้ว'
      },
      {
        id: 'media-s8',
        category: 'song',
        level: 'Pop Rock Klasik',
        titleThai: 'ไกลแค่ไหนคือใกล้',
        titleRoman: 'Klai Khae Nai Khue Klai',
        titleMeaning: 'Seberapa Jauh Kah Dekat Itu?',
        artist: 'Getsunova',
        description: 'Lagu legendaris yang membedakan bunyi konsonan vokal ไกล (klai = jauh) dan ใกล้ (klai tone jatuh = dekat). Latihan nada paling ampuh!',
        youtubeUrl: 'https://www.youtube.com/watch?v=mO_FpXyQ0v0',
        spotifyUrl: 'https://open.spotify.com/search/Getsunova%20Klai%20Khae%20Nai',
        audioText: 'ไกลแค่ไหนคือใกล้'
      },

      // 2. KARTUN & ANIMASI EDUKATIF (PEMULA: BICARA PELAN & JELAS)
      {
        id: 'media-c1',
        category: 'cartoon',
        level: 'Level 1: Pemula (A1)',
        titleThai: 'เปปป้าพิก (Peppa Pig Thailand Dub)',
        titleRoman: 'Peppa Pig Phaak Phasa Thai',
        titleMeaning: 'Peppa Pig Sulih Suara Bahasa Thailand',
        artist: 'Official Peppa Pig Thai',
        description: 'Tontonan nomor 1 yang paling direkomendasikan guru bahasa Thai untuk pemula! Kalimat pendek, repetitif, intonasi sopan, dan topik keluarga sehari-hari.',
        youtubeUrl: 'https://www.youtube.com/results?search_query=peppa+pig+thai+dub+official',
        spotifyUrl: '',
        audioText: 'เปปป้าพิก ภาษาไทย'
      },
      {
        id: 'media-c2',
        category: 'cartoon',
        level: 'Level 1: Pemula (A1)',
        titleThai: 'ชักกิงตัน เมืองรถไฟมหาสนุก',
        titleRoman: 'Chuggington Mueang Rot Fai Maha Sanuk',
        titleMeaning: 'Chuggington Petualangan Kereta Api',
        artist: 'Thai Animation Dub',
        description: 'Animasi edukasi dengan pengucapan nama warna, angka, arah jalan (kiri, kanan, lurus), dan kata kerja dasar dalam bahasa Thai baku.',
        youtubeUrl: 'https://www.youtube.com/results?search_query=chuggington+thai+dub',
        spotifyUrl: '',
        audioText: 'ชักกิงตัน เมืองรถไฟ'
      },
      {
        id: 'media-c3',
        category: 'cartoon',
        level: 'Level 2: Menengah (A2)',
        titleThai: 'พระมหาชนก แอนิเมชัน',
        titleRoman: 'Phra Mahajanaka Animation',
        titleMeaning: 'Kisah Sang Mahajanaka (Animasi Nasional)',
        artist: 'SIPA Thailand Official',
        description: 'Animasi layar lebar karya agung Kerajaan Thailand tentang ketabahan menyeberangi lautan samudra. Mengasah kosakata budaya dan sastra mulia.',
        youtubeUrl: 'https://www.youtube.com/results?search_query=mahajanaka+animation+thai',
        spotifyUrl: '',
        audioText: 'พระมหาชนก แอนิเมชัน'
      },
      {
        id: 'media-c4',
        category: 'cartoon',
        level: 'Level 1-2: Cerita Anak Bergambar',
        titleThai: 'นิทานอีสปและนิทานพื้นบ้านไทย',
        titleRoman: 'Nithan Aesop & Nithan Phuen-ban Thai',
        titleMeaning: 'Dongeng Fabel Aesop Bahasa Thailand Bergambar',
        artist: 'KidsDee Storytelling Channel',
        description: 'Kumpulan dongeng bergambar dengan teks bahasa Thai berjalan (subtitle asli) dan narasi suara dongeng yang ramah anak dan mudah ditiru.',
        youtubeUrl: 'https://www.youtube.com/results?search_query=thai+aesop+fables+kidsdee',
        spotifyUrl: '',
        audioText: 'นิทานอีสป ภาษาไทย'
      },

      // 3. KANAL BELAJAR BAHASA THAILAND DI YOUTUBE
      {
        id: 'media-l1',
        category: 'learning',
        level: 'Semua Level (A1 - B2)',
        titleThai: 'เรียนภาษาไทยกับครูมด',
        titleRoman: 'Learn Thai with Mod',
        titleMeaning: 'Belajar Bahasa Thailand Bersama Guru Mod',
        artist: 'Kru Mod & Pear (Bangkok)',
        description: 'Kanal edukasi YouTube terfavorit dunia! Mengupas tuntas etika bahasa gaul, perbedaan pria vs wanita, cara pesan makanan di Bangkok, dan nada fonetik.',
        youtubeUrl: 'https://www.youtube.com/@ThaiwithMod',
        spotifyUrl: '',
        audioText: 'เรียนภาษาไทยกับครูมด'
      },
      {
        id: 'media-l2',
        category: 'learning',
        level: 'Struktur Pelajaran Terpandu',
        titleThai: 'ไทยพ็อด 101 (ThaiPod101)',
        titleRoman: 'ThaiPod101 Video Lessons',
        titleMeaning: 'Pelajaran Video Praktis Situasi Harian',
        artist: 'Innovative Language Thai',
        description: 'Ratusan video simulasi percakapan nyata: di bandara Suvarnabhumi, naik taksi Bangkok, menawar di pasar Chatuchak, dan etika kuil.',
        youtubeUrl: 'https://www.youtube.com/@ThaiPod101',
        spotifyUrl: '',
        audioText: 'ไทยพ็อด หนึ่งศูนย์หนึ่ง'
      },
      {
        id: 'media-l3',
        category: 'learning',
        level: 'Fokus Baca & Nada',
        titleThai: 'กล้วยไทย (BananaThai)',
        titleRoman: 'BananaThai by Kru Smuk',
        titleMeaning: 'Belajar Baca Aksara & Nada Mudah',
        artist: 'Teacher Smuk',
        description: 'Kanal spesialis trik cepat membaca tulisan Thai modern tanpa loop, membedakan 5 nada intonasi, dan rahasia lancar berbicara.',
        youtubeUrl: 'https://www.youtube.com/@BananaThai',
        spotifyUrl: '',
        audioText: 'กล้วยไทย ภาษาไทย'
      },
      {
        id: 'media-l4',
        category: 'learning',
        level: 'Latihan Listening Natural',
        titleThai: 'ครูวี สอนภาษาไทย',
        titleRoman: 'Kru Wee Teach Thai',
        titleMeaning: 'Latihan Menyimak Percakapan Asli',
        artist: 'Kru Wee Official',
        description: 'Tips menyimak percakapan cepat penutur asli, intonasi partikel kasual (นะ, คะ, ครับ, หรอ), dan frasa percakapan kantor / kuliah.',
        youtubeUrl: 'https://www.youtube.com/@KruWeeTeachThai',
        spotifyUrl: '',
        audioText: 'ครูวี สอนภาษาไทย'
      },

      // 4. DOKUMENTER BUDAYA, WISATA & KULINER
      {
        id: 'media-d1',
        category: 'doc',
        level: 'Bahasa Baku Jernih (B1)',
        titleThai: 'ไทยพีบีเอส: สารคดีวัฒนธรรมไทย',
        titleRoman: 'Thai PBS Culture & Life Documentary',
        titleMeaning: 'Dokumenter Resmi Budaya & Kehidupan Thailand',
        artist: 'Thai PBS Public Television',
        description: 'Standar bahasa Thailand Central Bangkok paling resmi, anggun, dan artikulasi sempurna. Belajar sejarah kerajaan, kuil Wat Pho, dan tradisi lokal.',
        youtubeUrl: 'https://www.youtube.com/@ThaiPBS',
        spotifyUrl: '',
        audioText: 'สารคดีไทยพีบีเอส'
      },
      {
        id: 'media-d2',
        category: 'doc',
        level: 'Kosakata Kuliner & Pasar',
        titleThai: 'มาร์ก วีนส์ ตะลุยอาหารริมทางกรุงเทพฯ',
        titleRoman: 'Mark Wiens: Bangkok Street Food',
        titleMeaning: 'Jelajah Kuliner & Kosakata Makanan Bangkok',
        artist: 'Mark Wiens Travel',
        description: 'Video petualangan kuliner dengan interaksi langsung bersama koki lokal. Kosakata pedas (เผ็ด), bumbu daun kemangi (กะเพรา), dan kuah tom yum.',
        youtubeUrl: 'https://www.youtube.com/results?search_query=mark+wiens+bangkok+thai+food',
        spotifyUrl: '',
        audioText: 'อาหารริมทางกรุงเทพฯ'
      },

      // 5. SERIAL DRAMA SITUASIONAL (PERCAKAPAN ALAMI)
      {
        id: 'media-dr1',
        category: 'drama',
        level: 'Sinematik & Emosional',
        titleThai: 'แปลรักฉันด้วยใจเธอ',
        titleRoman: 'I Told Sunset About You',
        titleMeaning: 'Terjemahkan Cintaku dengan Hatimu',
        artist: 'Nadao Bangkok',
        description: 'Serial drama sinematik tentang 2 sahabat di Phuket yang saling membantu belajar ujian masuk universitas. Dialog emosional yang menyentuh.',
        youtubeUrl: 'https://www.youtube.com/results?search_query=i+told+sunset+about+you+official',
        spotifyUrl: 'https://open.spotify.com/search/I%20Told%20Sunset%20About%20You%20OST',
        audioText: 'แปลรักฉันด้วยใจเธอ'
      },
      {
        id: 'media-dr2',
        category: 'drama',
        level: 'Bahasa Gaul Kampus & Santai',
        titleThai: 'แค่เพื่อนครับเพื่อน (Bad Buddy)',
        titleRoman: 'Bad Buddy The Series',
        titleMeaning: 'Hanya Teman Biasa Kok',
        artist: 'GMMTV Official',
        description: 'Serial drama komedi situasi remaja kampus. Sangat kaya akan partikel akhir santai (วะ, โว้ย, ปะ, นะ), intonasi humor, dan dialek Bangkok modern.',
        youtubeUrl: 'https://www.youtube.com/results?search_query=bad+buddy+series+gmmtv',
        spotifyUrl: 'https://open.spotify.com/search/Bad%20Buddy%20OST',
        audioText: 'แค่เพื่อนครับเพื่อน'
      }
    ];

    let currentMediaCategory = 'all';

    function getMediaCategoryBadge(cat) {
      switch (cat) {
        case 'song': return '🎵 Lagu Hits';
        case 'cartoon': return '📺 Kartun Edukatif';
        case 'learning': return '📚 Kanal Belajar';
        case 'doc': return '🍛 Dokumenter';
        case 'drama': return '🎬 Serial Drama';
        default: return '✨ Media Edukasi';
      }
    }

    function renderAiMediaCards(list) {
      const container = document.getElementById('aiMediaCardsGrid');
      if (!container) return;

      if (!list || !list.length) {
        container.innerHTML = `
          <div style="grid-column: 1 / -1; text-align:center; padding:40px 20px; background:var(--bg-card); border:1px dashed var(--border); border-radius:var(--radius-xl);">
            <div style="font-size:36px; margin-bottom:8px;">🔍</div>
            <h4 style="margin:0 0 6px 0; font-size:16px;">Tidak ada tontonan atau lagu yang cocok</h4>
            <p style="margin:0; font-size:13px; color:var(--text-muted);">Coba cari dengan kata kunci lain (contoh: "Three Man Down", "kartun", "belajar", "Peppa").</p>
          </div>
        `;
        return;
      }

      container.innerHTML = list.map(m => `
        <div class="song-result-card" style="background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:16px; display:flex; flex-direction:column; justify-content:space-between; gap:12px; transition:transform 0.18s, box-shadow 0.18s; box-shadow:0 4px 14px rgba(0,0,0,0.04);">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px; margin-bottom:8px;">
              <span style="font-size:11px; font-weight:800; padding:3px 8px; border-radius:var(--radius-pill); background:rgba(45, 106, 79, 0.12); color:var(--primary); font-family:var(--font-mono);">
                ${getMediaCategoryBadge(m.category)}
              </span>
              <span style="font-size:10.5px; font-weight:700; padding:2px 8px; border-radius:var(--radius-pill); background:rgba(0,0,0,0.05); color:var(--text-dim);">
                ${m.level || 'Umum'}
              </span>
            </div>
            <div style="font-size:16px; font-weight:800; color:var(--text); font-family:var(--font-thai); line-height:1.25; margin-bottom:3px;">
              ${m.titleThai}
            </div>
            <div style="font-size:13px; font-weight:700; color:var(--primary); margin-bottom:4px;">
              ${m.titleRoman} ${m.titleMeaning ? '• ' + m.titleMeaning : ''}
            </div>
            <div style="font-size:12px; color:var(--text-muted); margin-bottom:8px;">
              👤 <strong>${m.artist || m.channel || 'Official'}</strong>
            </div>
            <p style="font-size:12.5px; color:var(--text); line-height:1.45; margin:0 0 10px 0; background:var(--bg-surface); padding:8px 10px; border-radius:var(--radius-sm); border-left:3px solid var(--primary);">
              ${m.description}
            </p>
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center; padding-top:4px;">
            <a href="${m.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="song-play-btn" style="background:#dc2626; color:#ffffff; font-weight:700; font-size:12px; padding:7px 12px; border-radius:var(--radius-pill); text-decoration:none; display:inline-flex; align-items:center; gap:6px; box-shadow:0 2px 6px rgba(220,38,38,0.25);" title="Tonton di YouTube">
              ▶️ Buka di YouTube ↗
            </a>
            ${m.spotifyUrl ? `
              <a href="${m.spotifyUrl}" target="_blank" rel="noopener noreferrer" class="song-spotify-btn" style="background:#10b981; color:#ffffff; font-weight:700; font-size:12px; padding:7px 12px; border-radius:var(--radius-pill); text-decoration:none; display:inline-flex; align-items:center; gap:6px; box-shadow:0 2px 6px rgba(16,185,129,0.25);" title="Dengar di Spotify">
                🎧 Spotify ↗
              </a>
            ` : ''}
            <button type="button" class="song-listen-tts-btn" onclick="speakThai('${m.audioText || m.titleThai}')" style="background:var(--bg-card); border:1px solid var(--border); color:var(--text); font-size:11.5px; font-weight:600; padding:6px 10px; border-radius:var(--radius-pill); cursor:pointer;" title="Dengar Pengucapan Suara Asli Bangkok">
              🔊 Dengar Suara
            </button>
          </div>
        </div>
      `).join('');
    }

    function filterAiMediaCategory(category, btn) {
      currentMediaCategory = category;
      document.querySelectorAll('#aiMediaCategoryPills .pill-filter').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
      playSynthSound('click');

      const input = document.getElementById('aiMediaSearchInput');
      const query = input ? input.value.trim().toLowerCase() : '';

      let filtered = THAI_MEDIA_DATABASE;
      if (category !== 'all') {
        filtered = filtered.filter(m => m.category === category);
      }
      if (query) {
        filtered = filtered.filter(m => {
          return m.titleThai.includes(query) ||
            m.titleRoman.toLowerCase().includes(query) ||
            (m.titleMeaning && m.titleMeaning.toLowerCase().includes(query)) ||
            (m.artist && m.artist.toLowerCase().includes(query)) ||
            (m.description && m.description.toLowerCase().includes(query));
        });
      }
      renderAiMediaCards(filtered);
    }

    function executeAiMediaSearch() {
      const input = document.getElementById('aiMediaSearchInput');
      const query = input ? input.value.trim().toLowerCase() : '';
      playSynthSound('click');

      let filtered = THAI_MEDIA_DATABASE;
      if (currentMediaCategory !== 'all') {
        filtered = filtered.filter(m => m.category === currentMediaCategory);
      }
      if (query) {
        filtered = filtered.filter(m => {
          return m.titleThai.includes(query) ||
            m.titleRoman.toLowerCase().includes(query) ||
            (m.titleMeaning && m.titleMeaning.toLowerCase().includes(query)) ||
            (m.artist && m.artist.toLowerCase().includes(query)) ||
            (m.description && m.description.toLowerCase().includes(query));
        });
      }
      renderAiMediaCards(filtered);
    }

    const THAI_SONGS_DATABASE = [
      {
        id: 'song-1',
        titleThai: 'ฝนตกไหม',
        titleRoman: 'Fon Tok Mai',
        titleMeaning: 'Apakah Hujan Turun di Sana?',
        artist: 'Three Man Down',
        category: 'indie',
        vibe: 'Melankolis / Rindu',
        lyrics: 'ฝนตกอีกแล้ว เหม่อมองฟ้า คิดถึงเธอ...',
        lyricsId: 'Hujan turun lagi, melamun menatap langit memikirkanmu...',
        youtubeUrl: 'https://www.youtube.com/watch?v=F_fDcf6J5e0',
        spotifyUrl: 'https://open.spotify.com/search/Three%20Man%20Down%20Fon%20Tok%20Mai',
        audioText: 'ฝนตกไหม'
      },
      {
        id: 'song-2',
        titleThai: 'คิดแต่ไม่ถึง',
        titleRoman: 'Khit Tae Mai Thueng',
        titleMeaning: 'Memikirkanmu Tapi Tak Pernah Sampai',
        artist: 'Tilly Birds',
        category: 'pop',
        vibe: 'Pop Hits Viral',
        lyrics: 'คิดแต่ไม่ถึง คิด คิดแต่ไม่ถึงเธอ...',
        lyricsId: 'Memikirkanmu tapi tak sampai, tak pernah sampai padamu...',
        youtubeUrl: 'https://www.youtube.com/watch?v=sU1H4kC03sE',
        spotifyUrl: 'https://open.spotify.com/search/Tilly%20Birds%20Khit%20Tae%20Mai%20Thueng',
        audioText: 'คิดแต่ไม่ถึง'
      },
      {
        id: 'song-3',
        titleThai: 'คู่กัน',
        titleRoman: 'Khuu Kan (Together)',
        titleMeaning: 'Ditakdirkan Bersama',
        artist: 'Scrubb',
        category: 'ost',
        vibe: 'Indie Pop / OST 2gether The Series',
        lyrics: 'ถ้าหากว่าเธอไม่เคยได้เจอ... เราคงเป็นคู่กัน',
        lyricsId: 'Jika kau belum pernah bertemu... kita mungkin ditakdirkan bersama',
        youtubeUrl: 'https://www.youtube.com/watch?v=gT8oB9i8aZg',
        spotifyUrl: 'https://open.spotify.com/search/Scrubb%20Khuu%20Kan',
        audioText: 'คู่กัน'
      },
      {
        id: 'song-4',
        titleThai: 'พิง',
        titleRoman: 'Phing (Lean On)',
        titleMeaning: 'Bersandar',
        artist: 'NONT TANONT',
        category: 'ost',
        vibe: 'Balada Romantis Mengharukan',
        lyrics: 'หากเธอเหนื่อยนัก ให้พิงที่ไหล่ฉัน...',
        lyricsId: 'Jika engkau merasa lelah, bersandarlah di bahuku...',
        youtubeUrl: 'https://www.youtube.com/watch?v=b0wX3Z6B7qM',
        spotifyUrl: 'https://open.spotify.com/search/NONT%20TANONT%20Phing',
        audioText: 'พิง'
      },
      {
        id: 'song-5',
        titleThai: 'โต๊ะริม',
        titleRoman: 'Tok Rim (Melt)',
        titleMeaning: 'Meja di Sudut',
        artist: 'NONT TANONT',
        category: 'pop',
        vibe: 'R&B Pop Ceria / Viral TikTok',
        lyrics: 'เธอทำให้ฉันละลาย ด้วยรอยยิ้มหวานนั้น...',
        lyricsId: 'Kau membuatku meleleh dengan senyuman manismu...',
        youtubeUrl: 'https://www.youtube.com/watch?v=eLw1Qx-7sB0',
        spotifyUrl: 'https://open.spotify.com/search/NONT%20TANONT%20Melt',
        audioText: 'โต๊ะริม'
      },
      {
        id: 'song-6',
        titleThai: 'ซ่อนกลิ่น',
        titleRoman: 'Sorn Klin',
        titleMeaning: 'Aroma yang Tersembunyi',
        artist: 'Palmy',
        category: 'ballad',
        vibe: 'Folk Pop Puitis Legendaris',
        lyrics: 'คงเก็บเอาไว้ในความทรงจำ ไม่ให้ใครรู้...',
        lyricsId: 'Kusimpan rapi dalam kenangan agar tak seorang pun tahu...',
        youtubeUrl: 'https://www.youtube.com/watch?v=R9e8Z7n7E4Y',
        spotifyUrl: 'https://open.spotify.com/search/Palmy%20Sorn%20Klin',
        audioText: 'ซ่อนกลิ่น'
      },
      {
        id: 'song-7',
        titleThai: 'Fade (ลืมแทบไม่ไหว)',
        titleRoman: 'Lueam Thaep Mai Wai',
        titleMeaning: 'Hampir Mustahil Melupakanmu',
        artist: 'Jeff Satur',
        category: 'ballad',
        vibe: 'Sinematik Emosional',
        lyrics: 'กาลเวลาไม่เคยช่วยให้ลืมเธอ...',
        lyricsId: 'Waktu yang berlalu tak pernah sanggup membuatku lupa...',
        youtubeUrl: 'https://www.youtube.com/watch?v=UqQY9_0s9I4',
        spotifyUrl: 'https://open.spotify.com/search/Jeff%20Satur%20Fade',
        audioText: 'ลืมแทบไม่ไหว'
      },
      {
        id: 'song-8',
        titleThai: 'สายตาหลอกกันไม่ได้',
        titleRoman: 'Sai Dtaa Lork Kan Mai Dai',
        titleMeaning: 'Tatapan Mata Tak Bisa Berbohong',
        artist: 'Ink Waruntorn',
        category: 'pop',
        vibe: 'Synth-Pop Imut & Ceria',
        lyrics: 'สายตาเธอบอกฉันว่าเธอรักกัน...',
        lyricsId: 'Sorot matamu mengatakan kepadaku bahwa kau mencintaiku...',
        youtubeUrl: 'https://www.youtube.com/watch?v=e85H2yQh6uE',
        spotifyUrl: 'https://open.spotify.com/search/Ink%20Waruntorn%20Eyes%20Dont%20Lie',
        audioText: 'สายตาหลอกกันไม่ได้'
      },
      {
        id: 'song-9',
        titleThai: 'วาดไว้',
        titleRoman: 'Waat Wai (Recall)',
        titleMeaning: 'Lukisan Kenangan Masa Depan',
        artist: 'BOWKYLION',
        category: 'ballad',
        vibe: 'Balada Emosional Populer',
        lyrics: 'ที่เธอเคยวาดไว้ อนาคตที่เราจะมีกัน...',
        lyricsId: 'Hal yang pernah kau lukiskan, masa depan yang kelak kita jalani...',
        youtubeUrl: 'https://www.youtube.com/watch?v=bLd_Z6F9g98',
        spotifyUrl: 'https://open.spotify.com/search/BOWKYLION%20Recall',
        audioText: 'วาดไว้'
      },
      {
        id: 'song-10',
        titleThai: 'ไกลแค่ไหนคือใกล้',
        titleRoman: 'Glai Khae Nai Khue Klai',
        titleMeaning: 'Seberapa Jauh Kah Dekat Itu?',
        artist: 'Getsunova',
        category: 'indie',
        vibe: 'Pop Rock Klasik Terpopuler',
        lyrics: 'อีกไกลแค่ไหน จนกว่าฉันจะใกล้ บอกที...',
        lyricsId: 'Berapa jauh lagi sampai aku bisa dekat denganmu, katakanlah...',
        youtubeUrl: 'https://www.youtube.com/watch?v=28R8sS6u3rA',
        spotifyUrl: 'https://open.spotify.com/search/Getsunova%20How%20Far%20Is%20Near',
        audioText: 'ไกลแค่ไหนคือใกล้'
      },
      {
        id: 'song-11',
        titleThai: 'แสงสุดท้าย',
        titleRoman: 'Saeng Sut Thai',
        titleMeaning: 'Cahaya Terakhir',
        artist: 'Bodyslam',
        category: 'indie',
        vibe: 'Rock Motivasi & Semangat Hidup',
        lyrics: 'ตราบใดที่ยังมีลมหายใจ จะก้าวต่อไป...',
        lyricsId: 'Selama nafas masih berhembus, aku akan terus melangkah...',
        youtubeUrl: 'https://www.youtube.com/watch?v=b4N3t5z_UQE',
        spotifyUrl: 'https://open.spotify.com/search/Bodyslam%20Saeng%20Sut%20Thai',
        audioText: 'แสงสุดท้าย'
      },
      {
        id: 'song-12',
        titleThai: 'ทุกนาทีที่สวยงาม',
        titleRoman: 'Thuk Naa-thii Thii Suay-ngaam',
        titleMeaning: 'Setiap Menit yang Sangat Indah',
        artist: 'NONT TANONT',
        category: 'pop',
        vibe: 'Hangat & Menenteramkan Hati',
        lyrics: 'ทุกนาทีที่สวยงาม คือช่วงเวลาที่ได้มีเธอ...',
        lyricsId: 'Setiap menit yang indah adalah saat-saat aku bersamamu...',
        youtubeUrl: 'https://www.youtube.com/watch?v=nC8-g0w8xU4',
        spotifyUrl: 'https://open.spotify.com/search/NONT%20TANONT%20Always%20With%20Me',
        audioText: 'ทุกนาทีที่สวยงาม'
      },
      {
        id: 'song-13',
        titleThai: 'พักก่อน',
        titleRoman: 'Phak Gorn',
        titleMeaning: 'Istirahat Dulu Dong',
        artist: 'MILLI',
        category: 'pop',
        vibe: 'Hip Hop / Bahasa Gaul Gaul Remaja',
        lyrics: 'พักผ่อนนะน้องนะ พักก่อนคนดี...',
        lyricsId: 'Istirahatlah wahai adik, istirahat dulu ya orang baik...',
        youtubeUrl: 'https://www.youtube.com/watch?v=Qx8w3kYj6tA',
        spotifyUrl: 'https://open.spotify.com/search/MILLI%20Phak%20Gorn',
        audioText: 'พักก่อน'
      },
      {
        id: 'song-14',
        titleThai: 'Lover Boy',
        titleRoman: 'Lover Boy',
        titleMeaning: 'Lelaki Idaman',
        artist: 'Phum Viphurit',
        category: 'indie',
        vibe: 'Neo-Soul Summer Santai',
        lyrics: 'Wandering the streets tonight, looking for you...',
        lyricsId: 'Menyusuri jalanan malam ini, mencari keberadaanmu...',
        youtubeUrl: 'https://www.youtube.com/watch?v=8HnLRrQ3RS4',
        spotifyUrl: 'https://open.spotify.com/search/Phum%20Viphurit%20Lover%20Boy',
        audioText: 'เลิฟเวอร์บอย'
      },
      {
        id: 'song-15',
        titleThai: 'ทุกวันได้ไหม',
        titleRoman: 'Thuk Wan Dai Mai',
        titleMeaning: 'Bolehkah Bersamamu Setiap Hari?',
        artist: 'NUM KALA ft. Bird Thongchai',
        category: 'ballad',
        vibe: 'Balada Hangat Duet Legendaris',
        lyrics: 'แค่อยากจะขอมีเธออยู่ตรงนี้ทุกวัน...',
        lyricsId: 'Hanya ingin memohon kehadiranmu di sini setiap hari...',
        youtubeUrl: 'https://www.youtube.com/watch?v=b114VqO3V10',
        spotifyUrl: 'https://open.spotify.com/search/NUM%20KALA%20Bird%20Thongchai',
        audioText: 'ทุกวันได้ไหม'
      },
      {
        id: 'song-16',
        titleThai: 'สลักจิต',
        titleRoman: 'Salakjit',
        titleMeaning: 'Terukir Abadi di Lubuk Jiwa',
        artist: 'Pop Pongkool ft. Da Endorphine',
        category: 'ballad',
        vibe: 'Duet Pop Balada Megah',
        lyrics: 'สลักไว้ในใจลึกซึ้ง ตลอดกาล...',
        lyricsId: 'Terukir begitu dalam di relung jiwaku untuk selamanya...',
        youtubeUrl: 'https://www.youtube.com/watch?v=o0h845m3x2A',
        spotifyUrl: 'https://open.spotify.com/search/Pop%20Pongkool%20Salakjit',
        audioText: 'สลักจิต'
      }
    ];




/* INITIALIZE APP ON DOM READY */
window.addEventListener('DOMContentLoaded', () => {
  // 1. Theme and display configurations
  applyColorTheme(appState.theme || 'light');
  applyThaiFontStyle(appState.thaiFontStyle || 'looped');
  applyThaiScriptMode(appState.thaiScriptMode || 'full');

  const audioBtn = document.getElementById('audioToggleBtn');
  if (audioBtn) audioBtn.textContent = appState.soundEnabled ? '🔊' : '🔇';

  updateTopMetrics();
  if (typeof checkSpeechCapabilities === 'function') checkSpeechCapabilities();
  if (typeof initFloatingAiWidget === 'function') initFloatingAiWidget();
  if (typeof initLearningPortal === 'function') initLearningPortal();

  // 2. Initial tab synchronization
  setTimeout(() => {
    updateHeroDashboardStats();
    const lastTab = localStorage.getItem('mali_last_tab') || 'curriculum';
    let initPillar = 'theory';
    for (const [pillar, panels] of Object.entries(MALI_PILLAR_MAP)) {
      if (panels.includes(`panel-${lastTab}`)) {
        initPillar = pillar;
        break;
      }
    }
    switchMainTab(initPillar, `panel-${lastTab}`);
  }, 120);

  // 3. PWA Service Worker Registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js')
        .then(reg => console.log('Mali\'s Thai PWA ServiceWorker aktif:', reg.scope))
        .catch(err => console.warn('PWA registration notice:', err));
    });
  }
});
