import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'here is a new message',
    loggedIn : false
  },
  getters: {
    uppercased_ : function(state){
      return state.msg.toUpperCase();
    }
  },
  mutations: {
    SET_LOGIN(state){
      state.loggedIn = !state.loggedIn
    }
  },
  actions: {
  },
  modules: {
  }
})
