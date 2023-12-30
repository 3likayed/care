<template>
  <SectionMain>
    <BreadCrumb
        :items="[{name: __('purchases'), href: route(`dashboard.purchases.index`)},{}]"/>
    <CardBox class="mb-4">
      <StepsComponent
          v-model="step"
          :steps="steps"
      />
    </CardBox>
    <section v-if="step===0">
      <StocksList
          :items="data.stocks"
          :searchable="false"
          :sortable="false"
          :visit-data="{filter:{'purchase.id':data.id}}"/>
    </section>
    <section v-if="step===1" class="space-y-5">
      <div class="grid lg:grid-cols-3 gap-10 lg:gap-20 mb-5">
        <CardBoxWidget
            :icon="mdiCash"
            :label="__('total_price')"
            :number="data.total_price"
            color="success"

        />
        <CardBoxWidget
            :icon="mdiCashPlus"
            :label="__('total_paid')"
            :number="data.total_paid"
            color="info"

        />
        <CardBoxWidget
            :icon="mdiCashMinus"
            :label="__('total_remaining')"
            :number="data.total_remaining"
            color="danger"

        />

      </div>
      <TransactionsList
          :data="{id:data.id ,max:data.total_remaining}"
          :has-create="data.total_remaining>0"
          :items="data.transactions"
          :searchable="false"
          :sortable="false"
          :visit-data="{filter:{transactionable_type:'Purchase',transactionable_id:data.id}}"
          model="purchases"
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
import TransactionsList from "../../Components/Transactions/TransactionsList.vue";
import {useStepStore} from "../../Stores/step.js";
import StocksList from "../../Components/Stocks/StocksList.vue";
import {mdiCash, mdiCashMinus, mdiCashPlus} from "@mdi/js";
import CardBoxWidget from "../../Components/Sahred/CardBoxWidget.vue";


let steps = ref([__('stocks'), __('transactions')]);
let step = ref(useStepStore().getStep());

let data = computed(() => usePage().props.data);

</script>
<style scoped>

</style>
