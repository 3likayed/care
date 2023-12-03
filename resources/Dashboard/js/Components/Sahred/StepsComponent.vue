<template>
    <BaseButtons class="flex-row">

        <BaseButton
            v-for="(step,key) in steps"
            v-show="can(stepPermission(step))"
            :key="key"
            :active="key===active"
            :color="key===active ?'contrast' :'lightDark'"
            :label="__(stepName(step))"
            class="flex-auto text-center"
            outline
            @click="stepChange(key)"
        />
    </BaseButtons>
</template>

<script setup>

import BaseButtons from "./BaseButtons.vue";
import BaseButton from "./BaseButton.vue";
import {ref} from "vue";
import {can} from "../../Globals.js";

let active = ref(0);
let props = defineProps({
    steps: Object | Array,
    modelValue: Number,
})
const stepName = (step) => typeof step === 'string' ? step : step.name
const stepPermission = (step) => typeof step === 'string' ? null : step.permission;

let emit = defineEmits(['update:modelValue'])

function stepChange(key) {
    active.value = key
    emit('update:modelValue', key)
}
</script>
<style scoped>

</style>
