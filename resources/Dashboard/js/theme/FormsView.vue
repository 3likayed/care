<script setup>
import {reactive, ref} from "vue";
import {mdiAccount, mdiBallotOutline, mdiGithub, mdiMail} from "@mdi/js";
import SectionMain from "../Components/Sahred/SectionMain.vue";
import CardBox from "../Components/Sahred/CardBox.vue";
import FormCheckRadioGroup from "../Components/Sahred/FormCheckRadioGroup.vue";
import FormFilePicker from "../Components/Sahred/FormFilePicker.vue";
import FormField from "../Components/Sahred/FormField.vue";
import FormControl from "../Components/Sahred/FormControl.vue";
import BaseDivider from "../Components/Sahred/BaseDivider.vue";
import BaseButton from "../Components/Sahred/BaseButton.vue";
import BaseButtons from "../Components/Sahred/BaseButtons.vue";
import SectionTitle from "../Components/Sahred/SectionTitle.vue";
import LayoutAuthenticated from "../Layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "../Components/Sahred/SectionTitleLineWithButton.vue";
import NotificationBarInCard from "../Components/Sahred/NotificationBarInCard.vue";

const selectOptions = [
    {id: 1, label: "Business development"},
    {id: 2, label: "Marketing"},
    {id: 3, label: "Sales"},
];

const form = reactive({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "",
    department: selectOptions[0],
    subject: "",
    question: "",
});

const customElementsForm = reactive({
    checkbox: ["lorem"],
    radio: "one",
    switch: ["one"],
    file: null,
});

const submit = () => {
    //
};

const formStatusWithHeader = ref(true);

const formStatusCurrent = ref(0);

const formStatusOptions = ["info", "success", "danger", "warning"];

const formStatusSubmit = () => {
    formStatusCurrent.value = formStatusOptions[formStatusCurrent.value + 1]
        ? formStatusCurrent.value + 1
        : 0;
};
</script>

<template>
    <LayoutAuthenticated>
        <SectionMain>
            <SectionTitleLineWithButton
                :icon="mdiBallotOutline"
                main
                title="Forms example"
            >
                <BaseButton
                    :icon="mdiGithub"
                    color="contrast"
                    href="https://github.com/justboil/employee-one-vue-tailwind"
                    label="Star on GitHub"
                    rounded-full
                    small
                    target="_blank"
                />
            </SectionTitleLineWithButton>
            <CardBox
                form
                @submit.prevent="submit"
            >
                <FormField label="Grouped with icons">
                    <FormControl
                        v-model="form.name"
                        :icon="mdiAccount"
                    />
                    <FormControl
                        v-model="form.email"
                        :icon="mdiMail"
                        type="email"
                    />
                </FormField>

                <FormField
                    help="Do not enter the leading zero"
                    label="With help line"
                >
                    <FormControl
                        v-model="form.phone"
                        placeholder="Your phone number"
                        type="tel"
                    />
                </FormField>

                <FormField label="Dropdown">
                    <FormControl
                        v-model="form.department"
                        :options="selectOptions"
                    />
                </FormField>

                <BaseDivider/>

                <FormField
                    help="Your question. Max 255 characters"
                    label="Question"
                >
                    <FormControl
                        placeholder="Explain how we can help you"
                        type="textarea"
                    />
                </FormField>

                <template #footer>
                    <BaseButtons>
                        <BaseButton
                            color="info"
                            label="Submit"
                            type="submit"
                        />
                        <BaseButton
                            color="info"
                            label="Reset"
                            outline
                            type="reset"
                        />
                    </BaseButtons>
                </template>
            </CardBox>
        </SectionMain>

        <SectionTitle>Custom elements</SectionTitle>

        <SectionMain>
            <CardBox>
                <FormField label="Checkbox">
                    <FormCheckRadioGroup
                        v-model="customElementsForm.checkbox"
                        :options="{ lorem: 'Lorem', ipsum: 'Ipsum', dolore: 'Doloreck' }"
                        name="sample-checkbox"
                    />
                </FormField>

                <BaseDivider/>

                <FormField label="Radio">
                    <FormCheckRadioGroup
                        v-model="customElementsForm.radio"
                        :options="{ one: 'One', two: 'Two' }"
                        name="sample-radio"
                        type="radio"
                    />
                </FormField>

                <BaseDivider/>

                <FormField label="Switch">
                    <FormCheckRadioGroup
                        v-model="customElementsForm.switch"
                        :options="{ one: 'One', two: 'Two' }"
                        name="sample-switch"
                        type="switch"
                    />
                </FormField>

                <BaseDivider/>

                <FormFilePicker
                    v-model="customElementsForm.file"
                    label="Upload"
                />
            </CardBox>

            <SectionTitle>Form with status example</SectionTitle>

            <CardBox
                class="md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"
                is-form
                is-hoverable
                @submit.prevent="formStatusSubmit"
            >
                <NotificationBarInCard
                    :color="formStatusOptions[formStatusCurrent]"
                    :is-placed-with-header="formStatusWithHeader"
                >
          <span><b class="capitalize">{{
                  formStatusOptions[formStatusCurrent]
              }}</b>
            state</span>
                </NotificationBarInCard>
                <FormField label="Fields">
                    <FormControl
                        v-model="form.name"
                        :icon-left="mdiAccount"
                        help="Your full name"
                        placeholder="Name"
                    />
                </FormField>

                <template #footer>
                    <BaseButton
                        color="info"
                        label="Trigger"
                        type="submit"
                    />
                </template>
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
