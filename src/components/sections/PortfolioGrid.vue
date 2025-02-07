<!-- Portfolio.vue -->
<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Portfolio Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="project in projects"
        :key="project.id"
        class="relative group cursor-pointer"
        @click="openModal(project)"
      >
        <div class="relative overflow-hidden rounded-lg shadow-lg">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50" />
          <h3 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold text-center">
            {{ project.title }}
          </h3>
        </div>
      </div>
    </div>

    <!-- Project Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click="closeModal"
    >
      <div
        class="bg-white rounded-lg max-w-2xl w-full mx-4 overflow-hidden"
        @click.stop
      >
        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <h2 class="text-2xl font-bold">{{ selectedProject.title }}</h2>
            <button
              @click="closeModal"
              class="text-gray-500 hover:text-gray-700"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <img
            :src="selectedProject.image"
            :alt="selectedProject.title"
            class="w-full h-64 object-cover rounded-lg"
          />
          <p class="mt-4 text-gray-600">
            {{ selectedProject.description }}
          </p>
          <a
            :href="selectedProject.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                clip-rule="evenodd"
              />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Sample portfolio data - replace with your own
const projects = ref([
  {
    id: 1,
    title: "Project One",
    image: "/path/to/image1.jpg",
    description: "A full-stack web application built with Vue.js and Node.js",
    githubUrl: "https://github.com/username/project-one"
  },
  {
    id: 2,
    title: "Project Two",
    image: "/path/to/image2.jpg",
    description: "Mobile-first responsive design with modern CSS features",
    githubUrl: "https://github.com/username/project-two"
  },
  {
    id: 3,
    title: "Project Three",
    image: "/path/to/image3.jpg",
    description: "Real-time data visualization dashboard",
    githubUrl: "https://github.com/username/project-three"
  },
  {
    id: 4,
    title: "Project Four",
    image: "/path/to/image4.jpg",
    description: "AI-powered content management system",
    githubUrl: "https://github.com/username/project-four"
  },
  {
    id: 5,
    title: "Project Five",
    image: "/path/to/image5.jpg",
    description: "E-commerce platform with integrated payment processing",
    githubUrl: "https://github.com/username/project-five"
  },
  {
    id: 6,
    title: "Project Six",
    image: "/path/to/image6.jpg",
    description: "Social media analytics tool",
    githubUrl: "https://github.com/username/project-six"
  }
])

const showModal = ref(false)
const selectedProject = ref(null)

const openModal = (project) => {
  selectedProject.value = project
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedProject.value = null
}
</script>
