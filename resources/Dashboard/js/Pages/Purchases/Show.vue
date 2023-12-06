<template>
    <SectionMain>
        <BreadCrumb
            :items="[{name: __('purchases'), href: route(`dashboard.purchases.index`)},{name:__('bill-no ')+data.id, href: route(`dashboard.purchases.show`, data.id)}]"/>
        <CardBox class="mb-4">
            <StepsComponent
                v-model="step"
                :steps="steps"
            />
        </CardBox>
        <section v-if="step===0">
            <PurchaseProducts
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
import PurchaseProducts from "../../Components/Purchases/PurchaseProducts.vue";


let steps = ref([__('data')]);
let step = ref(0);

let data = computed(() => usePage().props.data);

</script>
<style scoped>

</style>
