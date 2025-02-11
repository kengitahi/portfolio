<script setup>
import PrimaryBtn from '../buttons/PrimaryBtn.vue'
import PrimaryBtnLink from '../links/PrimaryBtnLink.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div class="flex items-center gap-6 flex-col md:flex-row">
    <PrimaryBtnLink link="/#about" anchor="About Me">
      <template #prependIcon>
        <FontAwesomeIcon :icon="faUser" />
      </template>
    </PrimaryBtnLink>
    <PrimaryBtnLink link="/#services" anchor="What I Do">
      <template #prependIcon>
        <FontAwesomeIcon :icon="faBriefcase" />
      </template>
    </PrimaryBtnLink>
  </div>
</template>
