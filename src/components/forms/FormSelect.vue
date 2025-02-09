<template>
  <div class="select-container w-full mb-4">
    <div class="select-wrapper relative w-full" :class="{ 'is-error': hasError }">
      <select
        :id="id"
        :value="modelValue"
        class="custom-select w-full pt-2.5 pb-2.5 pl-3 pr-1 text-base text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary cursor-pointer bg-gray/10 bg-opacity-20 disabled:bg-primary/30 disabled:cursor-not-allowed"
        :class="{ 'is-invalid': hasError }"
        @change="$emit('update:modelValue', $event.target.value)"
        :disabled="disabled"
        :required="required"
      >
        <option value="" disabled selected v-if="placeholder">
          {{ placeholder }}
        </option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.label }}
        </option>
      </select>
      <div class="select-arrow"></div>
    </div>
    <span v-if="hasError" class="error-message">{{ errorMessage }}</span>
    <span v-if="helpText" class="help-text block mt-1.5 text-sm text-[#6b7280]">{{
      helpText
    }}</span>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  helpText: {
    type: String,
    default: '',
  },
  errorMessage: {
    type: String,
    default: '',
  },
  hasError: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array,
    required: true,
    // Each option should have { value: '', label: '' }
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Select an option',
  },
  id: {
    type: String,
    default: () => `select-${Math.random().toString(36).substr(2, 9)}`,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  hasError: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: 'Please select a valid option',
  },
  helpText: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue', 'change'])
</script>

<style scoped>
.custom-select {
  appearance: none;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

.select-arrow {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #6b7280;
  pointer-events: none;
}

.is-error .custom-select {
  border-color: #dc2626;
}

.is-error .custom-select:focus {
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

.error-message {
  display: block;
  margin-top: 0.375rem;
  font-size: 0.875rem;
  color: #dc2626;
}
</style>
