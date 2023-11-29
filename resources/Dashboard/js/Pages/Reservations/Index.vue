<template>
    <SectionMain>
        <BreadCrumb
            :items="[{name: __(`reservations`), }]"/>
        <ReservationsList
            :items="data.data"
            :pagination="data.meta"
        />
        <!--        <DynamicList
                    :icon="mdiFormatListBulleted"
                    :model="model"
                    :resolver="resolver"
                >
                    <template #search>
                        <div class="col-span-full ">
                            <FormField :label="__('days')" class-addon="grid md:grid-cols-3 gap-5">
                                <FormControl
                                    v-model="daysInterval"
                                    autocomplete="search"
                                    name="search"
                                >
                                </FormControl>
                                <BaseButton :icon="mdiCalendarToday" :label="__('next')"
                                            color="success"
                                            @click="Search.start(Search.dateInterval({ interval:daysInterval }),'reservations',true)"/>
                                <BaseButton :icon="mdiCalendarToday" :label="__('previous')"
                                            color="danger"
                                            @click="Search.start(Search.dateInterval({ interval:daysInterval,mode:-1 }),'reservations',true)"/>
                            </FormField>
                        </div>
                    </template>
                </DynamicList>-->
    </SectionMain>

</template>

<script setup>

import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {computed, ref} from "vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import ReservationsList from "../../Components/Reservations/ReservationsList.vue";
import {usePage} from "@inertiajs/vue3";

let daysInterval = ref()
let patients = ref([]);
let data = computed(() => usePage().props.data)

</script>
<style scoped>

</style>
