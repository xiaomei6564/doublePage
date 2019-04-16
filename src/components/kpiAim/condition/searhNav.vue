<template>
    <div class="searchNav">
        <table>
            <tr>
                <td>
                    <label for="">指标名称</label>
                    <el-select v-model="kpiName"
                               placeholder="活动区域">
                        <el-option label="区域一"
                                   value="shanghai"></el-option>
                        <el-option label="区域二"
                                   value="beijing"></el-option>
                    </el-select>
                </td>
                <td>
                    <label for="">自驱组织</label>
                    <el-select v-model="kpiName"
                               placeholder="活动区域">
                        <el-option label="区域一"
                                   value="shanghai"></el-option>
                        <el-option label="区域二"
                                   value="beijing"></el-option>
                    </el-select>
                </td>
                <td>
                    <label for="">目标性质</label>
                    <el-select v-model="kpiName"
                               placeholder="活动区域">
                        <el-option label="区域一"
                                   value="shanghai"></el-option>
                        <el-option label="区域二"
                                   value="beijing"></el-option>
                    </el-select>
                </td>
                <td>
                    <div>
                        <span>
                            <span>显示季度累计</span>
                            <el-checkbox v-model="quarterCountSign"></el-checkbox>
                        </span>
                        <span class="quarterRateBox">
                            <span>显示季度占比</span>
                            <el-checkbox v-model="quarterRateSign"></el-checkbox>
                        </span>
                    </div>
                </td>

            </tr>
            <tr>
                <td>
                    <label for="">目标类型</label>
                    <el-select v-model="kpiName"
                               placeholder="活动区域">
                        <el-option label="区域一"
                                   value="shanghai"></el-option>
                        <el-option label="区域二"
                                   value="beijing"></el-option>
                    </el-select>
                </td>
                <td>
                    <span>
                        <label for="">时间维度</label>
                        <el-select v-model="kpiName"
                                   placeholder="活动区域">
                            <el-option label="区域一"
                                       value="shanghai"></el-option>
                            <el-option label="区域二"
                                       value="beijing"></el-option>
                        </el-select>
                    </span>

                </td>
                <td>
                    <div>
                        <span class="yqmBox">
                            <span class="selSpan">年</span>
                            <span>季</span>
                            <span>月</span>
                        </span>
                        <span class="adjustSignBox">
                            <span>调整记录标识:</span>
                            <span class="iconfont">&#xe618;</span>
                            <el-checkbox v-model="adjustSign"></el-checkbox>
                        </span>

                    </div>
                </td>

                <td>
                    <div class="searchBtn">
                        <span class="pointer">筛选</span>
                        <span class="pointer">重置</span>
                    </div>
                </td>
            </tr>

        </table>
    </div>
</template>
<script>
import 'common/js/common.js';
export default {
  data() {
    return {
      kpiName: '',
      adjustSign: false, //调整记录标识
      quarterRateSign: false, //季度累计标识
      quarterCountSign: false //季度占比标识
    };
  },
  created() {
    //   获取指标名称
    // 获取自驱组织
    // 获取目标性质
    // 获取时间维度
    // 获取目标类型
  }
};
</script>
<style lang="less">
.searchNav {
  background: #ffffff;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  padding: 20px;
  color: #606266;
  td {
    font-size: 12px;
    padding-right: 10px;
  }
  table {
    border-spacing: 0;
    tr:nth-child(1) td {
      padding-bottom: 15px;
    }
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
    }
    span:nth-child(3) {
      border-radius: 0px 3px 3px 0px;
    }
    .selSpan {
      color: #fff;
      background: #409eff;
    }
  }
  .quarterRateBox {
    margin-left: 15px;
  }
  .adjustSignBox {
    margin-left: 50px;
    .iconfont {
      margin-right: 5px;
    }
  }
  .searchBtn {
    text-align: right;
    span {
      border-radius: 3px;
      padding: 5px 20px;
    }
    span:nth-child(1) {
      border: 1px solid #a3d0fd;
      background: #409eff;
      color: #fff;
      margin-right: 15px;
    }
    span:nth-child(2) {
      border: 1px solid #a3d0fd;
      color: #409eff;
    }
  }
}
</style>


