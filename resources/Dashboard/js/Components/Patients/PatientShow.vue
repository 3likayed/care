<script setup>

import {__} from "../../Globals.js";
import PatientEdit from "../Patients/PatientEdit.vue";

let props = defineProps({
    data: Object,
})
</script>

<template>
    <PatientEdit
        is-disabled
        :title="__('field_data',{field:'patient'})"
        :data="data"
        :is-modal="false"
    />
</template>

<style scoped>

</style>
