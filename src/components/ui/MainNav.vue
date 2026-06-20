<script setup>
import MainLogo from '../../assets/imgs/silver-logo.png'
import MobileLogo from '../../assets/imgs/mobile-logo.png'
import NavLink from '../links/NavLink.vue'
</script>
<template>
  <nav class="main-nav flex items-center justify-between">
    <div class="logo">
      <router-link to="/">
        <img :src="MainLogo" alt="Main Logo" class="hidden md:block max-w-50" />
        <img :src="MobileLogo" alt="Mobile Logo" class="block md:hidden size-12" />
      </router-link>
    </div>
    <div class="main-nav">
      <ul class="hidden md:flex items-center gap-6">
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
