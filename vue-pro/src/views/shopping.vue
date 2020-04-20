<!-- shoping -->
<template>
  <div>
    <h1>Shopping Cart Example</h1>
    <hr />
    <h2>ProductsList</h2>
    <list></list>
    <hr />
    <h2>ProductsCart</h2>
    <cart></cart>
  </div>
</template>

<script>
import List from "../components/shop/list.vue";
import Cart from "../components/shop/cart.vue";
export default {
  data() {
    return {};
  },
  components: {
    List,
    Cart
  },
  mounted() {
    
  },
  methods: {
    
  }
};
</script>
<style lang='scss' scoped>
</style>