<script setup>
import FormField from "./FormField.vue";
import FormWithLabelField from "./FormWithLabelField.vue";
import {usePage} from "@inertiajs/vue3";
import FormControl from "./FormControl.vue";
import {computed} from "vue";

let locales = usePage().props.locales;
let props = defineProps({
    modelValue: Object
});

const emit = defineEmits(["update:modelValue"]);
const computedValue = computed({
    get: () => props.modelValue,
    set: (value) => {
        emit("update:modelValue", value);
    },
});
</script>

<template>
    <FormWithLabelField :label="__('title')">
        <FormField
            v-for="locale in locales"
            :errors="computedValue.errors[`meta.title.${locale}`]"
            :label="__(locale)"
        >
            <FormControl
                v-model="computedValue.meta.title[locale]"
                autocomplete="title"
                name="title"
                required
            />
        </FormField>
    </FormWithLabelField>
    <FormWithLabelField :label="__('slug')">
        <FormField
            v-for="locale in locales"
            :errors="computedValue.errors[`meta.slug.${locale}`]"
            :label="__(locale)"
        >
            <FormControl
                v-model="computedValue.meta.slug[locale]"
                autocomplete="slug"
                name="slug"
                required
            />
        </FormField>
    </FormWithLabelField>
    <FormWithLabelField :label="__('keywords')">
        <FormField
            v-for="locale in locales"
            :errors="computedValue.errors[`meta.keywords.${locale}`]"
            :label="__(locale)"
        >
            <FormControl
                v-model="computedValue.meta.keywords[locale]"

                autocomplete="keywords"
                name="keywords"
                required
            />
        </FormField>
    </FormWithLabelField>
    <FormWithLabelField
        :cols="{lg:1}"
        :label="__('description')"
    >
        <FormField
            v-for="locale in locales"
            :errors="computedValue.errors[`meta.description.${locale}`]"
            :label="__(locale)"
        >
            <FormControl
                v-model="computedValue.meta.description[locale]"
                autocomplete="description"
                name="description"
                required
                type="textarea"
            />
        </FormField>
    </FormWithLabelField>
</template>

<style scoped>

</style>
