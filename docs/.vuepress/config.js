const path = require('path')

module.exports = {
  title: 'Kozart\'s World ',

  description: 'Kozartlvis Blog',

  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },

  evergreen: true,

  plugins: {
    '@vuepress/google-analytics': {
      'ga': 'UA-144341735-1',
    },
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        '/': {
          message: 'QWQ有新的内容了yo',
          buttonText: '刷新',
        },
        '/zh/': {
          message: 'QWQ有新的内容了yo',
          buttonText: '刷新',
        },
      },
    },
  },

  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router|vssue)[\\/]/,
            name: 'vendor.vue',
            chunks: 'all',
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.commons',
            chunks: 'all',
          },
        },
      })
    }
  },

  theme: path.resolve(__dirname, '../../lib'),

  themeConfig: {
    lang: 'zh-CN',

    // 个人信息（没有或不想设置的，删掉对应字段即可）
    personalInfo: {
      // 昵称
      nickname: 'Kozartlvis',

      // 个人简介
      description: 'Java Python 后端<br/>守望先锋|PUBG|Rainbow Six<br/>B站：Kozartlvis',

      // 电子邮箱
      email: '752177494@qq.com',

      // 所在地
      location: 'Shanghai,China',

      // 组织
      organization: 'SUES',

      // 头像
      // 设置为外部链接
      avatar: 'https:////i0.hdslb.com/bfs/face/c064a6f0a4d13bf5b2dcb3ea0a3e3a8219a257a8.jpg',
      // 或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
      // avatar: '/img/avatar.jpg',

      // 社交平台帐号信息
      sns: {
        // Github 帐号和链接
        github: {
          account: 'kozartlvis',
          link: 'https://github.com/kozartlvis',
        },

        // // Facebook 帐号和链接
        // facebook: {
        //     account: 'meteorlxy.cn',
        //     link: 'https://www.facebook.com/meteorlxy.cn',
        // },

        // LinkedIn 帐号和链接
        // linkedin: {
        //     account: 'meteorlxy',
        //     link: 'http://www.linkedin.com/in/meteorlxy',
        // },

        // Twitter 帐号和链接
        // twitter: {
        //     account: 'meteorlxy_cn',
        //     link: 'https://twitter.com/meteorlxy_cn',
        // },

        // 新浪微博 帐号和链接
        weibo: {
          account: '@Kozart_OvO',
          link: 'https://weibo.com/u/2170338964',
        },

        // // 知乎 帐号和链接
        // zhihu: {
        //     account: 'meteorlxy.cn',
        //     link: 'https://www.zhihu.com/people/meteorlxy.cn',
        // },
        //
        // // 豆瓣 帐号和链接
        // douban: {
        //     account: '159342708',
        //     link: 'https://www.douban.com/people/159342708',
        // },
        //
        // // Reddit 帐号和链接
        // reddit: {
        //     account: 'meteorlxy',
        //     link: 'https://www.reddit.com/user/meteorlxy',
        // },
        //
        // // Medium 帐号和链接
        // medium: {
        //     account: 'meteorlxy.cn',
        //     link: 'https://medium.com/@meteorlxy.cn',
        // },
        //
        // // Instagram 帐号和链接
        // instagram: {
        //     account: 'meteorlxy.cn',
        //     link: 'https://www.instagram.com/meteorlxy.cn',
        // },
        //
        // // GitLab 帐号和链接
        // gitlab: {
        //     account: 'meteorlxy',
        //     link: 'https://gitlab.com/meteorlxy',
        // },
        //
        // // Bitbucket 帐号和链接
        // bitbucket: {
        //     account: 'meteorlxy',
        //     link: 'https://bitbucket.org/meteorlxy',
        // },
        //
        // // Docker Hub 帐号和链接
        // docker: {
        //     account: 'meteorlxy',
        //     link: 'https://hub.docker.com/u/meteorlxy',
        // },
        bilibili: {
          account: 'kozartlvis',
          link: 'https://space.bilibili.com/32268802',
        },
        csdn: {
          account: '',
          link: 'https://www.csdn.net/',
        },
        // juejin: {
        //   account: 'meteorlxy',
        //   link: 'https://juejin.im/user/5c6fa9dde51d453fcb7baf09',
        // },
      },
    },

    // 上方 header 的相关设置
    header: {
      // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
      background: {
        // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
        url: ['/assets/img/header-banner-1.jpeg', '/assets/img/header-banner-2.jpeg',
          '/assets/img/header-banner-3.jpeg', '/assets/img/header-banner-4.jpeg'],

        // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
        useGeo: true,
      },

      // 是否在 header 显示标题
      showTitle: true,
    },

    // 是否显示文章的最近更新时间
    lastUpdated: true,

    // 顶部导航栏内容
    nav: [
      { text: '首页', link: '/', exact: true },
      { text: '投稿', link: '/posts/', exact: false },
      { text: '时间线', link: '/timelines/', exact: false },
      { text: '个人简介', link: 'https://www.kozartlvis.com/resume/', exact: false },
    ],

  },
  comments: {
    platform: 'github',
    owner: 'Kozartlvis',
    repo: 'vuepress-theme-blog',
    clientId: 'f77fbf388620d7c9382f',
    clientSecret: '6429499c17e6047771b979a3dafe17d0e6d10453',
    autoCreateIssue: false,
    // autoCreateIssue: process.env.NODE_ENV !== 'development',
  },

  pagination: {
    perPage: 8,
  },
}
