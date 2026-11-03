import os
from PIL import Image

image_paths = [
    r"C:\Users\nnnnn\AppData\Local\hermes\cache\images\img_91ae1fe1c886.jpg", # Halaman 1 (Soal 39, 40, awal 41)
    r"C:\Users\nnnnn\AppData\Local\hermes\cache\images\img_ff91e4350c93.jpg", # Halaman 2 (Lanjutan 41, 42, 43)
    r"C:\Users\nnnnn\AppData\Local\hermes\cache\images\img_265bdc4c3532.jpg"  # Halaman 3 (Soal 44, 45)
]

output_pdf = r"C:\Users\nnnnn\Downloads\Tugas_Matdis_Tulis_Tangan_Soal_39-45.pdf"

images = []
for p in image_paths:
    im = Image.open(p)
    if im.mode != "RGB":
        im = im.convert("RGB")
    images.append(im)

images[0].save(
    output_pdf,
    "PDF",
    resolution=150.0,
    save_all=True,
    append_images=images[1:]
)

print(f"PDF berhasil dibuat: {output_pdf}")
print(f"Ukuran file: {os.path.getsize(output_pdf)} bytes")
