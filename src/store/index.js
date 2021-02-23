import Vuex from 'vuex';
import Vue from 'vue';
import github from './modules/github';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        github
    }
})