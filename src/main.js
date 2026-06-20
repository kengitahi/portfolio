import './assets/css/main.css'
import { initStickySection } from './assets/js/stickySection'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

document.addEventListener('DOMContentLoaded', () => {
  initStickySection()
})
