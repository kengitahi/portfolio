import '@/assets/css/main.css'
import { initStickySection } from './assets/js/stickySection'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

document.addEventListener('DOMContentLoaded', () => {
  initStickySection()
})
