<template>
  <button
    class="bg-primary text-gray px-6 py-2 rounded-sm hover:bg-secondary font-semibold tracking-wider hover:cursor-pointer"
  >
    <slot name="prependIcon" />
    {{ label }}
    <slot name="appendIcon" />
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: 'Primary button',
  },
  type: {
    type: String,
    default: 'button',
  },
})
</script>
