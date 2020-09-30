import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import axios from './utils/request'
import util from '@/utils/util'
Vue.prototype.$util = util // 赋值给全局对象
// Vue.prototype.$axios = axios // 赋值给全局对象

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
