import{k as o,m as c,n as i}from"./app-90a7b2da.js";import{o as a,c as r,I as s,b as n,O as m,a as u,P as d,j as p}from"./@vue-588772e2.js";const g={__name:"PillTagPlain",props:{label:{type:String,required:!0},icon:{type:String,default:null},small:Boolean},setup(l){return(e,t)=>(a(),r("div",{class:n(["inline-flex items-center capitalize leading-none",[l.small?"text-xs":"text-sm"]])},[l.icon?(a(),s(o,{key:0,path:l.icon,h:"h-4",w:"w-4",class:n(l.small?"ms-1":"ms-2"),size:l.small?14:null},null,8,["path","class","size"])):m("",!0),u("span",null,d(l.label),1)],2))}},B={__name:"PillTag",props:{label:{type:String,required:!0},color:{type:String,required:!0},icon:{type:String,default:null},small:Boolean,outline:Boolean},setup(l){const e=l,t=p(()=>[e.small?"py-1 px-3":"py-1.5 px-4",e.outline?c[e.color]:i[e.color]]);return(f,x)=>(a(),s(g,{class:n(["border rounded-full",t.value]),icon:l.icon,label:l.label,small:l.small},null,8,["class","icon","label","small"]))}};export{B as _};
