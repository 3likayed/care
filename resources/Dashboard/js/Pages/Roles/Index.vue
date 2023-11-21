<template>

  <SectionMain>
    <BreadCrumb :items="[{name: __('roles'), href: route('dashboard.roles.index')}]"/>
    <SectionTitleLineWithButton :icon="mdiLockAlertOutline" :title="__('roles')" main>
      <BaseButton :icon="mdiPlusCircle" color="success" @click="showCreateRole=true"/>
    </SectionTitleLineWithButton>
    <CardBox has-table>
      <BaseTable :headers="['#',__('name'),__('created_at')]">
        <tr v-for="(role,key) in roles" class="rtl:flex-row-reverse">
          <td data-label="# ">{{ key + 1 }}</td>
          <td :data-label="__('name')" class="border-b-0 lg:w-6 before:hidden w-24 mx-auto ">
            {{ role.name }}
          </td>
          <td :data-label="__('created_at')">
            {{ role.created_at }}
          </td>
          <td :data-label="__('options')">
            <TableOptions model="roles" :has-show="false" @destroy="destroy(role)" @edit="edit(role)"/>
          </td>
        </tr>

      </BaseTable>
    </CardBox>
  </SectionMain>
  <EditRole v-if="showEditRole" :role="editedRole"/>
  <CreateRole v-if="showCreateRole"/>
  <ActionConfirmComponent @confirm="destroyConfirm"/>

</template>

<script setup>

import CardBox from "../../Components/Sahred/CardBox.vue";
import BaseTable from "../../Components/Sahred/BaseTable.vue";
import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {router, usePage} from "@inertiajs/vue3";
import {mdiLockAlertOutline, mdiPlusCircle} from "@mdi/js";
import BaseButton from "../../Components/Sahred/BaseButton.vue";
import {computed, provide, ref} from "vue";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import EditRole from "../../Components/Models/Roles/EditRole.vue";
import CreateRole from "../../Components/Models/Roles/CreateRole.vue";
import ActionConfirmComponent from "../../Components/Sahred/ActionConfirmComponent.vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";

let showEditRole = ref(false)
let showCreateRole = ref(false)
let actionConfirm = ref(false)
provide('showEditRole', showEditRole);
provide('showCreateRole', showCreateRole);
provide('actionConfirm', actionConfirm)
const page = usePage()
let roles = computed( () => page.props.roles);

let editedRole = ref({})
let deletedRole = ref(null)

function edit(role) {
  editedRole.value = role
  showEditRole.value = true
}

function destroy(role) {
  actionConfirm.value = true;
  deletedRole = role.id

}

function destroyConfirm() {
  router.delete(route('dashboard.roles.destroy', deletedRole), {
    preserveState: (page) => Object.keys(page.props.errors).length,
    preserveScroll: true,
  });
}
</script>
<style>


</style>
