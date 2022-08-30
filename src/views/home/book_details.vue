<template>
  <div class="container">
    <div class="detail">
      <div class="title">
        <span>{{ details.bname }}</span>
      </div>
      <div class="middle">
        <div class="image">
          <img :src="details.img_url" >
        </div>
        <div class="info">
          <p>作者：{{ details.author }}</p>
          <p>出版社：{{ details.publisher }}</p>
          <p>出版年份：{{ details.pub_year }}</p>
          <p>ISBN:{{ details.isbn }}</p>
        </div>
      </div>
      <div class="button">
        <span>收藏 :</span>
        <el-button
          icon="el-icon-star-off"
          circle
          @click="collectbook(details.isbn)"
        ></el-button>
        <el-button v-if="usertype === 3" icon="el-icon-delete" @click="deletebook(details.isbn)"></el-button>
      </div>
      <div class="outline">
        <span>内容简介:</span>
        <br />
        {{ details.outline }}
      </div>
    </div>
    <div class="related">
      <div class="top">
        <span><i class="el-icon-s-grid"></i>相关课程与题目</span>
      </div>
      <div class="courses">
        <p>课程</p>
        <div class="booksbg" >
          <div v-for="item in details.rcourses" class="card" @click="JumpCourse(item.c_id)" >
            <img :src="item.cimg"/>
            <span>{{item.text}}</span>
            <!-- <itsmall
              :bimg="item.cimg"
              :text="item.text"></itsmall> -->
          </div>
        </div>
      </div>
      <div class="questions">
        <p>题目</p>
        <div class="quesbg">
          <div v-for="item in details.rquestions" class="card" @click="JumpQuestion(item.q_id)" >
            <i class="el-icon-ship"></i>
            <span>{{item.content}}</span>
            <!-- <question :qcontent="item.content"></question> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CollectBook,getBook,deleBook, getRecommendForBook, getQuestion,getCourse } from "@/api/subject";
import question from "@/components/question.vue";
import itsmall from "@/components/item_small.vue";
import book from "../../components/book.vue";
import router from '@/router';
export default {
  components: {
    book,
    itsmall,
    question,
  },
  data() {
    return {
      details: {
        isbn: "",
        bname: "",
        author: "",
        publisher: "",
        pub_year: "",
        img_url: "",
        outline: "",
        rcourses:[],
        rquestions:[]
      },
      usertype:0
    };
  },
  methods: {
    JumpCourse(data){
       this.$router.push({
        path: '/courseDetails',
        query: { cid: data }
      })
    },
    JumpQuestion(data){
      this.$router.push({
        path: "/questionDetails",
        query: { qid: data },
      })
    },
    collectbook(data) {
      CollectBook(this.$store.getters.user.user_id, data)
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
    deletebook(data){
      deleBook(data).then((r)=>{
        if(r.code===0){
          this.$message(r.message);
          router.go(-1);
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
    this.details.isbn = this.$route.query.isbn;
    getBook(this.details.isbn)
      .then((r) => {
        if (r.header.code === 0) {
          this.details.bname = r.data.book_name;
          this.details.author = r.data.author;
          this.details.publisher = r.data.publisher;
          this.details.pub_year = r.data.publish_time.slice(0, 4);
          this.details.img_url = r.data.pic_url;
          this.details.outline = r.data.comprehension;
        } else {
          this.$message.error(r.header.message);
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    getRecommendForBook(this.details.isbn)
      .then((r)=>{
        r.data.courseIDList.forEach((cid)=>{
          getCourse(cid).then((cr)=>{
            this.details.rcourses.push({
              cimg:cr.data.pic_url,
              text:cr.data.course_name,
              c_id:cr.data.course_id,
            })
          })
        })
        r.data.questionIDList.forEach((qid)=>{
          getQuestion(qid).then((qr)=>{
            this.details.rquestions.push({
              content:qr.data.question_stem,
              q_id:qr.data.question_id,
            })
          })
        })
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped lang="scss">
.container {
  background: linear-gradient(120deg, #e8efff, #f3e8f0, #f4eaea);
  width: 100%;
  display: flex;
  justify-content: center;
  .detail {
    width: 60%;
    margin: 10px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 14px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    .title {
      margin: 25px 0 0 35px;
      font-size: 35px;
      font-weight: 600;
    }
    .middle {
      display: flex;
      margin: 10px;
      height: 50%;
      // background: #ffffff;
      .image {
        // background: #ffffff;
        padding: 10px;
        width: 40%;
        display: flex;
        justify-content: center;
        img{
           object-fit: contain;
           width:100%;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        // background: #ffffff;
        margin: 5px;
        padding-left: 10px;
        width: 60%;
        font-size: 18px;
      }
    }
    .button {
      padding-left: 20px;
      span {
        display: inline-block;
        padding: 10px;
        border-radius: 10px;
        margin-right: 5px;
        font-size: 22px;
        font-weight: 600;
        color: #ffffff;
        background: #cbb7d0;
      }
    }
    .outline {
      padding: 20px;
      font-size: 18px;
      margin-left: 10px;
      span {
        color: #8383c5;
        font-size: 26px;
        font-weight: 600;
        line-height: 49px;
        margin-left: -10px;
      }
    }
  }
  .related {
    width: 30%;
    margin: 10px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 14px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    .top {
      // background: #aaaaff;
      padding: 10px;
      margin-top: 10px;
      font-size: 24px;
      font-weight: 600;
      color: #8383c5;
    }
     p {
      font-size: 20px;
      color: #706a8c;
    }
    .courses{
      // color: #ffffff;
      margin-left: 20px;
      margin-right: 20px;
      .booksbg {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        display: flex;
        background-color: #ffffff;
        flex-wrap: nowrap;
        .card{
          background: #ffffff;
          width: 30%;
          margin: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          object-fit: contain;
          img{
            width: 100%;
          }
          span{
            font-size: 14px;
            display: inline-block;
            padding: 5px;
          }
        }
      }
    }
    .questions {
      margin-left: 20px;
      margin-right: 20px;
      .quesbg {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        flex-wrap: nowrap;
        .card{
          padding: 10px;
          border-bottom: #cbb7d0 solid 1px;
          font-size: 16px;
          span{
            display: inline-block;
            margin-left: 5px;
          }
        }
      }
    }
  }
}
</style>
