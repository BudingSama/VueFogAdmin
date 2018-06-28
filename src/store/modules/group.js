import fetchListAction from '../actions/group';
import fetchListGetter from '../getters/group';
import fetchListMutation from '../mutations/group';

const Group = {
  state: {
    groupList: [],
  },
  actions: fetchListAction,
  getters: fetchListGetter,
  mutations: fetchListMutation,
};

export default Group;
