<template>
    <div class="condition">
        <header1></header1>
        <div class="container">
            <searh-nav></searh-nav>
        </div>
    </div>
</template>
<script>
import header1 from '@/components/kpiAim/header/header.vue';
import searhNav from '@/components/kpiAim/condition/searhNav.vue';
export default {
  data() {
    return {
      kpiName: ''
    };
  },
  components: {
    searhNav,
    header1
  }
};
</script>
<style lang="less">
.condition {
  .container {
    width: 1116px;
    height: 100%;
    margin: 0 auto;
    padding-top: 18px;
  }
}
</style>


