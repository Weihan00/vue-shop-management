import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { postRequest } from './utils/api'
import { initMenu } from './utils/menus'
Vue.config.productionTip = false
Vue.use(ElementUI)

// 之后在组件中就不用importt了，直接通过this.postRequest方法请求
Vue.prototype.postRequest = postRequest

router.beforeEach((to, from, next) => {
  if (window.sessionStorage.getItem('tokenStr')) {
    initMenu(router, store);
    next()
  } else {
    next()
  }
}
)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
