<script setup>
import {mdiAccount, mdiAsterisk, mdiFormTextboxPassword, mdiMail,} from "@mdi/js";
import SectionMain from "../../Components/Sahred/SectionMain.vue";
import CardBox from "../../Components/Sahred/CardBox.vue";
import BaseDivider from "../../Components/Sahred/BaseDivider.vue";
import FormField from "../../Components/Sahred/FormField.vue";
import FormControl from "../../Components/Sahred/FormControl.vue";
import BaseButton from "../../Components/Sahred/BaseButton.vue";
import BaseButtons from "../../Components/Sahred/BaseButtons.vue";
import UserCard from "../../Components/Sahred/UserCard.vue";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import {useForm, usePage} from "@inertiajs/vue3";
import FormValidationErrors from "../../Components/Sahred/FormValidationErrors.vue";

const user = usePage().props.auth.user;

const profileForm = useForm({
  name: user.name,
  email: user.email,
});

const passwordForm = useForm({
  current_password: "",
  password: "",
  password_confirmation: "",
});

const submitProfile = () => {
  profileForm.post(route('dashboard.profile.update'), {
    preserveState: (page) => Object.keys(page.props.errors).length,

  });
};

const submitPass = () => {
  passwordForm.post(route('dashboard.profile.updatePassword'), {
    preserveState: (page) => Object.keys(page.props.errors).length,
  })
};
</script>

<template>
  <SectionMain>
    <SectionTitleLineWithButton :icon="mdiAccount" main title="الحساب الشخصي">
      <!--        <BaseButton
                href="https://github.com/justboil/employee-one-vue-tailwind"
                target="_blank"
                :icon="mdiGithub"
                label="Star on GitHub"
                color="contrast"
                rounded-full
                small
              />-->
    </SectionTitleLineWithButton>

    <UserCard class="mb-6"/>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <CardBox is-form @submit.prevent="submitProfile">
        <FormValidationErrors v-if="profileForm.hasErrors"/>
        <FormField :errors="profileForm.errors.name" label="الإسم">
          <FormControl
              v-model="profileForm.name"
              :icon="mdiAccount"
              autocomplete="name"
              name="name"
              required
          />
        </FormField>
        <FormField :errors="profileForm.errors.email" label="البريد الإليكتروني">
          <FormControl
              v-model="profileForm.email"
              :icon="mdiMail"
              autocomplete="email"
              name="email"
              required
              type="email"
          />
        </FormField>

        <template #footer>
          <BaseButtons>
            <BaseButton color="info" label="متابعة" type="submit"/>
          </BaseButtons>
        </template>
      </CardBox>

      <CardBox is-form @submit.prevent="submitPass">
        <FormValidationErrors v-if="passwordForm.hasErrors"/>
        <FormField
            :errors="passwordForm.errors.current_password"
            help="كلمة المرور الحالية*"
            label="كلمة المرور الحالية"
        >
          <FormControl
              v-model="passwordForm.current_password"
              :errors="passwordForm.errors.current_password"
              :icon="mdiAsterisk"
              autocomplete="current-password"
              name="current_password"
              required
              type="password"
          />
        </FormField>

        <BaseDivider/>

        <FormField :errors="passwordForm.errors.password" help="كلمة المرور الجديد*" label="كلمة المرور الجديد">
          <FormControl
              v-model="passwordForm.password"
              :icon="mdiFormTextboxPassword"
              autocomplete="new-password"
              name="password"
              required
              type="password"
          />
        </FormField>

        <FormField
            :errors="passwordForm.errors.password_confirmation"
            help="تأكيد كلمة المرور الجديدة *"
            label="تأكيد كلمة المرور الجديدة"
        >
          <FormControl
              v-model="passwordForm.password_confirmation"
              :icon="mdiFormTextboxPassword"
              autocomplete="new-password"
              name="password_confirmation"
              required
              type="password"
          />
        </FormField>

        <template #footer>
          <BaseButtons>
            <BaseButton color="info" label="متابعة" type="submit"/>
          </BaseButtons>
        </template>
      </CardBox>
    </div>
  </SectionMain>
</template>
