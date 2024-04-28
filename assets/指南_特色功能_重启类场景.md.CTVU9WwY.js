import{_ as s,c as i,o as a,U as n}from"./chunks/framework.Ci8knzNI.js";const g=JSON.parse('{"title":"重启类场景","description":"","frontmatter":{},"headers":[],"relativePath":"指南/特色功能/重启类场景.md","filePath":"指南/特色功能/重启类场景.md","lastUpdated":1713583771000}'),t={name:"指南/特色功能/重启类场景.md"},e=n(`<h1 id="重启类场景" tabindex="-1">重启类场景 <a class="header-anchor" href="#重启类场景" aria-label="Permalink to &quot;重启类场景&quot;">​</a></h1><p>对于重启类场景的用例需要解决的核心问题是，重启之后如何让用例能继续重启前的步骤继续执行，<code>YouQu</code> 集成了自研的 <a href="https://linuxdeepin.github.io/letmego/" target="_blank" rel="noreferrer">letmego</a> 技术方案；</p><p>详细技术方案、实现细节、Demo可以看 <a href="https://linuxdeepin.github.io/letmego/" target="_blank" rel="noreferrer">letmego</a> 官方在线文档；</p><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><p>使用方法很简单，只需要给应用方法层的唯一出口类加一个装饰器（<code>@letmego.mark</code>）即可：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> letmego</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@letmego.mark</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DeepinMusicWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WindowWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TitleWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PopWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;音乐业务层&quot;&quot;&quot;</span></span></code></pre></div><h2 id="用例注意事项" tabindex="-1">用例注意事项 <a class="header-anchor" href="#用例注意事项" aria-label="Permalink to &quot;用例注意事项&quot;">​</a></h2><p>这类用例相对特殊，这里主要介绍写用例的时候注意事项：</p><p>（1）用例的前置和后置要写在同一个用例文件里面；这点如果了解方案实现原理很容易理解；</p><p>（2）重启步骤前面的步骤，如果有对象实例化的，需要处理实例化存在异常；因为 <code>YouQu</code> 的对象实例化默认会检测应用是否启动，重启之后虽然重启步骤前面的步骤函数不会执行，但是方法类同样会进行实例化，所以需要处理这个问题；</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ignore import</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TestMusic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BaseCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    音乐用例</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test_music_679537</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            music </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DeepinMusicWidget()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            music.click_singer_btn_in_music_by_ui()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            music.click_icon_mode_in_music_by_ui()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        except</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ApplicationStartError:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            pass</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # ========== reboot ==========</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        DeepinMusicWidget.reboot()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # ========== 重启之后继续执行 =========</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        DdeDockPublicWidget().open_music_in_dock_by_attr()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        music </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DeepinMusicWidget()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        music.recovery_music_by_cmd()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        music.first_add_music_by_ui()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        music.click_singer_btn_in_music_by_ui()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        music.click_icon_mode_in_music_by_ui()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.assert_music_image_exist(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;music_679537&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>（3）重启步骤最好是一个简单的reboot操作，不建议在组合步骤中间插入一个reboot；</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@letmego.mark</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DeepinMusicWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WindowWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TitleWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PopWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">staticmethod</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reboot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;letmego reboot&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        os.system(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;echo &#39;1&#39; | sudo -S reboot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="驱动执行" tabindex="-1">驱动执行 <a class="header-anchor" href="#驱动执行" aria-label="Permalink to &quot;驱动执行&quot;">​</a></h2><p>因为重启类场景需要注册自启服务以及对用例执行过程的处理，驱动执行的时候加 <code>--autostart yes</code> :</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">youqu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --autostart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yes</span></span></code></pre></div><h2 id="执行环境" tabindex="-1">执行环境 <a class="header-anchor" href="#执行环境" aria-label="Permalink to &quot;执行环境&quot;">​</a></h2><p>默认使用虚拟环境执行，也就是说如果您是部署自动化环境是用的 <code>env_dev.sh</code> 是无法使用此技术方案的，解决方法也很简单，执行一下：<code>bash env.sh</code>，以此激活虚拟环境即可。</p>`,18),l=[e];function p(h,k,d,r,o,c){return a(),i("div",null,l)}const y=s(t,[["render",p]]);export{g as __pageData,y as default};
