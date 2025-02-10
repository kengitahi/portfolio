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
  <h3 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray cursor-pointer">
    {{ text }}
  </h3>
</template>
