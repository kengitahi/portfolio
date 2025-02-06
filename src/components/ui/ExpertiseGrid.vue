<script>
import ExpertiseText from '../typography/ExpertiseText.vue'

export default {
  components: {
    ExpertiseText,
  },
}
</script>

<template>
  <section>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(128px,1fr))] gap-8">
      <div class="flex items-center justify-center">
        <ExpertiseText expertise="PHP" />
      </div>
      <div class="flex items-center justify-center">
        <ExpertiseText expertise="JavaScript" />
      </div>
      <div class="flex items-center justify-center">
        <ExpertiseText expertise="Vue" />
      </div>
      <div class="flex items-center justify-center">
        <ExpertiseText expertise="Laravel" />
      </div>
    </div>
  </section>
</template>
