import {defineStore} from "pinia";

export const useStepStore = defineStore("step", {
    state: () => ({
        /* User */
        step: 0,
    }),
    actions: {
        setStep(payload) {
            this.step = payload;
        },

    },
});
