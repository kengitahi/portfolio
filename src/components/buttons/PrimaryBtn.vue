<template>
  <button
    class="bg-primary text-ui px-6 py-2 rounded-sm hover:bg-secondary font-semibold tracking-wider hover:cursor-pointer hover:underline hover:text-primary hover:bg-transparent border border-transparent hover:border-inherit transition-all duration-300 ease-in-out hover:shadow-md text-md md:text-lg"
    :class="{ 'opacity-50 cursor-not-allowed': disabled }"
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
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
button:disabled {
  cursor: not-allowed;
  opacity: 50%;
}
</style>
