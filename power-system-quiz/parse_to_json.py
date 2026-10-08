# -*- coding: utf-8 -*-
"""
从两份全汇编 Markdown 中解析所有题目，生成 questions_data.js
"""
import re
import json
import sys
import os

sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = os.path.dirname(os.path.abspath(__file__))
PARENT = os.path.dirname(WORKSPACE)

FILES = [
    (os.path.join(PARENT, '华北电力大学_历年期末试卷_选择题与判断题全汇编.md'), '期末'),
    (os.path.join(PARENT, '华北电力大学_历年考研真题_选择题与判断题全汇编.md'), '考研'),
]

# Chapter keyword mapping (八大知识模块)
CHAPTER_KEYWORDS = {
    1: ['电力网', '电力系统基本概念', '电压等级', '中性点运行方式', '中性点不接地', '中性点接地',
        '消弧线圈', '额定电压', '备用容量', '负荷曲线', '电能质量', '频率偏差', '电压偏差',
        '动力系统', '电网', '电力系统组成', '电力系统定义', '供电可靠性', '负荷率',
        '最大负荷利用小时', '年负荷', '接线形式', '备用接线', '双回线', '环式', '放射式',
        '电力系统互联', '单相接地', '线电压', '相电压', '接地故障', '故障相', '非故障相',
        '衡量电', '电能生产', '检修备用', '事故备用', '厂用电率', '网损率', '线损率',
        '年最大负荷', '输电线路按结构', '动力系统', '一次能源'],
    2: ['电阻', '电抗', '电导', '电纳', '分裂导线', '架空线', '输电线路参数', '变压器参数',
        'π型等值', '等值电路', '变压器模型', '漏抗', '激磁', '短路试验', '空载试验',
        '三绕组变压器', '自耦变压器', '标幺值', '标么值', '电晕', '集肤效应', '磁场效应',
        '电场效应', '额定变比', '变比', '升压变压器', '降压变压器', '导线型号', 'LGJ',
        '绝缘子', '杆塔', '换位', '变压器容量', '等值电抗最小', '零序激磁', '容量比',
        '超高压线路', '变压器'],
    3: ['潮流手算', '辐射网', '环网', '功率分布', '运算负荷', '电压降落', '电压损耗',
        '充电功率', '功率损耗', '末端电压', '首端电压', '循环功率', '经济功率分布',
        '环形网络', '两端供电', '有功损耗', '消耗功率'],
    4: ['潮流计算', '牛顿-拉夫逊', '牛拉法', '牛-拉法', '高-塞法', 'PQ分解法', 'P-Q分解法',
        '节点导纳矩阵', '节点导纳', '雅可比矩阵', '导纳矩阵', '阻抗矩阵', 'PQ节点',
        'PV节点', '平衡节点', '高斯-赛德尔', '收敛', '迭代', '稀疏矩阵', '稀疏',
        '节点类型', '对称矩阵', '计算机潮流', '节点'],
    5: ['有功功率', '频率调整', '调速器', '一次调频', '二次调频', '一次调整', '二次调整',
        '调差系数', '等微增率', '频率特性', '负荷频率', '有功负荷', '经济运行',
        '耗量微增率', '微增率', '煤耗', '调频', '功频特性', '主调频', '枯水期',
        '水煤换算', '单位调节功率', '频率降低', '频率下降', '增发的功率', '发电机功率'],
    6: ['无功功率', '电压调整', '调相机', '并联电容器', '串联电容器', '电抗器', '逆调压',
        '顺调压', '常调压', '中枢点', '中枢电压', '无功补偿', '无功电源', '过励', '欠励',
        '进相', '变压器调压', '分接头', '有载调压', '静止无功补偿', '电压水平',
        '电压质量', '无功充足', '发出感性无功', '吸收感性无功', '调压措施', '调压方式',
        '无功过剩', '局部电压过高', '补偿电容器', '功率因数运行', '超前功率因数', '空载电动势'],
    7: ['三相短路', '短路电流', '短路计算', '周期分量', '非周期分量', '冲击电流', '冲击系数',
        '次暂态', '暂态电抗', '短路容量', '无限大电源', '无穷大电源', '无限大功率电源',
        '自由分量', '强制分量', '短路初相角', '短路功率', '转移电抗', '短路的原因'],
    8: ['不对称故障', '对称分量法', '不对称相量', '正序', '负序', '零序', '单相接地短路',
        '两相短路', '两相接地短路', '接地短路', '金属性短路', '断线故障', '序阻抗',
        '附加阻抗', '增广网络', '中性点接地电抗', '纵向故障', '横向故障', '复合序网',
        '正序电流', '负序电流', '零序电流', 'B、C相', 'AC相', '边界条件', '序网络'],
}


def guess_chapter(topic, stem):
    """Guess the chapter number from topic and stem text."""
    combined = (topic or '') + ' ' + (stem or '')
    scores = {}
    for ch, keywords in CHAPTER_KEYWORDS.items():
        score = 0
        for kw in keywords:
            if kw in combined:
                # Give higher weight to longer and more specific keywords
                score += len(kw)
        scores[ch] = score
    best = max(scores, key=scores.get)
    if scores[best] == 0:
        return 1  # default to chapter 1 (basics) rather than 0
    return best


def parse_question_block(block_text):
    """Parse a single #### question block into a dict."""
    q = {}

    # ID
    m = re.search(r'#### 【题号】`([^`]+)`', block_text)
    if not m:
        return None
    q['id'] = m.group(1).strip()
    if not re.match(r'^\d{4}', q['id']):
        return None

    # Paper
    m = re.search(r'\*\*所属试卷\*\*[：:]\s*(.+)', block_text)
    q['paper'] = m.group(1).strip() if m else ''

    # Type name
    m = re.search(r'\*\*试卷题型\*\*[：:]\s*(.+?)（', block_text)
    q['typeName'] = m.group(1).strip() if m else ''

    # Determine type code
    tn = q['typeName']
    if '判断' in tn:
        q['type'] = 'judge'
    elif '多选' in tn or '多项' in tn:
        q['type'] = 'multiple'
    elif '不定项' in tn or '不定向' in tn:
        q['type'] = 'indefinite'
    elif '单选' in tn or '单项' in tn:
        q['type'] = 'single'
    else:
        q['type'] = 'single'  # generic 选择题 default

    # Topic
    m = re.search(r'\*\*考查要点\*\*[：:]\s*(.+)', block_text)
    q['topic'] = m.group(1).strip() if m else ''

    # Stem - could be 题目题干 or 题目陈述 or 题目内容
    m = re.search(r'\*\*题目(?:题干|陈述|内容)\*\*[：:]\s*(.+?)(?:\n\s+-|\n-)', block_text, re.DOTALL)
    if m:
        q['stem'] = m.group(1).strip()
    else:
        # fallback: grab everything after 题目
        m = re.search(r'\*\*题目(?:题干|陈述|内容)\*\*[：:]\s*(.+?)$', block_text, re.MULTILINE)
        q['stem'] = m.group(1).strip() if m else ''

    # Options
    options = []
    if q['type'] == 'judge':
        options = [
            {'label': '√', 'text': '正确'},
            {'label': '×', 'text': '错误'},
        ]
    else:
        for om in re.finditer(r'\*\*([A-D])\.\*\*\s*(.+)', block_text):
            options.append({'label': om.group(1), 'text': om.group(2).strip()})
    q['options'] = options

    # Answer
    m = re.search(r'\*\*参考答案\*\*[：:]\s*`([^`]+)`', block_text)
    ans_raw = m.group(1).strip() if m else ''
    if '待补充' in ans_raw or '暂缺' in ans_raw:
        q['answer'] = []
        q['answerPending'] = True
    else:
        # Could be single letter, multiple letters, √, ×
        ans_raw = ans_raw.replace(' ', '')
        if q['type'] == 'judge':
            if '√' in ans_raw or '正确' in ans_raw or '对' in ans_raw:
                q['answer'] = ['√']
            elif '×' in ans_raw or '错误' in ans_raw or '错' in ans_raw:
                q['answer'] = ['×']
            else:
                q['answer'] = [ans_raw]
        else:
            q['answer'] = list(ans_raw.upper())
        q['answerPending'] = False

    # Explanation
    m = re.search(r'\*\*解析说明\*\*[：:]\s*(.+?)(?:\n- \*\*|\n>|\Z)', block_text, re.DOTALL)
    q['explanation'] = m.group(1).strip() if m else ''

    # Verified
    q['verified'] = '【已核定】' in block_text

    # Conflict note
    m = re.search(r'【答案矛盾与争议校核】\*\*[：:]\s*(.+)', block_text)
    q['conflict'] = m.group(1).strip() if m else ''

    return q


def extract_year(paper_title):
    """Extract year string from paper title."""
    m = re.search(r'(\d{4}(?:-\d{4})?)', paper_title)
    return m.group(1) if m else ''


def main():
    all_questions = []

    for filepath, source in FILES:
        print(f'Parsing {os.path.basename(filepath)} ...')
        with open(filepath, 'r', encoding='utf-8') as f:
            text = f.read()

        # Split on #### headers
        blocks = re.split(r'(?=#### 【题号】`)', text)

        count = 0
        for block in blocks:
            if '#### 【题号】`' not in block:
                continue
            q = parse_question_block(block)
            if q is None:
                continue

            q['source'] = source
            q['year'] = extract_year(q.get('paper', ''))
            q['chapter'] = guess_chapter(q.get('topic', ''), q.get('stem', ''))

            all_questions.append(q)
            count += 1

        print(f'  → Parsed {count} questions')

    print(f'\nTotal questions: {len(all_questions)}')

    # Validate
    ids = [q['id'] for q in all_questions]
    dupes = [x for x in ids if ids.count(x) > 1]
    if dupes:
        print(f'⚠️ Duplicate IDs found: {set(dupes)}')

    type_counts = {}
    for q in all_questions:
        t = q['type']
        type_counts[t] = type_counts.get(t, 0) + 1
    print(f'Type distribution: {type_counts}')

    verified_count = sum(1 for q in all_questions if q['verified'])
    pending_count = sum(1 for q in all_questions if q.get('answerPending'))
    print(f'Verified: {verified_count}, Answer pending: {pending_count}')

    chapter_counts = {}
    for q in all_questions:
        ch = q['chapter']
        chapter_counts[ch] = chapter_counts.get(ch, 0) + 1
    print(f'Chapter distribution: {dict(sorted(chapter_counts.items()))}')

    # Write output
    out_path = os.path.join(WORKSPACE, 'questions_data.js')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write('// Auto-generated question database\n')
        f.write('// Total: {} questions\n'.format(len(all_questions)))
        f.write('const QUESTIONS_DB = ')
        json.dump(all_questions, f, ensure_ascii=False, indent=None, separators=(',', ':'))
        f.write(';\n')

    file_size = os.path.getsize(out_path)
    print(f'\n✅ Generated {out_path}')
    print(f'   File size: {file_size / 1024:.1f} KB')


if __name__ == '__main__':
    main()
