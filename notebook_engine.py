import os
import random
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# Canvas: Standard ruled book page resolution
# Width: 1800, Height: 2600 (High-res A4 / notebook proportion)
LINE_H = 68          # Line spacing
HEADER_H = 180       # Top margin
MARGIN_X = 140       # Left vertical margin line (pink/red)
LINE_COUNT = 34      # Total ruled lines

FONT_PATH = r"C:\Windows\Fonts\segoepr.ttf"
FONT_BOLD_PATH = r"C:\Windows\Fonts\segoeprb.ttf"

f_title = ImageFont.truetype(FONT_BOLD_PATH, 34)
f_num = ImageFont.truetype(FONT_BOLD_PATH, 32)
f_label = ImageFont.truetype(FONT_BOLD_PATH, 30)
f_text = ImageFont.truetype(FONT_PATH, 29)
f_math = ImageFont.truetype(FONT_BOLD_PATH, 29)
f_math_sym = ImageFont.truetype(FONT_PATH, 28)

def create_base_paper():
    # Warm realistic notebook paper background (off-white)
    im = Image.new("RGB", (1800, 2600), (252, 252, 250))
    draw = ImageDraw.Draw(im)
    
    # 1. Subtle horizontal lines (soft bluish-gray)
    line_color = (215, 225, 235)
    for i in range(LINE_COUNT):
        y = HEADER_H + i * LINE_H
        draw.line([0, y, 1800, y], fill=line_color, width=2)
        
    # 2. Vertical margin line (faint pink/red line)
    margin_color = (245, 180, 185)
    draw.line([MARGIN_X, 0, MARGIN_X, 2600], fill=margin_color, width=2)
    
    # Subtle notebook binder holes or margin space
    # SiDU brand watermark at bottom left
    f_sidu = ImageFont.truetype(r"C:\Windows\Fonts\arial.ttf", 26)
    draw.text((MARGIN_X + 25, 2600 - 65), "SiDU", fill=(210, 220, 230), font=f_sidu)
    
    return im

def draw_circled_num(draw, x, y, num_str):
    # e.g., 39 inside circle
    r = 22
    draw.ellipse([x - r, y - r, x + r, y + r], outline=(30, 30, 30), width=2)
    bbox = draw.textbbox((0, 0), num_str, font=f_num)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    draw.text((x - w/2, y - h/2 - 4), num_str, fill=(20, 20, 25), font=f_num)

# Helper to write text sitting on line index
# line_idx: 0 to LINE_COUNT-1
# baseline y = HEADER_H + (line_idx + 1) * LINE_H
def write_on_line(draw, line_idx, x, text, font=f_text, fill=(20, 25, 30), y_offset=-42, underline=False):
    baseline_y = HEADER_H + (line_idx + 1) * LINE_H
    y = baseline_y + y_offset
    draw.text((x, y), text, fill=fill, font=font)
    if underline:
        bbox = draw.textbbox((x, y), text, font=font)
        uy = baseline_y - 6
        draw.line([x, uy, bbox[2] + 4, uy], fill=fill, width=2)

print("Base setup ready.")
