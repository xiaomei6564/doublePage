
import App from './index'
import router from '@/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import Resource from 'vue-resource'

// Vue.use(Resource);
Vue.use(ElementUI);


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
