<script setup>
import {computed, defineAsyncComponent, ref, useSlots} from "vue";
import {mdiPlusCircle} from "@mdi/js";
import BaseButton from "../Sahred/BaseButton.vue";
import SectionTitleLineWithButton from "../Sahred/SectionTitleLineWithButton.vue";
import ModelData from "./ModelData.vue";


let props = defineProps({
    data: Object,
    options: Object,
    icon: String,
    model: String,
    hasPagination: Boolean,
    hasSearch: Boolean,
    hasCreate: {
        type: Boolean,
        default: true,
    }
});

let showCreate = ref(false);
const firstLetterCap = props.model.charAt(0).toUpperCase()
const remainingLetters = props.model.slice(1)
const capitalizedWord = firstLetterCap + remainingLetters


let listData = computed(function () {

    let [items, pagination] = props.hasPagination ?
        [props.data.data, props.data.meta]
        : [props.data, null];

    return {
        list: items,
        pagination: pagination,
    }
});


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
        :icon="icon"
        :title="__(modelResolver(model))"
        main
    >
        <BaseButton
            v-if="can(`${modelResolver(model)}.create`) && hasCreate"
            :icon="mdiPlusCircle"
            color="success"
            @click="click"
        />
    </SectionTitleLineWithButton>

    <component
        :is="listComponent"
        :data="listData"
        :has-search="hasSearch"
        v-bind="options?{options:options}:{}"
    />

    <slot name="create">
        <ModelData
            v-if="showCreate && !customCreate "
            :data="options?.create?.data"
            :model="model"
            :show="showCreate"
            operation="create"
            v-bind="options?.create ? {options:options.create}:{}"
            @cancel="showCreate=false"
        />
    </slot>
</template>

<style scoped>

</style>
