import sys
import re

files = [
    r"c:\Users\31085\Desktop\电力系统专题训练\MinerU_markdown_火哥电气考研2027届初试系列资料-历年真题与期未题（1）_2100576301922672640.md",
    r"c:\Users\31085\Desktop\电力系统专题训练\MinerU_markdown_火哥电气考研2027届初试系列资料-历年真题与期未题（2）_2100576848260128768.md"
]

sentences = [
    r'火哥电气考研——华电考研最大最权威、校内校外口碑最强的辅导团队',
    r'加入qq答疑群865905443，享受更多电子版资料与答疑服务；火哥微信huogekaoyan4',
    r'加入 qq 答疑群 865905443，享受更多电子版资料与答疑服务；火哥微信 huogekaoyan4',
    r'关注“火哥电气考研”微信公众号，获取一切有关华电考研和电气就业的信息',
    r'加入火哥电气考研资料答疑 QQ 群，如资料有疑问，请及时反馈群里，群号 865905443。',
    r'重要说明：本套题目完整版火哥\(微信号 huogekaoyan4\)会给大家免费直播讲解，已经讲解的在火哥 b 站有回访，请加入资料答疑 QQ 群，讲解时间会在 QQ 群内通知。',
    r'加入\s*[qQ]{2}\s*答疑群\s*865905443[^；]*；火哥微信\s*huogekaoyan4',
    r'重要说明：本套题目完整版火哥.*?QQ 群内通知。',
]

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for s in sentences:
        content = re.sub(s, '', content, flags=re.IGNORECASE | re.DOTALL)
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

# Verification
for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    leftovers = re.findall(r'.{0,30}火哥.{0,30}', content)
    if leftovers:
        print(f"Leftovers in {file_path}:")
        for l in leftovers:
            print(repr(l))
    else:
        print(f"All clean in {file_path}")
