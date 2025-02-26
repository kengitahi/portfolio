<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white my-2">{{ title }}</h2>
</template>
