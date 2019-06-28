<template>
  <div class>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane v-for="(item,idx) in categroy" :key="idx" :label="item.name" :name="item.number"></el-tab-pane>
    </el-tabs>
    <!-- 试题列表 -->
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "web",
  data() {
    return {
      activeName: "first",
      categroy:[
        {name:"H5",number:"first"},
        {name:"CSS",number:"second"},
        {name:"JS",number:"third"},
      ]
    };
  },
  components: {},
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
      this.$store.dispatch('changeList')
    },
  }
};
</script>

<style scoped>
</style>
