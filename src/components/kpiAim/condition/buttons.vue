<template>
  <div class="buttonsBox">
    <span @click="add()">
      <span class="iconfont">&#xe620;</span>
      <span>新增</span>
    </span>
    <span>
      <span class="iconfont">&#xe6e2;</span>
      <span>分解</span>
    </span>
    <span>
      <span class="iconfont">&#xe6e9;</span>
      <span>调整</span>
    </span>
    <span>
      <span class="iconfont">&#xe625;</span>
      <span>删除</span>
    </span>
    <span>
      <span class="iconfont">&#xe72a;</span>
      <span>设置</span>
    </span>
    <span>
      <span class="iconfont">&#xe625;</span>
      <span>导入</span>
    </span>
    <span>
      <span class="iconfont">&#xe65d;</span>
      <span>导出</span>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    add() {
      this.$emit('add');
    }
  }
};
</script>
<style lang="less">
.buttonsBox {
  padding: 15px 0;
}
.buttonsBox > span {
  background: #ffffff;
  border: 1px solid #d5d8de;
  border-radius: 3px;
  font-size: 12px;
  color: #606266;
  padding: 6px 15px;
  margin-right: 15px;
  cursor: pointer;
}
.buttonsBox > span:hover {
  background: #f5f7fa;
}
.buttonsBox > span:active {
  border: 1px solid #0294ff;
}
</style>


