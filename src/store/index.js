import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [{
                name: "gu",
                complete: false,
            },
            {
                name: "xiao",
                complete: false,
            },
        ],
        donelist: [{
            name: 'na',
            complete: true
        }],
    },
    mutations: {
        addTodo(state, payload) {
            state.list.push(payload)
        },
        delTodo(state, payload) {
            state.list.splice(payload, 1)
        },
        delDone(state, payload) {
            state.donelist.splice(payload, 1)
        },
        clear(state, payload) {
            state.list = []
            state.donelist = []
        },
        move2Done(state, payload) {
            state.donelist.push(payload)
        },
        move2Todo(state, payload) {
            state.list.push(payload)
        }

    },
    actions: {},
    modules: {}
})