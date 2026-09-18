import re
import glob

all_matches = []
for f in glob.glob(r'c:\Users\31085\Desktop\电力系统专题训练\*.md'):
    c = open(f, encoding='utf-8').read()
    m = re.findall(r'.{0,30}火哥.{0,150}', c, flags=re.DOTALL)
    all_matches.extend(m)

with open(r'c:\Users\31085\Desktop\电力系统专题训练\test_ads.txt', 'w', encoding='utf-8') as f_out:
    f_out.write('\n\n=====\n\n'.join(list(set(all_matches))))
