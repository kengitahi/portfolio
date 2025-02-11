<script setup>
defineProps({
  subtitle: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <p class="capitalize text-gray text-md md:text-lg font-medium mb-0 tracking-wide">
    {{ subtitle }}
  </p>
</template>
