<template>
  <div class="warp">
    <p>budget</p>
    <!-- <hello></hello> -->
    <!-- <async-load-comp :app="'HelloWorld'"
                     :prop="prop"
                     :index="index"></async-load-comp> -->
    <router-view></router-view>
  </div>
</template>
<script>
import asyncLoadComp from '@/components/asyncLoadComp/asyncLoadComp';
import store from '@/store';
// import Hello from '../../components/HelloWorld'

export default {
  name: 'index',
  components: {
    // 'hello': Hello
    asyncLoadComp: asyncLoadComp
  },
  data() {
    return {
      bannerHref: '',
      prop: {
        name: '张三',
        age: '19'
      },
      index: 1
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
<style scoped>
.warp {
  max-width: 750px;
  margin: 0 auto;
  /* background: #CCC; */
}
</style>
