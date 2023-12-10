<script setup>
import {computed, useSlots} from "vue";
import BaseDivider from "./BaseDivider.vue";
import BaseButton from "./BaseButton.vue";
import BaseButtons from "./BaseButtons.vue";

let props = defineProps({
    label: {
        type: String,
        default: null,
    },
    classAddon: String,
    labelFor: {
        type: String,
        default: null,
    },
    errors: {
        type: String,
        default: null,
    },
    actions: Array | Object,
    button: {
        type: Object,
        default: null,
    },
    withDivider: Boolean,
    help: {
        type: String,
        default: null,
    },
    isDisabled:Boolean,
    hasBorder: {
        type: Boolean,
        default: true
    }
});

const slots = useSlots();
const emit = defineEmits(["action", "buttonClick"]);

function doAction(action, key) {
    emit("action", action, key)
}

const wrapperClass = computed(() => {
    const base = ['grid grid-cols-1 gap-3 items-start'];
    const slotsLength = slots.default().length;
    if (props.classAddon) {
        return props.classAddon;
    }
    return base;


});
</script>

<template>
    <div>

        <div
            :class="{'rounded-md dark:border-slate-800 border-gray-200 border' : hasBorder}"
            class="justify-between items-start mb-3 p-2 "
        >
            <div class="flex items-center justify-between">
                <label
                    v-if="label"
                    :for="labelFor"
                    class="block font-medium mb-2"
                >{{
                        label
                    }}</label>
                <BaseButton
                    v-if="button"
                    :color="button.color"
                    :icon="button.icon"
                    color="whiteDark"
                    @click="$emit('buttonClick')"
                />
            </div>
            <div :class="wrapperClass">
                <slot/>
            </div>
            <div
                v-if="help && !errors"
                class="text-start text-xs text-gray-600 dark:text-slate-300 mt-1"
            >
                {{ help }}
            </div>
            <div
                v-if="errors"
                class="text-start text-xs text-red-500 dark:text-red-400 mt-1"
            >
                {{ errors }}
            </div>
            <BaseButtons
                v-if="!isDisabled"
                v-for="(action,key) in actions"
                class-addon="mt-3"
                mb=""
            >
                <BaseButton
                    :key="key"
                    :color="action.color"
                    :icon="action.icon"
                    :label="action.label"
                    @click="doAction(key,action.key)"
                />
            </BaseButtons>
        </div>
        <BaseDivider v-if="withDivider"/>
    </div>
</template>
