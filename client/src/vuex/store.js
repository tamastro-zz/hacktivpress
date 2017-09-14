import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import jwtdecode from 'jwt-decode'

vue.use(vuex)

const store = new vuex.Store({
  state: {
    user: ''
  },
  mutations: {
    change(state, payload) {
      state.user = payload
    }
  }
})

export default store