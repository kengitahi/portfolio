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
  <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray">{{ title }}</h2>
</template>
