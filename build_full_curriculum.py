import json

CURRICULUM_UNITS = [
    {
        "id": "unit_1",
        "unitNumber": 1,
        "level": "a1",
        "levelLabel": "A1.1 Pemula",
        "title": "Langkah Pertama di Bangkok 🇹🇭",
        "desc": "Mulai perjalanan Anda dengan salam santun, tata krama wai, pengenalan aksara kelas tengah, dan penguasaan 5 nada dasar.",
        "lessons": [
            {"id": "u1_l1", "icon": "🏮", "title": "Salam & Kesopanan", "subtitle": "สวัสดี, ครับ, ค่ะ, ขอบคุณ"},
            {"id": "u1_l2", "icon": "🔤", "title": "Konsonan Tengah", "subtitle": "ก, ด, ต, บ, ป, อ"},
            {"id": "u1_l3", "icon": "🎵", "title": "5 Nada Intonasi", "subtitle": "Datar, Rendah, Jatuh, Tinggi, Naik"},
            {"id": "u1_boss", "icon": "🏆", "title": "Tantangan Unit 1", "subtitle": "Ujian Komprehensif Sapaan & Kesopanan"}
        ]
    },
    {
        "id": "unit_2",
        "unitNumber": 2,
        "level": "a1",
        "levelLabel": "A1.1 Pemula",
        "title": "Di Kafe & Restoran Thai 🍜",
        "desc": "Kuasai seni memesan hidangan legendaris Pad Thai, Tom Yum, mengatur tingkat kepedasan, memesan Cha Yen, hingga meminta tagihan.",
        "lessons": [
            {"id": "u2_l1", "icon": "🍜", "title": "Pesan Makanan & Rasa", "subtitle": "ข้าวผัด, ผัดไทย, ไม่เผ็ด, อร่อย"},
            {"id": "u2_l2", "icon": "🧋", "title": "Minuman Khas Thai", "subtitle": "ชาเย็น, กาแฟ, ขอน้ำเปล่า, หวานน้อย"},
            {"id": "u2_l3", "icon": "🧾", "title": "Minta Tagihan & Bon", "subtitle": "เก็บเงินด้วย, เช็คบิล, ทั้งหมดเท่าไหร่"},
            {"id": "u2_boss", "icon": "🏆", "title": "Tantangan Restoran", "subtitle": "Simulasi Lengkap Makan di Restoran"}
        ]
    },
    {
        "id": "unit_3",
        "unitNumber": 3,
        "level": "a1",
        "levelLabel": "A1.2 Pemula",
        "title": "Belanja di Pasar Chatuchak 🛍️",
        "desc": "Pelajari sistem angka Thai, menawar harga dengan santun, memilih warna pakaian, dan meminta diskon di pasar tradisional.",
        "lessons": [
            {"id": "u3_l1", "icon": "🔢", "title": "Angka & Mata Uang", "subtitle": "๑-๑๐, หลักสิบ, หลักร้อย, บาท (Baht)"},
            {"id": "u3_l2", "icon": "🏷️", "title": "Tawar-Menawar Harga", "subtitle": "เท่าไหร่, ลดหน่อยได้ไหม, แพงเกินไป"},
            {"id": "u3_l3", "icon": "👕", "title": "Warna & Ukuran", "subtitle": "สีขาว, สีดำ, ตัวใหญ่, ตัวเล็ก"},
            {"id": "u3_boss", "icon": "🏆", "title": "Tantangan Pasar Chatuchak", "subtitle": "Ujian Transaksi Belanja & Diskon"}
        ]
    },
    {
        "id": "unit_4",
        "unitNumber": 4,
        "level": "a1",
        "levelLabel": "A1.2 Pemula",
        "title": "Transportasi Tuk-Tuk & Arah 🛺",
        "desc": "Navigasi kota Bangkok dengan mudah: naik Tuk-Tuk, taksi meter, BTS Skytrain, menanyakan toilet, dan memberi arahan belok.",
        "lessons": [
            {"id": "u4_l1", "icon": "🛺", "title": "Moda Transportasi", "subtitle": "รถตุ๊กตุ๊ก, แท็กซี่, รถไฟฟ้า BTS"},
            {"id": "u4_l2", "icon": "🧭", "title": "Arah & Belokan", "subtitle": "ตรงไป, เลี้ยวซ้าย, เลี้ยวขวา, จอดที่นี่"},
            {"id": "u4_l3", "icon": "📍", "title": "Menanyakan Lokasi", "subtitle": "อยู่ที่ไหน, ไกลไหม, อยู่ใกล้ๆ"},
            {"id": "u4_boss", "icon": "🏆", "title": "Tantangan Transportasi", "subtitle": "Navigasi Perjalanan Menuju Stasiun"}
        ]
    },
    {
        "id": "unit_5",
        "unitNumber": 5,
        "level": "a2",
        "levelLabel": "A2.1 Menengah",
        "title": "Waktu, Hari & Janji Temu ⏰",
        "desc": "Pahami sistem 6 jam unik khas Thai (Mong Chao, Bai, Thum), nama hari dalam seminggu, dan cara mengatur janji temu.",
        "lessons": [
            {"id": "u5_l1", "icon": "⏱️", "title": "Jam & Menit Thai", "subtitle": "กี่โมง, แปดโมงเช้า, บ่ายสอง, นาที"},
            {"id": "u5_l2", "icon": "📅", "title": "Hari & Kalender", "subtitle": "วันจันทร์, วันศุกร์, วันนี้, พรุ่งนี้"},
            {"id": "u5_l3", "icon": "🤝", "title": "Membuat Janji Temu", "subtitle": "เจอกันพรุ่งนี้, คุณว่างไหม, สะดวก"},
            {"id": "u5_boss", "icon": "🏆", "title": "Tantangan Janji Temu", "subtitle": "Koordinasi Jadwal & Waktu Pertemuan"}
        ]
    },
    {
        "id": "unit_6",
        "unitNumber": 6,
        "level": "a2",
        "levelLabel": "A2.1 Menengah",
        "title": "Check-In Hotel & Akomodasi 🏨",
        "desc": "Komunikasi lancar di hotel: konfirmasi reservasi, meminta kartu akses kunci, kata sandi Wi-Fi, dan titip koper sebelum penerbangan.",
        "lessons": [
            {"id": "u6_l1", "icon": "🛎️", "title": "Proses Check-In", "subtitle": "จองห้องไว้, เช็คอิน, ขอกุญแจห้อง"},
            {"id": "u6_l2", "icon": "🛏️", "title": "Fasilitas & Kamar", "subtitle": "รหัสไวไฟ, แอร์ไม่เย็น, น้ำอุ่น, ผ้าเช็ดตัว"},
            {"id": "u6_l3", "icon": "🧳", "title": "Layanan & Titip Koper", "subtitle": "ฝากกระเป๋า, เช็คเอาท์, เรียกรถแท็กซี่"},
            {"id": "u6_boss", "icon": "🏆", "title": "Tantangan Menginap Hotel", "subtitle": "Simulasi Reservasi & Komplain Fasilitas"}
        ]
    },
    {
        "id": "unit_7",
        "unitNumber": 7,
        "level": "a2",
        "levelLabel": "A2.2 Menengah",
        "title": "Wisata Kuil & Etika Budaya 🛕",
        "desc": "Jelajahi keindahan Wat Phra Kaew & Wat Arun dengan penuh hormat. Pelajari etika busana, tradisi Songkran, dan Loy Krathong.",
        "lessons": [
            {"id": "u7_l1", "icon": "🛕", "title": "Etika Busana di Kuil", "subtitle": "วัด, ถอดรองเท้า, แต่งกายสุภาพ, ห้ามถ่ายรูป"},
            {"id": "u7_l2", "icon": "🪷", "title": "Tradisi & Festival", "subtitle": "ไหว้พระ, ดอกบัว, วันสงกรานต์, ลอยกระทง"},
            {"id": "u7_l3", "icon": "🎨", "title": "Mengagumi Arsitektur", "subtitle": "สวยงามมาก, เก่าแก่, พระพุทธรูป"},
            {"id": "u7_boss", "icon": "🏆", "title": "Tantangan Etika Kuil", "subtitle": "Kunjungan Hormat ke Tempat Bersejarah"}
        ]
    },
    {
        "id": "unit_8",
        "unitNumber": 8,
        "level": "a2",
        "levelLabel": "A2.2 Menengah",
        "title": "Apotek & Pertolongan Medis 🏥",
        "desc": "Kosa kata krusial saat bepergian: menyampaikan gejala sakit, membeli obat di apotek, alergi makanan, dan nomor darurat.",
        "lessons": [
            {"id": "u8_l1", "icon": "🩺", "title": "Keluhan & Gejala Sakit", "subtitle": "ปวดหัว, ปวดท้อง, เป็นไข้, เจ็บคอ"},
            {"id": "u8_l2", "icon": "💊", "title": "Beli Obat di Apotek", "subtitle": "ร้านขายยา, ยาแก้ปวด, ทานหลังอาหาร"},
            {"id": "u8_l3", "icon": "🚨", "title": "Alergi & Keadaan Darurat", "subtitle": "แพ้ถั่ว, ช่วยด้วย, ไปโรงพยาบาล"},
            {"id": "u8_boss", "icon": "🏆", "title": "Tantangan Medis & Obat", "subtitle": "Konsultasi Resep & Aturan Minum Obat"}
        ]
    },
    {
        "id": "unit_9",
        "unitNumber": 9,
        "level": "b1",
        "levelLabel": "B1.1 Mahir",
        "title": "Cuaca, Musim & Alam Tropis 🌴",
        "desc": "Membahas prakiraan cuaca harian, 3 musim di Thailand (kemarau, hujan, sejuk), serta rencana berlibur ke Phuket dan Samui.",
        "lessons": [
            {"id": "u9_l1", "icon": "☀️", "title": "Deskripsi Cuaca Harian", "subtitle": "วันนี้ร้อนมาก, ฝนตก, ลมแรง, แดดจัด"},
            {"id": "u9_l2", "icon": "☔", "title": "3 Musim di Thailand", "subtitle": "ฤดูร้อน, ฤดูฝน, ฤดูหนาว, พกร่ม"},
            {"id": "u9_l3", "icon": "🏖️", "title": "Pulau & Pantai Tropis", "subtitle": "ทะเล, เกาะสมุย, เกาะภูเก็ต, เล่นน้ำ"},
            {"id": "u9_boss", "icon": "🏆", "title": "Tantangan Rencana Cuaca", "subtitle": "Menyesuaikan Agenda Berdasarkan Cuaca"}
        ]
    },
    {
        "id": "unit_10",
        "unitNumber": 10,
        "level": "b1",
        "levelLabel": "B1.1 Mahir",
        "title": "Hobi, Minat & Percakapan Santai 🎨",
        "desc": "Bangun pertemanan akrab: ceritakan hobi favorit, musik, fotografi, dan tukar id aplikasi LINE secara natural.",
        "lessons": [
            {"id": "u10_l1", "icon": "🎧", "title": "Kegiatan Waktu Luang", "subtitle": "ชอบฟังเพลง, ดูหนัง, ถ่ายรูป, ท่องเที่ยว"},
            {"id": "u10_l2", "icon": "💬", "title": "Menanyakan Minat Teman", "subtitle": "คุณชอบทำอะไร, ชอบอาหารแบบไหน"},
            {"id": "u10_l3", "icon": "📲", "title": "Kontak & Media Sosial", "subtitle": "ขอไลน์หน่อยได้ไหม, ส่งรูป, ติดต่อกัน"},
            {"id": "u10_boss", "icon": "🏆", "title": "Tantangan Obrolan Santai", "subtitle": "Menjalin Relasi & Berbagi Cerita Hobi"}
        ]
    },
    {
        "id": "unit_11",
        "unitNumber": 11,
        "level": "b1",
        "levelLabel": "B1.2 Mahir",
        "title": "Emosi, Perasaan & Filosofi Hidup 🌿",
        "desc": "Pahami jiwa orang Thai melalui kata majemuk hati (Jai / ใจ), prinsip Mai Pen Rai, Sabai-Sabai, serta cara berpendapat sopan.",
        "lessons": [
            {"id": "u11_l1", "icon": "💖", "title": "Keluarga Kata Hati (ใจ)", "subtitle": "ใจดี, ดีใจ, เกรงใจ, สบายใจ"},
            {"id": "u11_l2", "icon": "🍃", "title": "Filosofi Mai Pen Rai", "subtitle": "ไม่เป็นไร, สบายสบาย, ใจเย็นๆ"},
            {"id": "u11_l3", "icon": "💭", "title": "Mengungkapkan Opini", "subtitle": "ฉันคิดว่า, เห็นด้วย, น่าสนใจมาก"},
            {"id": "u11_boss", "icon": "🏆", "title": "Tantangan Rasa & Hati", "subtitle": "Ujian Pemahaman Budaya 'Kreng Jai'"}
        ]
    },
    {
        "id": "unit_12",
        "unitNumber": 12,
        "level": "b1",
        "levelLabel": "B1.2 Mahir",
        "title": "Percakapan Bebas & Diplomasi Wisata 🇹🇭",
        "desc": "Tingkat mahir: ceritakan negara asal Anda (Indonesia), puji keindahan Thailand, ucapkan salam perpisahan, dan capai kelulusan!",
        "lessons": [
            {"id": "u12_l1", "icon": "🇮🇩", "title": "Asal Negara & Identitas", "subtitle": "มาจากประเทศอินโดนีเซีย, พูดไทยได้นิดหน่อย"},
            {"id": "u12_l2", "icon": "✨", "title": "Apresiasi & Pujian", "subtitle": "คนไทยใจดีมาก, ชอบเมืองไทย, ประทับใจ"},
            {"id": "u12_l3", "icon": "🕊️", "title": "Perpisahan & Doa Baik", "subtitle": "ขอให้เดินทางปลอดภัย, แล้วพบกันใหม่, โชคดี"},
            {"id": "u12_boss", "icon": "🎓", "title": "Sidang Kelulusan Akademi", "subtitle": "Ujian Komprehensif Kelulusan B1"}
        ]
    }
]

ALL_LESSONS_ORDER = [
    'u1_l1', 'u1_l2', 'u1_l3', 'u1_boss',
    'u2_l1', 'u2_l2', 'u2_l3', 'u2_boss',
    'u3_l1', 'u3_l2', 'u3_l3', 'u3_boss',
    'u4_l1', 'u4_l2', 'u4_l3', 'u4_boss',
    'u5_l1', 'u5_l2', 'u5_l3', 'u5_boss',
    'u6_l1', 'u6_l2', 'u6_l3', 'u6_boss',
    'u7_l1', 'u7_l2', 'u7_l3', 'u7_boss',
    'u8_l1', 'u8_l2', 'u8_l3', 'u8_boss',
    'u9_l1', 'u9_l2', 'u9_l3', 'u9_boss',
    'u10_l1', 'u10_l2', 'u10_l3', 'u10_boss',
    'u11_l1', 'u11_l2', 'u11_l3', 'u11_boss',
    'u12_l1', 'u12_l2', 'u12_l3', 'u12_boss'
]

# Build comprehensive lesson database
LESSON_DATABASE = {}

# --- UNIT 1 ---
LESSON_DATABASE["u1_l1"] = {
    "title": "Salam & Kesopanan",
    "questions": [
        {"type": "choice", "prompt": "Pilih arti dari ungkapan ini:", "thai": "สวัสดี", "roman": "sà-wàt-dii", "options": ["Halo / Salam", "Terima kasih", "Maaf", "Sampai jumpa"], "answer": 0, "explain": "สวัสดี (sà-wàt-dii) adalah salam universal khas Thailand yang sopan sepanjang hari."},
        {"type": "choice", "prompt": "Partikel sopan penutur laki-laki adalah...", "thai": "ครับ", "roman": "khráp", "options": ["ค่ะ (khâ)", "ครับ (khráp)", "จ้า (jâa)", "นะ (ná)"], "answer": 1, "explain": "ครับ (khráp) ditaruh di akhir kalimat oleh penutur pria untuk kesopanan."},
        {"type": "matching", "prompt": "Cocokkan pasangan kata berikut:", "pairs": [{"thai": "สวัสดี", "label": "Halo"}, {"thai": "ขอบคุณ", "label": "Terima kasih"}, {"thai": "ขอโทษ", "label": "Maaf"}, {"thai": "ไม่เป็นไร", "label": "Tidak apa-apa"}], "explain": "Hebat! Anda mengingat 4 pilar kesopanan bahasa Thai."},
        {"type": "builder", "prompt": "Susun kalimat: 'Halo (pria)'", "correctSentence": ["สวัสดี", "ครับ"], "options": ["สวัสดี", "ครับ", "ค่ะ", "ไม่", "ขอบคุณ"], "explain": "Susunan sopan: สวัสดี + ครับ = สวัสดีครับ."}
    ]
}
LESSON_DATABASE["u1_l2"] = {
    "title": "Konsonan Kelas Tengah",
    "questions": [
        {"type": "choice", "prompt": "Huruf pertama dalam alfabet Thai (Ko Kai):", "thai": "ก", "roman": "ko kai", "options": ["ก (Ayam)", "ข (Telur)", "ง (Ular)", "ด (Anak)"], "answer": 0, "explain": "ก (Ko Kai) adalah huruf pertama dalam aksara Thai kelas tengah melambangkan ayam."},
        {"type": "matching", "prompt": "Cocokkan huruf kelas tengah dengan lambangnya:", "pairs": [{"thai": "ก", "label": "Ayam (Kai)"}, {"thai": "ด", "label": "Anak (Dek)"}, {"thai": "ต", "label": "Kura-kura (Tao)"}, {"thai": "ป", "label": "Ikan (Pla)"}], "explain": "Karakteristik kelas tengah adalah bisa membentuk 5 nada lengkap!"},
        {"type": "choice", "prompt": "Huruf 'บ' melambangkan benda apa?", "thai": "บ", "roman": "bo baimai", "options": ["Ikan", "Daun", "Kura-kura", "Ayam"], "answer": 1, "explain": "บ (Bo Baimai) melambangkan daun dengan bunyi awal /b/."}
    ]
}
LESSON_DATABASE["u1_l3"] = {
    "title": "5 Nada Intonasi",
    "questions": [
        {"type": "choice", "prompt": "Berapa jumlah nada dalam bahasa Thai baku?", "thai": "เสียงวรรณยุกต์", "roman": "sǐang wan-na-yúk", "options": ["3 nada", "4 nada", "5 nada", "6 nada"], "answer": 2, "explain": "Bahasa Thai memiliki 5 nada: Datar (Tengah), Rendah, Jatuh, Tinggi, dan Naik."},
        {"type": "matching", "prompt": "Cocokkan simbol nada dengan namanya:", "pairs": [{"thai": "่ (ไม้เอก)", "label": "Mai Ek (Rendah)"}, {"thai": "้ (ไม้โท)", "label": "Mai Tho (Jatuh)"}, {"thai": "๊ (ไม้ตรี)", "label": "Mai Tri (Tinggi)"}, {"thai": "๋ (ไม้จัตวา)", "label": "Mai Chattawa (Naik)"}], "explain": "Simbol nada ditulis tepat di atas konsonan awal suku kata."},
        {"type": "builder", "prompt": "Susun frasa: 'Terima kasih banyak (wanita)'", "correctSentence": ["ขอบคุณ", "มาก", "ค่ะ"], "options": ["ขอบคุณ", "มาก", "ค่ะ", "ครับ", "สวัสดี"], "explain": "ขอบคุณ (Terima kasih) + มาก (banyak) + ค่ะ (partikel wanita) = ขอบคุณมากค่ะ."}
    ]
}
LESSON_DATABASE["u1_boss"] = {
    "title": "Tantangan Unit 1 🏆",
    "questions": [
        {"type": "choice", "prompt": "Arti dari ungkapan 'ขอบคุณ'?", "thai": "ขอบคุณ", "roman": "khɔ̀ɔp-khun", "options": ["Terima kasih", "Selamat tinggal", "Permisi", "Apa kabar"], "answer": 0, "explain": "ขอบคุณ (khop khun) berarti terima kasih."},
        {"type": "builder", "prompt": "Susun salam: 'Sampai jumpa lagi'", "correctSentence": ["แล้ว", "พบ", "กัน", "ใหม่"], "options": ["แล้ว", "พบ", "กัน", "ใหม่", "สวัสดี", "ขอบคุณ"], "explain": "แล้วพบกันใหม่ (láew phóp gan mài) berarti 'Sampai jumpa lagi nanti'."},
        {"type": "matching", "prompt": "Uji sapaan dasar Anda:", "pairs": [{"thai": "สบายดีไหม", "label": "Apa kabar?"}, {"thai": "ยินดีที่ได้รู้จัก", "label": "Senang kenal Anda"}, {"thai": "โชคดีนะ", "label": "Semoga sukses"}, {"thai": "ขอโทษ", "label": "Maaf / Permisi"}], "explain": "Selamat! Anda lulus Tantangan Unit 1 dengan gemilang!"}
    ]
}

# --- UNIT 2 ---
LESSON_DATABASE["u2_l1"] = {
    "title": "Pesan Makanan & Rasa",
    "questions": [
        {"type": "choice", "prompt": "Apa arti dari 'ผัดไทย' (phàt-thai)?", "thai": "ผัดไทย", "roman": "phàt-thai", "options": ["Mie goreng khas Thai", "Nasi goreng", "Sup Tom Yum", "Ayam bakar"], "answer": 0, "explain": "Pad Thai adalah mie beras goreng ikonik Thailand yang bercita rasa gurih manis."},
        {"type": "choice", "prompt": "Bila Anda ingin makanan tidak pedas, katakan...", "thai": "ไม่เผ็ด", "roman": "mâi phèt", "options": ["เผ็ดมาก (sangat pedas)", "ไม่เผ็ด (tidak pedas)", "หวานมาก (sangat manis)", "เค็ม (asin)"], "answer": 1, "explain": "ไม่เผ็ด (mâi phèt) berarti tanpa cabai pedas."},
        {"type": "matching", "prompt": "Cocokkan nama hidangan populer:", "pairs": [{"thai": "ข้าวผัด", "label": "Nasi Goreng"}, {"thai": "ต้มยำกุ้ง", "label": "Sup Tom Yum Udang"}, {"thai": "ส้มตำ", "label": "Salad Pepaya Som Tum"}, {"thai": "ไก่ย่าง", "label": "Ayam Panggang"}], "explain": "Kuliner Thailand terkenal dengan perpaduan rasa yang kaya."},
        {"type": "builder", "prompt": "Susun: 'Minta nasi goreng satu piring'", "correctSentence": ["ขอ", "ข้าวผัด", "หนึ่ง", "จาน"], "options": ["ขอ", "ข้าวผัด", "หนึ่ง", "จาน", "เผ็ด", "แก้ว"], "explain": "ขอ (minta) + ข้าวผัด (nasi goreng) + หนึ่ง (satu) + จาน (piring)."}
    ]
}
LESSON_DATABASE["u2_l2"] = {
    "title": "Minuman Khas Thai",
    "questions": [
        {"type": "choice", "prompt": "Minuman teh susu oranye khas Thailand disebut...", "thai": "ชาเย็น", "roman": "chaa-yen", "options": ["ชาเย็น (Teh Thai Dingin)", "กาแฟเย็น (Kopi Es)", "น้ำเปล่า (Air Putih)", "น้ำส้ม (Jus Jeruk)"], "answer": 0, "explain": "ชาเย็น (chaa-yen) adalah es teh susu khas Thailand dengan aroma teh wangi."},
        {"type": "matching", "prompt": "Cocokkan istilah minuman & rasa:", "pairs": [{"thai": "น้ำเปล่า", "label": "Air Mineral"}, {"thai": "หวานน้อย", "label": "Sedikit Manis (Less Sugar)"}, {"thai": "ไม่ใส่น้ำตาล", "label": "Tanpa Gula"}, {"thai": "น้ำแข็ง", "label": "Es Batu"}], "explain": "Frasa 'หวานน้อย' (waan noi) sangat berguna saat memesan minuman!"},
        {"type": "builder", "prompt": "Susun: 'Minta air putih satu gelas'", "correctSentence": ["ขอ", "น้ำเปล่า", "หนึ่ง", "แก้ว"], "options": ["ขอ", "น้ำเปล่า", "หนึ่ง", "แก้ว", "จาน", "ชาเย็น"], "explain": "ขอ (minta) + น้ำเปล่า (air mineral) + หนึ่ง (satu) + แก้ว (gelas)."}
    ]
}
LESSON_DATABASE["u2_l3"] = {
    "title": "Minta Tagihan & Bon",
    "questions": [
        {"type": "choice", "prompt": "Cara umum meminta bon / tagihan di restoran:", "thai": "เก็บเงินด้วยครับ", "roman": "gèp ngoen dûay khráp", "options": ["เก็บเงินด้วยครับ (Minta tagihan)", "ขอเมนูครับ (Minta menu)", "ไม่อร่อยครับ (Kurang enak)", "ไปก่อนครับ (Pamit dulu)"], "answer": 0, "explain": "เก็บเงินด้วย (gèp ngoen dûay) berarti 'Tolong ambil uang / minta tagihan meja'."},
        {"type": "matching", "prompt": "Cocokkan frasa pembayaran kasir:", "pairs": [{"thai": "ทั้งหมดเท่าไหร่", "label": "Berapa total semuanya?"}, {"thai": "จ่ายเงินสด", "label": "Bayar tunai (Cash)"}, {"thai": "สแกนคิวอาร์", "label": "Scan QR Code"}, {"thai": "เงินทอน", "label": "Uang kembalian"}], "explain": "Metode QR PromptPay dan tunai sangat umum di Thailand."},
        {"type": "builder", "prompt": "Susun: 'Makanan ini sangat enak'", "correctSentence": ["อาหาร", "นี้", "อร่อย", "มาก"], "options": ["อาหาร", "นี้", "อร่อย", "มาก", "เผ็ด", "ขอ"], "explain": "อาหาร (makanan) + นี้ (ini) + อร่อย (enak) + มาก (sekali)."}
    ]
}
LESSON_DATABASE["u2_boss"] = {
    "title": "Tantangan Restoran 🏆",
    "questions": [
        {"type": "choice", "prompt": "Bagaimana memesan 'Pad Thai 1 piring tidak pedas'?", "thai": "ขอผัดไทยหนึ่งจานไม่เผ็ด", "roman": "khɔ̌ɔ phàt-thai nèung jaan mâi phèt", "options": ["ขอผัดไทยหนึ่งจานไม่เผ็ด", "ขอน้ำเปล่าหนึ่งแก้ว", "ต้มยำกุ้งเผ็ดมาก", "เก็บเงินด้วยครับ"], "answer": 0, "explain": "Susunan tepat: ขอ + ผัดไทย + หนึ่งจาน + ไม่เผ็ด."},
        {"type": "builder", "prompt": "Susun permintaan: 'Bisa minta buku menu?'", "correctSentence": ["ขอ", "เมนู", "หน่อย", "ครับ"], "options": ["ขอ", "เมนู", "หน่อย", "ครับ", "ค่ะ", "จาน"], "explain": "ขอ (minta) + เมนู (menu) + หน่อย (tolong) + ครับ (partikel sopan)."},
        {"type": "matching", "prompt": "Uji kosakata restoran Anda:", "pairs": [{"thai": "อร่อยมาก", "label": "Enak sekali"}, {"thai": "อิ่มแล้ว", "label": "Sudah kenyang"}, {"thai": "หิวข้าว", "label": "Lapar nasi/makan"}, {"thai": "หิวน้ำ", "label": "Haus minum"}], "explain": "Luar biasa! Anda menguasai percakapan kafe & restoran!"}
    ]
}

# --- UNIT 3 ---
LESSON_DATABASE["u3_l1"] = {
    "title": "Angka & Mata Uang",
    "questions": [
        {"type": "choice", "prompt": "Apa nama mata uang resmi Thailand?", "thai": "บาท", "roman": "bàat", "options": ["บาท (Baht)", "ดอลลาร์ (Dollar)", "เยน (Yen)", "รูเปียห์ (Rupiah)"], "answer": 0, "explain": "บาท (Baht) adalah mata uang resmi Kerajaan Thailand."},
        {"type": "choice", "prompt": "Angka 'หนึ่งร้อย' (nèung-rɔ́ɔy) berarti...", "thai": "หนึ่งร้อย", "roman": "nèung-rɔ́ɔy", "options": ["10", "50", "100", "1000"], "answer": 2, "explain": "หนึ่ง (satu) + ร้อย (ratus) = 100 Baht."},
        {"type": "matching", "prompt": "Cocokkan angka dasar Thai:", "pairs": [{"thai": "หนึ่ง (๑)", "label": "Satu (1)"}, {"thai": "สอง (๒)", "label": "Dua (2)"}, {"thai": "ห้า (๕)", "label": "Lima (5)"}, {"thai": "สิบ (๑๐)", "label": "Sepuluh (10)"}], "explain": "Simbol angka tradisional Thai masih sering digunakan di papan resmi."},
        {"type": "builder", "prompt": "Susun harga: 'Seratus Baht'", "correctSentence": ["หนึ่ง", "ร้อย", "บาท"], "options": ["หนึ่ง", "ร้อย", "บาท", "สิบ", "พัน"], "explain": "หนึ่ง (1) + ร้อย (100) + บาท (Baht) = 100 Baht."}
    ]
}
LESSON_DATABASE["u3_l2"] = {
    "title": "Tawar-Menawar Harga",
    "questions": [
        {"type": "choice", "prompt": "Bagaimana menanyakan 'Berapa harga barang yang ini?'", "thai": "อันนี้เท่าไหร่", "roman": "an-níi thâo-rài", "options": ["อันนี้เท่าไหร่", "อันนี้อะไร", "อยู่ที่ไหน", "ลดได้ไหม"], "answer": 0, "explain": "อันนี้ (yang ini) + เท่าไหร่ (berapa harganya) = อันนี้เท่าไหร่."},
        {"type": "matching", "prompt": "Cocokkan frasa belanja di pasar:", "pairs": [{"thai": "ลดหน่อยได้ไหม", "label": "Bisa minta diskon sedikit?"}, {"thai": "แพงเกินไป", "label": "Terlalu mahal"}, {"thai": "ถูกมาก", "label": "Murah sekali"}, {"thai": "คิดเท่าไหร่", "label": "Dihitung berapa?"}], "explain": "Menawar dengan senyuman dan kata 'khrap/kha' membuat penjual senang memberi diskon!"},
        {"type": "builder", "prompt": "Susun: 'Bisa minta diskon sedikit?'", "correctSentence": ["ลด", "หน่อย", "ได้ไหม"], "options": ["ลด", "หน่อย", "ได้ไหม", "แพง", "บาท"], "explain": "ลด (diskon) + หน่อย (sedikit) + ได้ไหม (bisa tidak?)."}
    ]
}
LESSON_DATABASE["u3_l3"] = {
    "title": "Warna & Ukuran",
    "questions": [
        {"type": "choice", "prompt": "Warna 'สีแดง' (sǐi-daeng) adalah...", "thai": "สีแดง", "roman": "sǐi-daeng", "options": ["Merah", "Biru", "Putih", "Hitam"], "answer": 0, "explain": "สีแดง (sǐi-daeng) berarti warna merah."},
        {"type": "matching", "prompt": "Cocokkan warna & ukuran pakaian:", "pairs": [{"thai": "สีขาว", "label": "Warna Putih"}, {"thai": "สีดำ", "label": "Warna Hitam"}, {"thai": "ตัวใหญ่", "label": "Ukuran Besar (L/XL)"}, {"thai": "ตัวเล็ก", "label": "Ukuran Kecil (S/M)"}], "explain": "Kata 'ตัว' (dtua) adalah kata bantu bilangan untuk pakaian dan hewan."},
        {"type": "builder", "prompt": "Susun pertanyaan: 'Apakah ada warna lain?'", "correctSentence": ["มี", "สี", "อื่น", "ไหม"], "options": ["มี", "สี", "อื่น", "ไหม", "แดง", "ใหญ่"], "explain": "มี (ada) + สี (warna) + อื่น (lain) + ไหม (apakah?)."}
    ]
}
LESSON_DATABASE["u3_boss"] = {
    "title": "Tantangan Pasar Chatuchak 🏆",
    "questions": [
        {"type": "choice", "prompt": "Bagaimana menawar 'Dua ratus Baht bisa tidak?'", "thai": "สองร้อยบาทได้ไหม", "roman": "sɔ̌ɔng-rɔ́ɔy bàat dâi mǎi", "options": ["สองร้อยบาทได้ไหม", "หนึ่งร้อยบาทแพง", "มีสีอื่นไหม", "อันนี้ไม่เอา"], "answer": 0, "explain": "สองร้อย (200) + บาท (Baht) + ได้ไหม (bisa tidak?)."},
        {"type": "builder", "prompt": "Susun keputusan beli: 'Saya ambil yang ini ya'", "correctSentence": ["เอา", "ตัว", "นี้", "ครับ"], "options": ["เอา", "ตัว", "นี้", "ครับ", "ค่ะ", "ลด"], "explain": "เอา (ambil) + ตัวนี้ (yang ini) + ครับ (partikel pria)."},
        {"type": "matching", "prompt": "Uji kemampuan belanja Anda:", "pairs": [{"thai": "เอาตัวนี้", "label": "Saya ambil yang ini"}, {"thai": "ไม่เอา", "label": "Tidak jadi ambil"}, {"thai": "ดูเฉยๆ", "label": "Cuma lihat-lihat dulu"}, {"thai": "ของแท้", "label": "Barang asli / original"}], "explain": "Selamat! Anda siap berbelanja cerdas di Chatuchak Weekend Market!"}
    ]
}

# --- UNIT 4 ---
LESSON_DATABASE["u4_l1"] = {
    "title": "Moda Transportasi",
    "questions": [
        {"type": "choice", "prompt": "Kendaraan roda tiga ikonik di jalanan Bangkok:", "thai": "รถตุ๊กตุ๊ก", "roman": "rót dtúk-dtúk", "options": ["รถตุ๊กตุ๊ก (Tuk-Tuk)", "รถแท็กซี่ (Taksi)", "รถไฟฟ้า (BTS Skytrain)", "รถเมล์ (Bus Kota)"], "answer": 0, "explain": "Tuk-Tuk adalah kendaraan roda tiga bermesin yang menjadi lambang wisata Bangkok."},
        {"type": "matching", "prompt": "Cocokkan moda angkutan di Bangkok:", "pairs": [{"thai": "รถแท็กซี่", "label": "Taksi Argo Meter"}, {"thai": "รถไฟฟ้า", "label": "Kereta BTS Skytrain / MRT"}, {"thai": "เรือด่วน", "label": "Perahu Cepat Chao Phraya"}, {"thai": "วินมอเตอร์ไซค์", "label": "Ojek Motor Jalanan"}], "explain": "Transportasi air perahu sungai Chao Phraya sangat cepat menghindari kemacetan."},
        {"type": "builder", "prompt": "Susun pertanyaan: 'Ke bandara berapa ongkosnya?'", "correctSentence": ["ไป", "สนามบิน", "เท่าไหร่"], "options": ["ไป", "สนามบิน", "เท่าไหร่", "โรงแรม", "ตรง"], "explain": "ไป (pergi ke) + สนามบิน (bandara) + เท่าไหร่ (berapa ongkosnya)."}
    ]
}
LESSON_DATABASE["u4_l2"] = {
    "title": "Arah & Belokan",
    "questions": [
        {"type": "choice", "prompt": "Apa arti dari 'เลี้ยวซ้าย' (líao sáai)?", "thai": "เลี้ยวซ้าย", "roman": "líao sáai", "options": ["Belok kiri", "Belok kanan", "Jalan lurus", "Berhenti di sini"], "answer": 0, "explain": "เลี้ยวซ้าย (líao sáai) berarti belok ke arah kiri."},
        {"type": "matching", "prompt": "Cocokkan navigasi arah jalan:", "pairs": [{"thai": "ตรงไป", "label": "Lurus terus ke depan"}, {"thai": "เลี้ยวขวา", "label": "Belok kanan"}, {"thai": "จอดที่นี่", "label": "Berhenti di sini"}, {"thai": "กลับรถ", "label": "Putar balik (U-turn)"}], "explain": "Ungkapan 'จอดที่นี่ด้วยครับ' sangat penting saat naik taksi atau bus."},
        {"type": "builder", "prompt": "Susun petunjuk: 'Lurus ke depan lalu belok kiri'", "correctSentence": ["ตรง", "ไป", "แล้ว", "เลี้ยวซ้าย"], "options": ["ตรง", "ไป", "แล้ว", "เลี้ยวซ้าย", "จอด", "ขวา"], "explain": "ตรงไป (lurus terus) + แล้ว (lalu) + เลี้ยวซ้าย (belok kiri)."}
    ]
}
LESSON_DATABASE["u4_l3"] = {
    "title": "Menanyakan Lokasi",
    "questions": [
        {"type": "choice", "prompt": "Bagaimana menanyakan 'Toilet di sebelah mana?'", "thai": "ห้องน้ำอยู่ที่ไหน", "roman": "hɔ̂ng-náam yùu thîi nǎi", "options": ["ห้องน้ำอยู่ที่ไหน", "สถานีอยู่ที่ไหน", "โรงแรมอยู่ที่ไหน", "ร้านอาหารอยู่ที่ไหน"], "answer": 0, "explain": "ห้องน้ำ (toilet) + อยู่ที่ไหน (berada di mana?)."},
        {"type": "matching", "prompt": "Cocokkan letak & jarak posisi:", "pairs": [{"thai": "ไกลไหม", "label": "Apakah jauh?"}, {"thai": "อยู่ใกล้ๆ", "label": "Ada di dekat sini"}, {"thai": "อยู่ข้างหน้า", "label": "Ada di depan sana"}, {"thai": "ข้ามถนน", "label": "Menyeberang jalan raya"}], "explain": "Kata 'ใกล้' (glai = dekat) dan 'ไกล' (glai = jauh) dibedakan oleh nada suaranya!"},
        {"type": "builder", "prompt": "Susun pertanyaan: 'Stasiun kereta api di mana?'", "correctSentence": ["สถานี", "รถไฟ", "อยู่", "ที่ไหน"], "options": ["สถานี", "รถไฟ", "อยู่", "ที่ไหน", "ห้องน้ำ", "ไกล"], "explain": "สถานีรถไฟ (stasiun kereta) + อยู่ที่ไหน (di mana?)."}
    ]
}
LESSON_DATABASE["u4_boss"] = {
    "title": "Tantangan Transportasi 🏆",
    "questions": [
        {"type": "choice", "prompt": "Sebelum taksi jalan, mintalah menyalakan meter argo dengan...", "thai": "เปิดมิเตอร์ด้วยครับ", "roman": "pə̀ət mí-dtə̂ə dûay khráp", "options": ["เปิดมิเตอร์ด้วยครับ", "ขับเร็วๆครับ", "เลี้ยวซ้ายครับ", "ขอบคุณครับ"], "answer": 0, "explain": "Di Bangkok, selalu pastikan sopir menyalakan argo meter (เปิดมิเตอร์)."},
        {"type": "builder", "prompt": "Susun instruksi: 'Tolong berhenti di depan hotel'", "correctSentence": ["จอด", "หน้า", "โรงแรม", "ด้วย", "ครับ"], "options": ["จอด", "หน้า", "โรงแรม", "ด้วย", "ครับ", "เลี้ยว"], "explain": "จอด (berhenti) + หน้าโรงแรม (depan hotel) + ด้วยครับ (tolong)."},
        {"type": "matching", "prompt": "Uji kosakata transportasi Anda:", "pairs": [{"thai": "ทางด่วน", "label": "Jalan tol express"}, {"thai": "รถติดมาก", "label": "Macet parah"}, {"thai": "ถึงแล้ว", "label": "Sudah sampai di tujuan"}, {"thai": "ค่าโดยสาร", "label": "Tarif ongkos perjalanan"}], "explain": "Hebat! Anda menguasai seluruh navigasi transportasi Bangkok!"}
    ]
}

# --- UNIT 5 ---
LESSON_DATABASE["u5_l1"] = {
    "title": "Jam & Menit Thai",
    "questions": [
        {"type": "choice", "prompt": "Bagaimana menanyakan 'Sudah jam berapa sekarang?'", "thai": "ตอนนี้กี่โมงแล้ว", "roman": "dtɔɔn-níi gìi moong láew", "options": ["ตอนนี้กี่โมงแล้ว", "วันนี้วันอะไร", "อยู่ที่ไหน", "ราคาเท่าไหร่"], "answer": 0, "explain": "ตอนนี้ (sekarang) + กี่โมงแล้ว (jam berapa sudah?)."},
        {"type": "matching", "prompt": "Cocokkan pembagian waktu khas Thai:", "pairs": [{"thai": "แปดโมงเช้า", "label": "Jam 8 pagi"}, {"thai": "เที่ยงวัน", "label": "Jam 12 siang tepat"}, {"thai": "บ่ายสองโมง", "label": "Jam 2 siang"}, {"thai": "สองทุ่ม", "label": "Jam 8 malam (20.00)"}], "explain": "Bahasa Thai menggunakan sistem 6 jam unik (เช้า / บ่าย / เย็น / ทุ่ม)."},
        {"type": "builder", "prompt": "Susun: 'Sekarang jam berapa?'", "correctSentence": ["ตอน", "นี้", "กี่", "โมง"], "options": ["ตอน", "นี้", "กี่", "โมง", "วัน", "แล้ว"], "explain": "ตอน (saat) + นี้ (ini) + กี่ (berapa) + โมง (jam)."}
    ]
}
LESSON_DATABASE["u5_l2"] = {
    "title": "Hari & Kalender",
    "questions": [
        {"type": "choice", "prompt": "Hari pertama dalam seminggu 'วันจันทร์' adalah...", "thai": "วันจันทร์", "roman": "wan jan", "options": ["Senin", "Selasa", "Rabu", "Minggu"], "answer": 0, "explain": "วันจันทร์ (wan jan) melambangkan hari Senin, berwarna kuning."},
        {"type": "matching", "prompt": "Cocokkan penunjuk hari penting:", "pairs": [{"thai": "วันนี้", "label": "Hari ini"}, {"thai": "พรุ่งนี้", "label": "Besok"}, {"thai": "เมื่อวาน", "label": "Kemarin"}, {"thai": "วันหยุด", "label": "Hari libur / weekend"}], "explain": "Orang Thailand mengaitkan setiap hari dengan warna keberuntungan tersendiri."},
        {"type": "builder", "prompt": "Susun pertanyaan: 'Hari ini hari apa?'", "correctSentence": ["วัน", "นี้", "วัน", "อะไร"], "options": ["วัน", "นี้", "วัน", "อะไร", "พรุ่งนี้", "กี่โมง"], "explain": "วันนี้ (hari ini) + วันอะไร (hari apa?)."}
    ]
}
LESSON_DATABASE["u5_l3"] = {
    "title": "Membuat Janji Temu",
    "questions": [
        {"type": "choice", "prompt": "Bagaimana menanyakan 'Apakah Anda sedang ada waktu / senggang?'", "thai": "คุณว่างไหม", "roman": "khun wâang mǎi", "options": ["คุณว่างไหม", "คุณชื่ออะไร", "ไปไหนมา", "สบายดีไหม"], "answer": 0, "explain": "ว่าง (wâang) berarti senggang / kosong / tidak sibuk."},
        {"type": "matching", "prompt": "Cocokkan frasa koordinasi janji:", "pairs": [{"thai": "ไม่ว่าง", "label": "Sedang sibuk / tidak senggang"}, {"thai": "สะดวกไหม", "label": "Apakah leluasa / sempat?"}, {"thai": "เจอกัน", "label": "Saling bertemu"}, {"thai": "ตรงเวลา", "label": "Tepat waktu"}], "explain": "Ungkapan 'สะดวกไหม' sangat santun digunakan sebelum menelepon teman."},
        {"type": "builder", "prompt": "Susun janji: 'Sampai bertemu besok pagi'", "correctSentence": ["เจอกัน", "พรุ่งนี้", "เช้า"], "options": ["เจอกัน", "พรุ่งนี้", "เช้า", "เย็น", "เมื่อวาน"], "explain": "เจอกัน (bertemu) + พรุ่งนี้เช้า (besok pagi)."}
    ]
}
LESSON_DATABASE["u5_boss"] = {
    "title": "Tantangan Janji Temu 🏆",
    "questions": [
        {"type": "choice", "prompt": "Bagaimana mengatakan 'Janjian bertemu di mana enaknya?'", "thai": "นัดเจอกันที่ไหนดี", "roman": "nát jəə gan thîi nǎi dii", "options": ["นัดเจอกันที่ไหนดี", "วันนี้กี่โมง", "ไปสถานีรถไฟ", "อาหารอร่อยมาก"], "answer": 0, "explain": "นัด (janji) + เจอกัน (ketemu) + ที่ไหนดี (enaknya di mana?)."},
        {"type": "builder", "prompt": "Susun konfirmasi: 'Besok Anda ada waktu tidak?'", "correctSentence": ["พรุ่งนี้", "คุณ", "ว่าง", "ไหม"], "options": ["พรุ่งนี้", "คุณ", "ว่าง", "ไหม", "เมื่อวาน", "เจอกัน"], "explain": "พรุ่งนี้ (besok) + คุณ (kamu/Anda) + ว่างไหม (senggang tidak?)."},
        {"type": "matching", "prompt": "Uji istilah waktu & janji Anda:", "pairs": [{"thai": "สิบโมงเช้า", "label": "Jam 10 pagi"}, {"thai": "รอสักครู่", "label": "Tunggu sebentar ya"}, {"thai": "เลื่อนนัด", "label": "Mengundur waktu janji"}, {"thai": "มาสาย", "label": "Datang terlambat"}], "explain": "Luar biasa! Anda menguasai pengaturan waktu dan janji temu dalam bahasa Thai!"}
    ]
}

# --- UNIT 6 ---
LESSON_DATABASE["u6_l1"] = {
    "title": "Proses Check-In",
    "questions": [
        {"type": "choice", "prompt": "Saat tiba di meja resepsionis, katakan...", "thai": "ผมจองห้องไว้แล้วครับ", "roman": "phǒm jɔɔng hɔ̂ng wái láew khráp", "options": ["ผมจองห้องไว้แล้วครับ (Saya sudah pesan kamar)", "ผมอยากซื้อบ้านครับ (Mau beli rumah)", "ห้องน้ำอยู่ที่ไหน (Di mana toilet)", "ขอน้ำเปล่าครับ (Minta air)"], "answer": 0, "explain": "จองห้องไว้แล้ว (jɔɔng hɔ̂ng wái láew) memberi tahu bahwa reservasi sudah dibuat."},
        {"type": "matching", "prompt": "Cocokkan dokumen & proses check-in:", "pairs": [{"thai": "เช็คอิน", "label": "Proses Check-in masuk"}, {"thai": "พาสปอร์ต", "label": "Buku Paspor"}, {"thai": "กุญแจห้อง", "label": "Kunci kamar / Kartu akses"}, {"thai": "อาหารเช้า", "label": "Sarapan pagi (Breakfast)"}], "explain": "Resepsionis biasanya meminjam paspor untuk registrasi tamu asing."},
        {"type": "builder", "prompt": "Susun permintaan: 'Bisa minta kartu kunci kamar?'", "correctSentence": ["ขอ", "กุญแจ", "ห้อง", "ครับ"], "options": ["ขอ", "กุญแจ", "ห้อง", "ครับ", "ค่ะ", "เช็คอิน"], "explain": "ขอ (minta) + กุญแจห้อง (kunci kamar) + ครับ (partikel sopan)."}
    ]
}
LESSON_DATABASE["u6_l2"] = {
    "title": "Fasilitas & Kamar",
    "questions": [
        {"type": "choice", "prompt": "Bagaimana menanyakan kata sandi Wi-Fi hotel?", "thai": "รหัสไวไฟคืออะไร", "roman": "rá-hàt wai-fai kheuu a-rai", "options": ["รหัสไวไฟคืออะไร", "ห้องพักเบอร์อะไร", "อาหารเช้ากี่โมง", "สระว่ายน้ำปิดกี่โมง"], "answer": 0, "explain": "รหัส (kode / sandi) + ไวไฟ (Wi-Fi) + คืออะไร (adalah apa?)."},
        {"type": "matching", "prompt": "Cocokkan keluhan fasilitas kamar:", "pairs": [{"thai": "แอร์ไม่เย็น", "label": "AC tidak dingin"}, {"thai": "น้ำอุ่นไม่ทำงาน", "label": "Air pemanas hangat mati"}, {"thai": "ขอผ้าเช็ดตัวเพิ่ม", "label": "Minta tambahan handuk"}, {"thai": "สระว่ายน้ำ", "label": "Kolam renang hotel"}], "explain": "Ungkapan 'แอร์ไม่เย็น' sangat lazim bila remote AC butuh bantuan staf hotel."},
        {"type": "builder", "prompt": "Susun pertanyaan: 'Minta kata sandi Wi-Fi tolong'", "correctSentence": ["ขอ", "รหัส", "ไวไฟ", "หน่อย"], "options": ["ขอ", "รหัส", "ไวไฟ", "หน่อย", "แอร์", "ห้อง"], "explain": "ขอ (minta) + รหัสไวไฟ (password wifi) + หน่อย (tolong)."}
    ]
}
LESSON_DATABASE["u6_l3"] = {
    "title": "Layanan & Titip Koper",
    "questions": [
        {"type": "choice", "prompt": "Setelah check-out, cara menitipkan koper adalah...", "thai": "ฝากกระเป๋าได้ไหมครับ", "roman": "fàak grà-pǎo dâi mǎi khráp", "options": ["ฝากกระเป๋าได้ไหมครับ (Bisa titip koper?)", "ขายกระเป๋าครับ (Jual tas)", "กระเป๋าหายครับ (Tas hilang)", "ซื้อกระเป๋าครับ (Beli tas)"], "answer": 0, "explain": "ฝาก (menitipkan) + กระเป๋า (koper/tas) + ได้ไหม (bisa tidak?)."},
        {"type": "matching", "prompt": "Cocokkan layanan hotel:", "pairs": [{"thai": "เช็คเอาท์", "label": "Check-out keluar kamar"}, {"thai": "เรียกรถแท็กซี่", "label": "Memanggilkan taksi"}, {"thai": "ชั้นบน", "label": "Lantai atas"}, {"thai": "ลิฟต์", "label": "Lift elevator"}], "explain": "Sebagian besar hotel di Bangkok menyediakan penitipan koper gratis seharian."},
        {"type": "builder", "prompt": "Susun: 'Bisa menitipkan tas tidak?'", "correctSentence": ["ฝาก", "กระเป๋า", "ได้", "ไหม"], "options": ["ฝาก", "กระเป๋า", "ได้", "ไหม", "เช็คอิน", "กุญแจ"], "explain": "ฝาก (titip) + กระเป๋า (tas/koper) + ได้ไหม (bisa tidak?)."}
    ]
}
LESSON_DATABASE["u6_boss"] = {
    "title": "Tantangan Menginap Hotel 🏆",
    "questions": [
        {"type": "choice", "prompt": "Menanyakan jam buka sarapan pagi di hotel:", "thai": "อาหารเช้าเริ่มกี่โมงครับ", "roman": "aa-hǎan cháo rə̂əm gìi moong khráp", "options": ["อาหารเช้าเริ่มกี่โมงครับ", "ร้านอาหารปิดกี่โมง", "เช็คอินกี่โมง", "อาหารอร่อยไหม"], "answer": 0, "explain": "อาหารเช้า (sarapan) + เริ่ม (mulai) + กี่โมง (jam berapa)."},
        {"type": "builder", "prompt": "Susun permintaan: 'Bantu panggilkan taksi ke bandara'", "correctSentence": ["ช่วย", "เรียก", "แท็กซี่", "ไป", "สนามบิน"], "options": ["ช่วย", "เรียก", "แท็กซี่", "ไป", "สนามบิน", "โรงแรม"], "explain": "ช่วยเรียกแท็กซี่ (tolong panggil taksi) + ไปสนามบิน (ke bandara)."},
        {"type": "matching", "prompt": "Uji kosakata hotel Anda:", "pairs": [{"thai": "ห้องเตียงเดี่ยว", "label": "Kamar 1 ranjang besar (King/Queen)"}, {"thai": "ห้ามสูบบุหรี่", "label": "Dilarang merokok"}, {"thai": "รูมเซอร์วิส", "label": "Layanan antar makanan ke kamar"}, {"thai": "ใบเสร็จ", "label": "Kuitansi bukti pembayaran"}], "explain": "Selamat! Anda lancar berkomunikasi di seluruh hotel Thailand!"}
    ]
}

# --- UNIT 7 ---
LESSON_DATABASE["u7_l1"] = {
    "title": "Etika Busana di Kuil",
    "questions": [
        {"type": "choice", "prompt": "Sebelum memasuki aula utama kuil Buddha (Ubosot), wajib...", "thai": "ถอดรองเท้า", "roman": "thɔ̀ɔt rɔɔng-tháo", "options": ["ถอดรองเท้า (Lepas alas kaki)", "เปิดหมวก (Buka topi)", "วิ่งเข้า (Lari masuk)", "ส่งเสียงดัง (Bicara keras)"], "answer": 0, "explain": "ถอดรองเท้า (lepas sepatu) adalah simbol penghormatan tertinggi di kuil Thai."},
        {"type": "matching", "prompt": "Cocokkan etika kuil Buddha:", "pairs": [{"thai": "วัด", "label": "Kuil Buddha (Wat)"}, {"thai": "แต่งกายสุภาพ", "label": "Berbusana sopan tertutup"}, {"thai": "ห้ามถ่ายรูป", "label": "Dilarang mengambil foto"}, {"thai": "ความเคารพ", "label": "Rasa hormat dan santun"}], "explain": "Celana pendek dan baju tanpa lengan tidak diperbolehkan masuk Grand Palace."},
        {"type": "builder", "prompt": "Susun papan petunjuk: 'Mohon lepas alas kaki Anda'", "correctSentence": ["กรุณา", "ถอด", "รองเท้า", "ด้วย"], "options": ["กรุณา", "ถอด", "รองเท้า", "ด้วย", "ห้าม", "ใส่"], "explain": "กรุณา (mohon) + ถอดรองเท้า (lepas sepatu) + ด้วย (tolong)."}
    ]
}
LESSON_DATABASE["u7_l2"] = {
    "title": "Tradisi & Festival",
    "questions": [
        {"type": "choice", "prompt": "Tahun baru tradisional Thailand yang dirayakan dengan perang air:", "thai": "วันสงกรานต์", "roman": "wan sǒng-graan", "options": ["วันสงกรานต์ (Songkran)", "ลอยกระทง (Loy Krathong)", "วันวิสาขบูชา (Vesak)", "วันปีใหม่ (Tahun Baru Masehi)"], "answer": 0, "explain": "Songkran (13-15 April) adalah perayaan tahun baru Thai dengan ritual pembersihan air suci."},
        {"type": "matching", "prompt": "Cocokkan tradisi keagamaan & festival:", "pairs": [{"thai": "ไหว้พระ", "label": "Memberi hormat/sembahyang"}, {"thai": "ดอกบัว", "label": "Bunga teratai persembahan"}, {"thai": "ลอยกระทง", "label": "Melarungkan wadah lentera daun pisang"}, {"thai": "ทำบุญ", "label": "Berbuat kebajikan (Make merit)"}], "explain": "Bunga teratai melambangkan kemurnian hati dalam ajaran Buddha."},
        {"type": "builder", "prompt": "Susun ajakan: 'Ayo pergi sembahyang bersama'", "correctSentence": ["ไป", "ไหว้", "พระ", "กัน"], "options": ["ไป", "ไหว้", "พระ", "กัน", "วัด", "ทำบุญ"], "explain": "ไป (pergi) + ไหว้พระ (sembahyang) + กัน (bersama-sama)."}
    ]
}
LESSON_DATABASE["u7_l3"] = {
    "title": "Mengagumi Arsitektur",
    "questions": [
        {"type": "choice", "prompt": "Ungkapan untuk mengagumi keindahan arsitektur kuil:", "thai": "สวยงามมาก", "roman": "sǔay-ngaam mâak", "options": ["สวยงามมาก (Sangat indah)", "เก่าเกินไป (Terlalu tua)", "แพงมาก (Sangat mahal)", "ร้อนมาก (Sangat panas)"], "answer": 0, "explain": "สวยงามมาก (sǔay-ngaam mâak) memuji keelokan seni ukiran dan ornamen kuil."},
        {"type": "matching", "prompt": "Cocokkan unsur arsitektur kuil Thai:", "pairs": [{"thai": "เก่าแก่", "label": "Kuno bersejarah"}, {"thai": "พระพุทธรูป", "label": "Rupang arca Buddha"}, {"thai": "เจดีย์", "label": "Stupa Chedi berlapis emas"}, {"thai": "ศิลปะ", "label": "Karya seni & ukiran"}], "explain": "Chedi emas Wat Phra Kaew memantulkan cahaya matahari Bangkok yang megah."},
        {"type": "builder", "prompt": "Susun kekaguman: 'Kuil ini sangat indah'", "correctSentence": ["วัด", "นี้", "สวยงาม", "มาก"], "options": ["วัด", "นี้", "สวยงาม", "มาก", "พระ", "เก่า"], "explain": "วัด (kuil) + นี้ (ini) + สวยงาม (indah) + มาก (sekali)."}
    ]
}
LESSON_DATABASE["u7_boss"] = {
    "title": "Tantangan Etika Kuil 🏆",
    "questions": [
        {"type": "choice", "prompt": "Aturan penting saat melangkahi pintu masuk kuil:", "thai": "ห้ามเหยียบธรณีประตู", "roman": "hâam yìap thɔɔ-rá-nii bprà-dtuu", "options": ["ห้ามเหยียบธรณีประตู (Jangan injak kayu ambang pintu)", "ห้ามมองพระ (Jangan lihat patung)", "ห้ามเดินเร็ว (Jangan jalan cepat)", "ห้ามไหว้ (Jangan menyembah)"], "answer": 0, "explain": "Secara adat istiadat, ambang pintu dipercaya sebagai tempat tinggal roh pelindung."},
        {"type": "builder", "prompt": "Susun nasihat etika: 'Berpakaianlah dengan sopan rapi'", "correctSentence": ["แต่งกาย", "ให้", "สุภาพ", "เรียบร้อย"], "options": ["แต่งกาย", "ให้", "สุภาพ", "เรียบร้อย", "ถอด", "วัด"], "explain": "แต่งกาย (berpakaian) + ให้สุภาพเรียบร้อย (dengan sopan rapi)."},
        {"type": "matching", "prompt": "Uji wawasan budaya Anda:", "pairs": [{"thai": "พระสงฆ์", "label": "Biksu Buddha (Sangha)"}, {"thai": "สมาธิ", "label": "Meditasi hening"}, {"thai": "ศักดิ์สิทธิ์", "label": "Suci keramat"}, {"thai": "ศรัทธา", "label": "Keyakinan ketulusan iman"}], "explain": "Hebat! Anda menguasai tata krama dan etika luhur mengunjungi kuil di Thailand!"}
    ]
}

# --- UNIT 8 ---
LESSON_DATABASE["u8_l1"] = {
    "title": "Keluhan & Gejala Sakit",
    "questions": [
        {"type": "choice", "prompt": "Apa arti keluhan medis 'ปวดหัว' (bpùat-hǔa)?", "thai": "ปวดหัว", "roman": "bpùat-hǔa", "options": ["Sakit kepala", "Sakit perut", "Demam panas", "Sakit gigi"], "answer": 0, "explain": "ปวด (sakit nyeri) + หัว (kepala) = bpùat-hǔa (sakit kepala)."},
        {"type": "matching", "prompt": "Cocokkan gejala keluhan kesehatan:", "pairs": [{"thai": "ปวดท้อง", "label": "Sakit perut nyeri"}, {"thai": "เป็นไข้", "label": "Mengalami demam panas"}, {"thai": "เจ็บคอ", "label": "Radang sakit tenggorokan"}, {"thai": "มีน้ำมูก", "label": "Hidung berair / flu pilek"}], "explain": "Menyampaikan gejala dengan jelas membantu apoteker memberi obat yang tepat."},
        {"type": "builder", "prompt": "Susun keluhan: 'Saya merasa sakit kepala'", "correctSentence": ["ฉัน", "รู้สึก", "ปวด", "หัว"], "options": ["ฉัน", "รู้สึก", "ปวด", "หัว", "ท้อง", "ยา"], "explain": "ฉัน (saya) + รู้สึก (merasa) + ปวดหัว (sakit kepala)."}
    ]
}
LESSON_DATABASE["u8_l2"] = {
    "title": "Beli Obat di Apotek",
    "questions": [
        {"type": "choice", "prompt": "Toko obat / apotek dalam bahasa Thai disebut...", "thai": "ร้านขายยา", "roman": "ráan khǎai yaa", "options": ["ร้านขายยา (Apotek)", "โรงพยาบาล (Rumah Sakit)", "คลินิก (Klinik)", "ร้านสะดวกซื้อ (Minimarket)"], "answer": 0, "explain": "ร้าน (toko) + ขาย (jual) + ยา (obat) = ร้านขายยา."},
        {"type": "matching", "prompt": "Cocokkan istilah aturan minum obat:", "pairs": [{"thai": "ยาแก้ปวด", "label": "Obat pereda rasa sakit (Painkiller)"}, {"thai": "ยาลดไข้", "label": "Obat penurun demam (Paracetamol)"}, {"thai": "หลังอาหาร", "label": "Diminum sesudah makan"}, {"thai": "วันละสองครั้ง", "label": "Dua kali dalam sehari"}], "explain": "Selalu perhatikan petunjuk 'หลังอาหาร' (sesudah makan) atau 'ก่อนอาหาร' (sebelum makan)."},
        {"type": "builder", "prompt": "Susun aturan minum: 'Minum obat sesudah makan'", "correctSentence": ["ทาน", "ยา", "หลัง", "อาหาร"], "options": ["ทาน", "ยา", "หลัง", "อาหาร", "ก่อน", "เม็ด"], "explain": "ทานยา (minum obat) + หลังอาหาร (sesudah makan)."}
    ]
}
LESSON_DATABASE["u8_l3"] = {
    "title": "Alergi & Keadaan Darurat",
    "questions": [
        {"type": "choice", "prompt": "Bila Anda alergi terhadap makanan laut, katakan...", "thai": "แพ้อาหารทะเล", "roman": "pháe aa-hǎan thá-lee", "options": ["แพ้อาหารทะเล (Alergi seafood)", "ชอบอาหารทะเล (Suka seafood)", "ไม่ชอบกินข้าว (Tak suka makan)", "อาหารทะเลอร่อย (Seafood enak)"], "answer": 0, "explain": "แพ้ (pháe) berarti alergi terhadap sesuatu."},
        {"type": "matching", "prompt": "Cocokkan kata situasi darurat:", "pairs": [{"thai": "แพ้ถั่ว", "label": "Alergi kacang-kacangan"}, {"thai": "ช่วยด้วย", "label": "Tolong! (Minta bantuan darurat)"}, {"thai": "โรงพยาบาล", "label": "Rumah Sakit"}, {"thai": "รถพยาบาล", "label": "Mobil Ambulans"}], "explain": "Nomor darurat medis ambulans di Thailand adalah 1669."},
        {"type": "builder", "prompt": "Susun seruan darurat: 'Tolong panggilkan mobil ambulans'", "correctSentence": ["ช่วย", "ด้วย", "เรียกรถ", "พยาบาล"], "options": ["ช่วย", "ด้วย", "เรียกรถ", "พยาบาล", "ยา", "หมอ"], "explain": "ช่วยด้วย (tolong!) + เรียกรถพยาบาล (panggilkan mobil ambulans)."}
    ]
}
LESSON_DATABASE["u8_boss"] = {
    "title": "Tantangan Medis & Obat 🏆",
    "questions": [
        {"type": "choice", "prompt": "Menanyakan dosis aturan pakai obat:", "thai": "ยานี้ทานอย่างไรครับ", "roman": "yaa níi thaan yàang-rai khráp", "options": ["ยานี้ทานอย่างไรครับ", "ยานี้ราคาเท่าไหร่", "ร้านยาปิดกี่โมง", "หมออยู่ไหมครับ"], "answer": 0, "explain": "ยานี้ (obat ini) + ทานอย่างไร (diminum bagaimana caranya)."},
        {"type": "builder", "prompt": "Susun permintaan: 'Minta obat pereda sakit kepala'", "correctSentence": ["ขอ", "ยา", "แก้", "ปวด", "หัว"], "options": ["ขอ", "ยา", "แก้", "ปวด", "หัว", "ท้อง", "ไข้"], "explain": "ขอ (minta) + ยาแก้ปวดหัว (obat pereda sakit kepala)."},
        {"type": "matching", "prompt": "Uji istilah kesehatan Anda:", "pairs": [{"thai": "ก่อนอาหาร", "label": "Sebelum makan"}, {"thai": "พักผ่อนมากๆ", "label": "Banyaklah istirahat"}, {"thai": "หายไวๆนะ", "label": "Semoga lekas sembuh (Get well soon)"}, {"thai": "ประกันสุขภาพ", "label": "Asuransi kesehatan perjalanan"}], "explain": "Luar biasa! Anda siap mengatasi segala situasi medis dengan tenang di Thailand!"}
    ]
}

# --- UNIT 9 ---
LESSON_DATABASE["u9_l1"] = {
    "title": "Deskripsi Cuaca Harian",
    "questions": [
        {"type": "choice", "prompt": "Bagaimana mengatakan 'Hari ini cuaca sangat panas'?", "thai": "วันนี้อากาศร้อนมาก", "roman": "wan-níi aa-gàat rɔ́ɔn mâak", "options": ["วันนี้อากาศร้อนมาก", "วันนี้หนาวมาก", "ฝนตกหนักมาก", "ลมพัดสบาย"], "answer": 0, "explain": "วันนี้ (hari ini) + อากาศ (cuaca) + ร้อนมาก (panas sekali)."},
        {"type": "matching", "prompt": "Cocokkan fenomena cuaca harian:", "pairs": [{"thai": "ฝนตก", "label": "Hujan turun"}, {"thai": "ลมแรง", "label": "Angin berhembus kencang"}, {"thai": "ท้องฟ้าแจ่มใส", "label": "Langit cerah berawan"}, {"thai": "แดดจัด", "label": "Terik matahari menyengat"}], "explain": "Bangkok memiliki iklim tropis cerah sepanjang tahun."},
        {"type": "builder", "prompt": "Susun kondisi: 'Hari ini hujan turun deras'", "correctSentence": ["วัน", "นี้", "ฝน", "ตก", "หนัก"], "options": ["วัน", "นี้", "ฝน", "ตก", "หนัก", "ร้อน", "ลม"], "explain": "วันนี้ (hari ini) + ฝนตกหนัก (hujan turun lebat/deras)."}
    ]
}
LESSON_DATABASE["u9_l2"] = {
    "title": "3 Musim di Thailand",
    "questions": [
        {"type": "choice", "prompt": "Musim penghujan di Thailand disebut...", "thai": "ฤดูฝน", "roman": "réu-duu fǒn", "options": ["ฤดูฝน (Musim Hujan)", "ฤดูร้อน (Musim Panas)", "ฤดูหนาว (Musim Sejuk)", "ฤดูใบไม้ผลิ (Semi)"], "answer": 0, "explain": "Thailand memiliki 3 musim utama: Panas (ร้อน), Hujan (ฝน), dan Sejuk (หนาว)."},
        {"type": "matching", "prompt": "Cocokkan perlengkapan musim tropis:", "pairs": [{"thai": "ฤดูร้อน", "label": "Musim Panas Kemarau (Mar-Mei)"}, {"thai": "ฤดูหนาว", "label": "Musim Sejuk Nyaman (Nov-Feb)"}, {"thai": "พกร่ม", "label": "Membawa payung lindung"}, {"thai": "เสื้อกันฝน", "label": "Jas hujan penahan basah"}], "explain": "Musim sejuk (ฤดูหนาว) adalah waktu favorit wisatawan berkunjung ke Thailand."},
        {"type": "builder", "prompt": "Susun peringatan: 'Jangan lupa membawa payung'", "correctSentence": ["อย่า", "ลืม", "พก", "ร่ม"], "options": ["อย่า", "ลืม", "พก", "ร่ม", "ฝน", "ร้อน"], "explain": "อย่าลืม (jangan lupa) + พกร่ม (membawa payung)."}
    ]
}
LESSON_DATABASE["u9_l3"] = {
    "title": "Pulau & Pantai Tropis",
    "questions": [
        {"type": "choice", "prompt": "Pulau eksotis terkenal di Thailand selatan:", "thai": "เกาะสมุย", "roman": "gɔ̀ sà-mǔi", "options": ["เกาะสมุย (Koh Samui)", "เชียงใหม่ (Chiang Mai)", "อยุธยา (Ayutthaya)", "กรุงเทพฯ (Bangkok)"], "answer": 0, "explain": "Koh Samui dan Phuket adalah destinasi pulau tropis kelas dunia di Thailand."},
        {"type": "matching", "prompt": "Cocokkan kegiatan liburan pantai:", "pairs": [{"thai": "ทะเล", "label": "Laut samudera"}, {"thai": "ชายหาด", "label": "Pantai pasir putih"}, {"thai": "ว่ายน้ำ", "label": "Berenang di air"}, {"thai": "พระอาทิตย์ตก", "label": "Matahari terbenam senja (Sunset)"}], "explain": "Kata 'เกาะ' (gɔ̀) berarti pulau dalam bahasa Thai."},
        {"type": "builder", "prompt": "Susun ajakan: 'Ayo pergi berlibur ke laut bersama'", "correctSentence": ["ไป", "เที่ยว", "ทะเล", "กัน"], "options": ["ไป", "เที่ยว", "ทะเล", "กัน", "ว่ายน้ำ", "เกาะ"], "explain": "ไปเที่ยว (pergi jalan-jalan) + ทะเล (laut) + กัน (bersama)."}
    ]
}
LESSON_DATABASE["u9_boss"] = {
    "title": "Tantangan Rencana Cuaca 🏆",
    "questions": [
        {"type": "choice", "prompt": "Prakiraan cuaca dalam bahasa Thai disebut...", "thai": "พยากรณ์อากาศ", "roman": "phá-yaa-gɔɔn aa-gàat", "options": ["พยากรณ์อากาศ", "โทรทัศน์", "หนังสือพิมพ์", "การเดินทาง"], "answer": 0, "explain": "พยากรณ์อากาศ (prakiraan cuaca) membantu merencanakan tur harian Anda."},
        {"type": "builder", "prompt": "Susun pengamatan: 'Langit hari ini sangat cerah'", "correctSentence": ["ท้องฟ้า", "วัน", "นี้", "แจ่มใส", "มาก"], "options": ["ท้องฟ้า", "วัน", "นี้", "แจ่มใส", "มาก", "ฝน", "ตก"], "explain": "ท้องฟ้า (langit) + วันนี้ (hari ini) + แจ่มใสมาก (sangat cerah ceria)."},
        {"type": "matching", "prompt": "Uji kosakata alam & cuaca:", "pairs": [{"thai": "คลื่นลมสงบ", "label": "Ombak laut tenang damai"}, {"thai": "เช่าเรือ", "label": "Menyewa perahu boat"}, {"thai": "ดำน้ำ", "label": "Menyelam snorkeling / diving"}, {"thai": "ธรรมชาติ", "label": "Keasrian alam semesta"}], "explain": "Hebat! Anda menguasai topik cuaca dan wisata pulau tropis Thailand!"}
    ]
}

# --- UNIT 10 ---
LESSON_DATABASE["u10_l1"] = {
    "title": "Kegiatan Waktu Luang",
    "questions": [
        {"type": "choice", "prompt": "Apa arti hobi 'ชอบฟังเพลง' (chɔ̂ɔp fang phleeng)?", "thai": "ชอบฟังเพลง", "roman": "chɔ̂ɔp fang phleeng", "options": ["Suka mendengarkan musik", "Suka nonton film", "Suka membaca buku", "Suka memasak"], "answer": 0, "explain": "ชอบ (suka) + ฟังเพลง (mendengarkan lagu musik)."},
        {"type": "matching", "prompt": "Cocokkan ragam hobi & waktu luang:", "pairs": [{"thai": "ดูหนัง", "label": "Menonton film bioskop"}, {"thai": "เล่นกีฬา", "label": "Bermain olahraga"}, {"thai": "ถ่ายรูป", "label": "Memotret fotografi"}, {"thai": "ท่องเที่ยว", "label": "Traveling jalan-jalan"}], "explain": "Frasa 'เวลาว่าง' (wee-laa wâang) berarti waktu senggang."},
        {"type": "builder", "prompt": "Susun: 'Waktu luang saya suka membaca buku'", "correctSentence": ["เวลา", "ว่าง", "ชอบ", "อ่าน", "หนังสือ"], "options": ["เวลา", "ว่าง", "ชอบ", "อ่าน", "หนังสือ", "ดู", "เพลง"], "explain": "เวลาว่าง (waktu luang) + ชอบ (suka) + อ่านหนังสือ (membaca buku)."}
    ]
}
LESSON_DATABASE["u10_l2"] = {
    "title": "Menanyakan Minat Teman",
    "questions": [
        {"type": "choice", "prompt": "Bagaimana menanyakan 'Apa yang suka Anda lakukan di waktu senggang?'", "thai": "คุณชอบทำอะไรเวลาว่าง", "roman": "khun chɔ̂ɔp tham a-rai wee-laa wâang", "options": ["คุณชอบทำอะไรเวลาว่าง", "คุณทำงานที่ไหน", "คุณอายุเท่าไหร่", "คุณชอบกินอะไร"], "answer": 0, "explain": "คุณ (Anda) + ชอบทำอะไร (suka melakukan apa) + เวลาว่าง (waktu luang)."},
        {"type": "matching", "prompt": "Cocokkan minat rekreasi:", "pairs": [{"thai": "อาหารโปรด", "label": "Hidangan makanan favorit"}, {"thai": "ร้องเพลง", "label": "Menyanyi lagu karaoke"}, {"thai": "วาดรูป", "label": "Melukis gambar seni"}, {"thai": "ทำอาหาร", "label": "Memasak kuliner"}], "explain": "Orang Thai sangat senang berkaraoke (ร้องเพลง) bersama kawan!"},
        {"type": "builder", "prompt": "Susun pertanyaan: 'Anda suka genre musik apa?'", "correctSentence": ["คุณ", "ชอบ", "ดนตรี", "แบบ", "ไหน"], "options": ["คุณ", "ชอบ", "ดนตรี", "แบบ", "ไหน", "เวลา", "หนัง"], "explain": "คุณชอบ (Anda suka) + ดนตรี (musik) + แบบไหน (jenis yang mana?)."}
    ]
}
LESSON_DATABASE["u10_l3"] = {
    "title": "Kontak & Media Sosial",
    "questions": [
        {"type": "choice", "prompt": "Aplikasi pesan paling populer di Thailand untuk saling bertukar kontak:", "thai": "ไลน์ (LINE)", "roman": "laai", "options": ["ไลน์ (LINE)", "ทวิตเตอร์ (Twitter/X)", "เทเลแกรม (Telegram)", "วีแชท (WeChat)"], "answer": 0, "explain": "Di Thailand, LINE adalah aplikasi nomor satu untuk pesan pribadi, bisnis, dan stiker lucu."},
        {"type": "matching", "prompt": "Cocokkan istilah media sosial:", "pairs": [{"thai": "ขอไลน์หน่อยได้ไหม", "label": "Boleh minta ID akun LINE?"}, {"thai": "ส่งรูปภาพ", "label": "Mengirimkan gambar foto"}, {"thai": "สแกนไอดี", "label": "Scan QR kode teman"}, {"thai": "ติดต่อกัน", "label": "Saling menjaga kontak pertemanan"}], "explain": "Pertukaran akun LINE adalah cara lumrah menjalin silaturahmi dengan warga lokal."},
        {"type": "builder", "prompt": "Susun permintaan: 'Boleh minta akun LINE Anda?'", "correctSentence": ["ขอ", "ไลน์", "ไอดี", "หน่อย", "ได้ไหม"], "options": ["ขอ", "ไลน์", "ไอดี", "หน่อย", "ได้ไหม", "ส่ง", "รูป"], "explain": "ขอไลน์ไอดี (minta ID Line) + หน่อยได้ไหม (boleh tolong?)."}
    ]
}
LESSON_DATABASE["u10_boss"] = {
    "title": "Tantangan Obrolan Santai 🏆",
    "questions": [
        {"type": "choice", "prompt": "Cara memuji teman obrolan yang menyenangkan:", "thai": "คุยกับคุณสนุกมากครับ", "roman": "khui gàp khun sà-nùk mâak khráp", "options": ["คุยกับคุณสนุกมากครับ", "ผมอยากกลับบ้านครับ", "ไม่มีอะไรทำครับ", "ขอเงินหน่อยครับ"], "answer": 0, "explain": "คุยกับคุณ (mengobrol dengan Anda) + สนุกมาก (sangat asyik/menyenangkan)."},
        {"type": "builder", "prompt": "Susun kesan: 'Senang bisa saling mengobrol'", "correctSentence": ["ยินดี", "ที่", "ได้", "คุย", "กัน"], "options": ["ยินดี", "ที่", "ได้", "คุย", "กัน", "เพื่อน", "สนุก"], "explain": "ยินดีที่ได้คุยกัน (senang bisa berbincang bersama)."},
        {"type": "matching", "prompt": "Uji keakraban sosial Anda:", "pairs": [{"thai": "เพื่อนสนิท", "label": "Sahabat karib dekat"}, {"thai": "มีความสุข", "label": "Merasa gembira bahagia"}, {"thai": "หัวเราะ", "label": "Tertawa riang bersama"}, {"thai": "แลกเปลี่ยนความคิด", "label": "Bertukar wawasan pemikiran"}], "explain": "Hebat! Anda mahir menjalin pertemanan hangat dalam bahasa Thai!"}
    ]
}

# --- UNIT 11 ---
LESSON_DATABASE["u11_l1"] = {
    "title": "Keluarga Kata Hati (ใจ)",
    "questions": [
        {"type": "choice", "prompt": "Apa makna ungkapan majemuk 'ใจดี' (jai-dii)?", "thai": "ใจดี", "roman": "jai-dii", "options": ["Baik hati / ramah", "Senang gembira", "Sungkan / segan", "Marah geram"], "answer": 0, "explain": "ใจ (hati) + ดี (baik) = baik hati dan penyayang."},
        {"type": "matching", "prompt": "Cocokkan kata majemuk berakar hati (ใจ):", "pairs": [{"thai": "ดีใจ", "label": "Merasa gembira bahagia"}, {"thai": "เสียใจ", "label": "Sedih / merasa bersalah"}, {"thai": "เกรงใจ", "label": "Sungkan / tenggang rasa (Kreng Jai)"}, {"thai": "สบายใจ", "label": "Hati tenang damai tentram"}], "explain": "Bahasa Thai memiliki lebih dari 100 kosakata berbasis 'ใจ' yang menggambarkan nuansa batin."},
        {"type": "builder", "prompt": "Susun pujian: 'Orang Thailand sangat baik hati'", "correctSentence": ["คน", "ไทย", "ใจดี", "มาก"], "options": ["คน", "ไทย", "ใจดี", "มาก", "เสียใจ", "เกรงใจ"], "explain": "คนไทย (orang Thai) + ใจดีมาก (sangat baik hati)."}
    ]
}
LESSON_DATABASE["u11_l2"] = {
    "title": "Filosofi Mai Pen Rai",
    "questions": [
        {"type": "choice", "prompt": "Prinsip hidup santai dan ikhlas khas Thailand yang mendunia:", "thai": "ไม่เป็นไร", "roman": "mâi pen rai", "options": ["ไม่เป็นไร (Never mind / santai saja)", "ไม่รู้ (Tidak tahu)", "ไม่เอา (Tidak mau)", "ไม่ชอบ (Tidak suka)"], "answer": 0, "explain": "'Mai Pen Rai' adalah filosofi hidup menerima keadaan dengan lapang dada dan senyuman."},
        {"type": "matching", "prompt": "Cocokkan filosofi kedamaian batin Thai:", "pairs": [{"thai": "สบายสบาย", "label": "Santai tanpa beban berat (Sabai)"}, {"thai": "ใจเย็นๆ", "label": "Tenanglah, jangan terburu-buru"}, {"thai": "ปล่อยวาง", "label": "Ikhlas melepaskan kemelekatan"}, {"thai": "ยิ้มสยาม", "label": "Senyuman ramah khas tanah Siam"}], "explain": "Ungkapan 'ใจเย็นๆ' (jai yen-yen) mengajarkan kepala dingin saat menghadapi persoalan."},
        {"type": "builder", "prompt": "Susun nasihat damai: 'Tenanglah tidak perlu buru-buru'", "correctSentence": ["ใจ", "เย็น", "ๆ", "ไม่", "ต้อง", "รีบ"], "options": ["ใจ", "เย็น", "ๆ", "ไม่", "ต้อง", "รีบ", "สบาย", "ดี"], "explain": "ใจเย็นๆ (tenanglah) + ไม่ต้องรีบ (tidak usah tergesa-gesa)."}
    ]
}
LESSON_DATABASE["u11_l3"] = {
    "title": "Mengungkapkan Opini",
    "questions": [
        {"type": "choice", "prompt": "Bagaimana mengawali pendapat 'Menurut pemikiran saya...'?", "thai": "ฉันคิดว่า", "roman": "chǎn khít wâa", "options": ["ฉันคิดว่า (Saya pikir/merasa)", "ฉันไม่รู้ (Saya tak paham)", "คุณบอกว่า (Kamu bilang)", "ถูกต้องแล้ว (Sudah tepat)"], "answer": 0, "explain": "ฉันคิดว่า (chǎn khít wâa) adalah cara sopan mengemukakan sudut pandang pribadi."},
        {"type": "matching", "prompt": "Cocokkan respon diskusi pemikiran:", "pairs": [{"thai": "เห็นด้วย", "label": "Saya sependapat / setuju"}, {"thai": "ไม่เห็นด้วย", "label": "Kurang sependapat"}, {"thai": "น่าสนใจมาก", "label": "Sangat menarik untuk dipelajari"}, {"thai": "แน่นอน", "label": "Pasti / Tentu saja"}], "explain": "Diskusi dalam budaya Thai selalu menjunjung tinggi keharmonisan tutur kata."},
        {"type": "builder", "prompt": "Susun opini: 'Saya rasa hal itu sangat menarik'", "correctSentence": ["ผม", "คิด", "ว่า", "น่าสนใจ", "มาก"], "options": ["ผม", "คิด", "ว่า", "น่าสนใจ", "มาก", "เห็นด้วย", "ใจ"], "explain": "ผมคิดว่า (saya rasa) + น่าสนใจมาก (sangat menarik sekali)."}
    ]
}
LESSON_DATABASE["u11_boss"] = {
    "title": "Tantangan Rasa & Hati 🏆",
    "questions": [
        {"type": "choice", "prompt": "Konsep luhur 'เกรงใจ' (Kreng Jai) mengajarkan kita untuk...", "thai": "ความเกรงใจ", "roman": "khwaam greeng-jai", "options": ["Bertenggang rasa agar tidak merepotkan orang lain", "Selalu menuntut hak pribadi", "Berbicara sangat cepat", "Menolak pemberian hadiah"], "answer": 0, "explain": "Kreng Jai adalah pilar keharmonisan sosial masyarakat Thailand yang sangat halus."},
        {"type": "builder", "prompt": "Susun keramahan: 'Jangan merasa sungkan sama sekali'", "correctSentence": ["อย่า", "เกรงใจ", "เลย", "ครับ"], "options": ["อย่า", "เกรงใจ", "เลย", "ครับ", "ค่ะ", "คิด"], "explain": "อย่าเกรงใจเลย (jangan merasa sungkan/segan) + ครับ (partikel sopan)."},
        {"type": "matching", "prompt": "Uji kepekaan rasa hati:", "pairs": [{"thai": "มิตรภาพ", "label": "Ikatan tali persahabatan"}, {"thai": "ความจริงใจ", "label": "Ketulusan hati yang murni"}, {"thai": "อบอุ่น", "label": "Kehangatan rasa kekeluargaan"}, {"thai": "เข้าใจกัน", "label": "Saling memahami rasa"}], "explain": "Luar biasa! Anda memahami kedalaman filosofi budaya dan batin bangsa Thai!"}
    ]
}

# --- UNIT 12 ---
LESSON_DATABASE["u12_l1"] = {
    "title": "Asal Negara & Identitas",
    "questions": [
        {"type": "choice", "prompt": "Bagaimana memperkenalkan negara asal 'Saya datang dari Indonesia'?", "thai": "ผมมาจากประเทศอินโดนีเซีย", "roman": "phǒm maa jàak bprà-thêet in-doo-nii-siia", "options": ["ผมมาจากประเทศอินโดนีเซีย", "ผมมาจากประเทศญี่ปุ่น", "ผมมาจากประเทศอังกฤษ", "ผมมาจากประเทศจีน"], "answer": 0, "explain": "มาจาก (datang dari) + ประเทศอินโดนีเซีย (negara Indonesia)."},
        {"type": "matching", "prompt": "Cocokkan kalimat perkenalan diri:", "pairs": [{"thai": "พูดไทยได้นิดหน่อย", "label": "Bisa bicara bahasa Thai sedikit"}, {"thai": "พักอยู่กรุงเทพฯ", "label": "Tinggal sementara di Bangkok"}, {"thai": "มาเที่ยว", "label": "Datang untuk berwisata"}, {"thai": "เรียนภาษาไทย", "label": "Sedang belajar bahasa Thai"}], "explain": "Warga lokal sangat mengapresiasi wisatawan yang berusaha berbicara bahasa Thai!"},
        {"type": "builder", "prompt": "Susun identitas: 'Saya berasal dari negara Indonesia'", "correctSentence": ["ผม", "มา", "จาก", "ประเทศ", "อินโดนีเซีย"], "options": ["ผม", "มา", "จาก", "ประเทศ", "อินโดนีเซีย", "ไทย", "พัก"], "explain": "ผม (saya pria) + มาจาก (berasal dari) + ประเทศอินโดนีเซีย (negara Indonesia)."}
    ]
}
LESSON_DATABASE["u12_l2"] = {
    "title": "Apresiasi & Pujian",
    "questions": [
        {"type": "choice", "prompt": "Bagaimana mengungkapkan rasa cinta kepada Thailand?", "thai": "ฉันชอบเมืองไทยมาก", "roman": "chǎn chɔ̂ɔp meuang thai mâak", "options": ["ฉันชอบเมืองไทยมาก", "ฉันอยากกลับบ้าน", "อากาศร้อนเกินไป", "อาหารไม่อร่อย"], "answer": 0, "explain": "ชอบเมืองไทยมาก (sangat menyukai negeri Thailand) menunjukkan apresiasi tulus."},
        {"type": "matching", "prompt": "Cocokkan pujian & apresiasi:", "pairs": [{"thai": "ประทับใจมาก", "label": "Sangat berkesan dan membekas di hati"}, {"thai": "ยอดเยี่ยม", "label": "Luar biasa hebat (Excellent)"}, {"thai": "สวยงามทุกที่", "label": "Indah memesona di setiap sudut"}, {"thai": "อัธยาศัยดี", "label": "Ramah tamah bersahabat"}], "explain": "Pujian tulus selalu disambut senyum hangat penduduk lokal."},
        {"type": "builder", "prompt": "Susun apresiasi: 'Saya sangat menyukai makanan Thai'", "correctSentence": ["ฉัน", "ชอบ", "อาหาร", "ไทย", "มาก"], "options": ["ฉัน", "ชอบ", "อาหาร", "ไทย", "มาก", "เมือง", "คน"], "explain": "ฉันชอบ (saya suka) + อาหารไทย (makanan Thai) + มาก (sekali)."}
    ]
}
LESSON_DATABASE["u12_l3"] = {
    "title": "Perpisahan & Doa Baik",
    "questions": [
        {"type": "choice", "prompt": "Doa keselamatan di jalan: 'Semoga selamat dalam perjalanan'", "thai": "ขอให้เดินทางปลอดภัย", "roman": "khɔ̌ɔ hâi dəən-thaang bplɔ̀ɔt-phai", "options": ["ขอให้เดินทางปลอดภัย", "ขอให้อิ่มอร่อย", "ขอให้โชคดี", "ขอให้มีความสุข"], "answer": 0, "explain": "ขอให้ (semoga) + เดินทาง (perjalanan) + ปลอดภัย (selamat sentosa)."},
        {"type": "matching", "prompt": "Cocokkan salam perpisahan hangat:", "pairs": [{"thai": "โชคดีนะ", "label": "Semoga beruntung dan sukses"}, {"thai": "รักษาสุขภาพด้วย", "label": "Jaga kesehatan baik-baik"}, {"thai": "แล้วเจอกันใหม่", "label": "Sampai bertemu kembali di lain waktu"}, {"thai": "คิดถึงเสมอ", "label": "Selalu terkenang dan dirindukan"}], "explain": "Ungkapan doa baik mencerminkan keindahan budi pekerti bangsa Thai."},
        {"type": "builder", "prompt": "Susun doa: 'Semoga perjalanan Anda aman dan selamat'", "correctSentence": ["ขอ", "ให้", "เดิน", "ทาง", "ปลอด", "ภัย"], "options": ["ขอ", "ให้", "เดิน", "ทาง", "ปลอด", "ภัย", "โชค", "ดี"], "explain": "ขอให้ (semoga) + เดินทาง (perjalanan) + ปลอดภัย (aman selamat)."}
    ]
}
LESSON_DATABASE["u12_boss"] = {
    "title": "Sidang Kelulusan Akademi Thai 🏆🎓",
    "questions": [
        {"type": "choice", "prompt": "Apresiasi guru kepada siswa yang lulus ujian kelulusan B1:", "thai": "ยินดีด้วย คุณพูดภาษาไทยได้เก่งมาก", "roman": "yin-dii dûay khun phûut phaa-sǎa thai dâi gèng mâak", "options": ["ยินดีด้วย คุณพูดภาษาไทยได้เก่งมาก", "คุณต้องเริ่มเรียนใหม่", "คุณยังไม่ผ่านการสอบ", "สวัสดีตอนเช้าครับ"], "answer": 0, "explain": "ยินดีด้วย (Selamat!) + คุณพูดภาษาไทยได้เก่งมาก (Anda berbicara bahasa Thai sangat mahir!)."},
        {"type": "builder", "prompt": "Susun ucapan terima kasih kelulusan: 'Terima kasih atas ilmu bahasa Thai'", "correctSentence": ["ขอบคุณ", "ที่", "สอน", "ภาษา", "ไทย", "ให้", "ครับ"], "options": ["ขอบคุณ", "ที่", "สอน", "ภาษา", "ไทย", "ให้", "ครับ", "ค่ะ", "ยินดี"], "explain": "ขอบคุณ (terima kasih) + ที่สอนภาษาไทยให้ (telah mengajarkan bahasa Thai) + ครับ."},
        {"type": "matching", "prompt": "Gelar kehormatan kelulusan Anda:", "pairs": [{"thai": "นักเรียนดีเด่น", "label": "Pelajar berprestasi unggul"}, {"thai": "ประสบความสำเร็จ", "label": "Meraih kesuksesan gemilang"}, {"thai": "ใบประกาศเกียรติคุณ", "label": "Sertifikat kelulusan kehormatan"}, {"thai": "สถาบันภาษา", "label": "Akademi Bahasa Fairy Thai"}], "explain": "SELAMAT! Anda telah menuntaskan seluruh 12 Unit Kurikulum Komprehensif (48 Modul Interaktif) Bahasa Thai!"}
    ]
}

print(f"Total units: {len(CURRICULUM_UNITS)}")
print(f"Total order count: {len(ALL_LESSONS_ORDER)}")
print(f"Total lessons in database: {len(LESSON_DATABASE)}")

# Verify all lessons in order exist in database
for l_id in ALL_LESSONS_ORDER:
    assert l_id in LESSON_DATABASE, f"Missing lesson {l_id}"

print("All 48 lessons verified in LESSON_DATABASE!")

# Output JS format
units_json = json.dumps(CURRICULUM_UNITS, ensure_ascii=False, indent=2)
order_json = json.dumps(ALL_LESSONS_ORDER, ensure_ascii=False, indent=2)
db_json = json.dumps(LESSON_DATABASE, ensure_ascii=False, indent=2)

js_content = f"""
    /* 7. LESSONS DATABASE & ARENA RUNNER (12 PROGRESSIVE UNITS / 48 MODULES) */
    const CURRICULUM_UNITS = {units_json};

    const ALL_LESSONS_ORDER = {order_json};

    const LESSON_DATABASE = {db_json};

    let currentSession = null;
    let currentCurriculumFilter = 'all';
    let currentCurriculumSearch = '';
    let allCurriculumUnlocked = false;

    function renderCurriculumGrid() {{
      const container = document.getElementById('curriculumUnitsContainer');
      if (!container) return;

      const q = (currentCurriculumSearch || '').trim().toLowerCase();
      const filteredUnits = CURRICULUM_UNITS.filter(u => {{
        const matchesLevel = (currentCurriculumFilter === 'all' || u.level === currentCurriculumFilter);
        if (!matchesLevel) return false;
        if (!q) return true;
        const inUnit = u.title.toLowerCase().includes(q) || u.desc.toLowerCase().includes(q) || u.levelLabel.toLowerCase().includes(q);
        const inLessons = u.lessons.some(l => l.title.toLowerCase().includes(q) || l.subtitle.toLowerCase().includes(q));
        return inUnit || inLessons;
      }});

      if (filteredUnits.length === 0) {{
        container.innerHTML = `
          <div style="text-align:center; padding:48px 20px; background:var(--bg-surface); border-radius:var(--radius-lg); border:1px dashed var(--border);">
            <div style="font-size:36px; margin-bottom:12px;">🍃</div>
            <h3 style="font-size:18px; font-weight:700; margin-bottom:6px;">Tidak ada modul yang cocok</h3>
            <p style="font-size:13px; color:var(--text-muted);">Coba cari kata kunci lain seperti "makan", "pasar", "arah", "hotel", atau "kuil".</p>
          </div>
        `;
        return;
      }}

      container.innerHTML = filteredUnits.map(unit => {{
        const completedCount = unit.lessons.filter(l => appState.completedLessons.includes(l.id)).length;
        const totalCount = unit.lessons.length;
        const unitProgressPct = Math.round((completedCount / totalCount) * 100);

        return `
          <div class="unit-card-bento" data-unit-id="${{unit.id}}">
            <div class="unit-meta-row">
              <span class="unit-number-tag">Unit ${{unit.unitNumber}} • ${{unit.levelLabel}}</span>
              <div style="display:flex; align-items:center; gap:8px;">
                <span style="font-family:var(--font-mono); font-size:12px; color:var(--text-muted); font-weight:600;">
                  ${{completedCount}}/${{totalCount}} Selesai (${{unitProgressPct}}%)
                </span>
              </div>
            </div>
            <h3>${{unit.title}}</h3>
            <p>${{unit.desc}}</p>
            <div class="lessons-track-row">
              ${{unit.lessons.map(l => {{
                const isCompleted = appState.completedLessons.includes(l.id);
                const isUnlocked = appState.unlockedLessons.includes(l.id);
                let stateClass = 'locked';
                let statusBadge = `<span class="lesson-status-icon">🔒</span>`;

                if (isCompleted) {{
                  stateClass = 'completed';
                  statusBadge = `<span class="lesson-status-icon">✓</span><span style="font-size:11px; color:var(--emerald); font-weight:700;">SELESAI</span>`;
                }} else if (isUnlocked) {{
                  stateClass = 'active-frontier';
                  statusBadge = `<span class="lesson-status-icon">⚡</span><span style="font-size:11px; color:var(--primary); font-weight:700;">MULAI</span>`;
                }}

                return `
                  <div class="lesson-item-box ${{stateClass}}" id="card-${{l.id}}" onclick="startArenaLesson('${{l.id}}')" title="${{isUnlocked ? 'Klik untuk mulai latihan interaktif' : 'Selesaikan modul sebelumnya atau buka via tombol Buka Semua Modul'}}">
                    <div class="lesson-item-header">
                      <span style="font-size:18px;">${{l.icon}}</span>
                      ${{statusBadge}}
                    </div>
                    <div class="lesson-item-title">${{l.title}}</div>
                    <div style="font-size:11px; color:var(--text-muted); line-height:1.2;">${{l.subtitle}}</div>
                  </div>
                `;
              }}).join('')}}
            </div>
          </div>
        `;
      }}).join('');

      // Update active unit badge on header
      const activeUnit = CURRICULUM_UNITS.find(u => u.lessons.some(l => !appState.completedLessons.includes(l.id) && appState.unlockedLessons.includes(l.id))) || CURRICULUM_UNITS[0];
      const activeBadge = document.getElementById('curriculumActiveBadge');
      if (activeBadge && activeUnit) {{
        activeBadge.innerHTML = `<span>Unit Aktif: #${{activeUnit.unitNumber}} ${{activeUnit.title.split(' ')[0]}} (${{activeUnit.level.toUpperCase()}})</span>`;
      }}
    }}

    function filterCurriculum(level, btn) {{
      playSynthSound('click');
      currentCurriculumFilter = level;
      document.querySelectorAll('#curriculumLevelPills .pill-filter').forEach(p => p.classList.remove('active'));
      if (btn) btn.classList.add('active');
      renderCurriculumGrid();
    }}

    function searchCurriculum(query) {{
      currentCurriculumSearch = query;
      renderCurriculumGrid();
    }}

    function toggleUnlockAllCurriculum() {{
      allCurriculumUnlocked = !allCurriculumUnlocked;
      const btn = document.getElementById('btnUnlockAll');
      if (allCurriculumUnlocked) {{
        ALL_LESSONS_ORDER.forEach(id => {{
          if (!appState.unlockedLessons.includes(id)) appState.unlockedLessons.push(id);
        }});
        if (btn) btn.textContent = '🔒 Kunci Bertahap (Mode Normal)';
        showToast('🔓 Seluruh 48 modul telah dibuka bebas!');
      }} else {{
        appState.unlockedLessons = ['u1_l1'];
        appState.completedLessons.forEach(id => {{
          const idx = ALL_LESSONS_ORDER.indexOf(id);
          if (idx !== -1 && idx + 1 < ALL_LESSONS_ORDER.length) {{
            const next = ALL_LESSONS_ORDER[idx + 1];
            if (!appState.unlockedLessons.includes(next)) appState.unlockedLessons.push(next);
          }}
        }});
        if (btn) btn.textContent = '🔓 Buka Semua Modul';
        showToast('🔒 Kembali ke mode berjenjang.');
      }}
      saveState();
      renderCurriculumGrid();
    }}

    function renderCurriculumNodes() {{
      renderCurriculumGrid();
    }}
"""

with open("generated_curriculum_block.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Saved generated_curriculum_block.js successfully!")
