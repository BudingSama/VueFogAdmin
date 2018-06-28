import { req } from '../../utils/request';

const AppActions = {
  setUser({ commit }, param) {
    commit('setUser', param);
  },
  getUser({ commit }) {
    if (localStorage.getItem('token')) {
      req({ url: '/manage/userDetail/' }).then(data => commit('setUser', data.data.data));
    }
  },
  getModules({ commit }) {
    if (localStorage.getItem('token')) {
      req({ url: '/manage/moduleList/' }).then(data => commit('setModules', data.data.data));
    }
  },
};

export default AppActions;
