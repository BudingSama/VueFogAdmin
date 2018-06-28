<template>
  <div class="userWrap">
    <el-badge :value="200" :max="99" class="item">
      <i style="float:left" class="el-icon-bell"></i>
    </el-badge>
    <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link" style="cursor: pointer">
    {{this.$store.state.app.userData.username}}
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>xxxxxxxxx</el-dropdown-item>
    <el-dropdown-item>xxxxxxxxx</el-dropdown-item>
    <el-dropdown-item>xxxxxxxxx</el-dropdown-item>
    <el-dropdown-item>xxxxxxxxx</el-dropdown-item>
    <el-dropdown-item command="signout" divided><i class="el-icon-circle-close"></i>&nbsp;&nbsp;退出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
  </div>
</template>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.userWrap {
  height: 100%;
  max-width: 200px;
  float: right;
}
</style>

<script>
import { req } from '@/utils/request';

export default {
  name: 'headrBar',
  methods: {
    handleCommand: (command) => {
      switch (command) {
        case 'signout':
          req({
            url: '/manage/logout/',
            method: 'post',
          }).then((res) => {
            if (res.data.meta.code === 0) {
              localStorage.clear();
              // 死方法，直接刷新界面，清除model里面的state
              window.location.href = '/';
            }
          });
        break;
      }
    }
  },
  beforeCreate() {
    this.$store.dispatch('getUser');
    this.$store.dispatch('getModules');
  }
};
</script>

