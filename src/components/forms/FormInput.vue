<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="bg-gray/10 bg-opacity-20 px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
  />
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue'])
</script>
