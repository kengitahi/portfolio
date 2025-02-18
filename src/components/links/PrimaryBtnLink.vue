<template>
  <a
    :href="link"
    :class="[
      'bg-primary text-ui capitalize px-6 py-2 rounded-sm hover:bg-secondary font-semibold tracking-wider cursor-pointer flex items-center gap-2 hover:underline hover:text-primary hover:bg-transparent border border-transparent hover:border-inherit transition-all duration-300 ease-in-out hover:shadow-md',
      $attrs.class,
    ]"
    v-bind="$attrs"
  >
    <slot name="prependIcon" />
    {{ anchor }}
    <slot name="icon" />
  </a>
</template>

<script setup>
defineProps({
  link: {
    type: String,
    default: '/',
  },
  anchor: {
    type: String,
    default: 'button',
  },
})
</script>
