export default {
    // 总商品列表
    allProducts: state => state.all,
    // 购物车商品列表
    // Getter 也可以接受其他 getter 作为第二个参数
    cartProducts: (state, getter) => (getter.allProducts.filter(ele => ele.quantity)),
    // 购物车商品总价
    cartTotalPrice: (state, getter) => {
        return getter.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0)
    }
}