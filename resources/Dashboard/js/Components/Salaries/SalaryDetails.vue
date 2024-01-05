<template>

    <CardBoxModal :is-dirty="form.isDirty"
        :button-label="__('edit')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__('details',{field:'salary'})"
        @cancel="showEdit=false"
        @confirm="submit"
    >

        <StepsComponent
            v-model="step"
            :steps="steps"
        />
        <section v-if="step===0">
            <SalaryActionsList
           :actions="actions" 
           :data="data" 
           />
            
        </section>
        <section v-if="step===1">
            <SalaryLog
            :data="data"
            :is-modal="false"
            />
           

        </section>


    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {
    mdiAccount,
    mdiAt,
    mdiFormTextboxPassword,
    mdiLock,
    mdiMapMarker,
    mdiPhone,
    mdiPlusCircle,
    mdiTrashCanOutline
} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm, usePage} from "@inertiajs/vue3";
import {__, can, handleField} from "../../Globals.js";
import {computed, inject, provide, ref} from "vue";
import {Model} from "../../Utils/index.js";
import StepsComponent from "../Sahred/StepsComponent.vue";
import {useStepStore} from "../../Stores/step.js";
import SalaryLog from "./SalaryLog.vue";
import SalaryActionsList from "./SalaryActionsList.vue";

let props = defineProps({
    data: Object,
    operation: String,
    isModal: {
        type: Boolean,
        default: true
    }
})

let steps = ref([__('salary_details'), __('salary_log')]);
let step = ref(useStepStore().getStep());
let disabled = computed(() => props.isDisabled || !can(`employees.edit`));
provide('isDisabled', disabled.value);

let showEdit = props.isModal ? inject('showEdit') : true;
let roles = usePage().props.roles;
let form = useForm({
    name: props.data.name,
    phone: props.data.phone,
    address: props.data.phone,
    user: {
        email: props.data.user?.email,
        role: props.data.user?.role?.id,
        password: null,
        password_confirmation: null,
    }

});
const submit = () => {
    Model.submit('edit', 'employees', form,props.data.id)
}

</script>
<style scoped>

</style>
