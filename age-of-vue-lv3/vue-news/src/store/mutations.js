export default {
  setNewsList(state, payload) {
    state.newsList = payload;
  },
  setJobList(state, payload) {
    state.jobList = payload;
  },
  setAskList(state, payload) {
    state.askList = payload;
  },
  setUser(state, payload) {
    state.user = payload;
  },
  setItem(state, payload) {
    state.item = payload;
  }
};
