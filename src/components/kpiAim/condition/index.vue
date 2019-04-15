<template>
    <div class="condition">
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
                <td colspan="2">
                    <div>
                        <span>
                            <span>调整记录标识</span>
                            <span class="icon iconfont">&#xe618;</span><input type="checkBox">
                        </span>
                        <span>
                            <span>显示季度累计</span><input type="checkBox"></span>
                        <span>
                            <span>显示季度占比</span><input type="checkBox"></span>
                    </div>
                </td>

            </tr>
            <tr>
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
                    <span>
                        <span>年</span>
                        <span>季</span>
                        <span>月</span>
                    </span>

                </td>
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
                        <button>筛选</button>
                        <button>重置</button>
                    </div>
                </td>
            </tr>

        </table>
    </div>
</template>
<script>
export default {
  data() {
    return {
      kpiName: ''
    };
  }
};
</script>
<style lang="less">
.condition {
}
</style>


