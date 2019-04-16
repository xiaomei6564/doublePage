<template>
    <div class="dataTableBox">
        <el-table ref="multipleTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  style="width: 100%"
                  @selection-change="handleSelectionChange">
            <el-table-column type="selection"
                             width="55">
            </el-table-column>
            <el-table-column label="序号"
                             width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name"
                             label="组织"
                             width="120">
            </el-table-column>
            <el-table-column prop="address"
                             label="指标名称"
                             show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="name"
                             label="目标性质"
                             width="120">
            </el-table-column>
            <el-table-column prop="address"
                             label="目标类型"
                             show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="name"
                             label="单位"
                             show-overflow-tooltip>
            </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange"
                       class="pagerBox"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage4"
                       :page-sizes="[100, 200, 300, 400]"
                       :page-size="100"
                       layout="sizes, total, prev, pager, next, jumper"
                       :total="400">
        </el-pagination>
    </div>

</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      multipleSelection: [],
      currentPage4: 4
    };
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="less">
.dataTableBox {
  .el-table td,
  .el-table th {
    padding: 0;
  }
  tr {
    height: 40px;
  }
  .pagerBox {
    text-align: center;
    background: #fff;
    padding: 10px 0;
  }
}
</style>
