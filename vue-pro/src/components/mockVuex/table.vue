<!-- 表格 -->
<template>
  <div>
    <el-table :data="currentGoods.rows" class="table">
      <el-table-column prop="Name" label="名称" width="120"></el-table-column>
      <el-table-column prop="Color" label="颜色" ></el-table-column>
      <el-table-column prop="Address" label="地址"></el-table-column>
      <el-table-column prop="Count" label="数量">
        <template slot-scope="scope">
          <span>{{scope.row.Count - scope.row.quantity}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="Price" label="价格"></el-table-column>
      <el-table-column label="操作" min-width="200">
        <template slot-scope="scope">
          <el-input-number
            :min="0"
            :max="scope.row.Count"
            v-model="scope.row.quantity"
            @change="handleChange"
          ></el-input-number>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next"  @current-change="changePage" :total="currentGoods.total"></el-pagination>
  </div>
</template>

<script>
import { mapGetters,  mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
      currentGoods: {}
    };
  },
  created() {
    this["table/getAllData"](1);
  },
  mounted() {
    
  },
  computed: {
    ...mapGetters("table", ["allGoods"])
  },
  watch: {
    allGoods(val) {
      this.currentGoods = JSON.parse(JSON.stringify(this.allGoods));
    },
    deep: true
  },
  methods: {
    // 选择了货物数量改变后
    handleChange(){
      this["table/setGoods"](this.currentGoods);
    },
    changePage(index){
      //this.currentGoods.pageIndex = index;
      this["table/getAllData"](index);
    },
    ...mapActions([
      "table/getAllData",
      'table/setGoods',
      'table/checkedGoods'
    ])
  }
};
</script>
<style lang='scss' scoped>
.table{
  width: 80%
}
</style>