<template>
  <div>
    姓名：{{prop==undefined?'小二':prop.name}}
    <button @click="goDDD()"></button>
    <label>{{sync2}}</label>
    <he3 :show.sync="sync2"></he3>
  </div>
</template>

<script>
import he3 from '@/components/HelloWorld3';
export default {
  props: ['prop'],
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      sync2: 'isShow'
    };
  },
  components: {
    he3
  },
  created() {
    debugger;
  },
  methods: {
    goDDD() {
      this.$router.push({
        //两种路由传递参数的方法，1.name:'name' params:{}  2.path:'/path' query:{}    子路由接收的方法：1.this.$route.params  2.this.$route.query
        name: 'HelloWorld2',
        params: {
          name: 'eeee',
          num: '7'
        }
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
