import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';

export default {
  LOGIN({ commit }, payload) {
    const username = payload.user.username;
    const token = payload.token;

    commit('SET_USERNAME', username);
    commit('SET_TOKEN', token);
    saveAuthToCookie(token);
    saveUserToCookie(username);
  }
};
