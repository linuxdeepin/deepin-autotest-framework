import{_ as s,c as a,o as i,a7 as e}from"./chunks/framework.CPntGteo.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"FAQ.md","filePath":"FAQ.md","lastUpdated":1713583771000}'),t={name:"FAQ.md"},h=e('<h2 id="提交代码时提示邮箱或者名称不对" tabindex="-1">提交代码时提示邮箱或者名称不对 <a class="header-anchor" href="#提交代码时提示邮箱或者名称不对" aria-label="Permalink to &quot;提交代码时提示邮箱或者名称不对&quot;">​</a></h2><p>重新配置邮箱或者名称，然后重置生效：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --amend</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --reset-author</span></span></code></pre></div><hr><h2 id="怎么回滚到之前的版本" tabindex="-1">怎么回滚到之前的版本 <a class="header-anchor" href="#怎么回滚到之前的版本" aria-label="Permalink to &quot;怎么回滚到之前的版本&quot;">​</a></h2><p>(1)查询历史提交记录</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span></span></code></pre></div><p>找到你要回滚的版本，复制 <code>hash</code> 值。</p><ul><li>注意：是 <code>commit</code> 空格之后的 <code>hash</code> 值，之前有同学复制的 <code>Change-Id:</code> 这样肯定报错。</li></ul><p>(2)回滚版本，不清除代码</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --soft</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${hash}</span></span></code></pre></div><p>(3)回滚版本，清除代码，慎用哈</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${hash}</span></span></code></pre></div><hr><h2 id="解决-git-status-中文显示的问题" tabindex="-1">解决 git status 中文显示的问题 <a class="header-anchor" href="#解决-git-status-中文显示的问题" aria-label="Permalink to &quot;解决 git status 中文显示的问题&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> core.quotePath</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span></code></pre></div><hr><h2 id="apps-目录下颜色有些是黄色的" tabindex="-1">apps 目录下颜色有些是黄色的 <a class="header-anchor" href="#apps-目录下颜色有些是黄色的" aria-label="Permalink to &quot;apps 目录下颜色有些是黄色的&quot;">​</a></h2><p>在 <code>Pycharm</code> 中 <code>apps</code> 目录下应用库文件是黄色的，编辑器识别不到代码新增和修改；</p><p>由于社区版 <code>Pycharm</code> 不能动态识别多仓库，需要在 setting 里面手动注册，操作步骤：</p><p><code>File</code> —<code>Settings</code> —<code>Version Control</code> —点 <code>+</code> 号 —<code>Directory</code> 选中应用库工程目录 —<code>VCS</code> 选中 <code>Git</code> —<code>Apply</code></p><p>如此就可以了。</p><p>专业版 <code>Pycharm</code> 一般不存在这个问题。</p><hr><h2 id="执行-env-sh-报错-r-未找到命令" tabindex="-1">执行 <code>env.sh</code> 报错 <code>$&#39;\\r&#39;:未找到命令</code> <a class="header-anchor" href="#执行-env-sh-报错-r-未找到命令" aria-label="Permalink to &quot;执行 `env.sh` 报错 `$&#39;\\r&#39;:未找到命令`&quot;">​</a></h2><p>出现这个问题你应该是在 windows 上打开或编辑过 <code>env.sh</code> 脚本，windows下的换行是回车符+换行符，也就是<code>\\r\\n</code>，而 <code>Linxu</code> 下是换行符 <code>\\n</code>，<code>Linux</code> 下不识别 <code>\\r</code>，因此报错。</p><p>解决方案：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将 \\r 替换为空</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/\\r//&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env.sh</span></span></code></pre></div><hr><h2 id="怎样为单独某一条用例配置执行超时时间" tabindex="-1">怎样为单独某一条用例配置执行超时时间 <a class="header-anchor" href="#怎样为单独某一条用例配置执行超时时间" aria-label="Permalink to &quot;怎样为单独某一条用例配置执行超时时间&quot;">​</a></h2><p>在用例脚本中添加装饰器，如下：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@pytest.mark.timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 单位秒</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test_xxx_001</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	pass</span></span></code></pre></div><hr><h2 id="如何修复子仓库-master-分支游离头-detached-head" tabindex="-1">如何修复子仓库 master 分支游离头（detached head） <a class="header-anchor" href="#如何修复子仓库-master-分支游离头-detached-head" aria-label="Permalink to &quot;如何修复子仓库 master 分支游离头（detached head）&quot;">​</a></h2><p>修复所有子仓库默认master 分支游离头</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  youqu</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submodule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foreach</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -q</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --recursive</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;git checkout $(git config -f $toplevel/.gitmodules submodule.$name.branch || echo master)&#39;</span></span></code></pre></div><hr>',37),l=[h];function p(n,d,o,c,k,r){return i(),a("div",null,l)}const u=s(t,[["render",p]]);export{F as __pageData,u as default};
