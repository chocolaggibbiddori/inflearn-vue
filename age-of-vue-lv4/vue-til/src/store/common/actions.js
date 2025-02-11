import {
  deleteCookie,
  saveAuthToCookie,
  saveUserToCookie
} from '@/utils/cookies';

export default {
  LOGIN({ commit }, payload) {
    const username = payload.user.username;
    const token = payload.token;

    commit('SET_USERNAME', username);
    commit('SET_TOKEN', token);
    saveAuthToCookie(token);
    saveUserToCookie(username);
  },
  LOGOUT({ commit }) {
    commit('CLEAR_USERNAME');
    commit('CLEAR_TOKEN');
    deleteCookie('til_user');
    deleteCookie('til_auth');
  }
};
