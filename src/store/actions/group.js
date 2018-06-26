import { req } from '../../utils/request';

const fetchListAction = {
  getGroup(context) {
    req({
      url: '/manage/login/',
      method: 'post',
      param: {
        username: '4045917308@qq.com',
        password: 123123,
      },
    }).then((res) => {
      if (res !== -1 && res.data.meta.code === 0) {
        console.log(res);
      }
    });
    context.commit('getGroup');
  },
};

export default fetchListAction;
