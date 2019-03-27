// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery'
import '../static/utf8-php/ueditor.config.js'  //根据自己文件的路径接入
import '../static/utf8-php/ueditor.all.min.js'
import '../static/utf8-php/lang/zh-cn/zh-cn.js'
import '../static/utf8-php/ueditor.parse.min.js'
Vue.use(ElementUI);
import App from './App'

import axios from 'axios'
import qs from 'qs'
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://zhongheng.nbxuanma.com';

// 全局定义 cookie方法
Vue.prototype.setCookie = function (name, value) {
  var Days = 30
  var exp = new Date()
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
}

Vue.prototype.getCookie = function (name) {
  var arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if ((arr = document.cookie.match(reg))) {
    return arr[2]
  } else {
    return null
  }
}
Vue.prototype.delCookie = function (name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = this.setCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
