import{_ as s,c as i,o as a,U as l}from"./chunks/framework.rfEGmhOb.js";const g=JSON.parse('{"title":"测试报告","description":"","frontmatter":{},"headers":[],"relativePath":"指南/框架必备/测试报告.md","filePath":"指南/框架必备/测试报告.md","lastUpdated":1713583771000}'),n={name:"指南/框架必备/测试报告.md"},h=l(`<h1 id="测试报告" tabindex="-1">测试报告 <a class="header-anchor" href="#测试报告" aria-label="Permalink to &quot;测试报告&quot;">​</a></h1><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><p>执行时会在根目录下动态生成 <code>report</code> 目录，所有的报告相关的文件会统一存放在里面，示例：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/report</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allure</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # allure报告</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ffb324f3-2199-4eea-8a6f-2d7e77ce1718-container.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allure_html</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 生成的html报告</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allure_back</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # allure报告备份</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20221108114823</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> f8cab367-71f6-44aa-8810-b2ae5ab1d3a5-container.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> json</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # json报告</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> result_deepin-music_20221109134736_1081333.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 日志文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2022</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-11-10_debug.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2022</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-11-10_error.log</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> record</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 录屏</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2022</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-11-09</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     └──</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">时14分09秒_test_music_679537_2_autotest.mp4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xml</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # xml报告</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autotest_deepin_music-20221109134736.xml</span></span></code></pre></div><p>默认情况下同时生成 html、xml、json三种形式的报告。</p><h2 id="定制报告" tabindex="-1">定制报告 <a class="header-anchor" href="#定制报告" aria-label="Permalink to &quot;定制报告&quot;">​</a></h2><p>我们对 <code>allure</code> 报告进行了一系列的定制：</p><ul><li>定制 <code>logo</code>、<code>title</code>、报告默认语言为中文；</li><li>加入了用例断言失败时的屏幕截图，以及此时图像对比的模板图片；</li><li>加入了失败录屏，你可以在 <code>html</code> 报告中直接看录制的视频；</li><li>加入了 <code>IP</code> 地址、系统信息、镜像版本等；</li></ul><p><img src="https://pic.imgdb.cn/item/64f054c2661c6c8e54ff478a.png" alt=""></p><p>报告 <code>UI</code> 效果会持续优化；</p><h2 id="查看报告" tabindex="-1">查看报告 <a class="header-anchor" href="#查看报告" aria-label="Permalink to &quot;查看报告&quot;">​</a></h2><ul><li><strong>本地执行</strong></li></ul><p>在 <code>report/allure</code> 目录下会生成一堆文本文件，这些是 <code>allure</code> 插件生成的报告源数据，我们在 <code>report/allure_html</code> 目录下给你生成了 <code>html</code> 文件，但是你不能直接通过浏览器打开 <code>index.html</code> 文件，因为 <code>allure</code> 的报告都是基于在线的服务。</p><p>可以直接在 <code>Pycharm</code> 里面找到 <code>index.html</code> 文件，然后右键选择浏览器打开；</p><p>或者你可以用一个 http 服务打开。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> report/allure_html</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http.server</span></span></code></pre></div><p>然后在浏览器访问：127.0.0.1:8000</p><ul><li><strong>远程执行</strong></li></ul><p>远程执行结束之后，会将所有远程测试机的测试报告都收集到 <code>report/allure</code> 目录下，分别按照机器的 <code>IP</code> 等建了不同的目录，你可以在这些目录里面去查看对应的测试报告，查看方法和前面本地执行查看的方法一样。</p>`,19),t=[h];function p(e,k,F,d,r,c){return a(),i("div",null,t)}const y=s(n,[["render",p]]);export{g as __pageData,y as default};
