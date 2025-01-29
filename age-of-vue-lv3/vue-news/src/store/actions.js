import { apiGetAskList, apiGetJobsList, apiGetNewsList } from '@/api';

export default {
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
};
