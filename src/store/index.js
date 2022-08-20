import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: sessionStorage.getItem('user'),
    token:sessionStorage.getItem('token')
  },
  getters: {
    user(state) {
      if (state.user) {
        return JSON.parse(state.user)
      } else {
        return null
      }
    },
    token(state){
      return state.token
    }
  },
  mutations: {
    SET_User(state, user) {
      state.user = JSON.stringify(user)
      if (user) {
        sessionStorage.setItem('user', JSON.stringify(user))
      } else {
        sessionStorage.removeItem('user')
      }
    },
    SET_Token (state, token)
    {
      sessionStorage.setItem("token", token);
    },
    LOGOUT (state){
      sessionStorage.clear();
      state.user = {};
      state.token = null
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit('SET_User', user)
    },
    setToken({ commit },token) {
      commit('SET_Token',token)
    },
    logout({commit}) {
      commit('LOGOUT')
    }
  },
  modules: {
  }
})
