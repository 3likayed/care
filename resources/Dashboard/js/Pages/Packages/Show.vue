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
            <ProductEdit
                :data="data"
                :is-modal="false"
            />
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
import {useStepStore} from "../../Stores/step.js";
import ProductEdit from "../../Components/Products/ProductEdit.vue";
import StocksList from "../../Components/Stocks/StocksList.vue";
import DoctorProductsList from "../../Components/DoctorProducts/DoctorProductsList.vue";


let steps = ref(['data', {name:'stocks' , permission:'stocks.show'}]);
let step = ref(useStepStore().getStep())

let data = computed(() => usePage().props.data);


</script>
<style scoped>

</style>
