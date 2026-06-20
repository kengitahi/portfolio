// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import RPConsulting from '@/views/projects/RPConsulting.vue'
import POSSystem from '@/views/projects/POSSystem.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/projects/rp-consulting', name: 'rp-consulting', component: RPConsulting },
  { path: '/projects/pos-system', name: 'pos-system', component: POSSystem },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router
