<script setup>
import {ref} from "vue";
import {mdiCheckDecagram} from "@mdi/js";
import BaseLevel from "./BaseLevel.vue";
import UserAvatarCurrentUser from "./UserAvatarCurrentUser.vue";
import CardBox from "./CardBox.vue";
import FormCheckRadio from "./FormCheckRadio.vue";
import PillTag from "./PillTag.vue";
import {usePage} from "@inertiajs/vue3";


const name = usePage().props.auth.user.name;

const userSwitchVal = ref(false);
</script>

<template>
  <CardBox>
    <BaseLevel type="lg:justify-start justify-center ">
      <UserAvatarCurrentUser class="lg:mx-12"/>
      <div class="space-y-3 text-center md:text-start lg:mx-12">
        <div class="flex justify-center md:block">
          <FormCheckRadio
              v-model="userSwitchVal"
              name="notifications-switch"
              type="switch"
              label="Notifications"
              :input-value="true"
          />
        </div>
        <h1 class="text-2xl">
          مرحبًا يا <b>{{ name }}</b
        >!
        </h1>
        <div class="flex justify-center md:block">
          <PillTag label="Verified" color="info" :icon="mdiCheckDecagram"/>
        </div>
      </div>
    </BaseLevel>
  </CardBox>
</template>
