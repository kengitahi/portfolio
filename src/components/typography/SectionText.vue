<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <p class="text-lg md:text-xl font-medium text-gray tracking-wide">
    {{ text }}
  </p>
</template>
