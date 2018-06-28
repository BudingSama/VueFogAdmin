import { req } from '../../utils/request';

const fetchListAction = {
  getGroup({ commit }) {
    if (localStorage.getItem('token')) {
      req({ url: '/manage/groupList/' }).then(data => commit('setGroup', data.data.data));
    }
  },
};

export default fetchListAction;
