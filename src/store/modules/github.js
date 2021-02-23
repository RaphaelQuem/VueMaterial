import axios from 'axios';
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
        console.log(github);
        const response = await axios.get(`https://api.github.com/zen`);
        commit('Zen', response.data);
    }
};



export default {
    state,
    getters,
    actions,
    mutations
}