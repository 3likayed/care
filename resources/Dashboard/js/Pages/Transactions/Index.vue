<template>
    <SectionMain>
        <BreadCrumb
            :items="[{name: __(`transactions`), }]"/>
        <TransactionsList
            :items="data.data"
            :pagination="data.meta"
        />
        Deposit : {{ totalDeposit }}
        <br>
        totalWithdraw : {{ totalWithdraw }}
        <br>
        totalRemaining : {{ totalRemaining }}
    </SectionMain>

</template>

<script setup>

import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {computed} from "vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import TransactionsList from "../../Components/Transactions/TransactionsList.vue";
import {usePage} from "@inertiajs/vue3";

let data = computed(() => usePage().props.data)
let totalDeposit = computed(() => usePage().props.total_deposit)
let totalWithdraw = computed(() => usePage().props.total_withdraw)
let totalRemaining = computed(() => usePage().props.total_remaining)

</script>
<style scoped>

</style>
