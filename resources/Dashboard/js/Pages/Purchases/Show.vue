<template>
    <SectionMain>
        <BreadCrumb
            :items="[{name: __('purchases'), href: route(`dashboard.purchases.index`)},{}]"/>
        <CardBox class="mb-4">
            <StepsComponent
                v-model="step"
                :steps="steps"
            />
        </CardBox>
        <section v-if="step===0">
            <StocksList
                :items="data.stocks"
                :searchable="false"
                :sortable="false"
                :visit-data="{filter:{'purchase.id':data.id}}"/>
        </section>
        <section v-if="step===1" class="space-y-5">
            <TransactionsList
                :data="{id:data.id}"
                :has-create="data.total_remaining>0"
                :items="data.transactions"
                :searchable="false"
                :sortable="false"
                :visit-data="{filter:{transactionable_type:'Purchase',transactionable_id:data.id}}"
                model="purchases"
            />
            <CardBox>
                <ul class="space-y-6">
                    <li>
                        {{ __('total_price') }} : {{ data.total_price }}
                    </li>
                    <li>
                        {{ __('total_paid') }} : {{ data.total_paid }}
                    </li>
                    <li>
                        {{ __('total_remaining') }} : {{ data.total_remaining }}
                    </li>
                </ul>
            </CardBox>
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
import TransactionsList from "../../Components/Transactions/TransactionsList.vue";
import {useStepStore} from "../../Stores/step.js";
import StocksList from "../../Components/Stocks/StocksList.vue";


let steps = ref([__('stocks'), __('transactions')]);
let step = ref(useStepStore().getStep());

let data = computed(() => usePage().props.data);

</script>
<style scoped>

</style>
