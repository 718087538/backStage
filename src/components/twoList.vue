<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane v-for="(item ,idx) in twoList" :key="idx"  :label="item.title" :name="item.name">
      <List v-if="isShow" @childByValue="childByValue"></List>
      <AditQustion v-else></AditQustion>
    </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
  import List from "./list"
import AditQustion from "./aditQustion"
  export default {
    name: "twoList",
    components:{List,AditQustion},

    data() {
      return {
        isShow:true,
        input: '',
        activeName: 'second',//前端类，右边自动选择项目
        twoList:[
          {title:"javascript",name:"second"},
          {title:"CSS",name:"third"},
          {title:"HTML5",name:"fourth"},
          {title:"VUE",name:"fifth"},
          {title:"待定",name:"sixth"},
        ]
      }
    },
    methods:{
      childByValue :function (isShow) {
        // childValue就是子组件传过来的值
        this.isShow = isShow
      },
      handleClick(){

      }
    }
  }
</script>

<style scoped>

</style>
