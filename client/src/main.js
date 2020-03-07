import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
//import Vuetify from 'vuetify'
//import 'vuetify/dist/vuetify.min.css'


Vue.config.productionTip = false
//Vue.use(Vuetify)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
