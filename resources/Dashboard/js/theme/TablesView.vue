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
            <SectionTitleLineWithButton
                :icon="mdiTableBorder"
                main
                title="Tables"
            >
                <BaseButton
                    :icon="mdiGithub"
                    color="contrast"
                    href="https://github.com/justboil/employee-one-vue-tailwind"
                    label="Star on GitHub"
                    rounded-full
                    small
                    target="_blank"
                />
            </SectionTitleLineWithButton>


            <CardBox
                class="mb-6"
                has-table
            >
                <TableSampleClients checkable/>
            </CardBox>

            <SectionTitleLineWithButton
                :icon="mdiTableOff"
                title="Empty variation"
            />

            <NotificationBar
                :icon="mdiTableOff"
                color="danger"
            >
                <b>Empty table.</b> When there's nothing to show
            </NotificationBar>

            <CardBox>
                <CardBoxComponentEmpty/>
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
