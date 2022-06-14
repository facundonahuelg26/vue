module.exports = {
  dest:"docs",
  base: "/vue/",
  title: 'Docs in VUE',
  
  description: "description",

  
  head: [
    ['meta', { name: 'theme-color', content: '#61dafb' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  
  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Home',
        link: '/',
      },
    ],
    sidebar: [
      "/",
      "/nodejs/",
      "/reducer/",
      "/typescript&React/",
      "/reactHooks/"

    ]
  },


  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
