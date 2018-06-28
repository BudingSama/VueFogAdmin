// 组装模块并导出 store 的文件
import Vue from 'vue';
import Vuex from 'vuex';
import group from './modules/group';
import app from './modules/app';

Vue.use(Vuex);
// 导出需要的模块
export default new Vuex.Store({
  modules: {
    group,
    app,
  },
});

