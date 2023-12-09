<script setup>
import {computed, provide, ref, useSlots} from "vue";
import BaseIcon from "./BaseIcon.vue";
import IconRounded from "./IconRounded.vue";
import {mdiPlusCircle} from "@mdi/js";
import BaseButton from "./BaseButton.vue";
import pluralize from "pluralize"
import {Link} from "@inertiajs/vue3";
import {Model} from "../../Utils/index.js";

let props = defineProps({
    icon: {
        type: String,
        default: null,
    },
    visitData: Object,
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


    const capitalizedInput = pluralize(inputString, 1);


    const words = capitalizedInput.split('-');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join('')

};


const hasSlot = computed(() => useSlots().default);
let showCreate = ref(false);
if (props.model) {
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
            <Link
                v-if="title"
                :class="main ? 'text-2xl md:text-3xl' : 'text-lg mm:text-xl'"
                :href="Model.indexLink(model,visitData)"
                class="leading-tight"
            >
                {{ title }}
            </Link>
        </div>
        <slot v-if="hasSlot">
        </slot>
        <BaseButton v-if="hasCreate && can(`${model}.create`)" :icon="mdiPlusCircle" color="success"
                    @click="showCreate=true"/>
    </section>


    <slot v-if="hasCreate && showCreate " name="create" @cancel="showCreate=false">

    </slot>

</template>
