const login = {
  namespaced: true,
  state: {
    access: '',
  },
  mutations: {
    login(state, para) {
      state.access = para
    },
    register(state, para) {
      state.access = para
    },
  },
  actions: {
    login(context, para) {
      context.commit('login', para)
    },
    register(context, para) {
      context.commit('register', para)
    },
  },
}

export default login
