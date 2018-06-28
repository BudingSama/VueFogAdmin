const fetchListMutation = {
  setUser(state, user) {
    state.userData = user;
  },
  setModules(state, modules) {
    state.modules = modules;
  },
};

export default fetchListMutation;
