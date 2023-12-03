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
    model: String,
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

const convertToPascalCaseAndRemoveLast = (inputString) => {
    // Capitalize the first letter of the input string
    const capitalizedInput = inputString.charAt(0).toUpperCase() + inputString.slice(1);

    if (capitalizedInput.includes('-')) {
        // Split the string into words using '-'
        const words = capitalizedInput.split('-');

        // Capitalize the first letter of each word
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

        // Join the words back together
        const pascalCaseString = capitalizedWords.join('');

        // Remove the last letter
        return pascalCaseString.slice(0, -1);
    } else {
        // String is already in PascalCase
        // Remove the last letter
        return capitalizedInput.slice(0, -1);
    }
};


const hasSlot = computed(() => useSlots().default);
let showCreate = ref(false);
if (props.model) {
    console.log(props.model, `showCreate${convertToPascalCaseAndRemoveLast(props.model)}`)
    provide(`showCreate${convertToPascalCaseAndRemoveLast(props.model)}`, showCreate)
}

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
