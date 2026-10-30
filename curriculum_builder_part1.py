# -*- coding: utf-8 -*-
"""
Detailed written content for Part 1 (Modules 1 - 31):
Mengenal Aksara, Vokal, Perubahan Bentuk, Matra Akhir, Klaster, dan Pemenggalan Kata.
"""

def get_part1_content():
    return {
        1: {
            "title": "Mengenal 44 Aksara Konsonan Thai (พยัญชนะไทย)",
            "tag": "Materi [01]",
            "icon": "🔤",
            "summary": "Pengantar 44 konsonan aksara Thai, pembagian 3 kelas (Tengah, Tinggi, Rendah), dan fungsi nama benda acuan.",
            "keyPoints": [
                "44 konsonan terbagi menjadi 3 kelas: Tengah (9), Tinggi (11), dan Rendah (24)",
                "Setiap konsonan dipasangkan dengan nama benda acuan untuk membedakan huruf berbunyi sama",
                "Kelas konsonan merupakan faktor paling krusial penentu nada (tone)"
            ],
            "thaiSample": {"thai": "ก ไก่", "rtgs": "ko kai", "meaning": "Ayam (Konsonan Tengah)"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 Tujuan Pembelajaran</h3>
  <p>Memahami struktur dasar 44 konsonan aksara Thai, fungsi nama acuan benda, serta alasan krusial mengapa konsonan dikelompokkan ke dalam 3 kelas (Tengah, Tinggi, dan Rendah).</p>

  <h3>📖 Mengapa Aksara Thai Punya 44 Konsonan?</h3>
  <p>Bahasa Thai memiliki banyak konsonan yang menghasilkan bunyi fonetik serupa saat berdiri di awal suku kata (misalnya ada 4 huruf 's', 6 huruf 'th', dan 5 huruf 'k'). Alasan keberadaan banyak huruf ini adalah <strong>Sistem Nada (Tone)</strong>.</p>
  <p>Huruf-huruf tersebut berasal dari <strong>kelas konsonan yang berbeda</strong>. Ketika dikombinasikan dengan vokal yang sama, kelas konsonan yang berbeda akan menghasilkan nada pengucapan yang berbeda!</p>

  <div class="rule-box">
    <strong>3 Kelas Konsonan Thai (ไตรยางศ์ - Traiyang):</strong>
    <ul>
      <li>🟢 <strong>Konsonan Tengah (9 aksara):</strong> ก จ ด ต บ ป อ ฎ ฏ</li>
      <li>🟡 <strong>Konsonan Tinggi (11 aksara):</strong> ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห</li>
      <li>🔴 <strong>Konsonan Rendah (24 aksara):</strong> ค ฅ ฆ ง ช ซ ฌ ญ ฑ ฒ ณ ท ธ น พ ฟ ภ ม ย ร ล ว ฬ ฮ</li>
    </ul>
  </div>

  <h3>📊 14 Konsonan Paling Sering Digunakan Sehari-hari</h3>
  <div class="table-responsive">
    <table class="lesson-table">
      <thead>
        <tr>
          <th>Huruf</th>
          <th>Nama Acuan</th>
          <th>Bunyi Awal / Akhir</th>
          <th>Kelas</th>
          <th>Arti Acuan</th>
          <th>Audio</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong class="thai-char">ก</strong></td><td>ก ไก่ (ko kai)</td><td>k / k</td><td><span class="badge-mid">Tengah</span></td><td>Ayam</td><td><button class="btn-audio-mini" onclick="speakThai('ก ไก่')">🔊 Dengar</button></td></tr>
        <tr><td><strong class="thai-char">ข</strong></td><td>ข ไข่ (kho khai)</td><td>kh / k</td><td><span class="badge-high">Tinggi</span></td><td>Telur</td><td><button class="btn-audio-mini" onclick="speakThai('ข ไข่')">🔊 Dengar</button></td></tr>
        <tr><td><strong class="thai-char">ค</strong></td><td>ค ควาย (kho khwai)</td><td>kh / k</td><td><span class="badge-low">Rendah</span></td><td>Kerbau</td><td><button class="btn-audio-mini" onclick="speakThai('ค ควาย')">🔊 Dengar</button></td></tr>
        <tr><td><strong class="thai-char">ง</strong></td><td>ง งู (ngo ngu)</td><td>ng / ng</td><td><span class="badge-low">Rendah</span></td><td>Ular</td><td><button class="btn-audio-mini" onclick="speakThai('ง งู')">🔊 Dengar</button></td></tr>
        <tr><td><strong class="thai-char">จ</strong></td><td>จ จาน (jo jaan)</td><td>j / t</td><td><span class="badge-mid">Tengah</span></td><td>Piring</td><td><button class="btn-audio-mini" onclick="speakThai('จ จาน')">🔊 Dengar</button></td></tr>
        <tr><td><strong class="thai-char">ช</strong></td><td>ช ช้าง (cho chaang)</td><td>ch / t</td><td><span class="badge-low">Rendah</span></td><td>Gajah</td><td><button class="btn-audio-mini" onclick="speakThai('ช ช้าง')">🔊 Dengar</button></td></tr>
        <tr><td><strong class="thai-char">ด</strong></td><td>ด เด็ก (do dek)</td><td>d / t</td><td><span class="badge-mid">Tengah</span></td><td>Anak-anak</td><td><button class="btn-audio-mini" onclick="speakThai('ด เด็ก')">🔊 Dengar</button></td></tr>
        <tr><td><strong class="thai-char">ต</strong></td><td>ต เต่า (to tao)</td><td>t / t</td><td><span class="badge-mid">Tengah</span></td><td>Kura-kura</td><td><button class="btn-audio-mini" onclick="speakThai('ต เต่า')">🔊 Dengar</button></td></tr>
        <tr><td><strong class="thai-char">น</strong></td><td>น หนู (no nu)</td><td>n / n</td><td><span class="badge-low">Rendah</span></td><td>Tikus</td><td><button class="btn-audio-mini" onclick="speakThai('น หนู')">🔊 Dengar</button></td></tr>
        <tr><td><strong class="thai-char">บ</strong></td><td>บ ใบไม้ (bo bai-mai)</td><td>b / p</td><td><span class="badge-mid">Tengah</span></td><td>Daun</td><td><button class="btn-audio-mini" onclick="speakThai('บ ใบไม้')">🔊 Dengar</button></td></tr>
        <tr><td><strong class="thai-char">ป</strong></td><td>ป ปลา (bpo bplaa)</td><td>bp / p</td><td><span class="badge-mid">Tengah</span></td><td>Ikan</td><td><button class="btn-audio-mini" onclick="speakThai('ป ปลา')">🔊 Dengar</button></td></tr>
        <tr><td><strong class="thai-char">ม</strong></td><td>ม ม้า (mo maa)</td><td>m / m</td><td><span class="badge-low">Rendah</span></td><td>Kuda</td><td><button class="btn-audio-mini" onclick="speakThai('ม ม้า')">🔊 Dengar</button></td></tr>
        <tr><td><strong class="thai-char">ห</strong></td><td>ห หีบ (ho heep)</td><td>h / -</td><td><span class="badge-high">Tinggi</span></td><td>Peti</td><td><button class="btn-audio-mini" onclick="speakThai('ห หีบ')">🔊 Dengar</button></td></tr>
        <tr><td><strong class="thai-char">อ</strong></td><td>อ อ่าง (o aang)</td><td>vokal / -</td><td><span class="badge-mid">Tengah</span></td><td>Baskom air</td><td><button class="btn-audio-mini" onclick="speakThai('อ อ่าง')">🔊 Dengar</button></td></tr>
      </tbody>
    </table>
  </div>

  <div class="fairy-tip">
    💡 <strong>Fairy Note:</strong> Huruf <strong>อ (O Aang)</strong> bertindak sebagai 'pembawa vokal' ketika suatu suku kata berawalan bunyi vokal murni (seperti kata 'Ayam', 'Ibu', 'Obat').
  </div>
</div>
"""
        },

        2: {
            "title": "Tata Cara Menulis Aksara Konsonan Thai (Stroke Order)",
            "tag": "Materi [02]",
            "icon": "✍️",
            "summary": "Kaidah arah goresan aksara Thai: selalu mulai dari lingkaran kepala (หัว) dan tulis tanpa mengangkat pena.",
            "keyPoints": [
                "Mulai selalu dari lingkaran kepala (หัว - hua)",
                "Tulis garis badan kontinu dalam satu tarikan napas",
                "Hanya ada 2 huruf tanpa kepala: ก (Ko Kai) dan ธ (Tho Thong)"
            ],
            "thaiSample": {"thai": "เขียนอักษรไทย", "rtgs": "khian ak-sorn thai", "meaning": "Menulis aksara Thai"},
            "worksheet": {
                "title": "Lembar Latihan Menulis 44 Konsonan Thai (PDF)",
                "file": "materials/lembar_menulis_konsonan_thai.pdf",
                "size": "2.4 MB"
            },
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 Tujuan Pembelajaran</h3>
  <p>Menguasai arah goresan (stroke order) aksara Thai agar tulisan proporsional, rapi, dan mudah dikenali oleh penutur asli.</p>

  <h3>✍️ Aturan Emas Goresan Tangan</h3>
  <div class="rule-box">
    <ol>
      <li><strong>Mulai Dari Lingkaran Kepala (หัว - Hua):</strong> Jika huruf memiliki bulatan kecil, letakkan pena di sana terlebih dahulu, putar melingkar searah atau berlawanan arah jarum jam, lalu lanjutkan ke badan huruf.</li>
      <li><strong>Satu Goresan Berkesinambungan:</strong> Usahakan tidak mengangkat pena sampai huruf selesai ditulis.</li>
      <li><strong>Perhatikan Tinggi Ekor:</strong> Huruf seperti ป (Bpo Bplaa), ฝ (Fo Fa), dan ฟ (Fo Fan) memiliki garis ekor yang menjulang lebih tinggi melampaui garis kepala huruf.</li>
    </ol>
  </div>

  <div class="download-card-inline">
    <div style="font-size:24px;">📄</div>
    <div>
      <div style="font-weight:700; color:var(--text);">Lembar Kerja Menulis Konsonan:</div>
      <div style="font-size:12px; color:var(--text-muted);">Gunakan lembar grid panduan resmi untuk melatih goresan tangan Anda.</div>
    </div>
    <div style="display:flex; gap:8px; margin-left:auto; flex-wrap:wrap;">
      <a href="/materials/lembar_menulis_konsonan_thai.pdf" download class="btn-stimuler-primary" style="text-decoration:none;">📄 Unduh PDF ↓</a>
      <a href="/materials/lembar_menulis_konsonan_thai.jpg" target="_blank" class="btn-subtle-nav" style="text-decoration:none; display:inline-flex; align-items:center;">🖼️ Buka JPG ↗</a>
    </div>
  </div>

  <div style="margin:18px 0; border:1px solid var(--border); border-radius:var(--radius-lg); overflow:hidden; background:#ffffff; text-align:center; box-shadow:0 4px 14px rgba(0,0,0,0.25);">
    <div style="padding:8px 14px; background:#f1f5f9; color:#475569; font-size:12px; font-weight:700; border-bottom:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center;">
      <span>👁️ Pratinjau Lembar Menulis 44 Konsonan:</span>
      <a href="/materials/lembar_menulis_konsonan_thai.jpg" target="_blank" style="color:#0284c7; text-decoration:none; font-size:11px;">Buka Ukuran Penuh ↗</a>
    </div>
    <img src="/materials/lembar_menulis_konsonan_thai.jpg" alt="Lembar Latihan Menulis Konsonan Thai" style="max-width:100%; height:auto; display:block; margin:0 auto;" loading="lazy">
  </div>
</div>
"""
        },

        3: {
            "title": "Konsonan Aktif dan Pasif dalam Bahasa Thai Modern",
            "tag": "Materi [03]",
            "icon": "📜",
            "summary": "Mengenal 2 konsonan kuno yang sudah tidak lagi dipakai dalam teks modern (ฃ dan ฅ) beserta huruf penggantinya.",
            "keyPoints": [
                "2 konsonan usang: ฃ (Kho Khuat) dan ฅ (Kho Khon)",
                "Tersisa 42 konsonan aktif yang dipakai dalam kehidupan sehari-hari",
                "Kedua huruf tetap diajarkan dalam urutan alfabet resmi untuk menjaga warisan budaya"
            ],
            "thaiSample": {"thai": "ขวด / คน", "rtgs": "khuat / khon", "meaning": "Botol / Orang"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 Tujuan Pembelajaran</h3>
  <p>Mengetahui status 44 konsonan dan memahami mengapa 2 konsonan sudah tidak lagi dicetak pada koran, buku teks, maupun keyboard modern.</p>

  <div class="table-responsive">
    <table class="lesson-table">
      <thead><tr><th>Konsonan Usang</th><th>Nama Kuno</th><th>Pengganti Modern</th><th>Contoh Kata Sekarang</th></tr></thead>
      <tbody>
        <tr><td><strong class="thai-char" style="opacity:0.35;">ฃ</strong></td><td>ฃ ขวด (kho khuat)</td><td><strong class="thai-char">ข</strong> (Kho Khai)</td><td>ขวด (khuat = botol)</td></tr>
        <tr><td><strong class="thai-char" style="opacity:0.35;">ฅ</strong></td><td>ฅ คน (kho khon)</td><td><strong class="thai-char">ค</strong> (Kho Khwai)</td><td>คน (khon = orang)</td></tr>
      </tbody>
    </table>
  </div>
</div>
"""
        },

        4: {
            "title": "Tips & Jembatan Keledai Menghafal 44 Konsonan Thai",
            "tag": "Materi [04]",
            "icon": "🧠",
            "summary": "Metode mnemonik legendaris sekolah Thailand untuk menguasai pengelompokan 3 kelas konsonan dengan mudah.",
            "keyPoints": [
                "Mnemonik Konsonan Tengah: ไก่จิกเด็กตายบนปากโอ่ง (9 aksara)",
                "Mnemonik Konsonan Tinggi: ผีฝากถุงข้าวสารให้ฉัน (11 aksara)",
                "Sistem eliminasi: Konsonan sisanya otomatis masuk ke Konsonan Rendah (24 aksara)"
            ],
            "thaiSample": {"thai": "ไก่จิกเด็กตายบนปากโอ่ง", "rtgs": "gai jik dek tai bon bpak ong", "meaning": "Mnemonik 9 Konsonan Tengah"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 Tujuan Pembelajaran</h3>
  <p>Menguasai metode mnemonik anak sekolah Thailand untuk mengidentifikasi kelas konsonan dalam waktu kurang dari 5 detik.</p>

  <div class="rule-box">
    <strong>1. Konsonan Tengah (9 Aksara):</strong><br>
    <span style="font-size:16px; font-weight:800; color:var(--primary);">ไก่ จิก เด็ก ตาย บน ปาก โอ่ง</span><br>
    <em>(Ayam mematuk anak mati di atas tempayan mulut lebar)</em><br>
    ก (Gai) • จ (Jik) • ด & ฎ (Dek) • ต & ฏ (Tai) • บ (Bon) • ป (Bpak) • อ (Ong).
  </div>

  <div class="rule-box" style="margin-top:14px;">
    <strong>2. Konsonan Tinggi (11 Aksara):</strong><br>
    <span style="font-size:16px; font-weight:800; color:var(--amber);">ผี ฝาก ถุง ข้าว สาร ให้ ฉัน</span><br>
    <em>(Hantu menitipkan sekantong beras putih padaku)</em><br>
    ผ (Phii) • ฝ (Faak) • ถ & ฐ (Thung) • ข & ฃ (Khaao) • ส, ศ, ษ (Saan) • ห (Hai) • ฉ (Chan).
  </div>
</div>
"""
        },

        5: {
            "title": "Kuis & Game Menebak Konsonan Thai (Versi A)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Uji ingatan Anda dalam mengenali 10 konsonan frekuensi tinggi pertama dan pengelompokan kelasnya.",
            "keyPoints": [
                "Tebak nama acuan konsonan",
                "Tentukan kelas konsonan (Tengah / Tinggi / Rendah)",
                "Audio verifikasi penutur asli"
            ],
            "thaiSample": {"thai": "ก, จ, ด, ต, บ, ป, อ", "rtgs": "k, j, d, t, b, bp, o", "meaning": "Konsonan Tengah"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎮 Latihan & Evaluasi Mandiri: Tebak Konsonan (Versi A)</h3>
  <p>Uji pemahaman Anda terhadap aksara yang telah dipelajari:</p>

  <details class="practice-box"><summary>Soal 1: Huruf ก (Ko Kai) masuk ke dalam kelas apa?</summary><p><strong>Jawaban:</strong> Konsonan Tengah (ไก่ - Gai).</p></details>
  <details class="practice-box"><summary>Soal 2: Apa nama acuan dari huruf ข?</summary><p><strong>Jawaban:</strong> ข ไข่ (Kho Khai = Telur) - Konsonan Tinggi.</p></details>
  <details class="practice-box"><summary>Soal 3: Huruf apa yang berarti 'Gajah' dan masuk kelas rendah?</summary><p><strong>Jawaban:</strong> ช ช้าง (Cho Chaang) - Konsonan Rendah.</p></details>
</div>
"""
        },

        6: {
            "title": "Kuis & Game Menebak Konsonan Thai (Versi B)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Latihan membedakan konsonan berwujud mirip seperti ด (Do Dek) vs ต (To Tao) dan บ (Bo) vs ป (Bpo).",
            "keyPoints": [
                "Identifikasi lekukan kepala pada ต (To Tao)",
                "Identifikasi panjang ekor pada ป (Bpo Bplaa)",
                "Pencegahan salah baca pada huruf serupa"
            ],
            "thaiSample": {"thai": "ด / ต , บ / ป", "rtgs": "do/to , bo/bpo", "meaning": "Pasangan Huruf Mirip"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎮 Bedah Pasangan Huruf Serupa</h3>
  <p>Perhatikan perbedaan lekukan dan ekor huruf berikut:</p>
  <ul>
    <li><strong>ด (Do Dek)</strong> kepalanya bundar mulus vs <strong>ต (To Tao)</strong> kepalanya memiliki lekukan patah di atas.</li>
    <li><strong>บ (Bo Bai-mai)</strong> ekornya pendek rata vs <strong>ป (Bpo Bplaa)</strong> ekornya panjang menjulang ke atas.</li>
  </ul>
</div>
"""
        },

        7: {
            "title": "Kuis & Game Menebak Konsonan Thai (Versi C)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Fokus pada konsonan kelas tinggi (ผ, ฝ, ถ, ข, ส, ห) dan latihan membedakan ผ vs พ.",
            "keyPoints": ["Perbedaan arah goresan kepala ke dalam vs ke luar", "Membedakan bunyi aspirasi tinggi vs rendah"],
            "thaiSample": {"thai": "ผ / พ", "rtgs": "pho phueng / pho phan", "meaning": "Lebah (Tinggi) vs Nampan (Rendah)"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎮 Membedakan Kepala Masuk vs Keluar</h3><p>Huruf <strong>ผ (Pho Phueng)</strong> lingkaran kepalanya menghadap ke dalam (Konsonan Tinggi), sedangkan <strong>พ (Pho Phan)</strong> lingkaran kepalanya menghadap ke luar (Konsonan Rendah).</p></div>"
        },

        8: {
            "title": "Kuis & Game Menebak Konsonan Thai (Versi D)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Latihan mengenal konsonan aksara pelengkap: ฎ, ฏ, ฐ, ฑ, ฒ, ณ yang sering muncul pada kata serapan resmi.",
            "keyPoints": ["Aksara resmi kerajaan dan kitab suci", "Konsonan berekor bawah"],
            "thaiSample": {"thai": "ฎ, ฏ, ฐ", "rtgs": "do, to, tho", "meaning": "Konsonan Tradisional"},
            "contentHtml": "<div class='lesson-content-block'><h3>📖 Karakter Aksara Klasik</h3><p>Konsonan seperti ฎ (Do Cha-da = Mahkota) dan ฏ (To Pa-tak = Tombak) memiliki ekor meliuk di bagian bawah garis dasar buku.</p></div>"
        },

        9: {
            "title": "Kuis Evaluasi Akhir 44 Konsonan Thai (Versi E / Final)",
            "tag": "Game / Kuis",
            "icon": "🏆",
            "summary": "Ujian kelulusan pengenalan 44 konsonan sebelum melangkah ke materi vokal dan aturan membaca.",
            "keyPoints": ["Evaluasi 44 aksara lengkap", "Kecepatan identifikasi kelas", "Kesiapan masuk materi vokal"],
            "thaiSample": {"thai": "ครบ 44 ตัว", "rtgs": "khrop sii-sip-sii dtua", "meaning": "Lengkap 44 Huruf"},
            "contentHtml": "<div class='lesson-content-block'><h3>🏆 Ujian Kelulusan Konsonan</h3><p>Selamat! Jika Anda sudah dapat mengenali minimal 30 konsonan utama beserta kelasnya, Anda sudah sangat siap melangkah ke materi vokal!</p></div>"
        },

        10: {
            "title": "Mengenal Aksara Vokal Thai (สระ - Sara)",
            "tag": "Materi [05]",
            "icon": "🎵",
            "summary": "Sistem 32 vokal Thai: pembagian vokal pendek vs panjang, serta posisi vokal di atas, bawah, depan, atau belakang konsonan.",
            "keyPoints": [
                "Vokal Thai berpasangan: Vokal Pendek (สั้น - san) dan Vokal Panjang (ยาว - yaao)",
                "Posisi vokal sangat fleksibel: depan (เ), belakang (า), atas (ิ), bawah (ุ), atau mengelilingi (เ-าะ)",
                "Huruf konsonan selalu diletakkan di posisi tanda strip (-)"
            ],
            "thaiSample": {"thai": "สระอะ / สระอา", "rtgs": "sara a / sara aa", "meaning": "Vokal Pendek 'a' vs Vokal Panjang 'aa'"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 Tujuan Pembelajaran</h3>
  <p>Memahami konsep vokal berpasangan (pendek vs panjang) dan mengenali 5 posisi peletakan vokal terhadap konsonan utama.</p>

  <h3>📊 9 Pasangan Vokal Dasar Bahasa Thai</h3>
  <div class="table-responsive">
    <table class="lesson-table">
      <thead><tr><th>Vokal Pendek</th><th>Bunyi</th><th>Vokal Panjang</th><th>Bunyi</th><th>Posisi</th><th>Audio</th></tr></thead>
      <tbody>
        <tr><td>-ะ</td><td>a</td><td>-า</td><td>aa</td><td>Belakang konsonan</td><td><button class="btn-audio-mini" onclick="speakThai('กะ กา')">🔊 กะ / กา</button></td></tr>
        <tr><td>-ิ</td><td>i</td><td>-ี</td><td>ii</td><td>Atas konsonan</td><td><button class="btn-audio-mini" onclick="speakThai('กิ กี')">🔊 กิ / กี</button></td></tr>
        <tr><td>-ึ</td><td>ue (pendek)</td><td>-ื</td><td>uee (panjang)</td><td>Atas konsonan</td><td><button class="btn-audio-mini" onclick="speakThai('กึ กือ')">🔊 กึ / กือ</button></td></tr>
        <tr><td>-ุ</td><td>u</td><td>-ู</td><td>uu</td><td>Bawah konsonan</td><td><button class="btn-audio-mini" onclick="speakThai('กุ กู')">🔊 กุ / กู</button></td></tr>
        <tr><td>เ-ะ</td><td>e</td><td>เ-</td><td>ee</td><td>Depan konsonan</td><td><button class="btn-audio-mini" onclick="speakThai('เกะ เก')">🔊 เกะ / เก</button></td></tr>
        <tr><td>แ-ะ</td><td>ae</td><td>แ-</td><td>aae</td><td>Depan konsonan</td><td><button class="btn-audio-mini" onclick="speakThai('แกะ แก')">🔊 แกะ / แก</button></td></tr>
        <tr><td>โ-ะ</td><td>o</td><td>โ-</td><td>oo</td><td>Depan konsonan</td><td><button class="btn-audio-mini" onclick="speakThai('โกะ โก')">🔊 โกะ / โก</button></td></tr>
        <tr><td>เ-าะ</td><td>aw (pendek)</td><td>-อ</td><td>aaw (panjang)</td><td>Mengelilingi</td><td><button class="btn-audio-mini" onclick="speakThai('เกาะ กอ')">🔊 เกาะ / กอ</button></td></tr>
        <tr><td>เ-อะ</td><td>oe (pendek)</td><td>เ-อ</td><td>oee (panjang)</td><td>Mengelilingi</td><td><button class="btn-audio-mini" onclick="speakThai('เกอะ เจอ')">🔊 เกอะ / เจอ</button></td></tr>
      </tbody>
    </table>
  </div>
</div>
"""
        },

        11: {
            "title": "Tata Cara Menulis Aksara Vokal Thai (Stroke Order)",
            "tag": "Materi [06]",
            "icon": "✍️",
            "summary": "Panduan arah goresan menulis vokal atas, bawah, depan, dan vokal melingkar beserta lembar latihan PDF.",
            "keyPoints": [
                "Vokal depan (เ, แ, โ, ใ, ไ) selalu ditulis sebelum menulis konsonannya!",
                "Vokal atas dan bawah ditulis setelah konsonan selesai digoreskan",
                "Lembar grid latihan vokal tersedia untuk diunduh"
            ],
            "thaiSample": {"thai": "เขียนสระไทย", "rtgs": "khian sara thai", "meaning": "Menulis Vokal Thai"},
            "worksheet": {
                "title": "Lembar Latihan Menulis Vokal Thai (PDF)",
                "file": "materials/lembar_menulis_vokal_thai.pdf",
                "size": "2.0 MB"
            },
            "contentHtml": """
<div class="lesson-content-block">
  <h3>✍️ Urutan Menulis Kata Bervokal Depan</h3>
  <p>Meskipun secara fonetik dibaca belakangan, vokal depan seperti <strong>เ- (Sara E)</strong> atau <strong>ไ- (Sara Ai)</strong> wajib dituliskan <strong>SEBELUM</strong> Anda menulis konsonan utamanya!</p>
  <p>Contoh: Kata ไป (Bpai = Pergi) ditulis dengan membuat ไ terlebih dahulu, baru diikuti huruf ป.</p>

  <div class="download-card-inline">
    <div style="font-size:24px;">📄</div>
    <div>
      <div style="font-weight:700; color:var(--text);">Lembar Kerja Menulis Vokal Thai:</div>
      <div style="font-size:12px; color:var(--text-muted);">Latih goresan vokal atas, bawah, depan, dan sekeliling dengan lembar panduan.</div>
    </div>
    <div style="display:flex; gap:8px; margin-left:auto; flex-wrap:wrap;">
      <a href="/materials/lembar_menulis_vokal_thai.pdf" download class="btn-stimuler-primary" style="text-decoration:none;">📄 Unduh PDF ↓</a>
      <a href="/materials/lembar_menulis_vokal_thai.jpg" target="_blank" class="btn-subtle-nav" style="text-decoration:none; display:inline-flex; align-items:center;">🖼️ Buka JPG ↗</a>
    </div>
  </div>

  <div style="margin:18px 0; border:1px solid var(--border); border-radius:var(--radius-lg); overflow:hidden; background:#ffffff; text-align:center; box-shadow:0 4px 14px rgba(0,0,0,0.25);">
    <div style="padding:8px 14px; background:#f1f5f9; color:#475569; font-size:12px; font-weight:700; border-bottom:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center;">
      <span>👁️ Pratinjau Lembar Menulis Vokal Thai:</span>
      <a href="/materials/lembar_menulis_vokal_thai.jpg" target="_blank" style="color:#0284c7; text-decoration:none; font-size:11px;">Buka Ukuran Penuh ↗</a>
    </div>
    <img src="/materials/lembar_menulis_vokal_thai.jpg" alt="Lembar Latihan Menulis Vokal Thai" style="max-width:100%; height:auto; display:block; margin:0 auto;" loading="lazy">
  </div>
</div>
"""
        },

        12: {
            "title": "Game Melatinkan Kata (Versi A - Easy: Suku Kata Terbuka)",
            "tag": "Game / Kuis",
            "icon": "📖",
            "summary": "Latihan membaca kata dasar 1 suku kata tanpa akhiran (Konsonan + Vokal Panjang).",
            "keyPoints": ["Membaca kata bersuku kata terbuka", "Kombinasi konsonan tengah + vokal panjang"],
            "thaiSample": {"thai": "กา, ตา, ปา, ดู, ไป", "rtgs": "gaa, dtaa, bpaa, duu, bpai", "meaning": "Burung gagak, Mata, Melempar, Melihat, Pergi"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>📖 Latihan Membaca Kata Mudah (Konsonan + Vokal)</h3>
  <ul>
    <li><strong class="thai-char">กา</strong> (gaa) = Burung gagak / Ceret air <button class="btn-audio-mini" onclick="speakThai('กา')">🔊</button></li>
    <li><strong class="thai-char">ตา</strong> (dtaa) = Mata / Kakek dari pihak ibu <button class="btn-audio-mini" onclick="speakThai('ตา')">🔊</button></li>
    <li><strong class="thai-char">ดู</strong> (duu) = Melihat / Menonton <button class="btn-audio-mini" onclick="speakThai('ดู')">🔊</button></li>
    <li><strong class="thai-char">ไป</strong> (bpai) = Pergi <button class="btn-audio-mini" onclick="speakThai('ไป')">🔊</button></li>
    <li><strong class="thai-char">มา</strong> (maa) = Datang <button class="btn-audio-mini" onclick="speakThai('มา')">🔊</button></li>
  </ul>
</div>
"""
        },

        13: {
            "title": "Game Melatinkan Kata (Versi B - Easy: Kata Harian)",
            "tag": "Game / Kuis",
            "icon": "📖",
            "summary": "Membaca kata-kata 2 suku kata sederhana dalam kehidupan sehari-hari.",
            "keyPoints": ["Kata dua suku kata terbuka", "Latihan intonasi nada netral"],
            "thaiSample": {"thai": "เวลา, ราคา, อีกา", "rtgs": "wee-laa, raa-khaa, ii-gaa", "meaning": "Waktu, Harga, Burung gagak"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>📖 Latihan Membaca Kata 2 Suku Kata</h3>
  <ul>
    <li><strong class="thai-char">เวลา</strong> (wee-laa) = Waktu <button class="btn-audio-mini" onclick="speakThai('เวลา')">🔊</button></li>
    <li><strong class="thai-char">ราคา</strong> (raa-khaa) = Harga <button class="btn-audio-mini" onclick="speakThai('ราคา')">🔊</button></li>
    <li><strong class="thai-char">นาที</strong> (naa-thii) = Menit <button class="btn-audio-mini" onclick="speakThai('นาที')">🔊</button></li>
  </ul>
</div>
"""
        },

        14: {
            "title": "Perubahan Bunyi Konsonan Akhir (8 Matra ตัวสะกด)",
            "tag": "Materi [07]",
            "icon": "🔄",
            "summary": "Kaidah krusial 8 Matra bunyi konsonan akhir dalam bahasa Thai: Kok, Kot, Kob, Kon, Kom, Kong, Koei, dan Koew.",
            "keyPoints": [
                "44 konsonan saat berada di akhir kata hanya dilebur menjadi 8 kelompok bunyi matra!",
                "Matra Letup Buntu (Mati): Kok (-k), Kot (-t), Kob (-p)",
                "Matra Sengau / Luncur (Hidup): Kon (-n), Kom (-m), Kong (-ng), Koei (-y), Koew (-w)"
            ],
            "thaiSample": {"thai": "มาตราตัวสะกด", "rtgs": "maat-dtraa dtua sa-got", "meaning": "Kaidah Konsonan Akhir (8 Matra)"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 Tujuan Pembelajaran</h3>
  <p>Memahami bagaimana 44 konsonan mengalami perubahan bunyi ketika berperan sebagai konsonan penutup suku kata (ตัวสะกด - dtua sa-got).</p>

  <h3>📊 Tabel 8 Matra Konsonan Akhir</h3>
  <div class="table-responsive">
    <table class="lesson-table">
      <thead><tr><th>Nama Matra</th><th>Bunyi Akhir</th><th>Huruf Anggota</th><th>Contoh Kata</th><th>Arti</th><th>Audio</th></tr></thead>
      <tbody>
        <tr><td><strong>Mae Kok (แม่กก)</strong></td><td>-K (buntu)</td><td>ก, ข, ค, ฆ</td><td>รัก (rak) / เมฆ (meek)</td><td>Cinta / Awan</td><td><button class="btn-audio-mini" onclick="speakThai('รัก')">🔊</button></td></tr>
        <tr><td><strong>Mae Kot (แม่กด)</strong></td><td>-T (buntu)</td><td>ด, ต, จ, ช, ซ, ฎ, ฏ, ฐ, ฑ, ฒ, ศ, ษ, ส</td><td>บาท (baat) / รส (rot)</td><td>Baht / Rasa</td><td><button class="btn-audio-mini" onclick="speakThai('บาท')">🔊</button></td></tr>
        <tr><td><strong>Mae Kob (แม่กบ)</strong></td><td>-P (buntu)</td><td>บ, ป, พ, ฟ, ภ</td><td>ภาพ (phaap) / รูป (ruup)</td><td>Gambar / Foto</td><td><button class="btn-audio-mini" onclick="speakThai('ภาพ')">🔊</button></td></tr>
        <tr><td><strong>Mae Kon (แม่กน)</strong></td><td>-N (sengau)</td><td>น, ณ, ญ, ร, ล, ฬ</td><td>อาหาร (aa-haan) / การ (gaan)</td><td>Makanan / Urusan</td><td><button class="btn-audio-mini" onclick="speakThai('อาหาร')">🔊</button></td></tr>
        <tr><td><strong>Mae Kom (แม่กม)</strong></td><td>-M</td><td>ม</td><td>ส้ม (som) / ผม (phom)</td><td>Jeruk / Saya</td><td><button class="btn-audio-mini" onclick="speakThai('ส้ม')">🔊</button></td></tr>
        <tr><td><strong>Mae Kong (แม่กง)</strong></td><td>-NG</td><td>ง</td><td>ช้าง (chaang) / กุ้ง (gung)</td><td>Gajah / Udang</td><td><button class="btn-audio-mini" onclick="speakThai('ช้าง')">🔊</button></td></tr>
        <tr><td><strong>Mae Koei (แม่เกย)</strong></td><td>-Y</td><td>ย</td><td>สวย (suai) / ขาย (khaai)</td><td>Cantik / Jual</td><td><button class="btn-audio-mini" onclick="speakThai('สวย')">🔊</button></td></tr>
        <tr><td><strong>Mae Koew (แม่เกิร์ว)</strong></td><td>-W</td><td>ว</td><td>ข้าว (khaao) / แมว (maaeo)</td><td>Nasi / Kucing</td><td><button class="btn-audio-mini" onclick="speakThai('ข้าว')">🔊</button></td></tr>
      </tbody>
    </table>
  </div>

  <div class="fairy-tip">
    💡 <strong>Perhatikan Khusus Mae Kon:</strong> Huruf <strong>ร (R)</strong> dan <strong>ล (L)</strong> jika berada di AKHIR kata selalu dibaca sebagai <strong>-N</strong>! Contoh: อาหาร dibaca <em>aa-haan</em>, bukan aa-haar!
  </div>
</div>
"""
        },

        15: {
            "title": "Game Perubahan Bunyi Konsonan Akhir (Versi A)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Latihan mengenali bunyi akhir dari kata-kata dengan huruf akhiran tidak biasa seperti ร, ล, ส, จ.",
            "keyPoints": ["Identifikasi matra kata nyata", "Menguji pemahaman Mae Kon dan Mae Kot"],
            "thaiSample": {"thai": "อาหาร, รถ, ภาพ", "rtgs": "aa-haan, rot, phaap", "meaning": "Makanan (-n), Mobil (-t), Gambar (-p)"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎮 Kuis Matra Akhir</h3><details class='practice-box'><summary>Soal: Kata รถ (mobil) berakhiran huruf ถ. Bunyi akhir apakah yang terdengar?</summary><p><strong>Jawaban:</strong> Huruf ถ masuk ke dalam kelompok <strong>Mae Kot</strong> sehingga dibaca berakhiran bunyi <strong>-t</strong> (rot).</p></details></div>"
        },

        16: {
            "title": "Game Perubahan Bunyi Konsonan Akhir (Versi B)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Latihan tingkat lanjut menganalisis konsonan akhir pada kata serapan Sansekerta dan Inggris.",
            "keyPoints": ["Kata serapan asing", "Kaidah matra pada nama orang dan tempat"],
            "thaiSample": {"thai": "ฟุตบอล", "rtgs": "fut-bawn", "meaning": "Sepak Bola (akhiran -n)"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎮 Mengapa Football dibaca Fut-bawn?</h3><p>Dalam bahasa Thai, kata 'football' dieja ฟุตบอล. Karena huruf ล di akhir kata masuk ke dalam <strong>Mae Kon</strong>, maka penutur Thai melafalkannya menjadi <em>fut-bawn</em>.</p></div>"
        },

        17: {
            "title": "Perubahan Bentuk Vokal Saat Memiliki Konsonan Akhir",
            "tag": "Materi [08]",
            "icon": "✨",
            "summary": "Transformasi wujud vokal: Sara Ah (ะ) menjadi Mai Han-Akat ( ั ), Sara Oh tersembunyi, dan pemendekan vokal Mai Taikhu.",
            "keyPoints": [
                "Vokal -ะ berubah menjadi Mai Han-Akat ( ั ) di atas konsonan saat ada akhiran: ก + ะ + บ = กับ",
                "Vokal โ-ะ menghilang total (vokal tak kasat mata): ร + โ-ะ + ถ = รถ",
                "Vokal เ-ะ dan แ-ะ berubah menjadi tanda Mai Taikhu (เ-็ dan แ-็)"
            ],
            "thaiSample": {"thai": "กับ, รถ, คน, เป็ด", "rtgs": "gap, rot, khon, bpet", "meaning": "Dengan, Mobil, Orang, Bebek"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 Fenomena Perubahan Bentuk Vokal (ลดรูป / เปลี่ยนรูป)</h3>
  <p>Dalam aksara Thai, beberapa vokal akan <strong>berubah wujud</strong> atau bahkan <strong>menghilang sama sekali</strong> ketika suku kata tersebut ditutup oleh konsonan akhir:</p>

  <div class="rule-box">
    <ul>
      <li><strong>1. Vokal -ะ -> Mai Han-Akat ( ั ):</strong><br>
      Konsonan + ะ + Akhiran -> Konsonan + ั + Akhiran.<br>
      Contoh: ก + ะ + บ = <strong>กับ (gap = dengan)</strong> • ว + ะ + น = <strong>วัน (wan = hari)</strong>.</li>
      <li><strong>2. Vokal โ-ะ -> Lenyap Total (Vokal Tak Kasat Mata):</strong><br>
      Jika Anda melihat dua konsonan berdampingan tanpa tanda vokal apa pun, di antara keduanya tersimpan vokal 'o' pendek!<br>
      Contoh: ร + ถ = <strong>รถ (rot = mobil)</strong> • ค + น = <strong>คน (khon = orang)</strong>.</li>
      <li><strong>3. Vokal เ-ะ -> Tanda Mai Taikhu (เ-็):</strong><br>
      Contoh: ป + เ-ะ + ด = <strong>เป็ด (bpet = bebek)</strong>.</li>
      <li><strong>4. Vokal ัว -> Kehilangan Mai Han-Akat:</strong><br>
      Contoh: ก + ัว + น = <strong>กวน (guan = mengaduk)</strong>.</li>
    </ul>
  </div>
</div>
"""
        },

        18: {
            "title": "Game Transformasi Bentuk Vokal (Versi A)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Uji kepekaan membaca kata-kata bervokal Mai Han-Akat dan vokal tersembunyi.",
            "keyPoints": ["Membaca kata ber-Mai Han-Akat", "Mendeteksi vokal 'o' tak kasat mata"],
            "thaiSample": {"thai": "รัก, นก, ลม", "rtgs": "rak, nok, lom", "meaning": "Cinta, Burung, Angin"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎮 Tebak Vokal Tersembunyi</h3><p>Kata <strong>นก (nok = burung)</strong> dan <strong>ลม (lom = angin)</strong> sama-sama menyimpan vokal <em>o pendek (โ-ะ)</em> yang bentuk aslinya hilang karena adanya konsonan akhir.</p></div>"
        },

        19: {
            "title": "Game Transformasi Bentuk Vokal (Versi B)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Latihan mengurai kata ber-Mai Taikhu (เ-็) dan transformasi vokal majemuk.",
            "keyPoints": ["Kata ber-Mai Taikhu", "Sara Aw berakhiran"],
            "thaiSample": {"thai": "เด็ก, เล็ก, ล็อก", "rtgs": "dek, lek, lok", "meaning": "Anak, Kecil, Mengunci"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎮 Membaca Kata dengan Mai Taikhu</h3><p>Kata <strong>เด็ก (dek = anak)</strong> dan <strong>เล็ก (lek = kecil)</strong> menggunakan tanda angka 8 kecil (Mai Taikhu ็) untuk menandakan bunyi vokal 'e' yang dibaca pendek.</p></div>"
        },

        20: {
            "title": "Game Melatinkan Kata (Versi A - Medium)",
            "tag": "Game / Kuis",
            "icon": "📖",
            "summary": "Latihan membaca kata tingkat menengah dengan gabungan konsonan awal, vokal berubah bentuk, dan konsonan akhir.",
            "keyPoints": ["Analisis 3 elemen kata", "Transliterasi mandiri"],
            "thaiSample": {"thai": "ส้มตำ, พักผ่อน", "rtgs": "som-dtam, phak-phaawn", "meaning": "Som Tum, Beristirahat"},
            "contentHtml": "<div class='lesson-content-block'><h3>📖 Latihan Membaca Kata Majemuk</h3><ul><li><strong>ส้มตำ (som-dtam):</strong> Salad pepaya khas Thailand.</li><li><strong>พักผ่อน (phak-phaawn):</strong> Beristirahat / bersantai.</li></ul></div>"
        },

        21: {
            "title": "Game Melatinkan Kata (Versi B - Medium)",
            "tag": "Game / Kuis",
            "icon": "📖",
            "summary": "Membaca kata menu makanan dan tempat umum di Thailand.",
            "keyPoints": ["Menu makanan populer", "Kosa kata transportasi"],
            "thaiSample": {"thai": "ต้มยำกุ้ง, โรงแรม", "rtgs": "dtom-yam-gung, rong-raem", "meaning": "Tom Yum Goong, Hotel"},
            "contentHtml": "<div class='lesson-content-block'><h3>📖 Kosakata Tempat & Kuliner Populer</h3><ul><li><strong>ต้มยำกุ้ง (dtom-yam-gung):</strong> Sup tom yum udang.</li><li><strong>โรงแรม (rong-raem):</strong> Hotel / Penginapan.</li></ul></div>"
        },

        22: {
            "title": "Konsonan Klaster / Gabungan (อักษรควบ - Ak-sorn Khuap)",
            "tag": "Materi [09]",
            "icon": "🔗",
            "summary": "Kaidah membaca konsonan klaster: Klaster Sejati (ควบแท้) vs Klaster Palsu (ควบไม่แท้) di mana huruf ร berubah bunyi.",
            "keyPoints": [
                "Klaster Sejati: Konsonan awal digabung dengan ร, ล, ว dan dibaca meluncur bersamaan (contoh: ครู khruu, ปลา bplaa)",
                "Klaster Palsu: Huruf ทร berubah bunyi menjadi 'S' (contoh: ทราย saai = pasir)",
                "Huruf ร tidak dibaca pada kata tertentu seperti จริง (jing = benar)"
            ],
            "thaiSample": {"thai": "ครู, ปลา, จริง, ทราย", "rtgs": "khruu, bplaa, jing, saai", "meaning": "Guru, Ikan, Benar, Pasir"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 Tujuan Pembelajaran</h3>
  <p>Membedakan konsonan gabungan yang dibaca serentak (Klaster Sejati) dengan konsonan gabungan yang bunyinya melebur (Klaster Palsu).</p>

  <div class="rule-box">
    <strong>1. Klaster Sejati (ควบแท้):</strong><br>
    Konsonan awal bergabung dengan <strong>ร, ล, ว</strong> dan dilafalkan serentak dalam satu hembusan napas:<br>
    <ul>
      <li>ครู (khruu) = Guru <button class="btn-audio-mini" onclick="speakThai('ครู')">🔊</button></li>
      <li>ปลา (bplaa) = Ikan <button class="btn-audio-mini" onclick="speakThai('ปลา')">🔊</button></li>
      <li>กวาง (gwaang) = Rusa <button class="btn-audio-mini" onclick="speakThai('กวาง')">🔊</button></li>
    </ul>
  </div>

  <div class="rule-box" style="margin-top:14px;">
    <strong>2. Klaster Palsu (ควบไม่แท้):</strong><br>
    <ul>
      <li><strong>Aturan 'ทร' -> 'S':</strong> Gabungan huruf <strong>ท + ร</strong> dibaca sebagai bunyi <strong>S</strong> murni!<br>
      Contoh: ทราย dibaca <em>saai</em> (pasir), bukan thraai! • ทราบ dibaca <em>saap</em> (mengetahui).</li>
      <li><strong>Huruf 'ร' Bisu:</strong> Pada kata จริง, huruf ร tidak berbunyi, dibaca murni <em>jing</em> (sungguh/benar).</li>
    </ul>
  </div>
</div>
"""
        },

        23: {
            "title": "Game Konsonan Klaster (Versi A - Klaster Sejati)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Latihan membedakan pengucapan klaster ร vs ล (contoh: กราบ vs กลาง).",
            "keyPoints": ["Pengucapan klaster l dan r", "Artikulasi lidah yang bersih"],
            "thaiSample": {"thai": "กราบ / กลาง", "rtgs": "graap / glaang", "meaning": "Sujud hormat / Di tengah"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎮 Latihan Klaster Sejati</h3><p>Latihlah artikulasi kata <strong>ครอบครัว (khraawp-khrua = keluarga)</strong> dan <strong>กล้าหาญ (glaa-haan = berani)</strong>.</p></div>"
        },

        24: {
            "title": "Game Konsonan Klaster (Versi B - Klaster Palsu & ทร)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Latihan mengidentifikasi kata berawalan ทร yang berbunyi 'S'.",
            "keyPoints": ["Pola kata ทร -> s", "Kata serapan beraksara ganda"],
            "thaiSample": {"thai": "แทรก, ทรง, ทราบ", "rtgs": "saaek, song, saap", "meaning": "Menyisip, Bentuk, Mengetahui"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎮 Kata-Kata dengan Aturan ทร -> S</h3><ul><li><strong>แทรก</strong> dibaca <em>saaek</em> (menyisip).</li><li><strong>ทรงผม</strong> dibaca <em>song phom</em> (gaya rambut).</li><li><strong>ทราบ</strong> dibaca <em>saap</em> (tahu / mengerti).</li></ul></div>"
        },

        25: {
            "title": "Vokal Kompleks & Kesalahan Umum Pembelajar",
            "tag": "Materi [10]",
            "icon": "⚠️",
            "summary": "Membedakan diftong (เีย, เือ, ัว) dan vokal khusus ฤ (rue) serta jebakan fonetik yang sering dialami pemula.",
            "keyPoints": [
                "Diftong 3 serangkai: -ia (เีย), -uea (เือ), -ua (ัว)",
                "Karakter vokal khusus Sanskrit: ฤ (rue / ri)",
                "Kesalahan umum: tertukar antara vokal depan tunggal vs diftong"
            ],
            "thaiSample": {"thai": "เรียน, เมือง, ตัว", "rtgs": "rian, mueang, dtua", "meaning": "Belajar, Kota, Diri/Badan"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 3 Diftong Utama Bahasa Thai</h3>
  <div class="table-responsive">
    <table class="lesson-table">
      <thead><tr><th>Bentuk Vokal</th><th>Bunyi Fonetik</th><th>Contoh Kata</th><th>Arti</th><th>Audio</th></tr></thead>
      <tbody>
        <tr><td><strong>เ-ีย</strong></td><td>ia (panjang)</td><td>เรียน (rian)</td><td>Belajar</td><td><button class="btn-audio-mini" onclick="speakThai('เรียน')">🔊</button></td></tr>
        <tr><td><strong>เ-ือ</strong></td><td>uea (panjang)</td><td>เมือง (mueang)</td><td>Kota / Negeri</td><td><button class="btn-audio-mini" onclick="speakThai('เมือง')">🔊</button></td></tr>
        <tr><td><strong>-ัว</strong></td><td>ua (panjang)</td><td>ตัว (dtua)</td><td>Badan / Ekor hewan</td><td><button class="btn-audio-mini" onclick="speakThai('ตัว')">🔊</button></td></tr>
      </tbody>
    </table>
  </div>
</div>
"""
        },

        26: {
            "title": "Game Melatinkan Kata (Versi A - Hard)",
            "tag": "Game / Kuis",
            "icon": "🏆",
            "summary": "Tantangan membaca kata kompleks dengan gabungan klaster, diftong, dan konsonan akhir ganda.",
            "keyPoints": ["Kata polisinonim", "Kaidah membaca tingkat mahir"],
            "thaiSample": {"thai": "ประเทศ, สวัสดี", "rtgs": "bpra-theet, sa-wat-dii", "meaning": "Negara, Halo/Selamat"},
            "contentHtml": "<div class='lesson-content-block'><h3>🏆 Membaca Kata Kompleks</h3><p>Kata <strong>ประเทศ (bpra-theet = negara)</strong> menggabungkan konsonan klaster ปร, vokal เ-, dan konsonan akhir ศ yang masuk kelompok Mae Kot (dibaca -t).</p></div>"
        },

        27: {
            "title": "Game Melatinkan Kata (Versi B - Hard)",
            "tag": "Game / Kuis",
            "icon": "🏆",
            "summary": "Membaca teks nama jalan, stasiun MRT/BTS di Bangkok, dan nama provinsi.",
            "keyPoints": ["Nama stasiun BTS/MRT", "Nama provinsi di Thailand"],
            "thaiSample": {"thai": "สุขุมวิท, สยาม, เชียงใหม่", "rtgs": "su-khum-wit, sa-yaam, chiang-mai", "meaning": "Sukhumvit, Siam, Chiang Mai"},
            "contentHtml": "<div class='lesson-content-block'><h3>🏆 Membaca Rambu & Nama Tempat Populer</h3><ul><li><strong>สุขุมวิท (su-khum-wit):</strong> Sukhumvit Road.</li><li><strong>สยาม (sa-yaam):</strong> Siam Square / Siam.</li><li><strong>เชียงใหม่ (chiang-mai):</strong> Chiang Mai.</li></ul></div>"
        },

        28: {
            "title": "Kaidah Penggunaan Spasi dalam Bahasa Thai",
            "tag": "Materi [11]",
            "icon": "📏",
            "summary": "Bahasa Thai tidak mengenal spasi antar kata! Pelajari fungsi spasi sebagai pengganti titik, koma, dan pemisah klausa.",
            "keyPoints": [
                "Kata-kata dalam kalimat Thai ditulis menyambung rapat tanpa spasi",
                "Spasi hanya digunakan sebagai tanda jeda kalimat, pergantian gagasan, atau jeda klausa",
                "Spasi juga digunakan di sebelum dan sesudah angka serta tanda pengulangan (ๆ)"
            ],
            "thaiSample": {"thai": "ผมกินข้าว และเขาดื่มน้ำ", "rtgs": "phom kin khaao  lae khao duum naam", "meaning": "Saya makan nasi [spasi jeda] dan dia minum air"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 Mengapa Bahasa Thai Tidak Memakai Spasi Antar Kata?</h3>
  <p>Dalam bahasa Indonesia dan Inggris, setiap kata dipisahkan oleh spasi. Namun dalam bahasa Thai, seluruh kata dalam satu klausa ditulis <strong>tersambung rapat</strong>.</p>
  <div class="rule-box">
    <strong>Kapan Spasi Digunakan dalam Bahasa Thai?</strong>
    <ol>
      <li><strong>Akhir Kalimat / Jeda Klausa:</strong> Sebagai pengganti tanda titik (.) atau koma (,).</li>
      <li><strong>Sebelum & Sesudah Angka:</strong> Contoh: มี 5 คน (Mii 5 khon = Ada 5 orang).</li>
      <li><strong>Nama Depan & Nama Belakang:</strong> Contoh: จัสมิน นารา (Jazmin Nara).</li>
      <li><strong>Di Sekitar Tanda Pengulangan (ๆ):</strong> Contoh: บ่อย ๆ (Boi-boi = Sering-sering).</li>
    </ol>
  </div>
</div>
"""
        },

        29: {
            "title": "Teknik Pemisahan Suku Kata (Syllable Segmentation)",
            "tag": "Materi [12]",
            "icon": "✂️",
            "summary": "Strategi memotong kalimat rapat menjadi kata dan suku kata mandiri berdasarkan pola konsonan awal, vokal, dan akhiran.",
            "keyPoints": [
                "Kenali posisi vokal sebagai jangkar patokan (vokal depan menandakan awal kata)",
                "Analisis pola V + K + K (Vokal, Konsonan Awal, Konsonan Akhir)",
                "Latihan memenggal kalimat tanpa spasi dengan lancar"
            ],
            "thaiSample": {"thai": "ภาษาไทยไม่ยาก", "rtgs": "phaa-saa-thai / mai / yaak", "meaning": "Bahasa Thai tidak susah"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 Rumus Memenggal Kata Rapat</h3>
  <p>Perhatikan contoh kalimat rapat: <strong>ภาษาไทยไม่ยาก</strong></p>
  <ol>
    <li>Langkah 1: Temukan vokal depan <strong>ไ-</strong> -> menandakan kata baru <strong>ไทย (thai)</strong>.</li>
    <li>Langkah 2: Temukan vokal depan <strong>ไม-</strong> -> kata <strong>ไม่ (mai = tidak)</strong>.</li>
    <li>Langkah 3: Tersisa suku kata depan <strong>ภาษา (phaa-saa)</strong> dan suku kata belakang <strong>ยาก (yaak = sulit)</strong>.</li>
    <li>Hasil pemenggalan: <strong>ภาษาไทย | ไม่ | ยาก</strong> = <em>Bahasa Thai tidak susah</em>!</li>
  </ol>
</div>
"""
        },

        30: {
            "title": "Game Pemisahan Suku Kata (Versi A)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Latihan memenggal 5 frasa sehari-hari yang ditulis tanpa spasi menjadi kata-kata penyusunnya.",
            "keyPoints": ["Latihan potong kata pemula", "Mendeteksi vokal jangkar"],
            "thaiSample": {"thai": "ไปกินข้าวกัน", "rtgs": "bpai / kin / khaao / gan", "meaning": "Ayo pergi makan nasi bersama"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎮 Penggalan Kata Harian</h3><p>Frasa <strong>ไปกินข้าวกัน</strong> dipenggal menjadi: <strong>ไป (pergi) | กิน (makan) | ข้าว (nasi) | กัน (bersama)</strong>.</p></div>"
        },

        31: {
            "title": "Game Pemisahan Suku Kata (Versi B)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Latihan tingkat lanjut memenggal kalimat panjang penutup Part I sebelum memasuki kaidah sistem nada.",
            "keyPoints": ["Pemisahan kalimat utuh", "Evaluasi akhir Part I"],
            "thaiSample": {"thai": "ยินดีที่ได้รู้จักครับ", "rtgs": "yin-dii / thii / dai / ruu-jak / khrap", "meaning": "Senang berkenalan dengan Anda"},
            "contentHtml": "<div class='lesson-content-block'><h3>🏆 Kelulusan Part I: Memenggal Kalimat Perkenalan</h3><p>Kalimat <strong>ยินดีที่ได้รู้จักครับ</strong> dipenggal menjadi: <strong>ยินดี (senang) | ที่ได้ (bisa/berkesempatan) | รู้จัก (mengenal) | ครับ (partikel sopan)</strong>.</p></div>"
        }
    }

print("Part 1 content helper defined.")

