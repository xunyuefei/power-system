import DefaultTheme from 'vitepress/theme'
import QuizCard from './components/QuizCard.vue'
import GlobalReview from './components/GlobalReview.vue'
import ChapterDeck from './components/ChapterDeck.vue'
import NotesHub from './components/NotesHub.vue'
import 'katex/dist/katex.min.css'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('QuizCard', QuizCard)
    app.component('GlobalReview', GlobalReview)
    app.component('ChapterDeck', ChapterDeck)
    app.component('NotesHub', NotesHub)
  }
}
