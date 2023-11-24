<script setup>
import {reactive} from "vue";
import {useRouter} from "vue-router";
import {mdiAccount, mdiAsterisk} from "@mdi/js";
import SectionFullScreen from "../Components/Sahred/SectionFullScreen.vue";
import CardBox from "../Components/Sahred/CardBox.vue";
import FormCheckRadio from "../Components/Sahred/FormCheckRadio.vue";
import FormField from "../Components/Sahred/FormField.vue";
import FormControl from "../Components/Sahred/FormControl.vue";
import BaseButton from "../Components/Sahred/BaseButton.vue";
import BaseButtons from "../Components/Sahred/BaseButtons.vue";
import LayoutGuest from "../Layouts/LayoutGuest.vue";

const form = reactive({
    login: "john.doe",
    pass: "highly-secure-password-fYjUw-",
    remember: true,
});

const router = useRouter();

const submit = () => {
    router.push("/dashboard");
};
</script>

<template>
    <LayoutGuest>
        <SectionFullScreen
            v-slot="{ cardClass }"
            bg="purplePink"
        >
            <CardBox
                :class="cardClass"
                is-form
                @submit.prevent="submit"
            >
                <FormField
                    help="Please enter your login"
                    label="Login"
                >
                    <FormControl
                        v-model="form.login"
                        :icon="mdiAccount"
                        autocomplete="username"
                        name="login"
                    />
                </FormField>

                <FormField
                    help="Please enter your password"
                    label="Password"
                >
                    <FormControl
                        v-model="form.pass"
                        :icon="mdiAsterisk"
                        autocomplete="current-password"
                        name="password"
                        type="password"
                    />
                </FormField>

                <FormCheckRadio
                    v-model="form.remember"
                    :input-value="true"
                    label="Remember"
                    name="remember"
                />

                <template #footer>
                    <BaseButtons>
                        <BaseButton
                            color="info"
                            label="Login"
                            type="submit"
                        />
                        <BaseButton
                            color="info"
                            label="Back"
                            outline
                            to="/dashboard"
                        />
                    </BaseButtons>
                </template>
            </CardBox>
        </SectionFullScreen>
    </LayoutGuest>
</template>
