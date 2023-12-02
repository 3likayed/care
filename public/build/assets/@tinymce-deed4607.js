import{w as E,d as L,t as j,r as U,n as p,o as _,e as R,f as x,g as K,h as w}from"./@vue-3d043469.js";var T=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],z=function(n){return T.map(function(t){return t.toLowerCase()}).indexOf(n.toLowerCase())!==-1},F=function(n,t,e){Object.keys(t).filter(z).forEach(function(i){var r=t[i];typeof r=="function"&&(i==="onInit"?r(n,e):e.on(i.substring(2),function(a){return r(a,e)}))})},N=function(n,t,e,i){var r=n.modelEvents?n.modelEvents:null,a=Array.isArray(r)?r.join(" "):r;E(i,function(c,d){e&&typeof c=="string"&&c!==d&&c!==e.getContent({format:n.outputFormat})&&e.setContent(c)}),e.on(a||"change input undo redo",function(){t.emit("update:modelValue",e.getContent({format:n.outputFormat}))})},G=function(n,t,e,i,r,a){i.setContent(a()),e.attrs["onUpdate:modelValue"]&&N(t,e,i,r),F(n,e.attrs,i)},D=0,O=function(n){var t=Date.now(),e=Math.floor(Math.random()*1e9);return D++,n+"_"+e+D+String(t)},H=function(n){return n!==null&&n.tagName.toLowerCase()==="textarea"},A=function(n){return typeof n>"u"||n===""?[]:Array.isArray(n)?n:n.split(" ")},k=function(n,t){return A(n).concat(A(t))},q=function(n){return n==null},M=function(){return{listeners:[],scriptId:O("tiny-script"),scriptLoaded:!1}},W=function(){var n=M(),t=function(r,a,c,d){var o=a.createElement("script");o.referrerPolicy="origin",o.type="application/javascript",o.id=r,o.src=c;var m=function(){o.removeEventListener("load",m),d()};o.addEventListener("load",m),a.head&&a.head.appendChild(o)},e=function(r,a,c){n.scriptLoaded?c():(n.listeners.push(c),r.getElementById(n.scriptId)||t(n.scriptId,r,a,function(){n.listeners.forEach(function(d){return d()}),n.scriptLoaded=!0}))},i=function(){n=M()};return{load:e,reinitialize:i}},J=W(),Q=function(){return typeof window<"u"?window:global},v=function(){var n=Q();return n&&n.tinymce?n.tinymce:null},X={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(n){return n==="html"||n==="text"}}},f=globalThis&&globalThis.__assign||function(){return f=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},f.apply(this,arguments)},Y=function(n,t,e,i){return n(i||"div",{id:t,ref:e})},Z=function(n,t,e){return n("textarea",{id:t,visibility:"hidden",ref:e})},b={selector:void 0,target:void 0},nn=L({props:X,setup:function(n,t){var e=n.init?f(f({},n.init),b):f({},b),i=j(n),r=i.disabled,a=i.modelValue,c=i.tagName,d=U(null),o=null,m=n.id||O("tiny-vue"),C=n.init&&n.init.inline||n.inline,S=!!t.attrs["onUpdate:modelValue"],h=!0,P=n.initialValue?n.initialValue:"",y="",I=function(u){return S?function(){return a!=null&&a.value?a.value:""}:function(){return u?P:y}},g=function(){var u=I(h),l=f(f({},e),{readonly:n.disabled,target:d.value,plugins:k(e.plugins,n.plugins),toolbar:n.toolbar||e.toolbar,inline:C,setup:function(s){o=s,s.on("init",function(B){return G(B,n,t,s,a,u)}),typeof e.setup=="function"&&e.setup(s)}});H(d.value)&&(d.value.style.visibility=""),v().init(l),h=!1};E(r,function(u){var l;o!==null&&(typeof((l=o.mode)===null||l===void 0?void 0:l.set)=="function"?o.mode.set(u?"readonly":"design"):o.setMode(u?"readonly":"design"))}),E(c,function(u){var l;S||(y=o.getContent()),(l=v())===null||l===void 0||l.remove(o),p(function(){return g()})}),_(function(){if(v()!==null)g();else if(d.value&&d.value.ownerDocument){var u=n.cloudChannel?n.cloudChannel:"6",l=n.apiKey?n.apiKey:"no-api-key",s=q(n.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/".concat(l,"/tinymce/").concat(u,"/tinymce.min.js"):n.tinymceScriptSrc;J.load(d.value.ownerDocument,s,g)}}),R(function(){v()!==null&&v().remove(o)}),C||(x(function(){h||g()}),K(function(){var u;S||(y=o.getContent()),(u=v())===null||u===void 0||u.remove(o)}));var V=function(u){var l;y=o.getContent(),(l=v())===null||l===void 0||l.remove(o),e=f(f(f({},e),u),b),p(function(){return g()})};return t.expose({rerender:V,getEditor:function(){return o}}),function(){return C?Y(w,m,d,n.tagName):Z(w,m,d)}}});export{nn as E};
