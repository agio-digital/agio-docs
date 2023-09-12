import{q as e,f as n,s,g as a,c as t,b as o,v as l,x as r,d as i,y as p,z as c,m as u,p as d,a as h,o as y}from"./chunks/framework.c7d5eb2d.js";import{u as f}from"./chunks/useNpmVersion.3e4e03f3.js";function m(e,n){return function(){return e.apply(n,arguments)}}const{toString:E}=Object.prototype,{getPrototypeOf:g}=Object,b=(F=Object.create(null),e=>{const n=E.call(e);return F[n]||(F[n]=n.slice(8,-1).toLowerCase())});var F;const q=e=>(e=e.toLowerCase(),n=>b(n)===e),v=e=>n=>typeof n===e,{isArray:w}=Array,k=v("undefined");const x=q("ArrayBuffer");const T=v("string"),C=v("function"),S=v("number"),A=e=>null!==e&&"object"==typeof e,U=e=>{if("object"!==b(e))return!1;const n=g(e);return!(null!==n&&n!==Object.prototype&&null!==Object.getPrototypeOf(n)||Symbol.toStringTag in e||Symbol.iterator in e)},D=q("Date"),O=q("File"),B=q("Blob"),R=q("FileList"),N=q("URLSearchParams");function _(e,n,{allOwnKeys:s=!1}={}){if(null==e)return;let a,t;if("object"!=typeof e&&(e=[e]),w(e))for(a=0,t=e.length;a<t;a++)n.call(null,e[a],a,e);else{const t=s?Object.getOwnPropertyNames(e):Object.keys(e),o=t.length;let l;for(a=0;a<o;a++)l=t[a],n.call(null,e[l],l,e)}}function P(e,n){n=n.toLowerCase();const s=Object.keys(e);let a,t=s.length;for(;t-- >0;)if(a=s[t],n===a.toLowerCase())return a;return null}const L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,I=e=>!k(e)&&e!==L;const j=(W="undefined"!=typeof Uint8Array&&g(Uint8Array),e=>W&&e instanceof W);var W;const z=q("HTMLFormElement"),K=(({hasOwnProperty:e})=>(n,s)=>e.call(n,s))(Object.prototype),J=q("RegExp"),H=(e,n)=>{const s=Object.getOwnPropertyDescriptors(e),a={};_(s,((s,t)=>{let o;!1!==(o=n(s,t,e))&&(a[t]=o||s)})),Object.defineProperties(e,a)},M="abcdefghijklmnopqrstuvwxyz",V="0123456789",$={DIGIT:V,ALPHA:M,ALPHA_DIGIT:M+M.toUpperCase()+V};const G=q("AsyncFunction"),Y={isArray:w,isArrayBuffer:x,isBuffer:function(e){return null!==e&&!k(e)&&null!==e.constructor&&!k(e.constructor)&&C(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let n;return e&&("function"==typeof FormData&&e instanceof FormData||C(e.append)&&("formdata"===(n=b(e))||"object"===n&&C(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let n;return n="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&x(e.buffer),n},isString:T,isNumber:S,isBoolean:e=>!0===e||!1===e,isObject:A,isPlainObject:U,isUndefined:k,isDate:D,isFile:O,isBlob:B,isRegExp:J,isFunction:C,isStream:e=>A(e)&&C(e.pipe),isURLSearchParams:N,isTypedArray:j,isFileList:R,forEach:_,merge:function e(){const{caseless:n}=I(this)&&this||{},s={},a=(a,t)=>{const o=n&&P(s,t)||t;U(s[o])&&U(a)?s[o]=e(s[o],a):U(a)?s[o]=e({},a):w(a)?s[o]=a.slice():s[o]=a};for(let t=0,o=arguments.length;t<o;t++)arguments[t]&&_(arguments[t],a);return s},extend:(e,n,s,{allOwnKeys:a}={})=>(_(n,((n,a)=>{s&&C(n)?e[a]=m(n,s):e[a]=n}),{allOwnKeys:a}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,n,s,a)=>{e.prototype=Object.create(n.prototype,a),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),s&&Object.assign(e.prototype,s)},toFlatObject:(e,n,s,a)=>{let t,o,l;const r={};if(n=n||{},null==e)return n;do{for(t=Object.getOwnPropertyNames(e),o=t.length;o-- >0;)l=t[o],a&&!a(l,e,n)||r[l]||(n[l]=e[l],r[l]=!0);e=!1!==s&&g(e)}while(e&&(!s||s(e,n))&&e!==Object.prototype);return n},kindOf:b,kindOfTest:q,endsWith:(e,n,s)=>{e=String(e),(void 0===s||s>e.length)&&(s=e.length),s-=n.length;const a=e.indexOf(n,s);return-1!==a&&a===s},toArray:e=>{if(!e)return null;if(w(e))return e;let n=e.length;if(!S(n))return null;const s=new Array(n);for(;n-- >0;)s[n]=e[n];return s},forEachEntry:(e,n)=>{const s=(e&&e[Symbol.iterator]).call(e);let a;for(;(a=s.next())&&!a.done;){const s=a.value;n.call(e,s[0],s[1])}},matchAll:(e,n)=>{let s;const a=[];for(;null!==(s=e.exec(n));)a.push(s);return a},isHTMLForm:z,hasOwnProperty:K,hasOwnProp:K,reduceDescriptors:H,freezeMethods:e=>{H(e,((n,s)=>{if(C(e)&&-1!==["arguments","caller","callee"].indexOf(s))return!1;const a=e[s];C(a)&&(n.enumerable=!1,"writable"in n?n.writable=!1:n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")}))}))},toObjectSet:(e,n)=>{const s={},a=e=>{e.forEach((e=>{s[e]=!0}))};return w(e)?a(e):a(String(e).split(n)),s},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,n,s){return n.toUpperCase()+s})),noop:()=>{},toFiniteNumber:(e,n)=>(e=+e,Number.isFinite(e)?e:n),findKey:P,global:L,isContextDefined:I,ALPHABET:$,generateString:(e=16,n=$.ALPHA_DIGIT)=>{let s="";const{length:a}=n;for(;e--;)s+=n[Math.random()*a|0];return s},isSpecCompliantForm:function(e){return!!(e&&C(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const n=new Array(10),s=(e,a)=>{if(A(e)){if(n.indexOf(e)>=0)return;if(!("toJSON"in e)){n[a]=e;const t=w(e)?[]:{};return _(e,((e,n)=>{const o=s(e,a+1);!k(o)&&(t[n]=o)})),n[a]=void 0,t}}return e};return s(e,0)},isAsyncFn:G,isThenable:e=>e&&(A(e)||C(e))&&C(e.then)&&C(e.catch)};function Q(e,n,s,a,t){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",n&&(this.code=n),s&&(this.config=s),a&&(this.request=a),t&&(this.response=t)}Y.inherits(Q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Y.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const X=Q.prototype,Z={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Z[e]={value:e}})),Object.defineProperties(Q,Z),Object.defineProperty(X,"isAxiosError",{value:!0}),Q.from=(e,n,s,a,t,o)=>{const l=Object.create(X);return Y.toFlatObject(e,l,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Q.call(l,e.message,n,s,a,t),l.cause=e,l.name=e.name,o&&Object.assign(l,o),l};function ee(e){return Y.isPlainObject(e)||Y.isArray(e)}function ne(e){return Y.endsWith(e,"[]")?e.slice(0,-2):e}function se(e,n,s){return e?e.concat(n).map((function(e,n){return e=ne(e),!s&&n?"["+e+"]":e})).join(s?".":""):n}const ae=Y.toFlatObject(Y,{},null,(function(e){return/^is[A-Z]/.test(e)}));function te(e,n,s){if(!Y.isObject(e))throw new TypeError("target must be an object");n=n||new FormData;const a=(s=Y.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,n){return!Y.isUndefined(n[e])}))).metaTokens,t=s.visitor||p,o=s.dots,l=s.indexes,r=(s.Blob||"undefined"!=typeof Blob&&Blob)&&Y.isSpecCompliantForm(n);if(!Y.isFunction(t))throw new TypeError("visitor must be a function");function i(e){if(null===e)return"";if(Y.isDate(e))return e.toISOString();if(!r&&Y.isBlob(e))throw new Q("Blob is not supported. Use a Buffer instead.");return Y.isArrayBuffer(e)||Y.isTypedArray(e)?r&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function p(e,s,t){let r=e;if(e&&!t&&"object"==typeof e)if(Y.endsWith(s,"{}"))s=a?s:s.slice(0,-2),e=JSON.stringify(e);else if(Y.isArray(e)&&function(e){return Y.isArray(e)&&!e.some(ee)}(e)||(Y.isFileList(e)||Y.endsWith(s,"[]"))&&(r=Y.toArray(e)))return s=ne(s),r.forEach((function(e,a){!Y.isUndefined(e)&&null!==e&&n.append(!0===l?se([s],a,o):null===l?s:s+"[]",i(e))})),!1;return!!ee(e)||(n.append(se(t,s,o),i(e)),!1)}const c=[],u=Object.assign(ae,{defaultVisitor:p,convertValue:i,isVisitable:ee});if(!Y.isObject(e))throw new TypeError("data must be an object");return function e(s,a){if(!Y.isUndefined(s)){if(-1!==c.indexOf(s))throw Error("Circular reference detected in "+a.join("."));c.push(s),Y.forEach(s,(function(s,o){!0===(!(Y.isUndefined(s)||null===s)&&t.call(n,s,Y.isString(o)?o.trim():o,a,u))&&e(s,a?a.concat(o):[o])})),c.pop()}}(e),n}function oe(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return n[e]}))}function le(e,n){this._pairs=[],e&&te(e,this,n)}const re=le.prototype;function ie(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function pe(e,n,s){if(!n)return e;const a=s&&s.encode||ie,t=s&&s.serialize;let o;if(o=t?t(n,s):Y.isURLSearchParams(n)?n.toString():new le(n,s).toString(a),o){const n=e.indexOf("#");-1!==n&&(e=e.slice(0,n)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}re.append=function(e,n){this._pairs.push([e,n])},re.toString=function(e){const n=e?function(n){return e.call(this,n,oe)}:oe;return this._pairs.map((function(e){return n(e[0])+"="+n(e[1])}),"").join("&")};const ce=class{constructor(){this.handlers=[]}use(e,n,s){return this.handlers.push({fulfilled:e,rejected:n,synchronous:!!s&&s.synchronous,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Y.forEach(this.handlers,(function(n){null!==n&&e(n)}))}},ue={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},de={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:le,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function he(e){function n(e,s,a,t){let o=e[t++];const l=Number.isFinite(+o),r=t>=e.length;if(o=!o&&Y.isArray(a)?a.length:o,r)return Y.hasOwnProp(a,o)?a[o]=[a[o],s]:a[o]=s,!l;a[o]&&Y.isObject(a[o])||(a[o]=[]);return n(e,s,a[o],t)&&Y.isArray(a[o])&&(a[o]=function(e){const n={},s=Object.keys(e);let a;const t=s.length;let o;for(a=0;a<t;a++)o=s[a],n[o]=e[o];return n}(a[o])),!l}if(Y.isFormData(e)&&Y.isFunction(e.entries)){const s={};return Y.forEachEntry(e,((e,a)=>{n(function(e){return Y.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),a,s,0)})),s}return null}const ye={transitional:ue,adapter:de.isNode?"http":"xhr",transformRequest:[function(e,n){const s=n.getContentType()||"",a=s.indexOf("application/json")>-1,t=Y.isObject(e);t&&Y.isHTMLForm(e)&&(e=new FormData(e));if(Y.isFormData(e))return a&&a?JSON.stringify(he(e)):e;if(Y.isArrayBuffer(e)||Y.isBuffer(e)||Y.isStream(e)||Y.isFile(e)||Y.isBlob(e))return e;if(Y.isArrayBufferView(e))return e.buffer;if(Y.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(t){if(s.indexOf("application/x-www-form-urlencoded")>-1)return function(e,n){return te(e,new de.classes.URLSearchParams,Object.assign({visitor:function(e,n,s,a){return de.isNode&&Y.isBuffer(e)?(this.append(n,e.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},n))}(e,this.formSerializer).toString();if((o=Y.isFileList(e))||s.indexOf("multipart/form-data")>-1){const n=this.env&&this.env.FormData;return te(o?{"files[]":e}:e,n&&new n,this.formSerializer)}}return t||a?(n.setContentType("application/json",!1),function(e,n,s){if(Y.isString(e))try{return(n||JSON.parse)(e),Y.trim(e)}catch(a){if("SyntaxError"!==a.name)throw a}return(s||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const n=this.transitional||ye.transitional,s=n&&n.forcedJSONParsing,a="json"===this.responseType;if(e&&Y.isString(e)&&(s&&!this.responseType||a)){const s=!(n&&n.silentJSONParsing)&&a;try{return JSON.parse(e)}catch(t){if(s){if("SyntaxError"===t.name)throw Q.from(t,Q.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:de.classes.FormData,Blob:de.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Y.forEach(["delete","get","head","post","put","patch"],(e=>{ye.headers[e]={}}));const fe=ye,me=Y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ee=Symbol("internals");function ge(e){return e&&String(e).trim().toLowerCase()}function be(e){return!1===e||null==e?e:Y.isArray(e)?e.map(be):String(e)}function Fe(e,n,s,a,t){return Y.isFunction(a)?a.call(this,n,s):(t&&(n=s),Y.isString(n)?Y.isString(a)?-1!==n.indexOf(a):Y.isRegExp(a)?a.test(n):void 0:void 0)}class qe{constructor(e){e&&this.set(e)}set(e,n,s){const a=this;function t(e,n,s){const t=ge(n);if(!t)throw new Error("header name must be a non-empty string");const o=Y.findKey(a,t);(!o||void 0===a[o]||!0===s||void 0===s&&!1!==a[o])&&(a[o||n]=be(e))}const o=(e,n)=>Y.forEach(e,((e,s)=>t(e,s,n)));return Y.isPlainObject(e)||e instanceof this.constructor?o(e,n):Y.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?o((e=>{const n={};let s,a,t;return e&&e.split("\n").forEach((function(e){t=e.indexOf(":"),s=e.substring(0,t).trim().toLowerCase(),a=e.substring(t+1).trim(),!s||n[s]&&me[s]||("set-cookie"===s?n[s]?n[s].push(a):n[s]=[a]:n[s]=n[s]?n[s]+", "+a:a)})),n})(e),n):null!=e&&t(n,e,s),this}get(e,n){if(e=ge(e)){const s=Y.findKey(this,e);if(s){const e=this[s];if(!n)return e;if(!0===n)return function(e){const n=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=s.exec(e);)n[a[1]]=a[2];return n}(e);if(Y.isFunction(n))return n.call(this,e,s);if(Y.isRegExp(n))return n.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ge(e)){const s=Y.findKey(this,e);return!(!s||void 0===this[s]||n&&!Fe(0,this[s],s,n))}return!1}delete(e,n){const s=this;let a=!1;function t(e){if(e=ge(e)){const t=Y.findKey(s,e);!t||n&&!Fe(0,s[t],t,n)||(delete s[t],a=!0)}}return Y.isArray(e)?e.forEach(t):t(e),a}clear(e){const n=Object.keys(this);let s=n.length,a=!1;for(;s--;){const t=n[s];e&&!Fe(0,this[t],t,e,!0)||(delete this[t],a=!0)}return a}normalize(e){const n=this,s={};return Y.forEach(this,((a,t)=>{const o=Y.findKey(s,t);if(o)return n[o]=be(a),void delete n[t];const l=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,n,s)=>n.toUpperCase()+s))}(t):String(t).trim();l!==t&&delete n[t],n[l]=be(a),s[l]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return Y.forEach(this,((s,a)=>{null!=s&&!1!==s&&(n[a]=e&&Y.isArray(s)?s.join(", "):s)})),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,n])=>e+": "+n)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const s=new this(e);return n.forEach((e=>s.set(e))),s}static accessor(e){const n=(this[Ee]=this[Ee]={accessors:{}}).accessors,s=this.prototype;function a(e){const a=ge(e);n[a]||(!function(e,n){const s=Y.toCamelCase(" "+n);["get","set","has"].forEach((a=>{Object.defineProperty(e,a+s,{value:function(e,s,t){return this[a].call(this,n,e,s,t)},configurable:!0})}))}(s,e),n[a]=!0)}return Y.isArray(e)?e.forEach(a):a(e),this}}qe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Y.reduceDescriptors(qe.prototype,(({value:e},n)=>{let s=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(e){this[s]=e}}})),Y.freezeMethods(qe);const ve=qe;function we(e,n){const s=this||fe,a=n||s,t=ve.from(a.headers);let o=a.data;return Y.forEach(e,(function(e){o=e.call(s,o,t.normalize(),n?n.status:void 0)})),t.normalize(),o}function ke(e){return!(!e||!e.__CANCEL__)}function xe(e,n,s){Q.call(this,null==e?"canceled":e,Q.ERR_CANCELED,n,s),this.name="CanceledError"}Y.inherits(xe,Q,{__CANCEL__:!0});const Te=de.isStandardBrowserEnv?{write:function(e,n,s,a,t,o){const l=[];l.push(e+"="+encodeURIComponent(n)),Y.isNumber(s)&&l.push("expires="+new Date(s).toGMTString()),Y.isString(a)&&l.push("path="+a),Y.isString(t)&&l.push("domain="+t),!0===o&&l.push("secure"),document.cookie=l.join("; ")},read:function(e){const n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Ce(e,n){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)?function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e}(e,n):n}const Se=de.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let s;function a(s){let a=s;return e&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return s=a(window.location.href),function(e){const n=Y.isString(e)?a(e):e;return n.protocol===s.protocol&&n.host===s.host}}():function(){return!0};function Ae(e,n){let s=0;const a=function(e,n){e=e||10;const s=new Array(e),a=new Array(e);let t,o=0,l=0;return n=void 0!==n?n:1e3,function(r){const i=Date.now(),p=a[l];t||(t=i),s[o]=r,a[o]=i;let c=l,u=0;for(;c!==o;)u+=s[c++],c%=e;if(o=(o+1)%e,o===l&&(l=(l+1)%e),i-t<n)return;const d=p&&i-p;return d?Math.round(1e3*u/d):void 0}}(50,250);return t=>{const o=t.loaded,l=t.lengthComputable?t.total:void 0,r=o-s,i=a(r);s=o;const p={loaded:o,total:l,progress:l?o/l:void 0,bytes:r,rate:i||void 0,estimated:i&&l&&o<=l?(l-o)/i:void 0,event:t};p[n?"download":"upload"]=!0,e(p)}}const Ue={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(n,s){let a=e.data;const t=ve.from(e.headers).normalize(),o=e.responseType;let l;function r(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}Y.isFormData(a)&&(de.isStandardBrowserEnv||de.isStandardBrowserWebWorkerEnv?t.setContentType(!1):t.setContentType("multipart/form-data;",!1));let i=new XMLHttpRequest;if(e.auth){const n=e.auth.username||"",s=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";t.set("Authorization","Basic "+btoa(n+":"+s))}const p=Ce(e.baseURL,e.url);function c(){if(!i)return;const a=ve.from("getAllResponseHeaders"in i&&i.getAllResponseHeaders());!function(e,n,s){const a=s.config.validateStatus;s.status&&a&&!a(s.status)?n(new Q("Request failed with status code "+s.status,[Q.ERR_BAD_REQUEST,Q.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s)):e(s)}((function(e){n(e),r()}),(function(e){s(e),r()}),{data:o&&"text"!==o&&"json"!==o?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:a,config:e,request:i}),i=null}if(i.open(e.method.toUpperCase(),pe(p,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,"onloadend"in i?i.onloadend=c:i.onreadystatechange=function(){i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))&&setTimeout(c)},i.onabort=function(){i&&(s(new Q("Request aborted",Q.ECONNABORTED,e,i)),i=null)},i.onerror=function(){s(new Q("Network Error",Q.ERR_NETWORK,e,i)),i=null},i.ontimeout=function(){let n=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const a=e.transitional||ue;e.timeoutErrorMessage&&(n=e.timeoutErrorMessage),s(new Q(n,a.clarifyTimeoutError?Q.ETIMEDOUT:Q.ECONNABORTED,e,i)),i=null},de.isStandardBrowserEnv){const n=(e.withCredentials||Se(p))&&e.xsrfCookieName&&Te.read(e.xsrfCookieName);n&&t.set(e.xsrfHeaderName,n)}void 0===a&&t.setContentType(null),"setRequestHeader"in i&&Y.forEach(t.toJSON(),(function(e,n){i.setRequestHeader(n,e)})),Y.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),o&&"json"!==o&&(i.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&i.addEventListener("progress",Ae(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",Ae(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=n=>{i&&(s(!n||n.type?new xe(null,e,i):n),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const u=function(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}(p);u&&-1===de.protocols.indexOf(u)?s(new Q("Unsupported protocol "+u+":",Q.ERR_BAD_REQUEST,e)):i.send(a||null)}))}};Y.forEach(Ue,((e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch(s){}Object.defineProperty(e,"adapterName",{value:n})}}));const De=e=>{e=Y.isArray(e)?e:[e];const{length:n}=e;let s,a;for(let t=0;t<n&&(s=e[t],!(a=Y.isString(s)?Ue[s.toLowerCase()]:s));t++);if(!a){if(!1===a)throw new Q(`Adapter ${s} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(Y.hasOwnProp(Ue,s)?`Adapter '${s}' is not available in the build`:`Unknown adapter '${s}'`)}if(!Y.isFunction(a))throw new TypeError("adapter is not a function");return a};function Oe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new xe(null,e)}function Be(e){Oe(e),e.headers=ve.from(e.headers),e.data=we.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return De(e.adapter||fe.adapter)(e).then((function(n){return Oe(e),n.data=we.call(e,e.transformResponse,n),n.headers=ve.from(n.headers),n}),(function(n){return ke(n)||(Oe(e),n&&n.response&&(n.response.data=we.call(e,e.transformResponse,n.response),n.response.headers=ve.from(n.response.headers))),Promise.reject(n)}))}const Re=e=>e instanceof ve?e.toJSON():e;function Ne(e,n){n=n||{};const s={};function a(e,n,s){return Y.isPlainObject(e)&&Y.isPlainObject(n)?Y.merge.call({caseless:s},e,n):Y.isPlainObject(n)?Y.merge({},n):Y.isArray(n)?n.slice():n}function t(e,n,s){return Y.isUndefined(n)?Y.isUndefined(e)?void 0:a(void 0,e,s):a(e,n,s)}function o(e,n){if(!Y.isUndefined(n))return a(void 0,n)}function l(e,n){return Y.isUndefined(n)?Y.isUndefined(e)?void 0:a(void 0,e):a(void 0,n)}function r(s,t,o){return o in n?a(s,t):o in e?a(void 0,s):void 0}const i={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:r,headers:(e,n)=>t(Re(e),Re(n),!0)};return Y.forEach(Object.keys(Object.assign({},e,n)),(function(a){const o=i[a]||t,l=o(e[a],n[a],a);Y.isUndefined(l)&&o!==r||(s[a]=l)})),s}const _e="1.5.0",Pe={};["object","boolean","number","function","string","symbol"].forEach(((e,n)=>{Pe[e]=function(s){return typeof s===e||"a"+(n<1?"n ":" ")+e}}));const Le={};Pe.transitional=function(e,n,s){function a(e,n){return"[Axios v1.5.0] Transitional option '"+e+"'"+n+(s?". "+s:"")}return(s,t,o)=>{if(!1===e)throw new Q(a(t," has been removed"+(n?" in "+n:"")),Q.ERR_DEPRECATED);return n&&!Le[t]&&(Le[t]=!0,console.warn(a(t," has been deprecated since v"+n+" and will be removed in the near future"))),!e||e(s,t,o)}};const Ie={assertOptions:function(e,n,s){if("object"!=typeof e)throw new Q("options must be an object",Q.ERR_BAD_OPTION_VALUE);const a=Object.keys(e);let t=a.length;for(;t-- >0;){const o=a[t],l=n[o];if(l){const n=e[o],s=void 0===n||l(n,o,e);if(!0!==s)throw new Q("option "+o+" must be "+s,Q.ERR_BAD_OPTION_VALUE)}else if(!0!==s)throw new Q("Unknown option "+o,Q.ERR_BAD_OPTION)}},validators:Pe},je=Ie.validators;class We{constructor(e){this.defaults=e,this.interceptors={request:new ce,response:new ce}}request(e,n){"string"==typeof e?(n=n||{}).url=e:n=e||{},n=Ne(this.defaults,n);const{transitional:s,paramsSerializer:a,headers:t}=n;void 0!==s&&Ie.assertOptions(s,{silentJSONParsing:je.transitional(je.boolean),forcedJSONParsing:je.transitional(je.boolean),clarifyTimeoutError:je.transitional(je.boolean)},!1),null!=a&&(Y.isFunction(a)?n.paramsSerializer={serialize:a}:Ie.assertOptions(a,{encode:je.function,serialize:je.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=t&&Y.merge(t.common,t[n.method]);t&&Y.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete t[e]})),n.headers=ve.concat(o,t);const l=[];let r=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(n)||(r=r&&e.synchronous,l.unshift(e.fulfilled,e.rejected))}));const i=[];let p;this.interceptors.response.forEach((function(e){i.push(e.fulfilled,e.rejected)}));let c,u=0;if(!r){const e=[Be.bind(this),void 0];for(e.unshift.apply(e,l),e.push.apply(e,i),c=e.length,p=Promise.resolve(n);u<c;)p=p.then(e[u++],e[u++]);return p}c=l.length;let d=n;for(u=0;u<c;){const e=l[u++],n=l[u++];try{d=e(d)}catch(h){n.call(this,h);break}}try{p=Be.call(this,d)}catch(h){return Promise.reject(h)}for(u=0,c=i.length;u<c;)p=p.then(i[u++],i[u++]);return p}getUri(e){return pe(Ce((e=Ne(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}Y.forEach(["delete","get","head","options"],(function(e){We.prototype[e]=function(n,s){return this.request(Ne(s||{},{method:e,url:n,data:(s||{}).data}))}})),Y.forEach(["post","put","patch"],(function(e){function n(n){return function(s,a,t){return this.request(Ne(t||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}We.prototype[e]=n(),We.prototype[e+"Form"]=n(!0)}));const ze=We;class Ke{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let n;this.promise=new Promise((function(e){n=e}));const s=this;this.promise.then((e=>{if(!s._listeners)return;let n=s._listeners.length;for(;n-- >0;)s._listeners[n](e);s._listeners=null})),this.promise.then=e=>{let n;const a=new Promise((e=>{s.subscribe(e),n=e})).then(e);return a.cancel=function(){s.unsubscribe(n)},a},e((function(e,a,t){s.reason||(s.reason=new xe(e,a,t),n(s.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);-1!==n&&this._listeners.splice(n,1)}static source(){let e;return{token:new Ke((function(n){e=n})),cancel:e}}}const Je=Ke;const He={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(He).forEach((([e,n])=>{He[n]=e}));const Me=He;const Ve=function e(n){const s=new ze(n),a=m(ze.prototype.request,s);return Y.extend(a,ze.prototype,s,{allOwnKeys:!0}),Y.extend(a,s,null,{allOwnKeys:!0}),a.create=function(s){return e(Ne(n,s))},a}(fe);Ve.Axios=ze,Ve.CanceledError=xe,Ve.CancelToken=Je,Ve.isCancel=ke,Ve.VERSION=_e,Ve.toFormData=te,Ve.AxiosError=Q,Ve.Cancel=Ve.CanceledError,Ve.all=function(e){return Promise.all(e)},Ve.spread=function(e){return function(n){return e.apply(null,n)}},Ve.isAxiosError=function(e){return Y.isObject(e)&&!0===e.isAxiosError},Ve.mergeConfig=Ne,Ve.AxiosHeaders=ve,Ve.formToJSON=e=>he(Y.isHTMLForm(e)?new FormData(e):e),Ve.getAdapter=De,Ve.HttpStatusCode=Me,Ve.default=Ve;const $e=Ve,Ge=h("",55),Ye=o("label",{for:"initToken"},"Init Token:",-1),Qe=o("label",{for:"externalUserId"},"External User ID:",-1),Xe=o("label",{for:"externalUserFirstName"},"First Name:",-1),Ze=o("label",{for:"externalUserLastName"},"Last Name:",-1),en=o("label",{for:"externalUserEmail"},"Email:",-1),nn=o("label",{for:"amount"},"Amount:",-1),sn={class:"mb-3 flex items-center"},an=o("label",{for:"currency",class:"m-0 mr-3 inline-block"},"Currency:",-1),tn={for:"USD",class:"inline-flex items-center m-0 mr-3 inline-block"},on={for:"BSD",class:"inline-flex items-center m-0 mr-3 inline-block"},ln={for:"debug",class:"flex items-center mt-5"},rn=["src"],pn=["href"],cn={style:{"line-height":"1.1",display:"block","word-break":"break-all"}},un=["href"],dn=o("h3",{id:"query-parameters",tabindex:"-1"},[i("Query Parameters "),o("a",{class:"header-anchor",href:"#query-parameters","aria-label":'Permalink to "Query Parameters"'},"​")],-1),hn={class:"language-json vp-adaptive-theme"},yn=o("button",{title:"Copy Code",class:"copy"},null,-1),fn=o("span",{class:"lang"},"json",-1),mn={class:"shiki github-dark vp-code-dark"},En={class:"line"},gn={style:{color:"#E1E4E8"}},bn={class:"shiki github-light vp-code-light"},Fn={class:"line"},qn={style:{color:"#24292E"}},vn=h("",12),wn=JSON.parse('{"title":"Widget Integration Guide","description":"","frontmatter":{"footer":false},"headers":[],"relativePath":"guide/v2.md","filePath":"guide/v2.md"}'),kn={name:"guide/v2.md"},xn=Object.assign(kn,{setup(h){const{load:m,version:E}=f();e((()=>{m()}));const g={api:"https://dev.hasura.agiodigital.com/v1/graphql",widget:"https://develop.agiodigital.com/#/direct/kyc-iframe"},b=n(""),F=n(null),q=n(null),v=n(!1),w=n(!1),k=n(!0),x=n("YOUR_WALLET_ADDRESS"),T=n(!1),C=n(!1),S=n(!1),A=n(!1),U=n(!1),D=n("USD"),O=n(0),B=s({apiToken:"a66bdfbe-ba27-4741-9365-3ee7b3b5c0e2",externalUserId:"john_doe_01",amount:100,ttl:5400,externalUserFirstName:"John",externalUserLastName:"Doe",externalUserEmail:"example@email.com",currency:"USD"}),R=()=>{console.warn("[getInitToken] 🚨 WARNING 🚨: This mutation should be called from a backend service. This is for demo purposes only."),$e.post(g.api,{query:'\n    mutation {\n      token: generateKycSdkInitToken(input: {\n        apiToken: "a66bdfbe-ba27-4741-9365-3ee7b3b5c0e2",\n        externalUserId: "example_user_01",\n        amount: 100,\n        ttl: 5400,\n        externalUserFirstName: "Christian",\n        externalUserLastName: "Wijnia",\n        externalUserEmail: "chris@agiodigital.com",\n        currency: "USD",\n      })\n    }\n  '}).then((e=>{const n=e.data.data.token;b.value=n})).catch((e=>{console.error("Error:",e)}))};R();const N=a((()=>b.value?`${g.widget}?token=${b.value}&`+(F.value?`lang=${F.value}&`:"")+(q.value?`step=${q.value}&`:"")+`kyb=${v.value}&useAlternativeKycLevel=${w.value}&cleanWallet=${k.value}&walletAddress=${x.value}&walletAddressDisabled=${T.value}&paymentsDisabled=${C.value}&kytDisabled=${S.value}&kycDisabled=${A.value}&debug=${U.value}&currency=${D.value}&amount=${O.value}`:"")),_=a((()=>{var e,n,s;return((null==(s=null==(n=null==(e=N.value)?void 0:e.split("?"))?void 0:n[1])?void 0:s.split("&"))||[]).reduce(((e,n)=>{const[s,a]=n.split("=");return e[s]=a,e}),{})}));return(e,n)=>(y(),t("div",null,[Ge,o("p",null,[Ye,l(o("input",{id:"initToken","onUpdate:modelValue":n[0]||(n[0]=e=>b.value=e),placeholder:"initToken",style:{"margin-bottom":"1rem"},readonly:""},null,512),[[r,b.value]])]),o("p",null,[Qe,l(o("input",{id:"externalUserId","onUpdate:modelValue":n[1]||(n[1]=e=>B.externalUserId=e),placeholder:"externalUserId",style:{"margin-bottom":"1rem"}},null,512),[[r,B.externalUserId]])]),o("p",null,[Xe,l(o("input",{id:"externalUserFirstName","onUpdate:modelValue":n[2]||(n[2]=e=>B.externalUserFirstName=e),placeholder:"externalUserFirstName",style:{"margin-bottom":"1rem"}},null,512),[[r,B.externalUserFirstName]])]),o("p",null,[Ze,l(o("input",{id:"externalUserLastName","onUpdate:modelValue":n[3]||(n[3]=e=>B.externalUserLastName=e),placeholder:"externalUserLastName",style:{"margin-bottom":"1rem"}},null,512),[[r,B.externalUserLastName]])]),o("p",null,[en,l(o("input",{id:"externalUserEmail","onUpdate:modelValue":n[4]||(n[4]=e=>B.externalUserEmail=e),placeholder:"externalUserEmail",style:{"margin-bottom":"1rem"}},null,512),[[r,B.externalUserEmail]])]),o("p",null,[nn,l(o("input",{id:"amount","onUpdate:modelValue":n[5]||(n[5]=e=>B.amount=e),type:"number",min:0,placeholder:"amount",style:{"margin-bottom":"1rem"}},null,512),[[r,B.amount,void 0,{number:!0}]])]),o("div",sn,[an,i(),o("label",tn,[l(o("input",{type:"radio",class:"mr-2",id:"USD",name:"currency",value:"USD","onUpdate:modelValue":n[6]||(n[6]=e=>B.currency=e)},null,512),[[p,B.currency]]),i(" USD")]),i(),o("label",on,[l(o("input",{type:"radio",class:"mr-2",id:"BSD",name:"currency",value:"BSD","onUpdate:modelValue":n[7]||(n[7]=e=>B.currency=e)},null,512),[[p,B.currency]]),i(" BSD")])]),o("label",ln,[l(o("input",{class:"mr-2",id:"debug","onUpdate:modelValue":n[8]||(n[8]=e=>U.value=e),type:"checkbox"},null,512),[[c,U.value]]),o("span",{onClick:n[9]||(n[9]=e=>U.value=!U.value)},"Debug")]),o("p",null,[o("button",{class:"button button-primary w-full mt-3",onClick:R},"🔄 Refresh Init Token")]),N.value?(y(),t("iframe",{key:b.value,src:N.value,height:"600",frameborder:"0",style:{"border-radius":"0.5rem",overflow:"hidden"},class:"mt-8 mb-8 w-full"},null,8,rn)):u("",!0),o("p",null,[o("a",{class:"button",href:N.value,target:"_blank",style:{"margin-bottom":"1rem"}},"🔗 Open in new tab",8,pn),o("small",cn,[o("a",{href:N.value,target:"_blank"},d(N.value),9,un)])]),dn,o("div",hn,[yn,fn,o("pre",mn,[o("code",null,[o("span",En,[o("span",gn,d(_.value),1)])])]),o("pre",bn,[o("code",null,[o("span",Fn,[o("span",qn,d(_.value),1)])])])]),vn]))}});export{wn as __pageData,xn as default};
