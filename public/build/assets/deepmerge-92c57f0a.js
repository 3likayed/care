import{g as b}from"./call-bind-19fee3be.js";var o=function(r){return s(r)&&!y(r)};function s(e){return!!e&&typeof e=="object"}function y(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||g(e)}var m=typeof Symbol=="function"&&Symbol.for,O=m?Symbol.for("react.element"):60103;function g(e){return e.$$typeof===O}function j(e){return Array.isArray(e)?[]:{}}function u(e,r){return r.clone!==!1&&r.isMergeableObject(e)?a(j(e),e,r):e}function M(e,r,t){return e.concat(r).map(function(c){return u(c,t)})}function A(e,r){if(!r.customMerge)return a;var t=r.customMerge(e);return typeof t=="function"?t:a}function E(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(r){return Object.propertyIsEnumerable.call(e,r)}):[]}function f(e){return Object.keys(e).concat(E(e))}function l(e,r){try{return r in e}catch{return!1}}function p(e,r){return l(e,r)&&!(Object.hasOwnProperty.call(e,r)&&Object.propertyIsEnumerable.call(e,r))}function S(e,r,t){var c={};return t.isMergeableObject(e)&&f(e).forEach(function(n){c[n]=u(e[n],t)}),f(r).forEach(function(n){p(e,n)||(l(e,n)&&t.isMergeableObject(r[n])?c[n]=A(n,t)(e[n],r[n],t):c[n]=u(r[n],t))}),c}function a(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||M,t.isMergeableObject=t.isMergeableObject||o,t.cloneUnlessOtherwiseSpecified=u;var c=Array.isArray(r),n=Array.isArray(e),i=c===n;return i?c?t.arrayMerge(e,r,t):S(e,r,t):u(r,t)}a.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(c,n){return a(c,n,t)},{})};var d=a,h=d;const I=b(h);export{I as t};
