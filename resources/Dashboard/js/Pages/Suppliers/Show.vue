<template>
    <SectionMain>
        <BreadCrumb
            :items="[{name: __('suppliers'), href: route(`dashboard.suppliers.index`)},{name: data.name, href: route(`dashboard.suppliers.show`, data.id)}]"/>
        <CardBox class="mb-4">
            <StepsComponent
                v-model="step"
                :steps="steps"
            />
        </CardBox>
        <section v-if="step===0">
            <supplierEdit
                :data="data"
                :is-modal="false"
            />
        </section>
        <section v-show="step === 1">
            <ReservationsList
                :searchable="false"
                :items="data.reservations"
                :sortable="false"
            >
                <template #create>
                    <ReservationCreate :data="{supplier_id:data.id}" :suppliers="[data]"
                                       :reservationTypes="reservationTypes"/>
                </template>
            </ReservationsList>
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
              <ProjectsList :projects="supplier.projects"/>
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
import supplierEdit from "../../Components/Suppliers/SupplierEdit.vue";
import ReservationsList from "../../Components/Reservations/ReservationsList.vue";
import ReservationCreate from "../../Components/Reservations/ReservationCreate.vue";


let steps = ref([__('data'), __('reservations'), __('home')]);
let step = ref(0);

let data = computed(() => usePage().props.data);
let reservationTypes = usePage().props.reservation_types;

</script>
<style scoped>

</style>
