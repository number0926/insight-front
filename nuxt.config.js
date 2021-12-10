import colors from 'vuetify/es5/util/colors'
const envSet = require('./env.settings.js')[[process.env.NODE_ENV]]

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    host: 'localhost',
    port: envSet.PORT,
  },
  router: {
    // middleware: 'redirect',
    base: envSet.BASE_PATH + '/',
  },
  head: {
    titleTemplate: '%s - insight-front',
    title: 'insight-front',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: './plugins/plugin.js',
      mode: 'client',
    },
    { src: '~/plugins/routeOption.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // '@nuxtjs/auth',
  ],

  serverMiddleware: ['~/api/index.js'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: `http://localhost:${envSet.PORT}/`,
  },
  // auth: {
  //   strategies: {
  //     local: {
  //       // token: {
  //       //   property: 'token',
  //       //   global: true,
  //       //   // required: true,
  //       //   // type: 'Bearer'
  //       // },
  //       // user: {
  //       //   property: 'user',
  //       //   // autoFetch: true
  //       // },
  //       endpoints: {
  //         login: { url: '/api/login', method: 'post' },
  //         logout: { url: '/api/auth/logout', method: 'post' },
  //         user: { url: '/api/user', method: 'get' },
  //       },
  //     },
  //   },
  //   redirect: {
  //     home: '/test',
  //   },
  // },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
