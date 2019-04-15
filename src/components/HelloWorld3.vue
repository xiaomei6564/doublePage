<template>
  <div>
    <button @click="testSync()">测试sync</button>
  </div>
</template>

<script>
export default {
  props: ['show'],
  name: 'HelloWorld3',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  watch: {
    '$store.state.activeItemBtn'() {},
    $route(to, from) {
      console.log(to, from);
      // to , from 分别表示从哪跳转到哪，都是一个对象
      // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
    }
  },
  created() {},
  methods: {
    testSync() {
      this.$emit('update:show', 'Welcome to the HellowWord3!');
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
