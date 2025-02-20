<script setup>
import HeroHeading from '../typography/HeroHeading.vue'
import HeroDescription from '../typography/HeroDescription.vue'
import HeroButtons from '../ui/HeroButtons.vue'
</script>

<template>
  <section class="mt-15 md:mt-30 items-center flex flex-col text-center space-y-4 tracking-wide">
    <HeroHeading />
    <HeroDescription />
    <HeroButtons />
    <div
      class="text-white text-2xl motion-safe:animate-bounce items-center justify-center mx-auto hidden md:block delay-500 mt-10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill=""
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-12 text-primary"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </div>
  </section>
</template>
