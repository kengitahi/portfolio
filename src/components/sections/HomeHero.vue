<script setup>
import HeroHeading from '../typography/HeroHeading.vue'
import HeroDescription from '../typography/HeroDescription.vue'
import HeroButtons from '../ui/HeroButtons.vue'
</script>

<template>
  <section class="my-20 md:my-40 items-center flex flex-col text-center space-y-4">
    <HeroHeading />
    <HeroDescription />
    <HeroButtons />
  </section>
</template>
