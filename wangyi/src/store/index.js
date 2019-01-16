import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state () {
    return {
      user: {}
    }
  },
  actions: {
    editUser (ctx, data) {
      console.log(data)
      ctx.commit('editUser', data)
    }
  },
  mutations: {
    editUser (state, data) {
      state.user = data
    }
  }
})
export default store
