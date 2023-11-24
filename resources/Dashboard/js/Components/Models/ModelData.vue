<script setup>
import {defineAsyncComponent} from "vue";

let props = defineProps({
    data: {
        type: Object,
        default: {},
    },
    addonData:Object,
    model: String,
    isModal: {
        type: Boolean,
        default: true
    },
    operation: String,
});

const firstLetter = props.model.charAt(0)
const firstLetterCap = firstLetter.toUpperCase()
const remainingLetters = props.model.slice(1)

const capitalizedWord = firstLetterCap + remainingLetters
//example "./Employee/EmployeeData.vue"
let component = defineAsyncComponent(() => import(`./${capitalizedWord}/${capitalizedWord}Data.vue`))

</script>

<template>
    <component
        :is="component"
        :data="data"
        :is-modal="isModal"
        :operation="operation"
        @cancel="$emit('cancel')"
    />
</template>

<style scoped>

</style>
