export default {
    state: {
        ordsers: []
    },
    mutations: {
        createOrder (state, payload) {
            state.orders.push(payload)
        }
    },
    actions: {
        async createOrder() {
            // eslint-disable-next-line no-unused-vars
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, 4000)
            })
        }
    },
    getters: {}
}
