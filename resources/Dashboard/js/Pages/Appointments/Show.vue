<template>
    <SectionMain>
        <BreadCrumb :items="breadcrumbItems"/>
        <CardBox class="mb-4">
            <StepsComponent
                v-model="step"
                :steps="steps"
            />
        </CardBox>
        <section v-if="step===0">
            <DynamicData
                :is-modal="false"
                :item="data"
                model="appointment"
                operation="edit"
                v-on="resolver.on??{}"/>
        </section>
        <section v-show="step === 1">
            payments
        </section>
    </SectionMain>
</template>

<script setup>

import {usePage} from "@inertiajs/vue3";
import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {computed, ref} from "vue";
import {__} from "../../Globals.js";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import StepsComponent from "../../Components/Sahred/StepsComponent.vue";
import CardBox from "../../Components/Sahred/CardBox.vue";
import DynamicData from "../../Components/DynamicData.vue";


let steps = ref([__('data'), __('payments')]);
let step = ref(0);
let computedData = computed(()=>usePage().props.data);

let breadcrumbItems = [
    {
        name: __('appointments'),
        href: route(`dashboard.appointments.index`)
    },
    {
        name: computedData.value.name,
        href: route(`dashboard.appointments.show`, computedData.value.id)
    }]


</script>
<style scoped>

</style>
