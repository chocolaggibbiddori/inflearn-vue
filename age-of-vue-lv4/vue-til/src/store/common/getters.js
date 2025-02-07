export default {
  getUsername: state => state.username,
  isLogin: state => state.username !== '',
  getToken: state => state.token
};
