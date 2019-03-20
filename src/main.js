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
axios.defaults.baseURL = 'http://192.168.1.148/ZhongHeng';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
