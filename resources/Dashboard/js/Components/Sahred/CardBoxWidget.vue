<script setup>
import {mdiPlusCircle} from "@mdi/js";
import CardBox from "./CardBox.vue";
import NumberDynamic from "./NumberDynamic.vue";
import BaseIcon from "./BaseIcon.vue";
import BaseLevel from "./BaseLevel.vue";
import PillTagTrend from "./PillTagTrend.vue";
import BaseButton from "./BaseButton.vue";

defineProps({
    number: {
        type: Number,
        default: 0,
    },
    icon: {
        type: String,
        default: null,
    },
    prefix: {
        type: String,
        default: null,
    },
    suffix: {
        type: String,
        default: null,
    },
    label: {
        type: String,
        default: null,
    },
    color: {
        type: String,
        default: null,
    },
    trend: {
        type: String,
        default: null,
    },
    hasAction: Boolean,
    trendType: {
        type: String,
        default: null,
    },
});
</script>

<template>
    <CardBox>
        <BaseLevel
            v-if="trend"
            class="mb-3"
            mobile
        >
            <PillTagTrend
                :trend="trend"
                :trend-type="trendType"
                small
            />

        </BaseLevel>


        <div class="flex justify-between mb-2">

            <h3 class="text-lg leading-tight text-gray-500 dark:text-slate-400">
                {{ label }}
            </h3>

            <BaseButton
                v-if="hasAction"
                :icon="mdiPlusCircle"
                color="success"
                icon-h="h-4"
                icon-w="w-4"
                small
                @click="$emit('action') ; "
            />
        </div>
        <div class="flex justify-between items-stretch">
            <div class="my-auto">

                <h1 class="text-3xl leading-tight font-semibold">
                    <NumberDynamic
                        :prefix="prefix"
                        :suffix="suffix"
                        :value="number"
                    />
                </h1>
            </div>
            <BaseIcon
                v-if="icon"
                :class="color"
                :path="icon"
                h="h-16"
                size="48"
                w=""/>
        </div>

    </CardBox>
</template>
