<script setup>
import Dropdown from 'primevue/dropdown';
import {computed, getCurrentInstance} from "vue";

import MultiSelect from 'primevue/multiselect';

const props = defineProps({
  name: {
    type: String,
    default: null,
  },
  optionValue: {
    type: String,
    default: 'id'
  },
  class: [String, Array],
  id: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
  options: {
    type: Array,
    default: null,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object],
    default: "",
  },
  hasFilter: {
    type: Boolean,
    default: true,
  },
  hasGroup: {
    type: Boolean,
    default: false
  },
  actions: Array | Object,
  required: Boolean,
  otherLabels: Array,
  isMultiple: {
    type: Boolean,
    default: false
  },
});
let emit = defineEmits(['update:modelValue', 'filter'])
const instance = getCurrentInstance();
const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
    instance?.proxy?.$forceUpdate();

  },
});
const pt = computed(() => ({
  root: {
    class: props.class,
  },
}))

let computedOptions = computed(() => props.options)

</script>

<template>
  <Dropdown
      v-if="!isMultiple"
      v-model="computedValue"
      :disabled="isDisabled"
      :empty-filter-message="__('no_data')"
      :empty-message="__('no_data')"
      :empty-selection-message="__('no_data')"
      :option-value="optionValue"
      :optionGroupChildren="hasGroup ? 'items' : null"
      :optionGroupLabel="hasGroup ? 'name' : null"
      :options="computedOptions"
      :placeholder="placeholder"
      :pt="pt"
      filter
      option-label="name"
      showClear
      @filter="(value)=>emit('filter',value)"
  />
  <MultiSelect
      v-else
      v-model="computedValue"
      :disabled="isDisabled"
      :empty-filter-message="__('no_data')"
      :empty-message="__('no_data')"
      :empty-selection-message="__('no_data')"
      :option-value="optionValue"
      :options="computedOptions"
      :placeholder="placeholder"
      :pt="pt"
      display="chip"
      filter
      option-label="name"
      showClear
      @filter="(value)=>emit('filter',value)"/>

</template>

<style scoped>

</style>
