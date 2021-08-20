export default {
    namespaced: true,
    state: {
        list: [{
                name: "写手账",
                complete: false,
            },
            {
                name: "锻炼",
                complete: false,
            },
        ],
        donelist: [{
            name: '养花',
            complete: true
        }],
    },
    getters: {
        list: state => state.list,
        donelist: state => state.donelist,
    },
    mutations: {
        addTodo: (state, data) => {
            state.list.push({
                name: data,
                complete: false,
            })
        },
        delTodo: (state, data) => {
            state.list.splice(data, 1)
        },
        delDone: (state, data) => {
            state.donelist.splice(data, 1)
        },
        clear: (state, data) => {
            state.list = []
            state.donelist = []
        },
        move2Done: (state, data) => {
            state.donelist.push(data)
        },
        move2Todo: (state, data) => {
            state.list.push(data)
        },
    },
    actions: {
        addTodo: ({ commit }, data) => {
            commit("addTodo", data);
        },
        delTodo: ({ commit }, data) => {
            commit("delTodo", data);
        },
        delDone: ({ commit }, data) => {
            commit("delDone", data);
        },
        clear: ({ commit }, data) => {
            commit("clear", data);
        },
        move2Done: ({ commit }, data) => {
            commit("move2Done", data);
        },
        move2Todo: ({ commit }, data) => {
            commit("move2Todo", data);
        },
    },
}