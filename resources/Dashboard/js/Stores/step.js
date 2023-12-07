import {defineStore} from "pinia";
import {usePage} from "@inertiajs/vue3";
import {computed} from "vue";

let component = computed(() => usePage().component)
export const useStepStore = defineStore("step", {
    state: () => ({
        /* User */
        step: {},
    }),
    actions: {
        setStep(payload) {
            this.step[component.value] = payload;
        },
        getStep() {
            return this.step[component.value] ?? 0;
        },

    },
});
