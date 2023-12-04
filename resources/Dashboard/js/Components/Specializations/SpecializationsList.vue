<template>

    <SectionTitleLineWithButton  model="specializations" :icon="mdiLockAlertOutline" :title="__('specializations')" main>
        <slot name="create">

        </slot>
        <template #create>
            <CreateSpecialization/>
        </template>
    </SectionTitleLineWithButton>
    <DynamicSearch v-if="searchable" :fields="[{name:'name'}]" model="specializations"/>
    <CardBox has-table>
        <BaseTable
            :headers="['#',{name:'name',sortable:true},{name:'created_at',sortable:true}]"
            :pagination="pagination"
        >
            <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
                <td data-label="# ">{{ key + 1 }}</td>
                <td :data-label="__('name')">
                    {{ item.name }}
                </td>
                <td :data-label="__('created_at')">
                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                </td>
                <td :data-label="__('options')">
                    <TableOptions :has-show="false" :item="item" model="specializations" @edit="edited=item">
                        <template #edit>
                            <EditSpecialization :data="edited"/>
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
import {mdiLockAlertOutline} from "@mdi/js";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import DynamicSearch from "../../Components/DynamicSearch.vue";
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import EditSpecialization from "./SpecializationEdit.vue";
import CreateSpecialization from "./SpecializationCreate.vue";
import moment from "moment";
import {ref} from "vue";

let props = defineProps({
    items: Array,
    pagination: Object,
    hasSearch: {
        type: Boolean,
        default: true,
    },
})

let edited = ref();
</script>
<style>


</style>
