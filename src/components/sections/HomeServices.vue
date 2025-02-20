<script setup>
import SectionTitle from '../typography/SectionTitle.vue'
import SectionDescription from '../typography/SectionDescription.vue'
import ServiceCard from '../ui/ServiceCard.vue'
import SectionStat from '../ui/SectionStat.vue'

import { services } from '../../data/Services'
</script>

<template>
  <section class="grid lg:grid-cols-2 gap-6 items-center pt-15">
    <div class="space-y-4">
      <SectionTitle title="What I Do For My Clients" />
      <SectionDescription />
      <div
        class="justify-between grid gap-6 mx-auto grid-cols-[repeat(auto-fit,minmax(128px,1fr))]"
      >
        <SectionStat title="Projects Completed" number="50+" />
        <SectionStat title="Happy Clients" number="20+" />
      </div>
    </div>
    <div class="grid md:grid-cols-2 gap-6">
      <ServiceCard v-for="service in services" :key="service.id" :service="service" />
    </div>
  </section>
</template>
