/* JAZMI NARA - COMPLETE WRITTEN CURRICULUM (PARTS I - IV • 119 MODULES • MATERI 01-90)
 * Pure Written Learning Content with Interactive Audio & Writing Worksheets.
 * No YouTube videos, no iframes, no video player dependencies.
 */
const JAZMI_CURRICULUM_DATA = [
  {
    "part": 1,
    "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
    "moduleCount": 31,
    "lessons": [
      {
        "globalIndex": 1,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-001",
        "lessonNumber": 1,
        "title": "Mengenal 44 Aksara Konsonan Thai (พยัญชนะไทย)",
        "tag": "Materi [01]",
        "badgeClass": "badge-lesson",
        "icon": "🔤",
        "isGame": false,
        "summary": "Pengantar 44 konsonan aksara Thai, pembagian 3 kelas (Tengah, Tinggi, Rendah), dan fungsi nama benda acuan.",
        "keyPoints": [
          "44 konsonan terbagi menjadi 3 kelas: Tengah (9), Tinggi (11), dan Rendah (24)",
          "Setiap konsonan dipasangkan dengan nama benda acuan untuk membedakan huruf berbunyi sama",
          "Kelas konsonan merupakan faktor paling krusial penentu nada (tone)"
        ],
        "thaiSample": {
          "thai": "ก ไก่",
          "rtgs": "ko kai",
          "meaning": "Ayam (Konsonan Tengah)"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 Tujuan Pembelajaran</h3>\n  <p>Memahami struktur dasar 44 konsonan aksara Thai, fungsi nama acuan benda, serta alasan krusial mengapa konsonan dikelompokkan ke dalam 3 kelas (Tengah, Tinggi, dan Rendah).</p>\n\n  <h3>📖 Mengapa Aksara Thai Punya 44 Konsonan?</h3>\n  <p>Bahasa Thai memiliki banyak konsonan yang menghasilkan bunyi fonetik serupa saat berdiri di awal suku kata (misalnya ada 4 huruf 's', 6 huruf 'th', dan 5 huruf 'k'). Alasan keberadaan banyak huruf ini adalah <strong>Sistem Nada (Tone)</strong>.</p>\n  <p>Huruf-huruf tersebut berasal dari <strong>kelas konsonan yang berbeda</strong>. Ketika dikombinasikan dengan vokal yang sama, kelas konsonan yang berbeda akan menghasilkan nada pengucapan yang berbeda!</p>\n\n  <div class=\"rule-box\">\n    <strong>3 Kelas Konsonan Thai (ไตรยางศ์ - Traiyang):</strong>\n    <ul>\n      <li>🟢 <strong>Konsonan Tengah (9 aksara):</strong> ก จ ด ต บ ป อ ฎ ฏ</li>\n      <li>🟡 <strong>Konsonan Tinggi (11 aksara):</strong> ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห</li>\n      <li>🔴 <strong>Konsonan Rendah (24 aksara):</strong> ค ฅ ฆ ง ช ซ ฌ ญ ฑ ฒ ณ ท ธ น พ ฟ ภ ม ย ร ล ว ฬ ฮ</li>\n    </ul>\n  </div>\n\n  <h3>📊 14 Konsonan Paling Sering Digunakan Sehari-hari</h3>\n  <div class=\"table-responsive\">\n    <table class=\"lesson-table\">\n      <thead>\n        <tr>\n          <th>Huruf</th>\n          <th>Nama Acuan</th>\n          <th>Bunyi Awal / Akhir</th>\n          <th>Kelas</th>\n          <th>Arti Acuan</th>\n          <th>Audio</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td><strong class=\"thai-char\">ก</strong></td><td>ก ไก่ (ko kai)</td><td>k / k</td><td><span class=\"badge-mid\">Tengah</span></td><td>Ayam</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ก ไก่')\">🔊 Dengar</button></td></tr>\n        <tr><td><strong class=\"thai-char\">ข</strong></td><td>ข ไข่ (kho khai)</td><td>kh / k</td><td><span class=\"badge-high\">Tinggi</span></td><td>Telur</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ข ไข่')\">🔊 Dengar</button></td></tr>\n        <tr><td><strong class=\"thai-char\">ค</strong></td><td>ค ควาย (kho khwai)</td><td>kh / k</td><td><span class=\"badge-low\">Rendah</span></td><td>Kerbau</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ค ควาย')\">🔊 Dengar</button></td></tr>\n        <tr><td><strong class=\"thai-char\">ง</strong></td><td>ง งู (ngo ngu)</td><td>ng / ng</td><td><span class=\"badge-low\">Rendah</span></td><td>Ular</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ง งู')\">🔊 Dengar</button></td></tr>\n        <tr><td><strong class=\"thai-char\">จ</strong></td><td>จ จาน (jo jaan)</td><td>j / t</td><td><span class=\"badge-mid\">Tengah</span></td><td>Piring</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('จ จาน')\">🔊 Dengar</button></td></tr>\n        <tr><td><strong class=\"thai-char\">ช</strong></td><td>ช ช้าง (cho chaang)</td><td>ch / t</td><td><span class=\"badge-low\">Rendah</span></td><td>Gajah</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ช ช้าง')\">🔊 Dengar</button></td></tr>\n        <tr><td><strong class=\"thai-char\">ด</strong></td><td>ด เด็ก (do dek)</td><td>d / t</td><td><span class=\"badge-mid\">Tengah</span></td><td>Anak-anak</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ด เด็ก')\">🔊 Dengar</button></td></tr>\n        <tr><td><strong class=\"thai-char\">ต</strong></td><td>ต เต่า (to tao)</td><td>t / t</td><td><span class=\"badge-mid\">Tengah</span></td><td>Kura-kura</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ต เต่า')\">🔊 Dengar</button></td></tr>\n        <tr><td><strong class=\"thai-char\">น</strong></td><td>น หนู (no nu)</td><td>n / n</td><td><span class=\"badge-low\">Rendah</span></td><td>Tikus</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('น หนู')\">🔊 Dengar</button></td></tr>\n        <tr><td><strong class=\"thai-char\">บ</strong></td><td>บ ใบไม้ (bo bai-mai)</td><td>b / p</td><td><span class=\"badge-mid\">Tengah</span></td><td>Daun</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('บ ใบไม้')\">🔊 Dengar</button></td></tr>\n        <tr><td><strong class=\"thai-char\">ป</strong></td><td>ป ปลา (bpo bplaa)</td><td>bp / p</td><td><span class=\"badge-mid\">Tengah</span></td><td>Ikan</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ป ปลา')\">🔊 Dengar</button></td></tr>\n        <tr><td><strong class=\"thai-char\">ม</strong></td><td>ม ม้า (mo maa)</td><td>m / m</td><td><span class=\"badge-low\">Rendah</span></td><td>Kuda</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ม ม้า')\">🔊 Dengar</button></td></tr>\n        <tr><td><strong class=\"thai-char\">ห</strong></td><td>ห หีบ (ho heep)</td><td>h / -</td><td><span class=\"badge-high\">Tinggi</span></td><td>Peti</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ห หีบ')\">🔊 Dengar</button></td></tr>\n        <tr><td><strong class=\"thai-char\">อ</strong></td><td>อ อ่าง (o aang)</td><td>vokal / -</td><td><span class=\"badge-mid\">Tengah</span></td><td>Baskom air</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('อ อ่าง')\">🔊 Dengar</button></td></tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"fairy-tip\">\n    💡 <strong>Fairy Note:</strong> Huruf <strong>อ (O Aang)</strong> bertindak sebagai 'pembawa vokal' ketika suatu suku kata berawalan bunyi vokal murni (seperti kata 'Ayam', 'Ibu', 'Obat').\n  </div>\n</div>"
      },
      {
        "globalIndex": 2,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-002",
        "lessonNumber": 2,
        "title": "Tata Cara Menulis Aksara Konsonan Thai (Stroke Order)",
        "tag": "Materi [02]",
        "badgeClass": "badge-lesson",
        "icon": "✍️",
        "isGame": false,
        "summary": "Kaidah arah goresan aksara Thai: selalu mulai dari lingkaran kepala (หัว) dan tulis tanpa mengangkat pena.",
        "keyPoints": [
          "Mulai selalu dari lingkaran kepala (หัว - hua)",
          "Tulis garis badan kontinu dalam satu tarikan napas",
          "Hanya ada 2 huruf tanpa kepala: ก (Ko Kai) dan ธ (Tho Thong)"
        ],
        "thaiSample": {
          "thai": "เขียนอักษรไทย",
          "rtgs": "khian ak-sorn thai",
          "meaning": "Menulis aksara Thai"
        },
        "worksheet": {
          "title": "Lembar Latihan Menulis 44 Konsonan Thai (PDF)",
          "file": "materials/lembar_menulis_konsonan_thai.pdf",
          "size": "2.4 MB"
        },
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 Tujuan Pembelajaran</h3>\n  <p>Menguasai arah goresan (stroke order) aksara Thai agar tulisan proporsional, rapi, dan mudah dikenali oleh penutur asli.</p>\n\n  <h3>✍️ Aturan Emas Goresan Tangan</h3>\n  <div class=\"rule-box\">\n    <ol>\n      <li><strong>Mulai Dari Lingkaran Kepala (หัว - Hua):</strong> Jika huruf memiliki bulatan kecil, letakkan pena di sana terlebih dahulu, putar melingkar searah atau berlawanan arah jarum jam, lalu lanjutkan ke badan huruf.</li>\n      <li><strong>Satu Goresan Berkesinambungan:</strong> Usahakan tidak mengangkat pena sampai huruf selesai ditulis.</li>\n      <li><strong>Perhatikan Tinggi Ekor:</strong> Huruf seperti ป (Bpo Bplaa), ฝ (Fo Fa), dan ฟ (Fo Fan) memiliki garis ekor yang menjulang lebih tinggi melampaui garis kepala huruf.</li>\n    </ol>\n  </div>\n\n  <div class=\"download-card-inline\">\n    <div style=\"font-size:24px;\">📄</div>\n    <div>\n      <div style=\"font-weight:700; color:var(--text);\">Lembar Kerja Menulis Konsonan:</div>\n      <div style=\"font-size:12px; color:var(--text-muted);\">Gunakan lembar grid panduan resmi untuk melatih goresan tangan Anda.</div>\n    </div>\n    <div style=\"display:flex; gap:8px; margin-left:auto; flex-wrap:wrap;\">\n      <a href=\"/materials/lembar_menulis_konsonan_thai.pdf\" download class=\"btn-stimuler-primary\" style=\"text-decoration:none;\">📄 Unduh PDF ↓</a>\n      <a href=\"/materials/lembar_menulis_konsonan_thai.jpg\" target=\"_blank\" class=\"btn-subtle-nav\" style=\"text-decoration:none; display:inline-flex; align-items:center;\">🖼️ Buka JPG ↗</a>\n    </div>\n  </div>\n\n  <div style=\"margin:18px 0; border:1px solid var(--border); border-radius:var(--radius-lg); overflow:hidden; background:#ffffff; text-align:center; box-shadow:0 4px 14px rgba(0,0,0,0.25);\">\n    <div style=\"padding:8px 14px; background:#f1f5f9; color:#475569; font-size:12px; font-weight:700; border-bottom:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center;\">\n      <span>👁️ Pratinjau Lembar Menulis 44 Konsonan:</span>\n      <a href=\"/materials/lembar_menulis_konsonan_thai.jpg\" target=\"_blank\" style=\"color:#0284c7; text-decoration:none; font-size:11px;\">Buka Ukuran Penuh ↗</a>\n    </div>\n    <img src=\"/materials/lembar_menulis_konsonan_thai.jpg\" alt=\"Lembar Latihan Menulis Konsonan Thai\" style=\"max-width:100%; height:auto; display:block; margin:0 auto;\" loading=\"lazy\">\n  </div>\n</div>"
      },
      {
        "globalIndex": 3,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-003",
        "lessonNumber": 3,
        "title": "Konsonan Aktif dan Pasif dalam Bahasa Thai Modern",
        "tag": "Materi [03]",
        "badgeClass": "badge-lesson",
        "icon": "📜",
        "isGame": false,
        "summary": "Mengenal 2 konsonan kuno yang sudah tidak lagi dipakai dalam teks modern (ฃ dan ฅ) beserta huruf penggantinya.",
        "keyPoints": [
          "2 konsonan usang: ฃ (Kho Khuat) dan ฅ (Kho Khon)",
          "Tersisa 42 konsonan aktif yang dipakai dalam kehidupan sehari-hari",
          "Kedua huruf tetap diajarkan dalam urutan alfabet resmi untuk menjaga warisan budaya"
        ],
        "thaiSample": {
          "thai": "ขวด / คน",
          "rtgs": "khuat / khon",
          "meaning": "Botol / Orang"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 Tujuan Pembelajaran</h3>\n  <p>Mengetahui status 44 konsonan dan memahami mengapa 2 konsonan sudah tidak lagi dicetak pada koran, buku teks, maupun keyboard modern.</p>\n\n  <div class=\"table-responsive\">\n    <table class=\"lesson-table\">\n      <thead><tr><th>Konsonan Usang</th><th>Nama Kuno</th><th>Pengganti Modern</th><th>Contoh Kata Sekarang</th></tr></thead>\n      <tbody>\n        <tr><td><strong class=\"thai-char\" style=\"opacity:0.35;\">ฃ</strong></td><td>ฃ ขวด (kho khuat)</td><td><strong class=\"thai-char\">ข</strong> (Kho Khai)</td><td>ขวด (khuat = botol)</td></tr>\n        <tr><td><strong class=\"thai-char\" style=\"opacity:0.35;\">ฅ</strong></td><td>ฅ คน (kho khon)</td><td><strong class=\"thai-char\">ค</strong> (Kho Khwai)</td><td>คน (khon = orang)</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>"
      },
      {
        "globalIndex": 4,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-004",
        "lessonNumber": 4,
        "title": "Tips & Jembatan Keledai Menghafal 44 Konsonan Thai",
        "tag": "Materi [04]",
        "badgeClass": "badge-lesson",
        "icon": "🧠",
        "isGame": false,
        "summary": "Metode mnemonik legendaris sekolah Thailand untuk menguasai pengelompokan 3 kelas konsonan dengan mudah.",
        "keyPoints": [
          "Mnemonik Konsonan Tengah: ไก่จิกเด็กตายบนปากโอ่ง (9 aksara)",
          "Mnemonik Konsonan Tinggi: ผีฝากถุงข้าวสารให้ฉัน (11 aksara)",
          "Sistem eliminasi: Konsonan sisanya otomatis masuk ke Konsonan Rendah (24 aksara)"
        ],
        "thaiSample": {
          "thai": "ไก่จิกเด็กตายบนปากโอ่ง",
          "rtgs": "gai jik dek tai bon bpak ong",
          "meaning": "Mnemonik 9 Konsonan Tengah"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 Tujuan Pembelajaran</h3>\n  <p>Menguasai metode mnemonik anak sekolah Thailand untuk mengidentifikasi kelas konsonan dalam waktu kurang dari 5 detik.</p>\n\n  <div class=\"rule-box\">\n    <strong>1. Konsonan Tengah (9 Aksara):</strong><br>\n    <span style=\"font-size:16px; font-weight:800; color:var(--primary);\">ไก่ จิก เด็ก ตาย บน ปาก โอ่ง</span><br>\n    <em>(Ayam mematuk anak mati di atas tempayan mulut lebar)</em><br>\n    ก (Gai) • จ (Jik) • ด & ฎ (Dek) • ต & ฏ (Tai) • บ (Bon) • ป (Bpak) • อ (Ong).\n  </div>\n\n  <div class=\"rule-box\" style=\"margin-top:14px;\">\n    <strong>2. Konsonan Tinggi (11 Aksara):</strong><br>\n    <span style=\"font-size:16px; font-weight:800; color:var(--amber);\">ผี ฝาก ถุง ข้าว สาร ให้ ฉัน</span><br>\n    <em>(Hantu menitipkan sekantong beras putih padaku)</em><br>\n    ผ (Phii) • ฝ (Faak) • ถ & ฐ (Thung) • ข & ฃ (Khaao) • ส, ศ, ษ (Saan) • ห (Hai) • ฉ (Chan).\n  </div>\n</div>"
      },
      {
        "globalIndex": 5,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-005",
        "lessonNumber": null,
        "title": "Kuis & Game Menebak Konsonan Thai (Versi A)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Uji ingatan Anda dalam mengenali 10 konsonan frekuensi tinggi pertama dan pengelompokan kelasnya.",
        "keyPoints": [
          "Tebak nama acuan konsonan",
          "Tentukan kelas konsonan (Tengah / Tinggi / Rendah)",
          "Audio verifikasi penutur asli"
        ],
        "thaiSample": {
          "thai": "ก, จ, ด, ต, บ, ป, อ",
          "rtgs": "k, j, d, t, b, bp, o",
          "meaning": "Konsonan Tengah"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎮 Latihan & Evaluasi Mandiri: Tebak Konsonan (Versi A)</h3>\n  <p>Uji pemahaman Anda terhadap aksara yang telah dipelajari:</p>\n\n  <details class=\"practice-box\"><summary>Soal 1: Huruf ก (Ko Kai) masuk ke dalam kelas apa?</summary><p><strong>Jawaban:</strong> Konsonan Tengah (ไก่ - Gai).</p></details>\n  <details class=\"practice-box\"><summary>Soal 2: Apa nama acuan dari huruf ข?</summary><p><strong>Jawaban:</strong> ข ไข่ (Kho Khai = Telur) - Konsonan Tinggi.</p></details>\n  <details class=\"practice-box\"><summary>Soal 3: Huruf apa yang berarti 'Gajah' dan masuk kelas rendah?</summary><p><strong>Jawaban:</strong> ช ช้าง (Cho Chaang) - Konsonan Rendah.</p></details>\n</div>"
      },
      {
        "globalIndex": 6,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-006",
        "lessonNumber": null,
        "title": "Kuis & Game Menebak Konsonan Thai (Versi B)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Latihan membedakan konsonan berwujud mirip seperti ด (Do Dek) vs ต (To Tao) dan บ (Bo) vs ป (Bpo).",
        "keyPoints": [
          "Identifikasi lekukan kepala pada ต (To Tao)",
          "Identifikasi panjang ekor pada ป (Bpo Bplaa)",
          "Pencegahan salah baca pada huruf serupa"
        ],
        "thaiSample": {
          "thai": "ด / ต , บ / ป",
          "rtgs": "do/to , bo/bpo",
          "meaning": "Pasangan Huruf Mirip"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎮 Bedah Pasangan Huruf Serupa</h3>\n  <p>Perhatikan perbedaan lekukan dan ekor huruf berikut:</p>\n  <ul>\n    <li><strong>ด (Do Dek)</strong> kepalanya bundar mulus vs <strong>ต (To Tao)</strong> kepalanya memiliki lekukan patah di atas.</li>\n    <li><strong>บ (Bo Bai-mai)</strong> ekornya pendek rata vs <strong>ป (Bpo Bplaa)</strong> ekornya panjang menjulang ke atas.</li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 7,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-007",
        "lessonNumber": null,
        "title": "Kuis & Game Menebak Konsonan Thai (Versi C)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Fokus pada konsonan kelas tinggi (ผ, ฝ, ถ, ข, ส, ห) dan latihan membedakan ผ vs พ.",
        "keyPoints": [
          "Perbedaan arah goresan kepala ke dalam vs ke luar",
          "Membedakan bunyi aspirasi tinggi vs rendah"
        ],
        "thaiSample": {
          "thai": "ผ / พ",
          "rtgs": "pho phueng / pho phan",
          "meaning": "Lebah (Tinggi) vs Nampan (Rendah)"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎮 Membedakan Kepala Masuk vs Keluar</h3><p>Huruf <strong>ผ (Pho Phueng)</strong> lingkaran kepalanya menghadap ke dalam (Konsonan Tinggi), sedangkan <strong>พ (Pho Phan)</strong> lingkaran kepalanya menghadap ke luar (Konsonan Rendah).</p></div>"
      },
      {
        "globalIndex": 8,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-008",
        "lessonNumber": null,
        "title": "Kuis & Game Menebak Konsonan Thai (Versi D)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Latihan mengenal konsonan aksara pelengkap: ฎ, ฏ, ฐ, ฑ, ฒ, ณ yang sering muncul pada kata serapan resmi.",
        "keyPoints": [
          "Aksara resmi kerajaan dan kitab suci",
          "Konsonan berekor bawah"
        ],
        "thaiSample": {
          "thai": "ฎ, ฏ, ฐ",
          "rtgs": "do, to, tho",
          "meaning": "Konsonan Tradisional"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>📖 Karakter Aksara Klasik</h3><p>Konsonan seperti ฎ (Do Cha-da = Mahkota) dan ฏ (To Pa-tak = Tombak) memiliki ekor meliuk di bagian bawah garis dasar buku.</p></div>"
      },
      {
        "globalIndex": 9,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-009",
        "lessonNumber": null,
        "title": "Kuis Evaluasi Akhir 44 Konsonan Thai (Versi E / Final)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🏆",
        "isGame": true,
        "summary": "Ujian kelulusan pengenalan 44 konsonan sebelum melangkah ke materi vokal dan aturan membaca.",
        "keyPoints": [
          "Evaluasi 44 aksara lengkap",
          "Kecepatan identifikasi kelas",
          "Kesiapan masuk materi vokal"
        ],
        "thaiSample": {
          "thai": "ครบ 44 ตัว",
          "rtgs": "khrop sii-sip-sii dtua",
          "meaning": "Lengkap 44 Huruf"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🏆 Ujian Kelulusan Konsonan</h3><p>Selamat! Jika Anda sudah dapat mengenali minimal 30 konsonan utama beserta kelasnya, Anda sudah sangat siap melangkah ke materi vokal!</p></div>"
      },
      {
        "globalIndex": 10,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-010",
        "lessonNumber": 5,
        "title": "Mengenal Aksara Vokal Thai (สระ - Sara)",
        "tag": "Materi [05]",
        "badgeClass": "badge-lesson",
        "icon": "🎵",
        "isGame": false,
        "summary": "Sistem 32 vokal Thai: pembagian vokal pendek vs panjang, serta posisi vokal di atas, bawah, depan, atau belakang konsonan.",
        "keyPoints": [
          "Vokal Thai berpasangan: Vokal Pendek (สั้น - san) dan Vokal Panjang (ยาว - yaao)",
          "Posisi vokal sangat fleksibel: depan (เ), belakang (า), atas (ิ), bawah (ุ), atau mengelilingi (เ-าะ)",
          "Huruf konsonan selalu diletakkan di posisi tanda strip (-)"
        ],
        "thaiSample": {
          "thai": "สระอะ / สระอา",
          "rtgs": "sara a / sara aa",
          "meaning": "Vokal Pendek 'a' vs Vokal Panjang 'aa'"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 Tujuan Pembelajaran</h3>\n  <p>Memahami konsep vokal berpasangan (pendek vs panjang) dan mengenali 5 posisi peletakan vokal terhadap konsonan utama.</p>\n\n  <h3>📊 9 Pasangan Vokal Dasar Bahasa Thai</h3>\n  <div class=\"table-responsive\">\n    <table class=\"lesson-table\">\n      <thead><tr><th>Vokal Pendek</th><th>Bunyi</th><th>Vokal Panjang</th><th>Bunyi</th><th>Posisi</th><th>Audio</th></tr></thead>\n      <tbody>\n        <tr><td>-ะ</td><td>a</td><td>-า</td><td>aa</td><td>Belakang konsonan</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('กะ กา')\">🔊 กะ / กา</button></td></tr>\n        <tr><td>-ิ</td><td>i</td><td>-ี</td><td>ii</td><td>Atas konsonan</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('กิ กี')\">🔊 กิ / กี</button></td></tr>\n        <tr><td>-ึ</td><td>ue (pendek)</td><td>-ื</td><td>uee (panjang)</td><td>Atas konsonan</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('กึ กือ')\">🔊 กึ / กือ</button></td></tr>\n        <tr><td>-ุ</td><td>u</td><td>-ู</td><td>uu</td><td>Bawah konsonan</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('กุ กู')\">🔊 กุ / กู</button></td></tr>\n        <tr><td>เ-ะ</td><td>e</td><td>เ-</td><td>ee</td><td>Depan konsonan</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('เกะ เก')\">🔊 เกะ / เก</button></td></tr>\n        <tr><td>แ-ะ</td><td>ae</td><td>แ-</td><td>aae</td><td>Depan konsonan</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('แกะ แก')\">🔊 แกะ / แก</button></td></tr>\n        <tr><td>โ-ะ</td><td>o</td><td>โ-</td><td>oo</td><td>Depan konsonan</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('โกะ โก')\">🔊 โกะ / โก</button></td></tr>\n        <tr><td>เ-าะ</td><td>aw (pendek)</td><td>-อ</td><td>aaw (panjang)</td><td>Mengelilingi</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('เกาะ กอ')\">🔊 เกาะ / กอ</button></td></tr>\n        <tr><td>เ-อะ</td><td>oe (pendek)</td><td>เ-อ</td><td>oee (panjang)</td><td>Mengelilingi</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('เกอะ เจอ')\">🔊 เกอะ / เจอ</button></td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>"
      },
      {
        "globalIndex": 11,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-011",
        "lessonNumber": 6,
        "title": "Tata Cara Menulis Aksara Vokal Thai (Stroke Order)",
        "tag": "Materi [06]",
        "badgeClass": "badge-lesson",
        "icon": "✍️",
        "isGame": false,
        "summary": "Panduan arah goresan menulis vokal atas, bawah, depan, dan vokal melingkar beserta lembar latihan PDF.",
        "keyPoints": [
          "Vokal depan (เ, แ, โ, ใ, ไ) selalu ditulis sebelum menulis konsonannya!",
          "Vokal atas dan bawah ditulis setelah konsonan selesai digoreskan",
          "Lembar grid latihan vokal tersedia untuk diunduh"
        ],
        "thaiSample": {
          "thai": "เขียนสระไทย",
          "rtgs": "khian sara thai",
          "meaning": "Menulis Vokal Thai"
        },
        "worksheet": {
          "title": "Lembar Latihan Menulis Vokal Thai (PDF)",
          "file": "materials/lembar_menulis_vokal_thai.pdf",
          "size": "2.0 MB"
        },
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>✍️ Urutan Menulis Kata Bervokal Depan</h3>\n  <p>Meskipun secara fonetik dibaca belakangan, vokal depan seperti <strong>เ- (Sara E)</strong> atau <strong>ไ- (Sara Ai)</strong> wajib dituliskan <strong>SEBELUM</strong> Anda menulis konsonan utamanya!</p>\n  <p>Contoh: Kata ไป (Bpai = Pergi) ditulis dengan membuat ไ terlebih dahulu, baru diikuti huruf ป.</p>\n\n  <div class=\"download-card-inline\">\n    <div style=\"font-size:24px;\">📄</div>\n    <div>\n      <div style=\"font-weight:700; color:var(--text);\">Lembar Kerja Menulis Vokal Thai:</div>\n      <div style=\"font-size:12px; color:var(--text-muted);\">Latih goresan vokal atas, bawah, depan, dan sekeliling dengan lembar panduan.</div>\n    </div>\n    <div style=\"display:flex; gap:8px; margin-left:auto; flex-wrap:wrap;\">\n      <a href=\"/materials/lembar_menulis_vokal_thai.pdf\" download class=\"btn-stimuler-primary\" style=\"text-decoration:none;\">📄 Unduh PDF ↓</a>\n      <a href=\"/materials/lembar_menulis_vokal_thai.jpg\" target=\"_blank\" class=\"btn-subtle-nav\" style=\"text-decoration:none; display:inline-flex; align-items:center;\">🖼️ Buka JPG ↗</a>\n    </div>\n  </div>\n\n  <div style=\"margin:18px 0; border:1px solid var(--border); border-radius:var(--radius-lg); overflow:hidden; background:#ffffff; text-align:center; box-shadow:0 4px 14px rgba(0,0,0,0.25);\">\n    <div style=\"padding:8px 14px; background:#f1f5f9; color:#475569; font-size:12px; font-weight:700; border-bottom:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center;\">\n      <span>👁️ Pratinjau Lembar Menulis Vokal Thai:</span>\n      <a href=\"/materials/lembar_menulis_vokal_thai.jpg\" target=\"_blank\" style=\"color:#0284c7; text-decoration:none; font-size:11px;\">Buka Ukuran Penuh ↗</a>\n    </div>\n    <img src=\"/materials/lembar_menulis_vokal_thai.jpg\" alt=\"Lembar Latihan Menulis Vokal Thai\" style=\"max-width:100%; height:auto; display:block; margin:0 auto;\" loading=\"lazy\">\n  </div>\n</div>"
      },
      {
        "globalIndex": 12,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-012",
        "lessonNumber": null,
        "title": "Game Melatinkan Kata (Versi A - Easy: Suku Kata Terbuka)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "📖",
        "isGame": true,
        "summary": "Latihan membaca kata dasar 1 suku kata tanpa akhiran (Konsonan + Vokal Panjang).",
        "keyPoints": [
          "Membaca kata bersuku kata terbuka",
          "Kombinasi konsonan tengah + vokal panjang"
        ],
        "thaiSample": {
          "thai": "กา, ตา, ปา, ดู, ไป",
          "rtgs": "gaa, dtaa, bpaa, duu, bpai",
          "meaning": "Burung gagak, Mata, Melempar, Melihat, Pergi"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>📖 Latihan Membaca Kata Mudah (Konsonan + Vokal)</h3>\n  <ul>\n    <li><strong class=\"thai-char\">กา</strong> (gaa) = Burung gagak / Ceret air <button class=\"btn-audio-mini\" onclick=\"speakThai('กา')\">🔊</button></li>\n    <li><strong class=\"thai-char\">ตา</strong> (dtaa) = Mata / Kakek dari pihak ibu <button class=\"btn-audio-mini\" onclick=\"speakThai('ตา')\">🔊</button></li>\n    <li><strong class=\"thai-char\">ดู</strong> (duu) = Melihat / Menonton <button class=\"btn-audio-mini\" onclick=\"speakThai('ดู')\">🔊</button></li>\n    <li><strong class=\"thai-char\">ไป</strong> (bpai) = Pergi <button class=\"btn-audio-mini\" onclick=\"speakThai('ไป')\">🔊</button></li>\n    <li><strong class=\"thai-char\">มา</strong> (maa) = Datang <button class=\"btn-audio-mini\" onclick=\"speakThai('มา')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 13,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-013",
        "lessonNumber": null,
        "title": "Game Melatinkan Kata (Versi B - Easy: Kata Harian)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "📖",
        "isGame": true,
        "summary": "Membaca kata-kata 2 suku kata sederhana dalam kehidupan sehari-hari.",
        "keyPoints": [
          "Kata dua suku kata terbuka",
          "Latihan intonasi nada netral"
        ],
        "thaiSample": {
          "thai": "เวลา, ราคา, อีกา",
          "rtgs": "wee-laa, raa-khaa, ii-gaa",
          "meaning": "Waktu, Harga, Burung gagak"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>📖 Latihan Membaca Kata 2 Suku Kata</h3>\n  <ul>\n    <li><strong class=\"thai-char\">เวลา</strong> (wee-laa) = Waktu <button class=\"btn-audio-mini\" onclick=\"speakThai('เวลา')\">🔊</button></li>\n    <li><strong class=\"thai-char\">ราคา</strong> (raa-khaa) = Harga <button class=\"btn-audio-mini\" onclick=\"speakThai('ราคา')\">🔊</button></li>\n    <li><strong class=\"thai-char\">นาที</strong> (naa-thii) = Menit <button class=\"btn-audio-mini\" onclick=\"speakThai('นาที')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 14,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-014",
        "lessonNumber": 7,
        "title": "Perubahan Bunyi Konsonan Akhir (8 Matra ตัวสะกด)",
        "tag": "Materi [07]",
        "badgeClass": "badge-lesson",
        "icon": "🔄",
        "isGame": false,
        "summary": "Kaidah krusial 8 Matra bunyi konsonan akhir dalam bahasa Thai: Kok, Kot, Kob, Kon, Kom, Kong, Koei, dan Koew.",
        "keyPoints": [
          "44 konsonan saat berada di akhir kata hanya dilebur menjadi 8 kelompok bunyi matra!",
          "Matra Letup Buntu (Mati): Kok (-k), Kot (-t), Kob (-p)",
          "Matra Sengau / Luncur (Hidup): Kon (-n), Kom (-m), Kong (-ng), Koei (-y), Koew (-w)"
        ],
        "thaiSample": {
          "thai": "มาตราตัวสะกด",
          "rtgs": "maat-dtraa dtua sa-got",
          "meaning": "Kaidah Konsonan Akhir (8 Matra)"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 Tujuan Pembelajaran</h3>\n  <p>Memahami bagaimana 44 konsonan mengalami perubahan bunyi ketika berperan sebagai konsonan penutup suku kata (ตัวสะกด - dtua sa-got).</p>\n\n  <h3>📊 Tabel 8 Matra Konsonan Akhir</h3>\n  <div class=\"table-responsive\">\n    <table class=\"lesson-table\">\n      <thead><tr><th>Nama Matra</th><th>Bunyi Akhir</th><th>Huruf Anggota</th><th>Contoh Kata</th><th>Arti</th><th>Audio</th></tr></thead>\n      <tbody>\n        <tr><td><strong>Mae Kok (แม่กก)</strong></td><td>-K (buntu)</td><td>ก, ข, ค, ฆ</td><td>รัก (rak) / เมฆ (meek)</td><td>Cinta / Awan</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('รัก')\">🔊</button></td></tr>\n        <tr><td><strong>Mae Kot (แม่กด)</strong></td><td>-T (buntu)</td><td>ด, ต, จ, ช, ซ, ฎ, ฏ, ฐ, ฑ, ฒ, ศ, ษ, ส</td><td>บาท (baat) / รส (rot)</td><td>Baht / Rasa</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('บาท')\">🔊</button></td></tr>\n        <tr><td><strong>Mae Kob (แม่กบ)</strong></td><td>-P (buntu)</td><td>บ, ป, พ, ฟ, ภ</td><td>ภาพ (phaap) / รูป (ruup)</td><td>Gambar / Foto</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ภาพ')\">🔊</button></td></tr>\n        <tr><td><strong>Mae Kon (แม่กน)</strong></td><td>-N (sengau)</td><td>น, ณ, ญ, ร, ล, ฬ</td><td>อาหาร (aa-haan) / การ (gaan)</td><td>Makanan / Urusan</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('อาหาร')\">🔊</button></td></tr>\n        <tr><td><strong>Mae Kom (แม่กม)</strong></td><td>-M</td><td>ม</td><td>ส้ม (som) / ผม (phom)</td><td>Jeruk / Saya</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ส้ม')\">🔊</button></td></tr>\n        <tr><td><strong>Mae Kong (แม่กง)</strong></td><td>-NG</td><td>ง</td><td>ช้าง (chaang) / กุ้ง (gung)</td><td>Gajah / Udang</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ช้าง')\">🔊</button></td></tr>\n        <tr><td><strong>Mae Koei (แม่เกย)</strong></td><td>-Y</td><td>ย</td><td>สวย (suai) / ขาย (khaai)</td><td>Cantik / Jual</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('สวย')\">🔊</button></td></tr>\n        <tr><td><strong>Mae Koew (แม่เกิร์ว)</strong></td><td>-W</td><td>ว</td><td>ข้าว (khaao) / แมว (maaeo)</td><td>Nasi / Kucing</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ข้าว')\">🔊</button></td></tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"fairy-tip\">\n    💡 <strong>Perhatikan Khusus Mae Kon:</strong> Huruf <strong>ร (R)</strong> dan <strong>ล (L)</strong> jika berada di AKHIR kata selalu dibaca sebagai <strong>-N</strong>! Contoh: อาหาร dibaca <em>aa-haan</em>, bukan aa-haar!\n  </div>\n</div>"
      },
      {
        "globalIndex": 15,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-015",
        "lessonNumber": null,
        "title": "Game Perubahan Bunyi Konsonan Akhir (Versi A)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Latihan mengenali bunyi akhir dari kata-kata dengan huruf akhiran tidak biasa seperti ร, ล, ส, จ.",
        "keyPoints": [
          "Identifikasi matra kata nyata",
          "Menguji pemahaman Mae Kon dan Mae Kot"
        ],
        "thaiSample": {
          "thai": "อาหาร, รถ, ภาพ",
          "rtgs": "aa-haan, rot, phaap",
          "meaning": "Makanan (-n), Mobil (-t), Gambar (-p)"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎮 Kuis Matra Akhir</h3><details class='practice-box'><summary>Soal: Kata รถ (mobil) berakhiran huruf ถ. Bunyi akhir apakah yang terdengar?</summary><p><strong>Jawaban:</strong> Huruf ถ masuk ke dalam kelompok <strong>Mae Kot</strong> sehingga dibaca berakhiran bunyi <strong>-t</strong> (rot).</p></details></div>"
      },
      {
        "globalIndex": 16,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-016",
        "lessonNumber": null,
        "title": "Game Perubahan Bunyi Konsonan Akhir (Versi B)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Latihan tingkat lanjut menganalisis konsonan akhir pada kata serapan Sansekerta dan Inggris.",
        "keyPoints": [
          "Kata serapan asing",
          "Kaidah matra pada nama orang dan tempat"
        ],
        "thaiSample": {
          "thai": "ฟุตบอล",
          "rtgs": "fut-bawn",
          "meaning": "Sepak Bola (akhiran -n)"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎮 Mengapa Football dibaca Fut-bawn?</h3><p>Dalam bahasa Thai, kata 'football' dieja ฟุตบอล. Karena huruf ล di akhir kata masuk ke dalam <strong>Mae Kon</strong>, maka penutur Thai melafalkannya menjadi <em>fut-bawn</em>.</p></div>"
      },
      {
        "globalIndex": 17,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-017",
        "lessonNumber": 8,
        "title": "Perubahan Bentuk Vokal Saat Memiliki Konsonan Akhir",
        "tag": "Materi [08]",
        "badgeClass": "badge-lesson",
        "icon": "✨",
        "isGame": false,
        "summary": "Transformasi wujud vokal: Sara Ah (ะ) menjadi Mai Han-Akat ( ั ), Sara Oh tersembunyi, dan pemendekan vokal Mai Taikhu.",
        "keyPoints": [
          "Vokal -ะ berubah menjadi Mai Han-Akat ( ั ) di atas konsonan saat ada akhiran: ก + ะ + บ = กับ",
          "Vokal โ-ะ menghilang total (vokal tak kasat mata): ร + โ-ะ + ถ = รถ",
          "Vokal เ-ะ dan แ-ะ berubah menjadi tanda Mai Taikhu (เ-็ dan แ-็)"
        ],
        "thaiSample": {
          "thai": "กับ, รถ, คน, เป็ด",
          "rtgs": "gap, rot, khon, bpet",
          "meaning": "Dengan, Mobil, Orang, Bebek"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 Fenomena Perubahan Bentuk Vokal (ลดรูป / เปลี่ยนรูป)</h3>\n  <p>Dalam aksara Thai, beberapa vokal akan <strong>berubah wujud</strong> atau bahkan <strong>menghilang sama sekali</strong> ketika suku kata tersebut ditutup oleh konsonan akhir:</p>\n\n  <div class=\"rule-box\">\n    <ul>\n      <li><strong>1. Vokal -ะ -> Mai Han-Akat ( ั ):</strong><br>\n      Konsonan + ะ + Akhiran -> Konsonan + ั + Akhiran.<br>\n      Contoh: ก + ะ + บ = <strong>กับ (gap = dengan)</strong> • ว + ะ + น = <strong>วัน (wan = hari)</strong>.</li>\n      <li><strong>2. Vokal โ-ะ -> Lenyap Total (Vokal Tak Kasat Mata):</strong><br>\n      Jika Anda melihat dua konsonan berdampingan tanpa tanda vokal apa pun, di antara keduanya tersimpan vokal 'o' pendek!<br>\n      Contoh: ร + ถ = <strong>รถ (rot = mobil)</strong> • ค + น = <strong>คน (khon = orang)</strong>.</li>\n      <li><strong>3. Vokal เ-ะ -> Tanda Mai Taikhu (เ-็):</strong><br>\n      Contoh: ป + เ-ะ + ด = <strong>เป็ด (bpet = bebek)</strong>.</li>\n      <li><strong>4. Vokal ัว -> Kehilangan Mai Han-Akat:</strong><br>\n      Contoh: ก + ัว + น = <strong>กวน (guan = mengaduk)</strong>.</li>\n    </ul>\n  </div>\n</div>"
      },
      {
        "globalIndex": 18,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-018",
        "lessonNumber": null,
        "title": "Game Transformasi Bentuk Vokal (Versi A)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Uji kepekaan membaca kata-kata bervokal Mai Han-Akat dan vokal tersembunyi.",
        "keyPoints": [
          "Membaca kata ber-Mai Han-Akat",
          "Mendeteksi vokal 'o' tak kasat mata"
        ],
        "thaiSample": {
          "thai": "รัก, นก, ลม",
          "rtgs": "rak, nok, lom",
          "meaning": "Cinta, Burung, Angin"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎮 Tebak Vokal Tersembunyi</h3><p>Kata <strong>นก (nok = burung)</strong> dan <strong>ลม (lom = angin)</strong> sama-sama menyimpan vokal <em>o pendek (โ-ะ)</em> yang bentuk aslinya hilang karena adanya konsonan akhir.</p></div>"
      },
      {
        "globalIndex": 19,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-019",
        "lessonNumber": null,
        "title": "Game Transformasi Bentuk Vokal (Versi B)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Latihan mengurai kata ber-Mai Taikhu (เ-็) dan transformasi vokal majemuk.",
        "keyPoints": [
          "Kata ber-Mai Taikhu",
          "Sara Aw berakhiran"
        ],
        "thaiSample": {
          "thai": "เด็ก, เล็ก, ล็อก",
          "rtgs": "dek, lek, lok",
          "meaning": "Anak, Kecil, Mengunci"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎮 Membaca Kata dengan Mai Taikhu</h3><p>Kata <strong>เด็ก (dek = anak)</strong> dan <strong>เล็ก (lek = kecil)</strong> menggunakan tanda angka 8 kecil (Mai Taikhu ็) untuk menandakan bunyi vokal 'e' yang dibaca pendek.</p></div>"
      },
      {
        "globalIndex": 20,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-020",
        "lessonNumber": null,
        "title": "Game Melatinkan Kata (Versi A - Medium)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "📖",
        "isGame": true,
        "summary": "Latihan membaca kata tingkat menengah dengan gabungan konsonan awal, vokal berubah bentuk, dan konsonan akhir.",
        "keyPoints": [
          "Analisis 3 elemen kata",
          "Transliterasi mandiri"
        ],
        "thaiSample": {
          "thai": "ส้มตำ, พักผ่อน",
          "rtgs": "som-dtam, phak-phaawn",
          "meaning": "Som Tum, Beristirahat"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>📖 Latihan Membaca Kata Majemuk</h3><ul><li><strong>ส้มตำ (som-dtam):</strong> Salad pepaya khas Thailand.</li><li><strong>พักผ่อน (phak-phaawn):</strong> Beristirahat / bersantai.</li></ul></div>"
      },
      {
        "globalIndex": 21,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-021",
        "lessonNumber": null,
        "title": "Game Melatinkan Kata (Versi B - Medium)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "📖",
        "isGame": true,
        "summary": "Membaca kata menu makanan dan tempat umum di Thailand.",
        "keyPoints": [
          "Menu makanan populer",
          "Kosa kata transportasi"
        ],
        "thaiSample": {
          "thai": "ต้มยำกุ้ง, โรงแรม",
          "rtgs": "dtom-yam-gung, rong-raem",
          "meaning": "Tom Yum Goong, Hotel"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>📖 Kosakata Tempat & Kuliner Populer</h3><ul><li><strong>ต้มยำกุ้ง (dtom-yam-gung):</strong> Sup tom yum udang.</li><li><strong>โรงแรม (rong-raem):</strong> Hotel / Penginapan.</li></ul></div>"
      },
      {
        "globalIndex": 22,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-022",
        "lessonNumber": 9,
        "title": "Konsonan Klaster / Gabungan (อักษรควบ - Ak-sorn Khuap)",
        "tag": "Materi [09]",
        "badgeClass": "badge-lesson",
        "icon": "🔗",
        "isGame": false,
        "summary": "Kaidah membaca konsonan klaster: Klaster Sejati (ควบแท้) vs Klaster Palsu (ควบไม่แท้) di mana huruf ร berubah bunyi.",
        "keyPoints": [
          "Klaster Sejati: Konsonan awal digabung dengan ร, ล, ว dan dibaca meluncur bersamaan (contoh: ครู khruu, ปลา bplaa)",
          "Klaster Palsu: Huruf ทร berubah bunyi menjadi 'S' (contoh: ทราย saai = pasir)",
          "Huruf ร tidak dibaca pada kata tertentu seperti จริง (jing = benar)"
        ],
        "thaiSample": {
          "thai": "ครู, ปลา, จริง, ทราย",
          "rtgs": "khruu, bplaa, jing, saai",
          "meaning": "Guru, Ikan, Benar, Pasir"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 Tujuan Pembelajaran</h3>\n  <p>Membedakan konsonan gabungan yang dibaca serentak (Klaster Sejati) dengan konsonan gabungan yang bunyinya melebur (Klaster Palsu).</p>\n\n  <div class=\"rule-box\">\n    <strong>1. Klaster Sejati (ควบแท้):</strong><br>\n    Konsonan awal bergabung dengan <strong>ร, ล, ว</strong> dan dilafalkan serentak dalam satu hembusan napas:<br>\n    <ul>\n      <li>ครู (khruu) = Guru <button class=\"btn-audio-mini\" onclick=\"speakThai('ครู')\">🔊</button></li>\n      <li>ปลา (bplaa) = Ikan <button class=\"btn-audio-mini\" onclick=\"speakThai('ปลา')\">🔊</button></li>\n      <li>กวาง (gwaang) = Rusa <button class=\"btn-audio-mini\" onclick=\"speakThai('กวาง')\">🔊</button></li>\n    </ul>\n  </div>\n\n  <div class=\"rule-box\" style=\"margin-top:14px;\">\n    <strong>2. Klaster Palsu (ควบไม่แท้):</strong><br>\n    <ul>\n      <li><strong>Aturan 'ทร' -> 'S':</strong> Gabungan huruf <strong>ท + ร</strong> dibaca sebagai bunyi <strong>S</strong> murni!<br>\n      Contoh: ทราย dibaca <em>saai</em> (pasir), bukan thraai! • ทราบ dibaca <em>saap</em> (mengetahui).</li>\n      <li><strong>Huruf 'ร' Bisu:</strong> Pada kata จริง, huruf ร tidak berbunyi, dibaca murni <em>jing</em> (sungguh/benar).</li>\n    </ul>\n  </div>\n</div>"
      },
      {
        "globalIndex": 23,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-023",
        "lessonNumber": null,
        "title": "Game Konsonan Klaster (Versi A - Klaster Sejati)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Latihan membedakan pengucapan klaster ร vs ล (contoh: กราบ vs กลาง).",
        "keyPoints": [
          "Pengucapan klaster l dan r",
          "Artikulasi lidah yang bersih"
        ],
        "thaiSample": {
          "thai": "กราบ / กลาง",
          "rtgs": "graap / glaang",
          "meaning": "Sujud hormat / Di tengah"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎮 Latihan Klaster Sejati</h3><p>Latihlah artikulasi kata <strong>ครอบครัว (khraawp-khrua = keluarga)</strong> dan <strong>กล้าหาญ (glaa-haan = berani)</strong>.</p></div>"
      },
      {
        "globalIndex": 24,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-024",
        "lessonNumber": null,
        "title": "Game Konsonan Klaster (Versi B - Klaster Palsu & ทร)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Latihan mengidentifikasi kata berawalan ทร yang berbunyi 'S'.",
        "keyPoints": [
          "Pola kata ทร -> s",
          "Kata serapan beraksara ganda"
        ],
        "thaiSample": {
          "thai": "แทรก, ทรง, ทราบ",
          "rtgs": "saaek, song, saap",
          "meaning": "Menyisip, Bentuk, Mengetahui"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎮 Kata-Kata dengan Aturan ทร -> S</h3><ul><li><strong>แทรก</strong> dibaca <em>saaek</em> (menyisip).</li><li><strong>ทรงผม</strong> dibaca <em>song phom</em> (gaya rambut).</li><li><strong>ทราบ</strong> dibaca <em>saap</em> (tahu / mengerti).</li></ul></div>"
      },
      {
        "globalIndex": 25,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-025",
        "lessonNumber": 10,
        "title": "Vokal Kompleks & Kesalahan Umum Pembelajar",
        "tag": "Materi [10]",
        "badgeClass": "badge-lesson",
        "icon": "⚠️",
        "isGame": false,
        "summary": "Membedakan diftong (เีย, เือ, ัว) dan vokal khusus ฤ (rue) serta jebakan fonetik yang sering dialami pemula.",
        "keyPoints": [
          "Diftong 3 serangkai: -ia (เีย), -uea (เือ), -ua (ัว)",
          "Karakter vokal khusus Sanskrit: ฤ (rue / ri)",
          "Kesalahan umum: tertukar antara vokal depan tunggal vs diftong"
        ],
        "thaiSample": {
          "thai": "เรียน, เมือง, ตัว",
          "rtgs": "rian, mueang, dtua",
          "meaning": "Belajar, Kota, Diri/Badan"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 3 Diftong Utama Bahasa Thai</h3>\n  <div class=\"table-responsive\">\n    <table class=\"lesson-table\">\n      <thead><tr><th>Bentuk Vokal</th><th>Bunyi Fonetik</th><th>Contoh Kata</th><th>Arti</th><th>Audio</th></tr></thead>\n      <tbody>\n        <tr><td><strong>เ-ีย</strong></td><td>ia (panjang)</td><td>เรียน (rian)</td><td>Belajar</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('เรียน')\">🔊</button></td></tr>\n        <tr><td><strong>เ-ือ</strong></td><td>uea (panjang)</td><td>เมือง (mueang)</td><td>Kota / Negeri</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('เมือง')\">🔊</button></td></tr>\n        <tr><td><strong>-ัว</strong></td><td>ua (panjang)</td><td>ตัว (dtua)</td><td>Badan / Ekor hewan</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ตัว')\">🔊</button></td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>"
      },
      {
        "globalIndex": 26,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-026",
        "lessonNumber": null,
        "title": "Game Melatinkan Kata (Versi A - Hard)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🏆",
        "isGame": true,
        "summary": "Tantangan membaca kata kompleks dengan gabungan klaster, diftong, dan konsonan akhir ganda.",
        "keyPoints": [
          "Kata polisinonim",
          "Kaidah membaca tingkat mahir"
        ],
        "thaiSample": {
          "thai": "ประเทศ, สวัสดี",
          "rtgs": "bpra-theet, sa-wat-dii",
          "meaning": "Negara, Halo/Selamat"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🏆 Membaca Kata Kompleks</h3><p>Kata <strong>ประเทศ (bpra-theet = negara)</strong> menggabungkan konsonan klaster ปร, vokal เ-, dan konsonan akhir ศ yang masuk kelompok Mae Kot (dibaca -t).</p></div>"
      },
      {
        "globalIndex": 27,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-027",
        "lessonNumber": null,
        "title": "Game Melatinkan Kata (Versi B - Hard)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🏆",
        "isGame": true,
        "summary": "Membaca teks nama jalan, stasiun MRT/BTS di Bangkok, dan nama provinsi.",
        "keyPoints": [
          "Nama stasiun BTS/MRT",
          "Nama provinsi di Thailand"
        ],
        "thaiSample": {
          "thai": "สุขุมวิท, สยาม, เชียงใหม่",
          "rtgs": "su-khum-wit, sa-yaam, chiang-mai",
          "meaning": "Sukhumvit, Siam, Chiang Mai"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🏆 Membaca Rambu & Nama Tempat Populer</h3><ul><li><strong>สุขุมวิท (su-khum-wit):</strong> Sukhumvit Road.</li><li><strong>สยาม (sa-yaam):</strong> Siam Square / Siam.</li><li><strong>เชียงใหม่ (chiang-mai):</strong> Chiang Mai.</li></ul></div>"
      },
      {
        "globalIndex": 28,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-028",
        "lessonNumber": 11,
        "title": "Kaidah Penggunaan Spasi dalam Bahasa Thai",
        "tag": "Materi [11]",
        "badgeClass": "badge-lesson",
        "icon": "📏",
        "isGame": false,
        "summary": "Bahasa Thai tidak mengenal spasi antar kata! Pelajari fungsi spasi sebagai pengganti titik, koma, dan pemisah klausa.",
        "keyPoints": [
          "Kata-kata dalam kalimat Thai ditulis menyambung rapat tanpa spasi",
          "Spasi hanya digunakan sebagai tanda jeda kalimat, pergantian gagasan, atau jeda klausa",
          "Spasi juga digunakan di sebelum dan sesudah angka serta tanda pengulangan (ๆ)"
        ],
        "thaiSample": {
          "thai": "ผมกินข้าว และเขาดื่มน้ำ",
          "rtgs": "phom kin khaao  lae khao duum naam",
          "meaning": "Saya makan nasi [spasi jeda] dan dia minum air"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 Mengapa Bahasa Thai Tidak Memakai Spasi Antar Kata?</h3>\n  <p>Dalam bahasa Indonesia dan Inggris, setiap kata dipisahkan oleh spasi. Namun dalam bahasa Thai, seluruh kata dalam satu klausa ditulis <strong>tersambung rapat</strong>.</p>\n  <div class=\"rule-box\">\n    <strong>Kapan Spasi Digunakan dalam Bahasa Thai?</strong>\n    <ol>\n      <li><strong>Akhir Kalimat / Jeda Klausa:</strong> Sebagai pengganti tanda titik (.) atau koma (,).</li>\n      <li><strong>Sebelum & Sesudah Angka:</strong> Contoh: มี 5 คน (Mii 5 khon = Ada 5 orang).</li>\n      <li><strong>Nama Depan & Nama Belakang:</strong> Contoh: จัสมิน นารา (Jazmin Nara).</li>\n      <li><strong>Di Sekitar Tanda Pengulangan (ๆ):</strong> Contoh: บ่อย ๆ (Boi-boi = Sering-sering).</li>\n    </ol>\n  </div>\n</div>"
      },
      {
        "globalIndex": 29,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-029",
        "lessonNumber": 12,
        "title": "Teknik Pemisahan Suku Kata (Syllable Segmentation)",
        "tag": "Materi [12]",
        "badgeClass": "badge-lesson",
        "icon": "✂️",
        "isGame": false,
        "summary": "Strategi memotong kalimat rapat menjadi kata dan suku kata mandiri berdasarkan pola konsonan awal, vokal, dan akhiran.",
        "keyPoints": [
          "Kenali posisi vokal sebagai jangkar patokan (vokal depan menandakan awal kata)",
          "Analisis pola V + K + K (Vokal, Konsonan Awal, Konsonan Akhir)",
          "Latihan memenggal kalimat tanpa spasi dengan lancar"
        ],
        "thaiSample": {
          "thai": "ภาษาไทยไม่ยาก",
          "rtgs": "phaa-saa-thai / mai / yaak",
          "meaning": "Bahasa Thai tidak susah"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 Rumus Memenggal Kata Rapat</h3>\n  <p>Perhatikan contoh kalimat rapat: <strong>ภาษาไทยไม่ยาก</strong></p>\n  <ol>\n    <li>Langkah 1: Temukan vokal depan <strong>ไ-</strong> -> menandakan kata baru <strong>ไทย (thai)</strong>.</li>\n    <li>Langkah 2: Temukan vokal depan <strong>ไม-</strong> -> kata <strong>ไม่ (mai = tidak)</strong>.</li>\n    <li>Langkah 3: Tersisa suku kata depan <strong>ภาษา (phaa-saa)</strong> dan suku kata belakang <strong>ยาก (yaak = sulit)</strong>.</li>\n    <li>Hasil pemenggalan: <strong>ภาษาไทย | ไม่ | ยาก</strong> = <em>Bahasa Thai tidak susah</em>!</li>\n  </ol>\n</div>"
      },
      {
        "globalIndex": 30,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-030",
        "lessonNumber": null,
        "title": "Game Pemisahan Suku Kata (Versi A)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Latihan memenggal 5 frasa sehari-hari yang ditulis tanpa spasi menjadi kata-kata penyusunnya.",
        "keyPoints": [
          "Latihan potong kata pemula",
          "Mendeteksi vokal jangkar"
        ],
        "thaiSample": {
          "thai": "ไปกินข้าวกัน",
          "rtgs": "bpai / kin / khaao / gan",
          "meaning": "Ayo pergi makan nasi bersama"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎮 Penggalan Kata Harian</h3><p>Frasa <strong>ไปกินข้าวกัน</strong> dipenggal menjadi: <strong>ไป (pergi) | กิน (makan) | ข้าว (nasi) | กัน (bersama)</strong>.</p></div>"
      },
      {
        "globalIndex": 31,
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "id": "jazmi-materi-031",
        "lessonNumber": null,
        "title": "Game Pemisahan Suku Kata (Versi B)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Latihan tingkat lanjut memenggal kalimat panjang penutup Part I sebelum memasuki kaidah sistem nada.",
        "keyPoints": [
          "Pemisahan kalimat utuh",
          "Evaluasi akhir Part I"
        ],
        "thaiSample": {
          "thai": "ยินดีที่ได้รู้จักครับ",
          "rtgs": "yin-dii / thii / dai / ruu-jak / khrap",
          "meaning": "Senang berkenalan dengan Anda"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🏆 Kelulusan Part I: Memenggal Kalimat Perkenalan</h3><p>Kalimat <strong>ยินดีที่ได้รู้จักครับ</strong> dipenggal menjadi: <strong>ยินดี (senang) | ที่ได้ (bisa/berkesempatan) | รู้จัก (mengenal) | ครับ (partikel sopan)</strong>.</p></div>"
      }
    ]
  },
  {
    "part": 2,
    "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
    "moduleCount": 23,
    "lessons": [
      {
        "globalIndex": 32,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-032",
        "lessonNumber": 13,
        "title": "Mengenal 5 Nada dalam Bahasa Thai (วรรณยุกต์ - Wannayuk)",
        "tag": "Materi [13]",
        "badgeClass": "badge-lesson",
        "icon": "🎵",
        "isGame": false,
        "summary": "Pengantar 5 nada bahasa Thai: Datar (Samang), Rendah (Ek), Jatuh (Tho), Tinggi (Tri), dan Naik (Chattawa) beserta kontur suaranya.",
        "keyPoints": [
          "Bahasa Thai adalah bahasa tonal: beda nada berarti beda arti sama sekali!",
          "5 nada: Samang (Datar), Ek (Rendah), Tho (Jatuh), Tri (Tinggi), Chattawa (Naik)",
          "Contoh legendaris kata 'Maa': bisa berarti datang, kuda, atau anjing tergantung nada"
        ],
        "thaiSample": {
          "thai": "ปา ป่า ป้า ป๊า ป๋า",
          "rtgs": "bpaa, bpaa, bpaa, bpaa, bpaa",
          "meaning": "5 Nada Kata 'Bpaa'"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 Tujuan Pembelajaran</h3>\n  <p>Memahami konsep bahasa tonal dan menguasai perbedaan kontur frekuensi 5 nada dalam bahasa Thai.</p>\n\n  <h3>🎵 Perubahan Arti Akibat Perbedaan Nada</h3>\n  <p>Perhatikan contoh kata legendaris berikut:</p>\n  <ul>\n    <li><strong class=\"thai-char\">มา (Maa)</strong> [Nada Datar] = Datang <button class=\"btn-audio-mini\" onclick=\"speakThai('มา')\">🔊</button></li>\n    <li><strong class=\"thai-char\">ม้า (Maa)</strong> [Nada Tinggi] = Kuda <button class=\"btn-audio-mini\" onclick=\"speakThai('ม้า')\">🔊</button></li>\n    <li><strong class=\"thai-char\">หมา (Maa)</strong> [Nada Naik] = Anjing <button class=\"btn-audio-mini\" onclick=\"speakThai('หมา')\">🔊</button></li>\n  </ul>\n  <p>Kata yang sama jika diucapkan dengan nada keliru dapat mengubah arti secara fatal!</p>\n\n  <h3>📊 Karakteristik 5 Nada Bahasa Thai</h3>\n  <div class=\"table-responsive\">\n    <table class=\"lesson-table\">\n      <thead><tr><th>Nada</th><th>Nama Thai</th><th>Tanda Fonetik</th><th>Karakter Suara</th><th>Contoh Suara</th></tr></thead>\n      <tbody>\n        <tr><td><strong>1. Datar (Mid)</strong></td><td>สามัญ (Sa-mang)</td><td>ā (tanpa tanda)</td><td>Mendatar netral di tengah nada bicara normal</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('กา')\">🔊 กา (gaa)</button></td></tr>\n        <tr><td><strong>2. Rendah (Low)</strong></td><td>เอก (Ek)</td><td>à (rendah)</td><td>Suara ditekan turun ke dada lebih rendah dari biasa</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ก่า')\">🔊 ก่า (gàa)</button></td></tr>\n        <tr><td><strong>3. Jatuh (Falling)</strong></td><td>โท (Tho)</td><td>â (jatuh)</td><td>Mulai dari puncak tinggi lalu meluncur tajam ke bawah (tegas)</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ก้า')\">🔊 ก้า (gâa)</button></td></tr>\n        <tr><td><strong>4. Tinggi (High)</strong></td><td>ตรี (Tri)</td><td>á (tinggi)</td><td>Suara melengking naik di oktaf atas kepala</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ก๊า')\">🔊 ก๊า (gáa)</button></td></tr>\n        <tr><td><strong>5. Naik (Rising)</strong></td><td>จัตวา (Chat-dta-waa)</td><td>ǎ (meliuk naik)</td><td>Mulai agak rendah lalu meliuk naik seperti nada bertanya ('Hah?!')</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ก๋า')\">🔊 ก๋า (gǎa)</button></td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>"
      },
      {
        "globalIndex": 33,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-033",
        "lessonNumber": 14,
        "title": "Praktik Membaca 5 Nada Bersama Penutur Asli",
        "tag": "Materi [14]",
        "badgeClass": "badge-lesson",
        "icon": "🗣️",
        "isGame": false,
        "summary": "Latihan menirukan kontur 5 nada kata-kata vokal panjang bersama penutur asli.",
        "keyPoints": [
          "Latihan intonasi nada netral vs nada naik",
          "Melatih fleksibilitas pita suara",
          "Perbandingan kontur suara"
        ],
        "thaiSample": {
          "thai": "ตา ต่า ต้า ต๊า ต๋า",
          "rtgs": "dtaa, dtàa, dtâa, dtáa, dtǎa",
          "meaning": "5 Tangga Nada Konsonan 'To Tao'"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🗣️ Tangga Nada Konsonan Tengah</h3>\n  <p>Konsonan tengah (seperti ต, ป, ก) adalah satu-satunya kelompok konsonan yang dapat menyanyikan kelima nada secara berurutan:</p>\n  <div style=\"display:flex; gap:10px; flex-wrap:wrap; margin:16px 0;\">\n    <button class=\"btn-stimuler-primary\" onclick=\"speakThai('ตา')\">1. ตา (Datar) 🔊</button>\n    <button class=\"btn-stimuler-primary\" onclick=\"speakThai('ต่า')\">2. ต่า (Rendah) 🔊</button>\n    <button class=\"btn-stimuler-primary\" onclick=\"speakThai('ต้า')\">3. ต้า (Jatuh) 🔊</button>\n    <button class=\"btn-stimuler-primary\" onclick=\"speakThai('ต๊า')\">4. ต๊า (Tinggi) 🔊</button>\n    <button class=\"btn-stimuler-primary\" onclick=\"speakThai('ต๋า')\">5. ต๋า (Naik) 🔊</button>\n  </div>\n</div>"
      },
      {
        "globalIndex": 34,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-034",
        "lessonNumber": null,
        "title": "Game Tebak Nada Suara Pria (Versi A)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Latihan mendengarkan rekaman suara pria dan mengidentifikasi nada yang diucapkan.",
        "keyPoints": [
          "Mendeteksi nada rendah pada suara pria",
          "Melatih telinga mendengar intonasi"
        ],
        "thaiSample": {
          "thai": "ไก่, ไข่, ไม่",
          "rtgs": "gai, khai, mai",
          "meaning": "Ayam (Rendah), Telur (Rendah), Tidak (Jatuh)"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎮 Tebak Nada Suara Pria</h3><p>Dengarkan nada kata berikut dan tebak jenis nadanya:</p><ul><li><strong>ไก่ (gai)</strong> = Nada Rendah (Low tone). <button class='btn-audio-mini' onclick=\"speakThai('ไก่')\">🔊</button></li><li><strong>ไม่ (mai)</strong> = Nada Jatuh (Falling tone). <button class='btn-audio-mini' onclick=\"speakThai('ไม่')\">🔊</button></li></ul></div>"
      },
      {
        "globalIndex": 35,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-035",
        "lessonNumber": null,
        "title": "Game Tebak Nada Suara Wanita (Versi A)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Mengenali nada suara tinggi dan nada jatuh pada pitch suara wanita.",
        "keyPoints": [
          "Mendeteksi nada tinggi (Tri)",
          "Nada jatuh penutur wanita"
        ],
        "thaiSample": {
          "thai": "คะ, ค่ะ",
          "rtgs": "kha, kha",
          "meaning": "Partikel Wanita: Tinggi vs Jatuh"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎮 Membedakan คะ vs ค่ะ</h3><ul><li><strong>คะ (kha):</strong> Nada TINGGI (High tone), digunakan untuk bertanya. <button class='btn-audio-mini' onclick=\"speakThai('คะ')\">🔊</button></li><li><strong>ค่ะ (kha):</strong> Nada JATUH (Falling tone), digunakan untuk pernyataan. <button class='btn-audio-mini' onclick=\"speakThai('ค่ะ')\">🔊</button></li></ul></div>"
      },
      {
        "globalIndex": 36,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-036",
        "lessonNumber": null,
        "title": "Game Tebak Nada Suara Pria (Versi B)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Latihan membedakan nada datar (Samang) vs nada naik (Chattawa) pada suara pria.",
        "keyPoints": [
          "Perbedaan nada datar dan naik",
          "Kosakata sehari-hari"
        ],
        "thaiSample": {
          "thai": "มา vs หมา",
          "rtgs": "maa (datar) vs maa (naik)",
          "meaning": "Datang vs Anjing"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎮 Datar vs Naik</h3><ul><li>มา (datar = datang) <button class='btn-audio-mini' onclick=\"speakThai('มา')\">🔊</button></li><li>หมา (naik = anjing) <button class='btn-audio-mini' onclick=\"speakThai('หมา')\">🔊</button></li></ul></div>"
      },
      {
        "globalIndex": 37,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-037",
        "lessonNumber": null,
        "title": "Game Tebak Nada Suara Wanita (Versi B)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Tantangan mengenali 5 nada secara acak dalam kalimat percakapan penutur wanita.",
        "keyPoints": [
          "Evaluasi kepekaan telinga",
          "Deteksi nada kalimat lengkap"
        ],
        "thaiSample": {
          "thai": "สวัสดีค่ะ",
          "rtgs": "sa-wat-dii kha",
          "meaning": "Halo (wanita)"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎮 Analisis Nada Kalimat Salam</h3><p>Pada kata <strong>สวัสดีค่ะ</strong>:</p><ul><li>สะ (sa) = Nada Rendah</li><li>วัส (wat) = Nada Rendah</li><li>ดี (dii) = Nada Datar</li><li>ค่ะ (kha) = Nada Jatuh</li></ul></div>"
      },
      {
        "globalIndex": 38,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-038",
        "lessonNumber": 15,
        "title": "Kaidah Nada Khusus Suku Kata Vokal Pendek",
        "tag": "Materi [15]",
        "badgeClass": "badge-lesson",
        "icon": "⚡",
        "isGame": false,
        "summary": "Pengaruh durasi vokal pendek terhadap tempo letupan nada (staccato) dalam bahasa Thai.",
        "keyPoints": [
          "Vokal pendek dipotong secara mendadak (bunyi glottal stop)",
          "Vokal pendek tidak bisa diayunkan panjang",
          "Konsonan rendah + vokal pendek mati menghasilkan nada TINGGI alami"
        ],
        "thaiSample": {
          "thai": "นะ, ละ, คะ",
          "rtgs": "na, la, kha",
          "meaning": "Partikel Vokal Pendek Ber-nada Tinggi"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>⚡ Mengapa Kata 'Na', 'La', 'Kha' Bernada Tinggi?</h3>\n  <p>Dalam bahasa Thai, jika suatu suku kata diawali oleh <strong>Konsonan Rendah</strong> dan ditutup oleh <strong>Vokal Pendek Tanpa Akhiran</strong> (Suku Kata Mati), suku kata tersebut secara otomatis dilafalkan dengan <strong>Nada Tinggi (High Tone)</strong>!</p>\n  <ul>\n    <li><strong class=\"thai-char\">นะ (na)</strong> = partikel penegas (Nada Tinggi) <button class=\"btn-audio-mini\" onclick=\"speakThai('นะ')\">🔊</button></li>\n    <li><strong class=\"thai-char\">คะ (kha)</strong> = partikel tanya wanita (Nada Tinggi) <button class=\"btn-audio-mini\" onclick=\"speakThai('คะ')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 39,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-039",
        "lessonNumber": 16,
        "title": "Praktik Membaca Nada Vokal Pendek Bersama Penutur Asli",
        "tag": "Materi [16]",
        "badgeClass": "badge-game",
        "icon": "🗣️",
        "isGame": true,
        "summary": "Latihan artikulasi vokal pendek staccato dengan irama nada yang akurat.",
        "keyPoints": [
          "Artikulasi bunyi glottal stop",
          "Ketepatan durasi ucapan"
        ],
        "thaiSample": {
          "thai": "โต๊ะ, เกะกะ",
          "rtgs": "dto, ge-ga",
          "meaning": "Meja, Berantakan"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🗣️ Latihan Pengucapan Staccato</h3><p>Latihlah kata <strong>โต๊ะ (dto = meja)</strong> yang memiliki tanda Mai Tri bernada tinggi dan vokal pendek. <button class='btn-audio-mini' onclick=\"speakThai('โต๊ะ')\">🔊 โต๊ะ</button></p></div>"
      },
      {
        "globalIndex": 40,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-040",
        "lessonNumber": null,
        "title": "Game Tebak Nada Vokal Pendek (Suara Pria)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Mengenali nada kata-kata vokal pendek bersuara berat.",
        "keyPoints": [
          "Deteksi nada rendah vs tinggi pada vokal pendek pria"
        ],
        "thaiSample": {
          "thai": "จะ, ดับ",
          "rtgs": "ja, dap",
          "meaning": "Akan (Rendah), Padam (Rendah)"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎮 Kuis Suku Kata Pendek Pria</h3><p>Kata <strong>จะ (ja = akan)</strong> berawalan konsonan tengah จ dan bervokal pendek mati -> <strong>Nada Rendah</strong>. <button class='btn-audio-mini' onclick=\"speakThai('จะ')\">🔊 จะ</button></p></div>"
      },
      {
        "globalIndex": 41,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-041",
        "lessonNumber": null,
        "title": "Game Tebak Nada Vokal Pendek (Suara Wanita)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Mengenali partikel-partikel vokal pendek feminin.",
        "keyPoints": [
          "Partikel wanita sehari-hari",
          "Ketepatan intonasi santai"
        ],
        "thaiSample": {
          "thai": "จ้ะ, ซิ",
          "rtgs": "ja, si",
          "meaning": "Ya (akrab), Dong/Sih"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎮 Kuis Partikel Feminin</h3><p>Kata <strong>จ้ะ (ja)</strong> bernada jatuh akrab digunakan menjawab panggilan. <button class='btn-audio-mini' onclick=\"speakThai('จ้ะ')\">🔊 จ้ะ</button></p></div>"
      },
      {
        "globalIndex": 42,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-042",
        "lessonNumber": 17,
        "title": "Menentukan Nada: Suku Kata Tanpa Tanda Nada (Rumus Kham Bpen vs Kham Taai)",
        "tag": "Materi [17]",
        "badgeClass": "badge-lesson",
        "icon": "📐",
        "isGame": false,
        "summary": "Rumus penentu nada fundamental bahasa Thai: Klasifikasi Suku Kata Hidup (คำเป็น) vs Suku Kata Mati (คำตาย) saat tidak ada simbol nada.",
        "keyPoints": [
          "Suku Kata Hidup (Kham Bpen): Berakhiran vokal panjang ATAU konsonan sengau (ง, น, ม, ย, ว)",
          "Suku Kata Mati (Kham Taai): Berakhiran vokal pendek ATAU konsonan buntu letup (-k, -t, -p)",
          "Tabel rumus nada otomatis tanpa tanda nada"
        ],
        "thaiSample": {
          "thai": "คำเป็น / คำตาย",
          "rtgs": "kham bpen / kham dtaai",
          "meaning": "Kata Hidup vs Kata Mati"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 Rumus Emas: Kham Bpen vs Kham Taai</h3>\n  <p>Sebagian besar kata dalam bahasa Thai <strong>TIDAK memiliki tanda nada</strong> di atasnya. Bagaimana cara mengetahui nadanya?</p>\n  <p>Kita menggunakan rumus <strong>Kelas Konsonan Awal + Jenis Suku Kata (Hidup atau Mati)</strong>!</p>\n\n  <div class=\"rule-box\">\n    <strong>Definisi:</strong>\n    <ul>\n      <li>🟢 <strong>Kham Bpen (คำเป็น - Suku Kata Hidup):</strong> Kata yang suaranya bisa diayunkan panjang. Cirinya: berakhiran vokal panjang ATAU berakhiran konsonan sengau (Mae Kong -ng, Kon -n, Kom -m, Koei -y, Koew -w). <em>(Jembatan keledai: NO-M-YA-NG)</em>.</li>\n      <li>🔴 <strong>Kham Taai (คำตาย - Suku Kata Mati):</strong> Kata yang suaranya buntu terhenti mendadak. Cirinya: berakhiran vokal pendek ATAU berakhiran konsonan letup buntu (Mae Kok -k, Kot -t, Kob -p). <em>(Jembatan keledai: K-O-B-A-T)</em>.</li>\n    </ul>\n  </div>\n\n  <h3>📊 Matriks Penentuan Nada Tanpa Tanda</h3>\n  <div class=\"table-responsive\">\n    <table class=\"lesson-table\">\n      <thead><tr><th>Kelas Konsonan Awal</th><th>Suku Kata Hidup (คำเป็น)</th><th>Suku Kata Mati (คำตาย) - Vokal Pendek</th><th>Suku Kata Mati (คำตาย) - Vokal Panjang</th></tr></thead>\n      <tbody>\n        <tr><td><strong>🟢 Konsonan Tengah</strong></td><td><span class=\"badge-mid\">Datar (Mid)</span><br>เช่น: กา (gaa)</td><td colspan=\"2\"><span class=\"badge-low\">Rendah (Low)</span><br>เช่น: กบ (gop), กอด (gaawt)</td></tr>\n        <tr><td><strong>🟡 Konsonan Tinggi</strong></td><td><span class=\"badge-rising\">Naik (Rising)</span><br>เช่น: ขา (khaa)</td><td colspan=\"2\"><span class=\"badge-low\">Rendah (Low)</span><br>เช่น: ขบ (khop), ขาด (khaat)</td></tr>\n        <tr><td><strong>🔴 Konsonan Rendah</strong></td><td><span class=\"badge-mid\">Datar (Mid)</span><br>เช่น: มา (maa)</td><td><span class=\"badge-high\">Tinggi (High)</span><br>เช่น: มด (mot), นะ (na)</td><td><span class=\"badge-falling\">Jatuh (Falling)</span><br>เช่น: มาก (maak), พูด (phuut)</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>"
      },
      {
        "globalIndex": 43,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-043",
        "lessonNumber": null,
        "title": "Game Penentuan Nada Bagian 1 (Suara Pria)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Latihan menerapkan rumus Kham Bpen / Kham Taai pada kata-kata nyata penutur pria.",
        "keyPoints": [
          "Analisis konsonan awal dan akhiran",
          "Verifikasi nada rumus"
        ],
        "thaiSample": {
          "thai": "ปาก, มาก, ขาว",
          "rtgs": "bpak, maak, khaao",
          "meaning": "Mulut (Rendah), Banyak (Jatuh), Putih (Naik)"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎮 Analisis Kata Nyata</h3><ul><li><strong>ปาก (bpak = mulut):</strong> Konsonan tengah ป + akhiran mati ก -> <strong>Nada Rendah</strong>.</li><li><strong>มาก (maak = banyak):</strong> Konsonan rendah ม + akhiran mati vokal panjang -> <strong>Nada Jatuh</strong>.</li><li><strong>ขาว (khaao = putih):</strong> Konsonan tinggi ข + akhiran hidup ว -> <strong>Nada Naik</strong>.</li></ul></div>"
      },
      {
        "globalIndex": 44,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-044",
        "lessonNumber": null,
        "title": "Game Penentuan Nada Bagian 1 (Suara Wanita)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Penerapan rumus Kham Bpen / Kham Taai pada kalimat percakapan penutur wanita.",
        "keyPoints": [
          "Penerapan rumus cepat",
          "Membaca menu makanan"
        ],
        "thaiSample": {
          "thai": "ผัดไทย, ข้าวผัด",
          "rtgs": "phat-thai, khaao-phat",
          "meaning": "Pad Thai, Nasi Goreng"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎮 Membedah Menu Populer</h3><p>Kata <strong>ผัด (phat = tumis)</strong> berawalan konsonan tinggi ผ dan berakhiran mati ด -> <strong>Nada Rendah</strong>. <button class='btn-audio-mini' onclick=\"speakThai('ผัดไทย')\">🔊 ผัดไทย</button></p></div>"
      },
      {
        "globalIndex": 45,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-045",
        "lessonNumber": 18,
        "title": "Menentukan Nada: Suku Kata dengan 4 Tanda Nada (วรรณยุกต์)",
        "tag": "Materi [18]",
        "badgeClass": "badge-lesson",
        "icon": "👑",
        "isGame": false,
        "summary": "Kaidah pembacaan 4 simbol tanda nada: Mai Ek ( ่ ), Mai Tho ( ้ ), Mai Tri ( ๊ ), dan Mai Chattawa ( ๋ ) pada masing-masing kelas konsonan.",
        "keyPoints": [
          "4 tanda nada: Mai Ek ( ่ ), Mai Tho ( ้ ), Mai Tri ( ๊ ), Mai Chattawa ( ๋ )",
          "Konsonan Tengah: Nada langsung sesuai nama tanda nadanya!",
          "Konsonan Tinggi: Hanya bisa memakai Mai Ek (Rendah) dan Mai Tho (Jatuh)",
          "Konsonan Rendah: Aturan Geser! Mai Ek dibaca JATUH, Mai Tho dibaca TINGGI!"
        ],
        "thaiSample": {
          "thai": "ไม่, ได้, น้ำ, พี่",
          "rtgs": "mai, dai, naam, phii",
          "meaning": "Tidak, Bisa, Air, Kakak"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 4 Simbol Tanda Nada (รูปวรรณยุกต์)</h3>\n  <p>Ketika suku kata diberi tanda nada di atas konsonan awalnya, tanda tersebut mengatur nada pengucapannya:</p>\n\n  <div class=\"table-responsive\">\n    <table class=\"lesson-table\">\n      <thead><tr><th>Kelas Konsonan</th><th>Tanpa Tanda</th><th>Mai Ek ( ่ )</th><th>Mai Tho ( ้ )</th><th>Mai Tri ( ๊ )</th><th>Mai Chattawa ( ๋ )</th></tr></thead>\n      <tbody>\n        <tr><td><strong>🟢 Konsonan Tengah</strong></td><td>Datar</td><td><span class=\"badge-low\">Rendah</span><br>ไก่ (gai)</td><td><span class=\"badge-falling\">Jatuh</span><br>บ้าน (baan)</td><td><span class=\"badge-high\">Tinggi</span><br>โต๊ะ (dto)</td><td><span class=\"badge-rising\">Naik</span><br>ตั๋ว (dtua)</td></tr>\n        <tr><td><strong>🟡 Konsonan Tinggi</strong></td><td>Naik</td><td><span class=\"badge-low\">Rendah</span><br>ไข่ (khai)</td><td><span class=\"badge-falling\">Jatuh</span><br>ข้าว (khaao)</td><td><em>(Tidak ada)</em></td><td><em>(Tidak ada)</em></td></tr>\n        <tr><td><strong>🔴 Konsonan Rendah</strong></td><td>Datar</td><td><span class=\"badge-falling\">JATUH! ⚠️</span><br>ไม่ (mai), พี่ (phii)</td><td><span class=\"badge-high\">TINGGI! ⚠️</span><br>น้ำ (naam), ม้า (maa)</td><td><em>(Tidak ada)</em></td><td><em>(Tidak ada)</em></td></tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"fairy-tip\">\n    💡 <strong>Aturan Emas Konsonan Rendah:</strong> Pada konsonan rendah, nada selalu bergeser <strong>satu tingkat lebih tinggi</strong> dari nama tandanya!<br>\n    Tanda Mai Ek (angka 1) -> dibaca nada JATUH (seperti tingkat 2).<br>\n    Tanda Mai Tho (angka 2) -> dibaca nada TINGGI (seperti tingkat 3).\n  </div>\n</div>"
      },
      {
        "globalIndex": 46,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-046",
        "lessonNumber": null,
        "title": "Game Penentuan Nada Bagian 2 (Suara Pria)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Latihan membaca kata-kata bertanda Mai Ek dan Mai Tho pada konsonan rendah.",
        "keyPoints": [
          "Pergeseran nada konsonan rendah",
          "Kata-kata frekuensi tertinggi"
        ],
        "thaiSample": {
          "thai": "ใช่, น้ำ, ช้า, ว่า",
          "rtgs": "chai, naam, chaa, waa",
          "meaning": "Ya, Air, Lambat, Bahwa"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎮 Membedah Kata Konsonan Rendah</h3><ul><li><strong>ใช่ (chai = ya):</strong> Konsonan rendah ช + Mai Ek -> <strong>Nada Jatuh</strong>. <button class='btn-audio-mini' onclick=\"speakThai('ใช่')\">🔊</button></li><li><strong>น้ำ (naam = air):</strong> Konsonan rendah น + Mai Tho -> <strong>Nada Tinggi</strong>. <button class='btn-audio-mini' onclick=\"speakThai('น้ำ')\">🔊</button></li></ul></div>"
      },
      {
        "globalIndex": 47,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-047",
        "lessonNumber": null,
        "title": "Game Penentuan Nada Bagian 2 (Suara Wanita)",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎯",
        "isGame": true,
        "summary": "Menguji pemahaman 4 tanda nada dalam konteks kalimat utuh penutur wanita.",
        "keyPoints": [
          "Kelancaran membaca teks bertanda nada"
        ],
        "thaiSample": {
          "thai": "ไม่เป็นไร",
          "rtgs": "mai bpen rai",
          "meaning": "Sama-sama / Tidak apa-apa"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎮 Frasa Terkenal: Mai Bpen Rai</h3><p>Kata <strong>ไม่ (mai)</strong> ber-Mai Ek pada konsonan rendah ม -> <strong>Nada Jatuh</strong>. Diikuti kata เป็น (datar) dan ไร (datar). <button class='btn-audio-mini' onclick=\"speakThai('ไม่เป็นไร')\">🔊 ไม่เป็นไร</button></p></div>"
      },
      {
        "globalIndex": 48,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-048",
        "lessonNumber": 19,
        "title": "Ho Hip (ห) dan O Aang (อ) yang Tidak Dibaca (Konsonan Pembimbing)",
        "tag": "Materi [19]",
        "badgeClass": "badge-lesson",
        "icon": "🛡️",
        "isGame": false,
        "summary": "Fungsi konsonan pembimbing Ho Nam (ห นำ) dan O Nam (อ นำ): mengubah nada konsonan rendah tunggal menjadi kelas tinggi tanpa melafalkan bunyi H.",
        "keyPoints": [
          "Ho Nam (ห นำ): Huruf ห diletakkan di depan konsonan rendah tunggal (ง, ญ, น, ย, ร, ล, ว, ม)",
          "Huruf ห sama sekali tidak dibaca (bisu), fungsinya murni mengubah kelas kata menjadi Konsonan Tinggi",
          "O Nam (อ นำ): Huruf อ mendahului ย hanya pada 4 kata khusus: อย่า, อยาก, อย่าง, อยู่"
        ],
        "thaiSample": {
          "thai": "หมู, ใหญ่, อยาก, อยู่",
          "rtgs": "muu, yai, yaak, yuu",
          "meaning": "Babi (Nada Naik), Besar, Ingin, Tinggal/Sedang"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 Mengapa Ada Huruf yang Tidak Dibaca?</h3>\n  <p>Konsonan Rendah Tunggal (seperti ม, น, ล, ย) secara alami tidak bisa menghasilkan <strong>Nada Naik</strong> atau <strong>Nada Rendah</strong> dengan mudah. Untuk mengatasinya, tata bahasa Thai menyematkan huruf pembimbing di depannya!</p>\n\n  <div class=\"rule-box\">\n    <strong>1. Ho Nam (ห นำ):</strong><br>\n    Huruf <strong>ห</strong> berdiri di depan huruf ง, ญ, น, ย, ร, ล, ว, ม. Huruf ห tidak bersuara, tetapi membuat kata tersebut <strong>mengikuti rumus Konsonan Tinggi</strong>!<br>\n    <ul>\n      <li>หมู (muu = babi) -> Nada NAIK! (karena mengikuti kelas ห) <button class=\"btn-audio-mini\" onclick=\"speakThai('หมู')\">🔊</button></li>\n      <li>ใหญ่ (yai = besar) -> Nada JATUH! (Konsonan tinggi + Mai Ek = Jatuh) <button class=\"btn-audio-mini\" onclick=\"speakThai('ใหญ่')\">🔊</button></li>\n      <li>ใหม่ (mai = baru) -> Nada JATUH! <button class=\"btn-audio-mini\" onclick=\"speakThai('ใหม่')\">🔊</button></li>\n    </ul>\n  </div>\n\n  <div class=\"rule-box\" style=\"margin-top:14px;\">\n    <strong>2. O Nam (อ นำ) - Hanya 4 Kata dalam Sejarah Thai!</strong><br>\n    Huruf <strong>อ</strong> mendahului huruf <strong>ย</strong> hanya terjadi pada 4 kata wajib hafal ini:<br>\n    <ol>\n      <li><strong>อย่า (yaa)</strong> = Jangan <button class=\"btn-audio-mini\" onclick=\"speakThai('อย่า')\">🔊</button></li>\n      <li><strong>อยาก (yaak)</strong> = Ingin / Mau <button class=\"btn-audio-mini\" onclick=\"speakThai('อยาก')\">🔊</button></li>\n      <li><strong>อย่าง (yaang)</strong> = Macam / Cara / Seperti <button class=\"btn-audio-mini\" onclick=\"speakThai('อย่าง')\">🔊</button></li>\n      <li><strong>อยู่ (yuu)</strong> = Tinggal / Berada / Sedang <button class=\"btn-audio-mini\" onclick=\"speakThai('อยู่')\">🔊</button></li>\n    </ol>\n  </div>\n</div>"
      },
      {
        "globalIndex": 49,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-049",
        "lessonNumber": 20,
        "title": "Tanda Peredam Bunyi _์ (Mai Thanthakhaat / Garan)",
        "tag": "Materi [20]",
        "badgeClass": "badge-lesson",
        "icon": "🔇",
        "isGame": false,
        "summary": "Fungsi tanda Garan ( ์ ) untuk mematikan bunyi konsonan asing (terutama kata serapan Sansekerta, Pali, dan Inggris).",
        "keyPoints": [
          "Tanda ์ diletakkan di atas konsonan yang tidak boleh dibunyikan",
          "Mempertahankan ejaan asli bahasa asal tanpa menyulitkan lidah penutur Thai",
          "Sangat banyak ditemukan pada hari dalam seminggu dan istilah teknologi"
        ],
        "thaiSample": {
          "thai": "วันจันทร์, โทรศัพท์, การ์ด",
          "rtgs": "wan-jan, thoo-ra-sap, gaat",
          "meaning": "Hari Senin, Telepon, Kartu"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 Fungsi Tanda Garan (การันต์ / ไม้ทัณฑฆาต)</h3>\n  <p>Tanda <strong> ์ </strong> berfungsi sebagai 'tombol mute' pada konsonan di bawahnya:</p>\n  <ul>\n    <li><strong class=\"thai-char\">วันจันทร์ (wan-jan)</strong> = Hari Senin (huruf ทร์ dimatikan) <button class=\"btn-audio-mini\" onclick=\"speakThai('วันจันทร์')\">🔊</button></li>\n    <li><strong class=\"thai-char\">โทรศัพท์ (thoo-ra-sap)</strong> = Telepon (huruf ท์ dimatikan) <button class=\"btn-audio-mini\" onclick=\"speakThai('โทรศัพท์')\">🔊</button></li>\n    <li><strong class=\"thai-char\">การ์ด (gaat)</strong> = Kartu / Card (huruf ร์ dimatikan) <button class=\"btn-audio-mini\" onclick=\"speakThai('การ์ด')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 50,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-050",
        "lessonNumber": 21,
        "title": "Kaidah Nada pada Konsonan Gabungan & Klaster",
        "tag": "Materi [21]",
        "badgeClass": "badge-lesson",
        "icon": "🔀",
        "isGame": false,
        "summary": "Bagaimana nada dihitung saat dua konsonan bergabung (klaster sejati vs suku kata ganda tersembunyi).",
        "keyPoints": [
          "Nada pada klaster sejati ditentukan konsonan pertama",
          "Pola aksara pimpinan pada kata 2 suku kata"
        ],
        "thaiSample": {
          "thai": "ขนม, ตลาด, อร่อย",
          "rtgs": "kha-nom, dta-laat, a-roi",
          "meaning": "Kue, Pasar, Enak"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 Aksara Pimpinan (อักษรนำ) 2 Suku Kata</h3>\n  <p>Pada kata seperti <strong>ขนม (kha-nom = kue)</strong> dan <strong>อร่อย (a-roi = lezat)</strong>, konsonan pertama menularkan kelasnya ke suku kata kedua:</p>\n  <ul>\n    <li><strong>อร่อย (a-roi):</strong> อ (tengah) memimpin ร (rendah) ber-Mai Ek -> suku kata kedua dibaca <strong>Nada Rendah</strong>! <button class=\"btn-audio-mini\" onclick=\"speakThai('อร่อย')\">🔊</button></li>\n    <li><strong>ตลาด (dta-laat):</strong> ต (tengah) memimpin ล (rendah) mati -> suku kata kedua dibaca <strong>Nada Rendah</strong>! <button class=\"btn-audio-mini\" onclick=\"speakThai('ตลาด')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 51,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-051",
        "lessonNumber": 22,
        "title": "Tanda Baca Khas Thailand (ๆ , ฯ , ฯลฯ)",
        "tag": "Materi [22]",
        "badgeClass": "badge-lesson",
        "icon": "🪧",
        "isGame": false,
        "summary": "Mengenal 3 tanda baca unik aksara Thai: Maiyamok (pengulangan), Paiyannoi (penyingkat nama resmi), dan Paiyanyai (dan lain-lain).",
        "keyPoints": [
          "ๆ (Maiyamok): Mengulang kata sebelumnya (contoh: มากๆ maak-maak = banyak sekali)",
          "ฯ (Paiyannoi): Memotong nama tempat/gelar resmi yang sangat panjang (contoh: กรุงเทพฯ)",
          "ฯลฯ (Paiyanyai): Dibaca 'lae uen uen' (artinya: dan lain-lain / dsb.)"
        ],
        "thaiSample": {
          "thai": "มากๆ, กรุงเทพฯ, ฯลฯ",
          "rtgs": "maak maak, krung-thep, lae uen uen",
          "meaning": "Banyak-banyak, Bangkok (singkat), dll."
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 3 Tanda Baca Unik Aksara Thai</h3>\n  <div class=\"rule-box\">\n    <ol>\n      <li><strong>ๆ (ไม้ยมก - Maiyamok): Tanda Pengulangan Kata</strong><br>\n      Diletakkan setelah kata yang ingin diulang untuk memberi efek jamak atau penguatan makna:<br>\n      • เด็กๆ (dek-dek) = Anak-anak.<br>\n      • ช้าๆ (chaa-chaa) = Pelan-pelan.<br>\n      • บ่อยๆ (boi-boi) = Sering-sering.</li>\n\n      <li style=\"margin-top:10px;\"><strong>ฯ (ไปยาลน้อย - Paiyannoi): Penyingkat Nama Resmi</strong><br>\n      Nama lengkap kota Bangkok adalah nama tempat terpanjang di dunia (168 huruf!). Dalam tulisan resmi disingkat menjadi <strong>กรุงเทพฯ (Krungthep)</strong> dengan tanda ฯ di ujungnya.</li>\n\n      <li style=\"margin-top:10px;\"><strong>ฯลฯ (ไปยาลใหญ่ - Paiyanyai): Dan Lain-Lain (dll.)</strong><br>\n      Dibaca <em>'lae uen uen'</em> (dan lain-lain). Contoh: มีผลไม้ เช่น กล้วย ส้ม ฯลฯ (Ada buah-buahan seperti pisang, jeruk, dll).</li>\n    </ol>\n  </div>\n</div>"
      },
      {
        "globalIndex": 52,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-052",
        "lessonNumber": 23,
        "title": "Tanda Tanya dalam Bahasa Thai (Apakah Memakai '?')",
        "tag": "Materi [23]",
        "badgeClass": "badge-lesson",
        "icon": "❓",
        "isGame": false,
        "summary": "Mengapa kalimat tanya bahasa Thai aslinya tidak membutuhkan tanda tanya (?) dan bagaimana partikel tanya menggantikannya.",
        "keyPoints": [
          "Bahasa Thai tradisional tidak menggunakan tanda '?' di akhir kalimat",
          "Intonasi tanya sudah diwakili oleh partikel di ujung kalimat (ไหม, ใช่ไหม, หรือ)",
          "Tanda '?' hanya dipakai dalam percakapan santai media sosial / chat modern"
        ],
        "thaiSample": {
          "thai": "สบายดีไหม",
          "rtgs": "sa-baai-dii mai",
          "meaning": "Apa kabar? (tanpa tanda tanya)"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 Tanda Tanya dalam Bahasa Thai</h3>\n  <p>Dalam buku teks resmi, surat kabar, dan novel bahasa Thai, Anda <strong>TIDAK AKAN MENEMUKAN tanda tanya (?)</strong>!</p>\n  <p>Fungsi tanda tanya sudah sepenuhnya diemban oleh <strong>Kata Tanya</strong> yang diletakkan di akhir kalimat:</p>\n  <ul>\n    <li><strong class=\"thai-char\">สบายดีไหม</strong> (sa-baai-dii mai) = Apa kabar? <button class=\"btn-audio-mini\" onclick=\"speakThai('สบายดีไหม')\">🔊</button></li>\n    <li><strong class=\"thai-char\">กินข้าวหรือยัง</strong> (kin khaao reuu yang) = Sudah makan belum? <button class=\"btn-audio-mini\" onclick=\"speakThai('กินข้าวหรือยัง')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 53,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-053",
        "lessonNumber": 24,
        "title": "Panduan Mengetik Keyboard Aksara Thai (Part 1 - Layout Kedmanee)",
        "tag": "Materi [24]",
        "badgeClass": "badge-lesson",
        "icon": "⌨️",
        "isGame": false,
        "summary": "Tata letak keyboard standar Kedmanee di PC dan HP, lokasi huruf vokal utama, konsonan umum, dan tombol shift.",
        "keyPoints": [
          "Standar keyboard Thai adalah Kedmanee (เกษมณี)",
          "Huruf-huruf frekuensi tinggi terletak di baris tengah (home row)",
          "Vokal atas dan bawah memiliki tombol khusus tersendiri"
        ],
        "thaiSample": {
          "thai": "แป้นพิมพ์ภาษาไทย",
          "rtgs": "bpaaen-phim phaa-saa-thai",
          "meaning": "Papan Ketik Keyboard Thai"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>⌨️ Mengetik Aksara Thai di Komputer & Smartphone</h3>\n  <p>Keyboard resmi Thailand menggunakan susunan <strong>Kedmanee Layout</strong>:</p>\n  <ul>\n    <li>Tombol <strong>D</strong> pada keyboard qwerty = huruf <strong class=\"thai-char\">ก</strong> (Ko Kai).</li>\n    <li>Tombol <strong>F</strong> = vokal <strong class=\"thai-char\">ด</strong> (Do Dek).</li>\n    <li>Tombol <strong>J</strong> = huruf <strong class=\"thai-char\">่</strong> (Mai Ek).</li>\n    <li>Tombol <strong>H</strong> = huruf <strong class=\"thai-char\">้</strong> (Mai Tho).</li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 54,
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "id": "jazmi-materi-054",
        "lessonNumber": 25,
        "title": "Panduan Mengetik Keyboard Aksara Thai (Part 2 - Tombol Shift & Karakter Khusus)",
        "tag": "Materi [25]",
        "badgeClass": "badge-lesson",
        "icon": "⌨️",
        "isGame": false,
        "summary": "Mengetik karakter tingkat lanjut dengan tombol Shift: ฎ, ฏ, ษ, ศ, angka Thai, dan tanda baca ฯ, ๆ.",
        "keyPoints": [
          "Karakter baris kedua diakses dengan tombol Shift",
          "Lokasi tanda Maiyamok (ๆ) dan Paiyannoi (ฯ)",
          "Tips mengetik cepat aksara Thai tanpa melihat keyboard"
        ],
        "thaiSample": {
          "thai": "กด Shift เพื่อพิมพ์",
          "rtgs": "got shift phuea phim",
          "meaning": "Tekan Shift untuk mengetik"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>⌨️ Akses Karakter Shift</h3><p>Tanda <strong>ๆ (Maiyamok)</strong> berada di tombol <strong>Q</strong> pada keyboard Thai. Tekan <strong>q</strong> langsung untuk memunculkan tanda ๆ.</p></div>"
      }
    ]
  },
  {
    "part": 3,
    "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
    "moduleCount": 37,
    "lessons": [
      {
        "globalIndex": 55,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-055",
        "lessonNumber": 26,
        "title": "5 Kata Wajib untuk Pemula Bahasa Thai",
        "tag": "Materi [26]",
        "badgeClass": "badge-lesson",
        "icon": "🌟",
        "isGame": false,
        "summary": "5 ungkapan paling sakti dalam percakapan: Halo, Terima Kasih, Maaf/Permisi, Ya, dan Bukan.",
        "keyPoints": [
          "สวัสดี (sa-wat-dii): Salam universal sepanjang hari",
          "ขอบคุณ (khop-khun): Terima kasih",
          "ขอโทษ (khor-thot): Maaf / Permisi",
          "ใช่ (chai) vs ไม่ใช่ (mai chai): Ya / Benar vs Bukan"
        ],
        "thaiSample": {
          "thai": "สวัสดีครับ / ขอบคุณค่ะ",
          "rtgs": "sa-wat-dii khrap / khop-khun kha",
          "meaning": "Halo (pria) / Terima kasih (wanita)"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 5 Ungkapan Paling Krusial</h3>\n  <div class=\"table-responsive\">\n    <table class=\"lesson-table\">\n      <thead><tr><th>Ungkapan Thai</th><th>Bacaan (RTGS)</th><th>Arti Bahasa Indonesia</th><th>Audio</th></tr></thead>\n      <tbody>\n        <tr><td><strong>สวัสดี</strong></td><td>sa-wat-dii</td><td>Halo / Selamat pagi / siang / malam</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('สวัสดีครับ')\">🔊</button></td></tr>\n        <tr><td><strong>ขอบคุณ</strong></td><td>khop-khun</td><td>Terima kasih</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ขอบคุณครับ')\">🔊</button></td></tr>\n        <tr><td><strong>ขอโทษ</strong></td><td>khor-thot</td><td>Maaf / Permisi / Numpang lewat</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ขอโทษครับ')\">🔊</button></td></tr>\n        <tr><td><strong>ใช่</strong></td><td>chai</td><td>Ya / Betul / Benar</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ใช่ครับ')\">🔊</button></td></tr>\n        <tr><td><strong>ไม่ใช่</strong></td><td>mai chai</td><td>Bukan / Tidak benar</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ไม่ใช่ครับ')\">🔊</button></td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>"
      },
      {
        "globalIndex": 56,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-056",
        "lessonNumber": 27,
        "title": "Partikel Kesopanan Lengkap (Khrap & Kha)",
        "tag": "Materi [27]",
        "badgeClass": "badge-lesson",
        "icon": "🙏",
        "isGame": false,
        "summary": "Kaidah penggunaan partikel kesopanan: Pria menggunakan ครับ (khrap), Wanita menggunakan ค่ะ (kha) dan คะ (kha).",
        "keyPoints": [
          "Pria: Selalu gunakan ครับ (khrap) di semua jenis kalimat (pernyataan, pertanyaan, jawaban)",
          "Wanita: Gunakan ค่ะ (kha - nada jatuh) untuk PERNYATAAN / MENJAWAB",
          "Wanita: Gunakan คะ (kha - nada tinggi) untuk BERTANYA / MEMANGGIL"
        ],
        "thaiSample": {
          "thai": "ครับ / ค่ะ / คะ",
          "rtgs": "khrap / khâ / khá",
          "meaning": "Partikel Sopan Pria & Wanita"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 Perbedaan Krusial ค่ะ vs คะ bagi Wanita</h3>\n  <div class=\"rule-box\">\n    <ul>\n      <li>🟢 <strong>ครับ (khrap) - Pria:</strong> Digunakan untuk SEMUA situasi. Contoh: ขอบคุณครับ, ใช่ครับ, ไปไหนครับ. <button class=\"btn-audio-mini\" onclick=\"speakThai('ขอบคุณครับ')\">🔊</button></li>\n      <li>🟡 <strong>ค่ะ (kha - Nada Jatuh) - Wanita:</strong> Digunakan untuk <strong>Pernyataan / Berterima kasih / Menjawab</strong>. Contoh: ขอบคุณค่ะ, ใช่ค่ะ. <button class=\"btn-audio-mini\" onclick=\"speakThai('ขอบคุณค่ะ')\">🔊</button></li>\n      <li>🔴 <strong>คะ (kha - Nada Tinggi) - Wanita:</strong> Digunakan untuk <strong>Kalimat Tanya / Memanggil / Menjawab panggilan</strong>. Contoh: อะไรนะคะ? (Apa ya?), ไปไหนคะ? (Mau ke mana?). <button class=\"btn-audio-mini\" onclick=\"speakThai('อะไรนะคะ')\">🔊</button></li>\n    </ul>\n  </div>\n</div>"
      },
      {
        "globalIndex": 57,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-057",
        "lessonNumber": 28,
        "title": "Berhitung Angka 1 - 99 dan Aturan Khususnya",
        "tag": "Materi [28]",
        "badgeClass": "badge-lesson",
        "icon": "🔢",
        "isGame": false,
        "summary": "Sistem berhitung 1-99 dalam bahasa Thai serta 2 pengecualian legendaris: kata 'Et' (11, 21, 31) dan 'Yi-sip' (20).",
        "keyPoints": [
          "Angka 1 sampai 10: Nueng, Saawng, Saam, Sii, Haa, Hok, Jet, Bpaaet, Gao, Sip",
          "Angka 1 di posisi satuan belasan/puluhan berubah menjadi เอ็ด (et): 11 = sip-et, 21 = yi-sip-et",
          "Angka 20 disebut ยี่สิบ (yi-sip), bukan saawng-sip!"
        ],
        "thaiSample": {
          "thai": "สิบเอ็ด, ยี่สิบ, ยี่สิบเอ็ด",
          "rtgs": "sip-et, yii-sip, yii-sip-et",
          "meaning": "11, 20, 21"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>📊 Tabel Angka 1 sampai 10</h3>\n  <div class=\"table-responsive\">\n    <table class=\"lesson-table\">\n      <thead><tr><th>Angka</th><th>Aksara Thai</th><th>Bacaan</th><th>Angka</th><th>Aksara Thai</th><th>Bacaan</th></tr></thead>\n      <tbody>\n        <tr><td>1</td><td>หนึ่ง</td><td>nueng</td><td>6</td><td>หก</td><td>hok</td></tr>\n        <tr><td>2</td><td>สอง</td><td>saawng</td><td>7</td><td>เจ็ด</td><td>jet</td></tr>\n        <tr><td>3</td><td>สาม</td><td>saam</td><td>8</td><td>แปด</td><td>bpaaet</td></tr>\n        <tr><td>4</td><td>สี่</td><td>sii</td><td>9</td><td>เก้า</td><td>gao</td></tr>\n        <tr><td>5</td><td>ห้า</td><td>haa</td><td>10</td><td>สิบ</td><td>sip</td></tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"rule-box\" style=\"margin-top:14px;\">\n    <strong>⚠️ 2 Pengecualian Emas:</strong>\n    <ol>\n      <li><strong>Angka 1 di Belakang:</strong> Selalu disebut <strong>เอ็ด (et)</strong>!<br>\n      • 11 = สิบเอ็ด (sip-et) <button class=\"btn-audio-mini\" onclick=\"speakThai('สิบเอ็ด')\">🔊</button><br>\n      • 21 = ยี่สิบเอ็ด (yii-sip-et) <button class=\"btn-audio-mini\" onclick=\"speakThai('ยี่สิบเอ็ด')\">🔊</button><br>\n      • 31 = สามสิบเอ็ด (saam-sip-et)</li>\n      <li><strong>Angka 20:</strong> Disebut <strong>ยี่สิบ (yii-sip)</strong>, BUKAN saawng-sip! <button class=\"btn-audio-mini\" onclick=\"speakThai('ยี่สิบ')\">🔊</button></li>\n    </ol>\n  </div>\n</div>"
      },
      {
        "globalIndex": 58,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-058",
        "lessonNumber": 29,
        "title": "Rumus Perkenalan Diri Pemula (Nama, Asal, Umur)",
        "tag": "Materi [29]",
        "badgeClass": "badge-lesson",
        "icon": "🤝",
        "isGame": false,
        "summary": "Template lengkap memperkenalkan diri secara natural dalam bahasa Thai dari salam, nama, negara asal, hingga umur.",
        "keyPoints": [
          "Saya: ผม (phom - pria) vs ฉัน (chan - wanita)",
          "Rumus nama: ผม/ฉันชื่อ... (Phom/Chan chue...)",
          "Rumus asal: มาจากประเทศอินโดนีเซีย (Maa jaak bpra-theet in-doh-nii-siia)",
          "Rumus umur: อายุ...ปี (Aa-yu ... bpii)"
        ],
        "thaiSample": {
          "thai": "ผมชื่อ... มาจากอินโดนีเซีย",
          "rtgs": "phom chue... maa jaak in-doh-nii-siia",
          "meaning": "Nama saya... berasal dari Indonesia"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🤝 Template Praktis Perkenalan Diri</h3>\n  <div class=\"rule-box\">\n    <p><strong>Versi Pria:</strong><br>\n    สวัสดีครับ ผมชื่อ [Nama] ครับ มาจากประเทศอินโดนีเซียครับ อายุ [Umur] ปีครับ ยินดีที่ได้รู้จักครับ<br>\n    <button class=\"btn-audio-mini\" onclick=\"speakThai('สวัสดีครับ ผมชื่อสมชาย มาจากประเทศอินโดนีเซียครับ')\">🔊 Dengarkan Contoh Pria</button></p>\n\n    <p style=\"margin-top:12px;\"><strong>Versi Wanita:</strong><br>\n    สวัสดีค่ะ ฉันชื่อ [Nama] ค่ะ มาจากประเทศอินโดนีเซียค่ะ อายุ [Umur] ปีค่ะ ยินดีที่ได้รู้จักค่ะ<br>\n    <button class=\"btn-audio-mini\" onclick=\"speakThai('สวัสดีค่ะ ฉันชื่อลลิตา มาจากประเทศอินโดนีเซียค่ะ')\">🔊 Dengarkan Contoh Wanita</button></p>\n  </div>\n</div>"
      },
      {
        "globalIndex": 59,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-059",
        "lessonNumber": 30,
        "title": "#NabungKosakata Profesi & Pekerjaan (อาชีพ)",
        "tag": "Materi [30]",
        "badgeClass": "badge-lesson",
        "icon": "💼",
        "isGame": false,
        "summary": "Kumpulan kosakata profesi sehari-hari: guru, dokter, mahasiswa, pegawai kantor, pedagang, polisi, dsb.",
        "keyPoints": [
          "Kosakata profesi umum",
          "Menyatakan profesi dalam kalimat: เป็น + [Profesi]"
        ],
        "thaiSample": {
          "thai": "ครู, หมอ, นักศึกษา, พนักงาน",
          "rtgs": "khruu, maaw, nak-suek-saa, phanak-ngaan",
          "meaning": "Guru, Dokter, Mahasiswa, Karyawan"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>💼 Daftar Kosakata Pekerjaan Populer</h3>\n  <div class=\"table-responsive\">\n    <table class=\"lesson-table\">\n      <thead><tr><th>Profesi Thai</th><th>Bacaan (RTGS)</th><th>Arti</th><th>Audio</th></tr></thead>\n      <tbody>\n        <tr><td><strong>ครู</strong></td><td>khruu</td><td>Guru / Pengajar</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ครู')\">🔊</button></td></tr>\n        <tr><td><strong>หมอ</strong></td><td>maaw</td><td>Dokter</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('หมอ')\">🔊</button></td></tr>\n        <tr><td><strong>นักศึกษา</strong></td><td>nak-suek-saa</td><td>Mahasiswa</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('นักศึกษา')\">🔊</button></td></tr>\n        <tr><td><strong>นักเรียน</strong></td><td>nak-rian</td><td>Murid sekolah</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('นักเรียน')\">🔊</button></td></tr>\n        <tr><td><strong>พนักงานบริษัท</strong></td><td>phanak-ngaan bor-ri-sat</td><td>Karyawan kantor/perusahaan</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('พนักงานบริษัท')\">🔊</button></td></tr>\n        <tr><td><strong>พ่อค้า / แม่ค้า</strong></td><td>phaaw-khaa / maae-khaa</td><td>Pedagang pria / wanita</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('พ่อค้า')\">🔊</button></td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>"
      },
      {
        "globalIndex": 60,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-060",
        "lessonNumber": 31,
        "title": "Tanya Jawab Perkenalan Diri (ft. Thai with Vee)",
        "tag": "Materi [31]",
        "badgeClass": "badge-lesson",
        "icon": "🗣️",
        "isGame": false,
        "summary": "Dialog tanya jawab natural seputar perkenalan: Kamu namanya siapa? Dari mana? Tinggal di mana?",
        "keyPoints": [
          "Pertanyaan nama: คุณชื่ออะไร (Khun chue arai?)",
          "Pertanyaan asal: มาจากไหน (Maa jaak nai?)"
        ],
        "thaiSample": {
          "thai": "คุณชื่ออะไรครับ",
          "rtgs": "khun chue arai khrap",
          "meaning": "Siapa nama Anda?"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🗣️ Pertanyaan Wajib Perkenalan</h3><ul><li><strong>คุณชื่ออะไรครับ? (Khun chue arai khrap?):</strong> Siapa nama Anda? <button class='btn-audio-mini' onclick=\"speakThai('คุณชื่ออะไรครับ')\">🔊</button></li><li><strong>คุณมาจากไหนครับ? (Khun maa jaak nai khrap?):</strong> Anda berasal dari mana? <button class='btn-audio-mini' onclick=\"speakThai('คุณมาจากไหนครับ')\">🔊</button></li></ul></div>"
      },
      {
        "globalIndex": 61,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-061",
        "lessonNumber": 32,
        "title": "Game Tanya Jawab Perkenalan Diri Bersama Sahabat",
        "tag": "Game / Kuis",
        "badgeClass": "badge-game",
        "icon": "🎮",
        "isGame": true,
        "summary": "Simulasi interaktif percakapan perkenalan di kafe bersama teman penutur asli.",
        "keyPoints": [
          "Praktik merespons cepat",
          "Percakapan kasual santai"
        ],
        "thaiSample": {
          "thai": "ยินดีที่ได้รู้จัก",
          "rtgs": "yin-dii thii dai ruu-jak",
          "meaning": "Senang berkenalan denganmu"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎮 Praktik Dialog</h3><p>Jawablah salam lawan bicara Anda: <strong>ยินดีที่ได้รู้จักเช่นกันครับ (Yin-dii thii dai ruu-jak chen-gan khrap = Senang berkenalan dengan Anda juga).</strong></p></div>"
      },
      {
        "globalIndex": 62,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-062",
        "lessonNumber": 33,
        "title": "Perbedaan Kata Tanya ไหม (Mai) vs ใช่ไหม (Chai Mai)",
        "tag": "Materi [33]",
        "badgeClass": "badge-lesson",
        "icon": "❓",
        "isGame": false,
        "summary": "Kapan menggunakan ไหม (pertanyaan terbuka ya/tidak) dan kapan menggunakan ใช่ไหม (tag question konfirmasi 'kan?').",
        "keyPoints": [
          "ไหม (mai): Menanyakan hal baru yang belum diketahui ('Apakah kamu lapar?')",
          "ใช่ไหม (chai mai): Meminta konfirmasi terhadap dugaan yang sudah ada ('Kamu orang Indo, kan?')",
          "Jawaban untuk ไหม: Verba / ไม่ + Verba",
          "Jawaban untuk ใช่ไหม: ใช่ (chai) / ไม่ใช่ (mai chai)"
        ],
        "thaiSample": {
          "thai": "หิวไหม vs คนไทยใช่ไหม",
          "rtgs": "hiu mai vs khon thai chai mai",
          "meaning": "Lapar tidak? vs Orang Thai, kan?"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🎯 Perbedaan Tajam ไหม vs ใช่ไหม</h3>\n  <div class=\"rule-box\">\n    <ul>\n      <li>🟢 <strong>ไหม (Mai) = Apakah...?:</strong> Digunakan ketika penanya benar-benar tidak tahu jawabannya.<br>\n      • หิวไหม (Hiu mai?) = Lapar tidak? <button class=\"btn-audio-mini\" onclick=\"speakThai('หิวไหม')\">🔊</button><br>\n      • ไปไหม (Pai mai?) = Mau pergi tidak? <button class=\"btn-audio-mini\" onclick=\"speakThai('ไปไหม')\">🔊</button></li>\n\n      <li>🟡 <strong>ใช่ไหม (Chai Mai) = ...Kan? / ...Bukan?:</strong> Digunakan ketika penanya sudah memiliki tebakan dan hanya ingin konfirmasi.<br>\n      • คุณเป็นคนอินโดนีเซียใช่ไหม (Khun bpen khon in-doh-nii-siia chai mai?) = Anda orang Indonesia, kan? <button class=\"btn-audio-mini\" onclick=\"speakThai('คุณเป็นคนอินโดนีเซียใช่ไหม')\">🔊</button><br>\n      • อร่อยใช่ไหม (A-roi chai mai?) = Enak, kan?</li>\n    </ul>\n  </div>\n</div>"
      },
      {
        "globalIndex": 63,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-063",
        "lessonNumber": 34,
        "title": "#NabungKosakata Benda-Benda Sehari-hari (สิ่งของ)",
        "tag": "Materi [34]",
        "badgeClass": "badge-lesson",
        "icon": "📦",
        "isGame": false,
        "summary": "Kosakata benda yang sering ditemui: buku, pulpen, telepon, meja, kursi, tas, uang, air, dsb.",
        "keyPoints": [
          "Benda di tas dan meja kerja",
          "Kata benda penting untuk belanja"
        ],
        "thaiSample": {
          "thai": "หนังสือ, ปากกา, โทรศัพท์, เงิน",
          "rtgs": "nang-sue, bpaak-gaa, thoo-ra-sap, ngoen",
          "meaning": "Buku, Pulpen, HP, Uang"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>📦 Daftar Kosakata Benda Penting</h3>\n  <ul>\n    <li><strong>หนังสือ (nang-sue):</strong> Buku <button class=\"btn-audio-mini\" onclick=\"speakThai('หนังสือ')\">🔊</button></li>\n    <li><strong>ปากกา (bpaak-gaa):</strong> Pulpen <button class=\"btn-audio-mini\" onclick=\"speakThai('ปากกา')\">🔊</button></li>\n    <li><strong>โทรศัพท์ (thoo-ra-sap):</strong> Telepon / HP <button class=\"btn-audio-mini\" onclick=\"speakThai('โทรศัพท์')\">🔊</button></li>\n    <li><strong>กระเป๋า (gra-bpao):</strong> Tas / Dompet <button class=\"btn-audio-mini\" onclick=\"speakThai('กระเป๋า')\">🔊</button></li>\n    <li><strong>เงิน (ngoen):</strong> Uang <button class=\"btn-audio-mini\" onclick=\"speakThai('เงิน')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 64,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-064",
        "lessonNumber": 35,
        "title": "Kata Tunjuk Benda (Ini, Itu Dekat, Itu Jauh)",
        "tag": "Materi [35]",
        "badgeClass": "badge-lesson",
        "icon": "👉",
        "isGame": false,
        "summary": "3 tingkatan jarak kata tunjuk benda: นี่ (nii = ini), นั่น (nan = itu), dan โน่น (noon = itu jauh di sana).",
        "keyPoints": [
          "นี่ (nii): Ini (berada di tangan atau sangat dekat)",
          "นั่น (nan): Itu (berada dekat lawan bicara)",
          "โน่น (noon): Itu di sana (jauh dari kedua pembicara)"
        ],
        "thaiSample": {
          "thai": "นี่คืออะไร / นั่นอะไร",
          "rtgs": "nii khue arai / nan arai",
          "meaning": "Ini apa? / Itu apa?"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>👉 3 Jarak Kata Tunjuk Benda</h3>\n  <div class=\"rule-box\">\n    <ol>\n      <li><strong>นี่ (nii) = Ini:</strong> นี่คืออะไร (Nii khue arai? = Ini apa?). <button class=\"btn-audio-mini\" onclick=\"speakThai('นี่คืออะไร')\">🔊</button></li>\n      <li><strong>นั่น (nan) = Itu:</strong> นั่นหนังสือของใคร (Nan nang-sue khaawng khrai? = Itu buku siapa?). <button class=\"btn-audio-mini\" onclick=\"speakThai('นั่นหนังสือของใคร')\">🔊</button></li>\n      <li><strong>โน่น (noon) = Itu di sana:</strong> โน่นคืออะไร (Noon khue arai? = Yang di sebelah sana itu apa?). <button class=\"btn-audio-mini\" onclick=\"speakThai('โน่นคืออะไร')\">🔊</button></li>\n    </ol>\n  </div>\n</div>"
      },
      {
        "globalIndex": 65,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-065",
        "lessonNumber": 36,
        "title": "#NabungKosakata Status Hubungan & Anggota Keluarga",
        "tag": "Materi [36]",
        "badgeClass": "badge-lesson",
        "icon": "👨‍👩‍👧",
        "isGame": false,
        "summary": "Kosakata silsilah keluarga: Ayah, Ibu, Kakak, Adik, Teman, Pacar, Suami, Istri.",
        "keyPoints": [
          "Ayah: พ่อ (phaaw), Ibu: แม่ (maae)",
          "Kakak: พี่ (phii), Adik: น้อง (naawng) - bisa untuk laki-laki maupun perempuan!",
          "Pacar: แฟน (faaen), Teman: เพื่อน (phuean)"
        ],
        "thaiSample": {
          "thai": "พ่อ, แม่, พี่, น้อง, แฟน",
          "rtgs": "phaaw, maae, phii, naawng, faaen",
          "meaning": "Ayah, Ibu, Kakak, Adik, Pacar"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>👨‍👩‍👧 Anggota Keluarga Inti</h3>\n  <ul>\n    <li><strong>พ่อ (phaaw):</strong> Ayah <button class=\"btn-audio-mini\" onclick=\"speakThai('พ่อ')\">🔊</button></li>\n    <li><strong>แม่ (maae):</strong> Ibu <button class=\"btn-audio-mini\" onclick=\"speakThai('แม่')\">🔊</button></li>\n    <li><strong>พี่ (phii):</strong> Kakak (laki/perempuan) <button class=\"btn-audio-mini\" onclick=\"speakThai('พี่')\">🔊</button></li>\n    <li><strong>น้อง (naawng):</strong> Adik (laki/perempuan) <button class=\"btn-audio-mini\" onclick=\"speakThai('น้อง')\">🔊</button></li>\n    <li><strong>เพื่อน (phuean):</strong> Teman <button class=\"btn-audio-mini\" onclick=\"speakThai('เพื่อน')\">🔊</button></li>\n    <li><strong>แฟน (faaen):</strong> Pacar / Pasangan <button class=\"btn-audio-mini\" onclick=\"speakThai('แฟน')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 66,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-066",
        "lessonNumber": 37,
        "title": "Menyatakan Kepemilikan (Penggunaan Kata ของ - Khaawng)",
        "tag": "Materi [37]",
        "badgeClass": "badge-lesson",
        "icon": "🏷️",
        "isGame": false,
        "summary": "Rumus menyatakan kepemilikan dalam bahasa Thai: [Benda] + ของ (khaawng) + [Pemilik].",
        "keyPoints": [
          "ของ (khaawng) berarti 'milik' atau 'punya'",
          "Urutan kata berkebalikan dari bahasa Inggris: Benda di depan, pemilik di belakang",
          "Dalam percakapan santai kata ของ sering dihilangkan (misal: กระเป๋าผม = tas saya)"
        ],
        "thaiSample": {
          "thai": "หนังสือของผม",
          "rtgs": "nang-sue khaawng phom",
          "meaning": "Buku milik saya"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🏷️ Rumus Kepemilikan</h3>\n  <div class=\"rule-box\" style=\"font-size:16px;\">\n    <strong>[ Kata Benda ] + ของ (khaawng) + [ Pemilik ]</strong>\n  </div>\n  <ul>\n    <li>โทรศัพท์<strong>ของผม</strong> (Thoo-ra-sap khaawng phom) = Telepon milik saya. <button class=\"btn-audio-mini\" onclick=\"speakThai('โทรศัพท์ของผม')\">🔊</button></li>\n    <li>บ้าน<strong>ของครู</strong> (Baan khaawng khruu) = Rumah milik guru. <button class=\"btn-audio-mini\" onclick=\"speakThai('บ้านของครู')\">🔊</button></li>\n    <li>รถ<strong>ของใคร</strong> (Rot khaawng khrai?) = Mobil milik siapa? <button class=\"btn-audio-mini\" onclick=\"speakThai('รถของใคร')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 67,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-067",
        "lessonNumber": 38,
        "title": "Kata Tunjuk Orang (Orang ini, Orang itu, Dia)",
        "tag": "Materi [38]",
        "badgeClass": "badge-lesson",
        "icon": "👥",
        "isGame": false,
        "summary": "Cara menunjuk orang di sekitar: คนนี้ (orang ini), คนนั้น (orang itu), dan เขา (dia).",
        "keyPoints": [
          "Rumus: คน (khon) + Kata Tunjuk (นี้ / นั้น)",
          "Menyapa orang ketiga dengan sopan"
        ],
        "thaiSample": {
          "thai": "คนนี้คือใคร",
          "rtgs": "khon nii khue khrai",
          "meaning": "Orang ini siapa?"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>👥 Menunjuk Seseorang</h3><ul><li><strong>คนนี้ (khon nii):</strong> Orang ini. <button class='btn-audio-mini' onclick=\"speakThai('คนนี้คือเพื่อนผม')\">🔊 คนนี้คือเพื่อนผม (Orang ini adalah teman saya)</button></li><li><strong>คนนั้น (khon nan):</strong> Orang itu.</li><li><strong>เขา (khao):</strong> Dia / Beliau.</li></ul></div>"
      },
      {
        "globalIndex": 68,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-068",
        "lessonNumber": 39,
        "title": "Partikel Tanya Konfirmasi หรอ (Roo) dan หรือเปล่า (Reuu Plao)",
        "tag": "Materi [39]",
        "badgeClass": "badge-lesson",
        "icon": "🧐",
        "isGame": false,
        "summary": "Nuansa partikel tanya kasual: หรอ (Masa sih? Beneran?) vs หรือเปล่า (Atau tidak?).",
        "keyPoints": [
          "หรอ (roo / raw): Digunakan untuk bereaksi terkejut atau penasaran ('Oh ya? Masa sih?')",
          "หรือเปล่า (reuu bplao): Pertanyaan biner ('...atau tidak?')"
        ],
        "thaiSample": {
          "thai": "จริงหรอ / ไปหรือเปล่า",
          "rtgs": "jing roo / bpai reuu bplao",
          "meaning": "Beneran nih? / Jadi pergi atau tidak?"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🧐 Nuansa Tanya Kasual</h3>\n  <ul>\n    <li><strong class=\"thai-char\">จริงหรอ (Jing roo?):</strong> Beneran nih? / Masa sih? <button class=\"btn-audio-mini\" onclick=\"speakThai('จริงหรอ')\">🔊</button></li>\n    <li><strong class=\"thai-char\">ชอบหรือเปล่า (Chaawp reuu bplao?):</strong> Suka atau tidak? <button class=\"btn-audio-mini\" onclick=\"speakThai('ชอบหรือเปล่า')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 69,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-069",
        "lessonNumber": 40,
        "title": "#NabungKosakata Nama Tempat & Fasilitas Umum (สถานที่)",
        "tag": "Materi [40]",
        "badgeClass": "badge-lesson",
        "icon": "🏢",
        "isGame": false,
        "summary": "Kosakata tempat penting: Rumah, Sekolah, Rumah Sakit, Hotel, Pasar, Bandara, Stasiun MRT/BTS.",
        "keyPoints": [
          "Fasilitas umum di Thailand",
          "Navigasi perjalanan"
        ],
        "thaiSample": {
          "thai": "บ้าน, โรงเรียน, โรงพยาบาล, ตลาด",
          "rtgs": "baan, rong-rian, rong-pha-ya-baan, dta-laat",
          "meaning": "Rumah, Sekolah, RS, Pasar"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🏢 Tempat Umum Esensial</h3>\n  <ul>\n    <li><strong>บ้าน (baan):</strong> Rumah <button class=\"btn-audio-mini\" onclick=\"speakThai('บ้าน')\">🔊</button></li>\n    <li><strong>โรงเรียน (rong-rian):</strong> Sekolah <button class=\"btn-audio-mini\" onclick=\"speakThai('โรงเรียน')\">🔊</button></li>\n    <li><strong>โรงพยาบาล (rong-pha-ya-baan):</strong> Rumah Sakit <button class=\"btn-audio-mini\" onclick=\"speakThai('โรงพยาบาล')\">🔊</button></li>\n    <li><strong>ตลาด (dta-laat):</strong> Pasar <button class=\"btn-audio-mini\" onclick=\"speakThai('ตลาด')\">🔊</button></li>\n    <li><strong>สนามบิน (sa-naam-bin):</strong> Bandara <button class=\"btn-audio-mini\" onclick=\"speakThai('สนามบิน')\">🔊</button></li>\n    <li><strong>ห้องน้ำ (haawng-naam):</strong> Toilet / Kamar mandi <button class=\"btn-audio-mini\" onclick=\"speakThai('ห้องน้ำ')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 70,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-070",
        "lessonNumber": 41,
        "title": "Kata Tunjuk Tempat (Di Sini, Di Situ, Di Sana)",
        "tag": "Materi [41]",
        "badgeClass": "badge-lesson",
        "icon": "📍",
        "isGame": false,
        "summary": "Menunjukkan lokasi keberadaan: ที่นี่ (thii-nii = di sini), ที่นั่น (thii-nan = di situ), ที่โน่น (thii-noon = di sana).",
        "keyPoints": [
          "Rumus: ที่ (thii = tempat/di) + Kata Tunjuk",
          "Menanyakan toilet: ห้องน้ำอยู่ที่ไหน (Haawng-naam yuu thii nai?)"
        ],
        "thaiSample": {
          "thai": "ที่นี่, ที่นั่น, ที่โน่น",
          "rtgs": "thii-nii, thii-nan, thii-noon",
          "meaning": "Di sini, Di situ, Di sana"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>📍 3 Kata Tunjuk Lokasi</h3>\n  <ul>\n    <li><strong>ที่นี่ (thii-nii):</strong> Di sini. Contoh: อยู่ที่นี่ (Yuu thii-nii = Ada di sini). <button class=\"btn-audio-mini\" onclick=\"speakThai('อยู่ที่นี่')\">🔊</button></li>\n    <li><strong>ที่นั่น (thii-nan):</strong> Di situ.</li>\n    <li><strong>ที่โน่น (thii-noon):</strong> Di sana.</li>\n    <li><strong>ที่ไหน (thii-nai):</strong> Di mana? Contoh: ห้องน้ำอยู่ที่ไหนครับ (Toilet ada di mana?). <button class=\"btn-audio-mini\" onclick=\"speakThai('ห้องน้ำอยู่ที่ไหนครับ')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 71,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-071",
        "lessonNumber": 42,
        "title": "Praktik 30 Kalimat Sederhana Sehari-hari",
        "tag": "Materi [42]",
        "badgeClass": "badge-game",
        "icon": "🗣️",
        "isGame": true,
        "summary": "Latihan komprehensif mendengarkan, membaca, dan menerjemahkan 30 kalimat esensial komunikasi harian.",
        "keyPoints": [
          "Kalimat sapaan, arah jalan, dan belanja",
          "Memperkuat kelancaran berbicara"
        ],
        "thaiSample": {
          "thai": "อันนี้ราคาเท่าไหร่",
          "rtgs": "an nii raa-khaa thao-rai",
          "meaning": "Berapa harga barang yang ini?"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🗣️ Kalimat Belanja Paling Populer</h3><p><strong>อันนี้ราคาเท่าไหร่ครับ? (An nii raa-khaa thao-rai khrap?):</strong> Berapa harga barang ini? <button class='btn-audio-mini' onclick=\"speakThai('อันนี้ราคาเท่าไหร่ครับ')\">🔊</button></p></div>"
      },
      {
        "globalIndex": 72,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-072",
        "lessonNumber": 43,
        "title": "Kata Ganti Orang Dasar (Pronouns) Bahasa Thai",
        "tag": "Materi [43]",
        "badgeClass": "badge-lesson",
        "icon": "👤",
        "isGame": false,
        "summary": "Tabel lengkap kata ganti orang: Saya (Phom/Chan), Anda (Khun), Dia (Khao), Kita (Rao), Mereka (Phuak-khao).",
        "keyPoints": [
          "Saya (pria): ผม (phom) - formal & sopan",
          "Saya (wanita): ฉัน (chan) atau ดิฉัน (di-chan - sangat formal)",
          "Anda / Kamu: คุณ (khun) - netral & sangat sopan",
          "Dia: เขา (khao), Kita/Kami: เรา (rao), Mereka: พวกเขา (phuak-khao)"
        ],
        "thaiSample": {
          "thai": "ผม, ฉัน, คุณ, เขา, เรา",
          "rtgs": "phom, chan, khun, khao, rao",
          "meaning": "Saya (pria), Saya (wanita), Anda, Dia, Kita"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>👤 Matriks Kata Ganti Sopan</h3>\n  <div class=\"table-responsive\">\n    <table class=\"lesson-table\">\n      <thead><tr><th>Kata Ganti</th><th>Aksara Thai</th><th>RTGS</th><th>Arti</th><th>Penggunaan</th></tr></thead>\n      <tbody>\n        <tr><td>Orang I (Pria)</td><td><strong>ผม</strong></td><td>phom</td><td>Saya</td><td>Sopan untuk semua usia</td></tr>\n        <tr><td>Orang I (Wanita)</td><td><strong>ฉัน</strong></td><td>chan</td><td>Saya</td><td>Sopan & netral</td></tr>\n        <tr><td>Orang II</td><td><strong>คุณ</strong></td><td>khun</td><td>Anda / Kamu</td><td>Sangat sopan & menghargai</td></tr>\n        <tr><td>Orang III</td><td><strong>เขา</strong></td><td>khao</td><td>Dia / Beliau</td><td>Tunggal (laki/perempuan)</td></tr>\n        <tr><td>Orang I Jamak</td><td><strong>เรา</strong></td><td>rao</td><td>Kita / Kami</td><td>Bisa juga berarti 'aku' pada teman</td></tr>\n        <tr><td>Orang III Jamak</td><td><strong>พวกเขา</strong></td><td>phuak-khao</td><td>Mereka</td><td>Kelompok orang lain</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>"
      },
      {
        "globalIndex": 73,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-073",
        "lessonNumber": 44,
        "title": "Kata Ganti Slang & Bahasa Gaul Thai (Kuu, Meung, Tua-eng)",
        "tag": "Materi [44]",
        "badgeClass": "badge-lesson",
        "icon": "😎",
        "isGame": false,
        "summary": "Memahami kata ganti kasual bahasa gaul anak muda Thai, batasan etika, dan kapan boleh/tidak boleh diucapkan.",
        "keyPoints": [
          "กู (kuu) & มึง (meung): Aku & Kau yang sangat kasar / sangat akrab (HANYA untuk sahabat dekat)",
          "JANGAN PERNAH gunakan กู/มึง pada orang asing, orang tua, atau di tempat umum!",
          "ตัวเอง (dtua-eng): Panggilan manis 'kamu / ayang' untuk pacar atau teman akrab"
        ],
        "thaiSample": {
          "thai": "ตัวเอง / เรา",
          "rtgs": "dtua-eng / rao",
          "meaning": "Kamu (manis/pacar) / Aku"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>⚠️ Etika Bahasa Slang Thai</h3>\n  <p>Dalam serial drama atau pergaulan anak muda di Bangkok, Anda akan sering mendengar kata <strong>กู (kuu = gue)</strong> dan <strong>มึง (meung = lu)</strong>.</p>\n  <div class=\"rule-box\" style=\"border-color:#ef4444;\">\n    <strong style=\"color:#ef4444;\">Peringatan Penting:</strong> Kata ini hanya boleh diucapkan di antara sahabat yang sudah saling mengenal sangat akrab bertahun-tahun. Jika Anda mengucapkannya kepada orang baru, supir taksi, atau penjual makanan, kata ini terdengar <strong>sangat kasar dan menghina</strong>!\n  </div>\n</div>"
      },
      {
        "globalIndex": 74,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-074",
        "lessonNumber": 45,
        "title": "#NabungKosakata Kata Kerja Bagian 1 (Aktivitas Dasar)",
        "tag": "Materi [45]",
        "badgeClass": "badge-lesson",
        "icon": "🏃",
        "isGame": false,
        "summary": "Kata kerja harian terpenting: Makan, Minum, Pergi, Datang, Tidur, Duduk, Berdiri, Melihat, Mendengar.",
        "keyPoints": [
          "Kata kerja dasar tanpa konjugasi",
          "Bahasa Thai tidak memiliki perubahan bentuk kata kerja!"
        ],
        "thaiSample": {
          "thai": "กิน, ดื่ม, ไป, มา, นอน",
          "rtgs": "kin, duum, bpai, maa, naawn",
          "meaning": "Makan, Minum, Pergi, Datang, Tidur"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🏃 10 Kata Kerja Fundamental</h3>\n  <ul>\n    <li><strong>กิน (kin) / ทาน (thaan):</strong> Makan <button class=\"btn-audio-mini\" onclick=\"speakThai('กินข้าว')\">🔊 กินข้าว (makan nasi)</button></li>\n    <li><strong>ดื่ม (duum):</strong> Minum <button class=\"btn-audio-mini\" onclick=\"speakThai('ดื่มน้ำ')\">🔊 ดื่มน้ำ (minum air)</button></li>\n    <li><strong>ไป (bpai):</strong> Pergi <button class=\"btn-audio-mini\" onclick=\"speakThai('ไป')\">🔊</button></li>\n    <li><strong>มา (maa):</strong> Datang <button class=\"btn-audio-mini\" onclick=\"speakThai('มา')\">🔊</button></li>\n    <li><strong>นอน (naawn):</strong> Tidur <button class=\"btn-audio-mini\" onclick=\"speakThai('นอน')\">🔊</button></li>\n    <li><strong>ดู (duu):</strong> Menonton / Melihat <button class=\"btn-audio-mini\" onclick=\"speakThai('ดู')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 75,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-075",
        "lessonNumber": 46,
        "title": "Menyusun Kalimat Sederhana SVO (Tata Bahasa Dasar Thai)",
        "tag": "Materi [46]",
        "badgeClass": "badge-lesson",
        "icon": "🧱",
        "isGame": false,
        "summary": "Struktur pembentukan kalimat bahasa Thai mengikuti pola SVO persis seperti bahasa Indonesia (Subjek + Verba + Objek).",
        "keyPoints": [
          "Pola kalimat: Subjek + Predikat (Kata Kerja) + Objek",
          "Tidak ada perubahan bentuk kata kerja (tenses, gender, atau plural tidak mengubah verba)",
          "Mudah dipelajari oleh penutur bahasa Indonesia karena struktur urutannya identik!"
        ],
        "thaiSample": {
          "thai": "ผมกินข้าว",
          "rtgs": "phom kin khaao",
          "meaning": "Saya makan nasi (S-V-O)"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🧱 Pola Kalimat SVO</h3>\n  <div class=\"rule-box\" style=\"font-size:16px;\">\n    <strong>[ Subjek ] + [ Kata Kerja ] + [ Objek ]</strong>\n  </div>\n  <p>Perhatikan kemiripan mutlak dengan bahasa Indonesia:</p>\n  <ul>\n    <li><strong>ผม (Saya) + กิน (makan) + ข้าว (nasi)</strong> = ผมกินข้าว (Phom kin khaao) <button class=\"btn-audio-mini\" onclick=\"speakThai('ผมกินข้าว')\">🔊</button></li>\n    <li><strong>เขา (Dia) + ดื่ม (minum) + กาแฟ (kopi)</strong> = เขาดื่มกาแฟ (Khao duum gaa-faae) <button class=\"btn-audio-mini\" onclick=\"speakThai('เขาดื่มกาแฟ')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 76,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-076",
        "lessonNumber": 47,
        "title": "3 Kata Spesial Pemula untuk Kalimat Lebih Bermakna",
        "tag": "Materi [47]",
        "badgeClass": "badge-lesson",
        "icon": "✨",
        "isGame": false,
        "summary": "3 kata penguat kalimat: ด้วย (juga), มาก (sangat/banget), dan นิดหน่อย (sedikit).",
        "keyPoints": [
          "ด้วย (duay): Diletakkan di akhir kalimat untuk arti 'juga/pula'",
          "มาก (maak): Diletakkan setelah kata sifat untuk arti 'sangat/sekali'",
          "นิดหน่อย (nit-noi): Berarti 'sedikit' (contoh: พูดได้นิดหน่อย = bisa bicara sedikit)"
        ],
        "thaiSample": {
          "thai": "อร่อยมาก / พูดได้นิดหน่อย",
          "rtgs": "a-roi maak / phuut dai nit-noi",
          "meaning": "Enak banget / Bisa bicara sedikit"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>✨ 3 Kata Ajaib Pemula</h3>\n  <ul>\n    <li><strong class=\"thai-char\">มาก (maak) = Sangat / Sekali:</strong><br>\n    อร่อยมาก (A-roi maak) = Enak banget! <button class=\"btn-audio-mini\" onclick=\"speakThai('อร่อยมาก')\">🔊</button><br>\n    ร้อนมาก (Raawn maak) = Panas sekali!</li>\n\n    <li style=\"margin-top:10px;\"><strong class=\"thai-char\">นิดหน่อย (nit-noi) = Sedikit:</strong><br>\n    พูดภาษาไทยได้นิดหน่อย (Phuut phaa-saa thai dai nit-noi) = Saya bisa bicara bahasa Thai sedikit. <button class=\"btn-audio-mini\" onclick=\"speakThai('พูดภาษาไทยได้นิดหน่อย')\">🔊</button></li>\n\n    <li style=\"margin-top:10px;\"><strong class=\"thai-char\">ด้วย (duay) = Juga / Ikutan:</strong><br>\n    เอาอันนี้ด้วย (Ao an nii duay) = Mau yang ini juga. <button class=\"btn-audio-mini\" onclick=\"speakThai('เอาอันนี้ด้วย')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 77,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-077",
        "lessonNumber": 48,
        "title": "Latihan Terjemah Kalimat Pemula (Part 1)",
        "tag": "Materi [48]",
        "badgeClass": "badge-lesson",
        "icon": "📝",
        "isGame": false,
        "summary": "Bedah tuntas penerjemahan kalimat dari bahasa Indonesia ke bahasa Thai secara kata per kata.",
        "keyPoints": [
          "Penerapan SVO",
          "Penggabungan kata benda dan kata sifat"
        ],
        "thaiSample": {
          "thai": "ฉันชอบอาหารไทยมาก",
          "rtgs": "chan chaawp aa-haan thai maak",
          "meaning": "Saya sangat suka makanan Thai"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>📝 Bedah Terjemah</h3><p><strong>'Saya sangat suka makanan Thai':</strong></p><p>ฉัน (Saya) + ชอบ (Suka) + อาหารไทย (Makanan Thai) + มาก (Sangat) = <strong>ฉันชอบอาหารไทยมาก</strong>. <button class='btn-audio-mini' onclick=\"speakThai('ฉันชอบอาหารไทยมาก')\">🔊</button></p></div>"
      },
      {
        "globalIndex": 78,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-078",
        "lessonNumber": 49,
        "title": "Jangan Tertukar! Perbedaan เอา (Ao) vs อยาก (Yaak)",
        "tag": "Materi [49]",
        "badgeClass": "badge-lesson",
        "icon": "⚠️",
        "isGame": false,
        "summary": "Kesalahan paling sering pemula: membedakan เอา (menginginkan barang fisik) vs อยาก (keinginan beraktivitas / verba).",
        "keyPoints": [
          "เอา (ao) + Kata Benda: Menginginkan barang/makanan konkret ('Saya mau kopi' = เอา กาแฟ)",
          "อยาก (yaak) + Kata Kerja: Ingin melakukan tindakan ('Saya ingin pergi' = อยาก ไป)",
          "Jangan pernah berkata 'เอา ไป' untuk maksud ingin pergi!"
        ],
        "thaiSample": {
          "thai": "เอากาแฟ vs อยากไป",
          "rtgs": "ao gaa-faae vs yaak bpai",
          "meaning": "Mau kopi (barang) vs Ingin pergi (aktivitas)"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>⚠️ Rumus Membedakan เอา vs อยาก</h3>\n  <div class=\"rule-box\">\n    <ul>\n      <li>🟢 <strong>เอา (Ao) + [ KATA BENDA ]:</strong> Digunakan saat memesan barang, makanan, atau mengambil sesuatu fisik.<br>\n      • เอากาแฟเย็น (Ao gaa-faae yen) = Saya mau es kopi! <button class=\"btn-audio-mini\" onclick=\"speakThai('เอากาแฟเย็น')\">🔊</button><br>\n      • ไม่เอา (Mai ao) = Gak mau / Gak usah.</li>\n\n      <li style=\"margin-top:10px;\">🟡 <strong>อยาก (Yaak) + [ KATA KERJA ]:</strong> Digunakan saat ingin melakukan suatu tindakan atau aktivitas.<br>\n      • อยากไปเที่ยว (Yaak bpai thiao) = Ingin jalan-jalan. <button class=\"btn-audio-mini\" onclick=\"speakThai('อยากไปเที่ยว')\">🔊</button><br>\n      • อยากกินส้มตำ (Yaak kin som-dtam) = Pengen makan som tum.</li>\n    </ul>\n  </div>\n</div>"
      },
      {
        "globalIndex": 79,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-079",
        "lessonNumber": 50,
        "title": "Menyatakan Kemampuan: ได้ (Bisa) vs ไม่ได้ (Tidak Bisa)",
        "tag": "Materi [50]",
        "badgeClass": "badge-lesson",
        "icon": "💪",
        "isGame": false,
        "summary": "Rumus menyatakan kemampuan melakukan sesuatu dengan kata ได้ (dai) dan penempatannya di akhir kalimat.",
        "keyPoints": [
          "Kata ได้ (dai) diletakkan di AKHIR kalimat, bukan di depan verba seperti bahasa Indonesia!",
          "Rumus: [Subjek] + [Verba] + ได้ (dai = bisa)",
          "Bentuk negatif: [Subjek] + [Verba] + ไม่ได้ (mai dai = tidak bisa)"
        ],
        "thaiSample": {
          "thai": "พูดได้ / กินเผ็ดไม่ได้",
          "rtgs": "phuut dai / kin phet mai dai",
          "meaning": "Bisa bicara / Tidak bisa makan pedas"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>💪 Posisi Kata 'Bisa' di Akhir Kalimat</h3>\n  <p>Dalam bahasa Indonesia kita berkata: <em>'Saya <strong>bisa</strong> bicara bahasa Thai'</em>.</p>\n  <p>Namun dalam bahasa Thai, kata <strong>ได้ (dai)</strong> wajib diletakkan di <strong>ujung paling belakang kalimat</strong>:</p>\n  <div class=\"rule-box\">\n    <ul>\n      <li>ผมพูดภาษาไทย<strong>ได้</strong> (Phom phuut phaa-saa thai dai) = Saya bisa bicara bahasa Thai. <button class=\"btn-audio-mini\" onclick=\"speakThai('ผมพูดภาษาไทยได้')\">🔊</button></li>\n      <li>ฉันกินเผ็ด<strong>ไม่ได้</strong> (Chan kin phet mai dai) = Saya tidak bisa makan makanan pedas! <button class=\"btn-audio-mini\" onclick=\"speakThai('ฉันกินเผ็ดไม่ได้')\">🔊</button></li>\n    </ul>\n  </div>\n</div>"
      },
      {
        "globalIndex": 80,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-080",
        "lessonNumber": 51,
        "title": "Latihan Terjemah Kalimat Pemula (Part 2)",
        "tag": "Materi [51]",
        "badgeClass": "badge-game",
        "icon": "📝",
        "isGame": true,
        "summary": "Latihan menyusun kalimat kombinasi keinginan (อยาก/เอา) dan kemampuan (ได้/ไม่ได้).",
        "keyPoints": [
          "Kalimat gabungan di restoran",
          "Meminta tolong kepada staf"
        ],
        "thaiSample": {
          "thai": "ช่วยพูดช้าๆ หน่อยได้ไหมครับ",
          "rtgs": "chuay phuut chaa-chaa noi dai mai khrap",
          "meaning": "Bisa tolong bicara pelan-pelan?"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>📝 Kalimat Penyelamat Turis</h3><p><strong>ช่วยพูดช้าๆ หน่อยได้ไหมครับ (Chuay phuut chaa-chaa noi dai mai khrap?):</strong> Bisakah tolong berbicara pelan-pelan sedikit? <button class='btn-audio-mini' onclick=\"speakThai('ช่วยพูดช้าๆหน่อยได้ไหมครับ')\">🔊</button></p></div>"
      },
      {
        "globalIndex": 81,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-081",
        "lessonNumber": 52,
        "title": "Menyatakan Kesamaan: ก็...เหมือนกัน (Juga... Sama)",
        "tag": "Materi [52]",
        "badgeClass": "badge-lesson",
        "icon": "🤝",
        "isGame": false,
        "summary": "Cara mengekspresikan kesetujuan 'Saya juga begitu' atau 'Sama-sama menyukai hal tersebut'.",
        "keyPoints": [
          "Frasa: ผมก็เหมือนกัน (Phom gor muean-gan = Saya juga sama)",
          "Merespons pernyataan orang lain"
        ],
        "thaiSample": {
          "thai": "ผมก็เหมือนกัน",
          "rtgs": "phom gor muean-gan",
          "meaning": "Saya juga sama / Me too"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🤝 Ungkapan 'Me Too' Bahasa Thai</h3><p>Ketika teman Anda mengatakan <em>'Saya suka makanan Thai'</em>, Anda cukup merespons dengan: <strong>ผมก็เหมือนกันครับ (Phom gor muean-gan khrap = Saya juga sama!).</strong> <button class='btn-audio-mini' onclick=\"speakThai('ผมก็เหมือนกันครับ')\">🔊</button></p></div>"
      },
      {
        "globalIndex": 82,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-082",
        "lessonNumber": 53,
        "title": "4 Kata Sambung Penting (Dan, Tapi, Atau, Kalau)",
        "tag": "Materi [53]",
        "badgeClass": "badge-lesson",
        "icon": "🔗",
        "isGame": false,
        "summary": "Menghubungkan dua klausa kalimat: และ (dan), แต่ (tapi), หรือ (atau), dan ถ้า (kalau/jika).",
        "keyPoints": [
          "และ (lae): Dan",
          "แต่ (dtate): Tetapi / Tapi",
          "หรือ (reuu): Atau",
          "ถ้า (thaa): Kalau / Jika"
        ],
        "thaiSample": {
          "thai": "และ, แต่, หรือ, ถ้า",
          "rtgs": "lae, dtae, reuu, thaa",
          "meaning": "Dan, Tapi, Atau, Jika"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🔗 4 Kata Sambung Inti</h3>\n  <ul>\n    <li><strong>และ (lae) = Dan:</strong> ผมและเพื่อน (Phom lae phuean = Saya dan teman). <button class=\"btn-audio-mini\" onclick=\"speakThai('ผมและเพื่อน')\">🔊</button></li>\n    <li><strong>แต่ (dtae) = Tapi:</strong> อยากไปแต่ไม่มีเงิน (Yaak bpai dtae mai mii ngoen = Pengen pergi tapi gak ada uang). <button class=\"btn-audio-mini\" onclick=\"speakThai('อยากไปแต่ไม่มีเงิน')\">🔊</button></li>\n    <li><strong>หรือ (reuu) = Atau:</strong> ชาหรือกาแฟ (Chaa reuu gaa-faae = Teh atau kopi?). <button class=\"btn-audio-mini\" onclick=\"speakThai('ชาหรือกาแฟ')\">🔊</button></li>\n    <li><strong>ถ้า (thaa) = Kalau:</strong> ถ้าว่างจะไป (Thaa waang ja bpai = Kalau senggang saya akan pergi). <button class=\"btn-audio-mini\" onclick=\"speakThai('ถ้าว่างจะไป')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 83,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-083",
        "lessonNumber": 54,
        "title": "#NabungKosakata Kata Kerja Bagian 2 (Aktivitas Sosial)",
        "tag": "Materi [54]",
        "badgeClass": "badge-lesson",
        "icon": "💼",
        "isGame": false,
        "summary": "Kosakata kata kerja kegiatan: Membeli, Menjual, Bekerja, Belajar, Membaca, Menulis, Bertemu.",
        "keyPoints": [
          "Kata kerja transaksi dan belajar",
          "Kosakata sehari-hari"
        ],
        "thaiSample": {
          "thai": "ซื้อ, ขาย, ทำงาน, เรียน, เจอ",
          "rtgs": "sue, khaai, tham-ngaan, rian, joe",
          "meaning": "Beli, Jual, Bekerja, Belajar, Bertemu"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>💼 Kata Kerja Penting Bagian 2</h3>\n  <ul>\n    <li><strong>ซื้อ (sue):</strong> Membeli <button class=\"btn-audio-mini\" onclick=\"speakThai('ซื้อของ')\">🔊 ซื้อของ (belanja)</button></li>\n    <li><strong>ขาย (khaai):</strong> Menjual <button class=\"btn-audio-mini\" onclick=\"speakThai('ขาย')\">🔊</button></li>\n    <li><strong>ทำงาน (tham-ngaan):</strong> Bekerja <button class=\"btn-audio-mini\" onclick=\"speakThai('ทำงาน')\">🔊</button></li>\n    <li><strong>เรียน (rian):</strong> Belajar <button class=\"btn-audio-mini\" onclick=\"speakThai('เรียนภาษาไทย')\">🔊 เรียนภาษาไทย (belajar b. Thai)</button></li>\n    <li><strong>เจอ (joe):</strong> Bertemu / Menjumpai <button class=\"btn-audio-mini\" onclick=\"speakThai('เจอกัน')\">🔊 เจอกัน (sampai jumpa)</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 84,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-084",
        "lessonNumber": 55,
        "title": "Bersama Siapa? Penggunaan Kata กับ (Kap)",
        "tag": "Materi [55]",
        "badgeClass": "badge-lesson",
        "icon": "👥",
        "isGame": false,
        "summary": "Menggunakan kata กับ (kap) untuk arti 'dengan / bersama': [Aktivitas] + กับ + [Orang].",
        "keyPoints": [
          "Rumus: ไปกับ... (Pai kap... = Pergi dengan...)",
          "Menyatakan rekan beraktivitas"
        ],
        "thaiSample": {
          "thai": "ไปกับเพื่อน",
          "rtgs": "bpai kap phuean",
          "meaning": "Pergi bersama teman"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>👥 Menggunakan Kata กับ (Kap)</h3><p>Contoh: <strong>ผมกินข้าวกับแม่ (Phom kin khaao kap maae):</strong> Saya makan nasi bersama ibu. <button class='btn-audio-mini' onclick=\"speakThai('ผมกินข้าวกับแม่')\">🔊</button></p></div>"
      },
      {
        "globalIndex": 85,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-085",
        "lessonNumber": 56,
        "title": "Bersama-sama: Penggunaan Kata ด้วยกัน (Duay-kan)",
        "tag": "Materi [56]",
        "badgeClass": "badge-lesson",
        "icon": "🤝",
        "isGame": false,
        "summary": "Perbedaan กับ (dengan orang tertentu) vs ด้วยกัน (duay-kan = bersama-sama sebagai satu kelompok).",
        "keyPoints": [
          "Kata ด้วยกัน diletakkan di akhir kalimat",
          "Mengajak atau menyatakan aktivitas kolektif"
        ],
        "thaiSample": {
          "thai": "ไปด้วยกันไหม",
          "rtgs": "bpai duay-kan mai",
          "meaning": "Mau pergi bareng-bareng tidak?"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🤝 Mengajak Bareng: ด้วยกัน</h3><p><strong>ไปด้วยกันไหมครับ? (Bpai duay-kan mai khrap?):</strong> Mau pergi bareng-bareng gak? <button class='btn-audio-mini' onclick=\"speakThai('ไปด้วยกันไหมครับ')\">🔊</button></p></div>"
      },
      {
        "globalIndex": 86,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-086",
        "lessonNumber": 57,
        "title": "Saling / Satu Sama Lain: Penggunaan Kata กัน (Kan)",
        "tag": "Materi [57]",
        "badgeClass": "badge-lesson",
        "icon": "🔄",
        "isGame": false,
        "summary": "Fungsi partikel กัน (kan) di belakang verba untuk menyatakan tindakan timbal balik (saling mencintai, saling bicara, dll.).",
        "keyPoints": [
          "Verba + กัน = Saling melakukan tindakan tersebut",
          "รักกัน (rak kan = saling mencintai)",
          "คุยกัน (khui kan = saling mengobrol / bercakap-cakap)"
        ],
        "thaiSample": {
          "thai": "รักกัน / คุยกัน",
          "rtgs": "rak kan / khui kan",
          "meaning": "Saling mencintai / Saling mengobrol"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🔄 Makna Saling: กัน (Kan)</h3><ul><li><strong>รักกัน (rak kan):</strong> Saling mencintai. <button class='btn-audio-mini' onclick=\"speakThai('เรารักกัน')\">🔊 เรารักกัน (Kita saling mencintai)</button></li><li><strong>คุยกัน (khui kan):</strong> Mengobrol bersama.</li></ul></div>"
      },
      {
        "globalIndex": 87,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-087",
        "lessonNumber": 58,
        "title": "Mengajak Seseorang Ikut Serta: Menggunakan ด้วย (Duay)",
        "tag": "Materi [58]",
        "badgeClass": "badge-lesson",
        "icon": "🙋",
        "isGame": false,
        "summary": "Cara meminta izin ikut serta atau mengajak seseorang bergabung dalam suatu aktivitas.",
        "keyPoints": [
          "ไปด้วยได้ไหม (Bpai duay dai mai? = Boleh saya ikut pergi?)",
          "Penggunaan kata ด้วย untuk bergabung"
        ],
        "thaiSample": {
          "thai": "ไปด้วยคน",
          "rtgs": "bpai duay khon",
          "meaning": "Saya ikut pergi satu orang!"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🙋 Minta Ikut: ไปด้วย</h3><p>Ketika teman Anda hendak pergi ke pasar malam dan Anda ingin ikut: <strong>ไปด้วยได้ไหมครับ? (Bpai duay dai mai khrap? = Boleh saya ikut?).</strong> <button class='btn-audio-mini' onclick=\"speakThai('ไปด้วยได้ไหมครับ')\">🔊</button></p></div>"
      },
      {
        "globalIndex": 88,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-088",
        "lessonNumber": 59,
        "title": "Latihan Terjemah Kalimat Pemula (Part 3)",
        "tag": "Materi [59]",
        "badgeClass": "badge-lesson",
        "icon": "📝",
        "isGame": false,
        "summary": "Latihan menerjemahkan dialog percakapan nongkrong bersama teman penutur asli Thai.",
        "keyPoints": [
          "Kombinasi กับ, ด้วยกัน, dan กัน dalam satu dialog"
        ],
        "thaiSample": {
          "thai": "พรุ่งนี้ไปกินข้าวด้วยกันนะ",
          "rtgs": "phrung-nii bpai kin khaao duay-kan na",
          "meaning": "Besok ayo pergi makan bareng ya"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>📝 Latihan Ajakan</h3><p><strong>พรุ่งนี้ไปกินข้าวด้วยกันนะ (Phrung-nii bpai kin khaao duay-kan na):</strong> Besok ayo pergi makan bareng-bareng ya! <button class='btn-audio-mini' onclick=\"speakThai('พรุ่งนี้ไปกินข้าวด้วยกันนะ')\">🔊</button></p></div>"
      },
      {
        "globalIndex": 89,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-089",
        "lessonNumber": 60,
        "title": "Sudah Selesai! Penggunaan Kata แล้ว (Laeo)",
        "tag": "Materi [60]",
        "badgeClass": "badge-lesson",
        "icon": "✅",
        "isGame": false,
        "summary": "Menyatakan aspek selesai atau perubahan keadaan dengan kata แล้ว (laeo) di akhir kalimat.",
        "keyPoints": [
          "Kata แล้ว (laeo) diletakkan di akhir kalimat untuk arti 'sudah'",
          "กินข้าวแล้ว (kin khaao laeo = sudah makan)",
          "เข้าใจแล้ว (khao-jai laeo = sudah paham / mengerti)"
        ],
        "thaiSample": {
          "thai": "กินข้าวแล้ว / เข้าใจแล้ว",
          "rtgs": "kin khaao laeo / khao-jai laeo",
          "meaning": "Sudah makan / Sudah paham"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>✅ Menyatakan 'Sudah': แล้ว (Laeo)</h3>\n  <div class=\"rule-box\">\n    <strong>[ Aktivitas / Kondisi ] + แล้ว (laeo)</strong>\n  </div>\n  <ul>\n    <li>กินข้าว<strong>แล้ว</strong> (Kin khaao laeo) = Sudah makan. <button class=\"btn-audio-mini\" onclick=\"speakThai('กินข้าวแล้ว')\">🔊</button></li>\n    <li>เข้าใจ<strong>แล้ว</strong> (Khao-jai laeo) = Saya sudah mengerti! <button class=\"btn-audio-mini\" onclick=\"speakThai('เข้าใจแล้วครับ')\">🔊</button></li>\n    <li>อิ่ม<strong>แล้ว</strong> (Im laeo) = Sudah kenyang. <button class=\"btn-audio-mini\" onclick=\"speakThai('อิ่มแล้ว')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 90,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-090",
        "lessonNumber": 61,
        "title": "Belum... Penjelasan Lengkap Kata ยัง (Yang) / ยังไม่ได้",
        "tag": "Materi [61]",
        "badgeClass": "badge-lesson",
        "icon": "⏳",
        "isGame": false,
        "summary": "Cara menyatakan 'belum' dengan kata ยัง (yang) dan struktur lengkap kalimat penyangkalannya.",
        "keyPoints": [
          "Jawaban singkat 'belum': ยัง (yang) atau ยังครับ/ค่ะ",
          "Kalimat lengkap: ยังไม่ได้ + [Kata Kerja] (Yang mai dai + Verba)",
          "Contoh: ยังไม่ได้กิน (Yang mai dai kin = Belum makan)"
        ],
        "thaiSample": {
          "thai": "ยังไม่ได้กิน / ยังครับ",
          "rtgs": "yang mai dai kin / yang khrap",
          "meaning": "Belum makan / Belum (sopan)"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>⏳ Menyatakan 'Belum': ยัง (Yang)</h3>\n  <ul>\n    <li>Jawaban singkat sopan: <strong>ยังครับ (Yang khrap) / ยังค่ะ (Yang kha)</strong> = Belum. <button class=\"btn-audio-mini\" onclick=\"speakThai('ยังครับ')\">🔊</button></li>\n    <li>Kalimat utuh: <strong>ยังไม่ได้กินข้าว (Yang mai dai kin khaao)</strong> = Belum makan nasi. <button class=\"btn-audio-mini\" onclick=\"speakThai('ยังไม่ได้กินข้าว')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 91,
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "id": "jazmi-materi-091",
        "lessonNumber": 62,
        "title": "Latihan Terjemah Kalimat Pemula (Part 4 - Evaluasi Akhir Part III)",
        "tag": "Materi [62]",
        "badgeClass": "badge-lesson",
        "icon": "🏆",
        "isGame": false,
        "summary": "Ujian kelulusan tata bahasa dasar SVO, aspek waktu sudah/belum, dan partikel percakapan.",
        "keyPoints": [
          "Evaluasi 37 materi tata bahasa Part III",
          "Kesiapan masuk ke topik aktivitas Part IV"
        ],
        "thaiSample": {
          "thai": "คุณกินข้าวหรือยังครับ",
          "rtgs": "khun kin khaao reuu yang khrap",
          "meaning": "Apakah Anda sudah makan belum?"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🏆 Kelulusan Part III</h3><p>Pertanyaan legendaris masyarakat Thailand: <strong>กินข้าวหรือยังครับ? (Kin khaao reuu yang khrap? = Sudah makan belum?).</strong> Merupakan bentuk sapaan keakraban khas Thailand. <button class='btn-audio-mini' onclick=\"speakThai('กินข้าวหรือยังครับ')\">🔊</button></p></div>"
      }
    ]
  },
  {
    "part": 4,
    "partTitle": "Part IV: Ceritakan Aktivitasmu!",
    "moduleCount": 28,
    "lessons": [
      {
        "globalIndex": 92,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-092",
        "lessonNumber": 63,
        "title": "Nama-Nama Hari dalam Bahasa Thai & Asosiasi Warna Budayanya",
        "tag": "Materi [63]",
        "badgeClass": "badge-game",
        "icon": "📅",
        "isGame": true,
        "summary": "7 nama hari dalam seminggu dan tradisi warna keberuntungan harian di Thailand.",
        "keyPoints": [
          "Senin: วันจันทร์ (Wan-jan) - Kuning (Warna Raja)",
          "Selasa: วันอังคาร (Wan-angkhaan) - Merah Muda",
          "Rabu: วันพุธ (Wan-phut) - Hijau",
          "Kamis: วันพฤหัสบดี (Wan-phrue-hat) - Jingga / Oranye",
          "Jumat: วันศุกร์ (Wan-suk) - Biru Muda",
          "Sabtu: วันเสาร์ (Wan-sao) - Ungu",
          "Minggu: วันอาทิตย์ (Wan-aa-thit) - Merah"
        ],
        "thaiSample": {
          "thai": "วันจันทร์, วันศุกร์, วันอาทิตย์",
          "rtgs": "wan-jan, wan-suk, wan-aa-thit",
          "meaning": "Senin, Jumat, Minggu"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>📅 7 Hari dalam Seminggu & Filosofi Warnanya</h3>\n  <div class=\"table-responsive\">\n    <table class=\"lesson-table\">\n      <thead><tr><th>Hari</th><th>Aksara Thai</th><th>RTGS</th><th>Warna Simbolik</th><th>Audio</th></tr></thead>\n      <tbody>\n        <tr><td>Senin</td><td><strong>วันจันทร์</strong></td><td>wan-jan</td><td>Kuning (Warna Raja Rama IX & X)</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('วันจันทร์')\">🔊</button></td></tr>\n        <tr><td>Selasa</td><td><strong>วันอังคาร</strong></td><td>wan-ang-khaan</td><td>Merah Muda (Pink)</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('วันอังคาร')\">🔊</button></td></tr>\n        <tr><td>Rabu</td><td><strong>วันพุธ</strong></td><td>wan-phut</td><td>Hijau</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('วันพุธ')\">🔊</button></td></tr>\n        <tr><td>Kamis</td><td><strong>วันพฤหัสบดี</strong></td><td>wan-phrue-hat-sa-baaw-dii</td><td>Jingga / Oranye (Hari Guru)</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('วันพฤหัสบดี')\">🔊</button></td></tr>\n        <tr><td>Jumat</td><td><strong>วันศุกร์</strong></td><td>wan-suk</td><td>Biru Muda (Hari Ratu Sirikit)</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('วันศุกร์')\">🔊</button></td></tr>\n        <tr><td>Sabtu</td><td><strong>วันเสาร์</strong></td><td>wan-sao</td><td>Ungu</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('วันเสาร์')\">🔊</button></td></tr>\n        <tr><td>Minggu</td><td><strong>วันอาทิตย์</strong></td><td>wan-aa-thit</td><td>Merah</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('วันอาทิตย์')\">🔊</button></td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>"
      },
      {
        "globalIndex": 93,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-093",
        "lessonNumber": 64,
        "title": "Waktu & Tenses: Masa Lalu, Masa Sekarang, dan Masa Depan",
        "tag": "Materi [64]",
        "badgeClass": "badge-lesson",
        "icon": "⏳",
        "isGame": false,
        "summary": "Tata cara menyatakan waktu tanpa konjugasi kata kerja: menggunakan partikel เคย (pernah/lampau), กำลัง (sedang), dan จะ (akan).",
        "keyPoints": [
          "Masa Lalu: เคย (khoeey) = Pernah / Lampau",
          "Masa Sekarang: กำลัง (kam-lang) + Verba + อยู่ (yuu) = Sedang berlangsung",
          "Masa Depan: จะ (ja) + Verba = Akan"
        ],
        "thaiSample": {
          "thai": "เคยไป / กำลังกิน / จะไป",
          "rtgs": "khoeey bpai / kam-lang kin / ja bpai",
          "meaning": "Pernah pergi / Sedang makan / Akan pergi"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>⏳ 3 Partikel Penentu Waktu (Tenses)</h3>\n  <div class=\"rule-box\">\n    <ul>\n      <li>🟣 <strong>Masa Lalu: เคย (khoeey) = Pernah / Dulu</strong><br>\n      ผม<strong>เคยไป</strong>ประเทศไทย (Phom khoeey bpai bpra-theet thai) = Saya pernah pergi ke Thailand. <button class=\"btn-audio-mini\" onclick=\"speakThai('ผมเคยไปประเทศไทย')\">🔊</button></li>\n\n      <li style=\"margin-top:10px;\">🟢 <strong>Masa Sekarang: กำลัง (kam-lang) ... อยู่ (yuu) = Sedang</strong><br>\n      ผม<strong>กำลังกิน</strong>ข้าว<strong>อยู่</strong> (Phom kam-lang kin khaao yuu) = Saya sedang makan nasi sekarang. <button class=\"btn-audio-mini\" onclick=\"speakThai('ผมกำลังกินข้าวอยู่')\">🔊</button></li>\n\n      <li style=\"margin-top:10px;\">🔵 <strong>Masa Depan: จะ (ja) = Akan</strong><br>\n      พรุ่งนี้ผม<strong>จะไป</strong>กรุงเทพฯ (Phrung-nii phom ja bpai krung-theep) = Besok saya akan pergi ke Bangkok. <button class=\"btn-audio-mini\" onclick=\"speakThai('พรุ่งนี้ผมจะไปกรุงเทพฯ')\">🔊</button></li>\n    </ul>\n  </div>\n</div>"
      },
      {
        "globalIndex": 94,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-094",
        "lessonNumber": 65,
        "title": "Lagi Ngapain? Menanyakan Aktivitas yang Sedang Berjalan",
        "tag": "Materi [65]",
        "badgeClass": "badge-lesson",
        "icon": "🗣️",
        "isGame": false,
        "summary": "Pertanyaan santai paling sering diucapkan: ทำอะไรอยู่ (Tham arai yuu? = Lagi ngapain?).",
        "keyPoints": [
          "Pertanyaan kasual: ทำอะไรอยู่ (Tham arai yuu?)",
          "Menjawab dengan [Aktivitas] + อยู่"
        ],
        "thaiSample": {
          "thai": "ทำอะไรอยู่ / นอนอยู่",
          "rtgs": "tham arai yuu / naawn yuu",
          "meaning": "Lagi ngapain? / Lagi tidur"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🗣️ Percakapan 'Lagi Ngapain'</h3><ul><li><strong>ทำอะไรอยู่ครับ? (Tham arai yuu khrap?):</strong> Lagi ngapain? <button class='btn-audio-mini' onclick=\"speakThai('ทำอะไรอยู่ครับ')\">🔊</button></li><li><strong>อ่านหนังสืออยู่ค่ะ (Aan nang-sue yuu kha):</strong> Lagi baca buku nih. <button class='btn-audio-mini' onclick=\"speakThai('อ่านหนังสืออยู่ค่ะ')\">🔊</button></li></ul></div>"
      },
      {
        "globalIndex": 95,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-095",
        "lessonNumber": 66,
        "title": "Hari, Tanggal, Minggu, Bulan, Tahun & Kalender Buddha (พ.ศ.)",
        "tag": "Materi [66]",
        "badgeClass": "badge-lesson",
        "icon": "📆",
        "isGame": false,
        "summary": "Menyusun format penanggalan lengkap dan memahami sistem tahun Buddhist Era (B.E. = Masehi + 543 tahun).",
        "keyPoints": [
          "Urutan tanggal: วันที่ (tanggal) + เดือน (bulan) + ปี (tahun)",
          "Tahun Buddha (พ.ศ. - Phutthasakkarat) = Tahun Masehi + 543 (Contoh: 2026 M = 2569 B.E.)",
          "Nama 12 bulan berakhiran -khom (31 hari), -phan (30 hari), dan -phan (Februari)"
        ],
        "thaiSample": {
          "thai": "วันที่ 1 มกราคม พ.ศ. 2569",
          "rtgs": "wan-thii nueng mok-ga-raa-khom phaw-saw saawng-phan-haa-roi-hok-sip-gao",
          "meaning": "1 Januari 2569 B.E."
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>📆 Mengapa Tahun di Thailand Berangka 2500-an?</h3>\n  <p>Thailand secara resmi menggunakan kalender <strong>Buddhist Era (พ.ศ. - B.E.)</strong> yang dimulai sejak wafatnya Sang Buddha (543 tahun sebelum masehi):</p>\n  <div class=\"rule-box\" style=\"font-size:16px;\">\n    <strong>Rumus Tahun: Tahun Masehi (A.D.) + 543 = Tahun Buddha (B.E.)</strong><br>\n    Contoh: 2026 + 543 = <strong>2569 พ.ศ.</strong>\n  </div>\n</div>"
      },
      {
        "globalIndex": 96,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-096",
        "lessonNumber": 67,
        "title": "Kapan??? Menunjukkan Titik Waktu dalam Kalimat",
        "tag": "Materi [67]",
        "badgeClass": "badge-lesson",
        "icon": "❓",
        "isGame": false,
        "summary": "Kata tanya titik waktu: เมื่อไหร่ (muea-rai = kapan) vs ตอนไหน (dtaawn-nai = jam/saat mana).",
        "keyPoints": [
          "เมื่อไหร่ (muea-rai): Kapan secara umum",
          "ตอนไหน (dtaawn-nai): Titik jam / waktu spesifik"
        ],
        "thaiSample": {
          "thai": "จะไปเมื่อไหร่",
          "rtgs": "ja bpai muea-rai",
          "meaning": "Kapan kamu akan pergi?"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>❓ Menanyakan Waktu</h3><ul><li><strong>จะไปเมื่อไหร่ครับ? (Ja bpai muea-rai khrap?):</strong> Kapan Anda akan pergi? <button class='btn-audio-mini' onclick=\"speakThai('จะไปเมื่อไหร่ครับ')\">🔊</button></li><li><strong>กลับตอนไหน? (Glap dtaawn-nai?):</strong> Pulang jam berapa / saat mana?</li></ul></div>"
      },
      {
        "globalIndex": 97,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-097",
        "lessonNumber": 68,
        "title": "Pembagian Waktu: Pagi, Siang, Sore, Malam dalam Bahasa Thai",
        "tag": "Materi [68]",
        "badgeClass": "badge-lesson",
        "icon": "☀️",
        "isGame": false,
        "summary": "Kosa kata pembagian waktu sehari: Chao (pagi), Saai (menjelang siang), Thiang (siang tepat), Bai (sore awal), Yen (senja), dan Khuen (malam).",
        "keyPoints": [
          "ตอนเช้า (dtaawn chao): Pagi hari (06.00 - 09.00)",
          "ตอนเที่ยง (dtaawn thiang): Jam 12 siang tepat",
          "ตอนบ่าย (dtaawn bai): Siang menjelang sore (13.00 - 15.00)",
          "ตอนเย็น (dtaawn yen): Sore / senja (16.00 - 18.00)",
          "ตอนกลางคืน (dtaawn glaang-khuen): Malam hari (19.00 ke atas)"
        ],
        "thaiSample": {
          "thai": "ตอนเช้า, ตอนเที่ยง, ตอนเย็น",
          "rtgs": "dtaawn chao, dtaawn thiang, dtaawn yen",
          "meaning": "Pagi, Siang, Sore"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>☀️ 5 Segmen Waktu Harian</h3>\n  <ul>\n    <li><strong>ตอนเช้า (dtaawn chao):</strong> Pagi <button class=\"btn-audio-mini\" onclick=\"speakThai('ตอนเช้า')\">🔊</button></li>\n    <li><strong>ตอนเที่ยง (dtaawn thiang):</strong> Tengah hari tepat (12:00) <button class=\"btn-audio-mini\" onclick=\"speakThai('ตอนเที่ยง')\">🔊</button></li>\n    <li><strong>ตอนบ่าย (dtaawn bai):</strong> Siang / sore awal <button class=\"btn-audio-mini\" onclick=\"speakThai('ตอนบ่าย')\">🔊</button></li>\n    <li><strong>ตอนเย็น (dtaawn yen):</strong> Sore menjelang magrib <button class=\"btn-audio-mini\" onclick=\"speakThai('ตอนเย็น')\">🔊</button></li>\n    <li><strong>ตอนกลางคืน (dtaawn glaang-khuen):</strong> Malam hari <button class=\"btn-audio-mini\" onclick=\"speakThai('ตอนกลางคืน')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 98,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-098",
        "lessonNumber": 69,
        "title": "Sering vs Jarang: Keterangan Frekuensi (Adverbs of Frequency)",
        "tag": "Materi [69]",
        "badgeClass": "badge-lesson",
        "icon": "📊",
        "isGame": false,
        "summary": "Menyatakan seberapa sering suatu aktivitas dilakukan: Setiap hari, Sering, Kadang-kadang, Jarang, Tidak pernah.",
        "keyPoints": [
          "ทุกวัน (thuk wan): Setiap hari",
          "บ่อยๆ (boi-boi): Sering-sering",
          "บางครั้ง (baang khrang): Kadang-kadang",
          "นานๆที (naan-naan-thii): Jarang / lama-lama sekali",
          "ไม่เคย (mai khoeey): Tidak pernah"
        ],
        "thaiSample": {
          "thai": "ไปบ่อยๆ / ไม่เคยไป",
          "rtgs": "bpai boi-boi / mai khoeey bpai",
          "meaning": "Sering pergi / Tidak pernah pergi"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>📊 Tangga Frekuensi Aktivitas</h3>\n  <ul>\n    <li><strong>ทุกวัน (thuk wan) = Setiap hari:</strong> ผมออกกำลังกายทุกวัน (Saya olahraga setiap hari). <button class=\"btn-audio-mini\" onclick=\"speakThai('ผมออกกำลังกายทุกวัน')\">🔊</button></li>\n    <li><strong>บ่อยๆ (boi-boi) = Sering:</strong> มากินที่นี่บ่อยๆ (Sering makan di sini). <button class=\"btn-audio-mini\" onclick=\"speakThai('มากินที่นี่บ่อยๆ')\">🔊</button></li>\n    <li><strong>ไม่ค่อย (mai khoi) = Tidak begitu / jarang:</strong> ไม่ค่อยว่าง (Jarang senggang). <button class=\"btn-audio-mini\" onclick=\"speakThai('ไม่ค่อยว่าง')\">🔊</button></li>\n    <li><strong>ไม่เคย (mai khoeey) = Belum pernah:</strong> ไม่เคยไป (Belum pernah ke sana). <button class=\"btn-audio-mini\" onclick=\"speakThai('ไม่เคยไป')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 99,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-099",
        "lessonNumber": 70,
        "title": "Latihan Terjemah Kalimat Pemula (Part 5)",
        "tag": "Materi [70]",
        "badgeClass": "badge-lesson",
        "icon": "📝",
        "isGame": false,
        "summary": "Menyusun kalimat aktivitas harian dengan pelengkap waktu, hari, dan frekuensi.",
        "keyPoints": [
          "Kalimat jadwal rutin",
          "Penggabungan waktu di awal kalimat"
        ],
        "thaiSample": {
          "thai": "ทุกวันจันทร์ผมเรียนภาษาไทย",
          "rtgs": "thuk wan-jan phom rian phaa-saa-thai",
          "meaning": "Setiap hari Senin saya belajar bahasa Thai"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>📝 Latihan Kalimat Rutinitas</h3><p><strong>ทุกวันจันทร์ผมเรียนภาษาไทย (Thuk wan-jan phom rian phaa-saa-thai):</strong> Setiap hari Senin saya belajar bahasa Thai. <button class='btn-audio-mini' onclick=\"speakThai('ทุกวันจันทร์ผมเรียนภาษาไทย')\">🔊</button></p></div>"
      },
      {
        "globalIndex": 100,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-100",
        "lessonNumber": 71,
        "title": "#NabungKosakata Kata Kerja Bagian 3 (Aktivitas Harian)",
        "tag": "Materi [71]",
        "badgeClass": "badge-lesson",
        "icon": "🚶",
        "isGame": false,
        "summary": "Kata kerja kegiatan luar rumah: Bangun tidur, Mandi, Naik mobil, Berbelanja, Memasak, Membersihkan rumah.",
        "keyPoints": [
          "Rutinitas dari pagi hingga malam",
          "Verba gabungan"
        ],
        "thaiSample": {
          "thai": "ตื่นนอน, อาบน้ำ, ทำอาหาร",
          "rtgs": "dtuen-naawn, aap-naam, tham aa-haan",
          "meaning": "Bangun tidur, Mandi, Masak"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🚶 Rutinitas Harian</h3>\n  <ul>\n    <li><strong>ตื่นนอน (dtuen-naawn):</strong> Bangun tidur <button class=\"btn-audio-mini\" onclick=\"speakThai('ตื่นนอน')\">🔊</button></li>\n    <li><strong>อาบน้ำ (aap-naam):</strong> Mandi <button class=\"btn-audio-mini\" onclick=\"speakThai('อาบน้ำ')\">🔊</button></li>\n    <li><strong>ทำอาหาร (tham aa-haan):</strong> Memasak makanan <button class=\"btn-audio-mini\" onclick=\"speakThai('ทำอาหาร')\">🔊</button></li>\n    <li><strong>ขึ้นรถ (khuen rot):</strong> Naik kendaraan/mobil <button class=\"btn-audio-mini\" onclick=\"speakThai('ขึ้นรถ')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 101,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-101",
        "lessonNumber": 72,
        "title": "Modalitas: Harus (ต้อง), Perlu (จำเป็น), Sebaiknya (ควร)",
        "tag": "Materi [72]",
        "badgeClass": "badge-lesson",
        "icon": "⚖️",
        "isGame": false,
        "summary": "3 tingkatan keharusan dalam bahasa Thai: ต้อง (taawng = harus wajib), จำเป็น (jam-bpen = perlu/mutlak), dan ควร (khuan = sebaiknya/seyogyanya).",
        "keyPoints": [
          "ต้อง (taawng) + Verba: Harus / Wajib dilakukan",
          "จำเป็นต้อง (jam-bpen taawng): Mutlak perlu",
          "ควร (khuan) + Verba: Sebaiknya / Saran sopan"
        ],
        "thaiSample": {
          "thai": "ต้องไป / ควรพักผ่อน",
          "rtgs": "taawng bpai / khuan phak-phaawn",
          "meaning": "Harus pergi / Sebaiknya istirahat"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>⚖️ Tingkatan Keharusan</h3>\n  <ul>\n    <li><strong>ต้อง (taawng) = Harus:</strong> พรุ่งนี้ผม<strong>ต้อง</strong>ทำงาน (Besok saya harus bekerja). <button class=\"btn-audio-mini\" onclick=\"speakThai('พรุ่งนี้ผมต้องทำงาน')\">🔊</button></li>\n    <li><strong>ควร (khuan) = Sebaiknya:</strong> คุณ<strong>ควร</strong>ดื่มน้ำมากๆ (Anda sebaiknya minum banyak air). <button class=\"btn-audio-mini\" onclick=\"speakThai('คุณควรดื่มน้ำมากๆ')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 102,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-102",
        "lessonNumber": 73,
        "title": "Menyatakan Selesai: เสร็จแล้ว (Set Laeo) vs หมดแล้ว (Mot Laeo)",
        "tag": "Materi [73]",
        "badgeClass": "badge-lesson",
        "icon": "🏁",
        "isGame": false,
        "summary": "Perbedaan menyatakan selesai: เสร็จแล้ว (aktivitas/tugas rampung) vs หมดแล้ว (stok/barang habis ludes).",
        "keyPoints": [
          "เสร็จแล้ว (set laeo): Tugas/pekerjaan selesai",
          "หมดแล้ว (mot laeo): Benda/makanan/stok habis"
        ],
        "thaiSample": {
          "thai": "ทำงานเสร็จแล้ว / เงินหมดแล้ว",
          "rtgs": "tham-ngaan set laeo / ngoen mot laeo",
          "meaning": "Kerjaan beres / Uang sudah habis"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🏁 Bedah Selesai vs Habis</h3>\n  <ul>\n    <li><strong>เสร็จแล้ว (set laeo):</strong> Pekerjaan/tugas beres. Contoh: ทำงานเสร็จแล้ว (Pekerjaan sudah selesai). <button class=\"btn-audio-mini\" onclick=\"speakThai('ทำงานเสร็จแล้ว')\">🔊</button></li>\n    <li><strong>หมดแล้ว (mot laeo):</strong> Barang habis. Contoh: ข้าวมันไก่หมดแล้ว (Nasi ayam sudah habis terjual). <button class=\"btn-audio-mini\" onclick=\"speakThai('ข้าวมันไก่หมดแล้ว')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 103,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-103",
        "lessonNumber": 74,
        "title": "Mengungkapkan Rencana Pasca Belajar (Setelah Selesai...)",
        "tag": "Materi [74]",
        "badgeClass": "badge-lesson",
        "icon": "🎓",
        "isGame": false,
        "summary": "Menggunakan pola หลังจาก... (lang jaak... = setelah...) untuk menceritakan rencana masa depan.",
        "keyPoints": [
          "หลังจากเรียนจบ (Lang jaak rian jop = Setelah lulus belajar)",
          "Menyusun kalimat rencana masa depan"
        ],
        "thaiSample": {
          "thai": "หลังจากนี้จะไปเที่ยวไทย",
          "rtgs": "lang jaak nii ja bpai thiao thai",
          "meaning": "Setelah ini saya mau liburan ke Thai"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🎓 Pola Kalimat 'Setelah...'</h3><p><strong>หลังจากเรียนภาษาไทยเสร็จ ผมจะไปเที่ยวกรุงเทพฯ:</strong> Setelah selesai belajar bahasa Thai, saya akan liburan ke Bangkok. <button class='btn-audio-mini' onclick=\"speakThai('หลังจากเรียนภาษาไทยเสร็จผมจะไปเที่ยวกรุงเทพฯ')\">🔊</button></p></div>"
      },
      {
        "globalIndex": 104,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-104",
        "lessonNumber": 75,
        "title": "Mau Lagi? Lanjut? Berhenti Dulu? (ต่อ, อีก, พอแล้ว)",
        "tag": "Materi [75]",
        "badgeClass": "badge-lesson",
        "icon": "🔄",
        "isGame": false,
        "summary": "Ungkapan harian di meja makan atau tempat kerja: ต่อ (lanjut), อีก (tambah lagi), dan พอแล้ว (cukup / sudah stop).",
        "keyPoints": [
          "อีก (iik): Tambah lagi (contoh: เอาอีก ao iik = mau tambah lagi)",
          "ต่อ (dtor): Lanjut terus (contoh: เรียนต่อ rian dtor = lanjut belajar)",
          "พอแล้ว (phaaw laeo): Cukup / kenyang / sudah puas"
        ],
        "thaiSample": {
          "thai": "เอาอีก / พอแล้วครับ",
          "rtgs": "ao iik / phaaw laeo khrap",
          "meaning": "Mau tambah lagi / Sudah cukup (sopan)"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🔄 Di Meja Makan & Percakapan Santai</h3>\n  <ul>\n    <li><strong>เอาอีกไหม? (Ao iik mai?):</strong> Mau tambah lagi?</li>\n    <li><strong>พอแล้วครับ ขอบคุณครับ (Phaaw laeo khrap, khop-khun khrap):</strong> Sudah cukup kok, terima kasih banyak! <button class=\"btn-audio-mini\" onclick=\"speakThai('พอแล้วครับ ขอบคุณครับ')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 105,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-105",
        "lessonNumber": 76,
        "title": "Sudah Berapa Lama? (นานเท่าไหร่แล้ว - Naan Thao-rai Laeo)",
        "tag": "Materi [76]",
        "badgeClass": "badge-lesson",
        "icon": "⏱️",
        "isGame": false,
        "summary": "Menanyakan durasi waktu yang telah lampau: 'Sudah berapa lama tinggal di sini / belajar bahasa Thai?'.",
        "keyPoints": [
          "Kata tanya: นานเท่าไหร่ (Naan thao-rai = Berapa lama)",
          "Menjawab dengan durasi: ...เดือนแล้ว (... bulan)"
        ],
        "thaiSample": {
          "thai": "เรียนมานานเท่าไหร่แล้ว",
          "rtgs": "rian maa naan thao-rai laeo",
          "meaning": "Sudah berapa lama belajar?"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>⏱️ Menanyakan Durasi Waktu</h3><p><strong>คุณเรียนภาษาไทยมานานเท่าไหร่แล้วครับ?</strong> = Anda sudah berapa lama belajar bahasa Thai? <button class='btn-audio-mini' onclick=\"speakThai('คุณเรียนภาษาไทยมานานเท่าไหร่แล้วครับ')\">🔊</button></p></div>"
      },
      {
        "globalIndex": 106,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-106",
        "lessonNumber": 77,
        "title": "Sejak Kapan? (ตั้งแต่เมื่อไหร่ - Dtang-dtae Muea-rai)",
        "tag": "Materi [77]",
        "badgeClass": "badge-lesson",
        "icon": "⏳",
        "isGame": false,
        "summary": "Menanyakan titik awal permulaan suatu kejadian: ตั้งแต่ (dtang-dtae = sejak) + เมื่อไหร่ (kapan).",
        "keyPoints": [
          "ตั้งแต่ (dtang-dtae): Sejak / Dari",
          "Menyatakan titik mula waktu"
        ],
        "thaiSample": {
          "thai": "ตั้งแต่เมื่อไหร่",
          "rtgs": "dtang-dtae muea-rai",
          "meaning": "Sejak kapan?"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>⏳ Menanyakan Titik Awal</h3><p><strong>คุณรู้จักจัสมินตั้งแต่เมื่อไหร่? (Khun ruu-jak Jazmin dtang-dtae muea-rai?):</strong> Sejak kapan Anda kenal Jazmin? <button class='btn-audio-mini' onclick=\"speakThai('คุณรู้จักจัสมินตั้งแต่เมื่อไหร่')\">🔊</button></p></div>"
      },
      {
        "globalIndex": 107,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-107",
        "lessonNumber": 78,
        "title": "Latihan Terjemah Kalimat Pemula (Part 6)",
        "tag": "Materi [78]",
        "badgeClass": "badge-lesson",
        "icon": "📝",
        "isGame": false,
        "summary": "Menyusun kalimat percakapan kompleks yang melibatkan durasi waktu, awal kejadian, dan rencana aksi.",
        "keyPoints": [
          "Kombinasi durasi dan verba modal"
        ],
        "thaiSample": {
          "thai": "ผมอยู่ที่นี่มา 2 ปีแล้ว",
          "rtgs": "phom yuu thii-nii maa saawng bpii laeo",
          "meaning": "Saya tinggal di sini sudah 2 tahun"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>📝 Latihan Durasi</h3><p><strong>ผมอยู่ที่นี่มา 2 ปีแล้ว (Phom yuu thii-nii maa saawng bpii laeo):</strong> Saya sudah tinggal di sini selama 2 tahun. <button class='btn-audio-mini' onclick=\"speakThai('ผมอยู่ที่นี่มา 2 ปีแล้ว')\">🔊</button></p></div>"
      },
      {
        "globalIndex": 108,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-108",
        "lessonNumber": 79,
        "title": "Jam, Menit, Detik - Menyatakan Durasi (ระยะเวลา)",
        "tag": "Materi [79]",
        "badgeClass": "badge-lesson",
        "icon": "⏲️",
        "isGame": false,
        "summary": "Satuan durasi waktu: ชั่วโมง (chua-mong = jam), นาที (na-thii = menit), dan วินาที (wi-na-thii = detik).",
        "keyPoints": [
          "ชั่วโมง (chua-mong): Satuan durasi JAM (contoh: 2 ชั่วโมง = 2 jam)",
          "นาที (na-thii): Satuan durasi MENIT",
          "วินาที (wi-na-thii): Satuan durasi DETIK"
        ],
        "thaiSample": {
          "thai": "2 ชั่วโมง 30 นาที",
          "rtgs": "saawng chua-mong saam-sip na-thii",
          "meaning": "2 Jam 30 Menit"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>⏲️ 3 Satuan Durasi Waktu</h3>\n  <ul>\n    <li><strong>ชั่วโมง (chua-mong) = Jam (durasi):</strong> รอ 1 ชั่วโมง (Menunggu 1 jam). <button class=\"btn-audio-mini\" onclick=\"speakThai('รอหนึ่งชั่วโมง')\">🔊</button></li>\n    <li><strong>นาที (na-thii) = Menit:</strong> อีก 15 นาที (15 menit lagi). <button class=\"btn-audio-mini\" onclick=\"speakThai('อีกสิบห้านาที')\">🔊</button></li>\n    <li><strong>วินาที (wi-na-thii) = Detik.</strong></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 109,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-109",
        "lessonNumber": 80,
        "title": "Sistem Pembagian Jam Tradisional Thai (Sistem 6 Jam)",
        "tag": "Materi [80]",
        "badgeClass": "badge-lesson",
        "icon": "🕰️",
        "isGame": false,
        "summary": "Sistem unik penyebutan jam di Thailand yang membagi hari menjadi siklus 6 jam: Mong Chao, Bai, Yen, Thum, dan Dtii.",
        "keyPoints": [
          "Thailand TIDAK menggunakan sistem 12 jam AM/PM ala barat dalam percakapan sehari-hari!",
          "Jam 06.00 - 11.00: ...โมงเช้า (... mong chao)",
          "Jam 13.00 - 15.00: บ่าย...โมง (bai ... mong)",
          "Jam 16.00 - 18.00: ...โมงเย็น (... mong yen)",
          "Jam 19.00 - 23.00: ...ทุ่ม (... thum) - kembali hitung dari 1 sampai 5!",
          "Jam 01.00 - 05.00 dini hari: ตี... (dtii ...)"
        ],
        "thaiSample": {
          "thai": "กี่โมงแล้ว / 2 ทุ่ม",
          "rtgs": "gii mong laeo / saawng thum",
          "meaning": "Jam berapa sekarang? / Jam 8 malam"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🕰️ Sistem 6 Jam Tradisional Thailand</h3>\n  <p>Masyarakat Thailand memiliki cara tradisional membagi 24 jam menjadi 4 kuadran waktu:</p>\n\n  <div class=\"table-responsive\">\n    <table class=\"lesson-table\">\n      <thead><tr><th>Waktu (24 Jam)</th><th>Sebutan Thai</th><th>RTGS</th><th>Arti Bahasa Indonesia</th><th>Audio</th></tr></thead>\n      <tbody>\n        <tr><td>07.00 pagi</td><td><strong>โมงเช้า</strong></td><td>moong chao</td><td>Jam 7 pagi</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('เจ็ดโมงเช้า')\">🔊</button></td></tr>\n        <tr><td>12.00 siang</td><td><strong>เที่ยงตรง</strong></td><td>thiang dtrong</td><td>Jam 12 siang tepat</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('เที่ยงตรง')\">🔊</button></td></tr>\n        <tr><td>13.00 siang</td><td><strong>บ่ายโมง</strong></td><td>baai moong</td><td>Jam 1 siang</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('บ่ายโมง')\">🔊</button></td></tr>\n        <tr><td>17.00 sore</td><td><strong>ห้าโมงเย็น</strong></td><td>haa moong yen</td><td>Jam 5 sore</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ห้าโมงเย็น')\">🔊</button></td></tr>\n        <tr><td>19.00 malam</td><td><strong>หนึ่งทุ่ม</strong></td><td>nueng thum</td><td>Jam 7 malam (thum ke-1)</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('หนึ่งทุ่ม')\">🔊</button></td></tr>\n        <tr><td>20.00 malam</td><td><strong>สองทุ่ม</strong></td><td>saawng thum</td><td>Jam 8 malam (thum ke-2)</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('สองทุ่ม')\">🔊</button></td></tr>\n        <tr><td>24.00 malam</td><td><strong>เที่ยงคืน</strong></td><td>thiang khuen</td><td>Tengah malam tepat</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('เที่ยงคืน')\">🔊</button></td></tr>\n        <tr><td>02.00 dini hari</td><td><strong>ตีสอง</strong></td><td>dtii saawng</td><td>Jam 2 subuh/dini hari</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ตีสอง')\">🔊</button></td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>"
      },
      {
        "globalIndex": 110,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-110",
        "lessonNumber": 81,
        "title": "Tips & Trik Cepat Menghafal Sistem Jam Thai",
        "tag": "Materi [81]",
        "badgeClass": "badge-lesson",
        "icon": "💡",
        "isGame": false,
        "summary": "Jembatan keledai menghafal sistem jam Thai tanpa bingung menghitung mundur.",
        "keyPoints": [
          "Ingat bunyi beduk kuil 'Thum' untuk malam hari (19.00 - 23.00)",
          "Ingat ketukan lonceng penjaga ronda 'Dtii' untuk dini hari (01.00 - 05.00)",
          "Rumus cepat konversi jam 24 ke jam thum: Jam dikurang 18 (20 - 18 = 2 -> สองทุ่ม)"
        ],
        "thaiSample": {
          "thai": "กี่โมงครับ",
          "rtgs": "gii mong khrap",
          "meaning": "Jam berapa sekarang?"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>💡 Trik Cepat Konversi Jam Malam (Thum)</h3>\n  <div class=\"rule-box\" style=\"font-size:16px;\">\n    <strong>Rumus Jam Malam (19.00 - 23.00): [ Jam 24 ] - 18 = Angka Thum!</strong><br>\n    • Jam 19.00: 19 - 18 = 1 -> หนึ่งทุ่ม (Nueng thum)<br>\n    • Jam 20.00: 20 - 18 = 2 -> สองทุ่ม (Saawng thum)<br>\n    • Jam 21.00: 21 - 18 = 3 -> สามทุ่ม (Saam thum)<br>\n    • Jam 22.00: 22 - 18 = 4 -> สี่ทุ่ม (Sii thum)<br>\n    • Jam 23.00: 23 - 18 = 5 -> ห้าทุ่ม (Haa thum)\n  </div>\n</div>"
      },
      {
        "globalIndex": 111,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-111",
        "lessonNumber": 82,
        "title": "Menggabungkan Keterangan Waktu Lengkap dalam Kalimat",
        "tag": "Materi [82]",
        "badgeClass": "badge-lesson",
        "icon": "🧩",
        "isGame": false,
        "summary": "Urutan meletakkan informasi kompleks dalam kalimat bahasa Thai: [Waktu] + [Tempat] + [Subjek] + [Aktivitas].",
        "keyPoints": [
          "Keterangan waktu fleksibel di awal atau di akhir kalimat",
          "Menghindari kalimat tumpang tindih"
        ],
        "thaiSample": {
          "thai": "พรุ่งนี้ตอนบ่ายสองโมง",
          "rtgs": "phrung-nii dtaawn baai saawng moong",
          "meaning": "Besok siang jam 2"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>🧩 Pola Kalimat Berwaktu Lengkap</h3><p><strong>พรุ่งนี้ตอนบ่ายสองโมง ผมมีนัดกับเพื่อนที่สยาม (Phrung-nii dtaawn baai saawng moong phom mii nat kap phuean thii Siam):</strong> Besok jam 2 siang saya ada janji dengan teman di Siam. <button class='btn-audio-mini' onclick=\"speakThai('พรุ่งนี้ตอนบ่ายสองโมงผมมีนัดกับเพื่อนที่สยาม')\">🔊</button></p></div>"
      },
      {
        "globalIndex": 112,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-112",
        "lessonNumber": 83,
        "title": "Menceritakan Rangkaian Aktivitas Seharian Penuh",
        "tag": "Materi [83]",
        "badgeClass": "badge-lesson",
        "icon": "📖",
        "isGame": false,
        "summary": "Latihan monolog menyusun cerita keseharian dari bangun tidur pagi hari sampai tidur kembali di malam hari.",
        "keyPoints": [
          "Kronologi kegiatan harian",
          "Penggunaan kata penghubung waktu"
        ],
        "thaiSample": {
          "thai": "ตื่นนอน 7 โมงเช้า",
          "rtgs": "dtuen naawn jet moong chao",
          "meaning": "Bangun tidur jam 7 pagi"
        },
        "worksheet": null,
        "contentHtml": "<div class='lesson-content-block'><h3>📖 Contoh Monolog Keseharian</h3><p><em>'Saya bangun tidur jam 7 pagi, mandi, lalu berangkat kerja jam 8. Jam 12 siang saya makan siang bersama rekan kerja. Jam 6 sore saya pulang ke rumah dan jam 11 malam saya tidur.'</em></p></div>"
      },
      {
        "globalIndex": 113,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-113",
        "lessonNumber": 84,
        "title": "#NabungKosakata Kata Kerja Emosional & Perasaan (ความรู้สึก)",
        "tag": "Materi [84]",
        "badgeClass": "badge-lesson",
        "icon": "💖",
        "isGame": false,
        "summary": "Kosa kata mengekspresikan perasaan: Suka, Cinta, Senang, Takut, Khawatir, Rindu, Capek, Kecewa.",
        "keyPoints": [
          "ชอบ (chaawp): Suka",
          "รัก (rak): Cinta",
          "ดีใจ (dii-jai): Senang / Gembira",
          "คิดถึง (khit-thueng): Rindu / Kangen",
          "เหนื่อย (neuay): Capek / Lelah"
        ],
        "thaiSample": {
          "thai": "ชอบ, รัก, ดีใจ, คิดถึง, เหนื่อย",
          "rtgs": "chaawp, rak, dii-jai, khit-thueng, neuay",
          "meaning": "Suka, Cinta, Senang, Kangen, Lelah"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>💖 Kosakata Perasaan & Emosi</h3>\n  <ul>\n    <li><strong>ชอบ (chaawp):</strong> Suka <button class=\"btn-audio-mini\" onclick=\"speakThai('ชอบมาก')\">🔊 ชอบมาก (suka banget)</button></li>\n    <li><strong>รัก (rak):</strong> Cinta <button class=\"btn-audio-mini\" onclick=\"speakThai('รักคุณนะ')\">🔊 รักคุณนะ (aku cinta kamu)</button></li>\n    <li><strong>คิดถึง (khit-thueng):</strong> Rindu / Kangen <button class=\"btn-audio-mini\" onclick=\"speakThai('คิดถึงจัง')\">🔊 คิดถึงจัง (kangen banget)</button></li>\n    <li><strong>ดีใจ (dii-jai):</strong> Senang di hati <button class=\"btn-audio-mini\" onclick=\"speakThai('ดีใจมาก')\">🔊</button></li>\n    <li><strong>เหนื่อย (neuay):</strong> Lelah / Capek <button class=\"btn-audio-mini\" onclick=\"speakThai('เหนื่อยจัง')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 114,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-114",
        "lessonNumber": 85,
        "title": "Memberikan Alasan: Penggunaan Kata เพราะว่า (Phraw-waa)",
        "tag": "Materi [85]",
        "badgeClass": "badge-lesson",
        "icon": "💡",
        "isGame": false,
        "summary": "Menjelaskan alasan dengan kata เพราะ (phraw) atau เพราะว่า (phraw-waa = karena/sebab).",
        "keyPoints": [
          "Rumus: [Akibat] + เพราะว่า + [Sebab / Alasan]",
          "Menjawab pertanyaan ทำไม (kenapa)"
        ],
        "thaiSample": {
          "thai": "เพราะว่าอร่อยมาก",
          "rtgs": "phraw-waa a-roi maak",
          "meaning": "Karena rasanya sangat enak"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>💡 Menjawab 'Mengapa': เพราะว่า (Phraw-waa)</h3>\n  <p>Ketika ditanya <strong>ทำไม (Tham-mai? = Kenapa?)</strong>, awali jawaban Anda dengan <strong>เพราะว่า (Phraw-waa = Karena...)</strong>:</p>\n  <ul>\n    <li>ชอบมาไทย<strong>เพราะว่า</strong>อาหารอร่อยมาก (Chaawp maa thai phraw-waa aa-haan a-roi maak) = Suka ke Thailand karena makanannya sangat lezat! <button class=\"btn-audio-mini\" onclick=\"speakThai('ชอบมาไทยเพราะว่าอาหารอร่อยมาก')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 115,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-115",
        "lessonNumber": 86,
        "title": "Menyatakan Sebab-Akibat: Oleh Karena Itu / Makanya (ดังนั้น, ก็เลย)",
        "tag": "Materi [86]",
        "badgeClass": "badge-lesson",
        "icon": "➡️",
        "isGame": false,
        "summary": "Menghubungkan sebab ke akibat: ดังนั้น (dang-nan = oleh karena itu - formal) vs ก็เลย (gor-loei = makanya - kasual).",
        "keyPoints": [
          "ดังนั้น (dang-nan): Oleh karena itu (tulisan resmi)",
          "ก็เลย (gor-loei): Makanya / Jadi... (percakapan santai harian)",
          "Rumus: [Sebab] + ก็เลย + [Tindakan Akibat]"
        ],
        "thaiSample": {
          "thai": "ฝนตก ก็เลยไม่ได้ไป",
          "rtgs": "fon dtok  gor loei mai dai bpai",
          "meaning": "Hujan turun, makanya gak jadi pergi"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>➡️ Makanya: ก็เลย (Gor-loei)</h3>\n  <p>Kata <strong>ก็เลย (gor-loei)</strong> adalah kata paling sering dipakai orang Thai saat mengobrol santai:</p>\n  <ul>\n    <li>หิวข้าว<strong>ก็เลย</strong>ไปกิน (Hiu khaao gor loei bpai kin) = Lapar, makanya pergi makan. <button class=\"btn-audio-mini\" onclick=\"speakThai('หิวข้าวก็เลยไปกิน')\">🔊</button></li>\n    <li>ไม่ว่าง<strong>ก็เลย</strong>ไม่ได้มา (Mai waang gor loei mai dai maa) = Gak senggang, makanya gak sempat datang. <button class=\"btn-audio-mini\" onclick=\"speakThai('ไม่ว่างก็เลยไม่ได้มา')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 116,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-116",
        "lessonNumber": 87,
        "title": "Kalimat Tanya 5W 1H Lengkap & Contoh Dialog Praktis",
        "tag": "Materi [87]",
        "badgeClass": "badge-lesson",
        "icon": "❓",
        "isGame": false,
        "summary": "Mastery 6 kata tanya utama bahasa Thai: ใคร (siapa), อะไร (apa), ที่ไหน (di mana), เมื่อไหร่ (kapan), ทำไม (mengapa), dan อย่างไร/ยังไง (bagaimana).",
        "keyPoints": [
          "ใคร (khrai): Siapa",
          "อะไร (arai): Apa",
          "ที่ไหน (thii-nai): Di mana",
          "เมื่อไหร่ (muea-rai): Kapan",
          "ทำไม (tham-mai): Mengapa / Kenapa",
          "ยังไง (yang-ngai): Bagaimana / Gimana"
        ],
        "thaiSample": {
          "thai": "ใคร, อะไร, ที่ไหน, เมื่อไหร่, ทำไม, ยังไง",
          "rtgs": "khrai, arai, thii-nai, muea-rai, tham-mai, yang-ngai",
          "meaning": "Siapa, Apa, Di mana, Kapan, Kenapa, Gimana"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>❓ Tabel 6 Kata Tanya 5W 1H</h3>\n  <div class=\"table-responsive\">\n    <table class=\"lesson-table\">\n      <thead><tr><th>Kata Tanya</th><th>Thai</th><th>RTGS</th><th>Contoh Kalimat</th><th>Audio</th></tr></thead>\n      <tbody>\n        <tr><td>Siapa</td><td><strong>ใคร</strong></td><td>khrai</td><td>คุณเป็นใคร (Kamu siapa?)</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('คุณเป็นใคร')\">🔊</button></td></tr>\n        <tr><td>Apa</td><td><strong>อะไร</strong></td><td>arai</td><td>นี่คืออะไร (Ini apa?)</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('นี่คืออะไร')\">🔊</button></td></tr>\n        <tr><td>Di mana</td><td><strong>ที่ไหน</strong></td><td>thii-nai</td><td>ไปที่ไหน (Mau ke mana?)</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ไปที่ไหน')\">🔊</button></td></tr>\n        <tr><td>Kapan</td><td><strong>เมื่อไหร่</strong></td><td>muea-rai</td><td>จะมาเมื่อไหร่ (Kapan mau datang?)</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('จะมาเมื่อไหร่')\">🔊</button></td></tr>\n        <tr><td>Mengapa</td><td><strong>ทำไม</strong></td><td>tham-mai</td><td>ทำไมไม่กิน (Kenapa tidak makan?)</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ทำไมไม่กิน')\">🔊</button></td></tr>\n        <tr><td>Bagaimana</td><td><strong>ยังไง</strong></td><td>yang-ngai</td><td>ไปยังไง (Pergi ke sana naik apa/gimana?)</td><td><button class=\"btn-audio-mini\" onclick=\"speakThai('ไปยังไง')\">🔊</button></td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>"
      },
      {
        "globalIndex": 117,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-117",
        "lessonNumber": 88,
        "title": "Kata Penunjuk 'Yang...' (ที่ - Thii)",
        "tag": "Materi [88]",
        "badgeClass": "badge-lesson",
        "icon": "🔗",
        "isGame": false,
        "summary": "Fungsi kata ที่ (thii) sebagai kata penghubung klausa relatif (yang...): menghubungkan kata benda dengan penjelasan sifatnya.",
        "keyPoints": [
          "Rumus: [Kata Benda] + ที่ (thii) + [Penjelasan]",
          "Contoh: คนที่สวย (Khon thii suay = Orang yang cantik)",
          "Contoh: อาหารที่อร่อย (Aa-haan thii a-roi = Makanan yang enak)"
        ],
        "thaiSample": {
          "thai": "คนที่ผมชอบ",
          "rtgs": "khon thii phom chaawp",
          "meaning": "Orang yang saya sukai"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🔗 Menyatakan 'Yang...': ที่ (Thii)</h3>\n  <ul>\n    <li>คนที่พูดภาษาไทยได้ (Khon thii phuut phaa-saa thai dai) = Orang yang bisa bicara bahasa Thai. <button class=\"btn-audio-mini\" onclick=\"speakThai('คนที่พูดภาษาไทยได้')\">🔊</button></li>\n    <li>ร้านที่อร่อยที่สุด (Raan thii a-roi thii-sut) = Restoran yang paling enak. <button class=\"btn-audio-mini\" onclick=\"speakThai('ร้านที่อร่อยที่สุด')\">🔊</button></li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 118,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-118",
        "lessonNumber": 89,
        "title": "Kata Tanya yang Berubah Menjadi Pernyataan (Arai Gor Dai)",
        "tag": "Materi [89]",
        "badgeClass": "badge-lesson",
        "icon": "✨",
        "isGame": false,
        "summary": "Ketika kata tanya berubah makna menjadi 'Apa saja / Siapa saja / Di mana saja' dengan menambahkan ก็ได้ (gor dai).",
        "keyPoints": [
          "อะไรก็ได้ (arai gor dai): Apa saja terserah",
          "ที่ไหนก็ได้ (thii-nai gor dai): Di mana saja boleh",
          "เมื่อไหร่ก็ได้ (muea-rai gor dai): Kapan saja oke"
        ],
        "thaiSample": {
          "thai": "อะไรก็ได้ / ที่ไหนก็ได้",
          "rtgs": "arai gor dai / thii-nai gor dai",
          "meaning": "Apa saja / Di mana saja boleh"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>✨ Menjadi 'Terserah / Apa Saja': ก็ได้ (Gor dai)</h3>\n  <ul>\n    <li><strong>อะไรก็ได้ (Arai gor dai):</strong> Apa saja boleh / terserah. <button class=\"btn-audio-mini\" onclick=\"speakThai('อะไรก็ได้')\">🔊</button></li>\n    <li><strong>ที่ไหนก็ได้ (Thii-nai gor dai):</strong> Di mana saja hayuk. <button class=\"btn-audio-mini\" onclick=\"speakThai('ที่ไหนก็ได้')\">🔊</button></li>\n    <li><strong>ใครก็ได้ (Khrai gor dai):</strong> Siapa saja bisa.</li>\n  </ul>\n</div>"
      },
      {
        "globalIndex": 119,
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "id": "jazmi-materi-119",
        "lessonNumber": 90,
        "title": "Materi Terakhir: Praktik Mandiri Menceritakan Aktivitas Sehari-hari",
        "tag": "Materi [90] - FINAL",
        "badgeClass": "badge-lesson",
        "icon": "🏆",
        "isGame": false,
        "summary": "Kulminasi kelulusan seluruh kurikulum Jazmi Nara (Materi 01 sampai 90): Menyusun narasi cerita lengkap tentang diri Anda, hobi, dan aktivitas di Thailand.",
        "keyPoints": [
          "Penyatuan materi Aksara, Kaidah Nada, Tata Bahasa SVO, Waktu, dan Emosi",
          "Kemampuan mandiri membaca, mendengarkan, dan mengekspresikan gagasan dalam bahasa Thai",
          "Selamat! Anda telah menuntaskan seluruh 90 materi kurikulum resmi Jazmi Nara!"
        ],
        "thaiSample": {
          "thai": "ยินดีด้วยครับ คุณเก่งมาก",
          "rtgs": "yin-dii duay khrap, khun geng maak",
          "meaning": "Selamat! Anda luar biasa hebat!"
        },
        "worksheet": null,
        "contentHtml": "<div class=\"lesson-content-block\">\n  <h3>🏆 Selamat! Anda Telah Menuntaskan 90 Materi Kurikulum!</h3>\n  <p>Dari mengenal garis lengkung kepala konsonan di Materi [01], menaklukkan 5 tangga nada di Materi [13], merangkai struktur kalimat SVO di Materi [46], hingga menceritakan waktu dan aktivitas di Materi [90].</p>\n\n  <div class=\"rule-box\" style=\"text-align:center; padding:24px; background:linear-gradient(135deg, rgba(45,106,79,0.2) 0%, rgba(82,183,136,0.1) 100%);\">\n    <div style=\"font-size:36px; margin-bottom:10px;\">🎉 🎓 🇹🇭</div>\n    <h2 style=\"color:var(--primary); margin:0 0 10px 0;\">ยินดีด้วยครับ! (Yin-dii duay khrap!)</h2>\n    <p style=\"font-size:15px; line-height:1.6; margin:0 0 14px 0;\">\n      Anda sekarang telah memiliki fondasi komprehensif literasi aksara, kaidah nada, tata bahasa percakapan, serta ribuan kosakata harian bahasa Thai.\n    </p>\n    <button class=\"btn-stimuler-primary\" onclick=\"speakThai('ยินดีด้วยครับ คุณเก่งมาก ภาษาไทยไม่ยากเลย ใช่ไหมครับ')\">\n      🔊 Dengarkan Pesan Kelulusan\n    </button>\n  </div>\n</div>"
      }
    ]
  }
];
