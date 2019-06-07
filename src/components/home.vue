<template>
  <div class="app">
    <div class="left">
      <template>
        <el-tabs :tab-position="tabPosition" style="height: 200px;">
          <el-tab-pane label="前端">
            <TwoList></TwoList>
          </el-tab-pane>
          <el-tab-pane label="后端">配置管理</el-tab-pane>
          <el-tab-pane label="数据库">角色管理</el-tab-pane>
          <el-tab-pane label="网络">定时任务补偿</el-tab-pane>
          <el-tab-pane label="算法">定时任务补偿</el-tab-pane>
          <el-tab-pane label="安全">定时任务补偿</el-tab-pane>
          <el-tab-pane label="非技术">定时任务补偿</el-tab-pane>
          <el-tab-pane label="团队合作">定时任务补偿</el-tab-pane>
          <el-tab-pane label="英语">定时任务补偿</el-tab-pane>
          <el-tab-pane label="待定">定时任务补偿</el-tab-pane>
          <el-tab-pane label="待定">定时任务补偿</el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
</template>

<script>
  import TwoList from './twoList'
  export default {
    name: "",
    components:{TwoList},
    data(){
      return{
        tabPosition: 'left',//左右排列
        activeName: 'first',//自动选择左边第一个
      }
    }
  }
</script>

<style scoped>
.app{

}
  .el-tabs,.el-tabs--left{
    height: auto !important;
  }

</style>
