<template>
  <el-container class="container">
    <div class="header">
      <div>
        <el-button icon="el-icon-star-off" circle @click="collectquestion(id)"></el-button>
      </div>
      <div class="stem">
        <i class="el-icon-s-promotion"></i>
        {{stem}}
      </div>
    </div>
    <div class="middle" v-show="img_url!=null">
      <img :src="img_url" />
      我是图片
    </div>
    <div class="bottom">
      <div class="up">
        <span>答案</span>
      </div>
      <el-main >
        <span class="answer" v-if="answer.length==0">
        暂无回答
        </span>
        <span v-else v-for="item in answer">
          <span>{{item}}</span>
          <el-divider></el-divider>
        </span>
      </el-main>
    </div>
  </el-container>
</template>

<script>
import { getQuestion,CollectQuestion,getAnswer} from '@/api/subject';

export default {
  data () {
    return {
      id:'',
      stem:'',
      answerList:[],
      post_time:'',
      img_url:'',
      answer:[],
    }
  },
  methods: {
    collectquestion(data){
      CollectQuestion(this.$store.getters.user.user_id,data).then((r)=>{
        if(r.code===0){
          this.$message(r.message)
        }
        else{
          this.$message.error(r.message)
        }
      }).catch((err)=>{
        console.log(err)
      })
    },

  },
  mounted () {
  },
  created () {
    this.id=this.$route.query.qid;
    getQuestion(this.id).then((r)=>{
      if(r.header.code===0){
        this.stem=r.data.question_stem;
        this.answerList=r.data.answer_id_list;
        this.post_time=r.data.post_time;
        this.img_url=r.data.pic_url;
        for(var i=0;i<this.answerList.length;i++){
          getAnswer(this.answerList[i]).then((r)=>{
            if(r.header.code===0){
              this.answer.push(r.data.answer_content);
              }
              else{
                this.$message.error(r.header.message)
              }
          }).catch((err)=>{
            console.log(err)
          })
        }
      }
      else{
        this.$message.error(r.header.message);
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
  display: flex;
  flex-direction: column;
  // height: calc(100vh - 80px);
  .header{
    background-color: rgba(255,255,255,0.3);
    display: flex;
    justify-content: center;
    margin: 10px;
    border-radius: 10px;
    .stem{
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
      }
    }
    .el-main{
      width: 80%;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.8);
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
      line-height: 200%;
    }
  }
}
</style>
