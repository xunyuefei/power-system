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

def extract_chinese(text):
    return ''.join(re.findall(r'[\u4e00-\u9fa5]+', text))

def find_in_source(query_text, source_text):
    query_zh = extract_chinese(query_text)
    if len(query_zh) < 15:
        return None
    
    # Try to find a exact match of a 20-char substring from the beginning
    for i in range(len(query_zh) - 20):
        snippet = query_zh[i:i+20]
        pattern = r'.*?'.join(list(snippet))
        match = re.search(pattern, source_text, re.DOTALL)
        if match:
            # We found the start! Let's find the end using the last 20 chars
            start_idx = match.start()
            
            suffix = query_zh[-20:]
            end_pattern = r'.*?'.join(list(suffix))
            
            window = source_text[start_idx:start_idx+4000]
            end_match = re.search(end_pattern, window, re.DOTALL)
            
            if end_match:
                end_idx = start_idx + end_match.end()
                return source_text[start_idx:end_idx].strip()
    return None

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
        
        m = re.search(r'(\*\*【题干】\*\*.*?)(\n\n\*\*【交叉对比校验)', body, re.DOTALL)
        if m:
            question_block = m.group(1)
            rest_block = m.group(2)
            
            source_match = find_in_source(question_block, combined_source)
            if source_match:
                # Add our markdown tags to the extracted source
                formatted_source = "**【原题精确提取】**\n\n> " + source_match.replace('\n', '\n> ') + "\n"
                
                body = body.replace(question_block, formatted_source)
            else:
                print(f"Failed to find match for: {title.strip()}")
        
        new_content += title + '\n' + body
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

print("Replacement complete.")
