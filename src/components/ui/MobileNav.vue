<script setup>
import MobileLogo from '../../assets/imgs/mobile-logo.png'
import NavLink from '../links/NavLink.vue'
import MenuIcon from '../icons/MenuIcon.vue'
import CloseIcon from '../icons/CloseIcon.vue'

import { ref } from 'vue'
const isMenuOpen = ref(false)
const bodyEl = document.body

const emit = defineEmits(['blurMain'])
const toggleMenu = function () {
  isMenuOpen.value = !isMenuOpen.value
  emit('blurMain', isMenuOpen.value)
  if (bodyEl.classList.contains('fixed')) {
    bodyEl.classList.remove('fixed')
  } else {
    bodyEl.classList.add('fixed')
  }
}
</script>

<template>
  <nav class="main-nav flex flex-col">
    <div class="flex items-center justify-between">
      <img :src="MobileLogo" alt="Mobile Logo" class="max-w-[48px]" />
      <div class="menu-icon flex items-end flex-col">
        <MenuIcon @click="toggleMenu" v-if="!isMenuOpen" />
        <CloseIcon @click="toggleMenu" v-if="isMenuOpen" />
      </div>
    </div>
    <div
      class="mobile-nav mt-12 absolute bg-white p-4 z-10 w-full right-0 shadow-lg border-t border-t-gray/10 rounded-bl-md rounded-br-md"
      v-if="isMenuOpen"
    >
      <ul class="flex items-center gap-6 flex-col">
        <li>
          <NavLink anchor="Home" link="/" />
        </li>
        <li>
          <NavLink anchor="Services" link="/services" />
        </li>
        <li>
          <NavLink anchor="Projects" link="/projects" />
        </li>
        <li>
          <NavLink anchor="About" link="/about" />
        </li>
        <li>
          <NavLink anchor="FAQ" link="/faq" />
        </li>
        <li>
          <NavLink anchor="Contact" link="/contact" />
        </li>
      </ul>
    </div>
  </nav>
</template>
