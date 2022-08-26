<template>
  <div class="container">
    <div class="box">
      <div class="picture"></div>
      <div class="input">
        <h1>欢迎登录</h1>
        <input type="text" placeholder="手机号" v-model="phone_number"/>
        <input type="password" placeholder="密码" v-model="password"/>
        <button @click="login()">登录</button>
        <router-link to="/signup">新用户注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {UserLogin} from '../../api/user'
export default {
  data () {
    return {
      phone_number: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (!this.phone_number) {
        this.$message.error('请输入手机号')
        return
      }
      if (!this.password) {
        this.$message.error('请输入密码')
        return
      }
      //测试数据：18946576245 Lwq111
      UserLogin ({
        phone_number: this.phone_number,
        password: this.password
      }).then((r)=>{
        if(r.header.code === -1){
          this.$message.error(r.header.message)
          return
        }
        else{
          this.$message('您已成功登录！')
          var token=r.data.token
          var user=r.data.user
          this.$store.dispatch('setUser',user)
          this.$store.dispatch('setToken',token)
          this.$router.push('/')
        }
      }).catch((err)=>{
        console.log(err)
      })
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
  background: linear-gradient(120deg,rgba(244,230,229,1),rgba(228, 232, 243, 1),rgba(205,194,208,1));
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
        background-color: #b1797a;
        color: #ffffff;
        width: 60%;
        border: 1px solid #ffffff;
        border-radius: 4px;
        text-indent: 10px;
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
        background: #CF797A;
        border-radius: 8px;
        padding: 13px;
        font-size: 16px;
        letter-spacing: 2px;
        color: #fff;
        transition: 1s;
      }
      button:hover{
        background: #DE797A;
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
