import{p as a}from"./app-edde13b8.js";import{A as p,E as u,N as _,U as c,a0 as d}from"./@vue-3d043469.js";const v=(e,t)=>{const o=e[t];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((n,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+t)))})},y={__name:"ModelData",props:{data:{type:Object,default:{}},addonData:Object,model:String,isModal:{type:Boolean,default:!0},operation:String},setup(e){let t=e;const n=t.model.charAt(0).toUpperCase(),r=t.model.slice(1),i=n+r;let l=d(()=>v(Object.assign({"./Employee/EmployeeData.vue":()=>a(()=>import("./EmployeeData-aef01be9.js"),["assets/EmployeeData-aef01be9.js","assets/CardBoxModal-a716afb5.js","assets/@vue-3d043469.js","assets/@mdi-89bdb56e.js","assets/app-edde13b8.js","assets/pinia-a7ef4058.js","assets/@inertiajs-ef8f571f.js","assets/axios-28bc18a3.js","assets/deepmerge-92c57f0a.js","assets/call-bind-19fee3be.js","assets/get-intrinsic-4a38020a.js","assets/has-symbols-e8f3ca0e.js","assets/has-proto-f7d0b240.js","assets/function-bind-61637ca6.js","assets/hasown-bc561cf0.js","assets/set-function-length-9c361e89.js","assets/define-data-property-bf6c9733.js","assets/has-property-descriptors-58650a95.js","assets/gopd-e1d311d9.js","assets/qs-b9141582.js","assets/side-channel-efc613fb.js","assets/object-inspect-a4b74234.js","assets/nprogress-7cc256ad.js","assets/lodash.clonedeep-8fa9e58b.js","assets/lodash.isequal-7aa21295.js","assets/ziggy-js-4c580b49.js","assets/pluralize-27b8fe86.js","assets/moment-3156497a.js","assets/@tinymce-deed4607.js","assets/primevue-31afac00.js","assets/sweetalert2-9fa49638.js","assets/sweetalert2-f43e4f32.css","assets/laravel-vite-plugin-d10ca5e8.js","assets/app-93e4f22f.css","assets/vue-toast-notification-eeef7d8b.css","assets/CardBox-68c82576.js","assets/FormValidationErrors-006f6464.js","assets/FormField-3f60007e.js","assets/FormCheckRadioGroup-2729dc66.js","assets/FormCheckRadio-4aa9785c.js","assets/index-52e82673.js"]),"./Patient/PatientData.vue":()=>a(()=>import("./PatientData-221c5b8b.js"),["assets/PatientData-221c5b8b.js","assets/CardBoxModal-a716afb5.js","assets/@vue-3d043469.js","assets/@mdi-89bdb56e.js","assets/app-edde13b8.js","assets/pinia-a7ef4058.js","assets/@inertiajs-ef8f571f.js","assets/axios-28bc18a3.js","assets/deepmerge-92c57f0a.js","assets/call-bind-19fee3be.js","assets/get-intrinsic-4a38020a.js","assets/has-symbols-e8f3ca0e.js","assets/has-proto-f7d0b240.js","assets/function-bind-61637ca6.js","assets/hasown-bc561cf0.js","assets/set-function-length-9c361e89.js","assets/define-data-property-bf6c9733.js","assets/has-property-descriptors-58650a95.js","assets/gopd-e1d311d9.js","assets/qs-b9141582.js","assets/side-channel-efc613fb.js","assets/object-inspect-a4b74234.js","assets/nprogress-7cc256ad.js","assets/lodash.clonedeep-8fa9e58b.js","assets/lodash.isequal-7aa21295.js","assets/ziggy-js-4c580b49.js","assets/pluralize-27b8fe86.js","assets/moment-3156497a.js","assets/@tinymce-deed4607.js","assets/primevue-31afac00.js","assets/sweetalert2-9fa49638.js","assets/sweetalert2-f43e4f32.css","assets/laravel-vite-plugin-d10ca5e8.js","assets/app-93e4f22f.css","assets/vue-toast-notification-eeef7d8b.css","assets/CardBox-68c82576.js","assets/FormValidationErrors-006f6464.js","assets/FormField-3f60007e.js","assets/index-52e82673.js"]),"./Reservation/ReservationData.vue":()=>a(()=>import("./ReservationData-77707b4f.js"),["assets/ReservationData-77707b4f.js","assets/CardBoxModal-a716afb5.js","assets/@vue-3d043469.js","assets/@mdi-89bdb56e.js","assets/app-edde13b8.js","assets/pinia-a7ef4058.js","assets/@inertiajs-ef8f571f.js","assets/axios-28bc18a3.js","assets/deepmerge-92c57f0a.js","assets/call-bind-19fee3be.js","assets/get-intrinsic-4a38020a.js","assets/has-symbols-e8f3ca0e.js","assets/has-proto-f7d0b240.js","assets/function-bind-61637ca6.js","assets/hasown-bc561cf0.js","assets/set-function-length-9c361e89.js","assets/define-data-property-bf6c9733.js","assets/has-property-descriptors-58650a95.js","assets/gopd-e1d311d9.js","assets/qs-b9141582.js","assets/side-channel-efc613fb.js","assets/object-inspect-a4b74234.js","assets/nprogress-7cc256ad.js","assets/lodash.clonedeep-8fa9e58b.js","assets/lodash.isequal-7aa21295.js","assets/ziggy-js-4c580b49.js","assets/pluralize-27b8fe86.js","assets/moment-3156497a.js","assets/@tinymce-deed4607.js","assets/primevue-31afac00.js","assets/sweetalert2-9fa49638.js","assets/sweetalert2-f43e4f32.css","assets/laravel-vite-plugin-d10ca5e8.js","assets/app-93e4f22f.css","assets/vue-toast-notification-eeef7d8b.css","assets/CardBox-68c82576.js","assets/FormValidationErrors-006f6464.js","assets/FormField-3f60007e.js","assets/index-52e82673.js","assets/lodash-dce9ffc4.js"]),"./ReservationType/ReservationTypeData.vue":()=>a(()=>import("./ReservationTypeData-07c46643.js"),["assets/ReservationTypeData-07c46643.js","assets/CardBoxModal-a716afb5.js","assets/@vue-3d043469.js","assets/@mdi-89bdb56e.js","assets/app-edde13b8.js","assets/pinia-a7ef4058.js","assets/@inertiajs-ef8f571f.js","assets/axios-28bc18a3.js","assets/deepmerge-92c57f0a.js","assets/call-bind-19fee3be.js","assets/get-intrinsic-4a38020a.js","assets/has-symbols-e8f3ca0e.js","assets/has-proto-f7d0b240.js","assets/function-bind-61637ca6.js","assets/hasown-bc561cf0.js","assets/set-function-length-9c361e89.js","assets/define-data-property-bf6c9733.js","assets/has-property-descriptors-58650a95.js","assets/gopd-e1d311d9.js","assets/qs-b9141582.js","assets/side-channel-efc613fb.js","assets/object-inspect-a4b74234.js","assets/nprogress-7cc256ad.js","assets/lodash.clonedeep-8fa9e58b.js","assets/lodash.isequal-7aa21295.js","assets/ziggy-js-4c580b49.js","assets/pluralize-27b8fe86.js","assets/moment-3156497a.js","assets/@tinymce-deed4607.js","assets/primevue-31afac00.js","assets/sweetalert2-9fa49638.js","assets/sweetalert2-f43e4f32.css","assets/laravel-vite-plugin-d10ca5e8.js","assets/app-93e4f22f.css","assets/vue-toast-notification-eeef7d8b.css","assets/CardBox-68c82576.js","assets/FormValidationErrors-006f6464.js","assets/FormField-3f60007e.js","assets/index-52e82673.js"]),"./Role/RoleData.vue":()=>a(()=>import("./RoleData-deae0a6a.js"),["assets/RoleData-deae0a6a.js","assets/CardBoxModal-a716afb5.js","assets/@vue-3d043469.js","assets/@mdi-89bdb56e.js","assets/app-edde13b8.js","assets/pinia-a7ef4058.js","assets/@inertiajs-ef8f571f.js","assets/axios-28bc18a3.js","assets/deepmerge-92c57f0a.js","assets/call-bind-19fee3be.js","assets/get-intrinsic-4a38020a.js","assets/has-symbols-e8f3ca0e.js","assets/has-proto-f7d0b240.js","assets/function-bind-61637ca6.js","assets/hasown-bc561cf0.js","assets/set-function-length-9c361e89.js","assets/define-data-property-bf6c9733.js","assets/has-property-descriptors-58650a95.js","assets/gopd-e1d311d9.js","assets/qs-b9141582.js","assets/side-channel-efc613fb.js","assets/object-inspect-a4b74234.js","assets/nprogress-7cc256ad.js","assets/lodash.clonedeep-8fa9e58b.js","assets/lodash.isequal-7aa21295.js","assets/ziggy-js-4c580b49.js","assets/pluralize-27b8fe86.js","assets/moment-3156497a.js","assets/@tinymce-deed4607.js","assets/primevue-31afac00.js","assets/sweetalert2-9fa49638.js","assets/sweetalert2-f43e4f32.css","assets/laravel-vite-plugin-d10ca5e8.js","assets/app-93e4f22f.css","assets/vue-toast-notification-eeef7d8b.css","assets/CardBox-68c82576.js","assets/FormValidationErrors-006f6464.js","assets/FormField-3f60007e.js","assets/FormCheckRadioGroup-2729dc66.js","assets/FormCheckRadio-4aa9785c.js","assets/FormWithLabelField-34459270.js","assets/index-52e82673.js"])}),`./${i}/${i}Data.vue`));return(m,s)=>(p(),u(_(c(l)),{data:e.data,"is-modal":e.isModal,operation:e.operation,onCancel:s[0]||(s[0]=f=>m.$emit("cancel"))},null,40,["data","is-modal","operation"]))}};export{y as _,v as a};
