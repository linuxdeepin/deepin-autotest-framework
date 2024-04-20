import{_ as e,c as t,o as d,a7 as a}from"./chunks/framework.CPntGteo.js";const x=JSON.parse('{"title":"标签化管理","description":"","frontmatter":{},"headers":[],"relativePath":"指南/特色功能/标签化管理.md","filePath":"指南/特色功能/标签化管理.md","lastUpdated":1713583771000}'),c={name:"指南/特色功能/标签化管理.md"},i=a('<h1 id="标签化管理" tabindex="-1">标签化管理 <a class="header-anchor" href="#标签化管理" aria-label="Permalink to &quot;标签化管理&quot;">​</a></h1><h2 id="标签说明" tabindex="-1">标签说明 <a class="header-anchor" href="#标签说明" aria-label="Permalink to &quot;标签说明&quot;">​</a></h2><p>根据现有业务需要，用例需要添加的标签有：</p><ul><li>脚本 ID ：自动化用例脚本/函数 ID；</li><li>PMS用例ID ：<code>PMS</code> 上对应的用例 ID（用例库 ID）；默认使用用例库 ID，对于暂时没有使用用例库管理用例的项目，可以使用产品库用例 ID；</li><li>用例级别 ：对应 <code>PMS</code> 上用例级别，分别用 <code>L1、L2、L3、L4</code> 表示；</li><li>用例类型 ：<code>FUNC</code>（功能）、<code>PERF</code>（性能）、<code>STR</code>（压力）、<code>SEC</code>（安全）、<code>CTS</code>（兼容性）、<code>API</code>（接口）、<code>BASELINE</code>（基线-预留）</li><li>设备类型 ：<code>PPL</code>（依赖外设的用例）、<code>COL</code>（依赖主控机的用例）</li><li>一二级bug自动化 ：<code>BUG</code>（由 <code>Bug</code> 转的用例）</li><li>上线对象 ：<code>CICD</code>，表示上线到 <code>CICD</code> 流水线的用例，后续可一键生成 <code>case_list.csv</code> 文件，用于导入到明道云 AT 用例列表中控制 <code>CICD</code> 跑测范围；</li><li>跳过原因 ：<code>skip-XXX</code>，用于控制用例是否执行；</li><li>确认修复 ：<code>fixed-XXX</code>，用于标记用例的修复状态（后面详细讲解用法）；</li><li>废弃用例 ：<code>removed-已废弃</code>，用于标记已经废弃的用例，此用例标签不会被添加，也不会被执行；</li></ul><p>示例：</p><table><thead><tr><th style="text-align:center;">脚本ID</th><th style="text-align:center;">PMS用例ID</th><th style="text-align:center;">用例级别</th><th style="text-align:center;">用例类型</th><th style="text-align:center;">设备类型</th><th style="text-align:center;">一二级bug自动化</th><th style="text-align:center;">上线对象</th><th style="text-align:center;">跳过原因</th><th style="text-align:center;">确认修复</th><th style="text-align:center;">废弃用例</th><th>...</th></tr></thead><tbody><tr><td style="text-align:center;">679537</td><td style="text-align:center;">679537</td><td style="text-align:center;">L1</td><td style="text-align:center;">FUNC</td><td style="text-align:center;">PPL</td><td style="text-align:center;">BUG</td><td style="text-align:center;">CICD</td><td style="text-align:center;">skip-XXX</td><td style="text-align:center;">fixed-XXX</td><td style="text-align:center;">removed-已废弃</td><td>...</td></tr></tbody></table><h2 id="操作步骤" tabindex="-1">操作步骤 <a class="header-anchor" href="#操作步骤" aria-label="Permalink to &quot;操作步骤&quot;">​</a></h2><p>2.1、在子项目目录下新建 <code>csv</code> 文件，用于保存用例标签，以 用例脚本的 py 文件去掉首字符串 &quot;test_&quot; ，去掉用例序号后的字符串，取中间的名称作为 csv 文件的文件名 。</p><p>例如:</p><ul><li>相册的用例文件为 <code>test_album_xxx.py</code>，xxx 表示用例的ID（也可以是自定义的数字代表用例序号），此时 <code>csv</code> 文件名就应为 <code>album.csv</code> ；</li></ul><p>对于用例规模比较大的应用，比如文件管理器，建议分模块，每个模块建立一个 <code>csv</code> 文件，所有 <code>csv</code> 文件建议放在一个 <code>tags</code> 目录下。</p><p>是否分模块维护 <code>csv</code> 取决于应用的用例复杂度，同时我们应该充分考虑后期的可维护性，<code>csv</code> 文件太多了也是一个很糟糕的事情。</p><p>2.2、第一列为脚本 ID，从第二列开始及之后的列，每一列都是一个用例标签；后续需要新增用例标签，可以直接在 <code>csv</code> 文件里面添加对应的列即可；用例标签可以无序。</p><h2 id="跳过用例" tabindex="-1">跳过用例 <a class="header-anchor" href="#跳过用例" aria-label="Permalink to &quot;跳过用例&quot;">​</a></h2><p>传统跳过用例的方式是在用例脚本里面给用例添加装饰器(<code>@pytest.mark.skip</code>)，解除跳过时将装饰器代码删掉，这种方式需要修改用例代码，而通过 <code>csv</code> 文件来管理跳过用例则会方便很多;</p><p>将跳过用例操作也整合进入用例标签，在 <code>csv</code> 文件中新增一列为“跳过原因”；</p><h3 id="_1-固定跳过" tabindex="-1">1. 固定跳过 <a class="header-anchor" href="#_1-固定跳过" aria-label="Permalink to &quot;1. 固定跳过&quot;">​</a></h3><p>示例：</p><table><thead><tr><th style="text-align:center;">脚本ID</th><th style="text-align:center;">...（各种用例标签）</th><th style="text-align:center;">跳过原因</th></tr></thead><tbody><tr><td style="text-align:center;">679537</td><td style="text-align:center;">...</td><td style="text-align:center;">skip-受到某新需求影响</td></tr></tbody></table><ul><li>如果应用受到新需求影响需要跳过，则在此列备注具体的跳过原因。跳过的原因统一标签开头为 “<code>skip-XXX</code>”；</li><li>用例执行时判断 <code>csv</code> 文件里面跳过原因列是否存在跳过标签，存在跳过标签则用例也不会被执行，最终的用例状态会被标签为 <code>SKIPED</code>。</li></ul><h3 id="_2-条件判断跳过" tabindex="-1">2. 条件判断跳过 <a class="header-anchor" href="#_2-条件判断跳过" aria-label="Permalink to &quot;2. 条件判断跳过&quot;">​</a></h3><p>示例：</p><table><thead><tr><th style="text-align:center;">脚本ID</th><th style="text-align:center;">...（各种用例标签）</th><th style="text-align:center;">跳过原因</th></tr></thead><tbody><tr><td style="text-align:center;">001</td><td style="text-align:center;">...</td><td style="text-align:center;">skipif_platform-aarch64&amp;mips64</td></tr></tbody></table><ul><li>某些用例会因为不同的环境判断用例是否执行，常见的场景为在不同架构上判断是否执行，跳过的原因标签为 “<code>skipif_platform-</code>” 加架构名，多个架构之间使用 “<code>&amp;</code>” 拼接；</li><li>以上例子为用例执行时，判断当前架构是否为 <code>arrch64</code> 或者 <code>mips64</code>，若是，则跳过用例不执行，若否则执行用例；</li></ul><p>在项目目录路径下存在文件 <code>setting/skipif.py</code>，所有条件判断跳过的函数写在此文件中。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">--</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">--</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;setting/skipif.py&quot;</span></span></code></pre></div><p>方法编写规范：</p><ul><li>方法名必须以 <code>skipif</code> 开头；</li><li>方法必须有返回结果并且为布尔值（<code>True</code> 代表跳过，<code>False</code> 代表不跳过）；</li><li>方法只能有一个入参；</li></ul><p>在 <code>csv</code> 文件跳过原因一栏中填写为 “<code>{函数名}-{参数}</code>”，例如：<code>skipif_platform-aarch64</code>；在用例收集阶段会以第一个 “<code>-</code>” 进行分割，截取的左侧字符串作为函数名，在 <code>skipif.py</code> 文件中查找是否有同名函数，并将截取的右侧作为参数传递给该函数，通过获取该函数返回的布尔值，返回 <code>True</code>，则用例不执行，返回 <code>False</code>，则执行该用例。</p><p>【重要】</p><ul><li><p>若函数需要多个参数，可自定义多个参数之间的连接符，连接符号不可使用下划线和逗号，推荐统一使用 <code>&amp;</code> 符号；</p></li><li><p>若需要多个 skipif 条件判断组合，使用 <code>&amp;&amp;</code> 符号将两个方法分开，比如：skipif_platform-aarch64&amp;&amp;skipif_xdg_type-wayland ；</p></li></ul><h2 id="确认修复" tabindex="-1">确认修复 <a class="header-anchor" href="#确认修复" aria-label="Permalink to &quot;确认修复&quot;">​</a></h2><p>针对于某些用例修复后，但不能立即删除跳过原因（<code>skip-XXX</code>）的用例，新增一列标签名为 “<code>确认修复</code>”，作为标记该用例是否已经修复，固定填入字段为 “<code>fixed-已修复</code>”。这样这条用例即使同时标记了 <code>skip-XXX</code> 也会正常执行。</p><p>示例：</p><table><thead><tr><th style="text-align:center;">用例ID</th><th style="text-align:center;">...（各种用例标签）</th><th style="text-align:center;">跳过原因</th><th style="text-align:center;">确认修复</th></tr></thead><tbody><tr><td style="text-align:center;">679537</td><td style="text-align:center;">...</td><td style="text-align:center;">skip-受到某新需求影响</td><td style="text-align:center;">fixed-已修复</td></tr></tbody></table><p>【同时标记了<code>skip</code> 和 <code>fixed</code>，但仍然想要跳过用例】</p><p>当 “跳过原因” 和 “确认修复” 中同时填入后，命令行传递参数 <code>--ifixed yes</code>，则代码不会执行该条用例。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --ifixed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yes</span></span></code></pre></div><p>看到这里有些同学可能要问了，我想恢复跳过执行，直接把 <code>skip-XXX</code> 这一列标签删掉不就好了，还搞什么确认修复干啥？</p><p>这里给各位看官稍微解释一下：</p><p>（以下流水线指的是每日构建的流水线，跑 AT 的全量用例）</p><p>首先，流水线上跑的是 AT 历史 Tag，跳过用例的标签(<code>skip-XXX</code>) 是在最新的代码上提交的，我们采用最新的 <code>csv</code> 文件覆盖历史 <code>csv</code> 文件的设计来实现了对历史 Tag 上用例的跳过；</p><p>然后，在日常跳过用例的过程中，同时也在修复一些用例，修复后的这些用例在本地调试的时候我们不希望继续跳过，但是此时，修复的这些用例可能还不稳定，不适合马上放到流水线去跑，也就是说流水线上我们是希望他继续跳过的，因此，咱不能直接把 <code>skip-XXX</code> 干掉；</p><p>这里就矛盾了，一个需求是<strong>想修复了立马解除跳过</strong>，另一个需求又<strong>不想修复了立马解除跳过</strong>，怎么办呢？</p><p>我们使用“确认修复”来标记这条用例已经修复了，这样你本地调试用例的时候这条已修复的用例是会执行的，同时在流水线上将 <code>--ifixed yes</code> 参数加上，那么流水线上执行时这条用例仍然是跳过的状态，后续你打 Tag 的时候，把 “跳过原因” 和 “确认修复” 中的标签全部删掉就可以了。</p><p>这就是“确认修复”这个标签的背景，需要各位看官稍微品一品。</p><h2 id="废弃用例" tabindex="-1">废弃用例 <a class="header-anchor" href="#废弃用例" aria-label="Permalink to &quot;废弃用例&quot;">​</a></h2><p>针对某些用例，由于需求变更，环境影响或评估不再适用于自动化测试时，用例需要废弃，则新增一列标签名为 “废弃用例”，该列存在 “removed-{废弃原因}”，则用例不会执行。</p><table><thead><tr><th style="text-align:center;">用例ID</th><th style="text-align:center;">...（各种用例标签）</th><th style="text-align:center;">跳过原因</th><th style="text-align:center;">确认修复</th><th style="text-align:center;">废弃用例</th></tr></thead><tbody><tr><td style="text-align:center;">679537</td><td style="text-align:center;">...</td><td style="text-align:center;">skip-受到某新需求影响</td><td style="text-align:center;">fixed-已修复</td><td style="text-align:center;">removed-已废弃</td></tr></tbody></table><p><img src="https://pic.imgdb.cn/item/64f054ca661c6c8e54ff4f70.png" alt=""></p><h2 id="设计思路" tabindex="-1">设计思路 <a class="header-anchor" href="#设计思路" aria-label="Permalink to &quot;设计思路&quot;">​</a></h2><p>上面介绍 <code>Pytest</code> 框架提供的标签功能 mark，使用时需要为每一个用例添加标签装饰器，则操作复杂，可维护性差，其根本问题就是标签分散在每一条用例的装饰器上，难以集中维护；于是乎将所有标签使用 <code>csv</code> 文件进行集中管理，并通过 <code>Pytest</code> 的钩子函数，读取 <code>csv</code> 文件，动态添加标签到用例中。</p><h2 id="csv文件格式" tabindex="-1">CSV文件格式 <a class="header-anchor" href="#csv文件格式" aria-label="Permalink to &quot;CSV文件格式&quot;">​</a></h2><p>此配置文件需要维护大量的标签数据，且要方便能使用 <code>Excel</code> 打开进行编辑查看，更重要的是我们不想引入三方依赖，<code>CSV</code> 文件几乎是唯一能满足所有的要求的文件格式。</p>',54),l=[i];function o(s,n,r,h,p,y){return d(),t("div",null,l)}const k=e(c,[["render",o]]);export{x as __pageData,k as default};
