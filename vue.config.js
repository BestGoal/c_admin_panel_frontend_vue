module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  // devServer: {
  //    proxy: {
  //           '/api': {
  //               target: 'https://localhost:44392',
  //               ws: true,
  //               secure: false
  //           }
  //         },
  //   disableHostCheck: true,
  //
  // },
  lintOnSave: false,

  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
