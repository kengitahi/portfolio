<script>
export default {
  props: {
    expertise: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <p class="w-32 h-auto object-contain text-gray">
    {{ expertise }}
  </p>
</template>
