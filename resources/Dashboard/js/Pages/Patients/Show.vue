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
            <ModelData
                :data="data"
                :is-modal="false"
                :model="model"
                operation="edit"
            />
        </section>
        <section v-show="step === 1">
            reservations
        </section>
        <!--
            <section v-show="step === 1">
              <PostDetailsList :data="data"/>
            </section>
        -->
        <!--    <section v-show="step === 1">
              <ProjectsList :projects="patient.projects"/>
            </section>-->
    </SectionMain>
</template>

<script setup>

import {usePage} from "@inertiajs/vue3";
import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {provide, ref} from "vue";
import {__, modelResolver} from "../../Globals.js";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import StepsComponent from "../../Components/Sahred/StepsComponent.vue";
import CardBox from "../../Components/Sahred/CardBox.vue";
import ModelData from "../../Components/Models/ModelData.vue";



let steps = ref([__('data'), __('reservations')]);
let step = ref(0);
let data = usePage().props.data;
let model = "patient";
let breadcrumbItems = [{name: __(modelResolver(model)), href: route(`dashboard.${modelResolver(model)}.index`)}]
breadcrumbItems.push({name: data.name, href: route(`dashboard.${modelResolver(model)}.show`, data.id)})

</script>
<style scoped>

</style>
