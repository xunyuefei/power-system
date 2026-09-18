import math
from PIL import Image, ImageDraw

def create_icon(size):
    # Create image with RGBA
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Rounded rectangle background
    corner_radius = int(size * 0.22)
    # Gradient simulation from deep slate/indigo to electric blue
    for i in range(size):
        ratio = i / size
        # Top-left (15, 23, 42) -> bottom-right (29, 78, 216) -> cyan (6, 182, 212)
        r = int(15 * (1 - ratio) + 20 * ratio)
        g = int(23 * (1 - ratio) + 90 * ratio)
        b = int(42 * (1 - ratio) + 220 * ratio)
        # We can draw horizontal line slices clipped by rounded rect
    
    # Draw nice smooth rounded rect background
    # Background color: #0f172a with subtle border
    draw.rounded_rectangle([(0, 0), (size - 1, size - 1)], radius=corner_radius, fill=(15, 23, 42, 255), outline=(56, 189, 248, 180), width=max(2, int(size * 0.03)))
    
    # Internal soft glow ring
    padding = int(size * 0.08)
    draw.rounded_rectangle([(padding, padding), (size - 1 - padding, size - 1 - padding)], radius=int(corner_radius * 0.7), outline=(37, 99, 235, 100), width=max(1, int(size * 0.015)))

    # Draw Power Tower / Lightning Bolt
    # Lightning bolt polygon (normalized coordinates 0 to 1)
    # Centers around (0.5, 0.5)
    points = [
        (0.53, 0.16),  # top point
        (0.30, 0.50),  # mid-left
        (0.47, 0.50),  # mid-step right
        (0.38, 0.84),  # bottom tip
        (0.72, 0.44),  # mid-right
        (0.55, 0.44),  # mid-step left
    ]
    scaled_points = [(int(x * size), int(y * size)) for x, y in points]
    
    # Draw glow for the lightning
    for offset in range(max(1, int(size * 0.04)), 0, -max(1, int(size * 0.01))):
        glow_points = []
        for x, y in scaled_points:
            # push outward slightly
            glow_points.append((x, y))
        draw.polygon(scaled_points, fill=(250, 204, 21, 60)) # yellow amber glow
    
    # Draw main lightning bolt (amber/yellow #fbbf24 to #f59e0b)
    draw.polygon(scaled_points, fill=(251, 191, 36, 255), outline=(254, 240, 138, 255), width=max(1, int(size * 0.015)))
    
    # Draw subtle power waves / frequency sinusoid underneath
    sin_y_base = int(size * 0.76)
    wave_points = []
    for x in range(int(size * 0.22), int(size * 0.78)):
        rel_x = (x - size * 0.22) / (size * 0.56)
        y = sin_y_base + int(math.sin(rel_x * 4 * math.pi) * size * 0.04)
        wave_points.append((x, y))
    
    if len(wave_points) > 1:
        draw.line(wave_points, fill=(56, 189, 248, 220), width=max(2, int(size * 0.025)))
        
    return img

def main():
    target_dir = r"c:\Users\31085\Desktop\电力系统专题训练\power-system-web\docs\public"
    
    # 512x512
    img512 = create_icon(512)
    img512.save(f"{target_dir}\\pwa-512x512.png", "PNG")
    print("Saved pwa-512x512.png")
    
    # 192x192
    img192 = img512.resize((192, 192), Image.Resampling.LANCZOS)
    img192.save(f"{target_dir}\\pwa-192x192.png", "PNG")
    print("Saved pwa-192x192.png")
    
    # apple-touch-icon 180x180
    img180 = img512.resize((180, 180), Image.Resampling.LANCZOS)
    img180.save(f"{target_dir}\\apple-touch-icon.png", "PNG")
    print("Saved apple-touch-icon.png")
    
    # favicon.ico 64x64
    img64 = img512.resize((64, 64), Image.Resampling.LANCZOS)
    img64.save(f"{target_dir}\\favicon.ico", format="ICO")
    print("Saved favicon.ico")

    # Also save svg
    svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e3a8a" />
    </linearGradient>
    <linearGradient id="bolt" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#bg)" stroke="#38bdf8" stroke-width="12" />
  <rect x="40" y="40" width="432" height="432" rx="72" fill="none" stroke="#2563eb" stroke-width="6" opacity="0.4" />
  <polygon points="271,82 153,256 240,256 194,430 368,225 281,225" fill="url(#bolt)" stroke="#fef08a" stroke-width="6" />
  <path d="M 112 390 Q 148 370 184 390 T 256 390 T 328 390 T 400 390" fill="none" stroke="#38bdf8" stroke-width="10" stroke-linecap="round" />
</svg>'''
    with open(f"{target_dir}\\favicon.svg", "w", encoding="utf-8") as f:
        f.write(svg_content)
    print("Saved favicon.svg")

if __name__ == "__main__":
    main()
