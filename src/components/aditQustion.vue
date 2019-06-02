<template>
  <div class="app">
    <el-page-header @back="goBack" content="试卷详情" class="head"></el-page-header>
    <!--页头结束-->
    <div class="addQustion">
      <div class="title line">添加新题</div>
      <el-input class="line" placeholder="请输入内容" v-model="input1">
        <template slot="prepend">题目：</template>
      </el-input>
      <div class="select line">
        <el-input v-model="input" placeholder="选项A"></el-input>
        <el-input v-model="input" placeholder="选项B"></el-input>
        <el-input v-model="input" placeholder="选项C"></el-input>
        <el-input v-model="input" placeholder="选项D"></el-input>
      </div>
      <el-input class="line" placeholder="请输入答案" v-model="input1">
        <template slot="prepend">答案：</template>
      </el-input>
      <el-row>
        <el-button type="primary" class="addBtn">确认添加</el-button>
      </el-row>
    </div>
    <!--这下面是已经插入的题目-->
  </div>
</template>

<script>
  export default {
    name: "aditQustion",
    methods: {
      // 页头的方法
      goBack() {
        console.log('go back');
      }
    }
  }
</script>

<style scoped>
  .app {
    padding: 10px 30px;
  }

  .app .head {
    margin-bottom: 30px;
  }
.select{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
  .addQustion {
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: space-around;*/
  }
.line{
  margin-top: 10px;
}
  .addQustion .title {
    width: 100px;
  }

  .addBtn {
    margin-top: 10px;
  }
</style>
