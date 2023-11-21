<script setup>

import FormWithLabelField from "./FormWithLabelField.vue";
import {usePage} from "@inertiajs/vue3";
import {computed} from "vue";
import {__} from "../../Globals.js";
import FormFilePicker from "./FormFilePicker.vue";
import BaseButton from "./BaseButton.vue";

let locales = usePage().props.locales;

let props = defineProps({
  modelValue: {
    type: [Object, File, Array, FileList],
    default: null,
  },
  type: {
    type: String,
    default: 'image'
  },
  errors: String,
  name: String,
  label: String,
  isMultiple: Boolean,
  actions: Object,
});

function handleAction(key) {
  emit('action', key)
}


const emit = defineEmits(["update:modelValue", "action"]);
const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
let url = URL;
</script>

<template>
  <FormWithLabelField :cols="{lg:1}" :errors="$page.props.errors[name]" :label="label ?? __('add_image')">
    <div class="grid grid-cols-1 xl:grid-cols-2 justify-items-center items-center gap-10 ">
      <div v-for="(file,key) in computedValue"
           :key="key"
           class="my-auto ">
        <img v-if="type==='image'" :alt="file.name"
             :src="url.createObjectURL(file)"
             class=" h-auto rounded-lg self-center "/>
        <video v-else-if="type==='video'" class="h-auto rounded-lg self-center" controls>
          <source :src="url.createObjectURL(file)" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div v-if="$page.props.errors[name+'.'+key]"
             class="text-xs text-red-500 dark:text-red-400 mt-1">
          {{ $page.props.errors[name+'.'+key] }}
        </div>
        <div class="flex gap-5 items-center">
          <p :class="{'w-3/4':actions ,'w-full':!actions}"
             class="mt-2 text-sm text-center break-all text-gray-500 dark:text-gray-400 ">
            {{ file.name }}
          </p>
          <div v-if="actions" class="flex gap-2 justify-end w-1/4">
            <BaseButton v-for="(action,actionKey) in actions"
                        :key="actionKey"
                        :color="action.color"
                        :icon="action.icon"
                        @click="handleAction(actionKey)"/>
          </div>
        </div>
      </div>
    </div>
    <FormFilePicker
        v-model="computedValue"
        :accept="type==='image' ? 'image/*' : (type==='video' ? 'video/*' :'' )"
        :is-multiple="isMultiple"
        :label="__('select')"
        :name="name"
    />
  </FormWithLabelField>
</template>

<style scoped>

</style>
