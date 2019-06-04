<template>
  <div>
    <div class="addQustion">
      <div class="title">试卷题目</div>
      <el-input
        placeholder="请输入试卷题目"
        v-model="title"
        clearable>
      </el-input>
      <el-row>
        <el-button type="primary" class="addBtn"  @click="addTest">添加试卷</el-button>
      </el-row>
    </div>
    <!--具体的试卷列表-->
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        label="Name"
        prop="title">
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
    <!--<h1>{{tableData}}</h1>-->
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
        title:'',
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
      },
      addTest(){

        // console.log(this.tableData,"11");
        // alert(this.tableData[0].sub_id,"22");
        // return false;
        this.$axios({
          // 插入试卷时，每个小类至少要有1个至，因为需要依据第一个值的big_block和category_id获取插入位置
          method: "post",
          url: "http://127.0.0.1:7001/addTitle",
          data: {
            big_block: this.tableData[0].big_block,//大类号
            category_id: this.tableData[0].category_id,//小类号
            // sub_id: 20,//设置了自增还要传值？？？
            //上面3个决定了插到那张试卷
            title:this.title,
            creat_time:'2019-01-01',
            // change_time:'2019-01-02',//插入的时候不用传改变时间，改变的时候不用传插入时间
          }
        }).then(res => {
          console.log(res);
          console.log(res.data.data.result.rows[0].sub_id);
          // 插入成功后直击先在本地更新，最上面加一个。
          this.tableData.unshift({
            big_block: this.tableData[0].big_block,
            category_id: this.tableData[0].category_id,//小类号
            title:this.title,
            creat_time:'2019-01-01',
              sub_id:res.data.data.result.rows[0].sub_id
          })

          // 删除最后一个，保证分页的数量
          this.tableData.pop();
        }).catch(err => {

        })
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
