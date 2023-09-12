import{_ as s,c as a,o as n,a as l}from"./chunks/framework.07408668.js";const o=JSON.parse('{"title":"Quick Start","description":"","frontmatter":{"footer":false,"title":"Quick Start"},"headers":[],"relativePath":"guide/quick-start.md","filePath":"guide/quick-start.md"}'),p={name:"guide/quick-start.md"},e=[l('<h1 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-label="Permalink to &quot;Quick Start {#quick-start}&quot;">​</a></h1><h2 id="to-use-the-agio-sdk-follow-these-steps" tabindex="-1">To use the Agio SDK, follow these steps: <a class="header-anchor" href="#to-use-the-agio-sdk-follow-these-steps" aria-label="Permalink to &quot;To use the Agio SDK, follow these steps:&quot;">​</a></h2><ol><li>Install the Agio SDK using npm or yarn:</li></ol><p><small><strong>With npm:</strong></small></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">agio-sdk</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">agio-sdk</span></span></code></pre></div><p><small><strong>...or with yarn:</strong></small></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">agio-sdk</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">agio-sdk</span></span></code></pre></div><ol start="2"><li>Import the <code>createAgioSdk</code> function from the Agio SDK and create an instance of the SDK by passing in a configuration object:</li></ol><p><small><strong>Simple:</strong></small></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createAgioSdk } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;agio-sdk&quot;</span><span style="color:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">sdk</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createAgioSdk</span><span style="color:#E1E4E8;">({</span></span>\n<span class="line"><span style="color:#E1E4E8;">  element: </span><span style="color:#9ECBFF;">&quot;#iframe&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  apiToken: </span><span style="color:#9ECBFF;">&quot;00000000-0000-0000-0000-000000000000&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  externalUserId: </span><span style="color:#9ECBFF;">&quot;example-9ebc4a1a&quot;</span></span>\n<span class="line"><span style="color:#E1E4E8;">});</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;">// html: &lt;div id=&quot;iframe&quot;&gt;&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createAgioSdk } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;agio-sdk&quot;</span><span style="color:#24292E;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">sdk</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createAgioSdk</span><span style="color:#24292E;">({</span></span>\n<span class="line"><span style="color:#24292E;">  element: </span><span style="color:#032F62;">&quot;#iframe&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  apiToken: </span><span style="color:#032F62;">&quot;00000000-0000-0000-0000-000000000000&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  externalUserId: </span><span style="color:#032F62;">&quot;example-9ebc4a1a&quot;</span></span>\n<span class="line"><span style="color:#24292E;">});</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;">// html: &lt;div id=&quot;iframe&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><p><small><strong>Advanced:</strong></small></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createAgioSdk } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;agio-sdk&quot;</span><span style="color:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">sdk</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createAgioSdk</span><span style="color:#E1E4E8;">({</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** </span><span style="color:#F97583;">@description</span><span style="color:#6A737D;"> Element or string */</span></span>\n<span class="line"><span style="color:#E1E4E8;">  element: </span><span style="color:#9ECBFF;">&quot;#iframe&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** </span><span style="color:#F97583;">@description</span><span style="color:#6A737D;"> user id in your database */</span></span>\n<span class="line"><span style="color:#E1E4E8;">  externalUserId: </span><span style="color:#9ECBFF;">&quot;example-9ebc4a1a&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** </span><span style="color:#F97583;">@description</span><span style="color:#6A737D;"> pre-fill wallet address */</span></span>\n<span class="line"><span style="color:#E1E4E8;">  walletAddress: </span><span style="color:#9ECBFF;">&quot;0x0000000000000000000000000000000000000000&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** </span><span style="color:#F97583;">@description</span><span style="color:#6A737D;"> your Agio SDK API token */</span></span>\n<span class="line"><span style="color:#E1E4E8;">  apiToken: </span><span style="color:#9ECBFF;">&quot;00000000-0000-0000-0000-000000000000&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** </span><span style="color:#F97583;">@description</span><span style="color:#6A737D;"> register callbacks */</span></span>\n<span class="line"><span style="color:#E1E4E8;">  on: {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">userLoad</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">userLoad</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>\n<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;[userLoad]&quot;</span><span style="color:#E1E4E8;">, { userLoad });</span></span>\n<span class="line"><span style="color:#E1E4E8;">    },</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">userData</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">userData</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>\n<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;[userData]&quot;</span><span style="color:#E1E4E8;">, { userData });</span></span>\n<span class="line"><span style="color:#E1E4E8;">    },</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>\n<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;[error]&quot;</span><span style="color:#E1E4E8;">, { error });</span></span>\n<span class="line"><span style="color:#E1E4E8;">    },</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">iframe</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>\n<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;[load]&quot;</span><span style="color:#E1E4E8;">, { iframe });</span></span>\n<span class="line"><span style="color:#E1E4E8;">    },</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">unload</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">iframe</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>\n<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;[unload]&quot;</span><span style="color:#E1E4E8;">, { iframe });</span></span>\n<span class="line"><span style="color:#E1E4E8;">    },</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>\n<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;[mount]&quot;</span><span style="color:#E1E4E8;">, { state });</span></span>\n<span class="line"><span style="color:#E1E4E8;">    },</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">unmount</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>\n<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;[unmount]&quot;</span><span style="color:#E1E4E8;">, { state });</span></span>\n<span class="line"><span style="color:#E1E4E8;">    }</span></span>\n<span class="line"><span style="color:#E1E4E8;">  }</span></span>\n<span class="line"><span style="color:#E1E4E8;">});</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;">/** </span><span style="color:#F97583;">@description</span><span style="color:#6A737D;"> or register callbacks through the sdk object */</span></span>\n<span class="line"><span style="color:#E1E4E8;">sdk.on.</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">iframe</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>\n<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;[load]&quot;</span><span style="color:#E1E4E8;">, { iframe });</span></span>\n<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createAgioSdk } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;agio-sdk&quot;</span><span style="color:#24292E;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">sdk</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createAgioSdk</span><span style="color:#24292E;">({</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** </span><span style="color:#D73A49;">@description</span><span style="color:#6A737D;"> Element or string */</span></span>\n<span class="line"><span style="color:#24292E;">  element: </span><span style="color:#032F62;">&quot;#iframe&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** </span><span style="color:#D73A49;">@description</span><span style="color:#6A737D;"> user id in your database */</span></span>\n<span class="line"><span style="color:#24292E;">  externalUserId: </span><span style="color:#032F62;">&quot;example-9ebc4a1a&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** </span><span style="color:#D73A49;">@description</span><span style="color:#6A737D;"> pre-fill wallet address */</span></span>\n<span class="line"><span style="color:#24292E;">  walletAddress: </span><span style="color:#032F62;">&quot;0x0000000000000000000000000000000000000000&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** </span><span style="color:#D73A49;">@description</span><span style="color:#6A737D;"> your Agio SDK API token */</span></span>\n<span class="line"><span style="color:#24292E;">  apiToken: </span><span style="color:#032F62;">&quot;00000000-0000-0000-0000-000000000000&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** </span><span style="color:#D73A49;">@description</span><span style="color:#6A737D;"> register callbacks */</span></span>\n<span class="line"><span style="color:#24292E;">  on: {</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">userLoad</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">userLoad</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>\n<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;[userLoad]&quot;</span><span style="color:#24292E;">, { userLoad });</span></span>\n<span class="line"><span style="color:#24292E;">    },</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">userData</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">userData</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>\n<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;[userData]&quot;</span><span style="color:#24292E;">, { userData });</span></span>\n<span class="line"><span style="color:#24292E;">    },</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">error</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>\n<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;[error]&quot;</span><span style="color:#24292E;">, { error });</span></span>\n<span class="line"><span style="color:#24292E;">    },</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">load</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">iframe</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>\n<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;[load]&quot;</span><span style="color:#24292E;">, { iframe });</span></span>\n<span class="line"><span style="color:#24292E;">    },</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">unload</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">iframe</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>\n<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;[unload]&quot;</span><span style="color:#24292E;">, { iframe });</span></span>\n<span class="line"><span style="color:#24292E;">    },</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">state</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>\n<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;[mount]&quot;</span><span style="color:#24292E;">, { state });</span></span>\n<span class="line"><span style="color:#24292E;">    },</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">unmount</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">state</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>\n<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;[unmount]&quot;</span><span style="color:#24292E;">, { state });</span></span>\n<span class="line"><span style="color:#24292E;">    }</span></span>\n<span class="line"><span style="color:#24292E;">  }</span></span>\n<span class="line"><span style="color:#24292E;">});</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;">/** </span><span style="color:#D73A49;">@description</span><span style="color:#6A737D;"> or register callbacks through the sdk object */</span></span>\n<span class="line"><span style="color:#24292E;">sdk.on.</span><span style="color:#6F42C1;">load</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">iframe</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>\n<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;[load]&quot;</span><span style="color:#24292E;">, { iframe });</span></span>\n<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><ol start="3"><li>You can now mount the iframe by calling the <code>mount</code> method on the SDK instance, passing in the element that you want to mount it to:</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">sdk.</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#iframe&quot;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">sdk.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;#iframe&quot;</span><span style="color:#24292E;">);</span></span></code></pre></div><ol start="4"><li>You can unmount the iframe by calling the <code>unmount</code> method on the SDK instance:</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">sdk.</span><span style="color:#B392F0;">unmount</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">sdk.</span><span style="color:#6F42C1;">unmount</span><span style="color:#24292E;">();</span></span></code></pre></div>',16)];const t=s(p,[["render",function(s,l,o,p,t,c){return n(),a("div",null,e)}]]);export{o as __pageData,t as default};