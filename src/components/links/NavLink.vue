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
  <a :href="link" class="text-gray text-lg hover:text-primary hover:cursor-pointer">{{ anchor }}</a>
</template>
