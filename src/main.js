import Vue from 'vue'
import * as FastClick from "fastclick"
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);
import App from './App'
import router from './router'
import './styles/global.css'

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
