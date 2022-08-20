import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: sessionStorage.getItem('userInfo')
  },
  getters: {
    userInfo(state) {
      if (state.userInfo) {
        return JSON.parse(state.userInfo)
      }
      else {
        return null
      }
    },
  },
  mutations: {
    SET_UserInfo(state, userinfo) {
      state.userInfo = JSON.stringify(userinfo)
      if (userinfo) {
        sessionStorage.setItem('userInfo', JSON.stringify(userinfo))
      }
      else {
        sessionStorage.removeItem('userInfo')
      }
    }
  },
  actions: {
    setUserInfo({ commit }, userinfo) {
      commit('SET_UserInfo', userinfo)
    }
  },
  modules: {
  }
})
