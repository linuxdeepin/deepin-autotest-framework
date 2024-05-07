import{_ as i,c as t,o as s,U as e}from"./chunks/framework.BD9ST31e.js";const F=JSON.parse('{"title":"自动化测试架构设计规划","description":"","frontmatter":{"Author":"mikigo"},"headers":[],"relativePath":"规划/框架设计/自动化测试架构设计v1.0.md","filePath":"规划/框架设计/自动化测试架构设计v1.0.md","lastUpdated":1714064166000}'),a={name:"规划/框架设计/自动化测试架构设计v1.0.md"},l=e(`<h1 id="自动化测试架构设计规划" tabindex="-1">自动化测试架构设计规划 <a class="header-anchor" href="#自动化测试架构设计规划" aria-label="Permalink to &quot;自动化测试架构设计规划&quot;">​</a></h1><ul><li>目标： <ul><li>应用 AT 架构工程化，参考性能自动化工程完成工程化改造。</li><li>应用间用例解耦，解除所有交叉调用的方法，各应用能跟随自身迭代周期独立维护 AT 用例。</li><li>完成公共方法的抽取整合，形成一套独立于应用间的公共方法库，各应用方法里面不存在被多个应用调用的情况。</li><li>用例实现标签化管理，为将来适配更多的 AT 运用场景提供支撑，原则上可实现无限扩展，在每日构建和持续集成流程落地使用。</li><li>代码规范问题清零，符合 <code>Shell Check</code>、<code>Pylint</code>、系统部相关编码规范要求。</li></ul></li><li>意义： <ul><li>统一成研 AT 架构设计思路，消除 AT 代码实现和维护上可能出现的分歧，改善历史 AT 无工程化设计的缺陷，提高架构专业性。</li><li>各应用 AT 代码相互独立，契合应用独立发布特性，可支持迭代期间独立新增、维护和执行。</li><li>方法调用逻辑得到简化，编写和维护更高效；公共库抽取，减少方法重复编写，提高代码利用率；平均编写一条用例从 40 分钟降低至 30 分钟，日产出用例从 12 条/天提升至 16 条/天。</li><li>可灵活支撑不同的自动化运用场景，如 CI、冒烟测试、集成测试、回归测试、专项测试等。</li></ul></li></ul><h2 id="一、背景介绍" tabindex="-1">一、背景介绍 <a class="header-anchor" href="#一、背景介绍" aria-label="Permalink to &quot;一、背景介绍&quot;">​</a></h2><p>!!! note &quot;提示&quot; 这里介绍以前的AT框架情况以及存在的一些问题；</p><h3 id="_1、原有架构介绍" tabindex="-1">1、原有架构介绍 <a class="header-anchor" href="#_1、原有架构介绍" aria-label="Permalink to &quot;1、原有架构介绍&quot;">​</a></h3><p>??? note &quot;原AT框架架构图&quot; <img src="https://pic.imgdb.cn/item/64f054c5661c6c8e54ff498d.png" alt=""></p><p>原有自动化测试架构整体分为三层：用例层（业务逻辑层）、中间层（元素定位和操作方法层）、核心层（底层功能库层）。</p><ul><li>用例层：即应用的用例，专注于业务功能逻辑，不关心元素的定位和操作；</li><li>中间层：元素的定位和操作方法层，每个方法均对应一个元素的一个具体操作，也可以是多个操作的组合操作，中间层主要服务于用例层，具有可扩展性和复用性；</li><li>核心层：主要封装的底层功能实现，此层在框架中提供一些通用的接口能力，功能模块相对独立，核心层主要服务于操作层，比如：通过图像识别的元素定位模块、通过 <code>UI</code> 坐标的元素定位模块、通过属性定位的元素定位模块、键鼠操作的基础方操作模块、<code>Dbus</code> 接口操作模块、文件的增删改查操作模块等。</li></ul><h3 id="_2、自动化的应用" tabindex="-1">2、自动化的应用 <a class="header-anchor" href="#_2、自动化的应用" aria-label="Permalink to &quot;2、自动化的应用&quot;">​</a></h3><ul><li><p>CI 流程</p><ul><li><p>每日构建流水线：是对研发每日提交的代码进行测试，AT 的大致流程：每日下班之后会将各应用进行打包，然后在测试机上安装更新 deb 包，最后进行自动化测试。</p></li><li><p>持续集成流水线：是对应用提交集成的版本进行测试，AT 的大致流程：每日下载最新的 ISO 进行 <code>PXE</code> 部署，然后测试机安装最新的镜像，最后进行自动化测试。</p></li></ul></li><li><p>验收测试</p><ul><li>在各验收节点进行自动化验收，目前的策略是全用例覆盖全架构。</li></ul></li><li><p>回归测试</p><ul><li>回归测试今年规划建设中，旨在回归测试时执行自动化测试用例，减少功能测试的重复劳动力。</li></ul></li></ul><h3 id="_3、存在的问题" tabindex="-1">3、存在的问题 <a class="header-anchor" href="#_3、存在的问题" aria-label="Permalink to &quot;3、存在的问题&quot;">​</a></h3><ul><li><p>各应用之间存在耦合</p><p>在自动化测试项目初期，所有应用是整体发布，我们是将所有应用看成是一个整体，各应用作为其中的一个模块，所以存在应用间方法交叉调用的问题，这样从最初的设计来讲确实能够减少重复代码的编写。</p><p>但是，现在应用走独立发布，各应用都有自己的迭代节奏，在新需求快速变化的过程中，自动化维护变得异常困难，原因就是自动化项目里面各个应用的有比较多的耦合关系，因此我们需要进行解耦，以适应应用不同的迭代周期。</p></li><li><p>无法精准的划分用例范围</p><p>用例执行的范围不够精准，目前自动化用例执行时，主要通过用例的关键词 core（核心）来区分用例是否为核心用例，但是这样的区分太宽泛了，不能适应自动化测试在多场景下的应用。很多场景下我们还需要根据用例的等级、用例的类型、用例来源等等，不同的维度来挑选要执行的用例。在用例脚本中添加关键字需要人工一条条的改，费时费力，而且不好维护。</p></li><li><p>受新需求影响跳过的用例不好维护</p><p>目前需要跳过的用例都需要在对应的用例脚本里面，添加跳过用例的代码，后续解除跳过的时候又需要找到这条脚本，删掉跳过用例的代码。在跳过用例较多的情况下，维护起来有难度。</p></li><li><p>编写用例时逻辑比较复杂，需要调用多个应用的方法模块。</p></li><li><p>框架扩展性不足，无法整合性能自动化、压测自动化、安全自动化等专项测试。</p></li></ul><h2 id="二、方案设计" tabindex="-1">二、方案设计 <a class="header-anchor" href="#二、方案设计" aria-label="Permalink to &quot;二、方案设计&quot;">​</a></h2><p>为解决以上问题，适应不断丰富的测试场景，更好的发挥自动化测试的作用，需要对自动化架构及各功能模块进行重新设计规划。</p><h3 id="_1、架构设计" tabindex="-1">1、架构设计 <a class="header-anchor" href="#_1、架构设计" aria-label="Permalink to &quot;1、架构设计&quot;">​</a></h3><p>???+ note &quot;现AT框架架构图&quot; <img src="https://pic.imgdb.cn/item/64f054c4661c6c8e54ff4948.png" alt=""></p><h3 id="_2、设计思路" tabindex="-1">2、设计思路 <a class="header-anchor" href="#_2、设计思路" aria-label="Permalink to &quot;2、设计思路&quot;">​</a></h3><p>框架的运行逻辑：</p><p>通过核心层提供一个基础能力，业务层根据实际业务需求（测试用例）动态加载核心层，执行入口加载相应的用例集并控制执行，应用层根据实际测试需求，通过相应的配置项进行配置，从而触发自动化测试任务。</p><ul><li><p>核心层：</p><p>基本保持不变，部分模块会涉及到新功能开发，核心层各功能模块保持独立性，提供通用的接口能力，供上层调用；底层核心模块包括：</p><ul><li>图像识别模块</li><li><code>UI</code> 定位模块</li><li><code>Dbus</code> 接口操作模块</li><li>属性定位模块</li><li>日志模块</li><li>键鼠操作模块</li><li>文件操作模块</li><li>录屏模块</li><li>自定义断言模块</li><li>用例执行模块</li><li><code>PXE</code> 装机模块</li><li>键鼠信号模拟模块</li><li><code>OCR</code> 模块</li></ul></li><li><p>业务层：</p><p>以应用为维度划分，应用内包含多个测试类型，如功能测试、性能测试、漏洞扫描等，后续可以根据需要嫁接进来。其中功能测试设计思路：</p><ul><li><p>以应用为维度划分，并将测试数据和测试资源整合进来，增加用例标签 <code>csv</code> 文件，用于给每条用例打标签。</p><p>各标签所使用对应的字段名称，使用 <code>csv</code> 文件维护用例与标签的对应关系，对用例实现标签化管理，可以组合其中的标签而从驱动对应的自动化用例执行，兼容现有用例标签，且支持用例标签可扩展；</p><p>!!! note &quot;为什么使用csv格式&quot; 使用 <code>csv</code> 格式文件可以方便的使用 Excel 表格打开进行编辑，同时由于 <code>csv</code> 文件实际是以都好分隔的文本文件，代码中可以在不依赖三方库的情况下方便快速的解析它，可操作性和可维护性较高。</p></li><li><p>各个应用之间，用例、方法、标签和资源都是相互独立的，编写和维护用例时只需要自己应用下的方法和公共库即可。</p></li><li><p>结构举例：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apps</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deepin_album</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 应用名 (用下划线连接是 Python 编码规范)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> album_assert</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 断言库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> album_function_tag.csv</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 用例标签</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> asan_cases</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 漏洞扫描用例</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> function_cases</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 功能测试用例</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> res</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 测试资源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 应用内局部配置模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> widget</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 方法库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> album_widget</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 应用自己的方法库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> base_widget</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 方法基类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> other_widget</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 调用其他应用的方法库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deepin_camera</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> function_cases</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public_widget</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 公共方法库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> globalconfig</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 全局配置模块</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span></code></pre></div></li></ul></li><li><p>globalconfig 配置模块：</p><p>可以根据需要进行相应配置，测试同学可以根据自己的测试计划，在 <code>globalconfig</code> 里面进行配置。</p><p>全局配置项：</p><ul><li><p>执行一个或多个应用的用例：在 <code>pattern</code> 里面写入应用包名，多个应用之间用 <code>or</code> 连接，如 <code>deepin-music or deepin-movie</code>；</p></li><li><p>冒烟测试：在 <code>tags</code> 里面配置为 <code>smoke</code>；</p></li><li><p>集成测试：在 <code>tags</code> 里面配置为 <code>core</code> ；</p></li><li><p>全量测试：在 <code>tags</code> 里面为空即可；</p><p>!!! note &quot;&quot; 通过 <code>tags</code> 的配置比较灵活，后面标签化管理章节会讲到，支持标签的逻辑组合，可以根据需要进行灵活配置。</p></li><li><p>指定某台机器在指定镜像版本上执行用例：在 <code>IP</code> 里面配置测试机 <code>IP</code>，并在 <code>URL</code> 里面填入镜像的下载地址，框架会调用 <code>PXE</code> 进行自动装机，装机完之后自动开始执行配置的测试用例。</p></li></ul><p>应用内局部配置：</p><p>每个应用内部会有一个单独的配置模块，会包含一些本应用的测试资源的路径、执行用例的标签配置等等，如果在局部配置里面配置了用例执行标签，而外层执行器没有指定执行标签，则在执行时只会执行局部配置已配置的，若外层执行器也配置了执行标签，则会按照全局配置执行用例。</p><p>不同测试类型的配置都在同一个配置文件里面，<code>py</code> 文件里面分不同的类，<code>ini</code> 文件里面分不同的 <code>option</code>。</p><p>全局配置和局部配置的策略如下：</p><ul><li>全局配置了执行的用例标签，局部配置未配置，则按照全局配置执行。</li><li>全局配置未配置，局部配置了执行的用例标签，则按照局部配置执行。</li><li>全局配置了执行的用例标签，局部配置了执行的用例标签，则按照全局配置执行。</li></ul></li><li><p>应用层：</p><p><code>runner</code> 是测试执行的入口，它会根据配置里面的配置项，进行用例的加载和执行。它提供接口给自动化测试平台，平台上的指令实际上都是通过下发给执行器，然后由执行器来执行相应的测试。</p></li><li><p>自动化测试平台</p><p>是一个前端系统，可以进行测试机管理、自动安装镜像、自动安装指定应用版本、进行测试用例范围选择、用例触发执行控制、结果展示输出等。</p><ul><li><p>一个应用的功能测试、性能测试、漏洞扫描用例都可以单独触发。</p></li><li><p>兼容性测试主要通过 <code>PXE</code> 服务器对测试机进行装机，然后配合 AT 进行测试，可以实现不同系统版本、不同应用版本环境上都可以进行自动化的 AT 执行，提高兼容性测试效率。</p></li></ul></li></ul><h2 id="三、详细方案" tabindex="-1">三、详细方案 <a class="header-anchor" href="#三、详细方案" aria-label="Permalink to &quot;三、详细方案&quot;">​</a></h2><h3 id="_1、用例解耦" tabindex="-1">1、用例解耦 <a class="header-anchor" href="#_1、用例解耦" aria-label="Permalink to &quot;1、用例解耦&quot;">​</a></h3><p>存在耦合关系的方法：这个方法存在被外部应用调用的情况，则这个方法存在耦合关系。</p><p>1.1、通过编辑器 <code>Find Usages</code> 查看每个方法被调用的路径和被调用次数；</p><p>1.2、如果某个方法被 1 个外部应用调用，则在外部应用下新建一个 <code>widget</code> 的 Python 文件，在文件中写一个 <code>Widget</code> 类，在类中重写此方法；</p><p>1.3、操作层文件名均以 <code>widget</code> 结尾，类名以 <code>Widget</code> 结尾，如：文件名 <code>music_widget.py</code> ：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MusicWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;音乐的操作方法类&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> click_xxx_by_attr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;通过属性定位的方式，点击某个元素&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ...</span></span></code></pre></div><h3 id="_2、公共库建设" tabindex="-1">2、公共库建设 <a class="header-anchor" href="#_2、公共库建设" aria-label="Permalink to &quot;2、公共库建设&quot;">​</a></h3><p>2.1、如果某个方法被 2 个及以上的外部应用调用，则在 <code> public</code> 目录下新建一个 <code>widget</code> 的 Python 文件，在文件中写一个 <code>Widget</code> 类，在类中重写此方法；<code>public</code> 即为公共方法库；</p><p>2.2、在用例层修改用例中类的导入路径，属于公共方法的则调用 <code>public</code> 中的类，外部应用的操作方法，则调用本应用目录下重写的外部应用方法。</p><p>比如：几乎所有多媒体应用都需要通过文管加载资源，调起的文管对话框实际为 <code>dde-desktop</code>，因此将 <code>dde_desktop_public_widget.py</code> 放到 <code>public</code> 里面：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DdeDesktopPublicWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;公共-桌面的操作方法&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> click_xxx_by_attr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;通过属性定位的方式，点击某个元素&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ...</span></span></code></pre></div><h3 id="_3、用例标签化管理" tabindex="-1">3、用例标签化管理 <a class="header-anchor" href="#_3、用例标签化管理" aria-label="Permalink to &quot;3、用例标签化管理&quot;">​</a></h3><p>3.1、根据业务需要，用例可以添加对应的标签，比如：</p><ul><li><p>用例级别：对应 <code>PMS</code> 上用例级别，分别用 <code>L1、L2、L3、L4</code> 表示；</p></li><li><p>用例类型：对应 <code>core</code>、<code>smoke</code>，或为空；</p></li><li><p>用例来源：对应 <code>PMS</code> 用例来源；</p><p>举例：</p><table><thead><tr><th style="text-align:center;">用例ID</th><th style="text-align:center;">用例级别</th><th style="text-align:center;">用例类型</th><th style="text-align:center;">用例来源</th></tr></thead><tbody><tr><td style="text-align:center;">001</td><td style="text-align:center;"><code>L1</code></td><td style="text-align:center;"><code>core</code></td><td style="text-align:center;"><code>xxx</code></td></tr></tbody></table><p>标签支持扩展；</p></li></ul><p>3.2、在每个应用目录下新建 <code>csv</code> 文件，用于保存用例标签，第一列为用例的 ID，从第二列开始及之后的列，每一列都是一个用例标签；后续需要新增用例标签，可以直接在 <code>csv</code> 文件里面添加对应的列即可；</p><p>对于用例规模比较大的应用，比如文件管理器，建议分模块，每个模块建立一个 <code>csv</code> 文件，用于管理模块内的用例标签。是否分模块维护 <code>csv</code> 取决于应用的用例复杂度，同时我们应该充分考虑后期的可维护性，<code>csv</code> 文件太多了也是一个很糟糕的事情。</p><p>3.3、对照 <code>PMS</code> 上用例等级、用例类型和用例来源，标记所有已实现的用例标签，后续编写新增自动化用例时，每写一条都需要在对应的 <code>csv</code> 文件里面标记此条用例的标签。</p><p>3.4、跳过用例标签化</p><p>现有跳过用例的方式是在用例脚本里面给用例添加装饰器，解除跳过时将装饰器代码删掉，这种方式需要修改用例代码，而通过 <code>csv</code> 文件来管理跳过用例则会方便很多：</p><p>举例：</p><table><thead><tr><th style="text-align:center;">用例ID</th><th style="text-align:center;">...（各种用例标签）</th><th style="text-align:center;">跳过原因</th></tr></thead><tbody><tr><td style="text-align:center;">001</td><td style="text-align:center;">...</td><td style="text-align:center;">skip-受到某新需求影响</td></tr></tbody></table><ul><li>将跳过用例操作也整合进入用例标签，在 <code>csv</code> 文件中新增一列为“跳过原因”；</li><li>如果应用受到新需求影响需要跳过，则在此列备注具体的跳过原因。跳过的原因统一标记为 “<code>skip-跳过原因</code>”；</li><li>用例执行时判断 <code>csv</code> 文件里面跳过原因列是否存在跳过标记，如果已经标记了跳过原因，最终的用例状态会被标记为 <code>SKIPED</code>，用例也不会被执行。</li></ul><h3 id="_4、用例执行" tabindex="-1">4、用例执行 <a class="header-anchor" href="#_4、用例执行" aria-label="Permalink to &quot;4、用例执行&quot;">​</a></h3><p>4.1、标签化管理的驱动执行逻辑功能实现</p><ul><li>开发根据用例标签文件里面的用例标签执行对应用例的功能，能支持多个标签的逻辑组合，执行入口能随意通过用例标签指定要执行的用例。</li><li>用例标签的驱动方式必须能支持标签的扩展，未来随着业务的变化可能需要增加各种各样的标签。</li></ul><p>4.2、不同测试类型的用例执行</p><p>功能测试、漏洞扫描、性能测试等不同测试类型的用例是分开执行的，也就是在一次执行中，只能执行其中一种测试类型，具体要执行哪一种同样通过参数来控制。</p><p>4.3、分布式轮换执行</p><p>由于测试机资源有限，随着自动化用例数量的增加，CI 执行时间会越来越长。</p><p>分布式轮换执行的功能：</p><ul><li>同一个应用的用例分散到不同架构的测试机上执行，缩短执行总时间；</li><li>第二天跑的时候同一个机器上会执行昨天没有执行到的用例，后续执行同理；</li><li>可以实现在全架构测试机上轮流执行用例，既能保证执行了所有的用例，又能在资源有限的情况下覆盖了所有的架构。</li></ul><h3 id="_5、自动化测试平台" tabindex="-1">5、自动化测试平台 <a class="header-anchor" href="#_5、自动化测试平台" aria-label="Permalink to &quot;5、自动化测试平台&quot;">​</a></h3><p>5.1、自动化测试平台作为前端界面系统，通过页面上的一些功能选项进行对应测试任务的管理或触发，业内比较流行的实现方案是使用 <code>Vue + DRF</code> 实现一个前后端分离的系统。</p><p>测试平台可能会涉及到的模块有：测试机资源管理模块、用例执行控制模块、结果展示模块、<code>PXE</code> 镜像安装模块等。</p><p>??? note &quot;想要的预期&quot; 用户（测试、研发同学等）可以配置自己的测试计划，如执行哪个应用、执行用例的范围、在哪台机器上执行、镜像版本及下载地址、应用版本及下载地址、执行时间。</p><p>5.2、执行入口提供给测试平台的接口包括：用例执行接口、结果返回接口、镜像下载接口、测试机镜像安装接口、应用下载接口、测试机应用安装更新接口等。</p><p>前端平台目前还没有太多详细的方案，本次设计主要集中在后端这部分架构的设计上。</p><h2 id="四、实施计划" tabindex="-1">四、实施计划 <a class="header-anchor" href="#四、实施计划" aria-label="Permalink to &quot;四、实施计划&quot;">​</a></h2><p>近期任务计划</p><table><thead><tr><th style="text-align:left;">阶段目标</th><th style="text-align:center;">计划开始时间</th><th style="text-align:center;">计划结束时间</th></tr></thead><tbody><tr><td style="text-align:left;">应用解耦、公共方法库抽离和方法文档整理：文管代码解耦</td><td style="text-align:center;">2022/3/28</td><td style="text-align:center;">2022/4/8</td></tr><tr><td style="text-align:left;">应用解耦、公共方法库抽离和方法文档整理：图形图像应用代码解耦</td><td style="text-align:center;">2022/4/11</td><td style="text-align:center;">2022/4/22</td></tr><tr><td style="text-align:left;">应用解耦、公共方法库抽离和方法文档整理：音视频应用代码解耦</td><td style="text-align:center;">2022/4/11</td><td style="text-align:center;">2022/4/22</td></tr><tr><td style="text-align:left;">应用解耦、公共方法库抽离和方法文档整理：全局搜索代码解耦</td><td style="text-align:center;">2022/4/25</td><td style="text-align:center;">2022/4/26</td></tr><tr><td style="text-align:left;">应用解耦、公共方法库抽离和方法文档整理：公共库建设</td><td style="text-align:center;">2022/4/27</td><td style="text-align:center;">2022/5/5</td></tr><tr><td style="text-align:left;">应用解耦、公共方法库抽离和方法文档整理：封装的方法整理成一个表</td><td style="text-align:center;">2022/5/6</td><td style="text-align:center;">2022/5/10</td></tr><tr><td style="text-align:left;">完成标签化管理和执行：用例标签分类评估</td><td style="text-align:center;">2022/5/11</td><td style="text-align:center;">2022/5/11</td></tr><tr><td style="text-align:left;">完成标签化管理和执行：标签化执行驱动程序编写</td><td style="text-align:center;">2022/5/12</td><td style="text-align:center;">2022/5/23</td></tr><tr><td style="text-align:left;">完成标签化管理和执行：需实现自动解析 csv 表格中的用例编号</td><td style="text-align:center;">2022/5/12</td><td style="text-align:center;">2022/5/23</td></tr><tr><td style="text-align:left;">完成标签化管理和执行：编写爬虫脚本，爬取 pms 上用例的标签</td><td style="text-align:center;">2022/5/11</td><td style="text-align:center;">2022/5/13</td></tr><tr><td style="text-align:left;">完成标签化管理和执行：编写定时自动维护本地 csv 文件脚本</td><td style="text-align:center;">2022/5/11</td><td style="text-align:center;">2022/5/20</td></tr></tbody></table><p>中期任务计划</p><table><thead><tr><th>阶段目标</th><th style="text-align:center;">计划开始时间</th><th style="text-align:center;">计划结束时间</th></tr></thead><tbody><tr><td>目录结构调整</td><td style="text-align:center;">2022/5/20</td><td style="text-align:center;">2022/6/2</td></tr><tr><td>完成全局和局部配置的具体方案和逻辑实现</td><td style="text-align:center;">2022/6/6</td><td style="text-align:center;">2022/6/17</td></tr><tr><td>静态扫描问题清零</td><td style="text-align:center;">2022/6/20</td><td style="text-align:center;">2022/7/1</td></tr><tr><td>完成新框架使用培训</td><td style="text-align:center;">2022/7/4</td><td style="text-align:center;">2022/7/11</td></tr><tr><td>落地运行</td><td style="text-align:center;">2022/7/12</td><td style="text-align:center;">2022/7/20</td></tr><tr><td>底层库用途说明文档编写</td><td style="text-align:center;">2022/7/21</td><td style="text-align:center;">2022/7/28</td></tr></tbody></table>`,63),n=[l];function p(d,h,c,k,o,r){return s(),t("div",null,n)}const y=i(a,[["render",p]]);export{F as __pageData,y as default};
