<template>

    <SectionMain>
        <BreadCrumb :items="[{name: __('roles'), href: route('dashboard.roles.index')}]"/>
        <RolesList :items="items"/>
    </SectionMain>


</template>

<script setup>

import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {usePage} from "@inertiajs/vue3";
import {computed, ref} from "vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import RolesList from "../../Components/Roles/RolesList.vue";


let items = computed(() => usePage().props.roles);
let editedRole = ref({})
</script>
<style>


</style>
