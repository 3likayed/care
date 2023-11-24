<script setup>
import {Head, useForm} from '@inertiajs/vue3'
import {ref} from 'vue'
import LayoutGuest from '../../Layouts/LayoutGuest.vue'
import SectionFullScreen from '../../Components/Sahred/SectionFullScreen.vue'
import CardBox from '../../Components/Sahred/CardBox.vue'
import FormControl from '../../Components/Sahred/FormControl.vue'
import FormField from '../../Components/Sahred/FormField.vue'
import BaseDivider from '../../Components/Sahred/BaseDivider.vue'
import BaseButton from '../../Components/Sahred/BaseButton.vue'
import FormValidationErrors from '../../Components/Sahred/FormValidationErrors.vue'

const form = useForm({
    password: ''
})

const passwordInput = ref(null)

const submit = () => {
    form.post(route('password.confirm'), {
        preserveState: (page) => Object.keys(page.props.errors).length,
        onFinish: () => {
            form.reset()

            passwordInput.value?.focus()
        }
    })
}
</script>

<template>
    <LayoutGuest>
        <Head title="Secure Area"/>

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

                <FormField>
                    <div class="mb-4 text-sm text-gray-600">
                        This is a secure area of the application. Please confirm your password before continuing.
                    </div>
                </FormField>

                <FormField
                    help="Please enter your password to confirm"
                    label="Password"
                    label-for="password"
                >
                    <FormControl
                        id="password"
                        v-model="form.password"
                        autocomplete="current-password"
                        required
                        type="password"
                        @set-ref="passwordInput = $event"
                    />
                </FormField>

                <BaseDivider/>

                <BaseButton
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    color="info"
                    label="Confirm"
                    type="submit"
                />
            </CardBox>
        </SectionFullScreen>
    </LayoutGuest>
</template>
