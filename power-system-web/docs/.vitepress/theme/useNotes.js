import { ref, computed } from 'vue'

const isBrowser = typeof window !== 'undefined'
const STORAGE_KEY = 'power-system-notes'

// Module-level singleton reactive notes store
const notesState = ref({})
let isInitialized = false
let saveTimer = null

function loadNotes() {
  if (!isBrowser || isInitialized) return
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      notesState.value = JSON.parse(saved)
    }
  } catch (e) {
    console.error('Failed to parse notes from storage', e)
  }
  isInitialized = true
}

if (isBrowser) {
  loadNotes()

  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY && e.newValue) {
      try {
        notesState.value = JSON.parse(e.newValue)
      } catch (err) {}
    }
  })
}

function saveNotesDebounced() {
  if (!isBrowser) return
  if (saveTimer) clearTimeout(saveTimer)
  saveTimer = setTimeout(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notesState.value))
    } catch (e) {
      console.error('Failed to save notes', e)
    }
  }, 100)
}

export function useNotes() {
  if (isBrowser && !isInitialized) {
    loadNotes()
  }

  const getNote = (cardId) => {
    return notesState.value[cardId] || null
  }

  const saveNote = (cardId, text, meta = {}) => {
    if (!text || !text.trim()) {
      deleteNote(cardId)
      return
    }
    notesState.value[cardId] = {
      cardId,
      text: text.trim(),
      updatedAt: Date.now(),
      chapter: meta.chapter || 1,
      sourceTag: meta.sourceTag || '',
      question: meta.question || ''
    }
    notesState.value = { ...notesState.value }
    saveNotesDebounced()
  }

  const deleteNote = (cardId) => {
    if (notesState.value[cardId]) {
      delete notesState.value[cardId]
      notesState.value = { ...notesState.value }
      saveNotesDebounced()
    }
  }

  const notesList = computed(() => {
    return Object.values(notesState.value).sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
  })

  const totalNotesCount = computed(() => {
    return Object.keys(notesState.value).length
  })

  return {
    notesState,
    notesList,
    totalNotesCount,
    getNote,
    saveNote,
    deleteNote
  }
}
