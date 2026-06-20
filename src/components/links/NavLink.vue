<script setup>
defineProps({
  anchor: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <router-link :to="link" class="text-silver text-lg hover:text-primary hover:cursor-pointer">{{
    anchor
  }}</router-link>
</template>
