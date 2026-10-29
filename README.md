# 🍃 Mali's Thai Garden (สวนไทยของมะลิ)
### *Ghibli-Themed AI Speaking & Fluency Coach for the Thai Language*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/Vanilla_CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Web Speech API](https://img.shields.io/badge/Web_Speech_API-th--TH-2d6a4f?style=flat)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
[![Theme](https://img.shields.io/badge/Theme-Studio_Ghibli_Aesthetic-52b788?style=flat)](#-desain--tema-studio-ghibli)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)

**Mali's Thai Garden** adalah aplikasi web interaktif untuk melatih kelancaran berbicara bahasa Thailand (*Thai speaking fluency*) secara mandiri. Aplikasi ini menggabungkan paradigma **Stimuler AI Speaking Coach** (interaksi *voice-first*, evaluasi pengucapan instan, dan simulasi roleplay) dengan kehangatan estetika visual **Studio Ghibli** (warna hutan kamper, kertas perkamen cat air, dan pendar kunang-kunang malam).

---

## ✨ Fitur Utama

### 1. 🎙️ Studio Bicara Real-Time (Voice-First Studio)
* **Perekaman Suara Interaktif**: Tombol mikrofon terpusat dengan efek *pulsating talisman* saat merekam suara pengguna.
* **Canvas Waveform Dinamis**: Visualisasi gelombang audio real-time yang beranimasi saat pengguna berbicara maupun saat mendengarkan penutur asli.
* **Pengenalan Suara (*Speech Recognition*)**: Menggunakan Web Speech API dengan dukungan bahasa Thailand (`th-TH`) serta mode *simulasi evaluasi instan*.
* **Scorecard Kelancaran AI**: Menampilkan metrik komprehensif setelah setiap latihan:
  * Skor Kelancaran Keseluruhan (*Overall Fluency Score %*)
  * Akurasi Konsonan (*Consonant Precision*)
  * Ketepatan Nada (*Tone Pitch Match*)
  * Kecepatan Artikulasi (*Words Per Minute / WPM*)

### 2. ⚡ 60-Second Speaking Challenge
Tantangan spontan khas Stimuler untuk melatih keberanian berbicara tanpa jeda ragu. Jawab pertanyaan pemantik dalam 60 detik penuh untuk menguji ketangkasan fonetik Anda.

### 3. 💬 Simulasi Percakapan Roleplay
Simulasi dialog interaktif dengan **Nong Mali (มะลิ)** di berbagai konteks kehidupan nyata di Bangkok:
* 🍜 **Pesan Makanan di Kafe Sukhumvit**: Memesan Pad Thai, meminta air minum, dan menggunakan partikel kesopanan.
* 🛍️ **Tawar-menawar di Pasar Chatuchak**: Menanyakan harga barang (*thâo-rài*), meminta diskon, dan memilih warna/ukuran.
* 🛺 **Petualangan Tuk-Tuk Keliling Kota**: Mengarahkan navigasi (*lurus, belok kiri, belok kanan*) hingga berhenti di kuil Wat Arun.

### 4. 🔊 100% Penutur Asli Bangkok (Universal Native Thai Audio Engine)
* **Seluruh Kata Berpenutur Asli**: Setiap kata, frasa, konsonan, vokal, pilihan jawaban kuis, dan token kalimat disuarakan langsung oleh penutur asli (*Bangkok Central Standard Thai*).
* **👫 Dual-Gender Voice Engine (2 Versi Gaya Bicara: Perempuan & Laki-laki)**:
  * **Versi Perempuan (Wanita):** Menggunakan partikel pernyataan **ค่ะ (khà - nada jatuh)**, partikel pertanyaan **คะ (khá - nada tinggi)**, dan kata ganti **ฉัน (chǎn)**, disuarakan dengan timbre vokal jernih dan melodis (*pitch 1.18*).
  * **Versi Laki-laki (Pria):** Menggunakan partikel kesopanan universal **ครับ (khráp)** dan kata ganti **ผม (phǒm)**, disuarakan dengan resonansi vokal dada maskulin yang mantap (*pitch 0.80*).
  * **Toggle Global & Komparasi Instan**: Tombol cepat di header navigasi atas (`👩 Wanita (ค่ะ)` ⇄ `👨 Pria (ครับ)`), tombol pendengaran komparatif di Studio Bicara, kartu perbandingan ganda di Buku Frasa, respon adaptif di Simulasi Roleplay, serta kartu hasil ganda di Penerjemah AI.
* **Dual-Source Neural Audio Streaming**: Menggunakan redundansi ganda streaming audio beresolusi tinggi dengan nol jeda *buffering* dan pengamanan *fallback* ketat (tidak akan pernah beralih ke aksen bahasa Inggris kaku).
* **Kontrol Kecepatan Bicara (Speed Toggle)**: Pilihan kecepatan **1.0x (Alami Percakapan Bangkok)** atau **0.8x (Santai & Artikulasi Jelas untuk Pemula)**.
* **Nomenklatur Resmi Huruf**: Pengucapan konsonan tunggal otomatis melafalkan nama tradisional lengkapnya (misal: `ก` dilafalkan *กอ ไก่ / Ko Kai*, `ข` dilafalkan *ขอ ไข่ / Kho Khai*).

### 5. 🔬 Laboratorium 5 Nada, Aksara & Buku Frasa Audio
* **Uji 5 Nada Tonal**: Visualisasi kontur SVG untuk *Mid, Low, Falling, High,* dan *Rising Tone*, dilengkapi tombol uji frekuensi sintetis dan 3 variasi kata contoh penutur asli di setiap nada.
* **Matriks 44 Konsonan & 14 Vokal Lengkap**: Seluruh 44 huruf abjad Thailand terbagi rapi ke kelas Tengah, Tinggi, dan Rendah, masing-masing dengan audio asli interaktif.
* **🍃 Buku Frasa Audio Dual-Gender (Phrasebook)**: Koleksi 25+ frasa penting Thailand (Salam, Restoran & Kafe, Tawar-menawar Pasar, Arah & Taksi) yang menyajikan **versi pria (ครับ)** dan **versi wanita (ค่ะ/คะ)** berdampingan dengan tombol audio penutur asli untuk masing-masing versi.

### 6. 🗺️ Roadmap Kurikulum Berjenjang
* 4 Unit Pembelajaran terstruktur dari pemula (Salam & Huruf Dasar) hingga percakapan tingkat lanjut.
* Dilengkapi kuis pilihan ganda, mencocokkan kartu (*matching pairs*), dan penyusunan kalimat (*sentence builder*).
* Status kemajuan (*progress*, XP, streak, dan modul terbuka) tersimpan otomatis di `localStorage`.

### 7. 🤖 Pusat AI Cerdas Thailand (AI Thailand Hub: Searching, Translating & Culture Q&A)
Pusat kecerdasan buatan lengkap yang mengintegrasikan tiga kapabilitas utama dalam satu tab interaktif:
* **🌐 Penerjemah Pintar Real-Time (Live Translator)**:
  * Terjemahan instan dua arah: **Indonesia ⇄ Thailand**.
  * Dilengkapi **Transliterasi Fonetik Latin** untuk membantu membaca nada dan vokal.
  * **Audio Penutur Asli 1-Klik**: Dengarkan langsung hasil terjemahan dalam suara asli penutur Bangkok beresolusi tinggi.
  * Tombol mikrofon untuk mendiktekan kalimat secara langsung (*Speech-to-Text*) dan tombol salin teks ke clipboard.
  * *Preset Chips* frasa populer wisatawan (menawar harga, minta jangan pedas, arah toilet, pesan makanan).
  * Redundansi ganda: terhubung ke jaringan saraf terjemahan publik dengan pengamanan *kamus cerdas offline bawaan*.
* **🔍 Ensiklopedia & Wisata Thailand (Smart Search)**:
  * Mesin pencari instan untuk destinasi wisata, kuil, etika, kuliner jalanan, dan transportasi.
  * Dilengkapi 20+ artikel kurasi mendalam (Wat Arun, Grand Palace, Wat Pho, Chatuchak, Yaowarat Chinatown, Pad Thai, Tom Yum, Mango Sticky Rice, BTS Skytrain, Tuk-Tuk).
  * **Pencarian Real-Time Tanpa Batas**: Otomatis melakukan *query* ke **Wikipedia REST API** jika pengguna mencari topik tambahan di luar database lokal, lengkap dengan ringkasan artikel dan foto.
  * Filter kategori praktis (*Semua, Destinasi & Kuil, Kuliner & Street Food, Budaya & Etika, Transportasi*).
* **💬 Tanya Jawab Budaya & Wisata (Q&A with Nong Mali AI)**:
  * Asisten AI cerdas berbasis pengetahuan mendalam seputar Thailand.
  * Menjawab pertanyaan seputar:
    * Aturan pakaian dan etika sakral berkunjung ke kuil Buddha.
    * 3 tingkatan salam Wai dan cara membalasnya.
    * Frasa memesan makanan tidak pedas (*Mai Phet*) dan panduan kuliner halal di Bangkok.
    * Estimasi biaya makan harian dan kurs mata uang Baht.
    * Panduan transportasi bebas macet (BTS, MRT, perahu sungai, taksi berargo).
    * Makna 5 nada bahasa Thai beserta contoh kasusnya.
    * Etika menghormati institusi kerajaan dan aturan lagu kebangsaan.
    * Waspada trik penipuan (*scam*) supir tuk-tuk umum.
  * Setiap respon dilengkapi **tombol audio penutur asli** untuk mendengarkan lafal kata/frasa Thai yang relevan.

---

## 🎨 Desain & Tema Studio Ghibli

Aplikasi ini dirancang mengikuti panduan antarmuka humanis (*Anti-AI Slop Standards*):
* **🏮 Suasana Hutan Berbintang (Mode Gelap)**: Nuansa malam hutan cedar (*Totoro Midnight Cedar* `#0d1410`), batu lumut (`#18261f`), pendar daun zamrud (`#52b788`), dan cahaya kuning kunang-kunang (`#f59e0b`).
* **🍃 Suasana Padang Rumput (Mode Terang)**: Nuansa kertas perkamen cat air hangat (*Miyazaki Meadow* `#f6f3eb`), hijau kamper tua (`#2d6a4f`), dan amber lentera tradisional (`#d97706`).
* **Tipografi Buku Cerita**: Judul utama menggunakan font serif klasik **Fraunces**, dipadukan dengan **Noto Sans Thai**, **Plus Jakarta Sans**, dan **JetBrains Mono** untuk data teknis.
* **Animasi Kunang-kunang**: Partikel pendar kunang-kunang halus (*ambient fireflies*) yang melayang di latar belakang menggunakan canvas HTML5.

---

## 🚀 Cara Menjalankan Aplikasi Secara Lokal

### Prasyarat
* Browser modern berbasis Chromium (Google Chrome, Brave, atau Microsoft Edge).
* Python 3 (opsional, untuk server lokal).

### Opsi A: Jalankan Melalui VS Code / Antigravity IDE (Rekomendasi)
Proyek ini sudah dilengkapi konfigurasi otomatis di direktori `.vscode/`:
1. Buka folder proyek di editor.
2. Tekan tombol **F5** pada keyboard (atau buka menu **Run & Debug** ▶ pilih **Launch Stimuler Thai (Local Server)**).
3. Web server lokal otomatis berjalan di port `3000` dan browser langsung terbuka.

### Opsi B: Jalankan Melalui Terminal (Python Web Server)
1. Buka terminal di direktori proyek:
   ```bash
   cd /path/to/learnthai
   ```
2. Jalankan server lokal:
   ```bash
   python3 -m http.server 3000
   ```
3. Buka browser dan akses:
   [http://localhost:3000](http://localhost:3000)

### Opsi C: Buka File Langsung
Anda juga dapat langsung membuka file [index.html](index.html) atau [fairy_thai_academy.html](fairy_thai_academy.html) menggunakan browser Anda (`double-click` atau `Open with Chrome`).

---

## 📁 Struktur Direktori

```text
learnthai/
├── .vscode/
│   ├── launch.json          # Konfigurasi Run & Debug Chrome ke port 3000
│   └── tasks.json           # Background task otomatis untuk Python HTTP server
├── fairy_thai_academy.html  # Kode aplikasi utama (HTML, CSS Ghibli, dan JavaScript)
├── index.html               # Symlink entry-point ke fairy_thai_academy.html
└── README.md                # Dokumentasi proyek
```

---

## 🛠️ Teknologi yang Digunakan

* **Frontend**: HTML5 Semantik, Vanilla CSS3 (CSS Variables, Flexbox, CSS Grid).
* **Audio Synthesis & Audio FX**: Web Audio API (`AudioContext`, `OscillatorNode`, `GainNode`).
* **Speech Engine**: Web Speech API (`SpeechRecognition`, `SpeechSynthesis`), Google Neural Thai Audio Endpoint.
* **Canvas Rendering**: HTML5 2D Canvas Context (Real-time Audio Waveform & Ambient Firefly Particles).
* **Storage**: Browser LocalStorage API (State & Gamification persistence).
* **Typography**: Google Fonts (*Fraunces, Plus Jakarta Sans, Noto Sans Thai, JetBrains Mono*).

---

## 📄 Lisensi
Proyek ini dilisensikan di bawah lisensi **MIT License**. Silakan gunakan, kembangkan, dan bagikan untuk tujuan pembelajaran.

*Selamat belajar! ขอให้โชคดีกับการเรียนภาษาไทยนะคะ ✨ (Semoga sukses belajar bahasa Thailand!)*
