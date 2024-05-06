import{_ as s,c as i,o as a,U as h,a6 as n,a7 as k}from"./chunks/framework.rfEGmhOb.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"实践/Linux桌面UI自动化测试/创建APP工程.md","filePath":"实践/Linux桌面UI自动化测试/创建APP工程.md","lastUpdated":1714472325000}'),p={name:"实践/Linux桌面UI自动化测试/创建APP工程.md"},t=h('<h2 id="创建一个-app-工程" tabindex="-1">创建一个 APP 工程 <a class="header-anchor" href="#创建一个-app-工程" aria-label="Permalink to &quot;创建一个 APP 工程&quot;">​</a></h2><p>使用 startapp 创建一个 APP 工程：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">youqu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> startapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autotest_my_app</span></span></code></pre></div><p><img src="'+n+`" alt=""></p><p>自动创建 APP 工程，并生成大量模板代码：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">autotest_my_app</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apps</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autotest_my_app</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 创建的APP工程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> case</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 用例目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> assert_res</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 用例断言所需要的资源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> readme</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> base_case.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 用例基类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __init__.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_mycase_001.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 用例示例 1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_mycase_002.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 用例示例 2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config.ini</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 应用库配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 读取配置文件config.ini里面的配置，并提供可调用的配置对象config</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conftest.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Pytest Fixture 插件库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> control</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 记录依赖YouQu的版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __init__.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_app_assert.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 断言方法类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mycase.csv</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 用例标签管理文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> widget</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 方法层</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> base_widget.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 方法基类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> case_res</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 用例执行所需要的资源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> readme</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __init__.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_app_widget.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 方法唯一出口类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> other.ini</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 其他应用的基于相对位移元素定位方案的配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> other_widget.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 其他方法类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pic_res</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 图像识别方法所需要的资源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> readme</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ui.ini</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 相对位移元素定位方案的配置文件</span></span></code></pre></div><h2 id="编辑器打开" tabindex="-1">编辑器打开 <a class="header-anchor" href="#编辑器打开" aria-label="Permalink to &quot;编辑器打开&quot;">​</a></h2><p>推荐使用 Pycharm 打开，并指定虚拟解释器：</p><p><img src="`+k+'" alt=""></p>',9),l=[t];function F(e,r,d,y,g,C){return a(),i("div",null,l)}const c=s(p,[["render",F]]);export{E as __pageData,c as default};
