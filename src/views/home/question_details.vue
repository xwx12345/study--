<template>
  <el-container class="container">
    <div class="header">
      <div class="button">
        <p>
          <el-button
            icon="el-icon-star-off"
            circle
            @click="collectquestion(id)"
          >
          </el-button>
        </p>
        <p>
          <el-button v-if="usertype === 3" icon="el-icon-delete" @click="deletequestion(id)"></el-button>
        </p>
      </div>
      <div class="stem">
        <i class="el-icon-s-promotion"></i>
        {{ stem }}
      </div>
    </div>
    <div class="middle" v-show="img_url!=null">
      <img :src="img_url" />
    </div>
    <div class="bottom">
      <div class="up">
        <span>答案</span>
      </div>
      <el-main>
        <span class="answer" v-if="answer.length == 0"> 暂无回答 </span>
        <span v-else v-for="(item,index) in filAnswer" :key="index">
          <template>
            <p>
              <el-button
                :disabled="item.disabled"
                icon="el-icon-thumb"
                circle
                @click="handleLike(item)"
              >
                <span>{{ item.approve }}</span>
              </el-button>
              <el-button
                v-if="usertype === 3"
                icon="el-icon-delete"
                circle
                @click="deleteanswer(item.answer_id)">
              </el-button>
              <span>{{ " 来自 "+item.expert_name+" 的回答：" }}</span>
            </p>
          </template>
          <span>{{ item.content }}</span>
          <el-divider></el-divider>
        </span>
      </el-main>
    </div>
  </el-container>
</template>

<script>
import { getQuestion, CollectQuestion, getAnswer ,deleQuestion ,deleAnswer} from "@/api/subject";
import { approveAnswer, getApproveAnswerIDList } from "@/api/query";
import router from '@/router';
export default {
  data() {
    return {
      like: 0,
      once: false,
      id: "",
      stem: "",
      answerList: [],
      post_time: "",
      img_url: "",
      answer: [],
      approveList: [],
      usertype:0,
    };
  },
  computed: {
    filAnswer() {
      const list = this.answer;
      if (list.length) {
        list.sort((item1, item2) => {
          return item2.approve - item1.approve;
        })
      }
      return list
    }
  },
  methods: {
    handleLike(item) {
      // TODO: 点赞效果
      console.log(item.answer_id, this.$store.getters.user.user_id);
      if (this.$store.getters.user) {
        approveAnswer(item.answer_id, this.$store.getters.user.user_id).then(r => {
          if (r.code === 0) {
            item.approve++;
            item.disabled = !item.disabled;
            this.$message(r.message);
          }else {
            this.$message.error(r.message);
          }
        })
      }else {
        this.$message.error("您尚未登录！");
      }
    },
    collectquestion(data) {
      CollectQuestion(this.$store.getters.user.user_id, data)
        .then((r) => {
          if (r.code === 0) {
            this.$message(r.message);
          } else {
            this.$message.error(r.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deletequestion(data){
      deleQuestion(data).then((r)=>{
        if(r.code === 0){
          this.$message(r.message);
          router.go(-1);
        }else{
          this.$message.error(r.message);
        }
      })
    },
    deleteanswer(data){
      deleAnswer(data).then(r=>{
        if(r.code === 0)
        {
          this.$message(r.message);
          location.reload();
        }else{
          this.$message.error(r.message);
        }
      })
    }
  },
  mounted() {},
  created() {
    if (this.$store.getters.user) {
      this.usertype = this.$store.getters.user.user_type;
    } else {
      this.usertype = 0;
    }
    this.id = this.$route.query.qid;
    getApproveAnswerIDList(this.$store.getters.user.user_id).then((r) => {
      r.data.idList.forEach((item) => {
        this.approveList.push(item);
      })
    });
    getQuestion(this.id)
      .then((r) => {
        if (r.header.code === 0) {
          this.stem = r.data.question_stem;
          this.answerList = r.data.answer_id_list;
          this.post_time = r.data.post_time;
          this.img_url = r.data.pic_url;
          for (var i = 0; i < this.answerList.length; i++) {
            getAnswer(this.answerList[i])
              .then((r) => {
                if (r.header.code === 0) {
                  console.log(r.data);
                  this.answer.push({
                    answer_id: r.data.answer_id,
                    content: r.data.answer_content,
                    expert_name: r.data.expert_name,
                    approve: r.data.approve,
                    disabled: this.approveList.filter(v => v === r.data.answer_id).length === 0 ? false : true
                  });
                } else {
                  this.$message.error(r.header.message);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        } else {
          this.$message.error(r.header.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(this.answer);
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  // height: calc(100vh - 80px);
  .header {
    background-color: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    margin: 10px;
    border-radius: 10px;
    .button {
      flex-direction: column;
      display: inline-block;
      justify-content: space-between;
    }
    .stem {
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
    .up {
      width: 80%;
      margin: 0 auto;
      span {
        display: inline-block;
        padding: 10px;
        margin: 10px;
        background: linear-gradient(90deg, #aaaaff, #a2c3ff);
        border-radius: 10px;
        font-weight: 600;
        color: #fff;
        letter-spacing: 4px;
      }
    }
    .el-main {
      width: 80%;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.8);
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
      line-height: 200%;
    }
  }
}
</style>