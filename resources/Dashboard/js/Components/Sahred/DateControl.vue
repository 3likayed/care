<script setup>
import Calendar from 'primevue/calendar';
import {computed} from "vue";
import moment from "moment";

const props = defineProps({
    name: {
        type: String,
        default: null,
    },
    class: [String, Array],
    min: String,
    max: String,
    maxWidth: String,
    id: {
        type: String,
        default: null,
    },
    autocomplete: {
        type: String,
        default: null,
    },
    inline: Boolean,
    errors: {
        type: String,
        default: null,
    },
    maxlength: {
        type: String,
        default: null,
    },
    placeholder: {
        type: String,
        default: null,
    },
    inputmode: {
        type: String,
        default: null,
    },
    icon: {
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
        default: null,
    },
    actions: Array | Object,
    required: Boolean,
    borderless: Boolean,
    transparent: Boolean,
    ctrlKFocus: Boolean,
    otherLabels: Array,
    dir: String,
    isMultiple: {
        type: Boolean,
        default: false
    },
});
let emit = defineEmits(['update:modelValue'])

const computedValue = computed({
    get: () => {
        let value = props.modelValue ?? ''
        value = value.split('|');
        value = value.map(item => {
            return item !== "" ? moment(item).toDate() : undefined;
        }).filter(e => e)

        if (props.type !== 'date-range') {
            return value[0]
        }
        return value;
    },
    set: (value) => {
        if (Array.isArray(value)) {
            value = value.map(item => {
                return item ? moment(item).format('YYYY-MM-DDTHH:mm') : '';
            }).join('|')
        } else {
            value = value ? moment(value).format('YYYY-MM-DDTHH:mm') : ''
        }
        emit("update:modelValue", value);
    },
});

const pt = computed(() => ({
    root: {
        class: props.class,
    },
}))

const format = () => {
    if (props.type === 'datetime') {
        return 'YYYY-MM-DDTHH:mm'
    }
    return 'YYYY-MM-DD'

}

</script>

<template>
    <Calendar v-model="computedValue" :inline="inline" :pt="pt"
              :selectionMode="type==='date-range' ? 'range' : 'single'"
              :show-time="type==='datetime'"
              hour-format="12" showButtonBar/>
</template>

<style scoped>

</style>
