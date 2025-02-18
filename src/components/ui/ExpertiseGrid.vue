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
      <SectionText text="PHP" />
      <SectionText text="JavaScript" />
      <SectionText text="Vue" />
      <SectionText text="Laravel" />
    </div>
  </section>
</template>
