import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false
    },
    mutations: {
        SET_TOKEN (state, token) {
            state.token = token
            if (token) {
                state.isUserLoggedIn = true
            } else {
                state.isUserLoggedIn = false
            }
        },
        SET_USER (state, user) {
            state.user = user
        }
    },
    actions: {
        fetchToken ({commit}, token){
            commit('SET_TOKEN', token)
        },
        fetchUser ({commit}, user) {
            commit('SET_USER', user)
        }
    }
})