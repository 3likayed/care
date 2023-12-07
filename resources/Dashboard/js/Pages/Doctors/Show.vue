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
                :model="model"
                v-on="resolver.on??{}"
                :resolver="resolver"
                operation="edit"

            />
        </section>
<!--        <section v-show="step === 1">
            <DynamicList
                :resolver="appointmentResolver"
                model="appointment"
            />
        </section>-->
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
import {ref} from "vue";
import {__, modelResolver} from "../../Globals.js";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import StepsComponent from "../../Components/Sahred/StepsComponent.vue";
import CardBox from "../../Components/Sahred/CardBox.vue";
import DynamicData from "../../Components/DynamicData.vue";
import {useStepStore} from "../../Stores/step.js";

let steps = ref([__('data'), __('appointments')]);
let step = ref( useStepStore().getStep())
let data = usePage().props.data;
let model = "employee";
let breadcrumbItems = [{name: __(modelResolver(model)), href: route(`dashboard.${modelResolver(model)}.index`)}]
breadcrumbItems.push({name: data.name, href: route(`dashboard.${modelResolver(model)}.show`, data.id)})


let resolver = employee.edit()


</script>
<style scoped>

</style>
