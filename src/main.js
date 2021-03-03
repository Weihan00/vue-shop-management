import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://www.ysqorz.top:8888/api/private/v1/'
// 这样每个vue的组件都可以直接通过this直接访问到$http
Vue.prototype.$http = axios


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$message = Message
// 之后在组件中就不用importt了，直接通过this.postRequest方法请求
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
