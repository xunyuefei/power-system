# -*- coding: utf-8 -*-
"""
生成三份完整的 Markdown 文档：
1. 华北电力大学_历年期末试卷_选择题与判断题全汇编.md
2. 华北电力大学_历年考研真题_选择题与判断题全汇编.md
3. 选择题与判断题_全真题检索大纲与疑义答案校核备忘录.md
"""

import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Read source files
with open('MinerU_markdown_火哥电气考研2027届初试系列资料-历年真题与期未题（1）_2100576301922672640.md', 'r', encoding='utf-8') as f:
    f1_lines = f.readlines()

with open('MinerU_markdown_火哥电气考研2027届初试系列资料-历年真题与期未题（2）_2100576848260128768.md', 'r', encoding='utf-8') as f:
    f2_lines = f.readlines()

AD_PATTERNS = [
    r'火哥电气考研——(?:华电|电分)?考研最大最权威[^\n]*\n*',
    r'加入\s*[qQ]{2}\s*答疑群\s*865905443[^\n]*\n*',
    r'关注“火哥电气考研”微信公众号[^\n]*\n*',
    r'加入火哥电气考研资料答疑[^\n]*\n*',
    r'重要说明：本套题目完整版火哥.*?QQ 群内通知。\n*',
    r'重要说明[^\n]*huogekaoyan4[^\n]*\n*',
    r'!\[.*?\]\([^\)]+\)\n*',
    r'加火哥微信\s*huogekaoyan4[^\n]*\n*',
    r'大海边的火哥\n*',
    r'\(1\)\s*扫一扫加火哥微信[^\n]*\n*',
    r'\(2\)\s*火哥的\s*[bB]\s*站账号[^\n]*\n*',
    r'\d+/\d+\s*关注“火哥电气考研”[^\n]*\n*',
    r'考试科目：.*?课序号：\d+[^\n]*\n*',
    r'课程号：.*?考试时间：[^\n]*\n*',
    r'<table>.*?</table>\n*',
    r'所有答案均在答题纸上作答.*?试卷纸上作答无效[^\n]*\n*',
    r'注意：所有答案均写在答题册上.*?在试卷上答题无效[^\n]*\n*',
    r'在每小题列出的四个备选项中只有一个是符合题目要求的.*?错选，多选或未选均无分。[^\n]*\n*',
    r'在答题册上标明题号并选出所有正确的选项[^\n]*\n*',
    r'在答题册上标明题号并回答“正确”或“错误”[^\n]*\n*',
    r'答题册上作答时，需标清题号[^\n]*\n*',
    r'请在每小题后的括号中填上对.*?每小题\s*\d+\s*分[^\n]*\n*',
    r'（注：本套试卷不得使用计算器[^\n]*\n*',
    r'【备注：本套试卷不得使用计算器[^\n]*\n*'
]

def clean_noise(text):
    for p in AD_PATTERNS:
        text = re.sub(p, '', text, flags=re.IGNORECASE | re.DOTALL)
    return text

def parse_options(qtext):
    pat = re.compile(r'(?:^|\s+|[；，。\n])([A-D])[\.、．]\s*')
    matches = list(pat.finditer(qtext))
    if len(matches) >= 2:
        stem = qtext[:matches[0].start()].strip()
        opts = []
        for i in range(len(matches)):
            opt_let = matches[i].group(1)
            start_pos = matches[i].end()
            end_pos = matches[i+1].start() if i + 1 < len(matches) else len(qtext)
            body = qtext[start_pos:end_pos].strip()
            body = re.sub(r'[\r\n]+', ' ', body)
            opts.append((opt_let, body))
        return stem, opts
    return qtext.strip(), []

def parse_questions_from_text(sec_text):
    sec_text = clean_noise(sec_text)
    q_split_pat = re.compile(r'(?:^|\n)\s*(\d+)[\.、．]\s*')
    matches = list(q_split_pat.finditer(sec_text))
    questions = []
    for i in range(len(matches)):
        q_num = matches[i].group(1)
        start_idx = matches[i].start()
        end_idx = matches[i+1].start() if i + 1 < len(matches) else len(sec_text)
        raw_body = sec_text[start_idx:end_idx].strip()
        body = re.sub(r'^\d+[\.、．]\s*', '', raw_body).strip()
        body = re.sub(r'[一二三四五六七八九十]+、.*$', '', body, flags=re.DOTALL).strip()
        questions.append((q_num, body))
    return questions

def extract_paper_sections(lines_subset, start_line_offset=1):
    papers = []
    current_paper = None
    current_sec = None
    
    for idx, raw_line in enumerate(lines_subset):
        abs_lno = start_line_offset + idx
        line = raw_line.strip()
        
        is_paper = False
        if line.startswith('# 华北电力大学') or line.startswith('## 华北电力大学'):
            if any(k in line for k in ['学年', '硕士', '考研', '试卷', '试题']):
                is_paper = True
        elif '华北电力大学 2026 年硕士生' in line:
            is_paper = True
        elif line.startswith('# 20') or line.startswith('## 20'):
            is_paper = True
            
        if is_paper:
            title = re.sub(r'^[#\s]+', '', line).strip()
            title = re.sub(r'\.\.\.\.\s*\d+$', '', title).strip()
            title = re.sub(r'[\.、\s\d]+$', '', title).strip()
            current_paper = {
                'title': title,
                'line': abs_lno,
                'sections': []
            }
            papers.append(current_paper)
            current_sec = None
            continue
            
        if line.startswith('## ') or line.startswith('### '):
            sec_title = re.sub(r'^[#\s]+', '', line).strip()
            if any(k in sec_title for k in ['选', '判', '选择', '判断']):
                if not any(k in sec_title for k in ['计算', '简答', '推导', '分析', '综合计算']):
                    if current_paper is not None:
                        current_sec = {
                            'title': sec_title,
                            'line': abs_lno,
                            'lines': []
                        }
                        current_paper['sections'].append(current_sec)
                        continue
            else:
                current_sec = None
                
        if current_sec is not None:
            current_sec['lines'].append(raw_line)
            
    valid_papers = []
    for p in papers:
        t = p['title']
        if '目录' in t or '第一部分' in t or '第二部分' in t or '参考答案' in t:
            continue
        val_secs = [s for s in p['sections'] if len(s['lines']) > 0 and any(k in s['title'] for k in ['选', '判', '选择', '判断'])]
        if val_secs:
            p['sections'] = val_secs
            valid_papers.append(p)
    return valid_papers

qimo_papers = extract_paper_sections(f1_lines[:2237], 1)
kaoyan_f1 = extract_paper_sections(f1_lines[2237:], 2238)
kaoyan_f2 = extract_paper_sections(f2_lines, 1)
kaoyan_papers = kaoyan_f1 + kaoyan_f2

# Load answer database
from temp_inspect.answers_db import ANSWERS_DB
from build_all_final import KNOWN_ANSWERS

print(f"Loaded {len(qimo_papers)} 期末 papers and {len(kaoyan_papers)} 考研 papers.")

# Let's write the renderer functions
def render_question_block(paper_title, paper_code, sec_type, q_num, body, ans_info=None):
    stem, opts = parse_options(body)
    qid = f"{paper_code}-{sec_type}-{int(q_num):02d}"
    
    # Topic, answer, explanation, status
    topic = "电力系统分析基础核心考点"
    answer = "待补充/暂缺（原真题解析卷标注扫码看视频讲解，未附印刷答案）"
    explanation = "详见火哥考研视频解析或标准教材对应章节定理。"
    status = "【待核定】"
    conflict_note = ""
    
    if ans_info:
        answer, topic, explanation = ans_info[0], ans_info[1], ans_info[2]
        status = "【已核定】"
        if len(ans_info) > 3:
            conflict_note = ans_info[3]
            
    lines = []
    lines.append(f"#### 【题号】{qid}")
    lines.append(f"- **所属试卷**：{paper_title}")
    lines.append(f"- **试卷题型**：{sec_type}（第 {q_num} 题）")
    lines.append(f"- **考查要点**：{topic}")
    
    if opts:
        lines.append(f"- **题目题干**：{stem}")
        for opt_let, opt_text in opts:
            lines.append(f"  - **{opt_let}.** {opt_text}")
    else:
        # True/false or statement
        lines.append(f"- **题目内容**：{body}")
        
    lines.append(f"- **参考答案**：{answer}")
    lines.append(f"- **解析说明**：{explanation}")
    lines.append(f"- **校核状态**：{status}")
    if conflict_note:
        lines.append(f"> ⚠️ **【答案矛盾与争议校核】**：{conflict_note}")
    lines.append("")
    return "\n".join(lines)

print("Renderer function built successfully.")
