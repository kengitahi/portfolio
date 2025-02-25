<script setup>
import GlobeIcon from '../icons/GlobeIcon.vue'
defineProps({
  service: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="service-card space-y-2 bg-slate p-4 rounded-sm shadow-lg">
    <div class="bg-primary w-fit p-2 rounded-sm text-ui">
      <img
        v-if="service.icon"
        :src="service.icon"
        :alt="service.title"
        class="w-full h-16 object-cover"
      />
      <GlobeIcon v-else class="w-full h-16 object-cover" />
    </div>
    <div class="text-xl md:text-2xl font-semibold tracking-wide text-white">
      {{ service.title }}
    </div>
    <div class="text-silver text-md md:text-lg">{{ service.description }}</div>
  </div>
</template>
