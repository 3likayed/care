<template>
    <SectionMain>
        <BreadCrumb
            :items="[{name: __('products'), href: route(`dashboard.products.index`)},{name: data.name, href: route(`dashboard.products.show`, data.id)}]"/>
        <CardBox class="mb-4">
            <StepsComponent
                v-model="step"
                :steps="steps"
            />
        </CardBox>
        <section v-if="step===0">
            <ProductEdit
                :data="data"
                :is-modal="false"
            />
        </section>
        <section v-show="step === 1">
            <ProductsList
                :has-search="false"
                :items="data.products"
                :sortable="false"
            >
                <template #create>
                    <ProductCreate :data="{product_id:data.id}" :products="[data]"
                                       :productTypes="productTypes"/>
                </template>
            </ProductsList>
        </section>
        <section v-show="step === 2">
            sdadasdas
        </section>
        <!--
            <section v-show="step === 1">
              <PostDetailsList :data="data"/>
            </section>
        -->
        <!--    <section v-show="step === 1">
              <ProjectsList :projects="product.projects"/>
            </section>-->
    </SectionMain>
</template>

<script setup>

import {usePage} from "@inertiajs/vue3";
import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {computed, ref} from "vue";
import {__} from "../../Globals.js";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import StepsComponent from "../../Components/Sahred/StepsComponent.vue";
import CardBox from "../../Components/Sahred/CardBox.vue";
import productEdit from "../../Components/Products/ProductEdit.vue";
import productsList from "../../Components/Products/ProductsList.vue";
import productCreate from "../../Components/Products/ProductCreate.vue";
import ProductsList from "../../Components/Products/ProductsList.vue";
import ProductCreate from "../../Components/Products/ProductCreate.vue";


let steps = ref([__('data'), __('products'), __('home')]);
let step = ref(0);

let data = computed(() => usePage().props.data);
let productTypes = usePage().props.product_types;

</script>
<style scoped>

</style>
