<template>
  <div class="hello">
    <div class="addQustion">
      <div class="title line">添加新题</div>
      <el-input class="line" placeholder="请输入内容" v-model="title" clearable>
        <template slot="prepend">题目：</template>
      </el-input>
      <div class="whyTheKey">
        <el-input class="line block1" placeholder="请输入答案" v-model="key" clearable>
          <template slot="prepend">答案：</template>
        </el-input>
        <el-input class="line" placeholder="请输入解析" v-model="explain" clearable>
          <template slot="prepend">解释：</template>
        </el-input>
      </div>
      <el-row>
        <el-button type="primary" class="addBtn" @click="add">确认添加</el-button>
        <el-button type="primary" class="addBtn" @click="clear">清空</el-button>
      </el-row>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'add',
      data() {
      return {
        title: "",
        optiona: "",
        optionb: "",
        optionc: "",
        optiond: "",
        key: "",
        explain: "",
        activeNames: ['1'],
        rows: 1,//每页显示几行
        pageIndex: 1,//从第几页开始
        big_block: 1,//从那个大类查询
        category_id: 20,//从哪个小类查询
        sub_id: "",//查询那道小题
        dataList: [],//查到的题目列表
      }
    },
    methods: {
      // 页头的方法
      goBack() {
        console.log('go back');
      },
      handleChange(val) {
        console.log(val);
      },
      //添加题目到本试卷
      add() {
      //   this.$axios({
      //     method: "post",
      //     url: "http://127.0.0.1:7001/add",
      //     data: {
      //       big_block: this.tableData.big_block,//大类号
      //       category_id: this.tableData.category_id,//小类号
      //       sub_id: this.tableData.sub_id,
      //       //上面3个决定了插到那张试卷
      //       title: this.title,
      //       optiona: this.optiona, optionb: this.optionb, optionc: this.optionc, optiond: this.optiond, key: this.key,
      //       explain: this.explain,
      //     }
      //   }).then(res => {
      //     console.log(res);
      //     this.dataList.unshift({
      //       title:this.title,
      //       optiona: this.optiona,
      //       optionb: this.optionb,
      //       optionc: this.optionc,
      //       optiond: this.optiond,
      //       key: this.key,
      //       explain: this.explain,
      //     });
      //     // 删除最后一个，保证分页的数量
      //     this.dataList.pop();
      //   }).catch(err => {
      //   })
      },
      clear() {
        this.title = "",
          this.optiona = "", this.optionb = "", this.optionc = "", this.optiona = "", this.key = "",
          this.explain = ""
      },
      // 删除该题
      deleteThis(idx){
      //   // console.log(this.dataList[idx],"我是本题");
      //   // let question = this.dataList[idx];
      //   this.$axios({
      //     method: 'post',
      //     url: "http://127.0.0.1:7001/dropQuestion",
      //     data: {
      //       big_block: this.dataList[idx].big_block,//大类号
      //       category_id: this.dataList[idx].category_id,//小类号
      //       sub_id: this.dataList[idx].sub_id,
      //       id:this.dataList[idx].id,
      //     }
      //   }).then(res => {
      //     console.log(res);
      //   }).catch(err => {
      //     console.log(err)
      //   });
      }
    },
    mounted() {
      // console.log(this.tableData.category_id);
      // this.$axios({
      //   method: 'post',
      //   url: "http://127.0.0.1:7001/getRadio",
      //   data: {
      //     big_block: this.tableData.big_block,//大类号
      //     category_id: this.tableData.category_id,//小类号
      //     rows: 100,
      //     pageIndex: 1,
      //     sub_id: this.tableData.sub_id,
      //   }
      // }).then(res => {
      //   // console.log(res);
      //   this.dataList = res.data.data.result;
      //   // this.tableData = res.data.data.rows;
      // }).catch(err => {
      //   console.log(err)
      // });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app {
    padding: 10px 30px;
  }
  .app .head {
    margin-bottom: 30px;
  }
  .whyTheKey {
    display: flex;
  }
  .whyTheKey .block1 {
    width: 280px;
  }
  .select {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .addQustion {
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: space-around;*/
  }
  .line {
    margin-top: 10px;
  }
  .addQustion .title {
    width: 100px;
  }
  .addBtn {
    margin-top: 10px;
  }
</style>
