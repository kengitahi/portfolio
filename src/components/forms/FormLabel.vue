<template>
  <label class="text-gray text-md font-bold mb-0" :for="forId">{{ label }}</label>
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
