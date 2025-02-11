<template>
  <div class="grid md:grid-cols-2 gap-6 items-center">
    <div>image of me</div>
    <div>
      <SectionSubTitle subtitle="My Intro" />
      <SectionTitle title="About Me" class="mt-0" />
      <SectionDescription />
    </div>
  </div>
</template>

<script setup>
import SectionTitle from '../typography/SectionTitle.vue'
import SectionSubTitle from '../typography/SectionSubtitle.vue'
import SectionDescription from '../typography/SectionDescription.vue'
</script>
