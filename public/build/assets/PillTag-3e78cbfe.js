import{k as o,n as c,o as i}from"./app-edde13b8.js";import{A as a,B as r,E as s,O as n,F as m,C as u,M as d,b as p}from"./@vue-3d043469.js";const g={__name:"PillTagPlain",props:{label:{type:String,required:!0},icon:{type:String,default:null},small:Boolean},setup(l){return(e,t)=>(a(),r("div",{class:n([[l.small?"text-xs":"text-sm"],"inline-flex items-center capitalize leading-none"])},[l.icon?(a(),s(o,{key:0,class:n(l.small?"ms-1":"ms-2"),path:l.icon,size:l.small?14:null,h:"h-4",w:"w-4"},null,8,["class","path","size"])):m("",!0),u("span",null,d(l.label),1)],2))}},b={__name:"PillTag",props:{label:{type:String,required:!0},color:{type:String,required:!0},icon:{type:String,default:null},small:Boolean,outline:Boolean},setup(l){const e=l,t=p(()=>[e.small?"py-1 px-3":"py-1.5 px-4",e.outline?c[e.color]:i[e.color]]);return(f,x)=>(a(),s(g,{class:n([t.value,"border rounded-full"]),icon:l.icon,label:l.label,small:l.small},null,8,["class","icon","label","small"]))}};export{b as _};