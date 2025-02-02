import { apiGetItem, apiGetItemList, apiGetUser } from '@/api';

export default {
  async fetchUser({ commit }, userId) {
    const { data } = await apiGetUser(userId);
    commit('setUser', data);
  },
  async fetchItem({ commit }, itemId) {
    const { data } = await apiGetItem(itemId);
    commit('setItem', data);
  },
  async fetchItemList({ commit }, type) {
    const { data } = await apiGetItemList(type);
    commit('setItemList', data);
  }
};
