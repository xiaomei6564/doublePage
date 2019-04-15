<template>
  <div id="app">
    <p>index</p>
    <router-view></router-view>
  </div>
</template>
<script>
// import main from '../../lib/main'
import Hello from '../../components/HelloWorld';
import 'common/css/common.css';
import 'common/js/common.js';
import 'common/js/axios.js';
import 'static/font/iconfont.css';
// import store from '../../lib/store'

export default {
  name: 'index',
  components: {
    hello: Hello
  },
  data() {
    return {
      bannerHref: ''
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      var rep = {
        bannerPosition: 'hasActive'
      };
      // store.getinfo(rep,
      //   function(res) {
      //     if (res.errorCode == 0) {
      //       console.log(res.data);
      //     }
      //   })
    }
  }
};
</script>
<style>
</style>
