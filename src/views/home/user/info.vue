<template>
  <div class="container">
    <div class="picture">
      <img src="../../../../public/userphoto.png" width="200px" height="200px">
    </div>
    <div class="info">
        <div class="name">
          {{userinfo.username}}
        </div>
        <div class="phone">
          <i class="el-icon-phone-outline"></i>
          <span>{{userinfo.tel}}</span>
        </div>
        <div class="form">
          <span>学校:</span>
          <input v-model="userinfo.school"/>
          <br />
          <span>专业:</span>
          <input v-model="userinfo.major" />
        </div>
        <div class="button">
          <button @click="save(userinfo)" >保存</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userinfo:{
        username:'我是用户名',
        major:'我是专业',
        tel:'我是电话',
        school:'我是学校'
      }
    }
  },
  methods: {
    save(userinfo){
      console.log(userinfo.major)
      console.log(userinfo.school)
    }
  },
  mounted () {
  },
  created () {

  }
}
</script>



<style scoped lang="scss">
img{
  border-radius:50%;
  margin:50px;
}
.container{
  display:flex;
  width: 100%;
  height: calc(100vh - 80px);
  top: 90px;
  left: 419px;
  background: linear-gradient(120deg,#e8efff,#F3E8F0,#F4EAEA);
  /* 阴影效果 不好意思我感觉丑丑的*/
  // box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  align-items: center;
  .picture{
    // background: #000;
    width: 30%;
    img{
      border: #fff solid 10px;
    }
  }
  .info{
    background: rgba(255,255,255,0.7);
    padding: 30px;
    border-radius: 20px;
    width: 40%;
    .name{
      font-size: 32px;
      margin-left: 10px;
      color: #d89f9f;
      font-weight: 600;
      letter-spacing: 1px;
    }
    .phone{
      font-size: 16px;
      padding: 5px;
      color: #8585c7;
      i{
        display: inline-block;
        padding: 3px;
        }
    }
    .form{
      // background: #ffaa7f;
      padding: 10px;
      span{
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 1px;
        color: #d89f9f;
        margin-right: 10px;
      }
      input{
        color: #908eb4;
        width: 80%;
        border: 1px solid #ffffff;
        border-radius: 4px;
        height: 28px;
        font-size: 16px;
        margin: 6px 0;
        letter-spacing: 1px;
      }
    }
    .button{
      display: flex;
      justify-content: center;
      button{
        width:30%;
        margin-top: 20px;
        outline: none;
        border: none;
        background: #d89f9f;
        border-radius: 8px;
        padding: 13px;
        font-size: 18px;
        letter-spacing: 2px;
        color: #fff;
      }
    }
  }
}
</style>
