<template>
    <BaseButtons
        no-wrap
        type="justify-end lg:justify-start"
    >
        <BaseButton
            v-if="hasShow"
            :disabled="model ? !can(`${model}.show`) : false"
            :href="Model.showLink(model,item.id)"
            :icon="mdiEyeOutline"
            class="after:content-[]"
            color="contrast"
            small
        />
        <BaseButton
            v-if="hasEdit"
            :disabled="model ? !can(`${model}.edit`) : false"
            :icon="mdiSquareEditOutline"
            color="info"
            small
            @click="showEdit=true ; emit('edit') "
        />
        <BaseButton
            v-if="hasDestroy"
            :disabled="model ? !can(`${model}.delete`) : false "
            :icon="mdiTrashCanOutline"
            color="danger"
            small
            @click="showDelete=true "
        />
        <slot/>
    </BaseButtons>

    <slot v-if="showEdit" name="edit">

    </slot>


    <ActionConfirmComponent
        v-model="showDelete"
        @confirm="deleteRoute ?
         router.delete(route(deleteRoute,item.id), {
            preserveState: (page) => Object.keys(page.props.errors).length,
            preserveScroll: true,
        }):
        Model.delete(model,item.id)"
    />
</template>

<script setup>

import {mdiEyeOutline, mdiSquareEditOutline, mdiTrashCanOutline} from "@mdi/js";
import BaseButton from "./BaseButton.vue";
import BaseButtons from "./BaseButtons.vue";
import {can} from "../../Globals.js";
import {Model} from "../../Utils";
import {provide, ref} from "vue";
import ActionConfirmComponent from "./ActionConfirmComponent.vue";
import {router} from "@inertiajs/vue3";


let showEdit = ref(false);
let showDelete = ref(false);
provide('showEdit', showEdit)
let emit = defineEmits(['edit'])
let props = defineProps({
    hasEdit: {
        type: Boolean,
        default: true,
    },
    hasDestroy: {
        type: Boolean,
        default: true,
    },
    hasShow: {
        type: Boolean,
        default: true,
    },

    model: String,
    deleteRoute: String,
    item: Object
})

</script>
<style scoped>

</style>
