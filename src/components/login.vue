<template>
  <div class="hello">
    账号：
    <input type="text" ref="account">
    密码：
    <input type="text" ref="password">
    <button @click="login">登录</button>

    <button @click="testToken">验证token是否认证通过</button>
    
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
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
}
</script>

<style scoped>

</style>
