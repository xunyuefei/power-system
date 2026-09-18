import sys
import re
import glob

files = glob.glob(r'c:\Users\31085\Desktop\电力系统专题训练\*.md')

sentences = [
    r'火哥电气考研——(?:华电|电分)考研最大最权威、校内校外口碑最强的辅导团队\n*',
    r'加入qq答疑群865905443，享受更多电子版资料与答疑服务；火哥微信huogekaoyan4\n*',
    r'加入 qq 答疑群 865905443，享受更多电子版资料与答疑服务；火哥微信 huogekaoyan4\n*',
    r'关注“火哥电气考研”微信公众号，获取一切有关华电考研和电气就业的信息\n*',
    r'加入火哥电气考研资料答疑 QQ 群，如资料有疑问，请及时反馈群里，群号 865905443。\n*',
    r'重要说明：本套题目完整版火哥\(微信号 huogekaoyan4\)会给大家免费直播讲解，已经讲解的在火哥 b 站有回访，请加入资料答疑 QQ 群，讲解时间会在 QQ 群内通知。\n*',
    r'加入\s*[qQ]{2}\s*答疑群\s*865905443[^；]*；火哥微信\s*huogekaoyan4\n*',
    r'重要说明：本套题目完整版火哥.*?QQ 群内通知。\n*',
    r'重要说明[^\n]*huogekaoyan4[^\n]*\n*',
    r'!\[.*?\]\([^\)]+\)\n*',
    r'火哥电气考研——电分考研.{0,150}直播或回放\n*',
    r'加火哥微信 huogekaoyan4，拉入答疑群，享受更多电子版资料与答疑服务\n*',
    r'关注“火哥电气考研”微信公众号、b 站账号，及时查看更多真题答案解析直播或回放\n*',
    r'\(1\)\s*扫一扫加火哥微信[^\n]*加火哥微信。\n*',
    r'\(2\)\s*火哥的\s*[bB]\s*站账号[^\n]*扫一扫关注。\n*',
    r'2025届考研最新简答题在火哥 B 站账号上讲解，请关注火哥 B 站账号，及时查看简答题讲解直播回放。\n*',
    r'大海边的火哥\n*',
    r'加火哥微信\s*huogekaoyan4.*?答疑服务\n*',
    r'关注“火哥电气考研”微信公众号/b站账号.*?电气就业的信息\n*',
    r'\(1\)扫一扫加火哥微信 huogekaoyan4，可以咨询历年电气考研的招生人数、招生分数线、复试信息，询问电网、各地市供电局就业流程和就业信息均可加火哥微信。\n*',
    r'\(2\)火哥的 b 站账号“火哥电气考研”, 有全国电分考研院校的电气相关的课程视频, 电气考研专业课真题的视频讲解, 往年电网就业相关的经验分享, 扫一扫关注。\n*'
]

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for s in sentences:
        content = re.sub(s, '', content, flags=re.IGNORECASE | re.DOTALL)
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Done cleaning all.")
