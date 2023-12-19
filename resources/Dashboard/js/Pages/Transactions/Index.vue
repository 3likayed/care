<template>
    <SectionMain>
        <BreadCrumb
            :items="[{name: __(`transactions`), }]"/>
        <div class="grid lg:grid-cols-3 gap-10 lg:gap-20 mb-5">
            <CardBoxWidget
                :icon="mdiCashPlus"
                :label="__('deposit')"
                :number="total.deposit"
                color="success"

            />
            <CardBoxWidget
                :icon="mdiCashMinus"
                :label="__('withdraw')"
                :number="total.withdraw"
                color="danger"

            />
            <CardBoxWidget
                :icon="mdiCashSync"
                :label="__('exists')"
                :number="Math.abs(total.remaining)"
                :number-color="total.remaining >=0  ? 'success' : 'danger' "
                color="info"

            />
        </div>
        <TransactionsList
            :items="data.data"
            :pagination="data.meta"
            :transactionable-type-options="transactionableTypeOptions"
        />
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
import {mdiCashMinus, mdiCashPlus, mdiCashSync} from "@mdi/js";
import CardBoxWidget from "../../Components/Sahred/CardBoxWidget.vue";

let page = usePage()
let data = computed(() => page.props.data)
let total = computed(() => page.props.total)
let transactionableTypeOptions = computed(() => page.props.transactionable_type_options.map(
    (value) => ({
        id: value,
        name: __(snakeCase(value))
    }))
);

</script>
<style scoped>

</style>
