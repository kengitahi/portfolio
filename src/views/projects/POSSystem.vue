<script setup>
import MainNav from '@/components/ui/MainNav.vue'
import MobileNav from '@/components/ui/MobileNav.vue'
import FaqAccordion from '@/components/ui/FaqAccordion.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import MainFooter from '@/components/sections/MainFooter.vue'
import BackToTop from '@/components/ui/BackToTop.vue'
import SectionTitle from '@/components/typography/SectionTitle.vue'
import SectionDescription from '@/components/typography/SectionDescription.vue'

import ProjectsGallery from '@/components/ui/ProjectsGallery.vue'
import { projects } from '@/data/projects/pos.js'

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
        <SectionTitle
          title="Retail POS System — Offline-First Point of Sale"
          class="mt-8 md:text-4xl"
        />
        <SectionDescription>
          A point-of-sale system that keeps working when the internet drops, with phone-camera
          barcode scanning for stock taking and inventory management.
        </SectionDescription>

        <div class="project-links flex gap-6 pt-4">
          <!-- GitHub Link -->
          <a
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
          </a>
        </div>

        <div class="flex items-center justify-center mt-8">
          <img
            src="/projectImages/pos/pos-home.png"
            alt="POS system main sales screen"
            class="w-[80%] rounded-sm border-2 border-primary"
          />
        </div>
      </section>

      <!-- Overview -->
      <section class="project-overview">
        <SectionTitle title="Overview" class="mb-2 mt-8"></SectionTitle>
        <p class="text-white">
          A Django-based, offline-first point-of-sale system built for small retail businesses. It
          handles sales recording, inventory management, and returns, and uses a phone's camera for
          barcode scanning instead of requiring dedicated scanner hardware.
        </p>

        <div class="project-meta">
          <div>
            <h3>Client</h3>
            <p>Personal Project</p>
          </div>
          <div>
            <h3>Role</h3>
            <p>Full-stack Developer</p>
          </div>
          <div>
            <h3>Stack</h3>
            <p>Python, Django, Django Unfold, SQLite, PostgreSQL, Alpine.js, HTMX, Chart.js</p>
          </div>
        </div>
      </section>

      <!-- Problem -->
      <section class="project-problem">
        <SectionTitle title="The Problem" class="mb-2 mt-8"></SectionTitle>
        <p class="text-white">
          Small retail businesses often lose sales during internet outages, since most POS systems
          are cloud-dependent and stop working the moment connectivity drops. On top of that, manual
          inventory counts are slow and error-prone, and dedicated barcode scanner hardware adds
          cost most small shops can't justify.
        </p>
      </section>

      <!-- Solution -->
      <section class="project-solution">
        <SectionTitle title="The Solution" class="mb-2 mt-8"></SectionTitle>

        <article class="solution-item">
          <h3>Offline-First Architecture</h3>
          <p>
            Built on a dual-database setup with SQLite as the default local store, PostgreSQL as the
            sync target so the system keeps recording sales locally even when the internet is down,
            then automatically syncs once connectivity returns. A live status widget shows staff
            their current connection state.
          </p>
          <div class="flex items-center justify-center mt-8">
            <img
              src="/projectImages/pos/online-offline.webp"
              alt="Sync status widget showing online/offline state"
              class="w-[80%] rounded-sm border-2 border-primary"
            />
          </div>
        </article>

        <article class="solution-item">
          <h3>Phone-Camera Stock Taking</h3>
          <p>
            Uses the browser's BarcodeDetector API, with a fallback to Html5QrcodeScanner for
            unsupported devices, so any phone camera becomes a barcode scanner. There's no extra
            hardware needed for inventory management or sales recording.
          </p>

          <div class="flex items-center justify-center mt-8">
            <img
              src="/projectImages/pos/product-scanning.png"
              alt="Phone camera scanning a product barcode"
              class="w-[40%] rounded-sm border-2 border-primary"
            />
          </div>
        </article>

        <article class="solution-item">
          <h3>Customer management</h3>
          <p>
            The cashier can add a customer at the time of sale. This way, the cashier can find the
            customer then next time they visit. Also, all customer purchases and refunds are stored
            for retrieval later.
          </p>
        </article>

        <article class="solution-item">
          <h3>Returns & Refunds</h3>
          <p>
            Built a dedicated returns module so staff can process refunds without manual database
            edits or workarounds.
          </p>
        </article>

        <article class="solution-item">
          <h3>Low Stock Alerts</h3>
          <p>
            Automated email notifications fire when inventory drops below a set threshold, so
            restocking happens before a shelf goes empty.
          </p>
        </article>

        <article class="solution-item">
          <h3>Separate manager, staff, and super admin accounts</h3>
          <p>
            Separate accounts for managers, staff, and super admins to ensure proper access control
            and security. Each account type has different levels of access and permissions, and can
            only perform specific tasks and access different parts of the system.
          </p>
        </article>

        <article class="solution-item">
          <h3>Management Dashboard</h3>
          <p>
            Built on Django Unfold with custom routing and Chart.js visualizations, giving owners
            date-range filtering and sales insight without needing a separate analytics tool.
          </p>
          <div class="flex items-center justify-center mt-8">
            <img
              src="/projectImages/pos/pos-dashboard.png"
              alt="Management dashboard with sales charts"
              class="w-[80%] rounded-sm border-2 border-primary"
            />
          </div>
        </article>
      </section>

      <!-- Outcome -->
      <section class="project-outcome">
        <SectionTitle title="Outcome" class="mb-2 mt-8"></SectionTitle>
        <p class="text-white">
          The system is functional end-to-end, with features including sales recording, inventory
          management, and reporting, full customer managamanet, refunds, discounts, and much more.
          Built to keep working through the kind of connectivity drops that would stop a typical
          cloud POS in its tracks. The phone-camera scanning approach also removes a cost barrier
          that often keeps small retailers from adopting proper inventory systems in the first
          place.
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
        <a href="/projects/rp-consulting" class="text-primary text-lg"
          >Next Project: R&P Consulting Project &rarr;</a
        >
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
