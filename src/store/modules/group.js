import fetchListAction from '../actions/group';
import fetchListGetter from '../getters/group';
import fetchListMutation from '../mutations/group';

const Group = {
  state: {
    isFetching: false,
    groupList: ['3123213213'],
  },
  actions: fetchListAction,
  getters: fetchListGetter,
  mutations: fetchListMutation,
};

export default Group;
