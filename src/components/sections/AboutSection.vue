<template>
  <section class="pt-10 grid gap-6 items-center">
    <!-- <div class="image-container w-[60%] mx-auto md:w-full">
      <div class="corner-frame">
        <img
          :src="ProfilePicture"
          alt="Kennedy Gitahi"
          title="Kennedy Gitahi"
          class="max-w-[60%] md:w-full"
        />
      </div>
    </div> -->
    <div>
      <SectionSubTitle subtitle="Hi, I'm Kennedy." />
      <SectionTitle title="About Me" class="mt-0" />
      <SectionDescription>
        <div class="flex flex-col md:flex-row gap-6 items-center">
          <div class="image-container mx-auto w-full md:w-1/3">
            <div class="corner-frame">
              <img
                :src="ProfilePicture"
                alt="Kennedy Gitahi"
                title="Kennedy Gitahi"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <div class="w-full md:w-2/3">
            <p class="my-2">
              I build WordPress and Laravel sites for businesses that need custom solutions. These
              include features like automated staff onboarding when someone fills out a form,
              booking systems that don't double-book, a point-of-sale system that keeps working when
              the internet drops, and fast, app-like pages that don't need a slow framework to load.
            </p>
            <p class="my-2">
              I also handle the unglamorous stuff that keeps your business running day to day. I fix
              what broke, update what's outdated, and am someone you can reach when something goes
              wrong.
            </p>
          </div>
        </div>

        <p class="my-2">
          Recent work includes a custom WordPress theme for a Nairobi tax and compliance firm, built
          to show up in local Google searches, an appointment-booking system, and a cookie consent
          plugin built to Kenya's Data Protection Act requirements. I also recently built a retail
          POS system that uses your mobile phone's camera for stock taking, inventory management,
          and sales recording and that syncs sales data once connectivity is back.
        </p>
        <p class="my-2">Stack: PHP (Laravel/WordPress), JavaScript (Vue, Alpine, HTMX).</p>
        <p class="mt-2">
          I also handle SEO content and digital marketing so your site also shows up on Google and
          AI chatbot recommendations.
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
  top: 0.5em;
  left: 0.5em;
  border-right: none;
  border-bottom: none;

  width: 30%;
  height: 30%;
  border-width: 0.25em;
}

/* Bottom-right corner */
.corner-frame::after {
  bottom: 0.5em;
  right: 0.5em;
  border-left: none;
  border-top: none;

  width: 30%;
  height: 30%;
  border-width: 0.25em;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
}
</style>
