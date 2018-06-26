<template>
  <el-container>
    <el-aside width="250px">
      <div style="height:64px;background:rgba(0,0,0,0.1)"></div>
      <slide />
    </el-aside>
    <el-container>
      <el-header height="64px"><headrBar /></el-header>
      <el-main>
        <div class="mainWrap">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import slide from './slide';
import headrBar from './header';

export default {
  name: 'HomePage',
  components: {
    slide,
    headrBar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-header, .el-footer {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 60px;
    border-bottom:1px solid rgb(217, 217, 217);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 4px;
  }

  .el-aside {
    background-color:rgb(84, 92, 100);
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-container{
    height: 100%;
  }
  .mainWrap{
    background: white;
    padding: 30px;
    border-radius: 5px;
  }
</style>
