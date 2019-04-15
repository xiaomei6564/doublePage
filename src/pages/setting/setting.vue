<template>
  <div class="warp">
    <p>setting</p>
    <hello></hello>
  </div>
</template>
<script>
// import main from '../../lib/main'
import Hello from '../../components/HelloWorld'
// import store from '../../lib/store'

export default {
  name: 'index',
  components: {
    'hello': Hello
  },
  data() {
    return {
      bannerHref: '',

    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      var rep = {
        bannerPosition: 'hasActive'
      }
      store.getinfo(rep,
        function(res) {
          if (res.errorCode == 0) {
            console.log(res.data);
          }
        })
    }
  }
}
</script>
<style scoped>
.warp {
  max-width: 750px;
  margin: 0 auto;
  background: #CCC;
}
</style>
