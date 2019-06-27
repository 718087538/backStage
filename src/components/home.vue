<template>
  <div class="app">
    <div class="left">
      <template>
        <el-tabs :tab-position="tabPosition" style="height: 200px;">
          <el-tab-pane label="前端">
            <el-tabs type="border-card" @tab-click="changeTab">
              <!-- 大类下面的小类 -->
              <el-tab-pane v-for="item in category" :key="item.index" :label="item.title">
                <!-- 插入试题的组件 -->
                <add></add>
              </el-tab-pane>
            </el-tabs>
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
import { mapState } from "vuex";
import add from "./add"
export default {
  name: "",
  components: {
    add
  },
  data() {
    return {
      category: [{ title: "h5" }, { title: "css" }, { title: "js" }],
      tabPosition: "left", //左右排列
      activeName: "first" //自动选择左边第一个
    };
  },
  methods: {
    changeTab(targetName, action) {
      // console.log(targetName, action);
    }
  },
  // computed: {
  //   num() {
  //     return this.$store.state.changableNum;
  //   }
  // }
  computed: mapState(["changableNum"])
};
</script>

<style scoped>
.el-tabs,
.el-tabs--left {
  height: auto !important;
}
</style>
