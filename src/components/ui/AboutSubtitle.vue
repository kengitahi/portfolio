<script setup>
defineProps({
  subtitle: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <p class="capitalize">
    {{ subtitle }}
  </p>
</template>
