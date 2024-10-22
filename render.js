const universal_stylesheet = /* css */ `
@media (min-width: 1150px) { 
    .nav-item {
        background-color: white;
        margin-left: 14px;
        border-radius: 12px;
        padding-left: 16px;
        padding-right: 16px;
        transition: box-shadow 0.15s ease-out;
    }

    .nav-item:hover {
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    }

    #navbar_content {
        right:20px;position:absolute
    }
}

@media (max-width: 1085px) { 
    .work_card .card-body .container .row div.col-2 {
        display: flex;
        width: 100%;
        margin-bottom: var(--bs-card-spacer-y);
    }

    .work_image_container {
        margin: auto;
    }
}

@media (max-width: 1250px) {
    a.navbar-brand {
        display:block;
        width: 35vw;
    }

    a.navbar-brand span {
        display:block;
    }
}

@media (max-width: 520px) { 
    a.navbar-brand {
        width: 60vw;
        display:block;
    }

    a.navbar-brand span {
        display:block;
    }
}


.nav-item .nav-link {
    color: #9a9a9a;
}

* {
    font-family: sans-serif;
}

#page_content {
    margin-top: 50px;
    padding-left: 10vw;
    padding-right: 10vw;
}

.startup_bg {
    background-image: url('../bg.jpg');
    background-size: cover;
    background-position: center;
    height: 200px;
    width: 100%;
    position: relative;
}

.work_card .card-body {
    padding-bottom: 0;
}

.startup_bg2 {
    background-image: url('../bg2.avif');
    background-size: cover;
    background-position: center;
    height: 200px;
    width: 100%;
    position: relative;
}

.startup_bg_content {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.7);
    /* 白色半透明遮罩 */
    z-index: 1;
    /* 确保遮罩在背景之上 */
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 3em;
}

a {
    color: rgb(252, 74, 74);
}

a:hover {
    color: rgb(247, 163, 163);
}

#navbar {
    background-color: rgb(244, 244, 244)
}

.work_card_img {
    max-width: 100%;
    max-height: 150px;
    display: block;
    margin: auto;
}

.see_detail_btn {
    text-align: right;
    text-decoration: none;
}

.see_detail_btn a {
    text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
    font-weight:normal;
}

.see_detail_btn_content {
    background-color: rgb(244, 244, 244);
    padding: 20px;
    border-radius: 12px;
    max-height: 0;
    transition: max-height 0.3s ease-out;
    overflow: hidden;
    margin-bottom: 20px;
}

.see_detail_btn_content p {
    margin: unset;
}

.see_detail_btn_content p:not(:first-child) {
    margin-top: 1em;
}

/* NSFW 图片遮罩样式 */
.nsfw_overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6); /* 半透明黑色背景 */
    color: white;
    cursor: pointer;
    z-index: 1; /* 确保遮罩层位于图片上方 */
    backdrop-filter: blur(5px); /* 添加高斯模糊效果 */
    -webkit-backdrop-filter: blur(5px); /* 兼容 Safari 浏览器 */
    opacity: 1; /* 初始完全可见 */
    transition: opacity 0.5s ease; /* 过渡效果 */
}

/* 暗色模式 */
html[data-bs-theme="dark"] {
    --navbar-bg-color: rgb(34, 34, 34); /* 全局的背景色变量 */
    --nav-item-bg-color: rgb(48, 48, 48); /* 导航项背景色 */
    --nav-item-hover-shadow: rgba(255, 255, 255, 0.1); /* 导航项悬停时的阴影 */
    --startup-bg-color: rgba(34, 34, 34, 0.7); /* 启动时的暗色半透明遮罩 */
    --see-detail-bg-color: rgb(48, 48, 48); /* 详情按钮的背景色 */
}

html[data-bs-theme="dark"] #navbar {
    background-color: var(--navbar-bg-color);
}

@media (min-width: 1085px) {
    html[data-bs-theme="dark"] .nav-item {
        background-color: var(--nav-item-bg-color);
    }

    html[data-bs-theme="dark"] .nav-item:hover {
        box-shadow: 0 0 30px var(--nav-item-hover-shadow);
    }
}

html[data-bs-theme="dark"] .startup_bg_content {
    background-color: var(--startup-bg-color);
}

html[data-bs-theme="dark"] .see_detail_btn_content {
    background-color: var(--see-detail-bg-color);
}

.article_list_link::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgb(252, 74, 74);
    transform: scaleX(0);
    transition: transform 1.1s ease;
}

.article_list_link:hover::before {
    transform: scaleX(1);
}

.article_list_link:hover {
    color: rgba(252, 130, 130);
}

.article_list_link {
    position: relative;
    text-decoration: none
}

`;

const navbar_template = /* html */ `
<nav class="navbar navbar-expand-lg sticky-top" id="navbar">
    <div class="container-fluid">
        <a class="navbar-brand" href="../index.html">Vanilla Translation Group <span
                style="color: gray; font-size: medium;">香子兰翻译同好会</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbar_content">
                <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbar_content">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link${current_page === "about" ? " active" : ""}" href="../about/"><i class="bi bi-info-square"></i> 关于我们</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link${current_page === "chs" ? " active" : ""}" href="../chs/"><i class="bi bi-file-earmark-text"></i> 作品集 · 汉化</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link${current_page === "sub" ? " active" : ""}" href="../sub/"><i class="bi bi-film"></i> 作品集 · 字幕</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link${current_page === "blog" ? " active" : ""}" href="../blog/"><i class="bi bi-book"></i> 博客 & 研究</a>
                </li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center"
                    id="bd-color-mode" data-bs-toggle="dropdown" aria-expanded="false"
                    data-bs-display="static">
                        <i id="current-theme-icon" class="me-2"></i> 切换主题
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="bd-color-mode" style="--bs-dropdown-min-width: 6rem;"
                    data-bs-popper="static">
                        <li>
                            <button type="button" class="dropdown-item d-flex align-items-center"
                            data-bs-theme-value="light">
                                <i class="bi bi-sun-fill me-2"></i> 浅色
                            </button>
                        </li>
                        <li>
                            <button type="button" class="dropdown-item d-flex align-items-center"
                            data-bs-theme-value="dark">
                                <i class="bi bi-moon-fill me-2"></i> 深色
                            </button>
                        </li>
                        <li>
                            <button type="button" class="dropdown-item d-flex align-items-center"
                            data-bs-theme-value="auto">
                                <i class="bi bi-circle-half me-2"></i> 自动
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;

const bottom_template = /* html */ `
<div style="margin-top: 80px;"></div><hr /><p><i class="bi bi-github"></i> <a href="https://github.com/vanilla-translation-group" target="_blank">访问我们的 GitHub 页面</a></p>
`;

const sub_page_template = /* html */ `
<div class="startup_bg">
    <div class="startup_bg_content">
        <h1>作品集 · 字幕</h1>
        <p>我们翻译的动画、电影等作品的字幕文件。</p>
    </div>
</div>
<div class="container" id="page_content">
    <div id="work_cards" class="d-grid gap-3"></div>
    ${bottom_template}
</div>
`;

const chs_page_template = /* html */ `
<div class="startup_bg2">
    <div class="startup_bg_content">
        <h1>作品集 · 汉化</h1>
        <p>我们翻译的视觉小说等作品的汉化补丁文件。</p>
    </div>
</div>
<div class="container" id="page_content">
    <div id="work_cards" class="d-grid gap-3"></div>
    ${bottom_template}
</div>
`;

const blog_page_template = /* html */ `
<div class="startup_bg2">
    <div class="startup_bg_content">
        <h1>博客 & 研究</h1>
        <p>汉化作品发布博客、汉化过程中的一些技术成果等。</p>
    </div>
</div>
<div class="container" id="page_content">
    （此页面正在建设中，敬请期待！）
    ${bottom_template}
</div>
`;

const about_page_template = /* html */ `
<div class="startup_bg2">
    <div class="startup_bg_content">
        <h1>关于我们</h1>
        <p>关于「香子兰翻译同好会」的一切。</p>
    </div>
</div>
<div class="container" id="page_content">
    <div style="text-indent: 25px each-line;">
        <p>我们是由一群计算机和 ACGN 爱好者组成的一个兴趣使然的翻译同好会。gal、动画、漫画之类都有在翻译，也算是涉猎广泛了。嘛，总之是个比较松散随性的组织，组里也没有什么细化的分工。<br>
            关于这个名字的来由，是因为组员们都很喜欢猫娘，尤以 NEKOPARA 的香子兰为最。不过我们也有别的马甲，比如<span style="background: black; color: black;">+JctopiXLd7NsSVMWfsQ-</span>什么的。</p>
        <p>一个坑都是这么个流程：组员冒出一个点子（诶我觉得这作还行也没人做）-&gt; 总之自己先开干（之后再拉其他人下水）-&gt; 干完了（发布）/ 各种原因干不完（弃坑）</p>
        <p>由于挖坑似乎一不小心挖多了所以现在正处于急需人手状态，最缺的还是翻译（含校润）。要求是翻译出来的文本能让人读懂且基本符合原意（特殊情况除外）就行，即“达”和“信”，至于“雅”可以暂不考虑。<br>
        如果你看到这里还有点点兴趣的话<del>（应该不会有吧）</del>，可以在<a href="https://github.com/vanilla-translation-group/vanilla-translation-group.github.io/issues/new?assignees=&labels=&projects=&template=application_form.md&title=%E7%94%B3%E8%AF%B7%E8%A1%A8">这里</a>填写申请表加入我们，<del>一起愉快的摸鱼划水</del>。</p>
    </div>
    <div style="margin-top: 40px;"></div>
    <h2>成员列表</h2>
    <ul>
        <li>Misaka13514 / 欠陥電気（翻译、测试、修图）</li>
        <li>baiyuanneko / 柏园猫（网页开发）</li>
        <li>scientificworld（翻译、程序）</li>
        <li>杏乃夏未（翻译、特效字幕）</li>
        <li>Lockinwize Lolite / 洛仙璃（翻译协力）</li>
    </ul>
    <div style="margin-top: 40px;"></div>
    <h2>各平台发布帐号</h2>
    <ul>
        <li><a href="https://mikanani.me/Home/PublishGroup/982" target="_blank">Mikan Project / 蜜柑计划</a></li>
    </ul>
    ${bottom_template}
</div>
`;

function getRandomString(length) {
    let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

let workMapping = new Object();

function get_work_card(work) {
    let work_card_template = /* html */ `
    <div class="card work_card" ${typeof work.id !== "undefined" ? `id="${work.id}"` : ``}>
        <div class="card-body">
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        <div class="work_image_container position-relative d-inline-block">
`;

    // 判断是否为外链
    let imageSrc = work.image.startsWith("http") ? work.image : `../images/${work.image}`;

    work_card_template += /* html */ `
                            <img src="${imageSrc}" class="work_card_img" />
                        `;
    // 如果是 NSFW 内容，添加遮罩
    if (work.nsfw) {
        work_card_template += /* html */ `
                            <div class="nsfw_overlay d-flex justify-content-center align-items-center">
                                <i class="bi bi-eye-fill" style="font-size: 2rem;"></i>
                            </div>
                        `;
    }

    work_card_template += /* html */ `
                        </div>
                    </div>
                    <div class="col-10">
                        <h5>${work.title}</h5>
                        ${typeof (work.subtitle) !== "undefined" ? `<h6 style="color:grey;">${work.subtitle}</h6>` : ``}
    `;

    for (let i = 0; i < work.list.length; i++) {
        if (work.list[i][0] === "状态") {
            work_card_template += /* html */ `
                        <li>${work.list[i][0]}：<span style="color:${work.list[i][1] === "已完成" ? "deepskyblue" : (work.list[i][1] === "已终止" ? "red" : (work.list[i][1] === "进行中" ? "orange" : "var(--bs-body-color)"))}">${work.list[i][1] === "已完成" ? `<i class="bi bi-check2"></i>` : (work.list[i][1] === "已终止" ? `<i class="bi bi-ban"></i>` : (work.list[i][1] === "进行中" ? `<i class="bi bi-hourglass-split"></i>` : ""))} ${work.list[i][1]}</span></li>
            `;
        } else {
            work_card_template += /* html */ `
                        <li>${work.list[i][0]}：${work.list[i][1]}</li>
            `;
        }
    }

    let randomStr = getRandomString(8);

    work_card_template += /* html */ `
                    </div>
                </div>
            </div>

            ${typeof (work.detail) === "undefined" ? "<!--" : ""}
            <hr />
            <p class="see_detail_btn"><a href="javascript:void(0)" id="see_detail_btn_${randomStr}">查看详情 <i class="bi bi-caret-down"></i></a></p>
            <div id="see_detail_btn_${randomStr}_content" class="see_detail_btn_content" style="display:none"></div>
            ${typeof (work.detail) === "undefined" ? "-->" : ""}
        </div>
    </div>
    `;

    if (typeof (work.detail) === "undefined") {
        return work_card_template;
    }

    workMapping[`see_detail_btn_${randomStr}`] = work.detail;
    workMapping[`see_detail_btn_${randomStr}`].currentStatus = false;

    return work_card_template;
}

/**
 * Throttle function to limit the rate at which a function can fire
 * For example, render_detail() status can be wrongly displayed if the user clicks the button too fast
 * @param {Function} func function to throttle
 * @param {number} delay in milliseconds
 * @returns 
 */
function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

function render_detail() {
    document.querySelectorAll(".see_detail_btn a").forEach(element => {
        element.addEventListener("click", throttle(function () {
            workMapping[element.id].currentStatus = !workMapping[element.id].currentStatus;
            if (workMapping[element.id].currentStatus) {
                document.getElementById(element.id + "_content").innerHTML = workMapping[element.id]["html"];
                document.getElementById(element.id + "_content").style.display = "block";
                document.getElementById(element.id + "_content").style.maxHeight = document.getElementById(element.id + "_content").scrollHeight + 20 + "px";
                element.innerHTML = "收起详情 <i class='bi bi-caret-up-fill'></i>";
            } else {
                element.innerHTML = "查看详情 <i class='bi bi-caret-down'></i>";
                document.getElementById(element.id + "_content").style.maxHeight = 0;
                setTimeout(() => {
                    document.getElementById(element.id + "_content").style.display = "none";
                }, 300);
            }
            updateButtonOutline(getActualTheme());
        }, 300));
    });
}

function getUrlArgs() {
    let args = new Object();
    let query = location.search.substring(1);
    let pairs = query.split("&");
    for (let i = 0; i < pairs.length; i++) {
        let pos = pairs[i].indexOf("=");
        if (pos === -1) {
            continue;
        }
        let name = pairs[i].substring(0, pos);
        let value = pairs[i].substring(pos + 1);
        args[name] = value;
    }
    return args;
}

async function render_article_page() {
    const article_filename = getUrlArgs()["id"] + ".md";
    let articleObj = new Object();
    for(let i = 0; i < all_articles.length; i++) {
        if (all_articles[i].filename === article_filename) {
            document.title = all_articles[i].title + " - 香子兰翻译同好会";
            articleObj = all_articles[i];
            break;
        }
    }
    await fetch(`./${article_filename}`).then(response => response.text()).then(text => {
        const tagHtml = articleObj.tags.map(tag => `<a href="javascript:void(0)">${tag}</a>`).join("、");
        document.body.insertAdjacentHTML("beforeend", navbar_template + /* html */`
            <div class="startup_bg2">
                <div class="startup_bg_content">
                    <h1>博客 & 研究</h1>
                    <p>汉化作品发布博客、汉化过程中的一些技术成果等。</p>
                </div>
            </div>
            <div class="container" id="page_content">
            <h1>${articleObj["title"]}</h1>
            <p style="color: grey"><i class="bi bi-tags-fill"></i> 标签：${tagHtml} <i class="bi bi-person-fill" style="margin-left:16px"></i> 作者：${articleObj["author"]}<br /><i class="bi bi-clock"></i> 发布时间：${articleObj["date"]}</p>
            <hr /><br />

            ${marked.marked(text)}
            
            <br /><br />
            ${bottom_template}
            </div>
            `);
    });
}

function render_article_list(){
    document.querySelector("body").insertAdjacentHTML("beforeend", /* html */ `
    <div class="startup_bg2">
        <div class="startup_bg_content">
            <h1>博客 & 研究</h1>
            <p>汉化作品发布博客、汉化过程中的一些技术成果等。</p>
        </div>
    </div>
    <div class="container" id="page_content">
        <h1>文章列表</h1>
        <ul id="article_list" class="list-group"></ul>
        ${bottom_template}
    </div>
    `);
    all_articles.forEach(article => {
        const fileAbsoluteURL = new URL(article.filename, window.location.href).href;
        const tagHtml = article.tags.map(tag => `<a href="javascript:void(0)">${tag}</a>`).join("、");
        document.getElementById("article_list").insertAdjacentHTML("beforeend", /* html */ `
            <br />
        <li class="list-group-item" style="padding: 20px 30px${article.isTestArticle===true&&getUrlArgs()["test_mode"]==="true"?"":";display:none;"}">
            <h2 style="margin-bottom:15px;"><a href="${article.filename.split(".")[1]==="md"?`article.html?id=${article.filename.split(".")[0]}`:"https://view.officeapps.live.com/op/view.aspx?src="+fileAbsoluteURL}" class="article_list_link">${article.title}</a></h2>
            <span style="color:grey"><i class="bi bi-clock"></i> ${article.date} <i class="bi bi-tags-fill" style="margin-left: 16px;"></i> ${tagHtml} <i class="bi bi-person-fill" style="margin-left: 16px;"></i> 发布者：${article.author}</span>
            
            <br />
        </li>
        `)}
    );
    if (all_articles.length===0 || all_articles.every(article => article.isTestArticle === true) && getUrlArgs()["test_mode"] !== "true") {
        document.querySelector("#article_list").insertAdjacentHTML("afterBegin", /* html */ `
            <p>啊嘞嘞，看起来当前没有文章呢~</p>
        `);
    }
}

/**
 * Add the event listener to the NSFW overlay to hide it when clicked
 */
function render_nsfw_overlay() {
    document.querySelectorAll(".nsfw_overlay").forEach(element => {
        element.addEventListener("click", function () {
            element.style.opacity = 0;
            setTimeout(() => {
                element.style.display = "none";
            }, 500);
        });
    });
}

var all_articles = [];

async function render() {
    document.getElementById("universal_stylesheet").innerHTML = universal_stylesheet;
    switch (current_page) {
        case 'sub':
            document.body.insertAdjacentHTML("beforeend", navbar_template + sub_page_template);
            fetch('../data.json').then(response => response.json()).then(data => {
                for (let i = 0; i < data.sub.length; i++) {
                    document.getElementById("work_cards").insertAdjacentHTML("beforeend", get_work_card(data.sub[i]));
                }
                render_detail();
                render_nsfw_overlay();
            });
            break;
        case 'chs':
            document.body.insertAdjacentHTML("beforeend", navbar_template + chs_page_template);
            fetch('../data.json').then(response => response.json()).then(data => {
                for (let i = 0; i < data.chs.length; i++) {
                    document.getElementById("work_cards").insertAdjacentHTML("beforeend", get_work_card(data.chs[i]));
                }
                render_detail();
                render_nsfw_overlay();
            });
            break;
        case 'blog':
            all_articles = await fetch("../data.json").then(response => response.json()).then(data => data.blog_articles);
            document.body.insertAdjacentHTML("beforeend", navbar_template);
            render_article_list();
            break;
        case 'about':
            document.body.insertAdjacentHTML("beforeend", navbar_template + about_page_template);
            break;
        case "article":
            all_articles = await fetch("../data.json").then(response => response.json()).then(data => data.blog_articles);
            await render_article_page();
            break;
    }
}

/**
 * Get the current theme mode from localStorage
 * @returns {string} The current theme mode, either 'light', 'dark', or 'auto'
 */
function getThemeMode() {
    const localTheme = localStorage.getItem("theme");
    let theme = "auto";  // Default to 'auto'
    if (["light", "dark"].includes(localTheme)) {
        theme = localTheme;
    }
    return theme;
}

/**
 * Get the actual theme mode based on the current theme mode and system preference
 * @returns {string} The actual theme mode, either 'light' or 'dark'
 */
function getActualTheme() {
    const theme = getThemeMode();
    if (theme === "auto") {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        return prefersDarkScheme.matches ? "dark" : "light";
    }
    return theme;
}

/**
 * Update the theme based on the current theme mode
 */
function updateTheme() {
    const theme = getThemeMode();
    updateCurrentThemeIndicator(theme);

    const actualTheme = getActualTheme();
    document.querySelector("html").setAttribute("data-bs-theme", actualTheme);
    updateButtonOutline(actualTheme);
}

/**
 * Update the current theme indicator in the dropdown menu and navbar
 * @param {string} theme The current theme mode, either 'light', 'dark', or 'auto'
 */
function updateCurrentThemeIndicator(theme) {
    const themeIconMap = {
        light: "bi-sun-fill",
        dark: "bi-moon-fill",
        auto: "bi-circle-half"
    };

    const currentIcon = document.getElementById("current-theme-icon");
    currentIcon.className = `me-2 ${themeIconMap[theme]}`;  // Update current theme icon

    document.querySelectorAll(".dropdown-item").forEach(item => {
        item.classList.remove("active");  // Use 'active' class to highlight
    });

    const selectedThemeButton = document.querySelector(`[data-bs-theme-value="${theme}"]`);
    if (selectedThemeButton) {
        selectedThemeButton.classList.add("active");
    }
}

/**
 * Replace the button outline color based on the theme
 * https://getbootstrap.com/docs/5.0/components/buttons/#outline-buttons
 * Some of the button styles use a relatively light foreground color,
 * and should only be used on specific background in order to have sufficient contrast.
 * @param {string} theme The actual theme mode, either 'light' or 'dark'
 */
function updateButtonOutline(theme) {
    const buttons = document.querySelectorAll(".btn");
    if (theme === "dark") {
        document.querySelectorAll(".btn-outline-dark").forEach(button => {
            button.classList.remove("btn-outline-dark");
            button.classList.add("btn-outline-light");
        });
    } else if (theme === "light") {
        document.querySelectorAll(".btn-outline-light").forEach(button => {
            button.classList.remove("btn-outline-light");
            button.classList.add("btn-outline-dark");
        });
    }
}

render().then(() => {
    updateTheme();
    // Add event listener for theme change
    document.querySelectorAll("[data-bs-theme-value]").forEach(button => {
        button.addEventListener("click", function () {
            const selectedTheme = this.getAttribute("data-bs-theme-value");
            localStorage.setItem("theme", selectedTheme);
            updateTheme();
        });
    });
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateTheme);
})
