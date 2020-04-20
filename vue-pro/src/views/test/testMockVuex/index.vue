<!-- 测试mock和vuex -->
<template>
  <div class="app-container">
    <h1>mock分页数据 + vuex测试</h1>
    <h3>货物列表</h3>
    <goods-list></goods-list>
    <h3>测试结果</h3>
    <result></result>
  </div>
</template>


<script>
import GoodsList from "../../../components/mockVuex/table.vue";
import Result from "../../../components/mockVuex/result.vue";
export default {
  components: {
    GoodsList,
    Result
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {}
};
</script>
<style lang='scss' scoped>
</style>