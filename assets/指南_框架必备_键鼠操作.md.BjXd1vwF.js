import{_ as s,c as i,o as a,a7 as e}from"./chunks/framework.O0XigUbn.js";const g=JSON.parse('{"title":"键鼠操作","description":"","frontmatter":{},"headers":[],"relativePath":"指南/框架必备/键鼠操作.md","filePath":"指南/框架必备/键鼠操作.md","lastUpdated":1713583771000}'),t={name:"指南/框架必备/键鼠操作.md"},n=e(`<h1 id="键鼠操作" tabindex="-1">键鼠操作 <a class="header-anchor" href="#键鼠操作" aria-label="Permalink to &quot;键鼠操作&quot;">​</a></h1><p><code>YouQu</code> 键鼠操作模块集成了多个键鼠操作的方案：<code>PyAutoGUI</code>、<code>Xdotool</code>、<code>wayland_autotool</code>；</p><p>有同学肯定要问，我之前就只用 <code>PyAutoGUI</code> 也都挺好的，好像用不到这么多键鼠操作的东西吧；</p><p>任何模块当然是希望越简洁通用越好，但问题是没有一种方案是通用的，它们都有自己存在的问题或者说不适用的场景，如果你还没有遇到，只能说使用的场景还不够多。</p><h2 id="常规键鼠操作" tabindex="-1">常规键鼠操作 <a class="header-anchor" href="#常规键鼠操作" aria-label="Permalink to &quot;常规键鼠操作&quot;">​</a></h2><p><code>YouQu</code> 的键鼠操作模块主要有两个：<code>MouseKey</code>、<code>ShortCut</code></p><p>分别是 <strong>键鼠的基本操作模块</strong> 和 <strong>快捷键模块</strong>，基本上你能用到的键鼠操作，这里都包含了，在用例里面只需要通过方法层的类对象直接调用即可，比如：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> apps.autotest_deepin_music.widget.deepin_music_widget </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DeepinMusicWidget</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DeepinMusicWidget.click()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DeepinMusicWidget.ctrl_c()</span></span></code></pre></div><p>当然你也可以直接通过 <code>src</code> 导入使用：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Src</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Src.click()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Src.ctrl_c()</span></span></code></pre></div><p>再或者直接导入键鼠模块使用：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src.mouse_key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MouseKey</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src.shortcut </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ShortCut</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MouseKey.click()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ShortCut.ctrl_c()</span></span></code></pre></div><p>我们<strong>推荐第一种</strong>使用方法，因为你写用例层肯定是会导入方法层出口类的，你不需要有额外的导入代码即可使用到所有的方法。</p><h2 id="特殊场景键鼠操作" tabindex="-1">特殊场景键鼠操作 <a class="header-anchor" href="#特殊场景键鼠操作" aria-label="Permalink to &quot;特殊场景键鼠操作&quot;">​</a></h2><p>一些特殊场景下，无法使用上述的键鼠工具，比如在注销登录界面（没有进入系统），调用上述方法会报错，我们提供了另外一种解决方案：<code>ydotool</code></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src.mouse_key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MouseKey</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MouseKey.press_key(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;enter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">_ydotool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>此方案用到的场景不多，目前仅对 <code>press_key</code> 方法加入了此功能，如果还需要其他的操作方法，请提 <code>issues</code> 或 <code>PR</code>；</p>`,17),p=[n];function l(h,o,d,c,k,r){return a(),i("div",null,p)}const y=s(t,[["render",l]]);export{g as __pageData,y as default};
