import{g as s}from"./get-intrinsic-4a38020a.js";import{f as b}from"./function-bind-61637ca6.js";import{s as h}from"./set-function-length-9c361e89.js";var x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function P(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function _(e){if(e.__esModule)return e;var r=e.default;if(typeof r=="function"){var t=function n(){return this instanceof n?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:function(){return e[n]}})}),t}var d={exports:{}};(function(e){var r=b,t=s,n=h,a=t("%TypeError%"),i=t("%Function.prototype.apply%"),p=t("%Function.prototype.call%"),l=t("%Reflect.apply%",!0)||r.call(p,i),o=t("%Object.defineProperty%",!0),g=t("%Math.max%");if(o)try{o({},"a",{value:1})}catch{o=null}e.exports=function(c){if(typeof c!="function")throw new a("a function is required");var m=l(r,p,arguments);return n(m,1+g(0,c.length-(arguments.length-1)),!0)};var u=function(){return l(r,i,arguments)};o?o(e.exports,"apply",{value:u}):e.exports.apply=u})(d);var O=d.exports,y=s,v=O,B=v(y("String.prototype.indexOf")),E=function(r,t){var n=y(r,!!t);return typeof n=="function"&&B(r,".prototype.")>-1?v(n):n};export{_ as a,E as b,x as c,P as g};