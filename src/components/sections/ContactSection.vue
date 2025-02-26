<template>
  <section class="py-15">
    <SectionTitle title="Contact Me" />
    <SectionSubtitle
      subtitle="Get In Touch, Ask a Question, Request a quote, or just say hello."
      class="mb-4"
    />
    <ContactForm class="mt-4" />
  </section>
</template>

<script setup>
import SectionTitle from '../typography/SectionTitle.vue'
import SectionSubtitle from '../typography/SectionSubtitle.vue'
import ContactForm from '../ui/ContactForm.vue'
</script>
