import{_ as s,c as i,o as a,U as n}from"./chunks/framework.DUvK6mag.js";const D=JSON.parse('{"title":"全局配置 - setting.conf","description":"","frontmatter":{},"headers":[],"relativePath":"指南/环境/全局配置.md","filePath":"指南/环境/全局配置.md","lastUpdated":1717754560000}'),p={name:"指南/环境/全局配置.md"},l=n(`<h1 id="全局配置-setting-conf" tabindex="-1">全局配置 - setting.conf <a class="header-anchor" href="#全局配置-setting-conf" aria-label="Permalink to &quot;全局配置 - setting.conf&quot;">​</a></h1><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><p>全局配置模块 <code>setting</code> 包含了以下配置文件：</p><p>（1）<code>ini</code> 配置文件</p><p>主要配置一些全局的配置项，譬如：失败重跑次数、是否失败录屏、单条用例超时时间、会话超时时间、执行时日志级别、生成的报告类型、以及分布式执行的一些策略配置项等等。</p><p>（2）<code>py</code> 配置文件</p><p>主要提供配置文件读取、动态获取一些常量（如项目根目录绝对路径 <code>(BASE_DIR)</code>、系统架构（<code>SYS_FRAME</code>）、时间字符串（<code>strftime</code>）、本机 <code>USERNAME</code> <code>IP</code> 等等）、公共 URL 等。</p><p>一些支持人工修改或自定义的配置项都在 <code>ini</code> 配置文件里面，<code>py</code> 文件是不需要人工去修改的；</p><h2 id="配置对象获取" tabindex="-1">配置对象获取 <a class="header-anchor" href="#配置对象获取" aria-label="Permalink to &quot;配置对象获取&quot;">​</a></h2><p>导入全局配置对象</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> setting </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> conf</span></span></code></pre></div><p>通过 <code>conf</code> 对象能获取到所有可获取的配置项的值，比如：</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">conf.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PASSWORD</span></span></code></pre></div><p>这样可以获取到 <a href="https://github.com/linuxdeepin/youqu/blob/master/setting/globalconfig.ini" target="_blank" rel="noreferrer">globalconfig.ini</a> 配置文件中 <code>PASSWORD</code> 配置的值。</p><p>除了上面这种导入方式，还可以这样导入：</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> setting.globalconfig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GlobalConfig</span></span></code></pre></div><p><code>GlobalConfig</code> 也是全局配置对象，实际上 <code>conf</code> 是 <code>GlobalConfig</code> 的别名，你可以根据自己喜欢选择用哪个；</p><h2 id="app工程配置对象" tabindex="-1">APP工程配置对象 <a class="header-anchor" href="#app工程配置对象" aria-label="Permalink to &quot;APP工程配置对象&quot;">​</a></h2><p>所有应用库配置对象都是继承框架的全局配置类的:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> setting.globalconfig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _GlobalConfig</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _Config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_GlobalConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    pass</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _Config()</span></span></code></pre></div><p>这样在子项目就可以使用到所有的全局配置。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">config.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SYS_ARCH</span></span></code></pre></div><h2 id="全局配置项明细" tabindex="-1">全局配置项明细 <a class="header-anchor" href="#全局配置项明细" aria-label="Permalink to &quot;全局配置项明细&quot;">​</a></h2><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;=============================== RUN CONFIG ===================================</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[run]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;执行的应用名称</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;为空表示执行 apps/ 目录下所有应用的用例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;eg: apps/autotest_deepin_music 或 autotest_deepin_music</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">APP_NAME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;执行包含关键词的用例,关键词可以是用例对象中的任意字符,且大小写不敏感</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;模块名称、py文件名称、类名、函数名等等都可以做为关键词</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;比如：apps/autotest_deepin_music/case/test_music_001.py::TestMusic::test_music_001</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;整个字符串中可以任意截取字符作为关键词。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">KEYWORDS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;执行包含用例标签的用例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;标签可以是传统的pytest标签：@pytest.mark.L1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;也可以是YouQu特有的CSV文件管理的标签；</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;-----------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;1.KEYWORDS 和 TAGS 都为空表示执行 APP_NAME 的所有用例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;2.KEYWORDS 和 TAGS 都支持逻辑组合，即 and/or/not 的表达式</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;比如：TAGS = L1 or smoke ,表示执行标签带有 L1 或 somke 标签的用例；</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;这两个参数也可以同时使用，可以组合出任意的用例集合，只有想不到没有办不到。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;-----------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TAGS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;本地文件测试套，将要执行的用例写入指定的 csv 文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;默认为空，从基础框架根目录开始：e.g. CASE_FILE = case_list.txt</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;如果这里有值，APP_NAME KEYWORDS TAGS 的配置均不生效</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CASE_FILE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;最大失败用例数量的占比</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;比如：总执行用例数为 100, 若 MAX_FAIL = 0.5,则失败用例数达到 50 就会终止测试。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MAX_FAIL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;单条用例的超时时间，如果一条用例的执行时间超时，这条用例会被停止，后续用例继续执行。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;单位为秒</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;这是一个全局统一配置，如果某条用例需要单独配置超时时间，可以在用例中这样写：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;@pytest.mark.timeout(500)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;def test_xxx_001():</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;    ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;会话超时（所有用例执行的超时时间）是根据全局超时配置和用例单独超时配置自动计算的。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CASE_TIME_OUT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 300</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;失败用例重跑次数</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;注意，RERUN = 1 表示重跑 1 次，即第一次用例执行失败会自动重跑 1 次，总共执行 2 次；</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;如果第 2 次执行成功，结果成功，失败亦为失败。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RERUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;失败录屏从第几次失败开始录制视频。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;比如 RECORD_FAILED_CASE = 1 ，表示用例第 1 次执行失败之后开始录屏，RERUN &gt;= RECORD_FAILED_CASE。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;1.关闭录屏：RECORD_FAILED_CASE &gt; RERUN</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;2.每条用例都录屏：RECORD_FAILED_CASE = 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RECORD_FAILED_CASE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;yes 每条用例执行之后进行环境清理</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CLEAN_ALL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = yes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;检查测试机分辨率, 比如：1920x1080, 多个分辨率检查用英文逗号连接。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;no: 表示不做分辨率校验</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RESOLUTION</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1920x1080, 1080x1920, 3840x1080</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;不跳过用例，csv文件里面标记了 skip-xxx的用例不跳过</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOSKIP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = no</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;ignore fixed</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;no，只要标记了fixed的用例，即使标记了skip-，也会执行；</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;yes，fixed不生效，仅通过skip跳过用例；</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">IFIXED</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = no</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;要安装deb包的路径</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;e.g : ~/Downloads/ 安装下载目录下的deb包，如果是远程执行，会自动拷贝到远程并安装。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DEB_PATH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;DEBUG 模式执行用例，只收集不执行用例，也不做设备分辨率的检查。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DEBUG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = no</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;记录top命令查询的系统资源占用情况，TOP = 3 表示记录前3个进程。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TOP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;指定用例执行次数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">REPEAT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;默认在所有测试完成之后输出报错信息.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;yes, 测试过程中立即显示报错</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DURING_FAIL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = no</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;注册自启服务</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">AUTOSTART</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = no</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;测试机的密码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;图像识别重试次数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">IMAGE_MATCH_NUMBER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;图像识别重试每次间隔等待时间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">IMAGE_MATCH_WAIT_TIME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;图像识别匹配度</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">IMAGE_RATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 0.8</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;截取当前屏幕实时图像保存路径，用于图像识别坐标</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SCREEN_CACHE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = /tmp/screen.png</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;截取屏幕上指定区域图片，保存临时图片的路径</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TMPDIR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = /tmp/tmpdir</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;系统主题</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SYS_THEME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = deepin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;=============================== OCR CONFIG ===================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;OCR服务端地址</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OCR_SERVER_HOST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 10.8.13.7/10.8.13.66/10.8.13.55/10.8.13.100</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;OCR端口</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OCR_PORT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 8890</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;网络重试次数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OCR_NETWORK_RETRY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;OCR_TIMEOUT时间内重试间隔</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OCR_PAUSE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;OCR识别的总超时</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OCR_TIMEOUT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;OCR识别的最大次数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OCR_MAX_MATCH_NUMBER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 100</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;=============================== IMAGE CONFIG ===================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;OpenCV服务端地址</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OPENCV_SERVER_HOST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;图像识别端口</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OPENCV_PORT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 8889</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;网络重试次数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OPENCV_NETWORK_RETRY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;OPENCV_TIMEOUT</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OPENCV_PAUSE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;图像识别的总超时</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OPENCV_TIMEOUT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;图像识别的最大次数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OPENCV_MAX_MATCH_NUMBER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 100</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;=============================== SLAVE CONFIG ===================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;附属的测试机，用例步骤中与其他机器进行交互</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;        ┌─ slave \${user}@\${ip}:\${password}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; master ┼─ slave mikigo@192.168.8.11:admin123</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;        └─ slave \${user}@\${ip}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;如果\${password}和前面配置项PASSWORD一样，可以不传：\${user}@\${ip}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;多个机器之间用斜线分割：\${user}@\${ip}:\${password}/\${user}@\${ip}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SLAVES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;=============================== Web UI CONFIG ===================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;为Web UI自动化测试提供一个fixture对象：page，它默认使用系统自带的浏览器进行测试。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;框架还提供一个fixture对象：native_page，它使用最新的chromium浏览器进行测试。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;以下配置项默认值为系统自带的浏览器的配置，如果是其他第三方的浏览器可以指定浏览器对应的路径。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; def test_xxx_001(page):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;     page.goto(&quot;www.baidu.com&quot;)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; def test_xxx_001(native_page):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;     native_page.goto(&quot;www.baidu.com&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;指定浏览器启动的用户数据缓存目录</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">USER_DATE_DIR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = {{HOME}}/.config/browser</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;指定浏览器可执行文件路径</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">EXECUTABLE_PATH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = /usr/bin/browser</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;=============================== REMOTE CONFIG ===================================</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[remote]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;发送代码到测试机（不含report目录）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SEND_CODE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = yes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;搭建测试环境</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;如果为yes，不管send_code是否为yes都会发送代码到测试机。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">BUILD_ENV</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = no</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;测试机密码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CLIENT_PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;yes表示所有测试机并行跑，执行相同的测试用例。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;no表示测试机分布式执行，服务端会根据收集到的测试用例自动分配给各个测试机执行。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PARALLEL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = yes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;清理 report 目录</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CLEAN_SERVER_REPORT_DIR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = no</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CLEAN_CLIENT_REPORT_DIR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = yes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;测试机轮询次数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SCAN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 300</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;远程执行测试机</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;              ┌─ client \${user}@\${ip}:\${password}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; youqu-server ┼─ client mikigo@192.168.8.11:admin123</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;              └─ client \${user}@\${ip}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;如果\${password}和前面配置项CLIENT_PASSWORD一样，可以不传：\${user}@\${ip}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;多个机器之间用斜线分割：\${user}@\${ip}:\${password}/\${user}@\${ip}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CLIENTS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;=============================== REPORT CONFIG ===================================</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[report]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;测试报告的title</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">REPORT_TITLE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = YouQu Report</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;测试报告的name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">REPORT_NAME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = YouQu Report</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;测试报告的默认语言</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;en:English</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;ru:Русский</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;zh:中文</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;de:Deutsch</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;nl:Nederlands</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;he:Hebrew</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;br:Brazil</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;pl:Polski</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;ja:日本語</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;es:Español</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;kr:한국어</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;fr:Français</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;az:Azərbaycanca</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">REPORT_LANGUAGE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = zh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;用例执行完后生成的测试报告格式</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;目前支持 allure, xml, json （支持同时生成）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">REPORT_FORMAT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = allure, xml, json</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;指定报告生成的路径（相对项目根目录下）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ALLURE_REPORT_PATH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = report/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">XML_REPORT_PATH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = report/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">JSON_REPORT_PATH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = report/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;=============================== PMS CONFIG ===================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;PMS相关配置，包含以下几个方面：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;1.PMS测试套执行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;2.自动从PMS爬取数据并同步本地CSV文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;3.PMS数据回填</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[pmsctl]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;PMS的用户名,如: ut001234</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PMS_USER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;PMS的密码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PMS_PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;PMS测试套的ID</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;在PMS上查看用例“套件”链接: https://pms.uniontech.com/testsuite-view-495.html</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;测试套ID为: 495</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SUITE_ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;数据回填必须关联PMS测试单</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;在PMS上查看测试单链接: https://pms.uniontech.com/testtask-cases-20747.html</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;测试单ID为: 20747</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TASK_ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;将测试结果数据回填到PMS</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;为空: 表示不回填,不会在每条用例执行完之后生成json结果文件;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;async: 表示逐条异步回填,后面一条执行开始时通过子线程对前一条用例的执行结果进行回填，如此实现时间效率最大化;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;finish: 表示所有用例执行完成之后逐个回填;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SEND_PMS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;数据回填的触发者</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;auto: 框架自动回填,配合SEND_PMS配置使用,你可以选择在不同的阶段进行数据回填;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;hand: 手动回填,每条用例仍然会生成json文件,但框架不会进行数据回填,需要你可以在你想要发送的时间点手动触发回填;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TRIGGER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = auto</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;PMS回填的重试次数</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;如果接口请求失败,会进行重试</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SEND_PMS_RETRY_NUMBER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;caselib: 用例库</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;testcase: 产品库用例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CASE_FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = caselib</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[pmsctl-pms_link_csv]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;同步PMS数据到本地CSV文件，必须要配置的配置项</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;key是本地CSV文件的文件名称;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;value是对应PMS上的模块ID;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;比如要同步音乐的数据, 首先需要将配置 APP_NAME = deepin-music，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;CSV文件名称为music.csv，其在PMS上的音乐用例库的URL为: https://pms.uniontech.com/caselib-browse-81.html</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;因此应该配置为: music = 81</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;这样才能将PMS与本地CSV文件建立联系。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;如果你的应用分了很多模块,只需要将对应的信息依次配置好就行了。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">music</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[csvctl]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;将py文件的case id同步到csv文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;yes, 开启同步</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PY_ID_TO_CSV</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = no</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;导出的csv文件名称，比如：case_list.csv</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">EXPORT_CSV_FILE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;导出 case_list.csv 文件时配置的字段名，用例名称默认存在第一列，无需添加</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">EXPORT_CSV_HEARD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 用例级别,用例类型,测试级别,下线CD</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[log_cli]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;日志相关配置（不打印构造函数和魔法函数的功能说明）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;批量执行时，终端输出的日志级别 DEBUG/INFO/ERROR</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LOG_LEVEL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = DEBUG</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ============= 自动输出日志的配置 ================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;支持类名以 xxx 开头的，自动将函数说明打印为日志, 多个参数以逗号隔开</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CLASS_NAME_STARTSWITH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = Assert</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;支持类名以 xxx 结尾的，自动将函数说明打印为日志，多个参数以逗号隔开</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CLASS_NAME_ENDSWITH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = Widget,Page</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;支持类名包含 xxx 的，自动将函数说明打印为日志，多个参数以逗号隔开</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CLASS_NAME_CONTAIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = ShortCut</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ==============================================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;=============================== PMS CONFIG ===================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;git子命令用于拉取子项目仓库代码，也可统计某两个commit之间或一段时间内用例和方法的修改数据。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[git]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;git仓库的地址</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GIT_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;git仓库的用户名</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GTI_USER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;git仓库的密码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GIT_PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;git仓库的分支</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">BRANCH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;git clone 时的深度（--depth）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DEPTH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;起始日期</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">START_DATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;结束日期</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">END_DATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span></code></pre></div>`,24),h=[l];function k(e,t,A,c,d,r){return a(),i("div",null,h)}const g=s(p,[["render",k]]);export{D as __pageData,g as default};
