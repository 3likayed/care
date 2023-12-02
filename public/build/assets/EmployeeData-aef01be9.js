import{_ as E}from"./CardBoxModal-a716afb5.js";import{u as B,z as C,P as k,Q as F,K as T,y as M}from"./@mdi-89bdb56e.js";import{_ as i}from"./FormField-3f60007e.js";import{m as H,a as u,x as c}from"./app-edde13b8.js";import{T as N,Q as O}from"./@inertiajs-ef8f571f.js";import{_ as Q}from"./FormCheckRadioGroup-2729dc66.js";import{_ as j}from"./FormCheckRadio-4aa9785c.js";import"./moment-3156497a.js";import{M as z}from"./index-52e82673.js";import{U as e,A as p,E as b,P as d,J as n,B as w,H as _,I as h,F as D}from"./@vue-3d043469.js";import"./CardBox-68c82576.js";import"./FormValidationErrors-006f6464.js";import"./pinia-a7ef4058.js";import"./ziggy-js-4c580b49.js";import"./pluralize-27b8fe86.js";import"./call-bind-19fee3be.js";import"./get-intrinsic-4a38020a.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-f7d0b240.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./set-function-length-9c361e89.js";import"./define-data-property-bf6c9733.js";import"./has-property-descriptors-58650a95.js";import"./gopd-e1d311d9.js";/* empty css                               */import"./axios-28bc18a3.js";import"./@tinymce-deed4607.js";import"./primevue-31afac00.js";import"./sweetalert2-9fa49638.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./deepmerge-92c57f0a.js";import"./qs-b9141582.js";import"./side-channel-efc613fb.js";import"./object-inspect-a4b74234.js";import"./nprogress-7cc256ad.js";import"./lodash.clonedeep-8fa9e58b.js";import"./lodash.isequal-7aa21295.js";const Be={__name:"EmployeeData",props:{data:{type:Object,default:{}},show:Boolean,operation:String,isModal:{type:Boolean,default:!0}},setup(m){var $,y,U,A,q,v;let f=m,o=N({name:($=f.data)==null?void 0:$.name,email:(y=f.data)==null?void 0:y.email,address:((U=f.data)==null?void 0:U.address)??[null],phone:((A=f.data)==null?void 0:A.phone)??[null],password:null,password_confirmation:null,role:(v=(q=f.data)==null?void 0:q.role)==null?void 0:v.id}),P=O().props.roles,g="employee";return(s,r)=>s.can(`${e(H)(e(g))}.${m.operation}`)?(p(),b(E,{key:0,"button-label":s.__(m.operation),"has-cancel":m.isModal,"has-errors":e(o).hasErrors,"is-form":!0,"is-modal":m.isModal,"model-value":!0,title:s.__(m.operation+"_field",{field:"employee"}),onCancel:r[6]||(r[6]=a=>s.$emit("cancel")),onConfirm:r[7]||(r[7]=a=>e(z).submit(m.operation,"patient",e(o),m.data.id))},{default:d(()=>[n(i,{errors:e(o).errors.name,label:s.__("name"),"label-for":"name"},{default:d(()=>[n(u,{modelValue:e(o).name,"onUpdate:modelValue":r[0]||(r[0]=a=>e(o).name=a),icon:e(B),autocomplete:"name",name:"name",required:""},null,8,["modelValue","icon"])]),_:1},8,["errors","label"]),n(i,{errors:e(o).errors.email,label:s.__("email"),"label-for":"email"},{default:d(()=>[n(u,{modelValue:e(o).email,"onUpdate:modelValue":r[1]||(r[1]=a=>e(o).email=a),icon:e(B),autocomplete:"email",name:"email",required:""},null,8,["modelValue","icon"])]),_:1},8,["errors","label"]),n(i,{actions:{append:{color:"success",icon:e(C)}},label:s.__("address"),"class-addon":"space-y-4","has-border":"","label-for":"address",onAction:r[2]||(r[2]=(a,l)=>e(c)(e(o),"address",a))},{default:d(()=>[(p(!0),w(_,null,h(e(o).address,(a,l)=>(p(),b(u,{key:l,modelValue:e(o).address[l],"onUpdate:modelValue":t=>e(o).address[l]=t,actions:{delete:{color:"danger",icon:e(k),key:l}},errors:e(o).errors[`address.${l}`],icon:e(F),autocomplete:"address",name:"address",required:"",onAction:(t,V)=>e(c)(e(o),"address",t,V)},null,8,["modelValue","onUpdate:modelValue","actions","errors","icon","onAction"]))),128))]),_:1},8,["actions","label"]),n(i,{actions:{append:{color:"success",icon:e(C)}},label:s.__("phone"),"class-addon":"space-y-4","has-border":"","label-for":"phone",onAction:r[3]||(r[3]=(a,l)=>e(c)(e(o),"phone",a))},{default:d(()=>[(p(!0),w(_,null,h(e(o).phone,(a,l)=>(p(),b(u,{modelValue:e(o).phone[l],"onUpdate:modelValue":t=>e(o).phone[l]=t,actions:{delete:{color:"danger",icon:e(k),key:l}},errors:e(o).errors[`phone.${l}`],icon:e(T),autocomplete:"phone",name:"phone",required:"",onAction:(t,V)=>e(c)(e(o),"phone",t,V)},null,8,["modelValue","onUpdate:modelValue","actions","errors","icon","onAction"]))),256))]),_:1},8,["actions","label"]),n(i,{errors:e(o).errors.password,label:s.__("password"),"label-for":"password_confirmation"},{default:d(()=>[n(u,{modelValue:e(o).password,"onUpdate:modelValue":r[4]||(r[4]=a=>e(o).password=a),icon:e(M),autocomplete:"password",name:"password",required:"",type:"password"},null,8,["modelValue","icon"])]),_:1},8,["errors","label"]),n(i,{errors:e(o).errors.password_confirmation,label:s.__("password_confirmation"),"label-for":"password_confirmation"},{default:d(()=>[n(u,{modelValue:e(o).password_confirmation,"onUpdate:modelValue":r[5]||(r[5]=a=>e(o).password_confirmation=a),icon:e(M),autocomplete:"password_confirmation",name:"password_confirmation",required:"",type:"password"},null,8,["modelValue","icon"])]),_:1},8,["errors","label"]),n(i,null,{default:d(()=>[n(Q,{label:s.__("role"),"label-for":"role"},{default:d(()=>[(p(!0),w(_,null,h(e(P),(a,l)=>(p(),b(j,{key:l,modelValue:e(o).role,"onUpdate:modelValue":t=>e(o).role=t,checked:a.id===e(o).role,label:a.name,value:a.id,name:"role",type:"radio"},null,8,["modelValue","onUpdate:modelValue","checked","label","value"]))),128))]),_:1},8,["label"])]),_:1})]),_:1},8,["button-label","has-cancel","has-errors","is-modal","title"])):D("",!0)}};export{Be as default};
