<template>
  <div>
    <div class="left">
      <template>


        <el-tabs :tab-position="tabPosition" style="height: 200px;">
          <el-tab-pane label="前端">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="用户管理" name="first">
<List></List>


              </el-tab-pane>
              <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
              <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
          </el-tab-pane>
          <el-tab-pane label="后端">配置管理</el-tab-pane>
          <el-tab-pane label="数据库">角色管理</el-tab-pane>
          <el-tab-pane label="网络">定时任务补偿</el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
</template>

<script>
  import List from "./list"
  export default {
    name: "",
    components:{List},
    data(){
      return{
        tabPosition: 'left',//左边自动选择项
        activeName: 'first',//前端类，右边自动选择项目
      }
    }
  }
</script>

<style scoped>

</style>
