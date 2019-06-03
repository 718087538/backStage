<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane v-for="(item ,idx) in twoList" :key="idx" :label="item.title" :name="item.name" @click="selTab">
        <List v-if="isShow" @childByValue="childByValue" :tableData="tableData"></List>
        <AditQustion v-else :tableData="tableData[editNum]"></AditQustion>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import List from "./list"
  import AditQustion from "./aditQustion"

  export default {
    name: "twoList",
    components: {List, AditQustion},

    data() {
      return {
        isShow: true,//试卷组件是否显示
        editNum: "",//编辑第几条试卷
        input: '',
        activeName: 'first',//前端类，右边自动选择项目
        twoList: [
          {title: "javascript", name: "first"},
          {title: "CSS", name: "second"},
          {title: "HTML5", name: "third"},
          // {title: "VUE", name: "fourth"},
          // {title: "待定", name: "fifth"},
        ],
        // list的值，传给自组件
        tableData: "",
      }
    },
    methods: {
      childByValue: function (isShow, index) {
        this.isShow = isShow,
          this.editNum = index
      },

      handleClick(tab) {
        this.isShow = true;
        // console.log(tab.index);
        let idx = Number(tab.index);
        if (idx === 0) {  //js
          this.$axios({
            method: 'post',
            url:"http://127.0.0.1:7001/findList",
            data:{
              big_block:1,//大类号
              category_id:30,//小类号
            }
          }).then(res=>{
            console.log(res.data.data.rows);
            this.tableData = res.data.data.rows;
          }).catch(err=>{
           console.log(err)
          });

        } else if (idx === 1) {//css
          this.$axios({
            method: 'post',
            url:"http://127.0.0.1:7001/findList",
            data:{
              big_block:1,//大类号
              category_id:10,//小类号
            }
          }).then(res=>{
            this.tableData = res.data.data.rows;
          }).catch(err=>{
            console.log(err)
          });
        } else if (idx === 2) {//html5
          this.$axios({
            method: 'post',
            url:"http://127.0.0.1:7001/findList",
            data:{
              big_block:1,//大类号
              category_id:20,//小类号
            }
          }).then(res=>{
            this.tableData = res.data.data.rows;
          }).catch(err=>{
            console.log(err)
          });
        }
      },
      selTab() {
        alert("sssssssss")
      }
    },
    mounted() {
      this.$axios({
        method: 'post',
        url:"http://127.0.0.1:7001/findList",
        data:{
          big_block:1,//大类号
          category_id:30,//小类号
        }
      }).then(res=>{
        // console.log(res.data.data.rows);
        this.tableData = res.data.data.rows;
      }).catch(err=>{
        console.log(err)
      });
    }
  }
</script>

<style scoped>

</style>
