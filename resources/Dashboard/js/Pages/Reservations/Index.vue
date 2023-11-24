<template>
    <SectionMain>
        <BreadCrumb
            :items="[{name: __(`${modelResolver(model)}`), href: route(`dashboard.${modelResolver(model)}.index`)}]"/>
        <ModelList
            :data="data"
            :model="model"
            :options="options"
            :icon="mdiFormatListBulleted"
            has-pagination
            has-search

        />
    </SectionMain>
</template>

<script setup>

import SectionMain from "../../Components/Sahred/SectionMain.vue";

import {computed} from "vue";
import {usePage} from "@inertiajs/vue3";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import ModelList from "../../Components/Models/ModelList.vue";
import {mdiFormatListBulleted} from "@mdi/js";

let model = "reservation"
let data = computed(() => usePage().props.data);
let options = {
    update: {
        disabled: ['patient_id']
    }
}

</script>
<style scoped>

</style>
