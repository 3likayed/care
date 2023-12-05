<template>

    <SectionTitleLineWithButton model="services"  :icon="mdiStoreCheck" :title="__('services')" main>
        <slot name="create">

        </slot>
        <template #create>
            <serviceCreate/>
        </template>
    </SectionTitleLineWithButton>
<<<<<<< HEAD
    <DynamicSearch v-if="hasSearch" :fields="[{name:'search'},{name:'name'}]" model="services"/>
=======
    <DynamicSearch v-if="searchable" :fields="[{name:'search'},{name:'name'},{name:'email'}]" model="Service"/>
>>>>>>> 00f97b0546fe4e08bb2b3a1200ac9e1b5430143f
    <CardBox has-table>
        <BaseTable
            :headers="['#',{name:'name',sortable:true},{name:'price',sortable:true},{name:'created_at',sortable:true}]"
            :pagination="pagination"
        >
            <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
                <td data-label="# ">{{ key + 1 }}</td>
                <td :data-label="__('name')">
                    {{ item.name }}
                </td>

                
                <td :data-label="__('price')">
                    {{ item.price }}
                </td>


                <td :data-label="__('created_at')">
                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                </td>
                <td :data-label="__('options')">
                    <TableOptions :item="item" model="services" @edit="edited=item">
                        <template #edit>
                            <serviceEdit :data="edited"/>
                        </template>
                    </TableOptions>
                </td>
            </tr>

        </BaseTable>
    </CardBox>
</template>

<script setup>

import CardBox from "../../Components/Sahred/CardBox.vue";
import BaseTable from "../../Components/Sahred/BaseTable.vue";
import {mdiLockAlertOutline, mdiStoreCheck} from "@mdi/js";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import DynamicSearch from "../../Components/DynamicSearch.vue";
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import serviceEdit from "./ServiceEdit.vue";
import moment from "moment";
import serviceCreate from "./ServiceCreate.vue";
import {ref} from "vue";

let edited = ref();
let props = defineProps({
    items: Array,
    pagination: Object,
    searchable: {
        type: Boolean,
        default: true,
    },
})
</script>
<style>


</style>
