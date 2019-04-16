<template>
  <div class="condition">
    <header1></header1>
    <div class="container">
      <searh-nav></searh-nav>
      <buttons></buttons>
      <data-table></data-table>
    </div>
  </div>
</template>
<script>
import header1 from '@/components/kpiAim/header/header.vue';
import searhNav from '@/components/kpiAim/condition/searhNav.vue';
import buttons from '@/components/kpiAim/condition/buttons.vue';
import dataTable from '@/components/kpiAim/condition/dataTable.vue';
export default {
  data() {
    return {
      kpiName: ''
    };
  },
  components: {
    searhNav,
    header1,
    buttons,
    dataTable
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
}
</style>


