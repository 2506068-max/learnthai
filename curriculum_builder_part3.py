# -*- coding: utf-8 -*-
"""
Detailed written content for Part 3 (Modules 55 - 91):
Tata Bahasa Dasar, Partikel Kesopanan, Angka, SVO, Kata Tunjuk, Kepemilikan, Tanya Jawab, dan Kata Kerja.
"""

def get_part3_content():
    return {
        55: {
            "title": "5 Kata Wajib untuk Pemula Bahasa Thai",
            "tag": "Materi [26]",
            "icon": "🌟",
            "summary": "5 ungkapan paling sakti dalam percakapan: Halo, Terima Kasih, Maaf/Permisi, Ya, dan Bukan.",
            "keyPoints": [
                "สวัสดี (sa-wat-dii): Salam universal sepanjang hari",
                "ขอบคุณ (khop-khun): Terima kasih",
                "ขอโทษ (khor-thot): Maaf / Permisi",
                "ใช่ (chai) vs ไม่ใช่ (mai chai): Ya / Benar vs Bukan"
            ],
            "thaiSample": {"thai": "สวัสดีครับ / ขอบคุณค่ะ", "rtgs": "sa-wat-dii khrap / khop-khun kha", "meaning": "Halo (pria) / Terima kasih (wanita)"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 5 Ungkapan Paling Krusial</h3>
  <div class="table-responsive">
    <table class="lesson-table">
      <thead><tr><th>Ungkapan Thai</th><th>Bacaan (RTGS)</th><th>Arti Bahasa Indonesia</th><th>Audio</th></tr></thead>
      <tbody>
        <tr><td><strong>สวัสดี</strong></td><td>sa-wat-dii</td><td>Halo / Selamat pagi / siang / malam</td><td><button class="btn-audio-mini" onclick="speakThai('สวัสดีครับ')">🔊</button></td></tr>
        <tr><td><strong>ขอบคุณ</strong></td><td>khop-khun</td><td>Terima kasih</td><td><button class="btn-audio-mini" onclick="speakThai('ขอบคุณครับ')">🔊</button></td></tr>
        <tr><td><strong>ขอโทษ</strong></td><td>khor-thot</td><td>Maaf / Permisi / Numpang lewat</td><td><button class="btn-audio-mini" onclick="speakThai('ขอโทษครับ')">🔊</button></td></tr>
        <tr><td><strong>ใช่</strong></td><td>chai</td><td>Ya / Betul / Benar</td><td><button class="btn-audio-mini" onclick="speakThai('ใช่ครับ')">🔊</button></td></tr>
        <tr><td><strong>ไม่ใช่</strong></td><td>mai chai</td><td>Bukan / Tidak benar</td><td><button class="btn-audio-mini" onclick="speakThai('ไม่ใช่ครับ')">🔊</button></td></tr>
      </tbody>
    </table>
  </div>
</div>
"""
        },

        56: {
            "title": "Partikel Kesopanan Lengkap (Khrap & Kha)",
            "tag": "Materi [27]",
            "icon": "🙏",
            "summary": "Kaidah penggunaan partikel kesopanan: Pria menggunakan ครับ (khrap), Wanita menggunakan ค่ะ (kha) dan คะ (kha).",
            "keyPoints": [
                "Pria: Selalu gunakan ครับ (khrap) di semua jenis kalimat (pernyataan, pertanyaan, jawaban)",
                "Wanita: Gunakan ค่ะ (kha - nada jatuh) untuk PERNYATAAN / MENJAWAB",
                "Wanita: Gunakan คะ (kha - nada tinggi) untuk BERTANYA / MEMANGGIL"
            ],
            "thaiSample": {"thai": "ครับ / ค่ะ / คะ", "rtgs": "khrap / khâ / khá", "meaning": "Partikel Sopan Pria & Wanita"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 Perbedaan Krusial ค่ะ vs คะ bagi Wanita</h3>
  <div class="rule-box">
    <ul>
      <li>🟢 <strong>ครับ (khrap) - Pria:</strong> Digunakan untuk SEMUA situasi. Contoh: ขอบคุณครับ, ใช่ครับ, ไปไหนครับ. <button class="btn-audio-mini" onclick="speakThai('ขอบคุณครับ')">🔊</button></li>
      <li>🟡 <strong>ค่ะ (kha - Nada Jatuh) - Wanita:</strong> Digunakan untuk <strong>Pernyataan / Berterima kasih / Menjawab</strong>. Contoh: ขอบคุณค่ะ, ใช่ค่ะ. <button class="btn-audio-mini" onclick="speakThai('ขอบคุณค่ะ')">🔊</button></li>
      <li>🔴 <strong>คะ (kha - Nada Tinggi) - Wanita:</strong> Digunakan untuk <strong>Kalimat Tanya / Memanggil / Menjawab panggilan</strong>. Contoh: อะไรนะคะ? (Apa ya?), ไปไหนคะ? (Mau ke mana?). <button class="btn-audio-mini" onclick="speakThai('อะไรนะคะ')">🔊</button></li>
    </ul>
  </div>
</div>
"""
        },

        57: {
            "title": "Berhitung Angka 1 - 99 dan Aturan Khususnya",
            "tag": "Materi [28]",
            "icon": "🔢",
            "summary": "Sistem berhitung 1-99 dalam bahasa Thai serta 2 pengecualian legendaris: kata 'Et' (11, 21, 31) dan 'Yi-sip' (20).",
            "keyPoints": [
                "Angka 1 sampai 10: Nueng, Saawng, Saam, Sii, Haa, Hok, Jet, Bpaaet, Gao, Sip",
                "Angka 1 di posisi satuan belasan/puluhan berubah menjadi เอ็ด (et): 11 = sip-et, 21 = yi-sip-et",
                "Angka 20 disebut ยี่สิบ (yi-sip), bukan saawng-sip!"
            ],
            "thaiSample": {"thai": "สิบเอ็ด, ยี่สิบ, ยี่สิบเอ็ด", "rtgs": "sip-et, yii-sip, yii-sip-et", "meaning": "11, 20, 21"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>📊 Tabel Angka 1 sampai 10</h3>
  <div class="table-responsive">
    <table class="lesson-table">
      <thead><tr><th>Angka</th><th>Aksara Thai</th><th>Bacaan</th><th>Angka</th><th>Aksara Thai</th><th>Bacaan</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>หนึ่ง</td><td>nueng</td><td>6</td><td>หก</td><td>hok</td></tr>
        <tr><td>2</td><td>สอง</td><td>saawng</td><td>7</td><td>เจ็ด</td><td>jet</td></tr>
        <tr><td>3</td><td>สาม</td><td>saam</td><td>8</td><td>แปด</td><td>bpaaet</td></tr>
        <tr><td>4</td><td>สี่</td><td>sii</td><td>9</td><td>เก้า</td><td>gao</td></tr>
        <tr><td>5</td><td>ห้า</td><td>haa</td><td>10</td><td>สิบ</td><td>sip</td></tr>
      </tbody>
    </table>
  </div>

  <div class="rule-box" style="margin-top:14px;">
    <strong>⚠️ 2 Pengecualian Emas:</strong>
    <ol>
      <li><strong>Angka 1 di Belakang:</strong> Selalu disebut <strong>เอ็ด (et)</strong>!<br>
      • 11 = สิบเอ็ด (sip-et) <button class="btn-audio-mini" onclick="speakThai('สิบเอ็ด')">🔊</button><br>
      • 21 = ยี่สิบเอ็ด (yii-sip-et) <button class="btn-audio-mini" onclick="speakThai('ยี่สิบเอ็ด')">🔊</button><br>
      • 31 = สามสิบเอ็ด (saam-sip-et)</li>
      <li><strong>Angka 20:</strong> Disebut <strong>ยี่สิบ (yii-sip)</strong>, BUKAN saawng-sip! <button class="btn-audio-mini" onclick="speakThai('ยี่สิบ')">🔊</button></li>
    </ol>
  </div>
</div>
"""
        },

        58: {
            "title": "Rumus Perkenalan Diri Pemula (Nama, Asal, Umur)",
            "tag": "Materi [29]",
            "icon": "🤝",
            "summary": "Template lengkap memperkenalkan diri secara natural dalam bahasa Thai dari salam, nama, negara asal, hingga umur.",
            "keyPoints": [
                "Saya: ผม (phom - pria) vs ฉัน (chan - wanita)",
                "Rumus nama: ผม/ฉันชื่อ... (Phom/Chan chue...)",
                "Rumus asal: มาจากประเทศอินโดนีเซีย (Maa jaak bpra-theet in-doh-nii-siia)",
                "Rumus umur: อายุ...ปี (Aa-yu ... bpii)"
            ],
            "thaiSample": {"thai": "ผมชื่อ... มาจากอินโดนีเซีย", "rtgs": "phom chue... maa jaak in-doh-nii-siia", "meaning": "Nama saya... berasal dari Indonesia"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🤝 Template Praktis Perkenalan Diri</h3>
  <div class="rule-box">
    <p><strong>Versi Pria:</strong><br>
    สวัสดีครับ ผมชื่อ [Nama] ครับ มาจากประเทศอินโดนีเซียครับ อายุ [Umur] ปีครับ ยินดีที่ได้รู้จักครับ<br>
    <button class="btn-audio-mini" onclick="speakThai('สวัสดีครับ ผมชื่อสมชาย มาจากประเทศอินโดนีเซียครับ')">🔊 Dengarkan Contoh Pria</button></p>

    <p style="margin-top:12px;"><strong>Versi Wanita:</strong><br>
    สวัสดีค่ะ ฉันชื่อ [Nama] ค่ะ มาจากประเทศอินโดนีเซียค่ะ อายุ [Umur] ปีค่ะ ยินดีที่ได้รู้จักค่ะ<br>
    <button class="btn-audio-mini" onclick="speakThai('สวัสดีค่ะ ฉันชื่อลลิตา มาจากประเทศอินโดนีเซียค่ะ')">🔊 Dengarkan Contoh Wanita</button></p>
  </div>
</div>
"""
        },

        59: {
            "title": "#NabungKosakata Profesi & Pekerjaan (อาชีพ)",
            "tag": "Materi [30]",
            "icon": "💼",
            "summary": "Kumpulan kosakata profesi sehari-hari: guru, dokter, mahasiswa, pegawai kantor, pedagang, polisi, dsb.",
            "keyPoints": ["Kosakata profesi umum", "Menyatakan profesi dalam kalimat: เป็น + [Profesi]"],
            "thaiSample": {"thai": "ครู, หมอ, นักศึกษา, พนักงาน", "rtgs": "khruu, maaw, nak-suek-saa, phanak-ngaan", "meaning": "Guru, Dokter, Mahasiswa, Karyawan"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>💼 Daftar Kosakata Pekerjaan Populer</h3>
  <div class="table-responsive">
    <table class="lesson-table">
      <thead><tr><th>Profesi Thai</th><th>Bacaan (RTGS)</th><th>Arti</th><th>Audio</th></tr></thead>
      <tbody>
        <tr><td><strong>ครู</strong></td><td>khruu</td><td>Guru / Pengajar</td><td><button class="btn-audio-mini" onclick="speakThai('ครู')">🔊</button></td></tr>
        <tr><td><strong>หมอ</strong></td><td>maaw</td><td>Dokter</td><td><button class="btn-audio-mini" onclick="speakThai('หมอ')">🔊</button></td></tr>
        <tr><td><strong>นักศึกษา</strong></td><td>nak-suek-saa</td><td>Mahasiswa</td><td><button class="btn-audio-mini" onclick="speakThai('นักศึกษา')">🔊</button></td></tr>
        <tr><td><strong>นักเรียน</strong></td><td>nak-rian</td><td>Murid sekolah</td><td><button class="btn-audio-mini" onclick="speakThai('นักเรียน')">🔊</button></td></tr>
        <tr><td><strong>พนักงานบริษัท</strong></td><td>phanak-ngaan bor-ri-sat</td><td>Karyawan kantor/perusahaan</td><td><button class="btn-audio-mini" onclick="speakThai('พนักงานบริษัท')">🔊</button></td></tr>
        <tr><td><strong>พ่อค้า / แม่ค้า</strong></td><td>phaaw-khaa / maae-khaa</td><td>Pedagang pria / wanita</td><td><button class="btn-audio-mini" onclick="speakThai('พ่อค้า')">🔊</button></td></tr>
      </tbody>
    </table>
  </div>
</div>
"""
        },

        60: {
            "title": "Tanya Jawab Perkenalan Diri (ft. Thai with Vee)",
            "tag": "Materi [31]",
            "icon": "🗣️",
            "summary": "Dialog tanya jawab natural seputar perkenalan: Kamu namanya siapa? Dari mana? Tinggal di mana?",
            "keyPoints": ["Pertanyaan nama: คุณชื่ออะไร (Khun chue arai?)", "Pertanyaan asal: มาจากไหน (Maa jaak nai?)"],
            "thaiSample": {"thai": "คุณชื่ออะไรครับ", "rtgs": "khun chue arai khrap", "meaning": "Siapa nama Anda?"},
            "contentHtml": "<div class='lesson-content-block'><h3>🗣️ Pertanyaan Wajib Perkenalan</h3><ul><li><strong>คุณชื่ออะไรครับ? (Khun chue arai khrap?):</strong> Siapa nama Anda? <button class='btn-audio-mini' onclick=\"speakThai('คุณชื่ออะไรครับ')\">🔊</button></li><li><strong>คุณมาจากไหนครับ? (Khun maa jaak nai khrap?):</strong> Anda berasal dari mana? <button class='btn-audio-mini' onclick=\"speakThai('คุณมาจากไหนครับ')\">🔊</button></li></ul></div>"
        },

        61: {
            "title": "Game Tanya Jawab Perkenalan Diri Bersama Sahabat",
            "tag": "Game / Kuis",
            "icon": "🎮",
            "summary": "Simulasi interaktif percakapan perkenalan di kafe bersama teman penutur asli.",
            "keyPoints": ["Praktik merespons cepat", "Percakapan kasual santai"],
            "thaiSample": {"thai": "ยินดีที่ได้รู้จัก", "rtgs": "yin-dii thii dai ruu-jak", "meaning": "Senang berkenalan denganmu"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎮 Praktik Dialog</h3><p>Jawablah salam lawan bicara Anda: <strong>ยินดีที่ได้รู้จักเช่นกันครับ (Yin-dii thii dai ruu-jak chen-gan khrap = Senang berkenalan dengan Anda juga).</strong></p></div>"
        },

        62: {
            "title": "Perbedaan Kata Tanya ไหม (Mai) vs ใช่ไหม (Chai Mai)",
            "tag": "Materi [33]",
            "icon": "❓",
            "summary": "Kapan menggunakan ไหม (pertanyaan terbuka ya/tidak) dan kapan menggunakan ใช่ไหม (tag question konfirmasi 'kan?').",
            "keyPoints": [
                "ไหม (mai): Menanyakan hal baru yang belum diketahui ('Apakah kamu lapar?')",
                "ใช่ไหม (chai mai): Meminta konfirmasi terhadap dugaan yang sudah ada ('Kamu orang Indo, kan?')",
                "Jawaban untuk ไหม: Verba / ไม่ + Verba",
                "Jawaban untuk ใช่ไหม: ใช่ (chai) / ไม่ใช่ (mai chai)"
            ],
            "thaiSample": {"thai": "หิวไหม vs คนไทยใช่ไหม", "rtgs": "hiu mai vs khon thai chai mai", "meaning": "Lapar tidak? vs Orang Thai, kan?"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🎯 Perbedaan Tajam ไหม vs ใช่ไหม</h3>
  <div class="rule-box">
    <ul>
      <li>🟢 <strong>ไหม (Mai) = Apakah...?:</strong> Digunakan ketika penanya benar-benar tidak tahu jawabannya.<br>
      • หิวไหม (Hiu mai?) = Lapar tidak? <button class="btn-audio-mini" onclick="speakThai('หิวไหม')">🔊</button><br>
      • ไปไหม (Pai mai?) = Mau pergi tidak? <button class="btn-audio-mini" onclick="speakThai('ไปไหม')">🔊</button></li>

      <li>🟡 <strong>ใช่ไหม (Chai Mai) = ...Kan? / ...Bukan?:</strong> Digunakan ketika penanya sudah memiliki tebakan dan hanya ingin konfirmasi.<br>
      • คุณเป็นคนอินโดนีเซียใช่ไหม (Khun bpen khon in-doh-nii-siia chai mai?) = Anda orang Indonesia, kan? <button class="btn-audio-mini" onclick="speakThai('คุณเป็นคนอินโดนีเซียใช่ไหม')">🔊</button><br>
      • อร่อยใช่ไหม (A-roi chai mai?) = Enak, kan?</li>
    </ul>
  </div>
</div>
"""
        },

        63: {
            "title": "#NabungKosakata Benda-Benda Sehari-hari (สิ่งของ)",
            "tag": "Materi [34]",
            "icon": "📦",
            "summary": "Kosakata benda yang sering ditemui: buku, pulpen, telepon, meja, kursi, tas, uang, air, dsb.",
            "keyPoints": ["Benda di tas dan meja kerja", "Kata benda penting untuk belanja"],
            "thaiSample": {"thai": "หนังสือ, ปากกา, โทรศัพท์, เงิน", "rtgs": "nang-sue, bpaak-gaa, thoo-ra-sap, ngoen", "meaning": "Buku, Pulpen, HP, Uang"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>📦 Daftar Kosakata Benda Penting</h3>
  <ul>
    <li><strong>หนังสือ (nang-sue):</strong> Buku <button class="btn-audio-mini" onclick="speakThai('หนังสือ')">🔊</button></li>
    <li><strong>ปากกา (bpaak-gaa):</strong> Pulpen <button class="btn-audio-mini" onclick="speakThai('ปากกา')">🔊</button></li>
    <li><strong>โทรศัพท์ (thoo-ra-sap):</strong> Telepon / HP <button class="btn-audio-mini" onclick="speakThai('โทรศัพท์')">🔊</button></li>
    <li><strong>กระเป๋า (gra-bpao):</strong> Tas / Dompet <button class="btn-audio-mini" onclick="speakThai('กระเป๋า')">🔊</button></li>
    <li><strong>เงิน (ngoen):</strong> Uang <button class="btn-audio-mini" onclick="speakThai('เงิน')">🔊</button></li>
  </ul>
</div>
"""
        },

        64: {
            "title": "Kata Tunjuk Benda (Ini, Itu Dekat, Itu Jauh)",
            "tag": "Materi [35]",
            "icon": "👉",
            "summary": "3 tingkatan jarak kata tunjuk benda: นี่ (nii = ini), นั่น (nan = itu), dan โน่น (noon = itu jauh di sana).",
            "keyPoints": [
                "นี่ (nii): Ini (berada di tangan atau sangat dekat)",
                "นั่น (nan): Itu (berada dekat lawan bicara)",
                "โน่น (noon): Itu di sana (jauh dari kedua pembicara)"
            ],
            "thaiSample": {"thai": "นี่คืออะไร / นั่นอะไร", "rtgs": "nii khue arai / nan arai", "meaning": "Ini apa? / Itu apa?"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>👉 3 Jarak Kata Tunjuk Benda</h3>
  <div class="rule-box">
    <ol>
      <li><strong>นี่ (nii) = Ini:</strong> นี่คืออะไร (Nii khue arai? = Ini apa?). <button class="btn-audio-mini" onclick="speakThai('นี่คืออะไร')">🔊</button></li>
      <li><strong>นั่น (nan) = Itu:</strong> นั่นหนังสือของใคร (Nan nang-sue khaawng khrai? = Itu buku siapa?). <button class="btn-audio-mini" onclick="speakThai('นั่นหนังสือของใคร')">🔊</button></li>
      <li><strong>โน่น (noon) = Itu di sana:</strong> โน่นคืออะไร (Noon khue arai? = Yang di sebelah sana itu apa?). <button class="btn-audio-mini" onclick="speakThai('โน่นคืออะไร')">🔊</button></li>
    </ol>
  </div>
</div>
"""
        },

        65: {
            "title": "#NabungKosakata Status Hubungan & Anggota Keluarga",
            "tag": "Materi [36]",
            "icon": "👨‍👩‍👧",
            "summary": "Kosakata silsilah keluarga: Ayah, Ibu, Kakak, Adik, Teman, Pacar, Suami, Istri.",
            "keyPoints": [
                "Ayah: พ่อ (phaaw), Ibu: แม่ (maae)",
                "Kakak: พี่ (phii), Adik: น้อง (naawng) - bisa untuk laki-laki maupun perempuan!",
                "Pacar: แฟน (faaen), Teman: เพื่อน (phuean)"
            ],
            "thaiSample": {"thai": "พ่อ, แม่, พี่, น้อง, แฟน", "rtgs": "phaaw, maae, phii, naawng, faaen", "meaning": "Ayah, Ibu, Kakak, Adik, Pacar"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>👨‍👩‍👧 Anggota Keluarga Inti</h3>
  <ul>
    <li><strong>พ่อ (phaaw):</strong> Ayah <button class="btn-audio-mini" onclick="speakThai('พ่อ')">🔊</button></li>
    <li><strong>แม่ (maae):</strong> Ibu <button class="btn-audio-mini" onclick="speakThai('แม่')">🔊</button></li>
    <li><strong>พี่ (phii):</strong> Kakak (laki/perempuan) <button class="btn-audio-mini" onclick="speakThai('พี่')">🔊</button></li>
    <li><strong>น้อง (naawng):</strong> Adik (laki/perempuan) <button class="btn-audio-mini" onclick="speakThai('น้อง')">🔊</button></li>
    <li><strong>เพื่อน (phuean):</strong> Teman <button class="btn-audio-mini" onclick="speakThai('เพื่อน')">🔊</button></li>
    <li><strong>แฟน (faaen):</strong> Pacar / Pasangan <button class="btn-audio-mini" onclick="speakThai('แฟน')">🔊</button></li>
  </ul>
</div>
"""
        },

        66: {
            "title": "Menyatakan Kepemilikan (Penggunaan Kata ของ - Khaawng)",
            "tag": "Materi [37]",
            "icon": "🏷️",
            "summary": "Rumus menyatakan kepemilikan dalam bahasa Thai: [Benda] + ของ (khaawng) + [Pemilik].",
            "keyPoints": [
                "ของ (khaawng) berarti 'milik' atau 'punya'",
                "Urutan kata berkebalikan dari bahasa Inggris: Benda di depan, pemilik di belakang",
                "Dalam percakapan santai kata ของ sering dihilangkan (misal: กระเป๋าผม = tas saya)"
            ],
            "thaiSample": {"thai": "หนังสือของผม", "rtgs": "nang-sue khaawng phom", "meaning": "Buku milik saya"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🏷️ Rumus Kepemilikan</h3>
  <div class="rule-box" style="font-size:16px;">
    <strong>[ Kata Benda ] + ของ (khaawng) + [ Pemilik ]</strong>
  </div>
  <ul>
    <li>โทรศัพท์<strong>ของผม</strong> (Thoo-ra-sap khaawng phom) = Telepon milik saya. <button class="btn-audio-mini" onclick="speakThai('โทรศัพท์ของผม')">🔊</button></li>
    <li>บ้าน<strong>ของครู</strong> (Baan khaawng khruu) = Rumah milik guru. <button class="btn-audio-mini" onclick="speakThai('บ้านของครู')">🔊</button></li>
    <li>รถ<strong>ของใคร</strong> (Rot khaawng khrai?) = Mobil milik siapa? <button class="btn-audio-mini" onclick="speakThai('รถของใคร')">🔊</button></li>
  </ul>
</div>
"""
        },

        67: {
            "title": "Kata Tunjuk Orang (Orang ini, Orang itu, Dia)",
            "tag": "Materi [38]",
            "icon": "👥",
            "summary": "Cara menunjuk orang di sekitar: คนนี้ (orang ini), คนนั้น (orang itu), dan เขา (dia).",
            "keyPoints": ["Rumus: คน (khon) + Kata Tunjuk (นี้ / นั้น)", "Menyapa orang ketiga dengan sopan"],
            "thaiSample": {"thai": "คนนี้คือใคร", "rtgs": "khon nii khue khrai", "meaning": "Orang ini siapa?"},
            "contentHtml": "<div class='lesson-content-block'><h3>👥 Menunjuk Seseorang</h3><ul><li><strong>คนนี้ (khon nii):</strong> Orang ini. <button class='btn-audio-mini' onclick=\"speakThai('คนนี้คือเพื่อนผม')\">🔊 คนนี้คือเพื่อนผม (Orang ini adalah teman saya)</button></li><li><strong>คนนั้น (khon nan):</strong> Orang itu.</li><li><strong>เขา (khao):</strong> Dia / Beliau.</li></ul></div>"
        },

        68: {
            "title": "Partikel Tanya Konfirmasi หรอ (Roo) dan หรือเปล่า (Reuu Plao)",
            "tag": "Materi [39]",
            "icon": "🧐",
            "summary": "Nuansa partikel tanya kasual: หรอ (Masa sih? Beneran?) vs หรือเปล่า (Atau tidak?).",
            "keyPoints": [
                "หรอ (roo / raw): Digunakan untuk bereaksi terkejut atau penasaran ('Oh ya? Masa sih?')",
                "หรือเปล่า (reuu bplao): Pertanyaan biner ('...atau tidak?')"
            ],
            "thaiSample": {"thai": "จริงหรอ / ไปหรือเปล่า", "rtgs": "jing roo / bpai reuu bplao", "meaning": "Beneran nih? / Jadi pergi atau tidak?"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🧐 Nuansa Tanya Kasual</h3>
  <ul>
    <li><strong class="thai-char">จริงหรอ (Jing roo?):</strong> Beneran nih? / Masa sih? <button class="btn-audio-mini" onclick="speakThai('จริงหรอ')">🔊</button></li>
    <li><strong class="thai-char">ชอบหรือเปล่า (Chaawp reuu bplao?):</strong> Suka atau tidak? <button class="btn-audio-mini" onclick="speakThai('ชอบหรือเปล่า')">🔊</button></li>
  </ul>
</div>
"""
        },

        69: {
            "title": "#NabungKosakata Nama Tempat & Fasilitas Umum (สถานที่)",
            "tag": "Materi [40]",
            "icon": "🏢",
            "summary": "Kosakata tempat penting: Rumah, Sekolah, Rumah Sakit, Hotel, Pasar, Bandara, Stasiun MRT/BTS.",
            "keyPoints": ["Fasilitas umum di Thailand", "Navigasi perjalanan"],
            "thaiSample": {"thai": "บ้าน, โรงเรียน, โรงพยาบาล, ตลาด", "rtgs": "baan, rong-rian, rong-pha-ya-baan, dta-laat", "meaning": "Rumah, Sekolah, RS, Pasar"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🏢 Tempat Umum Esensial</h3>
  <ul>
    <li><strong>บ้าน (baan):</strong> Rumah <button class="btn-audio-mini" onclick="speakThai('บ้าน')">🔊</button></li>
    <li><strong>โรงเรียน (rong-rian):</strong> Sekolah <button class="btn-audio-mini" onclick="speakThai('โรงเรียน')">🔊</button></li>
    <li><strong>โรงพยาบาล (rong-pha-ya-baan):</strong> Rumah Sakit <button class="btn-audio-mini" onclick="speakThai('โรงพยาบาล')">🔊</button></li>
    <li><strong>ตลาด (dta-laat):</strong> Pasar <button class="btn-audio-mini" onclick="speakThai('ตลาด')">🔊</button></li>
    <li><strong>สนามบิน (sa-naam-bin):</strong> Bandara <button class="btn-audio-mini" onclick="speakThai('สนามบิน')">🔊</button></li>
    <li><strong>ห้องน้ำ (haawng-naam):</strong> Toilet / Kamar mandi <button class="btn-audio-mini" onclick="speakThai('ห้องน้ำ')">🔊</button></li>
  </ul>
</div>
"""
        },

        70: {
            "title": "Kata Tunjuk Tempat (Di Sini, Di Situ, Di Sana)",
            "tag": "Materi [41]",
            "icon": "📍",
            "summary": "Menunjukkan lokasi keberadaan: ที่นี่ (thii-nii = di sini), ที่นั่น (thii-nan = di situ), ที่โน่น (thii-noon = di sana).",
            "keyPoints": [
                "Rumus: ที่ (thii = tempat/di) + Kata Tunjuk",
                "Menanyakan toilet: ห้องน้ำอยู่ที่ไหน (Haawng-naam yuu thii nai?)"
            ],
            "thaiSample": {"thai": "ที่นี่, ที่นั่น, ที่โน่น", "rtgs": "thii-nii, thii-nan, thii-noon", "meaning": "Di sini, Di situ, Di sana"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>📍 3 Kata Tunjuk Lokasi</h3>
  <ul>
    <li><strong>ที่นี่ (thii-nii):</strong> Di sini. Contoh: อยู่ที่นี่ (Yuu thii-nii = Ada di sini). <button class="btn-audio-mini" onclick="speakThai('อยู่ที่นี่')">🔊</button></li>
    <li><strong>ที่นั่น (thii-nan):</strong> Di situ.</li>
    <li><strong>ที่โน่น (thii-noon):</strong> Di sana.</li>
    <li><strong>ที่ไหน (thii-nai):</strong> Di mana? Contoh: ห้องน้ำอยู่ที่ไหนครับ (Toilet ada di mana?). <button class="btn-audio-mini" onclick="speakThai('ห้องน้ำอยู่ที่ไหนครับ')">🔊</button></li>
  </ul>
</div>
"""
        },

        71: {
            "title": "Praktik 30 Kalimat Sederhana Sehari-hari",
            "tag": "Materi [42]",
            "icon": "🗣️",
            "summary": "Latihan komprehensif mendengarkan, membaca, dan menerjemahkan 30 kalimat esensial komunikasi harian.",
            "keyPoints": ["Kalimat sapaan, arah jalan, dan belanja", "Memperkuat kelancaran berbicara"],
            "thaiSample": {"thai": "อันนี้ราคาเท่าไหร่", "rtgs": "an nii raa-khaa thao-rai", "meaning": "Berapa harga barang yang ini?"},
            "contentHtml": "<div class='lesson-content-block'><h3>🗣️ Kalimat Belanja Paling Populer</h3><p><strong>อันนี้ราคาเท่าไหร่ครับ? (An nii raa-khaa thao-rai khrap?):</strong> Berapa harga barang ini? <button class='btn-audio-mini' onclick=\"speakThai('อันนี้ราคาเท่าไหร่ครับ')\">🔊</button></p></div>"
        },

        72: {
            "title": "Kata Ganti Orang Dasar (Pronouns) Bahasa Thai",
            "tag": "Materi [43]",
            "icon": "👤",
            "summary": "Tabel lengkap kata ganti orang: Saya (Phom/Chan), Anda (Khun), Dia (Khao), Kita (Rao), Mereka (Phuak-khao).",
            "keyPoints": [
                "Saya (pria): ผม (phom) - formal & sopan",
                "Saya (wanita): ฉัน (chan) atau ดิฉัน (di-chan - sangat formal)",
                "Anda / Kamu: คุณ (khun) - netral & sangat sopan",
                "Dia: เขา (khao), Kita/Kami: เรา (rao), Mereka: พวกเขา (phuak-khao)"
            ],
            "thaiSample": {"thai": "ผม, ฉัน, คุณ, เขา, เรา", "rtgs": "phom, chan, khun, khao, rao", "meaning": "Saya (pria), Saya (wanita), Anda, Dia, Kita"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>👤 Matriks Kata Ganti Sopan</h3>
  <div class="table-responsive">
    <table class="lesson-table">
      <thead><tr><th>Kata Ganti</th><th>Aksara Thai</th><th>RTGS</th><th>Arti</th><th>Penggunaan</th></tr></thead>
      <tbody>
        <tr><td>Orang I (Pria)</td><td><strong>ผม</strong></td><td>phom</td><td>Saya</td><td>Sopan untuk semua usia</td></tr>
        <tr><td>Orang I (Wanita)</td><td><strong>ฉัน</strong></td><td>chan</td><td>Saya</td><td>Sopan & netral</td></tr>
        <tr><td>Orang II</td><td><strong>คุณ</strong></td><td>khun</td><td>Anda / Kamu</td><td>Sangat sopan & menghargai</td></tr>
        <tr><td>Orang III</td><td><strong>เขา</strong></td><td>khao</td><td>Dia / Beliau</td><td>Tunggal (laki/perempuan)</td></tr>
        <tr><td>Orang I Jamak</td><td><strong>เรา</strong></td><td>rao</td><td>Kita / Kami</td><td>Bisa juga berarti 'aku' pada teman</td></tr>
        <tr><td>Orang III Jamak</td><td><strong>พวกเขา</strong></td><td>phuak-khao</td><td>Mereka</td><td>Kelompok orang lain</td></tr>
      </tbody>
    </table>
  </div>
</div>
"""
        },

        73: {
            "title": "Kata Ganti Slang & Bahasa Gaul Thai (Kuu, Meung, Tua-eng)",
            "tag": "Materi [44]",
            "icon": "😎",
            "summary": "Memahami kata ganti kasual bahasa gaul anak muda Thai, batasan etika, dan kapan boleh/tidak boleh diucapkan.",
            "keyPoints": [
                "กู (kuu) & มึง (meung): Aku & Kau yang sangat kasar / sangat akrab (HANYA untuk sahabat dekat)",
                "JANGAN PERNAH gunakan กู/มึง pada orang asing, orang tua, atau di tempat umum!",
                "ตัวเอง (dtua-eng): Panggilan manis 'kamu / ayang' untuk pacar atau teman akrab"
            ],
            "thaiSample": {"thai": "ตัวเอง / เรา", "rtgs": "dtua-eng / rao", "meaning": "Kamu (manis/pacar) / Aku"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>⚠️ Etika Bahasa Slang Thai</h3>
  <p>Dalam serial drama atau pergaulan anak muda di Bangkok, Anda akan sering mendengar kata <strong>กู (kuu = gue)</strong> dan <strong>มึง (meung = lu)</strong>.</p>
  <div class="rule-box" style="border-color:#ef4444;">
    <strong style="color:#ef4444;">Peringatan Penting:</strong> Kata ini hanya boleh diucapkan di antara sahabat yang sudah saling mengenal sangat akrab bertahun-tahun. Jika Anda mengucapkannya kepada orang baru, supir taksi, atau penjual makanan, kata ini terdengar <strong>sangat kasar dan menghina</strong>!
  </div>
</div>
"""
        },

        74: {
            "title": "#NabungKosakata Kata Kerja Bagian 1 (Aktivitas Dasar)",
            "tag": "Materi [45]",
            "icon": "🏃",
            "summary": "Kata kerja harian terpenting: Makan, Minum, Pergi, Datang, Tidur, Duduk, Berdiri, Melihat, Mendengar.",
            "keyPoints": ["Kata kerja dasar tanpa konjugasi", "Bahasa Thai tidak memiliki perubahan bentuk kata kerja!"],
            "thaiSample": {"thai": "กิน, ดื่ม, ไป, มา, นอน", "rtgs": "kin, duum, bpai, maa, naawn", "meaning": "Makan, Minum, Pergi, Datang, Tidur"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🏃 10 Kata Kerja Fundamental</h3>
  <ul>
    <li><strong>กิน (kin) / ทาน (thaan):</strong> Makan <button class="btn-audio-mini" onclick="speakThai('กินข้าว')">🔊 กินข้าว (makan nasi)</button></li>
    <li><strong>ดื่ม (duum):</strong> Minum <button class="btn-audio-mini" onclick="speakThai('ดื่มน้ำ')">🔊 ดื่มน้ำ (minum air)</button></li>
    <li><strong>ไป (bpai):</strong> Pergi <button class="btn-audio-mini" onclick="speakThai('ไป')">🔊</button></li>
    <li><strong>มา (maa):</strong> Datang <button class="btn-audio-mini" onclick="speakThai('มา')">🔊</button></li>
    <li><strong>นอน (naawn):</strong> Tidur <button class="btn-audio-mini" onclick="speakThai('นอน')">🔊</button></li>
    <li><strong>ดู (duu):</strong> Menonton / Melihat <button class="btn-audio-mini" onclick="speakThai('ดู')">🔊</button></li>
  </ul>
</div>
"""
        },

        75: {
            "title": "Menyusun Kalimat Sederhana SVO (Tata Bahasa Dasar Thai)",
            "tag": "Materi [46]",
            "icon": "🧱",
            "summary": "Struktur pembentukan kalimat bahasa Thai mengikuti pola SVO persis seperti bahasa Indonesia (Subjek + Verba + Objek).",
            "keyPoints": [
                "Pola kalimat: Subjek + Predikat (Kata Kerja) + Objek",
                "Tidak ada perubahan bentuk kata kerja (tenses, gender, atau plural tidak mengubah verba)",
                "Mudah dipelajari oleh penutur bahasa Indonesia karena struktur urutannya identik!"
            ],
            "thaiSample": {"thai": "ผมกินข้าว", "rtgs": "phom kin khaao", "meaning": "Saya makan nasi (S-V-O)"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🧱 Pola Kalimat SVO</h3>
  <div class="rule-box" style="font-size:16px;">
    <strong>[ Subjek ] + [ Kata Kerja ] + [ Objek ]</strong>
  </div>
  <p>Perhatikan kemiripan mutlak dengan bahasa Indonesia:</p>
  <ul>
    <li><strong>ผม (Saya) + กิน (makan) + ข้าว (nasi)</strong> = ผมกินข้าว (Phom kin khaao) <button class="btn-audio-mini" onclick="speakThai('ผมกินข้าว')">🔊</button></li>
    <li><strong>เขา (Dia) + ดื่ม (minum) + กาแฟ (kopi)</strong> = เขาดื่มกาแฟ (Khao duum gaa-faae) <button class="btn-audio-mini" onclick="speakThai('เขาดื่มกาแฟ')">🔊</button></li>
  </ul>
</div>
"""
        },

        76: {
            "title": "3 Kata Spesial Pemula untuk Kalimat Lebih Bermakna",
            "tag": "Materi [47]",
            "icon": "✨",
            "summary": "3 kata penguat kalimat: ด้วย (juga), มาก (sangat/banget), dan นิดหน่อย (sedikit).",
            "keyPoints": [
                "ด้วย (duay): Diletakkan di akhir kalimat untuk arti 'juga/pula'",
                "มาก (maak): Diletakkan setelah kata sifat untuk arti 'sangat/sekali'",
                "นิดหน่อย (nit-noi): Berarti 'sedikit' (contoh: พูดได้นิดหน่อย = bisa bicara sedikit)"
            ],
            "thaiSample": {"thai": "อร่อยมาก / พูดได้นิดหน่อย", "rtgs": "a-roi maak / phuut dai nit-noi", "meaning": "Enak banget / Bisa bicara sedikit"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>✨ 3 Kata Ajaib Pemula</h3>
  <ul>
    <li><strong class="thai-char">มาก (maak) = Sangat / Sekali:</strong><br>
    อร่อยมาก (A-roi maak) = Enak banget! <button class="btn-audio-mini" onclick="speakThai('อร่อยมาก')">🔊</button><br>
    ร้อนมาก (Raawn maak) = Panas sekali!</li>

    <li style="margin-top:10px;"><strong class="thai-char">นิดหน่อย (nit-noi) = Sedikit:</strong><br>
    พูดภาษาไทยได้นิดหน่อย (Phuut phaa-saa thai dai nit-noi) = Saya bisa bicara bahasa Thai sedikit. <button class="btn-audio-mini" onclick="speakThai('พูดภาษาไทยได้นิดหน่อย')">🔊</button></li>

    <li style="margin-top:10px;"><strong class="thai-char">ด้วย (duay) = Juga / Ikutan:</strong><br>
    เอาอันนี้ด้วย (Ao an nii duay) = Mau yang ini juga. <button class="btn-audio-mini" onclick="speakThai('เอาอันนี้ด้วย')">🔊</button></li>
  </ul>
</div>
"""
        },

        77: {
            "title": "Latihan Terjemah Kalimat Pemula (Part 1)",
            "tag": "Materi [48]",
            "icon": "📝",
            "summary": "Bedah tuntas penerjemahan kalimat dari bahasa Indonesia ke bahasa Thai secara kata per kata.",
            "keyPoints": ["Penerapan SVO", "Penggabungan kata benda dan kata sifat"],
            "thaiSample": {"thai": "ฉันชอบอาหารไทยมาก", "rtgs": "chan chaawp aa-haan thai maak", "meaning": "Saya sangat suka makanan Thai"},
            "contentHtml": "<div class='lesson-content-block'><h3>📝 Bedah Terjemah</h3><p><strong>'Saya sangat suka makanan Thai':</strong></p><p>ฉัน (Saya) + ชอบ (Suka) + อาหารไทย (Makanan Thai) + มาก (Sangat) = <strong>ฉันชอบอาหารไทยมาก</strong>. <button class='btn-audio-mini' onclick=\"speakThai('ฉันชอบอาหารไทยมาก')\">🔊</button></p></div>"
        },

        78: {
            "title": "Jangan Tertukar! Perbedaan เอา (Ao) vs อยาก (Yaak)",
            "tag": "Materi [49]",
            "icon": "⚠️",
            "summary": "Kesalahan paling sering pemula: membedakan เอา (menginginkan barang fisik) vs อยาก (keinginan beraktivitas / verba).",
            "keyPoints": [
                "เอา (ao) + Kata Benda: Menginginkan barang/makanan konkret ('Saya mau kopi' = เอา กาแฟ)",
                "อยาก (yaak) + Kata Kerja: Ingin melakukan tindakan ('Saya ingin pergi' = อยาก ไป)",
                "Jangan pernah berkata 'เอา ไป' untuk maksud ingin pergi!"
            ],
            "thaiSample": {"thai": "เอากาแฟ vs อยากไป", "rtgs": "ao gaa-faae vs yaak bpai", "meaning": "Mau kopi (barang) vs Ingin pergi (aktivitas)"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>⚠️ Rumus Membedakan เอา vs อยาก</h3>
  <div class="rule-box">
    <ul>
      <li>🟢 <strong>เอา (Ao) + [ KATA BENDA ]:</strong> Digunakan saat memesan barang, makanan, atau mengambil sesuatu fisik.<br>
      • เอากาแฟเย็น (Ao gaa-faae yen) = Saya mau es kopi! <button class="btn-audio-mini" onclick="speakThai('เอากาแฟเย็น')">🔊</button><br>
      • ไม่เอา (Mai ao) = Gak mau / Gak usah.</li>

      <li style="margin-top:10px;">🟡 <strong>อยาก (Yaak) + [ KATA KERJA ]:</strong> Digunakan saat ingin melakukan suatu tindakan atau aktivitas.<br>
      • อยากไปเที่ยว (Yaak bpai thiao) = Ingin jalan-jalan. <button class="btn-audio-mini" onclick="speakThai('อยากไปเที่ยว')">🔊</button><br>
      • อยากกินส้มตำ (Yaak kin som-dtam) = Pengen makan som tum.</li>
    </ul>
  </div>
</div>
"""
        },

        79: {
            "title": "Menyatakan Kemampuan: ได้ (Bisa) vs ไม่ได้ (Tidak Bisa)",
            "tag": "Materi [50]",
            "icon": "💪",
            "summary": "Rumus menyatakan kemampuan melakukan sesuatu dengan kata ได้ (dai) dan penempatannya di akhir kalimat.",
            "keyPoints": [
                "Kata ได้ (dai) diletakkan di AKHIR kalimat, bukan di depan verba seperti bahasa Indonesia!",
                "Rumus: [Subjek] + [Verba] + ได้ (dai = bisa)",
                "Bentuk negatif: [Subjek] + [Verba] + ไม่ได้ (mai dai = tidak bisa)"
            ],
            "thaiSample": {"thai": "พูดได้ / กินเผ็ดไม่ได้", "rtgs": "phuut dai / kin phet mai dai", "meaning": "Bisa bicara / Tidak bisa makan pedas"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>💪 Posisi Kata 'Bisa' di Akhir Kalimat</h3>
  <p>Dalam bahasa Indonesia kita berkata: <em>'Saya <strong>bisa</strong> bicara bahasa Thai'</em>.</p>
  <p>Namun dalam bahasa Thai, kata <strong>ได้ (dai)</strong> wajib diletakkan di <strong>ujung paling belakang kalimat</strong>:</p>
  <div class="rule-box">
    <ul>
      <li>ผมพูดภาษาไทย<strong>ได้</strong> (Phom phuut phaa-saa thai dai) = Saya bisa bicara bahasa Thai. <button class="btn-audio-mini" onclick="speakThai('ผมพูดภาษาไทยได้')">🔊</button></li>
      <li>ฉันกินเผ็ด<strong>ไม่ได้</strong> (Chan kin phet mai dai) = Saya tidak bisa makan makanan pedas! <button class="btn-audio-mini" onclick="speakThai('ฉันกินเผ็ดไม่ได้')">🔊</button></li>
    </ul>
  </div>
</div>
"""
        },

        80: {
            "title": "Latihan Terjemah Kalimat Pemula (Part 2)",
            "tag": "Materi [51]",
            "icon": "📝",
            "summary": "Latihan menyusun kalimat kombinasi keinginan (อยาก/เอา) dan kemampuan (ได้/ไม่ได้).",
            "keyPoints": ["Kalimat gabungan di restoran", "Meminta tolong kepada staf"],
            "thaiSample": {"thai": "ช่วยพูดช้าๆ หน่อยได้ไหมครับ", "rtgs": "chuay phuut chaa-chaa noi dai mai khrap", "meaning": "Bisa tolong bicara pelan-pelan?"},
            "contentHtml": "<div class='lesson-content-block'><h3>📝 Kalimat Penyelamat Turis</h3><p><strong>ช่วยพูดช้าๆ หน่อยได้ไหมครับ (Chuay phuut chaa-chaa noi dai mai khrap?):</strong> Bisakah tolong berbicara pelan-pelan sedikit? <button class='btn-audio-mini' onclick=\"speakThai('ช่วยพูดช้าๆหน่อยได้ไหมครับ')\">🔊</button></p></div>"
        },

        81: {
            "title": "Menyatakan Kesamaan: ก็...เหมือนกัน (Juga... Sama)",
            "tag": "Materi [52]",
            "icon": "🤝",
            "summary": "Cara mengekspresikan kesetujuan 'Saya juga begitu' atau 'Sama-sama menyukai hal tersebut'.",
            "keyPoints": ["Frasa: ผมก็เหมือนกัน (Phom gor muean-gan = Saya juga sama)", "Merespons pernyataan orang lain"],
            "thaiSample": {"thai": "ผมก็เหมือนกัน", "rtgs": "phom gor muean-gan", "meaning": "Saya juga sama / Me too"},
            "contentHtml": "<div class='lesson-content-block'><h3>🤝 Ungkapan 'Me Too' Bahasa Thai</h3><p>Ketika teman Anda mengatakan <em>'Saya suka makanan Thai'</em>, Anda cukup merespons dengan: <strong>ผมก็เหมือนกันครับ (Phom gor muean-gan khrap = Saya juga sama!).</strong> <button class='btn-audio-mini' onclick=\"speakThai('ผมก็เหมือนกันครับ')\">🔊</button></p></div>"
        },

        82: {
            "title": "4 Kata Sambung Penting (Dan, Tapi, Atau, Kalau)",
            "tag": "Materi [53]",
            "icon": "🔗",
            "summary": "Menghubungkan dua klausa kalimat: และ (dan), แต่ (tapi), หรือ (atau), dan ถ้า (kalau/jika).",
            "keyPoints": [
                "และ (lae): Dan",
                "แต่ (dtate): Tetapi / Tapi",
                "หรือ (reuu): Atau",
                "ถ้า (thaa): Kalau / Jika"
            ],
            "thaiSample": {"thai": "และ, แต่, หรือ, ถ้า", "rtgs": "lae, dtae, reuu, thaa", "meaning": "Dan, Tapi, Atau, Jika"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🔗 4 Kata Sambung Inti</h3>
  <ul>
    <li><strong>และ (lae) = Dan:</strong> ผมและเพื่อน (Phom lae phuean = Saya dan teman). <button class="btn-audio-mini" onclick="speakThai('ผมและเพื่อน')">🔊</button></li>
    <li><strong>แต่ (dtae) = Tapi:</strong> อยากไปแต่ไม่มีเงิน (Yaak bpai dtae mai mii ngoen = Pengen pergi tapi gak ada uang). <button class="btn-audio-mini" onclick="speakThai('อยากไปแต่ไม่มีเงิน')">🔊</button></li>
    <li><strong>หรือ (reuu) = Atau:</strong> ชาหรือกาแฟ (Chaa reuu gaa-faae = Teh atau kopi?). <button class="btn-audio-mini" onclick="speakThai('ชาหรือกาแฟ')">🔊</button></li>
    <li><strong>ถ้า (thaa) = Kalau:</strong> ถ้าว่างจะไป (Thaa waang ja bpai = Kalau senggang saya akan pergi). <button class="btn-audio-mini" onclick="speakThai('ถ้าว่างจะไป')">🔊</button></li>
  </ul>
</div>
"""
        },

        83: {
            "title": "#NabungKosakata Kata Kerja Bagian 2 (Aktivitas Sosial)",
            "tag": "Materi [54]",
            "icon": "💼",
            "summary": "Kosakata kata kerja kegiatan: Membeli, Menjual, Bekerja, Belajar, Membaca, Menulis, Bertemu.",
            "keyPoints": ["Kata kerja transaksi dan belajar", "Kosakata sehari-hari"],
            "thaiSample": {"thai": "ซื้อ, ขาย, ทำงาน, เรียน, เจอ", "rtgs": "sue, khaai, tham-ngaan, rian, joe", "meaning": "Beli, Jual, Bekerja, Belajar, Bertemu"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>💼 Kata Kerja Penting Bagian 2</h3>
  <ul>
    <li><strong>ซื้อ (sue):</strong> Membeli <button class="btn-audio-mini" onclick="speakThai('ซื้อของ')">🔊 ซื้อของ (belanja)</button></li>
    <li><strong>ขาย (khaai):</strong> Menjual <button class="btn-audio-mini" onclick="speakThai('ขาย')">🔊</button></li>
    <li><strong>ทำงาน (tham-ngaan):</strong> Bekerja <button class="btn-audio-mini" onclick="speakThai('ทำงาน')">🔊</button></li>
    <li><strong>เรียน (rian):</strong> Belajar <button class="btn-audio-mini" onclick="speakThai('เรียนภาษาไทย')">🔊 เรียนภาษาไทย (belajar b. Thai)</button></li>
    <li><strong>เจอ (joe):</strong> Bertemu / Menjumpai <button class="btn-audio-mini" onclick="speakThai('เจอกัน')">🔊 เจอกัน (sampai jumpa)</button></li>
  </ul>
</div>
"""
        },

        84: {
            "title": "Bersama Siapa? Penggunaan Kata กับ (Kap)",
            "tag": "Materi [55]",
            "icon": "👥",
            "summary": "Menggunakan kata กับ (kap) untuk arti 'dengan / bersama': [Aktivitas] + กับ + [Orang].",
            "keyPoints": ["Rumus: ไปกับ... (Pai kap... = Pergi dengan...)", "Menyatakan rekan beraktivitas"],
            "thaiSample": {"thai": "ไปกับเพื่อน", "rtgs": "bpai kap phuean", "meaning": "Pergi bersama teman"},
            "contentHtml": "<div class='lesson-content-block'><h3>👥 Menggunakan Kata กับ (Kap)</h3><p>Contoh: <strong>ผมกินข้าวกับแม่ (Phom kin khaao kap maae):</strong> Saya makan nasi bersama ibu. <button class='btn-audio-mini' onclick=\"speakThai('ผมกินข้าวกับแม่')\">🔊</button></p></div>"
        },

        85: {
            "title": "Bersama-sama: Penggunaan Kata ด้วยกัน (Duay-kan)",
            "tag": "Materi [56]",
            "icon": "🤝",
            "summary": "Perbedaan กับ (dengan orang tertentu) vs ด้วยกัน (duay-kan = bersama-sama sebagai satu kelompok).",
            "keyPoints": ["Kata ด้วยกัน diletakkan di akhir kalimat", "Mengajak atau menyatakan aktivitas kolektif"],
            "thaiSample": {"thai": "ไปด้วยกันไหม", "rtgs": "bpai duay-kan mai", "meaning": "Mau pergi bareng-bareng tidak?"},
            "contentHtml": "<div class='lesson-content-block'><h3>🤝 Mengajak Bareng: ด้วยกัน</h3><p><strong>ไปด้วยกันไหมครับ? (Bpai duay-kan mai khrap?):</strong> Mau pergi bareng-bareng gak? <button class='btn-audio-mini' onclick=\"speakThai('ไปด้วยกันไหมครับ')\">🔊</button></p></div>"
        },

        86: {
            "title": "Saling / Satu Sama Lain: Penggunaan Kata กัน (Kan)",
            "tag": "Materi [57]",
            "icon": "🔄",
            "summary": "Fungsi partikel กัน (kan) di belakang verba untuk menyatakan tindakan timbal balik (saling mencintai, saling bicara, dll.).",
            "keyPoints": [
                "Verba + กัน = Saling melakukan tindakan tersebut",
                "รักกัน (rak kan = saling mencintai)",
                "คุยกัน (khui kan = saling mengobrol / bercakap-cakap)"
            ],
            "thaiSample": {"thai": "รักกัน / คุยกัน", "rtgs": "rak kan / khui kan", "meaning": "Saling mencintai / Saling mengobrol"},
            "contentHtml": "<div class='lesson-content-block'><h3>🔄 Makna Saling: กัน (Kan)</h3><ul><li><strong>รักกัน (rak kan):</strong> Saling mencintai. <button class='btn-audio-mini' onclick=\"speakThai('เรารักกัน')\">🔊 เรารักกัน (Kita saling mencintai)</button></li><li><strong>คุยกัน (khui kan):</strong> Mengobrol bersama.</li></ul></div>"
        },

        87: {
            "title": "Mengajak Seseorang Ikut Serta: Menggunakan ด้วย (Duay)",
            "tag": "Materi [58]",
            "icon": "🙋",
            "summary": "Cara meminta izin ikut serta atau mengajak seseorang bergabung dalam suatu aktivitas.",
            "keyPoints": ["ไปด้วยได้ไหม (Bpai duay dai mai? = Boleh saya ikut pergi?)", "Penggunaan kata ด้วย untuk bergabung"],
            "thaiSample": {"thai": "ไปด้วยคน", "rtgs": "bpai duay khon", "meaning": "Saya ikut pergi satu orang!"},
            "contentHtml": "<div class='lesson-content-block'><h3>🙋 Minta Ikut: ไปด้วย</h3><p>Ketika teman Anda hendak pergi ke pasar malam dan Anda ingin ikut: <strong>ไปด้วยได้ไหมครับ? (Bpai duay dai mai khrap? = Boleh saya ikut?).</strong> <button class='btn-audio-mini' onclick=\"speakThai('ไปด้วยได้ไหมครับ')\">🔊</button></p></div>"
        },

        88: {
            "title": "Latihan Terjemah Kalimat Pemula (Part 3)",
            "tag": "Materi [59]",
            "icon": "📝",
            "summary": "Latihan menerjemahkan dialog percakapan nongkrong bersama teman penutur asli Thai.",
            "keyPoints": ["Kombinasi กับ, ด้วยกัน, dan กัน dalam satu dialog"],
            "thaiSample": {"thai": "พรุ่งนี้ไปกินข้าวด้วยกันนะ", "rtgs": "phrung-nii bpai kin khaao duay-kan na", "meaning": "Besok ayo pergi makan bareng ya"},
            "contentHtml": "<div class='lesson-content-block'><h3>📝 Latihan Ajakan</h3><p><strong>พรุ่งนี้ไปกินข้าวด้วยกันนะ (Phrung-nii bpai kin khaao duay-kan na):</strong> Besok ayo pergi makan bareng-bareng ya! <button class='btn-audio-mini' onclick=\"speakThai('พรุ่งนี้ไปกินข้าวด้วยกันนะ')\">🔊</button></p></div>"
        },

        89: {
            "title": "Sudah Selesai! Penggunaan Kata แล้ว (Laeo)",
            "tag": "Materi [60]",
            "icon": "✅",
            "summary": "Menyatakan aspek selesai atau perubahan keadaan dengan kata แล้ว (laeo) di akhir kalimat.",
            "keyPoints": [
                "Kata แล้ว (laeo) diletakkan di akhir kalimat untuk arti 'sudah'",
                "กินข้าวแล้ว (kin khaao laeo = sudah makan)",
                "เข้าใจแล้ว (khao-jai laeo = sudah paham / mengerti)"
            ],
            "thaiSample": {"thai": "กินข้าวแล้ว / เข้าใจแล้ว", "rtgs": "kin khaao laeo / khao-jai laeo", "meaning": "Sudah makan / Sudah paham"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>✅ Menyatakan 'Sudah': แล้ว (Laeo)</h3>
  <div class="rule-box">
    <strong>[ Aktivitas / Kondisi ] + แล้ว (laeo)</strong>
  </div>
  <ul>
    <li>กินข้าว<strong>แล้ว</strong> (Kin khaao laeo) = Sudah makan. <button class="btn-audio-mini" onclick="speakThai('กินข้าวแล้ว')">🔊</button></li>
    <li>เข้าใจ<strong>แล้ว</strong> (Khao-jai laeo) = Saya sudah mengerti! <button class="btn-audio-mini" onclick="speakThai('เข้าใจแล้วครับ')">🔊</button></li>
    <li>อิ่ม<strong>แล้ว</strong> (Im laeo) = Sudah kenyang. <button class="btn-audio-mini" onclick="speakThai('อิ่มแล้ว')">🔊</button></li>
  </ul>
</div>
"""
        },

        90: {
            "title": "Belum... Penjelasan Lengkap Kata ยัง (Yang) / ยังไม่ได้",
            "tag": "Materi [61]",
            "icon": "⏳",
            "summary": "Cara menyatakan 'belum' dengan kata ยัง (yang) dan struktur lengkap kalimat penyangkalannya.",
            "keyPoints": [
                "Jawaban singkat 'belum': ยัง (yang) atau ยังครับ/ค่ะ",
                "Kalimat lengkap: ยังไม่ได้ + [Kata Kerja] (Yang mai dai + Verba)",
                "Contoh: ยังไม่ได้กิน (Yang mai dai kin = Belum makan)"
            ],
            "thaiSample": {"thai": "ยังไม่ได้กิน / ยังครับ", "rtgs": "yang mai dai kin / yang khrap", "meaning": "Belum makan / Belum (sopan)"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>⏳ Menyatakan 'Belum': ยัง (Yang)</h3>
  <ul>
    <li>Jawaban singkat sopan: <strong>ยังครับ (Yang khrap) / ยังค่ะ (Yang kha)</strong> = Belum. <button class="btn-audio-mini" onclick="speakThai('ยังครับ')">🔊</button></li>
    <li>Kalimat utuh: <strong>ยังไม่ได้กินข้าว (Yang mai dai kin khaao)</strong> = Belum makan nasi. <button class="btn-audio-mini" onclick="speakThai('ยังไม่ได้กินข้าว')">🔊</button></li>
  </ul>
</div>
"""
        },

        91: {
            "title": "Latihan Terjemah Kalimat Pemula (Part 4 - Evaluasi Akhir Part III)",
            "tag": "Materi [62]",
            "icon": "🏆",
            "summary": "Ujian kelulusan tata bahasa dasar SVO, aspek waktu sudah/belum, dan partikel percakapan.",
            "keyPoints": ["Evaluasi 37 materi tata bahasa Part III", "Kesiapan masuk ke topik aktivitas Part IV"],
            "thaiSample": {"thai": "คุณกินข้าวหรือยังครับ", "rtgs": "khun kin khaao reuu yang khrap", "meaning": "Apakah Anda sudah makan belum?"},
            "contentHtml": "<div class='lesson-content-block'><h3>🏆 Kelulusan Part III</h3><p>Pertanyaan legendaris masyarakat Thailand: <strong>กินข้าวหรือยังครับ? (Kin khaao reuu yang khrap? = Sudah makan belum?).</strong> Merupakan bentuk sapaan keakraban khas Thailand. <button class='btn-audio-mini' onclick=\"speakThai('กินข้าวหรือยังครับ')\">🔊</button></p></div>"
        }
    }

print("Part 3 content helper defined.")

