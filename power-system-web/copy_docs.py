import os
import shutil

source_dir = r"C:\Users\31085\Desktop\电力系统专题训练"
dest_dir = os.path.join(source_dir, "power-system-web", "docs")

os.makedirs(dest_dir, exist_ok=True)

files_to_copy = {
    "简答题--第一章.md": "chapter1.md",
    "简答题--第二章.md": "chapter2.md",
    "简答--第三章.md": "chapter3.md",
    "简答题--第四章.md": "chapter4.md",
    "简答题--第五章.md": "chapter5.md",
    "简答题--第六章.md": "chapter6.md",
    "简答题--第七章.md": "chapter7.md",
    "简答题--第八章.md": "chapter8.md",
}

for src, dest in files_to_copy.items():
    src_path = os.path.join(source_dir, src)
    dest_path = os.path.join(dest_dir, dest)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dest_path)
        print(f"Copied {src} to {dest}")
    else:
        print(f"Warning: {src} not found!")
