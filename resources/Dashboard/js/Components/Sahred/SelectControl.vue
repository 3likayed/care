<script setup>
import Dropdown from 'primevue/dropdown';
import {computed} from "vue";

const props = defineProps({
    name: {
        type: String,
        default: null,
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
    actions: Array | Object,
    required: Boolean,
    otherLabels: Array,
    multiple: {
        type: Boolean,
        default: false
    },
});
let emit = defineEmits(['update:modelValue', 'filter'])
const computedValue = computed({
    get: () => props.modelValue,
    set: (value) => {
        emit("update:modelValue", value);
    },
});
const pt = {
    root: {
        class: props.class,
    },
}

let computedOptions = computed(() => props.options)

</script>

<template>
    <Dropdown v-model="computedValue"
              :empty-filter-message="__('no_data')"
              :empty-message="__('no_data')"
              :empty-selection-message="__('no_data')"
              :options="computedOptions"
              :pt="pt"
              filter
              option-label="name"
              option-value="id"
              @filter="(value)=>emit('filter',value)"
    />

</template>

<style scoped>

</style>
