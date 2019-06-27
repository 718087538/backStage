<template>
  <div id="app">
    账号：
    <input type="text" ref="account">
    密码：
    <input type="text" ref="password">
    <button @click="login">登录</button>


    <button @click="testToken">验证token是否认证通过</button>
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
  name: "App",
  data() {
    return {
      category_id: 10
    };
  },
  methods: {
    login() {
      this.$axios({
        method: "post",
        url: "http://127.0.0.1:7001/login",
        data: {
          account:this.$refs.account.value,
          password: this.$refs.password.value
        },
      })
        .then(res => {
          console.log("图片分享:", res);
          console.log(res.data.data.token);

          localStorage.setItem("token",res.data.data.token);
          console.log(localStorage.getItem("token"),"存的token");
          // alert(res.data);
        })
        .catch(err => {});
    },
    testToken() {
      this.$axios({
        method: "post",
        url: "http://127.0.0.1:7001/test",
        headers:{
          token:localStorage.getItem("token")
        },
        data:{
          
        }
      })
        .then(res => {
          console.log("发送token验证请求成功", res);
        })
        .catch(err => {});
    }
  }
};
</script>

<style>
</style>
