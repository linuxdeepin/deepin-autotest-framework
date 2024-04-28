import{_ as i,c as s,o as a,U as t}from"./chunks/framework.Ci8knzNI.js";const g=JSON.parse('{"title":"相对坐标定位","description":"","frontmatter":{},"headers":[],"relativePath":"指南/元素定位/相对坐标定位.md","filePath":"指南/元素定位/相对坐标定位.md","lastUpdated":1713583771000}'),n={name:"指南/元素定位/相对坐标定位.md"},p=t(`<h1 id="相对坐标定位" tabindex="-1">相对坐标定位 <a class="header-anchor" href="#相对坐标定位" aria-label="Permalink to &quot;相对坐标定位&quot;">​</a></h1><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>相对坐标定位方案是是一种基于 UI 的元素定位方案，是我们自研的一个使用简单，且效率极高、稳定性好的元素定位方案，基于元素按钮在应用中的相对位置，动态获取元素在当前屏幕中的位置，适用于各种屏幕分辨率（包括高分屏、宽屏、带鱼屏），当元素按钮位置相对于应用界面位置发生修改之后，只需要根据 UI 设计图上的源数据修改对应坐标数据就好，维护非常的方便。</p><p>此类元素定位方案适用于一些元素位置相对与应用界面比较固定的应用，比如音乐（99% 的元素定位采用这种，效果非常好），不适用于界面不固定的应用，比如截图录屏，很明显不适用于这类元素定位方案。这种全新的元素定位方案有它的适用条件，如果你发现使用常规的（属性定位、图像定位）不好做时，不妨考虑使用这种，其效果一定能惊讶到你，并且迅速爱上他。</p><h2 id="实现原理" tabindex="-1">实现原理 <a class="header-anchor" href="#实现原理" aria-label="Permalink to &quot;实现原理&quot;">​</a></h2><p>在 UI 设计图中我们是可以获取到元素按钮相对于应用边框的距离的，然后我们可以通过技术手段获取到应用界面在当前屏幕中的位置及应用窗口的大小，示意图如下：</p><p><img src="https://pic.imgdb.cn/item/64f054ca661c6c8e54ff4fcb.png" alt=""></p><p><code>（x1, y1）</code>为应用左上角相对于屏幕左上角（0, 0）的位置；<code>（x2, y2）</code>是按钮【播放所有】的左上角相对于应用窗口左上角<code>（x1, y1）</code>的坐标，那么实际上【播放所有】左上角相对于屏幕左上角（0, 0）的位置为：<code>（ x1 + x2, y1 + y2 ）</code>；</p><p>是按钮【播放所有】的大小（w2, h2），可以从 UI 设计图上获取；</p><p><img src="https://pic.imgdb.cn/item/64f054cb661c6c8e54ff5001.png" alt=""></p><p>在 UI 设计稿上点击【播放所有】图标，然后移动鼠标就就可以看到上图的参考线及数据；</p><p>所以，我们可以轻松的获取到按钮【播放所有】的中心坐标为：<code>（ x1 + x2 + (w2 / 2), y1 + y2 + ( h2 / 2) ）</code></p><p>详细源代码请查看 AT 基础框架: <code>src/button_center.py</code></p><ul><li>获取应用窗口的信息</li></ul><p>使用 <code>xdotool</code> 和 <code>xwininfo</code> 获取到应用窗口在当前屏幕中的位置（左上角）及大小。</p><p>代码示例：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CmdCtl.run_cmd(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xdotool search --classname --onlyvisible </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.app_name</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).split(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app_id_list </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_id) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> app_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _id]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CmdCtl.run_cmd(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xwininfo -id </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app_id_list[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.number]</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>使用正则获取窗口的位置及大小。</p><ul><li>获取配置</li></ul><p>读 <code>ini</code> 配置文件，获取元素按钮相对与应用窗口边界的位置及大小。</p><p>代码示例：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">conf </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ConfigParser()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">conf.read(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.config_path)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">direction </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> conf.get(btn_name, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;direction&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">position </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i.strip()) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> conf.get(btn_name, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;location&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).split(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]</span></span></code></pre></div><ul><li>计算元素按钮坐标</li></ul><p>根据应用窗口在屏幕中的位置大小、元素按钮相对于应用窗口边界的位置大小，使用一定的算法即可计算出元素按钮在当前屏幕中的位置（中心坐标）。</p><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><p>【配置方法】</p><p>基于 UI 的元素定位方案的数据源是应用库中的 <code>ui.ini</code> 配置文件：</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;section</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[新建歌单+]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;key = value</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">direction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = left_top</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 180, 268, 21, 21</span></span></code></pre></div><ul><li><p><code>section</code> 是你根据对应的元素按钮命名，你可以任意命名，但最好有具体含义，且能明确表示这个元素按钮的名称；用中括号括起来就行，比如：<code>[新建歌单+] </code> ；</p></li><li><p><code>direction</code> 是配置该元素的参考系，分别为：</p><ul><li><p><code>left_top</code> 左上；</p></li><li><p><code>left_bottom</code> 左下；</p></li><li><p><code>right_top</code> 右上；</p></li><li><p><code>right_bottom</code> 右下；</p></li></ul><p>参考系的选取标准：拉动改变窗口大小时，元素按钮相对于参考系位置是不变的；</p></li><li><p><code>location</code> 是该元素按钮的相对与参考系的 x, y 的距离，及大小(w, h)，这四个数据可以通过 UI 设计图上获取数据，在编辑模式下，点击 UI 图上的按钮，右侧就会出现该元素按钮的 x, y, w, h 数据。</p></li></ul><p>如果 UI 图上没有提供你想要的元素数据，你可以直接在系统中使用截图录屏进行尺量，这是一种不推荐但能用的方法。</p><p>【调用方法】</p><p>在应用库方法层这样写：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> click_add_music_list_btn_in_music_by_ui</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;点击新建歌单按钮&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.click(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ui.btn_center(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;新建歌单+&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><p><code>self.ui.btn_center()</code> 是固定写法，参数就是配置里面的 <code>section</code> 。</p>`,34),l=[p];function h(e,k,d,o,c,E){return a(),s("div",null,l)}const y=i(n,[["render",h]]);export{g as __pageData,y as default};
