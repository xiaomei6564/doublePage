
import App from './index'
import 'static/js/flexible/flexible.js';
import router from '@/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'common/js/axios.js';
// import Resource from 'vue-resource'

// Vue.use(Resource);
Vue.use(ElementUI);
Vue.prototype.Root = process.env.API_ROOT;//'meta-manager/'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
