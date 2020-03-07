import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from "@/store/store"
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
