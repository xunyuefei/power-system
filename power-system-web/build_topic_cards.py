"""
考研简答题题库：考点标准化分类与数据清洗生成脚本
运行方式：python build_topic_cards.py
"""
import os
import json
import re

canonical_topics = {
    1: [
        "考点一：中性点运行方式（接地方式与单相接地）",
        "考点二：分裂导线与扩径导线及线路参数",
        "考点三：变压器等值模型与参数计算",
        "考点四：标幺制选择与多电压等级参数归算",
        "考点五：电力系统基本概念、额定电压与电能质量"
    ],
    2: [
        "考点一：发电机与负荷数学模型及运行特性",
        "考点二：输电线路与电缆结构、参数及等值电路",
        "考点三：变压器参数计算、等值模型及推导（Π型/Γ型）",
        "考点四：标幺制选择、有名值/标幺值归算与等值网络建立"
    ],
    3: [
        "考点一：环网潮流分布（自然分布 vs 经济分布）与潮流控制",
        "考点二：输电线路电压降落、损耗、偏移与调整",
        "考点三：高压长线路空载末端电压升高（容升效应）与对策",
        "考点四：开式网/辐射网潮流计算目的、前推回代与功率分点",
        "考点五：提高功率因数/无功补偿对电压损耗与网损的影响"
    ],
    4: [
        "考点一：节点导纳矩阵与阻抗矩阵（物理意义、特点与修改）",
        "考点二：潮流方程与节点类型（PQ/PV/平衡、PV转PQ）",
        "考点三：牛顿-拉夫逊法（Newton-Raphson）潮流计算",
        "考点四：PQ 分解法（快速解耦潮流）",
        "考点五：潮流算法综合比较、初值敏感性与优化潮流"
    ],
    5: [
        "考点一：有功功率平衡、负荷特性与备用容量",
        "考点二：发电机与负荷功频静态特性及一次调频",
        "考点三：二次调频原理与调频厂选择原则",
        "考点四：一、二、三次调频对比与互联系统联络线调频",
        "考点五：有功功率负荷最优分配与等耗量微增率准则"
    ],
    6: [
        "考点一：无功功率平衡与无功电源特性",
        "考点二：电压中枢点管理与三类调压方式（逆/顺/恒调压）",
        "考点三：四大调压措施原理与公式分析",
        "考点四：变压器分接头选择与无功补偿综合调压计算",
        "考点五：无功功率最优分配与电压无功综合控制（VQC）"
    ],
    7: [
        "考点一：短路故障概念、类型与模型差异",
        "考点二：无限大容量电源三相短路特征与电流分量",
        "考点三：短路冲击电流、最大有效值电流与短路容量",
        "考点四：同步电机短路物理过程与次暂态参数",
        "考点五：转移电抗与计算电抗概念、运算曲线法计算步骤"
    ],
    8: [
        "考点一：对称分量法原理与序分量边界条件",
        "考点二：元件序参数（发电机、变压器、输电线路）与零序网络构建",
        "考点三：横向不对称短路故障计算、正序等效定则与复合序网",
        "考点四：不对称短路非故障处电流电压分布规律与相角变换",
        "考点五：非全相运行与纵向不对称故障分析"
    ]
}

def clean_ad_text(text):
    patterns = [
        r'火哥电气考研[^\n，。]*[，。]?',
        r'加入\s*[qQ]{2}\s*答疑群[^\n，。]*[，。]?',
        r'火哥微信\s*[a-zA-Z0-9]+[，。]?',
        r'关注[“\"].*?微信公众号[^\n，。]*[，。]?',
        r'扫一扫[^\n]*',
        r'保存图片',
        r'打开哗哩哗哩APP',
        r'扫码查看UP主',
        r'2025年的真题答案讲解近期会在.*?回放',
        r'#全新讲义题库#',
        r'#最高正确率#',
        r'#最全真题期末题#',
        r'2\.4万',
        r'\\='
    ]
    for p in patterns:
        text = re.sub(p, '', text, flags=re.IGNORECASE)
    text = text.replace(r'\=', '=')
    return text.strip()

def normalize_to_canonical(ch, raw_topic, q_text, ans_text, tag):
    text = q_text + ' ' + ans_text + ' ' + tag
    
    if ch == 1:
        if '中性点' in raw_topic or re.search(r'中性点|消弧线圈|单相接地|直接接地|不接地|过补偿|全补偿|欠补偿|电容电流|弧光', text):
            return canonical_topics[1][0]
        if '分裂导线' in raw_topic or re.search(r'分裂导线|扩径导线|电晕|对地电纳|电抗.*效应|电阻.*效应|发热效应|磁场效应|电场效应|波阻抗|自然功率', text):
            return canonical_topics[1][1]
        if '变压器' in raw_topic or re.search(r'变压器.*参数|短路试验|空载试验|三绕组|双绕组|π型|Γ型|等值变压器|励磁支路', text):
            return canonical_topics[1][2]
        if '标幺' in raw_topic or re.search(r'标幺制|标幺值|基准值|有名值|参数归算|多级电压.*归算', text):
            return canonical_topics[1][3]
        return canonical_topics[1][4]

    elif ch == 2:
        if '发电机' in raw_topic or re.search(r'发电机.*模型|同步电机|隐极|凸极|暂态电抗|次暂态|负荷特性|负荷.*模型|电动机', text):
            return canonical_topics[2][0]
        if '输电' in raw_topic or '电缆' in raw_topic or re.search(r'输电线路|电缆|长线路|分布参数|集中参数|架空线|并联电抗器|无功.*发出|对地电导', text):
            return canonical_topics[2][1]
        if '变压器' in raw_topic or re.search(r'变压器|三绕组|双绕组|容量归算|短路试验|空载试验|理想变压器|变比|短路阻抗', text):
            return canonical_topics[2][2]
        return canonical_topics[2][3]

    elif ch == 3:
        if '环网' in raw_topic or re.search(r'环网|自然分布|经济分布|潮流控制|循环功率|串联加压器|强制潮流|解列', text):
            return canonical_topics[3][0]
        if '容升' in raw_topic or '升高' in raw_topic or re.search(r'长线路|末端电压升高|空载运行|轻载|电容充电|容升', text):
            return canonical_topics[3][2]
        if '开式' in raw_topic or '辐射' in raw_topic or re.search(r'开式网|辐射网|前推回代|手算|运算负荷|运算功率|潮流计算目的|功率分点', text):
            return canonical_topics[3][3]
        if '功率因数' in raw_topic or '无功' in raw_topic or re.search(r'功率因数|无功补偿|并联电容|减少网损|降低网损', text):
            return canonical_topics[3][4]
        return canonical_topics[3][1]

    elif ch == 4:
        if '导纳' in raw_topic or '阻抗矩阵' in raw_topic or re.search(r'导纳矩阵|阻抗矩阵|自导纳|互导纳|稀疏性|互易定理|对称性|修改导纳', text):
            return canonical_topics[4][0]
        if 'PQ' in raw_topic or '解耦' in raw_topic or re.search(r'PQ分解|快速解耦|P-Q解耦|简化条件|B\'|B\'\'', text):
            return canonical_topics[4][3]
        if '牛顿' in raw_topic or '拉夫逊' in raw_topic or re.search(r'牛顿|拉夫逊|雅可比矩阵|修正方程|极坐标|直角坐标', text):
            return canonical_topics[4][2]
        if '优化' in raw_topic or '比较' in raw_topic or '病态' in raw_topic or re.search(r'高斯|病态|优化潮流|综合比较|算法比较|状态估计|初值', text):
            return canonical_topics[4][4]
        return canonical_topics[4][1]

    elif ch == 5:
        if '一次调频' in raw_topic or re.search(r'一次调频|调差系数|单位调节功率|功频静态特性|有差|静态调差率|调速器|转速死区', text):
            return canonical_topics[5][1]
        if '二次调频' in raw_topic or re.search(r'二次调频|无差调频|主调频厂|调频厂选择|调频器|积差调频', text):
            return canonical_topics[5][2]
        if '三次' in raw_topic or 'AGC' in raw_topic or '联络线' in raw_topic or re.search(r'三次调频|联络线|AGC|互联系统|ACE|多机调频', text):
            return canonical_topics[5][3]
        if '最优分配' in raw_topic or '等耗量' in raw_topic or re.search(r'最优分配|等耗量微增率|等微增率|耗量特性|煤耗|水火电协调|经济调度|线损修正', text):
            return canonical_topics[5][4]
        return canonical_topics[5][0]

    elif ch == 6:
        if '中枢点' in raw_topic or '调压方式' in raw_topic or re.search(r'中枢点|逆调压|顺调压|常调压|恒调压|调压方式|允许波动', text):
            return canonical_topics[6][1]
        if '四大调压' in raw_topic or '措施' in raw_topic or re.search(r'四大调压|调压措施|发电机端电压|串联电容|串联补偿', text):
            return canonical_topics[6][2]
        if '分接头' in raw_topic or re.search(r'分接头选择|标准分接头|调压计算|最大负荷.*最小负荷|分接头', text):
            return canonical_topics[6][3]
        if '优化' in raw_topic or 'VQC' in raw_topic or re.search(r'无功优化|最优分配|VQC|电压无功综合控制|无功经济', text):
            return canonical_topics[6][4]
        return canonical_topics[6][0]

    elif ch == 7:
        if '无限大' in raw_topic or re.search(r'无限大容量|无限大功率|周期分量|非周期分量|暂态过程|衰减时间常数', text):
            return canonical_topics[7][1]
        if '冲击' in raw_topic or re.search(r'冲击电流|冲击系数|全电流最大有效值|短路容量|kimp', text):
            return canonical_topics[7][2]
        if '同步电机' in raw_topic or re.search(r'同步电机|次暂态电抗|暂态电抗|阻尼绕组|磁链守恒|Xd\'\'|Xd\'', text):
            return canonical_topics[7][3]
        if '运算曲线' in raw_topic or '电抗' in raw_topic or re.search(r'运算曲线|转移电抗|计算电抗|计算曲线|实用短路', text):
            return canonical_topics[7][4]
        return canonical_topics[7][0]

    elif ch == 8:
        if '序参数' in raw_topic or '零序网络' in raw_topic or re.search(r'零序网络|零序电流|零序阻抗|变压器接线|Y0|Δ|架空地线|互感|发电机零序', text):
            return canonical_topics[8][1]
        if '横向' in raw_topic or '复合序网' in raw_topic or re.search(r'横向不对称|单相接地|两相短路|两相接地|复合序网|边界条件|短路故障计算', text):
            return canonical_topics[8][2]
        if '非故障处' in raw_topic or '相位' in raw_topic or re.search(r'非故障处|分布规律|相位变换|相角变换|零序电流分布', text):
            return canonical_topics[8][3]
        if '非全相' in raw_topic or '断线' in raw_topic or re.search(r'非全相|断线|纵向不对称|单相断线|两相断线', text):
            return canonical_topics[8][4]
        return canonical_topics[8][0]

    return canonical_topics.get(ch, ["通用考点"])[0]

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    cards_path = os.path.join(base_dir, "docs", "public", "cards.json")
    
    if not os.path.exists(cards_path):
        print(f"File not found: {cards_path}")
        return
        
    cards = json.load(open(cards_path, encoding='utf-8'))
    
    updated = 0
    for c in cards:
        ch = c['chapter']
        q = clean_ad_text(c['question'])
        a = clean_ad_text(c['answer'])
        tag = c.get('sourceTag', '')
        raw_topic = c.get('topic', '')
        
        c['topic'] = normalize_to_canonical(ch, raw_topic, q, a, tag)
        c['question'] = q
        c['answer'] = a
        updated += 1
        
    with open(cards_path, 'w', encoding='utf-8') as f:
        json.dump(cards, f, ensure_ascii=False, indent=2)
        
    print(f"Processed and verified {updated} cards into {cards_path}")

if __name__ == "__main__":
    main()
