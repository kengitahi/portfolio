<script setup>
import SectionTitle from '../typography/SectionTitle.vue'
import SectionSubtitle from '../typography/SectionSubtitle.vue'
import SectionDescription from '../typography/SectionDescription.vue'
import ExpertiseGrid from '../ui/ExpertiseGrid.vue'
</script>

<template>
  <section class="pt-15">
    <SectionTitle title="Expertise" />
    <SectionSubtitle subtitle="My Tech Stack" class="mb-4" />
    <ExpertiseGrid />
  </section>
</template>
