<template>
  <div class="accordion-item cursor-pointer mb-2 border border-gray/30 rounded-sm">
    <div
      class="accordion-header p-4 cursor-pointer relative flex items-center"
      :class="{ active: isActive }"
      @click="$emit('toggle')"
    >
      {{ question }}
    </div>
    <div class="accordion-content p-4" :class="{ active: isActive }">
      {{ answer }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionItem',
  props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  padding: 0 15px;
}

.accordion-content.active {
  max-height: 200px;
  padding: 1rem;
  overflow-y: auto;
}

.accordion-header::after {
  content: '+';
  position: absolute;
  right: 1rem;
  transition: transform 0.3s ease;
  font-size: 1.5rem;
}

.accordion-header.active::after {
  transform: rotate(45deg);
}
</style>
