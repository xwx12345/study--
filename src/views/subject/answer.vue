<template>
  <div class="container">
    <div class="top">
      <span>
        <i class="el-icon-notebook-2"></i><br />
        {{id}}
      </span>
      <div class="stem">
        <i class="el-icon-s-promotion"></i>
        {{stem}}
      </div>
    </div>
    <div class="middle" v-show="pic_url!=null">
      <img :src="pic_url" />
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
          show-word-limit>
        </el-input>
      </div>
      <div class="button">
        <button @click="submit(answer)">submit</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {getQuestion,answerQuestion} from '../../api/subject.js'
export default {
  data () {
    return {
      id:'',
      answer:'',
      stem:'黑虎阿福怎么坐飞机',
      pic_url:''
    }
  },
  methods: {
    submit(answer){
      console.log(answer)
      answerQuestion(
        this.id,
        this.$store.getters.user.user_id,
        {answer_content:answer}
      ).then(r=>{
        if(r.code === 0){
          this.$message(r.message)
          console.log('回答成功')
        }
        else{
          this.$message.error(r.message)
          return
        }
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  mounted () {
  },
  created () {
    this.id = this.$route.query.id;
    getQuestion(this.id).then(r=>{
      if(r.header.code === 0){
        this.stem=r.data.question_stem
        this.pic_url=r.data.pic_url
      }
      else{
        this.$message.error(r.header.message)
        return
      }
    }).catch((err)=>{
        console.log(err)
      })
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
    span{
      display: inline-block;
      // background-color: #9294BD;
      font-weight: 700;
      padding: 10px 0 0 5px;
      color:#a2a4bd;
    }
    .stem{
      // background: rgba(255,255,255,0.5);
      // border-radius: 10px;
      width: 90%;
      padding: 10px;
      margin: 30px;
      font-size: 18px;
    }
  }
  .middle{
    background: rgba(255,255,255,0.5);
    margin: 5px;
    display: flex;
    justify-content: center;
    object-fit: contain;
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
