<template>
    <SectionMain>
        <BreadCrumb
            :items="[{name: __(`transactions`), }]"/>
        <TransactionsList
            :items="data.data"
            :pagination="data.meta"
            :transactionable-type-options="transactionableTypeOptions"
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
import {__} from "../../Globals.js";
import {snakeCase} from "lodash/string.js";

let page = usePage()
let data = computed(() => page.props.data)
let totalDeposit = computed(() => page.props.total_deposit)
let totalWithdraw = computed(() => page.props.total_withdraw)
let totalRemaining = computed(() => page.props.total_remaining)
let transactionableTypeOptions = computed(() => page.props.transactionable_type_options.map(
    (value) => ({
        id: value,
        name: __(snakeCase(value))
    }))
);

</script>
<style scoped>

</style>
