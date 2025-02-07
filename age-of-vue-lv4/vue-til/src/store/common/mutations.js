export default {
  setUsername: (state, username) => (state.username = username),
  clearUsername: state => (state.username = ''),
  setToken: (state, token) => (state.token = token),
  clearToken: state => (state.token = '')
};
