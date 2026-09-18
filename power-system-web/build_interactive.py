import os
import re
import difflib
import uuid
import json

def normalize_text(text):
    return re.sub(r'\s+', '', text).strip()

def parse_source_files(source_files):
    qa_list = []
    for file_path in source_files:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        blocks = re.split(r'#?\s*【火哥电气考研伟哥解析】[，,]*\s*(?:注：.*)?', content)
        for i in range(len(blocks) - 1):
            q_match = list(re.finditer(r'#?\s*【([^】]+)】\s*\n+((?:(?!\n\n#).)*)$', blocks[i], re.DOTALL))
            if not q_match:
                q_match = list(re.finditer(r'【([^】]+)】\s*\n+((?:(?!【).)*)$', blocks[i], re.DOTALL))
            
            if q_match:
                source_tag = q_match[-1].group(1).strip()
                q_text = q_match[-1].group(2).strip()
                
                next_tag_match = re.search(r'#?\s*【[^】]+】', blocks[i+1])
                if next_tag_match:
                    ans_text = blocks[i+1][:next_tag_match.start()].strip()
                else:
                    ans_text = blocks[i+1].strip()
                    
                qa_list.append({
                    'source': source_tag,
                    'q_text': q_text,
                    'norm_q': normalize_text(q_text),
                    'answer': ans_text
                })
    return qa_list

def find_best_answer(norm_q, qa_list):
    for qa in qa_list:
        if qa['norm_q'] == norm_q or norm_q in qa['norm_q'] or qa['norm_q'] in norm_q:
            return qa['answer']
            
    q_texts = [qa['norm_q'] for qa in qa_list]
    matches = difflib.get_close_matches(norm_q, q_texts, n=1, cutoff=0.6)
    if matches:
        for qa in qa_list:
            if qa['norm_q'] == matches[0]:
                return qa['answer']
    return "*(未找到匹配的答案，请核对原文件)*"

def process_chapter(filepath, qa_list, chapter_num, global_cards):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # The original file has been converted to <QuizCard> format already in the previous run.
    # Wait, if we run it again on chapter1.md, it already has <QuizCard>. 
    # We should parse the <QuizCard> tags instead.
    
    def replacer(match):
        source_tag = match.group(1).strip()
        q_text_clean = match.group(2).strip()
        answer = match.group(3).strip()
        
        # In case the file was not processed, we need to handle raw markdown too, but we know it's already processed.
        # Wait, some questions might be raw. Let's just match the QuizCard block.
        
        card_id = str(uuid.uuid4())
        
        global_cards.append({
            "id": card_id,
            "chapter": chapter_num,
            "sourceTag": source_tag,
            "question": q_text_clean,
            "answer": answer
        })
        
        card = f"""
<QuizCard id="{card_id}">
<template #question>

**【{source_tag}】**  
{q_text_clean}

</template>
<template #answer>

{answer}

</template>
</QuizCard>
"""
        return card

    # Match existing <QuizCard>
    pattern = r'<QuizCard(?: id="[^"]*")?>\s*<template #question>\s*(?:\d+\.\s*)?\*\*【(.*?)】\*\*\s*\n(.*?)\s*</template>\s*<template #answer>\s*(.*?)\s*</template>\s*</QuizCard>'
    
    new_content = re.sub(pattern, replacer, content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

def main():
    base_dir = r"C:\Users\31085\Desktop\电力系统专题训练"
    source_files = [
        os.path.join(base_dir, "MinerU_markdown_电分考研院校历年真题简答题汇总（2026版火哥整理）1_2047278334371758080.md"),
        os.path.join(base_dir, "MinerU_markdown_电分考研院校历年真题简答题汇总（2026版火哥整理）2_2047278372166627328.md")
    ]
    
    print("Parsing source files...")
    qa_list = parse_source_files(source_files)
    print(f"Extracted {len(qa_list)} Q&A pairs from source.")
    
    global_cards = []
    
    docs_dir = os.path.join(base_dir, "power-system-web", "docs")
    for i in range(1, 9):
        chap_file = os.path.join(docs_dir, f"chapter{i}.md")
        if os.path.exists(chap_file):
            print(f"Processing chapter {i}...")
            process_chapter(chap_file, qa_list, i, global_cards)
            
    public_dir = os.path.join(docs_dir, "public")
    os.makedirs(public_dir, exist_ok=True)
    cards_json_path = os.path.join(public_dir, "cards.json")
    with open(cards_json_path, 'w', encoding='utf-8') as f:
        json.dump(global_cards, f, ensure_ascii=False, indent=2)
        
    print(f"Generated {len(global_cards)} cards into cards.json")

if __name__ == "__main__":
    main()
