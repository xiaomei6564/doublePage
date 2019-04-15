<script>
import lazyLoading from './lazyLoading';
let com = lazyLoading(this.app); //此处为import的方法引入vue组件有返回值
export default {
  render(h, cxt) {
    //h为createElement ，createElement 用来生成 HTML DOM 元素，也就是上文中的 generate HTML structures，也就是 Hyperscript，所以用 h 替代了 createElement
    return h(require(`@/components/${this.app}.vue`).default, {
      //此方法是require方法引入vue组件无返回值
      // lazyLoading(this.app)
      // return h(com, {
      props: {
        prop: this.prop
      }
    });
  },
  props: {
    app: String,
    prop: Object
  }
};
</script>
<style></style>