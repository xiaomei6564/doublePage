import Vue from 'vue'
import App from './budget'
import router from '@/router'
import store from '@/store'
// import Resource from 'vue-resource'

// Vue.use(Resource);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
