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

from temp_inspect.answers_db import ANSWERS_DB
from build_all_final import KNOWN_ANSWERS

# Helper to categorize section
def get_sec_info(sec_title):
    if '判断' in sec_title:
        return '判断', '判断题'
    elif '单选' in sec_title:
        return '单选', '单项选择题'
    elif '多选' in sec_title:
        return '多选', '多项选择题'
    elif '不定项' in sec_title or '不定向' in sec_title:
        return '不定项', '不定项选择题'
    else:
        return '选择', '选择题'

def get_paper_code(paper_title):
    m_year = re.search(r'(\d{4}(?:-\d{4})?)', paper_title)
    year = m_year.group(1) if m_year else "年份"
    # Subject / exam type
    code = year
    if '期末' in paper_title:
        if '(B)' in paper_title:
            code += "-期末B"
        elif '电力英' in paper_title:
            code += "-期末英"
        else:
            code += "-期末A"
    else:
        m_code = re.search(r'8\d{2}', paper_title)
        if m_code:
            code += f"-{m_code.group(0)}"
        else:
            code += "-考研"
    return code

def render_question_block(paper_title, paper_code, sec_code, sec_name, q_num, body, ans_map=None):
    stem, opts = parse_options(body)
    qid = f"{paper_code}-{sec_code}-{int(q_num):02d}"
    
    topic = "电力系统分析基础核心知识点"
    answer = "待补充/暂缺（原卷未附印刷答案，参考视频讲解）"
    explanation = "详见标准教材与火哥考研视频解析。"
    status = "【待核定】"
    conflict_note = ""
    
    # Check if ans_map has this question
    if ans_map and str(q_num) in ans_map:
        val = ans_map[str(q_num)]
        if isinstance(val, tuple):
            answer = val[0]
            if len(val) > 1: topic = val[1]
            if len(val) > 2: explanation = val[2]
            if len(val) > 3: conflict_note = val[3]
            status = "【已核定】"
        elif isinstance(val, str):
            answer = val
            status = "【已核定】"
            
    lines = []
    lines.append(f"#### 【题号】`{qid}`")
    lines.append(f"- **所属试卷**：{paper_title}")
    lines.append(f"- **试卷题型**：{sec_name}（第 {q_num} 题）")
    lines.append(f"- **考查要点**：{topic}")
    
    if opts:
        lines.append(f"- **题目题干**：{stem}")
        for opt_let, opt_text in opts:
            lines.append(f"  - **{opt_let}.** {opt_text}")
    else:
        lines.append(f"- **题目内容**：{body}")
        
    lines.append(f"- **参考答案**：`{answer}`")
    lines.append(f"- **解析说明**：{explanation}")
    lines.append(f"- **校核状态**：{status}")
    if conflict_note:
        lines.append(f"> ⚠️ **【答案矛盾与争议校核】**：{conflict_note}")
    lines.append("")
    return "\n".join(lines), qid, topic, status

# Load paper-specific answer mappings
ANSWER_LOOKUP = {
    "2025-2026-期末A": {
        "单选": {str(i+1): ANSWERS_DB["2025_qimo_A_choice"][i] for i in range(len(ANSWERS_DB["2025_qimo_A_choice"]))},
        "多选": {str(i+1): ANSWERS_DB["2025_qimo_A_multi"][i] for i in range(len(ANSWERS_DB["2025_qimo_A_multi"]))},
        "判断": {str(i+1): ANSWERS_DB["2025_qimo_A_judge"][i] for i in range(len(ANSWERS_DB["2025_qimo_A_judge"]))}
    },
    "2024-2025-期末A": {
        "单选": {str(i+1): ANSWERS_DB["2024_qimo_A_choice"][i] for i in range(len(ANSWERS_DB["2024_qimo_A_choice"]))},
        "判断": {str(i+1): ANSWERS_DB["2024_qimo_A_judge"][i] for i in range(len(ANSWERS_DB["2024_qimo_A_judge"]))}
    },
    "2020-812": {
        "判断": KNOWN_ANSWERS["2020_812_判断"]
    },
    "2020-814": {
        "选择": KNOWN_ANSWERS["2020_814_选择"]
    },
    "2019-813": {
        "判断": KNOWN_ANSWERS["2019_813_判断"]
    },
    "2019-814": {
        "选择": KNOWN_ANSWERS["2019_814_选择"]
    },
    "2018-815": {
        "选择": KNOWN_ANSWERS["2018_815_选择"]
    }
}

# Add 2018-2019 期末
ANSWER_LOOKUP["2018-2019-期末A"] = {
    "单选": {
        "1": ("D", "消弧线圈全补偿谐振过电压", "消弧线圈全补偿在不对称或断线时极易激发工频串联谐振，产生严重过电压。"),
        "2": ("A", "变压器电抗远大于电阻", "高压变压器电抗远大于电阻，无功损耗远大于有功损耗。"),
        "3": ("C", "线损率定义", "线损率等于损失电能占输入首端总电能的百分比。"),
        "4": ("A", "牛拉法精度与收敛性", "迭代次数相同时，牛顿-拉夫逊法精度高，因其收敛性更强。"),
        "5": ("C", "负荷静态频率特性", "系统频率增大时，综合有功负荷随之增大。"),
        "6": ("B", "发电机过励运行", "过激（过励）发电机向系统发出感性无功功率。"),
        "7": ("D", "短路冲击电流定义", "冲击电流是短路电流在最恶劣情况下的最大瞬时值。"),
        "8": ("B", "纵向故障分类", "纵向故障为断线，横向故障为短路。"),
        "9": ("C", "对称分量法应用前提", "系统线性和参数三相对称是对称分量法成立的前提。"),
        "10": ("B", "单相接地非故障相对地电压", "10kV系统单相接地，非故障相对地电压升为线电压10kV。")
    },
    "多选": {
        "1": ("AD", "分裂导线作用", "分裂导线旨在减小线路电抗与抑制电晕放电。"),
        "2": ("ABD", "电力网元件电磁参数", "电阻发热损耗、电纳充电功率、电导泄漏与电晕。"),
        "3": ("ACD", "无功电源特性", "电抗器吸收感性无功，变压器激磁电抗吸收感性无功。"),
        "4": ("AD", "系统频率波动原因", "负荷增加或联络线向外送电导致原系统频率下降。"),
        "5": ("AB", "零序参数影响因素", "双回线路互感与变压器中性点接线方式影响零序参数。")
    },
    "判断": {
        "1": ("√", "中性点不接地系统单相接地", "三相线电压对称保持不变，允许短时继续运行。"),
        "2": ("×", "电压调整与无功潮流", "改变电压大小主要影响无功潮流，改变相角主要影响有功潮流。"),
        "3": ("×", "发电机一次调频能力", "满载机组无法增加出力参与一次调频。"),
        "4": ("×", "短路电流实用计算负荷考量", "实用计算中忽略普通综合负荷，但需计及靠近短路点的大容量电动机。"),
        "5": ("×", "短路冲击电流与初相位关系", "纯电感电路空载电压过零时非周期分量最大，冲击电流最大。"),
        "6": ("√", "变压器三序漏抗相等", "Y0/Δ变压器由星形侧看入正序、负序和零序漏抗均相等。"),
        "7": ("×", "中性点直接接地绝缘与可靠性", "直接接地绝缘按相电压设计降低投资，但单相短路跳闸可靠性需自动重合闸弥补。"),
        "8": ("×", "不对称短路序网电源分布", "只有正序网络包含发电机电势电源，负序网和零序网无内部独立电源。"),
        "9": ("√", "逆调压应用条件", "线路电压损耗大、负荷波动大时必须采用逆调压。"),
        "10": ("√", "电力系统潮流方程非线性", "电力网络潮流方程为非线性代数方程组，需迭代求解。")
    }
}

# 2017-2018 期末
ANSWER_LOOKUP["2017-2018-期末A"] = {
    "单选": {
        "1": ("B", "电力系统额定频率", "我国电力系统额定频率为50Hz。"),
        "2": ("B", "电网拓扑接线方式", "辐射网为无备用接线，环网为有备用接线。"),
        "3": ("D", "输电线路电抗与间距", "相间几何均距越大，线路电抗越大。"),
        "4": ("C", "变压器额定电压确定", "一次侧接线路取线路额定电压，接发电机取1.05倍。"),
        "5": ("B", "中枢点逆调压要求", "最大负荷时电压提高，最小负荷时电压降低。"),
        "6": ("A", "等耗量微增率准则", "不计网损时，各电厂耗量微增率相等时燃料消耗最少。"),
        "7": ("D", "并联电抗器作用", "特高压长线路吸收容性无功，限制空载容升过电压。"),
        "8": ("B", "对称分量法解耦前提", "元件参数三相对称。"),
        "9": ("C", "单相接地正序增广网络", "附加阻抗为负序阻抗与零序阻抗之和。"),
        "10": ("A", "冲击电流校验", "冲击电流校验动稳定度。")
    },
    "判断": {
        "1": ("×", "发电机额定电压标准", "发电机额定电压比电网高5%，并非相同。"),
        "2": ("×", "电网网损率计算基础", "电网损失电量应除以输入端总电量，非负荷端。"),
        "3": ("√", "年最大负荷利用小时数", "Tmax 越大，全年负荷越平稳。"),
        "4": ("×", "牛顿法初值敏感度", "牛顿法收敛域较窄，对初值选择具有敏感性。"),
        "5": ("√", "无功就地平衡原则", "无功不宜长距离输送，应分层分区就地平衡。"),
        "6": ("×", "发电机进相运行调压", "进相运行吸收感性无功用于降低过高电压。"),
        "7": ("×", "单相断线故障类型", "断线属于纵向不对称故障，非横向故障。"),
        "8": ("√", "零序电流大地通路", "零序电流必须经中性点接地极流入大地构成闭合回路。"),
        "9": ("√", "短路冲击电流时间", "冲击电流出现在短路后约0.01秒。"),
        "10": ("×", "变压器铁芯与零序阻抗", "三相三柱式零序励磁电抗远小于正序。")
    }
}

# 2013-2014 期末
ANSWER_LOOKUP["2013-2014-期末A"] = {
    "选择": {
        "1": ("C", "电力系统组成", "电力系统包含发电厂、变电站、线路及用户用电设备。"),
        "2": ("B", "额定频率", "我国额定工频为50Hz。"),
        "3": ("A", "导线电抗与电压等级", "高压线路相间距离大，Dm大，导线电抗偏大。"),
        "4": ("C", "变压器等值电抗", "由短路试验电压百分数求得。"),
        "5": ("A", "潮流计算已知量", "PQ节点已知有功和无功。"),
        "6": ("A", "架空线电抗与距离关系", "几何均距增大，电抗增大。"),
        "7": ("B", "中枢点调压方式", "顺调压最大负荷低、最小负荷高。"),
        "8": ("B", "无功优化目标", "网损最小。"),
        "9": ("B", "对称分量法", "三相对称元件参数下序网相互独立。"),
        "10": ("A", "三相短路特点", "三相短路是对称故障。")
    }
}

# 2009-2010 期末 A
ANSWER_LOOKUP["2009-2010-期末A"] = {
    "单选": {
        "1": ("A", "电力网基本概念", "电力网由变电所和送配电线路组成。"),
        "2": ("B", "供电可靠性分类", "一类负荷要求双电源不间断供电。"),
        "3": ("A", "额定电压匹配", "变压器一次侧直接接发电机取1.05Un。"),
        "4": ("D", "导线换位目的", "整循环换位使三相电抗和电纳对称。"),
        "5": ("D", "电导参数物理本质", "反映电晕损耗和绝缘子泄漏损耗。"),
        "6": ("C", "变压器无功损耗", "主要消耗在漏抗上。"),
        "7": ("A", "电压降落横分量", "反映首末端电压相位差。"),
        "8": ("C", "辐射网潮流手算", "由末端向前推算功率，由首端向末端推算电压。"),
        "9": ("A", "节点导纳矩阵对角元", "自导纳等于该节点相连所有支路导纳之和。"),
        "10": ("B", "PQ节点未知数", "电压幅值和相角。"),
        "11": ("D", "牛拉法修正方程", "求解电压修正量。"),
        "12": ("B", "调频厂选择", "水电厂调频速度快。"),
        "13": ("B", "一次调频特点", "有差调节。"),
        "14": ("D", "无功补偿调压", "并联电容器发出容性无功提高电压。"),
        "15": ("C", "短路冲击电流时间", "t = 0.01s。"),
        "16": ("A", "无限大电源短路", "周期分量不衰减。"),
        "17": ("B", "纵向故障分类", "单相断线。"),
        "18": ("B", "对称分量法", "各序分量独立解耦。"),
        "19": ("A", "单相接地正序附加阻抗", "Z2 + Z0。"),
        "20": ("A", "架空线零序电抗与正序比较", "零序电抗大于正序电抗，架空地线减小零序电抗。")
    },
    "判断": {
        "1": ("×", "额定电压统一性", "发电机与变压器额定电压并非完全相同。"),
        "2": ("√", "有备用网络供电可靠性", "环形网供电可靠性高。"),
        "3": ("√", "Tmax 物理意义", "Tmax 越大，负荷越平稳。"),
        "4": ("√", "变压器无功损耗比重", "变压器无功损耗远大于有功损耗。"),
        "5": ("×", "长线路电容充电效应", "末端轻载容升高于首端。"),
        "6": ("×", "牛顿法收敛特性", "牛顿法收敛速度受初值影响。"),
        "7": ("×", "逆调压调节幅度", "逆调压要求峰值负荷电压提升。"),
        "8": ("×", "备用容量配置", "国民经济备用不单独设机组。"),
        "9": ("×", "短路电流非周期分量", "直流分量衰减至零。"),
        "10": ("√", "冲击电流动稳定", "校验设备机械强度。")
    }
}

# 2009-2010 期末 B
ANSWER_LOOKUP["2009-2010-期末B"] = {
    "单选": {
        "1": ("B", "发电机额定电压", "1.05Un。"),
        "2": ("C", "变压器额定变比", "高压侧高10%，低压侧高5%。"),
        "3": ("A", "分裂导线电抗", "分裂导线电抗减小。"),
        "4": ("C", "导线电导参数", "电晕损耗。"),
        "5": ("A", "阻抗折算原则", "按实际变比折算。"),
        "6": ("A", "闭式环网初步功率分布", "按阻抗反比分流。"),
        "7": ("A", "电压损耗纵分量", "主要反映首末端电压数值差。"),
        "8": ("B", "雅可比矩阵性质", "非对称稀疏方阵。"),
        "9": ("B", "PV节点未知数", "无功功率和电压相角。"),
        "10": ("C", "牛顿法直角坐标修正方程", "求解电压实部与虚部修正量。"),
        "11": ("C", "等微增率准则", "耗量微增率相等能耗最低。"),
        "12": ("C", "二次调频实现方式", "调频器调节无差。"),
        "13": ("A", "发电机调压经济性", "调节励磁最经济。"),
        "14": ("D", "串联电容补偿", "减小线路等效电抗，降低电压损耗。"),
        "15": ("B", "短路原因", "绝缘击穿或误操作。"),
        "16": ("B", "次暂态电抗物理意义", "定子漏抗与转子绕组漏抗等效并联值。"),
        "17": ("B", "冲击电流校验", "动稳定度。"),
        "18": ("D", "两相短路接地附加阻抗", "Z2 并联 Z0。"),
        "19": ("D", "变压器零序通路", "Y0侧中性点接地提供零序通路。"),
        "20": ("B", "架空地线去磁屏蔽", "减小零序电抗。")
    },
    "判断": {
        "1": ("×", "设备额定电压一致性", "发电机与变压器额定电压按标准分级不同。"),
        "2": ("√", "两端供电网潮流控制", "可通过串联加压器调节环流。"),
        "3": ("×", "负荷曲线与装机容量", "最大负荷决定必需装机容量。"),
        "4": ("×", "变压器π型等值电路物理意义", "等值支路无直接物理对应。"),
        "5": ("√", "空载线路电容电流", "产生容升压降。"),
        "6": ("×", "PQ分解法迭代步数", "迭代步数多于牛顿法。"),
        "7": ("×", "顺调压电压范围", "顺调压不随负荷反向升压。"),
        "8": ("√", "发电机过励运行", "发出感性无功。"),
        "9": ("√", "单相接地非故障相对地电压", "中性点不接地系统升高为线电压。"),
        "10": ("√", "短路冲击电流产生时刻", "t = 0.01s。")
    }
}

print("Answer mapping dictionaries registered.")
