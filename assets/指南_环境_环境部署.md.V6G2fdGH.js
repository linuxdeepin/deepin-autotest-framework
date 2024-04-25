import{_ as s,c as a,o as i,U as e}from"./chunks/framework.aQY2xkld.js";const u=JSON.parse('{"title":"环境部署 - env.sh","description":"","frontmatter":{},"headers":[],"relativePath":"指南/环境/环境部署.md","filePath":"指南/环境/环境部署.md","lastUpdated":1713583771000}'),t={name:"指南/环境/环境部署.md"},n=e(`<h1 id="环境部署-env-sh" tabindex="-1">环境部署 - env.sh <a class="header-anchor" href="#环境部署-env-sh" aria-label="Permalink to &quot;环境部署 - env.sh&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>项目根目录下运行 <code>env.sh</code> 即可。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env.sh</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果你的测试机密码不是 \`1\` ，那需要在全局配置文件 \`globalconfig.ini\` 里面将 	\`PASSWORD\` 配置项修改为当前测试机的密码。</span></span></code></pre></div><h2 id="定制依赖" tabindex="-1">定制依赖 <a class="header-anchor" href="#定制依赖" aria-label="Permalink to &quot;定制依赖&quot;">​</a></h2><h3 id="_1-新增依赖" tabindex="-1">1. 新增依赖 <a class="header-anchor" href="#_1-新增依赖" aria-label="Permalink to &quot;1. 新增依赖&quot;">​</a></h3><p>如果应用库还需要其他 <code>Python</code> 依赖库，只需要在应用库根目录下保存一个 <code>requirement.txt</code> 文件；</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">autotest_xxx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirement.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span></code></pre></div><p>里面写入需要安装的三方依赖，比如像这样：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PyYAML</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6.0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 指定安装某个版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">requests</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 未指定版本则安装最新版</span></span></code></pre></div><p>在执行 <code>bash env.sh</code> 时会一并将其安装。</p><p>如果多个应用库都存在 <code>requirement.txt</code> 文件，执行 <code>env.sh</code> 时会将多个 <code>requirement.txt</code> 文件一并加载；那么一定要注意多个 <code>requirement.txt</code> 文件可能存在相同的依赖被指定安装不同版本等等兼容性问题。</p><p><strong>【deb 形式 Python 包】</strong></p><p>在应用库根目录下保存一个 <code>requirement_deb.txt</code> 文件；</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">autotest_xxx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirement_deb.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span></code></pre></div><p>里面写入需要安装的三方依赖，比如像这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>python3-pyaudio</span></span></code></pre></div><h3 id="_2-裁剪依赖" tabindex="-1">2. 裁剪依赖 <a class="header-anchor" href="#_2-裁剪依赖" aria-label="Permalink to &quot;2. 裁剪依赖&quot;">​</a></h3><p>在某些情况下，可能你只需要安装一些最最基础的依赖，其他的都不需要，比如纯接口自动化的项目，它不需要 <code>UI</code> 自动化相关的依赖。</p><p>你只需要在应用库根目录下，存放一个 <code>BASICENV</code> 的普通文件，里面不需要写任何内容，这样执行 <code>env.sh</code> 时，只会安装最基础的依赖。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">autotest_xxx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> BASICENV</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 可以使用：touch BASICENV 创建文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span></code></pre></div><p>基础依赖仅安装最基础的几个包；</p><p><code>裁剪依赖</code> 和 <code>新增依赖</code> 是不冲突的，可以同时使用。</p><h2 id="开发环境部署-env-dev-sh" tabindex="-1">开发环境部署 - env_dev.sh <a class="header-anchor" href="#开发环境部署-env-dev-sh" aria-label="Permalink to &quot;开发环境部署 - env_dev.sh&quot;">​</a></h2><p>在开发过程中，如果你想直接部署在本机上：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env_dev.sh</span></span></code></pre></div><p>这种方式安装的环境不会有 <code>youqu</code> 这个命令，用例执行都使用 <code>python3</code> 驱动即可，比如：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span></code></pre></div><h2 id="虚拟环境解释器" tabindex="-1">虚拟环境解释器 <a class="header-anchor" href="#虚拟环境解释器" aria-label="Permalink to &quot;虚拟环境解释器&quot;">​</a></h2><p>YouQu 默认采用虚拟化部署，虚拟环境实际安装的位置是在 <code>$HOME/.local/share/virtualenvs/youqu-oHTM7l7G</code> 目录下；其中，</p><p><code>youqu-oHTM7l7G</code> 此目录名称前面部分是你的代码根目录的名称，后面部分是生成的随机字符串，同学们在部署的时候随机字符串肯定和我这里的例子不一样；</p><p>在远程机器上定位问题的时候，如果使用 <code>Pycharm</code> 调试执行，就将解释器指定到这个目录的就行了；</p><h2 id="激活虚拟环境" tabindex="-1">激活虚拟环境 <a class="header-anchor" href="#激活虚拟环境" aria-label="Permalink to &quot;激活虚拟环境&quot;">​</a></h2><p>在开发过程中有可能需要在终端激活虚拟环境，以便进行一些开发调试；</p><p>在框架根目录下命令行输入：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu-shell</span></span></code></pre></div><p>即可在终端激活当前虚拟环境。</p><h2 id="原则" tabindex="-1">原则 <a class="header-anchor" href="#原则" aria-label="Permalink to &quot;原则&quot;">​</a></h2><p><code>YouQu</code> 的环境依赖一直坚持 2 个原则：</p><ul><li><strong>最小环境依赖原则</strong></li></ul><p>有些同学写一些功能，首先想到的就是去搜索引擎搜一下，看有没有现成的工具或者代码直接能用，美其名曰不要重复造轮子，别人已经造好了轮子咱们就不要重复去造了，然后一切似乎都变得那么的理所应当。</p><p>当然这样做无可厚非，我相信有这样想法并且一直践行这样做法的同学不在少数，但这样做有一个很严重的问题，就是当你写一个大型项目时，你会引入非常非常非常多的依赖，比如要做个接口请求要用 <code>requests</code>、读写个数据用 <code>pandas</code>、写个表格用 <code>pyopenxl</code>、解析个文本要用这个那个三方库 ... 。</p><p>我认为这是非常不好的习惯，在实现一个功能的时候，首先我们应该去想自己怎么样去实现，尽量使用标准库去做；</p><p>如果你不会，你可以去学习三方库的实现思路，别人三方库也是用标准库实现的，为什么咱们不行呢；如果别人的你实在是看不懂，想尽一切办法确实做不出来，那再考虑引入这个三方库，我认为这样是没问题的，毕竟咱们段位还不够，但希望将来有一天我们可以。</p><p>这样的做法才应该是“不要重复造轮子”正确的操作。不会没关系，看看别人是怎么实现的，自己再摸索着写出来，这样自己才能有所提高，不然你就只会用别人的东西；那些嘲笑、批评我们重复造轮子的人，先想想自己会造轮子吗。</p><p>本着<strong>自己实现能实现的一切</strong>的原则，<code>YouQu</code> 框架做到了非常少的环境依赖，而且我们仍在不断努力，减少环境部署的依赖。</p><ul><li><strong>最小仓库体积原则</strong></li></ul><p>大文件不能上传到工程里面，保持整个工程的轻量化，这样在克隆代码的时候才能非常快速方便使用，我们见过一个 AT 工程 clone 大小达到好几个 G，简直不可思议。</p><p>其实代码文件的大小是很小的，也就是说，纯写代码随便写工程也不会太大，而文档（包含插图）等资源却是很占空间。</p><p>因此我们要将 <code>YouQu</code> 的文档工程涉及到的图片资源都采用外链加载；</p>`,50),l=[n];function p(h,d,o,c,k,r){return i(),a("div",null,l)}const F=s(t,[["render",p]]);export{u as __pageData,F as default};
