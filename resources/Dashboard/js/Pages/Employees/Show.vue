<template>
    <SectionMain>
        <BreadCrumb
            :items="[{name: __('employees'), href: route(`dashboard.employees.index`)},{name: data.name}]"/>
        <CardBox class="mb-4">
            <StepsComponent
                v-model="step"
                :steps="steps"
            />
        </CardBox>
        <section v-if="step===0">
            <EmployeeEdit
                :data="data"
                :is-modal="false"

            />
        </section>
        <section v-if="step===1">
            
            <div class="grid md:grid-cols-4 gap-5 m-5" v-if="data.salary">

                <BaseButton :label="__('create_field',{field:'giving'})"
                            color="success"
                            @click="createAction('giving')"/>

                <BaseButton :label="__('create_field',{field:'loan'})"
                            color="info"
                            @click="createAction('loan')"/>

                <BaseButton :label="__('create_field',{field:'withhold'})"
                            color="danger"
                            @click="createAction('withhold')"/>
                <BaseButton :label="__('pay_salary',{field:'salary'})"
                            color="warning"
                            @click="createAction('salary')"/>
            </div>
            <SalariesList
                :data="data"
            />
            <!-- <SalaryDetails
            :data="data"
            :is-modal="false"
            /> -->
        </section>
        <SalaryActionCreate
            v-if="showCreateSalaryAction"
            :data="data"
            :type="actionType"
            />
            <SalaryPayCreate
            v-if="showCreateSalaryPay"
            :data="data"
            />

    </SectionMain>
</template>

<script setup>

import {usePage} from "@inertiajs/vue3";
import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {computed, provide, ref} from "vue";
import {__} from "../../Globals.js";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import StepsComponent from "../../Components/Sahred/StepsComponent.vue";
import CardBox from "../../Components/Sahred/CardBox.vue";
import EmployeeEdit from "../../Components/Employees/EmployeeEdit.vue";
import {useStepStore} from "../../Stores/step.js";
import SalariesList from "../../Components/Salaries/SalariesList.vue";
import SalaryActionCreate from "../../Components/Salaries/SalaryActionCreate.vue";
import SalaryDetails from "../../Components/Salaries/SalaryDetails.vue";

import BaseButton from "../../Components/Sahred/BaseButton.vue";
import SalaryPayCreate from "../../Components/Salaries/SalaryPayCreate.vue";

let steps = ref([__('data'), __('salary')]);
let step = ref(useStepStore().getStep())
// let second_step = ref(useStepStore().getStep());
let data = computed(() => usePage().props.data);
let actionType = ref();
let showCreateSalaryAction = ref(false);
let showCreateSalaryPay = ref(false);

const createAction = (action) => {
    if(action !== 'salary')
    {
        actionType.value = action;
    showCreateSalaryAction.value = true;
    }
    else{
        showCreateSalaryPay.value = true ;
    }
    

}

provide('showCreateSalaryAction', showCreateSalaryAction)
provide('showCreateSalaryPay', showCreateSalaryPay)


</script>
<style scoped>

</style>
