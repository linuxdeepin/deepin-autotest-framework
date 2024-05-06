import{_ as s,c as i,o as a,U as p}from"./chunks/framework.rfEGmhOb.js";const F=JSON.parse('{"title":"PMS数据回填","description":"","frontmatter":{},"headers":[],"relativePath":"指南/特色功能/数据回填.md","filePath":"指南/特色功能/数据回填.md","lastUpdated":1713583771000}'),n={name:"指南/特色功能/数据回填.md"},t=p(`<h1 id="pms数据回填" tabindex="-1">PMS数据回填 <a class="header-anchor" href="#pms数据回填" aria-label="Permalink to &quot;PMS数据回填&quot;">​</a></h1><p>测试单关联的用例，自动化测试对应的去跑这些关联的用例，并且将执行的结果回填的测试用例的状态里面。</p><h2 id="本机执行时回填" tabindex="-1">本机执行时回填 <a class="header-anchor" href="#本机执行时回填" aria-label="Permalink to &quot;本机执行时回填&quot;">​</a></h2><p>PMS 数据回填主要有三种方式：</p><p><strong>（1）异步回填</strong></p><p>在用例执行的过程中，采用异步的方式去进行数据回填，直白的讲就是，第二条用例开始跑的时候，通过子线程去做第一条用例的数据回填，如此循环，直到所有用例执行结束；</p><p>这种方案的时间<strong>效率最高</strong>的，因为理论上用例的执行时间是大于数据回填的接口请求时间的，也就是说，当用例执行完之后，数据回填也完成了。</p><p><strong>【方法一】配置文件</strong></p><p>使用方法，在 <code>globalconfig.ini</code> 里面配置以下参数：（以下涉及到的参数配置都是在配置文件里面进行配置）</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PMS_USER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = PMS账号</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PMS_PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = PMS密码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SEND_PMS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = async</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TASK_ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 测试单ID</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TRIGGER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = auto</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">APP_NAME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 这个参数可填可不填，但是填了可以提高用例的执行速度，因为在用例收集阶段可以指定到具体的应用库。（下同）</span></span></code></pre></div><p>配置完之后，命令行触发：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">youqu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span></code></pre></div><p><strong>【方法二】命令行传参</strong></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">youqu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apps/autotest_xxx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ut001234</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_password</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --task_id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxxx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --send_pms</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> async</span></span></code></pre></div><p><strong>（2）用例执行完之后回填</strong></p><p>等所有用例执行完之后，再逐个进行回填的接口请求，此方案时间效率比较低。</p><p>使用方法：</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PMS_USER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = PMS账号</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PMS_PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = PMS密码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SEND_PMS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = finish</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TASK_ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 测试单ID</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TRIGGER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = auto</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">APP_NAME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span></code></pre></div><p>命令行使用方式和前面一样，只需要修改 <code>--send_pms finish</code> 即可。</p><p><strong>（3）手动回填</strong></p><p>所有用例执行完之后不做回填的接口请求，后续手动将结果进行回填请求。</p><p>用例执行时配置：</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PMS_USER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = PMS账号</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PMS_PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = PMS密码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SEND_PMS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = finish</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TASK_ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 测试单ID</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TRIGGER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = hand</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">APP_NAME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span></code></pre></div><p>后续手动回填方法：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">youqu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pms</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --send2task</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yes</span></span></code></pre></div><h2 id="远程执行时回填" tabindex="-1">远程执行时回填 <a class="header-anchor" href="#远程执行时回填" aria-label="Permalink to &quot;远程执行时回填&quot;">​</a></h2><p>远程执行需要控制多台测试机同时执行用例，也就是说同一条用例会在多台机器上同时执行，但是执行结果可能不一致；</p><p>因此，远程执行的数据回填需要等所有测试机执行结束之后，服务端收集到测试结果，并对测试结果做处理（只要有1个机器上用例失败，那此用例为失败）之后，在进行数据回填；</p><p>使用方法：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">youqu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uos@10.8.13.xx/uos@10.8.13.yy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apps/autotest_xxx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ut001234</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_password</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --task_id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxxx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --send_pms</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> finish</span></span></code></pre></div><p>执行结束之后在 <code>report</code> 目录下会有 <code>pms_xxx</code> 开头的目录，里面保存了所有远程测试机的测试结果，以及汇总的结果；</p><h2 id="可能遇到的-问题" tabindex="-1">可能遇到的“问题” <a class="header-anchor" href="#可能遇到的-问题" aria-label="Permalink to &quot;可能遇到的“问题”&quot;">​</a></h2><p>有同学可能会发现，怎么回填一次之后，后面想再次回填就不生效了；</p><p>这是因为为了应对前面提到的多种数据回填的方式，在 <code>report</code> 目录下会有 <code>pms_xxx</code> 开头的目录，用于记录了用例的执行结果和回填情况，如果这条用例之前已经回填过了，后续就不会再此触发回填了；</p><p>如果你想重新做回填，你可以把 <code>report/pms_xxx</code> 目录删掉，这样就可以重新做数据回填了；</p>`,35),h=[t];function l(e,k,d,r,o,g){return a(),i("div",null,h)}const E=s(n,[["render",l]]);export{F as __pageData,E as default};
