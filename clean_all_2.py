import sys
import re
import glob

files = glob.glob(r'c:\Users\31085\Desktop\电力系统专题训练\*.md')

sentences = [
    r'\(1\).*?均可加火哥微信。?\n*',
    r'\(2\).*?扫一扫关注。?\n*',
    r'2025届考研最新简答题在火哥\s*[bB]\s*站账号上讲解，请关注火哥\s*[bB]\s*站账号，及时查看简答题讲解直播回放。?\n*',
    r'关注“火哥电气考研”微信公众号[^\n]*\n*',
    r'加火哥微信[^\n]*\n*',
    r'大海边的火哥\n*',
]

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We should avoid deleting the answer header '# 【火哥电气考研伟哥解析】'
    # So we don't just blindly remove "火哥". We use specific prefixes.
    
    for s in sentences:
        content = re.sub(s, '', content, flags=re.IGNORECASE | re.DOTALL)
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Aggressive cleaning done.")
