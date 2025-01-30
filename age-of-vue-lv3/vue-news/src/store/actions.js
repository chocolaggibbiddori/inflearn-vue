import {
  apiGetAskList,
  apiGetItem,
  apiGetJobsList,
  apiGetNewsList,
  apiGetUser
} from '@/api';

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
  },
  fetchUser({ commit }, userId) {
    apiGetUser(userId)
      .then(({ data }) => commit('setUser', data))
      .catch(error => console.error(error));
  },
  fetchItem({ commit }, itemId) {
    apiGetItem(itemId)
      .then(({ data }) => commit('setItem', data))
      .catch(error => console.error(error));
  }
};
