import Vue from 'vue'
import Vuex from 'vuex'
//修改state时在console打印，便于调试
import createLogger from 'vuex/dist/logger'


import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import table from './modules/table'
import result from './modules/result'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// const state = {}
// const getter = {}
// const mutations = {}
// const actions = {}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
      table,
      result  
    },
    // 严格模式，非法修改state时报错
    strict:debug,
    plugins:debug?[createLogger()] : []
})
