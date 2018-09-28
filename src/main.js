import Vue from 'vue';
import * as FastClick from 'fastclick';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);
import App from './App';
import router from './router';
import './styles/global.css';
import './styles/icon.css';
import http from './utils/httpToken.js';
Vue.prototype.$http = http;
FastClick.attach(document.body);
// import http from './utils/httpToken.js';
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
