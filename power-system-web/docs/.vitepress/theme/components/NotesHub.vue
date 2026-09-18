<template>
  <div class="notes-hub-container">
    <!-- Header -->
    <div class="hub-header">
      <div class="header-text">
        <h2>📝 我的考研专属笔记库</h2>
        <p class="subtitle">汇集你在各章节与复习中随手记录的解题心得、秒记口诀与易错点（当前共 {{ totalNotesCount }} 篇笔记）</p>
      </div>
      <div class="header-actions">
        <button class="btn-primary" @click="showAddModal = true">➕ 添加新笔记</button>
        <button class="btn-secondary" @click="exportNotes" :disabled="notesList.length === 0">📥 导出笔记 (TXT)</button>
      </div>
    </div>

    <!-- Search & Filters -->
    <div class="hub-controls">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="搜索笔记内容或题目关键词..." 
          class="search-input"
        />
        <button v-if="searchQuery" class="clear-search" @click="searchQuery = ''">✕</button>
      </div>

      <div class="chapter-filter">
        <span class="filter-tag">章节：</span>
        <select v-model="selectedChapter" class="chapter-select">
          <option value="all">全部章节 ({{ totalNotesCount }})</option>
          <option v-for="ch in 8" :key="ch" :value="ch">
            第 {{ ch }} 章 ({{ getChapterNoteCount(ch) }})
          </option>
        </select>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredNotes.length === 0" class="empty-notes-card">
      <div class="empty-icon">📒</div>
      <h3>暂无符合条件的考研笔记</h3>
      <p v-if="totalNotesCount === 0">
        在任意题目的右上角点击 <b>“📝 记笔记”</b>，即可随时记录你的秒杀口诀、解题心得与死角备忘！
      </p>
      <p v-else>未找到包含关键词 “{{ searchQuery }}” 的笔记。</p>
      <button class="btn-primary mt-4" @click="showAddModal = true">立即从题库中选题目添加笔记</button>
    </div>

    <!-- Notes Masonry/List Grid -->
    <div v-else class="notes-grid">
      <div v-for="item in filteredNotes" :key="item.cardId" class="note-card">
        <!-- Note Card Header -->
        <div class="note-card-top">
          <div class="meta-left">
            <span class="ch-badge">第 {{ item.chapter }} 章</span>
            <span class="source-pill" v-if="item.sourceTag">{{ item.sourceTag }}</span>
          </div>
          <div class="meta-right">
            <span class="time-stamp">{{ formatTime(item.updatedAt) }}</span>
            <button class="del-btn" @click="confirmDelete(item.cardId)" title="删除本条笔记">🗑️ 删除</button>
          </div>
        </div>

        <!-- Question Snippet -->
        <div class="note-question-area" v-if="item.question">
          <div class="q-label">题目：</div>
          <div class="q-text" v-html="renderMath(item.question)"></div>
        </div>

        <!-- Editable Note Area -->
        <div class="note-body-area">
          <div class="note-label">
            <span>💡 个人笔记与记忆心法：</span>
            <span class="auto-save-hint" v-if="editingId === item.cardId">实时自动保存</span>
          </div>
          <textarea 
            class="note-textarea"
            v-model="item.text"
            @focus="editingId = item.cardId"
            @blur="handleNoteBlur(item)"
            @input="onNoteInput(item)"
            placeholder="写下你的记忆口诀、解题陷阱、易错点..."
            rows="4"
          ></textarea>
        </div>

        <!-- Link back to chapter review -->
        <div class="note-footer">
          <a :href="`/chapter${item.chapter}`" class="jump-chapter-link">
            ➡️ 跳转到第 {{ item.chapter }} 章原题巩固
          </a>
        </div>
      </div>
    </div>

    <!-- Modal for Adding Note from Database -->
    <div v-if="showAddModal" class="modal-backdrop" @click.self="showAddModal = false">
      <div class="modal-window">
        <div class="modal-header">
          <h3>➕ 从 776 题库中选择题目添加笔记</h3>
          <button class="close-btn" @click="showAddModal = false">✕</button>
        </div>

        <div class="modal-body">
          <div class="modal-search">
            <input 
              type="text" 
              v-model="modalQuery" 
              placeholder="输入关键词或真题年份搜索题目..."
              class="modal-input"
            />
          </div>

          <div class="modal-card-list">
            <div 
              v-for="card in searchedModalCards.slice(0, 15)" 
              :key="card.id" 
              class="modal-card-item"
              @click="selectCardForNote(card)"
            >
              <div class="modal-item-ch">第 {{ card.chapter }} 章 · {{ card.sourceTag }}</div>
              <div class="modal-item-q" v-html="renderMath(card.question)"></div>
              <div class="modal-has-note" v-if="getNote(card.id)">已存在笔记，点击前往编辑</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { withBase } from 'vitepress'
import { useNotes } from '../useNotes'
import katex from 'katex'

const {
  notesList,
  totalNotesCount,
  getNote,
  saveNote,
  deleteNote
} = useNotes()

const allCards = ref([])
const searchQuery = ref('')
const selectedChapter = ref('all')
const editingId = ref(null)

const showAddModal = ref(false)
const modalQuery = ref('')

const fetchAllCards = async () => {
  try {
    const res = await fetch(withBase('/cards.json'))
    allCards.value = await res.json()
  } catch (e) {
    console.error('Failed to load cards.json in NotesHub', e)
  }
}

const getChapterNoteCount = (ch) => {
  return notesList.value.filter(n => n.chapter === ch).length
}

const filteredNotes = computed(() => {
  return notesList.value.filter(item => {
    if (selectedChapter.value !== 'all' && item.chapter !== selectedChapter.value) {
      return false
    }
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase()
      const inText = (item.text || '').toLowerCase().includes(q)
      const inQuestion = (item.question || '').toLowerCase().includes(q)
      const inTag = (item.sourceTag || '').toLowerCase().includes(q)
      if (!inText && !inQuestion && !inTag) return false
    }
    return true
  })
})

const onNoteInput = (item) => {
  saveNote(item.cardId, item.text, {
    chapter: item.chapter,
    sourceTag: item.sourceTag,
    question: item.question
  })
}

const handleNoteBlur = (item) => {
  editingId.value = null
  saveNote(item.cardId, item.text, {
    chapter: item.chapter,
    sourceTag: item.sourceTag,
    question: item.question
  })
}

const confirmDelete = (cardId) => {
  if (confirm('确定要删除这条笔记吗？删除后题目仍保留，仅清空个人笔记。')) {
    deleteNote(cardId)
  }
}

const exportNotes = () => {
  let content = '==========================================\n'
  content += '⚡ 电力系统考研简答题 · 个人专属笔记精华集\n'
  content += `导出时间: ${new Date().toLocaleString()}\n`
  content += `共计 ${notesList.value.length} 条笔记\n`
  content += '==========================================\n\n'

  notesList.value.forEach((item, idx) => {
    content += `【第 ${idx + 1} 条】第 ${item.chapter} 章 | ${item.sourceTag || '历年真题'}\n`
    content += `题目：${item.question}\n`
    content += `我的笔记心得：\n${item.text}\n`
    content += '------------------------------------------\n\n'
  })

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `电力系统简答题_考研笔记_${Date.now()}.txt`
  a.click()
  URL.revokeObjectURL(url)
}

const searchedModalCards = computed(() => {
  if (!modalQuery.value.trim()) {
    return allCards.value.slice(0, 15)
  }
  const q = modalQuery.value.toLowerCase()
  return allCards.value.filter(c => {
    return c.question.toLowerCase().includes(q) || (c.sourceTag || '').toLowerCase().includes(q)
  })
})

const selectCardForNote = (card) => {
  const existing = getNote(card.id)
  if (!existing) {
    saveNote(card.id, '在此输入你的考点备忘与解题笔记...', {
      chapter: card.chapter,
      sourceTag: card.sourceTag,
      question: card.question
    })
  }
  showAddModal.value = false
  selectedChapter.value = card.chapter
}

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

const formatTime = (ts) => {
  if (!ts) return ''
  const d = new Date(ts)
  return `${d.getMonth() + 1}月${d.getDate()}日 ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
}

onMounted(() => {
  fetchAllCards()
})
</script>

<style scoped>
.notes-hub-container {
  max-width: 960px;
  margin: 1.5rem auto 4rem;
  padding: 0 1rem;
}

.hub-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.header-text h2 {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 0.4rem;
}

.subtitle {
  font-size: 0.92rem;
  color: var(--vp-c-text-2);
}

.header-actions {
  display: flex;
  gap: 0.8rem;
}

.btn-primary {
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  background: var(--vp-c-brand-1);
  color: #fff;
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}
.btn-primary:hover { opacity: 0.92; }

.btn-secondary {
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-border);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
}
.btn-secondary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Controls */
.hub-controls {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.8rem;
  background: var(--vp-c-bg-soft);
  padding: 0.8rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--vp-c-border);
}

.search-box {
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 0 0.8rem;
}
.search-icon { font-size: 0.9rem; margin-right: 0.5rem; opacity: 0.6; }
.search-input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  outline: none;
}
.clear-search {
  background: none;
  border: none;
  color: var(--vp-c-text-3);
  cursor: pointer;
}

.chapter-filter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.filter-tag { font-size: 0.88rem; color: var(--vp-c-text-3); }
.chapter-select {
  padding: 0.45rem 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.88rem;
  outline: none;
}

/* Empty */
.empty-notes-card {
  text-align: center;
  padding: 5rem 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  border: 1px solid var(--vp-c-border);
}
.empty-icon { font-size: 3.5rem; margin-bottom: 1rem; }
.empty-notes-card h3 { color: var(--vp-c-text-1); margin-bottom: 0.5rem; }
.empty-notes-card p { color: var(--vp-c-text-2); font-size: 0.95rem; max-width: 500px; margin: 0 auto; line-height: 1.6; }
.mt-4 { margin-top: 1.5rem; }

/* Notes List */
.notes-grid {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.note-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 14px;
  padding: 1.4rem 1.6rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  transition: border-color 0.2s, box-shadow 0.2s;
}
.note-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
}

.note-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.meta-left { display: flex; align-items: center; gap: 0.6rem; }
.ch-badge {
  background: var(--vp-c-brand-1);
  color: #fff;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 700;
}
.source-pill {
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 0.78rem;
}
.meta-right { display: flex; align-items: center; gap: 0.8rem; }
.time-stamp { font-size: 0.75rem; color: var(--vp-c-text-3); }
.del-btn {
  background: none;
  border: none;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  cursor: pointer;
}
.del-btn:hover { color: #ef4444; }

.note-question-area {
  background: var(--vp-c-bg-alt);
  padding: 0.9rem 1.2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  border-left: 3px solid var(--vp-c-brand-1);
}
.q-label { font-size: 0.78rem; font-weight: 700; color: var(--vp-c-brand-1); margin-bottom: 0.3rem; }
.q-text { font-size: 0.95rem; line-height: 1.6; color: var(--vp-c-text-1); }

.note-body-area {
  margin-bottom: 0.8rem;
}
.note-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}
.auto-save-hint { font-size: 0.75rem; color: #10b981; font-weight: normal; }

.note-textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.95rem;
  line-height: 1.6;
  resize: vertical;
  outline: none;
  transition: border-color 0.2s;
  font-family: inherit;
}
.note-textarea:focus {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.15);
}

.note-footer {
  display: flex;
  justify-content: flex-end;
}
.jump-chapter-link {
  font-size: 0.82rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.jump-chapter-link:hover { text-decoration: underline; }

/* Modal */
.modal-backdrop {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-window {
  width: 90%;
  max-width: 680px;
  max-height: 80vh;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  border: 1px solid var(--vp-c-border);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.6rem;
  border-bottom: 1px solid var(--vp-c-divider);
}
.modal-header h3 { font-size: 1.1rem; color: var(--vp-c-text-1); }
.close-btn { background: none; border: none; font-size: 1.2rem; cursor: pointer; color: var(--vp-c-text-3); }

.modal-body {
  padding: 1.2rem 1.6rem;
  overflow-y: auto;
}
.modal-input {
  width: 100%;
  padding: 0.7rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.95rem;
  margin-bottom: 1rem;
  outline: none;
}

.modal-card-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.modal-card-item {
  padding: 0.8rem 1rem;
  border-radius: 10px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  cursor: pointer;
  transition: all 0.15s;
}
.modal-card-item:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-1px);
}
.modal-item-ch { font-size: 0.75rem; color: var(--vp-c-text-3); margin-bottom: 0.2rem; }
.modal-item-q { font-size: 0.9rem; color: var(--vp-c-text-1); line-height: 1.5; }
.modal-has-note { font-size: 0.75rem; color: #10b981; margin-top: 0.4rem; }

@media (max-width: 768px) {
  .notes-hub-container {
    padding: 0.8rem 0;
  }
  .hub-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
  .header-actions {
    width: 100%;
    display: flex;
    gap: 0.5rem;
  }
  .add-btn, .export-btn {
    flex: 1;
    min-height: 44px;
    font-size: 0.82rem;
    padding: 0.5rem 0.6rem;
    justify-content: center;
  }
  .hub-controls {
    flex-direction: column;
    gap: 0.6rem;
  }
  .search-box {
    width: 100%;
  }
  .search-input {
    width: 100%;
    min-height: 42px;
    font-size: 0.88rem;
  }
  .chapter-filter {
    width: 100%;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 0.4rem;
    -webkit-overflow-scrolling: touch;
  }
  .ch-pill {
    flex-shrink: 0;
  }
  .note-item {
    padding: 1rem;
    border-radius: 12px;
  }
  .modal-container {
    width: 95%;
    max-height: 90vh;
  }
}
</style>
