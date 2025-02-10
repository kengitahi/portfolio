<script setup>
import MainNav from './components/ui/MainNav.vue'
import MobileNav from './components/ui/MobileNav.vue'

import HomeHero from './components/sections/HomeHero.vue'
import HomeServices from './components/sections/HomeServices.vue'
import HomeExpertise from './components/sections/HomeExpertise.vue'
import PortfolioGrid from './components/sections/PortfolioGrid.vue'
import AboutSection from './components/sections/AboutSection.vue'
import FaqAccordion from './components/ui/FaqAccordion.vue'

import { ref } from 'vue'
import ContactSection from './components/sections/ContactSection.vue'
import MainFooter from './components/sections/MainFooter.vue'
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
    <HomeServices id="services" />
    <HomeExpertise />
    <PortfolioGrid id="projects" />
    <AboutSection id="about" />
    <FaqAccordion id="faq" />
    <ContactSection id="contact" />
    <MainFooter />
  </main>
</template>

<style scoped></style>
