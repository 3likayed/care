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
            <DoctorEdit
                :data="data"

                :is-modal="false"/>
        </section>
        <section v-if="step===1">
          <DoctorProductsList
              :data="{doctor_id:data.id}"
              :doctors="doctors"
              :visitData="{filter:{doctor_id:data.id}}"
              :items="data.doctor_products"
              :searchable="false"
              :sortable="false"/>
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
import {useStepStore} from "../../Stores/step.js";
import DoctorEdit from "../../Components/Doctors/DoctorEdit.vue";
import DoctorProductsList from "../../Components/DoctorProducts/DoctorProductsList.vue";

let steps = ref([__('data'), 'products']);
let step = ref(useStepStore().getStep())
let data = usePage().props.data;
let doctors = [usePage().props.data];
let model = "employee";
let breadcrumbItems = [{name: __(modelResolver(model)), href: route(`dashboard.${modelResolver(model)}.index`)}]
breadcrumbItems.push({name: data.name, href: route(`dashboard.${modelResolver(model)}.show`, data.id)})

</script>
<style scoped>

</style>
