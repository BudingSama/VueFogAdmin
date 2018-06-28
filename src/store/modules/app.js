import fetchListAction from '../actions/app';
import fetchListGetter from '../getters/app';
import fetchListMutation from '../mutations/app';

const App = {
  state: {
    userData: {},
    modules: [],
  },
  actions: fetchListAction,
  getters: fetchListGetter,
  mutations: fetchListMutation,
};

export default App;
