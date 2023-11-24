<script setup>
import {computed, defineAsyncComponent, ref, useSlots} from "vue";
import {mdiLockAlertOutline, mdiPlusCircle} from "@mdi/js";
import BaseButton from "../Sahred/BaseButton.vue";
import SectionTitleLineWithButton from "../Sahred/SectionTitleLineWithButton.vue";
import ModelData from "./ModelData.vue";


let props = defineProps({
    data: Object,
    addonData: {
        type: Object,
        default: {},
    },
    model: String,
    hasPagination: Boolean,
    hasSearch: Boolean,
    hasCreate: {
        type: Boolean,
        default: Boolean,
    }
});

let showCreate = ref(false);
const firstLetterCap = props.model.charAt(0).toUpperCase()
const remainingLetters = props.model.slice(1)
const capitalizedWord = firstLetterCap + remainingLetters

let [items, pagination] = props.hasPagination ? [
        computed(() => props.data.data),
        computed(() => props.data.meta)
    ]
    : [
        computed(() => props.data),
        computed(() => null)
    ];

//example "./Employee/EmployeeList.vue"
let listComponent = defineAsyncComponent(() => import(`./${capitalizedWord}/${capitalizedWord}List.vue`))
let emit = defineEmits(['create'])
let slots = useSlots()
let customCreate = slots['create'];
const click = () => {
    if (!customCreate) {
        showCreate.value = true
    } else {
        emit('create');
    }
}

</script>

<template>
    <SectionTitleLineWithButton
        :icon="mdiLockAlertOutline"
        :title="__(modelResolver(model))"
        main
    >
        <BaseButton
            v-if="can(`${modelResolver(model)}.create`)"
            :icon="mdiPlusCircle"
            color="success"
            @click="click"
        />
    </SectionTitleLineWithButton>

    <component
        :is="listComponent"
        :data="items"
        :has-search="hasSearch"
        :pagination="props.hasPagination ? data.meta:null"
    />

    <slot name="create">
        <ModelData
            v-if="showCreate && !customCreate"
            :data="items"
            :model="model"
            :show="showCreate"
            operation="create"
            @cancel="showCreate=false"
        />
    </slot>
</template>

<style scoped>

</style>
