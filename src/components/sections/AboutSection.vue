<template>
  <div class="grid md:grid-cols-2 gap-6 items-center">
    <div>image of me</div>
    <div>
      <AboutSubTitle subtitle="My Intro" />
      <SectionTitle title="About Me" />
    </div>
  </div>
</template>

<script setup>
import SectionTitle from '../typography/SectionTitle.vue'
import AboutSubTitle from '../ui/AboutSubtitle.vue'
</script>
