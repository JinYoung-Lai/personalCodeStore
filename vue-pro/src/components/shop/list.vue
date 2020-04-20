<!-- 购物车表单 -->
<template>
  <div class="products-wrapper">
    <ul>
      <li class="row header">
        <div v-for="(th,i) in tHeader" :key="i">{{th}}</div>
      </li>
      <li class="row" v-for="product in currentProducts" :key="product.id">
        <div>{{product.title}}</div>
        <div>{{ product.price }}</div>
        <div>{{ product.inventory - product.quantity }}</div>
        <div>
          <el-input-number
            :min="0"
            :max="product.inventory"
            v-model="product.quantity"
            @change="handleChange"
          ></el-input-number>
        </div>
      </li>
    </ul>
    <el-button @click="show">show</el-button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      tHeader: ["名称", "价格", "剩余库存", "操作"],
      currentProducts:[]
    };
  },
  created() {
    this.getAllProducts()
  },
  computed: {
    ...mapGetters(['allProducts']),
    ...mapState({
      xxx: 'xxxCcc',
      loading: 'loading'
    })
  },
  // 为了避免表单直接修改store中的数据，需要使用watch模拟双向绑定
  watch: {
    allProducts:{
      handler (val){
        this.currentProducts = JSON.parse(JSON.stringify(this.allProducts))
      },
      deep: true
    }
  },
  methods: {
    handleChange(){
      this.setProducts(this.currentProducts)
    },
    ...mapActions([
      'setProducts',
      'getAllProducts'
    ]),
    show(){
      console.log(this.xxx)
    }
  }
};
</script>
<style lang='scss' scoped>
.products-wrapper {
  padding: 0;
  margin: 0;
  width: 600px;
}
.row.header {
  font-size: large;
  font-weight: bold;
}
.row {
  list-style: none;
  display: flex;
  div {
    flex: 1;
  }
}
</style>