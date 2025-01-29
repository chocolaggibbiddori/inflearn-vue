import Vue from 'vue';
import Vuex from 'vuex';
import { apiGetAskList, apiGetJobsList, apiGetNewsList } from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newsList: [],
    jobList: [],
    askList: []
  },
  mutations: {
    setNewsList(state, payload) {
      state.newsList = payload;
    },
    setJobList(state, payload) {
      state.jobList = payload;
    },
    setAskList(state, payload) {
      state.askList = payload;
    }
  },
  actions: {
    fetchNewsList({ commit }) {
      apiGetNewsList()
        .then(({ data }) => commit('setNewsList', data))
        .catch(error => console.error(error));
    },
    fetchJobList({ commit }) {
      apiGetJobsList()
        .then(({ data }) => commit('setJobList', data))
        .catch(error => console.error(error));
    },
    fetchAskList({ commit }) {
      apiGetAskList()
        .then(({ data }) => commit('setAskList', data))
        .catch(error => console.error(error));
    }
  },
  getters: {
    getNewsList(state) {
      return state.newsList;
    },
    getJobList(state) {
      return state.jobList;
    },
    getAskList(state) {
      return state.askList;
    }
  }
});
