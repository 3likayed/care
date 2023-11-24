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
                    help="Please enter your email"
                    label="Email"
                    label-for="email"
                >
                    <FormControl
                        id="email"
                        v-model="form.email"
                        :icon="mdiEmail"
                        autocomplete="email"
                        required
                        type="email"
                    />
                </FormField>

                <FormField
                    help="Please enter new password"
                    label="Password"
                    label-for="password"
                >
                    <FormControl
                        id="password"
                        v-model="form.password"
                        :icon="mdiFormTextboxPassword"
                        autocomplete="new-password"
                        required
                        type="password"
                    />
                </FormField>

                <FormField
                    help="Please confirm new password"
                    label="Confirm Password"
                    label-for="password_confirmation"
                >
                    <FormControl
                        id="password_confirmation"
                        v-model="form.password_confirmation"
                        :icon="mdiFormTextboxPassword"
                        autocomplete="new-password"
                        required
                        type="password"
                    />
                </FormField>

                <BaseDivider/>

                <BaseButton
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    color="info"
                    label="Reset password"
                    type="submit"
                />
            </CardBox>
        </SectionFullScreen>
    </LayoutGuest>
</template>
