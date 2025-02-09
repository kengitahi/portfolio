<template>
  <section class="accordion">
    <SectionTitle title="FAQ" />
    <accordion-item
      v-for="(item, index) in faqItems"
      :key="index"
      :question="item.question"
      :answer="item.answer"
      :is-active="activeIndex === index"
      @toggle="toggleItem(index)"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { faqItems } from '../../data/FaqItems'
import AccordionItem from './AccordionItem.vue'
import SectionTitle from '../typography/SectionTitle.vue'

const activeIndex = ref(null)

const toggleItem = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>
