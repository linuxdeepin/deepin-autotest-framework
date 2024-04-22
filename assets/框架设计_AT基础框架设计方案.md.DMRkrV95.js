import{_ as s,c as i,o as a,U as n}from"./chunks/framework.RJcnU2up.js";const y=JSON.parse('{"title":"AT 基础框架设计方案","description":"","frontmatter":{"Author":"mikigo"},"headers":[],"relativePath":"框架设计/AT基础框架设计方案.md","filePath":"框架设计/AT基础框架设计方案.md","lastUpdated":1713583771000}'),h={name:"框架设计/AT基础框架设计方案.md"},p=n(`<h1 id="at-基础框架设计方案" tabindex="-1">AT 基础框架设计方案 <a class="header-anchor" href="#at-基础框架设计方案" aria-label="Permalink to &quot;AT 基础框架设计方案&quot;">​</a></h1><h2 id="一、目标" tabindex="-1">一、目标 <a class="header-anchor" href="#一、目标" aria-label="Permalink to &quot;一、目标&quot;">​</a></h2><p>做一个简单、好用、功能强大的自动化测试框架。</p><ul><li>作为自动化测试的一个基础框架，任何应用都能很方便的接入进来；</li><li>提供所有自动化测试所需要的底层功能，并对外提供唯一的接口，方便应用库使用；</li><li>整合公共库，减少应用库代码量和方法维护。</li></ul><h2 id="二、设计方案" tabindex="-1">二、设计方案 <a class="header-anchor" href="#二、设计方案" aria-label="Permalink to &quot;二、设计方案&quot;">​</a></h2><h3 id="_1、统一概念" tabindex="-1">1、统一概念 <a class="header-anchor" href="#_1、统一概念" aria-label="Permalink to &quot;1、统一概念&quot;">​</a></h3><ul><li><p><strong>基础框架</strong></p><p>本项目是一个自动化测试的基础框架（<code>AutoTest Basic Frame</code>），全称为“自动化测试基础框架（AT 基础框架）”。</p><p>AT 基础框架是做为一个自动化测试的基础框架来设计的，它提供了自动化测试所要用的基础功能，任何应用接入进来都能快速方便的进行方法和用例编写，同时在用例标签化管理、批量跳过、标签化执行、分布式执行、多种报告输出、优美的执行日志、失败自动录屏和截图、自动环境清理等等，它都提供了完善的解决方案，更重要的是这一切使用起来都非常简单。</p><p>基础框架中包含应用库（<code>apps</code>）、核心库（<code>src</code>）、公共方法库（<code>public</code>）。</p></li><li><p><strong>应用库（<code>apps</code>）</strong></p><p>各个应用自己的仓库，里面主要包含的是用例、方法及一些测试资源，比如文件管理器叫 <code>autotest-dde-file-manager</code> 。</p></li><li><p><strong>核心库（<code>src</code>）</strong></p><p>核心库自动化测试所要用的到所有底层核心功能，这是最重要的一个部分，灵魂。具体功能模块及说明会在下面第四个章节详细描述。</p></li><li><p><strong>公共方法库（<code>public</code>）</strong></p><p>多个应用都要用到的一些操作方法，按照应用划分存放，主要是为了减少代码量，消除应用间的耦合关系。</p></li></ul><h3 id="_2、架构图" tabindex="-1">2、架构图 <a class="header-anchor" href="#_2、架构图" aria-label="Permalink to &quot;2、架构图&quot;">​</a></h3><p>整体的框架设计在《自动化测试架构设计》文档里面已经有详细描述了，这里贴一下整体的架构图：</p><p>???+ note &quot;架构图&quot; <img src="https://pic.imgdb.cn/item/64f054c4661c6c8e54ff4948.png" alt=""></p><p>为了突显本文的重点，抽取其中重要功能模块，如下图：</p><p>???+ note &quot;核心模块&quot; <img src="https://pic.imgdb.cn/item/64f054c2661c6c8e54ff4770.png" alt=""></p><h3 id="_3、目录结构" tabindex="-1">3、目录结构 <a class="header-anchor" href="#_3、目录结构" aria-label="Permalink to &quot;3、目录结构&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">autotest-basic-frame</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 自动化测试基础框架</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apps</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 应用库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autotest-dde-file-manager</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 单独的应用仓库（应用库详细目录结构请看应用库设计方案）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> case</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 用例</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config.ini</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 局部配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 局部配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conftest.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Pytest 本地插件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dfm_assert.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 断言方法模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> assert_res</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 断言的图片资源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 标签</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> widget</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 方法库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __init__.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> base_widget.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ui.ini</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # UI 定位的坐标配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> case_res</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 测试数据（用例需要用到的资源）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pic_res</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 图像识别元素定位要用的图片</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.png</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autotest_deepin_music</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 单独的应用仓库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> case</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 公共方法库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __init__.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dde_dock_public_widget</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # dde_dock 的公共方法 package</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __init__.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dde_dock_public_widget.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ui.ini</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dde_desktop_public_widget</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # dde_desktop 的公共方法 package</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __init__.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dde_desktop_public_widget.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ui.ini</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 核心库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __init__.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> button_center.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cmdtrl.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dogtails.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> find_image.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> global_config.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> setting</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 全局配置模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __init__.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> globalconfig.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> globalconfig.ini</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conftest.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Pytest 本地插件模块（Hook）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pytest.ini</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Pytest 默认配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 文档目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 执行器</span></span></code></pre></div><h2 id="三、详细方案" tabindex="-1">三、详细方案 <a class="header-anchor" href="#三、详细方案" aria-label="Permalink to &quot;三、详细方案&quot;">​</a></h2><h3 id="_1、应用库-apps" tabindex="-1">1、应用库（apps） <a class="header-anchor" href="#_1、应用库-apps" aria-label="Permalink to &quot;1、应用库（apps）&quot;">​</a></h3><p>所有应用库均放置在基础框架下的 <code>apps</code> 目录下（见第二章节第3段目录结构内容）。应用库的架构设计可以参考《AT 应用库设计方案》文档。</p><h3 id="_2、核心库-src" tabindex="-1">2、核心库（src） <a class="header-anchor" href="#_2、核心库-src" aria-label="Permalink to &quot;2、核心库（src）&quot;">​</a></h3><p>在 <code>src</code> 目录下为自动化测试的底层核心组件，通常来讲如果你需要使用到其中某一个功能模块，那么你需要显示的导入这个模块，然后才能使用该模块下的功能，如果你用到了十个功能模块，那你就需要导入十个。但是我们想让事情变得简单，一次导入，使用所有。</p><p>将所有的功能模块都进入到 <code>src</code> 的名称空间，在 <code>src/__init__.py</code> 里面我们设计成这样：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .cmdctl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CmdCtl</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .dogtails </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Dogtail</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .find_image </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FindImage</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .button_center </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ButtonCenter</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CmdCtl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FindImage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kwargs):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;dogtail or button center param</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        :param kwargs: app_name, desc, number</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> kwargs:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            app_name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> kwargs.get(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;APP_NAME&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            desc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> kwargs.get(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DESC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> app_name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> or</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> desc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                raise</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ValueError</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            number </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> kwargs.get(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;number&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            number </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> number </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isinstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(number, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 对象组合</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.dog </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Dogtail(app_name, desc, number)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ui </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ButtonCenter(app_name, number)</span></span></code></pre></div><p>需要传递参数的采用对象组合，没有参数的使用继承，继承的类符合 <code>Mixin</code> 设计模式。</p><p>应用库里面使用的时候在 <code>widget/base_widget.py</code> 里面只需要唯一继承 <code>Src</code> ：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 应用库里面方法基类</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Src</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BaseWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;方法基类&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    APP_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;dde-file-manager&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    DESC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/usr/bin/dde-file-manager&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Src.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">APP_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">APP_NAME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">DESC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DESC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">number)</span></span></code></pre></div><p>要使用核心库的功能，只需要写一个导入 <code>from src import Src</code> 即可。</p><p>写 <code>__init__</code> 构造函数的原因是通过参数构造应用，并且传递 <code>number</code> 进来，可以实现多窗口的控制。</p><h3 id="_3、公共方法库-public" tabindex="-1">3、公共方法库（public） <a class="header-anchor" href="#_3、公共方法库-public" aria-label="Permalink to &quot;3、公共方法库（public）&quot;">​</a></h3><p>公共方法库里面每个应用都是一个单独的 <code>py</code> 文件，相互之间是独立的，每个 <code>py</code> 文件里面是该应用的方法类，比如：最常用的方法类 <code>dde_desktop_public_widget.py</code></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Src</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _DdeDesktopPublicBaseWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;桌面公共方法基类&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    APP_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;dde-desktop&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    DESC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/usr/bin/dde-desktop&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Src.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">APP_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">APP_NAME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">DESC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DESC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DdeDesktopPublicWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_DdeDesktopPublicBaseWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;桌面公共方法类&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> click_music_dir_by_ui</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;在文件选择框点击音乐目录&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.click(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ui.btn_center(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;侧边栏-音乐&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))   </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> click_xxx_by_attr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        pass</span></span></code></pre></div><p>公共方法库意义：</p><ul><li><p>公共方法库里面所封装的一些操作方法都是至少被 2 个应用都用到的，这样做可以减少整体代码量，从而减轻应用库代码的维护工作。</p></li><li><p>公共方法库里面的编写形式（命名规则、定位的方案写法、注释的写法等等）具有一定的模板作用，这样即使是各个应用库都独立维护，所有的编码风格都是趋于相同的，因为大家都应该参照公共库里面的一些写法来写自己应用库里面的一些方法类，这样使得从公司的角度去看所有应用的自动化测试项目都是统一的。</p></li><li><p>可以通过公共方法库里面的一些方法，了解到其他应用的功能，对于我们需求理解，了解系统的方方面面也有好处。</p></li></ul><p>当然，如果你的应用本身是属于根本就不需要和其他应用交互的，那么你可能不会用到这里面的功能，没关系，你所有的方法都可以直接写在应用库的业务层。</p><h3 id="_4、conftest-py" tabindex="-1">4、conftest.py <a class="header-anchor" href="#_4、conftest-py" aria-label="Permalink to &quot;4、conftest.py&quot;">​</a></h3><p><code>conftest.py</code> 从功能上将是属于核心库（<code>src</code>）的内容，但是由于它的特殊性，即它是对应用库中的用例生效的，而且它的作用域是当前目录及以下，因此我们将它放到项目根目录。我们框架中有不少核心功能都是在这里面进行开发的，后面第四章会讲到细节。</p><p><code>pytest.ini</code> 作用和 <code>conftest.py</code> 类似，是 <code>Pytest</code> 框架的固定配置文件，目前配置了一些通用的命令行执行参数，也放在项目根目录。</p><p>根目录下的 <code>conftest.py</code> 文件只会用来写 <code>Hook</code> 函数，<code>apps</code> 目录下的 的 <code>conftest.py</code> 文件只会用来写 <code>fixture</code> 。</p><h3 id="_5、setting" tabindex="-1">5、setting <a class="header-anchor" href="#_5、setting" aria-label="Permalink to &quot;5、setting&quot;">​</a></h3><p>全局配置模块，包含了以下配置文件：</p><p>（1）<code>ini</code> 配置文件</p><p>主要配置一些全局的配置项，譬如：失败重跑次数、是否失败录屏、单条用例超时时间、会话超时时间、执行时日志级别、生成的报告类型、以及分布式执行的一些策略配置项等等。</p><p>（2）<code>config.py</code> 配置文件</p><p>主要提供配置文件读取、动态获取一些常量（如项目根目录绝对路径 <code>(BASE_DIR)</code>、系统架构（<code>SYS_FRAME</code>）、时间字符串（<code>strftime</code>）、本机 <code>USERNAME</code> <code>IP</code> 等等）、公共 URL 等。</p>`,42),k=[p];function l(t,e,F,d,r,g){return a(),i("div",null,k)}const c=s(h,[["render",l]]);export{y as __pageData,c as default};
