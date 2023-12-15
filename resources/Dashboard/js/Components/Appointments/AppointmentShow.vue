<script setup>

import {__} from "../../Globals.js";
import AppointmentEdit from "./AppointmentEdit.vue";

let props = defineProps({
    data: Object,
})
</script>

<template>
    <AppointmentEdit
        is-disabled
        :appointment-types="$page.props.appointment_types"
        :doctors="$page.props.doctors"
        :title="__('field_data',{field:'appointment'})"
        :data="data"
        :is-modal="false"
    />
</template>

<style scoped>

</style>
