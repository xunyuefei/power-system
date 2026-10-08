# -*- coding: utf-8 -*-
"""
华北电力大学《电力系统分析》
历年期末试卷 & 考研真题 选择题与判断题全集自动构建系统
符合 NotebookLM 向量切片检索规范，全原子块封装，杜绝上下文截断。
"""

import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# 1. 广告与噪声清除正则
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

print("Builder library initialized.")
