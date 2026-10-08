<template>
  <div class="chapter-deck-container">
    <!-- Loading State -->
    <div v-if="loading" class="deck-state-box">
      <div class="sleek-spinner"></div>
      <p class="state-text">正在装载考点与真题库...</p>
    </div>

    <!-- Empty State -->
    <div v-else-if="chapterCards.length === 0" class="deck-state-box">
      <p class="state-text">本章暂无考点题目。</p>
    </div>

    <!-- Main Workspace -->
    <div v-else class="deck-main">
      <!-- ================= COMPACT UNIFIED CONTROL HEADER ================= -->
      <header class="deck-control-header">
        <!-- Top Row: Mode Switcher & Filter Pills -->
        <div class="control-top-row">
          <!-- Segmented View Mode -->
          <div class="segmented-control">
            <button 
              class="segment-btn" 
              :class="{ active: viewMode === 'card' }" 
              @click="viewMode = 'card'"
            >
              <span class="seg-icon">🎴</span>
              <span>沉浸刷题</span>
            </button>
            <button 
              class="segment-btn" 
              :class="{ active: viewMode === 'list' }" 
              @click="viewMode = 'list'"
            >
              <span class="seg-icon">📑</span>
              <span>考点清单</span>
            </button>
          </div>

          <!-- Quick Status Filter Pills & Notes -->
          <div class="header-tools-group">
            <div class="status-filter-pills">
              <button 
                class="status-pill" 
                :class="{ active: cardFilter === 'all' }"
                @click="cardFilter = 'all'"
              >
                全部 {{ chapterCards.length }}
              </button>
              <button 
                class="status-pill" 
                :class="{ active: cardFilter === 'unlearned' }"
                @click="cardFilter = 'unlearned'"
              >
                未学 {{ filterCounts.unlearned }}
              </button>
              <button 
                class="status-pill lapse" 
                :class="{ active: cardFilter === 'lapse' }"
                @click="cardFilter = 'lapse'"
              >
                攻坚 {{ filterCounts.lapse }}
              </button>
              <button 
                class="status-pill mastered" 
                :class="{ active: cardFilter === 'mastered' }"
                @click="cardFilter = 'mastered'"
              >
                已掌握 {{ filterCounts.mastered }}
              </button>
            </div>

            <a :href="withBase('/notes')" target="_blank" class="notes-hub-badge" title="打开随堂笔记本">
              <span>📝 笔记</span>
              <span class="badge-num" v-if="totalNotesCount > 0">{{ totalNotesCount }}</span>
            </a>
          </div>
        </div>

        <!-- Bottom Row: Minimalist Topic Scroll Chips -->
        <div class="topic-chips-row" v-if="topicsList.length > 0">
          <div class="chips-scroll-track">
            <button 
              class="topic-chip" 
              :class="{ active: selectedTopic === 'all' }" 
              @click="selectedTopic = 'all'"
            >
              <span class="chip-dot"></span>
              <span class="chip-text">全章总览</span>
              <span class="chip-qty">{{ chapterCards.length }}</span>
            </button>

            <button 
              v-for="t in topicsList" 
              :key="t.name" 
              class="topic-chip" 
              :class="{ active: selectedTopic === t.name }" 
              @click="selectedTopic = t.name"
            >
              <span class="chip-dot"></span>
              <span class="chip-text">{{ formatTopicShort(t.name) }}</span>
              <span class="chip-qty">{{ t.total }}</span>
            </button>
          </div>
        </div>
      </header>

      <!-- ================= MODE 1: UNIBODY IMMERSIVE FLASHCARD ================= -->
      <section v-if="viewMode === 'card'" class="flashcard-section">
        <!-- Empty filtered fallback -->
        <div v-if="filteredCards.length === 0" class="no-cards-box">
          <p>当前筛选条件下暂无卡片</p>
          <button class="reset-link-btn" @click="resetFilters">重置筛选查看全部题目</button>
        </div>

        <!-- The Sleek Unibody Stage Card -->
        <div 
          v-else 
          class="unibody-card" 
          :class="{ 'note-open': showNoteDrawer }"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
        >
          <!-- Card Micro Meta Bar -->
          <div class="card-meta-bar">
            <div class="meta-left">
              <span class="meta-index">
                <b class="idx-cur">{{ String(currentIndex + 1).padStart(2, '0') }}</b>
                <span class="idx-sep">/</span>
                <span class="idx-tot">{{ filteredCards.length }}</span>
              </span>

              <span 
                class="ghost-badge topic-badge" 
                v-if="currentCard.topic" 
                @click="selectedTopic = currentCard.topic" 
                :title="'锁定考点：' + currentCard.topic"
              >
                📌 {{ formatTopicShort(currentCard.topic) }}
              </span>

              <span class="ghost-badge source-badge" v-if="currentCard.sourceTag">
                {{ currentCard.sourceTag }}
              </span>
            </div>

            <div class="meta-right">
              <!-- Memory Status Pill -->
              <span v-if="currentCardState && currentCardState.lastRating === 'hard'" class="ghost-pill hard">
                🔴 攻坚题 ({{ currentCardState.lapses || 1 }})
              </span>
              <span v-else-if="currentCardState && currentCardState.lastRating === 'medium'" class="ghost-pill medium">
                🟡 待巩固
              </span>
              <span v-else-if="currentCardState && currentCardState.lastRating === 'easy'" class="ghost-pill easy">
                🟢 已熟练
              </span>

              <!-- Note Toggle -->
              <button 
                class="note-pill-btn" 
                :class="{ 'has-content': cardNote, 'active': showNoteDrawer }" 
                @click="toggleNoteDrawer"
              >
                <span>{{ cardNote ? '已记笔记 📝' : '+ 记笔记' }}</span>
              </button>

              <span class="meta-hint-shortcut desktop-only">Space 翻牌 · 1/2/3 打分 · ←/→ 切题</span>
            </div>
          </div>

          <!-- Micro Progress Line -->
          <div class="card-progress-strip">
            <div class="progress-glow-bar" :style="{ width: ((currentIndex + 1) / filteredCards.length * 100) + '%' }"></div>
          </div>

          <!-- Main Question & Answer Body -->
          <div class="card-body-layout">
            <div class="card-content-area">
              <!-- Question Stage -->
              <div class="question-stage">
                <div class="q-typography" v-html="renderMath(currentCard.question)"></div>
              </div>

              <!-- Divider Line -->
              <div class="stage-divider"></div>

              <!-- Answer Stage -->
              <div class="answer-stage" :class="{ revealed: isRevealed, unrevealed: !isRevealed }">
                <!-- Revealed content -->
                <div v-if="isRevealed" class="revealed-wrap">
                  <div class="answer-header-tag">
                    <span class="tag-spark">💡</span>
                    <span>采分要点与标准解析</span>
                  </div>
                  <div class="a-typography" v-html="renderMath(currentCard.answer)"></div>
                </div>

                <!-- Unrevealed Glass Curtain Overlay -->
                <div v-else class="glass-curtain" @click="revealAnswer">
                  <button class="curtain-reveal-btn">
                    <span class="btn-spark">💡</span>
                    <span class="btn-text">点击展开答案与采分要点</span>
                    <kbd class="keycap">Space</kbd>
                  </button>
                </div>
              </div>
            </div>

            <!-- Integrated Smooth Note Drawer -->
            <aside class="note-drawer-panel" v-if="showNoteDrawer">
              <div class="drawer-header">
                <span class="drawer-title">📝 随堂笔记</span>
                <span class="auto-save-hint">实时自动保存</span>
              </div>
              <textarea 
                class="drawer-textarea"
                v-model="localNoteText"
                @input="onNoteInput"
                placeholder="记录这道题的考点口诀、易错点、推导要领..."
                rows="6"
              ></textarea>
              <div class="drawer-footer">
                <button v-if="cardNote" class="drawer-clear-btn" @click="handleDeleteNote">清空笔记</button>
                <a :href="withBase('/notes')" target="_blank" class="drawer-all-link">笔记本库 ↗</a>
              </div>
            </aside>
          </div>

          <!-- Bottom Floating Action Dock -->
          <footer class="card-action-dock">
            <!-- Prev Card -->
            <button 
              class="dock-nav-btn prev" 
              @click="prevCard" 
              :disabled="currentIndex <= 0" 
              title="上一题 (←)"
            >
              <svg class="dock-arrow-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
              <span class="dock-btn-label">上一题</span>
            </button>

            <!-- Middle Main Action (Morphs between Reveal button and 3 SM-2 Rating buttons) -->
            <div class="dock-center-action">
              <!-- If Unrevealed -->
              <button v-if="!isRevealed" class="dock-reveal-trigger" @click="revealAnswer">
                <span>查看解析 (Space)</span>
              </button>

              <!-- If Revealed: 3 Tactile Rating Buttons -->
              <div v-else class="dock-rating-grid">
                <button 
                  class="rate-btn hard" 
                  :class="{ active: currentCardState && currentCardState.lastRating === 'hard' }"
                  @click="handleRate('hard')"
                >
                  <span class="rate-num">1</span>
                  <span class="rate-name">完全不会</span>
                  <span class="rate-sub">今日重刷</span>
                </button>

                <button 
                  class="rate-btn medium" 
                  :class="{ active: currentCardState && currentCardState.lastRating === 'medium' }"
                  @click="handleRate('medium')"
                >
                  <span class="rate-num">2</span>
                  <span class="rate-name">模糊犹豫</span>
                  <span class="rate-sub">明日巩固</span>
                </button>

                <button 
                  class="rate-btn easy" 
                  :class="{ active: currentCardState && currentCardState.lastRating === 'easy' }"
                  @click="handleRate('easy')"
                >
                  <span class="rate-num">3</span>
                  <span class="rate-name">牢固掌握</span>
                  <span class="rate-sub">进入长周期</span>
                </button>
              </div>
            </div>

            <!-- Next Card -->
            <button 
              class="dock-nav-btn next" 
              @click="nextCard" 
              :disabled="currentIndex >= filteredCards.length - 1" 
              title="下一题 (→)"
            >
              <span class="dock-btn-label">下一题</span>
              <svg class="dock-arrow-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
          </footer>
        </div>
      </section>

      <!-- ================= MODE 2: TOPIC ACCORDION LIST ================= -->
      <section v-else class="topic-list-section">
        <div class="list-summary-bar">
          <span class="summary-total">共 {{ filteredCards.length }} 道真题</span>
          <span class="summary-sep">·</span>
          <span class="summary-group-info">归纳为 <b>{{ groupedCardsByTopic.length }} 个核心考点专区</b></span>
        </div>

        <div class="topic-cards-stack">
          <div 
            v-for="(grp, gIdx) in groupedCardsByTopic" 
            :key="grp.topic" 
            class="topic-group-card"
          >
            <!-- Topic Group Header Banner -->
            <div class="group-banner" @click="toggleTopicCollapse(grp.topic)">
              <div class="banner-left-info">
                <span class="topic-index-badge">考点 {{ gIdx + 1 }}</span>
                <h3 class="topic-title-text">{{ formatTopicShort(grp.topic) }}</h3>
                <span class="topic-card-count">{{ grp.cards.length }} 题</span>
              </div>

              <div class="banner-right-actions">
                <button class="topic-drill-link" @click.stop="drillTopic(grp.topic)">
                  ⚡ 专项刷题
                </button>
                <span class="collapse-caret">
                  {{ isTopicCollapsed(grp.topic) ? '展开 ▼' : '收起 ▲' }}
                </span>
              </div>
            </div>

            <!-- Cards inside this topic -->
            <div class="topic-items-list" v-if="!isTopicCollapsed(grp.topic)">
              <div 
                v-for="(card, idx) in grp.cards" 
                :key="card.id" 
                class="list-q-row"
                :class="{ expanded: expandedCards.includes(card.id) }"
              >
                <!-- Row Header -->
                <div class="row-header" @click="toggleExpand(card.id)">
                  <div class="row-meta">
                    <span class="row-num">#{{ idx + 1 }}</span>
                    <span class="row-source" v-if="card.sourceTag">{{ card.sourceTag }}</span>
                    <span class="row-has-note" v-if="getNote(card.id)">📝</span>
                    <span class="row-preview" v-html="renderMath(truncateText(card.question, 65))"></span>
                  </div>
                  <div class="row-expand-arrow">
                    {{ expandedCards.includes(card.id) ? '▲' : '▼' }}
                  </div>
                </div>

                <!-- Expanded Full Question & Answer -->
                <div class="row-expanded-body" v-if="expandedCards.includes(card.id)">
                  <div class="full-q-box">
                    <div class="sub-label">❓ 原题干</div>
                    <div class="q-content" v-html="renderMath(card.question)"></div>
                  </div>

                  <div class="full-a-box">
                    <div class="sub-label">💡 采分点解析</div>
                    <div class="a-content" v-html="renderMath(card.answer)"></div>
                  </div>

                  <!-- Inline Note Pad -->
                  <div class="inline-note-box">
                    <div class="inline-note-head">📝 我的笔记：</div>
                    <textarea 
                      class="inline-note-input"
                      :value="getNote(card.id) ? getNote(card.id).text : ''"
                      @input="(e) => handleInlineNote(card, e.target.value)"
                      placeholder="写下心得口诀..."
                      rows="2"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
const selectedTopic = ref('all')
const collapsedTopics = ref([])
const currentIndex = ref(0)
const isRevealed = ref(false)
const expandedCards = ref([])

// Note drawer state
const showNoteDrawer = ref(false)
const localNoteText = ref('')

// Touch swipe gestures
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
    if (Math.abs(deltaX) > 45 && Math.abs(deltaY) < 55) {
      if (deltaX < 0) nextCard()
      else prevCard()
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

// Cards for this chapter
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

// Clean topic list for this chapter
const topicsList = computed(() => {
  const map = {}
  chapterCards.value.forEach(c => {
    const t = c.topic || '通用考点'
    if (!map[t]) {
      map[t] = { name: t, total: 0 }
    }
    map[t].total++
  })
  return Object.values(map)
})

// Filtered cards in view
const filteredCards = computed(() => {
  let cards = chapterCards.value
  if (selectedTopic.value !== 'all') {
    cards = cards.filter(c => c.topic === selectedTopic.value)
  }
  if (cardFilter.value === 'unlearned') {
    return cards.filter(c => {
      const s = ankiState.value[c.id]
      return !s || !s.lastReviewed
    })
  }
  if (cardFilter.value === 'lapse') {
    return cards.filter(c => {
      const s = ankiState.value[c.id]
      return s && (s.lastRating === 'hard' || (s.lapses && s.lapses > 0))
    })
  }
  if (cardFilter.value === 'mastered') {
    return cards.filter(c => {
      const s = ankiState.value[c.id]
      return s && s.lastReviewed && s.lastRating !== 'hard'
    })
  }
  return cards
})

// Grouped cards by topic for Mode 2 Accordion
const groupedCardsByTopic = computed(() => {
  const groups = []
  const topicsToProcess = selectedTopic.value === 'all'
    ? topicsList.value
    : topicsList.value.filter(t => t.name === selectedTopic.value)

  topicsToProcess.forEach(t => {
    let tCards = chapterCards.value.filter(c => c.topic === t.name)
    if (cardFilter.value === 'unlearned') {
      tCards = tCards.filter(c => !ankiState.value[c.id] || !ankiState.value[c.id].lastReviewed)
    } else if (cardFilter.value === 'lapse') {
      tCards = tCards.filter(c => {
        const s = ankiState.value[c.id]
        return s && (s.lastRating === 'hard' || (s.lapses && s.lapses > 0))
      })
    } else if (cardFilter.value === 'mastered') {
      tCards = tCards.filter(c => {
        const s = ankiState.value[c.id]
        return s && s.lastReviewed && s.lastRating !== 'hard'
      })
    }
    if (tCards.length > 0) {
      groups.push({
        topic: t.name,
        cards: tCards
      })
    }
  })
  return groups
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
  if (confirm('确定清空本题笔记？')) {
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
  }, 220)
}

const toggleExpand = (id) => {
  const idx = expandedCards.value.indexOf(id)
  if (idx > -1) expandedCards.value.splice(idx, 1)
  else expandedCards.value.push(id)
}

const toggleTopicCollapse = (topic) => {
  const idx = collapsedTopics.value.indexOf(topic)
  if (idx > -1) collapsedTopics.value.splice(idx, 1)
  else collapsedTopics.value.push(topic)
}

const isTopicCollapsed = (topic) => {
  return collapsedTopics.value.includes(topic)
}

const formatTopicShort = (topic) => {
  if (!topic) return ''
  const parts = topic.split('：')
  return parts.length > 1 ? parts[1] : topic
}

const drillTopic = (topic) => {
  selectedTopic.value = topic
  viewMode.value = 'card'
  currentIndex.value = 0
  isRevealed.value = false
}

const resetFilters = () => {
  cardFilter.value = 'all'
  selectedTopic.value = 'all'
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

// Keyboard shortcuts
const handleKey = (e) => {
  if (viewMode.value !== 'card' || !currentCard.value) return
  if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return

  if (!isRevealed.value && (e.code === 'Space' || e.code === 'Enter')) {
    e.preventDefault()
    revealAnswer()
  } else if (isRevealed.value) {
    if (e.key === '1') handleRate('hard')
    if (e.key === '2') handleRate('medium')
    if (e.key === '3') handleRate('easy')
  }

  if (e.key === 'ArrowLeft') prevCard()
  else if (e.key === 'ArrowRight') nextCard()
}

watch(cardFilter, () => {
  currentIndex.value = 0
  isRevealed.value = false
})

watch(selectedTopic, () => {
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
/* ================= ROOT LAYOUT ================= */
.chapter-deck-container {
  max-width: 880px;
  margin: 0.5rem auto 3rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.deck-state-box {
  text-align: center;
  padding: 4rem 1rem;
  color: var(--vp-c-text-2);
}

.sleek-spinner {
  width: 32px;
  height: 32px;
  margin: 0 auto 1rem;
  border: 2px solid rgba(99, 102, 241, 0.15);
  border-top-color: var(--vp-c-brand-1);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ================= 1. COMPACT UNIFIED CONTROL HEADER ================= */
.deck-control-header {
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.control-top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
}

/* Segmented Control */
.segmented-control {
  display: inline-flex;
  background: rgba(120, 120, 128, 0.08);
  border: 1px solid rgba(120, 120, 128, 0.14);
  padding: 3px;
  border-radius: 10px;
}

.segment-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.38rem 0.85rem;
  border-radius: 8px;
  border: none;
  background: transparent;
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
}

.segment-btn:hover {
  color: var(--vp-c-text-1);
}

.segment-btn.active {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.seg-icon {
  font-size: 0.95rem;
}

/* Status Filter Pills */
.header-tools-group {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.status-filter-pills {
  display: flex;
  gap: 0.3rem;
  background: rgba(120, 120, 128, 0.06);
  padding: 3px;
  border-radius: 20px;
}

.status-pill {
  padding: 0.25rem 0.6rem;
  border-radius: 14px;
  border: none;
  background: transparent;
  font-size: 0.76rem;
  font-weight: 500;
  color: var(--vp-c-text-3);
  cursor: pointer;
  transition: all 0.15s;
}

.status-pill:hover {
  color: var(--vp-c-text-1);
}

.status-pill.active {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  font-weight: 600;
}

.status-pill.lapse.active {
  color: #f43f5e;
}

.status-pill.mastered.active {
  color: #10b981;
}

.notes-hub-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  padding: 0.3rem 0.65rem;
  border-radius: 14px;
  background: rgba(99, 102, 241, 0.08);
  text-decoration: none;
  transition: all 0.15s;
}

.notes-hub-badge:hover {
  background: rgba(99, 102, 241, 0.16);
}

.badge-num {
  font-size: 0.7rem;
  background: var(--vp-c-brand-1);
  color: #fff;
  padding: 1px 5px;
  border-radius: 10px;
}

/* Topic Chips Row */
.topic-chips-row {
  width: 100%;
}

.chips-scroll-track {
  display: flex;
  gap: 0.4rem;
  overflow-x: auto;
  padding: 0.1rem 0 0.4rem;
  scrollbar-width: none;
}
.chips-scroll-track::-webkit-scrollbar {
  display: none;
}

.topic-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.32rem 0.75rem;
  border-radius: 16px;
  border: 1px solid rgba(120, 120, 128, 0.15);
  background: rgba(120, 120, 128, 0.04);
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
}

.topic-chip:hover {
  background: rgba(120, 120, 128, 0.1);
  color: var(--vp-c-text-1);
}

.topic-chip.active {
  background: rgba(99, 102, 241, 0.12);
  border-color: rgba(99, 102, 241, 0.4);
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.chip-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--vp-c-text-3);
  transition: background 0.15s;
}

.topic-chip.active .chip-dot {
  background: var(--vp-c-brand-1);
}

.chip-qty {
  font-size: 0.72rem;
  opacity: 0.7;
}

/* ================= 2. UNIBODY IMMERSIVE FLASHCARD ================= */
.flashcard-section {
  position: relative;
}

.no-cards-box {
  text-align: center;
  padding: 3rem 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
}

.reset-link-btn {
  margin-top: 0.8rem;
  padding: 0.4rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-brand-1);
  background: transparent;
  color: var(--vp-c-brand-1);
  font-weight: 600;
  cursor: pointer;
}

/* Unibody Stage Card */
.unibody-card {
  background: var(--vp-c-bg);
  border: 1px solid rgba(120, 120, 128, 0.16);
  border-radius: 20px;
  box-shadow: 0 8px 32px -8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: box-shadow 0.25s ease, border-color 0.25s ease;
}

.dark .unibody-card {
  background: #151a24;
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 12px 40px -10px rgba(0, 0, 0, 0.5);
}

/* Micro Meta Header */
.card-meta-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 1.4rem 0.6rem;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.meta-left, .meta-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.meta-index {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
  margin-right: 0.3rem;
}

.idx-cur {
  color: var(--vp-c-text-1);
  font-size: 0.95rem;
}

.ghost-badge {
  font-size: 0.76rem;
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
  font-weight: 500;
}

.topic-badge {
  background: rgba(99, 102, 241, 0.08);
  color: var(--vp-c-brand-1);
  cursor: pointer;
  transition: all 0.15s;
}
.topic-badge:hover {
  background: rgba(99, 102, 241, 0.18);
  text-decoration: underline;
}

.source-badge {
  background: rgba(120, 120, 128, 0.08);
  color: var(--vp-c-text-2);
}

.ghost-pill {
  font-size: 0.74rem;
  padding: 0.18rem 0.55rem;
  border-radius: 12px;
  font-weight: 600;
}

.ghost-pill.hard {
  background: rgba(244, 63, 94, 0.12);
  color: #f43f5e;
}
.ghost-pill.medium {
  background: rgba(245, 158, 11, 0.12);
  color: #f59e0b;
}
.ghost-pill.easy {
  background: rgba(16, 185, 129, 0.12);
  color: #10b981;
}

.note-pill-btn {
  font-size: 0.76rem;
  font-weight: 500;
  color: var(--vp-c-text-3);
  background: transparent;
  border: 1px solid rgba(120, 120, 128, 0.18);
  padding: 0.18rem 0.55rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.15s;
}

.note-pill-btn:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.note-pill-btn.has-content {
  color: var(--vp-c-brand-1);
  background: rgba(99, 102, 241, 0.08);
  border-color: transparent;
}

.meta-hint-shortcut {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
  opacity: 0.6;
}

/* Progress Strip */
.card-progress-strip {
  width: 100%;
  height: 2px;
  background: rgba(120, 120, 128, 0.08);
  position: relative;
}

.progress-glow-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--vp-c-brand-1), #818cf8);
  transition: width 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Body Split with Drawer */
.card-body-layout {
  display: flex;
  min-height: 380px;
  position: relative;
}

.card-content-area {
  flex: 1;
  padding: 1.6rem 2rem;
  display: flex;
  flex-direction: column;
}

/* Question Stage */
.question-stage {
  padding-bottom: 0.6rem;
}

.q-typography {
  font-size: 1.15rem;
  line-height: 1.75;
  font-weight: 600;
  color: var(--vp-c-text-1);
  letter-spacing: -0.01em;
}

.stage-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(120, 120, 128, 0.15), transparent);
  margin: 1.2rem 0;
}

/* Answer Stage */
.answer-stage {
  flex: 1;
  position: relative;
  min-height: 160px;
}

.answer-header-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.8rem;
  letter-spacing: 0.02em;
}

.a-typography {
  font-size: 1rem;
  line-height: 1.85;
  color: var(--vp-c-text-2);
}

.a-typography :deep(strong) {
  color: var(--vp-c-text-1);
  font-weight: 700;
}

/* Glass Curtain (Unrevealed State) */
.glass-curtain {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(120, 120, 128, 0.03);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  cursor: pointer;
  transition: backdrop-filter 0.2s;
}

.curtain-reveal-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.6rem;
  border-radius: 24px;
  border: 1px solid rgba(99, 102, 241, 0.35);
  background: var(--vp-c-bg);
  color: var(--vp-c-brand-1);
  font-size: 0.95rem;
  font-weight: 600;
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.15);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.curtain-reveal-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.25);
  border-color: var(--vp-c-brand-1);
}

.keycap {
  font-family: inherit;
  font-size: 0.72rem;
  padding: 2px 7px;
  border-radius: 6px;
  background: rgba(120, 120, 128, 0.15);
  color: var(--vp-c-text-2);
  border: 1px solid rgba(120, 120, 128, 0.2);
}

/* Note Drawer Panel */
.note-drawer-panel {
  width: 290px;
  border-left: 1px solid rgba(120, 120, 128, 0.14);
  background: rgba(120, 120, 128, 0.03);
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.drawer-title {
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.auto-save-hint {
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
}

.drawer-textarea {
  flex: 1;
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(120, 120, 128, 0.18);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  padding: 0.65rem;
  font-size: 0.84rem;
  line-height: 1.6;
  resize: none;
  outline: none;
}
.drawer-textarea:focus {
  border-color: var(--vp-c-brand-1);
}

.drawer-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.drawer-clear-btn {
  font-size: 0.75rem;
  color: #f43f5e;
  background: transparent;
  border: none;
  cursor: pointer;
}

.drawer-all-link {
  font-size: 0.75rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

/* Bottom Action Dock */
.card-action-dock {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 1.6rem;
  background: rgba(120, 120, 128, 0.03);
  border-top: 1px solid rgba(120, 120, 128, 0.1);
  gap: 1rem;
}

.dock-nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.48rem 0.9rem;
  border-radius: 12px;
  border: 1px solid rgba(120, 120, 128, 0.16);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.84rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
}

.dock-nav-btn:hover:not(:disabled) {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
}

.dock-nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.dock-arrow-icon {
  width: 16px;
  height: 16px;
}

/* Center Action Area */
.dock-center-action {
  flex: 1;
  max-width: 440px;
  display: flex;
  justify-content: center;
}

.dock-reveal-trigger {
  width: 100%;
  max-width: 280px;
  padding: 0.6rem 1rem;
  border-radius: 20px;
  border: 1px solid rgba(99, 102, 241, 0.3);
  background: rgba(99, 102, 241, 0.06);
  color: var(--vp-c-brand-1);
  font-weight: 600;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.18s;
}

.dock-reveal-trigger:hover {
  background: rgba(99, 102, 241, 0.14);
}

/* 3 Tactile Rating Buttons */
.dock-rating-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  width: 100%;
}

.rate-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.45rem 0.5rem;
  border-radius: 10px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  background: rgba(120, 120, 128, 0.05);
}

.rate-btn .rate-num {
  font-size: 0.68rem;
  opacity: 0.55;
  font-family: ui-monospace, SFMono-Regular, monospace;
}

.rate-btn .rate-name {
  font-size: 0.85rem;
  font-weight: 600;
  margin: 1px 0;
}

.rate-btn .rate-sub {
  font-size: 0.68rem;
  opacity: 0.7;
}

/* Rating Hover & Active Themes */
.rate-btn.hard {
  color: #f43f5e;
}
.rate-btn.hard:hover, .rate-btn.hard.active {
  background: rgba(244, 63, 94, 0.12);
  border-color: rgba(244, 63, 94, 0.35);
}

.rate-btn.medium {
  color: #f59e0b;
}
.rate-btn.medium:hover, .rate-btn.medium.active {
  background: rgba(245, 158, 11, 0.12);
  border-color: rgba(245, 158, 11, 0.35);
}

.rate-btn.easy {
  color: #10b981;
}
.rate-btn.easy:hover, .rate-btn.easy.active {
  background: rgba(16, 185, 129, 0.12);
  border-color: rgba(16, 185, 129, 0.35);
}

/* ================= 3. MODE 2: TOPIC ACCORDION LIST ================= */
.topic-list-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.list-summary-bar {
  font-size: 0.84rem;
  color: var(--vp-c-text-3);
  padding: 0 0.2rem;
}

.list-summary-bar b {
  color: var(--vp-c-text-1);
}

.summary-sep {
  margin: 0 0.4rem;
}

.topic-cards-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.topic-group-card {
  background: var(--vp-c-bg);
  border: 1px solid rgba(120, 120, 128, 0.16);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px -4px rgba(0, 0, 0, 0.05);
}

.dark .topic-group-card {
  background: #151a24;
  border-color: rgba(255, 255, 255, 0.07);
}

.group-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.95rem 1.4rem;
  background: rgba(120, 120, 128, 0.03);
  cursor: pointer;
  user-select: none;
  border-bottom: 1px solid rgba(120, 120, 128, 0.08);
  transition: background 0.15s;
}

.group-banner:hover {
  background: rgba(120, 120, 128, 0.06);
}

.banner-left-info {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.topic-index-badge {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 6px;
  background: var(--vp-c-brand-1);
  color: #fff;
}

.topic-title-text {
  margin: 0;
  font-size: 0.98rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.topic-card-count {
  font-size: 0.76rem;
  color: var(--vp-c-brand-1);
  background: rgba(99, 102, 241, 0.1);
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: 600;
}

.banner-right-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.topic-drill-link {
  font-size: 0.76rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 14px;
  border: 1px solid var(--vp-c-brand-1);
  background: transparent;
  color: var(--vp-c-brand-1);
  cursor: pointer;
  transition: all 0.15s;
}

.topic-drill-link:hover {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.collapse-caret {
  font-size: 0.76rem;
  color: var(--vp-c-text-3);
}

/* Rows Inside Topic Accordion */
.topic-items-list {
  display: flex;
  flex-direction: column;
}

.list-q-row {
  border-bottom: 1px solid rgba(120, 120, 128, 0.08);
}

.list-q-row:last-child {
  border-bottom: none;
}

.row-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 1.4rem;
  cursor: pointer;
  transition: background 0.15s;
}

.row-header:hover {
  background: rgba(120, 120, 128, 0.03);
}

.row-meta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex: 1;
  overflow: hidden;
}

.row-num {
  font-family: ui-monospace, monospace;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}

.row-source {
  font-size: 0.74rem;
  padding: 1px 6px;
  border-radius: 4px;
  background: rgba(120, 120, 128, 0.08);
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

.row-preview {
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.row-expand-arrow {
  font-size: 0.76rem;
  color: var(--vp-c-text-3);
  margin-left: 0.6rem;
}

/* Row Expanded Body */
.row-expanded-body {
  padding: 1rem 1.4rem 1.4rem;
  background: rgba(120, 120, 128, 0.02);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  border-top: 1px dashed rgba(120, 120, 128, 0.1);
}

.sub-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.3rem;
}

.q-content {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--vp-c-text-1);
}

.a-content {
  font-size: 0.92rem;
  line-height: 1.8;
  color: var(--vp-c-text-2);
}

.inline-note-box {
  margin-top: 0.4rem;
  padding-top: 0.6rem;
  border-top: 1px solid rgba(120, 120, 128, 0.1);
}

.inline-note-head {
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--vp-c-text-3);
  margin-bottom: 0.3rem;
}

.inline-note-input {
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(120, 120, 128, 0.16);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  padding: 0.5rem;
  font-size: 0.82rem;
  outline: none;
}
.inline-note-input:focus {
  border-color: var(--vp-c-brand-1);
}

/* ================= 4. MOBILE ADAPTATION ================= */
@media (max-width: 768px) {
  .chapter-deck-container {
    margin: 0.2rem auto 2rem;
  }

  .control-top-row {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }

  .segmented-control {
    width: 100%;
  }
  .segment-btn {
    flex: 1;
    justify-content: center;
  }

  .header-tools-group {
    justify-content: space-between;
  }

  .status-filter-pills {
    flex: 1;
    justify-content: space-between;
  }

  .unibody-card {
    border-radius: 16px;
  }

  .card-meta-bar {
    padding: 0.8rem 1rem 0.5rem;
  }

  .card-content-area {
    padding: 1.2rem 1rem;
  }

  .q-typography {
    font-size: 1.05rem;
    line-height: 1.65;
  }

  .a-typography {
    font-size: 0.94rem;
    line-height: 1.75;
  }

  .card-body-layout {
    flex-direction: column;
    min-height: 320px;
  }

  .note-drawer-panel {
    width: 100%;
    border-left: none;
    border-top: 1px solid rgba(120, 120, 128, 0.14);
    padding: 1rem;
  }

  .card-action-dock {
    padding: 0.75rem 0.8rem;
    gap: 0.4rem;
  }

  .dock-btn-label {
    display: none;
  }

  .dock-nav-btn {
    padding: 0.5rem;
  }

  .dock-rating-grid {
    gap: 0.3rem;
  }

  .rate-btn {
    padding: 0.35rem 0.2rem;
  }

  .rate-btn .rate-name {
    font-size: 0.78rem;
  }

  .rate-btn .rate-sub {
    display: none;
  }

  .row-header {
    padding: 0.75rem 1rem;
  }
  .row-expanded-body {
    padding: 0.8rem 1rem 1rem;
  }
}
</style>
