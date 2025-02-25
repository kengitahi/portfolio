<script setup>
defineProps({
  subtitle: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <p class="capitalize text-lg md:text-xl font-medium text-silver mb-0 tracking-wide">
    {{ subtitle }}
  </p>
</template>
