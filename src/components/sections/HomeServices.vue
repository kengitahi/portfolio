<script setup>
import SectionTitle from '../typography/SectionTitle.vue'
import SectionDescription from '../typography/SectionDescription.vue'
import ServiceCard from '../ui/ServiceCard.vue'

import SectionStat from '../ui/SectionStat.vue'
</script>

<template>
  <section class="grid md:grid-cols-2 gap-6 items-center">
    <div class="space-y-4">
      <SectionTitle title="What I Do For My Clients" />
      <SectionDescription />
      <div class="grid grid-cols-4 gap-6 justify-between justify-center grid gap-6 mx-auto grid-cols-[repeat(auto-fit,minmax(128px,1fr))]">
        <SectionStat title="Projects Completed" number="123" />
        <SectionStat title="Happy Clients" number="456" />
        <SectionStat title="Awards Won" number="789" />
      </div>
    </div>
    <div class="grid md:grid-cols-2 gap-6">
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  </section>
</template>
