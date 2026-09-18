import sys
import re

files = [
    r"c:\Users\31085\Desktop\电力系统专题训练\MinerU_markdown_26保定面试精选_2047278266784743424.md",
    r"c:\Users\31085\Desktop\电力系统专题训练\MinerU_markdown_电分考研院校历年真题简答题汇总（2026版火哥整理）1_2047278334371758080.md",
    r"c:\Users\31085\Desktop\电力系统专题训练\MinerU_markdown_电分考研院校历年真题简答题汇总（2026版火哥整理）2_2047278372166627328.md"
]

patterns = [
    r'!\[.*?\]\([^\)]+\)',  # all image links
    r'火哥电气考研——电分考研.{0,150}直播或回放\n?',  # the 3-line block
    r'\(1\)\s*扫一扫加火哥微信.{0,100}加火哥微信。\n?',
    r'\(2\)\s*火哥的\s*[bB]\s*站账号.{0,100}扫一扫关注。\n?',
    r'2025届考研最新简答题在火哥 B 站账号上讲解，请关注火哥 B 站账号，及时查看简答题讲解直播回放。\n?',
    r'大海边的火哥\n?'
]

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for p in patterns:
        content = re.sub(p, '', content, flags=re.DOTALL | re.IGNORECASE)
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Done cleaning.")
