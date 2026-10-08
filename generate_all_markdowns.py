# -*- coding: utf-8 -*-
"""
最终生成三份完整的 Markdown 文档：
1. 华北电力大学_历年期末试卷_选择题与判断题全汇编.md
2. 华北电力大学_历年考研真题_选择题与判断题全汇编.md
3. 选择题与判断题_全真题检索大纲与疑义答案校核备忘录.md
"""

import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

from make_all_docs import (
    qimo_papers, kaoyan_papers, render_question_block, get_sec_info, get_paper_code,
    parse_questions_from_text, ANSWER_LOOKUP
)

# 1. 生成 期末试题 汇编文档
def generate_qimo_file():
    out_path = "华北电力大学_历年期末试卷_选择题与判断题全汇编.md"
    print(f"Generating {out_path}...")
    
    lines = []
    lines.append("# 华北电力大学《电力系统分析》历年期末考试·选择题与判断题全汇编\n")
    lines.append("> **NotebookLM 语义检索与无损解析规范说明**：")
    lines.append("> 1. **全原子块封装（Anti-Truncation Chunking）**：每道题目均采用独立的 `#### 【题号】` 标题并完整内嵌【所属试卷】、【题目类型】、【考查要点】、【完整题干】、【规范选项】、【参考答案】、【解析说明】与【校核状态】。NotebookLM 语义召回时任意单一切片均自成闭环，绝不丢失试卷年份与题目上下文。")
    lines.append("> 2. **选择与判断严格合并编排**：各学年期末试卷下的单选、多选、不定项选择题与判断题紧密汇聚在同一试卷层级之下，避免检索碎片化割裂。")
    lines.append("> 3. **真题答案与疑义矛盾精密校核**：包含历年原版参考答案与专业理论精密演算，凡出现年份口径冲突、概念争议、多选题漏选少选判分规则或原卷未印文字答案（标注看视频）之处，均在题后设立专用警告警示框（`> ⚠️`）进行专项标注与辨析。\n")
    
    lines.append("## 📖 本书检索大纲与试卷快速导航（TOC）\n")
    lines.append("| 序号 | 试卷名称 | 包含题型 | 题目数量 | 检索锚点 |")
    lines.append("| :--- | :--- | :--- | :--- | :--- |")
    
    # Pre-calculate counts for TOC
    paper_metadata = []
    for idx, p in enumerate(qimo_papers):
        p_title = p['title']
        p_code = get_paper_code(p_title)
        anchor = f"paper-qimo-{idx+1}"
        
        sec_summaries = []
        q_count = 0
        for s in p['sections']:
            sec_code, sec_name = get_sec_info(s['title'])
            s_text = "".join(s['lines'])
            qs = parse_questions_from_text(s_text)
            if qs:
                sec_summaries.append(f"{sec_name} ({len(qs)}题)")
                q_count += len(qs)
                
        types_str = "、".join(sec_summaries)
        lines.append(f"| {idx+1:02d} | {p_title} | {types_str} | **{q_count} 题** | [点击跳转](#{anchor}) |")
        paper_metadata.append((p, anchor, p_code, q_count))
        
    lines.append("\n---\n")
    
    # Render papers
    for idx, (p, anchor, p_code, q_count) in enumerate(paper_metadata):
        p_title = p['title']
        lines.append(f'<span id="{anchor}"></span>\n')
        lines.append(f"## 【第 {idx+1:02d} 套】{p_title}\n")
        lines.append(f"- **试卷类型**：本科生期末课程统考试卷")
        lines.append(f"- **总题量**：选择与判断题共 {q_count} 题")
        lines.append(f"- **真题解析说明**：原版试卷文字录入，完全剔除宣传广告水印，数学公式遵循标准 LaTeX 语法。\n")
        
        for s in p['sections']:
            sec_title = s['title']
            sec_code, sec_name = get_sec_info(sec_title)
            s_text = "".join(s['lines'])
            qs = parse_questions_from_text(s_text)
            
            if not qs:
                continue
                
            lines.append(f"### 【{sec_name}部分】（共 {len(qs)} 题）\n")
            
            # Lookup answer map
            ans_map = None
            if p_code in ANSWER_LOOKUP and sec_code in ANSWER_LOOKUP[p_code]:
                ans_map = ANSWER_LOOKUP[p_code][sec_code]
                
            for q_num, body in qs:
                block, qid, topic, status = render_question_block(
                    p_title, p_code, sec_code, sec_name, q_num, body, ans_map
                )
                lines.append(block)
                
        lines.append("---\n")
        
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(lines))
    print(f"Successfully generated {out_path} with {len(paper_metadata)} papers.")

# 2. 生成 考研真题 汇编文档
def generate_kaoyan_file():
    out_path = "华北电力大学_历年考研真题_选择题与判断题全汇编.md"
    print(f"Generating {out_path}...")
    
    lines = []
    lines.append("# 华北电力大学《电力系统分析》历年考研初试真题·选择题与判断题全汇编\n")
    lines.append("> **NotebookLM 语义检索与无损解析规范说明**：")
    lines.append("> 1. **全原子块封装（Anti-Truncation Chunking）**：每道题目均采用独立的 `#### 【题号】` 标题并完整内嵌【所属试卷】、【题目类型】、【考查要点】、【完整题干】、【规范选项】、【参考答案】、【解析说明】与【校核状态】。NotebookLM 语义召回时任意单一切片均自成闭环，绝不丢失试卷年份与题目上下文。")
    lines.append("> 2. **选择与判断严格合并编排**：各年份考研真题下的单选、多选、不定项选择题与判断题紧密汇聚在同一试卷层级之下，避免跨科目标题割裂。")
    lines.append("> 3. **真题答案与疑义矛盾精密校核**：包含历年原版官方考研答案与专业理论精密演算，凡出现年份口径冲突、概念争议、多选题漏选少选判分规则或原卷未印文字答案（标注看视频）之处，均在题后设立专用警告警示框（`> ⚠️`）进行专项标注与辨析。\n")
    
    lines.append("## 📖 本书检索大纲与试卷快速导航（TOC）\n")
    lines.append("| 序号 | 考研科目与年份 | 包含题型 | 题目数量 | 检索锚点 |")
    lines.append("| :--- | :--- | :--- | :--- | :--- |")
    
    paper_metadata = []
    for idx, p in enumerate(kaoyan_papers):
        p_title = p['title']
        p_code = get_paper_code(p_title)
        anchor = f"paper-kaoyan-{idx+1}"
        
        sec_summaries = []
        q_count = 0
        for s in p['sections']:
            sec_code, sec_name = get_sec_info(s['title'])
            s_text = "".join(s['lines'])
            qs = parse_questions_from_text(s_text)
            if qs:
                sec_summaries.append(f"{sec_name} ({len(qs)}题)")
                q_count += len(qs)
                
        types_str = "、".join(sec_summaries)
        lines.append(f"| {idx+1:02d} | {p_title} | {types_str} | **{q_count} 题** | [点击跳转](#{anchor}) |")
        paper_metadata.append((p, anchor, p_code, q_count))
        
    lines.append("\n---\n")
    
    # Render papers
    for idx, (p, anchor, p_code, q_count) in enumerate(paper_metadata):
        p_title = p['title']
        lines.append(f'<span id="{anchor}"></span>\n')
        lines.append(f"## 【第 {idx+1:02d} 套】{p_title}\n")
        lines.append(f"- **试卷类型**：全国硕士研究生招生考试初试统考/自命题专业课真题")
        lines.append(f"- **总题量**：选择与判断题共 {q_count} 题")
        lines.append(f"- **真题解析说明**：原版试卷文字录入，完全剔除宣传广告水印，数学公式遵循标准 LaTeX 语法。\n")
        
        for s in p['sections']:
            sec_title = s['title']
            sec_code, sec_name = get_sec_info(sec_title)
            s_text = "".join(s['lines'])
            qs = parse_questions_from_text(s_text)
            
            if not qs:
                continue
                
            lines.append(f"### 【{sec_name}部分】（共 {len(qs)} 题）\n")
            
            ans_map = None
            if p_code in ANSWER_LOOKUP and sec_code in ANSWER_LOOKUP[p_code]:
                ans_map = ANSWER_LOOKUP[p_code][sec_code]
                
            for q_num, body in qs:
                block, qid, topic, status = render_question_block(
                    p_title, p_code, sec_code, sec_name, q_num, body, ans_map
                )
                lines.append(block)
                
        lines.append("---\n")
        
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(lines))
    print(f"Successfully generated {out_path} with {len(paper_metadata)} papers.")

# 3. 生成 检索大纲与答案校核备忘录 文档
def generate_index_and_conflicts_file():
    out_path = "选择题与判断题_全真题检索大纲与疑义答案校核备忘录.md"
    print(f"Generating {out_path}...")
    
    lines = []
    lines.append("# 华北电力大学《电力系统分析》选择题与判断题·全真题检索大纲与疑义答案校核备忘录\n")
    lines.append("> **本备忘录功能定位**：")
    lines.append("> 1. **全真题检索大纲（Master Retrieval Index）**：系统归纳历年期末与考研初试全部选择题与判断题在各章节知识体系（八大核心模块）中的分布映射，支持双向精准定位。")
    lines.append("> 2. **答案校核与疑义争议专项备忘录（Conflict & Controversy Registry）**：针对多套试卷在不同年份、不同命题组之间出现的理论争议点、考核口径差异（如过补偿/欠补偿计算、变压器零序励磁电抗大小、调相机运行状态、分裂导线电抗减小幅度、备用容量分类口径等），建立专项比对与解析，便于后续精准复习与快速修订。\n")
    
    lines.append("## 一、全真题知识模块分布与快速索引大纲\n")
    lines.append("| 知识模块编号 | 核心考点涵盖章节 | 核心高频考点摘要 | 期末真题高频题号分布 | 考研初试高频题号分布 |")
    lines.append("| :--- | :--- | :--- | :--- | :--- |")
    lines.append("| **模块一** | 第1章 电力系统基本概念 | 电力网定义、电压等级、中性点运行方式、负荷曲线与备用容量 | 2025-期末-单选-01/02, 2024-期末-单选-01/02/03/14 | 2026-考研-选择-01/02, 2020-814-选择-01/02/03 |")
    lines.append("| **模块二** | 第2章 电力系统元件等值模型与参数 | 架空线电阻/电抗/电导/电纳、分裂导线、变压器参数计算与π型等值 | 2025-期末-单选-03, 2024-期末-单选-04/05/06, 2018-期末-多选-01 | 2024-813-选择-02/04, 2019-814-选择-05/06/07 |")
    lines.append("| **模块三** | 第3章 简单电力系统潮流手算 | 辐射网潮流、闭式环网初步功率分布、循环功率、电容充电容升效应 | 2024-期末-单选-07/08/09, 2025-期末-判断-04, 2009-期末A-单选-07/08 | 2023-816-单选-04/05, 2018-815-选择-06/07 |")
    lines.append("| **模块四** | 第4章 电力系统计算机潮流计算 | 节点类型分类(PQ/PV/平衡)、节点导纳矩阵性质与修改、牛拉法雅可比矩阵、PQ分解法 | 2025-期末-单选-05, 2024-期末-单选-10/11/12, 2022-期末-多选-03 | 2020-814-选择-07/08/09, 2019-814-选择-08/09 |")
    lines.append("| **模块五** | 第5章 有功功率平衡与系统频率调整 | 负荷功频静特性、发电机调速器一次调频、二次调频无差调节、等微增率准则 | 2025-期末-单选-06, 2024-期末-单选-13, 2025-期末-判断-06 | 2020-814-选择-10/11, 2019-813-判断-03, 2018-815-选择-11/12 |")
    lines.append("| **模块六** | 第6章 无功功率平衡与系统电压调整 | 无功电源特性(发电机/调相机/电容器/电抗器)、中枢点逆/顺/常调压、变压器调压 | 2025-期末-单选-07, 2024-期末-单选-15/16, 2019-期末-单选-02 | 2020-814-选择-12/13/14, 2018-815-选择-05/13 |")
    lines.append("| **模块七** | 第7章 电力系统三相短路实用计算 | 无限大电源短路周期/非周期分量、次暂态电抗与次暂态电动势、短路冲击电流与有效值 | 2025-期末-单选-08, 2025-期末-多选-04, 2024-期末-判断-10 | 2020-814-选择-16/17, 2018-815-选择-06/15 |")
    lines.append("| **模块八** | 第8章 不对称故障分析与各序阻抗网络 | 对称分量法、各序阻抗(发电机/变压器/线路)、正序增广网络与附加阻抗、两相短路/单相接地/断线故障 | 2025-期末-单选-09/10, 2024-期末-单选-17/18/19/20, 2025-期末-判断-09/10 | 2020-814-选择-18/19/20, 2019-814-选择-17/18/19/20 |")
    
    lines.append("\n---\n")
    lines.append("## 二、历年真题答案疑义、争议考点与矛盾冲突专项备忘录\n")
    
    conflicts = [
        ("【争议一】消弧线圈补偿方式与电流计算（单选/计算）",
         "**典型题目**：2024-2025学年第一学期期末(A) 单选第3题\n"
         "- **题干描述**：10kV电网发生单相接地故障，流入故障点电流为 30A，消弧线圈补偿后残流为 10A，求消弧线圈提供的电感电流？（选项：A. 20A，B. 40A，C. 30A，D. 10A）\n"
         "- **理论分歧点**：纯数学绝对值方程 $|I_L - I_C| = 10\\mathrm{A}$ 有两个解：$I_L = 20\\mathrm{A}$（欠补偿）或 $I_L = 40\\mathrm{A}$（过补偿）。\n"
         "- **官方考核标准与校核定论**：我国《交流电气装置的过电压保护和绝缘配合》国家标准与电力系统运行规程明确规定：**为避免系统因切除部分线路或断线造成欠补偿谐振过电压，电力系统必须采用过补偿方式**。因此在正规电分试题中，标准答案唯一认定为过补偿情况，即 $I_L = 30 + 10 = 40\\mathrm{A}$（选 B）。"),
         
        ("【争议二】变压器铁芯结构与零序激磁电抗大小比较",
         "**典型题目**：2025-2026学年第一学期期末(A) 单选第10题 与 2020年硕士初试(814) 单选第18题\n"
         "- **题干描述**：三相三柱式变压器与三相五柱式变压器的零序激磁电抗 $X_{m0}$ 与正序激磁电抗 $X_{m1}$ 大小关系。\n"
         "- **理论分歧点**：部分同学误以为所有三相变压器零序励磁电抗均极小或均为无穷大。\n"
         "- **官方考核标准与校核定论**：\n"
         "  1. **三相三柱式变压器**：三相磁通在三根铁芯柱中大小相等、相位相同，没有闭合磁轭，零序磁通只能通过绝缘油、油箱壁和空气闭合，磁阻极大，因此**零序激磁电抗远小于正序激磁电抗**（标幺值通常仅 $0.3\\sim 1.0\\mathrm{p.u.}$）。\n"
         "  2. **三相五柱式变压器及单相变压器组**：具有独立的边轭或独立的磁路通道，零序磁通可在高导磁铁芯中闭合，磁阻极小，因此**零序激磁电抗很大，近似等于正序激磁电抗**。原题中若出现‘三相五柱式变压器零序激磁电抗远小于正序’表述即为严重错误选项。"),
         
        ("【争议三】逆调压方式中枢点电压调整范围（单选/填空）",
         "**典型题目**：2013-2014期末简答题、2018-2019期末填空题、2020年考研814选择题第14题\n"
         "- **理论分歧点**：何仰赞教材与陈珩教材关于逆调压上限的文字表述差异。\n"
         "- **官方考核标准与校核定论**：\n"
         "  - **顺调压**：最大负荷时电压不低于 $1.025 U_N$，最小负荷时不高于 $1.075 U_N$。\n"
         "  - **常调压**：任何负荷下保持在 $(1.02\\sim 1.05) U_N$（常取 $1.05 U_N$）的某一固定水平。\n"
         "  - **逆调压**：在最大负荷时提高至 $(1.02\\sim 1.05) U_N$（通常取 $+5\\%$，即 $1.05 U_N$），在最小负荷时降低至额定电压 $U_N$（即 $1.0 U_N$）。部分题目中称其范围为高出线路额定电压 $2\\%\\sim 5\\%$，做判断题时需特别注意是否倒置了最大负荷与最小负荷。"),
         
        ("【争议四】发电机励磁状态对感性无功的吞吐方向（基础概念辨析）",
         "**典型题目**：2018-2019期末单选第6题、2024-2025期末单选第16题\n"
         "- **理论分歧点**：‘发出感性无功’与‘吸收感性无功’在发电机进相和过励工况下的符号认知模糊。\n"
         "- **官方考核标准与校核定论**：\n"
         "  - **过励磁（过激运行）**：发电机向电网**发出感性无功功率**（等效于吸收容性无功），使端电压升高，提升系统电压。\n"
         "  - **欠励磁（进相运行）**：发电机从电网**吸收感性无功功率**（等效于向系统输出容性无功），使端电压降低，用于压低系统局部过高电压。"),
         
        ("【争议五】中性点接地电抗对对称与不对称短路正序电流的影响",
         "**典型题目**：2024-2025期末单选第19题、2025-2026期末单选第9题\n"
         "- **题干考点**：变压器或发电机中性点接地电抗 $Z_n$ 对正序电流是否有影响？\n"
         "- **官方考核标准与校核定论**：正序电流是严格三相对称的正弦交流电，流过中性点的正序电流相量和恒等于零（$\\dot{I}_{A1} + \\dot{I}_{B1} + \\dot{I}_{C1} = 0$）。因此，中性点接地阻抗上绝对没有正序电流流过，也绝对不产生任何正序电压降。**结论：中性点接地阻抗对任何短路类型的正序等值网络均无任何影响！**")
    ]
    
    for title, content in conflicts:
        lines.append(f"### {title}\n")
        lines.append(content)
        lines.append("\n---\n")
        
    lines.append("## 三、后续复习与持续修订指南\n")
    lines.append("1. **在 NotebookLM 中导入方法**：直接将生成的两份全汇编 Markdown 文档作为‘Sources’添加，NotebookLM 会自动建立高质量知识索引。")
    lines.append("2. **关键词精准问答**：提问时建议直接使用题号前缀（如 `2024-期末A-单选-03` 或 `2020-814-选择-18`），或考点关键词（如 `变压器零序励磁电抗`），NotebookLM 将直接定位至对应的原子块并输出标准解析。")
    lines.append("3. **待核定答案更新**：遇到标记为【待核定】的年份题目，可直接参考火哥对应年份视频讲解，查阅后在对应题目的 `- **参考答案**：` 处直接回填并修改校核标记为【已核定】。\n")
    
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(lines))
    print(f"Successfully generated {out_path}.")

if __name__ == '__main__':
    generate_qimo_file()
    generate_kaoyan_file()
    generate_index_and_conflicts_file()
    print("ALL THREE DOCUMENTS SUCCESSFULLY GENERATED!")
