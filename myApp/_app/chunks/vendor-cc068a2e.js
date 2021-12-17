function te(){}function tc(e,t){for(const n in t)e[n]=t[n];return e}function $i(e){return e()}function ji(){return Object.create(null)}function ee(e){e.forEach($i)}function ec(e){return typeof e=="function"}function nc(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function sc(e){return Object.keys(e).length===0}function Nd(e,t,n,s){if(e){const i=Bi(e,t,n,s);return e[0](i)}}function Bi(e,t,n,s){return e[1]&&s?tc(n.ctx.slice(),e[1](s(t))):n.ctx}function bd(e,t,n,s){if(e[2]&&s){const i=e[2](s(n));if(t.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(t.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=t.dirty[a]|i[a];return r}return t.dirty|i}return t.dirty}function Cd(e,t,n,s,i,r){if(i){const o=Bi(t,n,s,r);e.p(o,i)}}function Dd(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let s=0;s<n;s++)t[s]=-1;return t}return-1}let qe=!1;function ic(){qe=!0}function rc(){qe=!1}function oc(e,t,n,s){for(;e<t;){const i=e+(t-e>>1);n(i)<=s?e=i+1:t=i}return e}function ac(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const c=[];for(let u=0;u<t.length;u++){const h=t[u];h.claim_order!==void 0&&c.push(h)}t=c}const n=new Int32Array(t.length+1),s=new Int32Array(t.length);n[0]=-1;let i=0;for(let c=0;c<t.length;c++){const u=t[c].claim_order,h=(i>0&&t[n[i]].claim_order<=u?i+1:oc(1,i,d=>t[n[d]].claim_order,u))-1;s[c]=n[h]+1;const l=h+1;n[l]=c,i=Math.max(l,i)}const r=[],o=[];let a=t.length-1;for(let c=n[i]+1;c!=0;c=s[c-1]){for(r.push(t[c-1]);a>=c;a--)o.push(t[a]);a--}for(;a>=0;a--)o.push(t[a]);r.reverse(),o.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<o.length;c++){for(;u<r.length&&o[c].claim_order>=r[u].claim_order;)u++;const h=u<r.length?r[u]:null;e.insertBefore(o[c],h)}}function cc(e,t){if(qe){for(ac(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function Rd(e,t,n){qe&&!n?cc(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function uc(e){e.parentNode.removeChild(e)}function kd(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function hc(e){return document.createElement(e)}function Xn(e){return document.createTextNode(e)}function xd(){return Xn(" ")}function Ld(){return Xn("")}function Od(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function Md(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function lc(e){return Array.from(e.childNodes)}function fc(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function qi(e,t,n,s,i=!1){fc(e);const r=(()=>{for(let o=e.claim_info.last_index;o<e.length;o++){const a=e[o];if(t(a)){const c=n(a);return c===void 0?e.splice(o,1):e[o]=c,i||(e.claim_info.last_index=o),a}}for(let o=e.claim_info.last_index-1;o>=0;o--){const a=e[o];if(t(a)){const c=n(a);return c===void 0?e.splice(o,1):e[o]=c,i?c===void 0&&e.claim_info.last_index--:e.claim_info.last_index=o,a}}return s()})();return r.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,r}function dc(e,t,n,s){return qi(e,i=>i.nodeName===t,i=>{const r=[];for(let o=0;o<i.attributes.length;o++){const a=i.attributes[o];n[a.name]||r.push(a.name)}r.forEach(o=>i.removeAttribute(o))},()=>s(t))}function Vd(e,t,n){return dc(e,t,n,hc)}function gc(e,t){return qi(e,n=>n.nodeType===3,n=>{const s=""+t;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>Xn(t),!0)}function Fd(e){return gc(e," ")}function Pd(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Ud(e,t){e.value=t==null?"":t}let ne;function se(e){ne=e}function Yn(){if(!ne)throw new Error("Function called outside component initialization");return ne}function $d(e){Yn().$$.on_mount.push(e)}function jd(e){Yn().$$.after_update.push(e)}function Bd(e,t){Yn().$$.context.set(e,t)}const ie=[],Hi=[],He=[],zi=[],pc=Promise.resolve();let Jn=!1;function mc(){Jn||(Jn=!0,pc.then(Ki))}function Zn(e){He.push(e)}const ts=new Set;let ze=0;function Ki(){const e=ne;do{for(;ze<ie.length;){const t=ie[ze];ze++,se(t),yc(t.$$)}for(se(null),ie.length=0,ze=0;Hi.length;)Hi.pop()();for(let t=0;t<He.length;t+=1){const n=He[t];ts.has(n)||(ts.add(n),n())}He.length=0}while(ie.length);for(;zi.length;)zi.pop()();Jn=!1,ts.clear(),se(e)}function yc(e){if(e.fragment!==null){e.update(),ee(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Zn)}}const Ke=new Set;let yt;function qd(){yt={r:0,c:[],p:yt}}function Hd(){yt.r||ee(yt.c),yt=yt.p}function vc(e,t){e&&e.i&&(Ke.delete(e),e.i(t))}function zd(e,t,n,s){if(e&&e.o){if(Ke.has(e))return;Ke.add(e),yt.c.push(()=>{Ke.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}function Kd(e,t){const n={},s={},i={$$scope:1};let r=e.length;for(;r--;){const o=e[r],a=t[r];if(a){for(const c in o)c in a||(s[c]=1);for(const c in a)i[c]||(n[c]=a[c],i[c]=1);e[r]=a}else for(const c in o)i[c]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Gd(e){return typeof e=="object"&&e!==null?e:{}}function Wd(e){e&&e.c()}function Qd(e,t){e&&e.l(t)}function wc(e,t,n,s){const{fragment:i,on_mount:r,on_destroy:o,after_update:a}=e.$$;i&&i.m(t,n),s||Zn(()=>{const c=r.map($i).filter(ec);o?o.push(...c):ee(c),e.$$.on_mount=[]}),a.forEach(Zn)}function Ec(e,t){const n=e.$$;n.fragment!==null&&(ee(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Tc(e,t){e.$$.dirty[0]===-1&&(ie.push(e),mc(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Xd(e,t,n,s,i,r,o,a=[-1]){const c=ne;se(e);const u=e.$$={fragment:null,ctx:null,props:r,update:te,not_equal:i,bound:ji(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:ji(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(u.root);let h=!1;if(u.ctx=n?n(e,t.props||{},(l,d,...m)=>{const S=m.length?m[0]:d;return u.ctx&&i(u.ctx[l],u.ctx[l]=S)&&(!u.skip_bound&&u.bound[l]&&u.bound[l](S),h&&Tc(e,l)),d}):[],u.update(),h=!0,ee(u.before_update),u.fragment=s?s(u.ctx):!1,t.target){if(t.hydrate){ic();const l=lc(t.target);u.fragment&&u.fragment.l(l),l.forEach(uc)}else u.fragment&&u.fragment.c();t.intro&&vc(e.$$.fragment),wc(e,t.target,t.anchor,t.customElement),rc(),Ki()}se(c)}class Yd{$destroy(){Ec(this,1),this.$destroy=te}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(t){this.$$set&&!sc(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const kt=[];function Jd(e,t=te){let n;const s=new Set;function i(a){if(nc(e,a)&&(e=a,n)){const c=!kt.length;for(const u of s)u[1](),kt.push(u,e);if(c){for(let u=0;u<kt.length;u+=2)kt[u][0](kt[u+1]);kt.length=0}}}function r(a){i(a(e))}function o(a,c=te){const u=[a,c];return s.add(u),s.size===1&&(n=t(i)||te),a(e),()=>{s.delete(u),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function Ac(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function _c(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nc(){return Ge().indexOf("Electron/")>=0}function bc(){const e=Ge();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Cc(){return Ge().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="FirebaseError";class es extends Error{constructor(t,n,s){super(n);this.code=t,this.customData=s,this.name=Dc,Object.setPrototypeOf(this,es.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gi.prototype.create)}}class Gi{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Rc(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new es(i,a,s)}}function Rc(e,t){return e.replace(kc,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const kc=/\{\$([^}]+)}/g;function ns(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(Wi(r)&&Wi(o)){if(!ns(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Wi(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){return e&&e._delegate?e._delegate:e}class We{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Ic;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Oc(t))try{this.getOrInitializeService({instanceIdentifier:vt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=vt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=vt){return this.instances.has(t)}getOptions(t=vt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Lc(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=vt){return this.component?this.component.multipleInstances?t:vt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lc(e){return e===vt?void 0:e}function Oc(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new xc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(_||(_={}));const Vc={debug:_.DEBUG,verbose:_.VERBOSE,info:_.INFO,warn:_.WARN,error:_.ERROR,silent:_.SILENT},Fc=_.INFO,Pc={[_.DEBUG]:"log",[_.VERBOSE]:"log",[_.INFO]:"info",[_.WARN]:"warn",[_.ERROR]:"error"},Uc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=Pc[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Qi{constructor(t){this.name=t,this._logLevel=Fc,this._logHandler=Uc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in _))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Vc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,_.DEBUG,...t),this._logHandler(this,_.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,_.VERBOSE,...t),this._logHandler(this,_.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,_.INFO,...t),this._logHandler(this,_.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,_.WARN,...t),this._logHandler(this,_.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,_.ERROR,...t),this._logHandler(this,_.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jc(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function jc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ss="@firebase/app",Xi="0.7.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new Qi("@firebase/app"),Bc="@firebase/app-compat",qc="@firebase/analytics-compat",Hc="@firebase/analytics",zc="@firebase/app-check-compat",Kc="@firebase/app-check",Gc="@firebase/auth",Wc="@firebase/auth-compat",Qc="@firebase/database",Xc="@firebase/database-compat",Yc="@firebase/functions",Jc="@firebase/functions-compat",Zc="@firebase/installations",tu="@firebase/installations-compat",eu="@firebase/messaging",nu="@firebase/messaging-compat",su="@firebase/performance",iu="@firebase/performance-compat",ru="@firebase/remote-config",ou="@firebase/remote-config-compat",au="@firebase/storage",cu="@firebase/storage-compat",uu="@firebase/firestore",hu="@firebase/firestore-compat",lu="firebase",fu="9.4.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="[DEFAULT]",du={[ss]:"fire-core",[Bc]:"fire-core-compat",[Hc]:"fire-analytics",[qc]:"fire-analytics-compat",[Kc]:"fire-app-check",[zc]:"fire-app-check-compat",[Gc]:"fire-auth",[Wc]:"fire-auth-compat",[Qc]:"fire-rtdb",[Xc]:"fire-rtdb-compat",[Yc]:"fire-fn",[Jc]:"fire-fn-compat",[Zc]:"fire-iid",[tu]:"fire-iid-compat",[eu]:"fire-fcm",[nu]:"fire-fcm-compat",[su]:"fire-perf",[iu]:"fire-perf-compat",[ru]:"fire-rc",[ou]:"fire-rc-compat",[au]:"fire-gcs",[cu]:"fire-gcs-compat",[uu]:"fire-fst",[hu]:"fire-fst-compat","fire-js":"fire-js",[lu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=new Map,rs=new Map;function gu(e,t){try{e.container.addComponent(t)}catch(n){is.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function os(e){const t=e.name;if(rs.has(t))return is.debug(`There were multiple attempts to register component ${t}.`),!1;rs.set(t,e);for(const n of oe.values())gu(n,e);return!0}function pu(e,t){return e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Qe=new Gi("app","Firebase",mu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new We("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=fu;function Zd(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Yi,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Qe.create("bad-app-name",{appName:String(s)});const i=oe.get(s);if(i){if(ns(e,i.options)&&ns(n,i.config))return i;throw Qe.create("duplicate-app",{appName:s})}const r=new Mc(s);for(const a of rs.values())r.addComponent(a);const o=new yu(e,n,r);return oe.set(s,o),o}function wu(e=Yi){const t=oe.get(e);if(!t)throw Qe.create("no-app",{appName:e});return t}function tg(){return Array.from(oe.values())}function xt(e,t,n){var s;let i=(s=du[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),is.warn(a.join(" "));return}os(new We(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(e){os(new We("platform-logger",t=>new $c(t),"PRIVATE")),xt(ss,Xi,e),xt(ss,Xi,"esm2017"),xt("fire-js","")}Eu("");var Tu="firebase",Iu="9.4.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(Tu,Iu,"app");var Su=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},p,as=as||{},w=Su||self;function Xe(){}function cs(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ae(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Au(e){return Object.prototype.hasOwnProperty.call(e,us)&&e[us]||(e[us]=++_u)}var us="closure_uid_"+(1e9*Math.random()>>>0),_u=0;function Nu(e,t,n){return e.call.apply(e.bind,arguments)}function bu(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function U(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?U=Nu:U=bu,U.apply(null,arguments)}function Ye(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function $(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function lt(){this.s=this.s,this.o=this.o}var Cu=0,Du={};lt.prototype.s=!1;lt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Cu!=0)){var e=Au(this);delete Du[e]}};lt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ji=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Zi=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function Ru(e){t:{var t=Th;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function tr(e){return Array.prototype.concat.apply([],arguments)}function hs(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Je(e){return/^[\s\xa0]*$/.test(e)}var er=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Q(e,t){return e.indexOf(t)!=-1}function ls(e,t){return e<t?-1:e>t?1:0}var X;t:{var nr=w.navigator;if(nr){var sr=nr.userAgent;if(sr){X=sr;break t}}X=""}function fs(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function ir(e){const t={};for(const n in e)t[n]=e[n];return t}var rr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function or(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<rr.length;r++)n=rr[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function ds(e){return ds[" "](e),e}ds[" "]=Xe;function ku(e){var t=Ou;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var xu=Q(X,"Opera"),Lt=Q(X,"Trident")||Q(X,"MSIE"),ar=Q(X,"Edge"),gs=ar||Lt,cr=Q(X,"Gecko")&&!(Q(X.toLowerCase(),"webkit")&&!Q(X,"Edge"))&&!(Q(X,"Trident")||Q(X,"MSIE"))&&!Q(X,"Edge"),Lu=Q(X.toLowerCase(),"webkit")&&!Q(X,"Edge");function ur(){var e=w.document;return e?e.documentMode:void 0}var Ze;t:{var ps="",ms=function(){var e=X;if(cr)return/rv:([^\);]+)(\)|;)/.exec(e);if(ar)return/Edge\/([\d\.]+)/.exec(e);if(Lt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Lu)return/WebKit\/(\S+)/.exec(e);if(xu)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ms&&(ps=ms?ms[1]:""),Lt){var ys=ur();if(ys!=null&&ys>parseFloat(ps)){Ze=String(ys);break t}}Ze=ps}var Ou={};function Mu(){return ku(function(){let e=0;const t=er(String(Ze)).split("."),n=er("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=ls(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||ls(i[2].length==0,r[2].length==0)||ls(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var vs;if(w.document&&Lt){var hr=ur();vs=hr||parseInt(Ze,10)||void 0}else vs=void 0;var Vu=vs,Fu=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{w.addEventListener("test",Xe,t),w.removeEventListener("test",Xe,t)}catch{}return e}();function z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}z.prototype.h=function(){this.defaultPrevented=!0};function ce(e,t){if(z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(cr){t:{try{ds(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Pu[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ce.Z.h.call(this)}}$(ce,z);var Pu={2:"touch",3:"pen",4:"mouse"};ce.prototype.h=function(){ce.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ue="closure_listenable_"+(1e6*Math.random()|0),Uu=0;function $u(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++Uu,this.ca=this.fa=!1}function tn(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function en(e){this.src=e,this.g={},this.h=0}en.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Es(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new $u(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function ws(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Ji(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(tn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Es(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var Ts="closure_lm_"+(1e6*Math.random()|0),Is={};function lr(e,t,n,s,i){if(s&&s.once)return dr(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)lr(e,t[r],n,s,i);return null}return n=Ns(n),e&&e[ue]?e.N(t,n,ae(s)?!!s.capture:!!s,i):fr(e,t,n,!1,s,i)}function fr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=ae(i)?!!i.capture:!!i,a=As(e);if(a||(e[Ts]=a=new en(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=ju(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Fu||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(pr(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ju(){function e(n){return t.call(e.src,e.listener,n)}var t=Bu;return e}function dr(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)dr(e,t[r],n,s,i);return null}return n=Ns(n),e&&e[ue]?e.O(t,n,ae(s)?!!s.capture:!!s,i):fr(e,t,n,!0,s,i)}function gr(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)gr(e,t[r],n,s,i);else s=ae(s)?!!s.capture:!!s,n=Ns(n),e&&e[ue]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Es(r,n,s,i),-1<n&&(tn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=As(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Es(t,n,s,i)),(n=-1<e?t[e]:null)&&Ss(n))}function Ss(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[ue])ws(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(pr(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=As(t))?(ws(n,e),n.h==0&&(n.src=null,t[Ts]=null)):tn(e)}}}function pr(e){return e in Is?Is[e]:Is[e]="on"+e}function Bu(e,t){if(e.ca)e=!0;else{t=new ce(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&Ss(e),e=n.call(s,t)}return e}function As(e){return e=e[Ts],e instanceof en?e:null}var _s="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ns(e){return typeof e=="function"?e:(e[_s]||(e[_s]=function(t){return e.handleEvent(t)}),e[_s])}function V(){lt.call(this),this.i=new en(this),this.P=this,this.I=null}$(V,lt);V.prototype[ue]=!0;V.prototype.removeEventListener=function(e,t,n,s){gr(this,e,t,n,s)};function j(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new z(t,e);else if(t instanceof z)t.target=t.target||e;else{var i=t;t=new z(s,e),or(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=nn(o,s,!0,t)&&i}if(o=t.g=e,i=nn(o,s,!0,t)&&i,i=nn(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=nn(o,s,!1,t)&&i}V.prototype.M=function(){if(V.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)tn(n[s]);delete e.g[t],e.h--}}this.I=null};V.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};V.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function nn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ws(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var bs=w.JSON.stringify;function qu(){var e=yr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Hu{constructor(){this.h=this.g=null}add(t,n){const s=mr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var mr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new zu,e=>e.reset());class zu{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ku(e){w.setTimeout(()=>{throw e},0)}function Cs(e,t){Ds||Gu(),Rs||(Ds(),Rs=!0),yr.add(e,t)}var Ds;function Gu(){var e=w.Promise.resolve(void 0);Ds=function(){e.then(Wu)}}var Rs=!1,yr=new Hu;function Wu(){for(var e;e=qu();){try{e.h.call(e.g)}catch(n){Ku(n)}var t=mr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Rs=!1}function sn(e,t){V.call(this),this.h=e||1,this.g=t||w,this.j=U(this.kb,this),this.l=Date.now()}$(sn,V);p=sn.prototype;p.da=!1;p.S=null;p.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),j(this,"tick"),this.da&&(ks(this),this.start()))}};p.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ks(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}p.M=function(){sn.Z.M.call(this),ks(this),delete this.g};function xs(e,t,n){if(typeof e=="function")n&&(e=U(e,n));else if(e&&typeof e.handleEvent=="function")e=U(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:w.setTimeout(e,t||0)}function vr(e){e.g=xs(()=>{e.g=null,e.i&&(e.i=!1,vr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Qu extends lt{constructor(t,n){super();this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:vr(this)}M(){super.M(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function he(e){lt.call(this),this.h=e,this.g={}}$(he,lt);var wr=[];function Er(e,t,n,s){Array.isArray(n)||(n&&(wr[0]=n.toString()),n=wr);for(var i=0;i<n.length;i++){var r=lr(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Tr(e){fs(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ss(t)},e),e.g={}}he.prototype.M=function(){he.Z.M.call(this),Tr(this)};he.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function rn(){this.g=!0}rn.prototype.Aa=function(){this.g=!1};function Xu(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Yu(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Ot(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Zu(e,n)+(s?" "+s:"")})}function Ju(e,t){e.info(function(){return"TIMEOUT: "+t})}rn.prototype.info=function(){};function Zu(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return bs(n)}catch{return t}}var wt={},Ir=null;function on(){return Ir=Ir||new V}wt.Ma="serverreachability";function Sr(e){z.call(this,wt.Ma,e)}$(Sr,z);function le(e){const t=on();j(t,new Sr(t,e))}wt.STAT_EVENT="statevent";function Ar(e,t){z.call(this,wt.STAT_EVENT,e),this.stat=t}$(Ar,z);function Y(e){const t=on();j(t,new Ar(t,e))}wt.Na="timingevent";function _r(e,t){z.call(this,wt.Na,e),this.size=t}$(_r,z);function fe(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){e()},t)}var an={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Nr={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ls(){}Ls.prototype.h=null;function br(e){return e.h||(e.h=e.i())}function Cr(){}var de={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Os(){z.call(this,"d")}$(Os,z);function Ms(){z.call(this,"c")}$(Ms,z);var Vs;function cn(){}$(cn,Ls);cn.prototype.g=function(){return new XMLHttpRequest};cn.prototype.i=function(){return{}};Vs=new cn;function ge(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new he(this),this.P=th,e=gs?125:void 0,this.W=new sn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Dr}function Dr(){this.i=null,this.g="",this.h=!1}var th=45e3,Fs={},un={};p=ge.prototype;p.setTimeout=function(e){this.P=e};function Ps(e,t,n){e.K=1,e.v=gn(at(t)),e.s=n,e.U=!0,Rr(e,null)}function Rr(e,t){e.F=Date.now(),pe(e),e.A=at(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),Ur(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Dr,e.g=co(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Qu(U(e.Ia,e,e.g),e.O)),Er(e.V,e.g,"readystatechange",e.gb),t=e.H?ir(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),le(1),Xu(e.j,e.u,e.A,e.m,e.X,e.s)}p.gb=function(e){e=e.target;const t=this.L;t&&ct(e)==3?t.l():this.Ia(e)};p.Ia=function(e){try{if(e==this.g)t:{const h=ct(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>h)&&(h!=3||gs||this.g&&(this.h.h||this.g.ga()||Yr(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?le(3):le(2)),hn(this);var n=this.g.ba();this.N=n;e:if(kr(this)){var s=Yr(this.g);e="";var i=s.length,r=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Et(this),me(this);var o="";break e}this.h.i=new w.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Yu(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Je(a)){var u=a;break e}}u=null}if(n=u)Ot(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Us(this,n);else{this.i=!1,this.o=3,Y(12),Et(this),me(this);break t}}this.U?(xr(this,h,o),gs&&this.i&&h==3&&(Er(this.V,this.W,"tick",this.fb),this.W.start())):(Ot(this.j,this.m,o,null),Us(this,o)),h==4&&Et(this),this.i&&!this.I&&(h==4?io(this.l,this):(this.i=!1,pe(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Y(12)):(this.o=0,Y(13)),Et(this),me(this)}}}catch{}finally{}};function kr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function xr(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=eh(e,n),i==un){t==4&&(e.o=4,Y(14),s=!1),Ot(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Fs){e.o=4,Y(15),Ot(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Ot(e.j,e.m,i,null),Us(e,i);kr(e)&&i!=un&&i!=Fs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Y(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xs(t),t.L=!0,Y(11))):(Ot(e.j,e.m,n,"[Invalid Chunked Response]"),Et(e),me(e))}p.fb=function(){if(this.g){var e=ct(this.g),t=this.g.ga();this.C<t.length&&(hn(this),xr(this,e,t),this.i&&e!=4&&pe(this))}};function eh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?un:(n=Number(t.substring(n,s)),isNaN(n)?Fs:(s+=1,s+n>t.length?un:(t=t.substr(s,n),e.C=s+n,t)))}p.cancel=function(){this.I=!0,Et(this)};function pe(e){e.Y=Date.now()+e.P,Lr(e,e.P)}function Lr(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=fe(U(e.eb,e),t)}function hn(e){e.B&&(w.clearTimeout(e.B),e.B=null)}p.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Ju(this.j,this.A),this.K!=2&&(le(3),Y(17)),Et(this),this.o=2,me(this)):Lr(this,this.Y-e)};function me(e){e.l.G==0||e.I||io(e.l,e)}function Et(e){hn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,ks(e.W),Tr(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Us(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Bs(n.i,e))){if(n.I=e.N,!e.J&&Bs(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0)t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)En(n),vn(n);else break t;Qs(n),Y(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=fe(U(n.ab,n),6e3));if(1>=Br(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else St(n,11)}else if((e.J||n.g==e)&&En(n),!Je(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const h=u[3];h!=null&&(n.ma=h,n.h.info("VER="+n.ma));const l=u[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const S=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(S){var r=s.i;!r.g&&(Q(S,"spdy")||Q(S,"quic")||Q(S,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(qs(r,r.h),r.h=null))}if(s.D){const D=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(s.sa=D,k(s.F,s.D,D))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=ao(s,s.H?s.la:null,s.W),o.J){qr(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(hn(a),pe(a)),s.g=o}else no(s);0<n.l.length&&wn(n)}else u[0]!="stop"&&u[0]!="close"||St(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?St(n,7):Gs(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}le(4)}catch{}}function nh(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(cs(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function $s(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(cs(e)||typeof e=="string")Zi(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(cs(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=nh(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function Mt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof Mt)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}p=Mt.prototype;p.R=function(){js(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};p.T=function(){return js(this),this.g.concat()};function js(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Tt(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],Tt(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}p.get=function(e,t){return Tt(this.h,e)?this.h[e]:t};p.set=function(e,t){Tt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};p.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function Tt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Or=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function sh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function It(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof It){this.g=t!==void 0?t:e.g,ln(this,e.j),this.s=e.s,fn(this,e.i),dn(this,e.m),this.l=e.l,t=e.h;var n=new we;n.i=t.i,t.g&&(n.g=new Mt(t.g),n.h=t.h),Mr(this,n),this.o=e.o}else e&&(n=String(e).match(Or))?(this.g=!!t,ln(this,n[1]||"",!0),this.s=ye(n[2]||""),fn(this,n[3]||"",!0),dn(this,n[4]),this.l=ye(n[5]||"",!0),Mr(this,n[6]||"",!0),this.o=ye(n[7]||"")):(this.g=!!t,this.h=new we(null,this.g))}It.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ve(t,Vr,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ve(t,Vr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(ve(n,n.charAt(0)=="/"?ch:ah,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ve(n,hh)),e.join("")};function at(e){return new It(e)}function ln(e,t,n){e.j=n?ye(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function fn(e,t,n){e.i=n?ye(t,!0):t}function dn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Mr(e,t,n){t instanceof we?(e.h=t,lh(e.h,e.g)):(n||(t=ve(t,uh)),e.h=new we(t,e.g))}function k(e,t,n){e.h.set(t,n)}function gn(e){return k(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ih(e){return e instanceof It?at(e):new It(e,void 0)}function rh(e,t,n,s){var i=new It(null,void 0);return e&&ln(i,e),t&&fn(i,t),n&&dn(i,n),s&&(i.l=s),i}function ye(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ve(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,oh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function oh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Vr=/[#\/\?@]/g,ah=/[#\?:]/g,ch=/[#\?]/g,uh=/[#\?@]/g,hh=/#/g;function we(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ft(e){e.g||(e.g=new Mt,e.h=0,e.i&&sh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}p=we.prototype;p.add=function(e,t){ft(this),this.i=null,e=Vt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Fr(e,t){ft(e),t=Vt(e,t),Tt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Tt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&js(e)))}function Pr(e,t){return ft(e),t=Vt(e,t),Tt(e.g.h,t)}p.forEach=function(e,t){ft(this),this.g.forEach(function(n,s){Zi(n,function(i){e.call(t,i,s,this)},this)},this)};p.T=function(){ft(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};p.R=function(e){ft(this);var t=[];if(typeof e=="string")Pr(this,e)&&(t=tr(t,this.g.get(Vt(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=tr(t,e[n])}return t};p.set=function(e,t){return ft(this),this.i=null,e=Vt(this,e),Pr(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};p.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Ur(e,t,n){Fr(e,t),0<n.length&&(e.i=null,e.g.set(Vt(e,t),hs(n)),e.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function Vt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function lh(e,t){t&&!e.j&&(ft(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Fr(this,s),Ur(this,i,n))},e)),e.j=t}var fh=class{constructor(e,t){this.h=e,this.g=t}};function $r(e){this.l=e||dh,w.PerformanceNavigationTiming?(e=w.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(w.g&&w.g.Ea&&w.g.Ea()&&w.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dh=10;function jr(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Br(e){return e.h?1:e.g?e.g.size:0}function Bs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function qs(e,t){e.g?e.g.add(t):e.h=t}function qr(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}$r.prototype.cancel=function(){if(this.i=Hr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Hr(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return hs(e.i)}function Hs(){}Hs.prototype.stringify=function(e){return w.JSON.stringify(e,void 0)};Hs.prototype.parse=function(e){return w.JSON.parse(e,void 0)};function gh(){this.g=new Hs}function ph(e,t,n){const s=n||"";try{$s(e,function(i,r){let o=i;ae(i)&&(o=bs(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function mh(e,t){const n=new rn;if(w.Image){const s=new Image;s.onload=Ye(pn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Ye(pn,n,s,"TestLoadImage: error",!1,t),s.onabort=Ye(pn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Ye(pn,n,s,"TestLoadImage: timeout",!1,t),w.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function pn(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Ee(e){this.l=e.$b||null,this.j=e.ib||!1}$(Ee,Ls);Ee.prototype.g=function(){return new mn(this.l,this.j)};Ee.prototype.i=function(e){return function(){return e}}({});function mn(e,t){V.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=zs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$(mn,V);var zs=0;p=mn.prototype;p.open=function(e,t){if(this.readyState!=zs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ie(this)};p.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||w).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Te(this)),this.readyState=zs};p.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ie(this)),this.g&&(this.readyState=3,Ie(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof w.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zr(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function zr(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}p.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Te(this):Ie(this),this.readyState==3&&zr(this)}};p.Ua=function(e){this.g&&(this.response=this.responseText=e,Te(this))};p.Ta=function(e){this.g&&(this.response=e,Te(this))};p.ha=function(){this.g&&Te(this)};function Te(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ie(e)}p.setRequestHeader=function(e,t){this.v.append(e,t)};p.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ie(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(mn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var yh=w.JSON.parse;function L(e){V.call(this),this.headers=new Mt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Kr,this.K=this.L=!1}$(L,V);var Kr="",vh=/^https?$/i,wh=["POST","PUT"];p=L.prototype;p.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Vs.g(),this.C=this.u?br(this.u):br(Vs),this.g.onreadystatechange=U(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Gr(this,r);return}e=n||"";const i=new Mt(this.headers);s&&$s(s,function(r,o){i.set(o,r)}),s=Ru(i.T()),n=w.FormData&&e instanceof w.FormData,!(0<=Ji(wh,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xr(this),0<this.B&&((this.K=Eh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=U(this.pa,this)):this.A=xs(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Gr(this,r)}};function Eh(e){return Lt&&Mu()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function Th(e){return e.toLowerCase()=="content-type"}p.pa=function(){typeof as!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,j(this,"timeout"),this.abort(8))};function Gr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Wr(e),yn(e)}function Wr(e){e.D||(e.D=!0,j(e,"complete"),j(e,"error"))}p.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,j(this,"complete"),j(this,"abort"),yn(this))};p.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yn(this,!0)),L.Z.M.call(this)};p.Fa=function(){this.s||(this.F||this.v||this.l?Qr(this):this.cb())};p.cb=function(){Qr(this)};function Qr(e){if(e.h&&typeof as!="undefined"&&(!e.C[1]||ct(e)!=4||e.ba()!=2)){if(e.v&&ct(e)==4)xs(e.Fa,0,e);else if(j(e,"readystatechange"),ct(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Or)[1]||null;if(!i&&w.self&&w.self.location){var r=w.self.location.protocol;i=r.substr(0,r.length-1)}s=!vh.test(i?i.toLowerCase():"")}n=s}if(n)j(e,"complete"),j(e,"success");else{e.m=6;try{var o=2<ct(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Wr(e)}}finally{yn(e)}}}}function yn(e,t){if(e.g){Xr(e);const n=e.g,s=e.C[0]?Xe:null;e.g=null,e.C=null,t||j(e,"ready");try{n.onreadystatechange=s}catch{}}}function Xr(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(w.clearTimeout(e.A),e.A=null)}function ct(e){return e.g?e.g.readyState:0}p.ba=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}};p.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),yh(t)}};function Yr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Kr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}p.Da=function(){return this.m};p.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ih(e){let t="";return fs(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Ks(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Ih(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):k(e,t,n))}function Se(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Jr(e){this.za=0,this.l=[],this.h=new rn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Se("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Se("baseRetryDelayMs",5e3,e),this.$a=Se("retryDelaySeedMs",1e4,e),this.Ya=Se("forwardChannelMaxRetries",2,e),this.ra=Se("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new $r(e&&e.concurrentRequestLimit),this.Ca=new gh,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}p=Jr.prototype;p.ma=8;p.G=1;function Gs(e){if(Zr(e),e.G==3){var t=e.V++,n=at(e.F);k(n,"SID",e.J),k(n,"RID",t),k(n,"TYPE","terminate"),Ae(e,n),t=new ge(e,e.h,t,void 0),t.K=2,t.v=gn(at(n)),n=!1,w.navigator&&w.navigator.sendBeacon&&(n=w.navigator.sendBeacon(t.v.toString(),"")),!n&&w.Image&&(new Image().src=t.v,n=!0),n||(t.g=co(t.l,null),t.g.ea(t.v)),t.F=Date.now(),pe(t)}oo(e)}p.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function vn(e){e.g&&(Xs(e),e.g.cancel(),e.g=null)}function Zr(e){vn(e),e.u&&(w.clearTimeout(e.u),e.u=null),En(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&w.clearTimeout(e.m),e.m=null)}function Ws(e,t){e.l.push(new fh(e.Za++,t)),e.G==3&&wn(e)}function wn(e){jr(e.i)||e.m||(e.m=!0,Cs(e.Ha,e),e.C=0)}function Sh(e,t){return Br(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=fe(U(e.Ha,e,t),ro(e,e.C)),e.C++,!0)}p.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new ge(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=ir(r),or(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=eo(this,i,t),n=at(this.F),k(n,"RID",e),k(n,"CVER",22),this.D&&k(n,"X-HTTP-Session-Id",this.D),Ae(this,n),this.o&&r&&Ks(n,this.o,r),qs(this.i,i),this.Ra&&k(n,"TYPE","init"),this.ja?(k(n,"$req",t),k(n,"SID","null"),i.$=!0,Ps(i,n,null)):Ps(i,n,t),this.G=2}}else this.G==3&&(e?to(this,e):this.l.length==0||jr(this.i)||to(this))};function to(e,t){var n;t?n=t.m:n=e.V++;const s=at(e.F);k(s,"SID",e.J),k(s,"RID",n),k(s,"AID",e.U),Ae(e,s),e.o&&e.s&&Ks(s,e.o,e.s),n=new ge(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=eo(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),qs(e.i,n),Ps(n,s,t)}function Ae(e,t){e.j&&$s({},function(n,s){k(t,s,n)})}function eo(e,t,n){n=Math.min(e.l.length,n);var s=e.j?U(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const h=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{ph(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function no(e){e.g||e.u||(e.Y=1,Cs(e.Ga,e),e.A=0)}function Qs(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=fe(U(e.Ga,e),ro(e,e.A)),e.A++,!0)}p.Ga=function(){if(this.u=null,so(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=fe(U(this.bb,this),e)}};p.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Y(10),vn(this),so(this))};function Xs(e){e.B!=null&&(w.clearTimeout(e.B),e.B=null)}function so(e){e.g=new ge(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=at(e.oa);k(t,"RID","rpc"),k(t,"SID",e.J),k(t,"CI",e.N?"0":"1"),k(t,"AID",e.U),Ae(e,t),k(t,"TYPE","xmlhttp"),e.o&&e.s&&Ks(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=gn(at(t)),n.s=null,n.U=!0,Rr(n,e)}p.ab=function(){this.v!=null&&(this.v=null,vn(this),Qs(this),Y(19))};function En(e){e.v!=null&&(w.clearTimeout(e.v),e.v=null)}function io(e,t){var n=null;if(e.g==t){En(e),Xs(e),e.g=null;var s=2}else if(Bs(e.i,t))n=t.D,qr(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=on(),j(s,new _r(s,n,t,i)),wn(e)}else no(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&Sh(e,t)||s==2&&Qs(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:St(e,5);break;case 4:St(e,10);break;case 3:St(e,6);break;default:St(e,2)}}}function ro(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function St(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=U(e.jb,e);n||(n=new It("//www.google.com/images/cleardot.gif"),w.location&&w.location.protocol=="http"||ln(n,"https"),gn(n)),mh(n.toString(),s)}else Y(2);e.G=0,e.j&&e.j.va(t),oo(e),Zr(e)}p.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Y(2)):(this.h.info("Failed to ping google.com"),Y(1))};function oo(e){e.G=0,e.I=-1,e.j&&((Hr(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,hs(e.l),e.l.length=0),e.j.ua())}function ao(e,t,n){let s=ih(n);if(s.i!="")t&&fn(s,t+"."+s.i),dn(s,s.m);else{const i=w.location;s=rh(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&fs(e.aa,function(i,r){k(s,r,i)}),t=e.D,n=e.sa,t&&n&&k(s,t,n),k(s,"VER",e.ma),Ae(e,s),s}function co(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new L(new Ee({ib:!0})):new L(e.qa),t.L=e.H,t}function uo(){}p=uo.prototype;p.xa=function(){};p.wa=function(){};p.va=function(){};p.ua=function(){};p.Oa=function(){};function Tn(){if(Lt&&!(10<=Number(Vu)))throw Error("Environmental error: no available transport.")}Tn.prototype.g=function(e,t){return new et(e,t)};function et(e,t){V.call(this),this.g=new Jr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Je(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Je(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ft(this)}$(et,V);et.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Cs(U(e.hb,e,t))),Y(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=ao(e,null,e.W),wn(e)};et.prototype.close=function(){Gs(this.g)};et.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Ws(this.g,t)}else this.v?(t={},t.__data__=bs(e),Ws(this.g,t)):Ws(this.g,e)};et.prototype.M=function(){this.g.j=null,delete this.j,Gs(this.g),delete this.g,et.Z.M.call(this)};function ho(e){Os.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}$(ho,Os);function lo(){Ms.call(this),this.status=1}$(lo,Ms);function Ft(e){this.g=e}$(Ft,uo);Ft.prototype.xa=function(){j(this.g,"a")};Ft.prototype.wa=function(e){j(this.g,new ho(e))};Ft.prototype.va=function(e){j(this.g,new lo(e))};Ft.prototype.ua=function(){j(this.g,"b")};Tn.prototype.createWebChannel=Tn.prototype.g;et.prototype.send=et.prototype.u;et.prototype.open=et.prototype.m;et.prototype.close=et.prototype.close;an.NO_ERROR=0;an.TIMEOUT=8;an.HTTP_ERROR=6;Nr.COMPLETE="complete";Cr.EventType=de;de.OPEN="a";de.CLOSE="b";de.ERROR="c";de.MESSAGE="d";V.prototype.listen=V.prototype.N;L.prototype.listenOnce=L.prototype.O;L.prototype.getLastError=L.prototype.La;L.prototype.getLastErrorCode=L.prototype.Da;L.prototype.getStatus=L.prototype.ba;L.prototype.getResponseJson=L.prototype.Qa;L.prototype.getResponseText=L.prototype.ga;L.prototype.send=L.prototype.ea;var Ah=function(){return new Tn},_h=function(){return on()},Ys=an,Nh=Nr,bh=wt,fo={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ch=Ee,In=Cr,Dh=L;const go="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pt="9.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new Qi("@firebase/firestore");function po(){return At.logLevel}function y(e,...t){if(At.logLevel<=_.DEBUG){const n=t.map(Js);At.debug(`Firestore (${Pt}): ${e}`,...n)}}function dt(e,...t){if(At.logLevel<=_.ERROR){const n=t.map(Js);At.error(`Firestore (${Pt}): ${e}`,...n)}}function mo(e,...t){if(At.logLevel<=_.WARN){const n=t.map(Js);At.warn(`Firestore (${Pt}): ${e}`,...n)}}function Js(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e="Unexpected state"){const t=`FIRESTORE (${Pt}) INTERNAL ASSERTION FAILED: `+e;throw dt(t),new Error(t)}function C(e,t){e||T()}function I(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends Error{constructor(t,n){super(n),this.code=t,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(t,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${t}`}}class kh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(J.UNAUTHENTICATED))}shutdown(){}}class xh{constructor(t){this.t=t,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new ut;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ut,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{y("FirebaseCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ut)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(C(typeof s.accessToken=="string"),new Rh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return C(t===null||typeof t=="string"),new J(t)}}class Lh{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=J.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(t.Authorization=n),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class Oh{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Lh(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(J.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.g(s),this.p=s=>n.writeSequenceNumber(s))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zs.T=-1;class yo{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Mh(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function b(e,t){return e<t?-1:e>t?1:0}function Ut(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new nt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?b(this.nanoseconds,t.nanoseconds):b(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.timestamp=t}static fromTimestamp(t){return new N(t)}static min(){return new N(new nt(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function $t(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function wo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t,n,s){n===void 0?n=0:n>t.length&&T(),s===void 0?s=t.length-n:s>t.length-n&&T(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return _e.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof _e?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class x extends _e{construct(t,n,s){return new x(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new v(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new x(n)}static emptyPath(){return new x([])}}const Vh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends _e{construct(t,n,s){return new Z(t,n,s)}static isValidIdentifier(t){return Vh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Z(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new v(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new v(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new v(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Z(n)}static emptyPath(){return new Z([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t){this.fields=t,t.sort(Z.comparator)}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ut(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new K(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new K(n)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return b(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}K.EMPTY_BYTE_STRING=new K("");const Fh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gt(e){if(C(!!e),typeof e=="string"){let t=0;const n=Fh.exec(e);if(C(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:O(e.seconds),nanos:O(e.nanos)}}function O(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function jt(e){return typeof e=="string"?K.fromBase64String(e):K.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function To(e){const t=e.mapValue.fields.__previous_value__;return Eo(t)?To(t):t}function Ne(e){const t=gt(e.mapValue.fields.__local_write_time__.timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(e){return e==null}function Sn(e){return e===0&&1/e==-1/0}function Ph(e){return typeof e=="number"&&Number.isInteger(e)&&!Sn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(x.fromString(t))}static fromName(t){return new E(x.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return t!==null&&x.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return x.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new x(t.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Eo(e)?4:10:T()}function ot(e,t){const n=_t(e);if(n!==_t(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ne(e).isEqual(Ne(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=gt(s.timestampValue),o=gt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return jt(s.bytesValue).isEqual(jt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return O(s.geoPointValue.latitude)===O(i.geoPointValue.latitude)&&O(s.geoPointValue.longitude)===O(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return O(s.integerValue)===O(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=O(s.doubleValue),o=O(i.doubleValue);return r===o?Sn(r)===Sn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Ut(e.arrayValue.values||[],t.arrayValue.values||[],ot);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(vo(r)!==vo(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ot(r[a],o[a])))return!1;return!0}(e,t);default:return T()}}function be(e,t){return(e.values||[]).find(n=>ot(n,t))!==void 0}function qt(e,t){const n=_t(e),s=_t(t);if(n!==s)return b(n,s);switch(n){case 0:return 0;case 1:return b(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=O(i.integerValue||i.doubleValue),a=O(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Io(e.timestampValue,t.timestampValue);case 4:return Io(Ne(e),Ne(t));case 5:return b(e.stringValue,t.stringValue);case 6:return function(i,r){const o=jt(i),a=jt(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=b(o[c],a[c]);if(u!==0)return u}return b(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=b(O(i.latitude),O(r.latitude));return o!==0?o:b(O(i.longitude),O(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=qt(o[c],a[c]);if(u)return u}return b(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=b(a[h],u[h]);if(l!==0)return l;const d=qt(o[a[h]],c[u[h]]);if(d!==0)return d}return b(a.length,u.length)}(e.mapValue,t.mapValue);default:throw T()}}function Io(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return b(e,t);const n=gt(e),s=gt(t),i=b(n.seconds,s.seconds);return i!==0?i:b(n.nanos,s.nanos)}function ei(e){return ni(e)}function ni(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=gt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?jt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=ni(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${ni(s.fields[a])}`;return r+"}"}(e.mapValue):T();var t,n}function si(e){return!!e&&"integerValue"in e}function ii(e){return!!e&&"arrayValue"in e}function So(e){return!!e&&"nullValue"in e}function Ao(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function An(e){return!!e&&"mapValue"in e}function Ce(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return $t(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Ce(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ce(e.arrayValue.values[n]);return t}return Object.assign({},e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.value=t}static empty(){return new rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!An(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ce(n)}setAll(t){let n=Z.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Ce(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());An(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ot(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];An(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){$t(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new rt(Ce(this.value))}}function _o(e){const t=[];return $t(e.fields,(n,s)=>{const i=new Z([n]);if(An(s)){const r=_o(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new ti(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,n,s,i,r){this.key=t,this.documentType=n,this.version=s,this.data=i,this.documentState=r}static newInvalidDocument(t){return new G(t,0,N.min(),rt.empty(),0)}static newFoundDocument(t,n,s){return new G(t,1,n,s,0)}static newNoDocument(t,n){return new G(t,2,n,rt.empty(),0)}static newUnknownDocument(t,n){return new G(t,3,n,rt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof G&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new G(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.A=null}}function No(e,t=null,n=[],s=[],i=null,r=null,o=null){return new Uh(e,t,n,s,i,r,o)}function ri(e){const t=I(e);if(t.A===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>jh(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Bt(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=_n(t.startAt)),t.endAt&&(n+="|ub:",n+=_n(t.endAt)),t.A=n}return t.A}function $h(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ei(s.value)}`;var s}).join(", ")}]`),Bt(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: "+_n(e.startAt)),e.endAt&&(t+=", endAt: "+_n(e.endAt)),`Target(${t})`}function oi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Qh(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!ot(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Do(e.startAt,t.startAt)&&Do(e.endAt,t.endAt)}function ai(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class tt extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.R(t,n,s):new Bh(t,n,s):n==="array-contains"?new zh(t,s):n==="in"?new Kh(t,s):n==="not-in"?new Gh(t,s):n==="array-contains-any"?new Wh(t,s):new tt(t,n,s)}static R(t,n,s){return n==="in"?new qh(t,s):new Hh(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.P(qt(n,this.value)):n!==null&&_t(this.value)===_t(n)&&this.P(qt(n,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function jh(e){return e.field.canonicalString()+e.op.toString()+ei(e.value)}class Bh extends tt{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.P(n)}}class qh extends tt{constructor(t,n){super(t,"in",n),this.keys=bo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Hh extends tt{constructor(t,n){super(t,"not-in",n),this.keys=bo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function bo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class zh extends tt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ii(n)&&be(n.arrayValue,this.value)}}class Kh extends tt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&be(this.value.arrayValue,n)}}class Gh extends tt{constructor(t,n){super(t,"not-in",n)}matches(t){if(be(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!be(this.value.arrayValue,n)}}class Wh extends tt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ii(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>be(this.value.arrayValue,s))}}class ci{constructor(t,n){this.position=t,this.before=n}}function _n(e){return`${e.before?"b":"a"}:${e.position.map(t=>ei(t)).join(",")}`}class De{constructor(t,n="asc"){this.field=t,this.dir=n}}function Qh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Co(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=qt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return e.before?s<=0:s<0}function Do(e,t){if(e===null)return t===null;if(t===null||e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ot(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.V=null,this.S=null,this.startAt,this.endAt}}function Xh(e,t,n,s,i,r,o,a){return new Nn(e,t,n,s,i,r,o,a)}function ui(e){return new Nn(e)}function bn(e){return!Bt(e.limit)&&e.limitType==="F"}function Cn(e){return!Bt(e.limit)&&e.limitType==="L"}function Yh(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Jh(e){for(const t of e.filters)if(t.v())return t.field;return null}function Zh(e){return e.collectionGroup!==null}function Re(e){const t=I(e);if(t.V===null){t.V=[];const n=Jh(t),s=Yh(t);if(n!==null&&s===null)n.isKeyField()||t.V.push(new De(n)),t.V.push(new De(Z.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.V.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.V.push(new De(Z.keyField(),r))}}}return t.V}function Nt(e){const t=I(e);if(!t.S)if(t.limitType==="F")t.S=No(t.path,t.collectionGroup,Re(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Re(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new De(r.field,o))}const s=t.endAt?new ci(t.endAt.position,!t.endAt.before):null,i=t.startAt?new ci(t.startAt.position,!t.startAt.before):null;t.S=No(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.S}function tl(e,t,n){return new Nn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Dn(e,t){return oi(Nt(e),Nt(t))&&e.limitType===t.limitType}function Ro(e){return`${ri(Nt(e))}|lt:${e.limitType}`}function hi(e){return`Query(target=${$h(Nt(e))}; limitType=${e.limitType})`}function Rn(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):E.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!Co(n.startAt,Re(n),s)||n.endAt&&Co(n.endAt,Re(n),s))}(e,t)}function ko(e){return(t,n)=>{let s=!1;for(const i of Re(e)){const r=el(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function el(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?qt(a,c):T()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(e,t){if(e.D){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sn(t)?"-0":t}}function Lo(e){return{integerValue:""+e}}function nl(e,t){return Ph(t)?Lo(t):xo(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this._=void 0}}function sl(e,t,n){return e instanceof xn?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof ke?Mo(e,t):e instanceof xe?Vo(e,t):function(s,i){const r=Oo(s,i),o=Fo(r)+Fo(s.C);return si(r)&&si(s.C)?Lo(o):xo(s.N,o)}(e,t)}function il(e,t,n){return e instanceof ke?Mo(e,t):e instanceof xe?Vo(e,t):n}function Oo(e,t){return e instanceof Ln?si(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class xn extends kn{}class ke extends kn{constructor(t){super(),this.elements=t}}function Mo(e,t){const n=Po(t);for(const s of e.elements)n.some(i=>ot(i,s))||n.push(s);return{arrayValue:{values:n}}}class xe extends kn{constructor(t){super(),this.elements=t}}function Vo(e,t){let n=Po(t);for(const s of e.elements)n=n.filter(i=>!ot(i,s));return{arrayValue:{values:n}}}class Ln extends kn{constructor(t,n){super(),this.N=t,this.C=n}}function Fo(e){return O(e.integerValue||e.doubleValue)}function Po(e){return ii(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function rl(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof ke&&s instanceof ke||n instanceof xe&&s instanceof xe?Ut(n.elements,s.elements,ot):n instanceof Ln&&s instanceof Ln?ot(n.C,s.C):n instanceof xn&&s instanceof xn}(e.transform,t.transform)}class ol{constructor(t,n){this.version=t,this.transformResults=n}}class Ht{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ht}static exists(t){return new Ht(void 0,t)}static updateTime(t){return new Ht(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function On(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Mn{}function al(e,t,n){e instanceof Vn?function(s,i,r){const o=s.value.clone(),a=Bo(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof zt?function(s,i,r){if(!On(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Bo(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(jo(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function li(e,t,n){e instanceof Vn?function(s,i,r){if(!On(s.precondition,i))return;const o=s.value.clone(),a=qo(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument($o(i),o).setHasLocalMutations()}(e,t,n):e instanceof zt?function(s,i,r){if(!On(s.precondition,i))return;const o=qo(s.fieldTransforms,r,i),a=i.data;a.setAll(jo(s)),a.setAll(o),i.convertToFoundDocument($o(i),a).setHasLocalMutations()}(e,t,n):function(s,i){On(s.precondition,i)&&i.convertToNoDocument(N.min())}(e,t)}function cl(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=Oo(s.transform,i||null);r!=null&&(n==null&&(n=rt.empty()),n.set(s.field,r))}return n||null}function Uo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ut(n,s,(i,r)=>rl(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function $o(e){return e.isFoundDocument()?e.version:N.min()}class Vn extends Mn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class zt extends Mn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function jo(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Bo(e,t,n){const s=new Map;C(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,il(o,a,n[i]))}return s}function qo(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,sl(r,o,t))}return s}class ul extends Mn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class hl extends Mn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M,A;function fl(e){switch(e){default:return T();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Ho(e){if(e===void 0)return dt("GRPC error has no .code"),f.UNKNOWN;switch(e){case M.OK:return f.OK;case M.CANCELLED:return f.CANCELLED;case M.UNKNOWN:return f.UNKNOWN;case M.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case M.INTERNAL:return f.INTERNAL;case M.UNAVAILABLE:return f.UNAVAILABLE;case M.UNAUTHENTICATED:return f.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case M.NOT_FOUND:return f.NOT_FOUND;case M.ALREADY_EXISTS:return f.ALREADY_EXISTS;case M.PERMISSION_DENIED:return f.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case M.ABORTED:return f.ABORTED;case M.OUT_OF_RANGE:return f.OUT_OF_RANGE;case M.UNIMPLEMENTED:return f.UNIMPLEMENTED;case M.DATA_LOSS:return f.DATA_LOSS;default:return T()}}(A=M||(M={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t,n){this.comparator=t,this.root=n||B.EMPTY}insert(t,n){return new W(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,B.BLACK,null,null))}remove(t){return new W(this.comparator,this.root.remove(t,this.comparator).copy(null,null,B.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Fn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Fn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Fn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Fn(this.root,t,this.comparator,!0)}}class Fn{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class B{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:B.RED,this.left=i!=null?i:B.EMPTY,this.right=r!=null?r:B.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new B(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return B.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1;B.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(e,t,n,s,i){return this}insert(e,t,n){return new B(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.comparator=t,this.data=new W(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new zo(this.data.getIterator())}getIteratorFrom(t){return new zo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof q)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new q(this.comparator);return n.data=t,n}}class zo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=new W(E.comparator);function bt(){return dl}const gl=new W(E.comparator);function fi(){return gl}const pl=new W(E.comparator);function ml(){return pl}const yl=new q(E.comparator);function R(...e){let t=yl;for(const n of e)t=t.add(n);return t}const vl=new q(b);function Ko(){return vl}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,Le.createSynthesizedTargetChangeForCurrentChange(t,n)),new Pn(N.min(),s,Ko(),bt(),R())}}class Le{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Le(K.EMPTY_BYTE_STRING,n,R(),R(),R())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t,n,s,i){this.k=t,this.removedTargetIds=n,this.key=s,this.$=i}}class Go{constructor(t,n){this.targetId=t,this.O=n}}class Wo{constructor(t,n,s=K.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Qo{constructor(){this.F=0,this.M=Yo(),this.L=K.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=R(),n=R(),s=R();return this.M.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:T()}}),new Le(this.L,this.B,t,n,s)}G(){this.U=!1,this.M=Yo()}H(t,n){this.U=!0,this.M=this.M.insert(t,n)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class wl{constructor(t){this.tt=t,this.et=new Map,this.nt=bt(),this.st=Xo(),this.it=new q(b)}rt(t){for(const n of t.k)t.$&&t.$.isFoundDocument()?this.ot(n,t.$):this.ct(n,t.key,t.$);for(const n of t.removedTargetIds)this.ct(n,t.key,t.$)}at(t){this.forEachTarget(t,n=>{const s=this.ut(n);switch(t.state){case 0:this.ht(n)&&s.j(t.resumeToken);break;case 1:s.X(),s.q||s.G(),s.j(t.resumeToken);break;case 2:s.X(),s.q||this.removeTarget(n);break;case 3:this.ht(n)&&(s.Z(),s.j(t.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),s.j(t.resumeToken));break;default:T()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.et.forEach((s,i)=>{this.ht(i)&&n(i)})}ft(t){const n=t.targetId,s=t.O.count,i=this.dt(n);if(i){const r=i.target;if(ai(r))if(s===0){const o=new E(r.path);this.ct(n,o,G.newNoDocument(o,N.min()))}else C(s===1);else this.wt(n)!==s&&(this.lt(n),this.it=this.it.add(n))}}_t(t){const n=new Map;this.et.forEach((r,o)=>{const a=this.dt(o);if(a){if(r.current&&ai(a.target)){const c=new E(a.target.path);this.nt.get(c)!==null||this.gt(o,c)||this.ct(o,c,G.newNoDocument(c,t))}r.K&&(n.set(o,r.W()),r.G())}});let s=R();this.st.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.dt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))});const i=new Pn(t,n,this.it,this.nt,s);return this.nt=bt(),this.st=Xo(),this.it=new q(b),i}ot(t,n){if(!this.ht(t))return;const s=this.gt(t,n.key)?2:0;this.ut(t).H(n.key,s),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(t))}ct(t,n,s){if(!this.ht(t))return;const i=this.ut(t);this.gt(t,n)?i.H(n,1):i.J(n),this.st=this.st.insert(n,this.yt(n).delete(t)),s&&(this.nt=this.nt.insert(n,s))}removeTarget(t){this.et.delete(t)}wt(t){const n=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let n=this.et.get(t);return n||(n=new Qo,this.et.set(t,n)),n}yt(t){let n=this.st.get(t);return n||(n=new q(b),this.st=this.st.insert(t,n)),n}ht(t){const n=this.dt(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}dt(t){const n=this.et.get(t);return n&&n.q?null:this.tt.Tt(t)}lt(t){this.et.set(t,new Qo),this.tt.getRemoteKeysForTarget(t).forEach(n=>{this.ct(t,n,null)})}gt(t,n){return this.tt.getRemoteKeysForTarget(t).has(n)}}function Xo(){return new W(E.comparator)}function Yo(){return new W(E.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Tl=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Il{constructor(t,n){this.databaseId=t,this.D=n}}function $n(e,t){return e.D?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Jo(e,t){return e.D?t.toBase64():t.toUint8Array()}function Sl(e,t){return $n(e,t.toTimestamp())}function ht(e){return C(!!e),N.fromTimestamp(function(t){const n=gt(t);return new nt(n.seconds,n.nanos)}(e))}function di(e,t){return function(n){return new x(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Zo(e){const t=x.fromString(e);return C(ra(t)),t}function gi(e,t){return di(e.databaseId,t.path)}function pi(e,t){const n=Zo(t);if(n.get(1)!==e.databaseId.projectId)throw new v(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new v(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(ta(n))}function mi(e,t){return di(e.databaseId,t)}function Al(e){const t=Zo(e);return t.length===4?x.emptyPath():ta(t)}function yi(e){return new x(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ta(e){return C(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function ea(e,t,n){return{name:gi(e,t),fields:n.value.mapValue.fields}}function _l(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(c,u){return c.D?(C(u===void 0||typeof u=="string"),K.fromBase64String(u||"")):(C(u===void 0||u instanceof Uint8Array),K.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:Ho(c.code);return new v(u,c.message||"")}(o);n=new Wo(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=pi(e,s.document.name),r=ht(s.document.updateTime),o=new rt({mapValue:{fields:s.document.fields}}),a=G.newFoundDocument(i,r,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Un(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=pi(e,s.document),r=s.readTime?ht(s.readTime):N.min(),o=G.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Un([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=pi(e,s.document),r=s.removedTargetIds||[];n=new Un([],r,i,null)}else{if(!("filter"in t))return T();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new ll(i),o=s.targetId;n=new Go(o,r)}}return n}function Nl(e,t){let n;if(t instanceof Vn)n={update:ea(e,t.key,t.value)};else if(t instanceof ul)n={delete:gi(e,t.key)};else if(t instanceof zt)n={update:ea(e,t.key,t.data),updateMask:Vl(t.fieldMask)};else{if(!(t instanceof hl))return T();n={verify:gi(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof xn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ke)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xe)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ln)return{fieldPath:r.field.canonicalString(),increment:o.C};throw T()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Sl(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:T()}(e,t.precondition)),n}function bl(e,t){return e&&e.length>0?(C(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?ht(s.updateTime):ht(i);return r.isEqual(N.min())&&(r=ht(i)),new ol(r,s.transformResults||[])}(n,t))):[]}function Cl(e,t){return{documents:[mi(e,t.path)]}}function Dl(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=mi(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=mi(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(a){if(a.length===0)return;const c=a.map(u=>function(h){if(h.op==="=="){if(Ao(h.value))return{unaryFilter:{field:Kt(h.field),op:"IS_NAN"}};if(So(h.value))return{unaryFilter:{field:Kt(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Ao(h.value))return{unaryFilter:{field:Kt(h.field),op:"IS_NOT_NAN"}};if(So(h.value))return{unaryFilter:{field:Kt(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kt(h.field),op:Ll(h.op),value:h.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(a){if(a.length!==0)return a.map(c=>function(u){return{field:Kt(u.field),direction:xl(u.dir)}}(c))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(a,c){return a.D||Bt(c)?c:{value:c}}(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=sa(t.startAt)),t.endAt&&(n.structuredQuery.endAt=sa(t.endAt)),n}function Rl(e){let t=Al(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){C(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];n.where&&(r=na(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new De(Gt(l.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,Bt(l)?null:l}(n.limit));let c=null;n.startAt&&(c=ia(n.startAt));let u=null;return n.endAt&&(u=ia(n.endAt)),Xh(t,i,o,r,a,"F",c,u)}function kl(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function na(e){return e?e.unaryFilter!==void 0?[Ml(e)]:e.fieldFilter!==void 0?[Ol(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>na(t)).reduce((t,n)=>t.concat(n)):T():[]}function sa(e){return{before:e.before,values:e.position}}function ia(e){const t=!!e.before,n=e.values||[];return new ci(n,t)}function xl(e){return El[e]}function Ll(e){return Tl[e]}function Kt(e){return{fieldPath:e.canonicalString()}}function Gt(e){return Z.fromServerFormat(e.fieldPath)}function Ol(e){return tt.create(Gt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(e.fieldFilter.op),e.fieldFilter.value)}function Ml(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Gt(e.unaryFilter.field);return tt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Gt(e.unaryFilter.field);return tt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Gt(e.unaryFilter.field);return tt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Gt(e.unaryFilter.field);return tt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return T()}}function Vl(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function ra(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}const Fl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,s)=>{n(t)})}static reject(t){return new g((n,s)=>{s(t)})}static waitFor(t){return new g((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=g.resolve(!1);for(const s of t)n=n.next(i=>i?g.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}function Oe(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&al(r,t,s[i])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&li(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&li(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const s=t.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(N.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),R())}isEqual(t){return this.batchId===t.batchId&&Ut(this.mutations,t.mutations,(n,s)=>Uo(n,s))&&Ut(this.baseMutations,t.baseMutations,(n,s)=>Uo(n,s))}}class vi{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){C(t.mutations.length===s.length);let i=ml();const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new vi(t,n,s,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,n,s,i,r=N.min(),o=N.min(),a=K.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Ct(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t){this.Wt=t}}function jl(e){const t=Rl({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?tl(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this.Gt=new ql}addToCollectionParentIndex(t,n){return this.Gt.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.Gt.getEntries(n))}}class ql{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new q(x.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new q(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new Wt(0)}static ie(){return new Wt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==Fl)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={}}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i!==void 0){for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n])}else this.inner[s]=[[t,n]]}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),!0;return!1}forEach(t){$t(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return wo(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.changes=new Ve(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}getReadTime(t){const n=this.changes.get(t);return n?n.readTime:N.min()}addEntry(t,n){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:n})}removeEntry(t,n=null){this.assertNotApplied(),this.changes.set(t,{document:G.newInvalidDocument(t),readTime:n})}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?g.resolve(s.document):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(t,n,s){this.He=t,this.In=n,this.Ht=s}An(t,n){return this.In.getAllMutationBatchesAffectingDocumentKey(t,n).next(s=>this.Rn(t,n,s))}Rn(t,n,s){return this.He.getEntry(t,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}bn(t,n){t.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}Pn(t,n){return this.He.getEntries(t,n).next(s=>this.vn(t,s).next(()=>s))}vn(t,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>this.bn(n,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return E.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Vn(t,n.path):Zh(n)?this.Sn(t,n,s):this.Dn(t,n,s)}Vn(t,n){return this.An(t,new E(n)).next(s=>{let i=fi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}Sn(t,n,s){const i=n.collectionGroup;let r=fi();return this.Ht.getCollectionParents(t,i).next(o=>g.forEach(o,a=>{const c=function(u,h){return new Nn(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.Dn(t,c,s).next(u=>{u.forEach((h,l)=>{r=r.insert(h,l)})})}).next(()=>r))}Dn(t,n,s){let i,r;return this.He.getDocumentsMatchingQuery(t,n,s).next(o=>(i=o,this.In.getAllMutationBatchesAffectingQuery(t,n))).next(o=>(r=o,this.Cn(t,r,i).next(a=>{i=a;for(const c of r)for(const u of c.mutations){const h=u.key;let l=i.get(h);l==null&&(l=G.newInvalidDocument(h),i=i.insert(h,l)),li(u,l,c.localWriteTime),l.isFoundDocument()||(i=i.remove(h))}}))).next(()=>(i.forEach((o,a)=>{Rn(n,a)||(i=i.remove(o))}),i))}Cn(t,n,s){let i=R();for(const o of n)for(const a of o.mutations)a instanceof zt&&s.get(a.key)===null&&(i=i.add(a.key));let r=s;return this.He.getEntries(t,i).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(r=r.insert(a,c))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Nn=s,this.xn=i}static kn(t,n){let s=R(),i=R();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new wi(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{$n(t){this.On=t}getDocumentsMatchingQuery(t,n,s,i){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(N.min())?this.Fn(t,n):this.On.Pn(t,i).next(r=>{const o=this.Mn(n,r);return(bn(n)||Cn(n))&&this.Ln(n.limitType,o,i,s)?this.Fn(t,n):(po()<=_.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),hi(n)),this.On.getDocumentsMatchingQuery(t,n,s).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Mn(t,n){let s=new q(ko(t));return n.forEach((i,r)=>{Rn(t,r)&&(s=s.add(r))}),s}Ln(t,n,s,i){if(s.size!==n.size)return!0;const r=t==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Fn(t,n){return po()<=_.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",hi(n)),this.On.getDocumentsMatchingQuery(t,n,N.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(t,n,s,i){this.persistence=t,this.Bn=n,this.N=i,this.Un=new W(b),this.qn=new Ve(r=>ri(r),oi),this.Kn=N.min(),this.In=t.getMutationQueue(s),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new oa(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Un))}}function Gl(e,t,n,s){return new Kl(e,t,n,s)}async function aa(e,t){const n=I(e);let s=n.In,i=n.Qn;const r=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(c=>(a=c,s=n.persistence.getMutationQueue(t),i=new oa(n.jn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(o))).next(c=>{const u=[],h=[];let l=R();for(const d of a){u.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}for(const d of c){h.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}return i.Pn(o,l).next(d=>({Wn:d,removedBatchIds:u,addedBatchIds:h}))})});return n.In=s,n.Qn=i,n.Bn.$n(n.Qn),r}function Wl(e,t){const n=I(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const h=c.batch,l=h.keys();let d=g.resolve();return l.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(S=>{const D=c.docVersions.get(m);C(D!==null),S.version.compareTo(D)<0&&(h.applyToRemoteDocument(S,c),S.isValidDocument()&&u.addEntry(S,c.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,h))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.In.performConsistencyCheck(s)).next(()=>n.Qn.Pn(s,i))})}function ca(e){const t=I(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.ze.getLastRemoteSnapshotVersion(n))}function Ql(e,t){const n=I(e),s=t.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const a=[];t.targetChanges.forEach((u,h)=>{const l=i.get(h);if(!l)return;a.push(n.ze.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.ze.addMatchingKeys(r,u.addedDocuments,h)));const d=u.resumeToken;if(d.approximateByteSize()>0){const m=l.withResumeToken(d,s).withSequenceNumber(r.currentSequenceNumber);i=i.insert(h,m),function(S,D,P){return C(D.resumeToken.approximateByteSize()>0),S.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(l,m,u)&&a.push(n.ze.updateTargetData(r,m))}});let c=bt();if(t.documentUpdates.forEach((u,h)=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(Xl(r,o,t.documentUpdates,s,void 0).next(u=>{c=u})),!s.isEqual(N.min())){const u=n.ze.getLastRemoteSnapshotVersion(r).next(h=>n.ze.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return g.waitFor(a).next(()=>o.apply(r)).next(()=>n.Qn.vn(r,c)).next(()=>c)}).then(r=>(n.Un=i,r))}function Xl(e,t,n,s,i){let r=R();return n.forEach(o=>r=r.add(o)),t.getEntries(e,r).next(o=>{let a=bt();return n.forEach((c,u)=>{const h=o.get(c),l=(i==null?void 0:i.get(c))||s;u.isNoDocument()&&u.version.isEqual(N.min())?(t.removeEntry(c,l),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u,l),a=a.insert(c,u)):y("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),a})}function Yl(e,t){const n=I(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.In.getNextMutationBatchAfterBatchId(s,t)))}function Jl(e,t){const n=I(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.ze.getTargetData(s,t).next(r=>r?(i=r,g.resolve(i)):n.ze.allocateTargetId(s).next(o=>(i=new Ct(t,o,0,s.currentSequenceNumber),n.ze.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Un.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Un=n.Un.insert(s.targetId,s),n.qn.set(t,s.targetId)),s})}async function Ei(e,t,n){const s=I(e),i=s.Un.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Oe(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Un=s.Un.remove(t),s.qn.delete(i.target)}function ua(e,t,n){const s=I(e);let i=N.min(),r=R();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=I(a),l=h.qn.get(u);return l!==void 0?g.resolve(h.Un.get(l)):h.ze.getTargetData(c,u)}(s,o,Nt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.ze.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Bn.getDocumentsMatchingQuery(o,t,n?i:N.min(),n?r:R())).next(a=>({documents:a,Gn:r})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,n){return g.resolve(this.Yn.get(n))}saveBundleMetadata(t,n){var s;return this.Yn.set(n.id,{id:(s=n).id,version:s.version,createTime:ht(s.createTime)}),g.resolve()}getNamedQuery(t,n){return g.resolve(this.Xn.get(n))}saveNamedQuery(t,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:jl(s.bundledQuery),readTime:ht(s.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.Zn=new q(F.ts),this.es=new q(F.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,n){const s=new F(t,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.rs(new F(t,n))}os(t,n){t.forEach(s=>this.removeReference(s,n))}cs(t){const n=new E(new x([])),s=new F(n,t),i=new F(n,t+1),r=[];return this.es.forEachInRange([s,i],o=>{this.rs(o),r.push(o.key)}),r}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const n=new E(new x([])),s=new F(n,t),i=new F(n,t+1);let r=R();return this.es.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new F(t,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class F{constructor(t,n){this.key=t,this.ls=n}static ts(t,n){return E.comparator(t.key,n.key)||b(t.ls,n.ls)}static ns(t,n){return b(t.ls,n.ls)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t,n){this.Ht=t,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new q(F.ts)}checkEmpty(t){return g.resolve(this.In.length===0)}addMutationBatch(t,n,s,i){const r=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new Ul(r,n,s,i);this.In.push(o);for(const a of i)this.ds=this.ds.add(new F(a.key,r)),this.Ht.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this._s(s),r=i<0?0:i;return g.resolve(this.In.length>r?this.In[r]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(t){return g.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new F(n,0),i=new F(n,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([s,i],o=>{const a=this.ws(o.ls);r.push(a)}),g.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new q(b);return n.forEach(i=>{const r=new F(i,0),o=new F(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{s=s.add(a.ls)})}),g.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;E.isDocumentKey(r)||(r=r.child(""));const o=new F(new E(r),0);let a=new q(b);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.ls)),!0)},o),g.resolve(this.gs(a))}gs(t){const n=[];return t.forEach(s=>{const i=this.ws(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){C(this.ys(n.batchId,"removed")===0),this.In.shift();let s=this.ds;return g.forEach(n.mutations,i=>{const r=new F(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.ds=s})}te(t){}containsKey(t,n){const s=new F(n,0),i=this.ds.firstAfterOrEqual(s);return g.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.In.length,g.resolve()}ys(t,n){return this._s(t)}_s(t){return this.In.length===0?0:t-this.In[0].batchId}ws(t){const n=this._s(t);return n<0||n>=this.In.length?null:this.In[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(t,n){this.Ht=t,this.ps=n,this.docs=new W(E.comparator),this.size=0}addEntry(t,n,s){const i=n.key,r=this.docs.get(i),o=r?r.size:0,a=this.ps(n);return this.docs=this.docs.insert(i,{document:n.clone(),size:a,readTime:s}),this.size+=a-o,this.Ht.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return g.resolve(s?s.document.clone():G.newInvalidDocument(n))}getEntries(t,n){let s=bt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.clone():G.newInvalidDocument(i))}),g.resolve(s)}getDocumentsMatchingQuery(t,n,s){let i=bt();const r=new E(n.path.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c,readTime:u}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;u.compareTo(s)<=0||Rn(n,c)&&(i=i.insert(c.key,c.clone()))}return g.resolve(i)}Ts(t,n){return g.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new nf(this)}getSize(t){return g.resolve(this.size)}}class nf extends Hl{constructor(t){super(),this.Se=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.document.isValidDocument()?n.push(this.Se.addEntry(t,i.document,this.getReadTime(s))):this.Se.removeEntry(s)}),g.waitFor(n)}getFromCache(t,n){return this.Se.getEntry(t,n)}getAllFromCache(t,n){return this.Se.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t){this.persistence=t,this.Es=new Ve(n=>ri(n),oi),this.lastRemoteSnapshotVersion=N.min(),this.highestTargetId=0,this.Is=0,this.As=new Ti,this.targetCount=0,this.Rs=Wt.se()}forEachTarget(t,n){return this.Es.forEach((s,i)=>n(i)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Is&&(this.Is=n),g.resolve()}ce(t){this.Es.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Rs=new Wt(n),this.highestTargetId=n),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,n){return this.ce(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.ce(n),g.resolve()}removeTargetData(t,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Es.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),g.waitFor(r).next(()=>i)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const s=this.Es.get(n)||null;return g.resolve(s)}addMatchingKeys(t,n,s){return this.As.ss(n,s),g.resolve()}removeMatchingKeys(t,n,s){this.As.os(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),g.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.As.cs(n),g.resolve()}getMatchingKeysForTargetId(t,n){const s=this.As.hs(n);return g.resolve(s)}containsKey(t,n){return g.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t,n){this.bs={},this.Le=new Zs(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new sf(this),this.Ht=new Bl,this.He=function(s,i){return new ef(s,i)}(this.Ht,s=>this.referenceDelegate.Ps(s)),this.N=new $l(n),this.Je=new Zl(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let n=this.bs[t.toKey()];return n||(n=new tf(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const i=new of(this.Le.next());return this.referenceDelegate.vs(),s(i).next(r=>this.referenceDelegate.Vs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ss(t,n){return g.or(Object.values(this.bs).map(s=>()=>s.containsKey(t,n)))}}class of extends Pl{constructor(t){super(),this.currentSequenceNumber=t}}class Ii{constructor(t){this.persistence=t,this.Ds=new Ti,this.Cs=null}static Ns(t){return new Ii(t)}get xs(){if(this.Cs)return this.Cs;throw T()}addReference(t,n,s){return this.Ds.addReference(s,n),this.xs.delete(s.toString()),g.resolve()}removeReference(t,n,s){return this.Ds.removeReference(s,n),this.xs.add(s.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.xs.add(n.toString()),g.resolve()}removeTarget(t,n){this.Ds.cs(n.targetId).forEach(i=>this.xs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.xs.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}vs(){this.Cs=new Set}Vs(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.xs,s=>{const i=E.fromPath(s);return this.ks(t,i).next(r=>{r||n.removeEntry(i)})}).next(()=>(this.Cs=null,n.apply(t)))}updateLimboDocument(t,n){return this.ks(t,n).next(s=>{s?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(t){return 0}ks(t,n){return g.or([()=>g.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ss(t,n)])}}class ha{constructor(){this.activeTargetIds=Ko()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class af{constructor(){this.yi=new ha,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,n,s){this.pi[t]=n}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new ha,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{Ti(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.Fi=n+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,n,s,i){const r=this.Bi(t,n);y("RestConnection","Sending: ",r,s);const o={};return this.Ui(o,i),this.qi(t,r,o,s).then(a=>(y("RestConnection","Received: ",a),a),a=>{throw mo("RestConnection",`${t} failed with error: `,a,"url: ",r,"request:",s),a})}Ki(t,n,s,i){return this.Li(t,n,s,i)}Ui(t,n){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+Pt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const s in n.authHeaders)n.authHeaders.hasOwnProperty(s)&&(t[s]=n.authHeaders[s])}Bi(t,n){const s=uf[t];return`${this.Fi}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,n,s,i){return new Promise((r,o)=>{const a=new Dh;a.listenOnce(Nh.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ys.NO_ERROR:const u=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(u)),r(u);break;case Ys.TIMEOUT:y("Connection",'RPC "'+t+'" timed out'),o(new v(f.DEADLINE_EXCEEDED,"Request time out"));break;case Ys.HTTP_ERROR:const h=a.getStatus();if(y("Connection",'RPC "'+t+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const d=function(m){const S=m.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(S)>=0?S:f.UNKNOWN}(l.status);o(new v(d,l.message))}else o(new v(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new v(f.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{y("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}ji(t,n){const s=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Ah(),r=_h(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Ch({})),this.Ui(o.initMessageHeaders,n),Sc()||_c()||Nc()||bc()||Cc()||Ac()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");y("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let u=!1,h=!1;const l=new hf({vi:m=>{h?y("Connection","Not sending because WebChannel is closed:",m):(u||(y("Connection","Opening WebChannel transport."),c.open(),u=!0),y("Connection","WebChannel sending:",m),c.send(m))},Vi:()=>c.close()}),d=(m,S,D)=>{m.listen(S,P=>{try{D(P)}catch(it){setTimeout(()=>{throw it},0)}})};return d(c,In.EventType.OPEN,()=>{h||y("Connection","WebChannel transport opened.")}),d(c,In.EventType.CLOSE,()=>{h||(h=!0,y("Connection","WebChannel transport closed"),l.$i())}),d(c,In.EventType.ERROR,m=>{h||(h=!0,mo("Connection","WebChannel transport errored:",m),l.$i(new v(f.UNAVAILABLE,"The operation could not be completed")))}),d(c,In.EventType.MESSAGE,m=>{var S;if(!h){const D=m.data[0];C(!!D);const P=D,it=P.error||((S=P[0])===null||S===void 0?void 0:S.error);if(it){y("Connection","WebChannel received error:",it);const je=it.status;let Rt=function(Za){const Ui=M[Za];if(Ui!==void 0)return Ho(Ui)}(je),Be=it.message;Rt===void 0&&(Rt=f.INTERNAL,Be="Unknown error status: "+je+" with message "+it.message),h=!0,l.$i(new v(Rt,Be)),c.close()}else y("Connection","WebChannel received:",D),l.Oi(D)}}),d(r,bh.STAT_EVENT,m=>{m.stat===fo.PROXY?y("Connection","Detected buffering proxy"):m.stat===fo.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{l.ki()},0),l}}function Si(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(e){return new Il(e,!0)}class fa{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Oe=t,this.timerId=n,this.Qi=s,this.Wi=i,this.Gi=r,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const n=Math.floor(this.zi+this.Zi()),s=Math.max(0,Date.now()-this.Ji),i=Math.max(0,n-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,i,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(t,n,s,i,r,o,a){this.Oe=t,this.er=s,this.nr=i,this.sr=r,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new fa(t,n)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(t){this.gr(),this.stream.send(t)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,n){this.gr(),this.yr(),this.ar.cancel(),this.ir++,t!==4?this.ar.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(dt(n.toString()),dt("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(n)}pr(){}auth(){this.state=1;const t=this.Tr(this.ir),n=this.ir;this.credentialsProvider.getToken().then(s=>{this.ir===n&&this.Er(s)},s=>{t(()=>{const i=new v(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Ir(i)})})}Er(t){const n=this.Tr(this.ir);this.stream=this.Ar(t),this.stream.Si(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(s=>{n(()=>this.Ir(s))}),this.stream.onMessage(s=>{n(()=>this.onMessage(s))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Tr(t){return n=>{this.Oe.enqueueAndForget(()=>this.ir===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ff extends da{constructor(t,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r),this.N=i}Ar(t){return this.sr.ji("Listen",t)}onMessage(t){this.ar.reset();const n=_l(this.N,t),s=function(i){if(!("targetChange"in i))return N.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?N.min():r.readTime?ht(r.readTime):N.min()}(t);return this.listener.Rr(n,s)}br(t){const n={};n.database=yi(this.N),n.addTarget=function(i,r){let o;const a=r.target;return o=ai(a)?{documents:Cl(i,a)}:{query:Dl(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Jo(i,r.resumeToken):r.snapshotVersion.compareTo(N.min())>0&&(o.readTime=$n(i,r.snapshotVersion.toTimestamp())),o}(this.N,t);const s=kl(this.N,t);s&&(n.labels=s),this.mr(n)}Pr(t){const n={};n.database=yi(this.N),n.removeTarget=t,this.mr(n)}}class df extends da{constructor(t,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r),this.N=i,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(t){return this.sr.ji("Write",t)}onMessage(t){if(C(!!t.streamToken),this.lastStreamToken=t.streamToken,this.vr){this.ar.reset();const n=bl(t.writeResults,t.commitTime),s=ht(t.commitTime);return this.listener.Dr(s,n)}return C(!t.writeResults||t.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const t={};t.database=yi(this.N),this.mr(t)}Sr(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Nl(this.N,s))};this.mr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf extends class{}{constructor(t,n,s){super(),this.credentials=t,this.sr=n,this.N=s,this.kr=!1}$r(){if(this.kr)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,n,s){return this.$r(),this.credentials.getToken().then(i=>this.sr.Li(t,n,s,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new v(f.UNKNOWN,i.toString())})}Ki(t,n,s){return this.$r(),this.credentials.getToken().then(i=>this.sr.Ki(t,n,s,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new v(f.UNKNOWN,i.toString())})}terminate(){this.kr=!0}}class pf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(t){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Br("Offline")))}set(t){this.Kr(),this.Or=0,t==="Online"&&(this.Mr=!1),this.Br(t)}Br(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Ur(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(dt(n),this.Mr=!1):y("OnlineStateTracker",n)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=r,this.zr.Ti(o=>{s.enqueueAndForget(async()=>{Dt(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=I(a);c.Wr.add(4),await Fe(c),c.Hr.set("Unknown"),c.Wr.delete(4),await Bn(c)}(this))})}),this.Hr=new pf(s,i)}}async function Bn(e){if(Dt(e))for(const t of e.Gr)await t(!0)}async function Fe(e){for(const t of e.Gr)await t(!1)}function ga(e,t){const n=I(e);n.Qr.has(t.targetId)||(n.Qr.set(t.targetId,t),Ni(n)?_i(n):Qt(n).hr()&&Ai(n,t))}function pa(e,t){const n=I(e),s=Qt(n);n.Qr.delete(t),s.hr()&&ma(n,t),n.Qr.size===0&&(s.hr()?s.wr():Dt(n)&&n.Hr.set("Unknown"))}function Ai(e,t){e.Jr.Y(t.targetId),Qt(e).br(t)}function ma(e,t){e.Jr.Y(t),Qt(e).Pr(t)}function _i(e){e.Jr=new wl({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Tt:t=>e.Qr.get(t)||null}),Qt(e).start(),e.Hr.Lr()}function Ni(e){return Dt(e)&&!Qt(e).ur()&&e.Qr.size>0}function Dt(e){return I(e).Wr.size===0}function ya(e){e.Jr=void 0}async function yf(e){e.Qr.forEach((t,n)=>{Ai(e,t)})}async function vf(e,t){ya(e),Ni(e)?(e.Hr.qr(t),_i(e)):e.Hr.set("Unknown")}async function wf(e,t,n){if(e.Hr.set("Online"),t instanceof Wo&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Qr.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Qr.delete(o),s.Jr.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await qn(e,s)}else if(t instanceof Un?e.Jr.rt(t):t instanceof Go?e.Jr.ft(t):e.Jr.at(t),!n.isEqual(N.min()))try{const s=await ca(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Jr._t(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Qr.get(c);u&&i.Qr.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.Qr.get(a);if(!c)return;i.Qr.set(a,c.withResumeToken(K.EMPTY_BYTE_STRING,c.snapshotVersion)),ma(i,a);const u=new Ct(c.target,a,1,c.sequenceNumber);Ai(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await qn(e,s)}}async function qn(e,t,n){if(!Oe(t))throw t;e.Wr.add(1),await Fe(e),e.Hr.set("Offline"),n||(n=()=>ca(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.Wr.delete(1),await Bn(e)})}function va(e,t){return t().catch(n=>qn(e,n,t))}async function Hn(e){const t=I(e),n=pt(t);let s=t.jr.length>0?t.jr[t.jr.length-1].batchId:-1;for(;Ef(t);)try{const i=await Yl(t.localStore,s);if(i===null){t.jr.length===0&&n.wr();break}s=i.batchId,Tf(t,i)}catch(i){await qn(t,i)}wa(t)&&Ea(t)}function Ef(e){return Dt(e)&&e.jr.length<10}function Tf(e,t){e.jr.push(t);const n=pt(e);n.hr()&&n.Vr&&n.Sr(t.mutations)}function wa(e){return Dt(e)&&!pt(e).ur()&&e.jr.length>0}function Ea(e){pt(e).start()}async function If(e){pt(e).Nr()}async function Sf(e){const t=pt(e);for(const n of e.jr)t.Sr(n.mutations)}async function Af(e,t,n){const s=e.jr.shift(),i=vi.from(s,t,n);await va(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Hn(e)}async function _f(e,t){t&&pt(e).Vr&&await async function(n,s){if(i=s.code,fl(i)&&i!==f.ABORTED){const r=n.jr.shift();pt(n).dr(),await va(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Hn(n)}var i}(e,t),wa(e)&&Ea(e)}async function Nf(e,t){const n=I(e);t?(n.Wr.delete(2),await Bn(n)):t||(n.Wr.add(2),await Fe(n),n.Hr.set("Unknown"))}function Qt(e){return e.Yr||(e.Yr=function(t,n,s){const i=I(t);return i.$r(),new ff(n,i.sr,i.credentials,i.N,s)}(e.datastore,e.asyncQueue,{Si:yf.bind(null,e),Ci:vf.bind(null,e),Rr:wf.bind(null,e)}),e.Gr.push(async t=>{t?(e.Yr.dr(),Ni(e)?_i(e):e.Hr.set("Unknown")):(await e.Yr.stop(),ya(e))})),e.Yr}function pt(e){return e.Xr||(e.Xr=function(t,n,s){const i=I(t);return i.$r(),new df(n,i.sr,i.credentials,i.N,s)}(e.datastore,e.asyncQueue,{Si:If.bind(null,e),Ci:_f.bind(null,e),Cr:Sf.bind(null,e),Dr:Af.bind(null,e)}),e.Gr.push(async t=>{t?(e.Xr.dr(),await Hn(e)):(await e.Xr.stop(),e.jr.length>0&&(y("RemoteStore",`Stopping write stream with ${e.jr.length} pending writes`),e.jr=[]))})),e.Xr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new bi(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ci(e,t){if(dt("AsyncQueue",`${t}: ${e}`),Oe(e))return new v(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=fi(),this.sortedSet=new W(this.comparator)}static emptySet(t){return new Xt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Xt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Xt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(){this.Zr=new W(E.comparator)}track(t){const n=t.doc.key,s=this.Zr.get(n);s?t.type!==0&&s.type===3?this.Zr=this.Zr.insert(n,t):t.type===3&&s.type!==1?this.Zr=this.Zr.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Zr=this.Zr.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Zr=this.Zr.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Zr=this.Zr.remove(n):t.type===1&&s.type===2?this.Zr=this.Zr.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Zr=this.Zr.insert(n,{type:2,doc:t.doc}):T():this.Zr=this.Zr.insert(n,t)}eo(){const t=[];return this.Zr.inorderTraversal((n,s)=>{t.push(s)}),t}}class Yt{constructor(t,n,s,i,r,o,a,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Yt(t,n,Xt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Dn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.no=void 0,this.listeners=[]}}class Cf{constructor(){this.queries=new Ve(t=>Ro(t),Dn),this.onlineState="Unknown",this.so=new Set}}async function Ia(e,t){const n=I(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new bf),i)try{r.no=await n.onListen(s)}catch(o){const a=Ci(o,`Initialization of query '${hi(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.io(n.onlineState),r.no&&t.ro(r.no)&&Di(n)}async function Sa(e,t){const n=I(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Df(e,t){const n=I(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.ro(i)&&(s=!0);o.no=i}}s&&Di(n)}function Rf(e,t,n){const s=I(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function Di(e){e.so.forEach(t=>{t.next()})}class Aa{constructor(t,n,s){this.query=t,this.oo=n,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=s||{}}ro(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Yt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.co?this.uo(t)&&(this.oo.next(t),n=!0):this.ho(t,this.onlineState)&&(this.lo(t),n=!0),this.ao=t,n}onError(t){this.oo.error(t)}io(t){this.onlineState=t;let n=!1;return this.ao&&!this.co&&this.ho(this.ao,t)&&(this.lo(this.ao),n=!0),n}ho(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.fo||!s)&&(!t.docs.isEmpty()||n==="Offline")}uo(t){if(t.docChanges.length>0)return!0;const n=this.ao&&this.ao.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}lo(t){t=Yt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.oo.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t){this.key=t}}class Na{constructor(t){this.key=t}}class kf{constructor(t,n){this.query=t,this.po=n,this.To=null,this.current=!1,this.Eo=R(),this.mutatedKeys=R(),this.Io=ko(t),this.Ao=new Xt(this.Io)}get Ro(){return this.po}bo(t,n){const s=n?n.Po:new Ta,i=n?n.Ao:this.Ao;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=bn(this.query)&&i.size===this.query.limit?i.last():null,u=Cn(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,l)=>{const d=i.get(h),m=Rn(this.query,l)?l:null,S=!!d&&this.mutatedKeys.has(d.key),D=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let P=!1;d&&m?d.data.isEqual(m.data)?S!==D&&(s.track({type:3,doc:m}),P=!0):this.vo(d,m)||(s.track({type:2,doc:m}),P=!0,(c&&this.Io(m,c)>0||u&&this.Io(m,u)<0)&&(a=!0)):!d&&m?(s.track({type:0,doc:m}),P=!0):d&&!m&&(s.track({type:1,doc:d}),P=!0,(c||u)&&(a=!0)),P&&(m?(o=o.add(m),r=D?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),bn(this.query)||Cn(this.query))for(;o.size>this.query.limit;){const h=bn(this.query)?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Ao:o,Po:s,Ln:a,mutatedKeys:r}}vo(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Ao;this.Ao=t.Ao,this.mutatedKeys=t.mutatedKeys;const r=t.Po.eo();r.sort((u,h)=>function(l,d){const m=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return m(l)-m(d)}(u.type,h.type)||this.Io(u.doc,h.doc)),this.Vo(s);const o=n?this.So():[],a=this.Eo.size===0&&this.current?1:0,c=a!==this.To;return this.To=a,r.length!==0||c?{snapshot:new Yt(this.query,t.Ao,i,r,t.mutatedKeys,a===0,c,!1),Do:o}:{Do:o}}io(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new Ta,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(t){return!this.po.has(t)&&!!this.Ao.has(t)&&!this.Ao.get(t).hasLocalMutations}Vo(t){t&&(t.addedDocuments.forEach(n=>this.po=this.po.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.po=this.po.delete(n)),this.current=t.current)}So(){if(!this.current)return[];const t=this.Eo;this.Eo=R(),this.Ao.forEach(s=>{this.Co(s.key)&&(this.Eo=this.Eo.add(s.key))});const n=[];return t.forEach(s=>{this.Eo.has(s)||n.push(new Na(s))}),this.Eo.forEach(s=>{t.has(s)||n.push(new _a(s))}),n}No(t){this.po=t.Gn,this.Eo=R();const n=this.bo(t.documents);return this.applyChanges(n,!0)}xo(){return Yt.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class xf{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Lf{constructor(t){this.key=t,this.ko=!1}}class Of{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new Ve(a=>Ro(a),Dn),this.Fo=new Map,this.Mo=new Set,this.Lo=new W(E.comparator),this.Bo=new Map,this.Uo=new Ti,this.qo={},this.Ko=new Map,this.jo=Wt.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function Mf(e,t){const n=zf(e);let s,i;const r=n.Oo.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.xo();else{const o=await Jl(n.localStore,Nt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Vf(n,t,s,a==="current"),n.isPrimaryClient&&ga(n.remoteStore,o)}return i}async function Vf(e,t,n,s){e.Wo=(h,l,d)=>async function(m,S,D,P){let it=S.view.bo(D);it.Ln&&(it=await ua(m.localStore,S.query,!1).then(({documents:Be})=>S.view.bo(Be,it)));const je=P&&P.targetChanges.get(S.targetId),Rt=S.view.applyChanges(it,m.isPrimaryClient,je);return xa(m,S.targetId,Rt.Do),Rt.snapshot}(e,h,l,d);const i=await ua(e.localStore,t,!0),r=new kf(t,i.Gn),o=r.bo(i.documents),a=Le.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),c=r.applyChanges(o,e.isPrimaryClient,a);xa(e,n,c.Do);const u=new xf(t,n,r);return e.Oo.set(t,u),e.Fo.has(n)?e.Fo.get(n).push(t):e.Fo.set(n,[t]),c.snapshot}async function Ff(e,t){const n=I(e),s=n.Oo.get(t),i=n.Fo.get(s.targetId);if(i.length>1)return n.Fo.set(s.targetId,i.filter(r=>!Dn(r,t))),void n.Oo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ei(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),pa(n.remoteStore,s.targetId),Ri(n,s.targetId)}).catch(Me)):(Ri(n,s.targetId),await Ei(n.localStore,s.targetId,!0))}async function Pf(e,t,n){const s=Kf(e);try{const i=await function(r,o){const a=I(r),c=nt.now(),u=o.reduce((l,d)=>l.add(d.key),R());let h;return a.persistence.runTransaction("Locally write mutations","readwrite",l=>a.Qn.Pn(l,u).next(d=>{h=d;const m=[];for(const S of o){const D=cl(S,h.get(S.key));D!=null&&m.push(new zt(S.key,D,_o(D.value.mapValue),Ht.exists(!0)))}return a.In.addMutationBatch(l,c,m,o)})).then(l=>(l.applyToLocalDocumentSet(h),{batchId:l.batchId,changes:h}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.qo[r.currentUser.toKey()];c||(c=new W(b)),c=c.insert(o,a),r.qo[r.currentUser.toKey()]=c}(s,i.batchId,n),await Pe(s,i.changes),await Hn(s.remoteStore)}catch(i){const r=Ci(i,"Failed to persist write");n.reject(r)}}async function ba(e,t){const n=I(e);try{const s=await Ql(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.Bo.get(r);o&&(C(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ko=!0:i.modifiedDocuments.size>0?C(o.ko):i.removedDocuments.size>0&&(C(o.ko),o.ko=!1))}),await Pe(n,s,t)}catch(s){await Me(s)}}function Ca(e,t,n){const s=I(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Oo.forEach((r,o)=>{const a=o.view.io(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=I(r);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.io(o)&&(c=!0)}),c&&Di(a)}(s.eventManager,t),i.length&&s.$o.Rr(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Uf(e,t,n){const s=I(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.Bo.get(t),r=i&&i.key;if(r){let o=new W(E.comparator);o=o.insert(r,G.newNoDocument(r,N.min()));const a=R().add(r),c=new Pn(N.min(),new Map,new q(b),o,a);await ba(s,c),s.Lo=s.Lo.remove(r),s.Bo.delete(t),ki(s)}else await Ei(s.localStore,t,!1).then(()=>Ri(s,t,n)).catch(Me)}async function $f(e,t){const n=I(e),s=t.batch.batchId;try{const i=await Wl(n.localStore,t);Ra(n,s,null),Da(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Pe(n,i)}catch(i){await Me(i)}}async function jf(e,t,n){const s=I(e);try{const i=await function(r,o){const a=I(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.In.lookupMutationBatch(c,o).next(h=>(C(h!==null),u=h.keys(),a.In.removeMutationBatch(c,h))).next(()=>a.In.performConsistencyCheck(c)).next(()=>a.Qn.Pn(c,u))})}(s.localStore,t);Ra(s,t,n),Da(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Pe(s,i)}catch(i){await Me(i)}}function Da(e,t){(e.Ko.get(t)||[]).forEach(n=>{n.resolve()}),e.Ko.delete(t)}function Ra(e,t,n){const s=I(e);let i=s.qo[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.qo[s.currentUser.toKey()]=i}}function Ri(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.Fo.get(t))e.Oo.delete(s),n&&e.$o.Go(s,n);e.Fo.delete(t),e.isPrimaryClient&&e.Uo.cs(t).forEach(s=>{e.Uo.containsKey(s)||ka(e,s)})}function ka(e,t){e.Mo.delete(t.path.canonicalString());const n=e.Lo.get(t);n!==null&&(pa(e.remoteStore,n),e.Lo=e.Lo.remove(t),e.Bo.delete(n),ki(e))}function xa(e,t,n){for(const s of n)s instanceof _a?(e.Uo.addReference(s.key,t),Bf(e,s)):s instanceof Na?(y("SyncEngine","Document no longer in limbo: "+s.key),e.Uo.removeReference(s.key,t),e.Uo.containsKey(s.key)||ka(e,s.key)):T()}function Bf(e,t){const n=t.key,s=n.path.canonicalString();e.Lo.get(n)||e.Mo.has(s)||(y("SyncEngine","New document in limbo: "+n),e.Mo.add(s),ki(e))}function ki(e){for(;e.Mo.size>0&&e.Lo.size<e.maxConcurrentLimboResolutions;){const t=e.Mo.values().next().value;e.Mo.delete(t);const n=new E(x.fromString(t)),s=e.jo.next();e.Bo.set(s,new Lf(n)),e.Lo=e.Lo.insert(n,s),ga(e.remoteStore,new Ct(Nt(ui(n.path)),s,2,Zs.T))}}async function Pe(e,t,n){const s=I(e),i=[],r=[],o=[];s.Oo.isEmpty()||(s.Oo.forEach((a,c)=>{o.push(s.Wo(c,t,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),i.push(u);const h=wi.kn(c.targetId,u);r.push(h)}}))}),await Promise.all(o),s.$o.Rr(i),await async function(a,c){const u=I(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(c,l=>g.forEach(l.Nn,d=>u.persistence.referenceDelegate.addReference(h,l.targetId,d)).next(()=>g.forEach(l.xn,d=>u.persistence.referenceDelegate.removeReference(h,l.targetId,d)))))}catch(h){if(!Oe(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const d=u.Un.get(l),m=d.snapshotVersion,S=d.withLastLimboFreeSnapshotVersion(m);u.Un=u.Un.insert(l,S)}}}(s.localStore,r))}async function qf(e,t){const n=I(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await aa(n.localStore,t);n.currentUser=t,function(i,r){i.Ko.forEach(o=>{o.forEach(a=>{a.reject(new v(f.CANCELLED,r))})}),i.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Pe(n,s.Wn)}}function Hf(e,t){const n=I(e),s=n.Bo.get(t);if(s&&s.ko)return R().add(s.key);{let i=R();const r=n.Fo.get(t);if(!r)return i;for(const o of r){const a=n.Oo.get(o);i=i.unionWith(a.view.Ro)}return i}}function zf(e){const t=I(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ba.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Uf.bind(null,t),t.$o.Rr=Df.bind(null,t.eventManager),t.$o.Go=Rf.bind(null,t.eventManager),t}function Kf(e){const t=I(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$f.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=jf.bind(null,t),t}class Gf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=jn(t.databaseInfo.databaseId),this.sharedClientState=this.Ho(t),this.persistence=this.Jo(t),await this.persistence.start(),this.gcScheduler=this.Yo(t),this.localStore=this.Xo(t)}Yo(t){return null}Xo(t){return Gl(this.persistence,new zl,t.initialUser,this.N)}Jo(t){return new rf(Ii.Ns,this.N)}Ho(t){return new af}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Wf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ca(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=qf.bind(null,this.syncEngine),await Nf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Cf}createDatastore(t){const n=jn(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new lf(i));var i;return function(r,o,a){return new gf(r,o,a)}(t.credentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Ca(this.syncEngine,a,0),o=la.bt()?new la:new cf,new mf(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,u){const h=new Of(s,i,r,o,a,c);return u&&(h.Qo=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=I(t);y("RemoteStore","RemoteStore shutting down."),n.Wr.add(5),await Fe(n),n.zr.shutdown(),n.Hr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.tc(this.observer.next,t)}error(t){this.observer.error?this.tc(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}ec(){this.muted=!0}tc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t,n,s){this.credentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=J.UNAUTHENTICATED,this.clientId=yo.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async i=>{y("FirestoreClient","Received user=",i.uid),await this.credentialListener(i),this.user=i})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(n){const s=Ci(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Xf(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await aa(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Yf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Jf(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>async function(r,o){const a=I(r);a.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const c=Dt(a);a.Wr.add(3),await Fe(a),c&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await Bn(a)}(t.remoteStore,i)),e.onlineComponents=t}async function Jf(e){return e.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await Xf(e,new Gf)),e.offlineComponents}async function Oa(e){return e.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await Yf(e,new Wf)),e.onlineComponents}function Zf(e){return Oa(e).then(t=>t.syncEngine)}async function Ma(e){const t=await Oa(e),n=t.eventManager;return n.onListen=Mf.bind(null,t.syncEngine),n.onUnlisten=Ff.bind(null,t.syncEngine),n}function td(e,t,n={}){const s=new ut;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new La({next:l=>{r.enqueueAndForget(()=>Sa(i,h));const d=l.docs.has(o);!d&&l.fromCache?c.reject(new v(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&l.fromCache&&a&&a.source==="server"?c.reject(new v(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new Aa(ui(o.path),u,{includeMetadataChanges:!0,fo:!0});return Ia(i,h)}(await Ma(e),e.asyncQueue,t,n,s)),s.promise}function ed(e,t,n={}){const s=new ut;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new La({next:l=>{r.enqueueAndForget(()=>Sa(i,h)),l.fromCache&&a.source==="server"?c.reject(new v(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new Aa(o,u,{includeMetadataChanges:!0,fo:!0});return Ia(i,h)}(await Ma(e),e.asyncQueue,t,n,s)),s.promise}class nd{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ue{constructor(t,n){this.projectId=t,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ue&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(e,t,n){if(!n)throw new v(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function sd(e,t,n,s){if(t===!0&&s===!0)throw new v(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Pa(e){if(!E.isDocumentKey(e))throw new v(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ua(e){if(E.isDocumentKey(e))throw new v(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function xi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function Jt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new v(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xi(e);throw new v(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new v(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,sd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $a({}),this._settingsFrozen=!1,t instanceof Ue?this._databaseId=t:(this._app=t,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new v(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ue(s.options.projectId)}(t))}get app(){if(!this._app)throw new v(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $a(t),t.credentials!==void 0&&(this._credentials=function(n){if(!n)return new kh;switch(n.type){case"gapi":const s=n.client;return C(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Oh(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new v(f.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Va.get(t);n&&(y("ComponentProvider","Removing Datastore"),Va.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new st(this.firestore,t,this._key)}}class zn{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new zn(this.firestore,t,this._query)}}class mt extends zn{constructor(t,n,s){super(t,n,ui(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new st(this.firestore,null,new E(t))}withConverter(t){return new mt(this.firestore,t,this._path)}}function eg(e,t,...n){if(e=re(e),Fa("collection","path",t),e instanceof Li){const s=x.fromString(t,...n);return Ua(s),new mt(e,null,s)}{if(!(e instanceof st||e instanceof mt))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(x.fromString(t,...n));return Ua(s),new mt(e.firestore,null,s)}}function ng(e,t,...n){if(e=re(e),arguments.length===1&&(t=yo.I()),Fa("doc","path",t),e instanceof Li){const s=x.fromString(t,...n);return Pa(s),new st(e,null,new E(s))}{if(!(e instanceof st||e instanceof mt))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(x.fromString(t,...n));return Pa(s),new st(e.firestore,e instanceof mt?e.converter:null,new E(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new fa(this,"async_queue_retry"),this.Rc=()=>{const n=Si();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ar.tr()};const t=Si();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.bc(),this.Pc(t)}enterRestrictedMode(t){if(!this.gc){this.gc=!0,this.Ic=t||!1;const n=Si();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Rc)}}enqueue(t){if(this.bc(),this.gc)return new Promise(()=>{});const n=new ut;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.mc.push(t),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(t){if(!Oe(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(t){const n=this._c.then(()=>(this.Ec=!0,t().catch(s=>{this.Tc=s,this.Ec=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw dt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Ec=!1,s))));return this._c=n,n}enqueueAfterDelay(t,n,s){this.bc(),this.Ac.indexOf(t)>-1&&(n=0);const i=bi.createAndSchedule(this,t,n,s,r=>this.Vc(r));return this.yc.push(i),i}bc(){this.Tc&&T()}verifyOperationInProgress(){}async Sc(){let t;do t=this._c,await t;while(t!==this._c)}Dc(t){for(const n of this.yc)if(n.timerId===t)return!0;return!1}Cc(t){return this.Sc().then(()=>{this.yc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.yc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Sc()})}Nc(t){this.Ac.push(t)}Vc(t){const n=this.yc.indexOf(t);this.yc.splice(n,1)}}class Kn extends Li{constructor(t,n){super(t,n),this.type="firestore",this._queue=new id,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ja(this),this._firestoreClient.terminate()}}function sg(e=wu()){return pu(e,"firestore").getImmediate()}function Oi(e){return e._firestoreClient||ja(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ja(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new nd(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Qf(e._credentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new v(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Zt(K.fromBase64String(t))}catch(n){throw new v(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Zt(K.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new v(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new v(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return b(this._lat,t._lat)||b(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=/^__.*__$/;class od{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new zt(t,this.data,this.fieldMask,n,this.fieldTransforms):new Vn(t,this.data,n,this.fieldTransforms)}}function qa(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Fi{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.N=s,this.ignoreUndefinedProperties=i,r===void 0&&this.xc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(t){return new Fi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.$c({path:s,Fc:!1});return i.Mc(t),i}Lc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.$c({path:s,Fc:!1});return i.xc(),i}Bc(t){return this.$c({path:void 0,Fc:!0})}Uc(t){return Gn(t,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Mc(this.path.get(t))}Mc(t){if(t.length===0)throw this.Uc("Document fields must not be empty");if(qa(this.kc)&&rd.test(t))throw this.Uc('Document fields cannot begin and end with "__"')}}class ad{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.N=s||jn(t)}jc(t,n,s,i=!1){return new Fi({kc:t,methodName:n,Kc:s,path:Z.emptyPath(),Fc:!1,qc:i},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function cd(e){const t=e._freezeSettings(),n=jn(e._databaseId);return new ad(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ud(e,t,n,s,i,r={}){const o=e.jc(r.merge||r.mergeFields?2:0,t,n,i);Ga("Data must be an object, but it was:",o,s);const a=za(s,o);let c,u;if(r.merge)c=new ti(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const l of r.mergeFields){const d=hd(t,l,n);if(!o.contains(d))throw new v(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);fd(h,d)||h.push(d)}c=new ti(h),u=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,u=o.fieldTransforms;return new od(new rt(a),c,u)}function Ha(e,t){if(Ka(e=re(e)))return Ga("Unsupported field value:",t,e),za(e,t);if(e instanceof Ba)return function(n,s){if(!qa(s.kc))throw s.Uc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Uc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Fc&&t.kc!==4)throw t.Uc("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Ha(o,s.Bc(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=re(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return nl(s.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=nt.fromDate(n);return{timestampValue:$n(s.N,i)}}if(n instanceof nt){const i=new nt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:$n(s.N,i)}}if(n instanceof Vi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Zt)return{bytesValue:Jo(s.N,n._byteString)};if(n instanceof st){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.Uc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:di(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.Uc(`Unsupported field value: ${xi(n)}`)}(e,t)}function za(e,t){const n={};return wo(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$t(e,(s,i)=>{const r=Ha(i,t.Oc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Ka(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof nt||e instanceof Vi||e instanceof Zt||e instanceof st||e instanceof Ba)}function Ga(e,t,n){if(!Ka(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=xi(n);throw s==="an object"?t.Uc(e+" a custom object"):t.Uc(e+" "+s)}}function hd(e,t,n){if((t=re(t))instanceof Mi)return t._internalPath;if(typeof t=="string")return Wa(e,t);throw Gn("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const ld=new RegExp("[~\\*/\\[\\]]");function Wa(e,t,n){if(t.search(ld)>=0)throw Gn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Mi(...t.split("."))._internalPath}catch{throw Gn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Gn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new v(f.INVALID_ARGUMENT,a+e+c)}function fd(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new dd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Xa("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dd extends Qa{data(){return super.data()}}function Xa(e,t){return typeof t=="string"?Wa(e,t):t instanceof Mi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ya extends Qa{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Wn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Xa("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Wn extends Ya{data(t={}){return super.data(t)}}class gd{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new $e(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Wn(this._firestore,this._userDataWriter,s.key,s,new $e(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new v(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Wn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new $e(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Wn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new $e(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:pd(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pd(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(e){if(Cn(e)&&e.explicitOrderBy.length===0)throw new v(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function ig(e,...t){for(const n of t)e=n._apply(e);return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{convertValue(t,n="none"){switch(_t(t)){case 0:return null;case 1:return t.booleanValue;case 2:return O(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(jt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw T()}}convertObject(t,n){const s={};return $t(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new Vi(O(t.latitude),O(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=To(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ne(t));default:return null}}convertTimestamp(t){const n=gt(t);return new nt(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=x.fromString(t);C(ra(s));const i=new Ue(s.get(1),s.get(3)),r=new E(s.popFirst(5));return i.isEqual(n)||dt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(e){e=Jt(e,st);const t=Jt(e.firestore,Kn);return td(Oi(t),e._key).then(n=>Ed(t,e,n))}class Ja extends yd{constructor(t){super(),this.firestore=t}convertBytes(t){return new Zt(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new st(this.firestore,null,n)}}function og(e){e=Jt(e,zn);const t=Jt(e.firestore,Kn),n=Oi(t),s=new Ja(t);return md(e._query),ed(n,e._query).then(i=>new gd(t,s,e,i))}function ag(e,t,n){e=Jt(e,st);const s=Jt(e.firestore,Kn),i=vd(e.converter,t,n);return wd(s,[ud(cd(s),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,Ht.none())])}function wd(e,t){return function(n,s){const i=new ut;return n.asyncQueue.enqueueAndForget(async()=>Pf(await Zf(n),s,i)),i.promise}(Oi(e),t)}function Ed(e,t,n){const s=n.docs.get(t._key),i=new Ja(e);return new Ya(e,i,t._key,s,new $e(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){Pt=n})(vu),os(new We("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new Kn(i,new xh(n.getProvider("auth-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),xt(go,"3.3.0",e),xt(go,"3.3.0","esm2017")})();var Qn,Td=new Uint8Array(16);function Id(){if(!Qn&&(Qn=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Qn))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Qn(Td)}var Sd=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Ad(e){return typeof e=="string"&&Sd.test(e)}var H=[];for(var Pi=0;Pi<256;++Pi)H.push((Pi+256).toString(16).substr(1));function _d(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(H[e[t+0]]+H[e[t+1]]+H[e[t+2]]+H[e[t+3]]+"-"+H[e[t+4]]+H[e[t+5]]+"-"+H[e[t+6]]+H[e[t+7]]+"-"+H[e[t+8]]+H[e[t+9]]+"-"+H[e[t+10]]+H[e[t+11]]+H[e[t+12]]+H[e[t+13]]+H[e[t+14]]+H[e[t+15]]).toLowerCase();if(!Ad(n))throw TypeError("Stringified UUID is invalid");return n}function cg(e,t,n){e=e||{};var s=e.random||(e.rng||Id)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=s[i];return t}return _d(s)}export{$d as A,tc as B,Jd as C,Nd as D,Cd as E,Dd as F,bd as G,cc as H,te as I,Od as J,kd as K,tg as L,wu as M,Zd as N,sg as O,ng as P,ag as Q,rg as R,Yd as S,ig as T,eg as U,og as V,cg as W,ee as X,Ud as Y,lc as a,Md as b,Vd as c,uc as d,hc as e,Rd as f,gc as g,Pd as h,Xd as i,Wd as j,xd as k,Ld as l,Qd as m,Fd as n,wc as o,Kd as p,Gd as q,qd as r,nc as s,Xn as t,zd as u,Ec as v,Hd as w,vc as x,Bd as y,jd as z};
