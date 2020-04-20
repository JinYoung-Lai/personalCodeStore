<!-- 购物车 -->
<template>
  <div class="cart">
    <p v-show="!products.length">Please add some products to cart.</p>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >{{ product.title }} - {{ product.price }} x {{ product.quantity }}</li>
      <p>Total: {{ total }}</p>
      <el-button @click="clearCartProducts">CLEAR</el-button>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      total:'cartTotalPrice'
    }
      
    )
  },
  methods: {
   ...mapActions([
     'clearCartProducts'
   ])
  }
};
</script>
<style lang='scss' scoped>
</style>