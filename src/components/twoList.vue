<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane v-for="(item ,idx) in twoList" :key="idx" :label="item.title" :name="item.name" @click="selTab">
        <List v-if="isShow" @childByValue="childByValue" :tableData="tableData" @handleDelete = "handleDelete"></List>
        <AditQustion v-else :tableData="tableData.result.rows[editNum]"></AditQustion>
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
        rows:100,
        pageIndex:1,
        big_block:1,

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
      // 删除某一套试卷
      handleDelete:function(data){
        console.log(data);
        this.$axios({
          method: 'post',
          url:"http://127.0.0.1:7001/dropList",
          data:{
            big_block:Number(data.big_block),//大类号
            category_id:data.category_id,//小类号
            sub_id:data.sub_id,
          }
        }).then(res=>{
          console.log(res,"删除成功");
        }).catch(err=>{
          console.log(err)
        });
      },

      // 加载试题列表的方法
      seeList(data){
        this.$axios({
          method: 'post',
          url:"http://127.0.0.1:7001/findList",
          data:{
            rows:this.rows,
            pageIndex:this.pageIndex,
            big_block:this.big_block,//大类号
            category_id:data,//小类号
          }
        }).then(res=>{
          // console.log(res.data,"111");
          this.tableData = res.data.data;
        }).catch(err=>{
          console.log(err)
        });
      },
      // 切换顶部的tab
      handleClick(tab) {
        this.isShow = true;
        // console.log(tab.index);
        let idx = Number(tab.index);
        if (idx === 0) {  //js
          this.seeList(30);
        } else if (idx === 1) {//css
          this.seeList(10);
        } else if (idx === 2) {//html5
          this.seeList(20);
        }
      },
    },
    mounted() {
      this.seeList(30);
    }
  }
</script>

<style scoped>

</style>
