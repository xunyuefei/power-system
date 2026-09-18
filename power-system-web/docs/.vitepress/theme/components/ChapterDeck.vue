<template>
  <div class="chapter-deck-container">
    <div v-if="loading" class="deck-loading">
      <div class="spinner"></div>
      <p>正在装载本章真题与公式题库...</p>
    </div>

    <div v-else-if="chapterCards.length === 0" class="deck-empty">
      <p>本章暂无题目记录。</p>
    </div>

    <div v-else class="deck-main">
      <!-- Top Control Bar -->
      <div class="deck-toolbar">
        <div class="mode-switch-group">
          <button 
            class="switch-btn" 
            :class="{ active: viewMode === 'card' }" 
            @click="viewMode = 'card'"
          >
            🎴 沉浸切题模式 (零上下滑动)
          </button>
          <button 
            class="switch-btn" 
            :class="{ active: viewMode === 'list' }" 
            @click="viewMode = 'list'"
          >
            📑 考点折叠清单
          </button>
        </div>

        <div class="deck-filter-group">
          <label class="filter-label">筛选：</label>
          <select v-model="cardFilter" class="filter-select">
            <option value="all">全量题目 ({{ chapterCards.length }} 题)</option>
            <option value="unlearned">未学新题 ({{ filterCounts.unlearned }} 题)</option>
            <option value="lapse">攻坚错题 ({{ filterCounts.lapse }} 题)</option>
            <option value="mastered">已掌握题 ({{ filterCounts.mastered }} 题)</option>
          </select>
          <a :href="withBase('/notes')" target="_blank" class="open-notes-hub-link" title="在独立窗口中打开全部笔记">
            📖 笔记库 ({{ totalNotesCount }})
          </a>
        </div>
      </div>

      <!-- ================= MODE 1: SINGLE CARD SWIPER (ZERO SCROLLING) ================= -->
      <div v-if="viewMode === 'card'" class="single-card-view">
        <div v-if="filteredCards.length === 0" class="no-filtered-cards">
          <p>当前筛选条件下暂无卡片！</p>
          <button class="reset-filter-btn" @click="cardFilter = 'all'">查看本章全部题目</button>
        </div>

        <div 
          v-else 
          class="card-deck-card" 
          :class="{ 'with-note-expanded': showNoteDrawer }"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
        >
          <!-- Card Progress Header -->
          <div class="card-deck-header">
            <div class="header-left">
              <span class="index-pill">
                第 <b>{{ currentIndex + 1 }}</b> / {{ filteredCards.length }} 题
              </span>
              <span class="source-tag" v-if="currentCard.sourceTag">
                {{ currentCard.sourceTag }}
              </span>
            </div>

            <div class="header-right">
              <div class="status-indicator" v-if="currentCardState && currentCardState.lastReviewed">
                <span v-if="currentCardState.lastRating === 'hard'" class="tag hard">🔴 需重刷</span>
                <span v-else-if="currentCardState.lastRating === 'medium'" class="tag medium">🟡 模糊</span>
                <span v-else-if="currentCardState.lastRating === 'easy'" class="tag easy">🟢 已掌握</span>
              </div>

              <!-- Note Toggle Button -->
              <button 
                class="note-toggle-btn" 
                :class="{ 'has-note': cardNote, 'active': showNoteDrawer }" 
                @click="toggleNoteDrawer"
                title="打开本题随堂笔记栏"
              >
                <span class="note-icon">📝</span>
                <span>{{ cardNote ? '已记笔记' : '记笔记' }}</span>
              </button>

              <span class="shortcut-tip desktop-only">快捷键: ←/→ 切题 · 空格翻牌 · 1/2/3 打分</span>
              <span class="mobile-only gesture-tip">📱 左右滑动切题</span>
            </div>
          </div>

          <!-- Progress Line -->
          <div class="deck-progress-track">
            <div class="deck-progress-bar" :style="{ width: ((currentIndex + 1) / filteredCards.length * 100) + '%' }"></div>
          </div>

          <!-- Card Content Body & Note Split Layout -->
          <div class="card-deck-body-wrapper">
            <div class="card-deck-body">
              <!-- Question -->
              <div class="deck-question-box">
                <div class="q-badge">❓ 考研原题</div>
                <div class="math-content" v-html="renderMath(currentCard.question)"></div>
              </div>

              <!-- Answer Section -->
              <div class="deck-answer-box" :class="{ 'is-blurred': !isRevealed }">
                <div class="a-badge">💡 标准解析与采分要点</div>
                <div class="math-content answer-text" v-html="renderMath(currentCard.answer)"></div>

                <!-- Blur Overlay -->
                <div class="reveal-overlay" v-if="!isRevealed" @click="revealAnswer">
                  <button class="reveal-btn-center">
                    <span>💡 查看答案解析 (空格 Space)</span>
                  </button>
                </div>
              </div>

              <!-- Feedback Rating Section (Revealed) -->
              <div class="deck-feedback-bar" v-if="isRevealed">
                <div class="feedback-hint">记忆反馈评估：</div>
                <div class="feedback-btn-row">
                  <button 
                    class="fb-btn btn-again" 
                    :class="{ active: currentCardState && currentCardState.lastRating === 'hard' }"
                    @click="handleRate('hard')"
                  >
                    <span class="fb-main">❌ 完全不会 (1)</span>
                    <span class="fb-sub">纳入错题攻坚</span>
                  </button>

                  <button 
                    class="fb-btn btn-good" 
                    :class="{ active: currentCardState && currentCardState.lastRating === 'medium' }"
                    @click="handleRate('medium')"
                  >
                    <span class="fb-main">⚠️ 模糊不确定 (2)</span>
                    <span class="fb-sub">明日再次巩固</span>
                  </button>

                  <button 
                    class="fb-btn btn-easy" 
                    :class="{ active: currentCardState && currentCardState.lastRating === 'easy' }"
                    @click="handleRate('easy')"
                  >
                    <span class="fb-main">✅ 熟练掌握 (3)</span>
                    <span class="fb-sub">进入长周期</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Integrated Side / Expandable Note Drawer -->
            <div class="card-note-drawer" v-if="showNoteDrawer">
              <div class="drawer-header">
                <div class="drawer-title-group">
                  <span class="drawer-title">📝 随堂备忘与易错心得</span>
                  <span class="save-status">实时自动保存</span>
                </div>
                <div class="drawer-actions">
                  <a :href="withBase('/notes')" target="_blank" class="drawer-link" title="在独立窗口中打开笔记库">全屏笔记库 ↗</a>
                  <button v-if="cardNote" class="drawer-del" @click="handleDeleteNote" title="清空本题笔记">清空</button>
                </div>
              </div>
              <textarea 
                class="drawer-textarea"
                v-model="localNoteText"
                @input="onNoteInput"
                placeholder="在此写下你对这道题的速记口诀、易错点、推导要领..."
                rows="6"
              ></textarea>
              <div class="drawer-tip">💡 提示：输入内容会自动同步保存，可随时在顶栏【📝 考研笔记本】集中复习或删除。</div>
            </div>
          </div>

          <!-- Card Navigation Bottom Bar -->
          <div class="card-deck-nav">
            <button class="nav-arrow-btn" @click="prevCard" :disabled="currentIndex <= 0">
              ⬅️ 上一题 (←)
            </button>

            <!-- Quick Number Jumper -->
            <div class="nav-jumper">
              <select v-model.number="currentIndex" class="jumper-select" @change="onJump">
                <option v-for="(c, idx) in filteredCards" :key="c.id" :value="idx">
                  第 {{ idx + 1 }} 题: {{ truncateText(c.question, 24) }} {{ getNote(c.id) ? ' [📝]' : '' }}
                </option>
              </select>
            </div>

            <button class="nav-arrow-btn primary" @click="nextCard" :disabled="currentIndex >= filteredCards.length - 1">
              下一题 (→) ➡️
            </button>
          </div>
        </div>
      </div>

      <!-- ================= MODE 2: TOPIC ACCORDION LIST ================= -->
      <div v-else class="accordion-list-view">
        <div class="accordion-summary">
          共 {{ filteredCards.length }} 道题目，点击考点卡片展开浏览，拒绝漫无边际的长滑动。
        </div>

        <div class="accordion-card-list">
          <div 
            v-for="(card, idx) in filteredCards" 
            :key="card.id" 
            class="list-card-item"
            :class="{ 'expanded': expandedCards.includes(card.id) }"
          >
            <div class="item-header" @click="toggleExpand(card.id)">
              <div class="item-meta">
                <span class="item-num">#{{ idx + 1 }}</span>
                <span class="item-source" v-if="card.sourceTag">{{ card.sourceTag }}</span>
                <span class="item-note-badge" v-if="getNote(card.id)">📝 笔记</span>
                <span class="item-q-preview" v-html="renderMath(truncateText(card.question, 60))"></span>
              </div>
              <div class="item-expand-icon">
                {{ expandedCards.includes(card.id) ? '▲ 收起' : '▼ 展开' }}
              </div>
            </div>

            <!-- Expanded Details -->
            <div class="item-body" v-if="expandedCards.includes(card.id)">
              <div class="item-full-question">
                <div class="q-badge">❓ 完整问题</div>
                <div class="math-content" v-html="renderMath(card.question)"></div>
              </div>
              <div class="item-full-answer">
                <div class="a-badge">💡 解析</div>
                <div class="math-content" v-html="renderMath(card.answer)"></div>
              </div>

              <!-- Note Section inside Accordion -->
              <div class="item-note-section">
                <div class="inline-note-label">📝 我的笔记：</div>
                <textarea 
                  class="inline-note-input"
                  :value="getNote(card.id) ? getNote(card.id).text : ''"
                  @input="(e) => handleInlineNote(card, e.target.value)"
                  placeholder="点击记录笔记..."
                  rows="2"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { withBase } from 'vitepress'
import { useAnki } from '../useAnki'
import { useNotes } from '../useNotes'
import katex from 'katex'

const props = defineProps({
  chapter: {
    type: Number,
    required: true
  }
})

const {
  ankiState,
  markHard,
  markMedium,
  markEasy,
  getCardState
} = useAnki()

const {
  getNote,
  saveNote,
  deleteNote,
  totalNotesCount
} = useNotes()

const loading = ref(true)
const allCards = ref([])
const viewMode = ref('card') // 'card' or 'list'
const cardFilter = ref('all')
const currentIndex = ref(0)
const isRevealed = ref(false)
const expandedCards = ref([])

// Note drawer state
const showNoteDrawer = ref(false)
const localNoteText = ref('')

// Touch gesture handling for Android / mobile swiping
let touchStartX = 0
let touchStartY = 0

const handleTouchStart = (e) => {
  if (e.touches && e.touches.length === 1) {
    touchStartX = e.touches[0].clientX
    touchStartY = e.touches[0].clientY
  }
}

const handleTouchEnd = (e) => {
  if (e.changedTouches && e.changedTouches.length === 1) {
    const deltaX = e.changedTouches[0].clientX - touchStartX
    const deltaY = e.changedTouches[0].clientY - touchStartY
    // Horizontal swipe threshold: > 45px and mostly horizontal
    if (Math.abs(deltaX) > 45 && Math.abs(deltaY) < 55) {
      if (deltaX < 0) {
        nextCard() // Swipe left -> Next card
      } else {
        prevCard() // Swipe right -> Prev card
      }
    }
  }
}

// Fetch cards
const loadData = async () => {
  try {
    const res = await fetch(withBase('/cards.json'))
    allCards.value = await res.json()
  } catch (e) {
    console.error('Failed to load cards.json', e)
  } finally {
    loading.value = false
  }
}

// Cards for this specific chapter
const chapterCards = computed(() => {
  return allCards.value.filter(c => c.chapter === props.chapter)
})

// Counts for filter pills
const filterCounts = computed(() => {
  let unlearned = 0
  let lapse = 0
  let mastered = 0

  chapterCards.value.forEach(c => {
    const s = ankiState.value[c.id]
    if (!s || !s.lastReviewed) {
      unlearned++
    } else if (s.lastRating === 'hard' || (s.lapses && s.lapses > 0)) {
      lapse++
    } else {
      mastered++
    }
  })

  return { unlearned, lapse, mastered }
})

// Filtered cards in view
const filteredCards = computed(() => {
  if (cardFilter.value === 'unlearned') {
    return chapterCards.value.filter(c => {
      const s = ankiState.value[c.id]
      return !s || !s.lastReviewed
    })
  }
  if (cardFilter.value === 'lapse') {
    return chapterCards.value.filter(c => {
      const s = ankiState.value[c.id]
      return s && (s.lastRating === 'hard' || (s.lapses && s.lapses > 0))
    })
  }
  if (cardFilter.value === 'mastered') {
    return chapterCards.value.filter(c => {
      const s = ankiState.value[c.id]
      return s && s.lastReviewed && s.lastRating !== 'hard'
    })
  }
  return chapterCards.value
})

const currentCard = computed(() => {
  return filteredCards.value[currentIndex.value] || null
})

const currentCardState = computed(() => {
  if (!currentCard.value) return null
  return getCardState(currentCard.value.id)
})

const cardNote = computed(() => {
  if (!currentCard.value) return null
  return getNote(currentCard.value.id)
})

// Sync note text when card changes
const syncCurrentNote = () => {
  if (currentCard.value) {
    const n = getNote(currentCard.value.id)
    localNoteText.value = n ? n.text : ''
  } else {
    localNoteText.value = ''
  }
}

watch(currentCard, () => {
  syncCurrentNote()
})

const toggleNoteDrawer = () => {
  showNoteDrawer.value = !showNoteDrawer.value
  syncCurrentNote()
}

const onNoteInput = () => {
  if (!currentCard.value) return
  saveNote(currentCard.value.id, localNoteText.value, {
    chapter: currentCard.value.chapter,
    sourceTag: currentCard.value.sourceTag,
    question: currentCard.value.question
  })
}

const handleDeleteNote = () => {
  if (!currentCard.value) return
  if (confirm('确定要删除本题的笔记吗？')) {
    deleteNote(currentCard.value.id)
    localNoteText.value = ''
  }
}

const handleInlineNote = (card, text) => {
  saveNote(card.id, text, {
    chapter: card.chapter,
    sourceTag: card.sourceTag,
    question: card.question
  })
}

// Navigation
const nextCard = () => {
  if (currentIndex.value < filteredCards.value.length - 1) {
    currentIndex.value++
    isRevealed.value = false
  }
}

const prevCard = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    isRevealed.value = false
  }
}

const onJump = () => {
  isRevealed.value = false
}

const revealAnswer = () => {
  isRevealed.value = true
}

const handleRate = (level) => {
  if (!currentCard.value) return
  const id = currentCard.value.id
  if (level === 'hard') markHard(id)
  else if (level === 'medium') markMedium(id)
  else if (level === 'easy') markEasy(id)

  setTimeout(() => {
    if (currentIndex.value < filteredCards.value.length - 1) {
      currentIndex.value++
      isRevealed.value = false
    }
  }, 250)
}

const toggleExpand = (id) => {
  const idx = expandedCards.value.indexOf(id)
  if (idx > -1) {
    expandedCards.value.splice(idx, 1)
  } else {
    expandedCards.value.push(id)
  }
}

// KaTeX Math Rendering
const renderMath = (text) => {
  if (!text) return ''
  let html = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
    try {
      return `<div class="katex-display">${katex.renderToString(math.trim(), { displayMode: true, throwOnError: false })}</div>`
    } catch (e) {
      return `$$${math}$$`
    }
  })
  html = html.replace(/\$([^\$\n]+?)\$/g, (_, math) => {
    try {
      return katex.renderToString(math.trim(), { displayMode: false, throwOnError: false })
    } catch (e) {
      return `$${math}$`
    }
  })
  html = html
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>')
  return html
}

const truncateText = (text, len) => {
  if (!text) return ''
  const clean = text.replace(/\$[^$]*\$/g, '[公式]').replace(/<[^>]+>/g, '')
  if (clean.length <= len) return clean
  return clean.slice(0, len) + '...'
}

// Keyboard navigation
const handleKey = (e) => {
  if (viewMode.value !== 'card' || !currentCard.value) return

  // Do not intercept if user is typing in textarea
  if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return

  if (!isRevealed.value && (e.code === 'Space' || e.code === 'Enter')) {
    e.preventDefault()
    revealAnswer()
  } else if (isRevealed.value) {
    if (e.key === '1') handleRate('hard')
    if (e.key === '2') handleRate('medium')
    if (e.key === '3') handleRate('easy')
  }

  if (e.key === 'ArrowLeft') {
    prevCard()
  } else if (e.key === 'ArrowRight') {
    nextCard()
  }
}

watch(cardFilter, () => {
  currentIndex.value = 0
  isRevealed.value = false
})

onMounted(() => {
  loadData()
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKey)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKey)
  }
})
</script>

<style scoped>
.chapter-deck-container {
  max-width: 920px;
  margin: 1rem auto 3rem;
}

.deck-loading, .deck-empty {
  text-align: center;
  padding: 4rem 1rem;
  color: var(--vp-c-text-2);
}

.spinner {
  width: 36px;
  height: 36px;
  margin: 0 auto 1rem;
  border: 3px solid rgba(100, 108, 255, 0.2);
  border-top-color: var(--vp-c-brand-1);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* Toolbar */
.deck-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 0.6rem 0.8rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-border);
}

.mode-switch-group {
  display: flex;
  gap: 0.4rem;
}

.switch-btn {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid transparent;
  background: transparent;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.15s;
}
.switch-btn:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-alt);
}
.switch-btn.active {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.deck-filter-group {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.filter-label {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}
.filter-select {
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.85rem;
  outline: none;
}
.open-notes-hub-link {
  font-size: 0.82rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  background: rgba(100, 108, 255, 0.08);
}
.open-notes-hub-link:hover { text-decoration: underline; }

/* ================= STANDARDIZED CARD CONTAINER ================= */
.card-deck-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  /* Fixed proportional geometry to prevent size jitter */
  min-height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.2s, border-color 0.2s;
}

.card-deck-card:hover {
  border-color: var(--vp-c-brand-1);
}

.card-deck-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 1.4rem;
  background: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-border);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.index-pill {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.index-pill b {
  color: var(--vp-c-brand-1);
  font-size: 1.15rem;
}

.source-tag {
  background: rgba(100, 108, 255, 0.1);
  color: var(--vp-c-brand-1);
  padding: 2px 10px;
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 600;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
}
.tag.hard { background: rgba(239, 68, 68, 0.12); color: #ef4444; }
.tag.medium { background: rgba(245, 158, 11, 0.12); color: #f59e0b; }
.tag.easy { background: rgba(16, 185, 129, 0.12); color: #10b981; }

.note-toggle-btn {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 3px 10px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
}
.note-toggle-btn:hover, .note-toggle-btn.active {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.note-toggle-btn.has-note {
  background: rgba(100, 108, 255, 0.1);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.shortcut-tip {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}

.deck-progress-track {
  height: 3px;
  background: var(--vp-c-bg-alt);
}
.deck-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  transition: width 0.25s ease;
}

/* Card Body Split / Stack Layout */
.card-deck-body-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-deck-body {
  padding: 2rem 1.8rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.deck-question-box {
  margin-bottom: 1.2rem;
}

.q-badge, .a-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
}
.q-badge { background: rgba(59, 130, 246, 0.12); color: #3b82f6; }
.a-badge { background: rgba(16, 185, 129, 0.12); color: #10b981; }

.math-content {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--vp-c-text-1);
}

.answer-text {
  color: var(--vp-c-text-2);
}

.deck-answer-box {
  position: relative;
  border-top: 1px dashed var(--vp-c-divider);
  padding-top: 1.2rem;
  margin-top: 0.8rem;
  flex: 1;
  min-height: 140px;
}

.deck-answer-box.is-blurred {
  user-select: none;
}
.deck-answer-box.is-blurred .math-content {
  filter: blur(5px);
  opacity: 0.3;
}

.reveal-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
}

.reveal-btn-center {
  padding: 0.85rem 2.6rem;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 18px rgba(100, 108, 255, 0.35);
  transition: transform 0.15s, opacity 0.15s;
}
.reveal-btn-center:hover {
  transform: translateY(-1px);
  opacity: 0.95;
}

/* Note Drawer Inside Card */
.card-note-drawer {
  background: var(--vp-c-bg-alt);
  border-top: 1px solid var(--vp-c-border);
  padding: 1rem 1.5rem;
  animation: slideDown 0.2s ease-out;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
}
.drawer-title-group {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.drawer-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}
.save-status {
  font-size: 0.72rem;
  color: #10b981;
}
.drawer-actions {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.drawer-link {
  font-size: 0.78rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.drawer-del {
  background: none;
  border: none;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  cursor: pointer;
}
.drawer-del:hover { color: #ef4444; }

.drawer-textarea {
  width: 100%;
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  line-height: 1.5;
  resize: vertical;
  outline: none;
  font-family: inherit;
}
.drawer-textarea:focus {
  border-color: var(--vp-c-brand-1);
}
.drawer-tip {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
  margin-top: 0.4rem;
}

/* Feedback rating */
.deck-feedback-bar {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

.feedback-hint {
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
  margin-bottom: 0.6rem;
}

.feedback-btn-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
}

.fb-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.7rem 0.8rem;
  border-radius: 10px;
  border: 1.5px solid transparent;
  cursor: pointer;
  transition: all 0.15s;
  background: var(--vp-c-bg-alt);
}
.fb-main {
  font-size: 0.92rem;
  font-weight: 700;
  margin-bottom: 2px;
}
.fb-sub {
  font-size: 0.7rem;
  opacity: 0.8;
}

.btn-again { color: #ef4444; }
.btn-again:hover, .btn-again.active { background: #ef4444; color: #fff; }

.btn-good { color: #f59e0b; }
.btn-good:hover, .btn-good.active { background: #f59e0b; color: #fff; }

.btn-easy { color: #10b981; }
.btn-easy:hover, .btn-easy.active { background: #10b981; color: #fff; }

/* Nav bottom bar */
.card-deck-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 1.4rem;
  background: var(--vp-c-bg-alt);
  border-top: 1px solid var(--vp-c-border);
}

.nav-arrow-btn {
  padding: 0.6rem 1.4rem;
  border-radius: 20px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
}
.nav-arrow-btn:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.nav-arrow-btn.primary {
  background: var(--vp-c-brand-1);
  color: #fff;
  border-color: var(--vp-c-brand-1);
}
.nav-arrow-btn.primary:hover:not(:disabled) { opacity: 0.92; color: #fff; }
.nav-arrow-btn:disabled { opacity: 0.4; cursor: not-allowed; }

.nav-jumper {
  flex: 1;
  max-width: 320px;
  margin: 0 1rem;
}
.jumper-select {
  width: 100%;
  padding: 0.45rem 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.85rem;
  outline: none;
}

/* Accordion list */
.accordion-summary {
  font-size: 0.9rem;
  color: var(--vp-c-text-3);
  margin-bottom: 1rem;
}

.accordion-card-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.list-card-item {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.2s;
}
.list-card-item:hover {
  border-color: var(--vp-c-brand-1);
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 1.2rem;
  cursor: pointer;
  user-select: none;
}

.item-meta {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex: 1;
  overflow: hidden;
}

.item-num {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}

.item-source {
  font-size: 0.75rem;
  background: var(--vp-c-bg-alt);
  padding: 2px 8px;
  border-radius: 4px;
  color: var(--vp-c-text-3);
  white-space: nowrap;
}

.item-note-badge {
  font-size: 0.72rem;
  background: rgba(100, 108, 255, 0.12);
  color: var(--vp-c-brand-1);
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 600;
}

.item-q-preview {
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-expand-icon {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-left: 1rem;
  white-space: nowrap;
}

.item-body {
  padding: 1.4rem 1.6rem;
  background: var(--vp-c-bg-alt);
  border-top: 1px solid var(--vp-c-divider);
}

.item-full-question {
  margin-bottom: 1rem;
}

.item-note-section {
  margin-top: 1rem;
  padding-top: 0.8rem;
  border-top: 1px dashed var(--vp-c-divider);
}

.inline-note-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.4rem;
}

.inline-note-input {
  width: 100%;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.88rem;
  outline: none;
  font-family: inherit;
  resize: vertical;
}

.no-filtered-cards {
  text-align: center;
  padding: 4rem 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
}
.reset-filter-btn {
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  background: var(--vp-c-brand-1);
  color: #fff;
  border: none;
  cursor: pointer;
}

.mobile-only {
  display: none;
}
.desktop-only {
  display: inline;
}

@media (max-width: 768px) {
  .mobile-only {
    display: inline;
  }
  .desktop-only {
    display: none !important;
  }
  .gesture-tip {
    font-size: 0.72rem;
    color: var(--vp-c-brand-1);
    font-weight: 500;
  }
  .chapter-deck-container {
    padding: 0;
  }
  .deck-toolbar {
    flex-direction: column;
    gap: 0.6rem;
    margin-bottom: 0.8rem;
  }
  .mode-switch-group {
    width: 100%;
    display: flex;
  }
  .switch-btn {
    flex: 1;
    padding: 0.45rem 0.3rem;
    font-size: 0.78rem;
    text-align: center;
    white-space: nowrap;
  }
  .deck-filter-group {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }
  .filter-select {
    flex: 1;
    font-size: 0.8rem;
    padding: 0.35rem 0.5rem;
  }
  .open-notes-hub-link {
    font-size: 0.78rem;
    padding: 0.35rem 0.6rem;
  }
  .card-deck-card {
    min-height: 480px;
    border-radius: 12px;
    margin: 0;
  }
  .card-deck-header {
    padding: 0.8rem 1rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .header-left {
    gap: 0.4rem;
  }
  .header-right {
    gap: 0.5rem;
  }
  .card-deck-body {
    padding: 1.2rem 1rem;
  }
  .reveal-btn-center {
    width: 90%;
    max-width: 320px;
    min-height: 46px;
    font-size: 0.92rem;
    border-radius: 24px;
  }
  .feedback-btn-row {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.4rem;
  }
  .fb-btn {
    min-height: 46px;
    padding: 0.4rem 0.2rem;
    font-size: 0.82rem;
    border-radius: 10px;
  }
  .card-deck-nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;
    padding: 0.8rem 1rem;
  }
  .nav-jumper {
    grid-column: span 2;
    order: -1;
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
  .jumper-select {
    width: 100%;
    height: 42px;
    font-size: 0.84rem;
  }
  .nav-arrow-btn {
    min-height: 44px;
    font-size: 0.88rem;
    justify-content: center;
    border-radius: 22px;
  }
  .card-deck-card.with-note-expanded .card-deck-body-wrapper {
    flex-direction: column;
  }
  .card-deck-note-drawer {
    width: 100%;
    max-width: 100%;
    border-left: none;
    border-top: 1px solid var(--vp-c-divider);
    padding: 1rem;
  }
}
</style>
