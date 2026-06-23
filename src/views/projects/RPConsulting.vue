<script setup>
import MainNav from '@/components/ui/MainNav.vue'
import MobileNav from '@/components/ui/MobileNav.vue'

import FaqAccordion from '@/components/ui/FaqAccordion.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import MainFooter from '@/components/sections/MainFooter.vue'
import BackToTop from '@/components/ui/BackToTop.vue'

import ProfilePicture from '@/assets/imgs/profileImages/me.jpg'
import SectionTitle from '@/components/typography/SectionTitle.vue'
import SectionSubTitle from '@/components/typography/SectionSubtitle.vue'
import SectionDescription from '@/components/typography/SectionDescription.vue'
import PrimaryBtnLink from '@/components/links/PrimaryBtnLink.vue'

import ProjectsGallery from '@/components/ui/ProjectsGallery.vue'
import { projects } from '@/data/projects/randp.js'

import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>

<template>
  <div>
    <header>
      <div class="hidden md:block">
        <MainNav />
      </div>
      <div class="md:hidden">
        <MobileNav @blurMain="isMenuOpen = $event" />
      </div>
    </header>

    <main>
      <!-- Project Hero -->
      <section class="project-hero">
        <SectionTitle title="R&P Consulting — Custom WordPress Theme" class="mt-8 md:text-4xl" />
        <SectionDescription>
          A custom WordPress theme for a Nairobi tax and compliance firm, built for bookings,
          automated staff onboarding, and Kenyan data protection compliance.
        </SectionDescription>

        <div class="project-links flex gap-6 pt-4">
          <!-- GitHub Link -->
          <!-- <a
            href="#"
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
            View on GitHub
          </a> -->
          <!-- <PrimaryBtnLink
            href="http://randp-consulting.com"
            target="_blank"
            rel="noopener noreferrer"
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
          </PrimaryBtnLink> -->
        </div>

        <div class="flex items-center justify-center mt-8">
          <img
            src="/projectImages/randp/randp-home.png"
            alt="R&P Consulting homepage screenshot"
            class="w-[80%] rounded-sm border-2 border-primary"
          />
        </div>
      </section>

      <!-- Overview -->
      <section class="project-overview">
        <SectionTitle title="Overview" class="mb-2 mt-8"></SectionTitle>
        <p class="text-white">
          R&P Consulting is a Nairobi-based tax, accounting, and compliance firm. They needed a
          website that went beyond describing their services, one that could handle client bookings,
          onboard new team members without manual admin work, and meet Kenya's data protection
          requirements, all while being fast and well-structured enough to rank locally on Google.
        </p>

        <div class="project-meta">
          <div>
            <h3>Client</h3>
            <p>R&P Consulting</p>
          </div>
          <div>
            <h3>Role</h3>
            <p>Full-stack Developer</p>
          </div>
          <div>
            <h3>Stack</h3>
            <p>PHP (custom classic theme), Tailwind CSS v4, Vite, HTMX, Alpine.js</p>
          </div>
        </div>
      </section>

      <!-- Problem -->
      <section class="project-problem">
        <SectionTitle title="The Problem" class="mb-2 mt-8"></SectionTitle>
        <p class="text-white">
          A theme builder or off-the-shelf plugin stack couldn't deliver what R&P needed without
          becoming slow, fragile, or non-compliant. They needed automated workflows for staff
          onboarding, a booking system clients could actually use, legal pages and cookie consent
          built specifically for Kenya's Data Protection Act, and structured data that would help
          the firm get found by local clients searching for tax and accounting services.
        </p>
      </section>

      <!-- Solution -->
      <section class="project-solution">
        <SectionTitle title="The Solution" class="mb-2 mt-8"></SectionTitle>
        <article class="solution-item">
          <h3 class="text-white text-lg">Fast, App-Like Interactions</h3>
          <p class="text-white">
            Used Tailwind CSS v4, Vite, HTMX, and Alpine.js to deliver dynamic features, including
            HTMX-powered blog category filtering and pagination, without the overhead of a full
            JavaScript framework.
          </p>
        </article>

        <article class="solution-item">
          <h3 class="text-white text-lg">Automated Staff Onboarding</h3>
          <p class="text-white">
            Built a custom Team Member post type with a <code>save_post</code> hook that
            automatically creates a linked WordPress user account whenever a new team member profile
            is published, removing a manual admin step every time R&P hires.
          </p>

          <div
            class="team-members-grid flex justify-center gap-4 flex-col md:flex-row items-center mt-8"
          >
            <img
              src="/projectImages/randp/team-member-1.png"
              alt="R&P Consulting team member addition screenshot"
              class="w-[80%] rounded-sm border-2 border-primary"
            />
            <img
              src="/projectImages/randp/team-member-2.png"
              alt="R&P Consulting team member addition screenshot"
              class="w-[80%] rounded-sm border-2 border-primary"
            />
          </div>
        </article>

        <article class="solution-item">
          <h3 class="text-white text-lg">Local SEO & Structured Data</h3>
          <p class="text-white">
            Implemented schema markup (AccountingService, Person, FAQPage, BreadcrumbList) sitewide
            and on individual templates, so search engines can correctly understand and surface the
            firm's services and team.
          </p>
        </article>

        <article class="solution-item">
          <h3 class="text-white text-lg">Appointment Booking</h3>
          <p class="text-white">
            Integrated Simply Schedule Appointments with a custom popup modal, so clients can book
            consultations directly from the site without back-and-forth emails.
          </p>

          <div class="flex items-center justify-center mt-8">
            <img
              src="/projectImages/randp/appointment-booking.png"
              alt="Appointment booking modal"
              class="w-[80%] rounded-sm border-2 border-primary"
            />
          </div>
        </article>

        <article class="solution-item">
          <h3 class="text-white text-lg">Data Protection Compliance</h3>
          <p class="text-white">
            Built a custom cookie consent plugin and legal pages tailored specifically to Kenya's
            Data Protection Act (2019) not a generic GDPR template repurposed for a different
            jurisdiction. The plugin was designed to be reusable across future projects.
          </p>

          <div class="flex items-center justify-center mt-8">
            <img
              src="/projectImages/randp/cookie-consent.png"
              alt="Cookie consent banner"
              class="w-[80%] rounded-sm border-2 border-primary"
            />
          </div>
        </article>
      </section>

      <!-- Outcome -->
      <section class="project-outcome">
        <SectionTitle title="Outcome" class="mb-2 mt-8"></SectionTitle>
        <p class="text-white">
          The site is live and in active use, handling client bookings, team onboarding, and content
          publishing without manual intervention. The custom-built compliance and SEO infrastructure
          means R&P didn't have to choose between meeting Kenyan legal requirements and being found
          by local clients searching for tax and accounting services.
        </p>
      </section>

      <!-- Gallery -->
      <section class="project-gallery">
        <SectionTitle title="Gallery" class="mb-2 mt-8"></SectionTitle>
        <div class="gallery-grid">
          <ProjectsGallery :slides="projects" />
        </div>
      </section>

      <!-- Next/Prev project navigation -->
      <nav class="project-nav my-8">
        <a href="/projects/pos-system" class="text-primary text-lg"
          >Next Project: Retail POS System — Offline-First Point of Sale &rarr;</a
        >
      </nav>

      <FaqAccordion id="faq" />
      <ContactSection id="contact" />
      <MainFooter />
      <BackToTop />
    </main>
  </div>
</template>

<script></script>

<style>
.project-meta {
  margin-top: 12px;
}
.solution-item,
.project-meta {
  margin-bottom: 16px;

  h3 {
    color: rgb(255, 175, 41);
    font-weight: bolder;
    letter-spacing: 0.25px;
    font-size: 20px;
  }

  p {
    color: white;
  }
}
</style>
