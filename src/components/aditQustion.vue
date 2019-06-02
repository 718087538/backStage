<template>
  <div class="app">
    <!--<el-page-header @back="goBack" content="试卷详情" class="head"></el-page-header>-->
    <!--页头结束-->
    <div class="addQustion">
      <div class="title line">添加新题</div>
      <el-input class="line" placeholder="请输入内容" v-model="title" clearable>
        <template slot="prepend">题目：</template>
      </el-input>
      <div class="select line">
        <el-input v-model="optiona" clearable placeholder="选项A"></el-input>
        <el-input v-model="optionb" clearable placeholder="选项B"></el-input>
        <el-input v-model="optionc" clearable placeholder="选项C"></el-input>
        <el-input v-model="optiond" clearable placeholder="选项D"></el-input>
      </div>
      <el-input class="line" placeholder="请输入答案" v-model="key" clearable>
        <template slot="prepend">答案：</template>
      </el-input>
      <el-row>
        <el-button type="primary" class="addBtn">确认添加</el-button>
      </el-row>
    </div>
    <!--这下面是已经插入的题目-->
    <!--<el-collapse v-model="activeNames" @change="handleChange">-->
      <!--<el-collapse-item title="题目概括：一致性 Consistency在界面中一致：" name="1">-->
        <!--<div>题目:与现实生活一致：与现；所有的元素和结构需保持一致，-->
          <!--比如：设计样式、图标和文本、元素的位置等。在界面中一致：所有的元素和结构需保持一致，-->
          <!--比如：设计样式、图标和文本、元素的位置等。</div>-->
        <!--<div>A:与现实生活一致：与现；</div>-->
        <!--<div>B:在界面中一致：所有、元素的位置等。</div>-->
        <!--<div>C:在界面中一致：所有的图标和文本、元素的位置等。</div>-->
        <!--<div>D:在界面中一致：所有的元素和结构。</div>-->
        <!--<div>Key:D</div>-->
        <!--<div>解释:在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>-->

      <!--</el-collapse-item>-->
      <!--<el-collapse-item title="反馈 Feedback" name="2">-->
        <!--<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>-->
        <!--<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>-->
      <!--</el-collapse-item>-->
    <!--</el-collapse>-->
    <h1>{{tableData}}</h1>
  </div>
</template>

<script>
  export default {
    name: "aditQustion",
    props:{
      tableData:Array
    },
    data(){
      return{
        title:"",
        optiona:"",
        optionb:"",
        optionc:"",
        optiond:"",
        key:"",
        activeNames: ['1'],
      }
    },
    methods: {
      // 页头的方法
      goBack() {
        console.log('go back');
      },
      handleChange(val) {
        console.log(val);
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
