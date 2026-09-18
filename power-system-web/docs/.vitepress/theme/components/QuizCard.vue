<template>
  <div class="quiz-card" :class="{ 'is-revealed': isRevealed, 'has-rating': cardState && cardState.lastReviewed }">
    <!-- Question Header -->
    <div class="quiz-question">
      <div class="card-status-pill" v-if="cardState && cardState.lastReviewed">
        <span v-if="cardState.lastRating === 'hard'" class="pill hard">🔴 需重刷攻坚 (Lapse: {{ cardState.lapses || 1 }})</span>
        <span v-else-if="cardState.lastRating === 'medium'" class="pill medium">🟡 模糊标记</span>
        <span v-else-if="cardState.lastRating === 'easy'" class="pill easy">🟢 已掌握</span>
        <span class="pill-due">下次: {{ nextDueStr }}</span>
      </div>
      <slot name="question"></slot>
    </div>
    
    <!-- Action to reveal -->
    <div class="quiz-actions" v-if="!isRevealed">
      <button class="reveal-btn" @click="revealAnswer">
        <span>💡 查看答案解析</span>
      </button>
    </div>
    
    <!-- Answer area -->
    <div class="quiz-answer-container" :class="{ 'blurred': !isRevealed }">
      <div class="quiz-answer">
        <slot name="answer"></slot>
      </div>
      
      <div class="quiz-overlay" v-if="!isRevealed" @click="revealAnswer" title="点击展开答案">
        <span class="overlay-text">点击翻牌查看解析</span>
      </div>
    </div>
    
    <!-- Anki Rating Feedback Buttons -->
    <div class="quiz-feedback" v-if="isRevealed">
      <div class="feedback-header">
        <span class="feedback-title">🎯 记忆反馈 (同步 Anki 艾宾浩斯曲线)：</span>
        <button v-if="cardState && cardState.lastReviewed" class="reset-link" @click="handleReset" title="清除本题复习记录">重置本题</button>
      </div>
      <div class="feedback-buttons">
        <button 
          class="feedback-btn btn-hard" 
          :class="{ 'active': cardState && cardState.lastRating === 'hard' }"
          @click="handleMark('hard')"
        >
          <span class="btn-emoji">❌</span>
          <span class="btn-text">
            <b>完全不会</b>
            <small>纳入今日错题攻坚</small>
          </span>
        </button>

        <button 
          class="feedback-btn btn-medium" 
          :class="{ 'active': cardState && cardState.lastRating === 'medium' }"
          @click="handleMark('medium')"
        >
          <span class="btn-emoji">⚠️</span>
          <span class="btn-text">
            <b>模糊/犹豫</b>
            <small>明日再次强化</small>
          </span>
        </button>

        <button 
          class="feedback-btn btn-easy" 
          :class="{ 'active': cardState && cardState.lastRating === 'easy' }"
          @click="handleMark('easy')"
        >
          <span class="btn-emoji">✅</span>
          <span class="btn-text">
            <b>熟练掌握</b>
            <small>拉长复习周期</small>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAnki } from '../useAnki'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const isRevealed = ref(false)
const { markHard, markMedium, markEasy, resetCard, getCardState } = useAnki()

const revealAnswer = () => {
  isRevealed.value = true
}

const cardState = computed(() => getCardState(props.id))

const nextDueStr = computed(() => {
  if (!cardState.value || !cardState.value.lastReviewed) return '尚未背诵'
  const diff = cardState.value.dueDate - Date.now()
  if (diff <= 0) return '今日到期'
  const hours = Math.round(diff / (60 * 60 * 1000))
  if (hours < 24) return `${hours}小时后`
  const days = Math.round(diff / (24 * 60 * 60 * 1000))
  return `${days}天后`
})

const handleMark = (level) => {
  if (level === 'hard') markHard(props.id)
  else if (level === 'medium') markMedium(props.id)
  else if (level === 'easy') markEasy(props.id)
}

const handleReset = () => {
  resetCard(props.id)
}
</script>

<style scoped>
.quiz-card {
  margin: 1.8rem 0;
  padding: 1.4rem 1.6rem;
  border-radius: 14px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.quiz-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

.card-status-pill {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
  font-size: 0.8rem;
}

.pill {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 6px;
  font-weight: 600;
}
.pill.hard { background: rgba(239, 68, 68, 0.12); color: #ef4444; }
.pill.medium { background: rgba(245, 158, 11, 0.12); color: #f59e0b; }
.pill.easy { background: rgba(16, 185, 129, 0.12); color: #10b981; }

.pill-due {
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
}

.quiz-question {
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.6;
  color: var(--vp-c-text-1);
}

.quiz-actions {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

.reveal-btn {
  padding: 0.55rem 1.6rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: transform 0.15s, opacity 0.15s;
  box-shadow: 0 3px 12px rgba(100, 108, 255, 0.3);
}

.reveal-btn:hover {
  transform: translateY(-1px);
  opacity: 0.95;
}

.quiz-answer-container {
  position: relative;
  border-top: 1px dashed var(--vp-c-divider);
  padding-top: 1rem;
  margin-top: 1rem;
}

.quiz-answer-container.blurred {
  max-height: 110px;
  overflow: hidden;
  filter: blur(4.5px);
  opacity: 0.35;
  user-select: none;
}

.quiz-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
}

.overlay-text {
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.2s;
}

.quiz-answer-container.blurred:hover .overlay-text {
  opacity: 1;
}

.quiz-answer {
  color: var(--vp-c-text-2);
  line-height: 1.7;
}

.quiz-feedback {
  margin-top: 1.2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

.feedback-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.7rem;
}

.feedback-title {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  font-weight: 500;
}

.reset-link {
  background: none;
  border: none;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  cursor: pointer;
  text-decoration: underline;
}
.reset-link:hover {
  color: #ef4444;
}

.feedback-buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.feedback-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.6rem 0.8rem;
  border-radius: 10px;
  border: 1.5px solid transparent;
  cursor: pointer;
  background: var(--vp-c-bg-alt);
  transition: all 0.15s ease;
  text-align: left;
}

.btn-emoji {
  font-size: 1.2rem;
}

.btn-text {
  display: flex;
  flex-direction: column;
}

.btn-text b {
  font-size: 0.9rem;
}

.btn-text small {
  font-size: 0.72rem;
  opacity: 0.75;
}

.btn-hard {
  color: #ef4444;
}
.btn-hard:hover, .btn-hard.active {
  background: rgba(239, 68, 68, 0.1);
  border-color: #ef4444;
}
.btn-hard.active {
  background: #ef4444;
  color: #fff;
}

.btn-medium {
  color: #f59e0b;
}
.btn-medium:hover, .btn-medium.active {
  background: rgba(245, 158, 11, 0.1);
  border-color: #f59e0b;
}
.btn-medium.active {
  background: #f59e0b;
  color: #fff;
}

.btn-easy {
  color: #10b981;
}
.btn-easy:hover, .btn-easy.active {
  background: rgba(16, 185, 129, 0.1);
  border-color: #10b981;
}
.btn-easy.active {
  background: #10b981;
  color: #fff;
}

@media (max-width: 640px) {
  .feedback-buttons {
    grid-template-columns: 1fr;
  }
}
</style>
