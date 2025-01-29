import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newsList: []
  },
  mutations: {
    setNewsList(state, payload) {
      state.newsList = payload;
    }
  },
  actions: {
    fetchNewsList({ commit }) {
      fetchNewsList()
        .then(res => commit('setNewsList', res.data))
        .catch(error => console.error(error));
    }
  }
});
