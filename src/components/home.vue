<template>
<!-- 首页 -->
  <div class="app">
    <aside class="left">
      <el-tabs :tab-position="tabPosition" style="height: 200px;">
        <router-link class="list" to="web">前端</router-link>
        <router-link class="list" to="server">后端</router-link>
        <router-link class="list" to="">数据库</router-link>
        <router-link class="list" to="">网络</router-link>
        <router-link class="list" to="">算法</router-link>
        <router-link class="list" to="">安全</router-link>
        <router-link class="list" to="">英语</router-link>
        <router-link class="list" to="">非技术</router-link>
        <router-link class="list" to="add">插入新题</router-link>
      </el-tabs>
    </aside>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import add from "./add";
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

<style scoped lang="scss">
.app {
  display: flex;
  height: 100vh;
}
.left {
  width: 180px;
  background: rgb(71, 107, 226);
}
.left .list{
  display: block;
  text-align: center;
}
.right{
  flex: 1;
}
</style>
