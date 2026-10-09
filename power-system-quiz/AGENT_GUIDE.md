# 📘 华电《电力系统分析》全真题库系统工程实践与技术指导书 (Agent Architecture Guide)

> **适用对象**：后续接手、维护、重构本项目的 AI Agents 以及人类工程师。  
> **项目定位**：华北电力大学《电力系统分析》历年期末试卷与历年考研真题（共 789 题）纯前端、零依赖、离线 PWA 智能刷题平台。  
> **生产地址**：[https://xunyuefei.github.io/power-system-quiz/](https://xunyuefei.github.io/power-system-quiz/)  
> **代码仓库**：`git@github.com:xunyuefei/power-system-quiz.git` (分支: `main`)

---

## 目录
1. [项目全景与资产拓扑](#1-项目全景与资产拓扑)
2. [关键架构设计原则](#2-关键架构设计原则)
3. [核心踩坑与高价值解法一：VitePress 缓存穿透冲突与独立仓解耦](#3-核心踩坑与高价值解法一vitepress-缓存穿透冲突与独立仓解耦)
4. [核心踩坑与高价值解法二：移动端侧滑「小退出」跳出浏览器与 SPA 历史路由栈](#4-核心踩坑与高价值解法二移动端侧滑小退出跳出浏览器与-spa-历史路由栈)
5. [PWA 离线引擎与全套静态资源设计](#5-pwa-离线引擎与全套静态资源设计)
6. [零依赖数学公式渲染引擎与极简多端口令同步](#6-零依赖数学公式渲染引擎与极简多端口令同步)
7. [CI/CD 自动化流水线机制](#7-cicd-自动化流水线机制)
8. [Agent 维护与迭代实操手册 (Checklist)](#8-agent-维护与迭代实操手册-checklist)

---

## 1. 项目全景与资产拓扑

### 1.1 文件结构清单
```text
power-system-quiz/
├── index.html               # 核心单页面应用（UI视图、业务逻辑、手势、公式引擎、路由栈控制器）
├── questions_data.js        # 结构化题库数据（全789题，通过 window.QUESTIONS_DB 暴露）
├── parse_to_json.py         # Markdown 原始试卷 -> 8大章节标准 JSON 的编译解析脚本
├── manifest.json            # PWA Web App 清单文件（全屏独立启动配置、桌面快捷入口）
├── sw.js                    # PWA 离线缓存 Service Worker（Stale-While-Revalidate 策略）
├── icon.svg                 # 矢量极客电网与雷电高分辨率图标
├── icon-192.png             # 192x192 PWA 应用高清图标
├── icon-512.png             # 512x512 PWA 应用高清图标
├── apple-touch-icon.png     # iOS Safari 主屏幕触控图标
├── favicon.png              # 浏览器 Favicon
├── generate_icons.py        # 基于 Pillow 的高质量超采样图标生成工具
├── .nojekyll                # 禁用 GitHub Pages Jekyll 处理，确保静态文件直通
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions 自动化持续部署流水线
├── push_to_github.bat       # Windows 本地一键增量推流自动化脚本
├── README.md                # 面向终端用户的详细使用与安装说明
└── AGENT_GUIDE.md           # 本指导书（面向协作 Agent 的技术规格书）
```

### 1.2 题库数据规约 (`questions_data.js`)
全题库共包含 **789 题**，由两大部分构成：
- **期末考试**：317 题，数据源来自《华北电力大学_历年期末试卷_选择题与判断题全汇编.md》；
- **考研真题**：472 题，数据源来自《华北电力大学_历年考研真题_选择题与判断题全汇编.md》。

每道题目的标准数据结构：
```javascript
{
  "id": "2024-KM-01",              // 唯一题目ID（格式：年份-试卷类型-题号）
  "source": "期末",                 // "期末" 或 "考研"
  "paper": "2024年期末试卷",        // 来源试卷完整名称
  "type": "choice",                // "choice" (单选/多选) 或 "judge" (判断)
  "typeName": "单选题",            // 显示名称: 单选题 / 多选题 / 判断题
  "topicId": "ch1",                // 归属章节ID (ch1 ~ ch8)
  "topic": "第1章 电力系统基本概念", // 归属章节名称
  "stem": "题目题干文本...",         // 支持 LaTeX 行内公式 $...$
  "options": [                     // 选项列表（判断题无此字段）
    { "key": "A", "text": "选项A" },
    { "key": "B", "text": "选项B" }
  ],
  "answer": ["A"],                 // 正确答案数组（兼容单选、多选与判断）
  "note": "参考解析或争议标注"      // 详细考点解析，包含考纲重点
}
```

---

## 2. 关键架构设计原则

1. **绝对零环境依赖 (Zero Runtime Dependencies)**：
   - 不依赖 Node.js runtime、React、Vue 等构建产物，所有 HTML/CSS/JS 完全原生单文件内聚。
   - 任何设备（本地双击、本地静态服务器、GitHub Pages、PWA 缓存）打开即用，无需执行 `npm install` 或 `npm run build`。
2. **离线优先 (Offline First)**：
   - 数据与逻辑完全本地化，做题记录完全持久化在浏览器的 `localStorage` 中。
   - 断网（飞行模式、地铁通勤）情况下全功能可用，答题状态永不丢失。
3. **多端极致响应式适配 (Dual-Device Aesthetics)**：
   - 桌面端：宽屏沉浸、全键盘快捷键（`A/B/C/D` 答题，`Enter` 提交，`←/→` 翻题，`/` 检索）。
   - 移动端：底部大拇指功能栏、手势左右滑动、边缘退出拦截、安全区防穿透。

---

## 3. 核心踩坑与高价值解法一：VitePress 缓存穿透冲突与独立仓解耦

### 3.1 故障现象与复盘分析
* **历史背景**：主仓库 `xunyuefei/power-system` 部署了 VitePress 文档站（《简答题指南》），其生产环境启用了 VitePress PWA 插件（Workbox Service Worker）。
* **故障重现**：最初将刷题应用放置在主仓库的子目录 `/quiz/` 中，但访问 `https://xunyuefei.github.io/power-system/quiz/` 时，页面直接白屏或显示 VitePress 官方的 **“404 PAGE NOT FOUND”**。
* **深层根因 (Root Cause)**：
  1. VitePress 注册的 Service Worker 作用域为根路径 `/power-system/`；
  2. 当浏览器访问 `/quiz/` 时，请求被已驻留在客户端的 Service Worker 拦截；
  3. Workbox 判定该路径不在 VitePress 的路由清单（Routes Manifest）中，由客户端 SPA 路由直接接管并返回缓存中的 404 页面，导致网络层根本没有机会加载 `/quiz/index.html`。

### 3.2 最佳实践决策 (Best Practice)
* **不要在已配置 SPA/PWA 的静态文档子目录下存放独立单页应用**；
* **实施物理隔离解耦**：创建独立的 GitHub 仓库 `xunyuefei/power-system-quiz`，将刷题应用部署在独立的顶级路径 `https://xunyuefei.github.io/power-system-quiz/`；
* **收益**：域名路径干净，没有上层 Service Worker 污染，且独立的 `.nojekyll` 与 PWA 清单互不干扰。

---

## 4. 核心踩坑与高价值解法二：移动端侧滑「小退出」跳出浏览器与 SPA 历史路由栈

### 4.1 故障现象与复盘分析
* **用户反馈**：在手机上做题时，由于全面屏手势（左滑/右滑边缘返回上一级），手指轻触滑动原本意图是退回到「题库大厅（主页）」，但整个网页直接退出回到了手机浏览器的起始主页或搜索页。
* **深层根因 (Root Cause)**：
  1. **缺少 SPA 历史路由栈**：传统前端单页切换（仅修改 DOM 的 `display` 或 `active` 类名）不会改变浏览器的历史记录（History Stack 深度为 1）。当用户执行系统手势返回时，浏览器触发原生的 `history.back()`，直接退出了当前网站。
  2. **缺少横向过界手势阻断**：现代移动端浏览器（Safari、Chrome、夸克、微信）默认开启了水平「滑动手势前进/后退导航（Swipe Navigation）」，页面内容发生横向滑动漂移时会被浏览器底层接管并强制跳出。

### 4.2 解决方案三位一体

#### 步骤 1：禁用浏览器级别的横向穿透跳出
在 CSS 中对全局及核心容器严格声明 `overscroll-behavior-x: none` 和 `touch-action: pan-y`：
```css
html, body {
  overscroll-behavior-x: none; /* 彻底切断浏览器左右滑网页回退穿透 */
  overscroll-behavior-y: auto;
}

.app-container, .question-card {
  touch-action: pan-y;         /* 允许垂直平滑滚动，横向手势交由 JS 捕获 */
  overscroll-behavior-x: none;
}
```

#### 步骤 2：建立完整的 SPA 历史路由栈控制器
通过 `history.pushState` 与 `window.addEventListener('popstate')` 接管系统返回键：
```javascript
let currentActiveView = 'dashboard';
let isInternalClosing = false;
let lastDashboardBackTime = 0;

// 1. 视图切换时压入历史栈
function switchView(viewId, isHistoryNavigation = false) {
  closeAllActiveModals();
  // ...更新 DOM 激活状态...
  currentActiveView = viewId;

  if (!isHistoryNavigation) {
    if (viewId === 'dashboard') {
      if (window.location.hash && window.location.hash !== '#dashboard') {
        history.pushState({ view: 'dashboard' }, '', '#dashboard');
      }
    } else {
      history.pushState({ view: viewId }, '', `#${viewId}`);
    }
  }
}

// 2. 弹窗与抽屉打开时压入历史栈
function openModal(modalId) {
  const el = document.getElementById(modalId);
  if (el) {
    el.classList.add('active');
    history.pushState({ modal: modalId, view: currentActiveView }, '', `#${modalId}`);
  }
}

// 3. 全局 popstate 拦截器（接管手机“小退出”/返回手势）
window.addEventListener('popstate', (e) => {
  if (isInternalClosing) {
    isInternalClosing = false;
    return;
  }

  // 优先级 A：若弹窗/答题卡打开，小退出优先优雅关闭弹窗
  const activeModal = document.querySelector('.modal-overlay.active, .drawer-overlay.active');
  if (activeModal) {
    activeModal.classList.remove('active');
    return;
  }

  // 优先级 B：若在做题/考试界面，小退出平滑返回题库大厅（网页主页）
  if (currentActiveView !== 'dashboard') {
    switchView('dashboard', true);
    return;
  }

  // 优先级 C：若已在网页主页，启动防误触双击退出机制
  const now = Date.now();
  if (now - lastDashboardBackTime < 2000) {
    return; // 2秒内连按两次允许离开网页
  } else {
    lastDashboardBackTime = now;
    history.pushState({ view: 'dashboard' }, '', '#dashboard');
    showToast('再返回一次退出题库', '🚪');
  }
});
```

#### 步骤 3：触摸手势避让系统边缘（35px 保护区）
在卡片左右滑动切题逻辑中，严格识别触摸起点，避开系统手势感应区：
```javascript
qCard.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
  // 离屏幕边缘 35px 范围内认定为手机系统返回手势，不在此处理切题
  isEdgeTouch = (touchStartX < 35 || touchStartX > (window.innerWidth - 35));
}, { passive: true });

qCard.addEventListener('touchend', e => {
  if (isEdgeTouch) return; // 避让系统边缘手势
  const dx = e.changedTouches[0].screenX - touchStartX;
  const dy = e.changedTouches[0].screenY - touchStartY;
  if (Math.abs(dx) > 55 && Math.abs(dy) < 50) {
    if (dx < 0) gotoNextQuestion();
    else gotoPrevQuestion();
  }
}, { passive: true });
```

---

## 5. PWA 离线引擎与全套静态资源设计

### 5.1 Web App Manifest (`manifest.json`)
```json
{
  "id": "ncepu-power-system-quiz-app",
  "name": "华电《电力系统分析》全真题库",
  "short_name": "电分刷题宝",
  "start_url": "./index.html",
  "scope": "./",
  "display": "standalone",
  "orientation": "any",
  "background_color": "#0a0e17",
  "theme_color": "#0a0e17",
  "icons": [
    { "src": "icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" },
    { "src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" },
    { "src": "icon.svg", "sizes": "any", "type": "image/svg+xml", "purpose": "any maskable" }
  ],
  "shortcuts": [
    { "name": "顺序刷题", "url": "./index.html?mode=sequential" },
    { "name": "错题攻坚", "url": "./index.html?mode=wrong" },
    { "name": "仿真模考", "url": "./index.html?mode=exam" }
  ]
}
```

### 5.2 Service Worker 缓存策略 (`sw.js`)
* **核心策略**：`Stale-While-Revalidate`（优先高速返回本地离线缓存，后台静默联网拉取更新并落盘）；
* **版本自增规范**：任何代码或题库改动，**必须递增 `sw.js` 中的 `CACHE_NAME`**（例如 `v1.0.2` -> `v1.0.3`），确保所有离线客户端检测到更新后自动激活并清理过期缓存。

---

## 6. 零依赖数学公式渲染引擎与极简多端口令同步

### 6.1 原生数学公式解析器 (`renderMathBuiltin`)
避免引入重量级的 MathJax (数 MB) 或 KaTeX，采用轻量正则替换引擎处理全题库 457 处 LaTeX 标记：
- 分数渲染：`\frac{A}{B}` -> `<sup>A</sup>/<sub>B</sub>`
- 下标与上标：`X_1` -> `X<sub>1</sub>`，`U^2` -> `U<sup>2</sup>`
- 希腊字母与物理量符号转换：`\alpha` -> `α`，`\delta` -> `δ`，`\cos\varphi` -> `cosφ`
- 矩阵与特殊符号清理：去除多余的 `\mathrm{~kV}`、`\Omega` 规范化为 `Ω`。

### 6.2 跨设备口令同步机制 (`generateAndCopySyncCode`)
解决学生在 PC 与手机端互换学习时的刷题进度迁移痛点：
- **无服务端依赖**：将进度对象 (`progress`, `bookmarks`, `notes`, `settings`) 序列化为 JSON；
- **Base64 + URI 编码**：组装为口令格式：`HPU_QUIZ#<Base64数据>`；
- **传输便利**：一键复制后直接粘贴至微信/QQ/备忘录，在目标设备点击「📥 粘贴口令恢复」即可瞬间双向合并进度。

---

## 7. CI/CD 自动化流水线机制

仓库根目录配置了 `.github/workflows/deploy.yml`：
```yaml
name: Deploy Quiz PWA to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
**注意**：代码推送到 `main` 分支后，GitHub Actions 将在 20 秒内自动完成部署，绝不发生静默不触发或冷却排队。

---

## 8. Agent 维护与迭代实操手册 (Checklist)

后续 Agent 承接任务时，请严格遵照以下步骤执行：

### 8.1 题库数据更新流程
1. 若用户提供了新的考卷 Markdown，更新对应汇编文件；
2. 运行 `python parse_to_json.py` 重新生成 `questions_data.js`；
3. 校验题目总数：检查 `questions_data.js` 头部 `QUESTIONS_DB` 数组长度，确保每道题目 `id` 唯一且无重复。

### 8.2 界面与功能发布流程
1. 若修改了 `index.html` 或 `questions_data.js`：
   - 同步修改 `sw.js` 中的 `CACHE_NAME` 版本号（递增小版本号，如 `v1.0.3`）；
2. 确保 `overscroll-behavior-x: none` 与 `popstate` 历史栈逻辑完整保留，禁止删减历史栈相关处理；
3. 提交与推送命令：
   ```powershell
   git add .
   git commit -m "feat/fix: <修改简述>"
   git push origin main
   ```
4. 验证部署状态：
   使用 GitHub API 轮询确认 Actions 运行状态：
   `GET https://api.github.com/repos/xunyuefei/power-system-quiz/actions/runs`
   直到状态变为 `completed success`。

---

## 9. 智能复习引擎与多维诊断系统设计架构

### 9.1 艾宾浩斯自适应抗遗忘引擎 (Spaced Repetition Engine)
- **多阶段记忆排期**：Stage 0 (0.5天)、Stage 1 (1天)、Stage 2 (2天)、Stage 3 (4天)、Stage 4 (7天)、Stage 5 (15天)、Stage 6 (30天休眠复查)。
- **抗雪崩缓冲降级矩阵 (Anti-Avalanche Graceful Degradation)**：
  - Stage 1~2 答错：降至 Stage 0；
  - Stage 3~4 答错：缓冲降 1~2 级至 Stage 1 或 2；
  - Stage 5~6 答错：平滑回落至 Stage 2 并打上 `🔥 困难题` 标记；
  - 只有**连续两次答错**才重置回 Stage 0。
- **高阶双连对验证机制 (Confidence Verification)**：Stage 4 与 Stage 5 要求 `streak >= 2` 方可晋升下一阶段，防止侥幸蒙对。
- **每日动态切片与优先级公式**：
  $$\text{Priority} = 3.0 \times \min(48, \Delta t_{\text{overdue}}) + 2.0 \times N_{\text{mistakes}} - 1.5 \times \text{stage} + (\text{isHard} ? 5 : 0) + (!\text{correct} ? 10 : 0) + (\text{isDue} ? 100 : 0)$$
  每日默认上限 25 题（用户可在设置中自由切换 15 / 25 / 40 题），避免题目堆积雪崩。

### 9.2 章节多维量化与贝叶斯薄弱雷达 (Chapter Weakness Diagnostics)
- **指标体系解耦**：
  1. **首次错误率 (First-Attempt Error Rate)**：不可变基线，记录初次接触知识点的掌握盲区；
  2. **当前未掌握率 (Active Flaw Rate)**：当前未攻克题数与低阶段题数，驱动实时靶向练习；
  3. **总失误率 (Cumulative Error Rate)**：总做错次数 / 作答总次数。
- **小样本置信度守卫**：
  - $< 5$ 题：`⚪ 样本不足 (<5题)`，做题量少时避免误导焦虑；
  - $5 \sim 10$ 题：`🟡 初步参考`；
  - $> 10$ 题：正式评级（`🔴 严重薄弱` $\ge 30\%$，`🟡 需巩固` $15\%\sim 30\%$，`🟢 掌握良好` $<15\%$）。
- **四态分段热力进度条**：
  - 🟢 已掌握（Stage $\ge 4$ 且无遗留错题）
  - 🟡 巩固强化中（Stage 1~3）
  - 🔴 当前未攻克（Stage 0 或当前错题）
  - ⚪ 未作答
- **贝叶斯对数权重 TOP 3 薄弱雷达**：
  $$\text{WeaknessScore} = \text{FirstErrorRate} \times \ln(N_{\text{active\_wrong}} + 2) \times (N_{\text{total}} / 90.0)$$
  在章节专练区顶部高亮呈现 TOP 3 薄弱知识模块，并提供 `[⚡ 攻坚本章错题 (N题)]` 一键靶向突破入口。
