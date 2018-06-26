<template>
  <div class="userWrap">
    <el-badge :value="200" :max="99" class="item">
      <i style="float:left" class="el-icon-bell"></i>
    </el-badge>
    <el-dropdown>
  <span class="el-dropdown-link" style="cursor: pointer">
    cfz
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>xxxxxxxxx</el-dropdown-item>
    <el-dropdown-item>xxxxxxxxx</el-dropdown-item>
    <el-dropdown-item>xxxxxxxxx</el-dropdown-item>
    <el-dropdown-item disabled>xxxxxxxxx</el-dropdown-item>
    <el-dropdown-item divided>退出</el-dropdown-item>
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
export default {
  name: 'headrBar',
};
</script>
