const state = {
  user: {}
}

const getters = {
  user: state => state.user,
  isLogin: state => {
    if (state.user && state.user.id) {
      return true
    }
    return false
  }
}
const mutations = {
  loginIn (state, user) {
    state.user = user
  },
  update (state, user) {
    state.user = user
  },
  loginOut (state) {
    state.user = {}
  }
}

export default {
  state,
  getters,
  mutations
}
