import re
import glob
import sys
sys.stdout.reconfigure(encoding='utf-8')

source_files = glob.glob(r'c:\Users\31085\Desktop\电力系统专题训练\MinerU_markdown_火哥电气考研*.md')
source_texts = []
for f in source_files:
    with open(f, 'r', encoding='utf-8') as file:
        source_texts.append(file.read())
combined_source = '\n\n'.join(source_texts)

# Precompute mapping from zh index to original index
source_zh = []
zh_to_src = []
for i, char in enumerate(combined_source):
    if '\u4e00' <= char <= '\u9fa5':
        source_zh.append(char)
        zh_to_src.append(i)

source_zh_str = ''.join(source_zh)

def extract_chinese(text):
    return ''.join(re.findall(r'[\u4e00-\u9fa5]+', text))

def find_in_source(query_text):
    query_text = query_text.replace('**【题干】**', '').replace('**【问题】**', '')
    query_zh = extract_chinese(query_text)
    if len(query_zh) < 15:
        return None
    
    # Try finding varying lengths of snippets starting from the beginning
    idx = -1
    for start_len in [20, 15, 10]:
        start_snippet = query_zh[:start_len]
        idx = source_zh_str.find(start_snippet)
        if idx != -1:
            break
            
    if idx == -1:
        # try starting a bit later
        for start_len in [20, 15, 10]:
            start_snippet = query_zh[5:5+start_len]
            idx = source_zh_str.find(start_snippet)
            if idx != -1:
                idx -= 5
                break
                
    if idx == -1:
        return None
        
    end_zh_idx = idx + len(query_zh) - 1
    
    if end_zh_idx >= len(zh_to_src):
        end_zh_idx = len(zh_to_src) - 1
        
    start_src_idx = zh_to_src[idx]
    end_src_idx = zh_to_src[end_zh_idx]
    
    while end_src_idx < len(combined_source) and combined_source[end_src_idx] not in ('\n', '#', '】', '📌'):
        end_src_idx += 1
        if end_src_idx - zh_to_src[end_zh_idx] > 300:
            break
            
    return combined_source[start_src_idx:end_src_idx].strip()


target_files = [
    r'c:\Users\31085\Desktop\电力系统专题训练\期末题--第三章.md',
    r'c:\Users\31085\Desktop\电力系统专题训练\历年真题--第三章.md'
]

for filepath in target_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    blocks = re.split(r'(📌 题目.*?)\n', content)
    new_content = blocks[0]
    
    for i in range(1, len(blocks), 2):
        title = blocks[i]
        body = blocks[i+1]
        
        m = re.search(r'(\*\*【题干】\*\*.*?)(\n\n\*\*【交叉对比)', body, re.DOTALL)
        if m:
            question_block = m.group(1)
            source_match = find_in_source(question_block)
            if source_match:
                formatted_source = "**【原题精准提取】**\n> " + source_match.replace('\n', '\n> ')
                body = body.replace(question_block, formatted_source)
            else:
                print(f"Failed to find match for {title.strip()}")
        else:
            print(f"Regex didn't match the body structure for {title.strip()}")
        
        new_content += title + '\n' + body
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

print("Replacement logic v5 completed.")
