export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Fossiilid.info',
    title: 'Fossiilid.info',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Todo: Add description
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      // Todo: Add og tags
      // {
      //   hid: 'og:title',
      //   property: 'og:title',
      //   content: 'e-Maapõu',
      //   template: (chunk) => `${chunk} | e-Maapõu`,
      // },
      // {
      //   hid: 'og:type',
      //   property: 'og:type',
      //   content: 'website',
      // },
      // {
      //   hid: 'og:description',
      //   property: 'og:description',
      //   content:
      //     'Web portal for geoscience data from Estonia. Provides direct search capabilities to SARV information system and links to other data sources',
      // },
      // {
      //   hid: 'og:locale',
      //   property: 'og:locale',
      //   content: 'et_EE',
      // },
      // {
      //   hid: 'og:locale:alternate',
      //   property: 'og:locale:alternate',
      //   content: 'en_US',
      // },
      // { hid: 'og:site_name', property: 'og:site_name', content: 'e-Maapõu' },
      // {
      //   hid: 'og:url',
      //   property: 'og:url',
      //   content: '',
      //   template: (chunk) => `https://geoloogia.info${chunk}`,
      // },
      // {
      //   hid: 'og:image',
      //   property: 'og:image',
      //   // https://stackoverflow.com/a/15553994
      //   // TODO: change to geoloogia.info after emaapou_short.png is pushed to production branch
      //   content: 'https://dev.geoloogia.info/logos/emaapou_short.png?t=12345?',
      // },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/translate.js',
    { src: '@/plugins/vueMatomo.js', mode: 'client' },
    { src: '@/plugins/vuexPersist.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://fossiilid.info',
    path: '/sitemap.xml',
    i18n: {
      locales: ['et', 'en'],
      routesNameSeparator: '___',
    },
    gzip: true,
    generate: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://api.geoloogia.info',
  },

  // i18n module configuration: https://i18n.nuxtjs.org/options-reference
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'et-US',
        file: 'en.js',
        name: 'English',
      },
      {
        code: 'et',
        iso: 'et-EE',
        file: 'et.js',
        name: 'Eesti',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'et',
    strategy: 'prefix_and_default',
    detectBrowserLanguage: {
      useCookie: true,
      onlyOnRoot: true,
      fallbackLocale: 'et',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
