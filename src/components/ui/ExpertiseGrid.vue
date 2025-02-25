<script>
import ExpertiseText from '../typography/TextPill.vue'

export default {
  components: {
    ExpertiseText,
  },
}
</script>

<template>
  <section>
    <div class="flex gap-4 flex-wrap">
      <ExpertiseText text="Laravel">
        <template #icon>
          <img src="/icons/laravel.svg" alt="Laravel" />
        </template>
      </ExpertiseText>
      <ExpertiseText text="PHP">
        <template #icon>
          <img src="/icons/php.svg" alt="PHP" />
        </template>
      </ExpertiseText>
      <ExpertiseText text="JavaScript">
        <template #icon>
          <img src="/icons/js.svg" alt="JavaScript" />
        </template>
      </ExpertiseText>
      <ExpertiseText text="Vue.js">
        <template #icon>
          <img src="/icons/vue.svg" alt="Vue.js" />
        </template>
      </ExpertiseText>
      <ExpertiseText text="Next.js">
        <template #icon>
          <img src="/icons/next.svg" alt="Next.js" />
        </template>
      </ExpertiseText>
      <ExpertiseText text="Figma">
        <template #icon>
          <img src="/icons/figma.svg" alt="Figma" />
        </template>
      </ExpertiseText>
      <ExpertiseText text="Git and GitHub">
        <template #icon>
          <img src="/icons/github.svg" alt="Git and GitHub" />
        </template>
      </ExpertiseText>
    </div>
  </section>
</template>
