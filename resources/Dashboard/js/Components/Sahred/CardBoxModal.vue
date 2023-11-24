<script setup>
import {computed} from "vue";
import {mdiClose} from "@mdi/js";
import BaseButton from "./BaseButton.vue";
import BaseButtons from "./BaseButtons.vue";
import CardBox from "./CardBox.vue";
import OverlayLayer from "./OverlayLayer.vue";
import CardBoxComponentTitle from "./CardBoxComponentTitle.vue";
import FormValidationErrors from "./FormValidationErrors.vue";
import {usePage} from "@inertiajs/vue3";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    isModal: {
        type: Boolean,
        default: true
    },
    isForm: false,
    button: {
        type: String,
        default: "info",
    },
    buttonLabel: {
        type: String,
        default: "Done",
    },

    hasCancel: Boolean,
    modelValue: {
        type: [String, Number, Boolean],
        default: null,
    },
});

const emit = defineEmits(["update:modelValue", "cancel", "confirm"]);

const value = computed({
    get: () => props.modelValue,
    set: (value) => emit("update:modelValue", value),
});
const confirmCancel = (mode) => {
    value.value = false;
    emit(mode);
};

const confirm = () => confirmCancel("confirm");

const cancel = () => {
        usePage().props.errors = {};
        confirmCancel("cancel")
    }
;
if (props.isModal) {
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && value.value) {
            cancel();
        }
    });
}
</script>
<template>
    <OverlayLayer
        v-if="isModal"
        v-show="value"
        @overlay-click="cancel"
    >
        <CardBox
            v-show="value"
            :is-form="isForm"
            class="shadow-lg max-h-screen-menu w-11/12 md:w-4/5 lg:w-2/5 xl:w-8/12 z-50 overflow-y-auto  "
            is-modal="is-modal"
        >
            <FormValidationErrors/>
            <CardBoxComponentTitle :title="title">
                <BaseButton
                    v-if="hasCancel"
                    :icon="mdiClose"
                    color="whiteDark"
                    rounded-full
                    small
                    @click.prevent="cancel"
                />
            </CardBoxComponentTitle>
            <div class="space-y-3 ">
                <slot/>
            </div>
            <template #footer>
                <BaseButtons>
                    <BaseButton
                        :color="button"
                        :label="buttonLabel"
                        @click="confirm"
                    />
                    <BaseButton
                        v-if="hasCancel"
                        :color="button"
                        :label="__('cancel')"
                        outline
                        @click="cancel"
                    />
                </BaseButtons>
            </template>
        </CardBox>
    </OverlayLayer>
    <CardBox
        v-else
        :is-form="isForm"
    >
        <FormValidationErrors/>
        <CardBoxComponentTitle :title="title"/>
        <div class="space-y-3 ">
            <slot/>
        </div>
        <template #footer>
            <BaseButtons>
                <BaseButton
                    :color="button"
                    :label="buttonLabel"
                    @click="confirm"
                />
                <BaseButton
                    v-if="hasCancel"
                    :color="button"
                    :label="__('cancel')"
                    outline
                    @click="cancel"
                />
            </BaseButtons>
        </template>
    </CardBox>
</template>
