<template>
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="opacity-0 translate-y-full"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-full"
  >
    <a
      href="/#app"
      class="back-to-top gap-2 flex items-center justify-center flex-col bg-primary text-ui w-fit p-4 rounded-sm fixed bottom-4 right-4 text-center z-50 cursor-pointer font-bold tracking-wide hover:underline"
      v-if="showBackToTop"
      @click="scrollToTop"
      ><FontAwesomeIcon :icon="faChevronUp" :height="48" />Back to top
    </a>
  </Transition>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const showBackToTop = ref(false)
    const lastScrollTop = ref(0)
    const scrollThreshold = ref(300) // Show button after scrolling 300px

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    onMounted(() => {
      window.addEventListener('scroll', () => {
        const currentScrollTop = window.scrollY || document.documentElement.scrollTop

        // Check if scrolling up and past the threshold
        if (currentScrollTop < lastScrollTop.value && currentScrollTop > scrollThreshold.value) {
          showBackToTop.value = true
        }
        // Hide when scrolling down or back to top
        else if (
          currentScrollTop <= scrollThreshold.value ||
          currentScrollTop > lastScrollTop.value
        ) {
          showBackToTop.value = false
        }
        lastScrollTop.value = currentScrollTop
      })
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', () => {})
    })

    return {
      faChevronUp,
      showBackToTop,
      scrollToTop,
    }
  },
}
</script>
