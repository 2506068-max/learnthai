# -*- coding: utf-8 -*-
"""
Detailed written content for Part 4 (Modules 92 - 119):
Nama Hari & Warna, Tenses, Sistem Jam 6 Jam Tradisional, Durasi, Frekuensi, Modalitas, Alasan, 5W1H, dan Cerita Harian.
"""

def get_part4_content():
    return {
        92: {
            "title": "Nama-Nama Hari dalam Bahasa Thai & Asosiasi Warna Budayanya",
            "tag": "Materi [63]",
            "icon": "📅",
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
            "thaiSample": {"thai": "วันจันทร์, วันศุกร์, วันอาทิตย์", "rtgs": "wan-jan, wan-suk, wan-aa-thit", "meaning": "Senin, Jumat, Minggu"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>📅 7 Hari dalam Seminggu & Filosofi Warnanya</h3>
  <div class="table-responsive">
    <table class="lesson-table">
      <thead><tr><th>Hari</th><th>Aksara Thai</th><th>RTGS</th><th>Warna Simbolik</th><th>Audio</th></tr></thead>
      <tbody>
        <tr><td>Senin</td><td><strong>วันจันทร์</strong></td><td>wan-jan</td><td>Kuning (Warna Raja Rama IX & X)</td><td><button class="btn-audio-mini" onclick="speakThai('วันจันทร์')">🔊</button></td></tr>
        <tr><td>Selasa</td><td><strong>วันอังคาร</strong></td><td>wan-ang-khaan</td><td>Merah Muda (Pink)</td><td><button class="btn-audio-mini" onclick="speakThai('วันอังคาร')">🔊</button></td></tr>
        <tr><td>Rabu</td><td><strong>วันพุธ</strong></td><td>wan-phut</td><td>Hijau</td><td><button class="btn-audio-mini" onclick="speakThai('วันพุธ')">🔊</button></td></tr>
        <tr><td>Kamis</td><td><strong>วันพฤหัสบดี</strong></td><td>wan-phrue-hat-sa-baaw-dii</td><td>Jingga / Oranye (Hari Guru)</td><td><button class="btn-audio-mini" onclick="speakThai('วันพฤหัสบดี')">🔊</button></td></tr>
        <tr><td>Jumat</td><td><strong>วันศุกร์</strong></td><td>wan-suk</td><td>Biru Muda (Hari Ratu Sirikit)</td><td><button class="btn-audio-mini" onclick="speakThai('วันศุกร์')">🔊</button></td></tr>
        <tr><td>Sabtu</td><td><strong>วันเสาร์</strong></td><td>wan-sao</td><td>Ungu</td><td><button class="btn-audio-mini" onclick="speakThai('วันเสาร์')">🔊</button></td></tr>
        <tr><td>Minggu</td><td><strong>วันอาทิตย์</strong></td><td>wan-aa-thit</td><td>Merah</td><td><button class="btn-audio-mini" onclick="speakThai('วันอาทิตย์')">🔊</button></td></tr>
      </tbody>
    </table>
  </div>
</div>
"""
        },

        93: {
            "title": "Waktu & Tenses: Masa Lalu, Masa Sekarang, dan Masa Depan",
            "tag": "Materi [64]",
            "icon": "⏳",
            "summary": "Tata cara menyatakan waktu tanpa konjugasi kata kerja: menggunakan partikel เคย (pernah/lampau), กำลัง (sedang), dan จะ (akan).",
            "keyPoints": [
                "Masa Lalu: เคย (khoeey) = Pernah / Lampau",
                "Masa Sekarang: กำลัง (kam-lang) + Verba + อยู่ (yuu) = Sedang berlangsung",
                "Masa Depan: จะ (ja) + Verba = Akan"
            ],
            "thaiSample": {"thai": "เคยไป / กำลังกิน / จะไป", "rtgs": "khoeey bpai / kam-lang kin / ja bpai", "meaning": "Pernah pergi / Sedang makan / Akan pergi"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>⏳ 3 Partikel Penentu Waktu (Tenses)</h3>
  <div class="rule-box">
    <ul>
      <li>🟣 <strong>Masa Lalu: เคย (khoeey) = Pernah / Dulu</strong><br>
      ผม<strong>เคยไป</strong>ประเทศไทย (Phom khoeey bpai bpra-theet thai) = Saya pernah pergi ke Thailand. <button class="btn-audio-mini" onclick="speakThai('ผมเคยไปประเทศไทย')">🔊</button></li>

      <li style="margin-top:10px;">🟢 <strong>Masa Sekarang: กำลัง (kam-lang) ... อยู่ (yuu) = Sedang</strong><br>
      ผม<strong>กำลังกิน</strong>ข้าว<strong>อยู่</strong> (Phom kam-lang kin khaao yuu) = Saya sedang makan nasi sekarang. <button class="btn-audio-mini" onclick="speakThai('ผมกำลังกินข้าวอยู่')">🔊</button></li>

      <li style="margin-top:10px;">🔵 <strong>Masa Depan: จะ (ja) = Akan</strong><br>
      พรุ่งนี้ผม<strong>จะไป</strong>กรุงเทพฯ (Phrung-nii phom ja bpai krung-theep) = Besok saya akan pergi ke Bangkok. <button class="btn-audio-mini" onclick="speakThai('พรุ่งนี้ผมจะไปกรุงเทพฯ')">🔊</button></li>
    </ul>
  </div>
</div>
"""
        },

        94: {
            "title": "Lagi Ngapain? Menanyakan Aktivitas yang Sedang Berjalan",
            "tag": "Materi [65]",
            "icon": "🗣️",
            "summary": "Pertanyaan santai paling sering diucapkan: ทำอะไรอยู่ (Tham arai yuu? = Lagi ngapain?).",
            "keyPoints": ["Pertanyaan kasual: ทำอะไรอยู่ (Tham arai yuu?)", "Menjawab dengan [Aktivitas] + อยู่"],
            "thaiSample": {"thai": "ทำอะไรอยู่ / นอนอยู่", "rtgs": "tham arai yuu / naawn yuu", "meaning": "Lagi ngapain? / Lagi tidur"},
            "contentHtml": "<div class='lesson-content-block'><h3>🗣️ Percakapan 'Lagi Ngapain'</h3><ul><li><strong>ทำอะไรอยู่ครับ? (Tham arai yuu khrap?):</strong> Lagi ngapain? <button class='btn-audio-mini' onclick=\"speakThai('ทำอะไรอยู่ครับ')\">🔊</button></li><li><strong>อ่านหนังสืออยู่ค่ะ (Aan nang-sue yuu kha):</strong> Lagi baca buku nih. <button class='btn-audio-mini' onclick=\"speakThai('อ่านหนังสืออยู่ค่ะ')\">🔊</button></li></ul></div>"
        },

        95: {
            "title": "Hari, Tanggal, Minggu, Bulan, Tahun & Kalender Buddha (พ.ศ.)",
            "tag": "Materi [66]",
            "icon": "📆",
            "summary": "Menyusun format penanggalan lengkap dan memahami sistem tahun Buddhist Era (B.E. = Masehi + 543 tahun).",
            "keyPoints": [
                "Urutan tanggal: วันที่ (tanggal) + เดือน (bulan) + ปี (tahun)",
                "Tahun Buddha (พ.ศ. - Phutthasakkarat) = Tahun Masehi + 543 (Contoh: 2026 M = 2569 B.E.)",
                "Nama 12 bulan berakhiran -khom (31 hari), -phan (30 hari), dan -phan (Februari)"
            ],
            "thaiSample": {"thai": "วันที่ 1 มกราคม พ.ศ. 2569", "rtgs": "wan-thii nueng mok-ga-raa-khom phaw-saw saawng-phan-haa-roi-hok-sip-gao", "meaning": "1 Januari 2569 B.E."},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>📆 Mengapa Tahun di Thailand Berangka 2500-an?</h3>
  <p>Thailand secara resmi menggunakan kalender <strong>Buddhist Era (พ.ศ. - B.E.)</strong> yang dimulai sejak wafatnya Sang Buddha (543 tahun sebelum masehi):</p>
  <div class="rule-box" style="font-size:16px;">
    <strong>Rumus Tahun: Tahun Masehi (A.D.) + 543 = Tahun Buddha (B.E.)</strong><br>
    Contoh: 2026 + 543 = <strong>2569 พ.ศ.</strong>
  </div>
</div>
"""
        },

        96: {
            "title": "Kapan??? Menunjukkan Titik Waktu dalam Kalimat",
            "tag": "Materi [67]",
            "icon": "❓",
            "summary": "Kata tanya titik waktu: เมื่อไหร่ (muea-rai = kapan) vs ตอนไหน (dtaawn-nai = jam/saat mana).",
            "keyPoints": ["เมื่อไหร่ (muea-rai): Kapan secara umum", "ตอนไหน (dtaawn-nai): Titik jam / waktu spesifik"],
            "thaiSample": {"thai": "จะไปเมื่อไหร่", "rtgs": "ja bpai muea-rai", "meaning": "Kapan kamu akan pergi?"},
            "contentHtml": "<div class='lesson-content-block'><h3>❓ Menanyakan Waktu</h3><ul><li><strong>จะไปเมื่อไหร่ครับ? (Ja bpai muea-rai khrap?):</strong> Kapan Anda akan pergi? <button class='btn-audio-mini' onclick=\"speakThai('จะไปเมื่อไหร่ครับ')\">🔊</button></li><li><strong>กลับตอนไหน? (Glap dtaawn-nai?):</strong> Pulang jam berapa / saat mana?</li></ul></div>"
        },

        97: {
            "title": "Pembagian Waktu: Pagi, Siang, Sore, Malam dalam Bahasa Thai",
            "tag": "Materi [68]",
            "icon": "☀️",
            "summary": "Kosa kata pembagian waktu sehari: Chao (pagi), Saai (menjelang siang), Thiang (siang tepat), Bai (sore awal), Yen (senja), dan Khuen (malam).",
            "keyPoints": [
                "ตอนเช้า (dtaawn chao): Pagi hari (06.00 - 09.00)",
                "ตอนเที่ยง (dtaawn thiang): Jam 12 siang tepat",
                "ตอนบ่าย (dtaawn bai): Siang menjelang sore (13.00 - 15.00)",
                "ตอนเย็น (dtaawn yen): Sore / senja (16.00 - 18.00)",
                "ตอนกลางคืน (dtaawn glaang-khuen): Malam hari (19.00 ke atas)"
            ],
            "thaiSample": {"thai": "ตอนเช้า, ตอนเที่ยง, ตอนเย็น", "rtgs": "dtaawn chao, dtaawn thiang, dtaawn yen", "meaning": "Pagi, Siang, Sore"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>☀️ 5 Segmen Waktu Harian</h3>
  <ul>
    <li><strong>ตอนเช้า (dtaawn chao):</strong> Pagi <button class="btn-audio-mini" onclick="speakThai('ตอนเช้า')">🔊</button></li>
    <li><strong>ตอนเที่ยง (dtaawn thiang):</strong> Tengah hari tepat (12:00) <button class="btn-audio-mini" onclick="speakThai('ตอนเที่ยง')">🔊</button></li>
    <li><strong>ตอนบ่าย (dtaawn bai):</strong> Siang / sore awal <button class="btn-audio-mini" onclick="speakThai('ตอนบ่าย')">🔊</button></li>
    <li><strong>ตอนเย็น (dtaawn yen):</strong> Sore menjelang magrib <button class="btn-audio-mini" onclick="speakThai('ตอนเย็น')">🔊</button></li>
    <li><strong>ตอนกลางคืน (dtaawn glaang-khuen):</strong> Malam hari <button class="btn-audio-mini" onclick="speakThai('ตอนกลางคืน')">🔊</button></li>
  </ul>
</div>
"""
        },

        98: {
            "title": "Sering vs Jarang: Keterangan Frekuensi (Adverbs of Frequency)",
            "tag": "Materi [69]",
            "icon": "📊",
            "summary": "Menyatakan seberapa sering suatu aktivitas dilakukan: Setiap hari, Sering, Kadang-kadang, Jarang, Tidak pernah.",
            "keyPoints": [
                "ทุกวัน (thuk wan): Setiap hari",
                "บ่อยๆ (boi-boi): Sering-sering",
                "บางครั้ง (baang khrang): Kadang-kadang",
                "นานๆที (naan-naan-thii): Jarang / lama-lama sekali",
                "ไม่เคย (mai khoeey): Tidak pernah"
            ],
            "thaiSample": {"thai": "ไปบ่อยๆ / ไม่เคยไป", "rtgs": "bpai boi-boi / mai khoeey bpai", "meaning": "Sering pergi / Tidak pernah pergi"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>📊 Tangga Frekuensi Aktivitas</h3>
  <ul>
    <li><strong>ทุกวัน (thuk wan) = Setiap hari:</strong> ผมออกกำลังกายทุกวัน (Saya olahraga setiap hari). <button class="btn-audio-mini" onclick="speakThai('ผมออกกำลังกายทุกวัน')">🔊</button></li>
    <li><strong>บ่อยๆ (boi-boi) = Sering:</strong> มากินที่นี่บ่อยๆ (Sering makan di sini). <button class="btn-audio-mini" onclick="speakThai('มากินที่นี่บ่อยๆ')">🔊</button></li>
    <li><strong>ไม่ค่อย (mai khoi) = Tidak begitu / jarang:</strong> ไม่ค่อยว่าง (Jarang senggang). <button class="btn-audio-mini" onclick="speakThai('ไม่ค่อยว่าง')">🔊</button></li>
    <li><strong>ไม่เคย (mai khoeey) = Belum pernah:</strong> ไม่เคยไป (Belum pernah ke sana). <button class="btn-audio-mini" onclick="speakThai('ไม่เคยไป')">🔊</button></li>
  </ul>
</div>
"""
        },

        99: {
            "title": "Latihan Terjemah Kalimat Pemula (Part 5)",
            "tag": "Materi [70]",
            "icon": "📝",
            "summary": "Menyusun kalimat aktivitas harian dengan pelengkap waktu, hari, dan frekuensi.",
            "keyPoints": ["Kalimat jadwal rutin", "Penggabungan waktu di awal kalimat"],
            "thaiSample": {"thai": "ทุกวันจันทร์ผมเรียนภาษาไทย", "rtgs": "thuk wan-jan phom rian phaa-saa-thai", "meaning": "Setiap hari Senin saya belajar bahasa Thai"},
            "contentHtml": "<div class='lesson-content-block'><h3>📝 Latihan Kalimat Rutinitas</h3><p><strong>ทุกวันจันทร์ผมเรียนภาษาไทย (Thuk wan-jan phom rian phaa-saa-thai):</strong> Setiap hari Senin saya belajar bahasa Thai. <button class='btn-audio-mini' onclick=\"speakThai('ทุกวันจันทร์ผมเรียนภาษาไทย')\">🔊</button></p></div>"
        },

        100: {
            "title": "#NabungKosakata Kata Kerja Bagian 3 (Aktivitas Harian)",
            "tag": "Materi [71]",
            "icon": "🚶",
            "summary": "Kata kerja kegiatan luar rumah: Bangun tidur, Mandi, Naik mobil, Berbelanja, Memasak, Membersihkan rumah.",
            "keyPoints": ["Rutinitas dari pagi hingga malam", "Verba gabungan"],
            "thaiSample": {"thai": "ตื่นนอน, อาบน้ำ, ทำอาหาร", "rtgs": "dtuen-naawn, aap-naam, tham aa-haan", "meaning": "Bangun tidur, Mandi, Masak"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🚶 Rutinitas Harian</h3>
  <ul>
    <li><strong>ตื่นนอน (dtuen-naawn):</strong> Bangun tidur <button class="btn-audio-mini" onclick="speakThai('ตื่นนอน')">🔊</button></li>
    <li><strong>อาบน้ำ (aap-naam):</strong> Mandi <button class="btn-audio-mini" onclick="speakThai('อาบน้ำ')">🔊</button></li>
    <li><strong>ทำอาหาร (tham aa-haan):</strong> Memasak makanan <button class="btn-audio-mini" onclick="speakThai('ทำอาหาร')">🔊</button></li>
    <li><strong>ขึ้นรถ (khuen rot):</strong> Naik kendaraan/mobil <button class="btn-audio-mini" onclick="speakThai('ขึ้นรถ')">🔊</button></li>
  </ul>
</div>
"""
        },

        101: {
            "title": "Modalitas: Harus (ต้อง), Perlu (จำเป็น), Sebaiknya (ควร)",
            "tag": "Materi [72]",
            "icon": "⚖️",
            "summary": "3 tingkatan keharusan dalam bahasa Thai: ต้อง (taawng = harus wajib), จำเป็น (jam-bpen = perlu/mutlak), dan ควร (khuan = sebaiknya/seyogyanya).",
            "keyPoints": [
                "ต้อง (taawng) + Verba: Harus / Wajib dilakukan",
                "จำเป็นต้อง (jam-bpen taawng): Mutlak perlu",
                "ควร (khuan) + Verba: Sebaiknya / Saran sopan"
            ],
            "thaiSample": {"thai": "ต้องไป / ควรพักผ่อน", "rtgs": "taawng bpai / khuan phak-phaawn", "meaning": "Harus pergi / Sebaiknya istirahat"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>⚖️ Tingkatan Keharusan</h3>
  <ul>
    <li><strong>ต้อง (taawng) = Harus:</strong> พรุ่งนี้ผม<strong>ต้อง</strong>ทำงาน (Besok saya harus bekerja). <button class="btn-audio-mini" onclick="speakThai('พรุ่งนี้ผมต้องทำงาน')">🔊</button></li>
    <li><strong>ควร (khuan) = Sebaiknya:</strong> คุณ<strong>ควร</strong>ดื่มน้ำมากๆ (Anda sebaiknya minum banyak air). <button class="btn-audio-mini" onclick="speakThai('คุณควรดื่มน้ำมากๆ')">🔊</button></li>
  </ul>
</div>
"""
        },

        102: {
            "title": "Menyatakan Selesai: เสร็จแล้ว (Set Laeo) vs หมดแล้ว (Mot Laeo)",
            "tag": "Materi [73]",
            "icon": "🏁",
            "summary": "Perbedaan menyatakan selesai: เสร็จแล้ว (aktivitas/tugas rampung) vs หมดแล้ว (stok/barang habis ludes).",
            "keyPoints": [
                "เสร็จแล้ว (set laeo): Tugas/pekerjaan selesai",
                "หมดแล้ว (mot laeo): Benda/makanan/stok habis"
            ],
            "thaiSample": {"thai": "ทำงานเสร็จแล้ว / เงินหมดแล้ว", "rtgs": "tham-ngaan set laeo / ngoen mot laeo", "meaning": "Kerjaan beres / Uang sudah habis"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🏁 Bedah Selesai vs Habis</h3>
  <ul>
    <li><strong>เสร็จแล้ว (set laeo):</strong> Pekerjaan/tugas beres. Contoh: ทำงานเสร็จแล้ว (Pekerjaan sudah selesai). <button class="btn-audio-mini" onclick="speakThai('ทำงานเสร็จแล้ว')">🔊</button></li>
    <li><strong>หมดแล้ว (mot laeo):</strong> Barang habis. Contoh: ข้าวมันไก่หมดแล้ว (Nasi ayam sudah habis terjual). <button class="btn-audio-mini" onclick="speakThai('ข้าวมันไก่หมดแล้ว')">🔊</button></li>
  </ul>
</div>
"""
        },

        103: {
            "title": "Mengungkapkan Rencana Pasca Belajar (Setelah Selesai...)",
            "tag": "Materi [74]",
            "icon": "🎓",
            "summary": "Menggunakan pola หลังจาก... (lang jaak... = setelah...) untuk menceritakan rencana masa depan.",
            "keyPoints": ["หลังจากเรียนจบ (Lang jaak rian jop = Setelah lulus belajar)", "Menyusun kalimat rencana masa depan"],
            "thaiSample": {"thai": "หลังจากนี้จะไปเที่ยวไทย", "rtgs": "lang jaak nii ja bpai thiao thai", "meaning": "Setelah ini saya mau liburan ke Thai"},
            "contentHtml": "<div class='lesson-content-block'><h3>🎓 Pola Kalimat 'Setelah...'</h3><p><strong>หลังจากเรียนภาษาไทยเสร็จ ผมจะไปเที่ยวกรุงเทพฯ:</strong> Setelah selesai belajar bahasa Thai, saya akan liburan ke Bangkok. <button class='btn-audio-mini' onclick=\"speakThai('หลังจากเรียนภาษาไทยเสร็จผมจะไปเที่ยวกรุงเทพฯ')\">🔊</button></p></div>"
        },

        104: {
            "title": "Mau Lagi? Lanjut? Berhenti Dulu? (ต่อ, อีก, พอแล้ว)",
            "tag": "Materi [75]",
            "icon": "🔄",
            "summary": "Ungkapan harian di meja makan atau tempat kerja: ต่อ (lanjut), อีก (tambah lagi), dan พอแล้ว (cukup / sudah stop).",
            "keyPoints": [
                "อีก (iik): Tambah lagi (contoh: เอาอีก ao iik = mau tambah lagi)",
                "ต่อ (dtor): Lanjut terus (contoh: เรียนต่อ rian dtor = lanjut belajar)",
                "พอแล้ว (phaaw laeo): Cukup / kenyang / sudah puas"
            ],
            "thaiSample": {"thai": "เอาอีก / พอแล้วครับ", "rtgs": "ao iik / phaaw laeo khrap", "meaning": "Mau tambah lagi / Sudah cukup (sopan)"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🔄 Di Meja Makan & Percakapan Santai</h3>
  <ul>
    <li><strong>เอาอีกไหม? (Ao iik mai?):</strong> Mau tambah lagi?</li>
    <li><strong>พอแล้วครับ ขอบคุณครับ (Phaaw laeo khrap, khop-khun khrap):</strong> Sudah cukup kok, terima kasih banyak! <button class="btn-audio-mini" onclick="speakThai('พอแล้วครับ ขอบคุณครับ')">🔊</button></li>
  </ul>
</div>
"""
        },

        105: {
            "title": "Sudah Berapa Lama? (นานเท่าไหร่แล้ว - Naan Thao-rai Laeo)",
            "tag": "Materi [76]",
            "icon": "⏱️",
            "summary": "Menanyakan durasi waktu yang telah lampau: 'Sudah berapa lama tinggal di sini / belajar bahasa Thai?'.",
            "keyPoints": ["Kata tanya: นานเท่าไหร่ (Naan thao-rai = Berapa lama)", "Menjawab dengan durasi: ...เดือนแล้ว (... bulan)"],
            "thaiSample": {"thai": "เรียนมานานเท่าไหร่แล้ว", "rtgs": "rian maa naan thao-rai laeo", "meaning": "Sudah berapa lama belajar?"},
            "contentHtml": "<div class='lesson-content-block'><h3>⏱️ Menanyakan Durasi Waktu</h3><p><strong>คุณเรียนภาษาไทยมานานเท่าไหร่แล้วครับ?</strong> = Anda sudah berapa lama belajar bahasa Thai? <button class='btn-audio-mini' onclick=\"speakThai('คุณเรียนภาษาไทยมานานเท่าไหร่แล้วครับ')\">🔊</button></p></div>"
        },

        106: {
            "title": "Sejak Kapan? (ตั้งแต่เมื่อไหร่ - Dtang-dtae Muea-rai)",
            "tag": "Materi [77]",
            "icon": "⏳",
            "summary": "Menanyakan titik awal permulaan suatu kejadian: ตั้งแต่ (dtang-dtae = sejak) + เมื่อไหร่ (kapan).",
            "keyPoints": ["ตั้งแต่ (dtang-dtae): Sejak / Dari", "Menyatakan titik mula waktu"],
            "thaiSample": {"thai": "ตั้งแต่เมื่อไหร่", "rtgs": "dtang-dtae muea-rai", "meaning": "Sejak kapan?"},
            "contentHtml": "<div class='lesson-content-block'><h3>⏳ Menanyakan Titik Awal</h3><p><strong>คุณรู้จักจัสมินตั้งแต่เมื่อไหร่? (Khun ruu-jak Jazmin dtang-dtae muea-rai?):</strong> Sejak kapan Anda kenal Jazmin? <button class='btn-audio-mini' onclick=\"speakThai('คุณรู้จักจัสมินตั้งแต่เมื่อไหร่')\">🔊</button></p></div>"
        },

        107: {
            "title": "Latihan Terjemah Kalimat Pemula (Part 6)",
            "tag": "Materi [78]",
            "icon": "📝",
            "summary": "Menyusun kalimat percakapan kompleks yang melibatkan durasi waktu, awal kejadian, dan rencana aksi.",
            "keyPoints": ["Kombinasi durasi dan verba modal"],
            "thaiSample": {"thai": "ผมอยู่ที่นี่มา 2 ปีแล้ว", "rtgs": "phom yuu thii-nii maa saawng bpii laeo", "meaning": "Saya tinggal di sini sudah 2 tahun"},
            "contentHtml": "<div class='lesson-content-block'><h3>📝 Latihan Durasi</h3><p><strong>ผมอยู่ที่นี่มา 2 ปีแล้ว (Phom yuu thii-nii maa saawng bpii laeo):</strong> Saya sudah tinggal di sini selama 2 tahun. <button class='btn-audio-mini' onclick=\"speakThai('ผมอยู่ที่นี่มา 2 ปีแล้ว')\">🔊</button></p></div>"
        },

        108: {
            "title": "Jam, Menit, Detik - Menyatakan Durasi (ระยะเวลา)",
            "tag": "Materi [79]",
            "icon": "⏲️",
            "summary": "Satuan durasi waktu: ชั่วโมง (chua-mong = jam), นาที (na-thii = menit), dan วินาที (wi-na-thii = detik).",
            "keyPoints": [
                "ชั่วโมง (chua-mong): Satuan durasi JAM (contoh: 2 ชั่วโมง = 2 jam)",
                "นาที (na-thii): Satuan durasi MENIT",
                "วินาที (wi-na-thii): Satuan durasi DETIK"
            ],
            "thaiSample": {"thai": "2 ชั่วโมง 30 นาที", "rtgs": "saawng chua-mong saam-sip na-thii", "meaning": "2 Jam 30 Menit"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>⏲️ 3 Satuan Durasi Waktu</h3>
  <ul>
    <li><strong>ชั่วโมง (chua-mong) = Jam (durasi):</strong> รอ 1 ชั่วโมง (Menunggu 1 jam). <button class="btn-audio-mini" onclick="speakThai('รอหนึ่งชั่วโมง')">🔊</button></li>
    <li><strong>นาที (na-thii) = Menit:</strong> อีก 15 นาที (15 menit lagi). <button class="btn-audio-mini" onclick="speakThai('อีกสิบห้านาที')">🔊</button></li>
    <li><strong>วินาที (wi-na-thii) = Detik.</strong></li>
  </ul>
</div>
"""
        },

        109: {
            "title": "Sistem Pembagian Jam Tradisional Thai (Sistem 6 Jam)",
            "tag": "Materi [80]",
            "icon": "🕰️",
            "summary": "Sistem unik penyebutan jam di Thailand yang membagi hari menjadi siklus 6 jam: Mong Chao, Bai, Yen, Thum, dan Dtii.",
            "keyPoints": [
                "Thailand TIDAK menggunakan sistem 12 jam AM/PM ala barat dalam percakapan sehari-hari!",
                "Jam 06.00 - 11.00: ...โมงเช้า (... mong chao)",
                "Jam 13.00 - 15.00: บ่าย...โมง (bai ... mong)",
                "Jam 16.00 - 18.00: ...โมงเย็น (... mong yen)",
                "Jam 19.00 - 23.00: ...ทุ่ม (... thum) - kembali hitung dari 1 sampai 5!",
                "Jam 01.00 - 05.00 dini hari: ตี... (dtii ...)"
            ],
            "thaiSample": {"thai": "กี่โมงแล้ว / 2 ทุ่ม", "rtgs": "gii mong laeo / saawng thum", "meaning": "Jam berapa sekarang? / Jam 8 malam"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🕰️ Sistem 6 Jam Tradisional Thailand</h3>
  <p>Masyarakat Thailand memiliki cara tradisional membagi 24 jam menjadi 4 kuadran waktu:</p>

  <div class="table-responsive">
    <table class="lesson-table">
      <thead><tr><th>Waktu (24 Jam)</th><th>Sebutan Thai</th><th>RTGS</th><th>Arti Bahasa Indonesia</th><th>Audio</th></tr></thead>
      <tbody>
        <tr><td>07.00 pagi</td><td><strong>โมงเช้า</strong></td><td>moong chao</td><td>Jam 7 pagi</td><td><button class="btn-audio-mini" onclick="speakThai('เจ็ดโมงเช้า')">🔊</button></td></tr>
        <tr><td>12.00 siang</td><td><strong>เที่ยงตรง</strong></td><td>thiang dtrong</td><td>Jam 12 siang tepat</td><td><button class="btn-audio-mini" onclick="speakThai('เที่ยงตรง')">🔊</button></td></tr>
        <tr><td>13.00 siang</td><td><strong>บ่ายโมง</strong></td><td>baai moong</td><td>Jam 1 siang</td><td><button class="btn-audio-mini" onclick="speakThai('บ่ายโมง')">🔊</button></td></tr>
        <tr><td>17.00 sore</td><td><strong>ห้าโมงเย็น</strong></td><td>haa moong yen</td><td>Jam 5 sore</td><td><button class="btn-audio-mini" onclick="speakThai('ห้าโมงเย็น')">🔊</button></td></tr>
        <tr><td>19.00 malam</td><td><strong>หนึ่งทุ่ม</strong></td><td>nueng thum</td><td>Jam 7 malam (thum ke-1)</td><td><button class="btn-audio-mini" onclick="speakThai('หนึ่งทุ่ม')">🔊</button></td></tr>
        <tr><td>20.00 malam</td><td><strong>สองทุ่ม</strong></td><td>saawng thum</td><td>Jam 8 malam (thum ke-2)</td><td><button class="btn-audio-mini" onclick="speakThai('สองทุ่ม')">🔊</button></td></tr>
        <tr><td>24.00 malam</td><td><strong>เที่ยงคืน</strong></td><td>thiang khuen</td><td>Tengah malam tepat</td><td><button class="btn-audio-mini" onclick="speakThai('เที่ยงคืน')">🔊</button></td></tr>
        <tr><td>02.00 dini hari</td><td><strong>ตีสอง</strong></td><td>dtii saawng</td><td>Jam 2 subuh/dini hari</td><td><button class="btn-audio-mini" onclick="speakThai('ตีสอง')">🔊</button></td></tr>
      </tbody>
    </table>
  </div>
</div>
"""
        },

        110: {
            "title": "Tips & Trik Cepat Menghafal Sistem Jam Thai",
            "tag": "Materi [81]",
            "icon": "💡",
            "summary": "Jembatan keledai menghafal sistem jam Thai tanpa bingung menghitung mundur.",
            "keyPoints": [
                "Ingat bunyi beduk kuil 'Thum' untuk malam hari (19.00 - 23.00)",
                "Ingat ketukan lonceng penjaga ronda 'Dtii' untuk dini hari (01.00 - 05.00)",
                "Rumus cepat konversi jam 24 ke jam thum: Jam dikurang 18 (20 - 18 = 2 -> สองทุ่ม)"
            ],
            "thaiSample": {"thai": "กี่โมงครับ", "rtgs": "gii mong khrap", "meaning": "Jam berapa sekarang?"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>💡 Trik Cepat Konversi Jam Malam (Thum)</h3>
  <div class="rule-box" style="font-size:16px;">
    <strong>Rumus Jam Malam (19.00 - 23.00): [ Jam 24 ] - 18 = Angka Thum!</strong><br>
    • Jam 19.00: 19 - 18 = 1 -> หนึ่งทุ่ม (Nueng thum)<br>
    • Jam 20.00: 20 - 18 = 2 -> สองทุ่ม (Saawng thum)<br>
    • Jam 21.00: 21 - 18 = 3 -> สามทุ่ม (Saam thum)<br>
    • Jam 22.00: 22 - 18 = 4 -> สี่ทุ่ม (Sii thum)<br>
    • Jam 23.00: 23 - 18 = 5 -> ห้าทุ่ม (Haa thum)
  </div>
</div>
"""
        },

        111: {
            "title": "Menggabungkan Keterangan Waktu Lengkap dalam Kalimat",
            "tag": "Materi [82]",
            "icon": "🧩",
            "summary": "Urutan meletakkan informasi kompleks dalam kalimat bahasa Thai: [Waktu] + [Tempat] + [Subjek] + [Aktivitas].",
            "keyPoints": ["Keterangan waktu fleksibel di awal atau di akhir kalimat", "Menghindari kalimat tumpang tindih"],
            "thaiSample": {"thai": "พรุ่งนี้ตอนบ่ายสองโมง", "rtgs": "phrung-nii dtaawn baai saawng moong", "meaning": "Besok siang jam 2"},
            "contentHtml": "<div class='lesson-content-block'><h3>🧩 Pola Kalimat Berwaktu Lengkap</h3><p><strong>พรุ่งนี้ตอนบ่ายสองโมง ผมมีนัดกับเพื่อนที่สยาม (Phrung-nii dtaawn baai saawng moong phom mii nat kap phuean thii Siam):</strong> Besok jam 2 siang saya ada janji dengan teman di Siam. <button class='btn-audio-mini' onclick=\"speakThai('พรุ่งนี้ตอนบ่ายสองโมงผมมีนัดกับเพื่อนที่สยาม')\">🔊</button></p></div>"
        },

        112: {
            "title": "Menceritakan Rangkaian Aktivitas Seharian Penuh",
            "tag": "Materi [83]",
            "icon": "📖",
            "summary": "Latihan monolog menyusun cerita keseharian dari bangun tidur pagi hari sampai tidur kembali di malam hari.",
            "keyPoints": ["Kronologi kegiatan harian", "Penggunaan kata penghubung waktu"],
            "thaiSample": {"thai": "ตื่นนอน 7 โมงเช้า", "rtgs": "dtuen naawn jet moong chao", "meaning": "Bangun tidur jam 7 pagi"},
            "contentHtml": "<div class='lesson-content-block'><h3>📖 Contoh Monolog Keseharian</h3><p><em>'Saya bangun tidur jam 7 pagi, mandi, lalu berangkat kerja jam 8. Jam 12 siang saya makan siang bersama rekan kerja. Jam 6 sore saya pulang ke rumah dan jam 11 malam saya tidur.'</em></p></div>"
        },

        113: {
            "title": "#NabungKosakata Kata Kerja Emosional & Perasaan (ความรู้สึก)",
            "tag": "Materi [84]",
            "icon": "💖",
            "summary": "Kosa kata mengekspresikan perasaan: Suka, Cinta, Senang, Takut, Khawatir, Rindu, Capek, Kecewa.",
            "keyPoints": [
                "ชอบ (chaawp): Suka",
                "รัก (rak): Cinta",
                "ดีใจ (dii-jai): Senang / Gembira",
                "คิดถึง (khit-thueng): Rindu / Kangen",
                "เหนื่อย (neuay): Capek / Lelah"
            ],
            "thaiSample": {"thai": "ชอบ, รัก, ดีใจ, คิดถึง, เหนื่อย", "rtgs": "chaawp, rak, dii-jai, khit-thueng, neuay", "meaning": "Suka, Cinta, Senang, Kangen, Lelah"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>💖 Kosakata Perasaan & Emosi</h3>
  <ul>
    <li><strong>ชอบ (chaawp):</strong> Suka <button class="btn-audio-mini" onclick="speakThai('ชอบมาก')">🔊 ชอบมาก (suka banget)</button></li>
    <li><strong>รัก (rak):</strong> Cinta <button class="btn-audio-mini" onclick="speakThai('รักคุณนะ')">🔊 รักคุณนะ (aku cinta kamu)</button></li>
    <li><strong>คิดถึง (khit-thueng):</strong> Rindu / Kangen <button class="btn-audio-mini" onclick="speakThai('คิดถึงจัง')">🔊 คิดถึงจัง (kangen banget)</button></li>
    <li><strong>ดีใจ (dii-jai):</strong> Senang di hati <button class="btn-audio-mini" onclick="speakThai('ดีใจมาก')">🔊</button></li>
    <li><strong>เหนื่อย (neuay):</strong> Lelah / Capek <button class="btn-audio-mini" onclick="speakThai('เหนื่อยจัง')">🔊</button></li>
  </ul>
</div>
"""
        },

        114: {
            "title": "Memberikan Alasan: Penggunaan Kata เพราะว่า (Phraw-waa)",
            "tag": "Materi [85]",
            "icon": "💡",
            "summary": "Menjelaskan alasan dengan kata เพราะ (phraw) atau เพราะว่า (phraw-waa = karena/sebab).",
            "keyPoints": ["Rumus: [Akibat] + เพราะว่า + [Sebab / Alasan]", "Menjawab pertanyaan ทำไม (kenapa)"],
            "thaiSample": {"thai": "เพราะว่าอร่อยมาก", "rtgs": "phraw-waa a-roi maak", "meaning": "Karena rasanya sangat enak"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>💡 Menjawab 'Mengapa': เพราะว่า (Phraw-waa)</h3>
  <p>Ketika ditanya <strong>ทำไม (Tham-mai? = Kenapa?)</strong>, awali jawaban Anda dengan <strong>เพราะว่า (Phraw-waa = Karena...)</strong>:</p>
  <ul>
    <li>ชอบมาไทย<strong>เพราะว่า</strong>อาหารอร่อยมาก (Chaawp maa thai phraw-waa aa-haan a-roi maak) = Suka ke Thailand karena makanannya sangat lezat! <button class="btn-audio-mini" onclick="speakThai('ชอบมาไทยเพราะว่าอาหารอร่อยมาก')">🔊</button></li>
  </ul>
</div>
"""
        },

        115: {
            "title": "Menyatakan Sebab-Akibat: Oleh Karena Itu / Makanya (ดังนั้น, ก็เลย)",
            "tag": "Materi [86]",
            "icon": "➡️",
            "summary": "Menghubungkan sebab ke akibat: ดังนั้น (dang-nan = oleh karena itu - formal) vs ก็เลย (gor-loei = makanya - kasual).",
            "keyPoints": [
                "ดังนั้น (dang-nan): Oleh karena itu (tulisan resmi)",
                "ก็เลย (gor-loei): Makanya / Jadi... (percakapan santai harian)",
                "Rumus: [Sebab] + ก็เลย + [Tindakan Akibat]"
            ],
            "thaiSample": {"thai": "ฝนตก ก็เลยไม่ได้ไป", "rtgs": "fon dtok  gor loei mai dai bpai", "meaning": "Hujan turun, makanya gak jadi pergi"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>➡️ Makanya: ก็เลย (Gor-loei)</h3>
  <p>Kata <strong>ก็เลย (gor-loei)</strong> adalah kata paling sering dipakai orang Thai saat mengobrol santai:</p>
  <ul>
    <li>หิวข้าว<strong>ก็เลย</strong>ไปกิน (Hiu khaao gor loei bpai kin) = Lapar, makanya pergi makan. <button class="btn-audio-mini" onclick="speakThai('หิวข้าวก็เลยไปกิน')">🔊</button></li>
    <li>ไม่ว่าง<strong>ก็เลย</strong>ไม่ได้มา (Mai waang gor loei mai dai maa) = Gak senggang, makanya gak sempat datang. <button class="btn-audio-mini" onclick="speakThai('ไม่ว่างก็เลยไม่ได้มา')">🔊</button></li>
  </ul>
</div>
"""
        },

        116: {
            "title": "Kalimat Tanya 5W 1H Lengkap & Contoh Dialog Praktis",
            "tag": "Materi [87]",
            "icon": "❓",
            "summary": "Mastery 6 kata tanya utama bahasa Thai: ใคร (siapa), อะไร (apa), ที่ไหน (di mana), เมื่อไหร่ (kapan), ทำไม (mengapa), dan อย่างไร/ยังไง (bagaimana).",
            "keyPoints": [
                "ใคร (khrai): Siapa",
                "อะไร (arai): Apa",
                "ที่ไหน (thii-nai): Di mana",
                "เมื่อไหร่ (muea-rai): Kapan",
                "ทำไม (tham-mai): Mengapa / Kenapa",
                "ยังไง (yang-ngai): Bagaimana / Gimana"
            ],
            "thaiSample": {"thai": "ใคร, อะไร, ที่ไหน, เมื่อไหร่, ทำไม, ยังไง", "rtgs": "khrai, arai, thii-nai, muea-rai, tham-mai, yang-ngai", "meaning": "Siapa, Apa, Di mana, Kapan, Kenapa, Gimana"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>❓ Tabel 6 Kata Tanya 5W 1H</h3>
  <div class="table-responsive">
    <table class="lesson-table">
      <thead><tr><th>Kata Tanya</th><th>Thai</th><th>RTGS</th><th>Contoh Kalimat</th><th>Audio</th></tr></thead>
      <tbody>
        <tr><td>Siapa</td><td><strong>ใคร</strong></td><td>khrai</td><td>คุณเป็นใคร (Kamu siapa?)</td><td><button class="btn-audio-mini" onclick="speakThai('คุณเป็นใคร')">🔊</button></td></tr>
        <tr><td>Apa</td><td><strong>อะไร</strong></td><td>arai</td><td>นี่คืออะไร (Ini apa?)</td><td><button class="btn-audio-mini" onclick="speakThai('นี่คืออะไร')">🔊</button></td></tr>
        <tr><td>Di mana</td><td><strong>ที่ไหน</strong></td><td>thii-nai</td><td>ไปที่ไหน (Mau ke mana?)</td><td><button class="btn-audio-mini" onclick="speakThai('ไปที่ไหน')">🔊</button></td></tr>
        <tr><td>Kapan</td><td><strong>เมื่อไหร่</strong></td><td>muea-rai</td><td>จะมาเมื่อไหร่ (Kapan mau datang?)</td><td><button class="btn-audio-mini" onclick="speakThai('จะมาเมื่อไหร่')">🔊</button></td></tr>
        <tr><td>Mengapa</td><td><strong>ทำไม</strong></td><td>tham-mai</td><td>ทำไมไม่กิน (Kenapa tidak makan?)</td><td><button class="btn-audio-mini" onclick="speakThai('ทำไมไม่กิน')">🔊</button></td></tr>
        <tr><td>Bagaimana</td><td><strong>ยังไง</strong></td><td>yang-ngai</td><td>ไปยังไง (Pergi ke sana naik apa/gimana?)</td><td><button class="btn-audio-mini" onclick="speakThai('ไปยังไง')">🔊</button></td></tr>
      </tbody>
    </table>
  </div>
</div>
"""
        },

        117: {
            "title": "Kata Penunjuk 'Yang...' (ที่ - Thii)",
            "tag": "Materi [88]",
            "icon": "🔗",
            "summary": "Fungsi kata ที่ (thii) sebagai kata penghubung klausa relatif (yang...): menghubungkan kata benda dengan penjelasan sifatnya.",
            "keyPoints": [
                "Rumus: [Kata Benda] + ที่ (thii) + [Penjelasan]",
                "Contoh: คนที่สวย (Khon thii suay = Orang yang cantik)",
                "Contoh: อาหารที่อร่อย (Aa-haan thii a-roi = Makanan yang enak)"
            ],
            "thaiSample": {"thai": "คนที่ผมชอบ", "rtgs": "khon thii phom chaawp", "meaning": "Orang yang saya sukai"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🔗 Menyatakan 'Yang...': ที่ (Thii)</h3>
  <ul>
    <li>คนที่พูดภาษาไทยได้ (Khon thii phuut phaa-saa thai dai) = Orang yang bisa bicara bahasa Thai. <button class="btn-audio-mini" onclick="speakThai('คนที่พูดภาษาไทยได้')">🔊</button></li>
    <li>ร้านที่อร่อยที่สุด (Raan thii a-roi thii-sut) = Restoran yang paling enak. <button class="btn-audio-mini" onclick="speakThai('ร้านที่อร่อยที่สุด')">🔊</button></li>
  </ul>
</div>
"""
        },

        118: {
            "title": "Kata Tanya yang Berubah Menjadi Pernyataan (Arai Gor Dai)",
            "tag": "Materi [89]",
            "icon": "✨",
            "summary": "Ketika kata tanya berubah makna menjadi 'Apa saja / Siapa saja / Di mana saja' dengan menambahkan ก็ได้ (gor dai).",
            "keyPoints": [
                "อะไรก็ได้ (arai gor dai): Apa saja terserah",
                "ที่ไหนก็ได้ (thii-nai gor dai): Di mana saja boleh",
                "เมื่อไหร่ก็ได้ (muea-rai gor dai): Kapan saja oke"
            ],
            "thaiSample": {"thai": "อะไรก็ได้ / ที่ไหนก็ได้", "rtgs": "arai gor dai / thii-nai gor dai", "meaning": "Apa saja / Di mana saja boleh"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>✨ Menjadi 'Terserah / Apa Saja': ก็ได้ (Gor dai)</h3>
  <ul>
    <li><strong>อะไรก็ได้ (Arai gor dai):</strong> Apa saja boleh / terserah. <button class="btn-audio-mini" onclick="speakThai('อะไรก็ได้')">🔊</button></li>
    <li><strong>ที่ไหนก็ได้ (Thii-nai gor dai):</strong> Di mana saja hayuk. <button class="btn-audio-mini" onclick="speakThai('ที่ไหนก็ได้')">🔊</button></li>
    <li><strong>ใครก็ได้ (Khrai gor dai):</strong> Siapa saja bisa.</li>
  </ul>
</div>
"""
        },

        119: {
            "title": "Materi Terakhir: Praktik Mandiri Menceritakan Aktivitas Sehari-hari",
            "tag": "Materi [90] - FINAL",
            "icon": "🏆",
            "summary": "Kulminasi kelulusan seluruh kurikulum Jazmi Nara (Materi 01 sampai 90): Menyusun narasi cerita lengkap tentang diri Anda, hobi, dan aktivitas di Thailand.",
            "keyPoints": [
                "Penyatuan materi Aksara, Kaidah Nada, Tata Bahasa SVO, Waktu, dan Emosi",
                "Kemampuan mandiri membaca, mendengarkan, dan mengekspresikan gagasan dalam bahasa Thai",
                "Selamat! Anda telah menuntaskan seluruh 90 materi kurikulum resmi Jazmi Nara!"
            ],
            "thaiSample": {"thai": "ยินดีด้วยครับ คุณเก่งมาก", "rtgs": "yin-dii duay khrap, khun geng maak", "meaning": "Selamat! Anda luar biasa hebat!"},
            "contentHtml": """
<div class="lesson-content-block">
  <h3>🏆 Selamat! Anda Telah Menuntaskan 90 Materi Kurikulum!</h3>
  <p>Dari mengenal garis lengkung kepala konsonan di Materi [01], menaklukkan 5 tangga nada di Materi [13], merangkai struktur kalimat SVO di Materi [46], hingga menceritakan waktu dan aktivitas di Materi [90].</p>

  <div class="rule-box" style="text-align:center; padding:24px; background:linear-gradient(135deg, rgba(45,106,79,0.2) 0%, rgba(82,183,136,0.1) 100%);">
    <div style="font-size:36px; margin-bottom:10px;">🎉 🎓 🇹🇭</div>
    <h2 style="color:var(--primary); margin:0 0 10px 0;">ยินดีด้วยครับ! (Yin-dii duay khrap!)</h2>
    <p style="font-size:15px; line-height:1.6; margin:0 0 14px 0;">
      Anda sekarang telah memiliki fondasi komprehensif literasi aksara, kaidah nada, tata bahasa percakapan, serta ribuan kosakata harian bahasa Thai.
    </p>
    <button class="btn-stimuler-primary" onclick="speakThai('ยินดีด้วยครับ คุณเก่งมาก ภาษาไทยไม่ยากเลย ใช่ไหมครับ')">
      🔊 Dengarkan Pesan Kelulusan
    </button>
  </div>
</div>
"""
        }
    }

print("Part 4 content helper defined.")

