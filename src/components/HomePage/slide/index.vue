<template>
<el-menu
        router
        style="text-align: left"
        :default-active="$route.fullPath"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        unique-opened
        active-text-color="#ffd04b">
        <el-submenu index="/group" v-if="this.userData.is_superuser">
          <template slot="title">
            <i class="el-icon-goods"></i>
            <span>组列表</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="ele in this.groupList" :key="ele.id" :index="`/group?gid=${ele.id}`">{{ele.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/client" v-if="moduleList.length && moduleList[0].bol">
          <template slot="title">
            <i class="el-icon-goods"></i>
            <span>客户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/client/customer">客户列表</el-menu-item>
            <el-menu-item index="/client/createclient">新增客户</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/quota" v-if="moduleList.length && moduleList[1].bol">
          <i class="el-icon-setting"></i>
          <span slot="title">配额管理</span>
        </el-menu-item>
          <el-submenu index="/role" v-if="moduleList.length && moduleList[2].bol">
          <template slot="title">
            <i class="el-icon-share"></i>
            <span>角色管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/role/assign">客户分派</el-menu-item>
            <el-menu-item index="/role/seller">管理人员</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/workorder" v-if="moduleList.length && moduleList[3].bol">
          <i class="el-icon-setting"></i>
          <span slot="title">工单管理</span>
        </el-menu-item>
        <el-menu-item index="/quotaconfirm" v-if="moduleList.length && moduleList[4].bol">
          <i class="el-icon-setting"></i>
          <span slot="title">配额审核</span>
        </el-menu-item>
      </el-menu>
</template>
<script>
import { mapState } from 'vuex';
import route from '../../../router/index';
export default {
  name: 'slide',
  data() {
    return {
    };
  },
  computed:{
    ...mapState({
        userData: state => state.app.userData,
        modules: state => state.app.modules,
        groupList: state => state.group.groupList,
    }),
    moduleList:function() {
      if (this.modules && this.userData.modules) {
        if (this.userData.is_superuser) {
          this.$store.dispatch("getGroup");
        }
        this.modules.map((ele) => {
          ele.bol = false;
          for (let i = 0; i < this.userData.modules.length; i += 1) {
            if (this.userData.modules[i].module_id == ele.id) {
              ele.bol = true;
            }
          }
        });
      }
      return this.modules;
    }
  },
};
</script>
