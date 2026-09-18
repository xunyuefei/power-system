import os
import re

chapters_meta = {
    1: "第 1 章：基本知识与元件模型",
    2: "第 2 章：简单电力系统潮流计算",
    3: "第 3 章：电力系统无功功率与电压调整",
    4: "第 4 章：电力系统潮流计算机算法与网络方程",
    5: "第 5 章：电力系统有功功率与频率调整",
    6: "第 6 章：电力系统短路的基本概念与对称短路",
    7: "第 7 章：不对称短路与对称分量法",
    8: "第 8 章：电力系统稳定性分析"
}

docs_dir = r"c:\Users\31085\Desktop\电力系统专题训练\power-system-web\docs"

for ch, title in chapters_meta.items():
    filepath = os.path.join(docs_dir, f"chapter{ch}.md")
    
    # Check if original had specific title
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            lines = [l.strip() for l in f.readlines() if l.strip()]
            if lines and lines[0].startswith("#"):
                t = lines[0].lstrip("#").strip()
                if "《" in t:
                    title = t
    
    content = f"""# {title}

<ChapterDeck :chapter="{ch}" />
"""
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated chapter{ch}.md")
