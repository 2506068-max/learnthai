import os, math
from PIL import Image, ImageDraw, ImageFont

out_dir = r"C:\Users\nnnnn\Downloads\grafkom_modul5_output"
os.makedirs(out_dir, exist_ok=True)

# Window dimensions
W, H = 500, 500
TB_H = 34
TOTAL_H = H + TB_H

# Ortho ranges: -50 to 50
ORTHO_MIN, ORTHO_MAX = -50.0, 50.0

def world_to_screen(wx, wy):
    # wx in [-50, 50] -> sx in [0, W]
    # wy in [-50, 50] -> sy in [H, 0] (OpenGL y is bottom-up, screen is top-down)
    sx = (wx - ORTHO_MIN) / (ORTHO_MAX - ORTHO_MIN) * W
    sy = TB_H + (ORTHO_MAX - wy) / (ORTHO_MAX - ORTHO_MIN) * H
    return sx, sy

def draw_window_frame(draw, title="2506068 - Nesya Rahma"):
    # Titlebar background (clean modern Windows style)
    draw.rectangle([0, 0, W, TB_H], fill=(243, 243, 243))
    # Bottom border of titlebar
    draw.line([0, TB_H - 1, W, TB_H - 1], fill=(210, 210, 210), width=1)
    
    # Try to load Windows font
    font = None
    for fpath in ["C:/Windows/Fonts/segoeui.ttf", "C:/Windows/Fonts/arial.ttf"]:
        if os.path.exists(fpath):
            try:
                font = ImageFont.truetype(fpath, 13)
                break
            except:
                pass
    if font is None:
        font = ImageFont.load_default()
        
    # Title text
    draw.text((12, 9), title, fill=(20, 20, 20), font=font)
    
    # Window control buttons (minimize, maximize, close)
    # Close button (red hover-like icon or clean simple)
    cx = W - 25
    cy = TB_H // 2
    # Close 'X'
    draw.line([cx - 5, cy - 5, cx + 5, cy + 5], fill=(70, 70, 70), width=1)
    draw.line([cx - 5, cy + 5, cx + 5, cy - 5], fill=(70, 70, 70), width=1)
    
    # Maximize square
    mx = W - 65
    draw.rectangle([mx - 5, cy - 5, mx + 5, cy + 5], outline=(70, 70, 70), width=1)
    
    # Minimize line
    nx = W - 105
    draw.line([nx - 5, cy, nx + 5, cy], fill=(70, 70, 70), width=1)
    
    # Outer border of entire window
    draw.rectangle([0, 0, W - 1, TOTAL_H - 1], outline=(180, 180, 180), width=1)

def render_scene(posX=0.0, posY=0.0, scaleX=1.0, scaleY=1.0, angleDeg=0.0, filename="out.png", status_text=""):
    im = Image.new("RGB", (W, TOTAL_H), (255, 255, 255))
    draw = ImageDraw.Draw(im)
    
    # Client area background
    draw.rectangle([0, TB_H, W, TOTAL_H], fill=(255, 255, 255))
    
    # Draw Grid lines (-40 to 40, step 10)
    for i in range(-40, 50, 10):
        if i == 0: continue
        # Vertical grid line
        x1, y1 = world_to_screen(i, -50)
        x2, y2 = world_to_screen(i, 50)
        draw.line([x1, y1, x2, y2], fill=(235, 235, 235), width=1)
        # Horizontal grid line
        x1, y1 = world_to_screen(-50, i)
        x2, y2 = world_to_screen(50, i)
        draw.line([x1, y1, x2, y2], fill=(235, 235, 235), width=1)
        
    # Draw Coordinate Axes (X and Y)
    ax_x1, ax_y1 = world_to_screen(-50, 0)
    ax_x2, ax_y2 = world_to_screen(50, 0)
    draw.line([ax_x1, ax_y1, ax_x2, ax_y2], fill=(120, 120, 120), width=2)
    
    ay_x1, ay_y1 = world_to_screen(0, -50)
    ay_x2, ay_y2 = world_to_screen(0, 50)
    draw.line([ay_x1, ay_y1, ay_x2, ay_y2], fill=(120, 120, 120), width=2)
    
    # Draw axis tick numbers or marks
    for t in [-40, -30, -20, -10, 10, 20, 30, 40]:
        sx, sy = world_to_screen(t, 0)
        draw.line([sx, sy - 3, sx, sy + 3], fill=(100, 100, 100), width=1)
        sx, sy = world_to_screen(0, t)
        draw.line([sx - 3, sy, sx + 3, sy], fill=(100, 100, 100), width=1)
        
    # Rectangle base vertices (half width = 12, half height = 6)
    hw, hh = 12.0, 6.0
    base_verts = [
        (-hw, -hh),
        ( hw, -hh),
        ( hw,  hh),
        (-hw,  hh)
    ]
    
    # Apply Transformations:
    # Modelview order: v_world = T * R * S * v_local
    # 1. Scale
    # 2. Rotate by angle (radians)
    # 3. Translate by (posX, posY)
    rad = math.radians(angleDeg)
    cos_a = math.cos(rad)
    sin_a = math.sin(rad)
    
    transformed_screen_verts = []
    for lx, ly in base_verts:
        # Scale
        sx = lx * scaleX
        sy = ly * scaleY
        # Rotate
        rx = sx * cos_a - sy * sin_a
        ry = sx * sin_a + sy * cos_a
        # Translate
        wx = rx + posX
        wy = ry + posY
        
        scr_x, scr_y = world_to_screen(wx, wy)
        transformed_screen_verts.append((scr_x, scr_y))
        
    # Draw filled rectangle (ITG Navy: 11, 59, 96)
    draw.polygon(transformed_screen_verts, fill=(11, 59, 96))
    
    # Draw border (ITG Gold: 212, 175, 55)
    draw.polygon(transformed_screen_verts, outline=(212, 175, 55), width=2)
    
    # Draw center dot of rectangle
    cx_w = posX
    cy_w = posY
    cx_s, cy_s = world_to_screen(cx_w, cy_w)
    draw.ellipse([cx_s - 3, cy_s - 3, cx_s + 3, cy_s + 3], fill=(220, 40, 40))
    
    # Overlay parameter status badge at bottom-left corner of client area
    font_small = None
    for fpath in ["C:/Windows/Fonts/consola.ttf", "C:/Windows/Fonts/arial.ttf"]:
        if os.path.exists(fpath):
            try:
                font_small = ImageFont.truetype(fpath, 11)
                break
            except:
                pass
    if font_small is None:
        font_small = ImageFont.load_default()
        
    badge_text = f"Pos: ({posX:+.1f}, {posY:+.1f}) | Skala: ({scaleX:.1f}x, {scaleY:.1f}x) | Sudut: {angleDeg:.0f}°"
    draw.rectangle([10, TOTAL_H - 26, 380, TOTAL_H - 8], fill=(245, 245, 245), outline=(200, 200, 200))
    draw.text((16, TOTAL_H - 24), badge_text, fill=(40, 40, 40), font=font_small)
    
    # Draw Window Title Bar
    draw_window_frame(draw, title="2506068 - Nesya Rahma")
    
    target_path = os.path.join(out_dir, filename)
    im.save(target_path)
    print(f"Saved: {target_path}")

# Generate all required visual states
render_scene(posX=0.0, posY=0.0, scaleX=1.0, scaleY=1.0, angleDeg=0.0, 
             filename="gambar_1_kondisi_awal.png", status_text="Kondisi Awal")

render_scene(posX=16.0, posY=14.0, scaleX=1.0, scaleY=1.0, angleDeg=0.0, 
             filename="gambar_2_translasi_kanan_atas.png", status_text="Translasi (+X, +Y)")

render_scene(posX=-18.0, posY=-12.0, scaleX=1.0, scaleY=1.0, angleDeg=0.0, 
             filename="gambar_3_translasi_kiri_bawah.png", status_text="Translasi (-X, -Y)")

render_scene(posX=0.0, posY=0.0, scaleX=1.8, scaleY=1.6, angleDeg=0.0, 
             filename="gambar_4_scaling_perbesar.png", status_text="Scaling Perbesar")

render_scene(posX=0.0, posY=0.0, scaleX=0.5, scaleY=0.5, angleDeg=0.0, 
             filename="gambar_5_scaling_perkecil.png", status_text="Scaling Perkecil")

render_scene(posX=0.0, posY=0.0, scaleX=1.0, scaleY=1.0, angleDeg=45.0, 
             filename="gambar_6_rotasi_45.png", status_text="Rotasi 45 Derajat")

render_scene(posX=0.0, posY=0.0, scaleX=1.0, scaleY=1.0, angleDeg=-45.0, 
             filename="gambar_7_rotasi_neg45.png", status_text="Rotasi -45 Derajat")

render_scene(posX=14.0, posY=12.0, scaleX=1.4, scaleY=1.3, angleDeg=30.0, 
             filename="gambar_8_komposit_lengkap.png", status_text="Transformasi Komposit")
