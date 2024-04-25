import{_ as s,c as a,o as i,U as e}from"./chunks/framework.aQY2xkld.js";const E=JSON.parse('{"title":"失败录屏","description":"","frontmatter":{},"headers":[],"relativePath":"指南/特色功能/失败录屏.md","filePath":"指南/特色功能/失败录屏.md","lastUpdated":1713583771000}'),n={name:"指南/特色功能/失败录屏.md"},p=e(`<h1 id="失败录屏" tabindex="-1">失败录屏 <a class="header-anchor" href="#失败录屏" aria-label="Permalink to &quot;失败录屏&quot;">​</a></h1><p>录屏其实是一种视频形式的日志，因为很多时候我们在查看日志之后仍然无法准确的定位到用例失败的具体原因，因此用例的录屏能让我们看到用例在执行过程；</p><p>【使用方法】</p><p>在 <code>globalconfig.ini</code> 里面配置关注 2 个参数；</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;失败用例重跑次数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RERUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;失败录屏从第几次开始录制视频。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;比如 RECORD_FAILED_CASE = 1 ，表示用例第1次执行失败之后开始录屏。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;注意，用例失败重跑的次数不能小于失败录屏次数，即 RERUN &gt;= RECORD_FAILED_CASE</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RECORD_FAILED_CASE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1</span></span></code></pre></div><p>默认失败重跑的次数是 1 次；</p><p><code>RECORD_FAILED_CASE = 1</code> 表示用例第1次执行失败之后开始录屏；</p><p><code>RECORD_FAILED_CASE = 0</code> 表示不管用例成功或失败都录屏；</p><p>录屏是要占用系统资源的，特别是在一些配置较低的机器上会很明显，所以你需要考虑是否有必要每条用例都录屏；</p><p>使用 <code>manage.py</code> 执行用例默认读取到 <code>globalconfig.ini</code> 里面的参数，执行完之后会在 <code>report/record</code> 目录下保存失败用例的录屏和断言的那个时间点的截屏，你可以通过视频文件看到失败用例执行过程都发生了什么。</p>`,10),t=[p];function l(o,c,d,h,_,r){return i(),a("div",null,t)}const A=s(n,[["render",l]]);export{E as __pageData,A as default};
