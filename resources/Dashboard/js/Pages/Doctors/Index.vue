<template>

    <SectionMain>
        <BreadCrumb :items="[{name: __('doctors'), href: route('dashboard.doctors.index')}]"/>
        <SectionTitleLineWithButton model="doctors" :icon="mdiLockAlertOutline" :title="__('doctors')" main>
            <template #create>
                <CreateDoctor/>
            </template>

        </SectionTitleLineWithButton>
        <DynamicSearch :fields="[{name:'search'},{name:'name'},{name:'email'}]" model="doctors"/>

        <CardBox has-table>
            <BaseTable :headers="['#',__('name'),__('email'),__('specialization'),__('phone'),__('address'),__('created_at')]">
                <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
                    <td data-label="# ">{{ key + 1 }}</td>
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
                        <TableOptions :has-show="false" :item="item" model="doctors" @edit="edited=item">
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
import {mdiLockAlertOutline} from "@mdi/js";
import {computed, ref} from "vue";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import DynamicSearch from "../../Components/DynamicSearch.vue";
import moment from "moment";
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import EditDoctor from "../../Components/Doctors/DoctorEdit.vue";
import CreateDoctor from "../../Components/Doctors/DoctorCreate.vue";


let items = computed(() => usePage().props.data.data);
let edited = ref({})
</script>
<style>


</style>
