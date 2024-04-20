import{_ as s,c as i,o as a,a7 as e}from"./chunks/framework.CPntGteo.js";const E=JSON.parse('{"title":"全局配置 - setting.conf","description":"","frontmatter":{},"headers":[],"relativePath":"指南/环境/全局配置.md","filePath":"指南/环境/全局配置.md","lastUpdated":1713583771000}'),t={name:"指南/环境/全局配置.md"},n=e(`<h1 id="全局配置-setting-conf" tabindex="-1">全局配置 - setting.conf <a class="header-anchor" href="#全局配置-setting-conf" aria-label="Permalink to &quot;全局配置 - setting.conf&quot;">​</a></h1><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><p>全局配置模块 <code>setting</code> 包含了以下配置文件：</p><p>（1）<code>ini</code> 配置文件</p><p>主要配置一些全局的配置项，譬如：失败重跑次数、是否失败录屏、单条用例超时时间、会话超时时间、执行时日志级别、生成的报告类型、以及分布式执行的一些策略配置项等等。</p><p>（2）<code>py</code> 配置文件</p><p>主要提供配置文件读取、动态获取一些常量（如项目根目录绝对路径 <code>(BASE_DIR)</code>、系统架构（<code>SYS_FRAME</code>）、时间字符串（<code>strftime</code>）、本机 <code>USERNAME</code> <code>IP</code> 等等）、公共 URL 等。</p><p>一些支持人工修改或自定义的配置项都在 <code>ini</code> 配置文件里面，<code>py</code> 文件是不需要人工去修改的；</p><h2 id="配置对象获取" tabindex="-1">配置对象获取 <a class="header-anchor" href="#配置对象获取" aria-label="Permalink to &quot;配置对象获取&quot;">​</a></h2><p>导入全局配置对象</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> setting </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> conf</span></span></code></pre></div><p>通过 <code>conf</code> 对象能获取到所有可获取的配置项的值，比如：</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">conf.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PASSWORD</span></span></code></pre></div><p>这样可以获取到 <a href="https://github.com/linuxdeepin/youqu/blob/master/setting/globalconfig.ini" target="_blank" rel="noreferrer">globalconfig.ini</a> 配置文件中 <code>PASSWORD</code> 配置的值。</p><p>除了上面这种导入方式，还可以这样导入：</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> setting.globalconfig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GlobalConfig</span></span></code></pre></div><p><code>GlobalConfig</code> 也是全局配置对象，实际上 <code>conf</code> 是 <code>GlobalConfig</code> 的别名，你可以根据自己喜欢选择用哪个；</p><h2 id="应用库配置对象" tabindex="-1">应用库配置对象 <a class="header-anchor" href="#应用库配置对象" aria-label="Permalink to &quot;应用库配置对象&quot;">​</a></h2><p>所有应用库配置对象都是继承框架的全局配置类的:</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> setting.globalconfig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _GlobalConfig</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _Config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_GlobalConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    pass</span></span></code></pre></div><p>这样在子项目就可以使用到所有的全局配置。</p>`,21),p=[n];function o(l,h,c,d,r,k){return a(),i("div",null,p)}const y=s(t,[["render",o]]);export{E as __pageData,y as default};
