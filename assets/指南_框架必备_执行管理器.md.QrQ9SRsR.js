import{_ as s,c as i,o as a,U as n}from"./chunks/framework.2zPqJKTw.js";const c=JSON.parse('{"title":"执行管理器 - manage.py","description":"","frontmatter":{},"headers":[],"relativePath":"指南/框架必备/执行管理器.md","filePath":"指南/框架必备/执行管理器.md","lastUpdated":1715591328000}'),p={name:"指南/框架必备/执行管理器.md"},l=n(`<h1 id="执行管理器-manage-py" tabindex="-1">执行管理器 - manage.py <a class="header-anchor" href="#执行管理器-manage-py" aria-label="Permalink to &quot;执行管理器 - manage.py&quot;">​</a></h1><p><code>YouQu</code> 的执行管理器 <code>manage.py</code> 提供了丰富的配置和命令行参数，可用于本地用例驱动执行、远程用例驱动执行、<code>CSV</code> 文件管理、<code>PMS</code> 与本地 <code>CSV</code> 文件标签关联管理、脚手架等功能；</p><h2 id="如何使用" tabindex="-1">如何使用 <a class="header-anchor" href="#如何使用" aria-label="Permalink to &quot;如何使用&quot;">​</a></h2><p><strong>【命令行使用】</strong></p><p>所有功能的驱动执行都是通过 <code>manage.py</code> 进行的，它是全局的入口文件，后面提到的一些命令行参数也都默认是在 <code>manage.py</code> 之后添加使用；</p><p>你可以使用 <code>-h</code> 或 <code>--help</code> 查看它的帮助：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span></span></code></pre></div><p>这样可以查看它支持的子命令；</p><p>然后再通过子命令 <code>-h</code> 或 <code>--help</code> 查看子命令的帮助，以子命令 <code>run</code> 举例：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span></span></code></pre></div><p>这样可以查看到子命令支持的各项参数及参数使用说明。</p><p><strong>【配置文件】</strong></p><p>配置文件在 <code>setting</code> 目录下，绝大部分的配置项均在 <code>globalconfig.ini</code> 文件中，为了方便描述后面经常提到的“配置文件”、“配置项”几乎都是指的 <a href="https://github.com/linuxdeepin/youqu/blob/master/setting/globalconfig.ini" target="_blank" rel="noreferrer">setting/globalconfig.ini</a> 。</p><p>你可以在配置文件中每一个配置项上面看到该配置项的使用说明；</p><p>在后面的一些功能描述中有些为了方面描述只提到了配置项的使用说明，并没有再补充其对应的命令行参数，但是几乎所有的命令行参数都对应提供了配置文件配置项；</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>命令行参数的优先级高于配置文件配置，也就是说通过命令行参数指定了对应的参数，配置文件中不管是否配置均不生效。</p></div><p>下面介绍两个常用的用例执行的功能：</p><h2 id="本地执行" tabindex="-1">本地执行 <a class="header-anchor" href="#本地执行" aria-label="Permalink to &quot;本地执行&quot;">​</a></h2><p>本地执行子命令为：<code>run</code></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span></code></pre></div><h3 id="_1-命令行参数" tabindex="-1">1. 命令行参数 <a class="header-anchor" href="#_1-命令行参数" aria-label="Permalink to &quot;1. 命令行参数&quot;">​</a></h3><p>通过命令行参数配置参数</p><p>以下为 <code>youqu manage.py run</code> 提供的一些常用的参数选项：</p><div class="language-coffeescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">coffeescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">help</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            show</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> help</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> message </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> exit</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> APP, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">app</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> APP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     应用名称：apps</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">autotest_deepin_music</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 或</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        autotest_deepin_music</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KEYWORDS, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">keywords</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KEYWORDS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        用例的关键词,支持and</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/or/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">not逻辑组合</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TAGS, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tags</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TAGS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  用例的标签,支持and</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/or/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">not逻辑组合</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rerun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RERUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         失败重跑次数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">record_failed_case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RECORD_FAILED_CASE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        失败录屏从第几次失败开始录制视频</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">yes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,}        清理环境</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">report_formats</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> REPORT_FORMATS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        测试报告格式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">max_fail</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MAX_FAIL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   最大失败率</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log_level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LOG_LEVEL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        日志输出级别</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timeout</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TIMEOUT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     单条用例超时时间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolution</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RESOLUTION</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        检查分辨率</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">debug</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DEBUG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         调试模式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">noskip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">yes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,}       csv文件里面标记了skip跳过的用例不生效</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ifixed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">yes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,}       fixed不生效，仅通过skip跳过用例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">send_pms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,finish}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        数据回填</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">task_id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TASK_ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     测试单ID</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {,auto,hand}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        触发者</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CASE_FILE, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">case_file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CASE_FILE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        根据文件执行用例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deb_path</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DEB_PATH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   需要安装deb包的本地路径</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PMS_USER, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pms_user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PMS_USER</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                        pms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 用户名</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PMS_PASSWORD, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pms_password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PMS_PASSWORD</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                        pms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 密码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">suite_id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SUITE_ID</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   pms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 测试套ID</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pms_info_file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PMS_INFO_FILE</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                        pms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 信息文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">top</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TOP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             过程中记录top命令中的值</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lastfailed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          仅执行上次失败用例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duringfail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          测试过程中立即显示报错</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">repeat</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> REPEAT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       指定用例执行次数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">project_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PROJECT_NAME</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        工程名称（写入json文件）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build_location</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BUILD_LOCATION</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        构建地区（写入json文件）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">line</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LINE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">           执行的业务线（写入json文件）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">autostart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AUTOSTART</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        重启类场景开启letmego执行方案</span></span></code></pre></div><p>在一些 <code>CI</code> 环境下使用命令行参数会更加方便：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autotest_deepin_music</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --keywords</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;xxx&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --tags</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;xxx&quot;</span></span></code></pre></div><p><code>--app</code> 入参还支持 <code>apps/autotest_xxx</code> 写法，方便在输入命令的过程中使用补全，下面的远程执行功能同样支持。</p><h3 id="_2-配置文件" tabindex="-1">2. 配置文件 <a class="header-anchor" href="#_2-配置文件" aria-label="Permalink to &quot;2. 配置文件&quot;">​</a></h3><p>通过配置文件配置参数</p><p>在配置文件 <code>setting/globalconfig.ini</code> 里面支持配置对执行的一些参数进行配置，常用的如：</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;=============================== RUN CONFIG ===================================</span></span>
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
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OPENCV_SERVER_HOST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = youqu.uniontech.com</span></span>
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
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">END_DATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span></code></pre></div><p>配置完成之后，直接在命令行执行 <code>manage.py</code> 就好了。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span></code></pre></div><h2 id="远程执行" tabindex="-1">远程执行 <a class="header-anchor" href="#远程执行" aria-label="Permalink to &quot;远程执行&quot;">​</a></h2><p>远程执行就是用本地作为服务端控制远程机器执行，远程机器执行的用例相同；</p><p>使用 <code>remote</code> 命令：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span></span></code></pre></div><h3 id="_1-多机器分布式异步执行" tabindex="-1">1. 多机器分布式异步执行 <a class="header-anchor" href="#_1-多机器分布式异步执行" aria-label="Permalink to &quot;1. 多机器分布式异步执行&quot;">​</a></h3><p><img src="https://pic.imgdb.cn/item/64f6d3c0661c6c8e549f8ca5.png" alt=""></p><p>多机器分布式异步执行就是由本地 <code>YouQu</code> 作为服务端，控制远程 N 台机器执行相同的用例，执行完之后所有测试机的测试结果会返回给服务端 report 目录下；</p><p>远程执行同样通过配置文件 <code>setting/globalconfig.ini</code> 进行用例相关配置；</p><p>需要重点说一下远程执行时的测试机信息配置，在配置文件 <code>setting/remote.ini</code> 里面配置测试机的用户名、<code>IP</code>、密码。</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--8&lt;-- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;setting/remote.ini&quot;</span></span></code></pre></div><p>有多少台机器就像这样参考上面的格式写就行了。</p><p>然后在命令行：</p><div class="termy"><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span></span></code></pre></div></div><p>这样运行是从配置文件去读取相关配置。</p><p>如果你不想通过配置文件，你仍然通过命令行参数进行传参，</p><p>以下为 <code>python3 manage.py remote</code> 提供的一些参数选项：</p><div class="language-coffeescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">coffeescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">help</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            show</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> help</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> message </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> exit</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CLIENTS, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clients</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CLIENTS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        远程机器的user@ip</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">password,多个机器用</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">连接,如果password不传入,默认取sett</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        ing</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote.ini中CLIENT_PASSWORD的值,比如</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uos@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">13</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.xx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        或 uos@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">13</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.xx</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">send_code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       发送代码到测试机（不含report目录）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build_env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       搭建测试环境,如果为yes，不管send_code是否为yes都会发送代码到测试机.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CLIENT_PASSWORD, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">client_password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CLIENT_PASSWORD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        测试机密码（全局）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PARALLEL, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parallel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PARALLEL</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">                        yes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">表示所有测试机并行跑，执行相同的测试用例;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">no</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">表示测试机分布式执行，服务端会根据收集到的测试用例自</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        动分配给各个测试机执行。</span></span></code></pre></div><p>除了这些特有参数以外，它同样支持本地执行的所有参数；</p><p>在命令行这样运行：</p><div class="termy"><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autotest_deepin_music</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uos@10.8.13.xx/uos@10.8.13.xx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -k</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;xxx&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;xxx&quot;</span></span></code></pre></div></div><p>所有用例执行完之后会在 <code>report</code> 目录下回收各个测试机执行的测试报告。</p><p>注意，如果远程机器没有搭建自动化测试环境，记得加上参数 <code>-e</code> ：</p><div class="termy"><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autotest_deepin_music</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uos@10.8.13.xx/uos@10.8.13.xx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -k</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;xxx&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;xxx&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span></span></code></pre></div></div><p>执行前确保远程机器已经开启了 ssh 服务，否则会提示无法连接，如果没有开启，请手动开启：</p><div class="termy"><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssh</span></span></code></pre></div></div><p>配置文件其他相关配置项详细说明，请查看配置文件中的注释内容。</p><h3 id="_2-多机器分布式异步负载均衡执行" tabindex="-1">2. 多机器分布式异步负载均衡执行 <a class="header-anchor" href="#_2-多机器分布式异步负载均衡执行" aria-label="Permalink to &quot;2. 多机器分布式异步负载均衡执行&quot;">​</a></h3><p>多机器分布式异步负载均衡执行也是用本地作为服务端控制远程机器执行，但远程机器执行的用例不同，而是所有远程机器执行的用例之和，为你想要执行的用例集；</p><p>似乎有点难以理解，我用大白话举例描述下：</p><p>服务端想要执行 10 条用例，现在远程机器有 5 台，然后服务端就先拿着第 1 条用例给远程 1 号机执行，拿第 2 条用例给远程 2 号机执行...，如此循环直到所有用例执行完，这就是负载均衡执行。</p><p><img src="https://pic.imgdb.cn/item/64f6d694661c6c8e54a1025b.png" alt=""></p><p>使用方法和前面一样，只是需要增加一个参数 <code>--parallel</code>：</p><div class="termy"><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autotest_deepin_music</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uos@10.8.13.xx/uos@10.8.13.xx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -k</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;xxx&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;xxx&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --parallel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span></span></code></pre></div></div>`,66),h=[l];function k(t,e,d,E,r,g){return a(),i("div",null,h)}const A=s(p,[["render",k]]);export{c as __pageData,A as default};
