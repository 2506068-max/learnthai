/**
 * Mali's Thai - Navigation & 5-Slot Bottom Navigation Router
 * Arsitektur 5 Tab Induk:
 * 1. 📚 Teori & Materi (Aksara 44 Konsonan, 5 Nada, Kurikulum Jenjang)
 * 2. ⚡ Latihan Praktik / Gym (Tracing Tulis, Kedmanee Typing, Flashcards, Speed Drill)
 * 3. 🎙️ Speaking AI (Voice Challenge & Roleplay Kafe)
 * 4. 📖 Kamus (Kamus Cepat Audio Thai - Indonesia & Kosakata)
 * 5. ☰ Menu Lotus (Pencarian Global, Dashboard Analytics, Medali, & Sertifikasi)
 */

const MALI_PILLAR_MAP = {
  theory: ['panel-curriculum', 'panel-alphabet', 'panel-phonetics', 'panel-jazmi-series'],
  practice: ['panel-writing', 'panel-typing', 'panel-flashcards', 'panel-speed-drill'],
  speaking: ['panel-studio', 'panel-roleplay', 'panel-ai-hub'],
  dictionary: ['panel-dictionary', 'panel-vocabulary'],
  lotus: ['panel-analytics', 'panel-achievements', 'panel-certificate']
};

let currentMainPillar = 'theory';

    /* 8. NAVIGATION, THEME & UI HELPERS */
    function switchNavTab(tabKey) {
      saveLastTab(tabKey);
      playSynthSound('click');
      toggleMobileDrawer(false);
      const portal = document.getElementById('learningPortal');
      if (portal && portal.classList.contains('portal-visible')) {
        portal.classList.remove('portal-visible');
        portal.classList.add('portal-hidden');
        document.body.classList.remove('in-portal-mode');
      }
      document.querySelectorAll('.stimuler-nav-rail .nav-item-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === tabKey);
      });
      document.querySelectorAll('.mobile-bottom-nav .mobile-nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === tabKey);
      });
      document.querySelectorAll('.section-tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === `panel-${tabKey}`);
      });

      // Synchronize 4-pillar active tabs and sub-nav state
      const panelId = `panel-${tabKey}`;
      updateSubNavState(panelId);
      for (const [pillar, panels] of Object.entries(MALI_PILLAR_MAP)) {
        if (panels.includes(panelId)) {
          document.querySelectorAll('.mali-top-nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-main-tab') === pillar);
          });
          document.querySelectorAll('.mobile-bottom-nav .mobile-nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-main-tab') === pillar);
          });
          break;
        }
      }

      // Asynchronous Lazy Data Fetch & Panel Initializers
      if (tabKey === 'curriculum') {
        if (!window.CURRICULUM_UNITS || window.CURRICULUM_UNITS.length === 0) {
          DataStore.showSkeleton('curriculumUnitsContainer', 'Memuat Roadmap 12 Unit Kurikulum...');
          DataStore.loadCurriculum().then(() => {
            renderCurriculumGrid();
            renderCurriculumNodes();
          });
        } else {
          renderCurriculumGrid();
          renderCurriculumNodes();
        }
      } else if (tabKey === 'jazmi-series') {
        if (!window.JAZMI_CURRICULUM_DATA || window.JAZMI_CURRICULUM_DATA.length === 0) {
          DataStore.showSkeleton('jazmiModuleGrid', 'Memuat 119 Modul Belajar Tertulis...');
          DataStore.loadCurriculum().then(() => {
            renderJazmiGrid();
          });
        } else {
          renderJazmiGrid();
        }
      } else if (tabKey === 'alphabet') {
        if (!window.THAI_CONSONANTS || window.THAI_CONSONANTS.length === 0) {
          DataStore.showSkeleton('alphabetMatrixContainer', 'Memuat Matriks 44 Konsonan & Nada...');
          DataStore.loadAlphabet().then(() => {
            renderTonesGrid();
            renderAlphabetMatrix(currentAlphabetFilter || 'all');
            initAlphabetMiniQuiz();
          });
        } else {
          renderTonesGrid();
          renderAlphabetMatrix(currentAlphabetFilter || 'all');
        }
      } else if (tabKey === 'phonetics') {
        if (!window.THAI_TONES || window.THAI_TONES.length === 0) {
          DataStore.loadAlphabet().then(() => {
            renderTonesGrid();
            renderPhrasebook('all');
          });
        } else {
          renderTonesGrid();
          renderPhrasebook('all');
        }
      } else if (tabKey === 'vocabulary') {
        if (!window.THAI_VOCAB_BANK || window.THAI_VOCAB_BANK.length === 0) {
          DataStore.showSkeleton('vocabFocusCardWrapper', 'Memuat Misi Harian Kosakata...');
          DataStore.loadDictionary().then(() => {
            initVocabularyDailyMission();
            updateVocabDailyMissionUI();
            if (currentVocabViewMode === 'focus') renderVocabFocusCard();
            else if (currentVocabViewMode === 'grid') renderVocabGrid(currentVocabGridFilter);
          });
        } else {
          updateVocabDailyMissionUI();
          if (currentVocabViewMode === 'focus') renderVocabFocusCard();
          else if (currentVocabViewMode === 'grid') renderVocabGrid(currentVocabGridFilter);
        }
      } else if (tabKey === 'dictionary') {
        if (!window.THAI_DICTIONARY || window.THAI_DICTIONARY.length === 0) {
          DataStore.showSkeleton('dictionaryResultsContainer', 'Memuat Kamus Lengkap Thai - Indonesia...');
          DataStore.loadDictionary().then(() => {
            initDictionary();
          });
        } else {
          initDictionary();
        }
      } else if (tabKey === 'writing') {
        setTimeout(initWritingCanvas, 60);
      } else if (tabKey === 'typing') {
        if (!window.THAI_CONSONANTS || window.THAI_CONSONANTS.length === 0) {
          DataStore.loadAlphabet().then(() => {
            renderVirtualKeyboard();
            setTypingLevel(1);
            autoDetectTypingMode();
          });
        } else {
          renderVirtualKeyboard();
          setTypingLevel(1);
          autoDetectTypingMode();
        }
      } else if (tabKey === 'flashcards') {
        if (!window.THAI_CONSONANTS || window.THAI_CONSONANTS.length === 0) {
          DataStore.loadAlphabet().then(() => {
            initFlashcards('all');
          });
        } else {
          initFlashcards('all');
        }
      } else if (tabKey === 'speed-drill') {
        if (!window.THAI_CONSONANTS || window.THAI_CONSONANTS.length === 0) {
          DataStore.loadAlphabet().then(() => {
            setDrillGameMode('consonants');
          });
        } else {
          setDrillGameMode('consonants');
        }
      } else if (tabKey === 'studio') {
        checkSpeechCapabilities();
        renderStudioPrompt();
      } else if (tabKey === 'roleplay') {
        renderScenarioList();
        renderRoleplayChat();
      } else if (tabKey === 'ai-hub') {
        setTimeout(() => renderAiMediaCards(THAI_MEDIA_DATABASE), 60);
      } else if (tabKey === 'certificate') {
        setTimeout(() => renderExamQuestion(0), 60);
      } else if (tabKey === 'achievements') {
        setTimeout(renderAchievementsGrid, 60);
      } else if (tabKey === 'analytics') {
        updateHeroDashboardStats();
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showToast(msg) {
      try {
        const toast = document.getElementById('stimulerToast');
        const msgElem = document.getElementById('toastMsg');
        if (msgElem) msgElem.textContent = msg;
        if (toast) {
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2800);
        }
      } catch (e) {
        console.warn('Toast display warning:', e);
      }
    }

    function applyColorTheme(theme) {
      document.documentElement.setAttribute('data-theme', 'light');
      document.body.setAttribute('data-theme', 'light');
      appState.theme = 'light';
      localStorage.setItem('mali_app_theme', 'light');

      const portalIcon = document.getElementById('portalThemeIcon');
      const portalLabel = document.getElementById('portalThemeLabel');
      if (portalIcon) portalIcon.textContent = theme === 'dark' ? '🏮' : '☀️';
      if (portalLabel) portalLabel.textContent = theme === 'dark' ? 'Mode Malam' : 'Mode Siang';

      const pillDark = document.getElementById('themePillDark');
      const pillLight = document.getElementById('themePillLight');
      if (pillDark) pillDark.classList.toggle('active', theme === 'dark');
      if (pillLight) pillLight.classList.toggle('active', theme === 'light');

      const headerBtn = document.getElementById('headerThemeBtn');
      if (headerBtn) headerBtn.textContent = theme === 'dark' ? '🏮' : '☀️';
    }

    function toggleColorTheme() {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      applyColorTheme(next);
      saveState();
      playSynthSound('click');
      showToast(next === 'dark' ? '🏮 Suasana Hutan Berbintang (Malam)' : '☀️ Suasana Padang Rumput (Siang)');
    }

    function setAppTheme(theme) {
      applyColorTheme(theme);
      saveState();
      playSynthSound('click');
      showToast(theme === 'dark' ? '🏮 Suasana Hutan Berbintang (Malam)' : '☀️ Suasana Padang Rumput (Siang)');
    }

    function toggleAudioEngine() {
      appState.soundEnabled = !appState.soundEnabled;
      document.getElementById('audioToggleBtn').textContent = appState.soundEnabled ? '🔊' : '🔇';
      showToast(appState.soundEnabled ? 'Suara Diaktifkan 🔊' : 'Suara Dimatikan 🔇');
      saveState();
    }

    const COACH_GREETINGS = [
      { thai: 'ยินดีต้อนรับสู่สวนภาษาไทยนะคะ มะลิพร้อมช่วยฝึกพูดค่ะ', ind: 'Selamat datang di taman bahasa Thai! Mali siap melatih Anda bicara ✨' },
      { thai: 'สวัสดีค่ะ วันนี้พร้อมฝึกพูดภาษาไทยให้คล่องหรือยังคะ', ind: 'Sawat-dii kha! Siap melatih kelancaran lidah Anda hari ini?' },
      { thai: 'เก่งมากเลยค่ะ ฝึกพูดทุกวันแบบนี้จะพูดคล่องเหมือนคนไทยแน่นอนค่ะ', ind: 'Luar biasa! Konsisten bicara setiap hari akan membuat aksen Anda seperti orang Thailand asli!' },
      { thai: 'อย่าลืมออกเสียงวรรณยุกต์ให้ชัดเจนนะคะ สู้ๆ ค่ะ', ind: 'Jangan lupa perhatikan intonasi 5 nada ya. Semangat selalu!' }
    ];
    let coachGreetIdx = 0;

    function triggerCoachGreeting() {
      playSynthSound('click');
      const g = COACH_GREETINGS[coachGreetIdx];
      coachGreetIdx = (coachGreetIdx + 1) % COACH_GREETINGS.length;
      speakThai(g.thai);
      showToast(`🍃 Nong Mali: "${g.ind}"`);
    }

    /* GHIBLI AMBIENT FIREFLY PARTICLES ANIMATION */
    const gCanvas = document.getElementById('ghibliCanvas');
    if (gCanvas) {
      const gCtx = gCanvas.getContext('2d');
      let gParticles = [];
      function resizeGhibli() {
        gCanvas.width = window.innerWidth;
        gCanvas.height = window.innerHeight;
      }
      window.addEventListener('resize', resizeGhibli);
      resizeGhibli();

      for (let i = 0; i < 26; i++) {
        gParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          r: Math.random() * 2.2 + 1,
          dx: (Math.random() - 0.5) * 0.4,
          dy: -(Math.random() * 0.45 + 0.15),
          alpha: Math.random() * 0.6 + 0.2
        });
      }

      function animateGhibli() {
        gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        const color = isDark ? '82, 183, 136' : '45, 106, 79';

        gParticles.forEach(p => {
          p.x += p.dx;
          p.y += p.dy;
          p.alpha += Math.sin(Date.now() * 0.002 + p.x) * 0.006;
          if (p.alpha < 0.1) p.alpha = 0.1;
          if (p.alpha > 0.8) p.alpha = 0.8;

          if (p.y < -10) { p.y = gCanvas.height + 10; p.x = Math.random() * gCanvas.width; }
          if (p.x < -10) p.x = gCanvas.width + 10;
          if (p.x > gCanvas.width + 10) p.x = -10;

          gCtx.beginPath();
          gCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          gCtx.fillStyle = `rgba(${color}, ${p.alpha})`;
          gCtx.shadowColor = `rgba(${color}, ${p.alpha * 1.5})`;
          gCtx.shadowBlur = p.r * 5;
          gCtx.fill();
        });
        requestAnimationFrame(animateGhibli);
      }
      requestAnimationFrame(animateGhibli);
    }


    /* ==========================================================================
       FITUR: FLOATING DRAGGABLE AI ASSISTANT & SMART SEARCH CONTROLLER
       ========================================================================== */
    let floatIsDragging = false;
    let floatDragStartX = 0;
    let floatDragStartY = 0;
    let floatDragStartTime = 0;
    let floatInitialLeft = 0;
    let floatInitialTop = 0;
    let floatHasMoved = false;
    let floatActiveTab = 'search';
    let currentFloatSearchCategory = 'all';
    let floatLastTapHandled = 0;
    let lastFlyoutToggleTime = 0;

    let lastNongMaliActivationTime = 0;
    function handleFloatingLotusClick(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      executeNongMaliActivation();
    }

    function executeNongMaliActivation() {
      const now = Date.now();
      if (now - lastNongMaliActivationTime < 450) {
        return; // Prevent duplicate rapid activation from touch/click dual-events
      }
      lastNongMaliActivationTime = now;

      try { playSynthSound('click'); } catch (e) { }

      // Dismiss learning portal if open
      const portal = document.getElementById('learningPortal');
      if (portal && portal.classList.contains('portal-visible')) {
        portal.classList.remove('portal-visible');
        portal.classList.add('portal-hidden');
        portal.style.display = 'none';
        document.body.classList.remove('in-portal-mode');
      }

      // Close mobile drawer if open
      toggleMobileDrawer(false);

      // Toggle the floating AI Search window!
      toggleFloatingAiWindow();

      // Visual feedback on the floating lotus button
      const trigger = document.getElementById('floatingAiBtn');
      if (trigger) {
        trigger.classList.add('pulse-active');
        setTimeout(() => trigger.classList.remove('pulse-active'), 400);
      }
    }

    function initFloatingAiWidget() {
      const container = document.getElementById('floatingAiWidget');
      const trigger = document.getElementById('floatingAiBtn');
      if (!container || !trigger) return;

      // Restore position from localStorage on desktop (keep default on mobile)
      if (window.innerWidth > 900) {
        const savedLeft = localStorage.getItem('mali_ai_pos_left');
        const savedTop = localStorage.getItem('mali_ai_pos_top');
        if (savedLeft !== null && savedTop !== null) {
          const pad = 12;
          const maxL = window.innerWidth - 60;
          const maxT = window.innerHeight - 60;
          const boundedLeft = Math.max(pad, Math.min(Number(savedLeft), maxL));
          const boundedTop = Math.max(pad, Math.min(Number(savedTop), maxT));
          container.style.left = boundedLeft + 'px';
          container.style.top = boundedTop + 'px';
          container.style.bottom = 'auto';
          container.style.right = 'auto';
          adjustFloatingFlyoutPosition(boundedLeft, boundedTop);
        }
      }

      // Mouse Dragging (Desktop)
      trigger.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        startFloatDrag(e.clientX, e.clientY);
        const onMouseMove = (moveEvt) => {
          onFloatDragMove(moveEvt.clientX, moveEvt.clientY);
        };
        const onMouseUp = (upEvt) => {
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
          endFloatDrag();
          const dist = Math.hypot(upEvt.clientX - floatDragStartX, upEvt.clientY - floatDragStartY);
          if (dist < 12 && (Date.now() - floatDragStartTime < 500)) {
            floatLastTapHandled = Date.now();
            executeNongMaliActivation();
          }
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      });

      // Touch Dragging (Mobile)
      trigger.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        const t = e.touches[0];
        startFloatDrag(t.clientX, t.clientY);

        const onTouchMove = (moveEvt) => {
          if (moveEvt.touches.length === 1) {
            onFloatDragMove(moveEvt.touches[0].clientX, moveEvt.touches[0].clientY);
          }
        };

        const onTouchEnd = (endEvt) => {
          document.removeEventListener('touchmove', onTouchMove);
          document.removeEventListener('touchend', onTouchEnd);
          endFloatDrag();

          const duration = Date.now() - floatDragStartTime;
          // If tap was short (< 350ms) or movement was tiny (< 15px), activate Nong Mali Search immediately!
          if (!floatHasMoved || duration < 350) {
            floatLastTapHandled = Date.now();
            executeNongMaliActivation();
          }
        };

        document.addEventListener('touchmove', onTouchMove, { passive: true });
        document.addEventListener('touchend', onTouchEnd);
      }, { passive: true });

      // Fallback Click Event
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (Date.now() - floatLastTapHandled < 600) return;
        if (!floatHasMoved) {
          executeNongMaliActivation();
        }
      });

      // Close autocomplete when clicking outside
      document.addEventListener('click', (e) => {
        const box = document.getElementById('googleAutocompleteBox');
        const input = document.getElementById('floatingUnifiedSearchInput');
        if (box && box.style.display !== 'none') {
          if (!box.contains(e.target) && e.target !== input) {
            hideGoogleAutocomplete();
          }
        }
      });

      // Close when clicking outside on desktop/mobile
      document.addEventListener('click', (e) => {
        // Ignore clicks within 500ms of opening (prevents touch synthesis from auto-closing!)
        if (Date.now() - lastFlyoutToggleTime < 500) return;

        const win = document.getElementById('floatingAiWindow');
        const trig = document.getElementById('floatingAiBtn');
        if (win && (win.style.display === 'flex' || win.classList.contains('open'))) {
          if (!win.contains(e.target) && !trig.contains(e.target)) {
            toggleFloatingAiWindow(false);
          }
        }
      });

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          const win = document.getElementById('floatingAiWindow');
          if (win && win.style.display !== 'none') {
            toggleFloatingAiWindow(false);
          }
        }
      });

      // Render default lotus menus & chat
      renderLotusMenuContent('');
      renderFloatingChatMessages();
    }

    function startFloatDrag(cx, cy) {
      if (window.innerWidth <= 900) return; // Only drag on desktop screens! Keep mobile tap pure & instant
      const container = document.getElementById('floatingAiWidget');
      const rect = container.getBoundingClientRect();
      floatIsDragging = true;
      floatHasMoved = false;
      floatDragStartX = cx;
      floatDragStartY = cy;
      floatDragStartTime = Date.now();
      floatInitialLeft = rect.left;
      floatInitialTop = rect.top;
      container.classList.add('dragging');
    }

    function onFloatDragMove(cx, cy) {
      if (!floatIsDragging) return;
      const dx = cx - floatDragStartX;
      const dy = cy - floatDragStartY;

      // Only mark as dragged if moved more than 15px (prevents micro-jitter from blocking taps)
      if (Math.hypot(dx, dy) > 15) {
        floatHasMoved = true;
      }

      if (!floatHasMoved) return; // Don't shift layout on tiny taps

      const container = document.getElementById('floatingAiWidget');
      const rect = container.getBoundingClientRect();
      const pad = 10;
      let newL = floatInitialLeft + dx;
      let newT = floatInitialTop + dy;

      newL = Math.max(pad, Math.min(newL, window.innerWidth - rect.width - pad));
      newT = Math.max(pad, Math.min(newT, window.innerHeight - rect.height - pad));

      container.style.left = newL + 'px';
      container.style.top = newT + 'px';
      container.style.bottom = 'auto';
      container.style.right = 'auto';

      adjustFloatingFlyoutPosition(newL, newT);
    }

    function endFloatDrag() {
      if (!floatIsDragging) return;
      floatIsDragging = false;
      const container = document.getElementById('floatingAiWidget');
      container.classList.remove('dragging');

      if (floatHasMoved && window.innerWidth > 900) {
        const rect = container.getBoundingClientRect();
        localStorage.setItem('mali_ai_pos_left', Math.round(rect.left));
        localStorage.setItem('mali_ai_pos_top', Math.round(rect.top));
      }
    }

    function adjustFloatingFlyoutPosition(left, top) {
      if (window.innerWidth <= 900) return; // On mobile, CSS handles positioning as fixed card
      const win = document.getElementById('floatingAiWindow');
      if (!win) return;

      if (top < 380) {
        win.style.bottom = 'auto';
        win.style.top = '56px';
      } else {
        win.style.bottom = '56px';
        win.style.top = 'auto';
      }

      if (left < 360) {
        win.style.right = 'auto';
        win.style.left = '0';
      } else {
        win.style.right = '0';
        win.style.left = 'auto';
      }
    }

    function toggleFloatingAiWindow(forceState) {
      const win = document.getElementById('floatingAiWindow');
      if (!win) return;

      const isCurrentlyOpen = (win.style.display === 'flex' || win.classList.contains('open'));
      const shouldOpen = typeof forceState === 'boolean' ? forceState : !isCurrentlyOpen;

      if (shouldOpen) {
        lastFlyoutToggleTime = Date.now();
        toggleMobileDrawer(false);

        const container = document.getElementById('floatingAiWidget');
        if (container && window.innerWidth > 900) {
          const rect = container.getBoundingClientRect();
          adjustFloatingFlyoutPosition(rect.left, rect.top);
        }
        win.style.display = 'flex';
        win.classList.add('open');
        playSynthSound('click');
        setLotusTab('menus');
        setTimeout(() => {
          const input = document.getElementById('floatingUnifiedSearchInput');
          if (input) {
            input.focus();
            if (!input.value) {
              renderLotusMenuContent('');
            }
          }
        }, 80);
      } else {
        win.style.display = 'none';
        win.classList.remove('open');
        playSynthSound('click');
      }
    }

    function setFloatingAiTab(tab) {
      floatActiveTab = tab;
      document.querySelectorAll('.floating-ai-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.floating-tab-body').forEach(b => b.style.display = 'none');

      if (tab === 'search') {
        const btn = document.getElementById('tabBtnFloatSearch');
        const body = document.getElementById('floatTabSearch');
        if (btn) btn.classList.add('active');
        if (body) body.style.display = 'flex';
        const input = document.getElementById('floatingUnifiedSearchInput');
        renderFloatingUnifiedResults(input ? input.value : '', currentFloatSearchCategory);
      } else if (tab === 'chat') {
        const btn = document.getElementById('tabBtnFloatChat');
        const body = document.getElementById('floatTabChat');
        if (btn) btn.classList.add('active');
        if (body) body.style.display = 'flex';
        renderFloatingChatMessages();
      } else if (tab === 'trans') {
        const btn = document.getElementById('tabBtnFloatTrans');
        const body = document.getElementById('floatTabTrans');
        if (btn) btn.classList.add('active');
        if (body) body.style.display = 'flex';
      }
      playSynthSound('click');
    }

    function openFullAiHub() {
      toggleFloatingAiWindow(false);
      switchNavTab('ai-hub');
    }

    /* ==========================================================================
       FITUR: PENCARIAN PINTAR GOOGLE-STYLE UNIVERSAL (LAGU, TONTONAN, 119 BAB, KAMUS, BUDAYA, AI)
       ========================================================================== */
    let googleSearchDebounceTimer = null;

    function setFloatingSearchCategory(cat, btn) {
      if (typeof playSynthSound === 'function') playSynthSound('click');
      currentFloatSearchCategory = cat;
      const pills = document.querySelectorAll('#floatingSearchCategoryPills .pill-filter');
      pills.forEach(p => p.classList.remove('active'));
      if (btn) btn.classList.add('active');
      const input = document.getElementById('floatingUnifiedSearchInput');
      const q = input ? input.value : '';
      renderFloatingUnifiedResults(q, cat);
    }

    function onGoogleUniversalSearchInput(value) {
      const clearBtn = document.getElementById('floatingSearchClearBtn');
      if (clearBtn) {
        clearBtn.style.display = value ? 'flex' : 'none';
      }
      renderGoogleAutocomplete(value);
      clearTimeout(googleSearchDebounceTimer);
      googleSearchDebounceTimer = setTimeout(() => {
        renderFloatingUnifiedResults(value, currentFloatSearchCategory);
      }, 120);
    }

    // Alias for backwards compatibility
    function onFloatingUnifiedSearch(value) {
      onGoogleUniversalSearchInput(value);
    }

    function onGoogleUniversalSearchKeydown(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        hideGoogleAutocomplete();
        const input = document.getElementById('floatingUnifiedSearchInput');
        const q = input ? input.value : '';
        renderFloatingUnifiedResults(q, currentFloatSearchCategory);
      } else if (event.key === 'Escape') {
        hideGoogleAutocomplete();
      }
    }

    function executeFloatingUnifiedSearch(value) {
      hideGoogleAutocomplete();
      renderFloatingUnifiedResults(value, currentFloatSearchCategory);
    }

    function onGoogleSearchFocus() {
      const input = document.getElementById('floatingUnifiedSearchInput');
      if (input && input.value.trim()) {
        renderGoogleAutocomplete(input.value);
      }
    }

    function clearFloatingSearch() {
      const input = document.getElementById('floatingUnifiedSearchInput');
      if (input) {
        input.value = '';
        input.focus();
      }
      const clearBtn = document.getElementById('floatingSearchClearBtn');
      if (clearBtn) clearBtn.style.display = 'none';
      hideGoogleAutocomplete();
      renderFloatingUnifiedResults('', currentFloatSearchCategory);
    }

    function selectGoogleAutocomplete(term) {
      const input = document.getElementById('floatingUnifiedSearchInput');
      if (input) input.value = term;
      hideGoogleAutocomplete();
      const clearBtn = document.getElementById('floatingSearchClearBtn');
      if (clearBtn) clearBtn.style.display = 'flex';
      renderFloatingUnifiedResults(term, currentFloatSearchCategory);
    }

    function hideGoogleAutocomplete() {
      const box = document.getElementById('googleAutocompleteBox');
      if (box) {
        box.style.display = 'none';
        box.innerHTML = '';
      }
    }

    function renderGoogleAutocomplete(rawQuery) {
      const box = document.getElementById('googleAutocompleteBox');
      if (!box) return;
      const q = (rawQuery || '').trim().toLowerCase();
      if (!q || q.length < 1) {
        box.style.display = 'none';
        box.innerHTML = '';
        return;
      }

      const suggestions = [];

      // 1. Media match (songs & artists)
      if (typeof THAI_MEDIA_DATABASE !== 'undefined') {
        for (const m of THAI_MEDIA_DATABASE) {
          if ((m.titleRoman && m.titleRoman.toLowerCase().includes(q)) ||
            (m.titleThai && m.titleThai.toLowerCase().includes(q)) ||
            (m.artist && m.artist.toLowerCase().includes(q))) {
            suggestions.push({
              type: '🎵',
              text: `${m.titleRoman} - ${m.artist}`,
              search: m.titleRoman
            });
          }
          if (suggestions.length >= 2) break;
        }
      }

      // 2. 119 Jazmi Lessons
      if (typeof getAllJazmiLessonsFlat === 'function') {
        const allL = getAllJazmiLessonsFlat();
        for (const l of allL) {
          if (l.title && (l.title.toLowerCase().includes(q) || `bab ${l.lessonNumber}`.includes(q))) {
            suggestions.push({
              type: '📚',
              text: `Bab ${l.lessonNumber}: ${l.title}`,
              search: l.title
            });
          }
          if (suggestions.length >= 4) break;
        }
      }

      // 3. Dictionary
      if (typeof THAI_DICTIONARY !== 'undefined') {
        for (const d of THAI_DICTIONARY) {
          if ((d.thai && d.thai.toLowerCase().includes(q)) ||
            (d.roman && d.roman.toLowerCase().includes(q)) ||
            (d.id && d.id.toLowerCase().includes(q))) {
            suggestions.push({
              type: '📖',
              text: `${d.thai} (${d.roman}) - ${d.id}`,
              search: d.thai
            });
          }
          if (suggestions.length >= 6) break;
        }
      }

      // 4. Encyclopedia
      if (typeof THAILAND_ENCYCLOPEDIA !== 'undefined') {
        for (const e of THAILAND_ENCYCLOPEDIA) {
          if (e.title && (e.title.toLowerCase().includes(q) || (e.thai && e.thai.toLowerCase().includes(q)))) {
            suggestions.push({
              type: '🏛️',
              text: e.title,
              search: e.title
            });
          }
          if (suggestions.length >= 7) break;
        }
      }

      if (suggestions.length === 0) {
        box.style.display = 'none';
        box.innerHTML = '';
        return;
      }

      box.innerHTML = suggestions.slice(0, 6).map(s => `
        <div class="google-autocomplete-item" onclick="selectGoogleAutocomplete('${escapeQuotes(s.search)}')">
          <span style="opacity:0.6; font-size:13px;">${s.type}</span>
          <span style="flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${escapeHtml(s.text)}</span>
          <span style="font-size:11px; opacity:0.4;">↖</span>
        </div>
      `).join('');
      box.style.display = 'block';
    }

    function triggerFloatingSearchMic() {
      if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        showToast('Fitur input suara belum didukung di browser ini.');
        return;
      }
      try {
        const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recog = new SpeechRec();
        recog.lang = 'id-ID';
        recog.interimResults = false;
        recog.maxAlternatives = 1;
        const input = document.getElementById('floatingUnifiedSearchInput');
        const prevPlaceholder = input ? input.placeholder : '';
        if (input) input.placeholder = '🎙️ Mendengarkan... Katakan judul lagu, bab, atau kata';
        showToast('🎙️ Mendengarkan suara... Silakan berbicara');

        recog.onresult = (e) => {
          const transcript = e.results[0][0].transcript;
          if (input) {
            input.value = transcript;
            input.placeholder = prevPlaceholder;
            const clearBtn = document.getElementById('floatingSearchClearBtn');
            if (clearBtn) clearBtn.style.display = 'flex';
          }
          renderFloatingUnifiedResults(transcript, currentFloatSearchCategory);
          showToast(`Mencari: "${transcript}"`);
        };
        recog.onerror = () => {
          if (input) input.placeholder = prevPlaceholder;
          showToast('Suara tidak terdengar.');
        };
        recog.start();
      } catch (err) {
        showToast('Mikrofon tidak dapat diakses.');
      }
    }

    function renderFloatingUnifiedResults(rawQuery = '', filterCategory = 'all') {
      const container = document.getElementById('floatingSearchResultsContainer');
      if (!container) return;

      const q = (rawQuery || '').trim().toLowerCase();

      // CASE A: EMPTY QUERY -> SHOW POPULAR PICKS & GOOGLE WELCOME
      if (!q) {
        let popularMedia = [];
        if (typeof THAI_MEDIA_DATABASE !== 'undefined') {
          if (filterCategory === 'song') {
            popularMedia = THAI_MEDIA_DATABASE.filter(m => m.category === 'song').slice(0, 5);
          } else if (filterCategory === 'video') {
            popularMedia = THAI_MEDIA_DATABASE.filter(m => m.category === 'cartoon' || m.category === 'learning').slice(0, 5);
          } else {
            popularMedia = THAI_MEDIA_DATABASE.slice(0, 4);
          }
        }

        container.innerHTML = `
          <!-- Google-Style Header Banner -->
          <div style="background:#ffffff; border:1px solid #dadce0; border-radius:var(--radius-lg); padding:14px; box-shadow:0 1px 6px rgba(32,33,36,0.08);">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
              <span style="font-size:18px;">🪷</span>
              <div style="font-size:14px; font-weight:800; color:#202124;">
                <span style="color:#2d6a4f;">Nong Mali</span> <span style="color:#1a73e8;">Universal Search</span>
              </div>
            </div>
            <p style="margin:0; font-size:11.8px; color:#5f6368; line-height:1.45;">
              Cari lagu Thai hits, tontonan edukatif anak & pemula, 119 bab kurikulum tulis materi 01-90, 148+ kosakata kamus, budaya & wisata, atau tanyakan apa saja ke AI layaknya Google!
            </p>
          </div>

          <!-- Quick Trending Searches -->
          <div style="background:#ffffff; border:1px solid #dadce0; border-radius:var(--radius-lg); padding:12px 14px;">
            <div style="font-size:11px; font-weight:800; color:#202124; margin-bottom:8px; display:flex; align-items:center; gap:6px;">
              <span style="color:#ea4335;">🔥</span> TREN PENELUSURAN POPULER:
            </div>
            <div class="google-related-chips">
              <button type="button" class="google-related-chip" onclick="quickApplySearch('Three Man Down')">🎵 Three Man Down</button>
              <button type="button" class="google-related-chip" onclick="quickApplySearch('Tilly Birds')">🎵 Tilly Birds</button>
              <button type="button" class="google-related-chip" onclick="quickApplySearch('Peppa Pig')">📺 Peppa Pig Thai</button>
              <button type="button" class="google-related-chip" onclick="quickApplySearch('Bab 01 Konsonan')">📚 Bab 01: Konsonan Dasar</button>
              <button type="button" class="google-related-chip" onclick="quickApplySearch('สวัสดี')">📖 Halo (สวัสดี)</button>
              <button type="button" class="google-related-chip" onclick="quickApplySearch('Pad Thai')">🍜 Pad Thai &amp; Kuliner</button>
              <button type="button" class="google-related-chip" onclick="quickApplySearch('Aturan Pakaian Kuil')">🛕 Etika Pakaian Kuil</button>
              <button type="button" class="google-related-chip" onclick="quickApplySearch('5 Nada Bahasa Thai')">🎵 5 Nada Suara</button>
              <button type="button" class="google-related-chip" onclick="quickApplySearch('Transportasi BTS')">🚆 Kereta BTS &amp; MRT</button>
            </div>
          </div>

          <!-- Featured Snippets & Media Section -->
          <div>
            <div style="font-size:11px; font-weight:800; color:#70757a; font-family:var(--font-mono); margin:4px 0 8px 2px;">
              🌟 REKOMENDASI TERPOPULER:
            </div>
            <div style="display:flex; flex-direction:column; gap:8px;">
              ${popularMedia.map(item => renderGoogleSnippetMediaHtml(item)).join('')}
            </div>
          </div>
        `;
        return;
      }

      // CASE B: ACTIVE SEARCH QUERY
      const searchTime = (0.01 + Math.random() * 0.02).toFixed(2);

      let oneBoxMatch = null;
      let mediaMatches = [];
      let jazmiMatches = [];
      let dictMatches = [];
      let encycloMatches = [];
      let consonantMatches = [];

      // 1. OneBox Knowledge Graph (Featured Snippet) Search
      if (typeof QA_KNOWLEDGE_BASE !== 'undefined' && filterCategory !== 'song' && filterCategory !== 'video' && filterCategory !== 'vocab') {
        let bestScore = 0;
        for (const item of QA_KNOWLEDGE_BASE) {
          let score = 0;
          if (item.patterns && Array.isArray(item.patterns)) {
            for (const pat of item.patterns) {
              if (q.includes(pat.toLowerCase())) score += 3;
            }
          }
          if (item.title && item.title.toLowerCase().includes(q)) score += 4;
          if (item.response && item.response.toLowerCase().includes(q)) score += 1;
          if (score > bestScore) {
            bestScore = score;
            oneBoxMatch = item;
          }
        }
        if (bestScore < 2) {
          oneBoxMatch = null;
        }
      }

      // 2. Media Database (Songs, Educational Shows, Cartoons)
      if (typeof THAI_MEDIA_DATABASE !== 'undefined' && filterCategory !== 'vocab' && filterCategory !== 'curriculum' && filterCategory !== 'culture' && filterCategory !== 'consonant') {
        mediaMatches = THAI_MEDIA_DATABASE.filter(m => {
          if (filterCategory === 'song' && m.category !== 'song') return false;
          if (filterCategory === 'video' && m.category !== 'cartoon' && m.category !== 'learning') return false;
          return (m.titleThai && m.titleThai.toLowerCase().includes(q)) ||
            (m.titleRoman && m.titleRoman.toLowerCase().includes(q)) ||
            (m.titleMeaning && m.titleMeaning.toLowerCase().includes(q)) ||
            (m.artist && m.artist.toLowerCase().includes(q)) ||
            (m.description && m.description.toLowerCase().includes(q)) ||
            (m.level && m.level.toLowerCase().includes(q)) ||
            (m.category && m.category.toLowerCase().includes(q));
        });
      }

      // 3. 119 Jazmi Written Curriculum Lessons
      if (typeof getAllJazmiLessonsFlat === 'function' && filterCategory !== 'song' && filterCategory !== 'video' && filterCategory !== 'vocab' && filterCategory !== 'culture') {
        const allLessons = getAllJazmiLessonsFlat();
        jazmiMatches = allLessons.filter(l => {
          const numStr = String(l.lessonNumber || '');
          const padNum = numStr.padStart(2, '0');
          return (l.title && l.title.toLowerCase().includes(q)) ||
            (l.summary && l.summary.toLowerCase().includes(q)) ||
            (l.partTitle && l.partTitle.toLowerCase().includes(q)) ||
            (l.tag && l.tag.toLowerCase().includes(q)) ||
            q.includes(`bab ${numStr}`) ||
            q.includes(`bab ${padNum}`) ||
            q.includes(`materi ${numStr}`) ||
            q.includes(`materi ${padNum}`) ||
            (`bab ${numStr}`).includes(q) ||
            (`bab ${padNum}`).includes(q);
        }).slice(0, 10);
      }

      // 4. Dictionary (Words & Sentences)
      if (typeof THAI_DICTIONARY !== 'undefined' && filterCategory !== 'song' && filterCategory !== 'video' && filterCategory !== 'curriculum' && filterCategory !== 'culture') {
        dictMatches = THAI_DICTIONARY.filter(d => {
          return (d.thai && d.thai.toLowerCase().includes(q)) ||
            (d.roman && d.roman.toLowerCase().includes(q)) ||
            (d.id && d.id.toLowerCase().includes(q)) ||
            (d.cat && d.cat.toLowerCase().includes(q));
        }).slice(0, 10);
      }

      // 5. Thailand Encyclopedia (Travel, Culture, Places, Tips)
      if (typeof THAILAND_ENCYCLOPEDIA !== 'undefined' && filterCategory !== 'song' && filterCategory !== 'video' && filterCategory !== 'curriculum' && filterCategory !== 'consonant') {
        encycloMatches = THAILAND_ENCYCLOPEDIA.filter(e => {
          return (e.title && e.title.toLowerCase().includes(q)) ||
            (e.thai && e.thai.toLowerCase().includes(q)) ||
            (e.phonetic && e.phonetic.toLowerCase().includes(q)) ||
            (e.summary && e.summary.toLowerCase().includes(q)) ||
            (e.tips && e.tips.toLowerCase().includes(q)) ||
            (e.category && e.category.toLowerCase().includes(q)) ||
            (e.categoryLabel && e.categoryLabel.toLowerCase().includes(q));
        }).slice(0, 8);
      }

      // 6. Consonants & Phonetics
      if (typeof THAI_CONSONANTS !== 'undefined' && filterCategory !== 'song' && filterCategory !== 'video' && filterCategory !== 'curriculum' && filterCategory !== 'culture') {
        consonantMatches = THAI_CONSONANTS.filter(c => {
          return (c.thai && c.thai.toLowerCase().includes(q)) ||
            (c.spoken && c.spoken.toLowerCase().includes(q)) ||
            (c.roman && c.roman.toLowerCase().includes(q)) ||
            (c.meaning && c.meaning.toLowerCase().includes(q)) ||
            (c.class && c.class.toLowerCase().includes(q));
        }).slice(0, 6);
      }

      const totalMatches = (oneBoxMatch ? 1 : 0) + mediaMatches.length + jazmiMatches.length + dictMatches.length + encycloMatches.length + consonantMatches.length;

      let html = '';

      // Google Stats Bar
      html += `
        <div class="google-stats-bar">
          <span>Ditemukan sekitar <strong>${totalMatches}</strong> hasil (${searchTime} detik)</span>
          <button type="button" class="btn-subtle-nav" onclick="clearFloatingSearch()" style="font-size:10.5px; padding:2px 8px;">✕ Reset</button>
        </div>
      `;

      // 1. ONEBOX / FEATURED SNIPPET (KNOWLEDGE GRAPH)
      if (oneBoxMatch) {
        html += `
          <div class="google-onebox-card">
            <div class="google-onebox-badge">
              <span>💡</span> JAWABAN LANGSUNG NONG MALI AI (FEATURED SNIPPET)
            </div>
            <div class="google-snippet-title" style="font-size:16px;" onclick="speakThai('${escapeQuotes(oneBoxMatch.thaiKey || oneBoxMatch.title)}')">
              ${highlightGoogleMatch(oneBoxMatch.title, q)}
            </div>
            ${oneBoxMatch.thaiKey ? `
              <div style="font-size:15px; font-weight:700; color:#2d6a4f; font-family:var(--font-thai);">
                ${oneBoxMatch.thaiKey} <span style="font-size:11.5px; font-family:var(--font-mono); color:#5f6368; font-weight:500;">(${oneBoxMatch.thaiPhonetic || ''})</span>
              </div>
            ` : ''}
            <div class="google-snippet-desc" style="font-size:12.5px; line-height:1.5; color:#3c4043; white-space:pre-line;">
              ${highlightGoogleMatch(oneBoxMatch.response.substring(0, 320) + (oneBoxMatch.response.length > 320 ? '...' : ''), q)}
            </div>
            ${oneBoxMatch.tips ? `
              <div style="background:#f1f8f4; border-left:3px solid #2d6a4f; padding:6px 10px; border-radius:4px; font-size:11.5px; color:#1b4332; margin-top:2px;">
                💡 <strong>Tips:</strong> ${oneBoxMatch.tips}
              </div>
            ` : ''}
            <div class="google-action-buttons">
              ${oneBoxMatch.thaiKey ? `
                <button type="button" class="google-btn-action primary" onclick="speakThai('${escapeQuotes(oneBoxMatch.thaiKey)}')">
                  🔊 Dengar Pelafalan Bangkok
                </button>
              ` : ''}
              <button type="button" class="google-btn-action" onclick="askFloatingAiAbout('${escapeQuotes(rawQuery)}')">
                💬 Tanya Lebih Detail ke AI
              </button>
            </div>
          </div>
        `;
      }

      // 2. 119 JAZMI CURRICULUM LESSONS (MATERI 01-90)
      if (jazmiMatches.length > 0) {
        html += `
          <div style="font-size:11.5px; font-weight:800; color:#2d6a4f; margin-top:4px; display:flex; align-items:center; gap:6px;">
            <span>📚</span> MATERI 119 BAB KURIKULUM (${jazmiMatches.length})
          </div>
          <div style="display:flex; flex-direction:column; gap:8px;">
            ${jazmiMatches.map(l => `
              <div class="google-snippet-card">
                <div class="google-breadcrumb">
                  <span>learnthai.app</span>
                  <span>›</span>
                  <span>kurikulum</span>
                  <span>›</span>
                  <span>bab-${l.lessonNumber}</span>
                </div>
                <div class="google-snippet-title" onclick="openJazmiLessonFromSearch('${l.id}')">
                  📖 Bab ${l.lessonNumber}: ${highlightGoogleMatch(l.title, q)}
                </div>
                <div class="google-snippet-desc">
                  ${highlightGoogleMatch(l.summary || l.desc || 'Pelajari materi aksara, tata bahasa, dan cara penulisan pada bab ini.', q)}
                </div>
                <div class="google-action-buttons">
                  <button type="button" class="google-btn-action primary" onclick="openJazmiLessonFromSearch('${l.id}')">
                    📖 Buka &amp; Pelajari Bab Ini →
                  </button>
                  ${l.thaiSample ? `
                    <button type="button" class="google-btn-action" onclick="speakThai('${escapeQuotes(l.thaiSample.thai)}')">
                      🔊 Contoh: ${l.thaiSample.thai}
                    </button>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }

      // 3. MEDIA (SONGS & EDUCATIONAL VIDEOS)
      if (mediaMatches.length > 0) {
        html += `
          <div style="font-size:11.5px; font-weight:800; color:#2d6a4f; margin-top:6px; display:flex; align-items:center; gap:6px;">
            <span>🎵</span> LAGU &amp; TONTONAN EDUKATIF (${mediaMatches.length})
          </div>
          <div style="display:flex; flex-direction:column; gap:8px;">
            ${mediaMatches.map(m => renderGoogleSnippetMediaHtml(m, q)).join('')}
          </div>
        `;
      }

      // 4. DICTIONARY (KOSAKATA KAMUS)
      if (dictMatches.length > 0) {
        html += `
          <div style="font-size:11.5px; font-weight:800; color:#2d6a4f; margin-top:6px; display:flex; align-items:center; gap:6px;">
            <span>📖</span> KOSAKATA KAMUS (${dictMatches.length})
          </div>
          <div style="display:flex; flex-direction:column; gap:8px;">
            ${dictMatches.map(d => `
              <div class="google-snippet-card">
                <div class="google-breadcrumb">
                  <span>learnthai.app</span>
                  <span>›</span>
                  <span>kamus</span>
                  <span>›</span>
                  <span>${d.cat || 'kosakata'}</span>
                </div>
                <div class="google-snippet-title" onclick="speakThai('${escapeQuotes(d.thai)}')">
                  <span style="font-family:var(--font-thai); font-size:18px;">${d.thai}</span>
                  <span style="color:#2d6a4f; font-size:13px; font-family:var(--font-mono); margin-left:6px;">(${d.roman})</span>
                  — Arti: ${highlightGoogleMatch(d.id, q)}
                </div>
                <div class="google-snippet-desc">
                  Kategori: <strong>${d.cat || 'Umum'}</strong> • Nada: <strong>${d.tone || 'Normal'}</strong> • Pelafalan fonetik: <em>${d.roman}</em>
                </div>
                <div class="google-action-buttons">
                  <button type="button" class="google-btn-action primary" onclick="speakThai('${escapeQuotes(d.thai)}')">
                    🔊 Dengar Penutur Asli
                  </button>
                  <button type="button" class="google-btn-action" onclick="quickApplySearch('${escapeQuotes(d.thai)}')">
                    🔍 Cari Lagu Berisi Kata Ini
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }

      // 5. ENCYCLOPEDIA (WISATA & BUDAYA)
      if (encycloMatches.length > 0) {
        html += `
          <div style="font-size:11.5px; font-weight:800; color:#2d6a4f; margin-top:6px; display:flex; align-items:center; gap:6px;">
            <span>🏛️</span> WISATA, KULINER &amp; BUDAYA (${encycloMatches.length})
          </div>
          <div style="display:flex; flex-direction:column; gap:8px;">
            ${encycloMatches.map(e => `
              <div class="google-snippet-card">
                <div class="google-breadcrumb">
                  <span>learnthai.app</span>
                  <span>›</span>
                  <span>wisata-budaya</span>
                  <span>›</span>
                  <span>${e.category}</span>
                </div>
                <div class="google-snippet-title" onclick="openEncyclopediaFromSearch('${e.id}')">
                  ${e.icon || '📌'} ${highlightGoogleMatch(e.title, q)}
                </div>
                ${e.thai ? `
                  <div style="font-size:13px; font-weight:700; color:#2d6a4f; font-family:var(--font-thai);">
                    ${e.thai} <span style="font-size:11px; font-family:var(--font-mono); color:#5f6368;">(${e.phonetic || ''})</span>
                  </div>
                ` : ''}
                <div class="google-snippet-desc">
                  ${highlightGoogleMatch(e.summary || '', q)}
                </div>
                <div class="google-action-buttons">
                  <button type="button" class="google-btn-action primary" onclick="openEncyclopediaFromSearch('${e.id}')">
                    🏛️ Buka Panduan Budaya Lengkap →
                  </button>
                  ${e.thai ? `
                    <button type="button" class="google-btn-action" onclick="speakThai('${escapeQuotes(e.thai)}')">
                      🔊 Sebutan Bahasa Thai
                    </button>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }

      // 6. CONSONANTS & PHONETICS
      if (consonantMatches.length > 0) {
        html += `
          <div style="font-size:11.5px; font-weight:800; color:#2d6a4f; margin-top:6px; display:flex; align-items:center; gap:6px;">
            <span>🔤</span> AKSARA &amp; KONSONAN THAI (${consonantMatches.length})
          </div>
          <div style="display:flex; flex-direction:column; gap:8px;">
            ${consonantMatches.map(c => `
              <div class="google-snippet-card">
                <div class="google-breadcrumb">
                  <span>learnthai.app</span>
                  <span>›</span>
                  <span>aksara</span>
                  <span>›</span>
                  <span>konsonan-${c.class}</span>
                </div>
                <div class="google-snippet-title" onclick="speakThai('${escapeQuotes(c.spoken)}')">
                  <span style="font-family:var(--font-thai); font-size:22px; font-weight:800;">${c.thai}</span>
                  <span style="font-size:14px; font-weight:700; color:#2d6a4f; margin-left:6px;">${c.spoken} (${c.roman})</span>
                </div>
                <div class="google-snippet-desc">
                  Kelas konsonan: <strong>${c.class === 'mid' ? 'Tengah (อักษรกลาง)' : c.class === 'high' ? 'Tinggi (อักษรสูง)' : 'Rendah (อักษรต่ำ)'}</strong> • Arti lambang benda: <strong>${c.meaning}</strong>
                </div>
                <div class="google-action-buttons">
                  <button type="button" class="google-btn-action primary" onclick="speakThai('${escapeQuotes(c.spoken)}')">
                    🔊 Dengar Pelafalan
                  </button>
                  <button type="button" class="google-btn-action" onclick="openWritingCharFromSearch('${escapeQuotes(c.thai)}')">
                    ✍️ Latihan Tulis Huruf Ini →
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }

      // 7. ZERO RESULTS OR UNIVERSAL AI FALLBACK CARD
      if (totalMatches === 0) {
        html += `
          <div class="google-onebox-card" style="border-left-color:#1a73e8;">
            <div class="google-onebox-badge" style="color:#1a73e8;">
              <span>🤖</span> JAWABAN UNIVERSAL NONG MALI AI (GEMINI GOOGLE SEARCH)
            </div>
            <div class="google-snippet-title" style="color:#202124; font-size:15px;">
              Informasi Cerdas Mengenai: "<strong>${escapeHtml(rawQuery)}</strong>"
            </div>
            <div class="google-snippet-desc" style="font-size:12.5px; line-height:1.5; color:#3c4043;">
              Nong Mali AI siap membantu menjawab pertanyaan Anda seputar arti kalimat, lirik lagu, rekomendasi tontonan, tata bahasa, dan panduan wisata Thailand secara instan!
            </div>
            <div class="google-action-buttons">
              <button type="button" class="google-btn-action primary" onclick="askFloatingAiAbout('${escapeQuotes(rawQuery)}')">
                ✨ Minta Jawaban Lengkap Nong Mali AI →
              </button>
              <button type="button" class="google-btn-action" onclick="quickApplySearch('Materi [01]')">
                📚 Jelajahi 119 Bab Kurikulum
              </button>
            </div>
          </div>
        `;
      }

      // 8. GOOGLE-STYLE "PENELUSURAN TERKAIT" (PEOPLE ALSO ASK)
      const relatedTerms = generateRelatedSearchTerms(rawQuery);
      if (relatedTerms.length > 0) {
        html += `
          <div class="google-related-wrap">
            <div class="google-related-title">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#5f6368"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              Penelusuran Terkait:
            </div>
            <div class="google-related-chips">
              ${relatedTerms.map(t => `
                <button type="button" class="google-related-chip" onclick="quickApplySearch('${escapeQuotes(t)}')">
                  🔍 ${escapeHtml(t)}
                </button>
              `).join('')}
            </div>
          </div>
        `;
      }

      container.innerHTML = html;
    }

    function renderGoogleSnippetMediaHtml(m, q = '') {
      const isSong = m.category === 'song';
      return `
        <div class="google-snippet-card">
          <div class="google-breadcrumb">
            <span>learnthai.app</span>
            <span>›</span>
            <span>${isSong ? 'musik' : 'video-edukasi'}</span>
            <span>›</span>
            <span>${m.level ? m.level.toLowerCase().replace(/\s+/g, '-') : 'populer'}</span>
          </div>
          <div class="google-snippet-title" onclick="speakThai('${escapeQuotes(m.audioText || m.titleThai)}')">
            <span style="font-family:var(--font-thai); font-size:16px;">${m.titleThai}</span>
            <span style="font-size:13px; font-weight:700; color:#2d6a4f;">(${m.titleRoman})</span>
            — ${highlightGoogleMatch(m.artist, q)}
          </div>
          <div class="google-snippet-desc">
            <strong>Arti:</strong> ${highlightGoogleMatch(m.titleMeaning, q)}. ${highlightGoogleMatch(m.description, q)}
          </div>
          <div class="google-action-buttons">
            ${m.youtubeUrl ? `<a href="${m.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="google-btn-action primary">▶️ Tonton YouTube</a>` : ''}
            ${m.spotifyUrl ? `<a href="${m.spotifyUrl}" target="_blank" rel="noopener noreferrer" class="google-btn-action">🎧 Buka Spotify</a>` : ''}
            <button type="button" class="google-btn-action" onclick="speakThai('${escapeQuotes(m.audioText || m.titleThai)}')">
              🔊 Dengar Pelafalan Bangkok
            </button>
          </div>
        </div>
      `;
    }

    function renderFloatMediaCardHtml(m) {
      return renderGoogleSnippetMediaHtml(m, '');
    }

    function highlightGoogleMatch(text, query) {
      if (!text) return '';
      if (!query || query.length < 2) return escapeHtml(text);
      try {
        const regex = new RegExp(`(${query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
        return escapeHtml(text).replace(regex, '<span class="google-highlight">$1</span>');
      } catch (e) {
        return escapeHtml(text);
      }
    }

    function generateRelatedSearchTerms(query) {
      const q = (query || '').toLowerCase();
      if (!q) return [];
      if (q.includes('lagu') || q.includes('musik') || q.includes('song')) {
        return ['Three Man Down playlist', 'Tilly Birds hits', 'Lagu galau Thailand', 'Scrubb OST 2gether', 'Lirik lagu Thai latin'];
      }
      if (q.includes('bab') || q.includes('materi') || q.includes('kurikulum')) {
        return ['Bab 01 Konsonan Dasar', 'Bab 05 Vokal Panjang', 'Bab 12 Aturan 5 Nada', 'Latihan menulis aksara', 'Worksheet PDF'];
      }
      if (q.includes('kuil') || q.includes('wisata') || q.includes('bangkok')) {
        return ['Etika berpakaian di kuil', 'Wat Arun tiket & perahu', 'Transportasi BTS Bangkok', 'Kuliner halal di Phaya Thai', 'Tourist SIM Card 5G'];
      }
      if (q.includes('makan') || q.includes('pedas') || q.includes('kuliner')) {
        return ['Cara pesan tidak pedas (Mai Phet)', 'Pad Thai terenak Bangkok', 'Tom Yum Goong halal', 'Street food Chatuchak'];
      }
      if (q.includes('nada') || q.includes('konsonan') || q.includes('aksara')) {
        return ['5 Nada bahasa Thailand', 'Konsonan kelas tengah', 'Huruf O Aang (อ)', 'Latihan pelafalan suara'];
      }
      return [`${query} bahasa Thai`, `Lagu Thailand tentang ${query}`, `Bab kurikulum terkait ${query}`, 'Frasa percakapan sehari-hari'];
    }

    function openJazmiLessonFromSearch(lessonId) {
      toggleFloatingAiWindow(false);
      switchNavTab('jazmi-series');
      setTimeout(() => {
        if (typeof openJazmiLesson === 'function') {
          openJazmiLesson(lessonId);
        }
      }, 100);
    }

    function openEncyclopediaFromSearch(topicId) {
      toggleFloatingAiWindow(false);
      switchNavTab('ai-hub');
      setTimeout(() => {
        const el = document.getElementById('ecard-' + topicId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.style.boxShadow = '0 0 0 3px #2d6a4f';
          setTimeout(() => { el.style.boxShadow = ''; }, 2000);
        }
      }, 120);
    }

    function openWritingCharFromSearch(thaiChar) {
      toggleFloatingAiWindow(false);
      switchNavTab('writing');
      setTimeout(() => {
        if (typeof selectWritingChar === 'function') {
          selectWritingChar(thaiChar);
        }
      }, 120);
    }

    function quickApplySearch(term) {
      const input = document.getElementById('floatingUnifiedSearchInput');
      if (input) {
        input.value = term;
        const clearBtn = document.getElementById('floatingSearchClearBtn');
        if (clearBtn) clearBtn.style.display = 'flex';
      }
      renderFloatingUnifiedResults(term, currentFloatSearchCategory);
    }

    function askFloatingAiAbout(text) {
      if (!text) return;
      setFloatingAiTab('chat');
      sendFloatingPrompt(text);
    }

    function escapeHtml(str) {
      if (!str) return '';
      return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function escapeQuotes(str) {
      if (!str) return '';
      return String(str).replace(/'/g, "\\'").replace(/"/g, '&quot;');
    }

    /* ==========================================================================
       FITUR: CHAT & PENERJEMAH DI DALAM FLOATING WIDGET
       ========================================================================== */
    function renderFloatingChatMessages() {
      const container = document.getElementById('floatingChatMessages');
      if (!container) return;

      if (!qaChatHistory || !qaChatHistory.length) {
        container.innerHTML = `
          <div class="qa-msg-bubble bot">
            <div style="font-size:11px; font-weight:700; color:var(--text-muted); margin-bottom:4px; font-family:var(--font-mono);">🪷 Nong Mali AI</div>
            <div>Halo! Saya Nong Mali, asisten pintar AI bahasa & musik Thailand Anda. 🎵<br><br>Tanyakan apa saja seputar lagu Thai, budaya, kosakata, atau minta rekomendasi playlist!</div>
          </div>
        `;
        return;
      }

      container.innerHTML = qaChatHistory.map(msg => `
        <div class="qa-msg-bubble ${msg.sender}">
          <div style="font-size:11px; font-weight:700; color:var(--text-muted); margin-bottom:4px; font-family:var(--font-mono);">
            ${msg.sender === 'user' ? '👤 Anda' : '🪷 Nong Mali AI'}
          </div>
          <div>${msg.text}</div>
          ${msg.thaiAudioText ? `
            <div style="margin-top:8px;">
              <button type="button" class="song-listen-tts-btn" onclick="speakThai('${msg.thaiAudioText.replace(/'/g, "\\'")}')">🔊 Dengar Pelafalan Bangkok</button>
            </div>
          ` : ''}
          ${msg.songCards ? `
            <div style="margin-top:10px; display:flex; flex-direction:column; gap:8px;">
              ${msg.songCards.map(s => renderFloatMediaCardHtml(s)).join('')}
            </div>
          ` : ''}
        </div>
      `).join('');

      container.scrollTop = container.scrollHeight;
    }

    function sendFloatingPrompt(text) {
      const input = document.getElementById('floatingChatInput');
      if (input) input.value = text;
      sendFloatingChatMessage();
    }

    function quickAskFloatingAi(question) {
      setLotusTab('ai');
      const input = document.getElementById('floatingChatInput');
      if (input) input.value = question;
      setTimeout(() => {
        sendFloatingChatMessage();
      }, 100);
    }

    function sendFloatingChatMessage() {
      const input = document.getElementById('floatingChatInput');
      const text = (input ? input.value : '').trim();
      if (!text) return;
      if (input) input.value = '';
      sendQaMessage(text);
      setTimeout(renderFloatingChatMessages, 80);
      setTimeout(renderFloatingChatMessages, 350);
    }

    function triggerFloatingMic() {
      if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        showToast('Fitur input suara belum didukung di browser ini.');
        return;
      }
      try {
        const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recog = new SpeechRec();
        recog.lang = 'id-ID';
        recog.interimResults = false;
        recog.maxAlternatives = 1;
        const input = document.getElementById('floatingChatInput');
        if (input) input.placeholder = 'Mendengarkan...';
        showToast('Mendengarkan suara...');
        recog.onresult = (e) => {
          const transcript = e.results[0][0].transcript;
          if (input) {
            input.value = transcript;
            input.placeholder = 'Tanya AI atau cari lagu Thai...';
          }
          sendFloatingChatMessage();
        };
        recog.onerror = () => {
          if (input) input.placeholder = 'Tanya AI atau cari lagu Thai...';
          showToast('Suara tidak terdengar.');
        };
        recog.start();
      } catch (err) {
        showToast('Mikrofon tidak dapat diakses.');
      }
    }

    function clearFloatTranslator() {
      const input = document.getElementById('floatTransInput');
      if (input) input.value = '';
      const res = document.getElementById('floatTransResultBox');
      if (res) res.style.display = 'none';
    }

    function triggerFloatTransMic() {
      if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        showToast('Fitur input suara belum didukung di browser ini.');
        return;
      }
      try {
        const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recog = new SpeechRec();
        recog.lang = 'id-ID';
        recog.interimResults = false;
        recog.maxAlternatives = 1;
        showToast('Mendengarkan bahasa Indonesia...');
        recog.onresult = (e) => {
          const transcript = e.results[0][0].transcript;
          const input = document.getElementById('floatTransInput');
          if (input) input.value = transcript;
          performFloatTranslation();
        };
        recog.onerror = () => {
          showToast('Suara tidak terdengar.');
        };
        recog.start();
      } catch (err) {
        showToast('Mikrofon tidak dapat diakses.');
      }
    }

    /* ===== Lotus Translator State ===== */
    let floatTransDir = 'id-to-th';
    let floatTransLatestThai = '';
    let floatTransLatestMale = '';
    let floatTransLatestFemale = '';

    function floatTransSetDir(dir) {
      floatTransDir = dir;
      const srcPill = document.getElementById('floatTransLangSrc');
      const tgtPill = document.getElementById('floatTransLangTgt');
      const ta = document.getElementById('floatTransInput');
      if (dir === 'id-to-th') {
        if (srcPill) { srcPill.textContent = '🇮🇩 Indonesia'; srcPill.classList.add('active'); }
        if (tgtPill) { tgtPill.textContent = '🇹🇭 Thailand'; tgtPill.classList.remove('active'); }
        if (ta) ta.placeholder = 'Ketik teks bahasa Indonesia di sini...';
        const rl = document.getElementById('float-trans-result-lang');
        if (rl) rl.textContent = '🇹🇭 Bahasa Thailand';
      } else {
        if (srcPill) { srcPill.textContent = '🇹🇭 Thailand'; srcPill.classList.remove('active'); }
        if (tgtPill) { tgtPill.textContent = '🇮🇩 Indonesia'; tgtPill.classList.add('active'); }
        if (ta) ta.placeholder = 'พิมพ์ข้อความภาษาไทยที่นี่...';
        const rl = document.querySelector('.float-trans-result-lang');
        if (rl) rl.textContent = '🇮🇩 Bahasa Indonesia';
      }
      // hide result on dir change
      const box = document.getElementById('floatTransResultBox');
      if (box) box.style.display = 'none';
      const gn = document.getElementById('floatTransGenderNote');
      if (gn) gn.style.display = 'none';
    }

    function floatTransSwapDir() {
      const ta = document.getElementById('floatTransInput');
      const currentText = ta ? ta.value.trim() : '';
      // Swap direction
      floatTransDir = floatTransDir === 'id-to-th' ? 'th-to-id' : 'id-to-th';
      floatTransSetDir(floatTransDir);
      // Put translated text back as input (if available)
      if (floatTransLatestThai && currentText) {
        if (ta) ta.value = floatTransLatestThai;
        floatTransLatestThai = currentText;
        performFloatTranslation();
      }
    }

    function floatTransAutoDetect(val) {
      const countEl = document.getElementById('floatTransCharCount');
      if (countEl) countEl.textContent = `${val.length} / 500`;
      if (val.length > 500) {
        const ta = document.getElementById('floatTransInput');
        if (ta) ta.value = val.slice(0, 500);
      }
    }

    function floatTransClearAll() {
      const ta = document.getElementById('floatTransInput');
      if (ta) { ta.value = ''; ta.focus(); }
      const box = document.getElementById('floatTransResultBox');
      if (box) box.style.display = 'none';
      const gn = document.getElementById('floatTransGenderNote');
      if (gn) gn.style.display = 'none';
      const cc = document.getElementById('floatTransCharCount');
      if (cc) cc.textContent = '0 / 500';
    }

    function floatTransSpeak() {
      const text = floatTransLatestThai;
      if (!text) return;
      try {
        const utt = new SpeechSynthesisUtterance(text);
        utt.lang = floatTransDir === 'id-to-th' ? 'th-TH' : 'id-ID';
        utt.rate = 0.85;
        speechSynthesis.cancel();
        speechSynthesis.speak(utt);
        playSynthSound && playSynthSound('success');
      } catch(e) { showToast && showToast('TTS tidak tersedia.'); }
    }

    function floatTransCopy() {
      const text = document.getElementById('floatTransThaiText');
      if (!text) return;
      navigator.clipboard.writeText(text.textContent).then(() => {
        showToast && showToast('Terjemahan disalin! 📋');
      });
    }

    async function performFloatTranslation() {
      const input = document.getElementById('floatTransInput');
      const text = (input ? input.value : '').trim();
      if (!text) return;

      const submitBtn = document.getElementById('floatTransSubmitBtn');
      const box = document.getElementById('floatTransResultBox');
      const outThai = document.getElementById('floatTransThaiText');
      const outRoman = document.getElementById('floatTransRomanText');
      const genderNote = document.getElementById('floatTransGenderNote');

      if (submitBtn) { submitBtn.textContent = '⏳ Menerjemahkan...'; submitBtn.disabled = true; }
      if (box) box.style.display = 'none';
      if (genderNote) genderNote.style.display = 'none';

      const sl = floatTransDir === 'id-to-th' ? 'auto' : 'th';
      const tl = floatTransDir === 'id-to-th' ? 'th' : 'id';

      try {
        // Use same Google Translate API as performLiveTranslation
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&dt=rm&q=${encodeURIComponent(text)}`;
        const resp = await fetch(url);
        if (!resp.ok) throw new Error('API Error ' + resp.status);

        const data = await resp.json();
        let translatedText = '';
        let romanization = '';

        if (data && data[0] && Array.isArray(data[0])) {
          translatedText = data[0].map(seg => seg[0] || '').join('');
          // Romanization is in data[0][i][3] for Thai output
          const roman = data[0].map(seg => seg[3] || '').filter(Boolean).join(' ');
          romanization = roman;
        }

        if (!translatedText) throw new Error('Empty response');

        floatTransLatestThai = translatedText;

        // Show result box
        if (outThai) outThai.textContent = translatedText;
        if (outRoman && romanization) {
          outRoman.textContent = romanization;
          outRoman.style.display = 'block';
        } else if (outRoman) {
          outRoman.style.display = 'none';
        }
        if (box) box.style.display = 'block';

        // If translating to Thai, show gender variants
        if (floatTransDir === 'id-to-th') {
          const isQ = /[?？ไหม|มั้ย|หรือ|อะไร|ที่ไหน|เมื่อไหร่|เท่าไหร่|กี่|ใคร|ทำไม]/.test(translatedText) || text.includes('?');
          const female = typeof formatThaiForGender === 'function' ? formatThaiForGender(translatedText, 'female') : translatedText + ' ค่ะ';
          const male   = typeof formatThaiForGender === 'function' ? formatThaiForGender(translatedText, 'male')   : translatedText + ' ครับ';
          floatTransLatestFemale = female;
          floatTransLatestMale   = male;

          const femEl = document.getElementById('floatTransFemaleText');
          const malEl = document.getElementById('floatTransMaleText');
          if (femEl) femEl.textContent = female;
          if (malEl) malEl.textContent = male;
          if (genderNote) genderNote.style.display = 'flex';

          // Auto speak with preferred gender
          const pref = (typeof appState !== 'undefined' && appState.speakerGender) || 'female';
          setTimeout(() => floatTransSpeak(), 300);
        }

        playSynthSound && playSynthSound('success');
        addXP && addXP(1);

      } catch (err) {
        console.error('Float translate error:', err);
        if (outThai) {
          outThai.textContent = '❌ Gagal terhubung ke layanan terjemahan. Coba lagi.';
          outThai.style.fontSize = '14px';
        }
        if (box) box.style.display = 'block';
        showToast && showToast('Terjemahan gagal, periksa koneksi internet.');
      } finally {
        if (submitBtn) { submitBtn.textContent = 'Terjemahkan ✨'; submitBtn.disabled = false; }
      }
    }

    function searchSongFromTranslation() {
      const resultText = document.getElementById('floatTransThaiText');
      const text = resultText ? resultText.textContent.trim() : '';
      if (!text) return;
      setFloatingAiTab('search');
      quickApplySearch(text);
    }

    /* ==========================================================================
       FITUR: MOBILE SMARTPHONE NAVIGATION LOGIC
       ========================================================================== */
    function toggleMobileDrawer(open) {
      const drawer = document.querySelector('.stimuler-nav-rail');
      const backdrop = document.getElementById('mobileDrawerBackdrop');
      if (!drawer) return;
      const shouldOpen = typeof open === 'boolean' ? open : !drawer.classList.contains('mobile-open');
      drawer.classList.toggle('mobile-open', shouldOpen);
      document.body.classList.toggle('drawer-open', shouldOpen);
      if (backdrop) backdrop.style.display = shouldOpen ? 'block' : 'none';
      if (shouldOpen) {
        document.body.style.overflow = 'hidden';
        playSynthSound('click');
      } else {
        document.body.style.overflow = '';
      }
    }

    function switchNavTabMobile(tabId, btn) {
      switchNavTab(tabId);
      toggleMobileDrawer(false);
      document.querySelectorAll('.mobile-nav-btn').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
    }


    /* INITIALIZE APP (LIGHTWEIGHT ON-DEMAND STARTUP) */
    applyColorTheme('light');
    applyThaiFontStyle(appState.thaiFontStyle || 'looped');
    applyThaiScriptMode(appState.thaiScriptMode || 'full');
    const audioBtn = document.getElementById('audioToggleBtn');
    if (audioBtn) audioBtn.textContent = appState.soundEnabled ? '🔊' : '🔇';
    updateTopMetrics();
    checkSpeechCapabilities();
    initFloatingAiWidget();
    initLearningPortal();
  
    /* ==========================================================================
       FITUR: LOTUS QUICK MENU (16 MENU LENGKAP & FILTER PINTAR AI)
       ========================================================================== */
    const ALL_LOTUS_MENUS = [
      // Kategori 1: Materi & Kurikulum
      { key: 'alphabet', title: 'Aksara & Alfabet', desc: '44 Konsonan, Vokal, & Nada', icon: '🔤', badge: '44 Aksara', cat: '📚 Materi & Kurikulum' },
      { key: 'phonetics', title: '5 Nada & Frasa', desc: 'Intonasi Audio & Frasa Harian', icon: '🎵', badge: '5 Nada', cat: '📚 Materi & Kurikulum' },
      { key: 'vocabulary', title: 'Kosakata & Misi', desc: 'Misi 10 Kata Harian & Kuis', icon: '📖', badge: '10 Harian', cat: '📚 Materi & Kurikulum' },
      { key: 'jazmi-series', title: 'Materi Tulis 01-90', desc: '119 Modul Lengkap Tertulis', icon: '📚', badge: '119 Modul', cat: '📚 Materi & Kurikulum' },
      { key: 'curriculum', title: 'Kurikulum Unit', desc: 'Silabus Belajar Bertingkat A1-A2', icon: '🗺️', badge: 'Unit Map', cat: '📚 Materi & Kurikulum' },

      // Kategori 2: Latihan & Praktik
      { key: 'writing', title: 'Latihan Tulis', desc: 'Kanvas Gambar & Tulisan Digital', icon: '✍️', badge: 'Kanvas', cat: '🎯 Latihan & Praktik' },
      { key: 'flashcards', title: 'Flashcard Pintar', desc: 'Hafalan Cepat Spaced Repetition', icon: '🎴', badge: 'SRS', cat: '🎯 Latihan & Praktik' },
      { key: 'speed-drill', title: 'Tantangan Cepat', desc: 'Game Kuis Adu Refleks & Nada', icon: '⚡', badge: 'Game', cat: '🎯 Latihan & Praktik' },
      { key: 'typing', title: 'Latihan Mengetik', desc: 'Keyboard Kedmanee & Tutor', icon: '⌨️', badge: 'Tutor', cat: '🎯 Latihan & Praktik' },

      // Kategori 3: Percakapan & Kosakata
      { key: 'dictionary', title: 'Kamus Praktis', desc: '1.000+ Kosakata & Suara Bangkok', icon: '📕', badge: '1000+', cat: '🎙️ Percakapan & Audio' },
      { key: 'roleplay', title: 'Simulasi Roleplay', desc: 'Percakapan Kafe, Pasar, & Taksi', icon: '🎭', badge: 'Dialog', cat: '🎙️ Percakapan & Audio' },
      { key: 'studio', title: 'Studio Bicara', desc: 'Latihan Pelafalan Suara & Mic', icon: '🎙️', badge: 'Mic', cat: '🎙️ Percakapan & Audio' },
      { key: 'analytics', title: 'Analitik Kelancaran', desc: 'Statistik Kemajuan & XP Belajar', icon: '📊', badge: 'Progres', cat: '🎙️ Percakapan & Audio' },

      // Kategori 4: Asisten, Prestasi & Akun
      { key: 'ai-hub', title: 'AI Thailand Hub', desc: 'Ensiklopedia, Budaya & Lagu Thai', icon: '🤖', badge: 'AI & Media', cat: '🌟 Asisten, Prestasi & Akun' },
      { key: 'achievements', title: 'Medali & Trofi', desc: '12 Lencana Prestasi Belajar', icon: '🏆', badge: '12 Trofi', cat: '🌟 Asisten, Prestasi & Akun' },
      { key: 'portal', title: 'Portal Belajar / Akun', desc: 'Ganti Akun & Pengaturan Profil', icon: '🧭', badge: 'Akun', cat: '🌟 Asisten, Prestasi & Akun' }
    ];

    let currentLotusTab = 'menus';
    let lotusSearchDebounceTimer = null;

    function setLotusTab(tab) {
      currentLotusTab = tab;
      const btnMenus = document.getElementById('tabBtnLotusMenus');
      const btnAi   = document.getElementById('tabBtnLotusAi');
      const btnTrans = document.getElementById('tabBtnLotusTrans');
      const viewMenus = document.getElementById('lotusTabMenusView');
      const viewAi    = document.getElementById('lotusTabAiView');
      const viewTrans = document.getElementById('lotusTabTransView');

      // Reset all
      [btnMenus, btnAi, btnTrans].forEach(b => b && b.classList.remove('active'));
      [viewMenus, viewAi, viewTrans].forEach(v => v && (v.style.display = 'none'));

      if (tab === 'menus') {
        if (btnMenus) btnMenus.classList.add('active');
        if (viewMenus) viewMenus.style.display = 'flex';
        const input = document.getElementById('floatingUnifiedSearchInput');
        renderLotusMenuContent(input ? input.value : '');
      } else if (tab === 'translate') {
        if (btnTrans) btnTrans.classList.add('active');
        if (viewTrans) viewTrans.style.display = 'flex';
        // focus textarea
        setTimeout(() => {
          const ta = document.getElementById('floatTransInput');
          if (ta) ta.focus();
        }, 120);
      } else {
        if (btnAi) btnAi.classList.add('active');
        if (viewAi) viewAi.style.display = 'flex';
        renderFloatingChatMessages();
      }
      try { playSynthSound('click'); } catch(e) {}
    }

    function navigateFromLotus(menuKey, menuTitle) {
      try { playSynthSound('click'); } catch(e) {}
      toggleFloatingAiWindow(false);
      showToast(`Membuka ${menuTitle || menuKey}... 🚀`);

      if (menuKey === 'portal') {
        openLearningPortal();
      } else {
        switchNavTab(menuKey);
      }
    }

    function handleLotusSearchInput(val) {
      const clearBtn = document.getElementById('lotusSearchClearBtn');
      if (clearBtn) clearBtn.style.display = val ? 'block' : 'none';

      clearTimeout(lotusSearchDebounceTimer);
      lotusSearchDebounceTimer = setTimeout(() => {
        if (currentLotusTab !== 'menus') {
          setLotusTab('menus');
        }
        renderLotusMenuContent(val);
      }, 150);
    }

    function clearLotusSearch() {
      const input = document.getElementById('floatingUnifiedSearchInput');
      if (input) {
        input.value = '';
        input.focus();
      }
      const clearBtn = document.getElementById('lotusSearchClearBtn');
      if (clearBtn) clearBtn.style.display = 'none';
      renderLotusMenuContent('');
    }

    function renderLotusMenuContent(query = '') {
      const container = document.getElementById('lotusDynamicContent');
      if (!container) return;

      const q = (query || '').trim().toLowerCase();

      // CASE 1: Query kosong -> Tampilkan seluruh 16 menu yang tersusun rapi per kategori!
      if (!q) {
        const categories = [
          '📚 Materi & Kurikulum',
          '🎯 Latihan & Praktik',
          '🎙️ Percakapan & Audio',
          '🌟 Asisten, Prestasi & Akun'
        ];

        let html = '';
        categories.forEach(cat => {
          const items = ALL_LOTUS_MENUS.filter(m => m.cat === cat);
          if (items.length > 0) {
            html += `<div class="lotus-section-heading">${cat}</div>`;
            html += `<div class="lotus-menu-grid">`;
            items.forEach(m => {
              html += `
                <div class="lotus-menu-card" onclick="navigateFromLotus('${m.key}', '${m.title}')" title="Buka ${m.title}">
                  <div class="lotus-menu-icon">${m.icon}</div>
                  <div class="lotus-menu-info">
                    <div class="lotus-menu-title">
                      <span>${m.title}</span>
                      <span class="lotus-menu-badge">${m.badge}</span>
                    </div>
                    <div class="lotus-menu-desc">${m.desc}</div>
                  </div>
                </div>
              `;
            });
            html += `</div>`;
          }
        });
        container.innerHTML = html;
        return;
      }

      // CASE 2: Ada Query -> Filter menu yang cocok + Hasil pencarian AI (Kamus, Lagu, 119 Modul)
      const matchedMenus = ALL_LOTUS_MENUS.filter(m =>
        m.title.toLowerCase().includes(q) ||
        m.desc.toLowerCase().includes(q) ||
        m.key.toLowerCase().includes(q)
      );

      let html = '';

      // Tampilkan Menu yang Cocok di Paling Atas
      if (matchedMenus.length > 0) {
        html += `<div class="lotus-section-heading">🎯 Menu yang Cocok (${matchedMenus.length})</div>`;
        html += `<div class="lotus-menu-grid">`;
        matchedMenus.forEach(m => {
          html += `
            <div class="lotus-menu-card" style="border-color:var(--primary); background:var(--primary-light);" onclick="navigateFromLotus('${m.key}', '${m.title}')" title="Buka ${m.title}">
              <div class="lotus-menu-icon">${m.icon}</div>
              <div class="lotus-menu-info">
                <div class="lotus-menu-title">
                  <span>${m.title}</span>
                  <span class="lotus-menu-badge" style="background:var(--primary); color:#ffffff;">Buka ➔</span>
                </div>
                <div class="lotus-menu-desc">${m.desc}</div>
              </div>
            </div>
          `;
        });
        html += `</div>`;
      }

      // Cari di Kamus Kata Thai
      let matchedVocabs = [];
      if (typeof THAI_DICTIONARY !== 'undefined' && Array.isArray(THAI_DICTIONARY)) {
        matchedVocabs = THAI_DICTIONARY.filter(v =>
          (v.thai && v.thai.toLowerCase().includes(q)) ||
          (v.id && v.id.toLowerCase().includes(q)) ||
          (v.phonetic && v.phonetic.toLowerCase().includes(q))
        ).slice(0, 4);
      }

      if (matchedVocabs.length > 0) {
        html += `<div class="lotus-section-heading">📖 Kosakata Terkait (${matchedVocabs.length})</div>`;
        html += `<div style="display:flex; flex-direction:column; gap:6px; margin-bottom:10px;">`;
        matchedVocabs.forEach(v => {
          html += `
            <div style="background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-md); padding:8px 12px; display:flex; justify-content:space-between; align-items:center;">
              <div>
                <strong style="font-size:15px; font-family:var(--font-thai-looped); color:var(--text);">${v.thai}</strong>
                <span style="font-size:11.5px; color:var(--text-muted); margin-left:6px;">(${v.phonetic || ''})</span>
                <div style="font-size:12px; color:var(--primary); font-weight:700;">${v.id}</div>
              </div>
              <button type="button" class="google-action-chip-btn" onclick="speakThai('${v.thai}')" title="Dengarkan Suara Audio">🔊</button>
            </div>
          `;
        });
        html += `</div>`;
      }

      // Cari di Materi Tulis 119 Modul
      let matchedLessons = [];
      if (typeof getAllJazmiLessonsFlat === 'function') {
        const allL = getAllJazmiLessonsFlat();
        matchedLessons = allL.filter(l =>
          (l.title && l.title.toLowerCase().includes(q)) ||
          (l.desc && l.desc.toLowerCase().includes(q)) ||
          (l.thai && l.thai.toLowerCase().includes(q))
        ).slice(0, 3);
      }

      if (matchedLessons.length > 0) {
        html += `<div class="lotus-section-heading">📚 Modul Materi Tertulis (${matchedLessons.length})</div>`;
        html += `<div style="display:flex; flex-direction:column; gap:6px; margin-bottom:10px;">`;
        matchedLessons.forEach(l => {
          html += `
            <div class="google-result-card" style="margin-bottom:0;" onclick="navigateFromLotus('jazmi-series', '${l.title}'); openJazmiReaderModal('${l.id}')">
              <div style="font-size:11px; font-weight:800; color:var(--primary);">MODUL ${l.id.toUpperCase()}</div>
              <div style="font-size:13.5px; font-weight:800; color:var(--text);">${l.title}</div>
              <div style="font-size:11.5px; color:var(--text-muted);">${l.desc}</div>
            </div>
          `;
        });
        html += `</div>`;
      }

      // Cari di Koleksi Lagu / Media Thai
      let matchedMedia = [];
      if (typeof THAI_MEDIA_DATABASE !== 'undefined' && Array.isArray(THAI_MEDIA_DATABASE)) {
        matchedMedia = THAI_MEDIA_DATABASE.filter(m =>
          (m.title && m.title.toLowerCase().includes(q)) ||
          (m.artist && m.artist.toLowerCase().includes(q)) ||
          (m.thaiTitle && m.thaiTitle.toLowerCase().includes(q))
        ).slice(0, 2);
      }

      if (matchedMedia.length > 0) {
        html += `<div class="lotus-section-heading">🎵 Musik & Lagu Terkait (${matchedMedia.length})</div>`;
        html += `<div style="display:flex; flex-direction:column; gap:6px; margin-bottom:10px;">`;
        matchedMedia.forEach(m => {
          html += `
            <div class="google-result-card" style="margin-bottom:0;" onclick="navigateFromLotus('ai-hub', '${m.title}'); playAiMediaTrack('${m.id}')">
              <div style="font-size:11px; font-weight:800; color:#1a73e8;">${m.category.toUpperCase()} • ${m.artist}</div>
              <div style="font-size:13.5px; font-weight:800; color:var(--text);">${m.title}</div>
              <div style="font-size:11.5px; color:var(--text-muted);">${m.desc}</div>
            </div>
          `;
        });
        html += `</div>`;
      }

      // Jika tidak ada hasil sama sekali
      if (matchedMenus.length === 0 && matchedVocabs.length === 0 && matchedLessons.length === 0 && matchedMedia.length === 0) {
        html += `
          <div style="text-align:center; padding:28px 14px; background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg);">
            <div style="font-size:32px; margin-bottom:8px;">🔍</div>
            <strong style="font-size:14px; color:var(--text);">Tidak ada hasil untuk "${query}"</strong>
            <p style="font-size:11.5px; color:var(--text-muted); margin:4px 0 14px 0;">Coba cari dengan kata kunci lain atau tanyakan langsung pada AI Nong Mali.</p>
            <button type="button" class="portal-main-cta-btn" style="display:inline-flex; padding:8px 16px; font-size:12px; margin:auto;" onclick="quickAskFloatingAi('${query}')">
              <span>💬 Tanyakan "${query}" ke AI Nong Mali</span>
            </button>
          </div>
        `;
      }

      container.innerHTML = html;
    }


// ==========================================================================
// MALI'S THAI 5-PILLAR ARCHITECTURE CONTROLLER
// ==========================================================================



function switchMainTab(pillarKey, targetSubPanel = null) {
  if (!MALI_PILLAR_MAP[pillarKey]) pillarKey = 'theory';
  currentMainPillar = pillarKey;
  
  // Highlight top pill buttons
  document.querySelectorAll('.mali-top-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-main-tab') === pillarKey);
  });
  
  // Highlight mobile bottom nav (5 slot)
  document.querySelectorAll('.mobile-bottom-nav .mobile-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-main-tab') === pillarKey);
  });
  
  // Pick active sub-panel
  const defaultSub = MALI_PILLAR_MAP[pillarKey][0];
  const targetId = targetSubPanel || defaultSub;
  const targetKey = targetId.replace('panel-', '');
  
  // Execute switchNavTab
  switchNavTab(targetKey);
  
  // Update subnav active buttons
  updateSubNavState(targetId);
  updateHeroDashboardStats();
}

function handleLotusNavClick() {
  playSynthSound('click');
  document.querySelectorAll('.mobile-bottom-nav .mobile-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-main-tab') === 'lotus');
  });
  if (typeof openFloatingAiWidget === 'function') {
    openFloatingAiWidget();
  } else {
    switchMainTab('lotus', 'panel-analytics');
  }
}

function switchSubNav(panelId) {
  const tabKey = panelId.replace('panel-', '');
  switchNavTab(tabKey);
  updateSubNavState(panelId);
}

function updateSubNavState(activePanelId) {
  document.querySelectorAll('.mali-subnav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-sub-target') === activePanelId);
  });
}

function updateHeroDashboardStats() {
  const streakEl = document.getElementById('heroDailyStreak');
  const xpEl = document.getElementById('heroTotalXP');
  const greetingEl = document.getElementById('maliHeroGreeting');
  const activeModEl = document.getElementById('heroActiveModule');
  
  const student = (typeof appState !== 'undefined' && appState.studentName) ? appState.studentName : (localStorage.getItem('mali_student_name') || 'Pembelajar');
  if (greetingEl) greetingEl.textContent = `Sawatdee khrub, ${student}! Selamat Datang Kembali`;
  
  const streak = (typeof appState !== 'undefined' && appState.streakDays) ? appState.streakDays : (localStorage.getItem('mali_streak_days') || '1');
  if (streakEl) streakEl.textContent = `${streak} Hari`;
  
  const xp = (typeof appState !== 'undefined' && appState.totalXp) ? appState.totalXp : (localStorage.getItem('mali_total_xp') || '65');
  if (xpEl) xpEl.textContent = `${xp} XP`;
  
  const lastTab = localStorage.getItem('mali_last_tab') || 'curriculum';
  const labelMap = {
    'curriculum': 'Unit Kurikulum',
    'alphabet': 'Aksara & Konsonan',
    'writing': 'Tracing Canvas',
    'typing': 'Kedmanee Typing',
    'ai-hub': 'Nong Mali AI',
    'dictionary': 'Kamus Audio',
    'certificate': 'Ujian Sertifikasi'
  };
  if (activeModEl) activeModEl.textContent = labelMap[lastTab] || 'Unit 1';
}
