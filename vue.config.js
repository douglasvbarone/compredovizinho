module.exports = {
  productionSourceMap: false,
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Compre do Vizinho'
      return args
    })
  },
  pwa: {
    themeColor: '#fdcc03',
    msTileColor: '#fdcc03',
    name: 'Compre do Vizinho',

    manifestOptions: {
      background_color: '#ffffff'
    }
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0'
  }
}
