<template>
  <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold flex flex-col md:flex-row">
    <span class="text-white">I am a&nbsp;</span>
    <span class="text-primary">
      <vue-typewriter-effect :strings="texts" :loop="true" :shuffle="true" />Developer.
    </span>
  </h2>
</template>

<script>
import VueTypewriterEffect from 'vue-typewriter-effect'

export default {
  components: {
    VueTypewriterEffect,
  },
  data() {
    return {
      texts: ['PHP', 'Laravel', 'Vue.Js', 'Next.js', 'Frontend', 'Backend'],
    }
  },
}
</script>
