<script setup>

import FormWithLabelField from "./FormWithLabelField.vue";

import {__} from "../../Globals.js";
import {reactive} from "vue";
import {isArray} from "chart.js/helpers";
import {mdiCheckCircleOutline, mdiTrashCanOutline} from "@mdi/js";
import BaseButton from "./BaseButton.vue";

let props = defineProps({
    items: Object | Array,
    hasDelete: {
        type: Boolean,
        default: false
    },
    hasPrimary: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'image'
    },
    label: String
});
let media = isArray(props.items) ? props.items : [props.items];
let status = reactive({status: null, message: null});
let emit = defineEmits(['destroy', 'primary'])

</script>

<template>
    <FormWithLabelField
        :cols="{lg:1}"
        :label="label ?? __('the_image')"
    >
        <div class="flex flex-wrap justify-between gap-5 ">
            <div
                v-for="(item,key) in media"
                v-if="media.length"
                :key="key"
                class="md:basis-5/12 "
            >
                <div class="grid my-auto content-between items-start h-full">
                    <div class="flex items-stretch h-full">
                        <img
                            v-if="type==='image'"
                            :alt="item.name"
                            :src="item.url"
                            class="h-auto rounded-lg self-center"
                        >
                        <video
                            v-else-if="type==='video'"
                            class="h-auto rounded-lg self-center"
                            controls
                        >
                            <source
                                :src="item.url"
                                type="video/mp4"
                            >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div class="flex gap-5 justify-self-center items-center w-full">
                        <p
                            class="mt-2 w-3/4 text-sm text-center break-all text-gray-500 dark:text-gray-400 "
                        >
                            {{ item.name }}
                        </p>
                        <div class="flex gap-1 items-end">
                            <BaseButton
                                v-if="hasDelete"
                                :icon="mdiTrashCanOutline"
                                color="danger"
                                @click="emit('destroy',item.id,key)"
                            />
                            <BaseButton
                                v-if="hasPrimary"
                                :disabled="item.primary"
                                :icon="mdiCheckCircleOutline"
                                color="success"
                                @click="emit('primary',item.id,key)"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                {{ __('no_data') }}
            </div>
        </div>
        <div class="m-1 lg:m-2 ">
            <slot/>
        </div>
    </FormWithLabelField>
</template>

<style scoped>

</style>
