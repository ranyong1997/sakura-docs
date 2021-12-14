const { path } = require("@vuepress/utils");
module.exports = {
    extendsMarkdown: (md) => {
    },
    //在这里配置插件
    // base : "/sakura-docs/",
    plugins: [
        "@vuepress/plugin-search",
        {
            locales: {
                "/": {
                    placeholder: "Search",
                },
                "/zh/": {
                    placeholder: "搜索",
                },
            },
        },
        [
            path.resolve(__dirname, "../../Aurora-plugin/vuepress-plugin-coze/lib/node/index.js"),
            {
                appId: 'HJq7nUIvQPBQvqcnBAIPJmLV-MdYXbMMI',
                appKey: 'U3kYxjfJLOxivpLdIXR2Hmw9',
                masterKey: 'XLkxKqSaYCQYPfVVJilghfPJ',
                //下面这些是可选的
                avatarPath: 'https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211123222242.png',//说说头像url
                registerPath: '/sakura-register', //自定义插件默认提供的注册页面路由，请在前面加上/
                onlyAdministrator: true //是否运行其他注册的用户发布说说，true表示只有管理员可以发布
            }
        ],
        [
            path.resolve(__dirname, "../../Aurora-plugin/vuepress-plugin-archive/lib/node/index.js"),
            {
                excludes: ['/footer.html','/404.html','/about/','/mood/','/link/','/tag/','/photo/'],
                noTitle: '暂时没有标题配置'
            }
        ],
        [
            path.resolve(__dirname, "../../Aurora-plugin/vuepress-plugin-player/lib/node/index.js"),
            {
                showPlaylist: true,// 是否展示播放
                disableSpace: true,//禁用空格键
                //是否禁用网易云音乐，如果你选择禁用，那么就将使用本地的歌曲，请传入链接
                disabledNetEaseMusic: true,
                //本地歌曲
                localSongs: {
                    coverUrl: '/sakura.png',
                    songs: [
                        {
                            path: '/song/1.mp3',
                            songName: 'SAKURA',
                            cover: '/sakura.png'
                        },
                    ]
                }
            }
        ],
        [
            path.resolve(__dirname, "../../Aurora-plugin/vuepress-plugin-bubble/lib/node/index.js"),
            {
                //气泡数量 推荐0(不包括)到1之前的小数，
                bubbleNumber: 0.14,
                //气泡透明度 0到1之间的小数
                bubbleAlpha: 0.6,
                //透明度变化速度，越接近于0越好
                alphaChangeSpeed: 0.00001,
                //气泡大小，推荐0到1之间的值
                size: 0.4,
                //气泡大小变化速度 越小越好
                sizeChangeSpeed: 0.0002,
                //气泡上升速度
                riseSpeed: 0.4,
                //气泡颜色，白色rgb(255,255,255) 请传入255,255,255
                color: '255,255,255',
                zIndex: -2
            }
        ],
    ],

    //设置head 一定要加入<script src="https://at.alicdn.com/t/font_2849934_v6y652peian.js"></script>项配置，否则一些图标不能正常显示
    head: [
        [
            "meta",{
                "http-equiv": "Content-Security-Policy",
                "content": "upgrade-insecure-requests"
            }
        ],
        [
            "script",
            {
                src: "https://at.alicdn.com/t/font_2849934_v6y652peian.js",
            },
        ],
        //设置站点icon
        [
            "link",
            {
                href: "https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211123222242.png",
                rel: "icon",
            },
        ],
        [
            "link",
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '//at.alicdn.com/t/font_2970797_5eiedcvhf0a.css'
            }
        ]
    ],
    //这里使用本地主题
    theme: path.resolve(__dirname, "../../Aurora-theme/lib/node/index.js"),

    //站点title
    title: "Sakura",
    lang: 'zh-CN',

    //设置运行npm run dev的端口
    port: 8080,

    //themeConfig的所有配置，都是主题配置，包含默认主题配置项
    themeConfig: {
        //这里配置导航栏项，建议将navbar提取出，比如navbar.js
        navbar: [
            {
                text: '面经',
                iconClass: '',
                link: "#",
            },
            {
                text: '前端',
                iconClass: 'sakura-html',
                children: [
                    {
                        text: 'JavaScript',
                        children: [
                            '/Front-end/JavaScript语法学习.md'
                        ]
                    },
                    {
                        text: 'TypeScript',
                        children: [
                            '/Front-end/TypeScript语法学习.md'
                        ]
                    },
                    {
                        text: 'Vue项目实战',
                        children: [
                            '/Front-end/Vue项目实战.md'
                        ]
                    },
                ]
            },
            {
                text: '后端',
                iconClass: 'sakura-houduankaifa',
                children: [
                    {
                        text: 'Fastapi',
                        children: [
                            '/Back-end/fastapi.md'
                        ]
                    },
                    {
                        text: 'Python基础',
                        children: [
                            '/Back-end/python基础学习.md'
                        ]
                    },
                ]
            },
            {
                text: '服务端',
                iconClass: 'sakura-service',
                children: [
                    {
                        text: '宝塔面板',
                        children: [
                            '/Other/WebHook.md'
                        ]
                    },
                    {
                        text: '配置公钥',
                        children: [
                            '/Other/配置gitee、github公钥.md'
                        ]
                    },
                    {
                        text: '宝塔配置HTTPS',
                        children: [
                            '/Other/宝塔配置HTTPS.md'
                        ]
                    },
                    {
                        text: 'Node后台运行',
                        children: [
                            '/Other/在linux中持续运行Node.js文件.md'
                        ]
                    },
                ]
            },
            {
                text: "时间轴",
                link: "/aurora-archive/",
                iconClass: 'sakura-shijianzhou'
            },
            {
                text: "关于我",
                link: "/about",
                iconClass: 'sakura-guanyuwomen'
            },
            {
                text: '友链',
                link: '/link',
                iconClass: 'sakura-youlianguanli'
            },
            {
                text: '标签',
                link: '/tag',
                iconClass: 'sakura-biaoqian'
            },
            {
                text: '说说',
                link: '/mood',
                iconClass: 'sakura-41shuoshuo'
            },
            {
                text: "相册",
                link: '/photo',
                iconClass: 'sakura-xiangce'
            },
            {
                text: "Sakura",
                link: 'https://github.com/ranyong1997/sakura-docs',
                iconClass: 'sakura-github'
            }
        ],

        //禁用黑夜模式，当前版本未提供
        darkMode: false,
        //项目地址
        repo: "https://github.com/ranyong1997/sakura-blog",
        repoIconClass: 'sakura-docs',
        //md文件的仓库地址
        docsRepo: 'https://github.com/ranyong1997/sakura-docs',
        /*
        * 站点是否是使用github Actions自动部署，如果你使用github Actions完成自动部署，那么这里一定要为TRUE，为TRUE，假如你把此项目push
        * 到https://github.com/ranyong1997/sakura-blog这个仓库中，那么你需要将docsRepo设置为https://github.com/ranyong1997/sakura-docsœ，
        * 那么在文章页面，会根据根据你docsRepo和docsBranch设置正确的edit链接，也就是可以一键打开GitHub仓库中，此篇md文件的编辑
        * */
        //这是v1.9.0新增加的功能 是否在文章页底部显示最后更新时间，贡献者，点击编辑,默认显示
        showPageMeta: true,
        githubActions: true,
        //md文件存放的仓库分支
        docsBranch: 'main',
        //顶部导航栏，你repo地址的超链接文本
        repoLabel: "Sakura-theme",
        //是否启用文章在线编辑
        editLink: true,
        //在线编辑文字
        editLinkText: "编辑",
        lastUpdated: true,
        lastUpdatedText: "lastTime",
        //下面的都是主题自己的配置文件
        //logo旁文字颜色
        logoColor: "#2c3e50",
        //样式控制面板字体占位符，如果是国内用户，请使用中文
        showFont: "冉",
        //首页中间hero图片地址
        heroImg: 'https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211123222242.png',
        //logo图片地址
        logo: "https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211123222242.png",
        //文章懒加载图片 仅限文章，首页文章占位图片并不是这个
        lazyLoadingImg: "https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211123222547.gif",
        //这是首页文章列表懒加载图片
        homePageLazyLoadingImg: 'https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211123222641.gif',
        //是否启用定制首页随机一言，默认未开启，使用随机一言 接口为https://international.v1.hitokoto.cn/?c=b&max_length=45
        customRandomSay: false,
        //定制首页随机一言文字
        customRandomValue: 'Sakura',
        //社交信息，首页PC端至多显示19个，手机端至多显示7个，侧边栏不影响
        socials: [
            {
                //社交链接
                aHref: "tencent://message/?uin=1311518086",
                //true为在首页显示，反之
                isHome: true,
                //是否显示此社交信息,如果为false，尽管isHome=true，sidebar=true，也不会显示
                show: true,
                //是否在侧边栏显示
                sidebar: true,
                //使用阿里图标 使用的是阿里图标库，我也挑选部分图标，请进入http://ico.cco.vin/theme查看
                symbol: '#icon-qq',
                //鼠标移入此图标时，显示的图片，适用于微信等通过二维码添加好友
                showImgSrc: "https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211123222731.jpg",
            },
            {
                aHref: "",
                showImgSrc: "https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211123222804.jpg",
                isHome: true,
                show: true,
                symbol: '#icon-weixin',
                sidebar: true
            },
            {
                aHref: "https://github.com/ranyong1997/",
                isHome: true,
                show: true,
                sidebar: true,
                symbol: '#icon-github-fill'
            },
            {
                aHref: "https://music.163.com/#/user/home?id=322850719",
                isHome: true,
                show: true,
                symbol: '#icon-wangyiyunyinle',
                sidebar: true
            }
        ],

        //logo旁文字
        logoTitle: "Sakura",
        headTitle: "this is headTitle",
        //站点描述
        description: "🌸博客，生活很苦 你要快乐",
        //站点关键词，在后续版本中，还需优化 请使用英文状态下的逗号','隔开
        keyword: "记录成长,技术博客",
        //样式控制面板打开之后，休眠多长时间自动关闭面板，单位毫秒
        slideTime: 3000,
        //随机一言接口
        randomSaw: "https://international.v1.hitokoto.cn/?c=b&max_length=15",
        //关于页面
        about: [
            {
                // 此项是否展示为条状
                bar: false,
                title: "我?",
                describe: [
                    "这是关于页面支持html<a href='#' target='_blank'>这是一个标签</a>",
                    "目前是字节跳动一名员工,Base:深圳",
                    "喜欢健身,喜欢<a href='#' target='_blank'>摄影</a>📹",
                    "喜欢听<a href='https://music.163.com/#/user/home?id=322850719' target='_blank'>音乐</a>,什么类型都可",
                    "喜欢技术,code",
                    "目前正在学习Vue前端",
                ],
                tag: [
                    "code",
                    "健身",
                    "吵闹",
                    "音乐",
                    "摄影",
                ],
                // 是否展示tag
                showTag: true,
            },
            {
                bar: false,
                title: "目前规划",
                describe: [
                    "多跟着做开源Vue的项目",
                    "考PMP",
                    "学习后端知识",
                    "保持热爱"
                ],
                tag: ["大家加油呀`Σ(￣□￣||)` ..."],
                showTag: true,
            },
            {
                bar: false,
                title: "未来规划",
                describe: ["测开", "赚money"],
                tag: ["忘记过去，展望未来"],
                showTag: true,
            },
            {
                bar: true,
                title: "技  能",
                describe: [
                    {
                        name: "Vue",
                        score: 30,
                    },
                    {
                        name: "HTML5",
                        score: 87,
                    },
                    {
                        name: "javascript",
                        score: 82,
                    },
                    {
                        name: "css",
                        score: 73,
                    },
                    {
                        name: "python",
                        score: 50,
                    },
                    {
                        name: "docker",
                        score: 50,
                    },
                ],
                showTag: false,
            },

            {
                showTag: false,
                bar: true,
                title: "掌握框架",
                describe: [
                    {
                        name: "vue",
                        score: 40,
                    },
                    {
                        name: "fastapi",
                        score: 30,
                    },
                    {
                        name: "App UI自动化",
                        score: 60,
                    },
                ],
            },
            {
                bar: true,
                showTag: false,
                title: "掌握技能",
                describe: [
                    {
                        name: "linux",
                        score: 68,
                    },
                    {
                        name: "git",
                        score: 78,
                    },
                    {
                        name: "Ctrl C V",
                        score: 100,
                    },
                ],
            },
        ],

        //拿取对象 在后续版本中，会对此项进行优化
        randomSawQuery: "hitokoto",
        method: "get",

        //这是配置随机背景；颜色 可以不设置，有默认值
        randomColor: [
            "#ffcad4", "#d8e2dc", "#8d99ae", "#b8f2e6", "#84c7d0", "#aed9e0", "#00b4d8",
            "#caf0f8", "#fbc4ab", "#fdc5f5", "#84dcc6", "#a9def9", "#fcf6bd", "#f0a6ca",
            "#b9faf8", "#42a5f5", "#ff9800", "#b39ddb", "#6d45bb", "#b388ff", "#1565c0",
            "#26c6da", "#5e548e", "#90f1ef", "#5b5f97", "#bbe6e4", "#42bfdd", "#72ddf7",
            "#8093f1", "#9ed8d8", "#7ea8be", "#ef90b3", "#b892ef", "#c0b9dd", "#c0d9dd",
            "#75c9c8", "#ded9e2", "#b5e2fa", "#62b6cb", "#5fa8d3", "#0fa3b1", "#b5e2fa",
            "#5fa8d3", "#62b6cb", "#b892ff",
        ],

        //样式控制面板至多显示多少个字体和字体颜色，推荐不超过8个
        maxFontColorArr: 8,

        //在样式控制面板中，显示的字体颜色集合
        fontColor: [
            "#2c3e50", "#42a5f5", "#8093f1", "#FF6EC7", "#FF7F00", "#8FBC8F", "#EAADEA",
            "#3299CC", "#CDCDCD", "#CC3299", "#FF7F00", "#2F4F4F",
        ],

        //友情链接数组
        friendLinks: [
            {
                title: '我的朋友',
                links: [
                    {
                        //网站标题
                        title: "XI溪",
                        //站点链接
                        url: "http://www.xiaoxuya.top",
                        //站点logo
                        logo: "https://www.xiaoxuya.top/img/logo.png",
                        //站点描述
                        describe: "人生若只是初见,何事秋风悲画扇",
                        cover: 'https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: "左眼会陪右眼哭の博客",
                        url: "http://qkongtao.cn/",
                        logo: "http://qiniu.qkongtao.cn/2020/12/d11-e1628358435552.png",
                        describe: "干嘛这么想不开，要在脸上贴个输字！",
                        cover: 'https://ooszy.cco.vin/img/blog-note/image-20211106101057042.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: "[ Blog We]",
                        url: "https://blogwe.com/",
                        logo: "https://blogwe.com/favicon.ico",
                        describe: "博客大全-做最好的博客导航！",
                        cover: "https://ooszy.cco.vin/img/blog-note/image-20211106100344348.png?x-oss-process=style/pictureProcess1"
                    },
                    {
                        title: "I Am I",
                        url: "https://5ime.cn",
                        logo: "https://cdn.jsdelivr.net/gh/5ime/img/avatar.jpg",
                        describe: "永远相信美好的事情即将发生",
                        cover: 'https://ooszy.cco.vin/img/blog-note/image-20211106100424035.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: "Davinci的红茶馆",
                        url: "https://davincievans.top/",
                        logo: "https://cdn.jsdelivr.net/gh/DavinciEvans/Imgs-bed@master/gallery/avatar.jpg",
                        describe: "You are all stardust.",
                        cover: 'https://ooszy.cco.vin/img/blog-note/image-20211106100502873.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: "皮皮凛の小窝",
                        url: "https://owomoe.net/",
                        logo: "https://cdn.jsdelivr.net/gh/AyagawaSeirin/Assets/img/logo.jpg",
                        describe: "永远相信美好的事情即将发生~",
                        cover: 'https://ooszy.cco.vin/img/blog-note/image-20211106100608395.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: "月月月子喵",
                        url: "https://haozi.moe",
                        logo: "https://haozi.moe/css/images/logo_christmas.png",
                        describe: "可爱的月子酱",
                        cover: 'https://ooszy.cco.vin/img/blog-note/image-20211106100009647.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: "疫情在线捐款系统",
                        url: "http://yq.vipblogs.cn/",
                        logo: "https://ooszy.cco.vin/img/blog-public/avatar.jpg",
                        describe: "基于echarts的疫情捐款系统",
                        cover: ''
                    },
                    {
                        title: "疫情在线捐款系统后台登录",
                        url: "http://admin.vipblogs.cn/",
                        logo: "https://ooszy.cco.vin/img/blog-public/avatar.jpg",
                        describe: "该捐款系统后台登录",
                        cover: ''
                    },
                ]
            },
            {
                title: '大佬',
                links: [
                    {
                        //网站标题
                        title: "XI溪",
                        //站点链接
                        url: "http://www.xiaoxuya.top",
                        //站点logo
                        logo: "https://www.xiaoxuya.top/img/logo.png",
                        //站点描述
                        describe: "人生若只是初见,何事秋风悲画扇",
                        cover: 'https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: "左眼会陪右眼哭の博客",
                        url: "http://qkongtao.cn/",
                        logo: "http://qiniu.qkongtao.cn/2020/12/d11-e1628358435552.png",
                        describe: "干嘛这么想不开，要在脸上贴个输字！",
                        cover: 'https://ooszy.cco.vin/img/blog-note/image-20211106101057042.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: "皮皮凛の小窝",
                        url: "https://owomoe.net/",
                        logo: "https://cdn.jsdelivr.net/gh/AyagawaSeirin/Assets/img/logo.jpg",
                        describe: "永远相信美好的事情即将发生~",
                        cover: 'https://ooszy.cco.vin/img/blog-note/image-20211106100608395.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: "月月月子喵",
                        url: "https://haozi.moe",
                        logo: "https://haozi.moe/css/images/logo_christmas.png",
                        describe: "可爱的月子酱",
                        cover: 'https://ooszy.cco.vin/img/blog-note/image-20211106100009647.png?x-oss-process=style/pictureProcess1'
                    },
                ]
            },
            {
                title: '小伙伴',
                links: [
                    {
                        //网站标题
                        title: "XI溪",
                        //站点链接
                        url: "http://www.xiaoxuya.top",
                        //站点logo
                        logo: "https://www.xiaoxuya.top/img/logo.png",
                        //站点描述
                        describe: "人生若只是初见,何事秋风悲画扇",
                        cover: 'https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: "[ Blog We]",
                        url: "https://blogwe.com/",
                        logo: "https://blogwe.com/favicon.ico",
                        describe: "博客大全-做最好的博客导航！",
                        cover: "https://ooszy.cco.vin/img/blog-note/image-20211106100344348.png?x-oss-process=style/pictureProcess1"
                    },
                    {
                        title: "Davinci的红茶馆",
                        url: "https://davincievans.top/",
                        logo: "https://cdn.jsdelivr.net/gh/DavinciEvans/Imgs-bed@master/gallery/avatar.jpg",
                        describe: "You are all stardust.",
                        cover: 'https://ooszy.cco.vin/img/blog-note/image-20211106100502873.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: "皮皮凛の小窝",
                        url: "https://owomoe.net/",
                        logo: "https://cdn.jsdelivr.net/gh/AyagawaSeirin/Assets/img/logo.jpg",
                        describe: "永远相信美好的事情即将发生~",
                        cover: 'https://ooszy.cco.vin/img/blog-note/image-20211106100608395.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: "疫情在线捐款系统",
                        url: "http://yq.vipblogs.cn/",
                        logo: "https://ooszy.cco.vin/img/blog-public/avatar.jpg",
                        describe: "基于echarts的疫情捐款系统",
                        cover: ''
                    },
                ]
            },
        ],

        //自己的站点信息 我自己的站点描述 会显示在友情链接的底部
        siteInformation: {
            //站点标题
            title: "Sakura-theme",
            //自己站点链接
            url: "https://aurora.cco.vin",
            //自己站点logo
            logo: "https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211123222242.png",
            //自己站点描述
            describe: "vuepress-theme-Aurora是一款简洁，美观，功能强大的静态主题",
            cover: 'https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1',
            //自己的头像
            contact: "email: cqycco@gmail.com, qq:2291308094",
            otherDescribe: [
                '申请友链请按照下面格式，在此页面留言，我看到就会进行添加',
                '博客名称    博客地址      博客描述      博客logo',
                '友链申请要求',
                '拒绝涉政/涉黄/太多广告/盈利性站点',
                '站点能正常访问',
                '这是一个html的测试<a href="#" target="_blank">这是一个a标签</a>'
            ]
        },

        //样式控制面板显示的字体，有默认值
        fontFamily: [
            "-apple-system", "hlt", "tzt", "sst", "lf", "xsf", "lsf", "cgt",
        ],

        //页脚信息，支持HTML，这是一个数组
        footer: [
            "Copyright © by sakura All Rights Reserved.",
            "<a target='_blank' href='#' style='display:inline-block;text-decoration:none;height:20px;line-height:20px;'><img src='' style='float:left;'/><p style='float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px;'>💗</p></a>",
        ],

        //是否显示页脚，控制全局
        isShowFooter: true,

        //是否显示主题信息在页脚，为false关闭
        isShowThemeCopyright: false,

        //是否展示运行时间
        isShowRunTime: true,

        //网站开始时间，请按照以下格式进行
        startRunTime: "8/7/2021 12:22:00",

        //网站运行时间前缀
        prefixRuntime: "小破站已运行",

        //公告，是一个数组，支持图片，HTML
        message: [
            '这是一个公告<a href="#">Sakura</a>',
            "祝大家学业进步",
        ],

        //文章底部最大推荐文章数 默认值为30
        recommendPageLength: 30,

        //推荐列表标题为空时，就会使用这个进行代替，默认是`╮(￣▽￣)╭`
        recommendNoTitle: "`╮(￣▽￣)╭`",

        //tag页，没有标题时，代替文字 默认是下面这个
        tagNoTitle: "暂时还没有标题哟",

        //首页中间框的话语
        mood: "",
        //默认打开网站时的毛玻璃状态，TRUE表示默认开启毛玻璃效果
        isFitter: true,
        //默认的圆角，传入数字
        defaultBorderRadius: 10,
        //默认的透明度，传入0到1之间的小数，0表示全透明
        defaultOpacity: 1,
        //首页文章列表透明度是否跟随样式面板改变，true表示跟随，全白色,false表示不跟随
        isHomePageFollow: true,
        //默认模糊度
        defaultBlur: 1,
        //手机端，是否在页面的底部显示侧边栏列表，默认开启，如果需要开启，请将此值设置为FALSE
        //mobilePageSidebar: false,

        //tag页面，标签分割符 请不要传入一个空字符串，默认值就是' ' 一个空格
        split: "~",

        //赞赏信息
        donate: {
            //赞赏页面，支付二维码，推荐放置两张图片链接
            donateImg: [
                // "https://ooszy.cco.vin/img/blog-public/wxpay.png",
                // "https://ooszy.cco.vin/img/blog-public/zfbpay.jpg",
            ],
            //是否在文章页面显示赞赏 默认显示
            articlePage: false,
            //是否在关于页面显示 默认显示
            aboutPage: false,
            //显示在赞赏页面的信息
            donateProduct: [
                {
                    //名字
                    name: "奶茶",
                    //图片地址
                    img: "https://ooszy.cco.vin/img/blog-public/nc.jpeg",
                    //价格
                    price: 18,
                    //前缀
                    prefix: "$",
                },
                {
                    name: "全味奶茶",
                    img: "https://ooszy.cco.vin/img/blog-note/image-20210911233612031.png?",
                    price: 11,
                    prefix: "￥",
                },
            ],

            //是否显示在线支付的订单信息，如果需要开启，请自己写支付接口，自己修改源码，默认关闭
            onlineList: true,
            //用户赞赏列表数组
            donateList: [
                {
                    name: "初尘",
                    msg: "主题太棒了",
                    img: "https://ooszy.cco.vin/img/blog-public/nc.jpeg",
                    price: 7,
                    prefix: "￥",
                },
            ],
        },

        //评论配置 请自己查看文档配置 https://aurora.cco.vin/config/comment/
        comment: {
            //是否显示评论
            showComment: true,
            serverURL: 'https://blog-api-swzl-itmtaqoyv-ranyong1997.vercel.app/',
            emojis: [
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili',
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tieba',
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo'
            ],
            avatar: 'monsterid'
        },

        //海报分享配置
        poster: {
            //博客描述
            description: "👏点赞、评论",
            //作者
            author: "Sakura",
            //博客前缀
            preBlog: "Sakura",
            //海报博客名称后缀
            suffixBlog: " theme",
            //头像，请放置在docs/public目录下，或者请保证此图片链接能够跨域访问，否则头像不能正常显示
            avatar: "/sakura.png",
        },
        //是否展示从网络上请求回来的说说 如果启用，请自己写后台服务，修改源码，目前暂未在主题中加入，期望在将来能够实现，组件位置docs/.vuepress/theme/lib/client/components/Mood.vue
        showOnlineMood: true,
        //是否开启在线添加说说功能，如果需要，请自己写后台，修改源码，目前在主题内部暂未加入 组件位置docs/.vuepress/theme/lib/client/components/child/AddMood.vue
        showMoodEdit: false,
        //此项仅限我自己的增加说说请求配置，暂未提供注册服务，目前仅限自己使用，可能在以后完善之后，你们只需要简单配置下，就能使用了，期待
        addMood: {
            siteName: "localhost:8080",
            appId: "HJq7nUIvQPBQvqcnBAIPJmLV-MdYXbMMI",
            appKey: "U3kYxjfJLOxivpLdIXR2Hmw9",
        },

        //自定义顶部图片
        customTopImg: {
            //是否启用定制顶部图片，控制全局，如果关闭，那么将使用随机图片，随机图片接口可以自己设置
            custom: false,
            //文章顶部图片，数组，每次从数组中随机选择一张
            page: [
                "https://picoss.cco.vin/animate/wall/555260.png",
                'https://picoss.cco.vin/animate/wall/404901.png',
                'https://picoss.cco.vin/animate/wall/734386.png'
            ],
            //友情链接页面
            friend: [
                "https://picoss.cco.vin/animate/wall/669.png",
                'https://picoss.cco.vin/animate/wall/5332.png'
            ],
            //标签页面
            tag: [
                "https://picoss.cco.vin/animate/wall/763311.png"
            ],
            //说说页面
            mood: [
                "https://picoss.cco.vin/animate/wall/5849.png"
            ],
        },

        //首页背景图片数组，考虑到使用随机图片，打开网站速度变慢，所以移除随机图片，使用自己设置的图片链接
        homeWps: [
            'https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211113231622.jpeg',
            "https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211113231621.jpeg",
        ],

        //手机端首页背景图片
        homeWpsMobile: [
            "https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211113231019.jpeg",
            "https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211113231018.jpeg",
            "https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211113231017.jpeg",
            "https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211113231016.jpeg"
        ],

        //首页文章显示条数，默认为4，此值不推荐设置太大
        pageSize: 4,
        //侧边栏配置
        //github地址
        githubUrl: "https://github.com/ranyong1997/sakura-docs",
        //最新文章数量，默认为6
        latestPageSize: 6,
        //首页是否显示文章图片，默认关闭，如果显示的话，首页加载会非常慢 已弃用，从v1.3.2开始，直接移除首页文章内容图片
        showHomePageImg: false,
        //文章侧边栏自动获取的层次 默认为1，也就是http://localhost:8080/config/feature/donate.html,只会自动生成feature目录下的文件
        sidebarCatalogLevel: 3,
        //首页文章列表封面图api接口
        homePageImgApi: "https://api.ixiaowai.cn/api/api.php",
        //手机端侧边栏横线分割文字
        mobileCutText: "Sakura",
        //侧边栏标签处显示还是分类还是标签，只有两个值，默认为分类，如果为tag，那么就显示为分类，否则显示为标签
        sidebarTag: "",
        //额外的功能，也就是样式控制面板上面那个，默认是关闭的
        showAddMood: true,
        //生成海报的顶部图片api接口，请注意，该接口需要直接返回图片地址，不能有跨域问题，设置之前，可以先使用ajax看是否存在跨域
        postImgApi: 'https://picture.cco.vin/pic/rmimg?type=bing',
        /*
        * 以下为v1.5.4新增功能
        * */
        //文章h2标签的icon
        articleH2Icon: '🌸',
        //文章h3标签的icon
        articleH3Icon: '🐳',
        //文章h4标签及h4标签之后的标签的icon
        articleH4Icon: '⛄',
        //v1.6.4新增配置
        sidebarAvatar: 'https://gitee.com/ran_yong/mark-down-table-upload/raw/master/img/20211123222242.png',
        //1.7.1增加配置
        sugCountPerMin: 300,
        //v1.8.0新增配置项
        //是否展示文章推荐 默认展示
        showRecommend: true,
        //文章页面是否显示上一页，下一页 默认展示
        articlePagination: true,

        global: {
            sidebar: {
                showStatus: true,
                perData: false,
                social: false,
                friendLink: true,
                navbar: false,
                latestPage: true,
                message: false,
                tag: true,
                siteData: false
            },
            footer: false,
        },
        //excludeTag: ["note"], 此配置项，不再需要使用

        //在统计文章，标签，类别的时候，需要排除的路径，只针对于根目录下的路径，
        excludePath: ["/sakura-register/"],

        //类别项是否包含文件夹名，默认包含
        categoriesIncludeFolderName: false,

        //首页波浪效果设置
        wave: {
            showWave: true
        },

        //顶部图片的气泡控制
        bubble: {
            show: true,
            //气泡数量 推荐0(不包括)到1之前的小数，
            bubbleNumber: 0.14,
            //气泡透明度 0到1之间的小数
            bubbleAlpha: 0.6,
            //透明度变化速度，越接近于0越好
            alphaChangeSpeed: 0.00001,
            //气泡大小，推荐0到1之间的值
            size: 0.4,
            //气泡大小变化速度 越小越好
            sizeChangeSpeed: 0.0002,
            //气泡上升速度
            riseSpeed: 0.4,
            //气泡颜色，白色rgb(255,255,255) 请传入255,255,255
            color: '255,255,255'
        },
        /**
         * 这里是配置统计阅读量的leanCloud配置，从1.9.0开始，将不再需要依赖waline的阅读统计,这里配置的appId,appKey,masterKey可以
         * 和vuepress-plugin-coze插件使用同一个应用
         * */
        leanCloud: {
            appId: 'HJq7nUIvQPBQvqcnBAIPJmLV-MdYXbMMI',
            appKey: 'U3kYxjfJLOxivpLdIXR2Hmw9',
            masterKey: 'XLkxKqSaYCQYPfVVJilghfPJ',
        },
    }
};
