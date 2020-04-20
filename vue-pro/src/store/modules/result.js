
const CLEAR_CART_PRODUCTS = 'CLEAR_CART_PRODUCTS' 
const state = {
  items:[]
} 
const getters = {
  
  cartGoods: (state, getter, rootState) => {
      return rootState.table.all.rows   
  },
  // Error in render: "TypeError: Cannot read property 'filter' of undefined"
  // rootState.table.all.rows数据还没回来，是undefined，调用时就报错了！
  cartProducts: (state, getter) => {
    if(getter.cartGoods){
      return getter.cartGoods.filter(ele => ele.quantity > 0)
    }
  },
  cartTotalPrice: (state, getter) => {
    if(getter.cartProducts){
      const totalPrice =  getter.cartProducts.reduce((total, product) => {
        return total + product.quantity * product.Price
      },0);
      return totalPrice.toFixed(2);
    }
  }
}
const actions = {
  // loggoods({ commit }, rootState){
  //   console.log(rootState.table.all)
  // }
}
const mutations = {
  [CLEAR_CART_PRODUCTS](){

  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}