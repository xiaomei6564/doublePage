<template>
  <div class="condition">
    <header1></header1>
    <div class="container">
      <searh-nav></searh-nav>
      <buttons @add="add"></buttons>
      <data-table></data-table>
    </div>
    <el-dialog title="新建目标"
               custom-class="addAimBox"
               :visible.sync="dialogFormVisible">
      <div class="dialogBodyBox">
        <div class="formBox">
          <el-form :inline="true"
                   :model="formInline"
                   class="demo-form-inline">
            <el-form-item label="指标名称：">
              <el-select v-model="formInline.region"
                         placeholder="活动区域">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="自驱组织：">
              <el-select v-model="formInline.region"
                         placeholder="活动区域">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="时间维度：">
              <span class="yqmBox">
                <span class="selSpan">年</span>
                <span>季</span>
                <span>月</span>
              </span>
            </el-form-item>
            <el-form-item label="参考预算目标："
                          class="budgetAimSign">
              <el-checkbox v-model="quarterCountSign"></el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"
                         @click="onSubmit">创建</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="tableBox">
          <add-table></add-table>
        </div>
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="primary"
                   @click="dialogFormVisible = false">报存</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import header1 from '@/components/kpiAim/header/header.vue';
import searhNav from '@/components/kpiAim/condition/searhNav.vue';
import buttons from '@/components/kpiAim/condition/buttons.vue';
import dataTable from '@/components/kpiAim/condition/dataTable.vue';
import addTable from '@/components/kpiAim/condition/addTable.vue';
import { axiosPackage } from 'common/js/common.js';
export default {
  data() {
    return {
      kpiName: '',
      dialogFormVisible: false,
      formInline: {
        user: '',
        region: ''
      }
    };
  },
  components: {
    searhNav,
    header1,
    buttons,
    dataTable,
    addTable
  },
  created() {
    // 获取指标名称
    axiosPackage(`${this.Root}com/kpi/list`, {}, this.getKpiListCallback);
    // 目标性质
    axiosPackage(
      `${this.Root}com/aimnature/list`,
      {},
      this.getAimNatureListCallback
    );
    // 目标类型
    axiosPackage(
      `${this.Root}com/aimtype/list`,
      {},
      this.getAimTypeListCallback
    );
    // 时间维度
    axiosPackage(`${this.Root}com/years/list`, {}, this.getAimYearListCallback);
  },
  methods: {
    onSubmit() {},
    add() {
      this.dialogFormVisible = true;
    },
    // 获取指标名称
    getKpiListCallback(data) {
      debugger;
    },
    // 目标性质
    getAimNatureListCallback(data) {
      debugger;
    },
    getAimTypeListCallback(data) {
      debugger;
    },
    getAimYearListCallback(data) {
      debugger;
    }
  }
};
</script>
<style lang="less">
.condition {
  background: #f0f2f5;
  .container {
    width: 1116px;
    height: 100%;
    margin: 0 auto;
    padding-top: 15px;
  }
  .yqmBox {
    font-size: 0px;
    span {
      font-size: 12px;
      display: inline-block;
      width: 28px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      color: #606266;
      border: 1px solid #dcdfe6;
    }
    span:nth-child(1) {
      border-radius: 3px 0px 0px 3px;
      border-right: 0;
    }
    span:nth-child(3) {
      border-left: 0;
      border-radius: 0px 3px 3px 0px;
    }
    .selSpan {
      color: #fff;
      background: #409eff;
    }
  }
  .addAimBox {
    width: 1116px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    .el-form-item__label {
      font-size: 12px;
      color: #606266;
    }
    .el-button--primary {
      padding: 8px 20px;
    }
    .el-dialog__body {
      padding: 0;
    }
    .dialogBodyBox {
      .formBox {
        height: 40px;
        padding: 10px 20px;
        border-top: 1px solid #ebeef5;
        border-bottom: 1px solid #ebeef5;
        .budgetAimSign {
          .el-form-item__label {
            padding-right: 0;
          }
        }
      }
      .tableBox {
      }
    }
  }
}
</style>


