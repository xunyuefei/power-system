import sys
import re

files = [
    r"c:\Users\31085\Desktop\电力系统专题训练\MinerU_markdown_火哥电气考研2027届初试系列资料-历年真题与期未题（1）_2100576301922672640.md",
    r"c:\Users\31085\Desktop\电力系统专题训练\MinerU_markdown_火哥电气考研2027届初试系列资料-历年真题与期未题（2）_2100576848260128768.md"
]

with open("test_match.txt", "w", encoding="utf-8") as out_f:
    for file_path in files:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        matches = re.findall(r'.{0,50}火哥.{0,200}', content)
        out_f.write(f"--- {file_path} ---\n")
        out_f.write("\n\n".join(matches[:10]))
        out_f.write("\n\n")
