<template>
  <div class="container">
    <div class="box">
      <div class="picture"></div>
      <div class="input">
        <h1>欢迎登录</h1>
        <input type="text" placeholder=" 用户名" v-model="userName"/>
        <input type="password" placeholder=" 密码" v-model="password"/>
        <button @click="login()">登录</button>
        <router-link to="/signup">新用户注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (!this.userName) {
        this.$message.error('请输入用户名')
        return
      }
      if (!this.password) {
        this.$message.error('请输入密码')
        return
      }
      this.$message('名' + this.userName + 'password' + this.password)
      // axios.defaults.headers.post['token'] = '6e996d0aa210482c8599b087daccb0e0'
      // const result = axios({
      //   method: 'POST',
      //   url: 'http://192.168.2.254:8080/JSCheck/group/queryAllGroupsTree',
      //   data: {
      //     userName: this.userName,
      //     password: this.password
      //   }
      // })
      // 这里没有成功得到过好数据所以不知道怎么处理,需要等到哪次真的有数据才行
      // console.log(result)
      this.$router.push('/')
    }
  },
  mounted () {
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
.container{
  background: linear-gradient(120deg,rgba(230,84,111,0.5),rgba(170, 255, 255, 0.5),rgba(255,170,200,0.5));
  display: flex;
  justify-content: center;
  align-items:center;
  height: 600px;
  .box{
    width: 65%;
    height: 75%;
    display: flex;
    border-radius: 1px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    .picture{
      width:50%;
      height: 100%;
      background: rgba(255,170,180,0.3);
    }
    .input{
      width: 50%;
      height: 100%;
      background: #ffffff;
      box-shadow: 0 5px 10px rgba(0,0,0,0.2);
      transition: 1s;
      transition-delay: 0.2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1{
        margin-bottom: 25px;
        color: #000;
      }
      input{
        background-color: #AA0E23;
        color: #ffffff;
        width: 60%;
        border: 1px solid #ffffff;
        border-radius: 4px;
        height: 28px;
        font-size: 16px;
        margin: 6px 0;
        letter-spacing: 1px;
      }
      input::placeholder{
        color:#fff;
      }
      input:focus::placeholder{
        opacity: 0;
      }
      button{
        width:60%;
        margin-top: 20px;
        outline: none;
        border: none;
        background: #f35c42;
        border-radius: 8px;
        padding: 13px;
        font-size: 16px;
        letter-spacing: 2px;
        color: #fff;
        transition: 1s;
      }
      button:hover{
        background: #AA0E23;
      }
      a{
        // text-decoration: none;
        margin-top: 5px;
        color: #000;
      }
    }
    .input:hover{
      width:60%;
    }
  }
}
</style>
