<template>
  <section class="pt-10 grid md:grid-cols-[1fr_2fr] gap-6 items-center">
    <div class="image-container w-[60%] mx-auto md:w-full">
      <div class="corner-frame">
        <img
          :src="ProfilePicture"
          alt="Kennedy Gitahi"
          title="Kennedy Gitahi"
          class="max-w-[60%] md:w-full"
        />
      </div>
    </div>
    <div>
      <SectionSubTitle subtitle="Hi, I'm Kennedy." />
      <SectionTitle title="About Me" class="mt-0" />
      <SectionDescription>
        <p class="my-2">
          I specialize in providing custom web development solutions that help solve different
          business challenges using PHP (Laravel) and JavaScript (Vue.js and Next.js).
        </p>
        <p class="my-2">
          I partner with brands and businesses to build web applications that streamline processes,
          improve efficiency, and drive tangible results.
        </p>
        <p class="my-2">
          My focus is on delivering user-friendly, feature-rich web experiences that empower your
          business to succeed.
        </p>
      </SectionDescription>
      <PrimaryBtnLink anchor="Say Hi!" link="#contact" class="mt-4">
        <template #prependIcon>
          <FontAwesomeIcon :icon="faComments" />
        </template>
      </PrimaryBtnLink>
    </div>
  </section>
</template>

<script setup>
import ProfilePicture from '@/assets/imgs/profileImages/me.jpg'
import SectionTitle from '@/components/typography/SectionTitle.vue'
import SectionSubTitle from '@/components/typography/SectionSubtitle.vue'
import SectionDescription from '@/components/typography/SectionDescription.vue'
import PrimaryBtnLink from '@/components/links/PrimaryBtnLink.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
</script>

<style scoped>
.image-container {
  position: relative;
  display: inline-block;
}

.corner-frame {
  position: relative;
  padding: 20px;
}

.corner-frame::before,
.corner-frame::after {
  content: '';
  position: absolute;
  border: solid #ffa500; /* Orange color */
  border-radius: 6px;
}

/* Top-left corner */
.corner-frame::before {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;

  width: 30%;
  height: 30%;
  border-width: 10px;
}

/* Bottom-right corner */
.corner-frame::after {
  bottom: 0;
  right: 0;
  border-left: none;
  border-top: none;

  width: 30%;
  height: 30%;
  border-width: 12px;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
}
</style>
