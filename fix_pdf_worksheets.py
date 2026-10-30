# -*- coding: utf-8 -*-
"""
Converts the high-resolution Thai writing worksheets (originally JPG from Google Drive)
into proper, 100% valid standard PDF documents as well as JPG images.
"""
from PIL import Image
import shutil
import os

materials_dir = "materials"

consonant_pdf = os.path.join(materials_dir, "lembar_menulis_konsonan_thai.pdf")
vowel_pdf = os.path.join(materials_dir, "lembar_menulis_vokal_thai.pdf")

consonant_jpg = os.path.join(materials_dir, "lembar_menulis_konsonan_thai.jpg")
vowel_jpg = os.path.join(materials_dir, "lembar_menulis_vokal_thai.jpg")

# 1. Back up / copy raw JPGs
if not os.path.exists(consonant_jpg):
    shutil.copy2(consonant_pdf, consonant_jpg)
    print("Saved consonant JPG.")

if not os.path.exists(vowel_jpg):
    shutil.copy2(vowel_pdf, vowel_jpg)
    print("Saved vowel JPG.")

# 2. Convert to genuine PDF with Pillow
print("Converting consonant worksheet to authentic PDF...")
im_consonant = Image.open(consonant_jpg)
im_consonant = im_consonant.convert("RGB")
im_consonant.save(consonant_pdf, "PDF", resolution=300.0, quality=95)
print(f"Generated {consonant_pdf} successfully! Size: {os.path.getsize(consonant_pdf)} bytes")

print("Converting vowel worksheet to authentic PDF...")
im_vowel = Image.open(vowel_jpg)
im_vowel = im_vowel.convert("RGB")
im_vowel.save(vowel_pdf, "PDF", resolution=300.0, quality=95)
print(f"Generated {vowel_pdf} successfully! Size: {os.path.getsize(vowel_pdf)} bytes")

# 3. Verify magic bytes
with open(consonant_pdf, 'rb') as f:
    c_head = f.read(20)
print(f"Consonant PDF magic header: {c_head}")

with open(vowel_pdf, 'rb') as f:
    v_head = f.read(20)
print(f"Vowel PDF magic header: {v_head}")
