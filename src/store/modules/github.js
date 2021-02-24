import github from '../../services/github';

const state = {
    zen: {}
};

const getters = {
    Zen: state => state.zen
};

const mutations = {
    Zen: (state, zen) => (state.zen = zen)
};

const actions = {
    async getZen({ commit }){
        await github.GetZen()
            .then(({data}) => commit('Zen', data))
            .catch(({error}) => commit('Zen', error));
    }
};



export default {
    state,
    getters,
    actions,
    mutations
}

