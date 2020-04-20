import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'
import fmt from './api/fmt'
import './assets/reset.css'

Vue.use(fmt)

//import './assets/reset.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


require('../mock/pages.js')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
