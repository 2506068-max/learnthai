# 🪷 Mali's Thai (สวนไทยของมะลิ)
### *Ghibli-Themed AI Speaking & Fluency Coach for the Thai Language*

[![HTML5](https://img.shields.io/badge/HTML5-Lightweight_171KB-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/Vanilla_CSS3-Modular-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Web Speech API](https://img.shields.io/badge/Web_Speech_API-th--TH-2d6a4f?style=flat)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline_Ready-3b82f6?style=flat)](service-worker.js)
[![Theme](https://img.shields.io/badge/Theme-Studio_Ghibli_Aesthetic-52b788?style=flat)](#-desain--tema-studio-ghibli)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)

**Mali's Thai** adalah aplikasi web interaktif komprehensif untuk mempelajari aksara, kosakata, intonasi nada, dan melatih kelancaran berbicara bahasa Thailand (*Thai speaking fluency*) secara mandiri. Menggabungkan arsitektur *voice-first*, evaluasi pengucapan instan, kanvas tulis aksara, tutor mengetik Kedmanee, dan simulasi roleplay dengan estetika visual **Studio Ghibli** (nuansa hutan cedar, kertas perkamen cat air hangat, dan palet warna earthy yang menenangkan).

---

## 🏛️ Arsitektur Navigasi Utama (5 Slot Interaktif)

Untuk memfasilitasi alur belajar yang seimbang dan berorientasi aksi langsung, aplikasi mengadopsi 5 slot navigasi utama:

1. **📚 Teori & Materi (`theory`)**
   - Roadmap Kurikulum Berjenjang (Unit 1-12)
   - Aksara 44 Konsonan & Aturan 5 Nada Intonasi
   - 119 Modul Tulis & Panduan Kaidah Fonetik
2. **⚡ Arena Praktik / Gym (`practice`)**
   - **Kanvas Tulis (Tracing Canvas)** dengan gesture guard & touch-action guard
   - **Kedmanee Typing Tutor** dengan pendeteksi perangkat HP & mode kuis pilihan ganda
   - **Flashcards SRS** (Spaced Repetition System)
   - **Speed Drill 60s** (Tantangan ketangkasan fonetik & aksara)
3. **🎙️ Speaking AI (`speaking`)**
   - Voice Challenge & Pitch Scoring Evaluator
   - Simulasi Percakapan Realistis Kafe & Situasi Sehari-hari
   - Nong Mali AI Hub dwi-gender (*khrap* / *kha*)
4. **📖 Kamus (`dictionary`)**
   - Kamus Cepat Audio Thai - Indonesia & Lembar Kosakata
5. **☰ Menu Lotus (`lotus`)**
   - Pencarian Pintar Universal (Aksara, Modul, Lagu, Kosakata)
   - Dashboard Analytics Pembelajar & XP Streak
   - Medali Penghargaan & Generator Sertifikat Kelulusan Resmi

---

## ⚡ Pembaruan Modular & Optimasi Performa

1. **Modularisasi Kode & Restrukturisasi Aset**
   - File HTML monolithic (~890 KB) telah dipangkas drastis menjadi **~171 KB** (penurunan beban DOM ~78%).
   - CSS diekstrak secara bersih ke `css/style.css`.
   - Logika JavaScript dipisahkan modular di folder `js/`:
     * `js/audio-synth.js` (Web Audio API & Synthesizer audio engine)
     * `js/canvas-handler.js` (Kanvas penulisan aksara & Digital Certificate PNG generator)
     * `js/speech-coach.js` (Speech recognition `th-TH` & pitch evaluation)
     * `js/navigation.js` (Lotus Floating Menu & tab routing)
     * `js/app.js` (State management, Kedmanee typing, flashcards, dan initializers)
   - Semua skrip dimuat dengan atribut `defer` untuk parsing DOM instan tanpa render-blocking.

2. **Data-Store & Asynchronous Lazy Loading**
   - Data statis besar dipisahkan ke `data/alphabet.json`, `data/curriculum.json`, dan `data/dictionary.json`.
   - Dimuat secara asinkron dengan skeleton loader animasi saat panel pertama kali diakses.

3. **PWA Full Offline Capability (`service-worker.js`)**
   - **Cache-First**: Digunakan untuk Google Fonts (*Kanit, Fraunces, JetBrains Mono, Sarabun*) dan pustaka audio penutur asli (*native audio*).
   - **Stale-While-Revalidate**: Digunakan untuk HTML, CSS, modul JS, dan file data JSON lokal.

4. **Digital Certificate Engine (`#thaiCertificateCanvas`)**
   - Render kanvas sertifikat 1600x1130px diintegrasikan dengan `document.fonts.ready` agar seluruh custom web font termuat sempurna sebelum gambar dicetak/diunduh, mencegah teks nama pembelajar terdegradasi ke font sistem bawaan.

5. **Interaksi Mobile Senyap (Silent Touch)**
   - Bunyi sentuhan/klik sintetis dinonaktifkan demi kenyamanan belajar mandiri yang tenang, sementara audio pelafalan asli bahasa Thai tetap bersuara jernih saat tombol penutur ditekan.

---

## 🚀 Menjalankan Secara Lokal

### Menggunakan Python Server:
```bash
python server.py
```
Akses di browser: `http://localhost:3001` (atau port yang tertera).

### Menggunakan Node / Static Server:
```bash
npx serve .
# atau
python -m http.server 8000
```

---

## 📄 Lisensi
Dirilis di bawah [MIT License](LICENSE).
