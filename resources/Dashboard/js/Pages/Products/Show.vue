<template>
    <SectionMain>
        <BreadCrumb
            :items="[{name: __('products'), href: route(`dashboard.products.index`)},{name: data.name, href: route(`dashboard.products.show`, data.id)}]"/>
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
        <section v-show="step === 1">
            <StocksList
                :items="data.stocks"
                :searchable="false"
                :sortable="false"
                :visit-data="{filter:{'product.id':data.id}}"
            />
        </section>
        <section v-show="step === 2">
            <DoctorProductsList
                :items="data.doctor_products"
                :searchable="false"
                :sortable="false"
                :visit-data="{filter:{'doctor_id':data.id}}"
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


let steps = ref(['data', 'stocks','doctor_products']);
let step = ref(useStepStore().getStep())

let data = computed(() => usePage().props.data);
let productTypes = usePage().props.product_types;

</script>
<style scoped>

</style>
