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

<style scoped>
/* Target Chrome, Safari, and newer Edge */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px #1a1a1a inset !important;
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: white;
}

/* For Firefox */
input:autofill,
input:autofill:hover,
input:autofill:focus {
  box-shadow: 0 0 0px 1000px #1a1a1a inset !important;
  -webkit-text-fill-color: white;
}
</style>
