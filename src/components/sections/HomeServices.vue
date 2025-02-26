<script setup>
import SectionTitle from '@/components/typography/SectionTitle.vue'
import SectionSubTitle from '@/components/typography/SectionSubtitle.vue'
import SectionDescription from '@/components/typography/SectionDescription.vue'
import ServiceCard from '@/components/ui/ServiceCard.vue'
import SectionStat from '@/components/ui/SectionStat.vue'

import { services } from '../../data/Services'
</script>

<template>
  <!-- Services section -->
  <section class="grid lg:grid-cols-2 gap-6 pt-15 relative mt-8" id="services">
    <div
      class="section-title-sticky relative lg:sticky top-0 !h-fit md:h-[100vh]"
      id="sticky-section"
    >
      <SectionTitle title="Services" />
      <SectionSubTitle subtitle="What I Do For My Clients" />
      <SectionDescription />
      <div
        class="justify-between hidden lg:grid gap-6 mx-auto grid-cols-[repeat(auto-fit,minmax(128px,1fr))]"
      >
        <SectionStat title="Projects Completed" number="50+" />
        <SectionStat title="Happy Clients" number="20+" />
      </div>
    </div>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
      <ServiceCard v-for="service in services" :key="service.id" :service="service" />
    </div>
  </section>
</template>

<style scoped></style>
