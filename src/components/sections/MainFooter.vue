<template>
  <footer class="grid md:grid-cols-2 gap-6 pt-15">
    <div class="gap-4 flex flex-col">
      <SectionTitle title="Let's Work Together" class="mb-0" />
      <div class="flex items-center gap-2">
        <SmallerSectionHeading text="Start By" />
        <LargeLink anchor="Saying Hi!" link="#contact" />
      </div>
      <SectionDescription />
    </div>

    <div class="gap-4 flex flex-col">
      <div class="gap-2 flex">
        <img :src="LetterLogo" alt="Letter Logo" class="w-[48px] h-[48px]" />

        <div>
          <p class="text-white text-lg md:text-xl font-semibold mb-0 tracking-wide">
            Kennedy Gitahi
          </p>
          <p class="text-silver text-md md:text-lg font-medium">PHP Developer</p>
        </div>
      </div>

      <div>
        <p class="text-silver text-md md:text-lg font-medium mb-0 tracking-wide">Email me:</p>
        <a
          href="mailto:kennedy.gitahi@proton.me"
          class="text-white text-lg md:text-xl font-semibold hover:underline hover:text-primary"
        >
          kennedy.gitahi@proton.me
        </a>
      </div>

      <div>
        <p class="text-silver text-md md:text-lg font-medium mb-0 tracking-wide">Follow me:</p>
        <FooterIcons />
      </div>
    </div>
  </footer>
</template>

<script setup>
import SectionTitle from '@/components/typography/SectionTitle.vue'
import SectionDescription from '@/components/typography/SectionDescription.vue'
import LargeLink from '@/components/links/LargeLink.vue'
import SmallerSectionHeading from '@/components/typography/SmallerHeading.vue'

import LetterLogo from '../../assets/imgs/mobile-logo.png'
import FooterIcons from '@/components/ui/FooterIcons.vue'
</script>
