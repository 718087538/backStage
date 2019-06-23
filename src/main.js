// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import axios from 'axios';
import routers from "./router";
import ElementUI from 'element-ui';
import store from './store'//引入store
import 'element-ui/lib/theme-chalk/index.css';

import { AddressEdit } from 'vant';
import 'vant/lib/index.css';
Vue.use(AddressEdit);
import { Area } from 'vant';

Vue.use(Area);

Vue.use(ElementUI);
Vue.use(VRouter)

//把axios 挂载到vue的原型
Vue.prototype.$axios = axios;

Vue.config.productionTip = false
const router =new VRouter({
  mode:'history',
  routes:routers
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,//使用store
  router,
  render:h =>h(App)
})
