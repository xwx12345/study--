<template>
  <div class="container">
    <div class="content">
      <div class="top">
        <i class="el-icon-edit"></i>
        <span>反馈问题：</span>
      </div>
      <div class="middle">
        <el-input
          placeholder="请输入您的反馈..."
          v-model="input"
          :autosize="{ minRows: 8}"
          type="textarea"
          maxlength="300"
          show-word-limit
          class="txt">
        </el-input>
      </div>
      <div class="bottom">
        <button @click="success(input)">submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input:'',
    }
  },
  methods: {
    success(input)
      {
        this.$message('反馈提交成功');
        //console.log(input)
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
  display:flex;
  width: 100%;
  height: calc(100vh - 80px);
  background: linear-gradient(120deg,#e8efff,#F3E8F0,#F4EAEA);
  justify-content: center;
  align-items: center;
  .content{
    background: rgba(255,255,255,0.5);
    width: 80%;
    height: 80%;
    border-radius: 20px;
    .top{
      display: flex;
      justify-content: flex-start;
      padding: 30px;
      font-size: 25px;
      font-weight: 600;
      letter-spacing: 2px;
      color: #B39FCE;
    }
    .middle{
      display: flex;
      justify-content: center;
      width: 100%;
      padding:0 0 35px 0;
      .txt{
        width: 90%;
      }
    }
    .bottom{
      display: flex;
      justify-content: center;
      padding: 20px;
      button{
        width:200px;
        background-color:#B39FCE;
        color:white;
        font-size: 16px;
        padding:14px 20px;
        border:none;
        border-radius:4px;
        cursor:pointer;
        transition: 1s;
      }
      button:hover{
        background-color:#D49FA6;
      }
    }
  }
}
</style>
