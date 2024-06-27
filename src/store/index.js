import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0
  },
  getters: {
  },
  mutations: {
    INCREMENT(state){
      state.contador++;
    },
    DECREMENT(state){
      state.contador--;
    }
  },
  actions: {
    valueIncrement({commit}){
      commit("INCREMENT")
    },
    valueDecrement({commit}){
      commit("DECREMENT")
    }
  },
  modules: {
  }
})
