<script setup>
import {mdiUpload} from "@mdi/js";
import {computed, ref, watch} from "vue";
import BaseButton from "./BaseButton.vue";

const props = defineProps({
    modelValue: {
        type: [Object, File, Array],
        default: null,
    },
    label: {
        type: String,
        default: null,
    },
    icon: {
        type: String,
        default: mdiUpload,
    },
    accept: {
        type: String,
        default: null,
    },
    color: {
        type: String,
        default: "info",
    },
    isRoundIcon: Boolean,
    name: String,
    isMultiple: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["update:modelValue"]);

const root = ref(null);

const files = ref(props.modelValue);

const showFilename = computed(() => !props.isRoundIcon && files.value);

const computedValue = computed(() => props.modelValue);

watch(computedValue, (value) => {
    files.value = value;
    if (!value) {
        root.value.input.value = null;
    }
});
const upload = (event) => {
    files.value = event.target.files || event.dataTransfer.files
    emit("update:modelValue", files.value);
    // Use this as an example for handling files uploads
    // let formData = new FormData()
    // formData.append('files', files.value)

    // const mediaStoreRoute = `/your-route/`

    // axios
    //   .post(mediaStoreRoute, formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     },
    //     onUploadProgress: progressEvent
    //   })
    //   .then(r => {
    //
    //   })
    //   .catch(err => {
    //
    //   })
};

// const uploadPercent = ref(0)
//
// const progressEvent = progressEvent => {
//   uploadPercent.value = Math.round(
//     (progressEvent.loaded * 100) / progressEvent.total
//   )
// }
</script>

<template>
    <div class="flex max-w-full justify-between gap-2 relative">
        <label class="self-center">
            <BaseButton
                :class="{ 'w-12 h-12': isRoundIcon }"
                :color="color"
                :icon="icon"
                :icon-size="isRoundIcon ? 24 : undefined"
                :label="isRoundIcon ? null : label"
                :rounded-full="isRoundIcon"
                as="a"
            />
            <input
                ref="root"
                :accept="accept"
                :multiple="isMultiple"
                :name="name"
                class="absolute top-0 start-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1"
                type="file"
                @input="upload"
            >
        </label>
        <div
            v-if="showFilename && files.length"
            class="overflow-x-auto px-4 py-2 bg-gray-100 dark:bg-slate-800 border-gray-200 dark:border-slate-700 border rounded"
        >
            <div
                v-for="(file,key) in files"
                class="flex justify-start"
            >
                <div class="max-w-fit">
                    <span>{{ key + 1 }}</span>
                </div>
                <div><span>-{{ file.name }}</span></div>
            </div>
        </div>
    </div>
</template>
