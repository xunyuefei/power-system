import re
import os
import json

def clean_latex(text):
    if not text:
        return text

    # 1. Replace textcircled
    text = text.replace(r'\textcircled{1}', '①')
    text = text.replace(r'\textcircled{2}', '②')
    text = text.replace(r'\textcircled{3}', '③')
    text = text.replace(r'\textcircled{4}', '④')
    text = text.replace(r'\textcircled{5}', '⑤')

    # 2. Clean common voltage units that got wrapped into LaTeX
    voltage_regex = r'\$\s*(\d+)\s*(?:\\mathrm\s*\{\s*k\s*V\s*\}|k\s*V)\s*\$'
    text = re.sub(voltage_regex, r'\1kV', text)

    # 3. Clean spaced numbers inside math mode $ ... $ and $$ ... $$
    def fix_math_block(match):
        s = match.group(0)
        delimiter = '$$' if s.startswith('$$') else '$'
        inner = s[len(delimiter):-len(delimiter)]

        # Fix spaced decimals: e.g. "0 . 0 1" -> "0.01", "1 . 1" -> "1.1"
        for _ in range(3):
            inner = re.sub(r'(\d)\s*\.\s*(\d)', r'\1.\2', inner)

        # Fix spaced digits: e.g. "3 5" -> "35", "1 1 0" -> "110", "1 0 0 0" -> "1000"
        for _ in range(5):
            inner = re.sub(r'(?<=\d)\s+(\d)(?!\s*\\)', r'\1', inner)

        # Fix weird OCR artifacts
        inner = re.sub(r'\\scriptstyle\s*\\mathtt\s*\{\s*([A-Za-z]+)\s*\}', r'\1', inner)
        inner = re.sub(r'\\scriptstyle\s*\{\s*([^{}]+)\s*\}', r'\1', inner)
        inner = re.sub(r'\\scriptstyle\s*', '', inner)
        inner = inner.replace(r'{\sqrt{3}}', r'\sqrt{3}')
        inner = inner.replace(r'{ \sqrt { 3 } }', r'\sqrt{3}')
        inner = inner.replace(r'\mathrm { k V }', r'\text{kV}')
        inner = inner.replace(r'\mathrm { U I }', r'UI')

        return f"{delimiter}{inner}{delimiter}"

    # Match $$...$$ first, then $...$
    text = re.sub(r'\$\$[\s\S]*?\$\$', fix_math_block, text)
    text = re.sub(r'\$[^\$\n]+?\$', fix_math_block, text)

    # Clean double conversion if any like $35$kV -> 35kV
    text = re.sub(r'\$(\d+)\$kV', r'\1kV', text)

    return text

def process_files():
    docs_dir = r"c:\Users\31085\Desktop\电力系统专题训练\power-system-web\docs"
    
    # Process chapter files
    for ch in range(1, 9):
        filepath = os.path.join(docs_dir, f"chapter{ch}.md")
        if os.path.exists(filepath):
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            cleaned = clean_latex(content)
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(cleaned)
            print(f"Cleaned {filepath}")

    # Process cards.json
    cards_path = os.path.join(docs_dir, "public", "cards.json")
    if os.path.exists(cards_path):
        with open(cards_path, "r", encoding="utf-8") as f:
            cards = json.load(f)
        for c in cards:
            c["question"] = clean_latex(c["question"])
            c["answer"] = clean_latex(c["answer"])
        with open(cards_path, "w", encoding="utf-8") as f:
            json.dump(cards, f, ensure_ascii=False, indent=2)
        print("Cleaned cards.json")

if __name__ == "__main__":
    process_files()
