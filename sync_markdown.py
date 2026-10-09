# -*- coding: utf-8 -*-
import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Load questions_data.js
js_file = r'c:\Users\31085\Desktop\电力系统专题训练--选择题\power-system-quiz\questions_data.js'
with open(js_file, 'r', encoding='utf-8') as f:
    js_content = f.read()

json_str = js_content[js_content.find('['):js_content.rfind(']')+1]
questions = json.loads(json_str)
q_map = {q['id']: q for q in questions}

for md_path in [
    r'c:\Users\31085\Desktop\电力系统专题训练--选择题\华北电力大学_历年考研真题_选择题与判断题全汇编.md',
    r'c:\Users\31085\Desktop\电力系统专题训练--选择题\华北电力大学_历年期末试卷_选择题与判断题全汇编.md'
]:
    with open(md_path, 'r', encoding='utf-8') as f:
        md_text = f.read()

    # Split by lines and process per question block
    lines = md_text.split('\n')
    new_lines = []
    current_qid = None

    for line in lines:
        m = re.match(r'^#### 【题号】`([^`]+)`', line)
        if m:
            current_qid = m.group(1)
            new_lines.append(line)
            continue

        if current_qid and current_qid in q_map and q_map[current_qid].get('answer'):
            q = q_map[current_qid]
            ans_str = ''.join(q['answer']) if isinstance(q['answer'], list) else str(q['answer'])

            if line.startswith('- **考查要点**：'):
                new_lines.append(f"- **考查要点**：{q.get('topic', '电力系统分析基础核心考点')}")
                continue
            elif line.startswith('- **参考答案**：'):
                new_lines.append(f"- **参考答案**：`{ans_str}`")
                continue
            elif line.startswith('- **解析说明**：'):
                new_lines.append(f"- **解析说明**：{q.get('explanation', '')}")
                continue
            elif line.startswith('- **校核状态**：'):
                new_lines.append(f"- **校核状态**：【已核定】")
                continue

        new_lines.append(line)

    with open(md_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))
    print(f'Synced {md_path} successfully!')
