<script setup>
import {Head, useForm} from '@inertiajs/vue3'
import {mdiAccount, mdiAsterisk} from '@mdi/js'
import SectionFullScreen from '../../Components/Sahred/SectionFullScreen.vue'
import CardBox from '../../Components/Sahred/CardBox.vue'
import FormCheckRadioGroup from '../../Components/Sahred/FormCheckRadioGroup.vue'
import FormField from '../../Components/Sahred/FormField.vue'
import FormControl from '../../Components/Sahred/FormControl.vue'
import BaseDivider from '../../Components/Sahred/BaseDivider.vue'
import BaseButton from '../../Components/Sahred/BaseButton.vue'
import BaseButtons from '../../Components/Sahred/BaseButtons.vue'
import FormValidationErrors from '../../Components/Sahred/FormValidationErrors.vue'
import NotificationBarInCard from '../../Components/Sahred/NotificationBarInCard.vue'
import FormCheckRadio from "../../Components/Sahred/FormCheckRadio.vue";

const props = defineProps({
    canResetPassword: Boolean,
    status: {
        type: String,
        default: null
    }
})

const form = useForm({
    email: '',
    password: '',
    remember: false
})

const submit = () => {
    form.post(route('dashboard.login'));
}
</script>
<script>
import LayoutGuest from "../../layouts/LayoutGuest.vue";

export default {

    layout: LayoutGuest
}
</script>
<template>

    <Head :title="__('login')"/>

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

            <FormField
                :help="__('please_enter',{value : __('email')})"
                :label="__('email')"
                label-for="email"
            >
                <FormControl
                    id="email"
                    v-model="form.email"
                    :icon="mdiAccount"
                    autocomplete="email"
                    required
                    type="email"
                />
            </FormField>

            <FormField
                :help="__('please_enter',{value : __('password')})"
                :label="__('password')"
                label-for="password"
            >
                <FormControl
                    id="password"
                    v-model="form.password"
                    :icon="mdiAsterisk"
                    autocomplete="current-password"
                    required
                    type="password"
                />
            </FormField>

            <FormCheckRadioGroup class="flex justify-end">
                <FormCheckRadio v-model="form.remember"
                                :label="__('remember_me')"
                                name="remember"
                                type="switch"/>
            </FormCheckRadioGroup>

            <BaseDivider/>

            <BaseButtons>
                <BaseButton
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    :label="__('login')"
                    color="info"
                    type="submit"
                />

            </BaseButtons>
        </CardBox>
    </SectionFullScreen>
</template>
