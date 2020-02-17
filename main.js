import Vue from 'vue'
import App from './App'
//引入vuex
import store from './store'
import footerNav from './components/footer_nav.vue'

//把vuex定义成全局组件
Vue.prototype.$store = store
Vue.config.productionTip = false
Vue.component("footer-nav",footerNav)
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
