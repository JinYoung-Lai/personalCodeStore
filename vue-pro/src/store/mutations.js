import * as types from './mutation-types'

export default {
    [types.SET_PRODUCTS](state, products){
        state.all = products;
    },
    [types.CLEAR_CART_PRODUCTS](state){
        state.all.forEach(ele => {
            ele.quantity = 0;
        });
    }
}