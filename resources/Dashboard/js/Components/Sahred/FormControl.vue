<script setup>
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import {useMainStore} from "../../Stores/main.js";
import BaseButtons from "./BaseButtons.vue";
import BaseButton from "./BaseButton.vue";
import Editor from '@tinymce/tinymce-vue'
import {tinyMcConfig} from "../../Globals.js";
import SelectControl from "./SelectControl.vue";
import BaseIcon from "./BaseIcon.vue";
import DateControl from "./DateControl.vue";

const props = defineProps({
    name: {
        type: String,
        default: null,
    },
    inline: Boolean,
    min: String,
    max: String,
    label: String,
    labelFor: String,
    maxWidth: String,
    id: {
        type: String,
        default: null,
    },
    autocomplete: {
        type: String,
        default: null,
    },
    errors: {
        type: String,
        default: null,
    },
    maxlength: {
        type: String,
        default: null,
    },
    placeholder: {
        type: String,
        default: null,
    },
    inputmode: {
        type: String,
        default: null,
    },
    icon: {
        type: String,
        default: null,
    },
    options: {
        type: Array,
        default: null,
    },
    isDisabled: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: "text",
    },
    modelValue: {
        type: [String, Number, Boolean, Array, Object],
        default: "",
    },
    actions: Array | Object,
    required: Boolean,
    borderless: Boolean,
    transparent: Boolean,
    ctrlKFocus: Boolean,
    otherLabels: Array,
    dir: String,
    isMultiple: {
        type: Boolean,
        default: false
    },
});

const emit = defineEmits(["update:modelValue", "setRef", "action", 'filter', 'render']);

const computedValue = computed({
    get: () => props.modelValue,
    set: (value) => {
        emit("update:modelValue", value);
    },
});
const computedType = computed(() => (props.options ? "select" : props.type));
const isDate = (computedType.value === "datetime" || computedType.value === "date" || computedType.value === "date-range")
const inputElClass = computed(() => {
    const base = [
        "px-3  focus:ring focus:outline-none border-gray-700 rounded ",
        "dark:placeholder-gray-400 py-2 ",
        props.maxWidth ?? 'max-w-full w-full  ',
        computedType.value === "textarea" ? "h-24" : ((computedType.value === "select" && props.isMultiple) || isDate) ? "" : "h-12 ",
        props.borderless ? "border-0" : "border",
        props.transparent ? "bg-transparent" : (props.isDisabled ? 'bg-gray-100 dark:bg-slate-700' : "bg-white dark:bg-slate-800"),

    ];

    if (props.icon && !isDate) {
        base.push("ps-8");
    }

    return base;
});


const mainStore = useMainStore();

const selectEl = ref(null);

const textareaEl = ref(null);

const inputEl = ref(null);

onMounted(() => {
    if (selectEl.value) {
        emit("setRef", selectEl.value);
    } else if (textareaEl.value) {
        emit("setRef", textareaEl.value);
    } else {
        emit("setRef", inputEl.value);
    }
    emit('render', computedValue.value);

});

if (props.ctrlKFocus) {
    const fieldFocusHook = (e) => {
        if (e.ctrlKey && e.key === "k") {
            e.preventDefault();
            inputEl.value.focus();
        } else if (e.key === "Escape") {
            inputEl.value.blur();
        }
    };

    onMounted(() => {
        if (!mainStore.isFieldFocusRegistered) {
            window.addEventListener("keydown", fieldFocusHook);
            mainStore.isFieldFocusRegistered = true;
        } else {
            // console.error('Duplicate field focus event')
        }
    });

    onBeforeUnmount(() => {
        window.removeEventListener("keydown", fieldFocusHook);
        mainStore.isFieldFocusRegistered = false;
    });
}
let computedOptions = computed(() => props.options);

function doAction(action, key) {
    emit("action", action, key)
}


if (computedType.value === "editor") {

}
</script>

<template>
    <div>

        <label
            v-if="label"
            :for="labelFor"
            class="block font-medium mb-2"
        >{{
                label
            }}</label>
        <div
            :class="{'flex flex-row gap-2': actions}"
            class="relative"
        >

            <SelectControl
                v-if="computedType==='select'"
                :id="id"
                ref="inputEl"
                v-model="computedValue"
                :class="inputElClass"
                :disabled="isDisabled"
                :is-multiple="isMultiple"
                :name="name"
                :options="computedOptions"
                :placeholder="placeholder"
                @filter="(value)=>emit('filter',value.value)">

            </SelectControl>
            <DateControl
                v-else-if="isDate"
                :id="id"
                ref="inputEl"
                v-model="computedValue"
                :autocomplete="autocomplete??name"
                :class="inputElClass"
                :disabled="isDisabled"
                :inline="inline"
                :inputmode="inputmode"
                :max="max"
                :maxlength="maxlength"
                :min="min"
                :name="name"
                :placeholder="placeholder"
                :required="required"
                :type="computedType"
            />

            <textarea
                v-else-if="computedType === 'textarea'"
                :id="id"
                ref="inputEl"
                v-model="computedValue"
                :class="inputElClass"
                :disabled="isDisabled"
                :maxlength="maxlength"
                :name="name"
                :placeholder="placeholder"
                :required="required"
            />

            <Editor
                v-else-if="computedType === 'editor'"
                v-model="computedValue"
                :init="tinyMcConfig(dir)"
                api-key="jf9lzhq7i42i1hk22z9opddy9lu5ajwu1id9svetvkchydwv"
                class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full"
            />


            <input
                v-else
                :id="id"
                ref="inputEl"
                v-model="computedValue"
                :autocomplete="autocomplete??name"
                :class="inputElClass"
                :disabled="isDisabled"
                :inputmode="inputmode"
                :max="max"
                :maxlength="maxlength"
                :min="min"
                :name="name"
                :placeholder="placeholder"
                :required="required"
                :type="computedType"
            >

            <BaseIcon
                v-if="icon && !isDate"
                :path="icon"
                class="absolute my-auto translate-y-1/2 top-0 start-0 z-10 pointer-events-none text-gray-500 dark:text-slate-400"
                w="w-10"
            />
            <BaseButtons v-for="(action,key) in actions">
                <BaseButton
                    :key="key"
                    :color="action.color"
                    :icon="action.icon"
                    :label="action.label"
                    class=""
                    @click="doAction(key,action.key)"
                />
            </BaseButtons>
            <div
                v-if="errors"
                class="text-start text-xs text-red-500 dark:text-red-400 mt-1 w-100 "
            >
                {{ errors }}
            </div>
        </div>
    </div>


</template>
<style>
</style>
