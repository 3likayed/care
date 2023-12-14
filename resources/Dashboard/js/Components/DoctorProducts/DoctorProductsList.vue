<template>

    <SectionTitleLineWithButton :icon="mdiCartVariant"
                                :visit-data="visitData"
                                main
                                :title="title ?? 'doctors_products'"
                                model="doctor-products">

        <template #create>
            <DoctorProductCreate :data="data" :doctors="doctors" :products="products"/>
        </template>
    </SectionTitleLineWithButton>
    <CardBox has-table>
        <BaseTable
            :headers="headers"
            :pagination="pagination"
            :searchable="searchable"
            :sortable="sortable"
        >
            <tr v-for="(item) in items" class="rtl:flex-row-reverse">
                <td :data-label="__('doctor_name')">
                    <Link :href="Model.showLink('doctors',item.doctor.id)">
                        {{ item.doctor.name }}
                    </Link>

                </td>
                <td :data-label="__('product_name')">
                    <Link :href="Model.showLink('products',item.product.id)">
                        {{ item.product.name }}
                    </Link>
                </td>

                <td :data-label="__('available')">
                    {{ item.available }}
                </td>
            </tr>

        </BaseTable>
    </CardBox>
</template>

<script setup>

import CardBox from "../../Components/Sahred/CardBox.vue";
import BaseTable from "../../Components/Sahred/BaseTable.vue";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import DoctorProductCreate from "./DoctorProductCreate.vue";
import {Link} from "@inertiajs/vue3";
import {Model} from "../../Utils/index.js";
import {mdiCartVariant} from "@mdi/js";

let props = defineProps({
    data: Object,
    title: String,
    products: {
        type: Array,
        default: []
    },
    doctors: {
        type: Array,
        default: []
    },
    visitData: Object,
    items: Array,
    pagination: Object,
    searchable: {
        type: Boolean,
        default: true,
    },
    sortable: {
        type: Boolean,
        default: true,
    },
})

let headers = [
    {
        name: 'doctor.name',
        label: 'doctor_name',
        sortable: true,
        searchable: {name: 'doctor_id', options: props.doctors}
    },
    {
        name: 'product.name',
        label: 'product_name',
        sortable: true,
        searchable: {name: 'product_id', options: props.products}
    },
    {name: 'available', sortable: true},
];

</script>
<style>


</style>
