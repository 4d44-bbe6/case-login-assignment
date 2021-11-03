const authentication = {
  state: () => ({
    user: {}
  }),
  mutations: {
    initialiseStore (state) {
      if (localStorage.getItem('user')) {
        state.user = JSON.parse(localStorage.getItem('user'))
      }
    },
    setUser (state, payload) {
      state.user = payload
      localStorage.setItem('user', JSON.stringify(state.user))
    },
    logoutUser (state) {
      state.user = {}
      localStorage.removeItem('user')
    }
  },
  actions: {
    async setUser (context, credentials) {
      const res = await fetch('https://login-opdracht.365werk.workers.dev/login', {
        method: 'POST',
        body: JSON.stringify(credentials)
      })
      if (res.status === 200) {
        context.commit('setUser', await res.json())
        this.$router.push({ path: '/account' })
        return true
      } else {
        return false
      }
    },
    logoutUser (context) {
      context.commit('logoutUser')
      this.$router.push({ path: '/' })
    }
  },
  getters: {
    me: (state) => {
      return state.user
    }
  }
}

export default authentication
