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
    script: [],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Ubuntu'
      }
    ]
  },
  loading: { color: '#2045' },

  /**
   * ru-cache to allow cached components for better render performances
   */
  cache: { max: 1000, maxAge: 900000 },

  css: [ '~assets/default.css', '~assets/transition.css' ],
  plugins: [],
  modules: [ '@nuxtjs/vuetify', '@nuxtjs/sitemap' ],
  sitemap: {
    hostname: 'https://omaraziz.xyz',
    gzip: true,
    exclude: []
  },
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
  build: {
    extend (config, ctx) {}
  }
}
