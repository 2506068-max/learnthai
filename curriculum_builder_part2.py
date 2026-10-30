# -*- coding: utf-8 -*-
"""
Detailed written content for Part 2 (Modules 32 - 54):
5 Nada Bahasa Thai, Rumus Kham Bpen / Kham Taai, 4 Tanda Nada, Ho Nam, Garan, Tanda Baca Khusus, dan Keyboard.
"""

def get_part2_content():
    return {
        32: {
            "title": "Mengenal 5 Nada dalam Bahasa Thai (วรรณยุกต์ - Wannayuk)",
            "tag": "Materi [13]",
            "icon": "🎵",
            "summary": "Pengantar 5 nada bahasa Thai: Datar (Samang), Rendah (Ek), Jatuh (Tho), Tinggi (Tri), dan Naik (Chattawa) beserta kontur suaranya.",
            "keyPoints": [
                "Bahasa Thai adalah bahasa tonal: beda nada berarti beda arti sama sekali!",
                "5 nada: Samang (Datar), Ek (Rendah), Tho (Jatuh), Tri (Tinggi), Chattawa (Naik)",
                "Contoh legendaris kata 'Maa': bisa berarti datang, kuda, atau anjing tergantung nada"
            ],
            "thaiSample": {"thai": "ปา ป่า ป้า ป๊า ป๋า", "rtgs": "bpaa, bpaa, bpaa, bpaa, bpaa", "meaning": "5 Nada Kata 'Bpaa'"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 Tujuan Pembelajaran</h3>
  <p>Memahami konsep bahasa tonal dan menguasai perbedaan kontur frekuensi 5 nada dalam bahasa Thai.</p>

  <h3>🎵 Perubahan Arti Akibat Perbedaan Nada</h3>
  <p>Perhatikan contoh kata legendaris berikut:</p>
  <ul>
    <li><strong class="thai-char">มา (Maa)</strong> [Nada Datar] = Datang <button class="btn-audio-mini" onclick="speakThai('มา')">🔊</button></li>
    <li><strong class="thai-char">ม้า (Maa)</strong> [Nada Tinggi] = Kuda <button class="btn-audio-mini" onclick="speakThai('ม้า')">🔊</button></li>
    <li><strong class="thai-char">หมา (Maa)</strong> [Nada Naik] = Anjing <button class="btn-audio-mini" onclick="speakThai('หมา')">🔊</button></li>
  </ul>
  <p>Kata yang sama jika diucapkan dengan nada keliru dapat mengubah arti secara fatal!</p>

  <h3>📊 Karakteristik 5 Nada Bahasa Thai</h3>
  <div class="table-responsive">
    <table class="lesson-table">
      <thead><tr><th>Nada</th><th>Nama Thai</th><th>Tanda Fonetik</th><th>Karakter Suara</th><th>Contoh Suara</th></tr></thead>
      <tbody>
        <tr><td><strong>1. Datar (Mid)</strong></td><td>สามัญ (Sa-mang)</td><td>ā (tanpa tanda)</td><td>Mendatar netral di tengah nada bicara normal</td><td><button class="btn-audio-mini" onclick="speakThai('กา')">🔊 กา (gaa)</button></td></tr>
        <tr><td><strong>2. Rendah (Low)</strong></td><td>เอก (Ek)</td><td>à (rendah)</td><td>Suara ditekan turun ke dada lebih rendah dari biasa</td><td><button class="btn-audio-mini" onclick="speakThai('ก่า')">🔊 ก่า (gàa)</button></td></tr>
        <tr><td><strong>3. Jatuh (Falling)</strong></td><td>โท (Tho)</td><td>â (jatuh)</td><td>Mulai dari puncak tinggi lalu meluncur tajam ke bawah (tegas)</td><td><button class="btn-audio-mini" onclick="speakThai('ก้า')">🔊 ก้า (gâa)</button></td></tr>
        <tr><td><strong>4. Tinggi (High)</strong></td><td>ตรี (Tri)</td><td>á (tinggi)</td><td>Suara melengking naik di oktaf atas kepala</td><td><button class="btn-audio-mini" onclick="speakThai('ก๊า')">🔊 ก๊า (gáa)</button></td></tr>
        <tr><td><strong>5. Naik (Rising)</strong></td><td>จัตวา (Chat-dta-waa)</td><td>ǎ (meliuk naik)</td><td>Mulai agak rendah lalu meliuk naik seperti nada bertanya ('Hah?!')</td><td><button class="btn-audio-mini" onclick="speakThai('ก๋า')">🔊 ก๋า (gǎa)</button></td></tr>
      </tbody>
    </table>
  </div>
</div>
"""
        },

        33: {
            "title": "Praktik Membaca 5 Nada Bersama Penutur Asli",
            "tag": "Materi [14]",
            "icon": "🗣️",
            "summary": "Latihan menirukan kontur 5 nada kata-kata vokal panjang bersama penutur asli.",
            "keyPoints": ["Latihan intonasi nada netral vs nada naik", "Melatih fleksibilitas pita suara", "Perbandingan kontur suara"],
            "thaiSample": {"thai": "ตา ต่า ต้า ต๊า ต๋า", "rtgs": "dtaa, dtàa, dtâa, dtáa, dtǎa", "meaning": "5 Tangga Nada Konsonan 'To Tao'"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🗣️ Tangga Nada Konsonan Tengah</h3>
  <p>Konsonan tengah (seperti ต, ป, ก) adalah satu-satunya kelompok konsonan yang dapat menyanyikan kelima nada secara berurutan:</p>
  <div style="display:flex; gap:10px; flex-wrap:wrap; margin:16px 0;">
    <button class="btn-stimuler-primary" onclick="speakThai('ตา')">1. ตา (Datar) 🔊</button>
    <button class="btn-stimuler-primary" onclick="speakThai('ต่า')">2. ต่า (Rendah) 🔊</button>
    <button class="btn-stimuler-primary" onclick="speakThai('ต้า')">3. ต้า (Jatuh) 🔊</button>
    <button class="btn-stimuler-primary" onclick="speakThai('ต๊า')">4. ต๊า (Tinggi) 🔊</button>
    <button class="btn-stimuler-primary" onclick="speakThai('ต๋า')">5. ต๋า (Naik) 🔊</button>
  </div>
</div>
"""
        },

        34: {
            "title": "Game Tebak Nada Suara Pria (Versi A)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Latihan mendengarkan rekaman suara pria dan mengidentifikasi nada yang diucapkan.",
            "keyPoints": ["Mendeteksi nada rendah pada suara pria", "Melatih telinga mendengar intonasi"],
            "thaiSample": {"thai": "ไก่, ไข่, ไม่", "rtgs": "gai, khai, mai", "meaning": "Ayam (Rendah), Telur (Rendah), Tidak (Jatuh)"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎮 Tebak Nada Suara Pria</h3><p>Dengarkan nada kata berikut dan tebak jenis nadanya:</p><ul><li><strong>ไก่ (gai)</strong> = Nada Rendah (Low tone). <button class='btn-audio-mini' onclick=\"speakThai('ไก่')\">🔊</button></li><li><strong>ไม่ (mai)</strong> = Nada Jatuh (Falling tone). <button class='btn-audio-mini' onclick=\"speakThai('ไม่')\">🔊</button></li></ul></div>"
        },

        35: {
            "title": "Game Tebak Nada Suara Wanita (Versi A)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Mengenali nada suara tinggi dan nada jatuh pada pitch suara wanita.",
            "keyPoints": ["Mendeteksi nada tinggi (Tri)", "Nada jatuh penutur wanita"],
            "thaiSample": {"thai": "คะ, ค่ะ", "rtgs": "kha, kha", "meaning": "Partikel Wanita: Tinggi vs Jatuh"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎮 Membedakan คะ vs ค่ะ</h3><ul><li><strong>คะ (kha):</strong> Nada TINGGI (High tone), digunakan untuk bertanya. <button class='btn-audio-mini' onclick=\"speakThai('คะ')\">🔊</button></li><li><strong>ค่ะ (kha):</strong> Nada JATUH (Falling tone), digunakan untuk pernyataan. <button class='btn-audio-mini' onclick=\"speakThai('ค่ะ')\">🔊</button></li></ul></div>"
        },

        36: {
            "title": "Game Tebak Nada Suara Pria (Versi B)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Latihan membedakan nada datar (Samang) vs nada naik (Chattawa) pada suara pria.",
            "keyPoints": ["Perbedaan nada datar dan naik", "Kosakata sehari-hari"],
            "thaiSample": {"thai": "มา vs หมา", "rtgs": "maa (datar) vs maa (naik)", "meaning": "Datang vs Anjing"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎮 Datar vs Naik</h3><ul><li>มา (datar = datang) <button class='btn-audio-mini' onclick=\"speakThai('มา')\">🔊</button></li><li>หมา (naik = anjing) <button class='btn-audio-mini' onclick=\"speakThai('หมา')\">🔊</button></li></ul></div>"
        },

        37: {
            "title": "Game Tebak Nada Suara Wanita (Versi B)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Tantangan mengenali 5 nada secara acak dalam kalimat percakapan penutur wanita.",
            "keyPoints": ["Evaluasi kepekaan telinga", "Deteksi nada kalimat lengkap"],
            "thaiSample": {"thai": "สวัสดีค่ะ", "rtgs": "sa-wat-dii kha", "meaning": "Halo (wanita)"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎮 Analisis Nada Kalimat Salam</h3><p>Pada kata <strong>สวัสดีค่ะ</strong>:</p><ul><li>สะ (sa) = Nada Rendah</li><li>วัส (wat) = Nada Rendah</li><li>ดี (dii) = Nada Datar</li><li>ค่ะ (kha) = Nada Jatuh</li></ul></div>"
        },

        38: {
            "title": "Kaidah Nada Khusus Suku Kata Vokal Pendek",
            "tag": "Materi [15]",
            "icon": "⚡",
            "summary": "Pengaruh durasi vokal pendek terhadap tempo letupan nada (staccato) dalam bahasa Thai.",
            "keyPoints": [
                "Vokal pendek dipotong secara mendadak (bunyi glottal stop)",
                "Vokal pendek tidak bisa diayunkan panjang",
                "Konsonan rendah + vokal pendek mati menghasilkan nada TINGGI alami"
            ],
            "thaiSample": {"thai": "นะ, ละ, คะ", "rtgs": "na, la, kha", "meaning": "Partikel Vokal Pendek Ber-nada Tinggi"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>⚡ Mengapa Kata 'Na', 'La', 'Kha' Bernada Tinggi?</h3>
  <p>Dalam bahasa Thai, jika suatu suku kata diawali oleh <strong>Konsonan Rendah</strong> dan ditutup oleh <strong>Vokal Pendek Tanpa Akhiran</strong> (Suku Kata Mati), suku kata tersebut secara otomatis dilafalkan dengan <strong>Nada Tinggi (High Tone)</strong>!</p>
  <ul>
    <li><strong class="thai-char">นะ (na)</strong> = partikel penegas (Nada Tinggi) <button class="btn-audio-mini" onclick="speakThai('นะ')">🔊</button></li>
    <li><strong class="thai-char">คะ (kha)</strong> = partikel tanya wanita (Nada Tinggi) <button class="btn-audio-mini" onclick="speakThai('คะ')">🔊</button></li>
  </ul>
</div>
"""
        },

        39: {
            "title": "Praktik Membaca Nada Vokal Pendek Bersama Penutur Asli",
            "tag": "Materi [16]",
            "icon": "🗣️",
            "summary": "Latihan artikulasi vokal pendek staccato dengan irama nada yang akurat.",
            "keyPoints": ["Artikulasi bunyi glottal stop", "Ketepatan durasi ucapan"],
            "thaiSample": {"thai": "โต๊ะ, เกะกะ", "rtgs": "dto, ge-ga", "meaning": "Meja, Berantakan"},
            "contentHtml": "<div class='lesson-content-block'><h3>🗣️ Latihan Pengucapan Staccato</h3><p>Latihlah kata <strong>โต๊ะ (dto = meja)</strong> yang memiliki tanda Mai Tri bernada tinggi dan vokal pendek. <button class='btn-audio-mini' onclick=\"speakThai('โต๊ะ')\">🔊 โต๊ะ</button></p></div>"
        },

        40: {
            "title": "Game Tebak Nada Vokal Pendek (Suara Pria)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Mengenali nada kata-kata vokal pendek bersuara berat.",
            "keyPoints": ["Deteksi nada rendah vs tinggi pada vokal pendek pria"],
            "thaiSample": {"thai": "จะ, ดับ", "rtgs": "ja, dap", "meaning": "Akan (Rendah), Padam (Rendah)"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎮 Kuis Suku Kata Pendek Pria</h3><p>Kata <strong>จะ (ja = akan)</strong> berawalan konsonan tengah จ dan bervokal pendek mati -> <strong>Nada Rendah</strong>. <button class='btn-audio-mini' onclick=\"speakThai('จะ')\">🔊 จะ</button></p></div>"
        },

        41: {
            "title": "Game Tebak Nada Vokal Pendek (Suara Wanita)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Mengenali partikel-partikel vokal pendek feminin.",
            "keyPoints": ["Partikel wanita sehari-hari", "Ketepatan intonasi santai"],
            "thaiSample": {"thai": "จ้ะ, ซิ", "rtgs": "ja, si", "meaning": "Ya (akrab), Dong/Sih"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎮 Kuis Partikel Feminin</h3><p>Kata <strong>จ้ะ (ja)</strong> bernada jatuh akrab digunakan menjawab panggilan. <button class='btn-audio-mini' onclick=\"speakThai('จ้ะ')\">🔊 จ้ะ</button></p></div>"
        },

        42: {
            "title": "Menentukan Nada: Suku Kata Tanpa Tanda Nada (Rumus Kham Bpen vs Kham Taai)",
            "tag": "Materi [17]",
            "icon": "📐",
            "summary": "Rumus penentu nada fundamental bahasa Thai: Klasifikasi Suku Kata Hidup (คำเป็น) vs Suku Kata Mati (คำตาย) saat tidak ada simbol nada.",
            "keyPoints": [
                "Suku Kata Hidup (Kham Bpen): Berakhiran vokal panjang ATAU konsonan sengau (ง, น, ม, ย, ว)",
                "Suku Kata Mati (Kham Taai): Berakhiran vokal pendek ATAU konsonan buntu letup (-k, -t, -p)",
                "Tabel rumus nada otomatis tanpa tanda nada"
            ],
            "thaiSample": {"thai": "คำเป็น / คำตาย", "rtgs": "kham bpen / kham dtaai", "meaning": "Kata Hidup vs Kata Mati"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 Rumus Emas: Kham Bpen vs Kham Taai</h3>
  <p>Sebagian besar kata dalam bahasa Thai <strong>TIDAK memiliki tanda nada</strong> di atasnya. Bagaimana cara mengetahui nadanya?</p>
  <p>Kita menggunakan rumus <strong>Kelas Konsonan Awal + Jenis Suku Kata (Hidup atau Mati)</strong>!</p>

  <div class="rule-box">
    <strong>Definisi:</strong>
    <ul>
      <li>🟢 <strong>Kham Bpen (คำเป็น - Suku Kata Hidup):</strong> Kata yang suaranya bisa diayunkan panjang. Cirinya: berakhiran vokal panjang ATAU berakhiran konsonan sengau (Mae Kong -ng, Kon -n, Kom -m, Koei -y, Koew -w). <em>(Jembatan keledai: NO-M-YA-NG)</em>.</li>
      <li>🔴 <strong>Kham Taai (คำตาย - Suku Kata Mati):</strong> Kata yang suaranya buntu terhenti mendadak. Cirinya: berakhiran vokal pendek ATAU berakhiran konsonan letup buntu (Mae Kok -k, Kot -t, Kob -p). <em>(Jembatan keledai: K-O-B-A-T)</em>.</li>
    </ul>
  </div>

  <h3>📊 Matriks Penentuan Nada Tanpa Tanda</h3>
  <div class="table-responsive">
    <table class="lesson-table">
      <thead><tr><th>Kelas Konsonan Awal</th><th>Suku Kata Hidup (คำเป็น)</th><th>Suku Kata Mati (คำตาย) - Vokal Pendek</th><th>Suku Kata Mati (คำตาย) - Vokal Panjang</th></tr></thead>
      <tbody>
        <tr><td><strong>🟢 Konsonan Tengah</strong></td><td><span class="badge-mid">Datar (Mid)</span><br>เช่น: กา (gaa)</td><td colspan="2"><span class="badge-low">Rendah (Low)</span><br>เช่น: กบ (gop), กอด (gaawt)</td></tr>
        <tr><td><strong>🟡 Konsonan Tinggi</strong></td><td><span class="badge-rising">Naik (Rising)</span><br>เช่น: ขา (khaa)</td><td colspan="2"><span class="badge-low">Rendah (Low)</span><br>เช่น: ขบ (khop), ขาด (khaat)</td></tr>
        <tr><td><strong>🔴 Konsonan Rendah</strong></td><td><span class="badge-mid">Datar (Mid)</span><br>เช่น: มา (maa)</td><td><span class="badge-high">Tinggi (High)</span><br>เช่น: มด (mot), นะ (na)</td><td><span class="badge-falling">Jatuh (Falling)</span><br>เช่น: มาก (maak), พูด (phuut)</td></tr>
      </tbody>
    </table>
  </div>
</div>
"""
        },

        43: {
            "title": "Game Penentuan Nada Bagian 1 (Suara Pria)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Latihan menerapkan rumus Kham Bpen / Kham Taai pada kata-kata nyata penutur pria.",
            "keyPoints": ["Analisis konsonan awal dan akhiran", "Verifikasi nada rumus"],
            "thaiSample": {"thai": "ปาก, มาก, ขาว", "rtgs": "bpak, maak, khaao", "meaning": "Mulut (Rendah), Banyak (Jatuh), Putih (Naik)"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎮 Analisis Kata Nyata</h3><ul><li><strong>ปาก (bpak = mulut):</strong> Konsonan tengah ป + akhiran mati ก -> <strong>Nada Rendah</strong>.</li><li><strong>มาก (maak = banyak):</strong> Konsonan rendah ม + akhiran mati vokal panjang -> <strong>Nada Jatuh</strong>.</li><li><strong>ขาว (khaao = putih):</strong> Konsonan tinggi ข + akhiran hidup ว -> <strong>Nada Naik</strong>.</li></ul></div>"
        },

        44: {
            "title": "Game Penentuan Nada Bagian 1 (Suara Wanita)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Penerapan rumus Kham Bpen / Kham Taai pada kalimat percakapan penutur wanita.",
            "keyPoints": ["Penerapan rumus cepat", "Membaca menu makanan"],
            "thaiSample": {"thai": "ผัดไทย, ข้าวผัด", "rtgs": "phat-thai, khaao-phat", "meaning": "Pad Thai, Nasi Goreng"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎮 Membedah Menu Populer</h3><p>Kata <strong>ผัด (phat = tumis)</strong> berawalan konsonan tinggi ผ dan berakhiran mati ด -> <strong>Nada Rendah</strong>. <button class='btn-audio-mini' onclick=\"speakThai('ผัดไทย')\">🔊 ผัดไทย</button></p></div>"
        },

        45: {
            "title": "Menentukan Nada: Suku Kata dengan 4 Tanda Nada (วรรณยุกต์)",
            "tag": "Materi [18]",
            "icon": "👑",
            "summary": "Kaidah pembacaan 4 simbol tanda nada: Mai Ek ( ่ ), Mai Tho ( ้ ), Mai Tri ( ๊ ), dan Mai Chattawa ( ๋ ) pada masing-masing kelas konsonan.",
            "keyPoints": [
                "4 tanda nada: Mai Ek ( ่ ), Mai Tho ( ้ ), Mai Tri ( ๊ ), Mai Chattawa ( ๋ )",
                "Konsonan Tengah: Nada langsung sesuai nama tanda nadanya!",
                "Konsonan Tinggi: Hanya bisa memakai Mai Ek (Rendah) dan Mai Tho (Jatuh)",
                "Konsonan Rendah: Aturan Geser! Mai Ek dibaca JATUH, Mai Tho dibaca TINGGI!"
            ],
            "thaiSample": {"thai": "ไม่, ได้, น้ำ, พี่", "rtgs": "mai, dai, naam, phii", "meaning": "Tidak, Bisa, Air, Kakak"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 4 Simbol Tanda Nada (รูปวรรณยุกต์)</h3>
  <p>Ketika suku kata diberi tanda nada di atas konsonan awalnya, tanda tersebut mengatur nada pengucapannya:</p>

  <div class="table-responsive">
    <table class="lesson-table">
      <thead><tr><th>Kelas Konsonan</th><th>Tanpa Tanda</th><th>Mai Ek ( ่ )</th><th>Mai Tho ( ้ )</th><th>Mai Tri ( ๊ )</th><th>Mai Chattawa ( ๋ )</th></tr></thead>
      <tbody>
        <tr><td><strong>🟢 Konsonan Tengah</strong></td><td>Datar</td><td><span class="badge-low">Rendah</span><br>ไก่ (gai)</td><td><span class="badge-falling">Jatuh</span><br>บ้าน (baan)</td><td><span class="badge-high">Tinggi</span><br>โต๊ะ (dto)</td><td><span class="badge-rising">Naik</span><br>ตั๋ว (dtua)</td></tr>
        <tr><td><strong>🟡 Konsonan Tinggi</strong></td><td>Naik</td><td><span class="badge-low">Rendah</span><br>ไข่ (khai)</td><td><span class="badge-falling">Jatuh</span><br>ข้าว (khaao)</td><td><em>(Tidak ada)</em></td><td><em>(Tidak ada)</em></td></tr>
        <tr><td><strong>🔴 Konsonan Rendah</strong></td><td>Datar</td><td><span class="badge-falling">JATUH! ⚠️</span><br>ไม่ (mai), พี่ (phii)</td><td><span class="badge-high">TINGGI! ⚠️</span><br>น้ำ (naam), ม้า (maa)</td><td><em>(Tidak ada)</em></td><td><em>(Tidak ada)</em></td></tr>
      </tbody>
    </table>
  </div>

  <div class="fairy-tip">
    💡 <strong>Aturan Emas Konsonan Rendah:</strong> Pada konsonan rendah, nada selalu bergeser <strong>satu tingkat lebih tinggi</strong> dari nama tandanya!<br>
    Tanda Mai Ek (angka 1) -> dibaca nada JATUH (seperti tingkat 2).<br>
    Tanda Mai Tho (angka 2) -> dibaca nada TINGGI (seperti tingkat 3).
  </div>
</div>
"""
        },

        46: {
            "title": "Game Penentuan Nada Bagian 2 (Suara Pria)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Latihan membaca kata-kata bertanda Mai Ek dan Mai Tho pada konsonan rendah.",
            "keyPoints": ["Pergeseran nada konsonan rendah", "Kata-kata frekuensi tertinggi"],
            "thaiSample": {"thai": "ใช่, น้ำ, ช้า, ว่า", "rtgs": "chai, naam, chaa, waa", "meaning": "Ya, Air, Lambat, Bahwa"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎮 Membedah Kata Konsonan Rendah</h3><ul><li><strong>ใช่ (chai = ya):</strong> Konsonan rendah ช + Mai Ek -> <strong>Nada Jatuh</strong>. <button class='btn-audio-mini' onclick=\"speakThai('ใช่')\">🔊</button></li><li><strong>น้ำ (naam = air):</strong> Konsonan rendah น + Mai Tho -> <strong>Nada Tinggi</strong>. <button class='btn-audio-mini' onclick=\"speakThai('น้ำ')\">🔊</button></li></ul></div>"
        },

        47: {
            "title": "Game Penentuan Nada Bagian 2 (Suara Wanita)",
            "tag": "Game / Kuis",
            "icon": "🎯",
            "summary": "Menguji pemahaman 4 tanda nada dalam konteks kalimat utuh penutur wanita.",
            "keyPoints": ["Kelancaran membaca teks bertanda nada"],
            "thaiSample": {"thai": "ไม่เป็นไร", "rtgs": "mai bpen rai", "meaning": "Sama-sama / Tidak apa-apa"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎮 Frasa Terkenal: Mai Bpen Rai</h3><p>Kata <strong>ไม่ (mai)</strong> ber-Mai Ek pada konsonan rendah ม -> <strong>Nada Jatuh</strong>. Diikuti kata เป็น (datar) dan ไร (datar). <button class='btn-audio-mini' onclick=\"speakThai('ไม่เป็นไร')\">🔊 ไม่เป็นไร</button></p></div>"
        },

        48: {
            "title": "Ho Hip (ห) dan O Aang (อ) yang Tidak Dibaca (Konsonan Pembimbing)",
            "tag": "Materi [19]",
            "icon": "🛡️",
            "summary": "Fungsi konsonan pembimbing Ho Nam (ห นำ) dan O Nam (อ นำ): mengubah nada konsonan rendah tunggal menjadi kelas tinggi tanpa melafalkan bunyi H.",
            "keyPoints": [
                "Ho Nam (ห นำ): Huruf ห diletakkan di depan konsonan rendah tunggal (ง, ญ, น, ย, ร, ล, ว, ม)",
                "Huruf ห sama sekali tidak dibaca (bisu), fungsinya murni mengubah kelas kata menjadi Konsonan Tinggi",
                "O Nam (อ นำ): Huruf อ mendahului ย hanya pada 4 kata khusus: อย่า, อยาก, อย่าง, อยู่"
            ],
            "thaiSample": {"thai": "หมู, ใหญ่, อยาก, อยู่", "rtgs": "muu, yai, yaak, yuu", "meaning": "Babi (Nada Naik), Besar, Ingin, Tinggal/Sedang"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 Mengapa Ada Huruf yang Tidak Dibaca?</h3>
  <p>Konsonan Rendah Tunggal (seperti ม, น, ล, ย) secara alami tidak bisa menghasilkan <strong>Nada Naik</strong> atau <strong>Nada Rendah</strong> dengan mudah. Untuk mengatasinya, tata bahasa Thai menyematkan huruf pembimbing di depannya!</p>

  <div class="rule-box">
    <strong>1. Ho Nam (ห นำ):</strong><br>
    Huruf <strong>ห</strong> berdiri di depan huruf ง, ญ, น, ย, ร, ล, ว, ม. Huruf ห tidak bersuara, tetapi membuat kata tersebut <strong>mengikuti rumus Konsonan Tinggi</strong>!<br>
    <ul>
      <li>หมู (muu = babi) -> Nada NAIK! (karena mengikuti kelas ห) <button class="btn-audio-mini" onclick="speakThai('หมู')">🔊</button></li>
      <li>ใหญ่ (yai = besar) -> Nada JATUH! (Konsonan tinggi + Mai Ek = Jatuh) <button class="btn-audio-mini" onclick="speakThai('ใหญ่')">🔊</button></li>
      <li>ใหม่ (mai = baru) -> Nada JATUH! <button class="btn-audio-mini" onclick="speakThai('ใหม่')">🔊</button></li>
    </ul>
  </div>

  <div class="rule-box" style="margin-top:14px;">
    <strong>2. O Nam (อ นำ) - Hanya 4 Kata dalam Sejarah Thai!</strong><br>
    Huruf <strong>อ</strong> mendahului huruf <strong>ย</strong> hanya terjadi pada 4 kata wajib hafal ini:<br>
    <ol>
      <li><strong>อย่า (yaa)</strong> = Jangan <button class="btn-audio-mini" onclick="speakThai('อย่า')">🔊</button></li>
      <li><strong>อยาก (yaak)</strong> = Ingin / Mau <button class="btn-audio-mini" onclick="speakThai('อยาก')">🔊</button></li>
      <li><strong>อย่าง (yaang)</strong> = Macam / Cara / Seperti <button class="btn-audio-mini" onclick="speakThai('อย่าง')">🔊</button></li>
      <li><strong>อยู่ (yuu)</strong> = Tinggal / Berada / Sedang <button class="btn-audio-mini" onclick="speakThai('อยู่')">🔊</button></li>
    </ol>
  </div>
</div>
"""
        },

        49: {
            "title": "Tanda Peredam Bunyi _์ (Mai Thanthakhaat / Garan)",
            "tag": "Materi [20]",
            "icon": "🔇",
            "summary": "Fungsi tanda Garan ( ์ ) untuk mematikan bunyi konsonan asing (terutama kata serapan Sansekerta, Pali, dan Inggris).",
            "keyPoints": [
                "Tanda ์ diletakkan di atas konsonan yang tidak boleh dibunyikan",
                "Mempertahankan ejaan asli bahasa asal tanpa menyulitkan lidah penutur Thai",
                "Sangat banyak ditemukan pada hari dalam seminggu dan istilah teknologi"
            ],
            "thaiSample": {"thai": "วันจันทร์, โทรศัพท์, การ์ด", "rtgs": "wan-jan, thoo-ra-sap, gaat", "meaning": "Hari Senin, Telepon, Kartu"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 Fungsi Tanda Garan (การันต์ / ไม้ทัณฑฆาต)</h3>
  <p>Tanda <strong> ์ </strong> berfungsi sebagai 'tombol mute' pada konsonan di bawahnya:</p>
  <ul>
    <li><strong class="thai-char">วันจันทร์ (wan-jan)</strong> = Hari Senin (huruf ทร์ dimatikan) <button class="btn-audio-mini" onclick="speakThai('วันจันทร์')">🔊</button></li>
    <li><strong class="thai-char">โทรศัพท์ (thoo-ra-sap)</strong> = Telepon (huruf ท์ dimatikan) <button class="btn-audio-mini" onclick="speakThai('โทรศัพท์')">🔊</button></li>
    <li><strong class="thai-char">การ์ด (gaat)</strong> = Kartu / Card (huruf ร์ dimatikan) <button class="btn-audio-mini" onclick="speakThai('การ์ด')">🔊</button></li>
  </ul>
</div>
"""
        },

        50: {
            "title": "Kaidah Nada pada Konsonan Gabungan & Klaster",
            "tag": "Materi [21]",
            "icon": "🔀",
            "summary": "Bagaimana nada dihitung saat dua konsonan bergabung (klaster sejati vs suku kata ganda tersembunyi).",
            "keyPoints": ["Nada pada klaster sejati ditentukan konsonan pertama", "Pola aksara pimpinan pada kata 2 suku kata"],
            "thaiSample": {"thai": "ขนม, ตลาด, อร่อย", "rtgs": "kha-nom, dta-laat, a-roi", "meaning": "Kue, Pasar, Enak"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 Aksara Pimpinan (อักษรนำ) 2 Suku Kata</h3>
  <p>Pada kata seperti <strong>ขนม (kha-nom = kue)</strong> dan <strong>อร่อย (a-roi = lezat)</strong>, konsonan pertama menularkan kelasnya ke suku kata kedua:</p>
  <ul>
    <li><strong>อร่อย (a-roi):</strong> อ (tengah) memimpin ร (rendah) ber-Mai Ek -> suku kata kedua dibaca <strong>Nada Rendah</strong>! <button class="btn-audio-mini" onclick="speakThai('อร่อย')">🔊</button></li>
    <li><strong>ตลาด (dta-laat):</strong> ต (tengah) memimpin ล (rendah) mati -> suku kata kedua dibaca <strong>Nada Rendah</strong>! <button class="btn-audio-mini" onclick="speakThai('ตลาด')">🔊</button></li>
  </ul>
</div>
"""
        },

        51: {
            "title": "Tanda Baca Khas Thailand (ๆ , ฯ , ฯลฯ)",
            "tag": "Materi [22]",
            "icon": "🪧",
            "summary": "Mengenal 3 tanda baca unik aksara Thai: Maiyamok (pengulangan), Paiyannoi (penyingkat nama resmi), dan Paiyanyai (dan lain-lain).",
            "keyPoints": [
                "ๆ (Maiyamok): Mengulang kata sebelumnya (contoh: มากๆ maak-maak = banyak sekali)",
                "ฯ (Paiyannoi): Memotong nama tempat/gelar resmi yang sangat panjang (contoh: กรุงเทพฯ)",
                "ฯลฯ (Paiyanyai): Dibaca 'lae uen uen' (artinya: dan lain-lain / dsb.)"
            ],
            "thaiSample": {"thai": "มากๆ, กรุงเทพฯ, ฯลฯ", "rtgs": "maak maak, krung-thep, lae uen uen", "meaning": "Banyak-banyak, Bangkok (singkat), dll."},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 3 Tanda Baca Unik Aksara Thai</h3>
  <div class="rule-box">
    <ol>
      <li><strong>ๆ (ไม้ยมก - Maiyamok): Tanda Pengulangan Kata</strong><br>
      Diletakkan setelah kata yang ingin diulang untuk memberi efek jamak atau penguatan makna:<br>
      • เด็กๆ (dek-dek) = Anak-anak.<br>
      • ช้าๆ (chaa-chaa) = Pelan-pelan.<br>
      • บ่อยๆ (boi-boi) = Sering-sering.</li>

      <li style="margin-top:10px;"><strong>ฯ (ไปยาลน้อย - Paiyannoi): Penyingkat Nama Resmi</strong><br>
      Nama lengkap kota Bangkok adalah nama tempat terpanjang di dunia (168 huruf!). Dalam tulisan resmi disingkat menjadi <strong>กรุงเทพฯ (Krungthep)</strong> dengan tanda ฯ di ujungnya.</li>

      <li style="margin-top:10px;"><strong>ฯลฯ (ไปยาลใหญ่ - Paiyanyai): Dan Lain-Lain (dll.)</strong><br>
      Dibaca <em>'lae uen uen'</em> (dan lain-lain). Contoh: มีผลไม้ เช่น กล้วย ส้ม ฯลฯ (Ada buah-buahan seperti pisang, jeruk, dll).</li>
    </ol>
  </div>
</div>
"""
        },

        52: {
            "title": "Tanda Tanya dalam Bahasa Thai (Apakah Memakai '?')",
            "tag": "Materi [23]",
            "icon": "❓",
            "summary": "Mengapa kalimat tanya bahasa Thai aslinya tidak membutuhkan tanda tanya (?) dan bagaimana partikel tanya menggantikannya.",
            "keyPoints": [
                "Bahasa Thai tradisional tidak menggunakan tanda '?' di akhir kalimat",
                "Intonasi tanya sudah diwakili oleh partikel di ujung kalimat (ไหม, ใช่ไหม, หรือ)",
                "Tanda '?' hanya dipakai dalam percakapan santai media sosial / chat modern"
            ],
            "thaiSample": {"thai": "สบายดีไหม", "rtgs": "sa-baai-dii mai", "meaning": "Apa kabar? (tanpa tanda tanya)"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 Tanda Tanya dalam Bahasa Thai</h3>
  <p>Dalam buku teks resmi, surat kabar, dan novel bahasa Thai, Anda <strong>TIDAK AKAN MENEMUKAN tanda tanya (?)</strong>!</p>
  <p>Fungsi tanda tanya sudah sepenuhnya diemban oleh <strong>Kata Tanya</strong> yang diletakkan di akhir kalimat:</p>
  <ul>
    <li><strong class="thai-char">สบายดีไหม</strong> (sa-baai-dii mai) = Apa kabar? <button class="btn-audio-mini" onclick="speakThai('สบายดีไหม')">🔊</button></li>
    <li><strong class="thai-char">กินข้าวหรือยัง</strong> (kin khaao reuu yang) = Sudah makan belum? <button class="btn-audio-mini" onclick="speakThai('กินข้าวหรือยัง')">🔊</button></li>
  </ul>
</div>
"""
        },

        53: {
            "title": "Panduan Mengetik Keyboard Aksara Thai (Part 1 - Layout Kedmanee)",
            "tag": "Materi [24]",
            "icon": "⌨️",
            "summary": "Tata letak keyboard standar Kedmanee di PC dan HP, lokasi huruf vokal utama, konsonan umum, dan tombol shift.",
            "keyPoints": [
                "Standar keyboard Thai adalah Kedmanee (เกษมณี)",
                "Huruf-huruf frekuensi tinggi terletak di baris tengah (home row)",
                "Vokal atas dan bawah memiliki tombol khusus tersendiri"
            ],
            "thaiSample": {"thai": "แป้นพิมพ์ภาษาไทย", "rtgs": "bpaaen-phim phaa-saa-thai", "meaning": "Papan Ketik Keyboard Thai"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>⌨️ Mengetik Aksara Thai di Komputer & Smartphone</h3>
  <p>Keyboard resmi Thailand menggunakan susunan <strong>Kedmanee Layout</strong>:</p>
  <ul>
    <li>Tombol <strong>D</strong> pada keyboard qwerty = huruf <strong class="thai-char">ก</strong> (Ko Kai).</li>
    <li>Tombol <strong>F</strong> = vokal <strong class="thai-char">ด</strong> (Do Dek).</li>
    <li>Tombol <strong>J</strong> = huruf <strong class="thai-char">่</strong> (Mai Ek).</li>
    <li>Tombol <strong>H</strong> = huruf <strong class="thai-char">้</strong> (Mai Tho).</li>
  </ul>
</div>
"""
        },

        54: {
            "title": "Panduan Mengetik Keyboard Aksara Thai (Part 2 - Tombol Shift & Karakter Khusus)",
            "tag": "Materi [25]",
            "icon": "⌨️",
            "summary": "Mengetik karakter tingkat lanjut dengan tombol Shift: ฎ, ฏ, ษ, ศ, angka Thai, dan tanda baca ฯ, ๆ.",
            "keyPoints": [
                "Karakter baris kedua diakses dengan tombol Shift",
                "Lokasi tanda Maiyamok (ๆ) dan Paiyannoi (ฯ)",
                "Tips mengetik cepat aksara Thai tanpa melihat keyboard"
            ],
            "thaiSample": {"thai": "กด Shift เพื่อพิมพ์", "rtgs": "got shift phuea phim", "meaning": "Tekan Shift untuk mengetik"},
            "contentHtml": "<div class='lesson-content-block'><h3>⌨️ Akses Karakter Shift</h3><p>Tanda <strong>ๆ (Maiyamok)</strong> berada di tombol <strong>Q</strong> pada keyboard Thai. Tekan <strong>q</strong> langsung untuk memunculkan tanda ๆ.</p></div>"
        }
    }

print("Part 2 content helper defined.")

