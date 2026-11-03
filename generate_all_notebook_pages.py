import os
from PIL import Image, ImageDraw, ImageFont
from notebook_engine import create_base_paper, draw_circled_num, write_on_line, MARGIN_X, f_title, f_label, f_text, f_math

# ==================== PAGE 1: SOAL 39 & SOAL 40 ====================
im1 = create_base_paper()
d1 = ImageDraw.Draw(im1)

# ---------- SOAL 39 ----------
# Circle number at line 0 (left of margin)
draw_circled_num(d1, MARGIN_X - 60, 180 + 1 * 68 - 34, "39")
write_on_line(d1, 0, MARGIN_X + 25, "Peluang Bilangan Bulat Genap (1 s.d. 100)", font=f_title, underline=True)

write_on_line(d1, 1, MARGIN_X + 25, "Diketahui :", font=f_label)
write_on_line(d1, 2, MARGIN_X + 60, "• Ruang sampel bilangan bulat positif 1 s.d. 100")
write_on_line(d1, 3, MARGIN_X + 60, "• n(S) = 100")
write_on_line(d1, 4, MARGIN_X + 60, "• Bilangan genap A = {2, 4, 6, 8, ..., 100}")

write_on_line(d1, 5, MARGIN_X + 25, "Ditanya :", font=f_label)
write_on_line(d1, 6, MARGIN_X + 60, "Peluang sebuah bilangan yang terpilih bernilai genap?")

write_on_line(d1, 7, MARGIN_X + 25, "Jawaban :", font=f_label)
write_on_line(d1, 8, MARGIN_X + 60, "Banyak bilangan genap dari 1 sampai 100 :")
write_on_line(d1, 9, MARGIN_X + 80, "n(A) = 100 / 2 = 50", font=f_math)
write_on_line(d1, 10, MARGIN_X + 60, "Peluang kejadian A :")
write_on_line(d1, 11, MARGIN_X + 80, "P(A) = n(A) / n(S) = 50 / 100 = 1/2", font=f_math)
write_on_line(d1, 12, MARGIN_X + 60, "Jadi, peluang terpilih bilangan genap adalah 1/2 (atau 50%).", font=f_math)

# ---------- SOAL 40 ----------
draw_circled_num(d1, MARGIN_X - 60, 180 + 15 * 68 - 34, "40")
write_on_line(d1, 14, MARGIN_X + 25, "Peluang Pembagian 5 Kartu Remi Tanpa Ratu", font=f_title, underline=True)

write_on_line(d1, 15, MARGIN_X + 25, "Diketahui :", font=f_label)
write_on_line(d1, 16, MARGIN_X + 60, "• Total kartu remi standar = 52 kartu")
write_on_line(d1, 17, MARGIN_X + 60, "• Jumlah kartu Ratu (Queen) = 4 kartu")
write_on_line(d1, 18, MARGIN_X + 60, "• Jumlah kartu bukan Ratu = 52 - 4 = 48 kartu")
write_on_line(d1, 19, MARGIN_X + 60, "• Jumlah kartu yang dibagikan = 5 kartu")

write_on_line(d1, 20, MARGIN_X + 25, "Ditanya :", font=f_label)
write_on_line(d1, 21, MARGIN_X + 60, "Peluang 5 kartu yang dibagi tidak memuat ratu satu pun?")

write_on_line(d1, 22, MARGIN_X + 25, "Jawaban :", font=f_label)
write_on_line(d1, 23, MARGIN_X + 60, "Karena urutan pengambilan kartu tidak diperhatikan (kombinasi) :")
write_on_line(d1, 24, MARGIN_X + 80, "1) Banyak cara memilih 5 dari 52 kartu (ruang sampel) :")
write_on_line(d1, 25, MARGIN_X + 110, "n(S) = C(52, 5) = 52! / (5! × 47!) = 2.598.960", font=f_math)
write_on_line(d1, 26, MARGIN_X + 80, "2) Banyak cara memilih 5 kartu dari 48 kartu bukan ratu :")
write_on_line(d1, 27, MARGIN_X + 110, "n(A) = C(48, 5) = 48! / (5! × 43!) = 1.712.304", font=f_math)
write_on_line(d1, 28, MARGIN_X + 80, "3) Peluang tidak mendapatkan kartu ratu :")
write_on_line(d1, 29, MARGIN_X + 110, "P(A) = n(A) / n(S) = 1.712.304 / 2.598.960", font=f_math)
write_on_line(d1, 30, MARGIN_X + 110, "     = 35.673 / 54.145 ≈ 0,6588", font=f_math)
write_on_line(d1, 31, MARGIN_X + 60, "Jadi, peluang 5 kartu tanpa ratu adalah 35.673/54.145 (sekitar 65,88%).", font=f_math)

p1_path = r"C:\Users\nnnnn\Downloads\Lembar_Tulis_Tangan_P1_Soal_39-40.png"
im1.save(p1_path, "PNG", dpi=(300, 300))
print("Saved Page 1:", p1_path)

# ==================== PAGE 2: SOAL 41 & SOAL 42 ====================
im2 = create_base_paper()
d2 = ImageDraw.Draw(im2)

# ---------- SOAL 41 ----------
draw_circled_num(d2, MARGIN_X - 60, 180 + 1 * 68 - 34, "41")
write_on_line(d2, 0, MARGIN_X + 25, "Peluang Bilangan Bulat Habis Dibagi 3 (<= 100)", font=f_title, underline=True)

write_on_line(d2, 1, MARGIN_X + 25, "Diketahui :", font=f_label)
write_on_line(d2, 2, MARGIN_X + 60, "• Ruang sampel bilangan bulat positif tidak melebihi 100 : {1, ..., 100}")
write_on_line(d2, 3, MARGIN_X + 60, "• n(S) = 100")
write_on_line(d2, 4, MARGIN_X + 60, "• Kelipatan 3 yang <= 100 : {3, 6, 9, 12, ..., 99}")

write_on_line(d2, 5, MARGIN_X + 25, "Ditanya :", font=f_label)
write_on_line(d2, 6, MARGIN_X + 60, "Peluang bilangan bulat yang dipilih habis dibagi 3?")

write_on_line(d2, 7, MARGIN_X + 25, "Jawaban :", font=f_label)
write_on_line(d2, 8, MARGIN_X + 60, "Banyak bilangan bulat <= 100 yang habis dibagi 3 :")
write_on_line(d2, 9, MARGIN_X + 80, "n(A) = ⌊100 / 3⌋ = 33 bilangan", font=f_math)
write_on_line(d2, 10, MARGIN_X + 60, "Maka peluang kejadian A :")
write_on_line(d2, 11, MARGIN_X + 80, "P(A) = n(A) / n(S) = 33 / 100 = 0,33", font=f_math)
write_on_line(d2, 12, MARGIN_X + 60, "Jadi, peluang terpilih bilangan habis dibagi 3 adalah 33/100 (33%).", font=f_math)

# ---------- SOAL 42 ----------
draw_circled_num(d2, MARGIN_X - 60, 180 + 15 * 68 - 34, "42")
write_on_line(d2, 14, MARGIN_X + 25, "Peluang Bersama Pelemparan Dadu dan Koin Logam", font=f_title, underline=True)

write_on_line(d2, 15, MARGIN_X + 25, "Diketahui :", font=f_label)
write_on_line(d2, 16, MARGIN_X + 60, "• Sebuah dadu dilempar : ruang sampel S_dadu = {1, 2, 3, 4, 5, 6} -> n = 6")
write_on_line(d2, 17, MARGIN_X + 60, "• Sebuah koin logam dilempar : ruang sampel S_koin = {Angka, Gambar} -> n = 2")
write_on_line(d2, 18, MARGIN_X + 60, "• Kedua kejadian pelemparan bersifat saling bebas (independen)")

write_on_line(d2, 19, MARGIN_X + 25, "Ditanya :", font=f_label)
write_on_line(d2, 20, MARGIN_X + 60, "Peluang muncul mata dadu 3 dan muka koin Gambar?")

write_on_line(d2, 21, MARGIN_X + 25, "Jawaban :", font=f_label)
write_on_line(d2, 22, MARGIN_X + 60, "1) Peluang muncul mata dadu 3 : P(Dadu = 3) = 1/6")
write_on_line(d2, 23, MARGIN_X + 60, "2) Peluang muncul sisi koin Gambar : P(Koin = G) = 1/2")
write_on_line(d2, 24, MARGIN_X + 60, "3) Peluang kedua kejadian muncul bersamaan (aturan perkalian) :")
write_on_line(d2, 25, MARGIN_X + 80, "P(Dadu=3 ∩ Koin=G) = P(Dadu=3) × P(Koin=G)", font=f_math)
write_on_line(d2, 26, MARGIN_X + 160, "= (1/6) × (1/2) = 1/12", font=f_math)
write_on_line(d2, 27, MARGIN_X + 160, "≈ 0,0833", font=f_math)
write_on_line(d2, 28, MARGIN_X + 60, "Jadi, peluang muncul angka 3 dan gambar adalah 1/12 (sekitar 8,33%).", font=f_math)

p2_path = r"C:\Users\nnnnn\Downloads\Lembar_Tulis_Tangan_P2_Soal_41-42.png"
im2.save(p2_path, "PNG", dpi=(300, 300))
print("Saved Page 2:", p2_path)

# ==================== PAGE 3: SOAL 43 & SOAL 44 ====================
im3 = create_base_paper()
d3 = ImageDraw.Draw(im3)

# ---------- SOAL 43 ----------
draw_circled_num(d3, MARGIN_X - 60, 180 + 1 * 68 - 34, "43")
write_on_line(d3, 0, MARGIN_X + 25, "Peluang 7 Kecelakaan Mobil pada Hari yang Sama", font=f_title, underline=True)

write_on_line(d3, 1, MARGIN_X + 25, "Diketahui :", font=f_label)
write_on_line(d3, 2, MARGIN_X + 60, "• Jumlah kecelakaan mobil dalam seminggu = 7 kejadian")
write_on_line(d3, 3, MARGIN_X + 60, "• Jumlah hari dalam 1 minggu = 7 hari")
write_on_line(d3, 4, MARGIN_X + 60, "• Setiap kejadian kecelakaan berpeluang sama dan saling bebas")

write_on_line(d3, 5, MARGIN_X + 25, "Ditanya :", font=f_label)
write_on_line(d3, 6, MARGIN_X + 60, "Peluang semua kecelakaan terjadi pada hari yang sama persis?")

write_on_line(d3, 7, MARGIN_X + 25, "Jawaban :", font=f_label)
write_on_line(d3, 8, MARGIN_X + 60, "Total ruang sampel penempatan hari : n(S) = 7^7 = 823.543 cara")
write_on_line(d3, 9, MARGIN_X + 60, "Kejadian semua kecelakaan di hari yang sama :")
write_on_line(d3, 10, MARGIN_X + 80, "– Kecelakaan ke-1 dapat terjadi di hari apa saja (7 pilihan = 7/7 = 1)")
write_on_line(d3, 11, MARGIN_X + 80, "– 6 kecelakaan berikutnya harus jatuh pada hari yang sama (peluang 1/7 tiap hari)")
write_on_line(d3, 12, MARGIN_X + 60, "Maka peluang total kejadian :")
write_on_line(d3, 13, MARGIN_X + 80, "P(A) = 1 × (1/7)^6 = 1 / 7^6 = 1 / 117.649", font=f_math)
write_on_line(d3, 14, MARGIN_X + 60, "Jadi, peluang ketujuh kecelakaan di hari sama adalah 1/117.649.", font=f_math)

# ---------- SOAL 44 ----------
draw_circled_num(d3, MARGIN_X - 60, 180 + 17 * 68 - 34, "44")
write_on_line(d3, 16, MARGIN_X + 25, "Peluang Mengambil 8 Sepatu Tanpa Pasangan yang Sama", font=f_title, underline=True)

write_on_line(d3, 17, MARGIN_X + 25, "Diketahui :", font=f_label)
write_on_line(d3, 18, MARGIN_X + 60, "• Terdapat 10 pasang sepatu di lemari = 20 buah sepatu")
write_on_line(d3, 19, MARGIN_X + 60, "• Diambil 8 buah sepatu secara acak")
write_on_line(d3, 20, MARGIN_X + 60, "• Syarat : tidak ada sepasang sepatu pun yang terambil (semua beda pasang)")

write_on_line(d3, 21, MARGIN_X + 25, "Ditanya :", font=f_label)
write_on_line(d3, 22, MARGIN_X + 60, "Berapa peluang tidak ada sepasang sepatu yang terambil?")

write_on_line(d3, 23, MARGIN_X + 25, "Jawaban :", font=f_label)
write_on_line(d3, 24, MARGIN_X + 60, "1) Banyak cara mengambil 8 sepatu dari total 20 sepatu :")
write_on_line(d3, 25, MARGIN_X + 80, "n(S) = C(20, 8) = 20! / (8! × 12!) = 125.970", font=f_math)
write_on_line(d3, 26, MARGIN_X + 60, "2) Banyak cara memilih 8 pasang berbeda dari 10 pasang yang ada :")
write_on_line(d3, 27, MARGIN_X + 80, "C(10, 8) = C(10, 2) = (10 × 9) / 2 = 45 pasang", font=f_math)
write_on_line(d3, 28, MARGIN_X + 60, "3) Dari setiap pasang yang terpilih, pilih 1 sepatu (kiri atau kanan) :")
write_on_line(d3, 29, MARGIN_X + 80, "2^8 = 256 cara", font=f_math)
write_on_line(d3, 30, MARGIN_X + 60, "4) Banyak kejadian A : n(A) = C(10, 8) × 2^8 = 45 × 256 = 11.520", font=f_math)
write_on_line(d3, 31, MARGIN_X + 60, "5) Peluang kejadian A :", font=f_math)
write_on_line(d3, 32, MARGIN_X + 80, "P(A) = n(A) / n(S) = 11.520 / 125.970 = 384 / 4.199 ≈ 0,0915 (9,15%)", font=f_math)

p3_path = r"C:\Users\nnnnn\Downloads\Lembar_Tulis_Tangan_P3_Soal_43-44.png"
im3.save(p3_path, "PNG", dpi=(300, 300))
print("Saved Page 3:", p3_path)

# ==================== PAGE 4: SOAL 45 (1 HALAMAN PENUH) ====================
im4 = create_base_paper()
d4 = ImageDraw.Draw(im4)

draw_circled_num(d4, MARGIN_X - 60, 180 + 1 * 68 - 34, "45")
write_on_line(d4, 0, MARGIN_X + 25, "Peluang 10 Penumpang Lift Keluar di Lantai Berbeda", font=f_title, underline=True)

write_on_line(d4, 1, MARGIN_X + 25, "Diketahui :", font=f_label)
write_on_line(d4, 2, MARGIN_X + 60, "• Jumlah orang yang masuk lift pada lantai dasar = 10 orang")
write_on_line(d4, 3, MARGIN_X + 60, "• Gedung bertingkat 20 (terdapat 20 lantai tujuan : lantai 1 s.d. 20)")
write_on_line(d4, 4, MARGIN_X + 60, "• Setiap orang memilih satu lantai tujuan secara acak dan saling bebas")

write_on_line(d4, 5, MARGIN_X + 25, "Ditanya :", font=f_label)
write_on_line(d4, 6, MARGIN_X + 60, "Berapa peluang kesepuluh orang keluar pada lantai/tingkat yang berbeda?")

write_on_line(d4, 7, MARGIN_X + 25, "Jawaban :", font=f_label)
write_on_line(d4, 8, MARGIN_X + 60, "1) Menentukan Total Ruang Sampel n(S) :")
write_on_line(d4, 9, MARGIN_X + 90, "Setiap orang dari 10 penumpang memiliki 20 kemungkinan lantai tujuan.")
write_on_line(d4, 10, MARGIN_X + 90, "Maka total semua kemungkinan pemilihan lantai adalah :")
write_on_line(d4, 11, MARGIN_X + 110, "n(S) = 20 × 20 × ... × 20 (sebanyak 10 faktor)", font=f_math)
write_on_line(d4, 12, MARGIN_X + 110, "     = 20^10 = 10.240.000.000.000 cara (10,24 triliun)", font=f_math)

write_on_line(d4, 14, MARGIN_X + 60, "2) Menentukan Titik Sampel Kejadian A (Semua Keluar di Lantai Berbeda) :")
write_on_line(d4, 15, MARGIN_X + 90, "Menggunakan aturan permutasi P(20, 10) :")
write_on_line(d4, 16, MARGIN_X + 90, "• Orang ke-1 memiliki 20 pilihan lantai")
write_on_line(d4, 17, MARGIN_X + 90, "• Orang ke-2 memiliki 19 pilihan lantai tersisa")
write_on_line(d4, 18, MARGIN_X + 90, "• Orang ke-3 memiliki 18 pilihan lantai tersisa")
write_on_line(d4, 19, MARGIN_X + 90, "  ... dan seterusnya sampai orang ke-10 memiliki 11 pilihan lantai.")
write_on_line(d4, 20, MARGIN_X + 110, "n(A) = P(20, 10) = 20 × 19 × 18 × 17 × 16 × 15 × 14 × 13 × 12 × 11", font=f_math)
write_on_line(d4, 21, MARGIN_X + 110, "     = 670.442.572.800 cara (670,44 miliar)", font=f_math)

write_on_line(d4, 23, MARGIN_X + 60, "3) Menghitung Nilai Peluang Kejadian P(A) :")
write_on_line(d4, 24, MARGIN_X + 110, "P(A) = n(A) / n(S)", font=f_math)
write_on_line(d4, 25, MARGIN_X + 110, "     = 670.442.572.800 / 10.240.000.000.000", font=f_math)
write_on_line(d4, 26, MARGIN_X + 110, "     = 0,0654729075", font=f_math)
write_on_line(d4, 27, MARGIN_X + 110, "     ≈ 6,55%", font=f_math)

write_on_line(d4, 29, MARGIN_X + 60, "Kesimpulan :", font=f_label)
write_on_line(d4, 30, MARGIN_X + 60, "Jadi, peluang kesepuluh penumpang keluar pada lantai yang berbeda adalah", font=f_math)
write_on_line(d4, 31, MARGIN_X + 60, "0,0654729075 atau sekitar 6,55%.", font=f_math)

p4_path = r"C:\Users\nnnnn\Downloads\Lembar_Tulis_Tangan_P4_Soal_45.png"
im4.save(p4_path, "PNG", dpi=(300, 300))
print("Saved Page 4:", p4_path)
