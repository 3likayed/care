<template>
    <SectionMain>
        <BreadCrumb
            :items="[{name: __('services'), href: route(`dashboard.services.index`)},{name: data.name, href: route(`dashboard.services.show`, data.id)}]"/>
        <CardBox class="mb-4">
            <StepsComponent
                v-model="step"
                :steps="steps"
            />
        </CardBox>
        <section v-if="step===0">
            <serviceEdit
                :data="data"
                :is-modal="false"
            />
        </section>
        <section v-show="step === 1">
<<<<<<< HEAD
            <servicesList
                :has-search="false"
                :items="data.services"
=======
            <ReservationsList
                :searchable="false"
                :items="data.reservations"
>>>>>>> 00f97b0546fe4e08bb2b3a1200ac9e1b5430143f
                :sortable="false"
            >
                <template #create>
                    <serviceCreate :data="{service_id:data.id}" :services="[data]"
                                       :serviceTypes="serviceTypes"/>
                </template>
            </servicesList>
        </section>
        <section v-show="step === 2">
            sdadasdas
        </section>
        <!--
            <section v-show="step === 1">
              <PostDetailsList :data="data"/>
            </section>
        -->
        <!--    <section v-show="step === 1">
              <ProjectsList :projects="service.projects"/>
            </section>-->
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
import serviceEdit from "../../Components/Services/ServiceEdit.vue";
import servicesList from "../../Components/Services/ServicesList.vue";
import serviceCreate from "../../Components/Services/ServiceCreate.vue";
import servicesList from "../../Components/Services/ServicesList.vue";
import serviceCreate from "../../Components/Services/ServiceCreate.vue";


let steps = ref([__('data'), __('services'), __('home')]);
let step = ref(0);

let data = computed(() => usePage().props.data);
let serviceTypes = usePage().props.service_types;

</script>
<style scoped>

</style>
