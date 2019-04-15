<template>
  <div>
    <!-- 行模式 -->
    <el-form inline>
      <el-form-item label="inline 默认：">
        <select-tree :options="options"
                     :props="defaultProps"
                     v-model="selected" />
      </el-form-item>
      <el-form-item label="inline 定义宽度：">
        <select-tree width="200"
                     :options="options"
                     v-model="selected"
                     :props="defaultProps" />
      </el-form-item>
    </el-form>
    <!-- 块模式 -->
    <el-form>
      <el-form-item label="自适应：">
        <select-tree v-model="selected"
                     :options="options"
                     :props="defaultProps" />
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import SelectTree from '@/components/widget/SelectTree.vue';
export default {
  name: 'about',
  components: {
    SelectTree
  },
  data() {
    return {
      // 默认选中值
      selected: '',
      // 数据默认字段
      defaultProps: {
        parent: 'parentId', // 父级唯一标识
        value: 'id', // 唯一标识
        label: 'label', // 标签显示
        children: 'children' // 子级
      },
      // 数据列表
      options: [
        {
          parentId: '0',
          id: 'A',
          label: 'label-A',
          children: [
            {
              parentId: 'A',
              id: 'A-1',
              label: 'label-A-1'
            }
          ]
        },
        {
          parentId: '0',
          value: 'B',
          label: 'label-B',
          children: []
        }
      ]
    };
  }
};
</script>
<style lang="less">
</style>
