<script setup>
import {Head} from "@inertiajs/vue3";
import {computed, onMounted, ref} from "vue";
import {useMainStore} from "../Stores/main.js";
import * as chartConfig from "../Components/Charts/chart.config.js";
import SectionTitleLineWithButton from "../Components/Sahred/SectionTitleLineWithButton.vue";
import SectionMain from "../Components/Sahred/SectionMain.vue";
import CardBoxWidget from "../Components/Sahred/CardBoxWidget.vue";
import {
    mdiAccountStarOutline,
    mdiChartLineStacked,
    mdiChartTimelineVariant,
    mdiMessageOutline,
    mdiPostOutline
} from "@mdi/js";
import BreadCrumb from "../Components/Sahred/BreadCrumb.vue";

const chartData = ref(null);

const fillChartData = () => {
    chartData.value = chartConfig.sampleChartData();
};

onMounted(() => {
    fillChartData();
});

const mainStore = useMainStore();

const clientBarItems = computed(() => mainStore.clients.slice(0, 4));

const transactionBarItems = computed(() => mainStore.history);
</script>

<template>
    <Head>
        <title>Dashboard</title>
    </Head>
    <SectionMain>
        <BreadCrumb/>
        <SectionTitleLineWithButton
            :icon="mdiChartTimelineVariant"
            main
            title="Overview"
        />
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
            <CardBoxWidget
                v-if="can('pages.show')"
                :icon="mdiPostOutline"
                :label="__('pages')"
                :number="$page.props.data.pages_count"
                color="text-emerald-500"
            />
            <CardBoxWidget
                v-if="can('sections.show')"
                :icon="mdiChartLineStacked"
                :label="__('sections')"
                :number="$page.props.data.sections_count"
                color="text-blue-300"
            />
            <CardBoxWidget
                v-if="can('employees.show')"
                :icon="mdiAccountStarOutline"
                :label="__('data')"
                :number="$page.props.data.employees_count"
                color="text-red-500"
            />
            <CardBoxWidget
                v-if="can('contacts.show')"
                :icon="mdiMessageOutline"
                :label="__('contacts')"
                :number="$page.props.data.contacts_count"
                color="text-blue-500"
            />
        </div>

        <!--    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div class="flex flex-col justify-between">
                    <CardBoxTransaction
                        v-for="(transaction, index) in transactionBarItems"
                        :key="index"
                        :account="transaction.account"
                        :amount="transaction.amount"
                        :business="transaction.business"
                        :date="transaction.date"
                        :name="transaction.name"
                        :type="transaction.type"
                    />
                  </div>
                  <div class="flex flex-col justify-between">
                    <CardBoxClient
                        v-for="client in clientBarItems"
                        :key="client.id"
                        :date="client.created"
                        :login="client.login"
                        :name="client.name"
                        :progress="client.progress"
                    />
                  </div>
                </div>-->
        <!--    <SectionTitleLineWithButton :icon="mdiChartPie" title="Trends overview">
                  <BaseButton
                      :icon="mdiReload"
                      color="whiteDark"
                      @click="fillChartData"
                  />
                </SectionTitleLineWithButton>

                <CardBox class="mb-4">
                  <div v-if="chartData">
                    <line-chart :data="chartData" class="h-96"/>
                  </div>
                </CardBox>-->
    </SectionMain>
</template>
