 <template>
    <div>
        <aa class="abc"
            v-model="test"></aa> // 组件中使用v-model {{'外面的值：' + test}} // 这儿试验test与内部msg值为双向绑定关系
        <button @click="fn">
            外面改变里面
        </button>

    </div>
</template>

<script>
import aa from './testChild.vue';
export default {
  data() {
    return {
      test: ''
    };
  },
  methods: {
    fn() {
      this.test += 1;
    }
  },
  components: {
    aa
  }
};
</script>