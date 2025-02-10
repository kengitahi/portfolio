<template>
  <footer class="grid md:grid-cols-2 gap-6">
    <div class="gap-4 flex flex-col">
      <SectionTitle title="Let's Work Together" />
      <div class="flex items-center gap-2">
        <SmallerSectionHeading text="Start By" />
        <LargeLink anchor="Saying Hi!" link="#contact" />
      </div>
      <SectionDescription />
    </div>

    <div class="gap-4 flex flex-col">
      <div>
        <img :src="LetterLogo" alt="Letter Logo" class="max-w-[48px]" />
        <p class="text-gray text-lg md:text-xl font-bold">Kennedy Gitahi</p>
        <p class="text-gray text-md md:text-lg font-semibold">PHP Developer</p>
      </div>

      <div>
        <p class="text-gray text-md md:text-lg font-semibold">Email me</p>
        <a
          href="mailto:kennedy.gitahi@proton.me"
          class="text-gray text-lg md:text-xl font-bold hover:underline hover:text-primary"
        >
          kennedy.gitahi@proton.me
        </a>
      </div>

      <div>
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
