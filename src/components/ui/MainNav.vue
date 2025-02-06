<script setup>
import MainLogo from '../../assets/imgs/main-logo.png'
import MobileLogo from '../../assets/imgs/mobile-logo.png'
import NavLink from '../links/NavLink.vue'
</script>

<template>
  <nav class="main-nav flex items-center justify-between">
    <div class="logo">
      <img :src="MainLogo" alt="Main Logo" class="hidden md:block max-w-[200px]" />
      <img :src="MobileLogo" alt="Mobile Logo" class="block md:hidden max-w-[48px]" />
    </div>
    <div class="main-nav">
      <ul class="flex items-center gap-4">
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
