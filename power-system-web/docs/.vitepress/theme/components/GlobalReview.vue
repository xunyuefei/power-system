<template>
  <div class="anki-review">
    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>正在同步题库与记忆曲线数据...</p>
    </div>

    <!-- Dashboard: Study Modes & Progress -->
    <div v-else-if="!isReviewStarted" class="anki-dashboard">
      <!-- Welcome Header -->
      <div class="dashboard-header">
        <div class="title-group">
          <h2>⚡ 电力系统考研简答题 · Anki 记忆中心</h2>
          <p class="subtitle">严格遵循 SM-2 艾宾浩斯抗遗忘算法，杜绝“题海战术”，每天科学定量记忆！</p>
        </div>
        <div class="header-right-btns">
          <a :href="withBase('/notes')" target="_blank" class="hub-btn">📝 考研笔记本 ({{ totalNotesCount }})</a>
          <button class="reset-all-btn" @click="confirmResetAll">重置全部进度</button>
        </div>
      </div>

      <!-- Stats Grid (4 Queues) -->
      <div class="stats-grid">
        <div class="stat-card due-card" :class="{ 'has-items': queueData.dueCards.length > 0 }">
          <div class="stat-icon">⏰</div>
          <div class="stat-meta">
            <div class="stat-count">{{ queueData.dueCards.length }}</div>
            <div class="stat-label">今日到期需复习</div>
            <div class="stat-sub">周期已到，急需巩固</div>
          </div>
        </div>

        <div class="stat-card lapse-card" :class="{ 'has-items': queueData.lapseCards.length > 0 }">
          <div class="stat-icon">🔥</div>
          <div class="stat-meta">
            <div class="stat-count">{{ queueData.lapseCards.length }}</div>
            <div class="stat-label">重点攻坚错题</div>
            <div class="stat-sub">曾选“完全不会/模糊”</div>
          </div>
        </div>

        <div class="stat-card new-card">
          <div class="stat-icon">🌱</div>
          <div class="stat-meta">
            <div class="stat-count">{{ queueData.newCards.length }}</div>
            <div class="stat-label">题库剩余新题</div>
            <div class="stat-sub">总量 {{ allCards.length }} 题</div>
          </div>
        </div>

        <div class="stat-card mastered-card">
          <div class="stat-icon">🏆</div>
          <div class="stat-meta">
            <div class="stat-count">{{ queueData.masteredCards.length }}</div>
            <div class="stat-label">已掌握记忆池</div>
            <div class="stat-sub">已进入长期复习周期</div>
          </div>
        </div>
      </div>

      <!-- Overall Learning Progress Bar -->
      <div class="progress-bar-container">
        <div class="progress-info">
          <span>总复习覆盖率: <b>{{ learnedCount }} / {{ allCards.length }} 题 ({{ learnedPercentage }}%)</b></span>
          <span class="mastery-info">已熟练掌握: {{ queueData.masteredCards.length }} 题</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill mastered" :style="{ width: masteredPercentage + '%' }" title="已掌握"></div>
          <div class="progress-fill learning" :style="{ width: lapsePercentage + '%' }" title="攻坚错题/模糊"></div>
        </div>
      </div>

      <!-- Mode Selector Tabs -->
      <div class="mode-tabs">
        <button 
          class="tab-btn" 
          :class="{ active: currentTab === 'daily' }" 
          @click="currentTab = 'daily'"
        >
          🌟 1. 今日日常推荐复习 (科学减负)
        </button>
        <button 
          class="tab-btn" 
          :class="{ active: currentTab === 'lapse' }" 
          @click="currentTab = 'lapse'"
        >
          💥 2. 错题专项消灭战 ({{ queueData.lapseCards.length }} 题待攻坚)
        </button>
        <button 
          class="tab-btn" 
          :class="{ active: currentTab === 'custom' }" 
          @click="currentTab = 'custom'"
        >
          🎯 3. 自定义章节突击 (考前抱佛脚)
        </button>
      </div>

      <!-- Mode 1: Daily Recommended -->
      <div v-if="currentTab === 'daily'" class="tab-content">
        <div class="mode-card">
          <h3>🌟 今日抗遗忘日常任务</h3>
          <p class="mode-desc">
            Anki 标准模式：先复习今天到期的 <b>{{ queueData.dueCards.length }}</b> 道旧题，再学习定量的今日新题，拒绝一次性刷几百题产生厌学情绪！
          </p>

          <div class="daily-slider-group">
            <label class="slider-label">
              今日计划新学题目上限：<b class="highlight-num">{{ dailyNewLimit }} 题</b>
            </label>
            <div class="range-wrapper">
              <input type="range" v-model.number="dailyNewLimit" min="5" max="50" step="5" class="slider" />
              <div class="range-labels">
                <span>5题 (轻量)</span>
                <span>15题 (标准)</span>
                <span>30题 (充实)</span>
                <span>50题 (强力)</span>
              </div>
            </div>
          </div>

          <div class="session-summary">
            本轮复习预计总量：<b>{{ dailySessionCount }}</b> 题 
            （到期旧题 {{ queueData.dueCards.length }} + 新题 {{ Math.min(dailyNewLimit, queueData.newCards.length) }}）
          </div>

          <button class="primary-launch-btn" @click="startDailyReview" :disabled="dailySessionCount === 0">
            {{ dailySessionCount > 0 ? `🚀 启动今日日常复习 (${dailySessionCount} 题)` : '🎉 今日日常任务已完成！' }}
          </button>
        </div>
      </div>

      <!-- Mode 2: Lapse Killer -->
      <div v-if="currentTab === 'lapse'" class="tab-content">
        <div class="mode-card lapse-killer">
          <h3>💥 错题专项消灭战</h3>
          <p class="mode-desc">
            直接提取你在各章节中点击过 <b>“完全不会 (重刷)”</b> 或 <b>“模糊标记”</b> 的全部错题！进行集中重点打击，不消灭错题不罢休！
          </p>

          <div v-if="queueData.lapseCards.length === 0" class="empty-hint">
            太棒了！你目前没有任何攻坚错题。去章节阅读中遇到不熟悉的题点击“完全不会”即可自动加入此处！
          </div>

          <div v-else class="lapse-actions">
            <div class="session-summary red">
              待消灭重点错题：<b>{{ queueData.lapseCards.length }}</b> 题
            </div>
            <button class="primary-launch-btn red" @click="startLapseReview">
              🔥 立即消灭全部错题 ({{ queueData.lapseCards.length }} 题)
            </button>
          </div>
        </div>
      </div>

      <!-- Mode 3: Custom Study -->
      <div v-if="currentTab === 'custom'" class="tab-content">
        <div class="mode-card">
          <h3>🎯 章节自由突击 (Custom Study)</h3>
          <p class="mode-desc">考前抱佛脚或针对指定章节突击抽测，支持自由选择章节与筛选规则。</p>

          <div class="config-item">
            <div class="item-title">📍 选择章节 (多选)：</div>
            <div class="chapter-chips">
              <button 
                v-for="i in 8" 
                :key="i" 
                class="chip-btn"
                :class="{ active: customConfig.chapters.includes(i) }"
                @click="toggleChapter(i)"
              >
                第 {{ i }} 章
              </button>
              <button class="chip-action" @click="selectAllChapters">全选</button>
              <button class="chip-action" @click="customConfig.chapters = []">清空</button>
            </div>
          </div>

          <div class="config-item">
            <div class="item-title">🔍 抽取题目范围：</div>
            <div class="radio-options">
              <label class="radio-item">
                <input type="radio" value="all" v-model="customConfig.scope" />
                <span>该章节全部题目 (抱佛脚全刷模式)</span>
              </label>
              <label class="radio-item">
                <input type="radio" value="unlearned" v-model="customConfig.scope" />
                <span>仅未学过的新题</span>
              </label>
              <label class="radio-item">
                <input type="radio" value="lapses" v-model="customConfig.scope" />
                <span>仅抽取曾经遗忘的错题</span>
              </label>
            </div>
          </div>

          <div class="config-item">
            <div class="item-title">🔢 每次抽题数量：</div>
            <div class="batch-options">
              <label v-for="cnt in [10, 20, 30, 50, 'all']" :key="cnt" class="batch-label">
                <input type="radio" :value="cnt" v-model="customConfig.batchSize" />
                {{ cnt === 'all' ? '全部抽出' : `${cnt} 题` }}
              </label>
            </div>
          </div>

          <button class="primary-launch-btn" @click="startCustomReview" :disabled="customFilteredCount === 0">
            🚀 启动突击复习 (共命中 {{ customFilteredCount }} 题)
          </button>
        </div>
      </div>

      <!-- Recent Marked Cards Inspector -->
      <div class="recent-records-section" v-if="recentMarkedCards.length > 0">
        <div class="recent-header">
          <h3>📝 最近学习与标记历史 (共 {{ recentMarkedCards.length }} 题)</h3>
          <span class="recent-tip">你在章节中评价的题目会实时在此处展示</span>
        </div>

        <div class="record-list">
          <div v-for="item in recentMarkedCards.slice(0, 10)" :key="item.id" class="record-item">
            <div class="record-badge" :class="item.state.lastRating">
              <span v-if="item.state.lastRating === 'hard'">🔴 完全不会</span>
              <span v-else-if="item.state.lastRating === 'medium'">🟡 模糊</span>
              <span v-else-if="item.state.lastRating === 'easy'">🟢 已掌握</span>
            </div>
            <div class="record-content">
              <div class="record-ch">第 {{ item.chapter }} 章 · <span class="record-topic-pill" v-if="item.topic">📌 {{ item.topic.split('：')[1] || item.topic }} · </span>{{ item.sourceTag }}</div>
              <div class="record-q">{{ item.question.slice(0, 55) }}...</div>
            </div>
            <div class="record-actions">
              <span class="record-due">下次: {{ formatDue(item.state.dueDate) }}</span>
              <button class="record-reset" @click="resetCard(item.id)">重置</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else-if="sessionCards.length === 0" class="all-done-card">
      <div class="done-icon">🎉</div>
      <h2>今日复习完成！</h2>
      <p>你已经完成了本轮选定的所有题目，抗遗忘能力 +100！</p>
      <button class="return-btn" @click="isReviewStarted = false">返回复习中心</button>
    </div>

    <!-- Active Review Session -->
    <div 
      v-else 
      class="review-wrapper"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <!-- Top Bar -->
      <div class="session-topbar">
        <div class="progress-counter">
          进度: <b>{{ currentCardIndex + 1 }}</b> / {{ sessionCards.length }} 题
        </div>
        <div class="card-origin">
          第 {{ currentCard.chapter }} 章 · <span class="origin-topic-pill" v-if="currentCard.topic">📌 {{ currentCard.topic.split('：')[1] || currentCard.topic }} · </span>{{ currentCard.sourceTag || '历年真题' }}
        </div>
        <div class="topbar-actions">
          <button 
            class="note-btn-review" 
            :class="{ 'has-note': getNote(currentCard.id), 'active': showReviewNote }" 
            @click="showReviewNote = !showReviewNote"
          >
            📝 {{ getNote(currentCard.id) ? '已记笔记' : '记笔记' }}
          </button>
          <button class="exit-btn" @click="isReviewStarted = false">中止退出</button>
        </div>
      </div>

      <!-- Current Card Body -->
      <div class="card-stage">
        <div class="question-block">
          <div class="tag-label question-tag">❓ 问题</div>
          <div class="text-display" v-html="formatMd(currentCard.question)"></div>
        </div>

        <div class="separator" v-if="showAnswer"></div>

        <div class="answer-block" v-if="showAnswer">
          <div class="tag-label answer-tag">💡 解析与采分点</div>
          <div class="text-display answer-text" v-html="formatMd(currentCard.answer)"></div>
        </div>

        <!-- Note Drawer in Review Session -->
        <div class="review-note-box" v-if="showReviewNote">
          <div class="box-header">
            <span>📝 本题随堂笔记（实时自动保存）：</span>
            <a :href="withBase('/notes')" target="_blank" class="box-link">全屏笔记库 ↗</a>
          </div>
          <textarea 
            class="box-textarea"
            :value="getNote(currentCard.id) ? getNote(currentCard.id).text : ''"
            @input="(e) => saveNote(currentCard.id, e.target.value, { chapter: currentCard.chapter, sourceTag: currentCard.sourceTag, question: currentCard.question })"
            placeholder="随手记录秒杀口诀、推导要点、错题原因..."
            rows="3"
          ></textarea>
        </div>
      </div>

      <!-- Review Actions Bar -->
      <div class="session-footer">
        <div v-if="!showAnswer" class="unrevealed-actions">
          <button class="show-ans-large-btn" @click="showAnswer = true">
            <span>翻牌查看答案 (快捷键 Space / Enter)</span>
          </button>
        </div>

        <div v-else class="revealed-ratings">
          <div class="rating-tip">记忆程度反馈：</div>
          <div class="rating-btn-group">
            <button class="rate-card-btn btn-again" @click="rateCurrentCard('hard')">
              <span class="btn-main">完全不会 (1)</span>
              <span class="btn-sub">加入错题池 · 重学</span>
            </button>
            <button class="rate-card-btn btn-good" @click="rateCurrentCard('medium')">
              <span class="btn-main">模糊不确定 (2)</span>
              <span class="btn-sub">明日继续强化</span>
            </button>
            <button class="rate-card-btn btn-easy" @click="rateCurrentCard('easy')">
              <span class="btn-main">熟练掌握 (3)</span>
              <span class="btn-sub">延长复习周期</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { withBase } from 'vitepress'
import { useAnki } from '../useAnki'
import { useNotes } from '../useNotes'

const {
  ankiState,
  markHard,
  markMedium,
  markEasy,
  resetCard,
  resetAllProgress,
  categorizeCards
} = useAnki()

const {
  getNote,
  saveNote,
  deleteNote,
  totalNotesCount
} = useNotes()

const loading = ref(true)
const allCards = ref([])
const isReviewStarted = ref(false)
const currentTab = ref('daily')
const showReviewNote = ref(false)

// Daily mode config
const dailyNewLimit = ref(15)

// Custom mode config
const customConfig = ref({
  chapters: [1, 2, 3, 4, 5, 6, 7, 8],
  scope: 'all',
  batchSize: 20
})

// Review session states
const sessionCards = ref([])
const currentCardIndex = ref(0)
const showAnswer = ref(false)

// Mobile touch swipe handling
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
    if (Math.abs(deltaX) > 50 && Math.abs(deltaY) < 55) {
      if (deltaX < 0) {
        // Swiped left
        if (!showAnswer.value) {
          showAnswer.value = true
        }
      }
    }
  }
}

const currentCard = computed(() => {
  return sessionCards.value[currentCardIndex.value] || null
})

// Queue stats
const queueData = computed(() => {
  return categorizeCards(allCards.value)
})

// Learned stats
const learnedCount = computed(() => {
  return queueData.value.dueCards.length + queueData.value.masteredCards.length + queueData.value.lapseCards.length
})

const learnedPercentage = computed(() => {
  if (allCards.value.length === 0) return 0
  return Math.round((learnedCount.value / allCards.value.length) * 100)
})

const masteredPercentage = computed(() => {
  if (allCards.value.length === 0) return 0
  return (queueData.value.masteredCards.length / allCards.value.length) * 100
})

const lapsePercentage = computed(() => {
  if (allCards.value.length === 0) return 0
  return (queueData.value.lapseCards.length / allCards.value.length) * 100
})

const dailySessionCount = computed(() => {
  const due = queueData.value.dueCards.length
  const newAvail = Math.min(dailyNewLimit.value, queueData.value.newCards.length)
  return due + newAvail
})

// Custom Mode Filter count
const customFilteredCards = computed(() => {
  const { chapters, scope } = customConfig.value
  return allCards.value.filter(c => {
    if (!chapters.includes(c.chapter)) return false
    const state = ankiState.value[c.id]
    if (scope === 'unlearned') {
      return !state || !state.lastReviewed
    }
    if (scope === 'lapses') {
      return state && (state.lastRating === 'hard' || state.lapses > 0)
    }
    return true
  })
})

const customFilteredCount = computed(() => {
  return customFilteredCards.value.length
})

// Recent marked cards
const recentMarkedCards = computed(() => {
  const marked = []
  allCards.value.forEach(c => {
    const s = ankiState.value[c.id]
    if (s && s.lastReviewed) {
      marked.push({ ...c, state: s })
    }
  })
  marked.sort((a, b) => b.state.lastReviewed - a.state.lastReviewed)
  return marked
})

// Fetch cards
const fetchCards = async () => {
  try {
    const res = await fetch(withBase('/cards.json'))
    allCards.value = await res.json()
  } catch (e) {
    console.error('Failed to load card dataset', e)
  } finally {
    loading.value = false
  }
}

// Start Daily Session
const startDailyReview = () => {
  const dues = [...queueData.value.dueCards]
  const newBatch = queueData.value.newCards.slice(0, dailyNewLimit.value)
  const pool = [...dues, ...newBatch]
  // Shuffle gently
  pool.sort(() => Math.random() - 0.5)

  sessionCards.value = pool
  currentCardIndex.value = 0
  showAnswer.value = false
  isReviewStarted.value = true
}

// Start Lapse Session
const startLapseReview = () => {
  const pool = [...queueData.value.lapseCards]
  pool.sort(() => Math.random() - 0.5)

  sessionCards.value = pool
  currentCardIndex.value = 0
  showAnswer.value = false
  isReviewStarted.value = true
}

// Start Custom Session
const startCustomReview = () => {
  let pool = [...customFilteredCards.value]
  pool.sort(() => Math.random() - 0.5)

  if (customConfig.value.batchSize !== 'all') {
    pool = pool.slice(0, customConfig.value.batchSize)
  }

  sessionCards.value = pool
  currentCardIndex.value = 0
  showAnswer.value = false
  isReviewStarted.value = true
}

// Rate card
const rateCurrentCard = (level) => {
  const id = currentCard.value.id
  if (level === 'hard') markHard(id)
  else if (level === 'medium') markMedium(id)
  else if (level === 'easy') markEasy(id)

  currentCardIndex.value += 1
  showAnswer.value = false
}

// Chapter chips
const toggleChapter = (ch) => {
  const idx = customConfig.value.chapters.indexOf(ch)
  if (idx > -1) {
    customConfig.value.chapters.splice(idx, 1)
  } else {
    customConfig.value.chapters.push(ch)
  }
}

const selectAllChapters = () => {
  customConfig.value.chapters = [1, 2, 3, 4, 5, 6, 7, 8]
}

const confirmResetAll = () => {
  if (confirm("确定要清空全部复习进度吗？所有掌握状态将被恢复为新题。")) {
    resetAllProgress()
  }
}

import katex from 'katex'

const formatMd = (text) => {
  if (!text) return ''
  // 1. Render display math $$ ... $$
  let html = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
    try {
      return `<div class="katex-display">${katex.renderToString(math.trim(), { displayMode: true, throwOnError: false })}</div>`
    } catch (e) {
      return `$$${math}$$`
    }
  })
  // 2. Render inline math $ ... $
  html = html.replace(/\$([^\$\n]+?)\$/g, (_, math) => {
    try {
      return katex.renderToString(math.trim(), { displayMode: false, throwOnError: false })
    } catch (e) {
      return `$${math}$`
    }
  })
  // 3. Format markdown bold, italic, linebreaks
  html = html
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>')
  return html
}

const formatDue = (timestamp) => {
  if (!timestamp) return '立刻'
  const diff = timestamp - Date.now()
  if (diff <= 0) return '今日到期'
  const hours = Math.round(diff / (60 * 60 * 1000))
  if (hours < 24) return `${hours}小时后`
  const days = Math.round(diff / (24 * 60 * 60 * 1000))
  return `${days}天后`
}

const handleKeydown = (e) => {
  if (!isReviewStarted.value || !currentCard.value) return
  if (!showAnswer.value) {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault()
      showAnswer.value = true
    }
  } else {
    if (e.key === '1') rateCurrentCard('hard')
    if (e.key === '2') rateCurrentCard('medium')
    if (e.key === '3') rateCurrentCard('easy')
  }
}

onMounted(() => {
  fetchCards()
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeydown)
  }
})
</script>

<style scoped>
.anki-review {
  max-width: 860px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
}

.loading-state {
  text-align: center;
  padding: 4rem 1rem;
  color: var(--vp-c-text-2);
}
.spinner {
  width: 40px;
  height: 40px;
  margin: 0 auto 1.5rem;
  border: 4px solid rgba(100, 108, 255, 0.2);
  border-top-color: var(--vp-c-brand-1);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* Dashboard */
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.8rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.title-group h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 0.4rem;
}

.subtitle {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.reset-all-btn {
  background: none;
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-3);
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;
}
.reset-all-btn:hover {
  color: #ef4444;
  border-color: #ef4444;
}

/* 4 Queues Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  transition: transform 0.15s;
}
.stat-card:hover {
  transform: translateY(-2px);
}

.stat-icon {
  font-size: 1.8rem;
}

.stat-count {
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.2;
}

.due-card .stat-count { color: #f59e0b; }
.due-card.has-items { border-color: #f59e0b; background: rgba(245, 158, 11, 0.05); }

.lapse-card .stat-count { color: #ef4444; }
.lapse-card.has-items { border-color: #ef4444; background: rgba(239, 68, 68, 0.05); }

.new-card .stat-count { color: #3b82f6; }
.mastered-card .stat-count { color: #10b981; }

.stat-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.stat-sub {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}

/* Progress bar */
.progress-bar-container {
  background: var(--vp-c-bg-soft);
  padding: 1rem 1.2rem;
  border-radius: 12px;
  border: 1px solid var(--vp-c-border);
  margin-bottom: 2rem;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.6rem;
}

.progress-track {
  display: flex;
  height: 10px;
  background: var(--vp-c-bg-alt);
  border-radius: 6px;
  overflow: hidden;
}

.progress-fill.mastered {
  background: #10b981;
  transition: width 0.3s;
}
.progress-fill.learning {
  background: #f59e0b;
  transition: width 0.3s;
}

/* Mode Tabs */
.mode-tabs {
  display: flex;
  gap: 0.6rem;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.6rem;
}

.tab-btn {
  padding: 0.65rem 1.2rem;
  border-radius: 8px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.tab-btn:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}
.tab-btn.active {
  color: #fff;
  background: var(--vp-c-brand-1);
}

/* Mode Content Cards */
.mode-card {
  background: var(--vp-c-bg-soft);
  padding: 2rem;
  border-radius: 14px;
  border: 1px solid var(--vp-c-border);
}

.mode-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
  color: var(--vp-c-text-1);
}

.mode-desc {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

/* Daily Slider */
.daily-slider-group {
  background: var(--vp-c-bg-alt);
  padding: 1.2rem 1.4rem;
  border-radius: 10px;
  margin-bottom: 1.4rem;
}

.slider-label {
  display: block;
  font-size: 0.95rem;
  margin-bottom: 0.8rem;
}
.highlight-num {
  color: var(--vp-c-brand-1);
  font-size: 1.1rem;
}

.slider {
  width: 100%;
  cursor: pointer;
  accent-color: var(--vp-c-brand-1);
}

.range-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  margin-top: 0.4rem;
}

.session-summary {
  font-size: 1rem;
  color: var(--vp-c-text-1);
  margin-bottom: 1.5rem;
}
.session-summary.red {
  color: #ef4444;
  font-size: 1.1rem;
}

.primary-launch-btn {
  display: block;
  width: 100%;
  padding: 0.9rem;
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(100, 108, 255, 0.3);
  transition: transform 0.15s, opacity 0.15s;
}
.primary-launch-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  opacity: 0.95;
}
.primary-launch-btn:disabled {
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-3);
  box-shadow: none;
  cursor: not-allowed;
}
.primary-launch-btn.red {
  background: linear-gradient(135deg, #ef4444, #f59e0b);
  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.3);
}

/* Custom chips */
.config-item {
  margin-bottom: 1.4rem;
}
.item-title {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
}
.chapter-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.chip-btn {
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.15s;
}
.chip-btn.active {
  background: var(--vp-c-brand-1);
  color: #fff;
  border-color: var(--vp-c-brand-1);
}
.chip-action {
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
  border: 1px dashed var(--vp-c-border);
  background: transparent;
  color: var(--vp-c-text-3);
  cursor: pointer;
}

.radio-options, .batch-options {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  background: var(--vp-c-bg-alt);
  padding: 0.8rem 1rem;
  border-radius: 10px;
}
.radio-item, .batch-label {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  cursor: pointer;
}

/* Recent records table */
.recent-records-section {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}

.recent-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1rem;
}
.recent-header h3 {
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
}
.recent-tip {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}

.record-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.record-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
}

.record-badge {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 6px;
  white-space: nowrap;
}
.record-badge.hard { background: rgba(239, 68, 68, 0.15); color: #ef4444; }
.record-badge.medium { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }
.record-badge.easy { background: rgba(16, 185, 129, 0.15); color: #10b981; }

.record-content {
  flex: 1;
  overflow: hidden;
}
.record-ch {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}
.record-q {
  font-size: 0.88rem;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.record-actions {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}
.record-reset {
  background: none;
  border: none;
  color: var(--vp-c-text-3);
  cursor: pointer;
  text-decoration: underline;
}
.record-reset:hover { color: #ef4444; }

.header-right-btns {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.hub-btn {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}
.hub-btn:hover {
  background: var(--vp-c-brand-1);
  color: #fff;
}

/* Active Review Session Standardized Geometry */
.review-wrapper {
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  border: 1px solid var(--vp-c-border);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  min-height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.session-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 1.4rem;
  background: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-border);
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.note-btn-review {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 3px 10px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
}
.note-btn-review:hover, .note-btn-review.active {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.note-btn-review.has-note {
  background: rgba(100, 108, 255, 0.1);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.review-note-box {
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  padding: 0.8rem 1rem;
  margin-top: 1.5rem;
}
.box-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.5rem;
}
.box-link {
  font-size: 0.75rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.box-textarea {
  width: 100%;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  outline: none;
  font-family: inherit;
  resize: vertical;
}

.progress-counter {
  font-size: 0.95rem;
  font-weight: 600;
}
.progress-counter b { color: var(--vp-c-brand-1); }

.card-origin {
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
}

.exit-btn {
  background: none;
  border: none;
  color: var(--vp-c-text-3);
  font-size: 0.85rem;
  cursor: pointer;
}
.exit-btn:hover { color: var(--vp-c-text-1); }

.card-stage {
  padding: 2rem 1.8rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.tag-label {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}
.question-tag { background: rgba(59, 130, 246, 0.12); color: #3b82f6; }
.answer-tag { background: rgba(16, 185, 129, 0.12); color: #10b981; }

.text-display {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--vp-c-text-1);
}
.answer-text {
  color: var(--vp-c-text-2);
}

.separator {
  height: 1px;
  background: var(--vp-c-divider);
  margin: 1.8rem 0;
}

.session-footer {
  padding: 1.4rem;
  background: var(--vp-c-bg-alt);
  border-top: 1px solid var(--vp-c-border);
}

.unrevealed-actions {
  display: flex;
  justify-content: center;
}

.show-ans-large-btn {
  padding: 0.85rem 3rem;
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(100, 108, 255, 0.3);
  transition: transform 0.15s;
}
.show-ans-large-btn:hover { transform: translateY(-1px); }

.rating-tip {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  text-align: center;
  margin-bottom: 0.8rem;
}

.rating-btn-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
}

.rate-card-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.85rem;
  border-radius: 12px;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: transform 0.15s, opacity 0.15s;
}
.rate-card-btn:hover {
  transform: translateY(-2px);
  opacity: 0.95;
}

.btn-again { background: #ef4444; }
.btn-good { background: #f59e0b; }
.btn-easy { background: #10b981; }

.btn-main {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 2px;
}
.btn-sub {
  font-size: 0.75rem;
  opacity: 0.85;
}

.all-done-card {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  border: 1px solid var(--vp-c-border);
}
.done-icon { font-size: 3.5rem; margin-bottom: 1rem; }
.all-done-card h2 { color: var(--vp-c-brand-1); margin-bottom: 0.6rem; }
.all-done-card p { color: var(--vp-c-text-2); margin-bottom: 2rem; }
.return-btn {
  padding: 0.7rem 2rem;
  border-radius: 20px;
  background: var(--vp-c-brand-1);
  color: #fff;
  border: none;
  font-weight: 600;
  cursor: pointer;
}

@media (max-width: 768px) {
  .dashboard-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
  .header-right-btns {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .hub-btn {
    flex: 1;
    text-align: center;
    padding: 0.45rem 0.6rem;
    font-size: 0.82rem;
  }
  .reset-all-btn {
    padding: 0.45rem 0.8rem;
    font-size: 0.82rem;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
  }
  .stat-card {
    padding: 0.8rem;
  }
  .stat-count {
    font-size: 1.4rem;
  }
  .mode-selector {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
  .review-wrapper {
    min-height: 480px;
    border-radius: 12px;
  }
  .session-topbar {
    padding: 0.8rem 1rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .card-stage {
    padding: 1.2rem 1rem;
  }
  .show-ans-large-btn {
    width: 100%;
    min-height: 48px;
    border-radius: 24px;
    font-size: 0.92rem;
  }
  .rating-btn-group {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  .rate-card-btn {
    min-height: 48px;
    padding: 0.6rem 0.8rem;
    border-radius: 10px;
  }
  .btn-main {
    font-size: 0.92rem;
  }
  .origin-topic-pill {
    color: var(--vp-c-brand-1);
    font-weight: 600;
  }
  .record-topic-pill {
    color: var(--vp-c-brand-1);
    font-weight: 600;
  }
}

.origin-topic-pill {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}
.record-topic-pill {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}
</style>
