// import * as fb from 'firebase'
import  fb from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

class Order {
    constructor (name, phone, adId, done = false, id = null) {
        this.name = name
        this.phone = phone
        this.adId = adId
        this.done = done
        this.id = id
    }
    
}

export default {
    state: {
        ordsers: []
    },
    mutations: {
       loadOrders(state, payload) {
           state.orders = payload
       }
    },
    actions: {
        async createOrder({commit}, {name, phone, adId, ownerId}) {
            const order = new Order(name, phone, adId)
            commit('clearError')
            try {
                await fb.database().ref(`/users/${ownerId}/orders`).push(order)
                
            } catch (error) {
                commit('setError', error.message)
                throw error
                
            }
        },
        async fetchOrders({commit, getters}) {
            commit('setLoading', true)
            commit('clearError')

            const resultOrders = []

            try {
                const fbVal = await fb.database().ref(`/users/${getters.user.id}/orders`).once('value')
                const orders = fbVal.val()

                Object.keys(orders).forEach(key => {
                    const o = orders[key]
                    resultOrders.push(
                        new Order(o.name, o.phone, o.adId, o.done, key)
                    )
                })

                commit('loadOrders', resultOrders)
                commit('setLoading', false)
            } catch(error) {
                commit('setLoading', false)
                commit('clearError', error.message)
            }
        }

    },
    getters: {}
}
