import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import pt from 'vuetify/es5/locale/pt'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    // options: {
    //   customProperties: true
    // },
    themes: {
      light: {
        //primary: '#2196f3',
        primary: '#fdcc03',
        secondary: '#424242',
        accent: '#90CAF9',
        error: '#B71C1C',
        info: '#009688',
        success: '#4CAF50',
        warning: '#FFC107'
      },
      dark: {
        primary: '#66a3cc',
        secondary: '#696969',
        accent: '#81a1b8',
        error: '#b53636',
        info: '#009688',
        success: '#4CAF50',
        warning: '#ffd24d'
      }
    }
  },
  lang: {
    locales: { pt },
    current: 'pt'
  },
  icons: {
    iconfont: 'mdi'
  }
})
