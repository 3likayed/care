import{b,E as n,P as s,A as p,J as a,U as e,O as d,X as V,F as y}from"./@vue-3d043469.js";import{T as P,Z as g,Q as $}from"./@inertiajs-ef8f571f.js";import{u as x,t as U,y as u}from"./@mdi-89bdb56e.js";import{_ as F,a as i,b as T,e as k,c as f}from"./app-edde13b8.js";import{_ as q}from"./SectionFullScreen-5aa357ce.js";import{_ as v}from"./CardBox-68c82576.js";import{_ as A}from"./FormCheckRadioGroup-2729dc66.js";import{_ as l}from"./FormField-3f60007e.js";import{_ as C}from"./FormValidationErrors-006f6464.js";import"./axios-28bc18a3.js";import"./deepmerge-92c57f0a.js";import"./call-bind-19fee3be.js";import"./get-intrinsic-4a38020a.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-f7d0b240.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./set-function-length-9c361e89.js";import"./define-data-property-bf6c9733.js";import"./has-property-descriptors-58650a95.js";import"./gopd-e1d311d9.js";import"./qs-b9141582.js";import"./side-channel-efc613fb.js";import"./object-inspect-a4b74234.js";import"./nprogress-7cc256ad.js";import"./lodash.clonedeep-8fa9e58b.js";import"./lodash.isequal-7aa21295.js";import"./pinia-a7ef4058.js";import"./ziggy-js-4c580b49.js";import"./pluralize-27b8fe86.js";import"./moment-3156497a.js";/* empty css                               */import"./@tinymce-deed4607.js";import"./primevue-31afac00.js";import"./sweetalert2-9fa49638.js";import"./laravel-vite-plugin-d10ca5e8.js";const _e={__name:"Register",setup(h){const o=P({name:"",email:"",password:"",password_confirmation:"",terms:[]}),c=b(()=>{var t;return(t=$().props.jetstream)==null?void 0:t.hasTermsAndPrivacyPolicyFeature}),_=()=>{o.transform(t=>({...t,terms:o.terms&&o.terms.length})).post(route("dashboard.register"),{onFinish:()=>o.reset("password","password_confirmation")})};return(t,r)=>(p(),n(F,null,{default:s(()=>[a(e(g),{title:"Register"}),a(q,{bg:"purplePink"},{default:s(({cardClass:w})=>[a(v,{class:d([w,"my-24"]),"is-form":"",onSubmit:V(_,["prevent"])},{default:s(()=>[a(C),a(l,{help:"Please enter your name",label:"Name","label-for":"name"},{default:s(()=>[a(i,{id:"name",modelValue:e(o).name,"onUpdate:modelValue":r[0]||(r[0]=m=>e(o).name=m),icon:e(x),autocomplete:"name",required:"",type:"text"},null,8,["modelValue","icon"])]),_:1}),a(l,{help:"Please enter your email",label:"Email","label-for":"email"},{default:s(()=>[a(i,{id:"email",modelValue:e(o).email,"onUpdate:modelValue":r[1]||(r[1]=m=>e(o).email=m),icon:e(U),autocomplete:"email",required:"",type:"email"},null,8,["modelValue","icon"])]),_:1}),a(l,{help:"Please enter new password",label:"Password","label-for":"password"},{default:s(()=>[a(i,{id:"password",modelValue:e(o).password,"onUpdate:modelValue":r[2]||(r[2]=m=>e(o).password=m),icon:e(u),autocomplete:"new-password",required:"",type:"password"},null,8,["modelValue","icon"])]),_:1}),a(l,{help:"Please confirm your password",label:"Confirm Password","label-for":"password_confirmation"},{default:s(()=>[a(i,{id:"password_confirmation",modelValue:e(o).password_confirmation,"onUpdate:modelValue":r[3]||(r[3]=m=>e(o).password_confirmation=m),icon:e(u),autocomplete:"new-password",required:"",type:"password"},null,8,["modelValue","icon"])]),_:1}),c.value?(p(),n(A,{key:0,modelValue:e(o).terms,"onUpdate:modelValue":r[4]||(r[4]=m=>e(o).terms=m),options:{agree:"I agree to the Terms"},name:"remember"},null,8,["modelValue"])):y("",!0),a(T),a(k,null,{default:s(()=>[a(f,{class:d({"opacity-25":e(o).processing}),disabled:e(o).processing,color:"info",label:"Register",type:"submit"},null,8,["class","disabled"]),a(f,{color:"info",label:"Login",outline:"","route-name":"login"})]),_:1})]),_:2},1032,["class","onSubmit"])]),_:1})]),_:1}))}};export{_e as default};