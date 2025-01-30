import { apiGetItem, apiGetItemList, apiGetUser } from '@/api';

export default {
  fetchUser({ commit }, userId) {
    apiGetUser(userId)
      .then(({ data }) => commit('setUser', data))
      .catch(error => console.error(error));
  },
  fetchItem({ commit }, itemId) {
    apiGetItem(itemId)
      .then(({ data }) => commit('setItem', data))
      .catch(error => console.error(error));
  },
  fetchItemList({ commit }, type) {
    apiGetItemList(type)
      .then(({ data }) => commit('setItemList', data))
      .catch(error => console.error(error));
  }
};
