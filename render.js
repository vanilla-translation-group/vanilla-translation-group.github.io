const universal_stylesheet = `
@media (min-width: 992px) { 
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

@media (max-width: 992px) { 
    .work_card .card-body .container .row div {
        display:block;
        width:100%;
    }

    .work_card .card-body .container .row div img {
        display: block;
        margin: auto;
        margin-bottom:40px;
    }
}

@media (min-width: 992px) and (max-width: 1076px) {
    a.navbar-brand {
        width: 60vw;
        display:block;
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
    font-family: 'Segoe UI', 'Microsoft YaHei', '微软雅黑', 'PingFang SC', '苹方', 'HarmonyOS Sans', 'Mi Sans', 'Noto Sans CJK SC', 'Source Han Sans', '思源黑体 CN', '文泉驿微米黑', 'Droid Sans Fallback', sans-serif;
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
    max-width: 100%; max-height: 150px;
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
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 12px;
    max-height: 0;
    transition: max-height 0.3s ease-out;
    overflow: hidden;
    margin-bottom: 20px;
}
`;

const navbar_template = `
<nav class="navbar navbar-expand-lg" id="navbar">
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
                        <a class="nav-link${current_page==="about"?" active":""}" href="../about/"><i class="bi bi-info-square"></i> 关于我们</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link${current_page==="chs"?" active":""}" href="../chs/"><i class="bi bi-file-earmark-text"></i> 作品集 · 汉化</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link${current_page==="sub"?" active":""}" href="../sub/"><i class="bi bi-film"></i> 作品集 · 字幕</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link${current_page==="blog"?" active":""}" href="../blog/"><i class="bi bi-book"></i> 博客 & 研究</a>
                    </li>
                </ul>
            </div>
    </div>
</nav>
`;

const bottom_template = `
<p><a href="https://github.com/vanilla-translation-group" target="_blank">访问我们的 GitHub 页面</a></p>
`;

const sub_page_template = `
<div class="startup_bg">
    <div class="startup_bg_content">
        <br /><br />
        <h1>作品集 · 字幕</h1>
        <p>我们翻译的动画、电影等作品的字幕文件。</p>
    </div>
</div>
<div class="container" id="page_content">
    <div id="work_cards"></div>
    <div style="margin-top: 80px;"></div>
    <hr />
    ${bottom_template}
</div>
`;

const chs_page_template = `
<div class="startup_bg2">
    <div class="startup_bg_content">
        <br /><br />
        <h1>作品集 · 汉化</h1>
        <p>我们翻译的视觉小说等作品的汉化补丁文件。</p>
    </div>
</div>
<div class="container" id="page_content">
    <div id="work_cards"></div>
    <div style="margin-top: 80px;"></div>
    <hr />
    ${bottom_template}
</div>
`;

const blog_page_template = `
<div class="startup_bg2">
    <div class="startup_bg_content">
        <br /><br />
        <h1>博客 & 研究</h1>
        <p>汉化作品发布博客、汉化过程中的一些技术成果等。</p>
    </div>
</div>
<div class="container" id="page_content">
    （此页面正在建设中，敬请期待！）
    <div style="margin-top: 80px;"></div>
    <hr />
    ${bottom_template}
</div>
`;

const about_page_template = `
<div class="startup_bg2">
    <div class="startup_bg_content">
        <br /><br />
        <h1>关于我们</h1>
        <p>关于「香子兰翻译同好会」的一切。</p>
    </div>
</div>
<div class="container" id="page_content">
    <div style="text-indent: 25px each-line;">
        我们是由一群计算机和 ACGN 爱好者组成的一个兴趣使然的翻译同好会。gal、动画、漫画之类都有在翻译，也算是涉猎广泛了。嘛，总之是个比较松散随性的组织，组里也没有什么细化的分工。<br>
        一个坑都是这么个流程：组员冒出一个点子（诶我觉得这作还行也没人做）-&gt; 总之自己先开干（之后再拉其他人下水）-&gt; 干完了（发布）/ 各种原因干不完（弃坑）<br>
        关于这个名字的来由，是因为组员们都很喜欢猫娘，尤以 NEKOPARA 的香子兰为最。不过我们也有别的马甲，比如<span style="background: black; color: black;">+JctopiXLd7NsSVMWfsQ-</span>什么的。<br>
        由于挖坑似乎一不小心挖多了所以现在正处于急需人手状态，最缺的还是翻译（含校润）。要求是翻译出来的文本能让人读懂且基本符合原意（特殊情况除外）就行，即“达”和“信”，至于“雅”可以暂不考虑。<br>
        如果你看到这里还有点点兴趣的话<del>（应该不会有吧）</del>，可以在<a href="">这里</a>填写申请表加入我们，<del>一起愉快的摸鱼划水</del>。
    </div>
    <div style="margin-top: 40px;"></div>
    <h2>成员列表</h2>
    <ul>
        <li>Misaka13514 / 欠陥電気（翻译、测试、修图）</li>
        <li>baiyuanneko / 柏园猫（网页开发）</li>
        <li>scientificworld（翻译、程序）</li>
        <li>杏乃夏未（翻译、特效字幕）</li>
        <li>Lockinwize Lolite（翻译协力）</li>
    </ul>
    <div style="margin-top: 40px;"></div>
    <h2>各平台发布帐号</h2>
    <ul>
        <li><a href="https://mikanani.me/Home/PublishGroup/982" target="_blank">Mikan Project</a></li>
    </ul>
    <div style="margin-top: 80px;"></div>
    <hr />
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

function get_work_card(work){
    let work_card_template = `
    <div style="margin-top: 20px;"></div>
<div class="card work_card" ${typeof work.id !== "undefined" ? `id="${work.id}"` : ``}>
    <div class="card-body">
        <div class="container">
            <div class="row">
                <div class="col-2">
                    <img src="../images/${work.image}" class="work_card_img" />
                </div>
                <div class="col-10">
                    <h5>${work.title}</h5>
                    ${typeof(work.subtitle)!=="undefined"?`<h6 style="color:grey;">${work.subtitle}</h6>`:``}
                    

`;
    for(let i = 0; i < work.list.length; i++){
        if(work.list[i][0] === "状态"){
            work_card_template += `
                    <li>${work.list[i][0]}：<span style="color:${work.list[i][1]==="已完成"?"deepskyblue":(work.list[i][1]==="已终止"?"red":(work.list[i][1]==="进行中"?"orange":"black"))}">${work.list[i][1]==="已完成"?`<i class="bi bi-check2"></i>`:(work.list[i][1]==="已终止"?`<i class="bi bi-ban"></i>`:(work.list[i][1]==="进行中"?`<i class="bi bi-hourglass-split"></i>`:""))} ${work.list[i][1]}</span></li>
`;
        } else {
            work_card_template += `
                    <li>${work.list[i][0]}：${work.list[i][1]}</li>
`;
        }
        
    }

    let randomStr = getRandomString(8);
    
    work_card_template += `
                </div>
            </div>
        </div>
        <br />

        ${typeof(work.detail)=== "undefined"?"<!--":""}
        <hr />
        <p class="see_detail_btn"><a href="javascript:void(0)" id="see_detail_btn_${randomStr}">查看详情 <i class="bi bi-caret-down"></i></a></p>
        <div id="see_detail_btn_${randomStr}_content" class="see_detail_btn_content" style="display:none"></div>
        ${typeof(work.detail)=== "undefined"?"-->":""}
    </div>
</div>
`;
    if(typeof(work.detail) === "undefined") {
        return work_card_template;
    }

    workMapping[`see_detail_btn_${randomStr}`] = work.detail;
    workMapping[`see_detail_btn_${randomStr}`].currentStatus = false;

    return work_card_template;
}

function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

function render_detail(){
    document.querySelectorAll(".see_detail_btn a").forEach(element => {
        element.addEventListener("click", throttle(function(){
            workMapping[element.id].currentStatus = !workMapping[element.id].currentStatus;
            if(workMapping[element.id].currentStatus){
                document.getElementById(element.id+"_content").innerHTML = "<br />"+workMapping[element.id]["html"]+"<br />";
                document.getElementById(element.id+"_content").style.display = "block";
                document.getElementById(element.id+"_content").style.maxHeight = document.getElementById(element.id+"_content").scrollHeight + 20 + "px";
                element.innerHTML = "收起详情 <i class='bi bi-caret-up-fill'></i>";
            } else {
                element.innerHTML = "查看详情 <i class='bi bi-caret-down'></i>";
                document.getElementById(element.id+"_content").style.maxHeight = 0;
                setTimeout(() => {
                    document.getElementById(element.id+"_content").style.display = "none";
                }, 300);
            }
        }, 300));
    });
}

function render(){
    document.getElementById("universal_stylesheet").innerHTML = universal_stylesheet;
    switch(current_page){
        case 'sub':
            document.body.insertAdjacentHTML("beforeend", navbar_template + sub_page_template);
            fetch('../data.json').then(response => response.json()).then(data => {
                for(let i = 0; i < data.sub.length; i++){
                    document.getElementById("work_cards").insertAdjacentHTML("beforeend", get_work_card(data.sub[i]));
                }
                render_detail();
            });
            break;
        case 'chs':
            document.body.insertAdjacentHTML("beforeend", navbar_template + chs_page_template);
            fetch('../data.json').then(response => response.json()).then(data => {
                for(let i = 0; i < data.chs.length; i++){
                    document.getElementById("work_cards").insertAdjacentHTML("beforeend", get_work_card(data.chs[i]));
                }
                render_detail();
            });
            break;
        case 'blog':
            document.body.insertAdjacentHTML("beforeend", navbar_template + blog_page_template);
            break;
        case 'about':
            document.body.insertAdjacentHTML("beforeend", navbar_template + about_page_template);
            break;
    }
}

render();
