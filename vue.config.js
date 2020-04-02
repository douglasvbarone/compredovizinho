module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Compre do Vizinho'
      return args
    })
  },
  pwa: {
    themeColor: '#2196F3',
    name: 'Compre do Vizinho'
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0'
  }
}
