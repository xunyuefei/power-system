import { ref, computed } from 'vue'

const isBrowser = typeof window !== 'undefined'
const STORAGE_KEY = 'power-system-anki'

// Module-level SINGLETON state so all components and views share the exact same reactive store
const ankiState = ref({})
let isInitialized = false
let saveTimeout = null

function loadInitialState() {
  if (!isBrowser || isInitialized) return
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      ankiState.value = JSON.parse(saved)
    }
  } catch (e) {
    console.error('Failed to parse anki state from localStorage', e)
  }
  isInitialized = true
}

// Ensure store is initialized immediately in browser
if (isBrowser) {
  loadInitialState()

  // Listen to cross-tab / cross-window storage events
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY && e.newValue) {
      try {
        ankiState.value = JSON.parse(e.newValue)
      } catch (err) {
        console.error('Storage sync error', err)
      }
    }
  })
}

// Debounced save to avoid freezing main thread on rapid clicks
function saveStateDebounced() {
  if (!isBrowser) return
  if (saveTimeout) clearTimeout(saveTimeout)
  saveTimeout = setTimeout(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ankiState.value))
    } catch (e) {
      console.error('Failed to persist anki state', e)
    }
  }, 100)
}

export function useAnki() {
  if (isBrowser && !isInitialized) {
    loadInitialState()
  }

  // Initialize a card record if not present
  const initCard = (id) => {
    if (!ankiState.value[id]) {
      ankiState.value[id] = {
        repetition: 0,
        interval: 0,
        easeFactor: 2.5,
        dueDate: 0,
        lastRating: null,
        lastReviewed: 0,
        lapses: 0 // number of times marked 'hard'
      }
    }
  }

  /**
   * SM-2 Spaced Repetition Rating
   * quality:
   *   1 = hard (完全不会/重刷: reset interval, lapses + 1, due immediately / today)
   *   3 = medium (模糊/标记: interval = 1 day)
   *   5 = easy (已掌握/牢固: interval increases via SM-2)
   */
  const reviewCard = (id, quality) => {
    initCard(id)
    const card = ankiState.value[id]
    const now = Date.now()
    card.lastReviewed = now

    if (quality < 3) {
      // Hard / Lapse
      card.repetition = 0
      card.interval = 0 // Due again today
      card.lapses = (card.lapses || 0) + 1
      card.lastRating = 'hard'
      // Due in 10 minutes or immediately today
      card.dueDate = now + 10 * 60 * 1000
    } else if (quality === 3) {
      // Medium / Fuzzy
      card.interval = 1
      card.repetition = (card.repetition || 0) + 1
      card.lastRating = 'medium'
      card.dueDate = now + 24 * 60 * 60 * 1000
    } else {
      // Easy / Mastered
      if (card.repetition === 0) {
        card.interval = 1
      } else if (card.repetition === 1) {
        card.interval = 4
      } else {
        card.interval = Math.round((card.interval || 1) * (card.easeFactor || 2.5))
      }
      card.repetition = (card.repetition || 0) + 1
      card.lastRating = 'easy'
      card.dueDate = now + card.interval * 24 * 60 * 60 * 1000
    }

    // Update Ease Factor (standard SM-2)
    const currentEF = card.easeFactor || 2.5
    card.easeFactor = currentEF + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    if (card.easeFactor < 1.3) card.easeFactor = 1.3

    // Trigger reactive update & persist
    ankiState.value = { ...ankiState.value }
    saveStateDebounced()
  }

  const markHard = (id) => reviewCard(id, 1)
  const markMedium = (id) => reviewCard(id, 3)
  const markEasy = (id) => reviewCard(id, 5)

  // Reset progress for a specific card
  const resetCard = (id) => {
    if (ankiState.value[id]) {
      delete ankiState.value[id]
      ankiState.value = { ...ankiState.value }
      saveStateDebounced()
    }
  }

  // Clear all Anki data
  const resetAllProgress = () => {
    ankiState.value = {}
    if (isBrowser) {
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  // Get state for a single card
  const getCardState = (id) => {
    return ankiState.value[id] || null
  }

  /**
   * Card Queues Analysis
   */
  const categorizeCards = (allCards) => {
    const now = Date.now()
    const dueList = []
    const lapseList = []
    const newList = []
    const masteredList = []

    allCards.forEach(c => {
      const state = ankiState.value[c.id]
      if (!state || !state.lastReviewed) {
        // Unlearned new card
        newList.push(c)
      } else {
        if (state.lastRating === 'hard' || (state.lapses && state.lapses > 0)) {
          lapseList.push(c)
        }
        if (state.dueDate <= now) {
          dueList.push(c)
        } else {
          masteredList.push(c)
        }
      }
    })

    return {
      dueCards: dueList,
      lapseCards: lapseList,
      newCards: newList,
      masteredCards: masteredList
    }
  }

  return {
    ankiState,
    markHard,
    markMedium,
    markEasy,
    resetCard,
    resetAllProgress,
    getCardState,
    categorizeCards
  }
}
