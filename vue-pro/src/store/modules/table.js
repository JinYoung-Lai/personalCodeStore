import axios from "axios";

const SET_GOODS = 'SET_GOODS'
const CHECKED_GOODS = 'CHECKED_GOODS'

const state = {
  all: [],
  checked: []
} 
const getters = {
  allGoods: state => state.all
}
const actions = {
  getAllData({ commit }, index) {
    let listParams = {
      pageIndex: index,
      pageSize: 5
    };
    axios.post("http://localhost:8080/api/list", listParams).then(res => {
      //const newRes = res.data.data
      commit('SET_GOODS', res.data.data)
      //console.log( res.data.data)
    });
  },
  setGoods({ commit }, goods){
    commit(SET_GOODS, goods)
  },
  checkedGoods({ commit }, checked){
    commit(CHECKED_GOODS, checked)
  }
}
const mutations = {
  [SET_GOODS](state, res){
    state.all = res  
  },
  [CHECKED_GOODS](state, checked){
    state.checked = checked
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}