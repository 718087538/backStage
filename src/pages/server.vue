<template>
  <div class>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="node" name="first"></el-tab-pane>
      <el-tab-pane label="数据库" name="second"></el-tab-pane>
      <el-tab-pane label="JS" name="third"></el-tab-pane>
    </el-tabs>
    <!-- 试题列表 -->
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {
      activeName: "first"
    };
  },
  components: {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
