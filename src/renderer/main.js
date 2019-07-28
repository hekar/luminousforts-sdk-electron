import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'

import App from './App'
import router from './router'
import store from './store'

import '@mdi/font/css/materialdesignicons.min.css'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

if (!process.env.IS_WEB) {
  Vue.use(require('vue-electron'))
}
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
const vue = new Vue({
  components: { App },
  router,
  store,
  vuetify: new Vuetify({}),
  template: '<App/>'
})

vue.$mount('#app')
