<script setup>
import HomeHero from './components/sections/HomeHero.vue'
import MainNav from './components/ui/MainNav.vue'
import MobileNav from './components/ui/MobileNav.vue'
import HomeServices from './components/sections/HomeServices.vue'

import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>

<template>
  <header>
    <div class="hidden md:block">
      <MainNav />
    </div>
    <div class="md:hidden">
      <MobileNav @blurMain="isMenuOpen = $event" />
    </div>
  </header>

  <main :class="{ 'blur-[4px]': isMenuOpen }" class="flex flex-col">
    <HomeHero />
    <HomeServices />
  </main>
</template>

<style scoped></style>
