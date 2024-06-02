// store.js
import { createStore } from 'vuex'

export default createStore({
    state: {
        profile: {
            name: 'Loai',
            courseYear: '2rd Year',
            matricNumber: '123456',
            address: 'Kuala Lumpur, Malaysia'
        }
    },
    mutations: {
        setProfile(state, profile) {
            state.profile = profile
        }
    },
    actions: {
        updateProfile({ commit }, profile) {
            commit('setProfile', profile)
        }
    }
})
