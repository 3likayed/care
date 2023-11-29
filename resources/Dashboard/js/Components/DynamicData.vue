<script setup>

import CardBoxModal from "./Sahred/CardBoxModal.vue";
import FormField from "./Sahred/FormField.vue";
import FormControl from "./Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {Model} from "./../Utils/index.js";
import {__, handleField, modelResolver} from "../Globals.js";
import {computed, onMounted, reactive, watch} from "vue";
import moment from "moment";
import {mdiPlusCircle, mdiTrashCanOutline} from "@mdi/js";


let props = defineProps({
    resolver: {
        type: Object,
        default: {},
    },
    item: Object,
    model: String,
    operation: String,
    isModal: {
        type: Boolean,
        default: true
    }
})

let computedResolver = computed(() => props.resolver);
let computedAppend = computed(() => props.resolver.append);
let computedItem = computed(() => props.item);
let emit = defineEmits(['render']);


const fieldValue = (itemKey, index) => {
    const keys = itemKey.split('.');
    let value = computedItem.value;

    keys.forEach(function (key) {
        value = value[key];
    });

    let result;
    const fieldType = fieldData(index, 'type', null, 'text');
    if (fieldType === 'datetime-local') {
        result = moment(value).format('YYYY-MM-DDTHH:MM');
    } else {
        result = value;
    }
    return result;
};
const fieldsValuesObject = computed(() => {

    return computedResolver.value.fields.reduce(function (accumulator, field, index) {
        const tempField = typeof field === 'object' ? field.name : field;

        let value = ''
        if (computedItem.value) {
            value = fieldValue(tempField, index);
        }
        if (field.value) {
            value = field.value;
        }

        accumulator[field.name] = value;
        return accumulator;
    }, {});
});
const fieldData = (index, key = 'name', defaultKey = 'name', defaultValue = null) => {
    const field = computedResolver.value.fields[index];
    let result;

    if (typeof field === 'string') {
        result = field;
    } else {
        if (field[key] !== undefined) {
            result = field[key];
        } else {
            result = defaultKey ? field[defaultKey] : defaultValue;
        }
    }

    return result;
};

let inertiaForm = useForm(fieldsValuesObject.value);

let form = reactive({})


onMounted(function () {
    watch((fieldsValuesObject, (value) => {
        Object.assign(form, value)
    }));
    emit('render', computedItem.value);
});
const submit = () => {
    console.log(form, inertiaForm)
    inertiaForm.transform(data => form)
    console.log(inertiaForm);
    Model.submit(props.operation, props.model, inertiaForm, computedItem.value?.id)
}
</script>

<template>

    <CardBoxModal
        v-if="can(`${modelResolver(model)}.${operation}`)"
        :button-label="__(operation)"
        :has-cancel="isModal"
        :has-errors="inertiaForm.hasErrors"
        :is-inertiaForm="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__(operation+'_field',{field:model})"
        @confirm="submit()"
    >
        <div v-for="(field,key,index) in fieldsValuesObject">
            <FormField
                v-if="fieldData(index,'is_array',null,false)!==true"
                :key="key"
                :errors="inertiaForm.errors[key]"
                :label="__(fieldData(index,'label'))"
                :label-for="fieldData(index)"
            >
                <FormControl
                    :id="fieldData(index,'id','name',key)"
                    v-model="form[key]"
                    :autocomplete="fieldData(index)"
                    :icon="fieldData(index,'icon',null)"
                    :name="fieldData(index,'name')"
                    :type="fieldData(index,'type',null,'text')"
                    required
                    v-bind="fieldData(index,'bind',null)"
                    v-on="fieldData(index,'on',null)??{}"
                />
            </FormField>

            <FormField
                v-else
                :key="`${key}_array`"
                :actions="{append:{color:'success' , icon:mdiPlusCircle } }"
                :errors="inertiaForm.errors[key]"
                :label="__(fieldData(index,'label'))"
                :label-for="fieldData(index)"
                class-addon="space-y-4"
                @action="(action , key)=>handleField(inertiaForm,fieldData(index,'name'),action ) "
            >
                <FormControl

                    v-for="(item,arrKey) in inertiaForm[key]"
                    :id="fieldData(index,'id','name',key)"
                    v-model="inertiaForm[key][arrKey]"
                    :actions="{delete:{color:'danger' , icon:mdiTrashCanOutline ,key:arrKey} }"
                    :autocomplete="fieldData(index)"
                    :errors="inertiaForm.errors[`${key}.${arrKey}`]"
                    :icon="fieldData(index,'icon',null)"
                    :name="fieldData(index,'name')"
                    :type="fieldData(index,'type',null,'text')"
                    required
                    v-bind="fieldData(index,'bind',null)"
                    @action="(action , actionKey)=>handleField(inertiaForm,fieldData(index,'name'),action ,arrKey)"
                    v-on="fieldData(index,'on',null)??{}"
                />


            </FormField>
        </div>

        <FormField
            v-for="(field,key) in computedAppend"
            :key="key"
            :label="__(field.label)"
        >
            <FormControl
                v-model="field.value"
                :icon="field.icon"
                :is-disabled="true"
            />
        </FormField>

    </CardBoxModal>
</template>


<style scoped>

</style>
