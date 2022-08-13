<template>
  <div class="container">
    <div class="box">
      <div class="picture"></div>
      <div class="input">
        <h1>欢迎注册</h1>
        <input type="text" placeholder=" 用户名" v-model="userName"/>
        <input type="password" placeholder=" 密码" v-model="password"/>
        <input type="text" placeholder=" 手机号" v-model="phone"/>
        <button @click="signup()">注册</button>
        <span class="bubble bubble1"></span>
        <span class="bubble bubble2"></span>
        <span class="bubble bubble3"></span>
        <span class="bubble bubble4"></span>
        <span class="bubble bubble5"></span>
        <span class="bubble bubble6"></span>
        <span class="bubble bubble7"></span>
        <span class="bubble bubble8"></span>
        <div class="bubble_home"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      phone: '',
      password: ''
    }
  },
  methods: {
    signup () {
      if (!this.userName) {
        this.$message.error('请输入用户名')
        return
      }
      if (!this.password) {
        this.$message.error('请输入密码')
         return
      }
      this.$router.push('/login')
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
  background: linear-gradient(120deg,rgba(170,255,255,0.5),rgba(170,170,255,0.5),rgba(71, 170, 25, 0.5));
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
      background: rgba(57,115,173,0.2);
    }
    .input{
      width: 50%;
      height: 100%;
      background: #ffffff;
      box-shadow: 0 5px 10px rgba(0,0,0,0.2);
      transition: 1s;
      transition-delay: 0.2;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1{
        margin-bottom: 25px;
        color: #000;
      }
      input{
        background-color: rgba(57,115,173,0.2);
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
        color:#5c5e6b;
      }
      input:focus::placeholder{
        opacity: 0;
      }
      button{
        width:60%;
         margin-top: 20px;
        outline: none;
        border: none;
        background: #8fe4e4;
        border-radius: 8px;
        padding: 13px;
        font-size: 16px;
        letter-spacing: 2px;
        color: #030303;
        transition: 1s;
      }
      button:hover{
        background: #3973ad;
      }
      .bubble{
        background: #aaaaff;
        border-radius:100%;
        position: absolute;
        bottom: 0;
        transform: translate(-50%,0);
        z-index: 100;
        animation: bubbleMoveUp ease-in-out infinite;
      }
      .bubble1{
        width: 10px;
        height: 10px;
        left: 50%;
        animation-duration: 5s;
        animation-delay: 1s;
      }
      .bubble2{
        width: 18px;
        height: 18px;
        left: 30%;
        animation-duration: 3s;
        animation-delay: 0s;
      }
      .bubble3{
        width: 15px;
        height: 15px;
        left: 80%;
        animation-duration: 6s;
        animation-delay: 1s;
      }
      .bubble4{
        width: 13px;
        height: 13px;
        left: 60%;
        animation-duration: 5s;
        animation-delay: 2s;
      }
      .bubble5{
        width: 7px;
        height: 7px;
        left: 42%;
        animation-duration: 6s;
        animation-delay: 0.5s;
      }
      .bubble6{
        width: 10px;
        height: 10px;
        left: 22%;
        animation-duration: 6s;
        animation-delay: 4s;
      }
      .bubble7{
        width: 9px;
        height: 9px;
        left: 70%;
        animation-duration: 4s;
        animation-delay: 1s;
      }
      .bubble8{
        width: 8px;
        height: 8px;
        left: 12%;
        animation-duration: 3s;
        animation-delay: 1s;
      }
      @keyframes bubbleMoveUp {
        0%{
          bottom: 0;
          background: #aaaaff;
        }
        100%{
          bottom: 60%;
          background: #a3f5f5;
        }
      }
      .bubble_home{
        width: 100%;
        height: 60px;
        background: #aaaaff;
        position: absolute;
        bottom: 0;
        border-radius: 50% 50% 0 0;

      }
    }
    .input:hover{
      width:60%;
    }
  }
}
</style>
