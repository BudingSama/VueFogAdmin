const fetchListGetter = {
  hotList(state) {
    return state.list.data.slice(0, 10);
  },
};
export default fetchListGetter;
