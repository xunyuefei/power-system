# -*- coding: utf-8 -*-
"""
生成 NotebookLM 格式的期末试题与考研真题全集
"""

import os
import re
import sys

# Ensure UTF-8
sys.stdout.reconfigure(encoding='utf-8')

from build_engine_main import (
    clean_noise, parse_options, parse_questions_from_text, extract_paper_sections
)

with open('MinerU_markdown_火哥电气考研2027届初试系列资料-历年真题与期未题（1）_2100576301922672640.md', 'r', encoding='utf-8') as f:
    f1_lines = f.readlines()

with open('MinerU_markdown_火哥电气考研2027届初试系列资料-历年真题与期未题（2）_2100576848260128768.md', 'r', encoding='utf-8') as f:
    f2_lines = f.readlines()

qimo_papers = extract_paper_sections(f1_lines[:2237], 1)
kaoyan_f1 = extract_paper_sections(f1_lines[2237:], 2238)
kaoyan_f2 = extract_paper_sections(f2_lines, 1)
kaoyan_papers = kaoyan_f1 + kaoyan_f2

print(f"Extracted {len(qimo_papers)} 期末 papers, {len(kaoyan_papers)} 考研 papers.")

# Let's inspect each paper's sections
total_qimo_q = 0
for p in qimo_papers:
    p_q_cnt = 0
    for s in p['sections']:
        s_text = "".join(s['lines'])
        qs = parse_questions_from_text(s_text)
        p_q_cnt += len(qs)
    total_qimo_q += p_q_cnt
    print(f"期末: {p['title']} -> {p_q_cnt} questions")

total_kaoyan_q = 0
for p in kaoyan_papers:
    p_q_cnt = 0
    for s in p['sections']:
        s_text = "".join(s['lines'])
        qs = parse_questions_from_text(s_text)
        p_q_cnt += len(qs)
    total_kaoyan_q += p_q_cnt
    print(f"考研: {p['title']} -> {p_q_cnt} questions")

print(f"\nTOTAL: 期末 = {total_qimo_q} questions, 考研 = {total_kaoyan_q} questions, SUM = {total_qimo_q + total_kaoyan_q}")
