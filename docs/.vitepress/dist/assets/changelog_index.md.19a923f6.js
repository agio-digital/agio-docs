import{_ as s,o as n,c as a,a as l}from"./app.f25bee55.js";const e=JSON.parse('{"title":"Changelog","description":"","frontmatter":{},"headers":[{"level":2,"title":"Version 1.1.6","slug":"version-1-1-6","link":"#version-1-1-6","children":[]},{"level":2,"title":"Version 1.1.5","slug":"version-1-1-5","link":"#version-1-1-5","children":[]}],"relativePath":"changelog/index.md"}'),t={name:"changelog/index.md"},o=[l('<h1 id="changelog" tabindex="-1">Changelog <a class="header-anchor" href="#changelog" aria-hidden="true">#</a></h1><h2 id="version-1-1-6" tabindex="-1">Version 1.1.6 <a class="header-anchor" href="#version-1-1-6" aria-hidden="true">#</a></h2><p><em>(no breaking changes)</em></p><ol><li>Moved docs to <a href="https://docs.agiodigital.com" target="_blank" rel="noreferrer">docs.agiodigital.com</a></li></ol><h2 id="version-1-1-5" tabindex="-1">Version 1.1.5 <a class="header-anchor" href="#version-1-1-5" aria-hidden="true">#</a></h2><p><em>(no breaking changes)</em></p><ol><li>devDep: generated updated types for <code>ClientUserQueryResult</code>, <code>ClientQueryResult</code> and <code>ClientUserSubscriptionResult</code> (doesn&#39;t affect SDK)</li><li>devDep: ability to run npm scripts codegen sub-commands <code>yarn codegen:download</code>, <code>yarn codegen:generare</code>, <code>yarn codegen</code> (doesn&#39;t affect SDK)</li><li>devDep: import types with type keyword. ex: <code>import type { foo } from &#39;bar&#39;</code> (doesn&#39;t affect SDK)</li><li><strong>SDK:</strong> it is recommended to use type <code>SdkConfig</code> instead of <code>Config</code> for better intellisense support. <code>Config</code> is marked as deprecated</li><li><strong>SDK:</strong> added new properties to <code>SdkConfig</code> interface. Use these to initialize the SDK widget with selected language, KYC/KYB, address disabled alternative KYC flow</li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SdkConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...other properties</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">  * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">description</span><span style="color:#676E95;font-style:italic;"> 2-letter ISO 639-1 language code, case-insensitive</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">  * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">example</span><span style="color:#676E95;font-style:italic;"> &quot;en&quot;</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">  * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">example</span><span style="color:#676E95;font-style:italic;"> &quot;pt-BR&quot;</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">  */</span></span>\n<span class="line"><span style="color:#A6ACCD;">  lang?</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">description</span><span style="color:#676E95;font-style:italic;"> disable wallet address input field, preventing user from changing it</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">example</span><span style="color:#676E95;font-style:italic;"> true</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>\n<span class="line"><span style="color:#A6ACCD;">  walletAddressDisabled</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> boolean;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">description</span><span style="color:#676E95;font-style:italic;"> use KYB flow instead of KYC</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">example</span><span style="color:#676E95;font-style:italic;"> true</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>\n<span class="line"><span style="color:#A6ACCD;">  kyb</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> boolean;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">description</span><span style="color:#676E95;font-style:italic;"> use alternative KYC level</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   * In case a user can&#39;t provide a valid ID document (passport), the alternative KYC level can be used</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">example</span><span style="color:#676E95;font-style:italic;"> false</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>\n<span class="line"><span style="color:#A6ACCD;">  useAlternativeKycLevel</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> boolean;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div>',8)];const p=s(t,[["render",function(s,l,e,t,p,i){return n(),a("div",null,o)}]]);export{e as __pageData,p as default};
