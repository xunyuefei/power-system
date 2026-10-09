import json

with open(r'c:\Users\31085\Desktop\电力系统专题训练--选择题\power-system-quiz\questions_data.js', 'r', encoding='utf-8') as f:
    text = f.read()

json_str = text[text.find('['):text.rfind(']')+1]
data = json.loads(json_str)

for q in data:
    if q['id'] == '2020-2021-期末A-判断-10':
        q['answer'] = ['×']
        q['topic'] = '避雷线对架空输电线路零序阻抗的影响'
        q['explanation'] = '避雷线（架空地线）中感应的逆向零序电流起去磁屏蔽作用，使得线路零序阻抗变小，而不是增大。'
        q['verified'] = True
        q['answerPending'] = False
        print('Matched 2020-2021-期末A-判断-10!')

new_content = "// 华北电力大学《电力系统分析》选择题与判断题全真题库数据集\nconst QUESTIONS_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = QUESTIONS_DATA;\n}\n"

with open(r'c:\Users\31085\Desktop\电力系统专题训练--选择题\power-system-quiz\questions_data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Updated questions_data.js successfully!')
