// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueSocketIO from 'vue-socket.io'
import axios from 'axios'
import Qs from 'qs'

Vue.config.productionTip = false

Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;

// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'http://114.55.98.156:3000',
//   vuex: {
//     // store,
//     actionPrefix: 'SOCKET_',
//     mutationPrefix: 'SOCKET_'
//   },
//   options: { path: "/socket.io/" } //Optional options
// }))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
