import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

const storage = {
  fetch() {
    const result = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = localStorage.getItem(key);
      result.push(JSON.parse(item));
    }

    return result;
  }
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  getters,
  mutations
});
