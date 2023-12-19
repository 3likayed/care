<template>

    <SectionMain>
        <BreadCrumb :items="[{name: __('employees'), href: route('dashboard.employees.index')}]"/>
        <SectionTitleLineWithButton :icon="mdiAccountStar" :title="__('employees')" main model="employees">
            <template #create>
                <CreateEmployee/>
            </template>

        </SectionTitleLineWithButton>

        <CardBox has-table>
            <BaseTable
                :pagination="pagination"
                :headers="headerFields">
                <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
                    <td data-label="# ">{{ item.id }}</td>
                    <td :data-label="__('name')">
                        {{ item.name }}
                    </td>
                    <td :data-label="__('phone')">

                        <ul class="list-decimal">
                            <li v-for="(phone,key) in item.phone">
                                {{ phone }}
                            </li>
                        </ul>
                    </td>
                    <td :data-label="__('address')">

                        <ul class="list-decimal">
                            <li v-for="(address,key) in item.address">
                                {{ address }}
                            </li>
                        </ul>
                    </td>
                    <td :data-label="__('has_user')">
                        <StatusIcon :status="item.user ? 'completed' : 'canceled'"/>
                    </td>
                    <td :data-label="__('created_at')">
                        {{ moment(item.created_at).format('YYYY-MM-DD') }}
                    </td>
                    <td :data-label="__('options')">
                        <TableOptions :item="item" model="employees" @edit="edited=item">
                            <template #edit>
                                <EditEmployee :data="edited"/>
                            </template>
                        </TableOptions>
                    </td>
                </tr>

            </BaseTable>
        </CardBox>
    </SectionMain>


</template>

<script setup>

import CardBox from "../../Components/Sahred/CardBox.vue";
import BaseTable from "../../Components/Sahred/BaseTable.vue";
import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {usePage} from "@inertiajs/vue3";
import {mdiAccountStar, mdiLockAlertOutline} from "@mdi/js";
import {computed, ref} from "vue";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import moment from "moment";
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import EditEmployee from "../../Components/Employees/EmployeeEdit.vue";
import CreateEmployee from "../../Components/Employees/EmployeeCreate.vue";
import StatusIcon from "../../Components/Sahred/StatusIcon.vue";


let items = computed(() => usePage().props.data.data);
let pagination = computed(() => usePage().props.data.meta);
let edited = ref({})

let headerFields = [
    {name: 'id', searchable: true, sortable: true},
    {name: 'name', sortable: true, searchable: true},
    {name: 'phone', sortable: true, searchable: true},
    {name: 'address',sortable:true, searchable: true}, {
        name: 'has_user',
        sortable: true
    }, {name: 'created_at', sortable: true ,searchable: {type:'date-range'}}]
</script>
<style>


</style>
