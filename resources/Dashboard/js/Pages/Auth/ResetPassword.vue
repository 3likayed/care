<script setup>
import {Head, useForm} from '@inertiajs/vue3'
import {mdiEmail, mdiFormTextboxPassword} from '@mdi/js'
import LayoutGuest from '../../Layouts/LayoutGuest.vue'
import SectionFullScreen from '../../Components/Sahred/SectionFullScreen.vue'
import CardBox from '../../Components/Sahred/CardBox.vue'
import FormField from '../../Components/Sahred/FormField.vue'
import FormControl from '../../Components/Sahred/FormControl.vue'
import BaseDivider from '../../Components/Sahred/BaseDivider.vue'
import BaseButton from '../../Components/Sahred/BaseButton.vue'
import FormValidationErrors from '../../Components/Sahred/FormValidationErrors.vue'

const props = defineProps({
  email: {
    type: String,
    default: null
  },
  token: {
    type: String,
    default: null
  }
})

const form = useForm({
  token: props.token,
  email: props.email,
  password: '',
  password_confirmation: '',
})

const submit = () => {
  form
      .post(route('password.update'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
      })
}
</script>

<template>
  <LayoutGuest>
    <Head title="Reset Password"/>

    <SectionFullScreen
        v-slot="{ cardClass }"
        bg="purplePink"
    >
      <CardBox
          :class="cardClass"
          is-form
          @submit.prevent="submit"
      >
        <FormValidationErrors/>

        <FormField
            label="Email"
            label-for="email"
            help="Please enter your email"
        >
          <FormControl
              v-model="form.email"
              :icon="mdiEmail"
              autocomplete="email"
              type="email"
              id="email"
              required
          />
        </FormField>

        <FormField
            label="Password"
            label-for="password"
            help="Please enter new password"
        >
          <FormControl
              v-model="form.password"
              :icon="mdiFormTextboxPassword"
              type="password"
              autocomplete="new-password"
              id="password"
              required
          />
        </FormField>

        <FormField
            label="Confirm Password"
            label-for="password_confirmation"
            help="Please confirm new password"
        >
          <FormControl
              v-model="form.password_confirmation"
              :icon="mdiFormTextboxPassword"
              type="password"
              autocomplete="new-password"
              id="password_confirmation"
              required
          />
        </FormField>

        <BaseDivider/>

        <BaseButton
            type="submit"
            color="info"
            label="Reset password"
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
        />
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
