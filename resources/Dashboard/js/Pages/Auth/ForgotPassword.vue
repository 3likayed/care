<script setup>
import {Head, Link, useForm} from '@inertiajs/vue3'
import {mdiEmail} from '@mdi/js'
import LayoutGuest from '../../Layouts/LayoutGuest.vue'
import SectionFullScreen from '../../Components/Sahred/SectionFullScreen.vue'
import CardBox from '../../Components/Sahred/CardBox.vue'
import FormField from '../../Components/Sahred/FormField.vue'
import FormControl from '../../Components/Sahred/FormControl.vue'
import BaseDivider from '../../Components/Sahred/BaseDivider.vue'
import BaseButton from '../../Components/Sahred/BaseButton.vue'
import FormValidationErrors from '../../Components/Sahred/FormValidationErrors.vue'
import NotificationBarInCard from '../../Components/Sahred/NotificationBarInCard.vue'
import BaseLevel from '../../Components/Sahred/BaseLevel.vue'

defineProps({
    status: {
        type: String,
        default: null
    }
})

const form = useForm({
    email: ''
})

const submit = () => {
    form.post(route('password.email'), {
        preserveState: (page) => Object.keys(page.props.errors).length,
    })
}
</script>

<template>
    <LayoutGuest>
        <Head title="Forgot Password"/>

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

                <NotificationBarInCard
                    v-if="status"
                    color="info"
                >
                    {{ status }}
                </NotificationBarInCard>

                <FormField>
                    <div class="mb-4 text-sm text-gray-600">
                        Forgot your password? No problem. Just let us know your email address and we will email you a
                        password reset
                        link that will allow you to choose a new one.
                    </div>
                </FormField>

                <FormField
                    help="Please enter your email"
                    label="Email"
                >
                    <FormControl
                        v-model="form.email"
                        :icon="mdiEmail"
                        autocomplete="email"
                        required
                        type="email"
                    />
                </FormField>

                <BaseDivider/>

                <BaseLevel>
                    <BaseButton
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        color="info"
                        label="Email link"
                        type="submit"
                    />
                    <Link
                        :href="route('login')"
                    >
                        Back to login
                    </Link>
                </BaseLevel>
            </CardBox>
        </SectionFullScreen>
    </LayoutGuest>
</template>
