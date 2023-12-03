<script setup>
import {computed, provide, ref, useSlots} from "vue";
import BaseIcon from "./BaseIcon.vue";
import IconRounded from "./IconRounded.vue";
import {mdiPlusCircle} from "@mdi/js";
import BaseButton from "./BaseButton.vue";

let props = defineProps({
    icon: {
        type: String,
        default: null,
    },
    model : String,
    hasCreate: {
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        required: false,
    },

    main: Boolean,
});
function capitalizeAndRemoveLast(str) {
    // Capitalize the first letter
    const capitalizedString = str.charAt(0).toUpperCase() + str.slice(1);

    // Remove the last letter
    return capitalizedString.slice(0, -1);
}

const hasSlot = computed(() => useSlots().default);
let showCreate = ref(false);
provide(`showCreate${capitalizeAndRemoveLast(props.model)}`, showCreate)
</script>

<template>
    <section
        :class="{ 'justify-between' : title ,'justify-end':!title}"
        class="mb-6 flex items-center"
    >
        <div class="flex items-center justify-end">
            <IconRounded
                v-if="icon && main"
                :icon="icon"
                bg
                class="me-3"
                color="light"
            />
            <BaseIcon
                v-else-if="icon"
                :path="icon"
                class="me-2"
                size="20"
            />
            <h1
                v-if="title"
                :class="main ? 'text-2xl md:text-3xl' : 'text-lg mm:text-xl'"
                class="leading-tight"
            >
                {{ title }}
            </h1>
        </div>
        <slot v-if="hasSlot">
        </slot>
        <BaseButton v-if="hasCreate" :icon="mdiPlusCircle" color="success" @click="showCreate=true"/>
    </section>


    <slot v-if="hasCreate && showCreate " name="create" @cancel="showCreate=false">

    </slot>

</template>
