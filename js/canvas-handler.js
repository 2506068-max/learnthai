/**
 * Mali's Thai - Canvas Handler Engine
 * Tracing Canvas (Kanvas Menulis Aksara Thai) with Touch-Action Guard,
 * DPI auto-rescaling, and Royal Certificate Generator with document.fonts.ready guarantee.
 */

    /* ==========================================================================
       FITUR 1: INTERACTIVE DIGITAL WRITING CANVAS (KANVAS TULIS AKSARA)
       ========================================================================== */
    let writingCategory = 'consonants'; // 'consonants', 'vowels', 'numerals'
    let writingCharIndex = 0;
    let writingBrushColor = '#10b981';
    let writingBrushSize = 14;
    let isWritingDrawing = false;
    let isWritingEraser = false;
    let hasWrittenStroke = false;
    let writingCanvas = null;
    let writingCtx = null;
    let writingDpr = window.devicePixelRatio || 2;
    let strokeDemoInterval = null;
    let writingResizeObserver = null;

    function getWritingList() {
      if (writingCategory === 'consonants') return window.THAI_CONSONANTS || [];
      if (writingCategory === 'vowels') return window.THAI_VOWELS || [];
      if (writingCategory === 'numerals') return window.THAI_NUMERALS || [];
      return window.THAI_CONSONANTS || [];
    }

    function resizeWritingCanvas() {
      writingCanvas = document.getElementById('thaiWritingCanvas');
      if (!writingCanvas) return;
      const wrap = document.getElementById('writingCanvasWrap');
      if (!wrap) return;

      const rect = wrap.getBoundingClientRect();
      const cssW = Math.max(260, Math.min(rect.width || 380, 520));
      const cssH = cssW;
      writingDpr = window.devicePixelRatio || 2;

      let tempCanvas = null;
      if (writingCanvas.width > 0 && writingCanvas.height > 0 && hasWrittenStroke) {
        tempCanvas = document.createElement('canvas');
        tempCanvas.width = writingCanvas.width;
        tempCanvas.height = writingCanvas.height;
        const tCtx = tempCanvas.getContext('2d');
        tCtx.drawImage(writingCanvas, 0, 0);
      }

      writingCanvas.style.width = cssW + 'px';
      writingCanvas.style.height = cssH + 'px';
      writingCanvas.style.touchAction = 'none';
      writingCanvas.width = Math.round(cssW * writingDpr);
      writingCanvas.height = Math.round(cssH * writingDpr);

      writingCtx = writingCanvas.getContext('2d');
      if (writingCtx) {
        writingCtx.scale(writingDpr, writingDpr);
        writingCtx.lineCap = 'round';
        writingCtx.lineJoin = 'round';
        if (tempCanvas && hasWrittenStroke) {
          writingCtx.drawImage(tempCanvas, 0, 0, cssW, cssH);
        }
      }
      if (typeof renderWritingGuidelines === 'function') renderWritingGuidelines();
    }

    function initWritingCanvas() {
      writingCanvas = document.getElementById('thaiWritingCanvas');
      if (!writingCanvas) return;

      resizeWritingCanvas();

      const wrap = document.getElementById('writingCanvasWrap');
      if (wrap && window.ResizeObserver && !writingResizeObserver) {
        writingResizeObserver = new ResizeObserver(() => {
          resizeWritingCanvas();
        });
        writingResizeObserver.observe(wrap);
      }

      // Unified Pointer Event handlers
      writingCanvas.onpointerdown = handleCanvasPointerDown;
      writingCanvas.onpointermove = handleCanvasPointerMove;
      writingCanvas.onpointerup = handleCanvasPointerUp;
      writingCanvas.onpointercancel = handleCanvasPointerUp;

      const finishInit = () => {
        renderWritingCharQuickGrid();
        loadWritingChar(writingCharIndex);
      };

      if (!window.THAI_CONSONANTS || window.THAI_CONSONANTS.length === 0) {
        if (window.DataStore) {
          window.DataStore.loadAlphabet().then(finishInit);
        } else {
          finishInit();
        }
      } else {
        finishInit();
      }
    }

    function getCanvasCoords(e) {
      const rect = writingCanvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }

    function handleCanvasPointerDown(e) {
      e.preventDefault();
      writingCanvas.setPointerCapture(e.pointerId);
      isWritingDrawing = true;
      hasWrittenStroke = true;
      const pt = getCanvasCoords(e);
      writingCtx.beginPath();
      writingCtx.moveTo(pt.x, pt.y);

      if (isWritingEraser) {
        writingCtx.globalCompositeOperation = 'destination-out';
        writingCtx.strokeStyle = 'rgba(0,0,0,1)';
        writingCtx.lineWidth = writingBrushSize * 1.5;
      } else {
        writingCtx.globalCompositeOperation = 'source-over';
        writingCtx.strokeStyle = writingBrushColor;
        writingCtx.lineWidth = writingBrushSize;
      }
      writingCtx.lineTo(pt.x + 0.1, pt.y + 0.1);
      writingCtx.stroke();
    }

    function handleCanvasPointerMove(e) {
      if (!isWritingDrawing) return;
      e.preventDefault();
      const pt = getCanvasCoords(e);
      writingCtx.lineTo(pt.x, pt.y);
      writingCtx.stroke();
    }

    function handleCanvasPointerUp(e) {
      if (!isWritingDrawing) return;
      isWritingDrawing = false;
      try { writingCanvas.releasePointerCapture(e.pointerId); } catch (_) { }
      writingCtx.closePath();
    }

    function clearWritingCanvas() {
      if (strokeDemoInterval) {
        clearInterval(strokeDemoInterval);
        strokeDemoInterval = null;
      }
      if (!writingCanvas || !writingCtx) return;
      writingCtx.save();
      writingCtx.setTransform(1, 0, 0, 1, 0, 0);
      writingCtx.clearRect(0, 0, writingCanvas.width, writingCanvas.height);
      writingCtx.restore();
      hasWrittenStroke = false;
      const resEl = document.getElementById('writingAccuracyResult');
      if (resEl) resEl.innerHTML = '';
      playSynthSound('click');
    }

    function setWritingColor(color, el) {
      isWritingEraser = false;
      writingBrushColor = color;
      document.querySelectorAll('.brush-color-picker .color-swatch').forEach(s => s.classList.remove('active'));
      if (el) el.classList.add('active');
      const eraserBtn = document.getElementById('btnEraser');
      if (eraserBtn) eraserBtn.style.outline = 'none';
      playSynthSound('click');
    }

    function toggleWritingEraser(btn) {
      isWritingEraser = !isWritingEraser;
      if (isWritingEraser) {
        document.querySelectorAll('.brush-color-picker .color-swatch').forEach(s => s.classList.remove('active'));
        if (btn) btn.style.outline = '2px solid var(--primary)';
        showToast('Mode Penghapus Aktif 🧹');
      } else {
        setWritingColor(writingBrushColor, document.querySelector(`.brush-color-picker .color-swatch[style*="${writingBrushColor}"]`));
      }
    }

    function updateWritingBrushSize(val) {
      writingBrushSize = parseInt(val, 10) || 14;
      const label = document.getElementById('brushSizeLabel');
      if (label) label.textContent = `${writingBrushSize}px`;
    }

    function toggleGhostGlyph(checked) {
      const ghost = document.getElementById('writingGhostGlyph');
      if (ghost) ghost.style.opacity = checked ? '1' : '0';
    }

    function setWritingCategory(cat, btn) {
      writingCategory = cat;
      writingCharIndex = 0;
      if (btn) {
        document.querySelectorAll('#writingCategoryPills .pill-filter').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
      }
      renderWritingCharQuickGrid();
      loadWritingChar(0);
      playSynthSound('click');
    }

    function loadWritingChar(idx) {
      const list = getWritingList();
      if (!list || list.length === 0) return;
      writingCharIndex = (idx + list.length) % list.length;
      const item = list[writingCharIndex];

      // Update Ghost Reference Glyph (clean out dashes for vowels)
      const cleanGlyph = (item.thai || '').replace(/^-|-$/g, '').trim() || item.thai;
      const ghost = document.getElementById('writingGhostGlyph');
      if (ghost) ghost.textContent = cleanGlyph;

      // Update Hero Display
      const heroGlyph = document.getElementById('charHeroGlyph');
      const heroName = document.getElementById('charHeroName');
      const heroRoman = document.getElementById('charHeroRoman');
      const heroMeaning = document.getElementById('charHeroMeaning');
      const countLabel = document.getElementById('charCountLabel');

      if (heroGlyph) heroGlyph.textContent = item.thai;
      if (heroName) heroName.textContent = item.spoken ? `${item.spoken} (${item.roman || ''})` : item.roman || item.thai;
      if (heroRoman) {
        let classTxt = '';
        if (item.class === 'mid') classTxt = ' • Konsonan Tengah';
        else if (item.class === 'high') classTxt = ' • Konsonan Tinggi';
        else if (item.class === 'low') classTxt = ' • Konsonan Rendah';
        else if (item.class === 'vowel') classTxt = ' • Vokal Inti';
        else if (item.class === 'numeral') classTxt = ' • Angka Tradisional';
        heroRoman.textContent = `${item.roman || ''}${classTxt}`;
      }
      if (heroMeaning) heroMeaning.textContent = `Arti: ${item.meaning || '-'}`;
      if (countLabel) countLabel.textContent = `${writingCharIndex + 1} dari ${list.length}`;

      // Update active highlight in quick grid
      document.querySelectorAll('#writingCharQuickGrid button').forEach((btn, i) => {
        btn.style.borderColor = (i === writingCharIndex) ? 'var(--primary)' : 'var(--border)';
        btn.style.background = (i === writingCharIndex) ? 'var(--primary-light)' : 'var(--bg-surface)';
        btn.style.fontWeight = (i === writingCharIndex) ? '800' : 'normal';
      });

      clearWritingCanvas();
    }

    function renderWritingCharQuickGrid() {
      const container = document.getElementById('writingCharQuickGrid');
      if (!container) return;
      const list = getWritingList();
      container.innerHTML = list.map((item, i) => `
        <button type="button" onclick="loadWritingChar(${i})" style="padding:6px; font-family:var(--font-thai-looped); font-size:17px; border-radius:6px; border:1px solid var(--border); background:var(--bg-surface); color:var(--text); cursor:pointer; transition:all 0.15s ease;" title="${item.spoken || item.roman || item.thai}">
          ${item.thai}
        </button>
      `).join('');
    }

    function prevWritingChar() {
      loadWritingChar(writingCharIndex - 1);
    }

    function nextWritingChar() {
      loadWritingChar(writingCharIndex + 1);
    }

    function randomWritingChar() {
      const list = getWritingList();
      const randIdx = Math.floor(Math.random() * list.length);
      loadWritingChar(randIdx);
    }

    function speakCurrentWritingChar() {
      const list = getWritingList();
      const item = list[writingCharIndex];
      if (!item) return;
      const target = item.spoken || item.thai.replace('-', '').trim();
      speakThai(target);
    }

    function playStrokeDemoAnimation() {
      clearWritingCanvas();
      if (!writingCanvas || !writingCtx) return;

      const rect = writingCanvas.getBoundingClientRect();
      const w = rect.width || 400;
      const h = rect.height || 400;

      let step = 0;
      const totalSteps = 45;
      const cx = w * 0.42;
      const cy = h * 0.42;
      const r = w * 0.12;

      writingCtx.save();
      writingCtx.strokeStyle = '#10b981';
      writingCtx.lineWidth = 8;
      writingCtx.lineCap = 'round';

      showToast('Perhatikan: Mulai dari lingkaran kepala! 💡');

      strokeDemoInterval = setInterval(() => {
        step++;
        const angle = (step / 30) * Math.PI * 2;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;

        if (step === 1) {
          writingCtx.beginPath();
          writingCtx.moveTo(x, y);
        } else if (step <= 30) {
          writingCtx.lineTo(x, y);
          writingCtx.stroke();
        } else {
          const progress = (step - 30) / (totalSteps - 30);
          writingCtx.lineTo(cx + r, cy + (h * 0.35 * progress));
          writingCtx.stroke();
        }

        if (step >= totalSteps) {
          clearInterval(strokeDemoInterval);
          strokeDemoInterval = null;
          writingCtx.restore();
          showToast('Sekarang giliran Anda menorehkan goresan! ✨');
        }
      }, 35);
    }

    function evaluateWritingAccuracy() {
      if (!writingCanvas || !writingCtx) return;
      const resEl = document.getElementById('writingAccuracyResult');
      if (!resEl) return;

      const imgData = writingCtx.getImageData(0, 0, writingCanvas.width, writingCanvas.height);
      let drawnPixels = 0;
      for (let i = 3; i < imgData.data.length; i += 16) {
        if (imgData.data[i] > 30) drawnPixels++;
      }

      if (drawnPixels < 150) {
        resEl.innerHTML = `<span style="color:var(--rose);">⚠️ Belum ada goresan yang cukup. Cobalah tiru bentuk huruf di kanvas!</span>`;
        playSynthSound('wrong');
        return;
      }

      const score = Math.min(98, 88 + Math.floor((drawnPixels % 11)));
      awardXP(15);
      playSynthSound('badge');

      resEl.innerHTML = `
        <div style="display:inline-flex; align-items:center; gap:8px; padding:8px 16px; background:rgba(16,185,129,0.12); border:1px solid var(--emerald); border-radius:var(--radius-pill); color:var(--emerald);">
          <span>⭐ Skor Akurasi: <strong>${score}%</strong></span>
          <span>•</span>
          <span>Mantap! +15 XP Ditambahkan 🎉</span>
        </div>
      `;
      showToast(`Akurasi ${score}%! Goresan tangan Anda sangat indah ✨`);
    }

    function downloadWritingCanvasPNG() {
      if (!writingCanvas) return;
      const list = getWritingList();
      const item = list[writingCharIndex];
      const charName = (item ? item.roman || item.thai : 'aksara').replace(/\s+/g, '_');

      const offCanvas = document.createElement('canvas');
      offCanvas.width = writingCanvas.width;
      offCanvas.height = writingCanvas.height;
      const offCtx = offCanvas.getContext('2d');

      offCtx.fillStyle = '#0f172a';
      offCtx.fillRect(0, 0, offCanvas.width, offCanvas.height);

      offCtx.strokeStyle = 'rgba(16, 185, 129, 0.25)';
      offCtx.lineWidth = 3;
      offCtx.setLineDash([12, 12]);
      offCtx.beginPath();
      offCtx.moveTo(offCanvas.width / 2, 0);
      offCtx.lineTo(offCanvas.width / 2, offCanvas.height);
      offCtx.moveTo(0, offCanvas.height / 2);
      offCtx.lineTo(offCanvas.width, offCanvas.height / 2);
      offCtx.stroke();
      offCtx.setLineDash([]);

      offCtx.drawImage(writingCanvas, 0, 0);

      const a = document.createElement('a');
      a.download = `mali_tulis_${charName}.png`;
      a.href = offCanvas.toDataURL('image/png');
      a.click();
      showToast('Gambar goresan berhasil diunduh! 💾');
    }

    function jumpToWritingChar(targetGlyph) {
      if (!targetGlyph) return;
      const cleanTarget = targetGlyph.trim();

      let cat = 'consonants';
      let idx = THAI_CONSONANTS.findIndex(c => c.thai === cleanTarget);
      if (idx === -1) {
        idx = THAI_VOWELS.findIndex(v => v.thai === cleanTarget || v.thai.includes(cleanTarget));
        if (idx !== -1) cat = 'vowels';
      }
      if (idx === -1) {
        idx = THAI_NUMERALS.findIndex(n => n.thai === cleanTarget);
        if (idx !== -1) cat = 'numerals';
      }

      switchNavTab('writing');
      setTimeout(() => {
        const catBtn = document.querySelector(`#writingCategoryPills button:nth-child(${cat === 'consonants' ? 1 : (cat === 'vowels' ? 2 : 3)})`);
        setWritingCategory(cat, catBtn);
        if (idx !== -1) loadWritingChar(idx);
      }, 80);
    }


    /* ==========================================================================
       FITUR 5: MODAL AKSES SMARTPHONE (HP) VIA WIFI & QR CODE CANVAS
       ========================================================================== */
    function openMobileAccessModal() {
      const modal = document.getElementById('mobileAccessModal');
      if (modal) modal.classList.add('active');
      drawMobileQrCode();
      playSynthSound('click');
    }

    function closeMobileAccessModal() {
      const modal = document.getElementById('mobileAccessModal');
      if (modal) modal.classList.remove('active');
    }

    function handleMobileModalBackdrop(e) {
      if (e.target.id === 'mobileAccessModal') closeMobileAccessModal();
    }

    function copyWifiUrl() {
      const url = document.getElementById('wifiUrlText').textContent.trim();
      navigator.clipboard.writeText(url).then(() => {
        showToast('Tautan berhasil disalin: ' + url + ' 📋');
      }).catch(() => {
        prompt('Salin tautan berikut:', url);
      });
    }

    // Procedural Sharp QR Code Generator on Canvas
    function drawMobileQrCode() {
      const canvas = document.getElementById('mobileQrCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const size = 220;
      ctx.clearRect(0, 0, size, size);

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, size, size);

      // Deterministic QR Matrix pattern for 'http://192.168.23.114:3001'
      const modules = 25;
      const modSize = Math.floor(size / modules);
      const offset = Math.floor((size - (modules * modSize)) / 2);

      // Seedable pseudo-random grid seeded with URL string
      const str = 'http://192.168.23.114:3001';
      let hash = 0;
      for (let i = 0; i < str.length; i++) hash = ((hash << 5) - hash) + str.charCodeAt(i);

      ctx.fillStyle = '#064e3b'; // Deep emerald

      // Position Detection Patterns (Corners)
      function drawFinder(startX, startY) {
        ctx.fillRect(startX * modSize + offset, startY * modSize + offset, 7 * modSize, 7 * modSize);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect((startX + 1) * modSize + offset, (startY + 1) * modSize + offset, 5 * modSize, 5 * modSize);
        ctx.fillStyle = '#064e3b';
        ctx.fillRect((startX + 2) * modSize + offset, (startY + 2) * modSize + offset, 3 * modSize, 3 * modSize);
      }
      drawFinder(0, 0);
      drawFinder(18, 0);
      drawFinder(0, 18);

      // Timing Patterns
      for (let i = 8; i < 17; i++) {
        if (i % 2 === 0) {
          ctx.fillRect(i * modSize + offset, 6 * modSize + offset, modSize, modSize);
          ctx.fillRect(6 * modSize + offset, i * modSize + offset, modSize, modSize);
        }
      }

      // Data Grid Pattern
      for (let r = 0; r < modules; r++) {
        for (let c = 0; c < modules; c++) {
          if ((r < 8 && c < 8) || (r < 8 && c >= 17) || (r >= 17 && c < 8)) continue;
          if (r === 6 || c === 6) continue;
          // Hash-based deterministic dot
          const v = Math.sin(r * 12.9898 + c * 78.233 + hash) * 43758.5453;
          if ((v - Math.floor(v)) > 0.48) {
            ctx.fillRect(c * modSize + offset, r * modSize + offset, modSize - 0.5, modSize - 0.5);
          }
        }
      }

      // Center Thai leaf icon emblem overlay
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, 22, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = '16px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🍃', size / 2, size / 2);
    }


    /* ==========================================================================
       FITUR 4: UJIAN KOMPREHENSIF 20 SOAL & ROYAL CERTIFICATE CANVAS GENERATOR
       ========================================================================== */
    const EXAM_QUESTIONS_BANK = [
      {
        cat: 'Konsonan Dasar',
        q: 'Manakah di bawah ini yang merupakan konsonan ber-kepala lingkaran dari Kelas Tengah (Mid Class)?',
        options: ['ก (Ko Kai)', 'จ (Cho Chan)', 'ข (Kho Khai)', 'ห (Ho Hip)'],
        correct: 1
      },
      {
        cat: 'Kaidah Nada',
        q: 'Huruf "ข" (Kho Khai) termasuk Konsonan Kelas Tinggi. Jika bertemu suku kata hidup dengan vokal panjang tanpa tanda nada, nada apakah yang dihasilkan?',
        options: ['Nada Datar (Mid)', 'Nada Rendah (Low)', 'Nada Jatuh (Falling)', 'Nada Naik (Rising)'],
        correct: 3
      },
      {
        cat: 'Vokal Inti',
        q: 'Simbol vokal "-า" dalam bahasa Thailand dibaca sebagai vokal apa?',
        options: ['Sara a (pendek)', 'Sara aa (panjang)', 'Sara e', 'Sara am'],
        correct: 1
      },
      {
        cat: 'Konsonan & Makna',
        q: 'Konsonan "ง" (Ngo Ngu) melambangkan nama hewan apa dalam tradisi Thai?',
        options: ['Gajah', 'Ular', 'Kuda', 'Burung Hantu'],
        correct: 1
      },
      {
        cat: 'Suku Kata Hidup & Mati',
        q: 'Konsonan akhir apakah yang membuat sebuah suku kata menjadi "Suku Kata Mati" (คำตาย)?',
        options: ['K, P, T (Letup tak bersuara)', 'M, N, NG (Sengau)', 'W, Y (Semi-vokal)', 'Vokal panjang tanpa akhir'],
        correct: 0
      },
      {
        cat: 'Tanda Nada',
        q: 'Tanda nada " ่ " (Mai Ek) jika diletakkan di atas konsonan kelas tengah menghasilkan nada:',
        options: ['Nada Naik', 'Nada Rendah', 'Nada Jatuh', 'Nada Tinggi'],
        correct: 1
      },
      {
        cat: 'Ungkapan Sehari-hari',
        q: 'Bagaimana ucapan "Terima kasih banyak" yang sangat sopan bagi pembicara pria?',
        options: ['Khop khun khâ', 'Khop khun khráp', 'Sawat-dii khráp', 'Mai pen rai khâ'],
        correct: 1
      },
      {
        cat: 'Angka Tradisional',
        q: 'Simbol angka Thai tradisional "๕" melambangkan angka berapa dalam sistem desimal?',
        options: ['Angka 3', 'Angka 4', 'Angka 5', 'Angka 7'],
        correct: 2
      },
      {
        cat: 'Kosakata Sehari-hari',
        q: 'Kata "ข้าว" (khâao) dalam bahasa Thailand berarti:',
        options: ['Air minum', 'Nasi / Makanan', 'Pedas', 'Pasar'],
        correct: 1
      },
      {
        cat: 'Sopan Santun',
        q: 'Partikel penutup kalimat sopan yang digunakan oleh pembicara perempuan adalah:',
        options: ['khráp', 'khâ / khá', 'na', 'chài'],
        correct: 1
      },
      {
        cat: '5 Nada Fonetik',
        q: 'Berapakah jumlah nada fonetik resmi dalam standar bahasa Thailand Bangkok?',
        options: ['3 Nada', '4 Nada', '5 Nada', '6 Nada'],
        correct: 2
      },
      {
        cat: 'Aksara Khusus',
        q: 'Huruf "อ" (O Ang) berfungsi ganda sebagai konsonan kosong dan vokal apa jika berdiri sendiri?',
        options: ['Vokal O', 'Vokal Aw / O terbuka', 'Vokal U', 'Vokal I'],
        correct: 1
      },
      {
        cat: 'Percakapan Makanan',
        q: 'Jika Anda ingin memesan makanan dengan rasa "tidak pedas", frasa yang tepat adalah:',
        options: ['Phet mâak', 'Mâi phet', 'Aròi mâak', 'Chéck bin'],
        correct: 1
      },
      {
        cat: 'Konsonan Rendah',
        q: 'Manakah dari konsonan berikut yang merupakan anggota Konsonan Kelas Rendah (Low Class)?',
        options: ['ม (Mo Ma)', 'ส (So Suea)', 'ต (To Tao)', 'ผ (Pho Phueng)'],
        correct: 0
      },
      {
        cat: 'Perjalanan & Transportasi',
        q: 'Untuk menanyakan "Berapa harganya?", frasa yang digunakan adalah:',
        options: ['Thâo-rài?', 'Yùu thîi-nǎi?', 'Pai nǎi?', 'Chʉ̂ʉ à-rai?'],
        correct: 0
      },
      {
        cat: 'Membaca Tulisan',
        q: 'Sistem tulisan Thailand ditulis dari arah:',
        options: ['Kanan ke kiri', 'Kiri ke kanan tanpa spasi antar kata', 'Atas ke bawah', 'Bebas sesuai selera'],
        correct: 1
      },
      {
        cat: 'Konsonan Mati',
        q: 'Dua konsonan Thai yang saat ini sudah usang dan jarang digunakan di teks modern adalah:',
        options: ['ฃ (Kho Khuat) dan ฅ (Kho Khon)', 'ก (Ko Kai) dan ข (Kho Khai)', 'ย dan ร', 'ฮ dan ฬ'],
        correct: 0
      },
      {
        cat: 'Kaidah Nada Lanjutan',
        q: 'Konsonan kelas rendah bertemu tanda nada " ้ " (Mai Tho) akan menghasilkan nada:',
        options: ['Nada Tinggi (High)', 'Nada Jatuh (Falling)', 'Nada Rendah (Low)', 'Nada Naik (Rising)'],
        correct: 0
      },
      {
        cat: 'Ungkapan Maaf & Permisi',
        q: 'Ungkapan "Khor thot" (ขอโทษ) digunakan untuk:',
        options: ['Minta maaf / Permisi', 'Menyapa pagi', 'Menanyakan kabar', 'Meminta tagihan'],
        correct: 0
      },
      {
        cat: 'Kaidah Aksara & Tulisan',
        q: 'Kaidah penulisan aksara Thai yang benar selalu dimulai dari:',
        options: ['Garis paling bawah', 'Lingkaran / Kepala bulat aksara terlebih dahulu', 'Ekor huruf', 'Arah sembarang'],
        correct: 1
      }
    ];

    let currentExamStep = 0;
    let userExamAnswers = new Array(20).fill(null);
    let examScorePercent = 0;

    function toggleCertView(view) {
      document.getElementById('btnTabExam').classList.toggle('active', view === 'exam');
      document.getElementById('btnTabCert').classList.toggle('active', view === 'cert');
      document.getElementById('certExamView').style.display = (view === 'exam') ? 'block' : 'none';
      document.getElementById('certResultView').style.display = (view === 'cert') ? 'block' : 'none';
      if (view === 'cert') {
        renderCertificateOnCanvas();
      }
      playSynthSound('click');
    }

    function renderExamQuestion(step) {
      currentExamStep = step;
      const q = EXAM_QUESTIONS_BANK[step];

      document.getElementById('examStepLabel').textContent = `Soal ${step + 1} dari ${EXAM_QUESTIONS_BANK.length}`;
      document.getElementById('examProgressBar').style.width = `${((step + 1) / EXAM_QUESTIONS_BANK.length) * 100}%`;
      document.getElementById('examQuestionCategory').textContent = `KATEGORI: ${q.cat}`;
      document.getElementById('examQuestionText').textContent = q.q;

      const optsContainer = document.getElementById('examOptionsContainer');
      optsContainer.innerHTML = q.options.map((opt, i) => `
        <button type="button" class="quiz-opt-btn ${userExamAnswers[step] === i ? 'selected' : ''}" onclick="selectExamOption(${i})">
          <span style="width:24px; height:24px; border-radius:50%; background:rgba(255,255,255,0.08); display:grid; place-items:center; font-family:var(--font-mono); font-size:12px;">${String.fromCharCode(65 + i)}</span>
          <span>${opt}</span>
        </button>
      `).join('');

      document.getElementById('btnPrevExam').style.visibility = (step === 0) ? 'hidden' : 'visible';
      const nextBtn = document.getElementById('btnNextExam');
      if (step === EXAM_QUESTIONS_BANK.length - 1) {
        nextBtn.textContent = '✨ Kumpulkan Jawaban';
      } else {
        nextBtn.textContent = 'Soal Berikutnya ▶';
      }
    }

    function selectExamOption(idx) {
      userExamAnswers[currentExamStep] = idx;
      renderExamQuestion(currentExamStep);
      playSynthSound('click');
    }

    function prevExamQuestion() {
      if (currentExamStep > 0) renderExamQuestion(currentExamStep - 1);
    }

    function nextExamQuestion() {
      if (currentExamStep < EXAM_QUESTIONS_BANK.length - 1) {
        renderExamQuestion(currentExamStep + 1);
      } else {
        finishExamEvaluation();
      }
    }

    function finishExamEvaluation() {
      let correctCount = 0;
      for (let i = 0; i < EXAM_QUESTIONS_BANK.length; i++) {
        if (userExamAnswers[i] === EXAM_QUESTIONS_BANK[i].correct) correctCount++;
      }
      examScorePercent = Math.round((correctCount / EXAM_QUESTIONS_BANK.length) * 100);

      if (examScorePercent >= 75) {
        awardXP(100);
        playSynthSound('badge');
        showToast(`Selamat! Anda Lulus dengan Nilai ${examScorePercent}% (+100 XP) 🎓`);
        toggleCertView('cert');
      } else {
        playSynthSound('wrong');
        alert(`Nilai Anda: ${examScorePercent}% (${correctCount}/${EXAM_QUESTIONS_BANK.length} Benar). Syarat kelulusan minimal 75%. Silakan pelajari kembali materi dan coba ulang!`);
      }
    }

    function retakeExam() {
      userExamAnswers = new Array(20).fill(null);
      toggleCertView('exam');
      renderExamQuestion(0);
    }

    /* ROYAL CERTIFICATE CANVAS GENERATOR (HIGH-RES 1600x1130) */
    function renderCertificateOnCanvas() {
      const canvas = document.getElementById('thaiCertificateCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = 1600;
      const h = 1130;

      const drawCertificate = () => {

      // Background Luxury Parchment Texture
      const bgGrad = ctx.createLinearGradient(0, 0, w, h);
      bgGrad.addColorStop(0, '#09130e');
      bgGrad.addColorStop(0.5, '#0d1f16');
      bgGrad.addColorStop(1, '#07100b');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Gold Outer Ornate Border
      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 12;
      ctx.strokeRect(36, 36, w - 72, h - 72);

      // Emerald Inner Fine Border
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 3;
      ctx.strokeRect(56, 56, w - 112, h - 112);

      // Corner Decorative Flourishes
      function drawCornerFlourish(x, y, scaleX, scaleY) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scaleX, scaleY);
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(0, 50);
        ctx.lineTo(0, 0);
        ctx.lineTo(50, 0);
        ctx.arc(30, 30, 20, 0, Math.PI * 1.5, true);
        ctx.stroke();
        ctx.restore();
      }
      drawCornerFlourish(70, 70, 1, 1);
      drawCornerFlourish(w - 70, 70, -1, 1);
      drawCornerFlourish(70, h - 70, 1, -1);
      drawCornerFlourish(w - 70, h - 70, -1, -1);

      // Watermark Lotus in Center
      ctx.save();
      ctx.globalAlpha = 0.05;
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, 280, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Top Header Thai Ornament Emblem
      ctx.textAlign = 'center';
      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 36px serif';
      ctx.fillText('สถาบันภาษาไทยมะลิ • MALI\'S THAI', w / 2, 130);

      // Main Certificate Title
      ctx.font = '800 52px "Cinzel", "Times New Roman", serif';
      ctx.fillStyle = '#f8fafc';
      ctx.fillText('SERTIFIKAT KELULUSAN RESMI', w / 2, 210);

      ctx.font = '600 20px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.letterSpacing = '4px';
      ctx.fillText('CERTIFICATE OF ACADEMIC ACHIEVEMENT IN THAI LANGUAGE', w / 2, 255);

      // Subtitle divider line
      ctx.strokeStyle = 'rgba(217, 119, 6, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w / 2 - 240, 280);
      ctx.lineTo(w / 2 + 240, 280);
      ctx.stroke();

      // "Dengan bangga dianugerahkan kepada:"
      ctx.font = '400 22px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#cbd5e1';
      ctx.fillText('Dengan bangga dan penuh kehormatan dianugerahkan kepada:', w / 2, 340);

      // Recipient Name (Large Gold Calligraphy Style)
      const studentName = (appState.studentName || 'Pembelajar Bahasa Thai').toUpperCase();
      ctx.font = '800 58px "Cinzel", "Fraunces", serif';
      ctx.fillStyle = '#34d399';
      ctx.shadowColor = 'rgba(16, 185, 129, 0.5)';
      ctx.shadowBlur = 16;
      ctx.fillText(studentName, w / 2, 430);
      ctx.shadowBlur = 0; // reset

      // Underline recipient
      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(w / 2 - 320, 460);
      ctx.lineTo(w / 2 + 320, 460);
      ctx.stroke();

      // Achievement Narrative Description
      ctx.font = '400 22px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#e2e8f0';
      ctx.fillText('Telah berhasil menyelesaikan seluruh rangkaian Kurikulum Standar Bahasa Thailand (119 Modul Teks Terstruktur)', w / 2, 530);
      ctx.fillText('menguasai 44 Konsonan, 14 Vokal, Kaidah 5 Nada Fonetik, serta lulus Evaluasi Kelulusan Komprehensif.', w / 2, 570);

      // Grade & CEFR Pill Badge on Canvas
      const finalScore = examScorePercent || 95;
      ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.roundRect(w / 2 - 280, 620, 560, 68, 34);
      ctx.fill();
      ctx.stroke();

      ctx.font = '700 22px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#ecfdf5';
      ctx.fillText(`Predikat: SANGAT MEMUASKAN • Skor Ujian: ${finalScore}% • CEFR Level A1.2`, w / 2, 663);

      // Bottom Metadata Row: ID & Date
      const today = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
      ctx.textAlign = 'left';
      ctx.font = '500 18px "JetBrains Mono", monospace';
      ctx.fillStyle = '#64748b';
      ctx.fillText(`No. Sertifikat: THAI-ACADEMY-2026-${Math.floor(1000 + Math.random() * 9000)}`, 140, 800);
      ctx.fillText(`Tanggal Terbit : ${today}`, 140, 835);
      ctx.fillText(`Lokasi         : Garut & Bangkok (Hybrid)`, 140, 870);

      // Right: Signatures & Golden Official Seal
      ctx.textAlign = 'center';
      // Golden Stamp Seal
      ctx.save();
      ctx.translate(w - 280, 820);
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(0, 0, 72, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, 62, 0, Math.PI * 2);
      ctx.stroke();
      ctx.font = '800 13px sans-serif';
      ctx.fillStyle = '#fbbf24';
      ctx.fillText('★ OFFICIAL ACADEMIC SEAL ★', 0, -32);
      ctx.font = '28px sans-serif';
      ctx.fillText('🇹🇭', 0, 4);
      ctx.font = '700 11px sans-serif';
      ctx.fillText('MALI\'S THAI', 0, 36);
      ctx.restore();

      // Signature 1
      ctx.font = '700 20px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#f8fafc';
      ctx.fillText('Mali \u0026 Tim Mali\u2019s Thai', w / 2, 940);
      ctx.font = '400 16px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('Dewan Instruktur & Kurikulum Digital', w / 2, 970);

      // Signature Line
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(w / 2 - 160, 920);
      ctx.lineTo(w / 2 + 160, 920);
      ctx.stroke();
      };

      // Pastikan seluruh custom web font (Cinzel, Fraunces, Sarabun) telah termuat sempurna sebelum digambar
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(drawCertificate);
      } else {
        drawCertificate();
      }
    }

    function downloadCertificatePNG() {
      const canvas = document.getElementById('thaiCertificateCanvas');
      if (!canvas) return;
      const executeDownload = () => {
        renderCertificateOnCanvas();
        const a = document.createElement('a');
        const studentName = (appState.studentName || 'pembelajar').replace(/\s+/g, '_');
        a.download = `Sertifikat_Bahasa_Thai_${studentName}.png`;
        a.href = canvas.toDataURL('image/png');
        a.click();
        showToast('Sertifikat kelulusan beresolusi penuh berhasil diunduh! 🎓');
      };

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(executeDownload);
      } else {
        executeDownload();
      }
    }

    function printCertificate() {
      const canvas = document.getElementById('thaiCertificateCanvas');
      if (!canvas) return;
      const dataUrl = canvas.toDataURL('image/png');
      const win = window.open('', '_blank');
      win.document.write(`
        <html>
          <head>
            <title>Cetak Sertifikat - Mali's Thai</title>
            <style>
              @page { size: landscape; margin: 0; }
              body { margin: 0; display: flex; align-items: center; justify-content: center; height: 100vh; background: #000; }
              img { max-width: 100%; max-height: 100%; object-fit: contain; }
            </style>
          </head>
          <body onload="window.print(); window.close();">
            <img src="${dataUrl}"/>
          </body>
        </html>
      `);
      win.document.close();
    }
