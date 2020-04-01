module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Compre do Vizinho'
      return args
    })
  },
  pwa: {
    themeColor: '#424242',
    name: 'Compre do Vizinho'
  }
}
