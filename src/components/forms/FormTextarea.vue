<template>
  <textarea
    :placeholder="placeholder"
    class="bg-gray/10 bg-opacity-20 px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary w-full min-h-[200px]"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue'])
</script>
