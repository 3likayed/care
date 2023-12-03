<script setup>

import {ref} from "vue";
import BaseTable from "../Sahred/BaseTable.vue";
import TableOptions from "../Sahred/TableOptions.vue";
import CardBox from "../Sahred/CardBox.vue";
import moment from "moment";
import {mdiLockAlertOutline} from "@mdi/js";
import RolesCreate from "./RoleCreate.vue";
import RolesEdit from "./RoleEdit.vue";
import SectionTitleLineWithButton from "../Sahred/SectionTitleLineWithButton.vue";
import DynamicSearch from "../DynamicSearch.vue";


let props = defineProps({
    items: Object,
    hasPagination: Boolean,
    hasSearch: Boolean

})

let showCreateRole = ref(false);

</script>

<template>
    <SectionTitleLineWithButton model="rolse"  :icon="mdiLockAlertOutline" :title="__('roles')" main>
        <template #create>
            <RolesCreate/>
        </template>

    </SectionTitleLineWithButton>
    <DynamicSearch :fields="[{name:'name'}]" model="roles"/>
    <CardBox has-table>

        <BaseTable :headers="['#',{name:'name',sortable:true},{name:'created_at',sortable:true}]">
            <tr
                v-for="(item,key) in items"
                class="rtl:flex-row-reverse"
            >
                <td data-label="# ">
                    {{ key + 1 }}
                </td>
                <td
                    :data-label="__('name')"
                >
                    {{ item.name }}
                </td>
                <td :data-label="__('created_at')">
                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                </td>
                <td :data-label="__('options')">
                    <TableOptions
                        :has-show="false"
                        :item="item"
                        model="roles"
                    >
                        <template #edit>
                            <RolesEdit :data="item"/>
                        </template>
                    </TableOptions>
                </td>
            </tr>
        </BaseTable>
    </CardBox>
</template>

<style scoped>

</style>
