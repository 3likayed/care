<script setup>
import {computed, ref} from "vue";
import {useStyleStore} from "../Stores/style.js";
import {
    mdiAlert,
    mdiAlertCircle,
    mdiCheckCircle,
    mdiClose,
    mdiContrastCircle,
    mdiInformation,
    mdiOpenInNew,
    mdiReload,
    mdiTrendingUp,
} from "@mdi/js";
import SectionMain from "../Components/Sahred/SectionMain.vue";
import CardBox from "../Components/Sahred/CardBox.vue";
import BaseButtons from "../Components/Sahred/BaseButtons.vue";
import BaseButton from "../Components/Sahred/BaseButton.vue";
import NotificationBar from "../Components/Sahred/NotificationBar.vue";
import BaseDivider from "../Components/Sahred/BaseDivider.vue";
import CardBoxModal from "../Components/Sahred/CardBoxModal.vue";
import SectionTitle from "../Components/Sahred/SectionTitle.vue";
import FormField from "../Components/Sahred/FormField.vue";
import FormCheckRadioGroup from "../Components/Sahred/FormCheckRadioGroup.vue";
import LayoutAuthenticated from "../Layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "../Components/Sahred/SectionTitleLineWithButton.vue";
import CardBoxComponentEmpty from "../Components/Sahred/CardBoxComponentEmpty.vue";
import CardBoxComponentTitle from "../Components/Sahred/CardBoxComponentTitle.vue";
import PillTag from "../Components/Sahred/PillTag.vue";

const modalOneActive = ref(false);

const modalTwoActive = ref(false);

const modalThreeActive = ref(false);

const notificationSettingsModel = ref([]);

const notificationsOutline = computed(
    () => notificationSettingsModel.value.indexOf("outline") > -1
);

const buttonSettingsModel = ref([]);

const buttonsOutline = computed(
    () => buttonSettingsModel.value.indexOf("outline") > -1
);

const buttonsSmall = computed(
    () => buttonSettingsModel.value.indexOf("small") > -1
);

const buttonsDisabled = computed(
    () => buttonSettingsModel.value.indexOf("disabled") > -1
);

const buttonsRounded = computed(
    () => buttonSettingsModel.value.indexOf("rounded") > -1
);

const pillsSettingsModel = ref(["icon"]);

const pillsOutline = computed(
    () => pillsSettingsModel.value.indexOf("outline") > -1
);

const pillsSmall = computed(
    () => pillsSettingsModel.value.indexOf("small") > -1
);

const pillsIcon = computed(() =>
    pillsSettingsModel.value.indexOf("icon") > -1 ? mdiTrendingUp : null
);

const styleStore = useStyleStore();
</script>

<template>
    <LayoutAuthenticated>
        <CardBoxModal :is-dirty="form.isDirty"
            v-model="modalOneActive"
            button-label="Confirm"
            has-cancel
            title="Please confirm action"
        >
            <p>This is sample modal</p>
            <p>Lorem ipsum dolor</p>
        </CardBoxModal>

        <CardBoxModal :is-dirty="form.isDirty"
            v-model="modalTwoActive"
            button="danger"
            title="Unhandled exception"
        >
            <p>This is sample modal</p>
            <p>Lorem ipsum dolor</p>
        </CardBoxModal>

        <CardBoxModal :is-dirty="form.isDirty"
            v-model="modalThreeActive"
            button="success"
            title="Success"
        >
            <p>This is sample modal</p>
            <p>Lorem ipsum dolor</p>
        </CardBoxModal>

        <SectionTitle first>
            Dark mode
        </SectionTitle>

        <SectionMain>
            <CardBox class="md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto">
                <div
                    class="text-center py-24 lg:py-12 text-gray-500 dark:text-slate-400"
                >
                    <BaseButton
                        color="contrast"
                        label="Toggle"
                        @click="styleStore.setDarkMode()"
                    />
                </div>
            </CardBox>
        </SectionMain>

        <SectionTitle>Modal examples</SectionTitle>

        <SectionMain>
            <div class="space-y-12">
                <CardBox
                    class="cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto"
                    is-hoverable
                    @click="modalOneActive = true"
                >
                    <CardBoxComponentTitle title="Please confirm action">
                        <BaseButton
                            :icon="mdiClose"
                            color="whiteDark"
                            rounded-full
                            small
                        />
                    </CardBoxComponentTitle>
                    <div class="space-y-3">
                        <p>Click to see in action</p>
                    </div>

                    <template #footer>
                        <BaseButtons>
                            <BaseButton
                                color="info"
                                label="Confirm"
                            />
                            <BaseButton
                                color="info"
                                label="Cancel"
                                outline
                            />
                        </BaseButtons>
                    </template>
                </CardBox>

                <CardBox
                    class="cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto"
                    is-hoverable
                    @click="modalTwoActive = true"
                >
                    <CardBoxComponentTitle title="Unhandled exception"/>

                    <div class="space-y-3">
                        <p>Click to see in action</p>
                    </div>

                    <template #footer>
                        <BaseButtons>
                            <BaseButton
                                color="danger"
                                label="Done"
                            />
                        </BaseButtons>
                    </template>
                </CardBox>

                <CardBox
                    class="cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto"
                    is-hoverable
                    @click="modalThreeActive = true"
                >
                    <CardBoxComponentTitle title="Success"/>

                    <div class="space-y-3">
                        <p>Click to see in action</p>
                    </div>

                    <template #footer>
                        <BaseButton
                            color="success"
                            label="Done"
                        />
                    </template>
                </CardBox>
            </div>
        </SectionMain>

        <SectionTitle custom>
            <h1 class="text-2xl text-gray-500 dark:text-slate-400">
                Notifications
            </h1>
            <div class="flex items-center justify-center mt-6">
                <FormCheckRadioGroup
                    v-model="notificationSettingsModel"
                    :options="{ outline: 'Outline' }"
                    name="notifications-switch"
                    type="switch"
                />
            </div>
        </SectionTitle>

        <SectionMain>
            <NotificationBar
                :icon="mdiInformation"
                :outline="notificationsOutline"
                color="info"
            >
                <b>Info state</b>. NotificationBar
                <template #right>
                    <BaseButton
                        :color="notificationsOutline ? 'info' : 'white'"
                        :outline="notificationsOutline"
                        label="Button"
                        rounded-full
                        small
                    />
                </template>
            </NotificationBar>

            <NotificationBar
                :icon="mdiCheckCircle"
                :outline="notificationsOutline"
                color="success"
            >
                <b>Success state</b>. NotificationBar
                <template #right>
                    <BaseButton
                        :color="notificationsOutline ? 'success' : 'white'"
                        :outline="notificationsOutline"
                        label="Button"
                        rounded-full
                        small
                    />
                </template>
            </NotificationBar>

            <NotificationBar
                :icon="mdiAlert"
                :outline="notificationsOutline"
                color="warning"
            >
                <b>Warning state</b>. NotificationBar
                <template #right>
                    <BaseButton
                        :color="notificationsOutline ? 'warning' : 'white'"
                        :outline="notificationsOutline"
                        label="Button"
                        rounded-full
                        small
                    />
                </template>
            </NotificationBar>

            <NotificationBar
                :icon="mdiAlertCircle"
                :outline="notificationsOutline"
                color="danger"
            >
                <b>Danger state</b>. NotificationBar
                <template #right>
                    <BaseButton
                        :color="notificationsOutline ? 'danger' : 'white'"
                        :outline="notificationsOutline"
                        label="Button"
                        rounded-full
                        small
                    />
                </template>
            </NotificationBar>

            <NotificationBar
                :icon="mdiContrastCircle"
                :outline="notificationsOutline"
                color="contrast"
            >
                <b>Contrast</b>. NotificationBar
            </NotificationBar>
        </SectionMain>

        <SectionTitle>Buttons</SectionTitle>

        <SectionMain>
            <CardBox>
                <FormField label="Settings">
                    <FormCheckRadioGroup
                        v-model="buttonSettingsModel"
                        :options="{
              outline: 'Outline',
              small: 'Small',
              rounded: 'Rounded',
              disabled: 'Disabled',
            }"
                        name="buttons-switch"
                        type="switch"
                    />
                </FormField>

                <BaseDivider/>

                <BaseButtons>
                    <BaseButton
                        :disabled="buttonsDisabled"
                        :outline="buttonsOutline"
                        :rounded-full="buttonsRounded"
                        :small="buttonsSmall"
                        color="lightDark"
                        label="Button"
                    />
                    <BaseButton
                        :disabled="buttonsDisabled"
                        :outline="buttonsOutline"
                        :rounded-full="buttonsRounded"
                        :small="buttonsSmall"
                        color="contrast"
                        label="Button"
                    />
                    <BaseButton
                        :disabled="buttonsDisabled"
                        :outline="buttonsOutline"
                        :rounded-full="buttonsRounded"
                        :small="buttonsSmall"
                        color="info"
                        label="Button"
                    />
                    <BaseButton
                        :disabled="buttonsDisabled"
                        :outline="buttonsOutline"
                        :rounded-full="buttonsRounded"
                        :small="buttonsSmall"
                        color="success"
                        label="Button"
                    />
                    <BaseButton
                        :disabled="buttonsDisabled"
                        :outline="buttonsOutline"
                        :rounded-full="buttonsRounded"
                        :small="buttonsSmall"
                        color="warning"
                        label="Button"
                    />
                    <BaseButton
                        :disabled="buttonsDisabled"
                        :outline="buttonsOutline"
                        :rounded-full="buttonsRounded"
                        :small="buttonsSmall"
                        color="danger"
                        label="Button"
                    />
                </BaseButtons>

                <BaseDivider/>

                <BaseButtons>
                    <BaseButton
                        :disabled="buttonsDisabled"
                        :icon="mdiOpenInNew"
                        :outline="buttonsOutline"
                        :rounded-full="buttonsRounded"
                        :small="buttonsSmall"
                        color="lightDark"
                        label="Button"
                    />
                    <BaseButton
                        :disabled="buttonsDisabled"
                        :icon="mdiOpenInNew"
                        :outline="buttonsOutline"
                        :rounded-full="buttonsRounded"
                        :small="buttonsSmall"
                        color="contrast"
                        label="Button"
                    />
                    <BaseButton
                        :disabled="buttonsDisabled"
                        :icon="mdiOpenInNew"
                        :outline="buttonsOutline"
                        :rounded-full="buttonsRounded"
                        :small="buttonsSmall"
                        color="info"
                        label="Button"
                    />
                    <BaseButton
                        :disabled="buttonsDisabled"
                        :icon="mdiOpenInNew"
                        :outline="buttonsOutline"
                        :rounded-full="buttonsRounded"
                        :small="buttonsSmall"
                        color="success"
                        label="Button"
                    />
                    <BaseButton
                        :disabled="buttonsDisabled"
                        :icon="mdiOpenInNew"
                        :outline="buttonsOutline"
                        :rounded-full="buttonsRounded"
                        :small="buttonsSmall"
                        color="warning"
                        label="Button"
                    />
                    <BaseButton
                        :disabled="buttonsDisabled"
                        :icon="mdiOpenInNew"
                        :outline="buttonsOutline"
                        :rounded-full="buttonsRounded"
                        :small="buttonsSmall"
                        color="danger"
                        label="Button"
                    />
                </BaseButtons>

                <BaseDivider/>

                <BaseButtons>
                    <BaseButton
                        :disabled="buttonsDisabled"
                        :icon="mdiOpenInNew"
                        :outline="buttonsOutline"
                        :rounded-full="buttonsRounded"
                        :small="buttonsSmall"
                        color="lightDark"
                    />
                    <BaseButton
                        :disabled="buttonsDisabled"
                        :icon="mdiOpenInNew"
                        :outline="buttonsOutline"
                        :rounded-full="buttonsRounded"
                        :small="buttonsSmall"
                        color="contrast"
                    />
                    <BaseButton
                        :disabled="buttonsDisabled"
                        :icon="mdiOpenInNew"
                        :outline="buttonsOutline"
                        :rounded-full="buttonsRounded"
                        :small="buttonsSmall"
                        color="info"
                    />
                    <BaseButton
                        :disabled="buttonsDisabled"
                        :icon="mdiOpenInNew"
                        :outline="buttonsOutline"
                        :rounded-full="buttonsRounded"
                        :small="buttonsSmall"
                        color="success"
                    />
                    <BaseButton
                        :disabled="buttonsDisabled"
                        :icon="mdiOpenInNew"
                        :outline="buttonsOutline"
                        :rounded-full="buttonsRounded"
                        :small="buttonsSmall"
                        color="warning"
                    />
                    <BaseButton
                        :disabled="buttonsDisabled"
                        :icon="mdiOpenInNew"
                        :outline="buttonsOutline"
                        :rounded-full="buttonsRounded"
                        :small="buttonsSmall"
                        color="danger"
                    />
                </BaseButtons>
            </CardBox>
        </SectionMain>

        <SectionTitle>Pills</SectionTitle>

        <SectionMain>
            <CardBox>
                <FormField label="Settings">
                    <FormCheckRadioGroup
                        v-model="pillsSettingsModel"
                        :options="{ outline: 'Outline', small: 'Small', icon: 'Icon' }"
                        name="buttons-switch"
                        type="switch"
                    />
                </FormField>

                <BaseDivider/>

                <BaseButtons>
                    <PillTag
                        :icon="pillsIcon"
                        :outline="pillsOutline"
                        :small="pillsSmall"
                        color="contrast"
                        label="Contrast"
                    />
                    <PillTag
                        :icon="pillsIcon"
                        :outline="pillsOutline"
                        :small="pillsSmall"
                        color="info"
                        label="Info"
                    />
                    <PillTag
                        :icon="pillsIcon"
                        :outline="pillsOutline"
                        :small="pillsSmall"
                        color="success"
                        label="Success"
                    />
                    <PillTag
                        :icon="pillsIcon"
                        :outline="pillsOutline"
                        :small="pillsSmall"
                        color="warning"
                        label="Warning"
                    />
                    <PillTag
                        :icon="pillsIcon"
                        :outline="pillsOutline"
                        :small="pillsSmall"
                        color="danger"
                        label="Danger"
                    />
                </BaseButtons>
            </CardBox>
        </SectionMain>

        <SectionTitle>Cards</SectionTitle>

        <SectionMain>
            <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
                <CardBox>
                    <CardBoxComponentTitle title="With title & icon">
                        <BaseButton
                            :icon="mdiReload"
                            color="whiteDark"
                            rounded-full
                        />
                    </CardBoxComponentTitle>
                    <div class="space-y-3">
                        <p>Card with title, icon & footer</p>
                    </div>

                    <template #footer>
                        <BaseButtons>
                            <BaseButton
                                color="info"
                                label="Confirm"
                            />
                            <BaseButton
                                color="info"
                                label="Cancel"
                                outline
                            />
                        </BaseButtons>
                    </template>
                </CardBox>

                <CardBox>
                    Just body & footer

                    <template #footer>
                        <BaseButtons>
                            <BaseButton
                                color="info"
                                label="Confirm"
                            />
                            <BaseButton
                                color="info"
                                label="Cancel"
                                outline
                            />
                        </BaseButtons>
                    </template>
                </CardBox>
            </div>

            <SectionTitleLineWithButton
                :icon="mdiAlertCircle"
                title="Empty variation"
            />

            <CardBox>
                <CardBoxComponentEmpty/>
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
