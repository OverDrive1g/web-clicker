import Vue from 'vue'
import './plugins/vuetify'
import './plugins/analitics'
import './plugins/meta'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
