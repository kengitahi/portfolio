<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="bg-slate placeholder:text-silver bg-opacity-20 px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary text-white tracking-wide"
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
