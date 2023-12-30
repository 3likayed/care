<template>
  <SectionMain>
    <BreadCrumb
        :items="[{name: __('tools'), href: route(`dashboard.tools.index`)},{name: data.name, href: route(`dashboard.tools.show`, data.id)}]"/>
    <CardBox class="mb-4">
      <StepsComponent
          v-model="step"
          :steps="steps"
      />
    </CardBox>
    <section v-if="step===0">
      <ToolEdit
          :data="data"
          :is-modal="false"
      />
    </section>
    <section v-show="step === 1">
      <StocksList
          :items="data.stocks"
          :searchable="false"
          :sortable="false"
          :visit-data="{filter:{'tool.id':data.id}}"
      />
    </section>
  </SectionMain>
</template>

<script setup>

import {usePage} from "@inertiajs/vue3";
import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {computed, ref} from "vue";
import {__} from "../../Globals.js";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import StepsComponent from "../../Components/Sahred/StepsComponent.vue";
import CardBox from "../../Components/Sahred/CardBox.vue";
import {useStepStore} from "../../Stores/step.js";
import ToolEdit from "../../Components/Tools/ToolEdit.vue";
import StocksList from "../../Components/Stocks/StocksList.vue";


let steps = ref(['data', 'stocks',]);
let step = ref(useStepStore().getStep())

let data = computed(() => usePage().props.data);
let toolTypes = usePage().props.tool_types;

</script>
<style scoped>

</style>
