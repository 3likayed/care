<template>

    <SectionMain>
        <BreadCrumb :items="[{name: __('roles'), href: route('dashboard.roles.index')}]"/>
        <SectionTitleLineWithButton :icon="mdiLockAlertOutline" :title="__('roles')" main>
            <template #create>
                <CreateRole/>
            </template>

        </SectionTitleLineWithButton>
        <DynamicSearch :fields="[{name:'name'}]" model="roles"/>

        <CardBox has-table>
            <BaseTable :headers="['#',__('name'),__('created_at')]">
                <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
                    <td data-label="# ">{{ key + 1 }}</td>
                    <td :data-label="__('name')" class="border-b-0 lg:w-6 before:hidden w-24 mx-auto ">
                        {{ item.name }}
                    </td>
                    <td :data-label="__('created_at')">
                        {{ moment(item.created_at).format('YYYY-MM-DD') }}
                    </td>
                    <td :data-label="__('options')">
                        <TableOptions :has-show="false" :item="item" model="roles" @edit="editedRole=item">
                            <template #edit>
                                <EditRole :data="editedRole"/>
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
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import CreateRole from "../../Components/Roles/CreateRole.vue";
import EditRole from "../../Components/Roles/EditRole.vue";
import DynamicSearch from "../../Components/DynamicSearch.vue";
import moment from "moment";


let items = computed(() => usePage().props.roles);
let editedRole = ref({})
</script>
<style>


</style>
