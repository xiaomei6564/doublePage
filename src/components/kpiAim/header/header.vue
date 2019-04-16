<template>
    <div class="headerBox">
        <div class="logoBox">
            <img src="~static/img/logo.png"
                 alt="">
            <span>目标管理</span>
        </div>
        <div class="navBox">
            <span class="selNav">指标目标值配置</span>
            <span>|</span>
            <span>关键价值事项</span>
        </div>
        <div class="userBox">
            <span class="iconfont">&#xe63e;</span>
            <span class="iconfont">&#xe64d;</span>
            <span class="iconfont">&#xe6b9;</span>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less">
.headerBox {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: #ffffff;
  box-shadow: 0 -1px 0 0 #dfe2e5;
  .logoBox {
    display: flex;
    align-items: center;
    span {
      font-size: 18px;
      color: #354052;
    }
  }
  .navBox {
    span {
      font-size: 14px;

      color: #7f8fa4;
    }
    .selNav {
      color: #354052;
    }
  }
  .userBox {
    display: flex;
    align-items: center;
    span:nth-child(1) {
      font-size: 20px;
      color: #7f8fa4;
    }
    span:nth-child(2) {
      font-size: 40px;
      margin-left: 20px;
    }
    span:nth-child(3) {
      font-size: 20px;
      transform: rotate(180deg);
    }
  }
}
</style>


