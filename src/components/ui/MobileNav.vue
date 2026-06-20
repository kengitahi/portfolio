<script setup>
import MobileLogo from '../../assets/imgs/mobile-logo.png'
import NavLink from '../links/NavLink.vue'
import MenuIcon from '../icons/MenuIcon.vue'
import CloseIcon from '../icons/CloseIcon.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const bodyEl = document.body
const emit = defineEmits(['blurMain'])
const route = useRoute()

const toggleMenu = function () {
  isMenuOpen.value = !isMenuOpen.value
  emit('blurMain', isMenuOpen.value)
  if (bodyEl.classList.contains('fixed')) {
    bodyEl.classList.remove('fixed')
    bodyEl.classList.remove('!bg-slate')
  } else {
    bodyEl.classList.add('fixed')
    bodyEl.classList.add('!bg-slate')
  }
}

const closeMenu = function () {
  if (isMenuOpen.value) {
    isMenuOpen.value = false
    emit('blurMain', false)
    bodyEl.classList.remove('fixed')
    bodyEl.classList.remove('!bg-slate')
  }
}

// Primary: closes the menu when the route actually changes
watch(
  () => [route.path, route.hash],
  () => {
    closeMenu()
  },
)
</script>
<template>
  <nav class="main-nav flex flex-col">
    <div class="flex items-center justify-between">
      <router-link to="/">
        <img :src="MobileLogo" alt="Mobile Logo" class="max-w-12" />
      </router-link>
      <div class="menu-icon flex items-end flex-col">
        <MenuIcon @click="toggleMenu" v-if="!isMenuOpen" />
        <CloseIcon @click="toggleMenu" v-if="isMenuOpen" />
      </div>
    </div>
    <div
      class="mobile-nav mt-12 absolute bg-slate p-4 z-10 w-full right-0 shadow-lg border-t border-t-gray/10 rounded-bl-md rounded-br-md"
      v-if="isMenuOpen"
      @click="closeMenu"
    >
      <ul class="flex items-center gap-6 flex-col">
        <li>
          <NavLink anchor="Home" link="/" />
        </li>
        <li>
          <NavLink anchor="Services" link="/#services" />
        </li>
        <li>
          <NavLink anchor="Projects" link="/#projects" />
        </li>
        <li>
          <NavLink anchor="About" link="/#about" />
        </li>
        <li>
          <NavLink anchor="FAQ" link="/#faq" />
        </li>
        <li>
          <NavLink anchor="Contact" link="/#contact" />
        </li>
      </ul>
    </div>
  </nav>
</template>
