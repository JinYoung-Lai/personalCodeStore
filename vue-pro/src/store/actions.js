import shop from '../api/shop.js'
import * as types from './mutation-types'

export default {
    // 获取数据后，加入选取数量quantity的标识，以区分是否被加入购物车
    getAllProducts({ commit }) {
        shop.getProducts(res => {        
            const newRes = res.map(ele => Object.assign({}, ele, { quantity: 0 }));
            //map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
            //Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
            console.log(newRes);          
            commit(types.SET_PRODUCTS, newRes)
        })
    },
    // 这里将mutation中的方法以action的形式输出，主要是组件中有使用mutation的方法，
    // 到时仅需引用mapActions即可，可按实际情况使用。
    setProducts({ commit }, products) {
        commit(types.SET_PRODUCTS, products)
    },
    clearCartProducts({ commit }) {
        commit(types.CLEAR_CART_PRODUCTS)
    }

}