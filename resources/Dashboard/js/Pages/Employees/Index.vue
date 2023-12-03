<template>

    <SectionMain>
        <BreadCrumb :items="[{name: __('employees'), href: route('dashboard.employees.index')}]"/>
        <SectionTitleLineWithButton model="employees" :icon="mdiLockAlertOutline" :title="__('employees')" main>
            <template #create>
                <CreateEmployee/>
            </template>

        </SectionTitleLineWithButton>
        <DynamicSearch  :fields="searchFields" model="employees"/>

        <CardBox has-table>
            <BaseTable
                :headers="headerFields">
                <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
                    <td data-label="# ">{{ key + 1 }}</td>
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
                        <TrueFalseIcon :is-true="item.user"/>
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
import {mdiLockAlertOutline} from "@mdi/js";
import {computed, ref} from "vue";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import DynamicSearch from "../../Components/DynamicSearch.vue";
import moment from "moment";
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import EditEmployee from "../../Components/Employees/EmployeeEdit.vue";
import CreateEmployee from "../../Components/Employees/EmployeeCreate.vue";
import TrueFalseIcon from "../../Components/Sahred/TrueFalseIcon.vue";


let items = computed(() => usePage().props.data.data);
let edited = ref({})
let searchFields = [{name:'search'},{name:'name'},{name:'phone'},{name:'user.email',label:'email'}]
let headerFields = ['#',{name:'name',sortable:true},'phone','address',{name:'has_user',sortable: true},{name:'created_at',sortable:true}]
</script>
<style>


</style>
