<template>
  <div
    class="accordion-item cursor-pointer mb-2 border-silver rounded-sm border-[2px]"
    :class="{ '!border-primary': isActive }"
  >
    <div
      class="accordion-header p-4 cursor-pointer relative flex items-center text-white text-lg md:text-xl font-semibold mb-0 tracking-wide"
      :class="{ active: isActive }"
      @click="$emit('toggle')"
    >
      {{ question }}
    </div>
    <div class="accordion-content p-4 text-md text-silver" :class="{ active: isActive }">
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
  color: var(--color-primary);
}

.accordion-header.active::after {
  transform: rotate(45deg);
}
</style>
