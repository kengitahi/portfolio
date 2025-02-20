<script setup>
import PrimaryBtn from '../buttons/PrimaryBtn.vue'
import PrimaryBtnLink from '../links/PrimaryBtnLink.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBriefcase, faLaptopFile } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div class="flex items-center gap-6 flex-col md:flex-row">
    <PrimaryBtnLink link="/#services" anchor="What I Do">
      <template #prependIcon>
        <FontAwesomeIcon :icon="faBriefcase" />
      </template>
    </PrimaryBtnLink>
    <PrimaryBtnLink link="/#projects" anchor="Past Projects">
      <template #prependIcon>
        <FontAwesomeIcon :icon="faLaptopFile" />
      </template>
    </PrimaryBtnLink>
  </div>
</template>
