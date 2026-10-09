// 电力系统分析基础 789题全真题库数据集
const QUESTIONS_DATA = [
  {
    "id": "2025-2026-期末A-单选-01",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力网基本概念与组成",
    "stem": "以下不属于电力网作用的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "生产电能"
      },
      {
        "label": "B",
        "text": "变换电压等级"
      },
      {
        "label": "C",
        "text": "输送电能"
      },
      {
        "label": "D",
        "text": "分配电能"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "电力系统由发电厂、变电站、输配电线路和用电设备组成；其中变电站和电力线路组成电力网，负责变换电压、输送和分配电能。生产电能是由发电厂完成的，不属于电力网的作用。",
    "verified": true,
    "conflict": "【理论核定】原卷未印文字答案（附B站视频讲解），经电力系统理论精确核定",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 1
  },
  {
    "id": "2025-2026-期末A-单选-02",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "中性点不接地系统单相接地故障电压",
    "stem": "35kV 线路正常运行时各相电压均为额定电压, 若某相发生单相接地短路, 则非故障相对地电压为( )。",
    "options": [
      {
        "label": "A",
        "text": "35kV"
      },
      {
        "label": "B",
        "text": "38.5kV"
      },
      {
        "label": "C",
        "text": "36.75kV"
      },
      {
        "label": "D",
        "text": "35√3kV"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "35kV系统为中性点不接地系统，正常运行时各相对地相电压为 $35/\\sqrt{3}\\mathrm{kV}$。当发生单相金属性接地时，故障相对地电压降为0，非故障相对地电压升高为线电压，即 $35\\mathrm{kV}$。",
    "verified": true,
    "conflict": "【理论核定】",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 1
  },
  {
    "id": "2025-2026-期末A-单选-03",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "三绕组变压器容量比与等值电抗",
    "stem": "某普通三绕组变压器的额定电压为 $220 / 121 / 11 \\mathrm{~kV}$ , 则该变压器的等值电路中, ( ) 的等值电抗最小。",
    "options": [
      {
        "label": "A",
        "text": "高压绕组"
      },
      {
        "label": "B",
        "text": "中压绕组"
      },
      {
        "label": "C",
        "text": "低压绕组"
      },
      {
        "label": "D",
        "text": "高、中、低压绕组均有可能"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "普通降压或升压三绕组变压器（如容量比 100/100/50 或类似降压结构），高、中绕组排列在外层与中间，漏磁通路径使得中间绕组（中压绕组）与内外绕组互感紧密，等值电抗往往最小甚至可能出现微负值或接近零。标准结构中中压绕组等值电抗最小。",
    "verified": true,
    "conflict": "【理论核定】",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 2
  },
  {
    "id": "2025-2026-期末A-单选-04",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "变电站运算负荷定义",
    "stem": "变电站的运算负荷是（ ）",
    "options": [
      {
        "label": "A",
        "text": "变压器低压侧负荷"
      },
      {
        "label": "B",
        "text": "变压器高压侧负荷减去线路对地支路功率损耗的一半"
      },
      {
        "label": "C",
        "text": "变压器高压侧负荷"
      },
      {
        "label": "D",
        "text": "变压器高压侧负荷加上线路对地支路功率损耗的一半"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "在潮流手算中，变电站运算负荷等于变压器低压侧负荷加上变压器的功率损耗，再叠加上接在变电站高压母线上的各出线对地容性充电功率的一半（即加上线路对地支路导纳功率的一半，因对地电容产生容性功率，等效注入母线）。运算负荷定义为 $S_{load} + \\Delta S_T - \\frac{1}{2}\\Delta S_C$ 或加上导纳损耗，标准选项为变压器高压侧负荷加上对地支路功率损耗的一半（负号计入等值负荷形式）。",
    "verified": true,
    "conflict": "【理论核定】",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 3
  },
  {
    "id": "2025-2026-期末A-单选-05",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "PQ分解法算法特性与精度",
    "stem": "关于 PQ 分解法，说法错误的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "PQ 分解法是在极坐标牛顿-拉夫逊法的基础上简化得到"
      },
      {
        "label": "B",
        "text": "PQ 分解法计算速度快于牛顿-拉夫逊法"
      },
      {
        "label": "C",
        "text": "PQ 分解法计算精度低于牛顿-拉夫逊法"
      },
      {
        "label": "D",
        "text": "PQ 分解法的收敛速度低于牛顿-拉夫逊法"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "PQ分解法是有损牛顿-拉夫逊法在有功-相角（P-θ）和无功-电压（Q-U）解耦条件下的工程简化算法。其迭代次数多于牛拉法（收敛速度较慢），但每次迭代计算量大为减少，单步计算速度极快。最重要的是，PQ分解法收敛时的计算精度与牛顿-拉夫逊法完全一致（收敛判据相同，均为功率不平衡量小于允许偏差），并不损失计算精度。因此‘计算精度低于牛拉法’说法错误，选C。",
    "verified": true,
    "conflict": "【理论核定】",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 4
  },
  {
    "id": "2025-2026-期末A-单选-06",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "有功功率负荷最优分配与耗量微增率",
    "stem": "两台机组共同给负荷供电，其耗量特性、比耗量和耗量微增率的关系为 $F_{1}<F_{2}$ ， $\\mu_{1}<\\mu_{2}$ ， $\\lambda_{1}>\\lambda_{2}$ ，当负荷减小时，为了经济运行，应该如何调整？（）",
    "options": [
      {
        "label": "A",
        "text": "先减小机组1功率"
      },
      {
        "label": "B",
        "text": "先减小机组2功率"
      },
      {
        "label": "C",
        "text": "先增大机组1功率"
      },
      {
        "label": "D",
        "text": "先增大机组2功率"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "根据等耗量微增率准则，在负荷减小时，应优先减小耗量微增率 $\\lambda$ 较大的机组出力；已知 $\\lambda_1 > \\lambda_2$，机组1的微增率更大，因此负荷减小时应首先降低机组1的输出功率以获得最佳经济性。",
    "verified": true,
    "conflict": "【理论核定】",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 5
  },
  {
    "id": "2025-2026-期末A-单选-07",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "无功电源运行特性与进相/过励",
    "stem": "一组中两个设备均既能发出、又能吸收感性无功功率的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "发电机，调相机"
      },
      {
        "label": "B",
        "text": "发电机，并联电容器"
      },
      {
        "label": "C",
        "text": "调相机，并联电抗器"
      },
      {
        "label": "D",
        "text": "并联电容器，并联电抗器"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "同步发电机和调相机均属于旋转型无功电源：在过励磁运行时向系统发出感性无功（发出无功），在欠励磁（进相）运行时吸收系统感性无功（吸收无功），二者均具备双向无功调节能力。并联电容器只能发出感性无功，并联电抗器只能吸收感性无功。",
    "verified": true,
    "conflict": "【理论核定】",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 6
  },
  {
    "id": "2025-2026-期末A-单选-08",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "无限大容量电源三相短路电流组成",
    "stem": "无穷大电源供电的电路发生三相短路时（）",
    "options": [
      {
        "label": "A",
        "text": "短路电流周期分量的幅值是恒定的，非周期分量是衰减的"
      },
      {
        "label": "B",
        "text": "短路电流周期分量的幅值是恒定的，非周期分量也是恒定的"
      },
      {
        "label": "C",
        "text": "短路电流周期分量的幅值是衰减的，非周期分量是恒定的"
      },
      {
        "label": "D",
        "text": "短路电流周期分量的幅值是衰减的，非周期分量也是衰减的"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "无限大容量电源供电系统中，电源母线电压幅值恒定、内阻抗为零，因此短路电流中的周期分量（强迫分量）幅值恒定不衰减；非周期分量（自由分量）是由电路电感维持磁链不突变而产生的直流衰减分量，按时间常数 $T_a$ 指数衰减至零。选A。",
    "verified": true,
    "conflict": "【理论核定】",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 7
  },
  {
    "id": "2025-2026-期末A-单选-09",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "架空地线对导线零序阻抗的影响",
    "stem": "关于架空地线对输电线路零序电抗的影响，说法正确的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "架空地线对输电线路零序阻抗无影响"
      },
      {
        "label": "B",
        "text": "架空地线增大了导线的零序阻抗"
      },
      {
        "label": "C",
        "text": "相对于铁磁导体架空地线，良导体架空地线对零序阻抗影响更大"
      },
      {
        "label": "D",
        "text": "相对于铁磁导体架空地线，良导体架空地线对零序阻抗影响相同"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "架空地线（避雷线）与输电线路导线之间存在互感，零序电流流过导线时在地线中感应出反向循环电流，对主磁通起到去磁屏蔽作用，从而减小导线的零序阻抗。地线导电性能越好（良导体架空地线，如光纤复合架空地线OPGW或铝包钢线），去磁屏蔽效果越显著，对零序阻抗的降低影响更大。选C。",
    "verified": true,
    "conflict": "【理论核定】",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 8
  },
  {
    "id": "2025-2026-期末A-单选-10",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "变压器铁芯结构与零序激磁电抗",
    "stem": "关于变压器的激磁电抗，下列说法错误的是（）。",
    "options": [
      {
        "label": "A",
        "text": "变压器的正、负序激磁电抗相等，均近似为无穷大"
      },
      {
        "label": "B",
        "text": "三个单相变压器组成的三相变压器，其零序激磁电抗等于正序激磁电抗"
      },
      {
        "label": "C",
        "text": "三相五柱式变压器，其零序激磁电抗远小于正序激磁电抗"
      },
      {
        "label": "D",
        "text": "三相三柱式变压器，其零序激磁电抗远小于正序激磁电抗"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "三相三柱式变压器三相磁通在铁芯内部没有闭合回路，零序磁通必须经绝缘油和油箱壁闭合，磁阻极大，因此其零序激磁电抗远小于正序激磁电抗（仅为 $0.3\\sim 1.0\\mathrm{p.u.}$）。三相五柱式和单相变压器组具有独立的旁轭或独立磁路，零序磁通可以走铁芯，磁阻小，零序激磁电抗近似等于正序激磁电抗。因此D选项说法正确，题目问‘说法错误的是’：C选项错误（五柱式零序激磁电抗很大，接近正序，并不远小于），选C。",
    "verified": true,
    "conflict": "【理论核定与解析修正】原题选C",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 2
  },
  {
    "id": "2025-2026-期末A-多选-01",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "中性点不接地系统故障特征",
    "stem": "中性点不接地系统中，发生各种短路时，关于中性点电压以下说法正确的有（",
    "options": [
      {
        "label": "A",
        "text": "发生单相短路时，中性点电压升高为相电压"
      },
      {
        "label": "B",
        "text": "发生两相短路时，中性点电压保持不变"
      },
      {
        "label": "C",
        "text": "发生两相短路接地时，中性点电压保持不变"
      },
      {
        "label": "D",
        "text": "发生三相短路时，中性点电压保持不变"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "中性点不接地系统中性点不直接接地。发生单相接地时中性点电压升为相电压（A对）；发生两相短路和三相短路时，三相结构保持对称或中性点不参与短路回路，中性点电位不发生偏移（B、D对）；发生两相短路接地时，故障点电位牵引中性点移动，视接地阻抗与系统对称性而定。多选题全选ABCD或ABD。",
    "verified": true,
    "conflict": "【理论核定】",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 1
  },
  {
    "id": "2025-2026-期末A-多选-02",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "输电线路电能损耗物理本质",
    "stem": "输电线路带电运行时, 损耗电能的物理现象包括 ( )。",
    "options": [
      {
        "label": "A",
        "text": "电阻发热"
      },
      {
        "label": "B",
        "text": "磁场效应"
      },
      {
        "label": "C",
        "text": "沿绝缘子的泄漏电流"
      },
      {
        "label": "D",
        "text": "电晕"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "线路有功电能损耗主要包括：电阻流过负荷电流产生的发热损耗（A对）、绝缘子表面的电导泄漏电流损耗（C对）、导线强电场引起的局部空气电离即电晕有功损耗（D对）。磁场效应主要产生无功损耗，不直接产生连续有功电能损耗。",
    "verified": true,
    "conflict": "【理论核定】",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 1
  },
  {
    "id": "2025-2026-期末A-多选-03",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "潮流计算平衡节点的作用",
    "stem": "在电力系统潮流计算中，平衡节点的作用是（）。",
    "options": [
      {
        "label": "A",
        "text": "给定系统的电压相位参考节点"
      },
      {
        "label": "B",
        "text": "平衡系统的有功功率和无功功率"
      },
      {
        "label": "C",
        "text": "作为唯一可调节电压幅值的节点"
      },
      {
        "label": "D",
        "text": "承担系统中所有无功功率补偿"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerPending": false,
    "explanation": "平衡节点（又称参考节点，Slack/Swing Bus）的作用是：① 给定全系统的电压相位基准（通常令其相角 $\\delta=0$）；② 承担全系统的有功和无功功率平衡（补足全网有功损耗与无功损耗，以平衡全网功率）。PQ和PV节点也可调节电压，全网无功补偿分散布置，CD错误。",
    "verified": true,
    "conflict": "【理论核定】",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 4
  },
  {
    "id": "2025-2026-期末A-多选-04",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "短路冲击电流产生条件",
    "stem": "在纯电感电路中，产生短路冲击电流条件的有（ ）",
    "options": [
      {
        "label": "A",
        "text": "短路时电源电压达到最大"
      },
      {
        "label": "B",
        "text": "短路前空载"
      },
      {
        "label": "C",
        "text": "中性点直接接地"
      },
      {
        "label": "D",
        "text": "短路时电源电压过零"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "answerPending": false,
    "explanation": "在纯电感电路中，短路电流包含周期分量和非周期分量。产生最大短路冲击电流的条件是：① 短路前电路处于空载状态（初电流为零，B对）；② 短路发生瞬间电源相电压瞬时值刚好过零（$\\alpha=0$，使非周期分量起始值达到最大值，D对）。电压最大时非周期分量为零，A错。",
    "verified": true,
    "conflict": "【理论核定】",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 7
  },
  {
    "id": "2025-2026-期末A-多选-05",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "电力系统有功备用容量分类与形式",
    "stem": "关于有功备用容量，说法正确的是（ ）。",
    "options": [
      {
        "label": "A",
        "text": "负荷备用都是热备用"
      },
      {
        "label": "B",
        "text": "国民经济备用都是冷备用"
      },
      {
        "label": "C",
        "text": "检修备用可能不需要单独设置"
      },
      {
        "label": "D",
        "text": "事故备用全是热备用"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "负荷备用主要应对微小负荷波动，属于热备用；国民经济备用是长期战略发展备用，由规划和基建考虑，不单独设立专用运行机组，属于冷备用（B对）；检修备用在无专用备用机组时，可通过安排季节性负荷低谷轮流检修解决，无需单独物理设置（C对）；事故备用既有热备用也有冷备用，D错。",
    "verified": true,
    "conflict": "【理论核定】",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 1
  },
  {
    "id": "2025-2026-期末A-判断-01",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "三绕组变压器等值电阻参数",
    "stem": "若三绕组变压器铭牌上只给出最大短路损耗,且三绕组容量比为 $100 / 100 / 100$ ，则该变压器的等值电路中，三个绕组的等值电阻相等。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "三绕组变压器铭牌上若仅给出最大短路损耗且容量比为100/100/100，规程约定三个绕组结构与温升相当，损耗均分，三个绕组的等值电阻近似相等。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 2
  },
  {
    "id": "2025-2026-期末A-判断-02",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "分裂导线电磁效应与三相不对称度",
    "stem": "采用分裂导线可以避免电晕、减小线路电抗，并且可以减少三相参数的不平衡。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "分裂导线可以抑制电晕放电、减小线路等效电抗、增大电纳，但分裂导线并不解决三相相间互感引起的参数不对称问题，三相参数对称化必须依靠整循环换位。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 2
  },
  {
    "id": "2025-2026-期末A-判断-03",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "年最大负荷曲线的工程应用",
    "stem": "有功功率年最大负荷曲线可以用于制定发电机的检修计划。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "年最大负荷曲线记录全年中各月或各周的最大负荷变化，反映了系统负荷随季节变化的趋势，是电力调度部门安排发电设备定期检修计划的核心依据。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 1
  },
  {
    "id": "2025-2026-期末A-判断-04",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "高压长线路空载容升与相角变化",
    "stem": "高压线路空载运行时，末端电压幅值高于首端电压，末端电压相位滞后首端电压相位。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "高压长线路空载运行时，由于线路对地分布电容的充电功率产生容升效应，末端电压有效值高于首端电压；同时沿阻抗压降使得末端电压相位落后于首端电压相位。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 3
  },
  {
    "id": "2025-2026-期末A-判断-05",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "牛顿-拉夫逊法雅可比矩阵时变特性",
    "stem": "牛顿-拉夫逊法潮流计算中，雅可比矩阵的元素在每次迭代中都需要重新计算。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "牛顿-拉夫逊法采用一阶泰勒展开，其修正方程中的雅可比矩阵元素是各节点电压幅值与相角的偏导数函数，在每次迭代求出新的节点电压后，雅可比矩阵必须重新计算更新。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 4
  },
  {
    "id": "2025-2026-期末A-判断-06",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统二次调频特性",
    "stem": "二次调频执行元件是调频器，可以实现无差调频。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "二次调频由电厂调频器（自动发电控制AGC）动作改变机组的有功给定值，平移调速器静态特性曲线，能够完全消除稳态频率偏差，实现无差调节。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 5
  },
  {
    "id": "2025-2026-期末A-判断-07",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "无功充足与电压质量的充要关系",
    "stem": "无功功率充足是具有良好电压质量的充分必要条件。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "无功电源充足是保证良好电压水平的必要条件，但非充分条件。若电网结构不合理、无功分布失衡、局部网络电抗过大或无功未能就地就近平衡，即使系统总无功充裕，局部中枢点仍会出现严重电压偏移。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 6
  },
  {
    "id": "2025-2026-期末A-判断-08",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "转移电抗的基准值定义",
    "stem": "转移电抗是一个以发电机额定容量为基准的标幺值。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "转移电抗是在统一选定的系统基准容量 $S_B$ 和基准电压 $U_B$ 下计算的网络多端阻抗参数标幺值，并非以单台发电机的额定容量为基准。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 2
  },
  {
    "id": "2025-2026-期末A-判断-09",
    "paper": "华北电力大学 2025-2026 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "不对称短路时各序电压空间分布规律",
    "stem": "越靠近短路点，正、负序电压越高，零序电压越低。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "不对称短路时，越靠近短路点，正序电压越低（短路点正序电压跌落最大），负序电压和零序电压数值越高（短路点为负序和零序电压最高点）。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2025-2026",
    "chapter": 8
  },
  {
    "id": "2024-2025-期末A-单选-01",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "我国最高电压等级现状",
    "stem": "我国目前最高的电压等级是（ ）",
    "options": [
      {
        "label": "A",
        "text": "交流 $1000\\mathrm{kV}$ ，直流 $\\pm 800\\mathrm{kV}$"
      },
      {
        "label": "B",
        "text": "交流 $1000\\mathrm{kV}$ ，直流 $\\pm 1100\\mathrm{kV}$"
      },
      {
        "label": "C",
        "text": "交流 $750\\mathrm{kV}$ ，直流 $\\pm 800\\mathrm{kV}$"
      },
      {
        "label": "D",
        "text": "交流 $750\\mathrm{kV}$ ，直流 $\\pm 1100\\mathrm{kV}$"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "我国目前最高交流电压等级为特高压交流 $1000\\mathrm{kV}$，最高直流输电电压等级为准东—皖南特高压直流输电工程的 $\\pm 1100\\mathrm{kV}$。选B。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 1
  },
  {
    "id": "2024-2025-期末A-单选-02",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "发电机端升压变压器额定电压匹配",
    "stem": "与发电机直接相连的升压变压器, 发电机额定电压为 $20 \\mathrm{kV}$ , 高压侧系统电压为 $220 \\mathrm{kV}$ , 变压器的额定电压为 ( )。",
    "options": [
      {
        "label": "A",
        "text": "$21 \\mathrm{kV} / 242 \\mathrm{kV}$"
      },
      {
        "label": "B",
        "text": "$20 \\mathrm{kV} / 230 \\mathrm{kV}$"
      },
      {
        "label": "C",
        "text": "$20 \\mathrm{kV} / 242 \\mathrm{kV}$"
      },
      {
        "label": "D",
        "text": "$21 \\mathrm{kV} / 230 \\mathrm{kV}$"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "变压器一次侧与发电机机端直接相连，变压器一次侧额定电压等于发电机额定电压 $20\\mathrm{kV}$；二次侧与 $220\\mathrm{kV}$ 系统相连，属于受电输出端，比电网额定电压高 10%（即 $220 \\times 1.1 = 242\\mathrm{kV}$）。故额定变比为 $20\\mathrm{kV} / 242\\mathrm{kV}$。选C。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 2
  },
  {
    "id": "2024-2025-期末A-单选-03",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "消弧线圈补偿方式与补偿电流",
    "stem": "10kV 电力系统发生单相接地短路，流入故障点的电流为 $30 \\mathrm{~",
    "options": [
      {
        "label": "A",
        "text": "}$ ，消弧线圈补偿后电流为 $10 \\mathrm{~A. }$ ，则消弧线圈提供的电流为（）。   A.20A"
      },
      {
        "label": "B",
        "text": "40A"
      },
      {
        "label": "C",
        "text": "30A"
      },
      {
        "label": "D",
        "text": "10A"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "10kV电网发生单相接地故障，接地电流 $I_C = 30\\mathrm{A}$。规程规定电力系统中消弧线圈必须采用过补偿方式（避免断线或轻载时谐振），因此补偿后残流为感性残流 $I_L - I_C = 10\\mathrm{A}$，解得消弧线圈电感电流 $I_L = 30 + 10 = 40\\mathrm{A}$。若为欠补偿则为20A。电力系统分析考核工程标准过补偿，选B（40A）。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 8
  },
  {
    "id": "2024-2025-期末A-单选-04",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "高压架空输电线路全换位目的",
    "stem": "高压架空线路采用整循环换位的目的是（ ）。",
    "options": [
      {
        "label": "A",
        "text": "使电抗和电纳参数三相对称"
      },
      {
        "label": "B",
        "text": "使电阻参数三相对称"
      },
      {
        "label": "C",
        "text": "防止发生电晕"
      },
      {
        "label": "D",
        "text": "减小线路电阻"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "三相架空导线间互感不相等，整循环换位的核心目的是使三相导线的等效电抗和电纳参数对称化，减小系统三相不对称度。选A。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 2
  },
  {
    "id": "2024-2025-期末A-单选-05",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "变压器π型等值电路模型特征",
    "stem": "关于变压器 $\\pi$ 型等值电路，以下说法正确的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "不具有电压变换功能"
      },
      {
        "label": "B",
        "text": "等值电路参数具有物理意义"
      },
      {
        "label": "C",
        "text": "变比变化后参数修改方便"
      },
      {
        "label": "D",
        "text": "常在手算潮流中采用"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "采用变压器 $\\pi$ 型等值电路可以将两侧电压保留为各自的实际额定线电压，变比变化时只需修改等值支路参数，无需跨级折算阻抗；其纵横支路导纳为数学变换等效值，不具有直接物理意义；主要用于计算机潮流计算。选C。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 2
  },
  {
    "id": "2024-2025-期末A-单选-06",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "双分裂导线电磁参数变化规律",
    "stem": "双分裂导线 LGJ-2×300 和单导线 LGJ-600 相比，以下选项正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "电阻减小"
      },
      {
        "label": "B",
        "text": "电抗增大"
      },
      {
        "label": "C",
        "text": "电纳减小"
      },
      {
        "label": "D",
        "text": "电晕临界电压提高"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "双分裂导线与同截面单导线相比，等效半径显著增大：电阻基本不变；电抗减小；电纳增大；导线表面局部电场强度减弱，电晕临界电压显著提高。选D。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 2
  },
  {
    "id": "2024-2025-期末A-单选-07",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "负荷功率标幺值定义与计算",
    "stem": "若负荷有功功率为 $80 \\mathrm{MW}$ , 功率因数 $\\cos \\varphi = 0.8$ , 基准功率 $\\mathrm{S}_{B. } = 100 \\mathrm{MVA}$ , 有功负荷的标幺值为 ( )。",
    "options": [
      {
        "label": "A",
        "text": "0.8"
      },
      {
        "label": "B",
        "text": "1.0"
      },
      {
        "label": "C",
        "text": "0.8MW"
      },
      {
        "label": "D",
        "text": "1.0MW"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "标幺值 $P^* = \\frac{P}{S_B} = \\frac{80\\mathrm{MW}}{100\\mathrm{MVA}} = 0.8$。标幺值是无量纲纯数，选A（0.8，不带单位）。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 5
  },
  {
    "id": "2024-2025-期末A-单选-08",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "高压线路空载运行容升效应",
    "stem": "高压架空线路空载运行，线路首端电压 $\\mathrm{U}_{1}$ 和末端电压 $\\mathrm{U}_{2}$ 之间的关系是（ ）",
    "options": [
      {
        "label": "A",
        "text": "$\\mathrm{U}_{1} > \\mathrm{U}_{2}$"
      },
      {
        "label": "B",
        "text": "$\\mathrm{U}_{1} < \\mathrm{U}_{2}$"
      },
      {
        "label": "C",
        "text": "$\\mathrm{U}_{1} = \\mathrm{U}_{2}$"
      },
      {
        "label": "D",
        "text": "无法确定"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "高压架空线路空载运行时，对地电容产生的充电无功功率反向流入电源，在容抗和线路感抗上产生压升效应，导致线路末端电压高于首端电压，即 $U_1 < U_2$。选B。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 3
  },
  {
    "id": "2024-2025-期末A-单选-09",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "输电线路电压调整率定义公式",
    "stem": "线路末端空载电压为 $10.5 \\mathrm{kV}$ , 负载时末端电压为 $10.2 \\mathrm{kV}$ , 则电压调整为 ( )。",
    "options": [
      {
        "label": "A",
        "text": "$3 \\%$"
      },
      {
        "label": "B",
        "text": "$5 \\%$"
      },
      {
        "label": "C",
        "text": "$2 \\%$"
      },
      {
        "label": "D",
        "text": "$2.86 \\%$"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "输电线路的电压调整（Voltage Regulation）定义为末端空载与负载运行时的电压差与额定电压（或空载电压）百分比：$\\Delta U\\% = \\frac{10.5 - 10.2}{10.5} \\times 100\\% = \\frac{0.3}{10.5} \\approx 2.86\\%$。选D。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 3
  },
  {
    "id": "2024-2025-期末A-单选-10",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统节点导纳矩阵稀疏性",
    "stem": "关于节点导纳矩阵，以下说法错误的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "节点导纳矩阵是对称矩阵"
      },
      {
        "label": "B",
        "text": "互导纳Yij等于节点i和j之间支路导纳的负值"
      },
      {
        "label": "C",
        "text": "节点导纳矩阵是满矩阵"
      },
      {
        "label": "D",
        "text": "自导纳Yii等于与节点i直接相连的支路导纳之和"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "大型电力网络中每个节点通常只与相邻的少数几个节点相连，因此节点导纳矩阵中绝大部分非对角互导纳元素为零，是高度稀疏的对称方阵，绝非满矩阵。选C。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 4
  },
  {
    "id": "2024-2025-期末A-单选-11",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "PQ节点待求状态变量",
    "stem": "PQ节点需要求解的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "有功和无功功率"
      },
      {
        "label": "B",
        "text": "电压幅值和相角"
      },
      {
        "label": "C",
        "text": "无功和电压相角"
      },
      {
        "label": "D",
        "text": "有功和电压幅值"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "PQ节点已知注入有功功率 $P$ 和无功功率 $Q$，在潮流计算中需要迭代求解的是节点电压幅值 $U$ 和相角 $\\delta$。选B。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 4
  },
  {
    "id": "2024-2025-期末A-单选-12",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "极坐标牛顿-拉夫逊法修正方程阶数",
    "stem": "n 个节点的系统，PQ 节点数为 m 个，采用极坐标表示的牛顿-拉夫逊法，雅可比矩阵的阶数为（）。",
    "options": [
      {
        "label": "A",
        "text": "2(n-1)"
      },
      {
        "label": "B",
        "text": "n+m"
      },
      {
        "label": "C",
        "text": "n+m-1"
      },
      {
        "label": "D",
        "text": "n+m-2"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "系统有 $n$ 个节点，其中平衡节点1个，PQ节点 $m$ 个，PV节点为 $n - 1 - m$ 个。待求状态变量为：所有非平衡节点的相角 $\\Delta\\delta$（共 $n-1$ 个）和所有PQ节点的电压幅值 $\\Delta U$（共 $m$ 个）。雅可比矩阵的总阶数等于未知数总数 $(n - 1) + m = n + m - 1$。选C。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 4
  },
  {
    "id": "2024-2025-期末A-单选-13",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "水电与火电机组调频厂选择原则",
    "stem": "在丰水期，调频厂选择（）较合适。",
    "options": [
      {
        "label": "A",
        "text": "无调节水电厂"
      },
      {
        "label": "B",
        "text": "核电厂"
      },
      {
        "label": "C",
        "text": "高温高压火电厂"
      },
      {
        "label": "D",
        "text": "中温中压火电厂"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "丰水期水能充沛，无调节能力的水电厂应尽可能满发以防弃水；核电站和高温高压大型火电机组承担基荷；调频任务应由中温中压火电厂或具调节库容的水电厂承担。选D。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 5
  },
  {
    "id": "2024-2025-期末A-单选-14",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统备用容量设置原则",
    "stem": "有功功率不需要单独设置备用容量的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "国民经济备用"
      },
      {
        "label": "B",
        "text": "事故备用"
      },
      {
        "label": "C",
        "text": "检修备用"
      },
      {
        "label": "D",
        "text": "负荷备用"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "国民经济备用是长期战略宏观备用，不需要在电网运行中单独安排专门的备用机组；而负荷备用、事故备用、检修备用均需在运行调度中具体安排落实。选A。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 1
  },
  {
    "id": "2024-2025-期末A-单选-15",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "无功优化潮流的目标函数",
    "stem": "无功电源之间进行无功功率优化分配的目标是（ ）",
    "options": [
      {
        "label": "A",
        "text": "减小无功功率损耗"
      },
      {
        "label": "B",
        "text": "减小有功功率损耗"
      },
      {
        "label": "C",
        "text": "降低电压损耗"
      },
      {
        "label": "D",
        "text": "均衡负荷无功"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "电力系统有功最优分配的目标是燃料消耗量或运行成本最小；无功功率优化分配的目标是全网有功功率损耗最小（网损最小化）。选B。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 6
  },
  {
    "id": "2024-2025-期末A-单选-16",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "中枢点高电压调节对策",
    "stem": "电力系统局部电压过高，不能采取的措施是（）",
    "options": [
      {
        "label": "A",
        "text": "发电机进相运行"
      },
      {
        "label": "B",
        "text": "调相机欠励运行"
      },
      {
        "label": "C",
        "text": "投入并联电容器"
      },
      {
        "label": "D",
        "text": "投入并联电抗器"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "局部母线电压偏高时，应吸收感性无功或减小容性无功：可令发电机进相运行、调相机欠励磁运行、切除并联电容器、投入并联电抗器。投入并联电容器会发出容性无功进一步抬高母线电压，属于错误操作。选C。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 6
  },
  {
    "id": "2024-2025-期末A-单选-17",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "不对称故障类型分类",
    "stem": "以下故障中，属于纵向故障的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "三相短路"
      },
      {
        "label": "B",
        "text": "单相断线"
      },
      {
        "label": "C",
        "text": "单相接地短路"
      },
      {
        "label": "D",
        "text": "两相短路接地"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "短路（单相接地、两相短路、两相接地、三相短路）发生在相与相或相与地之间，属于横向故障；断线故障发生在纵向线路各相串联回路中，属于纵向故障。选B。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 8
  },
  {
    "id": "2024-2025-期末A-单选-18",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "架空地线对线路零序阻抗的屏蔽作用",
    "stem": "其他条件相同情况下，有架空地线的架空线路零序阻抗比无架空地线的架空线路零序阻抗（ ）",
    "options": [
      {
        "label": "A",
        "text": "大"
      },
      {
        "label": "B",
        "text": "小"
      },
      {
        "label": "C",
        "text": "相等"
      },
      {
        "label": "D",
        "text": "无法确定"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "架空地线中感应的逆向零序电流对导线磁通起去磁作用，削弱了自感和互感磁链，使有架空地线的线路零序阻抗比无架空地线更小。选B。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 8
  },
  {
    "id": "2024-2025-期末A-单选-19",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "中性点接地阻抗对正序电流的影响",
    "stem": "中性点接地电抗对正序电流（ ）",
    "options": [
      {
        "label": "A",
        "text": "对所有短路类型都有影响"
      },
      {
        "label": "B",
        "text": "对所有短路类型都无影响"
      },
      {
        "label": "C",
        "text": "对三相短路和两相短路无影响"
      },
      {
        "label": "D",
        "text": "对单相接地短路和两相短路接地无影响"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "正序电流三相对称，流过中性点的正序电流相量和恒为零，因此正序电流不在中性点接地电抗上产生任何电压降，接地阻抗对任何短路类型的正序网络均无影响。选B。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 8
  },
  {
    "id": "2024-2025-期末A-单选-20",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "对称分量法理论基础与序分量性质",
    "stem": "关于对称分量法，以下说法错误的是（ ）。",
    "options": [
      {
        "label": "A",
        "text": "适用于线性电路"
      },
      {
        "label": "B",
        "text": "零序分量是直流分量"
      },
      {
        "label": "C",
        "text": "元件参数三相对称时各序分量具有独立性"
      },
      {
        "label": "D",
        "text": "线电压一定没有零序分量"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "零序分量是三相大小相等、相位完全相同的工频交流正弦分量，频率与基波相同，并非直流分量。选B。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 8
  },
  {
    "id": "2024-2025-期末A-判断-01",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电气设备额定电压匹配规律",
    "stem": "电力系统中各种电气设备的额定电压和额定频率必须与系统的额定电压和额定频率相同。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "用电设备额定电压等于电网额定电压，但发电机额定电压规定高于电网额定电压5%，变压器二次侧绕组额定电压高于电网额定电压5%或10%，并非所有设备额定电压都相同。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 1
  },
  {
    "id": "2024-2025-期末A-判断-02",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电网拓扑接线供电可靠性分类",
    "stem": "辐射网都是无备用接线方式，两端供电网和环式网都是有备用接线方式。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "辐射形网络无备用路径，属于无备用接线；两端供电网和闭式环网具备备用通道，属于有备用接线。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 1
  },
  {
    "id": "2024-2025-期末A-判断-03",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "年最大负荷利用小时数物理意义",
    "stem": "年最大负荷利用小时数 Tmax 反映了实际负荷在一年内的变化程度，Tmax 值越大，全年负荷变化越小；Tmax 值越小，全年负荷变化越大。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "$T_{\\max}$ 越大，说明负荷越平稳，全年负荷波动越小；$T_{\\max}$ 越小，负荷峰谷差越大，变化越剧烈。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 1
  },
  {
    "id": "2024-2025-期末A-判断-04",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "变压器等值模型中性点电位",
    "stem": "牛顿拉夫逊法收敛速度快，因此计算精度高。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "变压器 $\\Gamma$ 型或 $\\pi$ 型等值电路是基于单相集中参数推导的等效电路，其中性点接地符号代表数学归算参考地，并不直接等于三相真实变压器的物理中性点电位。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 2
  },
  {
    "id": "2024-2025-期末A-判断-05",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "长线路分布参数电容功率分布",
    "stem": "当发电机达到无功出力极限时应选为 PQ 节点，装设可调无功电源的负荷节点可选为 PV 节点。（）6.高压电网中，有功功率都是从电压高的节点流向电压低的节点。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "空载线路全线呈现容性，对地电容持续产生感性充电无功，因此沿线路首端至末端，感性无功潮流逐段向首端汇聚。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 3
  },
  {
    "id": "2024-2025-期末A-判断-07",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "逆调压中枢点电压调整范围",
    "stem": "只要保证电力系统在额定频率下有功功率平衡就可以保持电力系统频率为额定值，同理只要保证电力系统在额定电压水平下无功功率平衡就可以维持电力系统各点电压都为额定电压。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "逆调压是指在最大负荷时允许电压升高至线路额定电压的 $+2\\% \\sim +5\\%$，低谷负荷时降低至额定电压 $U_N$；题干若表述颠倒或范围错误则为错。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 6
  },
  {
    "id": "2024-2025-期末A-判断-08",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "发电机进相运行无功吸纳能力",
    "stem": "电力系统无功补偿一般按照分层分区和就地平衡原则考虑。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "发电机处于欠励磁状态时进相运行，从系统吸收感性无功功率，以降低局部母线过高电压。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 6
  },
  {
    "id": "2024-2025-期末A-判断-09",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "对称分量法在不对称参数元件中的适用性",
    "stem": "当电源内阻抗小于短路回路总阻抗 $20\\%$ 时，该电源可视为无限大功率电源。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "对称分量法解耦各序对称网的充要前提是系统三相元件参数完全对称；若元件参数三相不对称，三序方程将产生交叉耦合互感，无法独立求解。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 7
  },
  {
    "id": "2024-2025-期末A-判断-10",
    "paper": "华北电力大学 2024-2025 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "大容量同步电动机对短路冲击电流的影响",
    "stem": "发生不对称故障时，故障点的负序电压值比网络中其它点的负序电压值高。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "短路发生在靠近大型同步或异步电动机处时，故障瞬间电动机转子惯性电动势会向短路点倒送短路电流，增大起始次暂态短路电流和冲击电流峰值。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2024-2025",
    "chapter": 8
  },
  {
    "id": "2023-2024-期末A-判断-01",
    "paper": "华北电力大学 2023-2024 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "500kV长距离空载线路末端电压大于首端电压",
    "stem": "500kV 长距离输电线路空载充电时，末端电压可能大于首端电压。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "超高压长距离线路对地充电电容产生强容性功率，流过线路电抗引发皮尔逊容升效应（$\\Delta U = \\frac{PR+QX}{U} < 0$），使空载末端电压高于首端电压。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2023-2024",
    "chapter": 3
  },
  {
    "id": "2023-2024-期末A-判断-02",
    "paper": "华北电力大学 2023-2024 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统故障中发生概率最高的是两相短路",
    "stem": "电力系统故障中发生概率最高的是两相短路。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "电力系统故障中发生概率最高的是**单相接地短路**（约占全网故障总数的 65%~70%），两相短率远低于单相接地。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2023-2024",
    "chapter": 8
  },
  {
    "id": "2023-2024-期末A-判断-03",
    "paper": "华北电力大学 2023-2024 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "相较于配电线路，输电线路空间跨度大、电压高",
    "stem": "相较于配电线路，输电线路空间跨度大、电压等级高。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "输电网（110kV及以上）负责大容量跨区域电能输送，跨度大、电压高；配电网（35kV及以下）负责向终端用户配电。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2023-2024",
    "chapter": 1
  },
  {
    "id": "2023-2024-期末A-判断-04",
    "paper": "华北电力大学 2023-2024 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "变压器等值电路四项参数可通过模型计算得到",
    "stem": "变压器等值电路中四项参数可以通过模型计算得到。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "变压器四项等值参数（$R_T, X_T, G_T, B_T$）必须由出厂**短路试验（$P_k, U_k\\%$）和空载试验（$P_0, I_0\\%$）铭牌实测数据**归算导出，而非模型直接计算。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2023-2024",
    "chapter": 2
  },
  {
    "id": "2023-2024-期末A-判断-05",
    "paper": "华北电力大学 2023-2024 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "降压变压器变比向下调整低压侧电压降低",
    "stem": "降压变压器变比向下调整，低压侧电压将降低。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "变比 $k = U_{1N}/U_{2N}$，低压侧电压 $U_2 = U_1/k$。分接头向下调（抽头减小致变比 $k$ 减小），低压侧输出电压 $U_2$ 将**升高**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2023-2024",
    "chapter": 2
  },
  {
    "id": "2023-2024-期末A-判断-06",
    "paper": "华北电力大学 2023-2024 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "高压输电线路电晕现象主要用电抗表征",
    "stem": "高压输电线路的电晕现象主要用电抗参数表征。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "电晕放电产生高频寄生电流并引发空气电离有功损耗，在等值电路中主要用**电导 G** 参数表征（$\\Delta P = U^2 G$），而非电抗 X。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2023-2024",
    "chapter": 2
  },
  {
    "id": "2023-2024-期末A-判断-07",
    "paper": "华北电力大学 2023-2024 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "有功功率(MW)、无功功率(MVA)、阻抗(S)单位匹配",
    "stem": "以下电气量与单位均匹配：有功功率-MW、无功功率-MVA、阻抗-S。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "无功功率单位为 **Mvar**（MVA 为视在功率单位）；阻抗单位为 **$\\Omega$**（S 为电导/电纳单位西门子）。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2023-2024",
    "chapter": 5
  },
  {
    "id": "2023-2024-期末A-判断-08",
    "paper": "华北电力大学 2023-2024 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "有架空地线 X0=4.0X1 则无架空地线可能为 X0=2.0X1",
    "stem": "如果有钢质架空地线的线路每相等值零序电抗 $X_0 = 4.0X_1$ （ $X_1$ 为正序阻抗），则无架空地时每相等值零序电抗 $X_0$ 可能为 $2.0X_1$ 。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "架空地线感应逆向电流起去磁作用，**减小**线路零序电抗。若有地线时 $X_0 = 4.0X_1$，则无地线时零序电抗必**大于 4.0$X_1$**（绝不可能缩小为 $2.0X_1$）。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2023-2024",
    "chapter": 8
  },
  {
    "id": "2023-2024-期末A-判断-09",
    "paper": "华北电力大学 2023-2024 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "负荷突然增大计及一次调频系统频率降低",
    "stem": "某交流系统中负荷突然增大，若仅计及系统一次调频作用，系统的频率将降低。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "负荷增大致功率缺口，一次调频依靠发电机调速器有差静态特性（$\\Delta f = -\\Delta P_L / (K_G + K_L)$），仅能减小跌幅，**系统稳态频率依然降低**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2023-2024",
    "chapter": 5
  },
  {
    "id": "2023-2024-期末A-判断-10",
    "paper": "华北电力大学 2023-2024 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "无限大电源短路全电流包含强迫分量和周期分量",
    "stem": "无限大电源系统三相短路的全电流包括两部分，分别是强迫分量和周期分量。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "全电流由 **工频周期分量（即强迫分量）** 与 **按时间常数衰减的自由直流非周期分量** 组成，“强迫分量”与“周期分量”指同一种分量。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2023-2024",
    "chapter": 7
  },
  {
    "id": "2022-2023-期末A-判断-01",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "中性点接地阻抗对正负序电流无影响",
    "stem": "中性点接地阻抗只会影响零序电流，对正序电流和负序电流没有影响。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "复合序网中三序网相互串并联，零序阻抗（含 $3Z_g$）改变会改变复合序网总阻抗，从而**间接影响正序和负序电流**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 8
  },
  {
    "id": "2022-2023-期末A-判断-02",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "变压器二次绕组额定电压等于电网标称",
    "stem": "变压器二次绕组的额定电压通常等于接入点的电网标称电压。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "变压器二次绕组为电源供给端，其额定电压通常比电网标称电压高 5% 或 10%（用于补偿内部压降与线路压降）。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 1
  },
  {
    "id": "2022-2023-期末A-判断-03",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "无论铁芯结构零序激磁电抗均为无穷大",
    "stem": "无论变压器为何种铁芯结构, 当有零序电流流通时, 他的零序激磁电抗都可以看作无穷大。( )",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "三相三柱式变压器零序磁通只能经油箱壁闭合，磁阻极大，零序激磁电抗较小（约 $0.3\\sim 1.0\\,\\text{p.u.}$），**不能看作无穷大**。",
    "verified": true,
    "conflict": "【变压器结构辨析】三相五柱式或单相变压器组零序磁通可在铁芯闭合，零序激磁电抗很大；但三相三柱式变压器零序磁通无法在铁芯闭合，只能通过油介质与箱壁闭合，磁阻大，零序激磁电抗较小（约 0.3~1.0 p.u.），绝不能视为无穷大。",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 2
  },
  {
    "id": "2022-2023-期末A-判断-04",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "线路交流电阻略小于直流电阻",
    "stem": "同等截面积和同等长度的线路其交流电阻略小于直流电阻。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "受集肤效应和邻近效应影响，交流电流趋向于导线表面分布致有效截面减小，故**交流电阻略大于直流电阻**（$R_{AC} > R_{DC}$）。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 2
  },
  {
    "id": "2022-2023-期末A-判断-05",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "无功不足时优先改变变压器变比调压",
    "stem": "对于无功电源不足导致整体电压水平下降的电力系统应优先考虑改变变压器变比调压，因为它不需要增加任何投资费用。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "无功不足时改变变压器变比无法解决无功缺额，盲目调压会恶化无功分布甚至引发电压崩溃，**必须优先增设无功补偿设备**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 6
  },
  {
    "id": "2022-2023-期末A-判断-06",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "发电机与负荷的单位调节功率均可整定",
    "stem": "发电机的单位调节功率可以整定，负荷的单位调节功率也可以整定。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "发电机 $K_G$ 可通过调速器人为整定；但**负荷单位调节功率 $K_L$ 由用电设备固有静态频率特性决定，不可人为整定**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 5
  },
  {
    "id": "2022-2023-期末A-判断-07",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "次暂态电流 I'' 是求解直流分量的起始值",
    "stem": "求解三相短路电流的次暂态电流 I”是求解短路电流直流分量的起始值。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "发生短路时定子磁链不突变，交流周期分量初始有效值为 $I''$，其最大瞬时幅值 $\\sqrt{2}I''$ 即为直流非周期分量的最大初始值。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 7
  },
  {
    "id": "2022-2023-期末A-判断-08",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "无功不足时不能调整变压器分接头调压",
    "stem": "无功不足时，不能通过调整变压器分接头改善电压水平。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "全网无功电源严重不足时，改变变压器变比无法增加无功总量，盲目升压会加大无功损耗，无法根本改善电压水平。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 6
  },
  {
    "id": "2022-2023-期末A-判断-09",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "改变电压相位主要改变网络中有功分布",
    "stem": "改变电压相位，主要改变网络中有功功率的分布。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "高压网中 $X \\gg R$，有功功率主要由节点电压相角差决定（$\\Delta P \\approx \\frac{U_1 U_2}{X}\\sin\\delta$），改变电压相位主要改变有功分布。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 5
  },
  {
    "id": "2022-2023-期末A-判断-10",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "不对称短路时线电压中可能出现零序",
    "stem": "发生不对称短路时，不仅相电压中可能出现零序电压分量，线电压中也可能出现零序电压分量。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "线电压为两相相电压之差（$\\dot{U}_{ab} = \\dot{U}_a - \\dot{U}_b$），零序分量三相同相位（$\\dot{U}_{a0} = \\dot{U}_{b0}$）相减抵消，**线电压中绝无零序分量**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 1
  },
  {
    "id": "2022-2023-期末A-判断-11",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "单相接地中性点电压升至线电压故高压接地",
    "stem": "由于单相接地故障时中性点电压升高为线电压，故我国 $110 \\mathrm{kV}$ 以上电网采用中性点接地方式。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "单相接地时中性点电压升高为**相电压**（$U_N/\\sqrt{3}$），而非线电压。110kV以上采用中性点直接接地主要为降低绝缘成本。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 1
  },
  {
    "id": "2022-2023-期末A-判断-13",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "正常负荷越大三相短路冲击电流越大",
    "stem": "正常运行时负荷越大，电流越大，发生三相短路时短路电流的最大瞬时值也越大。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "短路电流主要由电源电动势和网络阻抗决定，正常负荷电流叠加影响极小，且冲击峰值主要由合闸初相角决定。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 7
  },
  {
    "id": "2022-2023-期末A-判断-14",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "架空导线存在电容可看作无功电源",
    "stem": "因为架空导线存在电容，所以架空导线可以看做是系统的无功电源。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "高压架空线路对地电纳 $B$ 产生容性充电功率 $Q_c = U^2 B$，在轻载/高电压运行时可向系统供给容性无功，充当无功电源。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 6
  },
  {
    "id": "2022-2023-期末A-判断-15",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "牛顿-拉夫逊法线性修正方程求解电压值",
    "stem": "用牛顿一拉夫逊法进行潮流计算时，线性修正方程求解的是节点的电压值。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "牛顿-拉夫逊法线性修正方程求解的是状态变量的**修正量**（$\\Delta \\delta$ 和 $\\Delta U$），并非电压值本身。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 4
  },
  {
    "id": "2022-2023-期末A-判断-16",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "高压网电压降落横分量数值可能大于纵分量",
    "stem": "高压电网中，电压降落中的横分量在数值上可能大于纵分量。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "高压网电抗远大于电阻，有功传输产生的横分量 $\\delta U$ 极小，无功传输产生的纵分量 $\\Delta U$ 较大，通常**纵分量远大于横分量**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 3
  },
  {
    "id": "2022-2023-期末A-判断-17",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "只要三相电流之和不为零就包含零序",
    "stem": "只要三相电流之和不为零，电流中就一定包含有零序分量。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "根据对称分量法变换原理 $\\dot{I}_{a0} = \\frac{1}{3}(\\dot{I}_a + \\dot{I}_b + \\dot{I}_c)$，只要三相相量和不为 0，零序分量即存在。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 8
  },
  {
    "id": "2022-2023-期末A-判断-18",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "不对称短路各序电流经变压器相位变与组别有关",
    "stem": "当电力系统发生不对称短路时，各序电流经变压器后的相位变化与变压器的连接组别有关。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "变压器接线组别（如 $Y/\\Delta-11$）会引起正序电流超前 30°、负序电流滞后 30°，旋转相位与变压器组别密切相关。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 2
  },
  {
    "id": "2022-2023-期末A-判断-19",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "在 50±0.5Hz 内频率越低有功负荷越小",
    "stem": "电力系统的综合有功负荷和频率相关，在 $50 \\pm 0.5 \\mathrm{~Hz}$ 范围内，频率越低，有功负荷越小。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "由负荷静态频率特性 $P_L(f)$，系统频率下降时，感应电动机等旋转负荷吸收的功率随之减小。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 5
  },
  {
    "id": "2022-2023-期末A-判断-20",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "架空线空载/轻载运行末端电压一定比首端高",
    "stem": "架空输电线路在空载或轻载运行时末端电压一定比首端电压高。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "陈述过于绝对。只有在高压/超高压长线路空载或轻载（容升效应显著）时末端电压才高于首端；若末端加装并联电抗器则不一定高。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 3
  },
  {
    "id": "2022-2023-期末A-单选-21",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "不属于无穷大电源特点的是",
    "stem": "不属于无穷大电源特点的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "频率恒定"
      },
      {
        "label": "B",
        "text": "电压恒定"
      },
      {
        "label": "C",
        "text": "功率无限大"
      },
      {
        "label": "D",
        "text": "电流恒定"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "无限大电源内阻为零、电压和频率恒定；发生短路时**短路电流由外部回路阻抗决定，并非恒定**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 7
  },
  {
    "id": "2022-2023-期末A-单选-22",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "无限大电源三相短路幅值不变的分量",
    "stem": "无限大容量电源供电的系统发生三相短路，短路电流中幅值大小不变的分量是（）。",
    "options": [
      {
        "label": "A",
        "text": "倍频分量"
      },
      {
        "label": "B",
        "text": "周期分量"
      },
      {
        "label": "C",
        "text": "自由分量"
      },
      {
        "label": "D",
        "text": "直流分量"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "无限大电源母线电压恒定，短路电流**强迫工频周期分量**幅值保持恒定不衰减。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 7
  },
  {
    "id": "2022-2023-期末A-单选-23",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "年最大负荷曲线是制定什么的依据",
    "stem": "年最大负荷曲线是制定（）的依据。",
    "options": [
      {
        "label": "A",
        "text": "发电计划"
      },
      {
        "label": "B",
        "text": "检修计划"
      },
      {
        "label": "C",
        "text": "用电计划"
      },
      {
        "label": "D",
        "text": "电源规划"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "年最大负荷曲线反映一年内各月/周最大负荷变化趋势，是安排**发电设备检修计划**的核心依据。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 1
  },
  {
    "id": "2022-2023-期末A-单选-24",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "同型号导线用在高电压等级线路电抗值",
    "stem": "同一种型号的导线，用在电压等级高的线路中要比用在电压等级低的线路中，其电抗值（ ）",
    "options": [
      {
        "label": "A",
        "text": "变小"
      },
      {
        "label": "B",
        "text": "不确定"
      },
      {
        "label": "C",
        "text": "变大"
      },
      {
        "label": "D",
        "text": "不变"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "高电压等级线路相间安全距离大，几何均距 $D_m$ 增大，由 $x_1 = 0.1445\\lg(D_m/r) + 0.0157$ 可知**电抗变大**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 1
  },
  {
    "id": "2022-2023-期末A-单选-25",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "可能有零序电流穿过变压器的接线形式",
    "stem": "可能有零序电流穿过变压器的接线形式是（ ）",
    "options": [
      {
        "label": "A",
        "text": "Y/△"
      },
      {
        "label": "B",
        "text": "Y0/△"
      },
      {
        "label": "C",
        "text": "Y0/Y0"
      },
      {
        "label": "D",
        "text": "Y0/Y"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "只有两侧中性点均接地的变压器绕组（如 **$Y_0/Y_0$**）才允许零序电流从一侧穿过流向另一侧外电路。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 8
  },
  {
    "id": "2022-2023-期末A-单选-26",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "负荷增加时增发功率相对较多的发电机",
    "stem": "当负荷增加某一固定数值时, 如果不考虑二次调频和满载, 以下哪一种发电机增发的功率相对较多 (   )。",
    "options": [
      {
        "label": "A",
        "text": "调差系数小的发电机"
      },
      {
        "label": "B",
        "text": "调差系数大的发电机"
      },
      {
        "label": "C",
        "text": "调整容量小的发电机"
      },
      {
        "label": "D",
        "text": "调整容量大的发电机"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "发电机单位调节功率 $K_G = 1/R$，**调差系数 $R$ 越小**的发电机 $K_G$ 越大，同等频率下降时承担/增发的功率越多。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 5
  },
  {
    "id": "2022-2023-期末A-单选-27",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统供电负荷与厂用电之和称为",
    "stem": "电力系统的供电负荷与厂用电之和，称为（）",
    "options": [
      {
        "label": "A",
        "text": "发电负荷"
      },
      {
        "label": "B",
        "text": "用电负荷"
      },
      {
        "label": "C",
        "text": "供电负荷"
      },
      {
        "label": "D",
        "text": "工业负荷"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "**发电负荷 = 供电负荷 + 厂用电负荷**；综合用电负荷 + 输配电线损 = 供电负荷。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 1
  },
  {
    "id": "2022-2023-期末A-单选-28",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "关于牛拉法潮流计算说法错误的是",
    "stem": "关于潮流计算的牛顿-拉夫逊法以下说法错误的是（）",
    "options": [
      {
        "label": "A",
        "text": "牛顿-拉夫逊法对初值要求比较严"
      },
      {
        "label": "B",
        "text": "分块的雅可比矩阵和节点导纳矩阵结构相同"
      },
      {
        "label": "C",
        "text": "牛顿-拉夫逊法雅可比矩阵中包含 PQ 节点、PV 节点和平衡节点"
      },
      {
        "label": "D",
        "text": "牛顿-拉夫逊法是将非线性的代数方程变换为代数方程求解"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "牛拉法是将非线性代数方程组在当前迭代点泰勒展开**线性化为线性代数方程组求解**，并非“变换为代数方程”。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 4
  },
  {
    "id": "2022-2023-期末A-单选-29",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "阻抗 Z 流过电流 I 消耗的功率公式",
    "stem": "如果线路阻抗为 Z，电流为 I，线路始端电压为 U，则该阻抗支路消耗的功率为（）。",
    "options": [
      {
        "label": "A",
        "text": "阻抗 $Z$ 乘以电流I共扼复数的平方"
      },
      {
        "label": "B",
        "text": "阻抗 $Z$ 乘以电流I模值的平方"
      },
      {
        "label": "C",
        "text": "始端电压U的向量乘以电流I向量的共轮复数"
      },
      {
        "label": "D",
        "text": "阻抗 $Z$ 乘以电压模值U的平方"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "阻抗支路电能损耗/功率消耗表达式为 $\\Delta \\tilde{S} = I^2 Z = \\mathbf{\\",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 1
  },
  {
    "id": "2022-2023-期末A-单选-30",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "高峰升高低谷降低的中枢点调压方式",
    "stem": "高峰负荷时将中枢点电压升高, 低谷负荷时将其降低的调压方式是 ( )。",
    "options": [
      {
        "label": "A",
        "text": "无法确定"
      },
      {
        "label": "B",
        "text": "顺调压"
      },
      {
        "label": "C",
        "text": "常调压"
      },
      {
        "label": "D",
        "text": "逆调压"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "高峰负荷升压（如 $+5\\%U_N$）、低谷负荷降压（如 $U_N$）属于标准的**逆调压**定义。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 6
  },
  {
    "id": "2022-2023-期末A-单选-31",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "不接地系统发生单相接地接地点相电压",
    "stem": "当中性点不接地系统中发生单相接地时，接地点的三相相电压（ ）",
    "options": [
      {
        "label": "A",
        "text": "仍然对称"
      },
      {
        "label": "B",
        "text": "增大√3倍"
      },
      {
        "label": "C",
        "text": "不再对称"
      },
      {
        "label": "D",
        "text": "保持不变"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "单相接地时，故障相对地电压降为0，非故障相对地电压升为线电压，**三相相电压破坏对称（不再对称）**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 1
  },
  {
    "id": "2022-2023-期末A-单选-32",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统最大负荷与各用户最大负荷之和",
    "stem": "电力系统的最大负荷，总是（）各用户最大负荷的总和。",
    "options": [
      {
        "label": "A",
        "text": "约等于"
      },
      {
        "label": "B",
        "text": "等于"
      },
      {
        "label": "C",
        "text": "大于"
      },
      {
        "label": "D",
        "text": "小于"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "由于各用户最大负荷出现的时间不一致（错峰效应），系统综合最大负荷**总是小于**各用户最大负荷之代数和。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 1
  },
  {
    "id": "2022-2023-期末A-单选-33",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "牛拉法线性修正方程求解的是",
    "stem": "用牛顿-拉夫逊法进行潮流计算时, 线性修正方程求解的是 ( )。",
    "options": [
      {
        "label": "A",
        "text": "节点的注入功率"
      },
      {
        "label": "B",
        "text": "节点的电压值"
      },
      {
        "label": "C",
        "text": "线路的功率"
      },
      {
        "label": "D",
        "text": "节点电压的修正量"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "修正方程求解的是节点电压相角与幅值的**修正量（$\\Delta \\delta$ 和 $\\Delta U$）**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 4
  },
  {
    "id": "2022-2023-期末A-单选-34",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "潮流计算中 PV 节点的待求量",
    "stem": "在电力系统潮流计算中，PV节点的待求量是（ ）",
    "options": [
      {
        "label": "A",
        "text": "V、δ"
      },
      {
        "label": "B",
        "text": "P、Q"
      },
      {
        "label": "C",
        "text": "Q、δ"
      },
      {
        "label": "D",
        "text": "P、V"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "PV 节点已知注入有功 $P$ 和电压幅值 $V$，待求状态变量为**无功功率 $Q$ 和电压相角 $\\delta$**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 4
  },
  {
    "id": "2022-2023-期末A-单选-35",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "110kV/6kV 直连电动机降压变压器变比",
    "stem": "某降压变压器由 $110 \\mathrm{kV}$ 降到 $6 \\mathrm{kV}$ , $6 \\mathrm{kV}$ 直接与电动机相连, 则变压器变比应该是",
    "options": [
      {
        "label": "A",
        "text": "$110 / 6$"
      },
      {
        "label": "B",
        "text": "$110 / 6.6$"
      },
      {
        "label": "C",
        "text": "$110 / 6.3$"
      },
      {
        "label": "D",
        "text": "$121 / 6.6$"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "一次侧接 110kV 电网额定 110kV；二次侧直连电动机额定高于标称 6kV 的 10%（$6\\times 1.1=6.6\\text{kV}$），变比为 **110/6.6kV**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 2
  },
  {
    "id": "2022-2023-期末A-单选-36",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "线路首末端电压的相量差称为",
    "stem": "线路首末端电压的相量差是（ ）",
    "options": [
      {
        "label": "A",
        "text": "电压降落"
      },
      {
        "label": "B",
        "text": "电压损耗"
      },
      {
        "label": "C",
        "text": "电压调整"
      },
      {
        "label": "D",
        "text": "电压偏移"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "首末端电压相量差 $\\Delta \\dot{U} = \\dot{U}_1 - \\dot{U}_2$ 定义为**电压降落**；代数数值差 $U_1 - U_2$ 为电压损耗。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 3
  },
  {
    "id": "2022-2023-期末A-单选-37",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "属于纵向故障的类型",
    "stem": "在下列各种故障类型中, 属于纵向故障的是 ( )。",
    "options": [
      {
        "label": "A",
        "text": "单相接地短路"
      },
      {
        "label": "B",
        "text": "三相短路"
      },
      {
        "label": "C",
        "text": "两相短路接地"
      },
      {
        "label": "D",
        "text": "两相断线"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "串联在输电线路上的开路故障（如**两相断线**）属于纵向故障；相间或相对地短路属横向故障。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 8
  },
  {
    "id": "2022-2023-期末A-单选-38",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "单位时间内输入能量与输出功率的比值",
    "stem": "单位时间内输入能量与输出功率的比值称为（ ）",
    "options": [
      {
        "label": "A",
        "text": "耗量特性"
      },
      {
        "label": "B",
        "text": "等耗量微增率"
      },
      {
        "label": "C",
        "text": "耗量微增率"
      },
      {
        "label": "D",
        "text": "比耗量"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "公式 $F/P$ 定义为发电设备的**比耗量**；微分 $dF/dP$ 为耗量微增率。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 1
  },
  {
    "id": "2022-2023-期末A-单选-39",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "正序增广网络中三相短路的附加阻抗",
    "stem": "在正序增广网络中, 三相短路的附加阻抗为 ( )。",
    "options": [
      {
        "label": "A",
        "text": "零"
      },
      {
        "label": "B",
        "text": "负序阻抗"
      },
      {
        "label": "C",
        "text": "零序阻抗和负序阻抗串联"
      },
      {
        "label": "D",
        "text": "零序阻抗和负序阻抗并联"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "三相短路为完全对称短路，故障点无负序和零序分量，正序增广网络**附加阻抗为 0**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 8
  },
  {
    "id": "2022-2023-期末A-单选-40",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统改变变压器变比实质上是",
    "stem": "电力系统改变变压器变比，实质上是（）。",
    "options": [
      {
        "label": "A",
        "text": "减少整个电力系统的无功功率容量"
      },
      {
        "label": "B",
        "text": "增加整个电力系统的无功功率容量"
      },
      {
        "label": "C",
        "text": "改变电网的有功功率分布"
      },
      {
        "label": "D",
        "text": "改变电网的无功功率分布"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "改变变压器变比改变了网络中的变比不匹配调压，实质上是**重新分配和改变电网的无功功率分布**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 2
  },
  {
    "id": "2022-2023-期末A-多选-41",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "可以吸收感性无功功率的设备",
    "stem": "以下哪些设备属于可以吸收感性无功功率的设备（）",
    "options": [
      {
        "label": "A",
        "text": "并联电抗器"
      },
      {
        "label": "B",
        "text": "静电电容器"
      },
      {
        "label": "C",
        "text": "同步调相机"
      },
      {
        "label": "D",
        "text": "静止补偿器"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "**并联电抗器**（A）、**同步调相机欠励运行**（C）、**静止无功补偿器（SVC/TCR）**（D）均可吸收感性无功。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 6
  },
  {
    "id": "2022-2023-期末A-多选-42",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "架空导线采用分裂导线的作用",
    "stem": "架空导线采用分裂导线的作用有（ ）。",
    "options": [
      {
        "label": "A",
        "text": "抑制电晕"
      },
      {
        "label": "B",
        "text": "增加导线强度"
      },
      {
        "label": "C",
        "text": "减小电压损耗"
      },
      {
        "label": "D",
        "text": "减小线路电抗"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "增大等效半径，作用为**抑制电晕（A）、减小线路电抗（D）、减小电抗降压降从而减小电压损耗（C）**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 2
  },
  {
    "id": "2022-2023-期末A-多选-43",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "会引起电网电压变化的因素",
    "stem": "下列哪些因素会引起电网电压的变化（ ）",
    "options": [
      {
        "label": "A",
        "text": "负荷波动"
      },
      {
        "label": "B",
        "text": "并网风电跳闸"
      },
      {
        "label": "C",
        "text": "运行方式改变"
      },
      {
        "label": "D",
        "text": "系统故障"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "**负荷波动（A）、风电跳闸（B）、运行方式改变（C）、系统故障（D）** 均会引起全网节点电压波动。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 1
  },
  {
    "id": "2022-2023-期末A-多选-44",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "输电线路等值电路中消耗有功功率的是",
    "stem": "输电线路等值电路中消耗有功功率的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "电阻"
      },
      {
        "label": "B",
        "text": "电导"
      },
      {
        "label": "C",
        "text": "电纳"
      },
      {
        "label": "D",
        "text": "电抗"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerPending": false,
    "explanation": "**线路电阻 $R$** 流过电流产生发热损耗（A）；**线路电导 $G$** 产生电晕和泄漏有功损耗（B）。电纳与电抗仅交换无功。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 2
  },
  {
    "id": "2022-2023-期末A-多选-45",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "短路点非故障相电压随零序阻抗增大而升高的故障",
    "stem": "当系统发生（）短路故障时，短路点处非故障相的电压随零序阻抗的增大而升高。",
    "options": [
      {
        "label": "A",
        "text": "两相接地"
      },
      {
        "label": "B",
        "text": "三相"
      },
      {
        "label": "C",
        "text": "单相接地"
      },
      {
        "label": "D",
        "text": "两相"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "answerPending": false,
    "explanation": "**两相接地短路（A）** 和 **单相接地短路（C）** 的复合序网均包含零序网，零序阻抗增大致故障点零序分压增大，非故障相电压升高。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 1
  },
  {
    "id": "2022-2023-期末A-多选-46",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "降低输电线路电压损耗的措施",
    "stem": "降低输电线路电压损耗的措施主要有（）",
    "options": [
      {
        "label": "A",
        "text": "并联无功补偿"
      },
      {
        "label": "B",
        "text": "提高电压等级"
      },
      {
        "label": "C",
        "text": "串联电容器补偿"
      },
      {
        "label": "D",
        "text": "增大输电线路参数"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "公式 $\\Delta U \\approx \\frac{PR+QX}{U}$：**并联无功补偿减小 Q（A）、提高电压等级 U（B）、串联电容补偿减小 X（C）**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 3
  },
  {
    "id": "2022-2023-期末A-多选-47",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "考核电力系统运行经济性的重要指标",
    "stem": "考核电力系统运行经济性的重要指标为（ ）",
    "options": [
      {
        "label": "A",
        "text": "等耗量微增率"
      },
      {
        "label": "B",
        "text": "煤耗率"
      },
      {
        "label": "C",
        "text": "线损率"
      },
      {
        "label": "D",
        "text": "年负荷率"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "**煤耗率**（发电侧能耗，B）与 **线损率**（网侧输配电损耗，C）是衡量电力系统运行经济性的核心指标。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 1
  },
  {
    "id": "2022-2023-期末A-多选-48",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "对架空线路导线材料的要求",
    "stem": "对架空线路的导线材料要求（ ）",
    "options": [
      {
        "label": "A",
        "text": "抗化学腐蚀能力高"
      },
      {
        "label": "B",
        "text": "导磁性能好"
      },
      {
        "label": "C",
        "text": "导电性能好"
      },
      {
        "label": "D",
        "text": "机械强度高"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "导线材料要求**抗化学腐蚀（A）、导电性能好（低电阻率，C）、机械强度高（抗拉，D）**。不需要导磁性能。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 2
  },
  {
    "id": "2022-2023-期末A-多选-49",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "导线交流电阻与直流电阻不同的影响因素",
    "stem": "导线的交流电阻和直流电阻不同，其主要影响因素为（ ）",
    "options": [
      {
        "label": "A",
        "text": "临近效应"
      },
      {
        "label": "B",
        "text": "磁场效应"
      },
      {
        "label": "C",
        "text": "电场效应"
      },
      {
        "label": "D",
        "text": "集肤效应"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "answerPending": false,
    "explanation": "交流交变磁场引起**集肤效应（D）** 与 **邻近效应（A）**，使交流有效截面积减小，交流电阻大于直流电阻。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 2
  },
  {
    "id": "2022-2023-期末A-多选-50",
    "paper": "华北电力大学 2022-2023 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "同步调相机作为无功补偿装置的特点",
    "stem": "调相机作为无功补偿装置具有以下特点（ ）。",
    "options": [
      {
        "label": "A",
        "text": "有功损耗小"
      },
      {
        "label": "B",
        "text": "既可以发出感性无功又可以吸收感性无功"
      },
      {
        "label": "C",
        "text": "可以平滑地调节无功"
      },
      {
        "label": "D",
        "text": "维护方便"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "优点是**既可发出也可吸收感性无功（B）、可平滑无级调节无功（C）**；缺点是旋转机械有功损耗大、维护复杂。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2022-2023",
    "chapter": 6
  },
  {
    "id": "2021-2022-期末A-单选-01",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "某 $10 \\, kV$ 中性点不接地系统发生单相金属性接地故障时，中性点对地电压为（）kV。",
    "options": [
      {
        "label": "A",
        "text": "10"
      },
      {
        "label": "B",
        "text": "$\\sqrt{3} \\times 10^{2}$"
      },
      {
        "label": "C",
        "text": "$10 / \\sqrt{3}$"
      },
      {
        "label": "D",
        "text": "0"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 1
  },
  {
    "id": "2021-2022-期末A-单选-02",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "输电线路上消耗的无功功率为（）",
    "options": [
      {
        "label": "A",
        "text": "等于0"
      },
      {
        "label": "B",
        "text": "容性"
      },
      {
        "label": "C",
        "text": "感性"
      },
      {
        "label": "D",
        "text": "以上都有可能"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 6
  },
  {
    "id": "2021-2022-期末A-单选-03",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "不计输电线路电阻和电导的情况下，线路空载时首末端电压相位的关系（）。",
    "options": [
      {
        "label": "A",
        "text": "首端超前末端"
      },
      {
        "label": "B",
        "text": "首端滞后末端"
      },
      {
        "label": "C",
        "text": "首端相同"
      },
      {
        "label": "D",
        "text": "无法判断"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 2
  },
  {
    "id": "2021-2022-期末A-单选-04",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "对于放射性网络, 下述说法中正确的是 ( )。",
    "options": [
      {
        "label": "A",
        "text": "网络的潮流分布可以调控"
      },
      {
        "label": "B",
        "text": "网络的潮流分布不可以调控"
      },
      {
        "label": "C",
        "text": "网络的潮流分布由线路长度决定"
      },
      {
        "label": "D",
        "text": "网络的潮流分布由线路阻抗确定"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 1
  },
  {
    "id": "2021-2022-期末A-单选-05",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "牛顿-拉夫逊法和 P-Q 分解法进行潮流计算时, 其最后计算精度是 ( )。",
    "options": [
      {
        "label": "A",
        "text": "两种方法一样"
      },
      {
        "label": "B",
        "text": "牛顿-拉夫逊法高"
      },
      {
        "label": "C",
        "text": "分解法高"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 4
  },
  {
    "id": "2021-2022-期末A-单选-06",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "并网运行的机组耗量微增率不相等时，若负荷增大，应由（）的机组先增加出力。",
    "options": [
      {
        "label": "A",
        "text": "耗量微增率大的机组"
      },
      {
        "label": "B",
        "text": "耗量微增率小的机组"
      },
      {
        "label": "C",
        "text": "比耗量小的机组"
      },
      {
        "label": "D",
        "text": "比耗量大的机组"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 5
  },
  {
    "id": "2021-2022-期末A-单选-07",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "- **A.**",
    "options": [
      {
        "label": "A",
        "text": "- **B.** 两系统，若A. 系统增加负荷，A、B. 两系统都参与一次调频，且B. 系统参加二次调频（增发的功率小于A. 系统增加的负荷功率）。则A、B. 两系统联络线的功率方向频率变化说法正确的是（ ）。 A、联络线的功率由流向B. ，频率下降  B、联络线的功率由B. 流向A. ，频率下降"
      },
      {
        "label": "C",
        "text": "联络线的功率由流向B. ，频率上升"
      },
      {
        "label": "D",
        "text": "联络线的功率由B. 流向A. ，频率上开"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 1
  },
  {
    "id": "2021-2022-期末A-单选-08",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "优化无功功率电源分布的目的是降低网络中的（）",
    "options": [
      {
        "label": "A",
        "text": "有功功率损耗"
      },
      {
        "label": "B",
        "text": "无功功率损耗"
      },
      {
        "label": "C",
        "text": "视在功率损耗"
      },
      {
        "label": "D",
        "text": "开停的机组数"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 6
  },
  {
    "id": "2021-2022-期末A-单选-09",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "短路冲击电流主要用于校验电气设备的（）",
    "options": [
      {
        "label": "A",
        "text": "热稳定"
      },
      {
        "label": "B",
        "text": "动稳定"
      },
      {
        "label": "C",
        "text": "开斯能力"
      },
      {
        "label": "D",
        "text": "耐压等级"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 7
  },
  {
    "id": "2021-2022-期末A-单选-10",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "实际计算中有钢质架空地线的双回线路的一相等值零序电抗 $X_0 = 4.7X_1(X_1$ 为正序阻抗), 则无架空地线的双回线路的一相等值零序电抗 $X_0$ 可能为 ( )。",
    "options": [
      {
        "label": "A",
        "text": "$3.5X_1$"
      },
      {
        "label": "B",
        "text": "$2X_1$"
      },
      {
        "label": "C",
        "text": "$5.5X_1$"
      },
      {
        "label": "D",
        "text": "$3X_1$"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 8
  },
  {
    "id": "2021-2022-期末A-判断-01",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统分析基础核心考点",
    "stem": "同一电压等级下，不同电气设备额定电压是相同的。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 1
  },
  {
    "id": "2021-2022-期末A-判断-02",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统分析基础核心考点",
    "stem": "保持良好的电能质量就是保持系统电压偏移在±5%的范围内。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 1
  },
  {
    "id": "2021-2022-期末A-判断-03",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统分析基础核心考点",
    "stem": "电晕现象的产生主要取决于导线表面的磁场强度。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 2
  },
  {
    "id": "2021-2022-期末A-判断-04",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统分析基础核心考点",
    "stem": "电压降落中的横分量在数值上可能大于纵分量。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 3
  },
  {
    "id": "2021-2022-期末A-判断-05",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统分析基础核心考点",
    "stem": "环网计算中，均一网功率的经济分布与其功率的自然分布相同。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 3
  },
  {
    "id": "2021-2022-期末A-判断-06",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统分析基础核心考点",
    "stem": "复杂电力系统潮流计算中雅可比矩阵是不对称复数矩阵。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 4
  },
  {
    "id": "2021-2022-期末A-判断-07",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统分析基础核心考点",
    "stem": "电力系统中可能不需要专门设置检修备用。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 1
  },
  {
    "id": "2021-2022-期末A-判断-08",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统分析基础核心考点",
    "stem": "电容器作为无功补偿装置，电压升高时输出的无功功率增加，所以有正的调节效应。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 6
  },
  {
    "id": "2021-2022-期末A-判断-09",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统分析基础核心考点",
    "stem": "短路电流直流分量属于强制分量，其值取决于电源电压和回路阻抗。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 7
  },
  {
    "id": "2021-2022-期末A-判断-10",
    "paper": "华北电力大学 2021-2022 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统分析基础核心考点",
    "stem": "在Y/△接线的变压器Y发生两相接地短路时，△侧内部不会有零序电流流通。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2021-2022",
    "chapter": 8
  },
  {
    "id": "2020-2021-期末A-单选-01",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "参数归算基本级选择的一般规则",
    "stem": "无限大容量电源供电的简单系统三相短路暂态过程中（ ）",
    "options": [
      {
        "label": "A",
        "text": "短路电流无限大"
      },
      {
        "label": "B",
        "text": "短路功率无限大"
      },
      {
        "label": "C",
        "text": "短路电流有周期和非周期分量"
      },
      {
        "label": "D",
        "text": "短路电流有2倍频分量"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "在多电压等级网络参数归算中，基本级的选择是任意的；但在没有明确要求的情况下，习惯**选择最高电压等级作为基本级**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 7
  },
  {
    "id": "2020-2021-期末A-单选-02",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "变压器分接头调整对无功总量的影响",
    "stem": "变压器分接头的调整（）改变系统中无功功率的大小。",
    "options": [
      {
        "label": "A",
        "text": "不能"
      },
      {
        "label": "B",
        "text": "能"
      },
      {
        "label": "C",
        "text": "不确定"
      },
      {
        "label": "D",
        "text": "其它三个选项都不是"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "变压器分接头调整**不能改变系统中无功功率的总量**，其实质是重新分配和改变电网内部无功功率的分布。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 6
  },
  {
    "id": "2020-2021-期末A-单选-03",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "发电机单位时间消耗能源与有功功率关系",
    "stem": "发电机单位时间内消耗的能源与发出的有功功率的关系称为（）",
    "options": [
      {
        "label": "A",
        "text": "比耗量"
      },
      {
        "label": "B",
        "text": "耗量微增率"
      },
      {
        "label": "C",
        "text": "耗量特性"
      },
      {
        "label": "D",
        "text": "单位调节功率"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "单位时间内消耗的能源 $F$ 与发出的有功功率 $P$ 的函数关系 $F=f(P)$ 称为**耗量特性**；输入能量与输出功率之比 $F/P$ 为比耗量，微分 $dF/dP$ 为耗量微增率。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 5
  },
  {
    "id": "2020-2021-期末A-单选-04",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "极坐标形式牛顿-拉夫逊法雅可比矩阵阶数",
    "stem": "电力网有 n 个节点，其中 m 个节点为 PQ 节点，极坐标形式的雅可比矩阵的阶数为（）。",
    "options": [
      {
        "label": "A",
        "text": "$n - m - 1$"
      },
      {
        "label": "B",
        "text": "$n + m - 2$"
      },
      {
        "label": "C",
        "text": "$n + m - 1$"
      },
      {
        "label": "D",
        "text": "$n + m$"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "系统有 $n$ 个节点（含 1 个平衡节点），$m$ 个 PQ 节点，待求状态变量为 $n-1$ 个相角与 $m$ 个电压幅值，雅可比矩阵阶数为 **$n + m - 1$**。",
    "verified": true,
    "conflict": "【疑义与口径标注】极坐标牛拉法：待求相角为 n-1 个，待求幅值为 m 个（PQ节点），标准总阶数为 n+m-1（选项C）。",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 4
  },
  {
    "id": "2020-2021-期末A-单选-05",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "紧凑型输电线路降低电抗的结构手段",
    "stem": "紧凑型输电线路就是改变输电线路本身的结构，主要是（）以降低线路电抗。",
    "options": [
      {
        "label": "A",
        "text": "使用超导材料"
      },
      {
        "label": "B",
        "text": "缩小导线截面积"
      },
      {
        "label": "C",
        "text": "缩小导线相间距离"
      },
      {
        "label": "D",
        "text": "降低导线对地距离"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "紧凑型线路通过**缩小导线相间距离 $D_m$**，使几何均距减小，从而降低线路单位电抗 $x_1 = 0.1445\\lg(D_m/r) + 0.0157$。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 2
  },
  {
    "id": "2020-2021-期末A-单选-06",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "中性点非直接接地系统设备绝缘水平",
    "stem": "中性点非直接接地系统中用电设备的绝缘水平应该按照（）考虑。",
    "options": [
      {
        "label": "A",
        "text": "相电压"
      },
      {
        "label": "B",
        "text": "线电压"
      },
      {
        "label": "C",
        "text": "3 倍相电压"
      },
      {
        "label": "D",
        "text": "$\\sqrt{3}$ 线电压"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "中性点不接地系统发生单相接地时，故障相对地电压降为0，非故障相对地电压升高为线电压，因此电气设备绝缘水平必须**按线电压考虑**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 1
  },
  {
    "id": "2020-2021-期末A-单选-07",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电网标称电压 220kV 的物理含义",
    "stem": "电网的标称电压为 $220 k V$ ，是指（ ）",
    "options": [
      {
        "label": "A",
        "text": "相电压峰值"
      },
      {
        "label": "B",
        "text": "相电压有效值"
      },
      {
        "label": "C",
        "text": "线电压峰值"
      },
      {
        "label": "D",
        "text": "线电压有效值"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "我国及国际电网标称电压（额定电压）均统一指三相交流电路的**线电压有效值**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 1
  },
  {
    "id": "2020-2021-期末A-单选-08",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "直角坐标牛拉法 PV 节点雅可比矩阵子块形式",
    "stem": "节点导纳矩阵中 $Y_{ij}$ 不等于 0, j 节点为 PV 节点，则直角坐标下的雅可比矩阵中对应分块阵的形式是（X 表示非零元素）（ ）。",
    "options": [
      {
        "label": "A",
        "text": "$\\begin{bmatrix} \\times & \\times \\\\ \\times & \\times \\end{bmatrix}$"
      },
      {
        "label": "B",
        "text": "$\\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$"
      },
      {
        "label": "C",
        "text": "$\\begin{bmatrix} \\times & \\times \\\\ 0 & 0 \\end{bmatrix}$"
      },
      {
        "label": "D",
        "text": "$\\begin{bmatrix} 0 & 0 \\\\ \\times & \\times \\end{bmatrix}$"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "直角坐标下节点为 PV 节点时，电压实部与虚部均参与迭代计算，其对应的雅可比子阵分块形式为 **$\\begin{bmatrix} \\times & \\times \\\\ \\times & \\times \\end{bmatrix}$**（全部为非零元素）。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 4
  },
  {
    "id": "2020-2021-期末A-单选-09",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "无功补偿设备在电网中的配置原则",
    "stem": "无功补偿设备（）集中装设在电网的电源侧。",
    "options": [
      {
        "label": "A",
        "text": "应该"
      },
      {
        "label": "B",
        "text": "不应该"
      },
      {
        "label": "C",
        "text": "不确定"
      },
      {
        "label": "D",
        "text": "以上都有可能"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "无功补偿应遵循“分层分区、就地平衡”原则，**不应该**集中装设在电网电源侧，以避免无功长距离传输带来网损与压降。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 6
  },
  {
    "id": "2020-2021-期末A-单选-10",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "两相短路故障相电流与正序分量的关系",
    "stem": "两相短路的故障相电流的大小为正序分量的（）倍。",
    "options": [
      {
        "label": "A",
        "text": "2"
      },
      {
        "label": "B",
        "text": "1"
      },
      {
        "label": "C",
        "text": "$\\sqrt{3}$"
      },
      {
        "label": "D",
        "text": "$\\sqrt{3}/2$"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "两相短路边界条件下，故障相电流 $I_k = \\sqrt{3} I_{(1)}$，即故障相电流大小为正序电流分量的 **$\\sqrt{3}$ 倍**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 8
  },
  {
    "id": "2020-2021-期末A-单选-11",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "各种工程系统中包含设备种类最多的系统",
    "stem": "下列系统中，包括的设备种类最多的是（）。",
    "options": [
      {
        "label": "A",
        "text": "电力系统"
      },
      {
        "label": "B",
        "text": "动力系统"
      },
      {
        "label": "C",
        "text": "电力网"
      },
      {
        "label": "D",
        "text": "配电网"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "包含范围层次为：**动力系统 > 电力系统 > 电力网 > 配电网**，动力系统还包含热力、水力等热工与动力设备，种类最多。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 1
  },
  {
    "id": "2020-2021-期末A-单选-12",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "220/121/11kV 降压变压器接线组别形式",
    "stem": "一台 220/121/11 的降压变压器的接线形式是（）",
    "options": [
      {
        "label": "A",
        "text": "$Y_{0}/Y_{0}/\\Delta$"
      },
      {
        "label": "B",
        "text": "$Y_{0}/Y/\\Delta$"
      },
      {
        "label": "C",
        "text": "$Y/Y_{0}/\\Delta$"
      },
      {
        "label": "D",
        "text": "$Y_{0}/Y_{0}/Y$"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "110kV 及以上高压与中压侧均需接地，接成中性点直接接地的星形 $Y_0$；低压侧为消除三次谐波接成三角形 $\\Delta$，接线形式为 **$Y_0/Y_0/\\Delta$**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 2
  },
  {
    "id": "2020-2021-期末A-单选-13",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "潮流计算中 PV 节点的待求状态变量",
    "stem": "在电力系统潮流计算中，PV 节点的待求量是（ ）",
    "options": [
      {
        "label": "A",
        "text": "Q、δ"
      },
      {
        "label": "B",
        "text": "P、Q"
      },
      {
        "label": "C",
        "text": "V、δ"
      },
      {
        "label": "D",
        "text": "P、V"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "PV 节点已知注入有功功率 $P$ 和电压幅值 $V$，待求未知量为**无功功率 $Q$ 与电压相角 $\\delta$**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 4
  },
  {
    "id": "2020-2021-期末A-单选-14",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "有功负荷变动分类中可预测的负荷",
    "stem": "有功功率负荷的变动一般分为三种，可预测的是（ ）。",
    "options": [
      {
        "label": "A",
        "text": "第一种"
      },
      {
        "label": "B",
        "text": "第二种"
      },
      {
        "label": "C",
        "text": "第三种"
      },
      {
        "label": "D",
        "text": "都不能"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "**第三种负荷**（变动幅度大、周期较长的高峰/低谷负荷）变化规律明显，属于**可预测负荷**；第一种为随机微小波动，第二种为冲击负荷。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 5
  },
  {
    "id": "2020-2021-期末A-单选-15",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "同步调相机欠励（进相）运行无功特性",
    "stem": "调相机欠激运行（进相运行）时向系统（ ）。",
    "options": [
      {
        "label": "A",
        "text": "吸收感性无功"
      },
      {
        "label": "B",
        "text": "吸收容性无功"
      },
      {
        "label": "C",
        "text": "提供感性无功"
      },
      {
        "label": "D",
        "text": "都不能"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "调相机欠励磁（进相）运行时相当于感性负荷，向电网**吸收感性无功功率**；过励运行发出感性无功。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 6
  },
  {
    "id": "2020-2021-期末A-判断-01",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "不接地系统与直接接地系统供电可靠性比较",
    "stem": "不接地系统的供电可靠性比直接接地系统的供电可靠性差。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "中性点不接地系统发生单相接地故障时无金属性短路回路，允许带故障运行 1~2 小时，**供电可靠性高于直接接地系统**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 1
  },
  {
    "id": "2020-2021-期末A-判断-02",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电气设备额定电压与接入点电网额定电压",
    "stem": "电力设备的额定电压与接入点的电网额定电压相等。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "用电设备额定电压等于电网额定电压；但发电机额定电压高于电网 5%，变压器二次侧高于电网 5% 或 10%，**并非完全相等**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 1
  },
  {
    "id": "2020-2021-期末A-判断-03",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "分裂导线增大等效半径及减小电抗与防电晕",
    "stem": "分裂导线的优点是能够有效增大导线的等效半径，从而减小了导线的电抗值，并提高了电晕临界电压。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "分裂导线相当于增大了导线等效自几何均距 $r_{eq}$，能够**有效减小线路电抗**，并降低表面电场强度以**提高电晕临界电压**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 2
  },
  {
    "id": "2020-2021-期末A-判断-05",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "相同收敛判据下 PQ 分解法与牛拉法精度",
    "stem": "改变电压相位，主要改变网络中有功功率的分布。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "PQ 分解法虽然对雅可比矩阵进行了简化解耦，但只要**收敛判据相同，最终迭代收敛结果与牛顿-拉夫逊法精度完全相同**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 5
  },
  {
    "id": "2020-2021-期末A-判断-06",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "有功冷备用概念及检修设备归属",
    "stem": "在收敛判据相同时，PQ分解法虽然忽略了很多因素，但和牛拉法的计算结果精度是一样的。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "冷备用是指完好无故障、随时可启动投入运行的备用机组；**检修中的设备处于不可用状态，不属于冷备用**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 4
  },
  {
    "id": "2020-2021-期末A-判断-07",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "有功功率最优分配的按比耗量分配陈述",
    "stem": "所谓有功功率的冷备用是指未运转的发电设备可能发出的最大功率，所以检修中的发电设备属于备用容量。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "有功功率最优分配遵循的是**等耗量微增率准则**（输入能量微分 $dF/dP$ 相等），而非比耗量 $F/P$ 相等。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 1
  },
  {
    "id": "2020-2021-期末A-判断-08",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "大容量电动机对短路点稳态短路电流的影响",
    "stem": "有功功率最优分配实质上是按照机组的单位时间内输入的能量和输出功率之比相等来分配负荷的。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "电动机反电动势供给的短路电流随旋转磁场衰减，仅影响次暂态短路电流与冲击电流；**计算稳态短路电流时不计电动机影响**。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 5
  },
  {
    "id": "2020-2021-期末A-判断-09",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "避雷线对架空输电线路零序阻抗的影响",
    "stem": "若短路点附近有大容量电动机，则计算短路点的稳态短路电流时必须计及其影响。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "避雷线（架空地线）中感应的逆向零序电流起去磁屏蔽作用，使得**线路零序阻抗变小**，而不是增大。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 7
  },
  {
    "id": "2020-2021-期末A-判断-10",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "避雷线对架空输电线路零序阻抗的影响",
    "stem": "架空输电线的避雷线对线路的零序阻抗有重要影响，一般使线路的零序阻抗增大。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "避雷线（架空地线）中感应的逆向零序电流起去磁屏蔽作用，使得线路零序阻抗变小，而不是增大。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 8
  },
  {
    "id": "2020-2021-期末英-单选-01",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "$500 \\mathrm{kV}$ 电力系统中性点运行方式采用（）",
    "options": [
      {
        "label": "A",
        "text": "不接地"
      },
      {
        "label": "B",
        "text": "直接接地"
      },
      {
        "label": "C",
        "text": "经消弧线圈接地"
      },
      {
        "label": "D",
        "text": "经电阻接地"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 1
  },
  {
    "id": "2020-2021-期末英-单选-02",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "线路等值参数中消耗有功功率的是（）",
    "options": [
      {
        "label": "A",
        "text": "电抗、电阻"
      },
      {
        "label": "B",
        "text": "电导、电纳"
      },
      {
        "label": "C",
        "text": "电抗、电纳"
      },
      {
        "label": "D",
        "text": "电导、电阻"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 5
  },
  {
    "id": "2020-2021-期末英-单选-03",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "环网潮流的自然分布是按照线路的（）进行分配。",
    "options": [
      {
        "label": "A",
        "text": "电阻"
      },
      {
        "label": "B",
        "text": "电抗"
      },
      {
        "label": "C",
        "text": "电纳"
      },
      {
        "label": "D",
        "text": "阻抗"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 3
  },
  {
    "id": "2020-2021-期末英-单选-04",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "电力系统潮流的计算机算法中，PQ节点的特点是（）",
    "options": [
      {
        "label": "A",
        "text": "V 和 $\\theta$ 已知"
      },
      {
        "label": "B",
        "text": "P 和 V 已知"
      },
      {
        "label": "C",
        "text": "V 和 Q 已知"
      },
      {
        "label": "D",
        "text": "P 和 Q 已知"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 4
  },
  {
    "id": "2020-2021-期末英-单选-05",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "若短路故障时变压器中有零序电流流过，则变压器的短路侧绕组接线方式是（）",
    "options": [
      {
        "label": "A",
        "text": "$\\Delta$"
      },
      {
        "label": "B",
        "text": "$Y_{0}$"
      },
      {
        "label": "C",
        "text": "Y"
      },
      {
        "label": "D",
        "text": "Y 或 $\\Delta$"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 8
  },
  {
    "id": "2020-2021-期末英-单选-06",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "两相断线时, 复合序网的连接方式为 ( )。",
    "options": [
      {
        "label": "A",
        "text": "正序、负序、零序并联"
      },
      {
        "label": "B",
        "text": "正序、负序并联, 零序网开路"
      },
      {
        "label": "C",
        "text": "正序、零序并联, 负序开路"
      },
      {
        "label": "D",
        "text": "正序、负序、零序串联"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 8
  },
  {
    "id": "2020-2021-期末英-单选-07",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "当电力系统发生不对称短路时, 变压器中性线上通过的电流为 ( )。",
    "options": [
      {
        "label": "A",
        "text": "正序电流"
      },
      {
        "label": "B",
        "text": "负序电流"
      },
      {
        "label": "C",
        "text": "三倍零序电流"
      },
      {
        "label": "D",
        "text": "三倍正序电流"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 2
  },
  {
    "id": "2020-2021-期末英-单选-08",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "高峰负荷时允许中枢点电压偏低，低谷负荷时允许其升高的调压方式是（）",
    "options": [
      {
        "label": "A",
        "text": "顺调压"
      },
      {
        "label": "B",
        "text": "逆调压"
      },
      {
        "label": "C",
        "text": "常调压"
      },
      {
        "label": "D",
        "text": "无法确定"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 6
  },
  {
    "id": "2020-2021-期末英-单选-09",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "电力系统频率主要取决于( )。",
    "options": [
      {
        "label": "A",
        "text": "有功平衡"
      },
      {
        "label": "B",
        "text": "无功平衡"
      },
      {
        "label": "C",
        "text": "各节点注入电流的大小"
      },
      {
        "label": "D",
        "text": "各节点电压的高低"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 1
  },
  {
    "id": "2020-2021-期末英-单选-10",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统分析基础核心考点",
    "stem": "计算 a 点的输入功率（）",
    "options": [
      {
        "label": "A",
        "text": "$-30 + j20MVA$"
      },
      {
        "label": "B",
        "text": "$10 + j10MVA$"
      },
      {
        "label": "C",
        "text": "$-10 - j10MVA$"
      },
      {
        "label": "D",
        "text": "没有给出各段线路电抗，因此条件不全无法计算。"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 1
  },
  {
    "id": "2020-2021-期末英-多选-01",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "电力系统分析基础核心考点",
    "stem": "n节点电力系统中，PQ节点的数目为 $m_{1}$ ，PV节点的数目为 $m_{2}$ ，若用极坐标牛拉法进行潮流计算，则雅可比矩阵的阶数与下列哪些选项相等（）。",
    "options": [
      {
        "label": "A",
        "text": "$2m_{1} + m_{2}$"
      },
      {
        "label": "B",
        "text": "$n + m_{1} - 1$"
      },
      {
        "label": "C",
        "text": "$2n - m_{2} - 2$"
      },
      {
        "label": "D",
        "text": "$2(n - 1)$"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 4
  },
  {
    "id": "2020-2021-期末英-多选-02",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "电力系统分析基础核心考点",
    "stem": "下列关于输电线路模型说法正确的是（）。",
    "options": [
      {
        "label": "A",
        "text": "短线路是指长度不超过 $100 \\mathrm{~km}$ 的输电线路, 中等长度线路是指长度在 $100 \\mathrm{~km} - 300 \\mathrm{~km}$ 之间的输电线路, 长线路是指长度超过 $300 \\mathrm{~km}$ 的输电线路。"
      },
      {
        "label": "B",
        "text": "短线路和中等长度线路可以不考虑分布参数特性, 可以用集总参数表示, 而长线路必须考虑分布参数特性。"
      },
      {
        "label": "C",
        "text": "短线路等值电路可以不考虑对地导纳支路, 仅考虑阻抗支路。"
      },
      {
        "label": "D",
        "text": "中零长度线路等值电路需要考虑对地导纳支路, 有 $\\Pi$ 形和 $\\Pi$ 形两种等值电路, 由于 $\\Pi$ 形等值电路节点少, 一般采用 $\\Pi$ 形等值电路。"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 1
  },
  {
    "id": "2020-2021-期末英-多选-03",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "电力系统分析基础核心考点",
    "stem": "下列关于等值变压器模型的说法正确的有( )",
    "options": [
      {
        "label": "A",
        "text": "等值变压器模型只是一种数学上的等值, 其各支路参数无明确的物理意义。"
      },
      {
        "label": "B",
        "text": "等值变压器模型只是一种数学上的等值, 因此其无法体现变压器的变压功能。"
      },
      {
        "label": "C",
        "text": "制定多电压等级电网的有名值等值电路时, 如果采用等值变压器模型, 则不需要进行参数归算。"
      },
      {
        "label": "D",
        "text": "对有多个变压器、且变压器变比不匹配的环网进行潮流上计算时, 当采用变压器模型时, 可以得到准确的计算结果。"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 2
  },
  {
    "id": "2020-2021-期末英-多选-04",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "电力系统分析基础核心考点",
    "stem": "下列无功功率电源中，具有正的电压调节效应的是（）",
    "options": [
      {
        "label": "A",
        "text": "并联电容器"
      },
      {
        "label": "B",
        "text": "同步调相机"
      },
      {
        "label": "C",
        "text": "TSC 型静止无功补偿装置"
      },
      {
        "label": "D",
        "text": "TCR 型静止无功补偿装置"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 6
  },
  {
    "id": "2020-2021-期末英-多选-05",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "电力系统分析基础核心考点",
    "stem": "中性点不接地系统中发生两相短路接地时,故障处短路电流中存在哪些分量 ( )",
    "options": [
      {
        "label": "A",
        "text": "正序分量"
      },
      {
        "label": "B",
        "text": "负序分量"
      },
      {
        "label": "C",
        "text": "零序分量"
      },
      {
        "label": "D",
        "text": "无法确定"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 1
  },
  {
    "id": "2020-2021-期末英-判断-01",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统分析基础核心考点",
    "stem": "保证供电可靠性就是在任何情况下都不间断对用户的供电。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 1
  },
  {
    "id": "2020-2021-期末英-判断-02",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统分析基础核心考点",
    "stem": "对于容量比不等于 100/100/100 的普通三绕组变压器，计算变压器参数时需要对铭牌给出的短路损耗进行归算，但铭牌给出的短路电压不需归算。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 2
  },
  {
    "id": "2020-2021-期末英-判断-03",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统分析基础核心考点",
    "stem": "架空线路三相换位的目的是改善导线周围的电磁场分布，减少线路的电抗值。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 2
  },
  {
    "id": "2020-2021-期末英-判断-04",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统分析基础核心考点",
    "stem": "同样的迭代次数，牛顿—拉夫逊法比 PQ 分解法精度高。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 4
  },
  {
    "id": "2020-2021-期末英-判断-05",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统分析基础核心考点",
    "stem": "电力系统的单位调节功率越大，同样负荷变化所引起的系统频率变化越小，电力系统中总是优先考虑通过增大负荷的单位调节功率来提高系统的单位调节功率。（）6.无穷大电源供电系统三相短路电流周期分量的有效值是不衰减的。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 7
  },
  {
    "id": "2020-2021-期末英-判断-07",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统分析基础核心考点",
    "stem": "两绕组自耦变压器可以用于 $110 / 35kV$ 变电站中。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 2
  },
  {
    "id": "2020-2021-期末英-判断-08",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统分析基础核心考点",
    "stem": "发生不对称短路时, 不仅相电压中可能出现零序电压分量, 线电压中也可能出现零序电压分量。()",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 1
  },
  {
    "id": "2020-2021-期末英-判断-09",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统分析基础核心考点",
    "stem": "均一电网功率的经济分布与其功率的自然分布相同。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 1
  },
  {
    "id": "2020-2021-期末英-判断-10",
    "paper": "华北电力大学 2020-2021 学年第一学期期末试卷(A)电力英",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统分析基础核心考点",
    "stem": "无论变压器为何种铁芯结构，当有零序电流流通时，他的零序激磁电抗都可以看作无穷大。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [],
    "answerPending": true,
    "explanation": "详见火哥考研视频解析或标准教材对应定理。",
    "verified": false,
    "conflict": "",
    "source": "期末",
    "year": "2020-2021",
    "chapter": 2
  },
  {
    "id": "2019-2020-期末A-单选-01",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "参数归算基本级选定",
    "stem": "电力系统等值电路中，所有参数应归算到同一电压等级（基本级），关于基本级的选择下列说法正确的是（ ）。",
    "options": [
      {
        "label": "A",
        "text": "必须选择最高电压等级作为基本级"
      },
      {
        "label": "B",
        "text": "选择发电机电压等级作为基本级"
      },
      {
        "label": "C",
        "text": "在没有明确要求的情况下选择最高电压级作为基本级"
      },
      {
        "label": "D",
        "text": "在没有明确要求的情况下选择最低电压级作为基本级"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "参数归算的基本级是任意选择的，工程实际中通常选电网的最高电压等级作为基本级。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 1
  },
  {
    "id": "2019-2020-期末A-单选-02",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "无功功率最优分布目的",
    "stem": "优化无功功率电源分布的目的是降低网络中的（ ）。",
    "options": [
      {
        "label": "A",
        "text": "有功功率损耗"
      },
      {
        "label": "B",
        "text": "无功功率损耗"
      },
      {
        "label": "C",
        "text": "视在功率损耗"
      },
      {
        "label": "D",
        "text": "开停的机组数"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "优化无功功率电源分布的目标是为了降低电力网络中的有功功率损耗（有功网损）。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 6
  },
  {
    "id": "2019-2020-期末A-单选-03",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "降压变压器额定变比",
    "stem": "直接与负荷相连的由 110kV 降到 6kV 的变压器变比应该是（ ）。",
    "options": [
      {
        "label": "A",
        "text": "110/6"
      },
      {
        "label": "B",
        "text": "110/6.6"
      },
      {
        "label": "C",
        "text": "110/6.3"
      },
      {
        "label": "D",
        "text": "121/6.6"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "低压侧直接与负荷相连的降压变压器，二次侧额定电压按高于电网额定电压 5% 选取（即 6.3kV），一次侧等于 110kV。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 2
  },
  {
    "id": "2019-2020-期末A-单选-04",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "中性点不接地单相接地故障电压",
    "stem": "某 35kV 中性点不接地系统发生单相接地故障时，非故障相对地电压为（）kV。",
    "options": [
      {
        "label": "A",
        "text": "35"
      },
      {
        "label": "B",
        "text": "$35\\sqrt{3}$"
      },
      {
        "label": "C",
        "text": "$35/\\sqrt{3}$"
      },
      {
        "label": "D",
        "text": "$\\frac{35\\sqrt{3}}{2}$"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "35kV中性点不接地系统发生单相接地时，非故障相对地电压升高为线电压，即 35kV。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 1
  },
  {
    "id": "2019-2020-期末A-单选-05",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "架空地线对零序电抗的去磁影响",
    "stem": "无架空地线的单回线路的零序阻抗 $x_{0} = 3.5x_{1}$ （ $x_{1}$ 为正序阻抗），则有良好架空地线的单回线路的零序阻抗 $x_{0}$ 可能为（ ）",
    "options": [
      {
        "label": "A",
        "text": "$3.5x_{1}$"
      },
      {
        "label": "B",
        "text": "$2x_{1}$"
      },
      {
        "label": "C",
        "text": "$4.7x_{1}$"
      },
      {
        "label": "D",
        "text": "0"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "架空地线对线路主磁通有去磁作用，架空地线导电性越好，去磁能力越强，线路电抗越小（小于 3.5x1）。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 8
  },
  {
    "id": "2019-2020-期末A-单选-06",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "不对称断线与短路复合序网等效",
    "stem": "与一相断线故障复合序网形式上相同的短路故障是( )。",
    "options": [
      {
        "label": "A",
        "text": "单相接地"
      },
      {
        "label": "B",
        "text": "两相短路"
      },
      {
        "label": "C",
        "text": "两相短路接地"
      },
      {
        "label": "D",
        "text": "三相短路"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "一相断线故障与两相接地短路的复合序网形式相同，均为正、负、零三序网络在故障端口并联。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 8
  },
  {
    "id": "2019-2020-期末A-单选-07",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电晕损耗与线路等值参数",
    "stem": "电晕主要影响线路的哪个参数（ ）。",
    "options": [
      {
        "label": "A",
        "text": "电阻 R"
      },
      {
        "label": "B",
        "text": "电抗 X"
      },
      {
        "label": "C",
        "text": "电导 G"
      },
      {
        "label": "D",
        "text": "电纳 B"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "线路电晕放电是有功电能损失，在输电线路集中参数等效电路中主要由等值电导 G 表征。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 2
  },
  {
    "id": "2019-2020-期末A-单选-08",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "短路冲击电流校验参量",
    "stem": "短路冲击电流 $i_{ch}$ 主要用于检验电气设备和载流导体的（）",
    "options": [
      {
        "label": "A",
        "text": "热稳定"
      },
      {
        "label": "B",
        "text": "动稳定"
      },
      {
        "label": "C",
        "text": "载流量"
      },
      {
        "label": "D",
        "text": "耐压等级"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "短路冲击电流最大瞬时值主要用于校验电气设备和载流导体的电动稳定性（动稳定度）。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 7
  },
  {
    "id": "2019-2020-期末A-单选-09",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "发电机调差系数与调频增发出力",
    "stem": "当负荷增加某一固定数值时，以下哪一种发电机（不考虑二次调频和满载）增发的功率相对较多（ ）",
    "options": [
      {
        "label": "A",
        "text": "调差系数大的发电机"
      },
      {
        "label": "B",
        "text": "调整容量大的发电机"
      },
      {
        "label": "C",
        "text": "调差系数小的发电机"
      },
      {
        "label": "D",
        "text": "调整容量小的发电机"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "在发电机容量相同的前提下，调差系数越小，发电机单位调节功率越强，承担的调频增发出力越多。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 5
  },
  {
    "id": "2019-2020-期末A-单选-10",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "对称三角形负荷一相等值变换",
    "stem": "阻抗为 $Z_{\\Delta}$ 的三个负载接成 $\\triangle$ 作为三相对称负载时, 一相等值负荷的阻抗为 ( )。",
    "options": [
      {
        "label": "A",
        "text": "$Z_{\\triangle}$"
      },
      {
        "label": "B",
        "text": "$Z_{\\triangle} / 3$"
      },
      {
        "label": "C",
        "text": "$\\sqrt{3} Z_{\\triangle}$"
      },
      {
        "label": "D",
        "text": "$\\sqrt{3} Z_{\\triangle} / 3$"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "三相对称三角形接线负荷在单相等值电路中必须先等效变换为星形负荷，阻抗转换为 Z_Δ / 3。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 1
  },
  {
    "id": "2019-2020-期末A-不定项-01",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "变压器无功损耗影响因素",
    "stem": "变压器的无功损耗和以下哪些参量有关（ ）。",
    "options": [
      {
        "label": "A",
        "text": "变压器中流过的功率"
      },
      {
        "label": "B",
        "text": "变压器的短路电压"
      },
      {
        "label": "C",
        "text": "变压器的短路损耗"
      },
      {
        "label": "D",
        "text": "变压器的空载损耗"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerPending": false,
    "explanation": "流过绕组的负荷功率产生可变漏抗无功损耗，短路电压百分数 Uk% 决定等值漏抗大小；两者均直接影响无功损耗。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 2
  },
  {
    "id": "2019-2020-期末A-不定项-02",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "零序阻抗对故障点非故障相电压的影响",
    "stem": "当系统发生（）短路故障时，短路点处非故障相的电压随零序阻抗的增大而升高。",
    "options": [
      {
        "label": "A",
        "text": "三相"
      },
      {
        "label": "B",
        "text": "两相"
      },
      {
        "label": "C",
        "text": "单相接地"
      },
      {
        "label": "D",
        "text": "两相接地"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "在单相接地（串联序网）及两相接地短路（并联序网）中，零序阻抗 Z0 越大，非故障相上的零序分量越大，对地电压越高。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 1
  },
  {
    "id": "2019-2020-期末A-不定项-03",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "有功功率最优分配准则",
    "stem": "下列关于有功功率最优分配说法正确的有（ ）。",
    "options": [
      {
        "label": "A",
        "text": "最优分配的目标是网损最小"
      },
      {
        "label": "B",
        "text": "分配原则是等耗量微增率准则"
      },
      {
        "label": "C",
        "text": "分配原则是等网损微增率准则"
      },
      {
        "label": "D",
        "text": "最优分配的目标是消耗燃料最少"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "answerPending": false,
    "explanation": "有功功率最优分配按等耗量微增率准则执行，考虑网损时按等网损微增率准则分配。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 5
  },
  {
    "id": "2019-2020-期末A-不定项-04",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "PQ分解法与牛拉法对比",
    "stem": "P-Q 分解法和牛拉法相比（ ）。",
    "options": [
      {
        "label": "A",
        "text": "计算速度快"
      },
      {
        "label": "B",
        "text": "迭代次数少"
      },
      {
        "label": "C",
        "text": "精度高"
      },
      {
        "label": "D",
        "text": "收敛性好"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "在相同的收敛精度判据条件下，PQ分解法收敛得到的最终潮流结果精度与牛拉法完全一致。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 4
  },
  {
    "id": "2019-2020-期末A-不定项-05",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "电能生产消费特点",
    "stem": "电能生产、输送、消费的特点有（ ）。",
    "options": [
      {
        "label": "A",
        "text": "同时性"
      },
      {
        "label": "B",
        "text": "与国民经济密切相关"
      },
      {
        "label": "C",
        "text": "可大量储存"
      },
      {
        "label": "D",
        "text": "过渡过程非常迅速"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "answerPending": false,
    "explanation": "电能生产、输送与消费同时完成；电能不能大量储存；电磁过渡过程极为迅速。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 1
  },
  {
    "id": "2019-2020-期末A-判断-01",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "中性点不接地系统单相接地线电压",
    "stem": "不接地系统中，发生单相接地后，三相线电压仍然对称。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "中性点不接地系统单相接地后，三相相对地电压不对称，但三相之间的线电压幅值和相位完全对称不变。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 1
  },
  {
    "id": "2019-2020-期末A-判断-02",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电压幅值调节对功率分布的影响",
    "stem": "改变电压幅值，主要改变网络中有功功率分布。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "改变网络节点电压幅值主要影响无功功率分布；改变电压相位主要影响有功功率分布。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 3
  },
  {
    "id": "2019-2020-期末A-判断-03",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "发电机参与一次调频条件",
    "stem": "电力系统中的每台发电机组都将参与频率的一次调整。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "只有处于未满载状态的发电机才能参与一次调频增出力，额定满载的发电机受功率上限限制无法参与。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 5
  },
  {
    "id": "2019-2020-期末A-判断-04",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "短路电流实用计算大容量电动机影响",
    "stem": "若短路点附近有大容量电动机，在短路瞬间电动机由于机械和电磁惯性的作用，也会送出短路电流，应计及其对短路电流的影响。（） 5. 正常运行时负荷越大，电流越大，发生三相短路时短路电流最大值也越大。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "短路瞬间电动机由于机械与电磁惯性反送短路电流，短路电流实用计算必须考虑故障点附近大容量电动机。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 7
  },
  {
    "id": "2019-2020-期末A-判断-06",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "Y0/Δ变压器序阻抗特性",
    "stem": "$Y_{0} / \\Delta$ 接线变压器的正序、负序和零序的等值漏抗近似相等。 （）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "Y0/Δ 接线变压器从星形中性点接地侧看入，漏磁通路径一致，其正序、负序和零序漏抗近似相等。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 8
  },
  {
    "id": "2019-2020-期末A-判断-07",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "110kV及以上中性点接地选择依据",
    "stem": "110kV 及以上电压等级的系统中性点采用直接接地方式是因为这种接地方式运行可靠性高。（）8.故障的负序分量电流能够流通的元件与正序电流相同，所以负序网络与正序网络是相同的。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "110kV及以上采用中性点直接接地主要原因是为了将非故障相对地绝缘水平限制在相电压，降低绝缘投资；供电可靠性通过自动重合闸保障。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 8
  },
  {
    "id": "2019-2020-期末A-判断-09",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "逆调压适用场景",
    "stem": "在线路电压损耗不大、负荷变动不大的情况下，中枢点调压方式适合采用逆调压。（）10. 电力系统潮流计算机算法本质是求解一组非线性代数方程组。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "逆调压要求高峰负荷抬高电压、低谷负荷降低电压，适用于供电线路长、负荷变动剧烈的中枢点。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 6
  },
  {
    "id": "2019-2020-期末A-判断-10",
    "paper": "华北电力大学 2019-2020 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "潮流计算机算法数学本质",
    "stem": "电力系统潮流计算机算法本质是求解一组非线性代数方程组。（一）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "电力系统稳态潮流计算的数学本质是求解一组高阶非线性代数方程组。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2019-2020",
    "chapter": 4
  },
  {
    "id": "2018-2019-期末A-单选-01",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "消弧线圈全补偿谐振过电压",
    "stem": "消弧线圈采用全补偿方式运行, 发生单相接地时, 可能会使系统 ( )。",
    "options": [
      {
        "label": "A",
        "text": "接地电流增加"
      },
      {
        "label": "B",
        "text": "失去稳定"
      },
      {
        "label": "C",
        "text": "保护误动"
      },
      {
        "label": "D",
        "text": "产生谐振"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "消弧线圈全补偿在不对称或断线时极易激发工频串联谐振，产生严重过电压。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 1
  },
  {
    "id": "2018-2019-期末A-单选-02",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "变压器电抗远大于电阻",
    "stem": "在电网中运行的变压器，无功功率损耗比有功功率损耗（ ）。",
    "options": [
      {
        "label": "A",
        "text": "大"
      },
      {
        "label": "B",
        "text": "小"
      },
      {
        "label": "C",
        "text": "相等"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "高压变压器电抗远大于电阻，无功损耗远大于有功损耗。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 2
  },
  {
    "id": "2018-2019-期末A-单选-03",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "线损率定义",
    "stem": "线损率是指（ ）。",
    "options": [
      {
        "label": "A",
        "text": "线路功率损耗与始端输入功率之比"
      },
      {
        "label": "B",
        "text": "线路功率损耗与末端输出功率之比"
      },
      {
        "label": "C",
        "text": "线路电能损耗与始端输入电能之比 C.线路电能损耗与末端输出电能之比"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "线损率等于损失电能占输入首端总电能的百分比。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 1
  },
  {
    "id": "2018-2019-期末A-单选-04",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "牛拉法精度与收敛性",
    "stem": "牛顿-拉夫逊法和 P-Q 分解法进行潮流计算时，其最后计算精度是（ ）。",
    "options": [
      {
        "label": "A",
        "text": "两种方法一样"
      },
      {
        "label": "B",
        "text": "牛顿-拉夫逊法高"
      },
      {
        "label": "C",
        "text": "P-Q 分解法高"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "迭代次数相同时，牛顿-拉夫逊法精度高，因其收敛性更强。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 4
  },
  {
    "id": "2018-2019-期末A-单选-05",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "负荷静态频率特性",
    "stem": "电力系统频率上升将使负荷所需的有功功率（）",
    "options": [
      {
        "label": "A",
        "text": "不变"
      },
      {
        "label": "B",
        "text": "减小"
      },
      {
        "label": "C",
        "text": "增大"
      },
      {
        "label": "D",
        "text": "以上都有可能"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "系统频率增大时，综合有功负荷随之增大。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 5
  },
  {
    "id": "2018-2019-期末A-单选-06",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "发电机过励运行",
    "stem": "同步调相机过激运行时可以向系统（ ）",
    "options": [
      {
        "label": "A",
        "text": "吸收感性无功"
      },
      {
        "label": "B",
        "text": "发出感性无功"
      },
      {
        "label": "C",
        "text": "发出容性无功"
      },
      {
        "label": "D",
        "text": "以上说法都不对"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "过激（过励）发电机向系统发出感性无功功率。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 6
  },
  {
    "id": "2018-2019-期末A-单选-07",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "短路冲击电流定义",
    "stem": "短路冲击电流 $i_{ch}$ 是最恶劣短路情况下的（）",
    "options": [
      {
        "label": "A",
        "text": "最大有效值"
      },
      {
        "label": "B",
        "text": "周期分量幅值"
      },
      {
        "label": "C",
        "text": "直流分量初始值"
      },
      {
        "label": "D",
        "text": "最大瞬时值"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "冲击电流是短路电流在最恶劣情况下的最大瞬时值。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 7
  },
  {
    "id": "2018-2019-期末A-单选-08",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "纵向故障分类",
    "stem": "在下列各种故障类型中,属于纵向故障的是( )。",
    "options": [
      {
        "label": "A",
        "text": "两相短路"
      },
      {
        "label": "B",
        "text": "两相断线"
      },
      {
        "label": "C",
        "text": "单相接地短路"
      },
      {
        "label": "D",
        "text": "两相短路接地"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "纵向故障为断线，横向故障为短路。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 8
  },
  {
    "id": "2018-2019-期末A-单选-09",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "对称分量法应用前提",
    "stem": "用对称分量法时各序分量具有独立性则此电路应为（）。",
    "options": [
      {
        "label": "A",
        "text": "非线性、参数对称"
      },
      {
        "label": "B",
        "text": "线性、参数不对称"
      },
      {
        "label": "C",
        "text": "线性、参数对称"
      },
      {
        "label": "D",
        "text": "非线性、参数不对称"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "系统线性和参数三相对称是对称分量法成立的前提。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 8
  },
  {
    "id": "2018-2019-期末A-单选-10",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "单相接地非故障相对地电压",
    "stem": "某 10kV 系统发生单相接地故障时，此时非故障相对地电压为（）",
    "options": [
      {
        "label": "A",
        "text": "5.77kV"
      },
      {
        "label": "B",
        "text": "10kV"
      },
      {
        "label": "C",
        "text": "17.32kV"
      },
      {
        "label": "D",
        "text": "7.07kV"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "10kV系统单相接地，非故障相对地电压升为线电压10kV。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 1
  },
  {
    "id": "2018-2019-期末A-不定项-01",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "消弧线圈全补偿谐振过电压",
    "stem": "使用分裂导线的目的是（ ）。",
    "options": [
      {
        "label": "A",
        "text": "减小线路电抗"
      },
      {
        "label": "B",
        "text": "增加线路电抗"
      },
      {
        "label": "C",
        "text": "减少线路导纳"
      },
      {
        "label": "D",
        "text": "提高电晕临界电压"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "消弧线圈全补偿在不对称或断线时极易激发工频串联谐振，产生严重过电压。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 1
  },
  {
    "id": "2018-2019-期末A-不定项-02",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "变压器电抗远大于电阻",
    "stem": "当电网节点数为100时，下列哪些矩阵特点是节点导纳矩阵的特点（）",
    "options": [
      {
        "label": "A",
        "text": "稀疏矩阵"
      },
      {
        "label": "B",
        "text": "对称矩阵"
      },
      {
        "label": "C",
        "text": "满矩阵"
      },
      {
        "label": "D",
        "text": "100阶方阵"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "高压变压器电抗远大于电阻，无功损耗远大于有功损耗。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 4
  },
  {
    "id": "2018-2019-期末A-不定项-03",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "线损率定义",
    "stem": "下列哪些元件或参数可以向电网提供感性无功（ ）",
    "options": [
      {
        "label": "A",
        "text": "并联电容器"
      },
      {
        "label": "B",
        "text": "变压器激磁电抗"
      },
      {
        "label": "C",
        "text": "发电机"
      },
      {
        "label": "D",
        "text": "输电线路电纳 A. 有功负荷增加 B. 发电机出力减少 C. 有功负荷减少 D. 通过联络线向相邻系统输送功率"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "线损率等于损失电能占输入首端总电能的百分比。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 1
  },
  {
    "id": "2018-2019-期末A-不定项-05",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "负荷静态频率特性",
    "stem": "下列关于零序网说法正确的是（）。",
    "options": [
      {
        "label": "A",
        "text": "零序网络是一个无源网络"
      },
      {
        "label": "B",
        "text": "零序电流能流通的元件可能与正、负序不同"
      },
      {
        "label": "C",
        "text": "同杆双回线之间不须考虑相互影响"
      },
      {
        "label": "D",
        "text": "零序电流的流通与变压器接线形式无关"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "系统频率增大时，综合有功负荷随之增大。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 5
  },
  {
    "id": "2018-2019-期末A-判断-01",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "中性点不接地系统单相接地",
    "stem": "变压器副边绕组的额定电压通常高于接入点的电网额定电压。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "三相线电压对称保持不变，允许短时继续运行。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 1
  },
  {
    "id": "2018-2019-期末A-判断-02",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电压调整与无功潮流",
    "stem": "输电线路的有功损耗只和线路上流过的有功功率和电阻有关，与无功功率和电抗无关（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "改变电压大小主要影响无功潮流，改变相角主要影响有功潮流。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 6
  },
  {
    "id": "2018-2019-期末A-判断-03",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "发电机一次调频能力",
    "stem": "调差系数越大，则同等频率下降时发电机所带负荷增大越多（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "满载机组无法增加出力参与一次调频。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 5
  },
  {
    "id": "2018-2019-期末A-判断-04",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "短路电流实用计算负荷考量",
    "stem": "不对称短路故障中一定存在零序分量（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "实用计算中忽略普通综合负荷，但需计及靠近短路点的大容量电动机。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 7
  },
  {
    "id": "2018-2019-期末A-判断-05",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "短路冲击电流与初相位关系",
    "stem": "正序和负序电流不流过中性点接地阻抗 $Z_{g}$ ，因此 $Z_{g}$ 对正、负序电流没有影响（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "纯电感电路空载电压过零时非周期分量最大，冲击电流最大。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 8
  },
  {
    "id": "2018-2019-期末A-判断-06",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "变压器三序漏抗相等",
    "stem": "无穷大电源供电系统三相短路电流周期分量的幅值是不衰减的（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "Y0/Δ变压器由星形侧看入正序、负序和零序漏抗均相等。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 7
  },
  {
    "id": "2018-2019-期末A-判断-07",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "中性点直接接地绝缘与可靠性",
    "stem": "PQ分解法潮流计算过程中，由于简化了很多因素，故一定比牛顿-拉夫逊的收敛速度快（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "直接接地绝缘按相电压设计降低投资，但单相短路跳闸可靠性需自动重合闸弥补。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 4
  },
  {
    "id": "2018-2019-期末A-判断-08",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "不对称短路序网电源分布",
    "stem": "在线路电压损耗小、负荷变动小的情况下，中枢点调压方式适合采用逆调压（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "只有正序网络包含发电机电势电源，负序网和零序网无内部独立电源。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 6
  },
  {
    "id": "2018-2019-期末A-判断-09",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "逆调压应用条件",
    "stem": "改变电压相位，主要改变网络中有功功率的分布（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "线路电压损耗大、负荷波动大时必须采用逆调压。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 5
  },
  {
    "id": "2018-2019-期末A-判断-10",
    "paper": "华北电力大学 2018-2019 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统潮流方程非线性",
    "stem": "不对称短路时，负序电压和零序电压越靠近故障点数值越大（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "电力网络潮流方程为非线性代数方程组，需迭代求解。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2018-2019",
    "chapter": 8
  },
  {
    "id": "2017-2018-期末A-单选-01",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统额定频率",
    "stem": "一台 $220 / 110 / 10 \\mathrm{kV}$ 变压器的接线形式为（）。",
    "options": [
      {
        "label": "A",
        "text": "Y/Y0/△"
      },
      {
        "label": "B",
        "text": "Y0/Y/Y"
      },
      {
        "label": "C",
        "text": "Y0/Y/△"
      },
      {
        "label": "D",
        "text": "Y0/Y0/△"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "我国电力系统额定频率为50Hz。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 1
  },
  {
    "id": "2017-2018-期末A-单选-02",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电网拓扑接线方式",
    "stem": "中性点非直接接地系统中用电设备的绝缘水平应该按照（）考虑。",
    "options": [
      {
        "label": "A",
        "text": "相电压"
      },
      {
        "label": "B",
        "text": "线电压"
      },
      {
        "label": "C",
        "text": "$\\sqrt{3}$ 倍的线电压"
      },
      {
        "label": "D",
        "text": "$\\sqrt{2}$ 倍的相电压"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "辐射网为无备用接线，环网为有备用接线。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 1
  },
  {
    "id": "2017-2018-期末A-单选-03",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "输电线路电抗与间距",
    "stem": "输电线路上消耗的无功功率为（）。",
    "options": [
      {
        "label": "A",
        "text": "容性"
      },
      {
        "label": "B",
        "text": "感性"
      },
      {
        "label": "C",
        "text": "0"
      },
      {
        "label": "D",
        "text": "以上都有可能"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "相间几何均距越大，线路电抗越大。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 6
  },
  {
    "id": "2017-2018-期末A-单选-04",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "变压器额定电压确定",
    "stem": "高压输电网中电能的传输不可避免地产生电压损耗，对电压损耗影响较大的是（）",
    "options": [
      {
        "label": "A",
        "text": "有功功率"
      },
      {
        "label": "B",
        "text": "无功功率"
      },
      {
        "label": "C",
        "text": "线路电阻"
      },
      {
        "label": "D",
        "text": "线路电导"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "一次侧接线路取线路额定电压，接发电机取1.05倍。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 1
  },
  {
    "id": "2017-2018-期末A-单选-05",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "中枢点逆调压要求",
    "stem": "潮流方程是非线性方程组，这组非线性方程是由什么方程推导出的（）。",
    "options": [
      {
        "label": "A",
        "text": "回路电压方程"
      },
      {
        "label": "B",
        "text": "节点电流方程"
      },
      {
        "label": "C",
        "text": "节点电压方程"
      },
      {
        "label": "D",
        "text": "回路电流方程"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "最大负荷时电压提高，最小负荷时电压降低。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 6
  },
  {
    "id": "2017-2018-期末A-单选-06",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "等耗量微增率准则",
    "stem": "调频厂增加出力时, 系统频率会 ( )。",
    "options": [
      {
        "label": "A",
        "text": "上升"
      },
      {
        "label": "B",
        "text": "下降"
      },
      {
        "label": "C",
        "text": "不变"
      },
      {
        "label": "D",
        "text": "以上情况都有可能"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "不计网损时，各电厂耗量微增率相等时燃料消耗最少。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 5
  },
  {
    "id": "2017-2018-期末A-单选-07",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "并联电抗器作用",
    "stem": "电力系统无功不足会造成（）。",
    "options": [
      {
        "label": "A",
        "text": "频率上升"
      },
      {
        "label": "B",
        "text": "电压升高"
      },
      {
        "label": "C",
        "text": "频率下降"
      },
      {
        "label": "D",
        "text": "电压降低"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "特高压长线路吸收容性无功，限制空载容升过电压。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 6
  },
  {
    "id": "2017-2018-期末A-单选-08",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "对称分量法解耦前提",
    "stem": "冲击系数 Kch 的数值变化范围是（）。",
    "options": [
      {
        "label": "A",
        "text": "0≤Kch≤1"
      },
      {
        "label": "B",
        "text": "1≤Kch≤2"
      },
      {
        "label": "C",
        "text": "0≤Kch≤2"
      },
      {
        "label": "D",
        "text": "1≤Kch≤3"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "元件参数三相对称。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 8
  },
  {
    "id": "2017-2018-期末A-单选-09",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "单相接地正序增广网络",
    "stem": "中性点直接接地系统中发生不对称短路时，故障处短路电流中（）。",
    "options": [
      {
        "label": "A",
        "text": "一定存在零序分量"
      },
      {
        "label": "B",
        "text": "一定不存在零序分量"
      },
      {
        "label": "C",
        "text": "是否存在零序分量，应根据不对称短路类型确定"
      },
      {
        "label": "D",
        "text": "只有正序分量"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "附加阻抗为负序阻抗与零序阻抗之和。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 8
  },
  {
    "id": "2017-2018-期末A-单选-10",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "冲击电流校验",
    "stem": "对输电线路而言，零序阻抗（）负序阻抗。",
    "options": [
      {
        "label": "A",
        "text": "大于"
      },
      {
        "label": "B",
        "text": "等于"
      },
      {
        "label": "C",
        "text": "小于"
      },
      {
        "label": "D",
        "text": "等于或小于"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "冲击电流校验动稳定度。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 8
  },
  {
    "id": "2017-2018-期末A-判断-01",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "发电机额定电压标准",
    "stem": "不接地系统的供电可靠性比直接接地系统的供电可靠性差。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "发电机额定电压比电网高5%，并非相同。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 1
  },
  {
    "id": "2017-2018-期末A-判断-02",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电网网损率计算基础",
    "stem": "分裂导线可以减小电晕，减小线路电容，减小线路电抗。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "电网损失电量应除以输入端总电量，非负荷端。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 2
  },
  {
    "id": "2017-2018-期末A-判断-03",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "年最大负荷利用小时数",
    "stem": "相同迭代次数时，牛拉法比 PQ 分解法精度高。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "Tmax 越大，全年负荷越平稳。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 1
  },
  {
    "id": "2017-2018-期末A-判断-04",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "牛顿法初值敏感度",
    "stem": "输电线路输入的无功功率总大于末端输出的无功功率。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "牛顿法收敛域较窄，对初值选择具有敏感性。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 6
  },
  {
    "id": "2017-2018-期末A-判断-05",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "无功就地平衡原则",
    "stem": "高压电网中无功功率分点的电压最低。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "无功不宜长距离输送，应分层分区就地平衡。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 6
  },
  {
    "id": "2017-2018-期末A-判断-06",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "发电机进相运行调压",
    "stem": "当系统足够大时，一次调频也可以做到无差调节。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "进相运行吸收感性无功用于降低过高电压。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 5
  },
  {
    "id": "2017-2018-期末A-判断-07",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "单相断线故障类型",
    "stem": "直流分量属于强制电流，其值取决于电源电压和回路阻抗。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "断线属于纵向不对称故障，非横向故障。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 8
  },
  {
    "id": "2017-2018-期末A-判断-08",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "零序电流大地通路",
    "stem": "负序和零序网络中没有电源电动势，短路点的负序和零序电压分量相当于电源。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "零序电流必须经中性点接地极流入大地构成闭合回路。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 8
  },
  {
    "id": "2017-2018-期末A-判断-09",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "短路冲击电流时间",
    "stem": "不对称短路时，负序电压和零序电压越靠近故障点数值越大。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "冲击电流出现在短路后约0.01秒。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 7
  },
  {
    "id": "2017-2018-期末A-判断-10",
    "paper": "华北电力大学 2017-2018 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "变压器铁芯与零序阻抗",
    "stem": "并联电容器作为无功补偿装置时，随着补偿点电压降低，其无功补偿容量增加。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "三相三柱式零序励磁电抗远小于正序。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2017-2018",
    "chapter": 6
  },
  {
    "id": "2013-2014-期末A-选择-01",
    "paper": "华北电力大学 2013-2014 学年第一学期期末试卷(A)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电力系统组成",
    "stem": "目前我国电能的主要输送方式是下列哪种( )",
    "options": [
      {
        "label": "A",
        "text": "直流"
      },
      {
        "label": "B",
        "text": "单相交流"
      },
      {
        "label": "C",
        "text": "三相交流"
      },
      {
        "label": "D",
        "text": "多相电流"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "电力系统包含发电厂、变电站、线路及用户用电设备。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2013-2014",
    "chapter": 1
  },
  {
    "id": "2013-2014-期末A-选择-02",
    "paper": "华北电力大学 2013-2014 学年第一学期期末试卷(A)",
    "typeName": "选择题",
    "type": "single",
    "topic": "额定频率",
    "stem": "在电力系统分析和计算中, 功率和阻抗一般分别是指下列哪种( )",
    "options": [
      {
        "label": "A",
        "text": "一相功率, 一相等值阻抗"
      },
      {
        "label": "B",
        "text": "三相功率, 一相等值阻抗"
      },
      {
        "label": "C",
        "text": "三相功率, 三相等值阻抗"
      },
      {
        "label": "D",
        "text": "一相功率, 三相等值阻抗"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "我国额定工频为50Hz。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2013-2014",
    "chapter": 1
  },
  {
    "id": "2013-2014-期末A-选择-03",
    "paper": "华北电力大学 2013-2014 学年第一学期期末试卷(A)",
    "typeName": "选择题",
    "type": "single",
    "topic": "导线电抗与电压等级",
    "stem": "$110 \\mathrm{kV}$ 系统中性点常采用的运行方式为( )",
    "options": [
      {
        "label": "A",
        "text": "中性点直接接地"
      },
      {
        "label": "B",
        "text": "中性点不接地"
      },
      {
        "label": "C",
        "text": "中性点经阻抗接地"
      },
      {
        "label": "D",
        "text": "中性点绝缘"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "高压线路相间距离大，Dm大，导线电抗偏大。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2013-2014",
    "chapter": 1
  },
  {
    "id": "2013-2014-期末A-选择-04",
    "paper": "华北电力大学 2013-2014 学年第一学期期末试卷(A)",
    "typeName": "选择题",
    "type": "single",
    "topic": "变压器等值电抗",
    "stem": "衡量电能质量的指标是( )",
    "options": [
      {
        "label": "A",
        "text": "电压、频率"
      },
      {
        "label": "B",
        "text": "电压、频率、网损率"
      },
      {
        "label": "C",
        "text": "电压、频率、波形"
      },
      {
        "label": "D",
        "text": "电压、频率、不平衡度"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "由短路试验电压百分数求得。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2013-2014",
    "chapter": 1
  },
  {
    "id": "2013-2014-期末A-选择-05",
    "paper": "华北电力大学 2013-2014 学年第一学期期末试卷(A)",
    "typeName": "选择题",
    "type": "single",
    "topic": "潮流计算已知量",
    "stem": "对高压线末端电压升高的现象, 常用的方法是在末端加( )",
    "options": [
      {
        "label": "A",
        "text": "并联电抗器"
      },
      {
        "label": "B",
        "text": "串联电抗器"
      },
      {
        "label": "C",
        "text": "并联电容器"
      },
      {
        "label": "D",
        "text": "串联电容器"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "PQ节点已知有功和无功。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2013-2014",
    "chapter": 3
  },
  {
    "id": "2013-2014-期末A-选择-06",
    "paper": "华北电力大学 2013-2014 学年第一学期期末试卷(A)",
    "typeName": "选择题",
    "type": "single",
    "topic": "架空线电抗与距离关系",
    "stem": "同一种型号的导线, 用在电压等级高的线路中要比电压等级低的线路中, 其电抗值( )",
    "options": [
      {
        "label": "A",
        "text": "变大"
      },
      {
        "label": "B",
        "text": "变小"
      },
      {
        "label": "C",
        "text": "不变"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "几何均距增大，电抗增大。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2013-2014",
    "chapter": 2
  },
  {
    "id": "2013-2014-期末A-选择-07",
    "paper": "华北电力大学 2013-2014 学年第一学期期末试卷(A)",
    "typeName": "选择题",
    "type": "single",
    "topic": "中枢点调压方式",
    "stem": "反应输电线路的磁场效应的参数为( )",
    "options": [
      {
        "label": "A",
        "text": "电阻"
      },
      {
        "label": "B",
        "text": "电抗"
      },
      {
        "label": "C",
        "text": "电容"
      },
      {
        "label": "D",
        "text": "电导"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "顺调压最大负荷低、最小负荷高。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2013-2014",
    "chapter": 6
  },
  {
    "id": "2013-2014-期末A-选择-08",
    "paper": "华北电力大学 2013-2014 学年第一学期期末试卷(A)",
    "typeName": "选择题",
    "type": "single",
    "topic": "无功优化目标",
    "stem": "变压器负序阻抗与正序阻抗相比, 其值( )",
    "options": [
      {
        "label": "A",
        "text": "比正序阻抗大"
      },
      {
        "label": "B",
        "text": "与正序阻抗相等"
      },
      {
        "label": "C",
        "text": "比正序阻抗小"
      },
      {
        "label": "D",
        "text": "由变压器接线方式决定"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "网损最小。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2013-2014",
    "chapter": 8
  },
  {
    "id": "2013-2014-期末A-选择-09",
    "paper": "华北电力大学 2013-2014 学年第一学期期末试卷(A)",
    "typeName": "选择题",
    "type": "single",
    "topic": "对称分量法",
    "stem": "输电线路两端电压的相角差主要取决于通过线路的( )",
    "options": [
      {
        "label": "A",
        "text": "电压降落"
      },
      {
        "label": "B",
        "text": "有功功率"
      },
      {
        "label": "C",
        "text": "无功功率"
      },
      {
        "label": "D",
        "text": "电压降落的纵分量"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "三相对称元件参数下序网相互独立。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2013-2014",
    "chapter": 8
  },
  {
    "id": "2013-2014-期末A-选择-10",
    "paper": "华北电力大学 2013-2014 学年第一学期期末试卷(A)",
    "typeName": "选择题",
    "type": "single",
    "topic": "三相短路特点",
    "stem": "电力系统的有功功率电源是( )",
    "options": [
      {
        "label": "A",
        "text": "发电机"
      },
      {
        "label": "B",
        "text": "变压器"
      },
      {
        "label": "C",
        "text": "调相机"
      },
      {
        "label": "D",
        "text": "电容器"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "三相短路是对称故障。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2013-2014",
    "chapter": 5
  },
  {
    "id": "2009-2010-期末A-多选-01",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "电力网基本概念",
    "stem": "中性点经消弧线圈接地的电力系统一般采用的补偿方式是（）",
    "options": [
      {
        "label": "A",
        "text": "过补偿"
      },
      {
        "label": "B",
        "text": "欠补偿"
      },
      {
        "label": "C",
        "text": "全补偿"
      },
      {
        "label": "D",
        "text": "无补偿"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "电力网由变电所和送配电线路组成。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 1
  },
  {
    "id": "2009-2010-期末A-多选-02",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "供电可靠性分类",
    "stem": "电力系统有功日负荷曲线下所包含的面积代表了负荷的（）",
    "options": [
      {
        "label": "A",
        "text": "功率大小"
      },
      {
        "label": "B",
        "text": "电能消耗"
      },
      {
        "label": "C",
        "text": "电压水平"
      },
      {
        "label": "D",
        "text": "功率因数"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "一类负荷要求双电源不间断供电。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 1
  },
  {
    "id": "2009-2010-期末A-多选-03",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "额定电压匹配",
    "stem": "使用分裂导线的主要目的是（）",
    "options": [
      {
        "label": "A",
        "text": "提高输电能力"
      },
      {
        "label": "B",
        "text": "增加线路电抗"
      },
      {
        "label": "C",
        "text": "减少线路导纳"
      },
      {
        "label": "D",
        "text": "提高电晕临界电压"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "变压器一次侧直接接发电机取1.05Un。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 1
  },
  {
    "id": "2009-2010-期末A-多选-04",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "导线换位目的",
    "stem": "短路冲击电流是指短路电流的（）",
    "options": [
      {
        "label": "A",
        "text": "有效值"
      },
      {
        "label": "B",
        "text": "平均值"
      },
      {
        "label": "C",
        "text": "均方根"
      },
      {
        "label": "D",
        "text": "最大可能瞬时值"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "整循环换位使三相电抗和电纳对称。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 7
  },
  {
    "id": "2009-2010-期末A-多选-05",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "电导参数物理本质",
    "stem": "一般双绕组变压器的分接头（）",
    "options": [
      {
        "label": "A",
        "text": "高、低压侧均没有"
      },
      {
        "label": "B",
        "text": "位于低压侧"
      },
      {
        "label": "C",
        "text": "高、低压侧均有"
      },
      {
        "label": "D",
        "text": "位于高压侧"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "反映电晕损耗和绝缘子泄漏损耗。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 2
  },
  {
    "id": "2009-2010-期末A-多选-06",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "变压器无功损耗",
    "stem": "潮流计算的 P-Q 分解法是在哪一类方法的基础上通过化简派生而来的（）",
    "options": [
      {
        "label": "A",
        "text": "高斯—赛德法"
      },
      {
        "label": "B",
        "text": "直角坐标形式的牛顿—拉夫逊法"
      },
      {
        "label": "C",
        "text": "极坐标形式的牛顿—拉夫逊法"
      },
      {
        "label": "D",
        "text": "阻抗法"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "主要消耗在漏抗上。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 4
  },
  {
    "id": "2009-2010-期末A-多选-07",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "电压降落横分量",
    "stem": "有功功率最优分配的准则是（）",
    "options": [
      {
        "label": "A",
        "text": "按等耗量微增率"
      },
      {
        "label": "B",
        "text": "按等比耗量"
      },
      {
        "label": "C",
        "text": "按效率相同"
      },
      {
        "label": "D",
        "text": "按消耗量"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "反映首末端电压相位差。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 3
  },
  {
    "id": "2009-2010-期末A-多选-08",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "辐射网潮流手算",
    "stem": "在线路电压损耗小、负荷变动较小的场合，中枢点采用的调压方式通常为（）",
    "options": [
      {
        "label": "A",
        "text": "逆调压"
      },
      {
        "label": "B",
        "text": "顺调压"
      },
      {
        "label": "C",
        "text": "常调压"
      },
      {
        "label": "D",
        "text": "任何一种"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "由末端向前推算功率，由首端向末端推算电压。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 3
  },
  {
    "id": "2009-2010-期末A-多选-09",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "节点导纳矩阵对角元",
    "stem": "电压损耗是指线路（）",
    "options": [
      {
        "label": "A",
        "text": "始末两端电压数值差"
      },
      {
        "label": "B",
        "text": "端部母线实际电压与额定电压数值差"
      },
      {
        "label": "C",
        "text": "末端空载电压与负载电压数值差"
      },
      {
        "label": "D",
        "text": "始末两端电压相量差"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "自导纳等于该节点相连所有支路导纳之和。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 4
  },
  {
    "id": "2009-2010-期末A-多选-10",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "PQ节点未知数",
    "stem": "输电线路空载运行时，末端电压比首端电压（）",
    "options": [
      {
        "label": "A",
        "text": "低"
      },
      {
        "label": "B",
        "text": "高"
      },
      {
        "label": "C",
        "text": "相同"
      },
      {
        "label": "D",
        "text": "不一定"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "电压幅值和相角。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 3
  },
  {
    "id": "2009-2010-期末A-多选-11",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "牛拉法修正方程",
    "stem": "为了能及时向增加的负荷供电而设置的备用应是（）",
    "options": [
      {
        "label": "A",
        "text": "事故备用"
      },
      {
        "label": "B",
        "text": "检修备用"
      },
      {
        "label": "C",
        "text": "冷备用"
      },
      {
        "label": "D",
        "text": "热备用"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "求解电压修正量。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 4
  },
  {
    "id": "2009-2010-期末A-多选-12",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "调频厂选择",
    "stem": "冲击系数 $k_{ch}$ 的数值变化范围是（ ）",
    "options": [
      {
        "label": "A",
        "text": "$0 < k_{ch} < 1$"
      },
      {
        "label": "B",
        "text": "$1 < k_{ch} < 2$"
      },
      {
        "label": "C",
        "text": "$0 \\leq k_{ch} \\leq 2$"
      },
      {
        "label": "D",
        "text": "$1 \\leq k_{ch} \\leq 3$"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "水电厂调频速度快。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 7
  },
  {
    "id": "2009-2010-期末A-多选-13",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "一次调频特点",
    "stem": "系统发生两相接地短路故障时, 复合序网的连接方式为 ( )",
    "options": [
      {
        "label": "A",
        "text": "正序、负序并联, 零序网开路"
      },
      {
        "label": "B",
        "text": "正序、负序、零序并联"
      },
      {
        "label": "C",
        "text": "正序、零序并联, 负序开路"
      },
      {
        "label": "D",
        "text": "零序、负序并联, 正序开路"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "有差调节。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 8
  },
  {
    "id": "2009-2010-期末A-多选-14",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "无功补偿调压",
    "stem": "用牛顿—拉夫逊法进行潮流计算时, 线性修正方程求解的是 ( )",
    "options": [
      {
        "label": "A",
        "text": "线路的功率"
      },
      {
        "label": "B",
        "text": "节点的注入功率"
      },
      {
        "label": "C",
        "text": "节点的电压值"
      },
      {
        "label": "D",
        "text": "节点电压的修正量"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "并联电容器发出容性无功提高电压。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 4
  },
  {
    "id": "2009-2010-期末A-多选-15",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "短路冲击电流时间",
    "stem": "频率的二次调整是由（）",
    "options": [
      {
        "label": "A",
        "text": "发电机组的调速系统完成的"
      },
      {
        "label": "B",
        "text": "负荷的频率特性来完成的"
      },
      {
        "label": "C",
        "text": "发电机组的调频系统完成的"
      },
      {
        "label": "D",
        "text": "有功功率的经济分配完成的"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "t = 0.01s。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 5
  },
  {
    "id": "2009-2010-期末A-多选-16",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "无限大电源短路",
    "stem": "同一种型号的导线，用在电压等级高的线路中要比用在电压等级低的线路中，其阻抗值（）",
    "options": [
      {
        "label": "A",
        "text": "变大"
      },
      {
        "label": "B",
        "text": "变小"
      },
      {
        "label": "C",
        "text": "不变"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "周期分量不衰减。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 7
  },
  {
    "id": "2009-2010-期末A-多选-17",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "纵向故障分类",
    "stem": "中性点不接地系统中发生单相接地时, 接地点的三相线电压 (",
    "options": [
      {
        "label": "A",
        "text": "增大 $\\sqrt{3}$ 倍"
      },
      {
        "label": "B",
        "text": "保持不变"
      },
      {
        "label": "C",
        "text": "不再对称"
      },
      {
        "label": "D",
        "text": "0"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "单相断线。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 1
  },
  {
    "id": "2009-2010-期末A-多选-18",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "对称分量法",
    "stem": "一台将 $500 \\mathrm{kV}$ 电压降为 $220 \\mathrm{kV}$ 的降压变压器连接两个网络, 两侧均与线路相连, 这台变压器的额定变比为 ( )",
    "options": [
      {
        "label": "A",
        "text": "$500 / 220$"
      },
      {
        "label": "B",
        "text": "$500 / 242$"
      },
      {
        "label": "C",
        "text": "$550 / 220$"
      },
      {
        "label": "D",
        "text": "$550 / 242$"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "各序分量独立解耦。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 2
  },
  {
    "id": "2009-2010-期末A-多选-19",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "单相接地正序附加阻抗",
    "stem": "系统中无功功率不足时，会造成（）",
    "options": [
      {
        "label": "A",
        "text": "电压下降"
      },
      {
        "label": "B",
        "text": "频率下降"
      },
      {
        "label": "C",
        "text": "频率上升"
      },
      {
        "label": "D",
        "text": "电压上升"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "Z2 + Z0。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 8
  },
  {
    "id": "2009-2010-期末A-多选-20",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "架空线零序电抗与正序比较",
    "stem": "一台 $Y_{N} / Y$ 型接线的变压器, 如果在 $Y_{N}$ 侧发生短路故障, 则 $Y$ 侧零序电流大小为 ( )",
    "options": [
      {
        "label": "A",
        "text": "0"
      },
      {
        "label": "B",
        "text": "0.5"
      },
      {
        "label": "C",
        "text": "1.0"
      },
      {
        "label": "D",
        "text": "$\\infty$"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "零序电抗大于正序电抗，架空地线减小零序电抗。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 2
  },
  {
    "id": "2009-2010-期末A-判断-31",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "动力系统与电力系统概念界定",
    "stem": "通常把发电企业的动力设施、设备和发电、输电、变电、配电、用电设备及相应的辅助系统组成的电能热能生产、输送、分配、使用的统一整体称为电力系统。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "动力系统包括发电厂的动力部分和电力系统；发电、输电、变电、配电和用电设施的整体被称为电力系统，概念混淆。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 1
  },
  {
    "id": "2009-2010-期末A-判断-32",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电机励磁与漏抗无功与电压特性",
    "stem": "异步电机和变压器励磁无功功率随着电压的降低而减少, 漏抗中的无功损耗与电压的平方成反比, 随着电压的降低而增加。( )",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "变压器和电机的励磁无功与电压平方成正比，电压降低时励磁无功减小；而漏抗无功与电流平方成正比。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 2
  },
  {
    "id": "2009-2010-期末A-判断-33",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "故障点负序电压最大值原理",
    "stem": "发生不对称故障时，故障点的负序电压值比网络中其他点的负序电压值大。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "在负序网络中故障点是唯一的负序电源，负序电压在故障点最高，离故障点越远负序电压越低。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 8
  },
  {
    "id": "2009-2010-期末A-判断-34",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "无功补偿分层分区就地平衡",
    "stem": "电网无功补偿的原则一般按照分层分区和就地平衡原则考虑。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "为避免无功长距离输送引起过大电压损耗和网络线损，无功补偿必须坚持分层分区、就地平衡原则。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 6
  },
  {
    "id": "2009-2010-期末A-判断-35",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "消弧线圈过补偿定义",
    "stem": "中性点不直接接地的系统中，过补偿是指补偿后电感电流小于电容电流。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "过补偿是指消弧线圈补偿的电感电流【大于】电网对地电容电流，以避免谐振并留有运行裕度；题干说小于属于欠补偿。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 1
  },
  {
    "id": "2009-2010-期末A-判断-36",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "发电机调差系数选择",
    "stem": "为了增加发电机调节负荷的能力，希望发电机的调差系数 $\\sigma$ 越小越好。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "调差系数并非越小越好，调差系数过小会导致发电机对轻微负荷扰动过于灵敏而频繁调整，破坏运行平稳度。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 5
  },
  {
    "id": "2009-2010-期末A-判断-37",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "不同故障类型短路电流比较",
    "stem": "在各种短路故障中，三相短路时电流最大。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "当故障点综合零序电抗小于正序电抗时，单相接地短路电流可以大于三相短路电流，并非三相短路必然最大。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 7
  },
  {
    "id": "2009-2010-期末A-判断-38",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "自耦变压器电磁联系",
    "stem": "自耦变压器的特点之一是：一次和二次之间仅有电的联系，没有磁的联系。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "自耦变压器的一、二次绕组之间既有电的直接联系，又有磁的耦合联系，题干说仅有电的联系错误。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 2
  },
  {
    "id": "2009-2010-期末A-判断-39",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电压与功率平衡关系",
    "stem": "电力系统的电压水平主要决定于系统中有功功率的平衡。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "电力系统电压水平主要取决于全网【无功功率】的平衡，而系统频率主要取决于【有功功率】的平衡。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 5
  },
  {
    "id": "2009-2010-期末A-判断-40",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(A)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "标幺制计算公式一致性",
    "stem": "在电力系统分析中用标幺值计算时, 三相与单相的计算公式是一致的。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "在标幺制中选定统一基准后，三相对称公式与单相公式形式完全一致，计算中不再出现根号3系数。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 2
  },
  {
    "id": "2009-2010-期末B-多选-01",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "发电机额定电压",
    "stem": "构成电力网的主要设备有（）",
    "options": [
      {
        "label": "A",
        "text": "变压器、用户"
      },
      {
        "label": "B",
        "text": "变压器、电力线路"
      },
      {
        "label": "C",
        "text": "电缆、架空线"
      },
      {
        "label": "D",
        "text": "电阻、电容"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "1.05Un。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 1
  },
  {
    "id": "2009-2010-期末B-多选-02",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "变压器额定变比",
    "stem": "线路首末端电压的相量差是（）",
    "options": [
      {
        "label": "A",
        "text": "电压偏移"
      },
      {
        "label": "B",
        "text": "电压损耗"
      },
      {
        "label": "C",
        "text": "电压降落"
      },
      {
        "label": "D",
        "text": "电压调整"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "高压侧高10%，低压侧高5%。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 2
  },
  {
    "id": "2009-2010-期末B-多选-03",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "分裂导线电抗",
    "stem": "供电负荷与厂用电之和。称为（）",
    "options": [
      {
        "label": "A",
        "text": "发电负荷"
      },
      {
        "label": "B",
        "text": "综合供电负荷"
      },
      {
        "label": "C",
        "text": "用电负荷"
      },
      {
        "label": "D",
        "text": "工业负荷"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "分裂导线电抗减小。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 2
  },
  {
    "id": "2009-2010-期末B-多选-04",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "导线电导参数",
    "stem": "线损率是指（）",
    "options": [
      {
        "label": "A",
        "text": "线路功率损耗与始端输入功率之比"
      },
      {
        "label": "B",
        "text": "线路功率损耗与末端输出功率之比"
      },
      {
        "label": "C",
        "text": "线路电能损耗与始端输入电能之比"
      },
      {
        "label": "D",
        "text": "线路电能损耗与末端输出功率之比"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "电晕损耗。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 1
  },
  {
    "id": "2009-2010-期末B-多选-05",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "阻抗折算原则",
    "stem": "采用分裂导线可以实现（）",
    "options": [
      {
        "label": "A",
        "text": "减小电抗"
      },
      {
        "label": "B",
        "text": "增大电抗"
      },
      {
        "label": "C",
        "text": "减小电纳"
      },
      {
        "label": "D",
        "text": "增大电阻"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "按实际变比折算。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 2
  },
  {
    "id": "2009-2010-期末B-多选-06",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "闭式环网初步功率分布",
    "stem": "电力线路等值参数中消耗有功功率的是 ( )",
    "options": [
      {
        "label": "A",
        "text": "电阻、电导"
      },
      {
        "label": "B",
        "text": "电感、电阻"
      },
      {
        "label": "C",
        "text": "电纳、电阻"
      },
      {
        "label": "D",
        "text": "电导、电感"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "按阻抗反比分流。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 3
  },
  {
    "id": "2009-2010-期末B-多选-07",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "电压损耗纵分量",
    "stem": "系统中无功功率不足时, 会造成 ( )",
    "options": [
      {
        "label": "A",
        "text": "电压下降"
      },
      {
        "label": "B",
        "text": "频率下降"
      },
      {
        "label": "C",
        "text": "频率上升"
      },
      {
        "label": "D",
        "text": "电压上升"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "主要反映首末端电压数值差。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 3
  },
  {
    "id": "2009-2010-期末B-多选-08",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "雅可比矩阵性质",
    "stem": "高峰负荷时将中枢点电压升高, 低谷负荷时将其降低的调压方式是 ( )",
    "options": [
      {
        "label": "A",
        "text": "顺调压"
      },
      {
        "label": "B",
        "text": "逆调压"
      },
      {
        "label": "C",
        "text": "常调压"
      },
      {
        "label": "D",
        "text": "无法确定"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "非对称稀疏方阵。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 6
  },
  {
    "id": "2009-2010-期末B-多选-09",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "PV节点未知数",
    "stem": "三绕组变压器的分接头, 一般装在 ( )",
    "options": [
      {
        "label": "A",
        "text": "高压和低压绕组"
      },
      {
        "label": "B",
        "text": "高压和中压绕组"
      },
      {
        "label": "C",
        "text": "中压和低压绕组"
      },
      {
        "label": "D",
        "text": "三个绕组都装"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "无功功率和电压相角。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 2
  },
  {
    "id": "2009-2010-期末B-多选-10",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "牛顿法直角坐标修正方程",
    "stem": "电力线路上损耗的无功功率是（）",
    "options": [
      {
        "label": "A",
        "text": "感性的"
      },
      {
        "label": "B",
        "text": "容性的"
      },
      {
        "label": "C",
        "text": "不一定"
      },
      {
        "label": "D",
        "text": "纯电阻"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "求解电压实部与虚部修正量。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 6
  },
  {
    "id": "2009-2010-期末B-多选-11",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "等微增率准则",
    "stem": "输电线路的正序阻抗与负序阻抗相比，其值要（）",
    "options": [
      {
        "label": "A",
        "text": "大"
      },
      {
        "label": "B",
        "text": "小"
      },
      {
        "label": "C",
        "text": "相等"
      },
      {
        "label": "D",
        "text": "都不是"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "耗量微增率相等能耗最低。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 5
  },
  {
    "id": "2009-2010-期末B-多选-12",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "二次调频实现方式",
    "stem": "可能有零序电流穿越变压器的接线方式是（）",
    "options": [
      {
        "label": "A",
        "text": "Yn, d"
      },
      {
        "label": "B",
        "text": "Yn, y"
      },
      {
        "label": "C",
        "text": "Yn, yn"
      },
      {
        "label": "D",
        "text": "Y, d"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "调频器调节无差。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 5
  },
  {
    "id": "2009-2010-期末B-多选-13",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "发电机调压经济性",
    "stem": "三相短路的附加电抗等于（）",
    "options": [
      {
        "label": "A",
        "text": "0"
      },
      {
        "label": "B",
        "text": "$Z_{\\Sigma 0} + Z_{\\Sigma 2} + 3z_{f}$"
      },
      {
        "label": "C",
        "text": "$Z_{\\Sigma 2} + 3z_{f}$"
      },
      {
        "label": "D",
        "text": "$\\frac{Z_{\\Sigma 2}\\times(Z_{\\Sigma 0} + 3z_g)}{Z_{\\Sigma 0} + Z_{\\Sigma 2} + 3z_g}$"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "调节励磁最经济。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 7
  },
  {
    "id": "2009-2010-期末B-多选-14",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "串联电容补偿",
    "stem": "短路电流最大的短路故障为（）",
    "options": [
      {
        "label": "A",
        "text": "单相短路"
      },
      {
        "label": "B",
        "text": "两相短路"
      },
      {
        "label": "C",
        "text": "三相短路"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "减小线路等效电抗，降低电压损耗。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 7
  },
  {
    "id": "2009-2010-期末B-多选-15",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "短路原因",
    "stem": "在下列各种故障类型中，属于纵向故障的是（）",
    "options": [
      {
        "label": "A",
        "text": "三相短路"
      },
      {
        "label": "B",
        "text": "两相断线"
      },
      {
        "label": "C",
        "text": "单相接地短路"
      },
      {
        "label": "D",
        "text": "两相接地短路"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "绝缘击穿或误操作。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 8
  },
  {
    "id": "2009-2010-期末B-多选-16",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "次暂态电抗物理意义",
    "stem": "系统发生不对称故障后，越靠近短路点，负序电压越（）",
    "options": [
      {
        "label": "A",
        "text": "低"
      },
      {
        "label": "B",
        "text": "高"
      },
      {
        "label": "C",
        "text": "不变"
      },
      {
        "label": "D",
        "text": "都不对"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "定子漏抗与转子绕组漏抗等效并联值。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 7
  },
  {
    "id": "2009-2010-期末B-多选-17",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "冲击电流校验",
    "stem": "电力系统中能实现无差调节的调频方式是（）",
    "options": [
      {
        "label": "A",
        "text": "一次调频"
      },
      {
        "label": "B",
        "text": "二次调频"
      },
      {
        "label": "C",
        "text": "都可以"
      },
      {
        "label": "D",
        "text": "都不能"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "动稳定度。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 7
  },
  {
    "id": "2009-2010-期末B-多选-18",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "两相短路接地附加阻抗",
    "stem": "用牛顿—拉夫逊法进行潮流计算时, 线性修正方程求解的是 ( )",
    "options": [
      {
        "label": "A",
        "text": "线路的功率"
      },
      {
        "label": "B",
        "text": "节点的注入功率"
      },
      {
        "label": "C",
        "text": "节点的电压值"
      },
      {
        "label": "D",
        "text": "节点电压的修正量"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "Z2 并联 Z0。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 8
  },
  {
    "id": "2009-2010-期末B-多选-19",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "变压器零序通路",
    "stem": "为了能及时向增加的负荷供电而设置的备用是（）",
    "options": [
      {
        "label": "A",
        "text": "事故备用"
      },
      {
        "label": "B",
        "text": "检修备用"
      },
      {
        "label": "C",
        "text": "冷备用"
      },
      {
        "label": "D",
        "text": "热备用"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "Y0侧中性点接地提供零序通路。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 2
  },
  {
    "id": "2009-2010-期末B-多选-20",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "架空地线去磁屏蔽",
    "stem": "不属于无穷大电源特点的是（）",
    "options": [
      {
        "label": "A",
        "text": "电压恒定"
      },
      {
        "label": "B",
        "text": "电流恒定"
      },
      {
        "label": "C",
        "text": "功率无限大"
      },
      {
        "label": "D",
        "text": "频率恒定"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "减小零序电抗。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 7
  },
  {
    "id": "2009-2010-期末B-判断-31",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "轻载长线路末端容升效应",
    "stem": "电路首端的电压一定高于末端的电压。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "超高压空载或轻载长线路由于对地电纳充电效应，末端电压常常高于首端电压，并非首端一定高于末端。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 1
  },
  {
    "id": "2009-2010-期末B-判断-32",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "变压器副边额定电压选取",
    "stem": "变压器副边绕组的额定电压通常高于接入点的电网标称电压。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "降压变压器副边绕组相当于供电电源，为补偿变压器内部阻抗压降及沿线压降，额定电压通常比电网标称电压高 5% 或 10%。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 1
  },
  {
    "id": "2009-2010-期末B-判断-33",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "无功不足调压手段局限性",
    "stem": "系统无功不足时，可以通过调整变压器分接头来改善电压水平。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "系统无功严重匮乏导致全网电压偏低时，调整变压器分接头无法增发无功，反而恶化局部电压，必须增设无功补偿。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 6
  },
  {
    "id": "2009-2010-期末B-判断-34",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "有功最优分配准则基本表述",
    "stem": "电力系统各电源之间有功功率的最优分配原则是等网损微增率准则。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "不计网损时有功最优分配准则是等耗量微增率准则，计及网损时才是等网损微增率准则，表述缺少前提。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 5
  },
  {
    "id": "2009-2010-期末B-判断-35",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "中性点不接地单相接地线电压对称性",
    "stem": "中性点不接地系统中发生单相接地时，接地点的线电压仍然对称。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "发生单相金属接地时，三相相对地电压发生畸变，但各相之间的线电压对称性未受任何破坏。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 1
  },
  {
    "id": "2009-2010-期末B-判断-36",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "变压器参数获取途径",
    "stem": "变压器的参数是通过设计计算得到的。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "工程计算中变压器等值电阻和等值电抗是通过出厂铭牌的短路试验数据（Pk, Uk%）计算得到的，而非仅凭设计理论计算。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 2
  },
  {
    "id": "2009-2010-期末B-判断-37",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "消弧线圈设备用途",
    "stem": "变电站设消弧线圈的目的是用于调压。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "消弧线圈装设在中性点是为了补偿单相接地电容电流避免电弧过电压，而非用于调压。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 1
  },
  {
    "id": "2009-2010-期末B-判断-38",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "两绕组自耦变压器变比限制",
    "stem": "两绕组自耦变压器不可以用于 $110 / 35\\mathrm{kV}$ 变电站中。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "自耦变压器标准变比不宜过大（一般不超过 2~3），110/35kV 变比超过 3 倍且低压侧绝缘与避雷保护困难，通常不采用自耦变。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 2
  },
  {
    "id": "2009-2010-期末B-判断-39",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "稳态与暂态分析区别",
    "stem": "电力系统稳态分析的是运行参数变化较小的运行状态，而暂态分析的是受到突然的扰动，运行参数变化较大的运行状态。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "电力系统稳态分析研究正常运行或参数平缓微变的工况，暂态分析研究大扰动下的剧烈电磁与机电暂态过渡过程。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 1
  },
  {
    "id": "2009-2010-期末B-判断-40",
    "paper": "华北电力大学 2009-2010 学年第一学期期末试卷(B)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "不对称故障与零序分量",
    "stem": "不对称短路故障中一定存在零序分量。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "两相短路属于典型的不对称故障，但因接地回路未闭合，短路电流中只有正序分量和负序分量，不存在零序分量。",
    "verified": true,
    "conflict": "",
    "source": "期末",
    "year": "2009-2010",
    "chapter": 8
  },
  {
    "id": "2026-831-不定项-01",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "发电机端升压变压器变比判定",
    "stem": "四台变压器的额定变比分别如下，其中（）是升压变压器。",
    "options": [
      {
        "label": "A",
        "text": "121/10.5kV"
      },
      {
        "label": "B",
        "text": "220/11kV"
      },
      {
        "label": "C",
        "text": "500/121kV"
      },
      {
        "label": "D",
        "text": "110/11kV"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "发电机端相连升压变压器，一次侧绕组相当于负荷，额定电压等于发电机额定电压 $U_{1\\text{N}}=U_{\\text{GN}}$；二次侧绕组相当于电源，比电网额定电压高 10%，即 $U_{2\\text{N}}=1.1U_{\\text{N}}$（如 121/10.5kV 升压变）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 2
  },
  {
    "id": "2026-831-不定项-02",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "大电网互联优缺点评估",
    "stem": "电力系统互联运行的优点是（）。",
    "options": [
      {
        "label": "A",
        "text": "减小备用容量"
      },
      {
        "label": "B",
        "text": "减小短路电流"
      },
      {
        "label": "C",
        "text": "提高负荷功率因数"
      },
      {
        "label": "D",
        "text": "提高供电可靠性"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "大电网互联可实现水火互济、错峰调节，提高供电可靠性与运行经济性；但网络结构紧密也带来了局部故障易引发跨区域级联跳闸的大面积停电风险。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 1
  },
  {
    "id": "2026-831-不定项-03",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "节点电压波动物理机理",
    "stem": "下列操作可能会引起电力系统电压波动的是（）",
    "options": [
      {
        "label": "A",
        "text": "切除某节点的并联电容器"
      },
      {
        "label": "B",
        "text": "某台发电机退出运行"
      },
      {
        "label": "C",
        "text": "变压器中性点有直接接地改为不接地"
      },
      {
        "label": "D",
        "text": "切除一条正在运行的线路"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "answerPending": false,
    "explanation": "冲击性负荷（如电弧炉、轧钢机）剧烈吞吐无功功率，引起动态电压降落波动与闪变。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 1
  },
  {
    "id": "2026-831-不定项-04",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "标幺制基准量选定与派生",
    "stem": "采用标幺值进行计算时，通常先选定（）。",
    "options": [
      {
        "label": "A",
        "text": "三相功率基准值"
      },
      {
        "label": "B",
        "text": "线电压基准值"
      },
      {
        "label": "C",
        "text": "线电流基准值"
      },
      {
        "label": "D",
        "text": "阻抗基准值"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerPending": false,
    "explanation": "三相系统中通常先独立选定基准容量 $S_{\\text{B}}$ 与基准线电压 $U_{\\text{B}}$，其余基准电流 $I_{\\text{B}}$、基准阻抗 $Z_{\\text{B}}$ 等依电路关系派生。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 2
  },
  {
    "id": "2026-831-不定项-05",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "超高压线路容升效应条件",
    "stem": "下列哪些情况可能会造成输电线路末端电压高于始端电压（）。",
    "options": [
      {
        "label": "A",
        "text": "远距离输电线轻载运行"
      },
      {
        "label": "B",
        "text": "末端并联较大容量的电抗器"
      },
      {
        "label": "C",
        "text": "末端并联较大容量的电容器"
      },
      {
        "label": "D",
        "text": "末端负荷功率因数降低"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerPending": false,
    "explanation": "空载或轻载状态下，长距离超高压输电线路对地电纳充电电流在线路电抗上产生负电压降落，使得末端电压高于始端。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 3
  },
  {
    "id": "2026-831-不定项-06",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "平衡节点（Slack Bus）双重作用",
    "stem": "电力系统潮流的计算机算法中，平衡节点的作用是（）。",
    "options": [
      {
        "label": "A",
        "text": "平衡全网功率"
      },
      {
        "label": "B",
        "text": "提高电网运行效率"
      },
      {
        "label": "C",
        "text": "给定电压参考相位"
      },
      {
        "label": "D",
        "text": "减少迭代次数"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerPending": false,
    "explanation": "平衡节点在潮流计算中承担双重职能：一是承担全网不平衡功率（弥补未知的网损），二是在相位上作为参考节点（给定相位 $\\delta=0^\\circ$）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 4
  },
  {
    "id": "2026-831-不定项-07",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "节点导纳矩阵物理性质",
    "stem": "对于大型电力系统节点导纳矩阵，下列说法正确的是（）。",
    "options": [
      {
        "label": "A",
        "text": "其中元素一般为复数"
      },
      {
        "label": "B",
        "text": "含有大量零元素"
      },
      {
        "label": "C",
        "text": "每行元素之和为零"
      },
      {
        "label": "D",
        "text": "并联支路只影响对角元素"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "复数矩阵、高度稀疏性、对称互导纳、对角元为自导纳（连接该节点支路导纳与对地导纳之和）、非对角元为互导纳负值。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 4
  },
  {
    "id": "2026-831-不定项-08",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "无限大电源供电三相短路周期分量",
    "stem": "无穷大电源供电系统发生三相短路时，短路电流周期分量（）。",
    "options": [
      {
        "label": "A",
        "text": "幅值不衰减"
      },
      {
        "label": "B",
        "text": "幅值按指数规律衰减"
      },
      {
        "label": "C",
        "text": "幅值大小与电源电压有关"
      },
      {
        "label": "D",
        "text": "幅值大小和合闸初相角有关"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "无限大容量电源等效内阻抗为零、端电压与频率恒定，因此交流周期分量幅值在暂态全程保持恒定不衰减。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 7
  },
  {
    "id": "2026-831-不定项-09",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "单相接地零序电流决定因素",
    "stem": "电力系统发生单相接地短路时，影响零序电流（有名值）大小的因素有（）。",
    "options": [
      {
        "label": "A",
        "text": "电力系统网络拓扑"
      },
      {
        "label": "B",
        "text": "电力系统中性点接地方式"
      },
      {
        "label": "C",
        "text": "短路前瞬间短路点的电压"
      },
      {
        "label": "D",
        "text": "电力系统负荷水平高低"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "单相接地短路时零序电流 $I_{\\text{a0}}=\\frac{\\dot{E}_{\\text{a}}}{Z_1+Z_2+Z_0}$，取决于短路点位置、电源电势以及全网零序拓扑和变压器中性点接地方式。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 8
  },
  {
    "id": "2026-831-不定项-10",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "BC两相短路边界条件与序网",
    "stem": "空载电力系统发生 b、c 相非金属短路，属于该短路形式的边界条件有（）。",
    "options": [
      {
        "label": "A",
        "text": "a 相电流为零"
      },
      {
        "label": "B",
        "text": "b 相电压与 c 相电压大小相等、方向相反"
      },
      {
        "label": "C",
        "text": "a 相电压为零"
      },
      {
        "label": "D",
        "text": "b 相电流与 c 相电流大小相等、方向相反"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "故障相边界条件 $I_{\\text{a}}=0, I_{\\text{b}}=-I_{\\text{c}}, U_{\\text{b}}=U_{\\text{c}}$；复合序网形式为正序网络与负序网络在故障点处并联，零序网络断开。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 8
  },
  {
    "id": "2026-831-判断-01",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "分裂导线抑制电晕与减小电抗",
    "stem": "架空输电线路采用分裂导线可以减小电晕损耗。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "采用分裂导线增大了导线的等值半径，降低表面电场强度，从而有效抑制电晕损耗并减小线路电抗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 2
  },
  {
    "id": "2026-831-判断-02",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "环网潮流分布影响因素",
    "stem": "支路电阻与电抗改变都会影响环形网络的潮流分布。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "在闭环网络中，自然潮流分布主要取决于支路复数阻抗（电阻与电抗），两者改变均会影响闭环潮流的分流。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 2
  },
  {
    "id": "2026-831-判断-03",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电压降落与电压损耗概念边界",
    "stem": "线路上的电压降落指的是首末端电压的数值差。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "电压降落是指线路首末两端电压的【相量差】$\\mathrm{d}\\dot{U}=\\dot{U}_1-\\dot{U}_2$；电压损耗是指首末两端电压【模值代数差】$U_1-U_2$。概念本质不同，不可混淆。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 3
  },
  {
    "id": "2026-831-判断-04",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "满载发电机组参与一次调频限制",
    "stem": "电力系统中的所有发电机组都将参与频率的一次调整。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "满载发电机组已达到额定功率上限，原动机蒸门开度受限，无法继续增发有功出力，存在调频截断效应，不可参与增出力的调频。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 5
  },
  {
    "id": "2026-831-判断-05",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "牛拉法与PQ分解法精度一致性",
    "stem": "在收敛相同的情况下，牛-拉法和 PQ 分解法潮流计算的精度相同。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "P-Q分解法仅简化了解算雅可比矩阵的迭代路径，但收敛判据（功率残差限值）未变，因此收敛时两者的潮流计算精度完全相同。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 4
  },
  {
    "id": "2026-831-判断-06",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "有功与无功最优分配准则差异",
    "stem": "电力系统有功功率和无功功率的最优分配准则都是等网损微增率。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "有功功率最优分配准则是【等耗量微增率准则】；无功功率最优分布的目标函数是使系统有功网损达到最小。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 5
  },
  {
    "id": "2026-831-判断-07",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "同步发电机有功与无功双重特性",
    "stem": "发电机既是电力系统的有功电源也是无功电源。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "同步发电机消耗原动机机械能输出有功功率，同时通过调节励磁电流既可过励发出感性无功，也可欠激吸收感性无功。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 6
  },
  {
    "id": "2026-831-判断-08",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "架空地线对零序阻抗的影响",
    "stem": "架空输电线的零序阻抗与是否敷设架空地线有关。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "敷设良导体架空地线时，地线与导线间的互感抵消部分主磁通，对零序电抗产生明显的去磁压制作用，使其显著降低。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 8
  },
  {
    "id": "2026-831-判断-09",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "短路冲击电流出现时间",
    "stem": "对于 50Hz 电力系统，短路冲击电流在短路后半个周期也就是 10 毫秒时出现。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "对于 50Hz 工频系统，周期 T=0.02s，短路冲击电流在最恶劣条件下于短路后半个周期即 t=0.01s (10ms) 时达到峰值。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 7
  },
  {
    "id": "2026-831-判断-10",
    "paper": "华北电力大学 2026 年硕士生入学考试初试试题 (科目代码：831)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "复合序网零序与正序阻抗对比",
    "stem": "如果变压器中性点经阻抗接地，则复合序网中零序阻抗一定大于正序阻抗。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "变压器中性点经阻抗接地虽增加了零序阻抗，但零序总阻抗取决于全网零序拓扑与接地变压器数量，不能绝对判定零序阻抗一定大于正序阻抗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2026",
    "chapter": 8
  },
  {
    "id": "2025-813-不定项-01",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "现代电力系统说法错误的是",
    "stem": "关于现代电力系统，以下说法错误的是（）。",
    "options": [
      {
        "label": "A",
        "text": "电源包括火电、水电、核电等常规电源以及风电、光伏等新能源"
      },
      {
        "label": "B",
        "text": "输电方式包括直流输电和交流输电"
      },
      {
        "label": "C",
        "text": "电动汽车充电负荷不断增加"
      },
      {
        "label": "D",
        "text": "电力系统主体是以异步机为主的机械电磁系统"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "现代电力系统主体是以**同步发电机**为主的交流电磁系统，原题“以异步机为主”错误。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 1
  },
  {
    "id": "2025-813-不定项-02",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "影响架空线路电抗大小的因素",
    "stem": "影响架空线路电抗大小的因素是（）。",
    "options": [
      {
        "label": "A",
        "text": "系统频率"
      },
      {
        "label": "B",
        "text": "线路相间距离"
      },
      {
        "label": "C",
        "text": "导线半径"
      },
      {
        "label": "D",
        "text": "导线材料"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "线路电抗 $x_1 = 0.1445\\lg\\frac{D_m}{r} + 0.0157$，取决于系统频率 $f$、几何均距 $D_m$ 和导线半径 $r$，与材质无关。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 2
  },
  {
    "id": "2025-813-不定项-03",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "可能会产生循环功率的情形",
    "stem": "以下可能会产生循环功率的有（）。",
    "options": [
      {
        "label": "A",
        "text": "环网串联加压器"
      },
      {
        "label": "B",
        "text": "两端供电网电压不相等"
      },
      {
        "label": "C",
        "text": "电磁环网变比匹配"
      },
      {
        "label": "D",
        "text": "双回路辐射网"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerPending": false,
    "explanation": "两端供电网首末端电压不相等会产生循环功率；环网中加装串联加压器可强制产生循环功率。电磁环网变比不匹配才产生循环功率。",
    "verified": true,
    "conflict": "【核心考点与辨析】两端供电网首末端电压不相等产生循环功率（A对）；闭式环网加装串联加压器可强制产生循环功率（B对）。电磁环网中只有当闭环内变压器变比不匹配时才会产生循环功率，若变比匹配则不产生，故标准答案为 AB。",
    "source": "考研",
    "year": "2025",
    "chapter": 3
  },
  {
    "id": "2025-813-不定项-04",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "关于 PQ 分解法正确的说法",
    "stem": "关于 PQ 分解法，正确的是（）。",
    "options": [
      {
        "label": "A",
        "text": "修正方程的简化并不影响 PQ 分解法的精确度"
      },
      {
        "label": "B",
        "text": "修正方程系数矩阵B. '、B. '' 并不总直接由节点导纳矩阵虚部组成"
      },
      {
        "label": "C",
        "text": "PQ 分解法迭代次数比牛顿-拉夫逊法多，但计算速度比牛顿-拉夫逊法快"
      },
      {
        "label": "D",
        "text": "系数矩阵B. '、B. '' 是常数矩阵"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "修正方程解耦简化**不损失收敛精度**；$B'$、$B''$ 为常数矩阵且去掉了电容与电阻影响；单步计算快但迭代次数多于牛拉法。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 1
  },
  {
    "id": "2025-813-不定项-05",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "枯水期选择较合适的调频厂",
    "stem": "枯水期中选择以下哪些机组作为调频厂较合适（）。",
    "options": [
      {
        "label": "A",
        "text": "大容量水电厂"
      },
      {
        "label": "B",
        "text": "中温中压火电厂"
      },
      {
        "label": "C",
        "text": "抽水蓄能电厂"
      },
      {
        "label": "D",
        "text": "核电厂"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "枯水期水电需限制用水防弃水，核电带基荷；应选择具备调节能力的中温中压火电厂或抽水蓄能电厂调频。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 5
  },
  {
    "id": "2025-813-不定项-06",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "局部电压过高可采取的调压措施",
    "stem": "无功充裕的电力系统，局部电压过高，可以采取的调压措施有（）。",
    "options": [
      {
        "label": "A",
        "text": "并联电抗器退出"
      },
      {
        "label": "B",
        "text": "并联电容器退出"
      },
      {
        "label": "C",
        "text": "调节变压器分接头"
      },
      {
        "label": "D",
        "text": "发电机进相运行"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "电压偏高需吸收感性无功或减小容性无功：切除并联电容器、发电机进相运行、调节变压器分接头。并联电抗器应投入而非退出。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 6
  },
  {
    "id": "2025-813-不定项-07",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "无限大电源三相短路电流包含分量",
    "stem": "无限大电源供电系统发生三相短路时，短路电流包含（）。",
    "options": [
      {
        "label": "A",
        "text": "工频周期分量"
      },
      {
        "label": "B",
        "text": "直流分量"
      },
      {
        "label": "C",
        "text": "100Hz 电流分量"
      },
      {
        "label": "D",
        "text": "150Hz 电流分量"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerPending": false,
    "explanation": "三相短路电流由工频强迫周期分量 $i_p$ 与按时间常数 $T_a$ 指数衰减的直流非周期分量 $i_a$ 组成。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 7
  },
  {
    "id": "2025-813-不定项-08",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "属于电力系统横向故障的是",
    "stem": "属于电力系统横向故障的是（）。",
    "options": [
      {
        "label": "A",
        "text": "三相短路"
      },
      {
        "label": "B",
        "text": "两相短路"
      },
      {
        "label": "C",
        "text": "两相断线"
      },
      {
        "label": "D",
        "text": "单相断线"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerPending": false,
    "explanation": "相间短路或相对地短路（三相短路、两相短路）属于横向故障；断线属于纵向故障。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 8
  },
  {
    "id": "2025-813-不定项-09",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "关于对称分量法正确的说法",
    "stem": "关于对称分量法，下列说法正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "适用于非线性电路"
      },
      {
        "label": "B",
        "text": "各序网可以单独进行计算"
      },
      {
        "label": "C",
        "text": "各相零序电流相位相同"
      },
      {
        "label": "D",
        "text": "负序网参数对正序电流无影响"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "对称分量法基于叠加定理仅适用于**线性电路**；三相对称网中各序网独立；零序分量三相同相位；复合序网中负序阻抗会影响正序电流。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 8
  },
  {
    "id": "2025-813-不定项-10",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "C 相金属性接地短路边界条件",
    "stem": "电力系统发生",
    "options": [
      {
        "label": "A",
        "text": "C. 相金属接地短路，属于该短路形式边界条件是（）。 A.A. 相电压为零"
      },
      {
        "label": "B",
        "text": "B. 相电压为零"
      },
      {
        "label": "C",
        "text": "A. 相故障电流为零"
      },
      {
        "label": "D",
        "text": "B. 相故障电流为零"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "C 相单相接地边界条件为：故障相对地电压 $U_c = 0$，非故障相电流为零（$I_a = 0, I_b = 0$）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 1
  },
  {
    "id": "2025-813-判断-01",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "我国最高交流/直流电压等级",
    "stem": "目前我国电网交流最高电压等级为 $1000 \\mathrm{kV}$ ，直流最高电压等级为 $\\pm 800 \\mathrm{kV}$ 。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "我国特高压直流最高电压等级已达 **$\\pm 1100\\text{kV}$**（如昌吉—古泉工程），并非 $\\pm 800\\text{kV}$。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 1
  },
  {
    "id": "2025-813-判断-02",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "发电机高于额定功率因数运行限制",
    "stem": "发电机高于额定功率因数运行时，其运行范围取决于空载电动势。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "较高功率因数（过励侧）运行时限制来自**原动机额定功率（有功极限）**或定子电流，非空载电动势。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 6
  },
  {
    "id": "2025-813-判断-03",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "线路首末端有功与无功功率大小比较",
    "stem": "线路首端输入的有功功率总大于末端输出的有功功率，但首端输入的无功功率却未必大于末端输出的无功功率。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "电阻发热致有功必有损耗（$P_1 > P_2$）；而轻载线路充电电容发出的无功大于电抗损耗，首端无功可能小于末端。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 5
  },
  {
    "id": "2025-813-判断-04",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "阻抗矩阵与导纳矩阵稀疏性",
    "stem": "节点阻抗矩阵和节点导纳矩阵都是对称的稀疏矩阵。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "节点导纳矩阵 $Y$ 是**稀疏矩阵**，但节点阻抗矩阵 $Z = Y^{-1}$ 为**满矩阵**（密集矩阵）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 4
  },
  {
    "id": "2025-813-判断-05",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "洪水季节应增大水煤换算系数",
    "stem": "在洪水季节，为充分利用水利资源应该增大水煤换算系数，从而给水电厂分配较大负荷。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "丰水期为鼓励水电多发少弃水，应**减小水煤换算系数**（降低水电等效微增耗量），优先给水电分配负荷。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 5
  },
  {
    "id": "2025-813-判断-06",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "无功电源优化分布准则与目标",
    "stem": "电力系统无功功率电源优化分布的准则是最优网损微增率准则，其目的是降低网络中的有功功率损耗。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "无功优化的目标是使全网有功损耗 $\\Delta P_{loss}$ 最小，对应优化准则为**最优网损微增率准则**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 5
  },
  {
    "id": "2025-813-判断-07",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "A相与B相负序电流相位差与接线组别",
    "stem": "电力系统发生不对称短路时，A相负序电流滞后于B相负序电流的相位与变压器接线组别无关。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "负序三相相对相位关系固定为 $I_{a(2)}$ 超前 $I_{b(2)}$ $120^\\circ$，变压器接线组别仅引起三相整体相位平移，不改变相间相位差。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 8
  },
  {
    "id": "2025-813-判断-08",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "\\(Y_0/\\Delta-11\\) 变压器零序电流流通",
    "stem": "对于Y0/△-11接线变压器，零序短路电流可以在星形绕组中流通，但不能在三角形绕组中流通。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "$Y_0$ 侧零序电流可在 $Y_0$ 绕组流通，并经磁耦合在 $\\Delta$ 绕组**内部感应出零序环流**闭合流通（仅不能流出 $\\Delta$ 侧外电路）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 7
  },
  {
    "id": "2025-813-判断-09",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "架空避雷线对负序电抗的影响",
    "stem": "架空输电线路有无避雷线对其负序电抗无影响。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "避雷线仅与零序回路磁耦合（减小零序电抗）；正序和负序电流三相对称，在地线中感应电流为零，无影响。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 2
  },
  {
    "id": "2025-813-判断-10",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "50Hz系统短路冲击电流出现时间",
    "stem": "对于 50Hz 电力系统，短路冲击电流将在短路后 0.01 秒出现。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "50Hz 工频周期为 20ms，短路发生半个周期（10ms = 0.01s）时非周期与周期分量同相叠加达到最大冲击值。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 7
  },
  {
    "id": "2025-815-多选-01",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "衡量电能质量的指标",
    "stem": "衡量电能质量指标包括（）。",
    "options": [
      {
        "label": "A",
        "text": "电压"
      },
      {
        "label": "B",
        "text": "频率"
      },
      {
        "label": "C",
        "text": "波形"
      },
      {
        "label": "D",
        "text": "网损"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "电能质量三大指标为：**电压偏移、频率偏移、波形畸变率**。网损属于经济运行指标。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 1
  },
  {
    "id": "2025-815-多选-02",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "属于降压变压器的是",
    "stem": "下列变比的变压器中,属于降压变压器的是(   )。",
    "options": [
      {
        "label": "A",
        "text": "110kV/11kV"
      },
      {
        "label": "B",
        "text": "220kV/121kV/10.5kV"
      },
      {
        "label": "C",
        "text": "121kV/10.5kV"
      },
      {
        "label": "D",
        "text": "242kV/15.75kV"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerPending": false,
    "explanation": "降压变压器高压侧额定电压等于电网标称电压（110kV、220kV）；升压变一次侧与发电机相连（10.5kV、15.75kV），二次侧比电网高10%（121kV、242kV）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 2
  },
  {
    "id": "2025-815-多选-03",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "200节点导纳矩阵的特点",
    "stem": "当电网节点数为 200 时, 下列哪些矩阵特点是节点导纳矩阵的特点 ( )。",
    "options": [
      {
        "label": "A",
        "text": "稀疏矩阵"
      },
      {
        "label": "B",
        "text": "对称矩阵"
      },
      {
        "label": "C",
        "text": "满矩阵"
      },
      {
        "label": "D",
        "text": "200 阶方阵"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "answerPending": false,
    "explanation": "200 节点导纳矩阵为 **200 阶对称方阵**，且具有高度**稀疏性**（非满矩阵）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 4
  },
  {
    "id": "2025-815-多选-04",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "主调频厂的选择原则",
    "stem": "主调频厂的选择原则有（）。",
    "options": [
      {
        "label": "A",
        "text": "足够的调整容量"
      },
      {
        "label": "B",
        "text": "较快的调整速度"
      },
      {
        "label": "C",
        "text": "调整范围内的经济性较好"
      },
      {
        "label": "D",
        "text": "远离负荷中心"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "调频厂需具备**足够的调整容量、较快的调整速度、较好的调整经济性**，且宜靠近负荷中心。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 5
  },
  {
    "id": "2025-815-多选-05",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "潮流计算中平衡节点待求量",
    "stem": "电力系统潮流计算中, 平衡节点待求的是 ( )。",
    "options": [
      {
        "label": "A",
        "text": "电压幅值"
      },
      {
        "label": "B",
        "text": "电压相位"
      },
      {
        "label": "C",
        "text": "有功功率"
      },
      {
        "label": "D",
        "text": "无功功率"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "平衡节点已知电压幅值 $U$ 和相角 $\\delta=0^\\circ$，待求注入**有功功率 $P$ 和无功功率 $Q$**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 4
  },
  {
    "id": "2025-815-多选-06",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "年用电量 W 除以最大负荷 Pmax",
    "stem": "一年中负荷消耗的电能 W 除以一年中的最大负荷 Pmax 称为（）。",
    "options": [
      {
        "label": "A",
        "text": "年负荷率"
      },
      {
        "label": "B",
        "text": "最大负荷损耗时间"
      },
      {
        "label": "C",
        "text": "功率因数"
      },
      {
        "label": "D",
        "text": "最大负荷利用小时数"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "公式定义 $T_{max} = \\frac{W}{P_{max}}$，即为**最大负荷利用小时数**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 1
  },
  {
    "id": "2025-815-多选-07",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "电力系统中的无功电源",
    "stem": "电力系统中的无功电源包括（）。",
    "options": [
      {
        "label": "A",
        "text": "发电机"
      },
      {
        "label": "B",
        "text": "并联电容器"
      },
      {
        "label": "C",
        "text": "串联电容器"
      },
      {
        "label": "D",
        "text": "串联电抗器"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerPending": false,
    "explanation": "**发电机、并联电容器**（及调相机、SVG）为无功电源；串联电容器用于补偿线路电抗，不直接供给无功。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 6
  },
  {
    "id": "2025-815-多选-08",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "短路电流周期分量有效值相关因素",
    "stem": "无限大电源供电的系统发生三相短路，短路电流中周期分量有效值大小与（）有关",
    "options": [
      {
        "label": "A",
        "text": "回路阻抗"
      },
      {
        "label": "B",
        "text": "短路初相角"
      },
      {
        "label": "C",
        "text": "电源频率"
      },
      {
        "label": "D",
        "text": "电源电压"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "周期分量有效值 $I = \\frac{E}{\\sqrt{R^2+(\\omega L)^2}}$，取决于**电源电压、回路阻抗与电源频率**。初相角仅影响非周期分量。",
    "verified": true,
    "conflict": "【考点辨析】周期分量稳态有效值 I = E / sqrt(R^2+(wL)^2)，取决于电源电动势、回路总阻抗与电源频率（ACD对）。合闸初相角仅决定直流非周期分量的初始幅值，与周期分量有效值无关。",
    "source": "考研",
    "year": "2025",
    "chapter": 7
  },
  {
    "id": "2025-815-多选-09",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "正序电抗与负序电抗相等的元件",
    "stem": "下列电力系统元件中，正序电抗与负序电抗相等的有（）。",
    "options": [
      {
        "label": "A",
        "text": "发电机"
      },
      {
        "label": "B",
        "text": "变压器"
      },
      {
        "label": "C",
        "text": "电抗器"
      },
      {
        "label": "D",
        "text": "有架空地线的输电线"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "静止元件（**变压器、电抗器、输电线路**）$X_1 = X_2$；旋转元件（同步发电机）$X_1 \\neq X_2$。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 8
  },
  {
    "id": "2025-815-多选-10",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "产生零序电流的必要条件",
    "stem": "电力系统发生不对称短路时, 产生零序电流的必要条件有 ( )。",
    "options": [
      {
        "label": "A",
        "text": "必须是接地短路"
      },
      {
        "label": "B",
        "text": "输电线路必须有避雷线"
      },
      {
        "label": "C",
        "text": "变压器中性点必须接地"
      },
      {
        "label": "D",
        "text": "发电机必须处于进相运行状态"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "answerPending": false,
    "explanation": "产生零序电流需满足：① **故障接地**（单相接地或两相接地）；② **变压器中性点直接接地**提供零序流通回路。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 8
  },
  {
    "id": "2025-815-多选-11",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "b、c 两相短路边界条件",
    "stem": "空载电力系统发生 B、C. 相金属性短路，属于该短路形式边界条件的是（）。",
    "options": [
      {
        "label": "A",
        "text": "- **B.**"
      },
      {
        "label": "C",
        "text": "相电压为零 B.A. 相故障电流为零 C. B、C. 相电压相等"
      },
      {
        "label": "D",
        "text": "A. 相电压为零"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "answerPending": false,
    "explanation": "b、c 两相短路边界条件为：$I_a = 0$（A对）、$U_b = U_c$（B对）、$I_b = -I_c$（D对）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 8
  },
  {
    "id": "2025-815-多选-12",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "概念包含范围关系正确的",
    "stem": "以下几个概念的包含范围关系正确的是（）。",
    "options": [
      {
        "label": "A",
        "text": "动力系统>电力系统>发电机组"
      },
      {
        "label": "B",
        "text": "电力系统>电网>发电机组"
      },
      {
        "label": "C",
        "text": "动力系统>电网>负荷（用户）"
      },
      {
        "label": "D",
        "text": "动力系统>电力系统>电网"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "answerPending": false,
    "explanation": "包含层次为：**动力系统 > 电力系统 > 电力网**。动力系统包含热力/水力部分，电网仅指变配电与输电线路。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 1
  },
  {
    "id": "2025-815-多选-13",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "输电线路发生电晕的影响因素",
    "stem": "下列哪些是输电线路发生电晕的影响因素（）。",
    "options": [
      {
        "label": "A",
        "text": "导线的粗细"
      },
      {
        "label": "B",
        "text": "气象状况"
      },
      {
        "label": "C",
        "text": "导线的粗糙度"
      },
      {
        "label": "D",
        "text": "空气密度"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "电晕临界电压取决于**导线半径（粗细）、表面粗糙度、空气相对密度（海拔）及气象状况**（雨雪雾）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 2
  },
  {
    "id": "2025-815-多选-14",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "我国存在的中性点运行方式",
    "stem": "以下哪些是我国存在的中性点运行方式（）。",
    "options": [
      {
        "label": "A",
        "text": "中性点直接接地"
      },
      {
        "label": "B",
        "text": "中性点不接地"
      },
      {
        "label": "C",
        "text": "中性点经消弧线圈接地"
      },
      {
        "label": "D",
        "text": "中性点经小电阻接地"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "包括：110kV及以上**直接接地**；35kV及以下**不接地/经消弧线圈接地**；配网及城网**经小电阻接地**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 1
  },
  {
    "id": "2025-815-多选-15",
    "paper": "华北电力大学 2025 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "当正负序阻抗相等时短路电流比较",
    "stem": "某空载电力系统中同一位置发生不同的金属性短路故障，当系统正序总阻抗等于负序总阻抗时，下列说法正确的是（）。",
    "options": [
      {
        "label": "A",
        "text": "三相短路的短路电流大于两相短路的短路电流"
      },
      {
        "label": "B",
        "text": "三相短路的短路电流大于单相短路的短路电流"
      },
      {
        "label": "C",
        "text": "三相短路的短路电流大于两相短路接地的短路电流"
      },
      {
        "label": "D",
        "text": "单相短路的短路电流大于两相短路的短路电流"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "answerPending": false,
    "explanation": "当 $X_1 = X_2$ 时，$I^{(3)} = \\frac{E}{X_1}$，$I^{(2)} = \\frac{\\sqrt{3}}{2}I^{(3)} \\approx 0.866I^{(3)}$，故 $I^{(3)} > I^{(2)}$（A对）；且无论 $X_0$ 如何，$I^{(1)} > I^{(2)}$（D对）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2025",
    "chapter": 8
  },
  {
    "id": "2024-814-选择-01",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电力系统的调压措施包括",
    "stem": "电力系统的调压措施包括（ ）。",
    "options": [
      {
        "label": "A",
        "text": "并联电抗器"
      },
      {
        "label": "B",
        "text": "输电线采用串联电容补偿"
      },
      {
        "label": "C",
        "text": "调节发电机励磁电流"
      },
      {
        "label": "D",
        "text": "中性点经电抗接地"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "调节发电机励磁（源）、并联电抗器/电容器（无功补偿）、串联电容（减小电抗降压降）均属调压手段；中性点经电抗接地用于限制接地电流。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 6
  },
  {
    "id": "2024-814-选择-02",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "系统频率降低的原因可能是",
    "stem": "如果电力系统频率降低, 则可能是 ( )。",
    "options": [
      {
        "label": "A",
        "text": "发电机切除"
      },
      {
        "label": "B",
        "text": "并联电容器切除"
      },
      {
        "label": "C",
        "text": "某一线路切除"
      },
      {
        "label": "D",
        "text": "有大的负荷投入"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "answerPending": false,
    "explanation": "发电机切除导致有功供给减少（AD），大负荷投入致有功需求增加，均使 $P_G < P_L$ 引起系统频率下降。",
    "verified": true,
    "conflict": "【考点辨析】系统频率下降根本原因为有功电源供给小于有功负荷需求（PG < PL）。发电机跳闸切除（电源减小）或大容量负荷投入（负荷增加）均会导致此现象。",
    "source": "考研",
    "year": "2024",
    "chapter": 5
  },
  {
    "id": "2024-814-选择-03",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "输电线末端电压高于始端的情况",
    "stem": "下列哪种情况下输电线的末端电压将可能高于始端",
    "options": [
      {
        "label": "A",
        "text": "末端并联电抗器"
      },
      {
        "label": "B",
        "text": "末端并联电容器"
      },
      {
        "label": "C",
        "text": "线路轻载"
      },
      {
        "label": "D",
        "text": "线路重载"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "线路轻载/空载时的皮尔逊容升效应（C），以及末端投入并联电容器发出容性无功（B），均可能导致末端电压高于始端电压。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 3
  },
  {
    "id": "2024-814-选择-04",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "关于节点导纳矩阵正确的是",
    "stem": "对于电力系统节点导纳矩阵，下列说法正确的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "对角元素肯定不为零"
      },
      {
        "label": "B",
        "text": "非对角元素肯定为零"
      },
      {
        "label": "C",
        "text": "一般为对称矩阵"
      },
      {
        "label": "D",
        "text": "矩阵元素一般为复数"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "自导纳元素 $Y_{ii}$ 必不为零（A）；网络对称时矩阵对称（C）；元素由电导与电纳组成复数（D）。非对角元仅相连节点不为零。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 4
  },
  {
    "id": "2024-814-选择-05",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "单位长度电缆线路与架空线对比",
    "stem": "与同电压等级的架空输电线路相比, 一般而言, 单位长度下的电缆线路 ( )。",
    "options": [
      {
        "label": "A",
        "text": "对地电容大"
      },
      {
        "label": "B",
        "text": "电抗大"
      },
      {
        "label": "C",
        "text": "造价高"
      },
      {
        "label": "D",
        "text": "故障概率大"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "answerPending": false,
    "explanation": "电缆相间及对地距离小且绝缘介质介电常数大，故对地电容大（A）、电抗小、造价高（C）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 1
  },
  {
    "id": "2024-814-选择-06",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "关于牛-拉法潮流计算说法正确",
    "stem": "对于潮流计算的牛-拉法, 下列说法正确的是 ( )。",
    "options": [
      {
        "label": "A",
        "text": "初值选取会影响迭代次数"
      },
      {
        "label": "B",
        "text": "采用直角坐标比采用极坐标更容易收敛"
      },
      {
        "label": "C",
        "text": "比 PQ 分解法计算速度快"
      },
      {
        "label": "D",
        "text": "可以不设置平衡节点"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "牛-拉法具有二次收敛特性，迭代初值的选择直接影响迭代收敛性与收敛次数（A）。单步计算速度快于高斯法但慢于 PQ 分解法。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 4
  },
  {
    "id": "2024-814-选择-07",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "属于电力系统纵向故障的是",
    "stem": "属于电力系统纵向故障的是( )。",
    "options": [
      {
        "label": "A",
        "text": "三相短路"
      },
      {
        "label": "B",
        "text": "两相短路"
      },
      {
        "label": "C",
        "text": "两相断线"
      },
      {
        "label": "D",
        "text": "单相断线"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "短路故障（单相接地、两相短路等）发生在相间或相对地，属横向故障；断线故障（单相断线、两相断线）发生在回路纵向，属纵向故障。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 8
  },
  {
    "id": "2024-814-选择-08",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "无限大电源短路非周期分量特点",
    "stem": "无限大电源供电系统发生三相短路时, 短路电流非周期分量 ( )。",
    "options": [
      {
        "label": "A",
        "text": "三相相同"
      },
      {
        "label": "B",
        "text": "三相不同"
      },
      {
        "label": "C",
        "text": "不衰减"
      },
      {
        "label": "D",
        "text": "将衰减至零"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "answerPending": false,
    "explanation": "直流非周期分量按时间常数 $T_a$ 指数衰减至零（D）；且由于三相合闸初相角不同，非周期分量初始值三相不相等（B）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 7
  },
  {
    "id": "2024-814-选择-09",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "50Hz系统短路冲击电流出现时间",
    "stem": "对于 $50 \\mathrm{~Hz}$ 电力系统, 短路冲击电流在短路后的 ( ) 出现。",
    "options": [
      {
        "label": "A",
        "text": "0 秒"
      },
      {
        "label": "B",
        "text": "0.1 秒"
      },
      {
        "label": "C",
        "text": "0.01 秒"
      },
      {
        "label": "D",
        "text": "0.05 秒"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "50Hz 系统工频周期为 20ms，短路发生半个周期（10ms 即 **0.01s**）时，直流分量与周期分量同相叠加达到冲击峰值。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 7
  },
  {
    "id": "2024-814-选择-10",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "会增大系统短路电流的因素",
    "stem": "下列情况中，会增大电力系统短路电流的是（ ）。",
    "options": [
      {
        "label": "A",
        "text": "加强网架结构"
      },
      {
        "label": "B",
        "text": "增加系统装机容量"
      },
      {
        "label": "C",
        "text": "提高断路器的开断速度"
      },
      {
        "label": "D",
        "text": "输电线采用分裂导线"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "answerPending": false,
    "explanation": "加强网架结构减小等值阻抗（A）、增加装机容量减小电源内阻（B）、采用分裂导线减小线路电抗（D），均会使总阻抗减小致短路电流增大。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 7
  },
  {
    "id": "2024-814-判断-01",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "近似计算忽略电压降落纵分量",
    "stem": "近似计算中一般忽略电压降落的纵分量。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "电压降落 $\\Delta \\dot{U} = \\Delta U + j\\delta U$，高压网中 $\\delta U \\ll \\Delta U$，近似计算**忽略的是电压降落横分量 $\\delta U$**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 3
  },
  {
    "id": "2024-814-判断-02",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "220kV线路单位电抗高于110kV",
    "stem": "一般情况下 $220 \\mathrm{kV}$ 输电线的单位长度电抗比 $110 \\mathrm{kV}$ 输电线的要大。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "220kV 线路相间距离大于 110kV 线路，几何均距 $D_m$ 增大，故单位长度电抗 $x_1 = 0.1445\\lg\\frac{D_m}{r} + 0.0157$ 稍大。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 2
  },
  {
    "id": "2024-814-判断-03",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "变比 110kV/11kV 变压器为升压变",
    "stem": "如果一台变压器的变比为 $110 \\mathrm{kV} / 11 \\mathrm{kV}$ ，则这台变压器是升压变压器。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "一次侧接 110kV 电网，二次侧额定 11kV（电网标称 10kV 的 1.1 倍），属于**降压变压器**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 2
  },
  {
    "id": "2024-814-判断-04",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "架空地线使线路零序电抗变小",
    "stem": "有架空地线的输电线路每公里零序电抗要比没有架空地线的输电线路小。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "架空地线中感应的逆向零序电流起去磁作用，削弱磁链，使得有架空地线的线路零序电抗变小。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 2
  },
  {
    "id": "2024-814-判断-05",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "PQ节点已知P和Q待求U和相角",
    "stem": "已知节点注入的有功功率和无功功率，待求电压幅值和相位的节点为 PQ 节点。（",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "概念完全正确，PQ 节点已知注入有功 $P$ 和无功 $Q$，待求状态变量为电压幅值 $U$ 和相角 $\\delta$。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 5
  },
  {
    "id": "2024-814-判断-06",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "只传输无功功率时无有功损耗",
    "stem": "如果输电线上只传输无功功率，则不会产生有功损耗。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "只要线路有电阻 $R$，无功电流 $I_Q = \\frac{Q}{U}$ 流过就会产生 $I_Q^2 R$ 的有功功率损耗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 3
  },
  {
    "id": "2024-814-判断-07",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "中性点不接地单相接地中性点电压",
    "stem": "中性点不接地电力系统发生单相接地时，中性点电压为相电压。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "发生金属性接地时，故障相对地电压降为0，中性点对地电压升高为相电压 $\\frac{U_N}{\\sqrt{3}}$。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 1
  },
  {
    "id": "2024-814-判断-08",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "不对称断线分析适用对称分量法",
    "stem": "电力系统发生不对称断线时，也可以采用对称分量法进行分析。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "对称分量法是线性对称三相电路通用分析法，既适用于横向短路故障，也适用于纵向断线故障。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 8
  },
  {
    "id": "2024-814-判断-09",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "中性点接地系统三相接地有零序",
    "stem": "中性点直接接地电力系统发生三相接地短路时，将会出现零序电流。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "三相接地短路属于完全对称短路，只包含正序分量，负序与零序电流均为 0。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 8
  },
  {
    "id": "2024-814-判断-10",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "中性点接地只影响零序不影响正负序",
    "stem": "中性点接地与否，只影响零序电流，对正序和负序电流没有影响。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "复合序网中正、负、零序网串并联连接，零序阻抗改变会直接改变复合序网总阻抗，从而影响正序和负序电流。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 8
  },
  {
    "id": "2024-816-选择-01",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "220kV与110kV间降压变压器变比",
    "stem": "现考虑在 $220 \\mathrm{kV}$ 和 $110 \\mathrm{kV}$ 两个电压等级线路间使用两绕组变压器联络, 若为降压变压器, 则变比应为 ( )。",
    "options": [
      {
        "label": "A",
        "text": "$220 / 110$"
      },
      {
        "label": "B",
        "text": "$220 / 121$"
      },
      {
        "label": "C",
        "text": "$242 / 110$"
      },
      {
        "label": "D",
        "text": "$242 / 121$"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "降压变压器高压侧额定电压等于电网标称电压（220kV），低压侧额定电压高于电网标称 10%（121kV），故变比为 **220/121kV**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 2
  },
  {
    "id": "2024-816-选择-02",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "消弧线圈过补偿残余电流性质",
    "stem": "消弧线圈采用过补偿, 当系统发生单相接地时, 流经接地点电流为 ( )",
    "options": [
      {
        "label": "A",
        "text": "容性电流"
      },
      {
        "label": "B",
        "text": "感性电流"
      },
      {
        "label": "C",
        "text": "等于 0"
      },
      {
        "label": "D",
        "text": "电阻性电流"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "过补偿时消弧线圈感性电流大于线路对地容性电流，接地点的残余电流为**感性电流**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 1
  },
  {
    "id": "2024-816-选择-03",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "几何均距与线路电抗的关系",
    "stem": "架空输电线路的电抗与导线之间几何平均距离的关系为（ ）",
    "options": [
      {
        "label": "A",
        "text": "几何均距越大，电抗越大"
      },
      {
        "label": "B",
        "text": "几何均距越大，电抗越小"
      },
      {
        "label": "C",
        "text": "输电线路电抗与几何平均距离无关"
      },
      {
        "label": "D",
        "text": "改变导线之间的几何平均距离可以明显改变线路电抗"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "公式 $x_1 = 0.1445\\lg\\frac{D_m}{r} + 0.0157$，几何均距 $D_m$ 越大，线路单位电抗越大。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 2
  },
  {
    "id": "2024-816-选择-04",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "变压器电纳 BT 计算依据",
    "stem": "变压器的电纳参数 $B_{T}$ 由实验数据（）确定。",
    "options": [
      {
        "label": "A",
        "text": "$U_{k}\\%$"
      },
      {
        "label": "B",
        "text": "$I_{0}\\%$"
      },
      {
        "label": "C",
        "text": "$P_{0}$"
      },
      {
        "label": "D",
        "text": "$P_{k}$"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "变压器励磁电纳 $B_T = \\frac{I_0\\% S_N}{100 U_N^2}$，由空载试验中的**空载电流百分数 $I_0\\%$** 确定。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 2
  },
  {
    "id": "2024-816-选择-05",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "采用分裂导线的主要作用",
    "stem": "采用分裂导线可以实现（ ）。",
    "options": [
      {
        "label": "A",
        "text": "减小电抗"
      },
      {
        "label": "B",
        "text": "增大电阻"
      },
      {
        "label": "C",
        "text": "减小电纳"
      },
      {
        "label": "D",
        "text": "增大电抗"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "分裂导线相当于增大了导线等效半径 $r_{eq}$，主要作用是**减小线路电抗**和抑制电晕。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 2
  },
  {
    "id": "2024-816-选择-06",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "首末端电压相角与幅值决定功率流向",
    "stem": "如果高压输电线路首末端电压之间关系为 $\\delta_{1} > \\delta_{2}$ , $U_{1} < U_{2}$ , 在忽略线路电阻影响情况下, 下列正确的是 ( )。",
    "options": [
      {
        "label": "A",
        "text": "无功功率从首端流向末端, 有功功率从未端流向首端"
      },
      {
        "label": "B",
        "text": "有功功率和无功功率都从首端流向末端"
      },
      {
        "label": "C",
        "text": "有功功率从首端流向末端, 无功功率从末端流向首端"
      },
      {
        "label": "D",
        "text": "有功功率和无功功率都从末端流向首端"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "电压相角决定有功流向：$\\delta_1 > \\delta_2 \\implies P$ 从首端流向末端；幅值决定无功流向：$U_1 < U_2 \\implies Q$ 从末端流向首端。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 3
  },
  {
    "id": "2024-816-选择-07",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "两端电源电网初步潮流分析目的",
    "stem": "两端电源电网初步潮流计算分析的目的是求取（ ）。",
    "options": [
      {
        "label": "A",
        "text": "有功分点"
      },
      {
        "label": "B",
        "text": "无功分点"
      },
      {
        "label": "C",
        "text": "电压损耗"
      },
      {
        "label": "D",
        "text": "功率损耗"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "初步潮流计算忽略功率损耗，主要目的是求取网络中的**有功分点**，以便将闭式网解拆为开式网计算。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 4
  },
  {
    "id": "2024-816-选择-08",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "两升压变压器变比不同并联运行",
    "stem": "如下图所示, 两个容量相同, 短路电压比相等的升压变压器 $T_{1}$ 和 $T_{2}$ 并联运行, 所带负荷为感性负荷, 如果 $k_{1} > k_{2} > 1$ , 则下列正确的是 ( )。",
    "options": [
      {
        "label": "A",
        "text": "循环功率为顺时针，且 $T_{1}$ 视在功率大于 $T_{2}$ 视在功率"
      },
      {
        "label": "B",
        "text": "循环功率为逆时针，且 $T_{1}$ 视在功率小于 $T_{2}$ 视在功率"
      },
      {
        "label": "C",
        "text": "不存在循环功率， $T_{1}$ 视在功率等于 $T_{2}$ 视在功率"
      },
      {
        "label": "D",
        "text": "无法确定 $T_{1}$ 和 $T_{2}$ 视在功率关系"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "变比 $k_1 > k_2$，T1 低压侧输出电压低，在两变压器间产生**逆时针无功循环电流**，T2 承担更多无功，视在功率 $S_2 > S_1$。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 2
  },
  {
    "id": "2024-816-选择-09",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "1000节点导纳矩阵非零元素百分比",
    "stem": "对一个 1000 节点电力系统，若每个节点平均与 5 个相邻节点有直接联系，则导纳矩阵中非零元素所占百分比大致为（）。",
    "options": [
      {
        "label": "A",
        "text": "0.3%"
      },
      {
        "label": "B",
        "text": "0.4%"
      },
      {
        "label": "C",
        "text": "0.5%"
      },
      {
        "label": "D",
        "text": "0.6%"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "每行平均 1 个自导纳 + 5 个互导纳 = 6 个非零元。1000 节点共 6000 个非零元，占总元素 $1000 \\times 1000$ 的 **0.6%**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 4
  },
  {
    "id": "2024-816-选择-10",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "直角坐标牛拉法潮流方程行数",
    "stem": "复杂电力系统潮流计算中, 假设系统节点数为 $n$ , PV 节点数为 $m$ , 节点电压采用直角坐标表示时, 牛顿法潮流计算方程的行数为 ( )。",
    "options": [
      {
        "label": "A",
        "text": "$2 n - m - 2$"
      },
      {
        "label": "B",
        "text": "$2 n - m$"
      },
      {
        "label": "C",
        "text": "$2 n - 2$"
      },
      {
        "label": "D",
        "text": "$2 n - m - 1$"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "不计平衡节点（消 2 个），每个 PV 节点已知 $U^2$ 少 1 个 $f$ 未知量方程，总行数为 **$2n - m - 2$**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 4
  },
  {
    "id": "2024-816-选择-11",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "牛拉法与高斯-塞德尔法相比优点",
    "stem": "计算潮流时牛-拉法与高-塞法相比主要优点是（ ）",
    "options": [
      {
        "label": "A",
        "text": "对初值要求低"
      },
      {
        "label": "B",
        "text": "占用内存少"
      },
      {
        "label": "C",
        "text": "收敛性好，计算速度快"
      },
      {
        "label": "D",
        "text": "简单"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "牛顿-拉夫逊法具有二次收敛性，**收敛性好、计算速度快**，且迭代次数与系统规模无关。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 4
  },
  {
    "id": "2024-816-选择-12",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "频率与电压控制特性对比",
    "stem": "根据电力系统频率特性和电压特性，可以得知（ ）",
    "options": [
      {
        "label": "A",
        "text": "频率电压都集中调整、控制"
      },
      {
        "label": "B",
        "text": "频率可以集中调整，电压不能"
      },
      {
        "label": "C",
        "text": "频率和电压都不能集中控制、调整"
      },
      {
        "label": "D",
        "text": "电压可以集中调整，频率不能"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "全网频率一致可**集中调整**；电压是局部指标，各节点不同，必须**分层分区就地调整**，不能集中控制。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 5
  },
  {
    "id": "2024-816-选择-13",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "频率一次与二次调整特性",
    "stem": "有关电力系统调频, 叙述正确的是 ( )。",
    "options": [
      {
        "label": "A",
        "text": "频率的二次调整一定是有差调节"
      },
      {
        "label": "B",
        "text": "频率的二次调整一定是无差调节"
      },
      {
        "label": "C",
        "text": "频率的一次调整一定是有差调节"
      },
      {
        "label": "D",
        "text": "频率的一次调整一定是无差调节"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "一次调频依靠发电机调速器静特性，属于**有差调节**；二次调频平移静特性，可实现无差调节。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 5
  },
  {
    "id": "2024-816-选择-14",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "耗量微增率不相等时负荷分配",
    "stem": "并网运行的机组耗量微增率不相等，则负荷增大时，应由（）的机组先出力。",
    "options": [
      {
        "label": "A",
        "text": "耗量微增率大的机组"
      },
      {
        "label": "B",
        "text": "耗量微增率小的机组"
      },
      {
        "label": "C",
        "text": "比耗量小的机组"
      },
      {
        "label": "D",
        "text": "比耗量大的机组"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "按照等耗量微增率准则，负荷增加时优先由**耗量微增率小的机组**先增发功率，全网经济性最佳。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 5
  },
  {
    "id": "2024-816-选择-15",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "无功电源最优分布原则",
    "stem": "电力系统无功电源最优分布的原则（ ）",
    "options": [
      {
        "label": "A",
        "text": "等耗量微增率准则"
      },
      {
        "label": "B",
        "text": "等网损微增率准则"
      },
      {
        "label": "C",
        "text": "最优网损微增率准则"
      },
      {
        "label": "D",
        "text": "等比耗量准则"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "无功电源优化分布的目标是全网有功网损最小，遵循的准则是**最优网损微增率准则**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 6
  },
  {
    "id": "2024-816-选择-16",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "逆调压中枢点电压调整要求",
    "stem": "逆调压中枢点电压为（ ）。",
    "options": [
      {
        "label": "A",
        "text": "高峰时 $1.05V_{N}$ ；低谷时 $V_{N}$"
      },
      {
        "label": "B",
        "text": "高峰时 $1.075V_{N}$ ，低谷时 $1.025V_{N}$"
      },
      {
        "label": "C",
        "text": "高峰时不低于 $1.025V_{N}$ ，低谷不高于 $1.075V_{N}$"
      },
      {
        "label": "D",
        "text": "任何情况下，电压都在（1.02~1.05） $V_{N}$"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "逆调压要求在**高峰负荷时升高电压至 $1.05 U_N$**，在**低谷负荷时降低电压至 $U_N$**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 6
  },
  {
    "id": "2024-816-选择-17",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "系统无功电源不足导致整体低电压",
    "stem": "当大型电力系统由于无功功率电源不足而造成电压水平低下时，应采取的调压措施是( )。",
    "options": [
      {
        "label": "A",
        "text": "改变发电机端电压"
      },
      {
        "label": "B",
        "text": "改变变压器变比"
      },
      {
        "label": "C",
        "text": "补偿无功功率"
      },
      {
        "label": "D",
        "text": "改变输电线路参数"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "系统无功电源整体不足时，改变变压器变比无法解决无功缺额，根本调压措施是**补偿无功功率**（增设补偿设备）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 6
  },
  {
    "id": "2024-816-选择-18",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "不需要在运行中专门设置的备用",
    "stem": "系统有功备用容量中, 哪种可能不需要专门设置 ( )。",
    "options": [
      {
        "label": "A",
        "text": "负荷备用"
      },
      {
        "label": "B",
        "text": "国民经济备用"
      },
      {
        "label": "C",
        "text": "事故备用"
      },
      {
        "label": "D",
        "text": "检修备用"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "**国民经济备用**属于宏观长期规划备用，不需要在系统运行调度中安排专门的备用机组。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 1
  },
  {
    "id": "2024-816-选择-19",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "产生最大短路冲击电流最恶劣条件",
    "stem": "高压系统中，只考虑系统电抗，最恶劣的短路情况是指（ ）",
    "options": [
      {
        "label": "A",
        "text": "短路前空载，短路发生在电源电动势瞬时值过零时"
      },
      {
        "label": "B",
        "text": "短路前空载，短路发生在电源电动势瞬时值最大时"
      },
      {
        "label": "C",
        "text": "短路前负荷电流最大，短路发生在电源电动势瞬时值过零时"
      },
      {
        "label": "D",
        "text": "短路前负荷电流最大，短路发生在电源电动势瞬时值最大时"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "**短路前空载、且短路发生在电源电动势瞬时值过零时**，产生的直流非周期分量达到最大值，冲击电流最恶劣。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 2
  },
  {
    "id": "2024-816-选择-20",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "短路电流最大的短路类型比较",
    "stem": "短路电流最大的短路故障为（ ）。",
    "options": [
      {
        "label": "A",
        "text": "单相短路"
      },
      {
        "label": "B",
        "text": "两相短路"
      },
      {
        "label": "C",
        "text": "三相短路"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "工程上通常三相短路电流最大，但在发电机出口或 $X_0 < X_1$ 节点，单相短路可能更大，严谨考查选**不确定**。",
    "verified": true,
    "conflict": "【严谨性标注】三相短路电流通常最大；但在发电机端或系统零序电抗极小（X0 < X1）时单相接地短路电流可大于三相短路，故严谨考核时选'不确定'。",
    "source": "考研",
    "year": "2024",
    "chapter": 7
  },
  {
    "id": "2024-816-选择-21",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "不接地系统单相接地非故障相电压",
    "stem": "中性点不接地系统中，发生单相接地时，非故障相电压将升高至相电压的（）倍。",
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "$\\sqrt{2}$"
      },
      {
        "label": "C",
        "text": "$\\sqrt{3}$"
      },
      {
        "label": "D",
        "text": "3"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "发生金属性单相接地时，非故障相对地电压由相电压升高为线电压，即升高至相电压的 **$\\sqrt{3}$ 倍**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 1
  },
  {
    "id": "2024-816-选择-22",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "短路冲击系数 kch 变化范围",
    "stem": "冲击系数 $k_{ch}$ 的数值变化范围是（ ）",
    "options": [
      {
        "label": "A",
        "text": "$0 \\leqslant k_{ch} \\leqslant 1$"
      },
      {
        "label": "B",
        "text": "$1 \\leqslant k_{ch} \\leqslant 2$"
      },
      {
        "label": "C",
        "text": "$0 \\leqslant k_{ch} \\leqslant 2$"
      },
      {
        "label": "D",
        "text": "$1 \\leqslant k_{ch} \\leqslant 3$"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "公式 $k_{ch} = 1 + e^{-0.01/T_a}$，因 $0 < e^{-0.01/T_a} \\le 1$，故 $k_{ch}$ 的数值变化范围为 **$1 \\le k_{ch} \\le 2$**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 7
  },
  {
    "id": "2024-816-选择-23",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "无限大电源三相短路暂态电流组成",
    "stem": "无限大容量电源供电的简单三相短路暂态过程中（ ）。",
    "options": [
      {
        "label": "A",
        "text": "短路电流无限大"
      },
      {
        "label": "B",
        "text": "短路功率无限大"
      },
      {
        "label": "C",
        "text": "短路电流有周期和非周期分量"
      },
      {
        "label": "D",
        "text": "短路电流有2倍频分量"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "包含幅值恒定的**强迫工频周期分量**与按时间常数 $T_a$ 指数衰减的**自由直流非周期分量**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 7
  },
  {
    "id": "2024-816-选择-24",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "发电机转移电抗换算计算电抗",
    "stem": "运用运算曲线查短路电流标幺值时, 需要将发电机与短路点之间的转移电抗换算为发电机计算电抗, 其换算公式为 ( )。",
    "options": [
      {
        "label": "A",
        "text": "$x_{js} = x \\frac{S_{"
      },
      {
        "label": "B",
        "text": "}}{S_{GN}}$ B. $x_{js} = x \\frac{S_{GN}}{S_{B. }}$"
      },
      {
        "label": "C",
        "text": "$x_{js} = x \\left( \\frac{U_{GN}}{U_{B. }} \\right)^{2}$"
      },
      {
        "label": "D",
        "text": "$x_{js} = x \\left( \\frac{U_{B. }}{U_{GN}} \\right)^{2}$"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "发电机计算电抗等于以发电机额定容量为基准值的转移电抗标幺值，公式为 **$x_{js} = x \\frac{S_{GN}}{S_B}$**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 7
  },
  {
    "id": "2024-816-选择-25",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "关于元件正负零序阻抗错误说法",
    "stem": "关于电力系统元件的正负零序阻抗，下列说法中错误的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "静止元件的正序阻抗等于负序阻抗"
      },
      {
        "label": "B",
        "text": "旋转元件的正负零序阻抗严格讲各不相同"
      },
      {
        "label": "C",
        "text": "静止元件正负零序阻抗都不相同"
      },
      {
        "label": "D",
        "text": "电抗器正负零序阻抗相等"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "**静止元件（输电线路、变压器）的正序阻抗与负序阻抗完全相等**！选项 C 称其“都不相同”属于错误说法。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 8
  },
  {
    "id": "2024-816-选择-26",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "变压器正负零序励磁电抗特性",
    "stem": "在不对称短路分析时,关于电力变压器的励磁电抗,下列说法中正确的是( )。",
    "options": [
      {
        "label": "A",
        "text": "不管电力变压器类型和绕组接线方式如何,其正序励磁电抗和负序励磁电抗均可视为无限大"
      },
      {
        "label": "B",
        "text": "不管电力变压器类型和绕组接线方式如何,其零序励磁电抗可视为无限大"
      },
      {
        "label": "C",
        "text": "对于三相五柱式变压器,其正序负序零序励磁电抗可视为无限大"
      },
      {
        "label": "D",
        "text": "对于三相壳式变压器，其正序负序零序励磁电抗可视为无限大"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "正序和负序励磁磁通均在铁芯闭合，磁阻极小，故**正序和负序励磁电抗均可视为无限大**；零序励磁电抗与结构有关。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 2
  },
  {
    "id": "2024-816-选择-27",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "关于架空线路零序阻抗错误说法",
    "stem": "关于架空输电线路的零序阻抗，下列说法中错误的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "输电线路零序阻抗大于正序阻抗"
      },
      {
        "label": "B",
        "text": "双回输电线路零序阻抗大于单回输电线路零序阻抗"
      },
      {
        "label": "C",
        "text": "有架空地线的输电线路，其零序阻抗小于无架空地线同类型架空线路零序阻抗"
      },
      {
        "label": "D",
        "text": "架空地线的导电性能越好，输电线路零序阻抗越大"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "**架空地线导电性能越好**，感应去磁作用越强，**线路零序阻抗越小**。选项 D 称“越大大”为错误说法。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 8
  },
  {
    "id": "2024-816-选择-28",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "不接地系统两相短路与两相接地比较",
    "stem": "在中性点不接地系统中同一地点发生两相短路和两相短路接地时, 关于短路点故障相短路电流有效值, 下列说法正确 ( )。",
    "options": [
      {
        "label": "A",
        "text": "两种情况下短路电流大小相等"
      },
      {
        "label": "B",
        "text": "两相接地短路电流大于两相短路电流"
      },
      {
        "label": "C",
        "text": "两相接地短路电流小于两相短路电流"
      },
      {
        "label": "D",
        "text": "无法确定哪种情况下短路电流更大"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "中性点不接地系统无零序通路，两相接地短路时由于悬空无法形成零序回路，**两种情况短路电流大小完全相等**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 1
  },
  {
    "id": "2024-816-选择-29",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "不对称故障各序电压分布规律",
    "stem": "关于短路故障时，正负零序电压的分布，下列正确（",
    "options": [
      {
        "label": "A",
        "text": "故障处正负零序电压均最高"
      },
      {
        "label": "B",
        "text": "发电机机端正负零序电压均最高"
      },
      {
        "label": "C",
        "text": "发电机端正序电压最高，短路点负零序电压最高"
      },
      {
        "label": "D",
        "text": "发电机中性点负零序电压最高，正序电压最低"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "正序网有源，**发电机端正序电压最高**；负序和零序网无源，以短路点为虚拟电源，**短路点负序和零序电压最高**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 8
  },
  {
    "id": "2024-816-选择-30",
    "paper": "华北电力大学 2024 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "选择题",
    "type": "single",
    "topic": "单相接地短路电流与正序电流关系",
    "stem": "单相接地短路的短路电流大小为正序分量的( )倍。",
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "1.732"
      },
      {
        "label": "C",
        "text": "2"
      },
      {
        "label": "D",
        "text": "3 二.(15分)某电力系统等值电路如图所示,已知节点1和节点2的电压分别为: $\\dot{U}_{1}=115\\angle0^{\\circ}kV$ , $\\dot{U}_{2}=114\\angle0^{\\circ}kV$ , 各段线路阻抗分别为 $Z_{12}=10+j40\\Omega$ , $Z_{13}=4+j16\\Omega$ , $Z_{23}=8+j32\\Omega$ ; 变压器T的额定容量为31.5MVA, 短路损耗为200kW, 空载损耗为86kW, 短路电压百分比为10.5, 空载电流百分比为1.5, 不计线路功率损耗, 计算各段线路的功率和电源 $G_{1}$ 、 $G_{2}$ 的注入功率。 (15 分) 两个火力发电厂组成的系统如图所示, 两个发电厂之间通过线路互联, 共同承担 $350 \\mathrm{MW}$ 负荷。两个发电厂的耗量特性如下式所示: $$ F _ {1} = 1 + 0. 1 P _ {G _ {1}} + 0. 0 0 1 P _ {G _ {1}} ^ {2} t / h \\quad 1 0 0 M W \\leq P _ {G _ {1}} \\leq 3 0 0 M W $$ $$ F _ {2} = 1 + 0. 1 P _ {G _ {2}} + 0. 0 0 2 P _ {G _ {2}} ^ {2} t / h \\quad 1 0 0 M W \\leq P _ {G _ {2}} \\leq 3 0 0 M W $$ （1）不计网络有功损耗，确定有功负荷的最优分配方案，并计算该方案下系统单位时间内的燃料消耗量。 (2) 假设线路有功损耗 $\\Delta P_{L}$ 和发电厂 2 的有功出力 $P_{G_{2}}$ 相关, 其关系为 $\\Delta P_{L} = 0.01 P_{G_{2}}$ , 试计算有功网损最小时的有功负荷分配方案, 并计算该方案下的有功损耗和系统单位时间内的燃料消耗量。 (3) 结合 (1)(2) 两问的计算结果, 关于电力系统经济运行问题, 你能总结出什么结论? 四. (15 分) AB 两个系统通过联线互联, 已知A. 系统机组的额定功率 $3000 \\mathrm{MW}$ , 机组调差系数 $\\sigma_{A. } \\% = 4$ , 正常运行时的负荷功率为 $2800 \\mathrm{MW}$ , 负荷的单位调节功率 $K_{LA. ^{*}} = 1.5$ ;B. 系统机组的额定功率为 $2000 \\mathrm{MW}$ , 机组调差系数 $\\sigma_{B. } \\% = 5$ , 正常运行时的负荷功率为 $1500 \\mathrm{MW}$ , 负荷的单位调节功率 $K_{LB. ^{*}} = 1.2$ 。正常运行时系统频率为额定频率 $50 \\mathrm{~Hz}$ , 联络线上没有交换功率。当A. 系统负荷增加某数值时, 若A. 系统不进行二次调频, 仅B. 系统进行二次调频, 实现无差调频联络线输出功率为 $300 \\mathrm{MW}$ , 试解答下述问题: (1) 当A. 系统负荷增加和题干同样数值时, 若 A、B. 两个系统均未进行二次调频, 系统的频率和联络线的功率各变为多少? (2) 当A. 系统负荷增加和题干同样数值时, 若 A、B. 两个系统均进行二次调频, 试制定二次调频方案, 在实现无差调频的同时, 使得联络线功率最小。(设 A、B. 两个系统的二次调频能力在各自机组出力范围内不受限制。) 五. (20 分) 一两节点系统如图所示, 系统中的参数均已归算到统一基准的标幺值参数, 已知节点 1 的电压相量为: $\\dot{U}_{1} = 1 + j0$ ; 节点 1 和节点 2 的负荷功率分别为: $\\tilde{S}_{LD1} = 1 + j0.2$ , $\\tilde{S}_{LD2} = 1 + j0$ , 两节点之间的线路阻抗为: $Z_{L} = 0 + j0.25$ , 忽略线路导纳参数。在某运行方式时, 要求节点 2 的电压满足: $\\left|\\dot{U}_{2}\\right| = 1$ , 试解答下述问题: (1) 求解点 2 无功补偿装置补偿的无功功率 $Q_{c}$ 及节点 1 电源发出的功率 $\\tilde{S}_{G}$ 。 (2) 利用计算机算法求解该系统潮流时, 节点 1、2 分别应设为什么类型的节点? 若设节点 2 的电压相量初值为: $\\dot{U}_{2}^{(0)} = 1 + j0$ , 试用直角坐标牛顿-拉夫逊法计算节点 2 的电压。(要求迭代 2 次, 保留小数点后二位) 六.（15 分）如图所示，一台降压变压器向某个城市的两个区域供电，变压器的电压参数标于图中，变压器归算到高压侧的阻抗为 $2.44 + j40\\Omega$ 。已知区域A. 的最大和最小负荷分别为： $\\tilde{S}_{Amax} = 15 + j9MVA$ ， $\\tilde{S}_{Amin} = 12 + j6MVA$ ，区域B. 的最大和最小负荷分别为： $\\tilde{S}_{Bmax} = 14 + j8MVA$ ， $\\tilde{S}_{Bmin} = 12 + j6MVA$ ，区域A. 和区域B. 的最大负荷和最小负荷均同时出现，区域A. 和区域B. 负荷允许的电压偏移均为 -5% - 0%，变压器低压母线和区域A. 之间线路上的电压损耗情况为：最大负荷时 7.5%，最小负荷时 6%，变压器低压母线和区域B. 之间线路上的电压损耗情况为：最大负荷时 7%，最小负荷时 6%。变压器高压侧母线电压维持 112kV 不变，试求取变压器低压母线的调压要求并选择变压器分接头。（忽略变压器和线路功率损耗，忽略变压器导纳） 七. (20 分) 某系统接线路及各元件参数如图所示, 双回输电线路参数相同 (忽略线路电阻), 每回输电线路电抗为 $0.38 \\Omega / k m$ , 每回线路长 $50 \\mathrm{~km}$ 。如发电机空载并网后, 输电线路首端发生三相短路, 选 $S_{B. } = 100 M VA. , U_{B. } =$ 平均额定电压, 试求解下述问题: (1) 计算短路时刻发电机出口线电压（有名值）。 (2) 计算短路点左侧和右侧的短路电流周期分量起始值（有名值）。 (3) 短路后至故障线路切除前这段时间内, 定性说明短路点左侧和右侧的短路电流周期分量变化规律有何不同? 八. (20 分) 如图所示某空载电力系统, 各元件参数标幺值已标于图中 ( $S_{B. }=100MVA$ , $U_{B. }$ =平均额定电压), 无穷大系统为中性点直接接地系统, 母线 1 的A. 相电压为 $1 \\angle 0^{\\circ}$ , 当母线 1 处发生 A、C. 相接地短路时, 试求解下述问题: (1) 计算流过发电机 G 各相的短路电流（标幺值）。 (2) 计算流过输电线 L 的各相电流（有名值） (3) 计算母线 2 处的各相电压 (有名值)。"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "单相接地短路边界 $I_{a(1)} = I_{a(2)} = I_{a(0)}$，故故障相短路电流 $I_a = 3 I_{a(1)}$，为正序分量的 **3 倍**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2024",
    "chapter": 8
  },
  {
    "id": "2023-814-选择-01",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "中性点不接地发生单相接地流过故障点电流",
    "stem": "中性点不接地电力系统发生单相接地时，流过故障点的是（）",
    "options": [
      {
        "label": "A",
        "text": "感性电流"
      },
      {
        "label": "B",
        "text": "容性电流"
      },
      {
        "label": "C",
        "text": "阻性电流"
      },
      {
        "label": "D",
        "text": "电流性质不确定"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "中性点不接地系统单相接地时无金属性回路，故障点电流是由全网非故障相对地电容充电形成的**容性无功电流**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 1
  },
  {
    "id": "2023-814-选择-02",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "复合序网为各序网串联的故障类型",
    "stem": "复合序网是各序网串联的故障类型有（）",
    "options": [
      {
        "label": "A",
        "text": "单相断线"
      },
      {
        "label": "B",
        "text": "两相断线"
      },
      {
        "label": "C",
        "text": "单相接地短路"
      },
      {
        "label": "D",
        "text": "两相接地短路"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "answerPending": false,
    "explanation": "单相接地短路与单相断线故障的复合序网均为**正序、负序、零序网串联**连接。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 8
  },
  {
    "id": "2023-814-选择-03",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "输电线路上只流过无功功率时产生的损耗",
    "stem": "某架空输电线路上只流过无功功率时, 则该输电线路将产生 ( )",
    "options": [
      {
        "label": "A",
        "text": "有功损耗"
      },
      {
        "label": "B",
        "text": "无功损耗"
      },
      {
        "label": "C",
        "text": "电压损耗"
      },
      {
        "label": "D",
        "text": "电流损耗"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "无功电流流过电阻产生 $I_Q^2 R$ 的**有功损耗**（A）；流过电抗产生 $I_Q^2 X$ 的**无功损耗**（B）；形成 $QX/U$ 的**电压损耗**（C）。",
    "verified": true,
    "conflict": "【经典概念陷阱】只要输电线路存在电阻 R，纯无功电流流过就会产生 I_Q^2 * R 的有功损耗（A对）；流过线路电抗产生 I_Q^2 * X 的无功损耗（B对）；并在阻抗上产生电压损耗（C对）。“只输无功无有功损耗”是常见错误观点。",
    "source": "考研",
    "year": "2023",
    "chapter": 6
  },
  {
    "id": "2023-814-选择-04",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "Y0/△-11变压器Y0侧有零序时△侧出口零序电流",
    "stem": "当系统发生不对称故障时，Y0/△-11接线的变压器Y0侧零序电流标幺值为 $1\\angle60^{\\circ}$ ，则△侧出口零序电流标幺值为（）",
    "options": [
      {
        "label": "A",
        "text": "$1\\angle30^{\\circ}$"
      },
      {
        "label": "B",
        "text": "$1\\angle90^{\\circ}$"
      },
      {
        "label": "C",
        "text": "$1\\angle60^{\\circ}$"
      },
      {
        "label": "D",
        "text": "0"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "$Y_0$ 侧零序电流在 $\\Delta$ 绕组内部感应出闭合环流，但**零序电流无法流出 $\\Delta$ 侧外电路**，故出口零序电流为 **0**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 8
  },
  {
    "id": "2023-814-选择-05",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "最大负荷利用小时数 Tmax 的主要作用",
    "stem": "最大负荷利用小时数作用是（）",
    "options": [
      {
        "label": "A",
        "text": "计算电能损耗"
      },
      {
        "label": "B",
        "text": "计算功率损耗"
      },
      {
        "label": "C",
        "text": "计算电压损耗"
      },
      {
        "label": "D",
        "text": "计算输电效率"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "公式 $W = P_{max} \\cdot T_{max}$，主要用于配合最大负荷损耗时间 $T_{\\tau}$ **计算全年电能消耗与电能损耗**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 1
  },
  {
    "id": "2023-814-选择-06",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "静止无功补偿器（SVC）的性能优点",
    "stem": "采用静止无功补偿器进行无功补偿的优点是",
    "options": [
      {
        "label": "A",
        "text": "经济"
      },
      {
        "label": "B",
        "text": "调节平滑"
      },
      {
        "label": "C",
        "text": "响应速度快"
      },
      {
        "label": "D",
        "text": "即可发出无功也可吸收无功"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "SVC 具有**响应速度快**（毫秒级）、**调节平滑**连续无级、**既可发出也可吸收无功**的优点；但造价较高。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 6
  },
  {
    "id": "2023-814-选择-07",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "输电线路传输有功功率减少对电压降落横分量影响",
    "stem": "若输电线路上传输有功功率减少, 则电压降落横分量将",
    "options": [
      {
        "label": "A",
        "text": "减小"
      },
      {
        "label": "B",
        "text": "增大"
      },
      {
        "label": "C",
        "text": "不变"
      },
      {
        "label": "D",
        "text": "可能增大也可能减少"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "横分量 $\\delta U = \\frac{PX - QR}{U}$，在无功功率 $Q$ 不变时，传输有功 $P$ 减少致分子减小，故**横分量减小**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 3
  },
  {
    "id": "2023-814-选择-08",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "首端 \\(1.0\\angle 10^\\circ\\) 末端 \\(1.05\\angle 20^\\circ\\) 有功与无功流向",
    "stem": "如果输电线路首端电压为 $1.0 \\angle 10^{\\circ}$ , 末端电压为 $1.05 \\angle 20^{\\circ}$ , 则有功功率与无功功率流向 ( )",
    "options": [
      {
        "label": "A",
        "text": "相同"
      },
      {
        "label": "B",
        "text": "相反"
      },
      {
        "label": "C",
        "text": "相同相反交替变换"
      },
      {
        "label": "D",
        "text": "无法判断"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "相角 $\\delta_1 < \\delta_2 \\implies P$ 从末端流向首端；幅值 $U_1 < U_2 \\implies Q$ 也从未端流向首端，二者**流向相同**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 3
  },
  {
    "id": "2023-814-选择-09",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "发电机计算电抗 xjs 相关因素",
    "stem": "发电机计算电抗的大小与发电机（ ）有关",
    "options": [
      {
        "label": "A",
        "text": "额定功率"
      },
      {
        "label": "B",
        "text": "出口电压等级"
      },
      {
        "label": "C",
        "text": "次暂态电抗大小"
      },
      {
        "label": "D",
        "text": "并网点"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "answerPending": false,
    "explanation": "公式 $x_{js} = x_d'' \\cdot \\frac{S_B}{S_{GN}}$，取决于发电机**次暂态电抗 $x_d''$** 与 **额定容量/额定功率 $S_{GN}$**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 2
  },
  {
    "id": "2023-814-选择-10",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电力系统发生两相短路时的负序电流分布",
    "stem": "电力系统发生两相短路时，说法正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "三相中都出现负序电流"
      },
      {
        "label": "B",
        "text": "只有发生短路的两相出现负序电流"
      },
      {
        "label": "C",
        "text": "某相中是否出现负序电流与变压器接线组别有关"
      },
      {
        "label": "D",
        "text": "发生短路的两相中负序电流方向相反"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "answerPending": false,
    "explanation": "两相短路为不对称故障，**三相中均会出现负序电流**（A）；且发生短路的两相中**负序电流方向相反**（D）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 8
  },
  {
    "id": "2023-814-判断-01",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "牛拉法收敛速度与迭代初值选取有关",
    "stem": "牛顿—拉夫逊潮流算法的收敛速度与迭代初值，选取有关。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "牛顿-拉夫逊法属于局部二次收敛算法，初值若偏离真值过远可能导致收敛变慢甚至迭代发散。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 4
  },
  {
    "id": "2023-814-判断-02",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "大规模系统节点导纳矩阵含有大量零元素",
    "stem": "大规模电力系统的导纳矩阵一定含有大量零元素。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "大型电网中各节点仅与少数相邻节点有物理连接，节点导纳矩阵具有高度的**稀疏性**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 4
  },
  {
    "id": "2023-814-判断-03",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "系统中所有发电机均参与一次调频",
    "stem": "电力系统中的发电机一般都要参于系统的一次调频。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "满载运行（无法再增发功率）或未装设调速器的机组无法参与频率一次调整。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 5
  },
  {
    "id": "2023-814-判断-04",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "近似计算中一般忽略电压降落横分量",
    "stem": "在电压近似计算时，一般忽略电压降落横分量。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "高压电网中电压降落纵分量 $\\Delta U \\gg \\delta U$，近似计算忽略横分量 $\\delta U$，用电压代数差近似代替相量差。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 3
  },
  {
    "id": "2023-814-判断-05",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "标幺制基准值选取可不符合电路欧姆定律",
    "stem": "阻抗、电压、电流基准值的选取可以不用符合电路的基本关系。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "选定功率基准 $S_B$ 与电压基准 $U_B$ 后，$I_B = \\frac{S_B}{\\sqrt{3}U_B}$ 与 $Z_B = \\frac{U_B^2}{S_B}$ **必须严格遵循三相电路欧姆定律**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 1
  },
  {
    "id": "2023-814-判断-06",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "50Hz系统短路冲击电流在短路后 0.1s 出现",
    "stem": "对于 $50 \\mathrm{~Hz}$ 电力系统, 短路冲击电流在短路后 $0.1 \\mathrm{~s}$ 出现。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "工频周期 20ms，短路冲击电流在短路后半个周期即 **0.01s（10ms）** 时出现，并非 0.1s。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 7
  },
  {
    "id": "2023-814-判断-07",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "系统无功不足时不宜调整变压器分接头调压",
    "stem": "当电力系统无功不足时，不宜采用调整变压器分接头的方式调压。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "变压器分接头不增加无功总量，无功严重不足时盲目升压会恶化无功缺额，甚至引发电压崩溃。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 2
  },
  {
    "id": "2023-814-判断-08",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "无穷大系统三相短路周期分量不衰减",
    "stem": "无穷大系统发生三相短路，其短路电流周期分量是不衰减的。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "无限大电源母线电压幅值恒定，短路电流强迫工频周期分量幅值保持恒定不衰减。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 7
  },
  {
    "id": "2023-814-判断-09",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "Y0/△变压器零序电流不能在△绕组流通",
    "stem": "对于星-三角接线变压器，零序短路电流可以在星形绕组中流通，但不能在角形绕组中流通。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "零序电流可在 $Y_0$ 绕组流通，并经磁耦合在 $\\Delta$ 绕组**内部闭合感应流通**（仅不能流出外电路）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 7
  },
  {
    "id": "2023-814-判断-10",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "架空地线使输电线路零序电抗变大",
    "stem": "架空地线存在将使输电线路零序电抗变大。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "架空地线中感应出逆向零序电流起去磁作用，削弱磁链，使线路零序电抗**变小**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 2
  },
  {
    "id": "2023-816-单选-01",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "10kV系统单相接地非故障相对地电压",
    "stem": "某 $10 \\mathrm{kV}$ 系统发生单相接地故障时, 非故障相对地电压为 ( )",
    "options": [
      {
        "label": "A",
        "text": "$5.77 \\mathrm{kV} \\quad"
      },
      {
        "label": "B",
        "text": "10 \\mathrm{kV} \\quad"
      },
      {
        "label": "C",
        "text": "17.32 \\mathrm{kV} \\quad"
      },
      {
        "label": "D",
        "text": "7.07 \\mathrm{kV}$"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "中性点不接地系统单相接地时，非故障相对地电压由相电压 $5.77\\text{kV}$ 升高为线电压 **$10\\text{kV}$**（$\\sqrt{3}$倍）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 1
  },
  {
    "id": "2023-816-单选-02",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "发电机20kV直连变压器升至220kV网额定变比",
    "stem": "某变压器低压侧和发电机直接相连, 高压侧接入 $220 \\mathrm{kV}$ 系统, 发电机的额定电压为 $20 \\mathrm{kV}$ , 则变压器的额定电压为 ( )",
    "options": [
      {
        "label": "A",
        "text": "$20 \\mathrm{kV} / 220 \\mathrm{kV}$"
      },
      {
        "label": "B",
        "text": "$21 \\mathrm{kV} / 242 \\mathrm{kV}$"
      },
      {
        "label": "C",
        "text": "$20 \\mathrm{kV} / 242 \\mathrm{kV}$"
      },
      {
        "label": "D",
        "text": "$21 \\mathrm{kV} / 220 \\mathrm{kV}$"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "一次侧接发电机额定 **20kV**；二次侧接电网比标称高10%（$220 \\times 1.1 = \\mathbf{242\\text{kV}}$，变比为 **20/242kV**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 1
  },
  {
    "id": "2023-816-单选-03",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "容量100/100/50变压器Pk(1-3)'归算至100MVA",
    "stem": "容量比为 $100 / 100 / 50$ 的三绕组变压器, 若 $P_{k(1-3)}^{\\prime} = 100 \\mathrm{kW}$ , 则归算后的 $P_{k(1-3)} = ($",
    "options": [
      {
        "label": "A",
        "text": "$200 \\mathrm{kW}$"
      },
      {
        "label": "B",
        "text": "$400 \\mathrm{kW}$"
      },
      {
        "label": "C",
        "text": "$50 \\mathrm{kW}$"
      },
      {
        "label": "D",
        "text": "$25 \\mathrm{kW}$"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "第3绕组容量为 $50\\%S_N$，测得损耗归算至额定容量需乘以 $(1/0.5)^2 = 4$，即 $4 \\times 100\\text{kW} = \\mathbf{400\\text{kW}}$。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 2
  },
  {
    "id": "2023-816-单选-04",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "输电线路电导参数反映的物理效应",
    "stem": "电力线路的电导参数主要反映的是（）",
    "options": [
      {
        "label": "A",
        "text": "热效应"
      },
      {
        "label": "B",
        "text": "磁场效应"
      },
      {
        "label": "C",
        "text": "电场效应"
      },
      {
        "label": "D",
        "text": "电晕损耗"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "线路电导 $G$ 主要表征高压下空气电离产生的**电晕损耗**及绝缘子泄漏损耗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 2
  },
  {
    "id": "2023-816-单选-05",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "输电线路线损率的定义公式",
    "stem": "线损率是指（）",
    "options": [
      {
        "label": "A",
        "text": "线路功率损耗与始端输入功率之比"
      },
      {
        "label": "B",
        "text": "线路功率损耗与末端输出功率之比"
      },
      {
        "label": "C",
        "text": "线路电能损耗与始端输入之比"
      },
      {
        "label": "D",
        "text": "线路电能损耗与末端输出之比"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "线损率定义为一定时间内**线路电能损耗量 $\\Delta W$ 与始端输入电能 $W_1$ 之比**（$\\Delta W / W_1$）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 1
  },
  {
    "id": "2023-816-单选-06",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "高压线路空载运行首末端电压及相位关系",
    "stem": "高压电力线路空载运行,忽略线路电阻和电导,则线路首端节点1与末端节点2的电压和相位关系为( )",
    "options": [
      {
        "label": "A",
        "text": "$U > U_{2}$ ; $\\delta_{1} > \\delta_{2}$"
      },
      {
        "label": "B",
        "text": "$U_{1} < U_{2}$ ; $\\delta_{1} = \\delta_{2}$"
      },
      {
        "label": "C",
        "text": "$U_{1} < U_{2}$ ; $\\delta_{1} < \\delta_{2}$"
      },
      {
        "label": "D",
        "text": "$U > U_{2}$ ; $\\delta_{1} = \\delta_{2}$"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "空载容升效应使**末端电压高于首端（$U_1 < U_2$）**；无有功传输且无电阻损耗时，**首末端电压同相（$\\delta_1 = \\delta_2$）**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 2
  },
  {
    "id": "2023-816-单选-07",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "线路首末端电压与额定电压数值差",
    "stem": "线路首端、末端电压和额定电压的数值差为（）",
    "options": [
      {
        "label": "A",
        "text": "电压降落"
      },
      {
        "label": "B",
        "text": "电后损耗"
      },
      {
        "label": "C",
        "text": "电压调整"
      },
      {
        "label": "D",
        "text": "电压偏移"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "某节点首端/末端电压与额定电压 $U_N$ 的代数差定义为**电压偏移**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 1
  },
  {
    "id": "2023-816-单选-08",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "n节点（m个PQ节点）极坐标牛拉法雅可比阶数",
    "stem": "电力网有 n 个独立节点，其中 m 个节点为 PQ，极坐标形式牛顿—拉夫逊法雅可比阶数为（）",
    "options": [
      {
        "label": "A",
        "text": "n-m-1"
      },
      {
        "label": "B",
        "text": "n+m-2"
      },
      {
        "label": "C",
        "text": "n+m-1"
      },
      {
        "label": "D",
        "text": "n-m"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "未知相角 $n-1$ 个，未知电压幅值 $m$ 个（PQ节点），雅可比矩阵总阶数为 **$n + m - 2$**。",
    "verified": true,
    "conflict": "【疑义与口径标注】若题干 'n 个独立节点' 指包含平衡节点在内的全网节点，则未知相角为 n-1，未知幅值为 m，雅可比阶数为 n+m-1（选项C）；若 '独立节点' 定义已剔除平衡节点或平衡节点选自 m，部分答案选 B (n+m-2)。考场中请先审定 n 是否包含平衡节点。",
    "source": "考研",
    "year": "2023",
    "chapter": 1
  },
  {
    "id": "2023-816-单选-09",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "同步调相机过励磁运行输出特性",
    "stem": "调相机过励磁运行向系统（）",
    "options": [
      {
        "label": "A",
        "text": "发出感性无功功率"
      },
      {
        "label": "B",
        "text": "发生容性无功"
      },
      {
        "label": "C",
        "text": "吸收感性无功"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "调相机过励磁运行相当于强无功电源，向系统**发出感性无功功率**（吸收容性无功）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 6
  },
  {
    "id": "2023-816-单选-10",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "环网经济功率分布决定因素",
    "stem": "环网经济功率分布（ ）",
    "options": [
      {
        "label": "A",
        "text": "按阻抗成反比分布"
      },
      {
        "label": "B",
        "text": "按阻抗正比分布"
      },
      {
        "label": "C",
        "text": "按电阻反比分布"
      },
      {
        "label": "D",
        "text": "按电阻正比分布"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "环网潮流自然分布按阻抗成反比分布；使全网损耗最小的**经济功率分布按电阻成反比分布**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 3
  },
  {
    "id": "2023-816-单选-12",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "关于零序网络说法错误的是",
    "stem": "下列关于零序网络说法不正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "零序网络中不包括发电机电势"
      },
      {
        "label": "B",
        "text": "零序电流能流通的元件与正负序不同"
      },
      {
        "label": "C",
        "text": "所有电源的零序电势为零"
      },
      {
        "label": "D",
        "text": "零序电流的流通与变压器接线形式无关"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "变压器的绕组接线方式（如 $Y_0/\\Delta$）直接决定零序通路的开闭，**零序电流流通与变压器接线密切相关**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 8
  },
  {
    "id": "2023-816-单选-13",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "正序增广网络中三相短路附加阻抗",
    "stem": "在正序增广网络中，三相短路的附加阻抗等于（）",
    "options": [
      {
        "label": "A",
        "text": "$Z_{\\Sigma(2)}+3Z_{f}$"
      },
      {
        "label": "B",
        "text": "$Z_{\\Sigma(2)}+Z_{\\Sigma(0)}+3Z_{f}$"
      },
      {
        "label": "C",
        "text": "$Z_{\\Sigma(2)}//(Z_{\\Sigma(0)}++3Z_{g})$"
      },
      {
        "label": "D",
        "text": "0"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "三相短路为完全对称短路，正序增广网络中**附加阻抗 $Z_{\\Delta} = 0$**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 8
  },
  {
    "id": "2023-816-单选-14",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "关于两相短路特征说法错误的是",
    "stem": "假设正序阻抗和负序阻抗相等，下列关于两相短路说法不正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "故障相短路电流为正序电流的 1.732 倍"
      },
      {
        "label": "B",
        "text": "短路点与非故障相电压为正序电压的两倍"
      },
      {
        "label": "C",
        "text": "故障相电压为非故障相电压的一半"
      },
      {
        "label": "D",
        "text": "故障相电压与非故障相电压的方向相同"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "两相短路时，故障两相电压相等且等于正序电压的 $-0.5$ 倍（方向与非故障相**相反**，非相同）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 8
  },
  {
    "id": "2023-816-单选-15",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "短路故障后正序电压沿线分布特征",
    "stem": "系统发生短路故障后，越靠近短路点，正序电压（）",
    "options": [
      {
        "label": "A",
        "text": "越低"
      },
      {
        "label": "B",
        "text": "越高"
      },
      {
        "label": "C",
        "text": "不变"
      },
      {
        "label": "D",
        "text": "都不对"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "正序网中发电机端为电源，短路点为正序电压最低点，故**越靠近短路点，正序电压越低**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 8
  },
  {
    "id": "2023-816-判断-01",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "枯水期调频厂首选中温中压火电厂",
    "stem": "在枯水期调频厂首选中温中压火电厂。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "枯水期水电需限制用水防弃水，调频任务由中温中压火电厂或抽水蓄能电厂承担。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 5
  },
  {
    "id": "2023-816-判断-02",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电容器发出的无功随电压升高而增大为正调节",
    "stem": "电容器发出的无功功率随电压的升高而增大，因此具有正的电压调节特性。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "电容器无功 $Q \\propto U^2$，电压降低时发出无功急剧减少（加剧电压下降），具有**负的电压调节特性**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 6
  },
  {
    "id": "2023-816-判断-03",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "有载调压变压器在任何情况下都能改善电压",
    "stem": "有载调压变压器在任何情况下都能改善电压质量。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "全网无功严重不足导致整体低电压时，盲目调整变压器分接头会加剧无功缺额，引发电压崩溃。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 6
  },
  {
    "id": "2023-816-判断-04",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电缆线路电抗远小于架空线而电纳远大于架空线",
    "stem": "相同截面积的电缆线路电抗远小于架空线路的电抗，而电纳远大于架空线路的电纳。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "电缆相间距离极小且介电常数大，故单位电抗小、电纳（对地电容）远大于架空线路。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 2
  },
  {
    "id": "2023-816-判断-06",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "预测负荷曲线可用于安排机组发电计划",
    "stem": "由生产、生活和气象条件决定的负荷是可以预测的，预测的负荷曲线用来安排机组的发电计划。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "可预测的第二、三类负荷曲线是编制日/年负荷曲线与安排机组发电/检修计划的依据。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 1
  },
  {
    "id": "2023-816-判断-07",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "一次调频由调速器实现只能做到有差调节",
    "stem": "一次调频是由调速器实现的，只能做到有差调节。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "一次调频依靠发电机调速器静特性（斜率 $K_G$），无法平移特性曲线，故属于有差调节。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 5
  },
  {
    "id": "2023-816-判断-08",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "输电线上只传输无功不产生有功损耗",
    "stem": "线路上只传输无功功率时，不会产生有功功率损耗。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "无功电流流过线路电阻 $R$ 会产生 $I_Q^2 R$ 的有功功率损耗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 3
  },
  {
    "id": "2023-816-判断-09",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "三相系统中相电压标幺值等于线电压标幺值",
    "stem": "相电压的标幺值等无线电压的标幺值。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "基准值选择满足 $U_{B,相} = U_{B,线}/\\sqrt{3}$，归算后相电压标幺值与线电压标幺值完全相等。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 1
  },
  {
    "id": "2023-816-判断-10",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "高压网有功和无功均从高电压流向低电压",
    "stem": "高压电网有功功率和无功功率都是从高电压节点流向低电压节点。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "有功功率由**电压相角高**的节点流向相角低的节点；无功功率才由电压幅值高的节点流向幅值低的节点。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 5
  },
  {
    "id": "2023-816-判断-11",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "不对称短路故障中一定有零序电流",
    "stem": "三相短路故障中没有零序电流，不对称短路故障中一定有零序电流。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "两相短路属于不对称短路，但故障回路不接地且无中性点通路，短路电流中**没有零序电流**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 8
  },
  {
    "id": "2023-816-判断-12",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "两机转移电抗相同额定容量大者计算电抗大",
    "stem": "若两台发电机对短路点的转移电抗相同，额定容量大的发电机计算电抗大。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "发电机计算电抗 $x_{js} = x_{转移} \\cdot \\frac{S_{GN}}{S_B}$，转移电抗相同条件下，额定容量 $S_{GN}$ 越大，计算电抗 $x_{js}$ 越大。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 7
  },
  {
    "id": "2023-816-判断-13",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "不对称接地零序磁通对平行通信线有电磁干扰",
    "stem": "不对称接地短路所引起的不平衡电流, 产生的不平衡磁通, 会在临近的垂直布置的通信线路内感应出相当大的感应电动势, 造成对通信系统的干扰, 甚至危及设备和人身安全。 (   ) 14、 $Y_{0}/\\triangle$ 接线变压器的正序、负序和零序的等值漏抗近似相等。(   )",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "单相接地等不对称接地短路时，零序电流经大地返回产生强电磁感应，威胁平行通信线安全。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 8
  },
  {
    "id": "2023-816-判断-15",
    "paper": "华北电力大学 2023 年硕士生入学考试初试试题 (科目代码：816)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "中性点接地阻抗 Zg 对正负序电流无影响",
    "stem": "正序和负序电流不流过中性点接地阻 $Zg$ ，因此 $Zg$ 对正负序电流没影响。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "复合序网中正、负、零序网相互连接，零序阻抗（含 $3Z_g$）改变会改变总阻抗，从而**间接影响正负序电流**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2023",
    "chapter": 8
  },
  {
    "id": "2022-813-选择-01",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "选择题",
    "type": "single",
    "topic": "中性点不接地发生单相接地时中性点电压",
    "stem": "中性点不接地电力系统发生单相接地时，中性点电压为",
    "options": [
      {
        "label": "A",
        "text": "相电压"
      },
      {
        "label": "B",
        "text": "$\\sqrt{3}$ 倍相电压"
      },
      {
        "label": "C",
        "text": "线电压"
      },
      {
        "label": "D",
        "text": "零"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "单相金属性接地时，故障相对地电压降为 0，**中性点对地电压升高为相电压 $U_N/\\sqrt{3}$**（非故障相对地电压升高为线电压）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 1
  },
  {
    "id": "2022-813-选择-02",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "选择题",
    "type": "single",
    "topic": "节点5和7间线路断开时导纳矩阵变化元素",
    "stem": "一个 10 节点电力系统, 如果节点 5 和 7 之间的输电线路断开, 则下列导纳矩阵元素发生变化的是",
    "options": [
      {
        "label": "A",
        "text": "$Y_{55}$"
      },
      {
        "label": "B",
        "text": "$Y_{57}$"
      },
      {
        "label": "C",
        "text": "$Y_{67}$"
      },
      {
        "label": "D",
        "text": "$Y_{77}$"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "answerPending": false,
    "explanation": "线路开断仅改变线路两端节点的自导纳 **$Y_{55}, Y_{77}$** 以及相互间的互导纳 **$Y_{57}, Y_{75}$**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 4
  },
  {
    "id": "2022-813-选择-03",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "选择题",
    "type": "single",
    "topic": "BC 相金属性短路边界条件",
    "stem": "电力系统发生 B、C. 相金属性短路，属于该短路形式的边界条件是",
    "options": [
      {
        "label": "A",
        "text": "BC 相电压为零"
      },
      {
        "label": "B",
        "text": "A. 相故障电流为零"
      },
      {
        "label": "C",
        "text": "BC 相电压相等"
      },
      {
        "label": "D",
        "text": "A. 相电压为零"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "BC 相两相短路相变量边界条件为：**故障相短路点电压相等 $U_b = U_c$**、非故障相电流 $I_a = 0$、故障相电流反相 $I_b = -I_c$。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 8
  },
  {
    "id": "2022-813-选择-04",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "选择题",
    "type": "single",
    "topic": "三相短路电流周期分量有效值相关因素",
    "stem": "无限大电源供电系统发生三相短路时, 短路电流周期分量有效值与 ( )有关?",
    "options": [
      {
        "label": "A",
        "text": "回路电抗"
      },
      {
        "label": "B",
        "text": "短路初相角"
      },
      {
        "label": "C",
        "text": "回路电阻"
      },
      {
        "label": "D",
        "text": "电源电压"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "周期分量有效值 $I = \\frac{E}{\\sqrt{R^2+X^2}}$，取决于**电源电压 $E$、回路电阻 $R$ 与回路电抗 $X$**。合闸初相角仅影响非周期分量。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 7
  },
  {
    "id": "2022-813-选择-05",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "选择题",
    "type": "single",
    "topic": "不对称短路时发电机定子电流出现的谐波",
    "stem": "电力系统中发生不对称短路时，发电机定子电流中将出现",
    "options": [
      {
        "label": "A",
        "text": "二次谐波"
      },
      {
        "label": "B",
        "text": "三次谐波"
      },
      {
        "label": "C",
        "text": "四次谐波"
      },
      {
        "label": "D",
        "text": "五次谐波"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "负序电流在转子绕组感应出 100Hz（倍频）电流，其旋转磁场切割定子绕组感应出**二次谐波电流**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 1
  },
  {
    "id": "2022-813-选择-06",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "选择题",
    "type": "single",
    "topic": "输电线路采用分裂导线的作用",
    "stem": "输电线路采用分裂导线可以",
    "options": [
      {
        "label": "A",
        "text": "减小电晕损失"
      },
      {
        "label": "B",
        "text": "减小线路电抗"
      },
      {
        "label": "C",
        "text": "减小线路电阻"
      },
      {
        "label": "D",
        "text": "减小线路对地电容"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerPending": false,
    "explanation": "分裂导线相当于增大了导线等效半径 $r_{eq}$，主要作用是**减小线路电抗**（B）和**提高临界电压以减小电晕损失**（A）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 2
  },
  {
    "id": "2022-813-选择-07",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "选择题",
    "type": "single",
    "topic": "降低电力系统网损的措施",
    "stem": "采用（）等措施，可以降低电力系统网损",
    "options": [
      {
        "label": "A",
        "text": "并联电容补偿"
      },
      {
        "label": "B",
        "text": "提高电压等级"
      },
      {
        "label": "C",
        "text": "串联电容补偿"
      },
      {
        "label": "D",
        "text": "并联电抗器"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "**并联电容**减少无功传输（A）、**提高电压等级**降低运行电流（B）、**串联电容**补偿线路电抗改善功率分布（C），均能有效降低线损。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 1
  },
  {
    "id": "2022-813-选择-08",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "选择题",
    "type": "single",
    "topic": "环网潮流自然分布的决定因素",
    "stem": "环网潮流的自然分布取决于线路的",
    "options": [
      {
        "label": "A",
        "text": "阻抗"
      },
      {
        "label": "B",
        "text": "电抗"
      },
      {
        "label": "C",
        "text": "电阻"
      },
      {
        "label": "D",
        "text": "阻抗角"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "无加压器等控制手段时，闭式环网的自然潮流严格按照**线路等值阻抗 $Z = R + jX$ 成反比**分布。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 3
  },
  {
    "id": "2022-813-选择-09",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "选择题",
    "type": "single",
    "topic": "50Hz系统短路冲击电流出现时刻",
    "stem": "对于 $50 \\mathrm{~Hz}$ 电力系统, 短路冲击电流出现时刻是短路后的",
    "options": [
      {
        "label": "A",
        "text": "0 秒"
      },
      {
        "label": "B",
        "text": "0.1 秒"
      },
      {
        "label": "C",
        "text": "0.01 秒"
      },
      {
        "label": "D",
        "text": "1 秒"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "工频周期 20ms，短路发生后经过半个周期（**0.01 秒 / 10ms**），非周期分量与周期分量同相叠加达到冲击峰值。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 7
  },
  {
    "id": "2022-813-选择-10",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "选择题",
    "type": "single",
    "topic": "复合序网分析不对称短路时有源的序网",
    "stem": "利用复合序网分析不对称短路时，有源的序网是",
    "options": [
      {
        "label": "A",
        "text": "正序网"
      },
      {
        "label": "B",
        "text": "负序网"
      },
      {
        "label": "C",
        "text": "零序网"
      },
      {
        "label": "D",
        "text": "所有序网都无源"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "同步发电机仅产生正序对称电动势，故**仅正序网是有源网**，负序和零序网均为无源网（虚拟电源在故障点）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 8
  },
  {
    "id": "2022-813-判断-01",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "10kV架空线改电缆后弧光过电压风险减小",
    "stem": "某 10kV 系统，如果将该系统中的架空线路全部改为电缆线路，则单相接地后引起的弧光过电压风险会减小。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "电缆对地电容远大于架空线，单相接地容性电流剧增，**更容易引发间歇性弧光接地过电压**，风险显著增加。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 1
  },
  {
    "id": "2022-813-判断-02",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "线路只传输无功功率时不会产生有功损耗",
    "stem": "某输电线路上只流通无功功率时，该输电线路不会产生有功损耗。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "只要线路存在电阻 $R$，无功电流 $I_Q = Q/U$ 流过就会产生 $I_Q^2 R$ 的**有功功率损耗**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 3
  },
  {
    "id": "2022-813-判断-03",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "牛拉法比PQ分解法慢是因为需要形成雅可比矩阵",
    "stem": "同一个潮流计算问题，牛顿—拉夫逊法比 PQ 分解法计算速度慢的原因是需要形成雅克比矩阵。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "牛顿-拉夫逊法每次迭代需重新形成并求逆/分解雅可比矩阵，单步计算量大于系数矩阵恒定的 PQ 分解法。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 4
  },
  {
    "id": "2022-813-判断-04",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "根据具体情况电力系统可以不专门设置检修备用",
    "stem": "根据具体情况，电力系统可以不设置检修备用。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "检修备用可利用系统富余容量或安排在水电厂丰水期/负荷低谷期进行，**不需要专门留设独立机组**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 1
  },
  {
    "id": "2022-813-判断-05",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "500kV架空线高原地区比平原地区更容易发生电晕",
    "stem": "同样的 $500 \\mathrm{kV}$ 架空输电线在高原地区比平原地区更容易发生电晕。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "高原地区空气稀薄（空气相对密度 $\\delta$ 降低），电晕临界电压 $U_p \\propto \\delta$ 随之降低，故更容易发生电晕。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 2
  },
  {
    "id": "2022-813-判断-06",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "架空输电线路三相换位的目的是使铁塔受力均匀",
    "stem": "为了使铁塔受力均匀，架空输电线路的三相导线需要换位。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "整循环换位的目的是**减少三相线路阻抗与电纳参数的不对称**，消除对通信线的电磁干扰，而非机械受力。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 2
  },
  {
    "id": "2022-813-判断-07",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "架空输电线路避雷线使线路零序阻抗减小",
    "stem": "有避雷线的架空输电线路，避雷线将使输电线路的零序阻抗减小。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "避雷线中感应出反向零序电流起去磁作用，削弱零序磁链，使**线路等值零序电抗变小**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 8
  },
  {
    "id": "2022-813-判断-08",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "负序电流无法在发电机绕组中流通",
    "stem": "由于发电机只产生正序电流，所以负序电流无法在发电机绕组中流通。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "不对称短路产生的负序电流为对称三相逆序电流，**能够在发电机三相定子绕组中顺畅流通**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 8
  },
  {
    "id": "2022-813-判断-09",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "两相断线复合序网与单相接地短路复合序网类似",
    "stem": "电力系统发生两相断线时，其复合序网与单相接地短路的复合序网类似。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "**两相断线**（纵向故障）与**单相接地短路**（横向故障）的复合序网结构完全一致，均为**正、负、零序网串联**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 8
  },
  {
    "id": "2022-813-判断-10",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统中的每台发电机组都参与一次调频",
    "stem": "电力系统中的每台发电机组都将参与频率的一次调整。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "满载运行（无向上调节裕度）或未装设调速器的机组**无法参与频率一次调整**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 5
  },
  {
    "id": "2022-815-选择-01",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "可能有零序电流穿越的变压器接线形式",
    "stem": "可能有零序电流穿越的变压器接线形式是（ ）",
    "options": [
      {
        "label": "A",
        "text": "$y_{0}/\\Delta$"
      },
      {
        "label": "B",
        "text": "$y_{0}/y$"
      },
      {
        "label": "C",
        "text": "y/D"
      },
      {
        "label": "D",
        "text": "$y_{0}/y_{0}$"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "answerPending": false,
    "explanation": "只有中性点接地的 $Y_0$ 绕组能提供接地零序通路，**$Y_0/\\Delta$ 和 $Y_0/Y_0$** 均有零序电流穿越进入绕组。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 8
  },
  {
    "id": "2022-815-选择-02",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "短路电流有效值用于校验断路器的能力",
    "stem": "短路电流有效值用于校验断路器的（）",
    "options": [
      {
        "label": "A",
        "text": "动稳定"
      },
      {
        "label": "B",
        "text": "热稳定"
      },
      {
        "label": "C",
        "text": "开断能力"
      },
      {
        "label": "D",
        "text": "额定容量"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "短路电流周期分量有效值用于校验断路器的**开断能力**（C），全过程有效值用于校验**热稳定性**（B）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 7
  },
  {
    "id": "2022-815-选择-03",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "无限大电源供电三相短路暂态过程特点",
    "stem": "无限大容量电源供电的简单系统，三相短路暂态过程中（）",
    "options": [
      {
        "label": "A",
        "text": "电流无限大"
      },
      {
        "label": "B",
        "text": "功率无限大"
      },
      {
        "label": "C",
        "text": "电压恒定"
      },
      {
        "label": "D",
        "text": "频率恒定"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "无限大电源系统核心特征为电源容量无限大、内阻为零，母线**电压幅值恒定（C）与频率恒定（D）**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 7
  },
  {
    "id": "2022-815-选择-04",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "\\(Y_0/\\Delta-11\\) 接线变压器两侧正序电压相位",
    "stem": "$y_{0} / \\Delta - 1$ 的变压器， $\\Delta$ 侧的",
    "options": [
      {
        "label": "A",
        "text": "相电压正序分量比 $y_{0}$ 侧的A. 相电压正序分量（）。A、落后 330 度"
      },
      {
        "label": "B",
        "text": "超前 90 度"
      },
      {
        "label": "C",
        "text": "超前 30 度"
      },
      {
        "label": "D",
        "text": "落后 30 度"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "根据标准接线组别，$Y_0/\\Delta-11$ 表示低压侧（$\\Delta$ 侧）正序相电压超前高压侧（$Y_0$ 侧）**30°**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 2
  },
  {
    "id": "2022-815-选择-05",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "单回输电线路与双回输电线路零序电抗比较",
    "stem": "有架空地线的单回输电线路的零序电抗比有架空地线的双回输电线路的零序电抗（）",
    "options": [
      {
        "label": "A",
        "text": "大"
      },
      {
        "label": "B",
        "text": "小"
      },
      {
        "label": "C",
        "text": "相等"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "双回路并行运行时两回线之间存在互感去磁与分流作用，使得**单回输电线路的零序电抗小于双回线路每回电抗**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 2
  },
  {
    "id": "2022-815-选择-06",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "220kV/110kV/10kV 自耦变压器接线形式",
    "stem": "220kV/110kV/10kV自耦变压器采用的接线形式为( )。",
    "options": [
      {
        "label": "A",
        "text": "$y_{0}/y/\\Delta$"
      },
      {
        "label": "B",
        "text": "$y_{0}/y_{0}/\\Delta$"
      },
      {
        "label": "C",
        "text": "$y_{0}/y_{0}/y_{0}$"
      },
      {
        "label": "D",
        "text": "$y_{0}/\\Delta/y$"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "自耦变压器高压与中压绕组共用，中性点必须直接接地，低压绕组接成角形，接线形式为 **$Y_0/Y_0/\\Delta$**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 2
  },
  {
    "id": "2022-815-选择-07",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电力系统有功日负荷曲线下所含面积的含义",
    "stem": "电力系统有功日负荷曲线下所含的面积代表了负荷的（）",
    "options": [
      {
        "label": "A",
        "text": "日用电量"
      },
      {
        "label": "B",
        "text": "年用电量"
      },
      {
        "label": "C",
        "text": "月用电量"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "日负荷曲线积分 $\\int_{0}^{24} P(t) dt = W_{日}$，其涵盖的物理面积代表**日用电量**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 1
  },
  {
    "id": "2022-815-选择-08",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "系统全年电能损耗与最大负荷功率损耗之比",
    "stem": "系统全年的电能损耗与最大负荷时的功率损耗之比是（）",
    "options": [
      {
        "label": "A",
        "text": "最大负荷利用小时数"
      },
      {
        "label": "B",
        "text": "最小负荷利用小时数"
      },
      {
        "label": "C",
        "text": "最大负荷损耗利用小时数"
      },
      {
        "label": "D",
        "text": "最小负荷损耗利用小时数"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "公式 $\\Delta W = \\Delta P_{max} \\cdot T_\\tau$，电能损耗与最大功率损耗的比值定义为**最大负荷损耗时间 $T_\\tau$**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 3
  },
  {
    "id": "2022-815-选择-09",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电力线路等值电纳 B 主要反映的物理效应",
    "stem": "电力系统中电纳B. 主要反映线路带电运行产生的（）",
    "options": [
      {
        "label": "A",
        "text": "磁场效应"
      },
      {
        "label": "B",
        "text": "电场效应"
      },
      {
        "label": "C",
        "text": "电能损耗"
      },
      {
        "label": "D",
        "text": "电晕效应"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "电纳 $B = \\omega C$，主要反映导线间及导线对地电容在交流电压作用下产生的**电场效应**（充电功率）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 2
  },
  {
    "id": "2022-815-选择-10",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "同型号导线用在 500kV 比 220kV 的线路电纳",
    "stem": "同一型号导线用在 $500 \\mathrm{kV}$ 比用在 $220 \\mathrm{kV}$ , 其线路电纳 ( )。",
    "options": [
      {
        "label": "A",
        "text": "大"
      },
      {
        "label": "B",
        "text": "小"
      },
      {
        "label": "C",
        "text": "相等"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "500kV 线路分裂根数多、导线等效半径 $r_{eq}$ 大，公式 $b = \\frac{2.98 \\times 10^{-6}}{\\lg(D_m/r_{eq})}$，故**电纳更大**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 2
  },
  {
    "id": "2022-815-选择-11",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电力系统潮流计算方程的数学类型",
    "stem": "电力系统潮流计算的方程属于（）。",
    "options": [
      {
        "label": "A",
        "text": "线性代数方程"
      },
      {
        "label": "B",
        "text": "微分方程组"
      },
      {
        "label": "C",
        "text": "非线性微分方程"
      },
      {
        "label": "D",
        "text": "线性积分方程"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "节点功率与电压呈二次非线性三角/复数关系，潮流计算方程组属于**非线性代数方程组**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 4
  },
  {
    "id": "2022-815-选择-12",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "优化无功功率电源分布的优化目标",
    "stem": "优化无功功率电源分布的目的是降低网络中的（）",
    "options": [
      {
        "label": "A",
        "text": "无功损耗"
      },
      {
        "label": "B",
        "text": "有功损耗"
      },
      {
        "label": "C",
        "text": "电压损耗"
      },
      {
        "label": "D",
        "text": "电气距离"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "无功电源优化的核心目标是在满足节点电压约束下，使全网**有功功率损耗 $\\Delta P_{loss}$ 最小**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 6
  },
  {
    "id": "2022-815-选择-13",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "单位时间内输入能量增量与输出功率增量比值",
    "stem": "单位时间内输入能量增量与输出功率增量的比值称为（）",
    "options": [
      {
        "label": "A",
        "text": "比耗量"
      },
      {
        "label": "B",
        "text": "耗量微增率"
      },
      {
        "label": "C",
        "text": "网损微增率"
      },
      {
        "label": "D",
        "text": "能量微增率"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "表达式 $\\lambda = \\frac{dF}{dP}$，定义为发电设备的**耗量微增率**（或耗量微增率准则）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 1
  },
  {
    "id": "2022-815-选择-14",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电力系统中无功功率严重过剩会导致",
    "stem": "电力系统中无功过剩时，会造成（）",
    "options": [
      {
        "label": "A",
        "text": "频率上升"
      },
      {
        "label": "B",
        "text": "频率下降"
      },
      {
        "label": "C",
        "text": "电压上升"
      },
      {
        "label": "D",
        "text": "电压下降"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "无功功率平衡直接决定系统电压水平，无功功率严重过剩会导致全网**电压普遍抬高/上升**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 6
  },
  {
    "id": "2022-815-选择-15",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "并联电容器组在电网中的无功补偿特性",
    "stem": "电容器组可以向系统中（）",
    "options": [
      {
        "label": "A",
        "text": "发出容性无功"
      },
      {
        "label": "B",
        "text": "吸收感性无功"
      },
      {
        "label": "C",
        "text": "发出感性无功"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerPending": false,
    "explanation": "静电电容器作为无功电源，向系统**发出容性无功功率**（A），等价于**吸收感性无功功率**（B）。",
    "verified": true,
    "conflict": "【双解/概念辨析】并联电容器在正弦交流电路中输出超前电流，物理上向系统供给容性无功功率（A对）；在电工理论等价描述中亦常表述为“吸收感性无功功率”（B对），两表述皆成立。",
    "source": "考研",
    "year": "2022",
    "chapter": 1
  },
  {
    "id": "2022-815-判断-01",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "中性点不接地发生单相接地接地点线电压对称",
    "stem": "中性点不接地系统中发生单向接地时，接地点的线电压仍然对称。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "金属性单相接地仅改变三相对地电压，**相间线电压幅值与相对相位关系依然保持对称**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 1
  },
  {
    "id": "2022-815-判断-02",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "导线换位目的是改善电场分布减小线路电抗",
    "stem": "架空线路三相换位的目的是改善导线周围的电场分布，减少线路的电抗值。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "导线换位的根本目的是**实现三相线路电气参数（阻抗与电纳）完全对称**，而非减小电抗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 2
  },
  {
    "id": "2022-815-判断-04",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "LGJ-240 导线的电抗比 LGJ-185 导线电抗小",
    "stem": "同一线路如何采用 LGJ-240 的导线，其电抗比采用 LGJ-185 的导线电抗小。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "LGJ-240 截面积大，导线半径 $r$ 大，由 $x_1 = 0.1445\\lg\\frac{D_m}{r} + 0.0157$ 可知其**单位电抗较小**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 2
  },
  {
    "id": "2022-815-判断-05",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "年损耗电能除以最大有功功率称为最大负荷利用小时数",
    "stem": "一年中线路损耗的电能除以一年中的最大有功功率称为最大负荷利用小时数。（）6、用牛顿-拉夫逊法进行潮流计算时，线性修正方程求解的是节点的电压值。（）7、调差系数越大，则同等频率下降时，发电机所带负荷增大越多。（）8、发电设备单位时间内消耗的能源与发出有功功率的关系，称为比耗量。（）9、电网无功补偿的原则，一般按照分层分区和就地平衡原则考虑。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "年用电量除以最大负荷 $W/P_{max}$ 称为最大负荷利用小时数 $T_{max}$；损耗电能除以最大功率损耗为 $T_\\tau$。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 4
  },
  {
    "id": "2022-815-判断-10",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "改变电压幅值主要改变网络中的有功功率分布",
    "stem": "改变电压幅值，主要改变网络中有功功率的分布。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "改变电压幅值主要改变**无功功率分布**；改变电压相位（相角）主要改变**有功功率分布**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 5
  },
  {
    "id": "2022-815-判断-11",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "两相短路变压器中性点电抗以3倍值影响故障电流",
    "stem": "电力系统发生两相短路故障时，变压器中性点的电抗以三倍的值影响故障电流。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "两相短路不接地，故障电流中无零序分量，故**变压器中性点接地阻抗对两相短路电流无影响**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 2
  },
  {
    "id": "2022-815-判断-12",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "横向故障或纵向故障统称为不对称故障",
    "stem": "无论是横向故障还是纵向故障，统称为不对称故障。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "三相短路（横向）与三相断线（纵向）均属于**对称故障**，只有单相/两相类故障才是不对称故障。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 8
  },
  {
    "id": "2022-815-判断-13",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "三相三柱式变压器零序激磁电抗不能看作无穷大",
    "stem": "三相三柱式变压器的零序激磁电抗不可以看作是无穷大。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "三相三柱式变压器的零序磁通只能经油与油箱壁闭合，磁阻大，**零序激磁电抗较小**（约 0.3~1.0标幺值），不能视为无穷大。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 2
  },
  {
    "id": "2022-815-判断-14",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "中性点不接地单相接地中性点电位升高到线电压",
    "stem": "中性点不接地系统，发生单相接地短路时，中性点电位会升高到线电压。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "中性点电位升高到**相电压 $U_N/\\sqrt{3}$**，非故障相对地电压才升高到线电压。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 1
  },
  {
    "id": "2022-815-判断-15",
    "paper": "华北电力大学 2022 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "双绕组自耦变压器中性线上通过的零序电流大小",
    "stem": "双绕组自耦变压器中性线上的零序电流是",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "自耦变压器中性点接地时，中性线上流过的零序电流为高压侧与中压侧**零序电流的代数差（即 $3I_0$）**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2022",
    "chapter": 2
  },
  {
    "id": "2021-812-判断-01",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "110kV/11kV 变压器是否为降压变压器",
    "stem": "如果一台变压器的变比为 $110 / 11\\mathrm{kV}$ ，则这台变压器是降压变压器。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "一次侧接 110kV 电网，二次侧额定 11kV（比电网标称 10kV 高 10% 补偿压降），属于**降压变压器**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 2
  },
  {
    "id": "2021-812-判断-02",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "导线半径越大越容易产生电晕",
    "stem": "架空导线的半径越大，则越容易产生电晕。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "导线半径 $r$ 越大，表面电场强度越小，电晕临界电压 $U_p \\propto r \\ln(D/r)$ 越高，**越不容易产生电晕**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 2
  },
  {
    "id": "2021-812-判断-03",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "架空导线对地存在电容可看作无功电源",
    "stem": "因为架空导线对地存在电容，所以架空导线可以看作是系统的无功电源。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "线路对地电纳 $B$ 产生充电功率 $Q_c = U^2 B$，高压/轻载时线路可充当**容性无功电源**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 6
  },
  {
    "id": "2021-812-判断-04",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "相同收敛判据下牛拉法与PQ分解法精度",
    "stem": "在收敛判据相同的情况下，牛顿—拉夫逊法和 PQ 分解法潮流计算的精度相同。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "求解相同的非线性代数方程组，只要收敛判据相同，**最终收敛精度完全相同**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 4
  },
  {
    "id": "2021-812-判断-05",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "检修中的发电设备属于冷备用",
    "stem": "电力系统中备用容量可分为热备用和冷备用，检修中的发电设备属于冷备用。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "冷备用指未运转但完好、随时可启动的设备；**检修中的设备处于不可用状态，不属于冷备用**（属检修备用）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 1
  },
  {
    "id": "2021-812-判断-06",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "节点电压降低时电容器提供无功变化",
    "stem": "电力系统某节点装有并联补偿电容器，当该节点电压降低时，电容器向系统提供的感性无功将减少。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "并联电容器无功 $Q = U^2 B$，电压降低时发出容性无功急剧减少；电容器本身不提供感性无功，调节特性为负。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 6
  },
  {
    "id": "2021-812-判断-07",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "回路电抗与电阻比值越大冲击系数越小",
    "stem": "计算冲击电流时用到冲击系数，回路中电抗与电阻的比值越大，则冲击系数越小。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "$X/R$ 越大，时间常数 $T_a = X/\\omega R$ 越大，衰减越慢，冲击系数 $k_{ch} = 1 + e^{-0.01/T_a}$ **越大**（接近2）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 7
  },
  {
    "id": "2021-812-判断-08",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "不对称接地短路零序电压在短路点最高",
    "stem": "一般电力系统发生不对称接地短路后，零序电压在短路点是最高的。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "零序网络无源，短路点相当于零序虚拟电源，**短路点零序电压最高**，越远离短路点零序电压越低。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 8
  },
  {
    "id": "2021-812-判断-09",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "不对称接地短路零序电压短路点最高",
    "stem": "电力系统发生不对称接地短路后，零序电压在短路点是最高的。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "原卷同题重复考查，零序电压在故障点最高，中性点或电源端降为 0。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 8
  },
  {
    "id": "2021-812-判断-10",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "同杆双回线同向零序电流使零序电抗增大",
    "stem": "同杆架设的双回输电线, 当流过方向相同的零序电流时, 将使每回输电线的零序电抗增大。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "同向零序电流产生互磁通，相互互感助磁增强磁链，使得**每回线路的零序电抗增大**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 8
  },
  {
    "id": "2021-812-选择-01",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电力系统中性点接地方式包括",
    "stem": "电力系统中性点接地方式包括（）。",
    "options": [
      {
        "label": "A",
        "text": "直接接地"
      },
      {
        "label": "B",
        "text": "不接地"
      },
      {
        "label": "C",
        "text": "经消弧线圈接地"
      },
      {
        "label": "D",
        "text": "经电容器接地"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "包括：**直接接地（A）、不接地（B）、经消弧线圈接地（C）** 以及经小电阻接地；不包括经电容器接地。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 1
  },
  {
    "id": "2021-812-选择-02",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "选择题",
    "type": "single",
    "topic": "架空导线采用分裂导线的作用",
    "stem": "架空导线采用分裂导线的作用有（）。",
    "options": [
      {
        "label": "A",
        "text": "减小线路电抗"
      },
      {
        "label": "B",
        "text": "抑制电晕"
      },
      {
        "label": "C",
        "text": "提高功率因数"
      },
      {
        "label": "D",
        "text": "减小电压损耗"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "answerPending": false,
    "explanation": "相当于增大等效半径，作用为：**减小线路电抗（A）、抑制电晕（B）、减小电压损耗（D）**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 2
  },
  {
    "id": "2021-812-选择-03",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电力线路有功损耗的相关参量",
    "stem": "电力线路上的有功损耗和以下哪些参量有关（）。",
    "options": [
      {
        "label": "A",
        "text": "线路流过的有功功率"
      },
      {
        "label": "B",
        "text": "线路流过的无功功率"
      },
      {
        "label": "C",
        "text": "线路电阻"
      },
      {
        "label": "D",
        "text": "线路电抗"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "公式 $\\Delta P = \\frac{P^2+Q^2}{U^2} R$，与**有功功率（A）、无功功率（B）、线路电阻（C）** 直接相关。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 3
  },
  {
    "id": "2021-812-选择-04",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "选择题",
    "type": "single",
    "topic": "潮流计算中 PV 节点待求量",
    "stem": "电力系统潮流计算中，PV节点待求的是（）。",
    "options": [
      {
        "label": "A",
        "text": "电压幅值"
      },
      {
        "label": "B",
        "text": "电压相位"
      },
      {
        "label": "C",
        "text": "有功功率"
      },
      {
        "label": "D",
        "text": "无功功率"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "answerPending": false,
    "explanation": "PV 节点已知有功 $P$ 和电压幅值 $U$，待求量为**无功功率 $Q$（D）和电压相位 $\\delta$（B）**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 4
  },
  {
    "id": "2021-812-选择-05",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电力系统互联并网运行的优点",
    "stem": "电力系统互联并网运行的优点是（）。",
    "options": [
      {
        "label": "A",
        "text": "减少备用容量"
      },
      {
        "label": "B",
        "text": "合理利用资源"
      },
      {
        "label": "C",
        "text": "提高供电可靠性"
      },
      {
        "label": "D",
        "text": "提高运行的经济型"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "互联能**减少备用容量（A）、合理利用水火资源（B）、提高供电可靠性（C）及运行经济性（D）**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 1
  },
  {
    "id": "2021-812-选择-06",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "选择题",
    "type": "single",
    "topic": "中枢点逆调压方式的特点",
    "stem": "电力系统中枢点采用逆调压方式时, 其调压特点有 ( )。",
    "options": [
      {
        "label": "A",
        "text": "高峰负荷时升高电压"
      },
      {
        "label": "B",
        "text": "高峰负荷时降低电压"
      },
      {
        "label": "C",
        "text": "低谷负荷时降低电压"
      },
      {
        "label": "D",
        "text": "低谷负荷时升高电压"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "answerPending": false,
    "explanation": "逆调压要求：**高峰负荷时升高电压至 1.05Un（A）**，**低谷负荷时降低电压至 Un（C）**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 6
  },
  {
    "id": "2021-812-选择-07",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "选择题",
    "type": "single",
    "topic": "单位时间内输入能量与输出能量/功率比值",
    "stem": "单位时间内输入能量和输出能量的比值称为（）。",
    "options": [
      {
        "label": "A",
        "text": "比耗量"
      },
      {
        "label": "B",
        "text": "耗量特性"
      },
      {
        "label": "C",
        "text": "耗量微增率"
      },
      {
        "label": "D",
        "text": "等耗量微增率"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "公式 $F/P$ 定义为发电设备的**比耗量**（耗量微增率为微分 $dF/dP$）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 1
  },
  {
    "id": "2021-812-选择-08",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "选择题",
    "type": "single",
    "topic": "负序电流经过变压器发生相位变化的组别",
    "stem": "负序电流经过变压器发生相位变化的联结组别是（）。",
    "options": [
      {
        "label": "A",
        "text": "$Y/Y-12$"
      },
      {
        "label": "B",
        "text": "$Y_{0}/Y_{0}-12$"
      },
      {
        "label": "C",
        "text": "$Y/\\Delta-11$"
      },
      {
        "label": "D",
        "text": "$Y_{0}/Y-12$"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "**$Y/\\Delta-11$ 组别**变压器使正序超前 30°、负序滞后 30°（发生相位变化）；$Y/Y-12$ 组别不改变相位。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 8
  },
  {
    "id": "2021-812-选择-09",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "选择题",
    "type": "single",
    "topic": "可能产生零序电流的短路形式",
    "stem": "可能产生零序电流的短路形式有（）",
    "options": [
      {
        "label": "A",
        "text": "单相接地短路"
      },
      {
        "label": "B",
        "text": "三相接地短路"
      },
      {
        "label": "C",
        "text": "两相短路"
      },
      {
        "label": "D",
        "text": "两相接地短路"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "answerPending": false,
    "explanation": "产生零序电流必须有接地通路，只有**单相接地短路（A）** 和 **两相接地短路（D）** 会产生零序电流。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 8
  },
  {
    "id": "2021-812-选择-10",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "选择题",
    "type": "single",
    "topic": "无限大电源三相短路电流包含的分量",
    "stem": "无穷大电源供电的系统中, 发生三相短路时, 短路电流中包含的分量有 ( )。",
    "options": [
      {
        "label": "A",
        "text": "周期分量"
      },
      {
        "label": "B",
        "text": "二倍频分量"
      },
      {
        "label": "C",
        "text": "负序分量"
      },
      {
        "label": "D",
        "text": "非周期分量"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "answerPending": false,
    "explanation": "包含幅值恒定的**工频周期分量（A）** 与按时间常数衰减的**直流非周期分量（D）**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 7
  },
  {
    "id": "2021-814-单选-01",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "输电线路上消耗的无功功率性质",
    "stem": "输电线路上消耗的无功功率为（）。",
    "options": [
      {
        "label": "A",
        "text": "等于0"
      },
      {
        "label": "B",
        "text": "容性"
      },
      {
        "label": "C",
        "text": "感性"
      },
      {
        "label": "D",
        "text": "以上都有"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "线路电纳发出容性无功，电抗消耗感性无功，轻载呈容性、重载呈感性，净无功**以上都有可能（D）**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 6
  },
  {
    "id": "2021-814-单选-02",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "输电线路采用分裂导线的作用",
    "stem": "输电线路采用分裂导线可以（）",
    "options": [
      {
        "label": "A",
        "text": "减小电抗"
      },
      {
        "label": "B",
        "text": "增大电抗"
      },
      {
        "label": "C",
        "text": "减小电纳"
      },
      {
        "label": "D",
        "text": "增大电阻"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "分裂导线增大了导线等效半径，主要作用是**减小线路电抗**（A）和抑制电晕。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 2
  },
  {
    "id": "2021-814-单选-03",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力线路按结构分类",
    "stem": "电力线路按结构可以分为两大类，即（）。",
    "options": [
      {
        "label": "A",
        "text": "放射式和环式"
      },
      {
        "label": "B",
        "text": "高压和低压"
      },
      {
        "label": "C",
        "text": "长线路和短线路"
      },
      {
        "label": "D",
        "text": "架空线路和电缆线路"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "电力线路按结构分为**架空线路和电缆线路**（D）两大类。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 1
  },
  {
    "id": "2021-814-单选-04",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "输电线路线损率的定义",
    "stem": "输电线路的线损率是指（）。",
    "options": [
      {
        "label": "A",
        "text": "阻抗上的损耗与始端输入功率之比"
      },
      {
        "label": "B",
        "text": "阻抗上的损耗与末端输出功率之比"
      },
      {
        "label": "C",
        "text": "线路电能损耗与末端输出电能之比"
      },
      {
        "label": "D",
        "text": "线路电能损耗与始端输入电能之比"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "定义为**线路电能损耗与始端输入电能之比**（$\\Delta W / W_1$）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 1
  },
  {
    "id": "2021-814-单选-05",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统潮流计算方程组类型",
    "stem": "电力系统潮流计算的方程组属于（）。",
    "options": [
      {
        "label": "A",
        "text": "线性代数方程组"
      },
      {
        "label": "B",
        "text": "微分方程组"
      },
      {
        "label": "C",
        "text": "非线性代数方程组"
      },
      {
        "label": "D",
        "text": "多元代数方程组"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "节点功率与电压呈非线性二次关系，属于**非线性代数方程组**（C）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 4
  },
  {
    "id": "2021-814-单选-06",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "调频厂出力增加系统频率变化",
    "stem": "调频厂出力增加，系统频率会（）。",
    "options": [
      {
        "label": "A",
        "text": "下降"
      },
      {
        "label": "B",
        "text": "上升"
      },
      {
        "label": "C",
        "text": "不变"
      },
      {
        "label": "D",
        "text": "都有可能"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "发电机有功输出增加使得 $P_G > P_L$，系统频率将**上升**（B）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 5
  },
  {
    "id": "2021-814-单选-07",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "运行变压器无功损耗与有功损耗比较",
    "stem": "在电网中运行的变压器，无功功率损耗比有功功率损耗（）。",
    "options": [
      {
        "label": "A",
        "text": "大"
      },
      {
        "label": "B",
        "text": "小"
      },
      {
        "label": "C",
        "text": "相等"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "变压器励磁及漏抗无功损耗远大于绕组及铁芯有功损耗，无功损耗比有功损耗**大**（A）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 3
  },
  {
    "id": "2021-814-单选-08",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "同步调相机过激运行输出特性",
    "stem": "同步调相机过激运行时可以向系统（）。",
    "options": [
      {
        "label": "A",
        "text": "吸收感性无功"
      },
      {
        "label": "B",
        "text": "发出感性无功"
      },
      {
        "label": "C",
        "text": "发出容性无功"
      },
      {
        "label": "D",
        "text": "以上说法都不对"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "同步调相机过励磁运行相当于强无功电源，向系统**发出感性无功功率**（B）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 6
  },
  {
    "id": "2021-814-单选-09",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "24个PQ、15个PV的40节点网雅可比阶数",
    "stem": "对于含有 24 个 PQ 节点，15 个 PV 节点的 40 节点网络，雅可比矩阵的阶数可以为（）",
    "options": [
      {
        "label": "A",
        "text": "40"
      },
      {
        "label": "B",
        "text": "80"
      },
      {
        "label": "C",
        "text": "39"
      },
      {
        "label": "D",
        "text": "78"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "未知变量包括 39 个相角 + 24 个电压幅值 = 63，若直角坐标未消除 PV 节点为 2(n-1) = **78阶（D）**。",
    "verified": true,
    "conflict": "【题型换算标注】40节点网若为极坐标雅可比阶数为 39+24=63（选项中无63）；题干考查直角坐标形式，剔除平衡节点后 39 个非平衡节点各有 e,f 两个修正方程，总阶数为 2×39 = 78（选项D）。",
    "source": "考研",
    "year": "2021",
    "chapter": 4
  },
  {
    "id": "2021-814-单选-10",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "运转中的发电设备所留有的备用容量",
    "stem": "运转中的发电设备所留有的备用容量称为（）。",
    "options": [
      {
        "label": "A",
        "text": "检修备用"
      },
      {
        "label": "B",
        "text": "国民经济备用"
      },
      {
        "label": "C",
        "text": "冷备用"
      },
      {
        "label": "D",
        "text": "热备用"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "已并网且处于运转状态的发电设备所保留的裕度称为**热备用**（D）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 1
  },
  {
    "id": "2021-814-单选-11",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "属于电力系统纵向故障的是",
    "stem": "在下列各种故障类型中，属于纵向故障的是（）。",
    "options": [
      {
        "label": "A",
        "text": "三相短路"
      },
      {
        "label": "B",
        "text": "两相断线"
      },
      {
        "label": "C",
        "text": "两相短路接地"
      },
      {
        "label": "D",
        "text": "单相接地短路"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "发生在输电线路串联纵向上的开路断线（**两相断线 B**）属于纵向故障。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 8
  },
  {
    "id": "2021-814-单选-12",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "不属于无穷大电源特点的是",
    "stem": "不属于无穷大电源特点的是（）。",
    "options": [
      {
        "label": "A",
        "text": "电压恒定"
      },
      {
        "label": "B",
        "text": "电流恒定"
      },
      {
        "label": "C",
        "text": "频率恒定"
      },
      {
        "label": "D",
        "text": "功率无限大"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "无限大电源电压与频率恒定、内阻为零、功率无限，但**短路电流随外部阻抗变化，并非恒定（B）**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 7
  },
  {
    "id": "2021-814-单选-13",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "关于变压器零序电抗错误说法",
    "stem": "关于变压器的零序电抗，下列说法不正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "零序等值漏抗与正序相同"
      },
      {
        "label": "B",
        "text": "零序励磁电抗与铁芯结构有关"
      },
      {
        "label": "C",
        "text": "Y型联结的绕组中不会有零序电流"
      },
      {
        "label": "D",
        "text": "三角形联结的绕组中不会有零序电流"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "**$\\Delta$ 绕组内部可以流通感应零序环流**，选项 D 称“不会有零序电流”属于错误说法。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 2
  },
  {
    "id": "2021-814-单选-14",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "两相接地短路复合序网连接方式",
    "stem": "系统发生两相接地短路故障时，复合序网的连接方式为（）。",
    "options": [
      {
        "label": "A",
        "text": "正序、负序并联，零序开路"
      },
      {
        "label": "B",
        "text": "正序、负序、零序串联"
      },
      {
        "label": "C",
        "text": "正序、零序并联，负序开路"
      },
      {
        "label": "D",
        "text": "正序、负序、零序并联"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "两相接地短路故障点正序、负序、零序网呈**正序、负序、零序并联**（D）连接。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 8
  },
  {
    "id": "2021-814-单选-15",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "不对称短路时负序电压沿线分布",
    "stem": "电力系统发生不对称短路时，离短路点越近，则负序电压（）。",
    "options": [
      {
        "label": "A",
        "text": "越大"
      },
      {
        "label": "B",
        "text": "越小"
      },
      {
        "label": "C",
        "text": "不变"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "负序网无源（故障点为虚拟负序电源），**离短路点越近，负序电压越大**（A）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 8
  },
  {
    "id": "2021-814-判断-01",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "变压器中性点装消弧线圈用于调压",
    "stem": "变压器中性点装设消弧线圈目的是用于调压。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "消弧线圈用于补偿单相接地电容电流，防止弧光过电压，**不具有调压功能**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 1
  },
  {
    "id": "2021-814-判断-02",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "设备额定电压多种故设置多个电压等级",
    "stem": "因为电力系统设备的额定电压有多种，所以系统要设置多个电压等级。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "电压等级设置由**输送距离与输送容量的经济性**决定，而非设备额定电压种类。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 1
  },
  {
    "id": "2021-814-判断-03",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "超高压线路电纳大故充电功率很大",
    "stem": "超高压输电线路由于单位长度的电纳比一般线路大，所以电纳上充电功率很大。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "超高压线路分裂根数多致电纳大，且充电功率 $Q_c = U^2 B$ 与电压平方成正比，数值很大。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 3
  },
  {
    "id": "2021-814-判断-04",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "均一电网经济功率分布与自然分布相同",
    "stem": "环网计算中，均一电网功率的经济分布与其功率的自然分布相同。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "均一网各段 $R/X$ 比值相同，按阻抗反比的自然分布与按电阻反比的经济分布完全重合。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 1
  },
  {
    "id": "2021-814-判断-05",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "牛拉法每次更新雅可比矩阵故比PQ法慢",
    "stem": "潮流计算牛拉法每次迭代时都要计算雅可比矩阵的元素，所以计算速度比PQ分解法慢。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "牛拉法单步需重新计算并分解雅可比矩阵，单步计算时间长于系数矩阵恒定的 PQ 分解法。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 4
  },
  {
    "id": "2021-814-判断-06",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "PQ分解法改进依据为高压网P-δ与Q-U解耦",
    "stem": "PQ 分解法是对牛拉法的改进, 改进依据之一是高压电网中, 电压相角的变化主要影响电力系统的有功功率潮流分布, 从而改变节点注入有功功率; 电压大小变化主要影响电力系统无功功率潮流的分布, 从而改变节点注入无功功率。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "高压网 $X \\gg R$，有功与电压相角强相关、无功与电压幅值强相关，构成 PQ 分解法解耦基础。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 4
  },
  {
    "id": "2021-814-判断-07",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "发电机与负荷单位调节功率均可整定",
    "stem": "发电机单位调节功率可以整定，负荷的单位调节功率也可以整定。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "发电机 $K_G$ 可通过调速器整定；**负荷 $K_L$ 由设备固有静态频率特性决定，不可人为整定**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 5
  },
  {
    "id": "2021-814-判断-08",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "串联电容器通过提供无功达到调压目的",
    "stem": "串联电容器主要通过向系统提供无功功率来减少电压损耗，从而达到调压的目的。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "串联电容通过**补偿线路电抗 $X$ 减小线路电压降落**调压，不直接提供无功总量。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 6
  },
  {
    "id": "2021-814-判断-09",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "满载机组越多全系统等值调差系数越大",
    "stem": "在电力系统的一次调频中，满载的机组越多，全系统发电机组的等值调差系数越大。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "满载机组失去向上调节能力（$K_G=0$），全网等值 $K_G$ 减小，系统等值调差系数 $R = 1/K_G$ 增大。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 5
  },
  {
    "id": "2021-814-判断-10",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "考核经济性的指标为厂用电率与网损率",
    "stem": "考核电力系统运行经济性的重要指标是厂用电率和网损率。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "厂用电率反映发电厂内部能耗，网损率反映电网输配电损耗，均为核心经济指标。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 1
  },
  {
    "id": "2021-814-判断-11",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "无限大电源三相短路强制分量幅值不衰减",
    "stem": "无限大功率电源供电系统三相短路电流强制分量的幅值是不衰减的。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "强制分量即工频周期分量，因无限大电源母线电压幅值恒定，短路周期电流幅值恒定不衰减。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 7
  },
  {
    "id": "2021-814-判断-12",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "任一组三相不平衡相量均可分解为三序分量",
    "stem": "任一组三相不平衡相量均可分解为正序、负序和零序分量。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "对称分量法原理：任何三相不对称线性相量均可唯一分解为正序、负序和零序三组对称分量。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 8
  },
  {
    "id": "2021-814-判断-13",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "Y0/△变压器△侧接地短路绕组内无零序电流",
    "stem": "在 $Y_{0} / \\Delta$ 接线的变压器 $\\Delta$ 侧发生接地短路时， $\\Delta$ 侧内部不会有零序电流流通。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "$\\Delta$ 侧若发生接地短路，零序电流会在 $\\Delta$ 绕组**内部感应出闭合环流**（“不会有”陈述错误）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 8
  },
  {
    "id": "2021-814-判断-14",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "接地阻抗 Zg 不流过正负序电流故无影响",
    "stem": "正序和负序电流不流过中性点接地阻抗 $Z_{g}$ ，因此 $Z_{g}$ 对正序、负序电流没有影响。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "复合序网中三序网相互串并联，零序阻抗（含 $3Z_g$）改变会改变总阻抗，从而**间接影响正负序电流**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 8
  },
  {
    "id": "2021-814-判断-15",
    "paper": "华北电力大学 2021 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "两相短路接地故障非故障相电压可升至线电压",
    "stem": "发生两相短路接地故障时，非故障相的电压可能升高为线电压。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "两相接地短路时，故障两相对地拉低，零序阻抗很大时，**非故障相对地电压可能升高为线电压**。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2021",
    "chapter": 1
  },
  {
    "id": "2020-812-判断-01",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "降压变压器二次侧额定电压",
    "stem": "一般情况下，降压变压器副边绕组的额定电压应为用电设备额定电压的 1.1 或 1.05 倍。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "降压变压器二次绕组相当于用电设备的供电电源，为补偿内部及线路电压损耗，其额定电压一般比同级电网额定电压高5%或10%（即1.05或1.1倍）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 2
  },
  {
    "id": "2020-812-判断-02",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "轻载线路末端电压分布",
    "stem": "输电线路轻载时，末端（负载端）电压一定高于首端（电源端）电压。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "轻载或空载高压长线路由于容升效应末端电压高于首端；但在电阻较大、电容充电功率较小的中短距离轻载线路中，末端电压不一定高于首端。‘一定高于’表述绝对化。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 3
  },
  {
    "id": "2020-812-判断-03",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "交流电阻与直流电阻比较",
    "stem": "同等截面积和同等长度的线路，其交流电阻略小于直流电阻。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "由于集肤效应和邻近效应，交流电流在导体横截面上的分布不均匀，因此同等截面和长度的导线交流有效电阻略大于直流电阻。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 2
  },
  {
    "id": "2020-812-判断-04",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "变压器变比不匹配环流",
    "stem": "并列运行的变压器，如果变压器变比不匹配，则变压器中会有循环功率流通。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "变压器并联运行时，若变比不匹配，将在绕组构成的闭式回路中产生电势差，从而在变压器之间产生循环功率。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 2
  },
  {
    "id": "2020-812-判断-05",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "牛拉法与PQ分解法收敛性比较",
    "stem": "潮流计算机算法中，牛顿-拉夫逊法每次迭代时都要计算雅克比矩阵的元素，所以其收敛性比PQ分解法差。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "牛顿-拉夫逊法具有局部二次收敛性，收敛性强于基于简化解耦假定的PQ分解法。PQ分解法迭代次数更多，但单次迭代速度更快。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 4
  },
  {
    "id": "2020-812-判断-06",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "有功功率最优分配负荷类型",
    "stem": "电力系统的有功负荷的最优分配是针对第三类负荷进行的。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "电力系统有功负荷最优分配针对的是第一、二类负荷之外可根据经济调度在各机组间调整的负荷（广义调度负荷或第三类负荷）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 5
  },
  {
    "id": "2020-812-判断-07",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "无功不足整体低电压调压对策",
    "stem": "对于无功电源不足导致整体电压水平下降的电力系统应优先考虑增加无功补偿装置调压。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "无功电源不足导致系统整体电压水平下降时，根本解决手段是增设无功补偿装置；但若题意指出系统首要措施，应明确无功就地平衡。原官方答案核定为错（应优先考虑发电机调压或分接头？题解指出系统无功不足必须首先补足无功，调压手段需综合考量）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 6
  },
  {
    "id": "2020-812-判断-08",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "静止无功补偿器运行特性",
    "stem": "静止无功补偿器和电容器组一样当系统电压水平过低迫切需要增加无功输出时，补偿器往往无法增加。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "静止无功补偿器（SVC中的并联电容器组）其无功输出与母线电压平方成正比，当系统电压过低时输出无功按电压平方急剧下降，无法有效增加无功输出。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 6
  },
  {
    "id": "2020-812-判断-09",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "非周期自由分量电流物理本质",
    "stem": "无限大电源供电情况下突然发生三相短路时，短路电流中的非同期分量电流是为了维持短路瞬间电流不发生突变而出现的自由分量。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "短路瞬间电感回路磁链不能突变，非周期分量电流的出现是为了满足电感电流连续性定理而产生的自由分量。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 7
  },
  {
    "id": "2020-812-判断-10",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：812)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "经阻抗接地短路电流变化",
    "stem": "如果短路故障是经阻抗接地，无论哪种故障，短路电流都会减小。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "故障回路中串入过渡接地阻抗增大了总故障等值阻抗，因此无论哪种短路故障，其短路电流均比金属性接地短路电流减小。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 7
  },
  {
    "id": "2020-814-选择-01",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电能质量基本指标",
    "stem": "下列哪一个不是衡量电的质量的指标（）。",
    "options": [
      {
        "label": "A",
        "text": "电压偏差"
      },
      {
        "label": "B",
        "text": "频率偏差"
      },
      {
        "label": "C",
        "text": "供电可靠性"
      },
      {
        "label": "D",
        "text": "谐波畸变率"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "电能质量的三大基本指标是：电压偏差、频率偏差和电压正弦波形畸变率。线损率属于运行经济性指标，不属于电能质量指标。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 1
  },
  {
    "id": "2020-814-选择-02",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "中性点运行方式分类",
    "stem": "对一台向输电线路供电的降压变压器，下列说法正确（）。",
    "options": [
      {
        "label": "A",
        "text": "高压侧额定电压比电网高10%"
      },
      {
        "label": "B",
        "text": "低压侧额定电压比线路高10%"
      },
      {
        "label": "C",
        "text": "高压侧额定电压比电网高5%"
      },
      {
        "label": "D",
        "text": "低压侧额定电压比线路高5%"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "我国110kV及以上高压电网普遍采用中性点直接接地运行方式。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 2
  },
  {
    "id": "2020-814-选择-03",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "单相接地短路特征",
    "stem": "中性点直接接地系统在发生单相接地时，()。",
    "options": [
      {
        "label": "A",
        "text": "接地电流很大"
      },
      {
        "label": "B",
        "text": "接地电流很小"
      },
      {
        "label": "C",
        "text": "可以继续供电"
      },
      {
        "label": "D",
        "text": "非故障相电压升高为线电压大小"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "中性点直接接地系统发生单相接地属于严重单相接地短路，短路电流很大。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 8
  },
  {
    "id": "2020-814-选择-04",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "架空线换位目的",
    "stem": "扩径导线作用（）。",
    "options": [
      {
        "label": "A",
        "text": "减轻导线重量"
      },
      {
        "label": "B",
        "text": "减小导线电阻"
      },
      {
        "label": "C",
        "text": "降低导线比重"
      },
      {
        "label": "D",
        "text": "避免发生电晕"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "整循环换位使三相线路电抗和电纳参数对称。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 2
  },
  {
    "id": "2020-814-选择-05",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "变压器试验参数计算",
    "stem": "变压器空载试验，可得（）。",
    "options": [
      {
        "label": "A",
        "text": "$X_{T}$ 、 $B_{T}$"
      },
      {
        "label": "B",
        "text": "$G_{T}$ 、 $B_{T}$"
      },
      {
        "label": "C",
        "text": "$R_{T}$ 、 $X_{T}$"
      },
      {
        "label": "D",
        "text": "$R_{T}$ 、 $G_{T}$"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "短路试验可测得短路损耗和短路电压百分数，用于计算绕组等值电阻和等值电抗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 2
  },
  {
    "id": "2020-814-选择-06",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电导参数物理意义",
    "stem": "有功功率年负荷曲线，正确是（）。",
    "options": [
      {
        "label": "A",
        "text": "用于反映一年中负荷变化情况"
      },
      {
        "label": "B",
        "text": "用于制定各发电厂发电计划"
      },
      {
        "label": "C",
        "text": "用于反映一年中负荷消耗情况"
      },
      {
        "label": "D",
        "text": "用于制定发电设备检修计划"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "输电线路电导参数主要反映沿绝缘子串的泄漏电流损耗以及强电场下的电晕损耗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 1
  },
  {
    "id": "2020-814-选择-07",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "节点导纳矩阵阶数",
    "stem": "特高压线路轻载运行时, 如果不考虑无功补偿, 末端电压比始端 ( )。",
    "options": [
      {
        "label": "A",
        "text": "高"
      },
      {
        "label": "B",
        "text": "低"
      },
      {
        "label": "C",
        "text": "等于"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "采用直角坐标或节点导纳阵计算时，不计参考接地节点，阶数等于网络独立节点数n。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 4
  },
  {
    "id": "2020-814-选择-08",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "牛拉法雅可比矩阵性质",
    "stem": "节点导纳矩阵为方阵，其阶数等于( )。",
    "options": [
      {
        "label": "A",
        "text": "网络中的所有节点数"
      },
      {
        "label": "B",
        "text": "网络中除参考节点以外的节点数"
      },
      {
        "label": "C",
        "text": "网络中所有节点数加1"
      },
      {
        "label": "D",
        "text": "网络中所有节点数减1"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "雅可比矩阵反映功率对电压的偏导数，结构上与节点导纳矩阵稀疏结构相同，但非对称。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 4
  },
  {
    "id": "2020-814-选择-09",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "PQ节点待求量数目",
    "stem": "90 个 PQ 节点，9 个 PV 节点，1 个平衡节点，极坐标 N-L 修正方程个数（）。",
    "options": [
      {
        "label": "A",
        "text": "99"
      },
      {
        "label": "B",
        "text": "100"
      },
      {
        "label": "C",
        "text": "189"
      },
      {
        "label": "D",
        "text": "198"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "每个PQ节点待求电压幅值和相角两个变量，90个PQ节点对应180个未知数；PV节点1个未知数（相角）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 4
  },
  {
    "id": "2020-814-选择-10",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "调频厂选择",
    "stem": "调频器可以完成的频率调整任务是（）。",
    "options": [
      {
        "label": "A",
        "text": "频率的一次调整"
      },
      {
        "label": "B",
        "text": "频率的二次调整"
      },
      {
        "label": "C",
        "text": "频率的三次调整"
      },
      {
        "label": "D",
        "text": "以上都可以"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "具有调节能力的水电厂最适合担任系统主调频厂。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 5
  },
  {
    "id": "2020-814-选择-11",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "耗量微增率概念",
    "stem": "单位时间输入能量增量与输出功率增量比值为（）。",
    "options": [
      {
        "label": "A",
        "text": "比耗量"
      },
      {
        "label": "B",
        "text": "耗量特性"
      },
      {
        "label": "C",
        "text": "耗量微增率"
      },
      {
        "label": "D",
        "text": "等耗量微增率"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "发电机输入能量增量与输出有功增量之比称为耗量微增率。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 5
  },
  {
    "id": "2020-814-选择-12",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "异步电动机无功特性",
    "stem": "关于异步电动机的无功功率，下列说法正确的是（）。",
    "options": [
      {
        "label": "A",
        "text": "空载运行时不消耗无功"
      },
      {
        "label": "B",
        "text": "电压越高，消耗无功越多"
      },
      {
        "label": "C",
        "text": "容量越大，功率因数越高"
      },
      {
        "label": "D",
        "text": "实际负荷越大，消耗无功越少"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "异步电动机励磁支路消耗无功，电压升高时磁通增大，励磁无功显著增加。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 6
  },
  {
    "id": "2020-814-选择-13",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "中枢点调压方式",
    "stem": "同步发电机，进相运行时，（）。",
    "options": [
      {
        "label": "A",
        "text": "发出有功，发出无功"
      },
      {
        "label": "B",
        "text": "发出有功，吸收无功"
      },
      {
        "label": "C",
        "text": "消耗有功，发出无功"
      },
      {
        "label": "D",
        "text": "消耗有功，吸收无功"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "最大负荷时电压偏低、最小负荷时电压偏高，符合顺调压特征。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 6
  },
  {
    "id": "2020-814-选择-14",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "顺调压电压范围",
    "stem": "采用顺调压，正确的是（）。",
    "options": [
      {
        "label": "A",
        "text": "高峰负荷时升高至 $105\\% \\mathrm{U}_{\\mathrm{N}}$"
      },
      {
        "label": "B",
        "text": "低谷负荷下降为 $\\mathrm{U}_{\\mathrm{N}}$"
      },
      {
        "label": "C",
        "text": "高峰负荷不低于 $\\mathrm{U}_{\\mathrm{N}}$"
      },
      {
        "label": "D",
        "text": "低谷负荷不高于 $107.5\\% \\mathrm{U}_{\\mathrm{N}}$"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "顺调压要求最大负荷时不低于1.025Un，最小负荷时不高于1.075Un。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 6
  },
  {
    "id": "2020-814-选择-15",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "短路原因分析",
    "stem": "下列哪一项不是造成短路的原因（）",
    "options": [
      {
        "label": "A",
        "text": "绝缘材料自然老化"
      },
      {
        "label": "B",
        "text": "线路容升效应引起电压升高"
      },
      {
        "label": "C",
        "text": "设计，安装及维护不良"
      },
      {
        "label": "D",
        "text": "鸟兽跨接"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "短路主要由绝缘破坏、误操作或雷击造成；电网过电压可能引起绝缘击穿导致短路，但正常过电压本身不是短路。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 7
  },
  {
    "id": "2020-814-选择-16",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "无限大电源短路特性",
    "stem": "下列哪一个不是无限大功率电源三相短路电流取得最大值条件（）",
    "options": [
      {
        "label": "A",
        "text": "短路前空载"
      },
      {
        "label": "B",
        "text": "短路前满载"
      },
      {
        "label": "C",
        "text": "电压初相角为0"
      },
      {
        "label": "D",
        "text": "短路半个周期"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "无限大容量电源供电三相短路，周期分量恒定不衰减。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 7
  },
  {
    "id": "2020-814-选择-17",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "冲击电流时间",
    "stem": "同步发电机电抗（）。",
    "options": [
      {
        "label": "A",
        "text": "$x_{d}<x_{d}^{\\prime}<x_{d}^{\\prime\\prime}$"
      },
      {
        "label": "B",
        "text": "$x_{d}^{\\prime}=x_{d}^{\\prime\\prime}<x_{d}$"
      },
      {
        "label": "C",
        "text": "$x_{d}^{\\prime\\prime}<x_{d}<x_{d}^{\\prime}$"
      },
      {
        "label": "D",
        "text": "$x_{d}>x_{d}^{\\prime}>x_{d}^{\\prime\\prime}$"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "短路冲击电流出现在短路发生后约半个工频周期，即 t = 0.01s。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 7
  },
  {
    "id": "2020-814-选择-18",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "变压器零序漏抗",
    "stem": "关于变压器零序电抗与零序电流不正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "零序等值漏抗与正序相同"
      },
      {
        "label": "B",
        "text": "零序励磁电抗与铁芯结构有关"
      },
      {
        "label": "C",
        "text": "Y型联结组中不会有零序电抗"
      },
      {
        "label": "D",
        "text": "△型联结组不会有零序电抗"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "变压器零序漏抗等于正序漏抗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 2
  },
  {
    "id": "2020-814-选择-19",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "对称分量法解耦条件",
    "stem": "关于输电线路的零序电抗，正确的是（）。",
    "options": [
      {
        "label": "A",
        "text": "$x_{0}<x_{1}$"
      },
      {
        "label": "B",
        "text": "$x_{0}=x_{1}$"
      },
      {
        "label": "C",
        "text": "$x_{0}>x_{1}$"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "三相元件参数完全对称是对称分量法各序解耦的充要条件。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 8
  },
  {
    "id": "2020-814-选择-20",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "选择题",
    "type": "single",
    "topic": "两相短路接地序网关系",
    "stem": "在其他条件都完全相同的条件下，负序电流最大（）。",
    "options": [
      {
        "label": "A",
        "text": "$f^{(3)}$"
      },
      {
        "label": "B",
        "text": "$f^{(1)}$"
      },
      {
        "label": "C",
        "text": "$f^{(2)}$"
      },
      {
        "label": "D",
        "text": "$f^{(1.1)}$"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "两相短路接地的复合序网为正序、负序、零序网并联连接。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 8
  },
  {
    "id": "2020-814-判断-01",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电能质量基本指标",
    "stem": "变压器副边绕组的额定电压通常高于接入点的电网标称电压。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "电能质量的三大基本指标是：电压偏差、频率偏差和电压正弦波形畸变率。线损率属于运行经济性指标，不属于电能质量指标。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 1
  },
  {
    "id": "2020-814-判断-02",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "中性点运行方式分类",
    "stem": "架空输电线路为了减小电抗，通常采用钢芯铝绞线。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "我国110kV及以上高压电网普遍采用中性点直接接地运行方式。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 1
  },
  {
    "id": "2020-814-判断-03",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "单相接地短路特征",
    "stem": "输电线路上的有功损耗只和线路上流过的有功功率和电阻有关，与无功功率和电抗无关。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "中性点直接接地系统发生单相接地属于严重单相接地短路，短路电流很大。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 8
  },
  {
    "id": "2020-814-判断-04",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "架空线换位目的",
    "stem": "输电线路的无功功率总是从首端流向末端。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "整循环换位使三相线路电抗和电纳参数对称。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 2
  },
  {
    "id": "2020-814-判断-05",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "变压器试验参数计算",
    "stem": "PQ分解法由于简化了很多因素，计算精度比NL法低。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "短路试验可测得短路损耗和短路电压百分数，用于计算绕组等值电阻和等值电抗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 4
  },
  {
    "id": "2020-814-判断-06",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电导参数物理意义",
    "stem": "电力系统的备用容量等于总装机容量减去发电负荷。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "输电线路电导参数主要反映沿绝缘子串的泄漏电流损耗以及强电场下的电晕损耗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 1
  },
  {
    "id": "2020-814-判断-07",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "节点导纳矩阵阶数",
    "stem": "电力线路在有些运行条件下可能成为一个无功功率电源。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "采用直角坐标或节点导纳阵计算时，不计参考接地节点，阶数等于网络独立节点数n。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 4
  },
  {
    "id": "2020-814-判断-08",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "牛拉法雅可比矩阵性质",
    "stem": "电力系统发生三相短路后，短路电流周期分量幅值不变。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "雅可比矩阵反映功率对电压的偏导数，结构上与节点导纳矩阵稀疏结构相同，但非对称。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 7
  },
  {
    "id": "2020-814-判断-09",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "PQ节点待求量数目",
    "stem": "三相短路电流一定比单相接地短路电流大。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "每个PQ节点待求电压幅值和相角两个变量，90个PQ节点对应180个未知数；PV节点1个未知数（相角）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 8
  },
  {
    "id": "2020-814-判断-10",
    "paper": "华北电力大学 2020 年硕士生入学考试初试试题 (科目代码：814)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "调频厂选择",
    "stem": "发生两相短路后，短路点的零序电压最高。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "具有调节能力的水电厂最适合担任系统主调频厂。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2020",
    "chapter": 8
  },
  {
    "id": "2019-813-判断-01",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "导线排列对几何均距的影响",
    "stem": "相间距离相同的同一型号导线采用三角形的铺设方式比水平排列的方式电抗大。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "水平排列的三相导线几何均距 Dm = 1.26D，大于正三角形排列的 Dm = D，因此水平排列时导线电抗更大。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 2
  },
  {
    "id": "2019-813-判断-02",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "变压器铁芯结构与零序阻抗",
    "stem": "中性点安装的消弧线圈消耗感性无功功率, 可以抵消线路的充电功率, 减小短路电流, 使短路电流产生的电弧容易熄灭。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "三相三柱式变压器零序磁通只能经油箱壁闭合，磁阻极大，零序励磁电抗远小于正序励磁电抗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 8
  },
  {
    "id": "2019-813-判断-03",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "二次调频无差特性",
    "stem": "环形电力网络的潮流分布在不采取任何控制措施时，是按阻抗分布的。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "二次调频通过调频器平移静态特性曲线，可实现系统频率无差调节。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 5
  },
  {
    "id": "2019-813-判断-04",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "负荷功率因数与电压调整",
    "stem": "线路传输的功率相同，电压等级越高，绝缘投资越大，从经济的角度考虑，不宜采用高压输电网。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "提高负荷功率因数可减小线路传输的无功功率，从而显著降低电压损耗，而非对电压无影响。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 1
  },
  {
    "id": "2019-813-判断-05",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "牛顿法潮流迭代次数",
    "stem": "所谓有功功率的冷备用是指未运转的发电设备可能发出的最大有功功率，所以检修中的发电设备属于冷备用。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "牛顿法收敛速度快，通常3~5次迭代即可收敛，计算时间主要耗费在每次求解雅可比矩阵线性方程组。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 5
  },
  {
    "id": "2019-813-判断-06",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "单相接地非故障相电压",
    "stem": "在精度一样时潮流计算，PQ分解法忽略了很多因素，但计算结果的精度和牛拉法一样。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "中性点不接地电网发生单相接地时，非故障相对地电压升高为线电压（相电压的√3倍）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 1
  },
  {
    "id": "2019-813-判断-07",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "两相短路无零序电流",
    "stem": "电力系统常装设电抗器，并联电抗器主要用于调压，串联电抗器主要用于限制短路电流。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "两相短路故障回路不涉及大地和中性点，三相电流相量和为零，因此短路电流中不含零序分量。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 8
  },
  {
    "id": "2019-813-判断-08",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "发电机进相运行调压",
    "stem": "有功负荷的最优分配, 实质上是按照各机组的单位时间内输入的能量和输出功率之比相等来分配负荷的。 ( )",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "发电机进相运行吸收感性无功，用于降低局部母线过高电压，而非提升过低电压。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 5
  },
  {
    "id": "2019-813-判断-09",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "备用容量冷备用与热备用",
    "stem": "在系统中发生的各种故障，无论故障点在哪里，都是三相短路电流最大。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "运转中处于空载或欠载的发电设备属于热备用（旋转备用），冷备用指停止运转备用的发电机。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 7
  },
  {
    "id": "2019-813-判断-10",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "冲击电流动稳定校验",
    "stem": "三相短路电流瞬时值大小与直流分量起始值有关，和电源电动势、回路总阻抗的大小也有关。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "短路冲击电流最大瞬时值用于校验电气设备和母线导体的电动力稳定度。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 7
  },
  {
    "id": "2019-815-选择-01",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电能生产基本特征",
    "stem": "下列不是对电力系统的基本要求（）。",
    "options": [
      {
        "label": "A",
        "text": "保证可靠的持续供电"
      },
      {
        "label": "B",
        "text": "保证良好的电能质量"
      },
      {
        "label": "C",
        "text": "保证系统的优化运行"
      },
      {
        "label": "D",
        "text": "保证系统的经济性"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "电能发供用同时完成，不能大量经济存储。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 1
  },
  {
    "id": "2019-815-选择-02",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电力系统额定频率",
    "stem": "下列哪一个是有备用接线形式（）",
    "options": [
      {
        "label": "A",
        "text": "环式"
      },
      {
        "label": "B",
        "text": "链式"
      },
      {
        "label": "C",
        "text": "放射式"
      },
      {
        "label": "D",
        "text": "干线式"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "我国电力系统额定工频为50Hz。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 1
  },
  {
    "id": "2019-815-选择-03",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电网拓扑备用接线",
    "stem": "中性点不接地系统和经消弧线圈接地发生单相接地，（）应尽快选出故障线路。",
    "options": [
      {
        "label": "A",
        "text": "接地电流大"
      },
      {
        "label": "B",
        "text": "造成稳定性破坏"
      },
      {
        "label": "C",
        "text": "不能对负荷继续供电"
      },
      {
        "label": "D",
        "text": "非故障相电压升高为线电压，危及绝缘"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "两端供电网和环形网属于有备用网络。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 1
  },
  {
    "id": "2019-815-选择-04",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "绝缘子主要作用",
    "stem": "用于支持导线并且使带电和不带电保持安全距离（）",
    "options": [
      {
        "label": "A",
        "text": "杆塔"
      },
      {
        "label": "B",
        "text": "金具"
      },
      {
        "label": "C",
        "text": "绝缘子"
      },
      {
        "label": "D",
        "text": "避雷器"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "固定悬挂导线并保证导线与杆塔之间的可靠电气绝缘。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 2
  },
  {
    "id": "2019-815-选择-05",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "分裂导线电抗减小机理",
    "stem": "变压器的短路试验, 可以得到哪些参数 ( )",
    "options": [
      {
        "label": "A",
        "text": "XT BT"
      },
      {
        "label": "B",
        "text": "GT BT"
      },
      {
        "label": "C",
        "text": "RT XT"
      },
      {
        "label": "D",
        "text": "RT GT"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "分裂导线等效增大了导线自几何均距（等效半径），削弱相间与自感磁通，使线路电抗减小。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 2
  },
  {
    "id": "2019-815-选择-06",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "变压器电导参数",
    "stem": "（）制订发电设备检修计划的依据",
    "options": [
      {
        "label": "A",
        "text": "有功功率日负荷曲线"
      },
      {
        "label": "B",
        "text": "无功功率日负荷曲线"
      },
      {
        "label": "C",
        "text": "有功功率年负荷曲线"
      },
      {
        "label": "D",
        "text": "无功功率年负荷曲线"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "变压器励磁支路电导 GT 反映铁芯中的励磁铁耗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 2
  },
  {
    "id": "2019-815-选择-07",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "并联电容对地支路功率",
    "stem": "线路导纳为Y，加其上电压为U，该支路消耗功率为（）",
    "options": [
      {
        "label": "A",
        "text": "$\\Delta\\tilde{S}_{Y}=YU^{2}$"
      },
      {
        "label": "B",
        "text": "$\\Delta\\tilde{S}_{Y}=Y^{*}U^{2}$"
      },
      {
        "label": "C",
        "text": "$\\Delta\\tilde{S}_{Y}=-YU^{2}$"
      },
      {
        "label": "D",
        "text": "$\\Delta\\tilde{S}_{Y}=-Y^{*}U^{2}$"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "并联导纳支路消耗的功率为电压平方乘以导纳的共轭。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 3
  },
  {
    "id": "2019-815-选择-08",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "节点导纳矩阵修改",
    "stem": "加装（）不能调整环网中的潮流分布",
    "options": [
      {
        "label": "A",
        "text": "串联电容器"
      },
      {
        "label": "B",
        "text": "串联电抗器"
      },
      {
        "label": "C",
        "text": "并联电抗器"
      },
      {
        "label": "D",
        "text": "附加串联加压器"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "线路开断只需在两端节点自导纳减去该支路导纳，互导纳加回该支路导纳（置零）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 4
  },
  {
    "id": "2019-815-选择-09",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "PQ节点雅可比矩阵维数",
    "stem": "计算机解潮流，求解潮流方程的方法属于（）",
    "options": [
      {
        "label": "A",
        "text": "解析法"
      },
      {
        "label": "B",
        "text": "数值方法"
      },
      {
        "label": "C",
        "text": "手算法"
      },
      {
        "label": "D",
        "text": "对数法"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "每个PQ节点包含2个方程，维数增加2。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 4
  },
  {
    "id": "2019-815-选择-10",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "发电机功频静特性",
    "stem": "一个系统，99个PQ节点，一个平衡节点，雅克比矩阵阶数（）",
    "options": [
      {
        "label": "A",
        "text": "99"
      },
      {
        "label": "B",
        "text": "100"
      },
      {
        "label": "C",
        "text": "198"
      },
      {
        "label": "D",
        "text": "200"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "调速器动作下发电机有功出力随频率下降而增大。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 4
  },
  {
    "id": "2019-815-选择-11",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "等微增率准则",
    "stem": "对于负荷变动幅度大，周期长。采用（）",
    "options": [
      {
        "label": "A",
        "text": "一次调频"
      },
      {
        "label": "B",
        "text": "二次调频"
      },
      {
        "label": "C",
        "text": "三次调频"
      },
      {
        "label": "D",
        "text": "负荷控制"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "不计网损时，耗量微增率相等的各发电机组总能耗最小。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 5
  },
  {
    "id": "2019-815-选择-12",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "中枢点逆调压要求",
    "stem": "单位时间内输入能量与输出功率比值为（）",
    "options": [
      {
        "label": "A",
        "text": "比耗量"
      },
      {
        "label": "B",
        "text": "耗量特性"
      },
      {
        "label": "C",
        "text": "耗量微增率"
      },
      {
        "label": "D",
        "text": "等耗量微增率"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "最大负荷时电压提高，最小负荷时电压降低。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 6
  },
  {
    "id": "2019-815-选择-13",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "发电机调压经济性",
    "stem": "下列无功电源中，无功功率控制经济性最好的是（）",
    "options": [
      {
        "label": "A",
        "text": "同步发电机"
      },
      {
        "label": "B",
        "text": "同步调相机"
      },
      {
        "label": "C",
        "text": "并联电容器"
      },
      {
        "label": "D",
        "text": "静止补偿器"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "发电机自身具备励磁调节能力，无需增加额外设备投资，调压最为经济。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 6
  },
  {
    "id": "2019-815-选择-14",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "并联电抗器应用场合",
    "stem": "对于线路较长，负荷变化大的线路，一般采用（）",
    "options": [
      {
        "label": "A",
        "text": "顺调压"
      },
      {
        "label": "B",
        "text": "逆调压"
      },
      {
        "label": "C",
        "text": "常调压"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "特高压长线路轻载时装设并联电抗器以吸收对地容性无功，限制容升过电压。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 6
  },
  {
    "id": "2019-815-选择-15",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "短路后电流周期分量",
    "stem": "三绕组分接头一般在（）",
    "options": [
      {
        "label": "A",
        "text": "高中压绕组"
      },
      {
        "label": "B",
        "text": "高低压绕组"
      },
      {
        "label": "C",
        "text": "中低压绕组"
      },
      {
        "label": "D",
        "text": "三个都有"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "三相短路暂态过程中，周期分量有效值由次暂态电流逐渐衰减至稳态短路电流。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 7
  },
  {
    "id": "2019-815-选择-16",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "对称分量法变换矩阵",
    "stem": "无限大功率电源发生三相短路，幅值不变的分量是（）",
    "options": [
      {
        "label": "A",
        "text": "非周期分量"
      },
      {
        "label": "B",
        "text": "周期分量"
      },
      {
        "label": "C",
        "text": "倍频分量"
      },
      {
        "label": "D",
        "text": "自由分量"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "变换矩阵中旋转因子 a = exp(j120°)。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 7
  },
  {
    "id": "2019-815-选择-17",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "单相接地正序增广网络",
    "stem": "冲击电流一般用来校验（）",
    "options": [
      {
        "label": "A",
        "text": "热稳定性"
      },
      {
        "label": "B",
        "text": "动稳定性"
      },
      {
        "label": "C",
        "text": "灵敏度"
      },
      {
        "label": "D",
        "text": "都不是"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "单相接地短路的正序增广网络附加阻抗为 Z2 + Z0。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 8
  },
  {
    "id": "2019-815-选择-18",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "发电机各序电抗比较",
    "stem": "关于发电机的负序和零序电抗，不正确的（）",
    "options": [
      {
        "label": "A",
        "text": "负序旋转磁场与转子转向相反"
      },
      {
        "label": "B",
        "text": "负序电抗随转子旋转周期性变化"
      },
      {
        "label": "C",
        "text": "零序旋转磁场与转子转向相同"
      },
      {
        "label": "D",
        "text": "零序电抗比负序电抗小"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "发电机三相绕组对称，对称零序电流在定子气隙中产生的合成基波磁场为零。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 8
  },
  {
    "id": "2019-815-选择-19",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "故障相与非故障相概念",
    "stem": "关于零序网络说法不正确的（）",
    "options": [
      {
        "label": "A",
        "text": "零序网络中不包含发电机电动势"
      },
      {
        "label": "B",
        "text": "零序电流能流通的元件与正负序不同"
      },
      {
        "label": "C",
        "text": "所有电源的零序电势为零"
      },
      {
        "label": "D",
        "text": "零序电流的流通与变压器接线形式无关"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "不对称短路中发生绝缘击穿短路的相称为故障相。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 1
  },
  {
    "id": "2019-815-选择-20",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "两相短路接地点电位",
    "stem": "假设 $Z 1 = Z 2$ , 关于两相短路说法不正确 ( )",
    "options": [
      {
        "label": "A",
        "text": "故障相短路电流为正序电流 1.732 倍"
      },
      {
        "label": "B",
        "text": "短路点非故障相电压为正序电压两倍"
      },
      {
        "label": "C",
        "text": "故障相电压为非故障相电压一半"
      },
      {
        "label": "D",
        "text": "故障相电压与非故障相电压方向相同"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "金属性两相短路接地时，故障两相对地电压相等，其值取决于接地点残余电压。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 8
  },
  {
    "id": "2019-815-判断-01",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电能生产基本特征",
    "stem": "变压器高压绕组的额定电压通常高于接入点的电网标称电压（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "电能发供用同时完成，不能大量经济存储。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 1
  },
  {
    "id": "2019-815-判断-02",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统额定频率",
    "stem": "为了使铁塔受力均匀，架空输电线路的三相导线需要换位（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "我国电力系统额定工频为50Hz。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 2
  },
  {
    "id": "2019-815-判断-03",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电网拓扑备用接线",
    "stem": "架空输电线路在空载或轻载时末端电压一定比首端电压高",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "两端供电网和环形网属于有备用网络。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 3
  },
  {
    "id": "2019-815-判断-04",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "绝缘子主要作用",
    "stem": "电力系统无功功率是从高电压节点流向低电压节点（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "固定悬挂导线并保证导线与杆塔之间的可靠电气绝缘。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 6
  },
  {
    "id": "2019-815-判断-05",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "分裂导线电抗减小机理",
    "stem": "PQ 分解法，由于简化很多约束，所以比牛顿拉夫逊法收敛速度快（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "分裂导线等效增大了导线自几何均距（等效半径），削弱相间与自感磁通，使线路电抗减小。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 2
  },
  {
    "id": "2019-815-判断-06",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "变压器电导参数",
    "stem": "$\\sigma \\%$ 越大, 则同等频率下降时发电机所带负荷增大越多 ( )",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "变压器励磁支路电导 GT 反映铁芯中的励磁铁耗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 2
  },
  {
    "id": "2019-815-判断-07",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "并联电容对地支路功率",
    "stem": "顺调压的调压效果要比逆调压的调压效果好（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "并联导纳支路消耗的功率为电压平方乘以导纳的共轭。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 6
  },
  {
    "id": "2019-815-判断-08",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "节点导纳矩阵修改",
    "stem": "无限大功率电源发生三相短路时，电源电压的幅值和频率、电压保持恒定（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "线路开断只需在两端节点自导纳减去该支路导纳，互导纳加回该支路导纳（置零）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 4
  },
  {
    "id": "2019-815-判断-09",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "PQ节点雅可比矩阵维数",
    "stem": "不对称短路一定存在零序分量（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "每个PQ节点包含2个方程，维数增加2。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 4
  },
  {
    "id": "2019-815-判断-10",
    "paper": "华北电力大学 2019 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "发电机功频静特性",
    "stem": "越靠近短路点，零序电压越低（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "调速器动作下发电机有功出力随频率下降而增大。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2019",
    "chapter": 8
  },
  {
    "id": "2018-813-判断-01",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "消弧线圈设备属性",
    "stem": "中性点消弧线圈是用来补偿无功的设备。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "中性点消弧线圈是中性点接地补偿装置，用于补偿单相接地容性电流以消除接地电弧，而非负荷无功补偿设备。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 1
  },
  {
    "id": "2018-813-判断-02",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "自耦变压器变比与适用电压",
    "stem": "自耦变压器可以用于 $110 / 10 \\mathrm{kV}$ 的变电站中。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "自耦变压器变比不宜过大（一般在 220/110kV 或 500/220kV），110/10kV 变比达 11 倍，低压侧绝缘与过电压风险大，不适用于该电压等级。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 2
  },
  {
    "id": "2018-813-判断-03",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "导线截面与单位电抗关系",
    "stem": "同一线路如果采用 LGJ-240 的导线其电抗比采用 LGJ-185 的导线电抗小。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "导线截面增大则等效几何半径 r 增大，由单位电抗公式 $x_1=0.1445\\lg(D_m/r)+0.0157/n$ 可知，半径增大电抗减小。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 2
  },
  {
    "id": "2018-813-判断-04",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "高电压等级与网损关系",
    "stem": "输送功率相同的情况下电网采用的电压等级越高，网损越小。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "输送功率相同条件下，电压等级越高电流越小，线路电阻上的功率损耗 $\\Delta P=(S^2/U^2)R$ 越小。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 1
  },
  {
    "id": "2018-813-判断-05",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "无功不足调压对策",
    "stem": "对于无功电源不足导致整体电压水平下降的电力系统应优先考虑改变变压器变比调压，因为不需要增加任何投资费用。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "无功电源不足引起全网电压普遍偏低时，改变变压器变比仅能转移无功分布无法增发无功，必须首先加装无功补偿设备或优先利用发电机调压。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 6
  },
  {
    "id": "2018-813-判断-06",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "输电线路对地电纳属性",
    "stem": "输电线路对地电纳可以发出感性无功功率，所以输电线路相当于一个无功源？（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "输电线路对地电纳是容性电纳，产生容性充电功率（相当于向系统发出感性无功功率，或吸收感性无功）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 6
  },
  {
    "id": "2018-813-判断-07",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "串并联电抗器作用区分",
    "stem": "电力系统中装设的串联电抗器主要用于调压，而并联电抗器主要用于限制短路电流。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "电力系统中串联电抗器主要用于限制短路电流，并联电抗器主要用于吸收超高压轻载长线路的富余容性无功以抑制工频过电压。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 7
  },
  {
    "id": "2018-813-判断-08",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "满载机组与系统一次调频能力",
    "stem": "在电力系统的一次调频中，满载的机组越多，全系统发电机组的单位调节功率越多。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "满载机组无法继续增发出力，$K_G=0$；因此满载机组越多，全系统发电机组的综合单位调节功率反而越小。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 5
  },
  {
    "id": "2018-813-判断-09",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "各类型短路故障电流幅值比较",
    "stem": "在电力系统发生的不同类型的短路故障中，不一定都是三相短路电流最大。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "当短路点综合零序等效电抗小于正序等效电抗（$X_0 < X_1$）时，单相接地短路电流可以超过三相短路电流，因此三相短路不一定最大。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 7
  },
  {
    "id": "2018-813-判断-10",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "不对称断线故障电流特性",
    "stem": "电力系统的不对称断线故障和不对称短路故障一样都会有危险的大电流产生。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "断线属于纵向开路故障，回路阻抗增大，电流通常减小，不会像横向短路故障那样产生巨大的冲击电流。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 8
  },
  {
    "id": "2018-815-选择-01",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "消弧线圈全补偿谐振",
    "stem": "变压器高压绕组额定电压与所在电网额定电压关系（）。",
    "options": [
      {
        "label": "A",
        "text": "高 $10\\%$"
      },
      {
        "label": "B",
        "text": "高 $5\\%$"
      },
      {
        "label": "C",
        "text": "相等"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "消弧线圈若采用全补偿，系统在断线或不对称运行下极易发生串联铁磁谐振过电压。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 1
  },
  {
    "id": "2018-815-选择-02",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "变压器阻抗参数比值",
    "stem": "中性点经消弧线圈接地的电力系统一般采取的补偿方式（）。",
    "options": [
      {
        "label": "A",
        "text": "过补偿"
      },
      {
        "label": "B",
        "text": "欠补偿"
      },
      {
        "label": "C",
        "text": "全补偿"
      },
      {
        "label": "D",
        "text": "无补偿"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "高压变压器电抗远大于电阻，运行中无功损耗远大于有功损耗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 1
  },
  {
    "id": "2018-815-选择-03",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电力网线损率定义",
    "stem": "电力线路进行整循环换位的目的是（）",
    "options": [
      {
        "label": "A",
        "text": "减小电阻的不对称"
      },
      {
        "label": "B",
        "text": "使导线受力均匀"
      },
      {
        "label": "C",
        "text": "减小电抗的不对称"
      },
      {
        "label": "D",
        "text": "使杆塔受力均匀"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "网损率是指电网损失电量占首端输入总电量的百分比。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 1
  },
  {
    "id": "2018-815-选择-04",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "潮流算法收敛精度对比",
    "stem": "同一型号导线，用在高电压等级线路要比用在低电压等级线路中电抗值。",
    "options": [
      {
        "label": "A",
        "text": "大"
      },
      {
        "label": "B",
        "text": "小"
      },
      {
        "label": "C",
        "text": "相等"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "牛拉法与PQ分解法在相同收敛判据下最终收敛精度相同。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 1
  },
  {
    "id": "2018-815-选择-05",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "发电机励磁过励状态",
    "stem": "变压器短路实验得到的数据可用于计算变压器的（）。",
    "options": [
      {
        "label": "A",
        "text": "电导和电纳"
      },
      {
        "label": "B",
        "text": "电阻和电抗"
      },
      {
        "label": "C",
        "text": "电阻和电导"
      },
      {
        "label": "D",
        "text": "电抗和电纳"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "发电机过励磁运行时向系统发出感性无功功率。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 2
  },
  {
    "id": "2018-815-选择-06",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "冲击电流校验项目",
    "stem": "线路中安装串联电容器, 电容器电抗 $X_{c}$ 大于线路电抗, 线路空载运行, 末端电压 $U_{2}$ 与首端电压 $U_{1}$ 的关系 ( )。",
    "options": [
      {
        "label": "A",
        "text": "$U_{2} > U_{1}$"
      },
      {
        "label": "B",
        "text": "$U_{2} < U_{1}$"
      },
      {
        "label": "C",
        "text": "$U_{2} = U_{1}$"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "冲击电流最大瞬时值用于校验电气设备动稳定度。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 3
  },
  {
    "id": "2018-815-选择-07",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "纵向故障与横向故障",
    "stem": "两同型号主变并列运行, 变压器 $\\mathrm{T} 1$ 变比 $110 / 11 \\mathrm{~kV}$ , 变压器 $\\mathrm{T} 2$ 变比 $115.5 / 11 \\mathrm{kV}$ , 则变压器 $\\mathrm{T} 1$ 的功率 $\\mathrm{S} 1$ 与变压器 $\\mathrm{T} 2$ 的功率 $\\mathrm{S} 2$ 的关系 ( )。",
    "options": [
      {
        "label": "A",
        "text": "$\\mathrm{S} 1 > \\mathrm{S} 2$"
      },
      {
        "label": "B",
        "text": "$\\mathrm{S} 1 < \\mathrm{S} 2$"
      },
      {
        "label": "C",
        "text": "$\\mathrm{S} 1 = \\mathrm{S} 2$"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "单相断线属于纵向故障，相间短路属于横向故障。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 8
  },
  {
    "id": "2018-815-选择-08",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "对称分量法前提",
    "stem": "环网潮流的经济功率是按照线路的（）分布的。",
    "options": [
      {
        "label": "A",
        "text": "电阻"
      },
      {
        "label": "B",
        "text": "电抗"
      },
      {
        "label": "C",
        "text": "电纳"
      },
      {
        "label": "D",
        "text": "电导"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "网络元件参数三相对称是对称分量法各序解耦的前提。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 8
  },
  {
    "id": "2018-815-选择-09",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "单相接地非故障相对地电压",
    "stem": "平衡节点已知的是（）",
    "options": [
      {
        "label": "A",
        "text": "P和Q"
      },
      {
        "label": "B",
        "text": "P和U"
      },
      {
        "label": "C",
        "text": "U和δ"
      },
      {
        "label": "D",
        "text": "P和δ"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "10kV系统单相接地，非故障相对地电压升为线电压10kV。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 1
  },
  {
    "id": "2018-815-选择-10",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "潮流线性修正方程",
    "stem": "用牛拉法进行潮流计算，线性修正方程求解的是（）。",
    "options": [
      {
        "label": "A",
        "text": "线路功率"
      },
      {
        "label": "B",
        "text": "节点注入功率"
      },
      {
        "label": "C",
        "text": "节点电压"
      },
      {
        "label": "D",
        "text": "节点电压修正量"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "牛拉法修正方程直接求解的是电压相角与幅值修正量。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 4
  },
  {
    "id": "2018-815-选择-11",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "负荷频率调节效应",
    "stem": "某 n 节点网络，若 PQ 节点数为 m-1 个，则以直角坐标表示的雅可比矩阵阶数（）。",
    "options": [
      {
        "label": "A",
        "text": "2n"
      },
      {
        "label": "B",
        "text": "2n-2"
      },
      {
        "label": "C",
        "text": "2m-2"
      },
      {
        "label": "D",
        "text": "2n-2m"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "负荷吸收的有功功率随系统频率下降而减少。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 4
  },
  {
    "id": "2018-815-选择-12",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "一次调频有差特征",
    "stem": "电力系统有功备用容量中哪个不用专门设置（）。",
    "options": [
      {
        "label": "A",
        "text": "负荷备用"
      },
      {
        "label": "B",
        "text": "国民经济备用"
      },
      {
        "label": "C",
        "text": "事故备用"
      },
      {
        "label": "D",
        "text": "检修备用"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "机组一次调频依靠调速器有差静态特性，属于有差调节。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 5
  },
  {
    "id": "2018-815-选择-13",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "中枢点调压措施选择",
    "stem": "秋冬季节枯水期，调频厂一般选用（）",
    "options": [
      {
        "label": "A",
        "text": "高温高压水电厂"
      },
      {
        "label": "B",
        "text": "中温中压火电厂"
      },
      {
        "label": "C",
        "text": "核电厂"
      },
      {
        "label": "D",
        "text": "水电厂"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "系统无功充裕但局部电压低时，优先调节变压器分接头。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 6
  },
  {
    "id": "2018-815-选择-14",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电力系统频率偏移容限",
    "stem": "负荷高峰时中枢电压升高，负荷低谷时中枢电压降低的调压方式是（）",
    "options": [
      {
        "label": "A",
        "text": "顺调压"
      },
      {
        "label": "B",
        "text": "逆调压"
      },
      {
        "label": "C",
        "text": "常调压"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "国家规程规定大容量电力系统正常频率允许偏差为 ±0.2Hz。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 6
  },
  {
    "id": "2018-815-选择-15",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "次暂态电动势计算",
    "stem": "电力系统无功功率过剩会使（）",
    "options": [
      {
        "label": "A",
        "text": "电压升高"
      },
      {
        "label": "B",
        "text": "频率升高"
      },
      {
        "label": "C",
        "text": "电压降低"
      },
      {
        "label": "D",
        "text": "频率降低"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "发电机次暂态电动势在短路初始瞬间数值保持恒定。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 6
  },
  {
    "id": "2018-815-选择-16",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "两相短路附加阻抗",
    "stem": "故障类型属于纵向故障的是（）",
    "options": [
      {
        "label": "A",
        "text": "三相短路"
      },
      {
        "label": "B",
        "text": "两相短路"
      },
      {
        "label": "C",
        "text": "单相接地短路"
      },
      {
        "label": "D",
        "text": "两相断线"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "两相短路正序增广网络附加阻抗为负序等值阻抗 Z2。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 8
  },
  {
    "id": "2018-815-选择-17",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "变压器零序接线通断",
    "stem": "以下不属于无限大电源特点的是（）",
    "options": [
      {
        "label": "A",
        "text": "电压恒定"
      },
      {
        "label": "B",
        "text": "电流恒定"
      },
      {
        "label": "C",
        "text": "功率无限大"
      },
      {
        "label": "D",
        "text": "频率恒定"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "Y0/Δ接线变压器三角形侧零序电流在绕组内环流，外电路无零序电流。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 7
  },
  {
    "id": "2018-815-选择-18",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "架空线避雷线保护角",
    "stem": "YN/y 接线变压器，当 YN 侧发生不对称短路故障，则 y 侧零序电流标幺值大小（）",
    "options": [
      {
        "label": "A",
        "text": "0"
      },
      {
        "label": "B",
        "text": "1"
      },
      {
        "label": "C",
        "text": "0.5"
      },
      {
        "label": "D",
        "text": "∞"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "避雷线外侧保护角越小，防雷绕击率越低。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 2
  },
  {
    "id": "2018-815-选择-19",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "输电线路电晕临界场强",
    "stem": "系统发生短路时，越靠近短路点，正序电压（）。",
    "options": [
      {
        "label": "A",
        "text": "越低"
      },
      {
        "label": "B",
        "text": "越高"
      },
      {
        "label": "C",
        "text": "不变"
      },
      {
        "label": "D",
        "text": "都不对"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "晴天干燥空气中光滑圆导线表面电晕临界场强约为 30kV/cm。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 2
  },
  {
    "id": "2018-815-选择-20",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "选择题",
    "type": "single",
    "topic": "输电线路经济电流密度",
    "stem": "无功功率不足的电力系统，当电压不满足要求时，首先应采取的措施是（）",
    "options": [
      {
        "label": "A",
        "text": "增加无功补偿装置补偿无功缺额"
      },
      {
        "label": "B",
        "text": "改变变压器变比调压"
      },
      {
        "label": "C",
        "text": "增加发电机的有功出力"
      },
      {
        "label": "D",
        "text": "调节发电机励磁电流来改变其端电压"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "导线截面选择主要依据经济电流密度，按最大负荷利用小时数选取。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 6
  },
  {
    "id": "2018-815-判断-21",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "百万机组装机容量单位",
    "stem": "通常所说的 100 万机组中的 100 万是指 100 万 MW。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "通常所说的 100 万机组是指 100 万千瓦（100 万 kW = 1000 MW），而非 100 万 MW。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 1
  },
  {
    "id": "2018-815-判断-22",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "分裂导线电纳特性",
    "stem": "分裂导线使周围的电磁场发生很大改变，可以减小电晕和线路电抗，同时线路电容也将减小",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "分裂导线增大了等值半径，使得导线间距离相对减小，因此对地电容和电纳增大，电抗减小。题干表述不当。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 2
  },
  {
    "id": "2018-815-判断-23",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "二次调频实现无差调节",
    "stem": "电力系统能实现无差调频的方式是二次调频。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "一次调频是有差调节，通过调频器（二次调频）平移发电机静态特性曲线可实现全系统的无差调节。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 5
  },
  {
    "id": "2018-815-判断-24",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "高电压远距离大容量输电",
    "stem": "提高交流电力系统电压水平，有利于远距离大容量传输电能。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "提高输电电压等级能成倍提高输送容量、大幅减小线损，有利于远距离大容量输电。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 6
  },
  {
    "id": "2018-815-判断-25",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "并联电容器输出特性",
    "stem": "电容器并联在电力系统中, 只能向系统供应感性无功, 发出的无功功率和并联处的电压平方成正比。( )",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "并联电容器只能向系统发出容性无功（供应感性无功），其输出无功与端电压平方成正比。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 6
  },
  {
    "id": "2018-815-判断-26",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "轻负荷小波动中枢点调压",
    "stem": "在线路电压损耗小、负荷波动小的情况下，中枢点调压方式适合逆调压。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "在线路电压损耗小、负荷波动小的情况下，中枢点应采用顺调压或常调压，不需要采用逆调压。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 6
  },
  {
    "id": "2018-815-判断-27",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "海拔高原与电晕发生关系",
    "stem": "同样的导线，在气象情况相同时，平原比高原更容易发生电晕。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "高原地区气压低、空气稀薄游离场强下降，比平原更容易发生电晕。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 2
  },
  {
    "id": "2018-815-判断-28",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "Y0/Δ变压器序漏抗一致性",
    "stem": "Y0/△接线的变压器的正、负、零序的等值漏抗近似相等。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "变压器为静止对称元件，从星形接地侧看入，其正序、负序和零序漏抗近似相等。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 2
  },
  {
    "id": "2018-815-判断-29",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "双回路零序电流助磁互感",
    "stem": "双回路架空输电线路，当通过零序电流时，两回线路相互间产生助磁作用。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "双回线路平行架设通入同相零序电流时，两回线间的互感磁通与自感磁通方向一致，相互助磁使零序阻抗增大。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 8
  },
  {
    "id": "2018-815-判断-30",
    "paper": "华北电力大学 2018 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "发电机进相运行限制条件",
    "stem": "发电机以超前功率因数运行时，其运行范围主要受限于定子绕组温升限制。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "发电机进相（超前功率因数）运行时，主要受发电机定子端部铁芯温升发热及静态稳定性极限的双重限制。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2018",
    "chapter": 6
  },
  {
    "id": "2017-813-判断-01",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统平均额定电压系列",
    "stem": "电力系统的平均额定电压有 $6.3 \\mathrm{kV}$ 、 $10.5 \\mathrm{kV}$ 、 $37 \\mathrm{kV}$ 、 $115.5 \\mathrm{kV}$ 、 $231 \\mathrm{kV}$ 等。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "我国标准平均额定电压规定为标称电压的 1.05 倍，35kV 对应的平均额定电压为 38.5kV（或 37kV），但 220kV 对应 230kV，题目列举参数不规范。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 1
  },
  {
    "id": "2017-813-判断-02",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电力系统运行经济性指标",
    "stem": "考核电力系统运行经济性的重要指标是厂用电率和网损率。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "考核电网经济性的关键指标不仅包括厂用电率和线损率，发电侧还包括发电机供电煤耗率（比耗量）等综合指标。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 1
  },
  {
    "id": "2017-813-判断-03",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "分裂导线抑制电晕机理",
    "stem": "导线的半径越大越不容易发生电晕，所以 $500 \\mathrm{kV}$ 线路多采用分裂导线。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "导线等值半径越大表面电场强度越小越不易产生电晕，超高压 500kV 线路普遍采用分裂导线抑制电晕。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 2
  },
  {
    "id": "2017-813-判断-04",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电抗与电纳参数几何对偶关系",
    "stem": "输电线路的电抗越大，电纳就越小。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "线路几何均距与导线半径之比 Dm/r 增大时，单位电抗 $x_1 \\propto \\lg(D_m/r)$ 增大，而单位电纳 $b_1 \\propto 1/\\lg(D_m/r)$ 减小。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 2
  },
  {
    "id": "2017-813-判断-05",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "负荷静态频率特性斜率",
    "stem": "电力系统综合有功负荷和频率相关, 当电力系统的频率在 $49.5 \\sim 50.5 \\mathrm{~Hz}$ 以内波动时, 频率越低, 有功负荷越小。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "电力系统综合有功负荷的静态频率特性具有正斜率特性（$K_L > 0$），工频附近频率下降时综合有功负荷随之减小。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 5
  },
  {
    "id": "2017-813-判断-06",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "最大负荷利用小时数定义",
    "stem": "全年的电能损耗除以最大有功负荷称为最大负荷利用小时数。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "全年的电能损耗除以最大有功负荷时的功率损耗称为【最大负荷损耗时间 $\\tau$】；全年用电量除以最大负荷才称为最大负荷利用小时数 $T_{\\text{max}}$。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 1
  },
  {
    "id": "2017-813-判断-07",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "PQ分解法与牛拉法收敛速度对比",
    "stem": "PQ 分解法潮流计算过程中由于简化了很多因素, 所以比牛顿拉夫逊法计算速度快, 收敛速度也快。( )",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "PQ分解法单次迭代速度快，但属于一阶收敛；牛顿-拉夫逊法具有局部二次收敛性，收敛迭代次数更少。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 4
  },
  {
    "id": "2017-813-判断-08",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "并联电抗器无功补偿属性",
    "stem": "并联电抗器可以作为发出感性无功的无功电源进行调压。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "并联电抗器是感性阻抗元件，用于吸收系统过剩容性无功（发出感性无功/吸收容性无功），表述反向。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 6
  },
  {
    "id": "2017-813-判断-09",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "三相短路中性点电流",
    "stem": "当电力系统发生三相短路时，变压器中性点上通过的电流为三倍零序电流。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "三相短路是对称故障，系统中只有正序分量，不存在零序分量，变压器中性点通过的电流为 0。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 8
  },
  {
    "id": "2017-813-判断-10",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：813)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "短路电压空间分布规律",
    "stem": "当电力系统发生短路故障时，离故障点越近，负序和正序电压越高。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "越靠近短路点，正序电压越低（短路点最低）；负序电压和零序电压在短路点最高，离短路点越远越低。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 8
  },
  {
    "id": "2017-815-不定项-02",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "电能质量基本指标",
    "stem": "衡量电能质量的指标是（）。",
    "options": [
      {
        "label": "A",
        "text": "频率偏移"
      },
      {
        "label": "B",
        "text": "电压偏移"
      },
      {
        "label": "C",
        "text": "波形畸变率"
      },
      {
        "label": "D",
        "text": "网损率"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "国家标准评价电能质量的三大基本指标为：电压质量、频率质量和正弦波形畸变率。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 1
  },
  {
    "id": "2017-815-不定项-03",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "导线电压等级与几何均距电抗",
    "stem": "110kV 和 220kV 线路都采用 LGJ-300/40，则 110kV 线路单位长度的电抗 $X_{1-110}$ 和 220kV 线路单位长度的电抗 $X_{1-220}$ 之间的大小关系是（）",
    "options": [
      {
        "label": "A",
        "text": "$X_{1-110} > X_{1-220}$"
      },
      {
        "label": "B",
        "text": "$X_{1-110} < X_{1-220}$"
      },
      {
        "label": "C",
        "text": "$X_{1-110} = X_{1-220}$"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "同型号导线应用在更高电压等级线路时，相间绝缘距离增大使得三相几何均距 Dm 增大，单位电抗随之增大。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 2
  },
  {
    "id": "2017-815-不定项-04",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "分裂导线工程综合效应",
    "stem": "电力系统中采用分裂导线可以（）",
    "options": [
      {
        "label": "A",
        "text": "提高线路临界电压"
      },
      {
        "label": "B",
        "text": "减小线路电抗"
      },
      {
        "label": "C",
        "text": "减小线路电纳"
      },
      {
        "label": "D",
        "text": "提高系统的稳定性"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "answerPending": false,
    "explanation": "采用分裂导线可以增大等值半径，有效减小线路电抗，增大对地电纳，并提高电晕起始电压抑制电晕损耗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 2
  },
  {
    "id": "2017-815-不定项-05",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "三绕组变压器容量归算平方关系",
    "stem": "某容量比为 $100 / 100 / 50$ 的三绕组变压器, 若 $P_{k(3-1)}^{\\prime}$ 为 $100 \\mathrm{kW}$ , 则 $P_{k(3-1)}$ 为 ( )。",
    "options": [
      {
        "label": "A",
        "text": "$400 \\mathrm{kW}$"
      },
      {
        "label": "B",
        "text": "$25 \\mathrm{kW}$"
      },
      {
        "label": "C",
        "text": "$200 \\mathrm{kW}$"
      },
      {
        "label": "D",
        "text": "$50 \\mathrm{kW}$"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "三绕组变压器非 100% 额定容量绕组的短路损耗试验数据必须乘以容量比的平方 $(S_{\\text{N}}/S_3)^2$ 进行归算。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 2
  },
  {
    "id": "2017-815-不定项-06",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "电压损耗概念",
    "stem": "线路首端和末端电压的数值差是( )。",
    "options": [
      {
        "label": "A",
        "text": "电压降落"
      },
      {
        "label": "B",
        "text": "电压损耗"
      },
      {
        "label": "C",
        "text": "电压调整"
      },
      {
        "label": "D",
        "text": "首端电压调整"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "线路首端和末端电压的代数绝对数值差定义为电压损耗 $U_1 - U_2$。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 3
  },
  {
    "id": "2017-815-不定项-07",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "环网经济功率分布控制手段",
    "stem": "为了实现环网的经济功率分布，可采用的措施有（）",
    "options": [
      {
        "label": "A",
        "text": "串联电抗器"
      },
      {
        "label": "B",
        "text": "串联电容器"
      },
      {
        "label": "C",
        "text": "附加串联加压器"
      },
      {
        "label": "D",
        "text": "安装综合潮流控制器"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "串联电容、串联电抗、串联附加加压器或移相变压器等均可调整闭环潮流，使其逼近按电阻分布的经济功率。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 3
  },
  {
    "id": "2017-815-不定项-08",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "潮流计算节点分类类型",
    "stem": "在潮流计算中, 可能没有的节点类型是 ( )。",
    "options": [
      {
        "label": "A",
        "text": "PQ 节点"
      },
      {
        "label": "B",
        "text": "平衡节点"
      },
      {
        "label": "C",
        "text": "PV 节点"
      },
      {
        "label": "D",
        "text": "负荷节点"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "潮流计算中节点分为 PQ 节点、PV 节点和平衡节点；系统中 PV 节点可以没有，负荷节点是物理名词而非算法分类。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 4
  },
  {
    "id": "2017-815-不定项-09",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "发电机耗量微增率定义",
    "stem": "发电机单位时间内输入能源的微增率和输出功率的微增率之比称为（）",
    "options": [
      {
        "label": "A",
        "text": "耗量微增率"
      },
      {
        "label": "B",
        "text": "比耗量"
      },
      {
        "label": "C",
        "text": "耗量特性"
      },
      {
        "label": "D",
        "text": "效率"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "单位时间内输入能源的微增量与输出电功率的微增量之比称为发电机比耗量微增率（耗量微增率 $\\lambda$）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 5
  },
  {
    "id": "2017-815-不定项-10",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "互联电网联合运行频率与联络线潮流",
    "stem": "- **A.** 系统运行于 50Hz,",
    "options": [
      {
        "label": "A",
        "text": "系统运行于 50Hz,"
      },
      {
        "label": "B",
        "text": "系统运行于 49.9Hz, 若A. 系统和B. 系统通过联络线互联, 则联络线上的功率将 ( ) A. 从A. 流向 B  B. 从B. 流向 A"
      },
      {
        "label": "C",
        "text": "联络线上没有流动功率"
      },
      {
        "label": "D",
        "text": "不能确定"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "两系统互联后系统频率介于两者之间，联络线功率潮流由高频系统流向低频系统。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 1
  },
  {
    "id": "2017-815-不定项-11",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "有功负荷最优分配针对的负荷类型",
    "stem": "电力系统有功功率负荷的最有分配指的是（）。",
    "options": [
      {
        "label": "A",
        "text": "第一种负荷"
      },
      {
        "label": "B",
        "text": "第二种负荷"
      },
      {
        "label": "C",
        "text": "第三种负荷"
      },
      {
        "label": "D",
        "text": "第"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "有功功率负荷最优分配针对的是可预测、波动周期长的大幅度负荷变动（第三类负荷）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 5
  },
  {
    "id": "2017-815-不定项-12",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "无功功率电源最优分布目标函数",
    "stem": "电力系统中无功功率电源最有分布的目标函数是（）。",
    "options": [
      {
        "label": "A",
        "text": "一次能源消耗最小"
      },
      {
        "label": "B",
        "text": "有功功率损耗最小"
      },
      {
        "label": "C",
        "text": "无功功率损耗最小"
      },
      {
        "label": "D",
        "text": "电能损耗最小"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "电力系统中优化无功电源分布的数学规划目标函数为全网有功网损最小。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 6
  },
  {
    "id": "2017-815-不定项-13",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "无功不足条件下的调压手段",
    "stem": "系统中无功功率不足时，可采取的调压措施有（）",
    "options": [
      {
        "label": "A",
        "text": "调节发电机励磁"
      },
      {
        "label": "B",
        "text": "安装静止电容器"
      },
      {
        "label": "C",
        "text": "调节变压器分接头"
      },
      {
        "label": "D",
        "text": "同步电动机过励运行"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "answerPending": false,
    "explanation": "无功严重不足时，应加装无功补偿装置、发电机调压或调整分接头配合补偿，不能单靠分接头。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 6
  },
  {
    "id": "2017-815-不定项-14",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "电力系统最频发的短路故障",
    "stem": "发生概率最多的短路是（）。",
    "options": [
      {
        "label": "A",
        "text": "三相短路"
      },
      {
        "label": "B",
        "text": "两相短路接地"
      },
      {
        "label": "C",
        "text": "两相短路"
      },
      {
        "label": "D",
        "text": "单相接地短路"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "根据电力系统长期统计，单相接地短路发生概率最高（约占 65%~70%）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 1
  },
  {
    "id": "2017-815-不定项-15",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "无限大容量电源供电三相短路暂态分量",
    "stem": "无限大容量电源供电的简单系统三相短路暂态过程中（）",
    "options": [
      {
        "label": "A",
        "text": "短络电流无限大"
      },
      {
        "label": "B",
        "text": "短路功率无限大"
      },
      {
        "label": "C",
        "text": "短路电流周期分量幅值不变"
      },
      {
        "label": "D",
        "text": "电源电压幅值不变"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "无限大容量电源三相短路时，短路电流包含恒定幅值的交流周期分量和按时间常数衰减的直流非周期分量。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 7
  },
  {
    "id": "2017-815-不定项-16",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "短路电流全电流组成",
    "stem": "由无限大电源供电的系统，发生三相短路时短路电流包含的分量（）。",
    "options": [
      {
        "label": "A",
        "text": "直流分量"
      },
      {
        "label": "B",
        "text": "倍频分量"
      },
      {
        "label": "C",
        "text": "自由分量"
      },
      {
        "label": "D",
        "text": "周期分量"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "由周期基频分量、非周期自由分量以及短路瞬间的电磁暂态响应构成。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 7
  },
  {
    "id": "2017-815-不定项-17",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "对称分量法物理本质",
    "stem": "将三个不对称相量分解为三组对称相量的方法是（）。",
    "options": [
      {
        "label": "A",
        "text": "小干扰法"
      },
      {
        "label": "B",
        "text": "对称分量法"
      },
      {
        "label": "C",
        "text": "牛顿-拉夫逊法"
      },
      {
        "label": "D",
        "text": "龙格-库塔法"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "对称分量法通过正序、负序、零序变换矩阵将三相不对称系统线性分解为三组对称网络分别求解。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 8
  },
  {
    "id": "2017-815-不定项-18",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "变压器零序通路与绕组接线",
    "stem": "设在变压器的某一侧发生短路故障，该侧的变压器接线方式为 Yn 形，若在变压器另一侧绕组中存在零序电流，则另一侧绕组的按线方式必须是（）。",
    "options": [
      {
        "label": "A",
        "text": "Yn 形"
      },
      {
        "label": "B",
        "text": "三角形"
      },
      {
        "label": "C",
        "text": "开口角形"
      },
      {
        "label": "D",
        "text": "Y 形"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerPending": false,
    "explanation": "变压器中性点接地（Yn）侧为零序电流注入提供了物理回路，零序电流能否流通取决于两侧接线与回路闭合。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 8
  },
  {
    "id": "2017-815-不定项-19",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "可能产生零序电流的短路故障",
    "stem": "可能产生零序电流的短路形式有（）",
    "options": [
      {
        "label": "A",
        "text": "单相接地短路"
      },
      {
        "label": "B",
        "text": "两相短路"
      },
      {
        "label": "C",
        "text": "三相短路"
      },
      {
        "label": "D",
        "text": "两相短路接地"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "answerPending": false,
    "explanation": "单相接地短路和两相接地短路破坏了对地对称性，存在入地通路，必定产生零序电流。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 8
  },
  {
    "id": "2017-815-不定项-20",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "不对称故障相电压与复合序网关系",
    "stem": "当系统中",
    "options": [
      {
        "label": "A",
        "text": "相接地短路时，故障处的A. 相电压为（）。 A. $U_{N}$"
      },
      {
        "label": "B",
        "text": "$\\sqrt{3}U_{N}$"
      },
      {
        "label": "C",
        "text": "0"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "两相短路时故障点两相金属性相接，两相短路电压相等，应用对称分量法可得故障相电压为非故障相的一半且方向相反。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 1
  },
  {
    "id": "2017-815-判断-21",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "升降压变压器高压侧额定电压对比",
    "stem": "升压变压器高压绕组的额定电压与相同电压等级的降压变压器高压绕的额定电压相同。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "相同电网电压等级下，降压变压器高压绕组等于电网额定电压，而升压变压器高压绕组比电网额定电压高 10%（或5%）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 2
  },
  {
    "id": "2017-815-判断-22",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "环网初步功率分布目的",
    "stem": "计算环网初步功率分布的目的是寻找无功功率分点。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "闭环电网计算初步功率分布的主要目的是确定闭环中的功率分点（有功分点与无功分点），以便拆环计算。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 3
  },
  {
    "id": "2017-815-判断-23",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "相同迭代次数下收敛精度比较",
    "stem": "当迭代次数相同时，牛顿-拉夫逊法的精度和 PQ 分解法的精度相同。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "牛拉法收敛速度更快，相同迭代次数下牛拉法的计算误差远小于 PQ 分解法。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 4
  },
  {
    "id": "2017-815-判断-24",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "无功功率就地平衡原则",
    "stem": "无功功率沿线路传输会产生电压损耗，因此无功功率应采用分层分区就地平衡的补偿方法。()",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "无功功率沿线路远距离传输会引发显著的电压损耗和网络附加损耗，因此无功功率应分层分区就地平衡。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 3
  },
  {
    "id": "2017-815-判断-25",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "标幺制下三相与单相计算公式一致性",
    "stem": "采用标幺值计算时，三相和单相的计算公式相同。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "在对称三相系统中选定对称基准值后，标幺值下的三相功率与欧姆定律公式形式与单相完全相同，无根号3系数。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 2
  },
  {
    "id": "2017-815-判断-26",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "发电机P-Q运行极限曲线约束",
    "stem": "当发电机输出的感性无功功率小于其额定无功功率时, 受原动机功率的限制, 发电机的容量没有得到充分应用。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "当发电机输出无功较小时，发电机出力主要受原动机额定容量上限或励磁下限约束。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 6
  },
  {
    "id": "2017-815-判断-27",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "发电机调差系数整定范围",
    "stem": "发电机的调差系数是可以整定的, 为了实现较好的频率质量, 发电机的调差系数应整定的越小越好。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "调差系数并非越小越好，调差系数过小会导致机组对微小负荷扰动过于敏感而频繁动作，影响机组稳定。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 5
  },
  {
    "id": "2017-815-判断-28",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "无限大功率电源外部故障频率响应",
    "stem": "无限大功率电源系统在电源外部发生发生故障时系统频率会下降。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "无限大容量电源定义为内阻抗为零、母线端电压与系统频率恒定不变的理想电源，外部故障不会使其频率下降。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 7
  },
  {
    "id": "2017-815-判断-29",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "输电线路零序电抗与正序电抗对比",
    "stem": "输电线路的零序电抗一定比正序电抗大。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "零序电流经由大地或架空地线返回，回路截面大、磁通路径穿透大地，等效漏抗大，因此输电线路零序电抗显著大于正序电抗（通常为 2~3.5 倍）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 8
  },
  {
    "id": "2017-815-判断-30",
    "paper": "华北电力大学 2017 年硕士生入学考试初试试题 (科目代码：815)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "故障点负序电压极大值定理",
    "stem": "发生不对称故障时，故障点的负序电压值比网络中其它点的负序电压值大。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "在不对称短路复合序网中，负序网络中唯一的负序电源位于短路故障点，因此离短路点越近负序电压越高，故障点处负序电压达到极大值。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2017",
    "chapter": 8
  },
  {
    "id": "2016-817-判断-01",
    "paper": "华北电力大学 2016 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "雅可比矩阵与导纳矩阵稀疏结构对偶性",
    "stem": "分块的雅克比矩阵和节点导纳矩阵有相同的结构。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "牛顿-拉夫逊潮流方程的分块雅可比矩阵具有与节点导纳矩阵完全相同的拓扑结构和高度稀疏性。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2016",
    "chapter": 4
  },
  {
    "id": "2016-817-判断-02",
    "paper": "华北电力大学 2016 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电网电压等级与输送能力",
    "stem": "电网采用电压等级越高（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "电网采用电压等级越高，线路极限输送容量越大，单位输送容量的网损率越低。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2016",
    "chapter": 1
  },
  {
    "id": "2016-817-判断-03",
    "paper": "华北电力大学 2016 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "空载长线路容升与长度平方关系",
    "stem": "线路空载时，电压损耗和线路长度的平方成正比( )",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "忽略横分量时，空载超高压长线路末端容升电压升高百分数 $\\Delta U\\% \\approx -\\frac{1}{2}b_1 x_1 l^2$，与线路长度的平方成正比。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2016",
    "chapter": 3
  },
  {
    "id": "2016-817-判断-04",
    "paper": "华北电力大学 2016 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "辐射网潮流控制能力",
    "stem": "辐射网和环网的潮流可以调整控制（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "辐射形网络的潮流分布直接由下游负荷唯一确定，无法像环形网络那样通过串联电容或变比进行自主调控。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2016",
    "chapter": 3
  },
  {
    "id": "2016-817-判断-05",
    "paper": "华北电力大学 2016 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "PQ分解法计算精度评定",
    "stem": "PQ 分解法比牛拉法精度低（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "PQ分解法与牛顿-拉夫逊法潮流计算在迭代收敛判据相同的前提下，两者的最终计算精度完全一致。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2016",
    "chapter": 4
  },
  {
    "id": "2016-817-判断-06",
    "paper": "华北电力大学 2016 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "同步调相机励磁与无功属性",
    "stem": "调相机欠激时供应感性无功，过激时吸收感性无功。",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "同步调相机在过激运行时向系统发出感性无功（呈电容性），在欠激运行时从系统吸收感性无功（呈电感性），题干颠倒。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2016",
    "chapter": 6
  },
  {
    "id": "2016-817-判断-07",
    "paper": "华北电力大学 2016 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "中性点阻抗对正负序电流的影响",
    "stem": "因为中性点上只通零序电流，所以中性点所接阻抗对不对称短路时的正序、负序电流没有影响。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "虽然中性点只流过 3 倍零序电流，但在不对称故障复合序网中，零序阻抗与正、负序网络串联或并联，改变零序阻抗会直接影响故障点正负序电流。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2016",
    "chapter": 8
  },
  {
    "id": "2016-817-判断-08",
    "paper": "华北电力大学 2016 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "无限大电源短路暂态分量特征",
    "stem": "无穷大电源供电系统三相短路电流周期分量恒不衰减，非周期分量衰减。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "无限大容量电源供电系统发生三相短路时，短路电流周期分量幅值恒定不衰减，非周期分量按时间常数指数衰减。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2016",
    "chapter": 7
  },
  {
    "id": "2014-817-判断-01",
    "paper": "华北电力大学 2014 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "环形电网备用接线类型",
    "stem": "因环网是单电源网，所以属于无备用接线方式。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "环形电网每一负荷节点均有两个及以上供电方向，属于典型的有备用接线方式，单电源开环辐射网才是无备用接线。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2014",
    "chapter": 1
  },
  {
    "id": "2014-817-判断-02",
    "paper": "华北电力大学 2014 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "高压电网中性点接地规范",
    "stem": "我国 $110 \\mathrm{kV}$ 以上电网采用中性点不接地方式。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "我国 110kV 及以上高压、超高压电网普遍采用中性点直接接地运行方式，以降低设备绝缘成本。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2014",
    "chapter": 1
  },
  {
    "id": "2014-817-判断-03",
    "paper": "华北电力大学 2014 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "输电线路整循环换位目的",
    "stem": "架空线路换位的目的是为减小三相参数不平衡。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "架空输电线路进行整循环完全换位是为了平衡三相导线的互感和电容，减小三相对称参数的不平衡度。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2014",
    "chapter": 2
  },
  {
    "id": "2014-817-判断-04",
    "paper": "华北电力大学 2014 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "电晕物理本质与功率损耗",
    "stem": "电晕现象的产生会消耗有功功率。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "导线电晕放电会导致周围空气电离发光发热，该物理过程持续消耗电网有功功率。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2014",
    "chapter": 5
  },
  {
    "id": "2014-817-判断-05",
    "paper": "华北电力大学 2014 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "等值变压器模型变比归算简化",
    "stem": "在多电压等级电网计算中采用等值变压器模型后，变压器两侧的参数和变量不必再进行归算。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "在多电压等级网络计算中引入等值变压器模型（π型等效）后，系统各节点参数可直接保留在该电压级，不必逐级换算变比。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2014",
    "chapter": 2
  },
  {
    "id": "2014-817-判断-06",
    "paper": "华北电力大学 2014 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "轻载长线路末端电压特性",
    "stem": "输电线路末端电压总是低于始端电压。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "空载或轻载超高压长线路由于容升效应，末端电压可能高于始端电压，并非总是低于始端。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2014",
    "chapter": 3
  },
  {
    "id": "2014-817-判断-07",
    "paper": "华北电力大学 2014 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "牛拉法与PQ分解法精度一致性",
    "stem": "在收敛判据相同的情况下，牛顿-拉弗逊法和PQ分解法潮流计算精度相同。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "在相同收敛判据条件下，PQ分解法与牛顿-拉夫逊法解得的非线性代数方程解完全相同，精度一致。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2014",
    "chapter": 4
  },
  {
    "id": "2014-817-判断-08",
    "paper": "华北电力大学 2014 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "中枢点调压实现难度比较",
    "stem": "中枢点有三种调压方式：逆调压，顺调压，常调压，其中逆调压最容易实现。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "顺调压（低谷高、高峰低）最容易实现；逆调压（高峰抬高、低谷降低）要求补偿容量最大，最不容易实现。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2014",
    "chapter": 6
  },
  {
    "id": "2014-817-判断-09",
    "paper": "华北电力大学 2014 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "一次调频无差特性辨析",
    "stem": "由于一次调频所有的发电机都可以参加,调整容量比较大,所以可以达到无差调节。( )",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "×"
    ],
    "answerPending": false,
    "explanation": "发电机组调速器的一次调频属于典型的有差调节，必须配合调频器的二次调频才能实现无差调节。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2014",
    "chapter": 5
  },
  {
    "id": "2014-817-判断-10",
    "paper": "华北电力大学 2014 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "判断题",
    "type": "judge",
    "topic": "短路冲击电流校验工程用途",
    "stem": "短路冲击电流用来检验电气设备和载流导体的动稳定度。（）",
    "options": [
      {
        "label": "√",
        "text": "正确"
      },
      {
        "label": "×",
        "text": "错误"
      }
    ],
    "answer": [
      "√"
    ],
    "answerPending": false,
    "explanation": "短路冲击电流为短路发生后半个周期的瞬时峰值，主要用于校验电气设备和母线导体的电动稳定性（动稳定度）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2014",
    "chapter": 7
  },
  {
    "id": "2013-817-不定项-01",
    "paper": "华北电力大学 2013 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "电能质量核心评价指标",
    "stem": "衡量电能质量的指标包括（）",
    "options": [
      {
        "label": "A",
        "text": "电压、频率、波形"
      },
      {
        "label": "B",
        "text": "电压、供电可靠性、频率"
      },
      {
        "label": "C",
        "text": "电压、电流、功率"
      },
      {
        "label": "D",
        "text": "电压、电流、频率"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "电能质量的三大基本技术指标是电压偏差、频率偏差和波形畸变率。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2013",
    "chapter": 1
  },
  {
    "id": "2013-817-不定项-02",
    "paper": "华北电力大学 2013 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "分裂导线作用",
    "stem": "架空导线采用分裂导线的作用（）",
    "options": [
      {
        "label": "A",
        "text": "减小线路电抗"
      },
      {
        "label": "B",
        "text": "抑制电晕"
      },
      {
        "label": "C",
        "text": "减小有功损耗"
      },
      {
        "label": "D",
        "text": "减小电压损耗"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "answerPending": false,
    "explanation": "分裂导线增大了导线等值半径，有效降低线路电抗，增大对地电容，并提高电晕起始电压抑制电晕损耗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2013",
    "chapter": 2
  },
  {
    "id": "2013-817-不定项-03",
    "paper": "华北电力大学 2013 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "LGJ钢芯铝绞线型号规范",
    "stem": "导线型号 LGJ-300/40 表示（）。",
    "options": [
      {
        "label": "A",
        "text": "钢芯铝绞线，铝线标称截面积 300 mm²，钢芯截面积 40 mm²"
      },
      {
        "label": "B",
        "text": "铝绞线，铝线截面积 300 mm²，外层截面积 40 mm²"
      },
      {
        "label": "C",
        "text": "铜芯铝绞线，铝线截面积 300 mm²，铜芯截面积 40 mm²"
      },
      {
        "label": "D",
        "text": "钢芯铝绞线，外径 300 mm，内径 40 mm"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "LGJ-300/40 表示铝导体额定标称截面积为 300 mm²，钢芯截面积为 40 mm²。",
    "verified": true,
    "conflict": "【理论核定】原题印制时缺选项，依国家标准及华电电分教学标准补全规范选项与解析。",
    "source": "考研",
    "year": "2013",
    "chapter": 2
  },
  {
    "id": "2013-817-不定项-04",
    "paper": "华北电力大学 2013 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "变压器无功损耗影响因素",
    "stem": "变压器的无功损耗和以下哪些参量有关（）",
    "options": [
      {
        "label": "A",
        "text": "变压器中流过的功率"
      },
      {
        "label": "B",
        "text": "变压器的短路电压"
      },
      {
        "label": "C",
        "text": "变压器的短路损耗"
      },
      {
        "label": "D",
        "text": "变压器的空载损耗"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerPending": false,
    "explanation": "变压器漏抗无功损耗与流过的视在功率平方成正比，等值电抗由短路电压 Uk% 决定，两者均影响无功损耗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2013",
    "chapter": 2
  },
  {
    "id": "2013-817-不定项-05",
    "paper": "华北电力大学 2013 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "主调频厂选择原则",
    "stem": "主调频厂的选择原则是（）",
    "options": [
      {
        "label": "A",
        "text": "足够调整容量"
      },
      {
        "label": "B",
        "text": "较快的调整速度"
      },
      {
        "label": "C",
        "text": "调整范围类的经济性较好"
      },
      {
        "label": "D",
        "text": "远离负荷中心"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "answerPending": false,
    "explanation": "应选择容量足够大、调整速度快、运行经济合理的电厂（如大型水电厂或中温中压火电厂）作为主调频厂。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2013",
    "chapter": 5
  },
  {
    "id": "2013-817-不定项-06",
    "paper": "华北电力大学 2013 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "PQ节点物理分类",
    "stem": "以下哪些节点可以看做 PQ 节点（）",
    "options": [
      {
        "label": "A",
        "text": "规定了电压值的发电厂母线"
      },
      {
        "label": "B",
        "text": "已知负荷有功功率和功率因数的降压变压所母线"
      },
      {
        "label": "C",
        "text": "主调频厂母线"
      },
      {
        "label": "D",
        "text": "限定发电功率的发电厂母线"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "answerPending": false,
    "explanation": "没有无功电源调节能力的纯负荷变电站母线及无功出力达到上下限截断的发电节点可作为 PQ 节点。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2013",
    "chapter": 4
  },
  {
    "id": "2013-817-不定项-07",
    "paper": "华北电力大学 2013 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "发电机调频出力分配",
    "stem": "当负荷增加某一固定数值时，以下哪种发电机增发的功率相对较多（）",
    "options": [
      {
        "label": "A",
        "text": "调差系数大的发电机"
      },
      {
        "label": "B",
        "text": "调整容量大的发电机"
      },
      {
        "label": "C",
        "text": "调差系数小的发电机"
      },
      {
        "label": "D",
        "text": "调整容量小的发电机"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "系统负荷增量分配中，发电机单位调节功率越大（调差系数越小）的机组增发有功出力越多。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2013",
    "chapter": 5
  },
  {
    "id": "2013-817-不定项-08",
    "paper": "华北电力大学 2013 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "变压器中性点接地阻抗对短路的影响",
    "stem": "当输电线路发生两相接地短路时, 与其相连的变压器 $\\mathrm{Y} 0 / \\Delta$ 中心点接地阻抗越大 ( )",
    "options": [
      {
        "label": "A",
        "text": "正序电流越小"
      },
      {
        "label": "B",
        "text": "对正序电流无影响"
      },
      {
        "label": "C",
        "text": "零序电流越小"
      },
      {
        "label": "D",
        "text": "对零序电流无影响"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "answerPending": false,
    "explanation": "Y0/Δ变压器中性点串入阻抗使零序总阻抗增大，降低接地故障电流，并改变故障侧非故障相电压分布。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2013",
    "chapter": 8
  },
  {
    "id": "2013-817-不定项-09",
    "paper": "华北电力大学 2013 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "单双回路架空线零序阻抗对比",
    "stem": "单回输电线零序阻抗绝对值和双回路输电线路每回零序阻抗绝对值关系为（）",
    "options": [
      {
        "label": "A",
        "text": "大于"
      },
      {
        "label": "B",
        "text": "小于"
      },
      {
        "label": "C",
        "text": "等于"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "双回路平行架设时两回线零序电流相互助磁，使得每回线的等效零序阻抗大于同规格单回线的零序阻抗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2013",
    "chapter": 8
  },
  {
    "id": "2013-817-不定项-10",
    "paper": "华北电力大学 2013 年硕士生入学考试初试试题 (科目代码：817)",
    "typeName": "不定项选择题",
    "type": "indefinite",
    "topic": "短路电流稳态有效值校验项目",
    "stem": "短路电流最大有效值用来检验电气设备与载流导体的（）",
    "options": [
      {
        "label": "A",
        "text": "热稳定性"
      },
      {
        "label": "B",
        "text": "动稳定性"
      },
      {
        "label": "C",
        "text": "开断能力"
      },
      {
        "label": "D",
        "text": "绝缘能力"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "短路稳态电流及其全电流有效值主要用于校验电气设备和载流导体的热稳定性（热稳定度）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2013",
    "chapter": 7
  },
  {
    "id": "2012-819-选择-01",
    "paper": "华北电力大学 2012 年硕士生入学考试初试试题 (科目代码：819)",
    "typeName": "选择题",
    "type": "single",
    "topic": "国家标准电网电压等级",
    "stem": "下面哪些不属于国家规定的电网标准电压等级（）",
    "options": [
      {
        "label": "A",
        "text": "3kV"
      },
      {
        "label": "B",
        "text": "545kV"
      },
      {
        "label": "C",
        "text": "35kV"
      },
      {
        "label": "D",
        "text": "230kV"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "answerPending": false,
    "explanation": "我国标准交流高压输电电压系列包括 10kV、35kV、110kV、220kV、330kV、500kV、1000kV 等，非标电压不属于国标等级。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2012",
    "chapter": 1
  },
  {
    "id": "2012-819-选择-02",
    "paper": "华北电力大学 2012 年硕士生入学考试初试试题 (科目代码：819)",
    "typeName": "选择题",
    "type": "single",
    "topic": "架空线路等值电导决定因素",
    "stem": "架空线路的电导取决于线路的（）",
    "options": [
      {
        "label": "A",
        "text": "泄露损耗"
      },
      {
        "label": "B",
        "text": "导线材料"
      },
      {
        "label": "C",
        "text": "导线强度"
      },
      {
        "label": "D",
        "text": "电晕损耗"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "answerPending": false,
    "explanation": "架空线路等值电导 G 主要是由导线表面电晕放电损耗以及沿绝缘子串的微弱泄漏电流损耗决定的。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2012",
    "chapter": 2
  },
  {
    "id": "2012-819-选择-03",
    "paper": "华北电力大学 2012 年硕士生入学考试初试试题 (科目代码：819)",
    "typeName": "选择题",
    "type": "single",
    "topic": "输电线路有功损耗影响参量",
    "stem": "电力线路上的有功损耗和以下哪些参量有关（）",
    "options": [
      {
        "label": "A",
        "text": "输电线路中流过的有功功率"
      },
      {
        "label": "B",
        "text": "输电线路中流过的无功功率"
      },
      {
        "label": "C",
        "text": "功率因数"
      },
      {
        "label": "D",
        "text": "线路电阻"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "由公式 $\\Delta P=(P^2+Q^2)R/U^2$ 可知，输送有功 P、无功 Q、线路电阻 R 及运行电压 U 均直接决定有功损耗。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2012",
    "chapter": 3
  },
  {
    "id": "2012-819-选择-04",
    "paper": "华北电力大学 2012 年硕士生入学考试初试试题 (科目代码：819)",
    "typeName": "选择题",
    "type": "single",
    "topic": "大型电网节点导纳矩阵特性",
    "stem": "当电网节点数为 100 时, 下列哪些矩阵的特点是节点导纳矩阵的特点 ( )",
    "options": [
      {
        "label": "A",
        "text": "稀疏矩阵"
      },
      {
        "label": "B",
        "text": "对称矩阵"
      },
      {
        "label": "C",
        "text": "满矩阵"
      },
      {
        "label": "D",
        "text": "100 阶方阵"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "answerPending": false,
    "explanation": "大型电力系统节点导纳矩阵为复数对称矩阵、具有对角优势和极高稀疏性，非对角元为互导纳负值。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2012",
    "chapter": 4
  },
  {
    "id": "2012-819-选择-05",
    "paper": "华北电力大学 2012 年硕士生入学考试初试试题 (科目代码：819)",
    "typeName": "选择题",
    "type": "single",
    "topic": "系统频率下降诱发因素",
    "stem": "假设发电机只有调速器动作，下列哪些因素会引起系统频率下降（）",
    "options": [
      {
        "label": "A",
        "text": "发电机出力增加"
      },
      {
        "label": "B",
        "text": "无功负荷增加"
      },
      {
        "label": "C",
        "text": "发电机出力减少"
      },
      {
        "label": "D",
        "text": "通过联络线向相邻系统输送功率增加"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "answerPending": false,
    "explanation": "有功负荷突增导致机组减速或发电机原动机出力不足时，在调速器一次调节特性下系统稳态频率均会下降。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2012",
    "chapter": 5
  },
  {
    "id": "2012-819-选择-06",
    "paper": "华北电力大学 2012 年硕士生入学考试初试试题 (科目代码：819)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电力系统备用容量类型",
    "stem": "以下哪几项属于电力系统的备用容量（）",
    "options": [
      {
        "label": "A",
        "text": "负荷备用"
      },
      {
        "label": "B",
        "text": "事故备用"
      },
      {
        "label": "C",
        "text": "检修备用"
      },
      {
        "label": "D",
        "text": "国民经济备用"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answerPending": false,
    "explanation": "包括负荷备用、事故备用、检修备用以及国民经济发展备用（热备用与冷备用）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2012",
    "chapter": 1
  },
  {
    "id": "2012-819-选择-07",
    "paper": "华北电力大学 2012 年硕士生入学考试初试试题 (科目代码：819)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电力系统有功电源类型",
    "stem": "电力系统中可以作为有功功率电源的设备有（）",
    "options": [
      {
        "label": "A",
        "text": "电容器"
      },
      {
        "label": "B",
        "text": "同步发电机"
      },
      {
        "label": "C",
        "text": "调相机"
      },
      {
        "label": "D",
        "text": "静止补偿器"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "在电力系统中只有同步发电机等将机械能/化学能转化为电能的设备能提供有功功率，电容器、调相机均为无功电源。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2012",
    "chapter": 5
  },
  {
    "id": "2012-819-选择-08",
    "paper": "华北电力大学 2012 年硕士生入学考试初试试题 (科目代码：819)",
    "typeName": "选择题",
    "type": "single",
    "topic": "电网感性无功电源",
    "stem": "下列哪些元件或参数可以向电网提供感性无功（）",
    "options": [
      {
        "label": "A",
        "text": "并联电容器"
      },
      {
        "label": "B",
        "text": "变压器激磁电抗"
      },
      {
        "label": "C",
        "text": "输电线路电抗"
      },
      {
        "label": "D",
        "text": "输电线路电纳"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "answerPending": false,
    "explanation": "过励磁运行的同步发电机、同步调相机以及静止并联电容器组均可向电网提供感性无功功率。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2012",
    "chapter": 1
  },
  {
    "id": "2012-819-选择-09",
    "paper": "华北电力大学 2012 年硕士生入学考试初试试题 (科目代码：819)",
    "typeName": "选择题",
    "type": "single",
    "topic": "不对称接地故障特征",
    "stem": "当电力系统发生 AC 相接地短路时, 故障点",
    "options": [
      {
        "label": "A",
        "text": "相的各序电压绝对值之间存在以下关系( )。 A.正序电压大于负序电压"
      },
      {
        "label": "B",
        "text": "正序电压大于零序电压"
      },
      {
        "label": "C",
        "text": "各序电压相等"
      },
      {
        "label": "D",
        "text": "不确定"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "不对称接地短路时故障点包含正序、负序与零序分量，故障相电压下降，非故障相电压与零序阻抗密切相关。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2012",
    "chapter": 8
  },
  {
    "id": "2012-819-选择-10",
    "paper": "华北电力大学 2012 年硕士生入学考试初试试题 (科目代码：819)",
    "typeName": "选择题",
    "type": "single",
    "topic": "Y0/Δ变压器零序电流隔离阻断",
    "stem": "当发生不对称故障时, $\\mathrm{Y} 0 / \\Delta - 11$ 接线的变压器 $\\mathrm{Y} 0$ 侧零序电流标幺值为 $1 \\angle 30^{\\circ} k A$ , 则 $\\Delta$ 侧母\n\n线零序电流为（）",
    "options": [
      {
        "label": "A",
        "text": "$1\\angle30^{\\circ}$"
      },
      {
        "label": "B",
        "text": "$1\\angle0^{\\circ}$"
      },
      {
        "label": "C",
        "text": "$1\\angle60^{\\circ}$"
      },
      {
        "label": "D",
        "text": "0"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "Y0/Δ-11 变压器中，星形侧零序电流在三角形绕组内部感应形成闭合环流，但无法流出三角形侧外电网，因此Δ侧母线零序电流为 0。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2012",
    "chapter": 8
  },
  {
    "id": "2009-考研-单选-01",
    "paper": "华北电力大学 2009 年硕士生入学考试初试试题",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "标幺制下相电压与线电压标幺值关系",
    "stem": "当采用标幺值计算时, 相电压的标幺值和线电压的标幺值关系为 ( )",
    "options": [
      {
        "label": "A",
        "text": "3 倍"
      },
      {
        "label": "B",
        "text": "$\\sqrt{3}$ 倍"
      },
      {
        "label": "C",
        "text": "相等"
      },
      {
        "label": "D",
        "text": "不能确定"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "标幺制基准值选取满足相、线欧姆定律（$U_{B,相} = U_{B,线}/\\sqrt{3}$），归算后相电压标幺值与线电压标幺值数值完全相等。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2009",
    "chapter": 1
  },
  {
    "id": "2009-考研-单选-02",
    "paper": "华北电力大学 2009 年硕士生入学考试初试试题",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "最大负荷利用小时数定义公式",
    "stem": "一年中负荷消耗的电能 W 除以一年中的最大负荷消耗 Pmax 称为 ( )",
    "options": [
      {
        "label": "A",
        "text": "最大负荷利用小时"
      },
      {
        "label": "B",
        "text": "年负荷率"
      },
      {
        "label": "C",
        "text": "年负荷损耗"
      },
      {
        "label": "D",
        "text": "最大负荷损耗时间"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "全年月用电量/年用电量 $W$ 与最大负荷 $P_{max}$ 的比值 $T_{max} = W / P_{max}$，定义为最大负荷利用小时数。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2009",
    "chapter": 1
  },
  {
    "id": "2009-考研-单选-03",
    "paper": "华北电力大学 2009 年硕士生入学考试初试试题",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "三绕组变压器短路损耗容量归算",
    "stem": "对容量比 $S_{1} / S_{2} / S_{3}$ 为 100/50/100 类型的变压器 $P_{k(1-3)}$ 与 $P_{k(1-3)}^{\\prime}$ 的关系为（）",
    "options": [
      {
        "label": "A",
        "text": "$P_{k(1-3)} = P'_{k(1-3)}$"
      },
      {
        "label": "B",
        "text": "$P_{k(1-3)} = 2P'_{k(1-3)}$"
      },
      {
        "label": "C",
        "text": "$2P_{k(1-3)} = P'_{k(1-3)}$"
      },
      {
        "label": "D",
        "text": "$P_{k(1-3)} = 4P'_{k(1-3)}$"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "三绕组变压器容量比为 100/50/100 时，第 2 绕组实测损耗归算至 100% 额定容量需乘以容量比平方 $(100/50)^2 = 4$，即 $P_{k(1-3)} = 4 P_{k(1-3)}^{\\prime}$。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2009",
    "chapter": 2
  },
  {
    "id": "2009-考研-单选-04",
    "paper": "华北电力大学 2009 年硕士生入学考试初试试题",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "闭式环网潮流自然分布决定规律",
    "stem": "环网潮流的自然分布取决于线路的（）",
    "options": [
      {
        "label": "A",
        "text": "电阻"
      },
      {
        "label": "B",
        "text": "电抗"
      },
      {
        "label": "C",
        "text": "电纳"
      },
      {
        "label": "D",
        "text": "阻抗"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "无串联加压器等控制设备时，闭式电网自然潮流严格按照各并联支路等值复阻抗成反比（即等值阻抗的倒数）分布。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2009",
    "chapter": 3
  },
  {
    "id": "2009-考研-单选-05",
    "paper": "华北电力大学 2009 年硕士生入学考试初试试题",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "潮流计算中平衡节点的已知状态量",
    "stem": "电力系统潮流的计算机算法中, 平衡节点的特点是 ( )",
    "options": [
      {
        "label": "A",
        "text": "V 和 $\\theta$ 已知"
      },
      {
        "label": "B",
        "text": "P 和 V 已知"
      },
      {
        "label": "C",
        "text": "V 和 Q 已知"
      },
      {
        "label": "D",
        "text": "P 和 Q 已知"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "平衡节点（松弛节点）在潮流计算中给定电压幅值 $V$ 和参考相角 $\\theta = 0^\\circ$，待求注入有功功率 $P$ 与无功功率 $Q$。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2009",
    "chapter": 4
  },
  {
    "id": "2009-考研-单选-06",
    "paper": "华北电力大学 2009 年硕士生入学考试初试试题",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "发电设备比耗量概念",
    "stem": "单位时间内输入能量和输出功率之比称为（）",
    "options": [
      {
        "label": "A",
        "text": "比耗量"
      },
      {
        "label": "B",
        "text": "耗量特性"
      },
      {
        "label": "C",
        "text": "耗量微增率"
      },
      {
        "label": "D",
        "text": "等耗量微增率"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "单位时间内发电设备消耗的能量 $F$ 与发出的有功功率 $P$ 之比（$F/P$）定义为比耗量；输入能量对功率的导数 $dF/dP$ 为耗量微增率。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2009",
    "chapter": 1
  },
  {
    "id": "2009-考研-单选-07",
    "paper": "华北电力大学 2009 年硕士生入学考试初试试题",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "电力系统一次调频与二次调频特性比较",
    "stem": "以下说法正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "频率的一次调整能够使系统频率的频率做到无差调节"
      },
      {
        "label": "B",
        "text": "频率的二次调整能够使系统频率做到无差调节"
      },
      {
        "label": "C",
        "text": "频率的一次调整和频率额二次调整都能使系统频率做到无差调节"
      },
      {
        "label": "D",
        "text": "频率的一次调整和频率的二次调整都不能使系统做到无差调节"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "一次调频依靠发电机调速器有差静态特性，属于有差调节；二次调频通过调频器平移静态特性曲线，可实现系统频率无差调节。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2009",
    "chapter": 1
  },
  {
    "id": "2009-考研-单选-08",
    "paper": "华北电力大学 2009 年硕士生入学考试初试试题",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "超高压长线路轻载容升效应与并联电抗器补偿",
    "stem": "对于轻载超高压线路，以下说法正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "充电功率大，需要使用并联电容器进行补偿"
      },
      {
        "label": "B",
        "text": "充电功率小，需要使用并联电容器进行补偿"
      },
      {
        "label": "C",
        "text": "充电功率大，需要使用并联电抗器进行补偿"
      },
      {
        "label": "D",
        "text": "充电功率小，需要使用并联电抗器进行补偿"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "超高压长距离输电线路轻载或空载时对地充电功率极大，引发末端电压升高的容升效应，必须在末端装设并联电抗器吸收多余容性无功。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2009",
    "chapter": 2
  },
  {
    "id": "2009-考研-单选-09",
    "paper": "华北电力大学 2009 年硕士生入学考试初试试题",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "50Hz系统短路冲击电流出现时刻",
    "stem": "由无限大电源供电的系统发生三相短路时, 短路电流最大瞬时值出现的时刻是( )",
    "options": [
      {
        "label": "A",
        "text": "短路后 0 秒"
      },
      {
        "label": "B",
        "text": "短路后 0.05 秒"
      },
      {
        "label": "C",
        "text": "短路后 0.01 秒"
      },
      {
        "label": "D",
        "text": "短路后 0.02 秒"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "50Hz 工频系统周期为 20ms，短路发生半个周期（0.01s / 10ms）时直流分量与周期分量同相叠加达到瞬时最大冲击值。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2009",
    "chapter": 7
  },
  {
    "id": "2009-考研-单选-10",
    "paper": "华北电力大学 2009 年硕士生入学考试初试试题",
    "typeName": "单项选择题",
    "type": "single",
    "topic": "短路电流对电气设备的直接危害",
    "stem": "下面哪项属于短路电流对系统的危害（）",
    "options": [
      {
        "label": "A",
        "text": "电晕损失增大"
      },
      {
        "label": "B",
        "text": "电气设备过热"
      },
      {
        "label": "C",
        "text": "输电线阻抗增大"
      },
      {
        "label": "D",
        "text": "无功功率过剩"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "短路电流远超额定运行电流，巨大的热效应（$I^2 R t$）会破坏电气设备绝缘，直接导致设备过热烧毁。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2009",
    "chapter": 7
  },
  {
    "id": "2008-考研-多选-01",
    "paper": "华北电力大学 2008 年硕士生入学考试初试试题",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "衡量电能质量的核心指标",
    "stem": "衡量电能质量的指标有（ ）",
    "options": [
      {
        "label": "A",
        "text": "电压"
      },
      {
        "label": "B",
        "text": "电流"
      },
      {
        "label": "C",
        "text": "功率"
      },
      {
        "label": "D",
        "text": "频率"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "answerPending": false,
    "explanation": "衡量电能质量的三大核心指标为：电压偏移、频率偏移、波形畸变率。电流和功率属于系统运行与负荷指标。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2008",
    "chapter": 1
  },
  {
    "id": "2008-考研-多选-02",
    "paper": "华北电力大学 2008 年硕士生入学考试初试试题",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "不同电压等级电网中性点接地方式",
    "stem": "我国规定 $110 \\mathrm{kV}$ 及以上的电网中性点的运行方式采用 ( ), $6 \\sim 10 \\mathrm{kV}$ 的电网中性点的运行方式采用 ( )。",
    "options": [
      {
        "label": "A",
        "text": "中性点直接接地"
      },
      {
        "label": "B",
        "text": "中性点非直接接地"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerPending": false,
    "explanation": "110kV及以上高压超高压电网绝缘投资巨大，采用中性点直接接地（A）以降低绝缘水平；6~10kV中低压电网采用中性点不接地或经消弧线圈接地（非直接接地 B）以保证供电可靠性。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2008",
    "chapter": 1
  },
  {
    "id": "2008-考研-多选-03",
    "paper": "华北电力大学 2008 年硕士生入学考试初试试题",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "标幺制下相电压与线电压标幺值关系",
    "stem": "当采用标幺值计算时, 相电压的标幺值和线电压的标幺值关系为 ( )。",
    "options": [
      {
        "label": "A",
        "text": "3 倍"
      },
      {
        "label": "B",
        "text": "$\\sqrt{3}$ 倍"
      },
      {
        "label": "C",
        "text": "相等"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "选定基准值满足 $U_{B,相} = U_{B,线}/\\sqrt{3}$，归算后相电压标幺值与线电压标幺值在数值上完全相等。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2008",
    "chapter": 1
  },
  {
    "id": "2008-考研-多选-04",
    "paper": "华北电力大学 2008 年硕士生入学考试初试试题",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "可能产生零序电流的短路故障类型",
    "stem": "可能产生零序电流的短路形式有（ ）。",
    "options": [
      {
        "label": "A",
        "text": "单相接地短路"
      },
      {
        "label": "B",
        "text": "三相接地短路"
      },
      {
        "label": "C",
        "text": "两相短路"
      },
      {
        "label": "D",
        "text": "两相接地短路"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "answerPending": false,
    "explanation": "短路电流中产生零序电流必须满足两个条件：系统发生不对称故障且具有接地回路。故仅单相接地短路（A）与两相接地短路（D）能产生零序电流。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2008",
    "chapter": 8
  },
  {
    "id": "2008-考研-多选-05",
    "paper": "华北电力大学 2008 年硕士生入学考试初试试题",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "无限大功率电源的物理特性",
    "stem": "无限大功率电源的特点是（ ）。",
    "options": [
      {
        "label": "A",
        "text": "输出功率恒定"
      },
      {
        "label": "B",
        "text": "电压恒定"
      },
      {
        "label": "C",
        "text": "输出电流恒定"
      },
      {
        "label": "D",
        "text": "频率恒定"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "answerPending": false,
    "explanation": "无限大功率电源是指内阻为零、容量无限大的理想电源，其基本特征是母线电压幅值恒定（B）且频率恒定（D）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2008",
    "chapter": 7
  },
  {
    "id": "2008-考研-多选-06",
    "paper": "华北电力大学 2008 年硕士生入学考试初试试题",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "两相接地短路故障点正序与负序电流大小比较",
    "stem": "电力系统发生两相接地短路时可以肯定的是（ ）",
    "options": [
      {
        "label": "A",
        "text": "正序电流大于负序电流"
      },
      {
        "label": "B",
        "text": "正序电流等于负序电流"
      },
      {
        "label": "C",
        "text": "正序电流小于负序电流"
      },
      {
        "label": "D",
        "text": "正序电流大于等于负序电流"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "两相接地短路复合序网为正序、负序与零序网并联连接，负序分流支路电流 $I_{(2)} = I_{(1)} \\frac{X_0}{X_2 + X_0} < I_{(1)}$，故故障点正序电流必大于负序电流。",
    "verified": true,
    "conflict": "【复合序网定理】根据两相接地短路边界条件，复合序网为三序并联，总正序电流为负序与零序电流之和，在发电机端及故障点均满足正序电流大于负序电流（选A）。",
    "source": "考研",
    "year": "2008",
    "chapter": 8
  },
  {
    "id": "2008-考研-多选-07",
    "paper": "华北电力大学 2008 年硕士生入学考试初试试题",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "不对称短路负序电压空间沿线分布规律",
    "stem": "电力系统发生不对称短路时, 离短路点越近, 则负序电压 ( )。",
    "options": [
      {
        "label": "A",
        "text": "越大"
      },
      {
        "label": "B",
        "text": "越小"
      },
      {
        "label": "C",
        "text": "不变"
      },
      {
        "label": "D",
        "text": "可能变大也可能变小"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "负序网络中无旋转发电机内部源，短路故障点为虚拟负序电源。因此短路点负序电压最高，离短路点越近，负序电压幅值越大。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2008",
    "chapter": 8
  },
  {
    "id": "2008-考研-多选-08",
    "paper": "华北电力大学 2008 年硕士生入学考试初试试题",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "发电设备耗量微增率概念",
    "stem": "单位时间内输入能量增量与输出功率增量的比值叫（ ）。",
    "options": [
      {
        "label": "A",
        "text": "比耗量"
      },
      {
        "label": "B",
        "text": "耗量特性"
      },
      {
        "label": "C",
        "text": "耗量微增率"
      },
      {
        "label": "D",
        "text": "等耗量微增率"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "单位时间内输入能量增量与输出功率增量的微分比值 $dF/dP$ 定义为耗量微增率；$F/P$ 为比耗量；$F=f(P)$ 为耗量特性。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2008",
    "chapter": 1
  },
  {
    "id": "2008-考研-多选-09",
    "paper": "华北电力大学 2008 年硕士生入学考试初试试题",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "有无架空地线输电线路零序阻抗大小比较",
    "stem": "单回输电线零序阻抗 $Z_{(0)}$ 和带架空线的输电线零序阻抗的关系为（ ）",
    "options": [
      {
        "label": "A",
        "text": "$Z_{(0)}$ 大于 $Z_{(0)}^{W}$"
      },
      {
        "label": "B",
        "text": "$Z_{(0)}$ 小于 $Z_{(0)}^{W}$"
      },
      {
        "label": "C",
        "text": "$Z_{(0)}$ 等于 $Z_{(0)}^{W}$"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "架空地线中感应反向零序电流削弱导线零序磁链，使等值零序电抗降低，故无架空地线时的零序阻抗 $Z_{(0)}$ 大于有架空地线时的零序阻抗 $Z_{(0)}^{(w)}$。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2008",
    "chapter": 8
  },
  {
    "id": "2007-811-多选-01",
    "paper": "华北电力大学 2007 年硕士生入学考试初试试题 (科目代码：811)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "分裂导线电抗参数计算",
    "stem": "分裂导线的电抗比普通钢芯铝绞线的电抗（）",
    "options": [
      {
        "label": "A",
        "text": "大"
      },
      {
        "label": "B",
        "text": "小"
      },
      {
        "label": "C",
        "text": "相等"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "分裂导线相当于增大了导线自几何均距/等效半径 $r_{eq}$，公式 $x_1 = 0.1445\\lg\\frac{D_m}{r_{eq}} + 0.0157$，等值电抗变小。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2007",
    "chapter": 2
  },
  {
    "id": "2007-811-多选-02",
    "paper": "华北电力大学 2007 年硕士生入学考试初试试题 (科目代码：811)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "电力系统无功电源类型",
    "stem": "电力系统中可以作为无功功率的设备有（）。",
    "options": [
      {
        "label": "A",
        "text": "电容器"
      },
      {
        "label": "B",
        "text": "同步发电机"
      },
      {
        "label": "C",
        "text": "调相机"
      },
      {
        "label": "D",
        "text": "电抗器"
      },
      {
        "label": "E",
        "text": "静止补偿器"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "answerPending": false,
    "explanation": "同步发电机（过励）、调相机、并联电容器、静止无功补偿器（SVC）均可向系统发出无功功率，作为无功电源；并联电抗器用于吸收容性无功。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2007",
    "chapter": 6
  },
  {
    "id": "2007-811-多选-03",
    "paper": "华北电力大学 2007 年硕士生入学考试初试试题 (科目代码：811)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "标幺制下三相与单相功率标幺值关系",
    "stem": "当采用标么值计算时，三相功率的标么值和单相功率的标么值关系为（）。",
    "options": [
      {
        "label": "A",
        "text": "3 倍"
      },
      {
        "label": "B",
        "text": "$\\sqrt{3}$ 倍"
      },
      {
        "label": "C",
        "text": "相等"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "选定基准容量 $S_B$ 和基准电压 $U_B$ 后，单相基准容量为 $S_{B,单相} = S_B/3$，归算后三相功率标幺值与单相功率标幺值在数值上完全相等。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2007",
    "chapter": 2
  },
  {
    "id": "2007-811-多选-04",
    "paper": "华北电力大学 2007 年硕士生入学考试初试试题 (科目代码：811)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "变压器分接头档位总数计算",
    "stem": "某变压器铭牌上标示电压为 $220 \\pm 3 \\times 2.5\\%$ ，它共有（）个分接头。",
    "options": [
      {
        "label": "A",
        "text": "3 个"
      },
      {
        "label": "B",
        "text": "4 个"
      },
      {
        "label": "C",
        "text": "6 个"
      },
      {
        "label": "D",
        "text": "7 个"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "铭牌标示 $220 \\pm 3 \\times 2.5\\%$，表示额定主抽头两侧各有 3 个增减档分接头，分接头总数为 $1 + 3 + 3 = 7$ 个。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2007",
    "chapter": 2
  },
  {
    "id": "2007-811-多选-05",
    "paper": "华北电力大学 2007 年硕士生入学考试初试试题 (科目代码：811)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "电晕损耗与输电线路电导参数",
    "stem": "电晕损耗影响输电线路的哪个参数（）。",
    "options": [
      {
        "label": "A",
        "text": "电阻"
      },
      {
        "label": "B",
        "text": "电抗"
      },
      {
        "label": "C",
        "text": "电导"
      },
      {
        "label": "D",
        "text": "电纳"
      }
    ],
    "answer": [
      "C"
    ],
    "answerPending": false,
    "explanation": "高压电晕放电引发强电场空气电离和寄生高频有功损耗，在等值电路中主要用电导 $G$ 参数表征（$\\Delta P_G = U^2 G$）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2007",
    "chapter": 2
  },
  {
    "id": "2007-811-多选-06",
    "paper": "华北电力大学 2007 年硕士生入学考试初试试题 (科目代码：811)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "负荷变动对系统频率的影响",
    "stem": "如果发电机不参加调频，当负荷增加时，系统的频率会（）。",
    "options": [
      {
        "label": "A",
        "text": "升高"
      },
      {
        "label": "B",
        "text": "降低"
      },
      {
        "label": "C",
        "text": "不变"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "发电机不参加调频时输出有功 $P_G$ 恒定，负荷增加使 $P_G < P_L$，转子旋转动能释放减速，导致系统稳态频率降低。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2007",
    "chapter": 5
  },
  {
    "id": "2007-811-多选-07",
    "paper": "华北电力大学 2007 年硕士生入学考试初试试题 (科目代码：811)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "短路冲击电流定义与出现时刻",
    "stem": "短路冲击电流是指短路全电流的（），短路冲击电流在（）时刻出现。",
    "options": [
      {
        "label": "A",
        "text": "短路全电流瞬时值，短路后 0 秒"
      },
      {
        "label": "B",
        "text": "短路全电流最大瞬时值，短路后半个周期（0.01s）"
      },
      {
        "label": "C",
        "text": "短路全电流最大有效值，短路后半个周期（0.01s）"
      },
      {
        "label": "D",
        "text": "短路全电流最大有效值，短路后一个周期（0.02s）"
      }
    ],
    "answer": [
      "B"
    ],
    "answerPending": false,
    "explanation": "短路冲击电流定义为短路全电流的最大瞬时值（第1问选C）；在 50Hz 工频系统中于短路发生后半个周期（0.01s / 10ms）时出现（第2问选B）。",
    "verified": true,
    "conflict": "【双空题题型规整】原真题为双空选择题：第(1)空短路冲击电流定义为短路全电流最大瞬时值（选C）；第(2)空工频系统中在短路后半个周期（0.01s/10ms）出现（选B）。规整选项为单选 B 项（最大瞬时值，半个周期）。",
    "source": "考研",
    "year": "2007",
    "chapter": 7
  },
  {
    "id": "2007-811-多选-08",
    "paper": "华北电力大学 2007 年硕士生入学考试初试试题 (科目代码：811)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "变压器中性线上流过的零序电流",
    "stem": "当电力系统发生不对称短路时, 变压器中性线上通过的电流为 ( )。",
    "options": [
      {
        "label": "A",
        "text": "正序电流"
      },
      {
        "label": "B",
        "text": "负序电流"
      },
      {
        "label": "C",
        "text": "零序电流"
      },
      {
        "label": "D",
        "text": "三倍零序电流"
      },
      {
        "label": "E",
        "text": "三倍正序电流"
      }
    ],
    "answer": [
      "D"
    ],
    "answerPending": false,
    "explanation": "三相正序与负序电流对称平衡，在中性线上代数和为 0；而三相零序电流同相叠加，故变压器中性线上流过的电流为 3 倍零序电流（$3I_0$）。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2007",
    "chapter": 2
  },
  {
    "id": "2007-811-多选-09",
    "paper": "华北电力大学 2007 年硕士生入学考试初试试题 (科目代码：811)",
    "typeName": "多项选择题",
    "type": "multiple",
    "topic": "架空地线对线路零序阻抗的影响",
    "stem": "单回输电线零序阻抗 $Z_{(0)}$ 和有架空地线的单回输电线零序阻抗 $Z_{(0)}^{\\mathrm{(w)}}$ 的关系为（）",
    "options": [
      {
        "label": "A",
        "text": "$Z_{(0)}$ 大于 $Z_{(0)}^{\\mathrm{(w)}}$"
      },
      {
        "label": "B",
        "text": "$Z_{(0)}$ 小于 $Z_{(0)}^{\\mathrm{(w)}}$"
      },
      {
        "label": "C",
        "text": "$Z_{(0)}$ 等于 $Z_{(0)}^{\\mathrm{(w)}}$"
      }
    ],
    "answer": [
      "A"
    ],
    "answerPending": false,
    "explanation": "架空地线（避雷线）中感应的逆向零序电流起去磁屏蔽作用，使得有地线时的线路零序阻抗减小，故无架空地线时线路零序阻抗 $Z_{(0)} > Z_{(0)}^{(w)}$。",
    "verified": true,
    "conflict": "",
    "source": "考研",
    "year": "2007",
    "chapter": 8
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = QUESTIONS_DATA;
}
