<script setup>
import {mdiEmail, mdiFacebook, mdiInstagram, mdiLinkedin, mdiLockAlertOutline, mdiPhone, mdiTwitter,} from "@mdi/js";
import SectionMain from "../../Components/Sahred/SectionMain.vue";
import CardBox from "../../Components/Sahred/CardBox.vue";
import FormField from "../../Components/Sahred/FormField.vue";
import FormControl from "../../Components/Sahred/FormControl.vue";
import BaseButton from "../../Components/Sahred/BaseButton.vue";
import BaseButtons from "../../Components/Sahred/BaseButtons.vue";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import {useForm, usePage} from "@inertiajs/vue3";
import FormValidationErrors from "../../Components/Sahred/FormValidationErrors.vue";
import FormWithLabelField from "../../Components/Sahred/FormWithLabelField.vue";
import {reactive, ref} from "vue";
import StepsComponent from "../../Components/Sahred/StepsComponent.vue";
import {__, assignMeta} from "../../Globals.js"
import metaDataComponent from "../../Components/Sahred/MetaDataComponent.vue";
import countryCodes from "../../countryCodes.js";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import GoogleMap from "../../Components/Sahred/GoogleMap.vue";

const user = usePage().props.auth.user;
let locales = usePage().props.locales;
let settings = usePage().props.settings
let country_code = countryCodes;
const form = useForm({
    name: settings?.name ?? {},
    title: settings?.title ?? {},
    description: settings?.description ?? {},
    phone: settings?.phone ?? [{}],
    whatsapp: settings?.whatsapp ?? [{}],
    email: settings?.email ?? [null],
    location: {
        lat: settings?.location?.lat,
        lng: settings?.location?.lng,
    },

    social: {
        facebook: settings?.social?.facebook ?? null,
        instagram: settings?.social?.instagram ?? null,
        twitter: settings?.social?.twitter ?? null,
        linkedin: settings?.social?.linkedin ?? null,
    },
    meta: assignMeta(settings?.meta),
    _method: 'put',
});
let mapCenter = reactive({lat: form.location.lat, lng: form.location.lng});
const submit = () => {

    form.post(route('dashboard.settings.update'), {
        preserveState: (page) => Object.keys(page.props.errors).length,
    });


};

function addField(field) {
    if (field === 'email') {
        form[field][Object.keys(form[field]).length] = null
    } else
        form[field][Object.keys(form[field]).length] = {};

}

let steps = ref([__('main_data'), __('meta')]);
let step = ref(0);

function performActionOnEmail(action, key) {
    if (action === "delete") {
        form.email.splice(key, 1);
    }
}

function performActionOnPhone(action, key) {

    if (action === "delete") {
        form.phone.splice(key, 1);
    }


}

function performActionOnWhatsapp(action, key) {

    if (action === "delete") {
        form.whatsapp.splice(key, 1);
    }
}

</script>

<template>
    <SectionMain>
        <BreadCrumb :items="[{name: __('settings'), href: route('dashboard.settings.edit')}]"/>
        <SectionTitleLineWithButton
            :icon="mdiLockAlertOutline"
            :title="__('settings')"
            main
        />
        <CardBox
            is-form
            @submit.prevent="submit"
        >
            <FormValidationErrors v-if="Object.keys($page.props.errors).length"/>
            <StepsComponent
                v-model="step"
                :steps="steps"
            />
            <div v-if="step===0">
                <FormWithLabelField :label="__('site_name')">
                    <FormField
                        v-for="locale in locales"
                        :errors="form.errors[`name.${locale}`]"
                        :label="__(locale)"
                    >
                        <FormControl
                            v-model="form.name[locale]"
                            autocomplete="name"
                            name="name"
                            required
                        />
                    </FormField>
                </FormWithLabelField>
                <FormWithLabelField :label="__('site_title')">
                    <FormField
                        v-for="locale in locales"
                        :errors="form.errors[`title.${locale}`]"
                        :label="__(locale)"
                    >
                        <FormControl
                            v-model="form.title[locale]"
                            autocomplete="name"
                            name="name"
                            required
                        />
                    </FormField>
                </FormWithLabelField>
                <FormWithLabelField :label="__('site_description')">
                    <FormField
                        v-for="locale in locales"
                        :errors="form.errors[`description.${locale}`]"
                        :label="__(locale)"
                    >
                        <FormControl
                            v-model="form.description[locale]"
                            :dir=" locale==='ar'?'rtl':'ltr'"
                            autocomplete="description"
                            name="description"
                            required
                            type="editor"
                        />
                    </FormField>
                </FormWithLabelField>
                <FormWithLabelField
                    :cols="{sm:1 , lg:2 }"
                    :label="__('social_media')"
                >
                    <FormField
                        :errors="form.errors[`social.facebook`]"
                        :label="__('facebook')"
                    >
                        <FormControl
                            v-model="form.social.facebook"
                            :icon="mdiFacebook"
                            autocomplete="facebook"
                            name="facebook"
                        />
                    </FormField>
                    <FormField
                        :errors="form.errors[`social.twitter`]"
                        :label="__('twitter')"
                    >
                        <FormControl
                            v-model="form.social.twitter"
                            :icon="mdiTwitter"
                            autocomplete="twitter"
                            name="twitter"
                        />
                    </FormField>
                    <FormField
                        :errors="form.errors[`social.instagram`]"
                        :label="__('instagram')"
                    >
                        <FormControl
                            v-model="form.social.instagram"
                            :icon="mdiInstagram"
                            autocomplete="instagram"
                            name="instagram"
                        />
                    </FormField>
                    <FormField
                        :errors="form.errors[`social.linkedin`]"
                        :label="__('linkedin')"
                    >
                        <FormControl
                            v-model="form.social.linkedin"
                            :icon="mdiLinkedin"
                            autocomplete="linkedin"
                            name="linkedin"
                        />
                    </FormField>
                </FormWithLabelField>
                <div class="grid lg:grid-cols-3 gap-3 mt-10">
                    <FormWithLabelField
                        :button="{color:'success' , icon:mdiPlusCircle }"
                        :cols="{sm:1 , lg:1 }"
                        :errors="form.errors.email"
                        :label="__('email')"
                        @button-click="addField('email')"
                    >
                        <FormField
                            v-for="(email,key) in form.email"
                            :key="key"
                            :errors="form.errors[`email.${key}`]"
                        >
                            <FormControl
                                v-model="form.email[key]"
                                :actions="{delete:{color:'danger' , icon:mdiTrashCanOutline ,key:key} }"
                                :icon="mdiEmail"
                                autocomplete="email"
                                name="email[]"
                                @action="performActionOnEmail"
                            />
                        </FormField>
                    </FormWithLabelField>
                    <FormWithLabelField
                        :button="{color:'success' , icon:mdiPlusCircle }"
                        :cols="{sm:1 , lg:1 }"
                        :errors="form.errors.phone"
                        :label="__('phone')"
                        @button-click="addField('phone')"
                    >
                        <FormField
                            v-for="(phone,key) in form.phone"
                            :key="key"
                            :errors="form.errors[`phone.${key}.number`]"
                            class-addon="grid grid-cols-12 gap-2"
                        >
                            <FormControl
                                v-model="form.phone[key].country_code"
                                :options="countryCodes"
                                :other-labels="['emoji','code']"
                                class="col-span-4"
                                type="select"
                            />
                            <FormControl
                                v-model="form.phone[key].number"
                                :actions="{delete:{color:'danger' , icon:mdiTrashCanOutline ,key:key} }"
                                :icon="mdiPhone"
                                autocomplete="phone"
                                class="col-span-8"
                                name="phone[]"
                                @action="performActionOnPhone"
                            />
                        </FormField>
                    </FormWithLabelField>
                    <FormWithLabelField
                        :button="{color:'success' , icon:mdiPlusCircle }"
                        :cols="{sm:1 , lg:1 }"
                        :errors="form.errors.whatsapp"
                        :label="__('whatsapp')"
                        @button-click="addField('whatsapp')"
                    >
                        <FormField
                            v-for="(whatsapp,key) in form.whatsapp"
                            :key="key"
                            :errors="form.errors[`whatsapp.${key}.number`]"
                            class-addon="grid grid-cols-12 gap-2"
                        >
                            <FormControl
                                v-model="form.whatsapp[key].country_code"
                                :options="countryCodes"
                                :other-labels="['emoji','code']"
                                class="col-span-4"
                                type="select"
                            />
                            <FormControl
                                v-model="form.whatsapp[key].number"
                                :actions="{delete:{color:'danger' , icon:mdiTrashCanOutline ,key:key} }"
                                :icon="mdiPhone"
                                autocomplete="whatsapp"
                                class="col-span-8"
                                name="whatsapp[]"
                                @action="performActionOnWhatsapp"
                            />
                        </FormField>
                    </FormWithLabelField>
                </div>
                <FormWithLabelField
                    :cols="{lg:1}"
                    :label="__('site_location')"
                >
                    <GoogleMap
                        v-model="form.location"
                        :center="{lat:form.location.lat , lng:form.location.lng}"
                    />
                </FormWithLabelField>
            </div>
            <div v-if="step===1">
                <metaDataComponent v-model="form"/>
            </div>
            <template #footer>
                <BaseButtons>
                    <BaseButton
                        :label="__('continue')"
                        color="info"
                        type="submit"
                    />
                </BaseButtons>
            </template>
        </CardBox>
    </SectionMain>
</template>
