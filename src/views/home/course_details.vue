<template>
  <div class="container">
    <div class="detail">
      <div class="title">
        {{ courses.cname }}
      </div>
      <div class="middle">
        <div class="image">
          <img :src="courses.img_url" />
        </div>
        <div class="info">
          <p>课程id:{{ courses.cid }}</p>
        </div>
      </div>
      <div class="button">
        <span>收藏：</span>
        <el-button
          icon="el-icon-star-off"
          circle
          @click="collectcourse(courses.cid)"
        ></el-button>
        <el-button
          v-if="usertype === 3"
          icon="el-icon-delete"
          @click="deletecourse(courses.cid)"
        ></el-button>
      </div>
      <div class="outline">
        <span>课程简介:</span>
        <br />
        {{ courses.outline }}
      </div>
    </div>
    <div class="related">
      <div class="top">相关书籍与题目</div>
      <div class="books">
        <p>书籍</p>
        <div class="booksbg">
          <span v-for="item in courses.rbooks" >
            <itsmall
              :bimg="item.bimg"
              :text="item.text"></itsmall>
          </span>
          <!-- <course img_url="https://hepshow-image-formal.oss-cn-beijing.aliyuncs.com/bookCover/2022-07-3w/62cd50d00cf2b04a1a744a6e.jpg">
          </course> -->
        </div>
      </div>
      <div class="questions">
        <p>题目</p>
        <div class="booksbg" >
          <span v-for="item in courses.rquestions" >
            <question :qcontent="item.content" ></question>
          </span>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CollectCourse, getCourse, deleCourse, getRecommendForCourse, getBook, getQuestion } from "@/api/subject";
import router from "@/router";
import question from "@/components/question.vue";
import itsmall from "@/components/item_small.vue";
import course from "@/components/course.vue";
import bookVue from "@/components/book.vue";
export default {
  components: {
    question,
    itsmall,
    course,
  },
  data() {
    return {
      courses: {
        cid: "",
        outline: "",
        cname: "",
        img_url: "",
        rbooks:[],
        rquestions:[]
      },
      usertype: 0,
    };
  },
  methods: {
    collectcourse(data) {
      CollectCourse(this.$store.getters.user.user_id, data)
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
    deletecourse(data) {
      deleCourse(data).then((r) => {
        if (r.code === 0) {
          this.$message(r.message);
          router.go(-1);
        } else {
          this.$message.error(r.message);
        }
      });
    },
  },
  mounted() {},
  created() {
    if (this.$store.getters.user) {
      this.usertype = this.$store.getters.user.user_type;
    } else {
      this.usertype = 0;
    }
    this.courses.cid = this.$route.query.cid;
    getCourse(this.courses.cid)
      .then((r) => {
        if (r.header.code === 0) {
          this.courses.cname = r.data.course_name;
          this.courses.outline = r.data.comprehension;
          this.courses.img_url = r.data.pic_url;
        } else {
          this.$message.error(r.header.message);
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    getRecommendForCourse(this.courses.cid)
      .then((r)=>{
        if(r.header.code===0){
          r.data.isbnList.forEach((risbn)=>{
            getBook(risbn).then((br)=>{
              this.courses.rbooks.push({
                bimg:br.data.pic_url,
                text:br.data.book_name,
              })
            })
          })
          r.data.questionIDList.forEach((qid)=>{
            getQuestion(qid).then((qr)=>{
              this.courses.rquestions.push({
                content:qr.data.question_stem,
              })
            })
          })
        }
        else{
          this.$message.error(r.header.message);
          return;
        }
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
  // justify-content: center;
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
        img {
          object-fit: contain;
          width: 100%;
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
    padding: 0 0px 20px 0px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 14px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: block;
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
    .booksbg {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      display: block;
      width: auto;
      flex-wrap: nowrap;
    }
    .books {
      // color: #ffffff;
      margin-left: 20px;
      margin-right: 20px;
    }
    .questions {
      margin-left: 20px;
      margin-right: 40px;
    }
  }
}
</style>
