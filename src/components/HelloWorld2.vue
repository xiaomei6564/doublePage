<template>
  <div>
    姓名：{{$store.state.activeItemBtn+'加'+$route.params.name+'减'+$route.params.num}}
  </div>
</template>

<script>
export default {
  props: ['prop'],
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  components: {},
  watch: {
    '$store.state.activeItemBtn'() {},
    $route(to, from) {
      console.log(to, from);
      // to , from 分别表示从哪跳转到哪，都是一个对象
      // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
    }
  },
  created() {
    let router = this.$route.params.name;
  },
  methods: {
    goDDD() {
      this.$router.push({
        path: '/ddd'
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
