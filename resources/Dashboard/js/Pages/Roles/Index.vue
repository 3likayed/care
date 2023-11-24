<template>
    <SectionMain>
        <BreadCrumb :items="[{name: __(modelResolver(model)), href: route(`dashboard.${modelResolver(model)}.index`)}]"/>
        <ModelList :addon-data="addonData" :data="data"
                   :model="model"
                   @create="showCreateRole=true"
        >
            <template #create>
                <CreateRole v-if="showCreateRole"/>
            </template>
        </ModelList>
    </SectionMain>

</template>

<script setup>

import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {usePage} from "@inertiajs/vue3";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import ModelList from "../../Components/Models/ModelList.vue";

import CreateRole from "../../Components/Models/Role/CreateRole.vue";
import {provide, ref} from "vue";

const page = usePage()
let data = page.props.roles
let model = "role";
let addonData = {
    check: (permissions, permission) => {
        return Boolean(permissions.find((permission) => permission.id === item.id))
    }
}
let showCreateRole = ref(false)
provide('showCreateRole', showCreateRole)
</script>
<style>


</style>
