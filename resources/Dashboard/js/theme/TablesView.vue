<script setup>
import {mdiGithub, mdiTableBorder, mdiTableOff,} from "@mdi/js";
import SectionMain from "../Components/Sahred/SectionMain.vue";
import NotificationBar from "../Components/Sahred/NotificationBar.vue";
import TableSampleClients from "../Components/Sahred/TableSampleClients.vue";
import CardBox from "../Components/Sahred/CardBox.vue";
import LayoutAuthenticated from "../Layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "../Components/Sahred/SectionTitleLineWithButton.vue";
import BaseButton from "../Components/Sahred/BaseButton.vue";
import CardBoxComponentEmpty from "../Components/Sahred/CardBoxComponentEmpty.vue";
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiTableBorder" title="Tables" main>
        <BaseButton
            href="https://github.com/justboil/employee-one-vue-tailwind"
            target="_blank"
            :icon="mdiGithub"
            label="Star on GitHub"
            color="contrast"
            rounded-full
            small
        />
      </SectionTitleLineWithButton>


      <CardBox class="mb-6" has-table>
        <TableSampleClients checkable/>
      </CardBox>

      <SectionTitleLineWithButton :icon="mdiTableOff" title="Empty variation"/>

      <NotificationBar color="danger" :icon="mdiTableOff">
        <b>Empty table.</b> When there's nothing to show
      </NotificationBar>

      <CardBox>
        <CardBoxComponentEmpty/>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
