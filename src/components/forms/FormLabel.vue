<template>
  <label class="text-gray text-lg md:text-xl font-semibold mb-0 tracking-wide" :for="forId">{{
    label
  }}</label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    forId: {
      type: String,
      required: true,
    },
  },
}
</script>
