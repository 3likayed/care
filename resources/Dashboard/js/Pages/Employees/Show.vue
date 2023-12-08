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
            <div class="grid md:grid-cols-3 gap-5 m-5">

                <BaseButton :label="__('create_field',{field:'giving'})"
                            color="success"
                            @click="createAction('giving')"/>

                <BaseButton :label="__('create_field',{field:'loan'})"
                            color="info"
                            @click="createAction('loan')"/>

                <BaseButton :label="__('create_field',{field:'withhold'})"
                            color="danger"
                            @click="createAction('withhold')"/>
            </div>
            <SalariesList
                :data="{id:data.id}"
                :items="data.salary ? [data.salary] : null"
            />
        </section>
        <SalaryActionCreate
            v-if="showCreateSalaryAction"
            :data="{employee_id:data.id , type:actionType}"/>

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
import BaseButton from "../../Components/Sahred/BaseButton.vue";

let steps = ref([__('data'), __('salary')]);
let step = ref(useStepStore().getStep())
let data = computed(() => usePage().props.data);
let actionType = ref();
let showCreateSalaryAction = ref(false);

const createAction = (action) => {
    actionType.value = action;
    showCreateSalaryAction.value = true;

}
provide('showCreateSalaryAction', showCreateSalaryAction)

</script>
<style scoped>

</style>
