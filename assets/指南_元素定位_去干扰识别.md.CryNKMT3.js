import{_ as s,c as a,o as i,a7 as p}from"./chunks/framework.CPntGteo.js";const m=JSON.parse('{"title":"去干扰识别","description":"","frontmatter":{},"headers":[],"relativePath":"指南/元素定位/去干扰识别.md","filePath":"指南/元素定位/去干扰识别.md","lastUpdated":1713583771000}'),e={name:"指南/元素定位/去干扰识别.md"},t=p(`<h1 id="去干扰识别" tabindex="-1">去干扰识别 <a class="header-anchor" href="#去干扰识别" aria-label="Permalink to &quot;去干扰识别&quot;">​</a></h1><p>以右键菜单来讲解此方案；</p><h2 id="现有右键菜单定位的方案及问题" tabindex="-1">现有右键菜单定位的方案及问题 <a class="header-anchor" href="#现有右键菜单定位的方案及问题" aria-label="Permalink to &quot;现有右键菜单定位的方案及问题&quot;">​</a></h2><p>右键菜单的元素定位是一个难点，过去我们调研和使用过的元素定位操作方法有 4 种：</p><h3 id="_1-步长操作法" tabindex="-1">1. 步长操作法 <a class="header-anchor" href="#_1-步长操作法" aria-label="Permalink to &quot;1. 步长操作法&quot;">​</a></h3><p>在右键菜单呼出来之后，通过键盘的 <code>up</code>、<code>down</code> 按键，进行选择菜单选择，选中目标之后 <code>enter</code> 即可；比如：在桌面点击右键菜单之后，按 1 次 <code>down</code> ，会出现下图：</p><p><img src="https://pic.imgdb.cn/item/64f054c5661c6c8e54ff49b4.png" alt=""></p><p>继续再按 2 次 <code>down</code>，会出现这样：</p><p><img src="https://pic.imgdb.cn/item/64f054c5661c6c8e54ff49e5.png" alt=""></p><p>再按 <code>enter</code>，会出现这样：</p><p><img src="https://pic.imgdb.cn/item/64f054c5661c6c8e54ff4a06.png" alt=""></p><p>如此，“排序方式”的步长为 3；通过使用键盘上下键，就实现了对右键菜单的操作；</p><p>但是，这种方式有个很烦人的问题，就是右键菜单的选项位置不可能一直不变，在需求迭代的过程中，菜单选项的变化是很大的，甚至有些应用支持自定义菜单，比如文管右键菜单可以自定义；</p><p>也就是说你得经常去维护菜单选项的步长，一个选项现在的步长是 3，下个迭代可能就是 4 或者 5。</p><h3 id="_2-常规图像识别法" tabindex="-1">2. 常规图像识别法 <a class="header-anchor" href="#_2-常规图像识别法" aria-label="Permalink to &quot;2. 常规图像识别法&quot;">​</a></h3><p>把每个菜单选项单独截图保存，图片中仅包含一个菜单选项，如下图所示：</p><p><img src="https://pic.imgdb.cn/item/64f054c5661c6c8e54ff4aa9.png" alt=""></p><p>这样，每个菜单选项就可以通过图像识别的方式进行元素定位；</p><p>这种方式不用担心菜单选项的顺序或位置，但是需要保存大量的图片，且容易受到字体 UI 变更类需求的影响，比如：字体大小、字体间距等等需求变更都会影响，每次变更之后就需要进行大量图片资源的重新截图替换，是个比较麻烦的事情；</p><h3 id="_3-相对位移法" tabindex="-1">3. 相对位移法 <a class="header-anchor" href="#_3-相对位移法" aria-label="Permalink to &quot;3. 相对位移法&quot;">​</a></h3><p>鼠标点击右键的时候，鼠标的当前坐标是可以获取到的，菜单选项的宽（ w ）一般是固定的，变化的是菜单的长度（ h ），可以通过某个选项相对于鼠标的距离在确定菜单选项的坐标，如下图所示：</p><p><img src="https://pic.imgdb.cn/item/64f054c6661c6c8e54ff4af1.png" alt=""></p><p>通过维护菜单选项（相对位置）相对于鼠标位置的距离，即可轻松计算出菜单选项在屏幕中的坐标。</p><p>从理论上此方案是可行的，但是这里仍然存在两个严重的问题：</p><ul><li>菜单顺序改变，导致相对距离改变，而且距离是通过像素（px）来表示的，不想步长那么只管，每次需要去量一下，维护起来有点麻烦；</li><li>鼠标在桌面不同位置点击右键，右键菜单出现的位置是不同的，上图的菜单是在鼠标的左下方，如果你移动鼠标到屏幕四边，你会发现，右键菜单可能出现在鼠标的四个方向，也就是说你需要根据鼠标的不同位置来判断右键菜单出现的方向，而不同的方向上计算方法是不同的，比如：右键菜单在鼠标的左上，菜单选项的坐标计算方法为（x - w / 2， y - h），这样维护起来可以说非常复杂；</li></ul><p>基于以上两个原因，我们并不推荐这种操作方案。</p><h3 id="_4-属性定位" tabindex="-1">4. 属性定位 <a class="header-anchor" href="#_4-属性定位" aria-label="Permalink to &quot;4. 属性定位&quot;">​</a></h3><p>有同学说干嘛不通过属性定位呢，其实，我们最开始想到的方案就是通过属性定位，但是在属性的 DOM 树里怎么也找不到，无法定位到，我们也联合研发同学一起解决此问题，但最终还是没能解决，非常遗憾；</p><h2 id="去干扰识别-1" tabindex="-1">去干扰识别 <a class="header-anchor" href="#去干扰识别-1" aria-label="Permalink to &quot;去干扰识别&quot;">​</a></h2><p>由于右键菜单选项几乎都是文本，那么通过 OCR 识别，几乎是最优的方案：</p><ul><li>不用保存大量的图片；</li><li>不会受到菜单选项顺序改变的影响；</li><li>不会受到字体 UI 变化的影响；</li></ul><p>关于 OCR 识别我们在前面已经讲到，本章节主要讲基于 OCR 识别，我们在右键菜单识别上的突破和创新；</p><p><strong>使用 OCR 识别右键菜单虽然已经很完美了，但是在一些情况下仍然存在一点问题</strong>，就是屏幕中出现多个和菜单选项文字相同的文字时，比如下面这种情况：</p><p><img src="https://pic.imgdb.cn/item/64f054c6661c6c8e54ff4b0c.png" alt=""></p><p>屏幕恰好出现了两个“复制”，此时要定位到菜单中的 “复制”，就需要进一步做数据处理，比如：OCR 返回 2 个“复制”的坐标，用例里面来判断用哪个，从业务上将处理起来比较麻烦，因为你得明确知道菜单在左边还是右边，然后这本身就是不确定的；</p><p>怎么解决这个问题呢，这就要说到本章的主题：<strong>去干扰图像识别</strong>。</p><p>【原理】</p><p>在点击右键菜单之前截一张图，点击右键菜单之后再截取一张图，两张图唯一变化的就是右键菜单，将其他相同的地方都屏蔽掉，只留下菜单界面，如此即可消除干扰，如下图所示：</p><p><img src="https://pic.imgdb.cn/item/64f054c7661c6c8e54ff4b48.png" alt=""></p><p><img src="https://pic.imgdb.cn/item/64f054c7661c6c8e54ff4b93.png" alt=""></p><p>将两种图做前后对比提取可以得到这样的图：</p><p><img src="https://pic.imgdb.cn/item/64f054c7661c6c8e54ff4bbd.png" alt=""></p><p>你看，通过前后图片的对比，将相同的部分给消除掉，再进行 OCR 识别，这样就不会有干扰了；</p><p>代码实现请查看 <code>src/filter_image.py</code> ；</p><p>代码示例：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> filter_image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(action):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    对比动作前后两张图片，提取不同的部分生成一张新的图片，并返回新图片的路径</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    :param action: 动作函数的函数对象</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    :return: 新图片的路径</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span></code></pre></div><p><code>action</code> 是鼠标事件，因为此类场景不仅仅在右键存在，单击、双击等等，只要操作前后后变化的都可以：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src.mouse_key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MouseKey</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">action </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    MouseKey.click,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    MouseKey.right_click,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    MouseKey.double_click,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    MouseKey.move_to,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,48),n=[t];function l(c,h,o,r,d,k){return i(),a("div",null,n)}const u=s(e,[["render",l]]);export{m as __pageData,u as default};
