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
                :resolver="resolver"
                model="reservation"
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
import {ref} from "vue";
import {__, modelResolver} from "../../Globals.js";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import StepsComponent from "../../Components/Sahred/StepsComponent.vue";
import CardBox from "../../Components/Sahred/CardBox.vue";
import DynamicData from "../../Components/DynamicData.vue";
import {reservation} from "../../Resolvers";


let steps = ref([__('data'), __('payments')]);
let step = ref(0);
let data = usePage().props.data;
let model = "reservation";
let breadcrumbItems = [{name: __('reservations'), href: route(`dashboard.reservations.index`)}]
breadcrumbItems.push({name: data.name, href: route(`dashboard.reservations.show`, data.id)})

</script>
<style scoped>

</style>
