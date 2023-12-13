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

        </section>
        <section v-show="step === 1">

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
import {computed, ref} from "vue";
import {__, modelResolver} from "../../Globals.js";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import StepsComponent from "../../Components/Sahred/StepsComponent.vue";
import CardBox from "../../Components/Sahred/CardBox.vue";
import {useStepStore} from "../../Stores/step.js";

let steps = ref([__('data'), __('appointments')]);
let step = ref( useStepStore().getStep())
let data = usePage().props.data;
let model = "appointmentType";
let breadcrumbItems = [{name: __(modelResolver(model)), href: route(`dashboard.${modelResolver(model)}.index`)}]
breadcrumbItems.push({name: data.name, href: route(`dashboard.${modelResolver(model)}.show`, data.id)})


let appointmentItem = {
    appointment_type: data,

}

let resolver = appointmentType.edit()
let list = appointment.list({list: data.appointments})
let create = appointment.create({item: appointmentItem})
let edit = appointment.edit()
let appointmentResolver = computed(() => ({
    list: list.value,
    create: create.value,
    edit: edit.value
}))


</script>
<style scoped>

</style>
