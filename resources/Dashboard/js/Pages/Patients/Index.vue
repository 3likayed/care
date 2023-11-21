<template>
  <SectionMain>
    <BreadCrumb :items="[{name: __(`${Pluralize(model)}`), href: route(`dashboard.${Pluralize(model)}.index`)}]"/>
    <ModelList :data="data" :model="model" has-pagination has-search/>
  </SectionMain>


</template>

<script setup>

import SectionMain from "../../Components/Sahred/SectionMain.vue";

import {computed} from "vue";
import {usePage} from "@inertiajs/vue3";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import Pluralize from "pluralize";
import ModelList from "../../Components/Models/ModelList.vue";

let model = "patient"
let data = computed(() => usePage().props.data);


</script>
<style scoped>

</style>
