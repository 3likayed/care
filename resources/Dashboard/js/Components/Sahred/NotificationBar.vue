<script setup>
import {computed, useSlots} from "vue";
import {mdiClose} from "@mdi/js";
import {colorsBgLight, colorsOutline} from "../../colors.js";
import BaseLevel from "./BaseLevel.vue";
import BaseIcon from "./BaseIcon.vue";
import BaseButton from "./BaseButton.vue";

const props = defineProps({
    icon: {
        type: String,
        default: null,
    },
    outline: Boolean,
    show: {
        type: Boolean,
        default: true,
    },
    color: {
        type: String,
        required: true,
    },
});

const componentClass = computed(() =>
    props.outline ? colorsOutline[props.color] : colorsBgLight[props.color]
);
const emits = defineEmits(["dismiss"])

const dismiss = () => {
    emits("dismiss")
};

const slots = useSlots();

const hasRightSlot = computed(() => slots.right);
</script>

<template>
    <div
        v-if="show"
        :class="componentClass"
        class="px-3 py-6 md:py-3 mb-6 last:mb-0 border rounded-lg transition-colors duration-150"
    >
        <BaseLevel>
            <div class="flex flex-col md:flex-row items-center">
                <BaseIcon
                    v-if="icon"
                    :path="icon"
                    class="md:ms-2"
                    h="h-10 md:h-5"
                    size="24"
                    w="w-10 md:w-5"
                />
                <span class="text-center md:text-start md:py-2"><slot/></span>
            </div>
            <slot
                v-if="hasRightSlot"
                name="right"
            />
            <BaseButton
                v-else
                :icon="mdiClose"
                color="white"
                rounded-full
                small
                @click="dismiss"
            />
        </BaseLevel>
    </div>
</template>
