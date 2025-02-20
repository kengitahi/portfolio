<!-- Portfolio.vue -->
<template>
  <section class="pt-15">
    <SectionTitle title="Portfolio" />
    <SectionDescription />
    <!-- Portfolio Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <div
        v-for="project in projects"
        :key="project.id"
        class="relative group cursor-pointer"
        @click="openModal(project)"
        role="button"
        tabindex="0"
        @keydown.enter="openModal(project)"
      >
        <div class="relative overflow-hidden rounded-sm shadow-lg group">
          <img
            :src="project.mainImage"
            :alt="project.title"
            class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <PrimaryBtn
            :label="'View Details'"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 peer hover:cursor-pointer hidden group-hover:block transition-all duration-500 ease-in-out text-ui hover:!bg-primary hover:text-ui font-semibold"
            @click="openModal(project)"
          />
          <div
            class="absolute inset-0 bg-black/10 transition-opacity duration-300 peer-hover:bg-black/80 hover:bg-black/80"
          />
        </div>
        <p
          class="mb-2 mt-4 text-center tracking-wide font-semibold text-lg md:text-xl text-silver capitalize hover:underline"
          @click="openModal(project)"
        >
          {{ project.title }}
        </p>
      </div>
    </div>

    <!-- Project Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div
          v-if="showModal"
          class="fixed inset-0 z-50 overflow-y-auto"
          @click="closeModal"
          @keydown.esc="closeModal"
          tabindex="-1"
          ref="modalRef"
        >
          <div class="flex min-h-full items-center justify-center p-4">
            <!-- Backdrop -->
            <TransitionChild
              enter-active-class="transition-opacity ease-in duration-300"
              enter-from-class="opacity-0"
              enter-to-class="opacity-100"
              leave-active-class="transition-opacity ease-out duration-200"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <div class="fixed inset-0 bg-black/90 bg-opacity-50" />
            </TransitionChild>

            <!-- Modal Content -->
            <div
              class="relative bg-slate rounded-lg max-w-2xl w-full mx-4 overflow-hidden shadow-xl transform transition-all"
              :class="modalClasses"
              @click.stop
            >
              <div class="p-6">
                <!-- Header -->
                <div class="flex justify-between items-start mb-4">
                  <h2
                    :class="[
                      'text-2xl font-bold capitalize text-white tracking-wide',
                      titleClasses,
                    ]"
                  >
                    {{ selectedProject.title }}
                  </h2>
                  <button
                    @click="closeModal"
                    class="text-primary hover:text-primary transition-colors hover:cursor-pointer"
                    :class="closeButtonClasses"
                    ref="closeButtonRef"
                  >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div class="grid md:grid-cols-2 gap-4">
                  <img
                    :src="selectedProject.modalImage"
                    :alt="selectedProject.title"
                    :class="['w-full h-64 object-cover rounded-lg', imageClasses]"
                  />

                  <div>
                    <!-- Description -->
                    <p :class="[' text-silver tracking-wide', descriptionClasses]">
                      {{ selectedProject.description }}
                    </p>
                    <p class="mt-4">
                      <span class="font-bold text-lg text-white tracking-wide"
                        >Technologies Used:
                      </span>
                      <span class="text-silver tracking-wide">{{
                        selectedProject.technologies
                      }}</span>
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-4 mt-4 flex-col md:flex-row">
                  <!-- GitHub Link -->
                  <a
                    v-if="selectedProject.githubLink"
                    :href="selectedProject.githubLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    :class="[
                      'inline-flex items-center cursor-pointer',
                      githubLinkClasses ||
                        'text-blue-500 border border-blue-500 hover:underline hover:text-ui hover:bg-primary px-6 py-2 rounded-sm hover:border-primary font-semibold tracking-wider transition-all duration-300 ease-in-out',
                    ]"
                  >
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    {{ githubLinkText || 'View on GitHub' }}
                  </a>
                  <PrimaryBtnLink
                    v-if="selectedProject.liveUrl"
                    :href="selectedProject.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    :link="selectedProject.liveUrl"
                    :anchor="liveUrlText || 'Visit Live Project'"
                    class="text-ui"
                  >
                    <template #icon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </template>
                  </PrimaryBtnLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { projects } from '../../data/Projects'
import PrimaryBtn from '../buttons/PrimaryBtn.vue'
import PrimaryBtnLink from '../links/PrimaryBtnLink.vue'
import SectionTitle from '../typography/SectionTitle.vue'
import SectionSubtitle from '../typography/SectionSubtitle.vue'
import SectionDescription from '../typography/SectionDescription.vue'

const props = defineProps({
  modalClasses: {
    type: String,
    default: '',
  },
  titleClasses: {
    type: String,
    default: '',
  },
  imageClasses: {
    type: String,
    default: '',
  },
  descriptionClasses: {
    type: String,
    default: '',
  },
  closeButtonClasses: {
    type: String,
    default: '',
  },
  githubLinkClasses: {
    type: String,
    default: '',
  },
  githubLinkText: {
    type: String,
    default: '',
  },
})

const showModal = ref(false)
const selectedProject = ref(null)
const modalRef = ref(null)
const closeButtonRef = ref(null)

// Handle keyboard events
const handleKeyDown = (event) => {
  if (event.key === 'Escape' && showModal.value) {
    closeModal()
  }
}

// Focus management
const focusModal = () => {
  if (closeButtonRef.value) {
    closeButtonRef.value.focus()
  }
}

const openModal = (project) => {
  selectedProject.value = project
  showModal.value = true
  // Wait for the modal to be mounted before focusing
  nextTick(() => {
    focusModal()
  })
}

const closeModal = () => {
  showModal.value = false
  selectedProject.value = null
}

// Add keyboard event listener
onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.inner-title:hover {
  text-decoration: underline;
}
</style>
