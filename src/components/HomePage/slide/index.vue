<template>
<el-menu
        router
        style="text-align: left"
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        unique-opened
        active-text-color="#ffd04b">
        <el-submenu index="/group">
          <template slot="title">
            <i class="el-icon-goods"></i>
            <span>组列表</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/group?gid=1">xxx</el-menu-item>
            <el-menu-item index="/group?gid=2">xxx</el-menu-item>
            <el-menu-item index="/group?gid=3">xxx</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
          <el-submenu index="/role">
          <template slot="title">
            <i class="el-icon-share"></i>
            <span>角色管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/role/assign">客户分派</el-menu-item>
            <el-menu-item index="/role/seller">管理人员</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/client">
          <template slot="title">
            <i class="el-icon-goods"></i>
            <span>客户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/client/customer">客户列表</el-menu-item>
            <el-menu-item index="/client/createclient">新增客户</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/quota">
          <i class="el-icon-setting"></i>
          <span slot="title">配额管理</span>
        </el-menu-item>
        <el-menu-item index="/workorder">
          <i class="el-icon-setting"></i>
          <span slot="title">工单管理</span>
        </el-menu-item>
        <el-menu-item index="/quotaconfirm">
          <i class="el-icon-setting"></i>
          <span slot="title">配额确认</span>
        </el-menu-item>
      </el-menu>
</template>
<script>
export default {
  name: 'slide',
};
</script>
