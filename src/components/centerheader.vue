<template>
  <div class="container">
    <div class="logo">
      <img src="../../public/logo.png"/>
    </div>
    <div class="txt">
      欢迎来到个人中心页面！
    </div>
    <div class="button">
      <button @click="returnhome()">
        回到首页
      </button>
      <button @click="exitlogin()">
        退出登录
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    returnhome () {
      this.$router.push('/')
    },
    exitlogin () {
      console.log("退出登录！")
      this.$message('您已退出登录！')
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
  display: flex;
  justify-content:space-between;
  background: #f4f7ff;
  width: 100%;
  margin: 0;
  .logo{
    margin: 5px 10px;
    padding: 0;
    width: 90px;
    // height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .txt{
    margin: auto 0;
    color: #55557f;
    font-size: 20px;
    font-weight: 700;
  }
  .button{
    margin:auto 6px;
    button{
      outline: none;
      border: none;
      padding: 10px;
      margin: 2px;
      background: #aaaaff;
      border-radius: 5px;
      font-size: 13px;
      letter-spacing: 2px;
      color: #fff;
      transition: 1s;
    }
    button:hover{
      background: #aaccff;
    }
  }
}
</style>
