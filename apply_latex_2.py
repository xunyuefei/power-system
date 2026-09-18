import re

filepath = r'c:\Users\31085\Desktop\电力系统专题训练\期末题--第三章.md'
with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('\xa0', ' ')

patterns = [
    (r'P2=4 MW', r'$P_2 = 4\text{ MW}$'),
    (r'Q2=P2tanϕ=4×0.75=3 Mvar', r'$Q_2 = P_2 \tan\phi = 4 \times 0.75 = 3\text{ Mvar}$'),
    (r'Q2′=Q2−\$Q_c\$=3−\$Q_c\$', r'$Q_2\' = Q_2 - Q_c = 3 - Q_c$'),
    (r'UB=220 kV', r'$U_B = 220\text{ kV}$'),
    (r'QB=150 Mvar', r'$Q_B = 150\text{ Mvar}$'),
    (r'PB=tanϕQB=0.75150=200 MW', r'$P_B = \frac{Q_B}{\tan\phi} = \frac{150}{0.75} = 200\text{ MW}$'),
    (r'S~B=200\+j150 MVA', r'$\tilde{S}_B = 200 + j150\text{ MVA}$'),
    (r'S~B=10\+j5 MVA', r'$\tilde{S}_B = 10 + j5\text{ MVA}$'),
    (r'S~C=20\+j10 MVA', r'$\tilde{S}_C = 20 + j10\text{ MVA}$'),
    (r'S~max=20\+j15 MVA', r'$\tilde{S}_{\text{max}} = 20 + j15\text{ MVA}$'),
    (r'S~min=10\+j6 MVA', r'$\tilde{S}_{\text{min}} = 10 + j6\text{ MVA}$'),
    (r'S~2=15\+j10 MVA', r'$\tilde{S}_2 = 15 + j10\text{ MVA}$'),
    (r'S~3=25\+j15 MVA', r'$\tilde{S}_3 = 25 + j15\text{ MVA}$'),
    (r'S~2=50\+j10 MVA', r'$\tilde{S}_2 = 50 + j10\text{ MVA}$'),
    (r'S~a=30\+j15 MVA', r'$\tilde{S}_a = 30 + j15\text{ MVA}$'),
    (r'S~C=30\+j15 MVA', r'$\tilde{S}_C = 30 + j15\text{ MVA}$'),
    (r'S~c=30\+j15 MVA', r'$\tilde{S}_c = 30 + j15\text{ MVA}$'),
    (r'S~b=20\+j10 MVA', r'$\tilde{S}_b = 20 + j10\text{ MVA}$'),
    (r'S~ab=30\+j15 MVA', r'$\tilde{S}_{ab} = 30 + j15\text{ MVA}$'),
    (r'S~ac=20\+j10 MVA', r'$\tilde{S}_{ac} = 20 + j10\text{ MVA}$'),
    (r'S~cb=S~b−S~ab=−10−j5 MVA', r'$\tilde{S}_{cb} = \tilde{S}_b - \tilde{S}_{ab} = -10 - j5\text{ MVA}$'),
    (r'S~1C=S~C×40\+6060=18\+j9 MVA', r'$\tilde{S}_{1C} = \tilde{S}_C \times \frac{60}{40 + 60} = 18 + j9\text{ MVA}$'),
    (r'S~2C=12\+j6 MVA', r'$\tilde{S}_{2C} = 12 + j6\text{ MVA}$'),
]

for p, repl in patterns:
    text = re.sub(p, lambda m, r=repl: r, text)

text = text.replace('Q2′=Q2−$Q_c$=3−$Q_c$', r"$Q_2' = Q_2 - Q_c = 3 - Q_c$")
text = text.replace(r'ΔS~BC=UN2PC2+QC2ZBC', r'$\Delta \tilde{S}_{BC} = \frac{P_C^2 + Q_C^2}{U_N^2} Z_{BC}$')
text = text.replace(r'S~AB=S~B+S~BC+ΔS~BC', r'$\tilde{S}_{AB} = \tilde{S}_B + \tilde{S}_{BC} + \Delta \tilde{S}_{BC}$')
text = text.replace(r'UB=UA−ΔUAB', r'$U_B = U_A - \Delta U_{AB}$')
text = text.replace(r'UC=UB−ΔUBC', r'$U_C = U_B - \Delta U_{BC}$')
text = text.replace(r'η=PAPB+PC×100%', r'$\eta = \frac{P_B + P_C}{P_A} \times 100\%$')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(text)

print("Latex replacement pass 2 complete.")
