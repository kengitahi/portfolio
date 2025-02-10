<script>
export default {
  props: {
    anchor: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <a
    :href="link"
    class="text-xl md:text-2xl lg:text-3xl font-bold text-primary cursor-pointer hover:underline"
  >
    {{ anchor }}
  </a>
</template>
