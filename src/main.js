import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//我成功了！！
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

// axios.defaults.baseURL='/api'
Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
