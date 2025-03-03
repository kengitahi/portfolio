<template>
  <form
    class="space-y-4"
    name="main-contact-form"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
  >
    <input type="hidden" name="form-name" value="main-contact-form" />
    <div class="flex gap-4 md:flex-row flex-col justify-between">
      <div class="w-full flex flex-col md:w-[48%] gap-2">
        <FormLabel label="Name" forId="name" />
        <FormInput
          type="text"
          placeholder="e.g John Doe"
          id="name"
          @input="form.name = $event.target.value"
          @change="toggleButtonClass"
          v-model="form.name"
          required
        />
      </div>

      <div class="w-full flex flex-col md:w-[48%] gap-2">
        <FormLabel label="Email" forId="email" />
        <FormInput
          type="email"
          placeholder="e.g john@example.com"
          id="email"
          @input="form.email = $event.target.value"
          @change="toggleButtonClass"
          v-model="form.email"
          required
        />
      </div>
    </div>

    <div class="w-full flex flex-col md:w-[48%] gap-2">
      <FormLabel label="Subject" forId="subject" />
      <FormSelect
        :options="formOptions"
        @input="form.subject = $event.target.value"
        @change="toggleButtonClass"
        v-model="form.subject"
        required
      />
    </div>

    <div class="w-full flex flex-col gap-2">
      <FormLabel label="Message" forId="message" />
      <FormTextarea
        placeholder="e.g I need a new website for my business. I'm looking for a responsive design that will work on all devices..."
        id="message"
        @input="form.message = $event.target.value"
        @change="toggleButtonClass"
        v-model="form.message"
        required
      />
    </div>

    <PrimaryBtn label="Send Message" type="submit" class="text-ui" id="submit-button">
      <template #appendIcon>
        <FontAwesomeIcon :icon="faPaperPlane" />
      </template>
    </PrimaryBtn>
  </form>

  <div id="success" class="opacity-0">
    <p class="text-ui bg-primary px-4 py-2 rounded-sm mt-4 font-semibold">
      Thank you for your message! It has been sent successfully and I will get in touch with you
      asap (typically within a few hours).
    </p>
  </div>
</template>

<script setup>
import formOptions from '@/data/FormOptions'

import PrimaryBtn from '@/components/buttons/PrimaryBtn.vue'
import FormInput from '@/components/forms/FormInput.vue'
import FormLabel from '@/components/forms/FormLabel.vue'
import FormTextarea from '@/components/forms/FormTextarea.vue'
import FormSelect from '@/components/forms/FormSelect.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
</script>

<script>
import axios from 'axios'

export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit() {
      const axiosConfig = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
      axios.post(
        '/',
        this.encode({
          'form-name': 'main-contact-form',
          ...this.form,
        }),
        axiosConfig,
      )
      this.resetForm()

      this.showSuccess()
    },
    resetForm() {
      this.form.name = ''
      this.form.email = ''
      this.form.subject = ''
      this.form.message = ''

      this.toggleButtonClass()
    },
    showSuccess() {
      const successElement = document.getElementById('success')
      successElement.classList.remove('opacity-0')
      successElement.classList.add('opacity-100')

      setTimeout(() => {
        successElement.classList.remove('opacity-100')
        successElement.classList.add('opacity-0')
      }, 5000)
    },
    toggleButtonClass() {
      const buttonElement = document.getElementById('submit-button')
      if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
        buttonElement.setAttribute('disabled', true)
      } else {
        buttonElement.removeAttribute('disabled')
      }
    },
  },
  mounted() {
    this.toggleButtonClass()
  },
}
</script>

<style scoped>
#success {
  transition: all 0.3s ease;
}
</style>
