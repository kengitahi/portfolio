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
  <p
    class="text-md md:text-lg mb-2 bg-primary text-ui px-6 py-2 rounded-sm hover:bg-secondary font-semibold tracking-wider w-fit flex items-center"
  >
    <span class="mr-2 h-6 w-6 flex items-center">
      <slot name="icon" />
    </span>
    {{ text }}
  </p>
</template>
