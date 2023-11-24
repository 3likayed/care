<script setup>
import {computed} from "vue";

const props = defineProps({
    type: {
        type: String,
        default: "checkbox",
        validator: (value) => ["checkbox", "radio", "switch"].includes(value),
    },
    label: {
        type: String,
        default: null,
    },
    modelValue: {
        type: [Array, String, Number, Boolean],
        default: null,
    },
    checked: Boolean,
    value: {
        type: [String, Number, Boolean],
    },
    name: String,
});

const emit = defineEmits(["update:modelValue"]);

function handleChange(e) {

    let {value, checked} = e.target
    if (props.type !== "radio") {
        emit("update:modelValue", checked)
    } else if (props.type === "radio") {
        value === "true" ? value = true : '';
        value === "false" ? value = false : '';
        emit("update:modelValue", value)
    }

}

const inputType = computed(() =>
    props.type === "radio" ? "radio" : "checkbox"
);
</script>

<template>
    <label
        :class="type"
        class="me-6 mb-3 last:me-0"
    >
        <input
            :checked="checked"
            :name="name"
            :type="inputType"
            :value="value"
            @change="handleChange"
        >
        <span class="rtl:flex-row-reverse check"/>
        <span class="mx-2">{{ label }}</span>
    </label>
</template>
