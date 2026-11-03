import os
import math
from PIL import Image, ImageDraw, ImageFont

# Canvas setup - high resolution (A4 aspect or wide multi-card canvas)
# Like the image: 3 columns for 39-44, and full width bottom for 45
W, H = 2400, 3200
img = Image.new("RGB", (W, H), (255, 255, 255))
draw = ImageDraw.Draw(img)

# Fonts
font_dir = r"C:\Windows\Fonts"
f_regular_path = os.path.join(font_dir, "segoepr.ttf")
f_bold_path = os.path.join(font_dir, "segoeprb.ttf")

f_title = ImageFont.truetype(f_bold_path, 42)
f_num = ImageFont.truetype(f_bold_path, 34)
f_h = ImageFont.truetype(f_bold_path, 26)
f_b = ImageFont.truetype(f_regular_path, 23)
f_math = ImageFont.truetype(f_bold_path, 25)
f_ans = ImageFont.truetype(f_bold_path, 28)

# Colors
C_BORDER = (168, 206, 235)      # Soft pastel blue border
C_NUM_BG = (28, 78, 128)        # Deep navy circle for number
C_NUM_TXT = (255, 255, 255)     # White number
C_TXT = (25, 30, 40)            # Natural ink black/dark slate
C_LABEL = (18, 65, 115)         # Navy blue label
C_ANS_BG = (228, 241, 254)      # Light blue box for answer
C_ANS_BORDER = (140, 185, 225)
C_ANS_TXT = (15, 60, 110)

def draw_round_rect(draw, bbox, radius, fill=None, outline=None, width=1):
    x1, y1, x2, y2 = bbox
    draw.rounded_rectangle([x1, y1, x2, y2], radius=radius, fill=fill, outline=outline, width=width)

def draw_card(bbox, num_str, title_q, dik_lines, dit_str, peny_lines, ans_str):
    x1, y1, x2, y2 = bbox
    # Card background and border
    draw_round_rect(draw, [x1, y1, x2, y2], radius=24, fill=(255, 255, 255), outline=C_BORDER, width=4)
    
    # Number badge (circle at top-left)
    cx, cy, r = x1 + 42, y1 + 42, 28
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=C_NUM_BG)
    bbox_n = draw.textbbox((0, 0), num_str, font=f_num)
    nw, nh = bbox_n[2] - bbox_n[0], bbox_n[3] - bbox_n[1]
    draw.text((cx - nw / 2, cy - nh / 2 - 4), num_str, fill=C_NUM_TXT, font=f_num)

    cur_y = y1 + 80
    pad_x = x1 + 25
    max_w = (x2 - x1) - 50

    # 1. Soal
    draw.text((pad_x, cur_y), "Soal :", fill=C_LABEL, font=f_h)
    cur_y += 34
    for line in title_q:
        draw.text((pad_x, cur_y), line, fill=C_TXT, font=f_b)
        cur_y += 32
    cur_y += 10

    # 2. Diketahui
    draw.text((pad_x, cur_y), "Diketahui :", fill=C_LABEL, font=f_h)
    cur_y += 34
    for line in dik_lines:
        draw.text((pad_x, cur_y), line, fill=C_TXT, font=f_b)
        cur_y += 31
    cur_y += 10

    # 3. Ditanyakan
    draw.text((pad_x, cur_y), "Ditanyakan :", fill=C_LABEL, font=f_h)
    cur_y += 34
    for line in dit_str:
        draw.text((pad_x, cur_y), line, fill=C_TXT, font=f_b)
        cur_y += 31
    cur_y += 10

    # 4. Penyelesaian
    draw.text((pad_x, cur_y), "Penyelesaian :", fill=C_LABEL, font=f_h)
    cur_y += 34
    for item in peny_lines:
        if isinstance(item, tuple): # formatted/highlighted math
            txt, is_math = item
            font_use = f_math if is_math else f_b
            col_use = C_LABEL if is_math else C_TXT
            draw.text((pad_x, cur_y), txt, fill=col_use, font=font_use)
            cur_y += 36
        else:
            draw.text((pad_x, cur_y), item, fill=C_TXT, font=f_b)
            cur_y += 32

    # 5. Jawaban Box at bottom
    box_h = 75
    bx1, by1 = x1 + 20, y2 - box_h - 20
    bx2, by2 = x2 - 20, y2 - 20
    draw_round_rect(draw, [bx1, by1, bx2, by2], radius=16, fill=C_ANS_BG, outline=C_ANS_BORDER, width=2)
    draw.text((bx1 + 16, by1 + 6), "Jawaban :", fill=C_LABEL, font=f_h)
    draw.text((bx1 + 130, by1 + 26), ans_str, fill=C_ANS_TXT, font=f_ans)

# Layout:
# Margin top: 120, margin sides: 60
# 3 Columns for Row 1 and Row 2
# Gap X: 35, Gap Y: 40

col_w = (W - 120 - 70) // 3  # ~710 px
row1_y = 120
row1_h = 920
row2_y = row1_y + row1_h + 40
row2_h = 960
row3_y = row2_y + row2_h + 40
row3_h = 980

# Main Header
draw.text((70, 45), "TUGAS MATEMATIKA DISKRIT II — TEORI PELUANG & KOMBINATORIKA", fill=C_LABEL, font=f_title)

# ==================== KOTAK 39 ====================
c1_x1 = 60
c1_x2 = c1_x1 + col_w
draw_card(
    bbox=[c1_x1, row1_y, c1_x2, row1_y + row1_h],
    num_str="39",
    title_q=[
        "Berapa peluang sebuah bilangan",
        "bulat yang dipilih secara acak",
        "dari 100 bilangan bulat positif",
        "pertama bernilai genap?"
    ],
    dik_lines=[
        "• Ruang sampel = 1 s.d. 100",
        "• n(S) = 100",
        "• Bilangan genap = 2, 4, ..., 100"
    ],
    dit_str=[
        "Peluang bilangan yang terpilih",
        "bernilai genap."
    ],
    peny_lines=[
        "Banyak bilangan genap :",
        ("n(A) = 100 / 2 = 50", True),
        ("P(A) = n(A) / n(S)", True),
        ("     = 50 / 100 = 1/2", True)
    ],
    ans_str="P(A) = 1/2  (50%)"
)

# ==================== KOTAK 40 ====================
c2_x1 = c1_x2 + 35
c2_x2 = c2_x1 + col_w
draw_card(
    bbox=[c2_x1, row1_y, c2_x2, row1_y + row1_h],
    num_str="40",
    title_q=[
        "Berapa peluang dari 5 buah",
        "kartu remi yang dibagi tidak",
        "mengandung ratu satu buah pun?"
    ],
    dik_lines=[
        "• Total kartu remi = 52, Ratu = 4",
        "• Kartu bukan ratu = 52 - 4 = 48",
        "• Kartu yang diambil = 5"
    ],
    dit_str=[
        "Peluang 5 kartu tanpa ratu."
    ],
    peny_lines=[
        "Kombinasi tanpa urutan :",
        ("n(S) = C(52, 5) = 2.598.960", True),
        ("n(A) = C(48, 5) = 1.712.304", True),
        ("P(A) = C(48, 5) / C(52, 5)", True),
        ("     = 1.712.304 / 2.598.960", False),
        ("     = 35.673 / 54.145 ≈ 0,6588", True)
    ],
    ans_str="P(A) = 35.673 / 54.145 ≈ 65,88%"
)

# ==================== KOTAK 41 ====================
c3_x1 = c2_x2 + 35
c3_x2 = c3_x1 + col_w
draw_card(
    bbox=[c3_x1, row1_y, c3_x2, row1_y + row1_h],
    num_str="41",
    title_q=[
        "Berapa peluang bahwa sebuah",
        "bilangan bulat yang tidak melebihi",
        "100 habis dibagi 3?"
    ],
    dik_lines=[
        "• Ruang sampel = 1 s.d. 100",
        "• n(S) = 100",
        "• Habis dibagi 3 = 3, 6, ..., 99"
    ],
    dit_str=[
        "Peluang bilangan habis dibagi 3."
    ],
    peny_lines=[
        ("n(A) = floor(100 / 3) = 33", True),
        ("P(A) = n(A) / n(S)", True),
        ("     = 33 / 100 = 0,33", True),
        "Catatan: diasumsikan bilangan",
        "bulat positif (1 s.d. 100)."
    ],
    ans_str="P(A) = 33/100  (33%)"
)

# ==================== KOTAK 42 ====================
draw_card(
    bbox=[c1_x1, row2_y, c1_x2, row2_y + row2_h],
    num_str="42",
    title_q=[
        "Sebuah dadu dan koin dilempar",
        "bersamaan. Berapa peluang muncul",
        "angka 3 dan muka gambar?"
    ],
    dik_lines=[
        "• Dadu = 6 sisi, Koin = 2 sisi",
        "• Kejadian saling bebas",
        "• Dadu = {3}, Koin = {Gambar}"
    ],
    dit_str=[
        "Peluang muncul angka 3 & gambar."
    ],
    peny_lines=[
        ("P(Dadu=3) = 1/6", True),
        ("P(Koin=G) = 1/2", True),
        ("P(A ∩ B) = P(A) × P(B)", True),
        ("         = (1/6) × (1/2)", True),
        ("         = 1/12 ≈ 0,0833", True)
    ],
    ans_str="P(A ∩ B) = 1/12  (8,33%)"
)

# ==================== KOTAK 43 ====================
draw_card(
    bbox=[c2_x1, row2_y, c2_x2, row2_y + row2_h],
    num_str="43",
    title_q=[
        "Tujuh kecelakaan mobil terjadi",
        "dalam seminggu. Berapa peluang",
        "semua terjadi pada hari yang sama?"
    ],
    dik_lines=[
        "• Jumlah kecelakaan = 7",
        "• Jumlah hari = 7 (Senin-Minggu)",
        "• Tiap hari berpeluang sama (bebas)"
    ],
    dit_str=[
        "Peluang semua kecelakaan",
        "terjadi pada hari yang sama."
    ],
    peny_lines=[
        "Kecelakaan ke-1 bebas di hari apa",
        "saja (peluang = 7/7 = 1).",
        "6 kecelakaan berikutnya harus di",
        "hari yang sama persis :",
        ("P(A) = (1/7)^6", True),
        ("     = 1 / 7^6 = 1 / 117.649", True)
    ],
    ans_str="P(A) = 1 / 117.649"
)

# ==================== KOTAK 44 ====================
draw_card(
    bbox=[c3_x1, row2_y, c3_x2, row2_y + row2_h],
    num_str="44",
    title_q=[
        "Ada 10 pasang sepatu di lemari.",
        "Jika 8 sepatu diambil acak, berapa",
        "peluang tidak ada sepasang sepatu",
        "yang terambil?"
    ],
    dik_lines=[
        "• 10 pasang = 20 buah sepatu",
        "• Sepatu diambil = 8 buah",
        "• Syarat: 8 sepatu beda pasang"
    ],
    dit_str=[
        "Peluang tidak ada sepasang sepatu."
    ],
    peny_lines=[
        ("n(S) = C(20, 8) = 125.970", True),
        "Pilih 8 pasang dari 10 pasang : C(10,8)",
        "Tiap pasang ambil 1 (kiri/kanan) : 2^8",
        ("n(A) = C(10, 8) × 2^8", True),
        ("     = 45 × 256 = 11.520", True),
        ("P(A) = 11.520 / 125.970 = 384/4.199", True)
    ],
    ans_str="P(A) = 384 / 4.199 ≈ 9,15%"
)

# ==================== KOTAK 45 (LEBAR PENUH) ====================
draw_card(
    bbox=[c1_x1, row3_y, c3_x2, row3_y + row3_h],
    num_str="45",
    title_q=[
        "Sepuluh orang masuk lift pada lantai dasar sebuah gedung bertingkat 20.",
        "Berapa peluang mereka semua keluar pada lantai/tingkat yang berbeda?"
    ],
    dik_lines=[
        "• Jumlah orang = 10 orang",
        "• Jumlah lantai tujuan = 20 lantai (lantai 1 s.d. 20)",
        "• Setiap orang memilih 1 lantai secara acak dan saling bebas."
    ],
    dit_str=[
        "Peluang kesepuluh orang keluar pada lantai yang berbeda-beda."
    ],
    peny_lines=[
        ("1. Seluruh kemungkinan penempatan : n(S) = 20^10 = 10.240.000.000.000", True),
        "2. Kejadian semua orang keluar di lantai berbeda (Permutasi P(20, 10)) :",
        ("   n(A) = 20 × 19 × 18 × 17 × 16 × 15 × 14 × 13 × 12 × 11 = 670.442.572.800", True),
        ("3. Nilai Peluang :", False),
        ("   P(A) = n(A) / n(S) = 670.442.572.800 / 10.240.000.000.000", True),
        ("        = 0,0654729075 ≈ 6,55%", True)
    ],
    ans_str="P(A) = 0,0654729075 ≈ 6,55%"
)

out_png = r"C:\Users\nnnnn\Downloads\Lembar_Tulisan_Tangan_Soal_39-45.png"
img.save(out_png, "PNG", dpi=(300, 300))
print("Saved PNG:", out_png)
