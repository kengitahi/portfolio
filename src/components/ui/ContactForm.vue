<template>
  <form action="" class="space-y-4" @submit.prevent="handleSubmit">
    <div class="flex gap-4 md:flex-row flex-col justify-between">
      <div class="w-full flex flex-col md:w-[48%] gap-2">
        <FormLabel label="Name" forId="name" />
        <FormInput type="text" placeholder="e.g John Doe" id="name" v-model="formData.name" />
      </div>

      <div class="w-full flex flex-col md:w-[48%] gap-2">
        <FormLabel label="Email" forId="email" />
        <FormInput
          type="email"
          placeholder="e.g john@example.com"
          id="email"
          v-model="formData.email"
        />
      </div>
    </div>

    <div class="w-full flex flex-col md:w-[48%] gap-2">
      <FormLabel label="Subject" forId="subject" />
      <FormSelect :options="formOptions" v-model="formData.subject" />
    </div>

    <div class="w-full flex flex-col gap-2">
      <FormLabel label="Message" forId="message" />
      <FormTextarea
        placeholder="e.g I need a new website for my business. I'm looking for a responsive design that will work on all devices..."
        id="message"
        v-model="formData.message"
      />
    </div>

    <PrimaryBtn label="Send Message" type="submit" />
  </form>
</template>

<script setup>
import { formOptions } from '@/data/FormOptions'

import PrimaryBtn from '@/components/buttons/PrimaryBtn.vue'
import FormInput from '@/components/forms/FormInput.vue'
import FormLabel from '@/components/forms/FormLabel.vue'
import FormTextarea from '@/components/forms/FormTextarea.vue'
import FormSelect from '@/components/forms/FormSelect.vue'
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const handleSubmit = () => {
  console.log(formData.value)
}
</script>
