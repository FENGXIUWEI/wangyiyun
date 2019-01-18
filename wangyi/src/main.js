// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/index'
import '@/assets/js/rem.js'
import VueLazyLoad from 'vue-lazyload'
import './assets/iconfont/iconfont.css'
import {post, fetch} from './assets/js/http.js'
Vue.prototype.$post = post
Vue.prototype.$fetch = fetch
Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  error: require('@/assets/img/default.png'),
  loading: require('@/assets/img/default.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
