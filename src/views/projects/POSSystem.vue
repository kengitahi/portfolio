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
        <h1>Retail POS System — Offline-First Point of Sale</h1>
        <p class="project-tagline">
          A point-of-sale system that keeps working when the internet drops, with phone-camera
          barcode scanning for stock taking and inventory management.
        </p>

        <div class="project-links">
          <a
            href="https://github.com/your-username/pos-system"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <a href="https://pos-demo-url.com" target="_blank" rel="noopener noreferrer">
            View Live Demo
          </a>
        </div>

        <!-- <img src="/images/pos-hero.png" alt="POS system main sales screen" /> -->
      </section>

      <!-- Overview -->
      <section class="project-overview">
        <h2>Overview</h2>
        <p>
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
        <h2>The Problem</h2>
        <p>
          Small retail businesses often lose sales during internet outages, since most POS systems
          are cloud-dependent and stop working the moment connectivity drops. On top of that, manual
          inventory counts are slow and error-prone, and dedicated barcode scanner hardware adds
          cost most small shops can't justify.
        </p>
      </section>

      <!-- Solution -->
      <section class="project-solution">
        <h2>The Solution</h2>

        <article class="solution-item">
          <h3>Offline-First Architecture</h3>
          <p>
            Built on a dual-database setup — SQLite as the default local store, PostgreSQL as the
            sync target — so the system keeps recording sales locally even when the internet is
            down, then automatically syncs once connectivity returns. A live status widget shows
            staff their current connection state at all times.
          </p>
          <!-- <img
            src="/images/pos-sync-status.png"
            alt="Sync status widget showing online/offline state"
          /> -->
        </article>

        <article class="solution-item">
          <h3>Phone-Camera Stock Taking</h3>
          <p>
            Uses the browser's BarcodeDetector API, with a fallback to Html5QrcodeScanner for
            unsupported devices, so any phone camera becomes a barcode scanner — no extra hardware
            needed for inventory management or sales recording.
          </p>
          <!-- <img src="/images/pos-barcode-scan.png" alt="Phone camera scanning a product barcode" /> -->
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
          <h3>Management Dashboard</h3>
          <p>
            Built on Django Unfold with custom routing and Chart.js visualizations, giving owners
            date-range filtering and sales insight without needing a separate analytics tool.
          </p>
          <!-- <img src="/images/pos-dashboard.png" alt="Management dashboard with sales charts" /> -->
        </article>
      </section>

      <!-- Outcome -->
      <section class="project-outcome">
        <h2>Outcome</h2>
        <p>
          The system is functional end-to-end — sales recording, inventory management, and reporting
          — and built to keep working through the kind of connectivity drops that would stop a
          typical cloud POS in its tracks. The phone-camera scanning approach also removes a cost
          barrier that often keeps small retailers from adopting proper inventory systems in the
          first place.
        </p>
      </section>

      <!-- Gallery -->
      <section class="project-gallery">
        <h2>Gallery</h2>
        <div class="gallery-grid">
          <!-- <img src="/images/pos-gallery-1.png" alt="POS system screenshot 1" />
          <img src="/images/pos-gallery-2.png" alt="POS system screenshot 2" />
          <img src="/images/pos-gallery-3.png" alt="POS system screenshot 3" /> -->
        </div>
      </section>

      <!-- Next/Prev project navigation -->
      <nav class="project-nav">
        <a href="/projects/previous-project">&larr; Previous Project</a>
        <a href="/projects/rp-consulting">R&P Consulting &rarr;</a>
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
