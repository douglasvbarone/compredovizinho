import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import vuetify from './plugins/vuetify'

import './styles/styles.scss'

import './tools/capitalize'

Vue.config.productionTip = false

new Vue({

  vuetify,
  render: h => h(App)
}).$mount('#app')
