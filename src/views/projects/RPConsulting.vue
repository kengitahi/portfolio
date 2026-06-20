<script setup>
import MainNav from '@/components/ui/MainNav.vue'
import MobileNav from '@/components/ui/MobileNav.vue'

import FaqAccordion from '@/components/ui/FaqAccordion.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import MainFooter from '@/components/sections/MainFooter.vue'
import BackToTop from '@/components/ui/BackToTop.vue'

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
        <h1>R&P Consulting — Custom WordPress Theme</h1>
        <p class="project-tagline">
          A custom WordPress theme for a Nairobi tax and compliance firm, built for bookings,
          automated staff onboarding, and Kenyan data protection compliance.
        </p>

        <div class="project-links">
          <a
            href="https://github.com/your-username/rp-consulting"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <a href="https://randp-consulting.com" target="_blank" rel="noopener noreferrer">
            View Live Site
          </a>
        </div>

        <!-- <img src="/images/rp-consulting-hero.png" alt="R&P Consulting homepage screenshot" /> -->
      </section>

      <!-- Overview -->
      <section class="project-overview">
        <h2>Overview</h2>
        <p>
          R&P Consulting is a Nairobi-based tax, accounting, and compliance firm. They needed a
          website that went beyond describing their services — one that could handle client
          bookings, onboard new team members without manual admin work, and meet Kenya's data
          protection requirements, all while being fast and well-structured enough to rank locally
          on Google.
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
        <h2>The Problem</h2>
        <p>
          A theme builder or off-the-shelf plugin stack couldn't deliver what R&P needed without
          becoming slow, fragile, or non-compliant. They needed automated workflows for staff
          onboarding, a booking system clients could actually use, legal pages and cookie consent
          built specifically for Kenya's Data Protection Act, and structured data that would help
          the firm get found by local clients searching for tax and accounting services.
        </p>
      </section>

      <!-- Solution -->
      <section class="project-solution">
        <h2>The Solution</h2>

        <article class="solution-item">
          <h3>Automated Staff Onboarding</h3>
          <p>
            Built a custom Team Member post type with a <code>save_post</code> hook that
            automatically creates a linked WordPress user account whenever a new team member profile
            is published — removing a manual admin step every time R&P hires.
          </p>
          <!-- <img src="/images/rp-team-member-admin.png" alt="Team member admin screen" /> -->
        </article>

        <article class="solution-item">
          <h3>Appointment Booking</h3>
          <p>
            Integrated Simply Schedule Appointments with a custom popup modal, so clients can book
            consultations directly from the site without back-and-forth emails.
          </p>
          <!-- <img src="/images/rp-booking-modal.png" alt="Appointment booking modal" /> -->
        </article>

        <article class="solution-item">
          <h3>Data Protection Compliance</h3>
          <p>
            Built a custom cookie consent plugin and legal pages tailored specifically to Kenya's
            Data Protection Act (2019) — not a generic GDPR template repurposed for a different
            jurisdiction. The plugin was designed to be reusable across future projects.
          </p>
          <!-- <img src="/images/rp-cookie-consent.png" alt="Cookie consent banner" /> -->
        </article>

        <article class="solution-item">
          <h3>Local SEO & Structured Data</h3>
          <p>
            Implemented schema markup (AccountingService, Person, FAQPage, BreadcrumbList) sitewide
            and on individual templates, so search engines can correctly understand and surface the
            firm's services and team.
          </p>
        </article>

        <article class="solution-item">
          <h3>Fast, App-Like Interactions</h3>
          <p>
            Used Tailwind CSS v4, Vite, HTMX, and Alpine.js to deliver dynamic features — including
            HTMX-powered blog category filtering and pagination — without the overhead of a full
            JavaScript framework.
          </p>
          <!-- <img src="/images/rp-blog-filtering.png" alt="Blog category filtering interaction" /> -->
        </article>
      </section>

      <!-- Outcome -->
      <section class="project-outcome">
        <h2>Outcome</h2>
        <p>
          The site is live and in active use, handling client bookings, team onboarding, and content
          publishing without manual intervention. The custom-built compliance and SEO infrastructure
          means R&P didn't have to choose between meeting Kenyan legal requirements and being found
          by local clients searching for tax and accounting services.
        </p>
      </section>

      <!-- Gallery -->
      <section class="project-gallery">
        <h2>Gallery</h2>
        <div class="gallery-grid">
          <!-- <img src="/images/rp-gallery-1.png" alt="R&P Consulting screenshot 1" />
          <img src="/images/rp-gallery-2.png" alt="R&P Consulting screenshot 2" />
          <img src="/images/rp-gallery-3.png" alt="R&P Consulting screenshot 3" /> -->
        </div>
      </section>

      <!-- Next/Prev project navigation -->
      <nav class="project-nav">
        <a href="/projects/pos-system">&larr; Retail POS System</a>
        <a href="/projects/next-project">Next Project &rarr;</a>
      </nav>

      <FaqAccordion id="faq" />
      <ContactSection id="contact" />
      <MainFooter />
      <BackToTop />
    </main>
  </div>
</template>

<script>
// any logic, e.g. image imports
</script>
