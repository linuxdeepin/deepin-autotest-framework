import{_ as s,c as i,o as a,U as n,aa as t,ab as l}from"./chunks/framework.B8Q22wAh.js";const u=JSON.parse('{"title":"Linux 桌面 UI 自动化测试","description":"","frontmatter":{},"headers":[],"relativePath":"实践/Linux桌面UI自动化测试/初始化项目.md","filePath":"实践/Linux桌面UI自动化测试/初始化项目.md","lastUpdated":1714472325000}'),p={name:"实践/Linux桌面UI自动化测试/初始化项目.md"},h=n('<h1 id="linux-桌面-ui-自动化测试" tabindex="-1">Linux 桌面 UI 自动化测试 <a class="header-anchor" href="#linux-桌面-ui-自动化测试" aria-label="Permalink to &quot;Linux 桌面 UI 自动化测试&quot;">​</a></h1><p>YouQu 框架从最开始设计构建，就是以桌面 UI 自动化测试为基础，因此 YouQu 真的非常擅长构建 Linux 桌面 UI 自动化项目。</p><p>YouQu 在桌面 UI 自动化测试方向也有非常多的技术突破，例如：兼容 Wayland 显示协议、多样的元素定位方案、用例失败录屏、远程交互式控制 ~~ 等等。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>安装 YouQu：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pip3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu</span></span></code></pre></div><h2 id="创建一个项目" tabindex="-1">创建一个项目 <a class="header-anchor" href="#创建一个项目" aria-label="Permalink to &quot;创建一个项目&quot;">​</a></h2><p>创建一个项目：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">youqu-startproject</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_project</span></span></code></pre></div><p><img src="'+t+`" alt=""></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">my_project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apps</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 用于放置APP工程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conftest.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Pytest 插件库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CURRENT</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 记录YouQu当前的版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env_dev.sh</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 开发环境部署（本机安装）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env.sh</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       # 正式环境部署（虚拟环境）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 执行管理器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pytest.ini</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # pytest.ini配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruff.toml</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ruff配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> setting</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 全局配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 底层src</span></span></code></pre></div><h2 id="部署环境" tabindex="-1">部署环境 <a class="header-anchor" href="#部署环境" aria-label="Permalink to &quot;部署环境&quot;">​</a></h2><p>安装 YouQu 执行环境：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env.sh</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用的默认密码是 1；</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 您可以使用 -p 选项传入密码：bash env.sh -p \${my_password}；</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 也可以修改配置文件 setting/globalconfig.ini 里面的 PASSWORD 配置项；</span></span></code></pre></div><p><img src="`+l+'" alt=""></p>',15),e=[h];function k(r,d,o,c,F,g){return a(),i("div",null,e)}const C=s(p,[["render",k]]);export{u as __pageData,C as default};
