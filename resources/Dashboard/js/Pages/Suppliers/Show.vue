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
            <PurchasesList
                :data="{supplier_id:data.id}"
                :items="data.purchases"
                :products="products"
                :searchable="false"
                :sortable="false"
                :suppliers="[data]"
            />
        </section>
        <section v-show="step === 2">
            <TransactionsList
                :has-create="false"
                :items="data.transactions"
                :searchable="false"
                :sortable="false"
                model="suppliers"
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
import supplierEdit from "../../Components/Suppliers/SupplierEdit.vue";
import PurchasesList from "../../Components/Purchases/PurchasesList.vue";
import {useStepStore} from "../../Stores/step.js";
import TransactionsList from "../../Components/Transactions/TransactionsList.vue";

let steps = ref([__('data'), __('purchases'), __('transactions')]);
let step = ref(useStepStore().getStep());

let data = computed(() => usePage().props.data);
let products = computed(() => usePage().props.products);

</script>
<style scoped>

</style>
