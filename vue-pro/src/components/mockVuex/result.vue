<!-- 测试结果 -->
<template>
  <div>
    <h2>Your Cart</h2>
    <p><i>Please add some products to cart.</i></p>
    <ul v-if="goods">
      <li v-for="item in goods" :key="item.id">
        {{item.Name}} - {{item.Price}} x {{item.quantity}}
      </li>
    </ul>
    <p>Total: {{ total }}</p>
    <el-button type="primary" @click="clearnCartGoods">Clearn</el-button> 
  </div>
</template>

<script>
import { mapGetters, mapActions} from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    //this['result/loggoods']()
  },
  computed: {
    ...mapGetters('result',{
      goods:'cartProducts',
      total:'cartTotalPrice'
    })
    //...mapGetters('result', ['cartGoods', 'cartTotalPrice'])
  },
  methods: {
    ...mapActions([
      'result/loggoods', 
    ]),
    clearnCartGoods(){
      //console.log(this.goods)
    }
  }
};
</script>
<style lang='scss' scoped>
</style>