import { defineConfig } from 'vite'

export default defineConfig({
  title: '站点标题', // 站点标题
  description: '站点描述', // mate标签description，多用于搜索引擎抓取摘要
  base: "/vitepress-test/", //这里一定要是对应github的项目名称
  themeConfig: {
    lang: "zh-CN",
    outline: 'deep',
    siteTitle: "vitepress网站",
    logo: "/logo.png", //网站logo
    socialLinks: [
      {
        icon: 'github', // 使用PNG图标
        link: 'https://github.com/twolf11' // 这里是点击图标后跳转的链接
      },
    ],
    footer: {
      copyright: "版权信息-一般是备案信息",
    },
    nav: [
        { text: "主页", link: "/index" },  
        { text: "根目录", link: "/vitepress安装和部署" },     
        {
          text: "多级目录", 
          items: [
            { text: '测试1', link: '/test/vitepress安装和部署' },
            { text: '测试2', link: '/test/vitepress安装和部署' },
          ]
        },
      ],
      sidebar: {
        "/test": {
            items: [
              {
                text: "侧边栏测试1",
                items: [
                    {
                      text: "侧边栏测试1-1",
                      link: "/test/vitepress安装和部署",
                    }
                  ],
              },
              {
                text: "侧边栏测试2",
                link: "/test/vitepress安装和部署",
              }
            ],
          },
      },
  }
})
