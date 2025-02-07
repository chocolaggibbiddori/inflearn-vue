export default {
  SET_USERNAME: (state, username) => (state.username = username),
  CLEAR_USERNAME: state => (state.username = ''),
  SET_TOKEN: (state, token) => (state.token = token),
  CLEAR_TOKEN: state => (state.token = '')
};
