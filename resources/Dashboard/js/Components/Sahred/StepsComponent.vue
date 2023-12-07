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
import {useStepStore} from "../../Stores/step.js";

let props = defineProps({
    steps: Object | Array,
    modelValue: Number,
})

let active = ref(useStepStore().getStep());
let emit = defineEmits(['update:modelValue'])

function stepChange(key) {
    active.value = key
    emit('update:modelValue', key)
    useStepStore().setStep(key)
}

const stepName = (step) => typeof step === 'string' ? step : step.name
const stepPermission = (step) => typeof step === 'string' ? null : step.permission;


</script>
<style scoped>

</style>
