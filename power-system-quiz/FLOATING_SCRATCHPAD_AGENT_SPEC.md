# 🛠️ 悬浮窗便签与内容摘录器 (Floating Scratchpad & Snippet Clipper)
## —— 面向 AI 研发 Agent 的全流程落地与架构工程规范

> **目标受众**：AI 编程助手（Antigravity, Claude Code, Cursor, Copilot, ChatGPT 等）。  
> **使用场景**：在任何 Web 应用（题库刷题、文献精读、在线文档、网课学习等）中，当用户需要**在不打扰主干体验的前提下快速摘录、整理碎片笔记、且深度兼顾手机与电脑操作**时，Agent 读取本规范后可零偏差直接实现与部署。

---

## 1. 核心设计哲学与硬性原则 (Design Philosophy & Hard Rules)

未来的 Agent 在实现此功能时，**必须严格遵守以下 4 条底线法则**：

1. **绝对辅助定位，严禁喧宾夺主 (Strictly Auxiliary, Never Intrusive)**：
   - 便签只是主界面的辅助伴侣，默认状态下只展现为一个贴在屏幕右边缘的极窄半隐藏胶囊（Dock Tab），绝不能遮挡题干、选项或核心按钮。
   - 系统设置中必须提供全局开/关开关（`enableScratchpad: true/false`），用户关闭后 DOM 元素彻底隐藏，不监听任何事件。

2. **复制轻量确认，拒绝静默盗取 (Micro-Confirmation over Silent Capture)**：
   - 当用户在网页中选中文本并按下 `Ctrl+C`（或手机长按复制）时，**绝不能静默自作主张直接写入便签**。
   - 必须通过居中底部的轻量微气泡（Micro-Prompt Toast）浮出询问：`[检测到复制内容...] 📥 存入便签 | ✕ 忽略`。
   - 气泡停留 3.5 秒后自动隐去。只有用户主动点击确认时，才正式存入。

3. **结构化格式化，拒绝文本粘连 (Structured Framing over Raw Dumping)**：
   - 用户连续存入多段内容时，严禁将纯文本直接串联拼贴在同一个框内（否则后期无法辨别出处）。
   - 每条摘录必须作为一个**独立的卡片对象（Snippet Object）**保存，自动注入：
     - `id`: 唯一时间戳哈希
     - `time`: 录入精确时间（HH:mm）
     - `source`: 上下文元数据（如试卷名称、题号、章节名或页面模块）
     - `content`: 摘录的原文内容
     - `memo`: 允许用户追加单条心得/速记口诀的独立输入槽
   - 导出为 Markdown 时，自动排版为标准的带引用块（`> blockquote`）和三级标题的知识卡片。

4. **移动端手势与视口严密适配 (Mobile-First Ergonomics)**：
   - **手机端**：展开时呈现为**自底部弹出的半屏抽屉（Bottom-Sheet Drawer）**，契合单手大拇指滑动与关闭习惯。
   - **桌面端**：展开时呈现为**右侧滑出面板（Right Side Panel）**。
   - 边缘胶囊支持沿着屏幕边缘上下拖动（Touch/Pointer Drag），并实时将垂直百分比存入 `localStorage`，防止遮挡特定界面的操作按钮。

---

## 2. 数据结构模型 (Data Schema)

在宿主应用的全局状态（如 `appState` 或 Vue/React Store）中，声明以下标准字段：

```javascript
// 存储在 localStorage (例如键名: 'app_scratchpad_state_v1')
let appState = {
  // ... 其他业务数据
  settings: {
    enableScratchpad: true // 全局开关
  },
  scratchpad: [
    {
      id: "snip_1791552000000_a8f2", // 唯一ID
      time: "2026-10-09T22:30:00.000Z", // ISO 时间字符串
      paper: "华电 2025 期末试卷(A)",     // 可选来源分类1
      qId: "2025-期末A-单选-01",        // 可选来源分类2
      topic: "第二章·电力系统潮流计算",    // 可选知识点/章节分类
      content: "电压中枢点通常选择在电网中负荷集中、调压要求高的枢纽变电站母线。", // 摘录主体内容
      memo: "考前背诵：发电机调相调压优先！" // 用户自定义心得备忘
    }
  ]
};
```

---

## 3. DOM 结构标准模板 (HTML Architecture)

将以下三部分 DOM 骨架挂载至 `<body>` 根部：

```html
<!-- ========================================================
     1. 侧边吸附半隐藏微胶囊 (EDGE-DOCKED SLIM TAB)
     ======================================================== -->
<div id="scratchpadDockTab" class="scratchpad-dock-tab" onclick="toggleScratchpadDrawer()" title="点击展开便签备忘录 (按住可边缘上下拖动)">
  <span class="dock-tab-icon">📝</span>
  <span class="dock-tab-count" id="dockTabCount">0</span>
</div>

<!-- ========================================================
     2. 复制后轻量微确认气泡 (MICRO CONFIRMATION PROMPT TOAST)
     ======================================================== -->
<div id="scratchpadPromptToast" class="scratchpad-prompt-toast" style="display: none;">
  <div class="prompt-toast-content">
    <span class="prompt-toast-icon">📋</span>
    <div class="prompt-toast-text">
      <span class="prompt-toast-title">检测到复制内容</span>
      <span class="prompt-toast-snippet" id="promptToastSnippet">...</span>
    </div>
  </div>
  <div class="prompt-toast-actions">
    <button type="button" class="btn-prompt-save" onclick="confirmSaveSnippetToScratchpad()">📥 存入便签</button>
    <button type="button" class="btn-prompt-dismiss" onclick="dismissSnippetPrompt()">✕</button>
  </div>
</div>

<!-- ========================================================
     3. 便签抽屉与遮罩层 (BOTTOM SHEET / SIDE DRAWER)
     ======================================================== -->
<div id="scratchpadDrawerOverlay" class="scratchpad-drawer-overlay" onclick="closeScratchpadDrawer(event)">
  <div class="scratchpad-drawer" id="scratchpadDrawer" onclick="event.stopPropagation()">
    <!-- 抽屉顶部栏 -->
    <div class="scratchpad-drawer-header">
      <div class="drawer-header-left">
        <span class="drawer-header-title">📝 随手便签与考点速记</span>
        <span class="drawer-badge" id="drawerSnippetCount">0 条</span>
      </div>
      <button type="button" class="btn-drawer-close" onclick="closeScratchpadDrawer()">✕</button>
    </div>

    <!-- 顶部快捷操作栏 -->
    <div class="scratchpad-drawer-actions">
      <button type="button" class="btn-snip-action" onclick="addNewManualNote()">✏️ 手动输入</button>
      <button type="button" class="btn-snip-action" onclick="pasteClipboardToScratchpad()">📥 粘贴剪贴板</button>
      <button type="button" class="btn-snip-action" onclick="copyAllScratchpad()">📋 复制全部 (MD)</button>
      <button type="button" class="btn-snip-action" onclick="exportScratchpadMarkdown()">💾 导出 Markdown</button>
      <button type="button" class="btn-snip-action danger" onclick="clearAllScratchpad()">🗑️ 清空</button>
    </div>

    <!-- 便签卡片瀑布流列表 -->
    <div class="scratchpad-list" id="scratchpadList">
      <!-- 动态渲染单条便签卡片 -->
    </div>
  </div>
</div>
```

---

## 4. 样式系统规范 (Production-Ready Vanilla CSS)

以下 CSS 具备极客暗色调、玻璃拟态（Glassmorphism）、移动端 Touch 手势安全边距与响应式断点：

```css
/* ==========================================================================
   1. Edge-Docked Slim Tab (移动端侧边吸附微胶囊)
   ========================================================================== */
.scratchpad-dock-tab {
  position: fixed;
  right: 0;
  top: 60%;
  transform: translateY(-50%);
  z-index: 850;
  background: rgba(15, 23, 42, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(139, 92, 246, 0.4);
  border-right: none;
  border-radius: 20px 0 0 20px;
  padding: 7px 10px 7px 11px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  box-shadow: -2px 4px 14px rgba(0, 0, 0, 0.35);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease;
  touch-action: none; /* 关键：允许自主接管垂直拖拽手势 */
}
.scratchpad-dock-tab:hover {
  border-color: #a78bfa;
  background: rgba(30, 41, 59, 0.95);
}
.scratchpad-dock-tab:active {
  transform: translateY(-50%) scale(0.96);
}
.dock-tab-icon {
  font-size: 1.05rem;
  line-height: 1;
}
.dock-tab-count {
  font-size: 0.74rem;
  font-weight: 700;
  color: #c084fc;
  background: rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1px 6px;
  min-width: 16px;
  text-align: center;
}

/* ==========================================================================
   2. Micro Confirmation Prompt Toast (复制后的轻量确认微气泡)
   ========================================================================== */
.scratchpad-prompt-toast {
  position: fixed;
  bottom: 84px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 890;
  width: min(92vw, 420px);
  background: rgba(15, 23, 42, 0.94);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(139, 92, 246, 0.45);
  border-radius: 12px;
  padding: 10px 14px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(139, 92, 246, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  animation: promptFadeUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes promptFadeUp {
  from { opacity: 0; transform: translate(-50%, 16px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}
.prompt-toast-content {
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  flex: 1;
}
.prompt-toast-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}
.prompt-toast-text {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.prompt-toast-title {
  font-size: 0.76rem;
  color: #a78bfa;
  font-weight: 600;
}
.prompt-toast-snippet {
  font-size: 0.8rem;
  color: #e2e8f0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.prompt-toast-actions {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}
.btn-prompt-save {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  border: none;
  color: #fff;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 5px 11px;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.2s ease;
}
.btn-prompt-save:hover { opacity: 0.9; }
.btn-prompt-dismiss {
  background: rgba(255, 255, 255, 0.08);
  border: none;
  color: #94a3b8;
  font-size: 0.82rem;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ==========================================================================
   3. Bottom Sheet / Side Panel Drawer (抽屉主面板)
   ========================================================================== */
.scratchpad-drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 900;
  display: none;
  align-items: flex-end; /* 移动端默认底部抽屉 */
  justify-content: center;
  opacity: 0;
  transition: opacity 0.28s ease;
}
.scratchpad-drawer-overlay.active {
  opacity: 1;
}
.scratchpad-drawer {
  background: #0f172a;
  border: 1px solid rgba(139, 92, 246, 0.35);
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  
  /* 移动端全宽半屏抽屉 (Bottom Sheet) */
  width: 100%;
  max-height: 84vh;
  min-height: 48vh;
  border-radius: 20px 20px 0 0;
  transform: translateY(100%);
  padding-bottom: env(safe-area-inset-bottom, 16px);
}
.scratchpad-drawer-overlay.active .scratchpad-drawer {
  transform: translateY(0);
}

/* 桌面端宽度适配 (转换为右侧抽屉) */
@media (min-width: 768px) {
  .scratchpad-drawer-overlay {
    justify-content: flex-end;
    align-items: stretch;
  }
  .scratchpad-drawer {
    width: 440px;
    max-height: 100vh;
    height: 100vh;
    border-radius: 20px 0 0 20px;
    border-right: none;
    transform: translateX(100%);
  }
  .scratchpad-drawer-overlay.active .scratchpad-drawer {
    transform: translateX(0);
  }
}

/* 抽屉内部头部 */
.scratchpad-drawer-header {
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.drawer-header-title {
  font-size: 0.96rem;
  font-weight: 700;
  color: #f1f5f9;
}
.drawer-badge {
  font-size: 0.74rem;
  padding: 2px 7px;
  border-radius: 999px;
  background: rgba(139, 92, 246, 0.2);
  color: #c084fc;
  font-weight: 600;
  margin-left: 8px;
}
.btn-drawer-close {
  background: rgba(255, 255, 255, 0.08);
  border: none;
  color: #94a3b8;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
}

/* 快捷操作栏 */
.scratchpad-drawer-actions {
  display: flex;
  gap: 6px;
  padding: 10px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  overflow-x: auto;
  scrollbar-width: none;
}
.scratchpad-drawer-actions::-webkit-scrollbar { display: none; }
.btn-snip-action {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #cbd5e1;
  font-size: 0.74rem;
  padding: 5px 10px;
  border-radius: 6px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-snip-action:hover {
  background: rgba(139, 92, 246, 0.15);
  color: #c084fc;
  border-color: rgba(139, 92, 246, 0.4);
}
.btn-snip-action.danger:hover {
  background: rgba(239, 68, 68, 0.15);
  color: #f87171;
  border-color: rgba(239, 68, 68, 0.4);
}

/* 便签列表与卡片 */
.scratchpad-list {
  flex: 1;
  overflow-y: auto;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.scratchpad-card {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: border-color 0.2s ease;
}
.scratchpad-card:hover {
  border-color: rgba(139, 92, 246, 0.35);
}
.snippet-meta-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.72rem;
  color: #94a3b8;
}
.snippet-tag {
  color: #c084fc;
  font-weight: 600;
  background: rgba(139, 92, 246, 0.15);
  padding: 1px 6px;
  border-radius: 4px;
}
.snippet-content {
  font-size: 0.84rem;
  color: #f1f5f9;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  background: rgba(15, 23, 42, 0.5);
  padding: 8px 10px;
  border-radius: 6px;
  border-left: 3px solid #8b5cf6;
}
.snippet-memo-input {
  background: rgba(15, 23, 42, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  color: #e2e8f0;
  font-size: 0.78rem;
  padding: 5px 8px;
  outline: none;
}
.snippet-memo-input:focus {
  border-color: #8b5cf6;
}
.snippet-actions {
  display: flex;
  gap: 4px;
}
.btn-snippet-act {
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px 5px;
  font-size: 0.8rem;
  border-radius: 4px;
  color: #94a3b8;
}
.btn-snippet-act:hover { color: #f1f5f9; background: rgba(255, 255, 255, 0.1); }
.btn-snippet-act.danger:hover { color: #f87171; }
```

---

## 5. JavaScript 核心引擎逻辑 (Engine Protocol)

在页面初始化阶段（如 `DOMContentLoaded`），调用 `initScratchpadEngine()`：

```javascript
/* ==========================================================================
   FLOATING SCRATCHPAD ENGINE CORE
   ========================================================================== */
let pendingSnippetText = '';
let promptToastTimer = null;
let isDockDragging = false;
let dockStartY = 0;
let dockStartTop = 0;

function initScratchpadEngine() {
  initScratchpadDockDrag();
  initCopyDetection();
  updateScratchpadBadge();
  updateScratchpadVisibility();

  // 快捷键: Alt + N 快速开/关便签抽屉
  window.addEventListener('keydown', (e) => {
    if (e.altKey && (e.key === 'n' || e.key === 'N')) {
      e.preventDefault();
      toggleScratchpadDrawer();
    }
  });
}

// 1. 胶囊贴边拖动与位置记忆 (Touch + Mouse 统一适配)
function initScratchpadDockDrag() {
  const tab = document.getElementById('scratchpadDockTab');
  if (!tab) return;

  const onDragStart = (e) => {
    isDockDragging = true;
    dockStartY = e.touches ? e.touches[0].clientY : e.clientY;
    dockStartTop = tab.getBoundingClientRect().top;
  };

  const onDragMove = (e) => {
    if (!isDockDragging) return;
    const curY = e.touches ? e.touches[0].clientY : e.clientY;
    const dy = curY - dockStartY;
    let newTop = dockStartTop + dy;
    const maxTop = window.innerHeight - 80;
    const minTop = 60;
    newTop = Math.max(minTop, Math.min(maxTop, newTop));
    tab.style.top = newTop + 'px';
    tab.style.transform = 'none';
  };

  const onDragEnd = () => {
    if (isDockDragging) {
      isDockDragging = false;
      const topPct = (tab.offsetTop / window.innerHeight) * 100;
      try {
        localStorage.setItem('hpu_scratchpad_top_pct', topPct.toFixed(1) + '%');
      } catch (e) {}
    }
  };

  tab.addEventListener('touchstart', onDragStart, { passive: true });
  window.addEventListener('touchmove', onDragMove, { passive: true });
  window.addEventListener('touchend', onDragEnd, { passive: true });

  tab.addEventListener('mousedown', onDragStart);
  window.addEventListener('mousemove', onDragMove);
  window.addEventListener('mouseup', onDragEnd);

  // 恢复保存的垂直百分比
  try {
    const savedTop = localStorage.getItem('hpu_scratchpad_top_pct');
    if (savedTop) {
      tab.style.top = savedTop;
      tab.style.transform = 'none';
    }
  } catch (e) {}
}

// 2. 复制行为监听与微气泡交互
function initCopyDetection() {
  document.addEventListener('copy', () => {
    if (appState.settings && appState.settings.enableScratchpad === false) return;

    // 获取当前划词选区
    const sel = window.getSelection();
    const selected = sel ? sel.toString().trim() : '';
    if (!selected || selected.length < 2) return;

    // 过滤掉输入框、文本域内或便签抽屉本身的复制
    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || (activeEl.closest && activeEl.closest('#scratchpadDrawer')))) {
      return;
    }

    pendingSnippetText = selected;
    showCopyPromptToast(selected);
  });
}

function showCopyPromptToast(text) {
  const toast = document.getElementById('scratchpadPromptToast');
  const snippetEl = document.getElementById('promptToastSnippet');
  if (!toast || !snippetEl) return;

  snippetEl.textContent = text.length > 32 ? text.slice(0, 32) + '...' : text;
  toast.style.display = 'flex';

  if (promptToastTimer) clearTimeout(promptToastTimer);
  promptToastTimer = setTimeout(() => {
    dismissSnippetPrompt();
  }, 3800);
}

function dismissSnippetPrompt() {
  const toast = document.getElementById('scratchpadPromptToast');
  if (toast) toast.style.display = 'none';
  pendingSnippetText = '';
  if (promptToastTimer) clearTimeout(promptToastTimer);
}

function confirmSaveSnippetToScratchpad() {
  if (!pendingSnippetText) return;
  addSnippetToScratchpad(pendingSnippetText);
  dismissSnippetPrompt();
  if (typeof showToast === 'function') showToast('🎉 已格式化存入便签！', '📝');
}

// 3. 结构化片段追加
function addSnippetToScratchpad(content, customMeta) {
  if (!appState.scratchpad) appState.scratchpad = [];

  const snippet = {
    id: 'snip_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
    time: new Date().toISOString(),
    paper: customMeta ? customMeta.paper || '' : '',
    qId: customMeta ? customMeta.qId || '' : '',
    topic: customMeta ? customMeta.topic || '' : '',
    content: content.trim(),
    memo: ''
  };

  appState.scratchpad.unshift(snippet); // 最新的置于最顶端
  if (typeof saveState === 'function') saveState();
  updateScratchpadBadge();
  renderScratchpadList();
}

// 4. 抽屉显示与渲染
function toggleScratchpadDrawer() {
  const overlay = document.getElementById('scratchpadDrawerOverlay');
  if (!overlay) return;
  if (overlay.classList.contains('active')) {
    closeScratchpadDrawer();
  } else {
    overlay.style.display = 'flex';
    requestAnimationFrame(() => overlay.classList.add('active'));
    renderScratchpadList();
  }
}

function closeScratchpadDrawer(e) {
  const overlay = document.getElementById('scratchpadDrawerOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  setTimeout(() => { overlay.style.display = 'none'; }, 280);
}

function renderScratchpadList() {
  const listEl = document.getElementById('scratchpadList');
  if (!listEl) return;
  const items = appState.scratchpad || [];

  if (items.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; color: #94a3b8; padding: 40px 10px;">
        <div style="font-size: 2.2rem; margin-bottom: 8px;">📝</div>
        <strong>便签备忘录暂无内容</strong>
        <div style="font-size: 0.78rem; margin-top: 6px;">选中文本复制或点击「摘录」按钮即可归集！</div>
      </div>
    `;
    return;
  }

  listEl.innerHTML = items.map((item, idx) => {
    const srcTag = [item.paper, item.qId, item.topic].filter(Boolean).join(' · ') || '摘录片段';
    const timeStr = item.time ? new Date(item.time).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }) : '';
    const num = items.length - idx;

    return `
      <div class="scratchpad-card" id="card_${item.id}">
        <div class="snippet-meta-line">
          <span class="snippet-tag">#${num} ${escapeHtml(srcTag)}</span>
          <div style="display:flex; align-items:center; gap:8px;">
            <span>${timeStr}</span>
            <div class="snippet-actions">
              <button type="button" class="btn-snippet-act" onclick="copySnippetContent('${item.id}')" title="复制">📋</button>
              <button type="button" class="btn-snippet-act danger" onclick="deleteSnippet('${item.id}')" title="删除">✕</button>
            </div>
          </div>
        </div>
        <div class="snippet-content">${escapeHtml(item.content)}</div>
        <input type="text" class="snippet-memo-input" placeholder="💭 补充考点心得/备忘..." value="${escapeHtml(item.memo || '')}" oninput="updateSnippetMemo('${item.id}', this.value)">
      </div>
    `;
  }).join('');
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function deleteSnippet(id) {
  if (!appState.scratchpad) return;
  appState.scratchpad = appState.scratchpad.filter(s => s.id !== id);
  if (typeof saveState === 'function') saveState();
  updateScratchpadBadge();
  renderScratchpadList();
}

function updateSnippetMemo(id, memo) {
  if (!appState.scratchpad) return;
  const item = appState.scratchpad.find(s => s.id === id);
  if (item) {
    item.memo = memo;
    if (typeof saveState === 'function') saveState();
  }
}

// 5. 批量 Markdown 导出与防粘连排版
function copyAllScratchpad() {
  if (!appState.scratchpad || appState.scratchpad.length === 0) return;
  let md = '# 学习便签与考点速记备忘录\n\n';
  appState.scratchpad.forEach((s, idx) => {
    const timeStr = s.time ? new Date(s.time).toLocaleString('zh-CN', { hour12: false }) : '';
    const src = [s.paper, s.qId, s.topic].filter(Boolean).join(' · ');
    md += `### 片段 0${idx + 1} ${src ? '【' + src + '】' : ''} (${timeStr})\n\n`;
    md += `> ${s.content.replace(/\n/g, '\n> ')}\n\n`;
    if (s.memo) md += `*心得备忘*: ${s.memo}\n\n`;
    md += '---\n\n';
  });

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(md).then(() => {
      if (typeof showToast === 'function') showToast('📋 全部便签已复制为 Markdown！', '🎉');
    });
  }
}

function exportScratchpadMarkdown() {
  if (!appState.scratchpad || appState.scratchpad.length === 0) return;
  let md = '# 学习便签与考点速记备忘录\n\n';
  appState.scratchpad.forEach((s, idx) => {
    const timeStr = s.time ? new Date(s.time).toLocaleString('zh-CN', { hour12: false }) : '';
    const src = [s.paper, s.qId, s.topic].filter(Boolean).join(' · ');
    md += `### 片段 0${idx + 1} ${src ? '【' + src + '】' : ''} (${timeStr})\n\n`;
    md += `> ${s.content.replace(/\n/g, '\n> ')}\n\n`;
    if (s.memo) md += `*心得备忘*: ${s.memo}\n\n`;
    md += '---\n\n';
  });

  try {
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `学习便签_${new Date().toISOString().slice(0, 10)}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (e) {
    copyAllScratchpad();
  }
}

function clearAllScratchpad() {
  if (!appState.scratchpad || appState.scratchpad.length === 0) return;
  if (confirm('确定清空当前所有便签内容吗？此操作无法撤销。')) {
    appState.scratchpad = [];
    if (typeof saveState === 'function') saveState();
    updateScratchpadBadge();
    renderScratchpadList();
    if (typeof showToast === 'function') showToast('便签已全部清空', '🗑️');
  }
}

function updateScratchpadBadge() {
  const count = (appState.scratchpad || []).length;
  const badgeEl = document.getElementById('dockTabCount');
  if (badgeEl) badgeEl.textContent = count;
  const drawerCountEl = document.getElementById('drawerSnippetCount');
  if (drawerCountEl) drawerCountEl.textContent = `${count} 条`;
}

function updateScratchpadVisibility() {
  const enabled = !appState.settings || appState.settings.enableScratchpad !== false;
  const tab = document.getElementById('scratchpadDockTab');
  if (tab) tab.style.display = enabled ? 'flex' : 'none';
}
```

---

## 6. 常见踩坑点与防御矩阵 (Edge Cases & Defense Matrix)

未来的 Agent 在其它项目中复用此功能时，**极易在以下 5 个场景中出现隐蔽 Bug，必须严格采用如下防御方案**：

| 踩坑场景 | 隐蔽危害 | 标准防御方案 |
| :--- | :--- | :--- |
| **1. 手机滑动滚动与拖拽冲突** | 用户上下滑屏看网页时，误触便签胶囊导致整个页面滚动卡死 | 在 `.scratchpad-dock-tab` 上强制设置 `touch-action: none;`；拖拽监听器使用 `{ passive: true }`，且只绑定垂直方向位移。 |
| **2. 划词选区与输入框冲突** | 用户在搜索框或笔记框编辑打字时复制自己的文字，意外弹出微气泡打扰输入 | `initCopyDetection()` 中增加严格守卫：`activeEl.tagName === 'INPUT' \|\| activeEl.tagName === 'TEXTAREA' \|\| activeEl.closest('#scratchpadDrawer')`，此时直接 `return` 忽略。 |
| **3. iOS Safari 底部安全区遮挡** | 抽屉底部按钮被苹果 Home Indicator 黑条遮挡无法点击 | 在 `.scratchpad-drawer` 底部强制设置 `padding-bottom: env(safe-area-inset-bottom, 16px);`。 |
| **4. 连续复制文字粘连成一团** | 用户复制 5 段文字，结果所有文字贴合在一起分不清哪句是哪句 | 坚决禁止直接向同一字符串 `+=`。强制使用独立卡片对象存入数组，由引擎根据数组统一渲染，每张卡片带来源 Tag、时间与引用块。 |
| **5. 剪贴板权限被拒 (Permissions Policy)** | 在非 HTTPS 或移动端 iframe 中读取剪贴板报错导致脚本崩溃 | 严密包裹 `navigator.clipboard.readText().catch(...)`，捕获异常后自动降级弹窗为 `prompt('请输入要速记的内容：')` 原生兜底输入。 |

---

## 7. Agent 交付验收清单 (Self-Check & Acceptance Criteria)

在将本组件集成到新项目后，Agent 必须通过以下 6 项验收标准后方可汇报完成：

- [ ] **视觉隐蔽度**：默认状态下仅在屏幕右边缘露出一枚极薄小胶囊（带当前数字徽标），不遮挡主要正文。
- [ ] **拖拽稳定性**：手机触摸与电脑鼠标均可在屏幕右边缘上下平滑拖动胶囊，松手后刷新页面，胶囊保持在用户拖动的新垂直位置。
- [ ] **复制微气泡**：在正文区划词复制任意文本，屏幕底部平滑浮出确认气泡（3.5 秒后自动消失），点击「📥 存入便签」后存入，点击「✕」或不操作不存入。
- [ ] **防文本粘连**：连续存入 3 条不同内容，展开便签抽屉时呈现为清晰的 3 张独立卡片，各自具有时间标签与独立心得输入槽。
- [ ] **Markdown 导出格式**：点击「导出 Markdown」或「复制全部 (MD)」，输出的内容具备标准的 `#` 标题、`###` 片段编号、`>` 引用块以及分割线。
- [ ] **设置开关联动**：在全局设置中关闭「启用悬浮便签」，胶囊立即从界面中彻底消失。
