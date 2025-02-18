<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div class="flex flex-col min-w-[25%]">
    <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">{{ number }}</h3>
    <p class="text-lg md:text-xl font-medium text-silver tracking-wide">{{ title }}</p>
  </div>
</template>
