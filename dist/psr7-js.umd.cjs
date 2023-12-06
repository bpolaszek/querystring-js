(function(s,i){typeof exports=="object"&&typeof module<"u"?i(exports):typeof define=="function"&&define.amd?define(["exports"],i):(s=typeof globalThis<"u"?globalThis:s||self,i(s["psr7-js"]={}))})(this,function(s){"use strict";var J=Object.defineProperty;var Q=(s,i,c)=>i in s?J(s,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[i]=c;var p=(s,i,c)=>(Q(s,typeof i!="symbol"?i+"":i,c),c);function i(r){return/boolean|number|string/.test(typeof r)}function c(r){if(r.indexOf("[")===-1)return[r];const t=r.split("[")[0],e=r.match(/\[(.*?)\]/g).map(n=>{const o=n.substring(1).substr(0,n.length-2);return o.length!==0?decodeURIComponent(o):null});return t===""?e:[decodeURIComponent(t),...e]}function b(r,t,e){const n=r.shift(),o=[...r].shift();return o===void 0?e[n]=t:o===null?(e[n]=e[n]??[],e[n].push(t)):(e[n]=e[n]??{},e[n]=b(r,t,e[n])),e}function*d(r,t=[]){for(const e of Object.keys(r)){const n=r[e];i(n)||n===null?yield[[...t,e],n]:yield*d(n,[...t,e])}}function P(r,t="&"){r.indexOf("?")===0&&(r=r.substring(1)),r=decodeURI(r);let e=r.split(t);const n={};for(const o of e){let l=o.indexOf("=");l===-1&&(l=o.length);const m=c(o.substring(0,l));let f=l===o.length?null:o.substring(l+1);typeof f=="string"&&(f=decodeURIComponent(f)),b(m,f,n)}return n}function S(r,t=[]){for(const e of Object.keys(r)){const n=r[e];if(n===null)t.push(`${encodeURIComponent(e)}`);else if(Array.isArray(n))t.push(...n.map(o=>`${encodeURIComponent(e)}%5B%5D=${encodeURIComponent(o)}`));else if(typeof n=="object")for(const[o,l]of d(n)){const m=`${e}${o.map(f=>`[${f}]`).join("")}`;l===null?t.push(encodeURIComponent(m)):t.push(`${encodeURIComponent(m)}=${encodeURIComponent(l)}`)}else t.push(`${encodeURIComponent(e)}=${encodeURIComponent(n)}`)}return t}function j(r,t="&"){return S(r).join(t)}function M(r){throw r}const y="http://localhost";function A(r){return typeof r=="string"||typeof r=="object"&&(r==null?void 0:r.toString())!=="[object Object]"}class u{constructor(t="/"){p(this,"absolute",!1);p(this,"url");A(t)||M(new TypeError("Expected string, got "+typeof t));try{this.url=new URL(t.toString()),this.absolute=!0}catch{this.url=new URL(y+(t.toString().indexOf("/")===0?"":"/")+t),this.absolute=!1}}getScheme(){return this.absolute?this.url.protocol.substring(0,this.url.protocol.indexOf(":")):""}getUserInfo(){if(!this.absolute||this.url.username.length===0&&this.url.password.length===0)return"";let t=this.url.username;return this.url.password.length!==0&&(t=t+":"+this.url.password),t}getHost(){return this.absolute?this.url.hostname:""}getPort(){return this.url.port.length===0?null:parseInt(this.url.port)}getPath(){return this.url.pathname}getQuery(){return this.url.search.substring(1)}getFragment(){return this.url.hash.substring(1)}toString(){const t=this.url.toString();return this.absolute?t:t.substring(y.length)}withScheme(t){let e=new u(this.url.toString());return e.url.protocol=t.toString(),e}withUserInfo(t,e=""){let n=new u(this.url.toString());return n.url.username=(t==null?void 0:t.toString())??"",n.url.password=(e==null?void 0:e.toString())??"",n}withHost(t){let e=new u(this.url.toString());return e.url.hostname=t.toString(),e}withPort(t){let e=new u(this.url.toString());return e.url.port=`${t}`,e}withPath(t){let e=new u(this.url.toString());return e.url.pathname=(t==null?void 0:t.toString())??"/",e.absolute=this.absolute,e}withQuery(t){let e=new u(this.url.toString());return e.url.search=(t==null?void 0:t.toString())??"",e.absolute=this.absolute,e}withFragment(t){let e=new u(this.url.toString());return e.url.hash=(t==null?void 0:t.toString())??"",e.absolute=this.absolute,e}}function I(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var E=function(t){return U(t)&&!C(t)};function U(r){return!!r&&typeof r=="object"}function C(r){var t=Object.prototype.toString.call(r);return t==="[object RegExp]"||t==="[object Date]"||_(r)}var $=typeof Symbol=="function"&&Symbol.for,R=$?Symbol.for("react.element"):60103;function _(r){return r.$$typeof===R}function T(r){return Array.isArray(r)?[]:{}}function h(r,t){return t.clone!==!1&&t.isMergeableObject(r)?a(T(r),r,t):r}function x(r,t,e){return r.concat(t).map(function(n){return h(n,e)})}function F(r,t){if(!t.customMerge)return a;var e=t.customMerge(r);return typeof e=="function"?e:a}function N(r){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(r).filter(function(t){return Object.propertyIsEnumerable.call(r,t)}):[]}function O(r){return Object.keys(r).concat(N(r))}function w(r,t){try{return t in r}catch{return!1}}function v(r,t){return w(r,t)&&!(Object.hasOwnProperty.call(r,t)&&Object.propertyIsEnumerable.call(r,t))}function D(r,t,e){var n={};return e.isMergeableObject(r)&&O(r).forEach(function(o){n[o]=h(r[o],e)}),O(t).forEach(function(o){v(r,o)||(w(r,o)&&e.isMergeableObject(t[o])?n[o]=F(o,e)(r[o],t[o],e):n[o]=h(t[o],e))}),n}function a(r,t,e){e=e||{},e.arrayMerge=e.arrayMerge||x,e.isMergeableObject=e.isMergeableObject||E,e.cloneUnlessOtherwiseSpecified=h;var n=Array.isArray(t),o=Array.isArray(r),l=n===o;return l?n?e.arrayMerge(r,t,e):D(r,t,e):h(t,e)}a.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,o){return a(n,o,e)},{})};var L=a,H=L;const B=I(H);class g{constructor(t={}){const e=typeof t=="string"?P(t):t??{};Object.assign(this,e)}getParams(){return Object.fromEntries(Object.entries(this))}hasParam(t,...e){return this.getParam(t,...e)!==void 0}getParam(t,...e){let n=this.getParams()[t];for(const o of e)n=n==null?void 0:n[o];return n}withParam(t,e,n=!0){const o={};return o[t]=e,this.withParams(o,n)}withParams(t,e=!0){return e?new g(B(this.getParams(),t)):new g({...this.getParams(),...t})}withoutParam(t,...e){const n={...this.getParams()};let o=n;for(e=[t,...e];e.length>1;)o=o==null?void 0:o[t],t=e.pop();return Array.isArray(o)?o.splice(t,1):o==null||delete o[t],new g(n)}toString(){return j(this.getParams())}toJSON(){return this.getParams()}}s.QueryString=g,s.URI=u,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});
