"""
Generate crisp PNG icons (192x192, 512x512, 180x180) for PWA.
"""
from PIL import Image, ImageDraw, ImageFilter
import math

def create_pwa_icon(size):
    # Create image with high resolution supersampling (2x)
    render_size = size * 2
    img = Image.new("RGBA", (render_size, render_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    margin = int(render_size * 0.05)
    radius = int(render_size * 0.22)
    box = [margin, margin, render_size - margin, render_size - margin]

    # Draw background gradient-like rounded rect
    # Background: Deep tech navy (#0a0e17 -> #0b1329)
    draw.rounded_rectangle(box, radius=radius, fill=(11, 19, 41, 255), outline=(56, 189, 248, 220), width=int(render_size * 0.018))

    # Inner subtle glow
    inner_box = [margin + int(render_size * 0.03), margin + int(render_size * 0.03),
                 render_size - margin - int(render_size * 0.03), render_size - margin - int(render_size * 0.03)]
    draw.rounded_rectangle(inner_box, radius=radius - int(render_size * 0.03),
                           outline=(99, 102, 241, 70), width=int(render_size * 0.012))

    cx, cy = render_size / 2, render_size / 2

    # Draw Circuit Lines / Power Grid nodes
    node_color = (56, 189, 248, 120)
    wire_width = max(2, int(render_size * 0.01))
    
    # Horizontal bus lines
    y1 = int(render_size * 0.36)
    y2 = int(render_size * 0.64)
    x_l1, x_l2 = int(render_size * 0.16), int(render_size * 0.38)
    x_r1, x_r2 = int(render_size * 0.62), int(render_size * 0.84)
    
    draw.line([(x_l1, y1), (x_l2, y1)], fill=node_color, width=wire_width)
    draw.line([(x_r1, y1), (x_r2, y1)], fill=node_color, width=wire_width)
    draw.line([(x_l1, y2), (x_l2, y2)], fill=node_color, width=wire_width)
    draw.line([(x_r1, y2), (x_r2, y2)], fill=node_color, width=wire_width)

    # Bus nodes
    node_r = int(render_size * 0.02)
    draw.ellipse([x_l2 - node_r, y1 - node_r, x_l2 + node_r, y1 + node_r], fill=(56, 189, 248, 200))
    draw.ellipse([x_r1 - node_r, y1 - node_r, x_r1 + node_r, y1 + node_r], fill=(56, 189, 248, 200))
    draw.ellipse([x_l2 - node_r, y2 - node_r, x_l2 + node_r, y2 + node_r], fill=(56, 189, 248, 200))
    draw.ellipse([x_r1 - node_r, y2 - node_r, x_r1 + node_r, y2 + node_r], fill=(56, 189, 248, 200))

    # Center Lightning Bolt
    # Coordinates normalized from 0..512
    bolt_points_norm = [
        (276, 96),
        (172, 264),
        (248, 264),
        (224, 416),
        (344, 236),
        (268, 236)
    ]
    bolt_points = [(int(x / 512.0 * render_size), int(y / 512.0 * render_size)) for (x, y) in bolt_points_norm]

    # Draw bolt glow shadow
    shadow_img = Image.new("RGBA", (render_size, render_size), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow_img)
    s_draw.polygon(bolt_points, fill=(56, 189, 248, 180))
    shadow_img = shadow_img.filter(ImageFilter.GaussianBlur(radius=int(render_size * 0.035)))
    img = Image.alpha_composite(img, shadow_img)

    # Re-draw on combined image
    draw = ImageDraw.Draw(img)
    # Bright golden electric bolt with cyan edge
    draw.polygon(bolt_points, fill=(250, 204, 21, 255), outline=(255, 255, 255, 255), width=max(2, int(render_size * 0.01)))

    # Downscale smoothly to target size (supersampling antialiasing)
    final_img = img.resize((size, size), Image.Resampling.LANCZOS)
    return final_img

if __name__ == "__main__":
    icon_512 = create_pwa_icon(512)
    icon_512.save("icon-512.png", format="PNG")
    print("Generated icon-512.png")

    icon_192 = create_pwa_icon(192)
    icon_192.save("icon-192.png", format="PNG")
    print("Generated icon-192.png")

    icon_180 = create_pwa_icon(180)
    icon_180.save("apple-touch-icon.png", format="PNG")
    print("Generated apple-touch-icon.png")

    icon_32 = create_pwa_icon(32)
    icon_32.save("favicon.png", format="PNG")
    print("Generated favicon.png")
