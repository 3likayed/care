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
        <!--        <section v-show="step === 1">
                    <DynamicList
                        :resolver="appointmentResolver"
                        model="appointment"
                    />
                </section>-->
        <!--
            <section v-show="step === 1">
              <PostDetailsList :data="data"/>
            </section>
        -->
        <!--    <section v-show="step === 1">
              <ProjectsList :projects="patient.projects"/>
            </section>-->
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
import EmployeeEdit from "../../Components/Employees/EmployeeEdit.vue";
import {useStepStore} from "../../Stores/step.js";

let steps = ref([__('data'), __('others')]);
let step = ref( useStepStore().getStep())
let data = computed(() => usePage().props.data);

</script>
<style scoped>

</style>
