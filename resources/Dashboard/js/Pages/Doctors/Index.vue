<template>

    <SectionMain>
        <BreadCrumb :items="[{name: __('doctors'), href: route('dashboard.doctors.index')}]"/>
        <SectionTitleLineWithButton :icon="mdiDoctor" :title="__('doctors')" main model="doctors">
            <template #create>
                <CreateDoctor/>
            </template>

        </SectionTitleLineWithButton>
        <CardBox has-table>
            <BaseTable
                :headers="headers">
                <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
                    <td data-label="# ">{{ item.id }}</td>
                    <td :data-label="__('name')">
                        {{ item.employee.name }}
                    </td>
                    <td :data-label="__('email')">
                        {{ item.employee.user.email }}
                    </td>
                    <td :data-label="__('specializations')">
                        <ul>
                            <li v-for="(specialization) in item.specializations">
                                {{ specialization.name }}
                            </li>
                        </ul>
                    </td>
                    <td :data-label="__('phone')">

                        <ul class="list-decimal">
                            <li v-for="(phone,key) in item.employee.phone">
                                {{ phone }}
                            </li>
                        </ul>
                    </td>
                    <td :data-label="__('address')">

                        <ul class="list-decimal">
                            <li v-for="(address,key) in item.employee.address">
                                {{ address }}
                            </li>
                        </ul>
                    </td>
                    <td :data-label="__('created_at')">
                        {{ moment(item.created_at).format('YYYY-MM-DD') }}
                    </td>
                    <td :data-label="__('options')">
                        <TableOptions :item="item" model="doctors" @edit="edited=item">
                            <template #edit>
                                <EditDoctor :data="edited"/>
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
import {mdiDoctor} from "@mdi/js";
import {computed, ref} from "vue";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import moment from "moment";
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import EditDoctor from "../../Components/Doctors/DoctorEdit.vue";
import CreateDoctor from "../../Components/Doctors/DoctorCreate.vue";


let items = computed(() => usePage().props.data.data);
let edited = ref({})
let headers = [
    {name: 'id', searchable: true, sortable: true},
    {name: 'employee.name',label:'name', searchable: true, sortable: true},
    {name: 'employee.user.email',label:'email', searchable: true, sortable: true},
    'specialization',
    {name: 'employee.phone',label:'phone', searchable: true, sortable: true},
    {name: 'employee.address',label:'address', searchable: true, sortable: true},
    {name: 'created_at', sortable: true}
]
</script>
<style>


</style>
