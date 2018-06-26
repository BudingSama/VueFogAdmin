<template>
  <div>
    <el-tabs v-model="activeName" class="tabs" tab-position="left" style="background: white" >
      <el-tab-pane label="组信息" name="1"><div class="tabWrap"><group-info /></div></el-tab-pane>
      <el-tab-pane label="成员列表" name="2"><div class="tabWrap"><member-list /></div></el-tab-pane>
      <el-tab-pane label="删除组" name="3"><div class="tabWrap"><delete-group /></div></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import groupInfo from './groupInfo';
import memberList from './member';
import deleteGroup from './delete';
  export default {
    name: 'Group',
    components: {
      groupInfo,
      memberList,
      deleteGroup,
    },
    data() {
      return {
        activeName: '1'
      };
    },
    methods: {
    }
  };
</script>
<style scoped>
.tabs, .tabWrap{
  min-height:600px;
}
</style>
