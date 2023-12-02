import{i as F,r as V,m as H,j as Y,k as Z,w as G,a as $,l as k,p as q,q as A,u as T,v as tt,n as et,t as st,b as nt}from"./@vue-3d043469.js";var ot=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let B;const E=t=>B=t,D=Symbol();function R(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var C;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(C||(C={}));function ht(){const t=F(!0),o=t.run(()=>V({}));let s=[],e=[];const r=H({install(u){E(r),r._a=u,u.provide(D,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!ot?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return r}const J=()=>{};function O(t,o,s,e=J){t.push(o);const r=()=>{const u=t.indexOf(o);u>-1&&(t.splice(u,1),e())};return!s&&T()&&tt(r),r}function p(t,...o){t.slice().forEach(s=>{s(...o)})}const ct=t=>t();function I(t,o){t instanceof Map&&o instanceof Map&&o.forEach((s,e)=>t.set(e,s)),t instanceof Set&&o instanceof Set&&o.forEach(t.add,t);for(const s in o){if(!o.hasOwnProperty(s))continue;const e=o[s],r=t[s];R(r)&&R(e)&&t.hasOwnProperty(s)&&!k(e)&&!q(e)?t[s]=I(r,e):t[s]=e}return t}const rt=Symbol();function ut(t){return!R(t)||!t.hasOwnProperty(rt)}const{assign:v}=Object;function at(t){return!!(k(t)&&t.effect)}function ft(t,o,s,e){const{state:r,actions:u,getters:f}=o,a=s.state.value[t];let P;function b(){a||(s.state.value[t]=r?r():{});const y=st(s.state.value[t]);return v(y,u,Object.keys(f||{}).reduce((d,m)=>(d[m]=H(nt(()=>{E(s);const _=s._s.get(t);return f[m].call(_,_)})),d),{}))}return P=N(t,b,o,s,e,!0),P}function N(t,o,s={},e,r,u){let f;const a=v({actions:{}},s),P={deep:!0};let b,y,d=[],m=[],_;const j=e.state.value[t];!u&&!j&&(e.state.value[t]={}),V({});let L;function W(c){let n;b=y=!1,typeof c=="function"?(c(e.state.value[t]),n={type:C.patchFunction,storeId:t,events:_}):(I(e.state.value[t],c),n={type:C.patchObject,payload:c,storeId:t,events:_});const h=L=Symbol();et().then(()=>{L===h&&(b=!0)}),y=!0,p(d,n,e.state.value[t])}const z=u?function(){const{state:n}=s,h=n?n():{};this.$patch(S=>{v(S,h)})}:J;function K(){f.stop(),d=[],m=[],e._s.delete(t)}function M(c,n){return function(){E(e);const h=Array.from(arguments),S=[],w=[];function U(i){S.push(i)}function X(i){w.push(i)}p(m,{args:h,name:c,store:l,after:U,onError:X});let x;try{x=n.apply(this&&this.$id===t?this:l,h)}catch(i){throw p(w,i),i}return x instanceof Promise?x.then(i=>(p(S,i),i)).catch(i=>(p(w,i),Promise.reject(i))):(p(S,x),x)}}const Q={_p:e,$id:t,$onAction:O.bind(null,m),$patch:W,$reset:z,$subscribe(c,n={}){const h=O(d,c,n.detached,()=>S()),S=f.run(()=>G(()=>e.state.value[t],w=>{(n.flush==="sync"?y:b)&&c({storeId:t,type:C.direct,events:_},w)},v({},P,n)));return h},$dispose:K},l=$(Q);e._s.set(t,l);const g=(e._a&&e._a.runWithContext||ct)(()=>e._e.run(()=>(f=F()).run(o)));for(const c in g){const n=g[c];if(k(n)&&!at(n)||q(n))u||(j&&ut(n)&&(k(n)?n.value=j[c]:I(n,j[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const h=M(c,n);g[c]=h,a.actions[c]=n}}return v(l,g),v(A(l),g),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{W(n=>{v(n,c)})}}),e._p.forEach(c=>{v(l,f.run(()=>c({store:l,app:e._a,pinia:e,options:a})))}),j&&u&&s.hydrate&&s.hydrate(l.$state,j),b=!0,y=!0,l}function bt(t,o,s){let e,r;const u=typeof o=="function";typeof t=="string"?(e=t,r=u?s:o):(r=t,e=t.id);function f(a,P){const b=Y();return a=a||(b?Z(D,null):null),a&&E(a),a=B,a._s.has(e)||(u?N(e,o,r,a):ft(e,r,a)),a._s.get(e)}return f.$id=e,f}export{ht as c,bt as d};
