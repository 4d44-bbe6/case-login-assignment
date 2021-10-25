import createPersistedState from "vuex-persistedstate"

export default {
  state: {
    user: {}
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    logoutUser(state) {
      state.user = {}
    }
  },
  actions: { 
    async setUser(context, credentials) {
      const res = await fetch('https://login-opdracht.365werk.workers.dev/login', {
          method: 'POST',
          body: JSON.stringify(credentials)
      })
      if(res.status === 200) {
        context.commit("setUser", await res.json())
        this.$router.push({path: '/account'})
        return true
      } else {
        return false
      }
    },
    logoutUser(context) {
      context.commit("logoutUser")
      this.$router.push({path: '/'})
    }
  },
  getters: {
    me: state => state.user
  },
  plugins: [createPersistedState()]
}