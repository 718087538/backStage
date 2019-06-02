<template>
  <div>
    <div class="addQustion">
      <div class="title">试卷题目</div>
      <el-input
        placeholder="请输入试卷题目"
        v-model="input"
        clearable>
      </el-input>
      <el-row>
        <el-button type="primary" class="addBtn">添加试卷</el-button>
      </el-row>
    </div>
    <!--具体的试卷列表-->
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        label="Name"
        prop="name">
      </el-table-column>

      <el-table-column
        label="最近一次改变"
        prop="recentlyDate">
      </el-table-column>

      <el-table-column
        label="创建时间"
        prop="date">
      </el-table-column>


      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <!--<el-input-->
            <!--v-model="search"-->
            <!--size="mini"-->
            <!--placeholder="输入关键字搜索"/>-->
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">Edit
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  export default {
    name: "list",
    props:{
      tableData:Array
    },
    data() {
      return {
        isShow:false,//传给父组件
        input:"",//插入的试卷题目
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        // index代表第几行，row代表这一行的信息
        console.log(row.category_id,row.sub_id);//这一行的信息
        // row.category_id,row.sub_id感觉没必要传给父组件，先不删，等下再看
        // childByValue是在父组件on监听的方法
        // 第二个参数this.this.isShow是需要传的值
        this.$emit('childByValue', this.isShow,index,row.category_id,row.sub_id);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
</script>

<style scoped>
  .addQustion{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .addQustion .title{
    width: 100px;
  }
  .addBtn{
    margin-left: 10px;
  }
</style>
