module.exports = {
    base: '/gulu-demo/',
    title: '柠檬UI',
    description: '一个好用的UI框架',
    lastUpdated: "Last Updated",
    themeConfig: {
        logo: '/lemon.png',
        smoothScroll: true,
        nav: [
            {text: "主页", link: "/"},
            {text: "文档", link: "/install/"},
            {text: "Github", link: "https://github.com/JaniceZD/gulu-demo"}
        ],
        sidebar: [
            {
                title: "介绍",
                collapsable: false,
                children: ["/introduce/"]
            },
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    "/components/button",
                    "/components/input",
                    "/components/tabs",
                    "/components/grid",
                    "/components/layout",
                    "/components/popover",
                    "/components/collapse",
                    "/components/toast"
                ]
            }
        ]
    }
};