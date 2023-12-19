<template>
    <SectionMain>
        <BreadCrumb
            :items="[{name:'transactions',href:Model.indexLink('transactions')},{}]"/>
        <ManualTransactionsList
            :items="data.data"
            :pagination="data.meta"

        />
    </SectionMain>

</template>

<script setup>

import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {computed} from "vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import ManualTransactionsList from "../../Components/ManualTransactions/ManualTransactionsList.vue";
import {usePage} from "@inertiajs/vue3";
import {__} from "../../Globals.js";
import {Model} from "../../Utils/index.js";


let page = usePage()
let data = computed(() => page.props.data)

</script>
<style scoped>

</style>
