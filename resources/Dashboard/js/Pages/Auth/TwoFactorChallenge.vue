<script setup>
import {Head, useForm} from '@inertiajs/vue3'
import {nextTick, ref} from 'vue'
import LayoutGuest from '../../Layouts/LayoutGuest.vue'
import SectionFullScreen from '../../Components/Sahred/SectionFullScreen.vue'
import CardBox from '../../Components/Sahred/CardBox.vue'
import FormControl from '../../Components/Sahred/FormControl.vue'
import FormField from '../../Components/Sahred/FormField.vue'
import BaseDivider from '../../Components/Sahred/BaseDivider.vue'
import BaseButton from '../../Components/Sahred/BaseButton.vue'
import FormValidationErrors from '../../Components/Sahred/FormValidationErrors.vue'
import BaseLevel from '../../Components/Sahred/BaseLevel.vue'

const recovery = ref(false)

const form = useForm({
    code: '',
    recovery_code: ''
})

const recoveryCodeInput = ref(null)
const codeInput = ref(null)

const toggleRecovery = async () => {
    recovery.value ^= true

    await nextTick()

    if (recovery.value) {
        recoveryCodeInput.value?.focus()
        form.code = ''
    } else {
        codeInput.value?.focus()
        form.recovery_code = ''
    }
}

const submit = () => {
    form.post(route('two-factor.login'))
}
</script>

<template>
    <LayoutGuest>
        <Head title="Two-factor Confirmation"/>

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
                        <template v-if="! recovery">
                            Please confirm access to your account by entering the authentication code provided by your
                            authenticator
                            application.
                        </template>

                        <template v-else>
                            Please confirm access to your account by entering one of your emergency recovery codes.
                        </template>
                    </div>
                </FormField>

                <FormField
                    v-if="!recovery"
                    help="Please enter one-time code"
                    label="Code"
                    label-for="code"
                >
                    <FormControl
                        id="code"
                        v-model="form.code"
                        autocomplete="one-time-code"
                        autofocus
                        inputmode="numeric"
                        type="text"
                        @set-ref="codeInput = $event"
                    />
                </FormField>

                <FormField
                    v-else
                    help="Please enter recovery code"
                    label="Recovery Code"
                    label-for="recovery_code"
                >
                    <FormControl
                        id="recovery_code"
                        v-model="form.recovery_code"
                        autocomplete="one-time-code"
                        class="mt-1 block w-full"
                        type="text"
                        @set-ref="recoveryCodeInput = $event"
                    />
                </FormField>

                <BaseDivider/>

                <BaseLevel>
                    <BaseButton
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        color="info"
                        label="Log in"
                        type="submit"
                    />
                    <button @click.prevent="toggleRecovery">
                        <template v-if="!recovery">
                            Use a recovery code
                        </template>

                        <template v-else>
                            Use an authentication code
                        </template>
                    </button>
                </BaseLevel>
            </CardBox>
        </SectionFullScreen>
    </LayoutGuest>
</template>
