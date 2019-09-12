const colors = require('vuetify/es5/util/colors').default
require('dotenv').config()

module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [ 'eslint:recommended', 'plugin:vue/recommended', 'plugin:prettier/recommended' ],
  mode: 'universal',
  render: {
    resourceHints: true,
    bundleRender: {
      // will come in handly later ;)
      shouldPreload: (file, type) => {
        return [ 'script', 'style', 'font' ].include(type)
      }
    }
  },

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + '🍇',
    title: process.env.npm_package_name || '',
    meta: [
      {
        charset: 'UTF-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {

        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Ubuntu'

      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#2045'
  },
  /*
   ** Global CSS
   */
  css: [ '~css/default.css', '~/css/transition.css', '@mdi/font/css/materialdesignicons.css' ],
  /*
   ** Plugins to load before mounting the App
   */

  plugins: [

  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/vuetify',

    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],
  /**
   * Sitemap configuration
   */
  sitemap: {
    hostname: 'https://omaraziz.xyz',
    gzip: true,
    exclude: []
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
