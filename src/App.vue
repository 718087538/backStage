<template>
  <div id="app">
    <h1>chd</h1>
    <!--<input type="radio" ref="" value="20" v-model="category_id"> h5-->
    <!--<br>-->
    <!--<input type="radio" ref="" value="10"  v-model="category_id"> css-->
    <!--<br>-->
    <!--title: <input type="text" ref="title">-->
    <!--<br>-->
    <!--<button @click="add()">插入数据库</button>-->
  <!--<h1>{{category_id}}</h1>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      category_id:10
    }
  },
  methods: {
    add () {
      this.$axios({
        method: "post",
        url: "http://127.0.0.1:7001/addTitle",
      data:{
          category_id: this.category_id,
          title:this.$refs.title.value,
      }
      })
        .then(res => {
          console.log("图片分享:", res);

          // alert(res.data);
        })
        .catch(err => {});


    }
  }
}
</script>

<style>

</style>
