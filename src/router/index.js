
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'
import Widget from '@/components/widget/parent.vue'

Vue.use(VueRouter)

export default new VueRouter({

  routes: [
    {
      path: '/',
      redirect: '/widget'
    },
    {
      path: '/ddd/:name:num',   //path路由中设置参数是防止使用params传值时刷新不带参的处理
      name: 'HelloWorld2',
      component: HelloWorld2,

    },
    {
      path: '/widget',   //path路由中设置参数是防止使用params传值时刷新不带参的处理
      name: 'widget',
      component: Widget,
    },
    {
      path: '/test',   //path路由中设置参数是防止使用params传值时刷新不带参的处理
      name: 'test',
      component: resolve => require(['@/components/test/testP'], resolve),
    },
    {
      path: '/condition',   //path路由中设置参数是防止使用params传值时刷新不带参的处理
      name: 'condition',
      component: resolve => require(['@/components/kpiAim/condition'], resolve),
    }
  ]
})
