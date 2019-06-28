<template>
  <!-- 试题列表 -->
  <div class>
      <h1>{{test}}</h1>
    <li v-for="(item,index) in list" :key="index" class="list">
      <span class="title">{{item.num}}，{{item.title}}</span>
      <el-button type="primary">编辑</el-button>
      <el-button type="danger" icon="el-icon-delete" circle @click="del"></el-button>
    </li>
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "list",
  data() {
    return {
    };
  },
  components: {},
  methods: {
    del() {
      this.$confirm("确认删除？")
        .then(_ => {
          console.log("点击了确认");
        })
        .catch(_ => {});
    }
  },
  computed:{
      test(){
        //   return this.$store.getters.list;
      },
      list(){
          return this.$store.getters.list;
      }
  }
};
</script>

<style scoped lang="scss">
.list {
  display: flex;
  padding: 0 30px 0 30px;
  list-style: none;
  height: 40px;
  line-height: 40px;
  margin-bottom: 10px;
}
.title {
  flex: 1;
}
</style>
