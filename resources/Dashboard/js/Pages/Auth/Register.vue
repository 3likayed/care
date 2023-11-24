<script setup>
import {Head, useForm, usePage} from "@inertiajs/vue3";
import {computed} from "vue";
import {mdiAccount, mdiEmail, mdiFormTextboxPassword} from "@mdi/js";
import LayoutGuest from "../../Layouts/LayoutGuest.vue";
import SectionFullScreen from "../../Components/Sahred/SectionFullScreen.vue";
import CardBox from "../../Components/Sahred/CardBox.vue";
import FormCheckRadioGroup from "../../Components/Sahred/FormCheckRadioGroup.vue";
import FormField from "../../Components/Sahred/FormField.vue";
import FormControl from "../../Components/Sahred/FormControl.vue";
import BaseDivider from "../../Components/Sahred/BaseDivider.vue";
import BaseButton from "../../Components/Sahred/BaseButton.vue";
import BaseButtons from "../../Components/Sahred/BaseButtons.vue";
import FormValidationErrors from "../../Components/Sahred/FormValidationErrors.vue";

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: [],
});

const hasTermsAndPrivacyPolicyFeature = computed(
    () => usePage().props.jetstream?.hasTermsAndPrivacyPolicyFeature
);

const submit = () => {
    form
        .transform((data) => ({
            ...data,
            terms: form.terms && form.terms.length,
        }))
        .post(route("dashboard.register"), {
            onFinish: () => form.reset("password", "password_confirmation"),
        });
};
</script>

<template>
    <LayoutGuest>
        <Head title="Register"/>

        <SectionFullScreen
            v-slot="{ cardClass }"
            bg="purplePink"
        >
            <CardBox
                :class="cardClass"
                class="my-24"
                is-form
                @submit.prevent="submit"
            >
                <FormValidationErrors/>

                <FormField
                    help="Please enter your name"
                    label="Name"
                    label-for="name"
                >
                    <FormControl
                        id="name"
                        v-model="form.name"
                        :icon="mdiAccount"
                        autocomplete="name"
                        required
                        type="text"
                    />
                </FormField>

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
                    help="Please confirm your password"
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

                <FormCheckRadioGroup
                    v-if="hasTermsAndPrivacyPolicyFeature"
                    v-model="form.terms"
                    :options="{ agree: 'I agree to the Terms' }"
                    name="remember"
                />

                <BaseDivider/>

                <BaseButtons>
                    <BaseButton
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        color="info"
                        label="Register"
                        type="submit"
                    />
                    <BaseButton
                        color="info"
                        label="Login"
                        outline
                        route-name="login"
                    />
                </BaseButtons>
            </CardBox>
        </SectionFullScreen>
    </LayoutGuest>
</template>
