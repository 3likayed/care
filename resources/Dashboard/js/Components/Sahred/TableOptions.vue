<template>
  <BaseButtons no-wrap type="justify-end lg:justify-start">
    <BaseButton
        v-if="hasShow"
        :disabled="model ? !can(`${Pluralize(model)}.show`) : false"
        :icon="mdiEyeOutline"
        color="contrast"
        small
        @click="Model.show(model,data.id)"
    />
    <BaseButton
        v-if="hasEdit"
        :disabled="model ? !can(`${Pluralize(model)}.edit`) : false"
        :icon="mdiSquareEditOutline"
        color="info"
        small
        @click="showEdit=true "

    />
    <BaseButton
        v-if="hasDestroy"
        :disabled="model ? !can(`${Pluralize(model)}.delete`) : false "
        :icon="mdiTrashCanOutline"
        color="danger"
        small
        @click="showDelete=true"
    />
    <slot/>
  </BaseButtons>

  <ModelData v-if="showEdit"
             :data="data"
             :model="model"
             :show="showEdit"
             operation="edit"
             @cancel="showEdit=false"/>
  <ActionConfirmComponent v-model="showDelete" @confirm="Model.delete(model,data.id)"/>

</template>

<script setup>

import {mdiEyeOutline, mdiSquareEditOutline, mdiTrashCanOutline} from "@mdi/js";
import BaseButton from "./BaseButton.vue";
import BaseButtons from "./BaseButtons.vue";
import {can} from "../../Globals.js";
import {Model} from "../../Utils";
import ModelData from "../Models/ModelData.vue";
import {ref} from "vue";
import ActionConfirmComponent from "./ActionConfirmComponent.vue";
import Pluralize from "pluralize";

let showEdit = ref(false);
let showDelete = ref(false);

let props = defineProps({
  hasEdit: {
    type: Boolean,
    default: true,
  },
  hasDestroy: {
    type: Boolean,
    default: true,
  },
  hasShow: {
    type: Boolean,
    default: true,
  },
  model: String,
  data: Object
})

</script>
<style scoped>

</style>
