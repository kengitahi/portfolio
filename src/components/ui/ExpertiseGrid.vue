<script>
import SectionText from '../typography/SectionText.vue'

export default {
  components: {
    SectionText,
  },
}
</script>

<template>
  <section>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(128px,1fr))] gap-8">
      <div class="flex items-center justify-center">
        <SectionText text="PHP" />
      </div>
      <div class="flex items-center justify-center">
        <SectionText text="JavaScript" />
      </div>
      <div class="flex items-center justify-center">
        <SectionText text="Vue" />
      </div>
      <div class="flex items-center justify-center">
        <SectionText text="Laravel" />
      </div>
    </div>
  </section>
</template>
