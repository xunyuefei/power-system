import re
import os

filepath = r'c:\Users\31085\Desktop\电力系统专题训练\scratch.md'
outpath = r'c:\Users\31085\Desktop\电力系统专题训练\期末题--第三章.md'

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Remove trailing numbers from sentences (e.g., '装置5。' -> '装置。', 'Qc​5？' -> 'Qc​？', '》35' -> '》')
# Trailing numbers typically appear right before punctuation: 。, ？, ；, 》
text = re.sub(r'(\d+)([。？；》])', r'\2', text)

# Remove trailing numbers at the very end of paragraphs
text = re.sub(r'(\d+)$', '', text, flags=re.MULTILINE)

# 2. Fix the markdown escaping of equal signs: '\=' -> '='
text = text.replace(r'\=', '=')

# 3. Fix obvious typo in question numbers, e.g., '第43题' is likely '第4题'
text = text.replace('第43题》', '第4题》')

# 4. Remove zero-width spaces (\u200b) that might be lingering around subscripts
text = text.replace('\u200b', '')

with open(outpath, 'w', encoding='utf-8') as f:
    f.write(text)

print("Cleaning complete.")
