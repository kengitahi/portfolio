<template>
  <a :href="link" class="text-gray text-lg hover:text-primary hover:cursor-pointer">
    <slot name="icon" />
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
  },
}
</script>
