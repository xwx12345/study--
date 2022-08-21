<template>
  <div class="container">
    <div class="top">
      <div class="stem">
        <i class="el-icon-s-promotion"></i>
        {{stem}}
      </div>
    </div>
    <div class="bottom">
      <div class="up">
        <span>回答</span>
      </div>
      <div class="input">
        <el-input
          type="textarea"
          placeholder="请输入回答"
          :autosize="{ minRows: 16}"
          v-model="answer"
          maxlength="800"
          show-word-limit
        >
        </el-input>
      </div>
      <div class="button">
        <button @click="submit(answer)">submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      answer:'',
      stem:'黑虎阿福怎么坐飞机'
    }
  },
  methods: {
    submit(answer){
      console.log(answer)
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
  width: 100%;
  // height: calc(100vh - 80px);
  .top{
    background: rgba(255,255,255,0.5);
    display: flex;
    justify-content: center;
    .stem{
      // background: rgba(255,255,255,0.5);
      // border-radius: 10px;
      width: 90%;
      padding: 10px;
      margin: 30px;
      font-size: 18px;
    }
  }
  .bottom{
    background-color: rgba(255,255,255,0.3);
    margin: 10px;
    border-radius: 10px;
    .up{
      width: 80%;
      margin: 0 auto;
      span{
        display: inline-block;
        padding: 10px;
        margin: 10px;
        background:linear-gradient(90deg,#aaaaff,#a2c3ff) ;
        border-radius: 10px;
        font-weight: 600;
        color: #fff;
        letter-spacing: 4px;
        // border-bottom: #aaaaff dotted 4px;
      }
    }
    .input{
      width: 80%;
      margin: 0 auto;
    }
    .button{
      display: flex;
      justify-content: center;
      button{
        width:20%;
        margin-top: 10px;
        margin-bottom: 10px;
        outline: none;
        border: none;
        background: #9294BD;
        border-radius: 8px;
        padding: 13px;
        font-size: 18px;
        letter-spacing: 2px;
        color: #fff;
        transition: 2s;
      }
      button:hover{
        background: #BAB1D4;
      }
    }
  }
}
</style>
