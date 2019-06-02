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
          {title: "VUE", name: "fourth"},
          {title: "待定", name: "fifth"},
        ],
        // list的值，传给自组件
        tableData: [{
          date: '对象1',
          recentlyDate: '待实现',
          name: '111',
          category_id: '20',
          sub_id: '1'
        }, {
          recentlyDate: '对象2',
          date: '待实现',
          name: '2222',
          category_id: '20',
          sub_id: '2'
        }],
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
        if (idx === 0) {
          this.$axios({
            methods: 'post',
            url:"127.0.0.1:7001/findList",
            data:{
              big_block:1,//大类号
              category_id:30,//小类号
            }
          }).then(res=>{
            console.log(res);
            alert("111");
          }).catch(err=>{
           console.log(err)

          });

          this.tableData = [{
            date: '对象1',
            recentlyDate: '待实现',
            name: '111',
            category_id: '20',
            sub_id: '1'
          }, {
            date: '对象2',
            recentlyDate: '待实现',
            name: '2222',
            category_id: '20',
            sub_id: '2'
          }]
        } else if (idx === 1) {
          this.tableData = [{
            date: '待实现',
            recentlyDate: '待实现',
            name: '2222',
          }]
        } else if (idx === 2) {
          this.tableData = [{
            date: '待实现',
            recentlyDate: '待实现',
            name: '33333',
          }]
        }
      },
      selTab() {
        alert("sssssssss")
      }
    }
  }
</script>

<style scoped>

</style>
