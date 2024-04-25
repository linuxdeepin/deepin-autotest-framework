import{_ as s,c as a,o as i,a7 as n}from"./chunks/framework.B8l-RbIf.js";const E=JSON.parse('{"title":"Wayland 适配","description":"","frontmatter":{},"headers":[],"relativePath":"指南/特色功能/Wayland适配.md","filePath":"指南/特色功能/Wayland适配.md","lastUpdated":1713583771000}'),e={name:"指南/特色功能/Wayland适配.md"},l=n(`<h1 id="wayland-适配" tabindex="-1">Wayland 适配 <a class="header-anchor" href="#wayland-适配" aria-label="Permalink to &quot;Wayland 适配&quot;">​</a></h1><p><code>Wayland</code> 下自动化主要问题是 <code>X11</code> 下的键鼠操作方法无法使用，比如 <code>Xdotool</code>、 <code>PyAutoGUI</code>、<code>Xwininfo</code> 等等；</p><p>YouQu 在 <code>Wayland</code> 下兼容适配，<code>env.sh</code> 在 <code>Wayland</code> 下执行时会安装自研的键鼠操作服务（可能存在一些依赖报错，按照注释解决即可），框架核心库也针对性的做了适配，上层用例完全不用关心机器是<code>Wayland</code> 还是 <code>X11</code>，框架会根据执行时状态自动判断走不同的逻辑；</p><p>简单讲就是，应用库只需要维护一套用例脚本即可。</p><p>【用例兼容】</p><p>因为 <code>Wayland</code> 下有些应用的界面显示和功能本身存在一些差异，用例层可能需要对这部分用例做逻辑判断，使用全局配置里面的常量进行逻辑编写即可：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> setting </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># GlobalConfig.IS_WAYLAND 获取到当前的显示服务器（bool）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 应用库 Config 继承 GlobalConfig</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> conf.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">IS_WAYLAND</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    pass</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> conf.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">IS_X11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    pass</span></span></code></pre></div><p>比如用例里面如果断言的图片不同：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> conf.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">IS_WAYLAND</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.assert_image_exist(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wayland_XXX&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.assert_image_exist(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;x11_XXX&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>这样这条用例脚本在 <code>Wayland</code> 和 <code>X11</code> 下都可以跑，so easy 是不是？完全没必要专门拉新分支进行 <code>Wayland</code> 适配。</p>`,10),t=[l];function p(h,d,k,o,c,r){return i(),a("div",null,t)}const g=s(e,[["render",p]]);export{E as __pageData,g as default};
