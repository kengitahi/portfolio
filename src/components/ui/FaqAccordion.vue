<template>
  <section class="faq-container pt-15">
    <SectionTitle title="FAQ" />
    <SectionSubtitle subtitle="Frequently Asked Questions" class="mb-4" />
    <!-- Main sections -->
    <div
      v-for="(section, sectionIndex) in faqData.faqSections"
      :key="section.id"
      class="section-accordion cursor-pointer relative flex text-white text-lg md:text-xl font-semibold tracking-wide flex-col border-[2px] border-gray rounded-md mb-4 hover:border-primary"
    >
      <div
        class="section-header group hover:bg-primary hover:text-ui text-white flex justify-between items-center p-4 text-xl"
        :class="{ active: activeSectionIndex === sectionIndex }"
        @click="toggleSection(sectionIndex)"
      >
        <span>{{ section.title }}</span>
        <span class="icon text-primary group-hover:text-ui">▼</span>
      </div>

      <div
        class="section-content"
        :style="{ display: activeSectionIndex === sectionIndex ? 'block' : 'none' }"
      >
        <!-- Questions within each section -->
        <div
          v-for="(item, questionIndex) in section.questions"
          :key="item.id"
          class="question-accordion rounded-md bg-slate overflow-hidden m-3"
        >
          <div
            class="question-header group hover:bg-primary hover:text-ui text-white flex justify-between items-center p-4"
            :class="{
              active: activeQuestionIndex === questionIndex && activeSectionIndex === sectionIndex,
            }"
            @click="toggleQuestion(sectionIndex, questionIndex)"
          >
            <span>{{ item.question }}</span>
            <span class="icon text-primary group-hover:text-ui">▼</span>
          </div>

          <div
            class="question-content bg-slate/50 text-silver p-4 text-base md:text-lg font-medium border-t-[1.5px] border-silver/20"
            :style="{
              display:
                activeQuestionIndex === questionIndex && activeSectionIndex === sectionIndex
                  ? 'block'
                  : 'none',
            }"
          >
            <!-- Handle both string answers and complex answers with lists -->
            <template v-if="typeof item.answer === 'string'">
              <p>{{ item.answer }}</p>
            </template>
            <template v-if="Array.isArray(item.answer.text)">
              <p v-for="answer in item.answer.text" :key="answer" class="my-2">
                {{ answer }}
              </p>
            </template>
            <template v-else>
              <p>{{ item.answer.text }}</p>
              <ul v-if="item.answer.list" class="my-2 pl-6 list-disc list-inside">
                <li v-for="(listItem, index) in item.answer.list" :key="index">{{ listItem }}</li>
              </ul>
              <p v-if="item.answer.conclusion">{{ item.answer.conclusion }}</p>
            </template>
            <PrimaryBtnLink
              v-if="item.contact == true"
              anchor="Contact Me"
              link="#contact"
              class="mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import SectionTitle from '@/components/typography/SectionTitle.vue'
import SectionSubtitle from '@/components/typography/SectionSubtitle.vue'
import PrimaryBtnLink from '@/components/links/PrimaryBtnLink.vue'

import faqData from '@/data/faqData.json'

let activeSectionIndex = ref(null)
let activeQuestionIndex = ref(null)

export default {
  name: 'FaqAccordion',
  components: {
    SectionTitle,
    SectionSubtitle,
    PrimaryBtnLink,
  },
  data() {
    return {
      faqData: faqData,
      activeSectionIndex: null,
      activeQuestionIndex: null,
    }
  },
  methods: {
    toggleSection(sectionIndex) {
      // If clicking on the same section, toggle it
      if (this.activeSectionIndex === sectionIndex) {
        this.activeSectionIndex = null
        this.activeQuestionIndex = null
      } else {
        // Open the clicked section and close others
        this.activeSectionIndex = sectionIndex
        this.activeQuestionIndex = null
      }
    },
    toggleQuestion(sectionIndex, questionIndex) {
      // Prevent event bubbling
      event.stopPropagation()

      // If clicking on the same question, toggle it
      if (this.activeQuestionIndex === questionIndex && this.activeSectionIndex === sectionIndex) {
        this.activeQuestionIndex = null
      } else {
        // Open the clicked question and close others
        this.activeQuestionIndex = questionIndex
      }
    },
  },
}
</script>

<style scoped>
.section-header,
.question-header {
  transition: background-color 0.3s ease;
}

.section-header.active .icon,
.question-header.active .icon {
  transform: rotate(180deg);
}

div:has(.section-header.active) {
  border-color: #ffaf29;
}

.question-content {
  height: 0;
  transition: height 0.3s ease;
}

div:has(.question-header.active) .question-content {
  height: auto;
}

.icon {
  transition: transform 0.3s ease;
}
</style>
