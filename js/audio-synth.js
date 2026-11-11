/**
 * Mali's Thai - Audio Synthesizer & Speech Player Engine
 * Web Audio API synthesizer, sound effect guard, native Bangkok audio streaming,
 * gender particle formatters, and Romanization helpers.
 */

    function formatThaiForGender(text, gender) {
      if (!text) return text;
      let str = text.trim();
      const isQuestion = /[?？]|ไหม|มั้ย|หรือ|อะไร|ที่ไหน|เมื่อไหร่|เท่าไหร่|กี่|ใคร|ทำไม|หรือเปล่า|ใช่ไหม|เหรอ|หรอ/.test(str);
      const hasParticle = /ครับ|ค่ะ|คะ|นะครับ|นะคะ|ผม|ฉัน|ดิฉัน/.test(str);
      const isSentence = isQuestion || hasParticle || /[.!?]/.test(str) || /^(สวัสดี|ขอบคุณ|ขอโทษ|ไม่เป็นไร|ยินดี|ลาก่อน|พบกันใหม่|ขอ|ไป|จอด|ช่วย)/.test(str);

      if (gender === 'male') {
        str = str.replace(/ดิฉัน|ฉัน/g, 'ผม');
        str = str.replace(/นะคะ/g, 'นะครับ');
        str = str.replace(/ค่ะ|คะ/g, 'ครับ');
        if (isSentence && !/(ครับ|นะครับ)[\s.!?]*$/.test(str) && /[\u0E00-\u0E7F]/.test(str)) {
          str = str.replace(/[\s.!?]+$/, '') + 'ครับ';
        }
      } else {
        str = str.replace(/ผม/g, 'ฉัน');
        str = str.replace(/นะครับ/g, 'นะคะ');
        if (isQuestion) {
          str = str.replace(/ครับ/g, 'คะ');
          if (isSentence && !/(คะ|นะคะ)[\s.!?]*$/.test(str) && /[\u0E00-\u0E7F]/.test(str)) {
            str = str.replace(/[\s.!?]+$/, '') + 'คะ';
          }
        } else {
          str = str.replace(/ครับ/g, 'ค่ะ');
          if (isSentence && !/(ค่ะ|นะคะ)[\s.!?]*$/.test(str) && /[\u0E00-\u0E7F]/.test(str)) {
            str = str.replace(/[\s.!?]+$/, '') + 'ค่ะ';
          }
        }
      }
      return str;
    }

    function formatRomanForGender(roman, gender, isQuestion) {
      if (!roman) return '';
      let str = roman.trim();
      const isSentence = isQuestion || /[.!?]/.test(str) || /(sà-wàt-dii|khɔ̀ɔp-khun|khɔ̌ɔ-thôot|mâi pen rai|khɔ̌ɔ|pai)/i.test(str);

      if (gender === 'male') {
        str = str.replace(/\b(dichan|chan|dì-chǎn|chǎn)\b/gi, 'phǒm');
        str = str.replace(/ná\s*(khà|khá|kha)/gi, 'ná khráp');
        str = str.replace(/(khà|khá|kha|ka)/gi, 'khráp');
        if (isSentence && !/(khráp|khrap)/i.test(str)) {
          str += ' khráp';
        }
      } else {
        str = str.replace(/\b(phom|phǒm)\b/gi, 'chǎn');
        str = str.replace(/ná\s*(khráp|khrap)/gi, 'ná khá');
        const femP = isQuestion ? 'khá' : 'khà';
        str = str.replace(/(khráp|khrap)/gi, femP);
        if (isSentence && !/(khà|khá|kha)/i.test(str)) {
          str += ' ' + femP;
        }
      }
      return str;
    }


    /* 2. AUDIO SYNTHESIZER (WEB AUDIO API) */
    let audioCtx = null;
    function getAudioContext() {
      if (!audioCtx) {
        const AudioClass = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioClass();
      }
      if (audioCtx.state === 'suspended') audioCtx.resume();
      return audioCtx;
    }

    function playSynthSound(type) {
      if (!appState.soundEnabled) return;
      // Hilangkan suara saat menyentuh / mengklik tombol agar interaksi senyap dan tenang
      if (type === 'click' || type === 'tap') return;
      try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;

        if (type === 'click') {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(600, now);
          osc.frequency.exponentialRampToValueAtTime(320, now + 0.04);
          gain.gain.setValueAtTime(0.12, now);
          gain.gain.linearRampToValueAtTime(0.01, now + 0.04);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.05);
        } else if (type === 'correct') {
          [523.25, 659.25, 783.99].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + idx * 0.07);
            gain.gain.setValueAtTime(0.18, now + idx * 0.07);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.22);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + idx * 0.07);
            osc.stop(now + idx * 0.07 + 0.25);
          });
        } else if (type === 'wrong') {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(150, now);
          osc.frequency.linearRampToValueAtTime(110, now + 0.22);
          gain.gain.setValueAtTime(0.16, now);
          gain.gain.linearRampToValueAtTime(0.01, now + 0.22);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.24);
        }
      } catch (e) {
        console.warn(e);
      }
    }

    /* 44 AUTHENTIC TRADITIONAL THAI CONSONANT NAMES (NOMENKLATUR RESMI BANGKOK) */
    const THAI_LETTER_NAMES = {
      'ก': 'กอ ไก่', 'ข': 'ขอ ไข่', 'ฃ': 'ฃอ ขวด', 'ค': 'คอ ควาย', 'ฅ': 'ฅอ คน',
      'ฆ': 'ฆอ ระฆัง', 'ง': 'งอ งู', 'จ': 'จอ จาน', 'ฉ': 'ฉอ ฉิ่ง', 'ช': 'ชอ ช้าง',
      'ซ': 'ซอ โซ่', 'ฌ': 'ฌอ เฌอ', 'ญ': 'ญอ หญิง', 'ฎ': 'ฎอ ชฎา', 'ฏ': 'ฏอ ปฏัก',
      'ฐ': 'ฐอ ฐาน', 'ฑ': 'ฑอ มณโฑ', 'ฒ': 'ฒอ ผู้เฒ่า', 'ณ': 'ณอ เณร', 'ด': 'ดอ เด็ก',
      'ต': 'ตอ เต่า', 'ถ': 'ถอ ถุง', 'ท': 'ทอ ทหาร', 'ธ': 'ธอ ธง', 'น': 'นอ หนู',
      'บ': 'บอ ใบไม้', 'ป': 'ปอ ปลา', 'ผ': 'ผอ ผึ้ง', 'ฝ': 'ฝอ ฝา', 'พ': 'พอ พาน',
      'ฟ': 'ฟอ ฟัน', 'ภ': 'ภอ สำเภา', 'ม': 'มอ ม้า', 'ย': 'ยอ ยักษ์', 'ร': 'รอ เรือ',
      'ล': 'ลอ ลิง', 'ว': 'วอ แหวน', 'ศ': 'ศอ ศาลา', 'ษ': 'ษอ ฤๅษี', 'ส': 'สอ เสือ',
      'ห': 'หอ หีบ', 'ฬ': 'ฬอ จุฬา', 'อ': 'ออ อ่าง', 'ฮ': 'ฮอ นกฮูก'
    };

    /* AUTHENTIC THAI VOWEL SPOKEN NAMES */
    const THAI_VOWEL_NAMES = {
      '-ะ': 'สระอะ', 'ะ': 'สระอะ', '-า': 'สระอา', 'า': 'สระอา',
      '-ิ': 'สระอิ', 'ิ': 'สระอิ', '-ี': 'สระอี', 'ี': 'สระอี',
      '-ึ': 'สระอึ', 'ึ': 'สระอึ', '-ื': 'สระอือ', 'ื': 'สระอือ',
      '-ุ': 'สระอุ', 'ุ': 'สระอุ', '-ู': 'สระอู', 'ู': 'สระอู',
      'เ-': 'สระเอ', 'เ': 'สระเอ', 'แ-': 'สระแอ', 'แ': 'สระแอ',
      'โ-': 'สระโอ', 'โ': 'สระโอ', 'เ-าะ': 'สระเอาะ', 'เ-ีย': 'สระเอีย',
      'เ-ือ': 'สระเอือ', 'ใ-': 'สระใบลไม้ม้วน', 'ไ-': 'สระไม้มลาย'
    };

    let currentThaiAudio = null;
    const audioUrlCache = new Map();
    let loadedVoices = [];

    // Pre-cache voices when speech synthesis is available
    if ('speechSynthesis' in window) {
      const updateVoices = () => {
        try {
          loadedVoices = window.speechSynthesis.getVoices() || [];
        } catch (e) { }
      };
      updateVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = updateVoices;
      }
    }

    // Unmute audio context on first user interaction
    window.addEventListener('click', () => {
      try {
        if (typeof audioCtx !== 'undefined' && audioCtx && audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
      } catch (e) { }
    }, { once: true });

    function getAudioHash(str) {
      if (!str) return '00000000';
      const utf8 = new TextEncoder().encode(str);
      let h = 0x811c9dc5;
      for (let i = 0; i < utf8.length; i++) {
        h ^= utf8[i];
        h = Math.imul(h, 0x01000193) >>> 0;
      }
      return h.toString(16).padStart(8, '0');
    }

    /* UNIVERSAL NATIVE THAI AUDIO ENGINE (TRUE DUAL MALE & FEMALE NATIVE VOICES) */
    function speakThai(text, gender) {
      if (!text) return;

      // Auto-unmute if sound was toggled off when user explicitly clicks an audio button
      if (!appState.soundEnabled) {
        appState.soundEnabled = true;
        const btn = document.getElementById('audioToggleBtn');
        if (btn) btn.textContent = '🔊';
        showToast('🔊 Suara diaktifkan');
      }

      const targetGender = gender || appState.speakerGender || 'female';

      // Automatically format Thai text to match targetGender if it contains gendered particles
      let formattedText = formatThaiForGender(text, targetGender);

      // Extract Thai characters if text contains mixed romanization, parentheses, or translations
      const thaiMatches = formattedText.match(/[\u0E00-\u0E7F\s]+/g);
      let targetText = thaiMatches ? thaiMatches.join('').trim() : formattedText.replace(/<[^>]*>/g, '').trim();
      if (!targetText) return;

      // Check letter / vowel nomenclature for single glyphs
      if (THAI_LETTER_NAMES[targetText]) {
        targetText = THAI_LETTER_NAMES[targetText];
      } else if (THAI_VOWEL_NAMES[targetText]) {
        targetText = THAI_VOWEL_NAMES[targetText];
      }

      // Stop any active audio
      if (currentThaiAudio) {
        try {
          currentThaiAudio.pause();
          currentThaiAudio.currentTime = 0;
        } catch (e) { }
        currentThaiAudio = null;
      }
      if ('speechSynthesis' in window) {
        try { speechSynthesis.cancel(); } catch (e) { }
      }

      // Activate waveform visualization during native speaking
      isWaveformActive = true;
      const waveHint = document.getElementById('waveformHintText');
      if (waveHint) waveHint.style.display = 'none';

      let ended = false;
      const finishAudio = () => {
        if (ended) return;
        if (typeof isAudioLoopEnabled !== 'undefined' && isAudioLoopEnabled && currentThaiAudio) {
          try {
            currentThaiAudio.currentTime = 0;
            currentThaiAudio.play().catch(() => {});
            return;
          } catch (e) {}
        }
        ended = true;
        isWaveformActive = false;
        currentThaiAudio = null;
        const pauseBtn = document.getElementById('btnStudioPause');
        if (pauseBtn) pauseBtn.innerHTML = '<span>⏸️ Jeda</span>';
      };

      const hash = getAudioHash(targetText);
      const encoded = encodeURIComponent(targetText);

      // Audio Endpoints Tiered Architecture:
      // Tier 1: Real-time Neural TTS Endpoint via Local Server (/api/tts auto-serves pregen studio audio or generates dynamic neural audio)
      const serverTtsUrl = `/api/tts?text=${encoded}&gender=${targetGender}`;

      // Tier 2: Static Pre-rendered Studio Audio
      const staticAudioUrl = `audio/${targetGender}/${hash}.mp3`;

      // Tier 4: Direct Google TTS streaming with no-referrer
      const googleTtsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=th&client=tw-ob`;

      function playAudioUrl(url, onFail, isAcousticFallback = false) {
        let triggered = false;
        function triggerFail(err) {
          if (triggered) return;
          triggered = true;
          if (onFail) onFail(err);
        }

        try {
          const audio = new Audio();
          currentThaiAudio = audio;
          audio.referrerPolicy = 'no-referrer';

          if (isAcousticFallback) {
            try {
              audio.preservesPitch = false;
              audio.mozPreservesPitch = false;
              audio.webkitPreservesPitch = false;
            } catch (e) { }
            const baseRate = appState.speechRate || 1.0;
            if (targetGender === 'male') {
              // Deep, authoritative masculine baritone pitch (approx -4.5 semitones)
              audio.playbackRate = baseRate * 0.77;
            } else {
              // Melodic, feminine pitch
              audio.playbackRate = baseRate * 1.05;
            }
          } else {
            const baseRate = appState.speechRate || 1.0;
            audio.playbackRate = baseRate * (targetGender === 'male' ? 0.98 : 1.02);
          }

          audio.onended = finishAudio;
          audio.onerror = (e) => {
            triggerFail(e);
          };

          audio.src = url;
          const playPromise = audio.play();
          if (playPromise !== undefined) {
            playPromise.catch((err) => {
              if (err && err.name === 'AbortError') return; // Cancelled intentionally
              triggerFail(err);
            });
          }
        } catch (err) {
          triggerFail(err);
        }
      }

      // Tier 4b: SoundOfText Cloudflare API Fallback
      async function trySoundOfTextFallback() {
        const cacheKey = 'sot_' + targetGender + '_' + targetText;
        if (audioUrlCache.has(cacheKey)) {
          playAudioUrl(audioUrlCache.get(cacheKey), finishAudio, true);
          return;
        }

        try {
          const res = await fetch('https://api.soundoftext.com/sounds', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              engine: 'Google',
              data: { text: targetText, voice: 'th-TH' }
            })
          });
          const data = await res.json();
          if (data && data.success && data.id) {
            const sotUrl = `https://files.soundoftext.com/${data.id}.mp3`;
            audioUrlCache.set(cacheKey, sotUrl);
            playAudioUrl(sotUrl, finishAudio, true);
            return;
          }
        } catch (e) {
          console.warn("SoundOfText fallback failed:", e);
        }

        finishAudio();
      }

      // CASCADE WITH SEAMLESS FALLBACK:
      // When on HTTP: /api/tts is primary (it checks pre-rendered audio, cache, and generates via Neural TTS without 404)
      const isHttp = window.location.protocol.startsWith('http');
      if (isHttp) {
        playAudioUrl(serverTtsUrl, () => {
          playAudioUrl(staticAudioUrl, () => {
            fallbackSpeechSynthesis(targetText, finishAudio, targetGender, () => {
              playAudioUrl(googleTtsUrl, trySoundOfTextFallback, true);
            });
          });
        });
      } else {
        // Direct file:// mode: try pre-rendered local static file, then dev server, then speech synthesis
        playAudioUrl(staticAudioUrl, () => {
          playAudioUrl(`http://localhost:3001/api/tts?text=${encoded}&gender=${targetGender}`, () => {
            fallbackSpeechSynthesis(targetText, finishAudio, targetGender, () => {
              playAudioUrl(googleTtsUrl, trySoundOfTextFallback, true);
            });
          });
        });
      }
    }

    /* TIER 3: WEB SPEECH SYNTHESIS ENGINE (FAIL-SAFE WITH TRUE GENDER SEPARATION) */
    function fallbackSpeechSynthesis(text, onDone, targetGender = 'female', onFail) {
      if (!('speechSynthesis' in window)) {
        if (onFail) onFail(); else if (onDone) onDone();
        return;
      }
      try {
        speechSynthesis.cancel();
        const voices = loadedVoices.length > 0 ? loadedVoices : (speechSynthesis.getVoices() || []);
        const thaiVoices = voices.filter(v =>
          (v.lang && (v.lang === 'th-TH' || v.lang === 'th_TH' || v.lang.toLowerCase().startsWith('th'))) ||
          (v.name && v.name.toLowerCase().includes('thai'))
        );

        let selectedVoice = null;
        if (thaiVoices.length > 0) {
          selectedVoice = thaiVoices[0];
          if (targetGender === 'male') {
            const maleVoice = thaiVoices.find(v => /male|man|niwat|pattara|boy/i.test(v.name));
            if (maleVoice) selectedVoice = maleVoice;
          } else {
            const femaleVoice = thaiVoices.find(v => /female|woman|narisa|premwadee|kanya|girl/i.test(v.name));
            if (femaleVoice) selectedVoice = femaleVoice;
          }
        }

        const u = new SpeechSynthesisUtterance(text);
        if (selectedVoice) {
          u.voice = selectedVoice;
        }
        u.lang = 'th-TH';

        // Distinct acoustic profile for male vs female
        if (targetGender === 'male') {
          u.pitch = 0.68; // Deep baritone
          u.rate = (appState.speechRate || 1.0) * 0.86;
        } else {
          u.pitch = 1.18; // Melodious female
          u.rate = (appState.speechRate || 1.0) * 1.02;
        }

        let hasSpoken = false;
        u.onstart = () => { hasSpoken = true; };
        u.onend = () => { if (onDone) onDone(); };
        u.onerror = (e) => {
          console.warn("speechSynthesis error:", e);
          if (!hasSpoken && onFail) onFail(); else if (onDone) onDone();
        };

        speechSynthesis.speak(u);
      } catch (err) {
        console.warn("fallbackSpeechSynthesis critical error:", err);
        if (onFail) onFail(); else if (onDone) onDone();
      }
    }


    function pauseNativeAudio() {
      playSynthSound('click');
      if (currentThaiAudio) {
        const btn = document.getElementById('btnStudioPause');
        if (!currentThaiAudio.paused) {
          currentThaiAudio.pause();
          isWaveformActive = false;
          if (btn) btn.innerHTML = '<span>▶️ Lanjut</span>';
          showToast('⏸️ Audio dijeda');
        } else {
          currentThaiAudio.play().catch(() => {});
          isWaveformActive = true;
          if (btn) btn.innerHTML = '<span>⏸️ Jeda</span>';
          showToast('▶️ Melanjutkan audio');
        }
      } else {
        playNativePromptAudio();
      }
    }

    function replayNativeAudio() {
      playSynthSound('click');
      const btn = document.getElementById('btnStudioPause');
      if (btn) btn.innerHTML = '<span>⏸️ Jeda</span>';
      playNativePromptAudio();
    }

    function toggleLoopAudio() {
      playSynthSound('click');
      isAudioLoopEnabled = !isAudioLoopEnabled;
      const btn = document.getElementById('btnStudioLoop');
      if (btn) {
        btn.classList.toggle('active', isAudioLoopEnabled);
        btn.innerHTML = isAudioLoopEnabled ? '<span>🔁 Loop: ON</span>' : '<span>🔁 Loop: OFF</span>';
      }
      showToast(isAudioLoopEnabled ? '🔁 Mode putar ulang otomatis aktif' : 'Loop audio nonaktif');
    }

    function playNativePromptAudio(overrideGender) {
      playSynthSound('click');
      const p = STUDIO_PROMPTS[studioIndex];
      const targetGender = overrideGender || appState.speakerGender || 'female';
      const isQuestion = p.isQuestion || /[?？ไหม|มั้ย|หรือ|อะไร|ที่ไหน|เมื่อไหร่|เท่าไหร่|กี่|ใคร|ทำไม]/.test(p.thai);
      const targetThai = formatThaiForGender(p.thai, targetGender);
      speakThai(targetThai, targetGender);
    }

    function nextStudioPrompt() {
      playSynthSound('click');
      studioIndex = (studioIndex + 1) % STUDIO_PROMPTS.length;
      renderStudioPrompt();
    }


function playTypewriterSound(isCorrect) {
  // Mode hening: suara sentuhan tuts keyboard dinonaktifkan untuk kenyamanan belajar
  return;
}
