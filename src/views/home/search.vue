<template>
  <div class="pc-container">
    <!-- 搜索页面 搜索的内容是{{ content }} -->
    <div class="bigbox">
      <div class="btext">
        <p>书籍</p>
      </div>
      <div class="info">
        <div
          class="col-item"
          v-for="(item, index) in BooksList"
          :key="item.isbn"
          @click="JumpBook(item.isbn)"
        >
          <book
            :img_url="item.img_url"
            :bname="item.bname"
            :author="item.author"
            :publisher="item.publisher"
            :publish_year="item.pub_year"
          ></book>
        </div>
      </div>
      <div v-if="NoBook === 1" class="result">
        <span>暂无搜索结果~</span>
      </div>
    </div>
    <div class="bigbox">
      <div class="btext">
        <p>课程</p>
      </div>
      <div class="info">
        <div
          class="col-item"
          v-for="(item, index) in CoursesList"
          :key="index"
          @click="JumpCourse(item.id)"
        >
          <course :cname="item.cname" :img_url="item.img_url"> </course>
        </div>
      </div>
      <div v-if="NoCourse === 1" class="result">
        <span>暂无搜索结果~</span>
      </div>
    </div>
    <div class="bigbox">
      <div class="btext">
        <p>题目</p>
        <div
          class="qinfo"
          v-for="(item, index) in QuestionsList"
          :key="index"
          @click="JumpQuestion(item.id)"
        >
          <question
            :qcontent="item.qtext"
            :keyword="content"
            :acontent="item.atext"
          ></question>
        </div>
      </div>
      <div v-if="NoQuestion === 1" class="result">
        <span>暂无搜索结果~</span>
      </div>
    </div>
  </div>
</template>

<script>
import book from "../../components/book.vue";
import question from "../../components/question.vue";
import course from "../../components/course.vue";
import {
  TextSearchBooks,
  GetBook,
  TextSearchCourses,
  GetCourse,
  TextSearchQuestions,
  GetQuestion,
  GetAnswer,
} from "../../api/query.js";
export default {
  components: {
    book,
    question,
    course,
  },
  data() {
    return {
      SIG_QUESTION_LOCK: false,
      SIG_ANSWER_LOCK: false,
      content: "1",
      BooksList: [],
      CoursesList: [],
      QuestionsList: [],
      NoBook: 1,
      NoCourse: 1,
      NoQuestion: 1,
    };
  },
  methods: {
    JumpBook(data) {
      this.$router.push({
        path: "/bookDetails",
        query: { isbn: data },
      });
    },
    JumpCourse(data) {
      this.$router.push({
        path: "/courseDetails",
        query: { cid: data },
      });
    },
    //我把题目详情加上啦
    JumpQuestion(data) {
      this.$router.push({
        path: "/questionDetails",
        query: { qid: data },
      });
    },
  },
  mounted() {},
  watch: {
    $route(to, from) {
      if (to.query.id != from.query.id) {
        this.id = to.query.id;
        this.init();
      }
    },
  },
  created() {
    this.content = this.$route.query.searchtext;
    // 搜索逻辑
    TextSearchBooks(this.content).then((r) =>
      r.data.idList.forEach((item, index) => {
        this.NoBook = 0;
        GetBook(item)
          .then((br) => {
            console.log(br.data);
            this.BooksList.push({
              isbn: br.data.isbn,
              bname: br.data.book_name,
              author: br.data.author,
              publisher: br.data.publisher,
              pub_year: br.data.publish_time.slice(0, 4),
              img_url: br.data.pic_url,
            });
          })
          .catch((err) => {
            console.log(err);
            location.reload();
          });
      })
    );
    TextSearchCourses(this.content)
      .then((r) =>
        r.data.idList.forEach((item, index) => {
          this.NoCourse = 0;
          GetCourse(item).then((cr) => {
            this.CoursesList.push({
              id: item,
              cname: cr.data.course_name,
              img_url: cr.data.pic_url,
            });
          });
        })
      )
      .catch((err) => {
        console.log(err);
        location.reload();
      });
    TextSearchQuestions(this.content).then((r) =>
      r.data.idList.forEach((item, index) => {
        this.NoQuestion = 0;
        while (this.SIG_QUESTION_LOCK);
        var i = index;
        GetQuestion(item)
          .then((qr) => {
            this.SIG_QUESTION_LOCK = !this.SIG_QUESTION_LOCK;
            this.QuestionsList.push({
              id: item,
              qtext: qr.data.question_stem,
              atext: "现在还没有回答~",
            });
            if (qr.data.answer_id_list[0]) {
              while (this.SIG_ANSWER_LOCK);
              GetAnswer(qr.data.answer_id_list[0]).then((ar) => {
                this.SIG_ANSWER_LOCK = !this.SIG_ANSWER_LOCK;
                this.QuestionsList[i].atext = ar.data.answer_content;
                this.SIG_ANSWER_LOCK = !this.SIG_ANSWER_LOCK;
              });
            }
            console.log(this.QuestionsList[0]);
            this.SIG_QUESTION_LOCK = !this.SIG_QUESTION_LOCK;
          })
          .catch((err) => {
            console.log(err);
            location.reload();
          });
      })
    );
  },
};
</script>

<style scoped lang="scss">
.pc-container {
  padding: 2%;
  .bigbox {
    width: 96%;
    // padding: 20px;
    margin: 0 auto;
    margin-bottom: 20px;
    /* 白色透明 */
    background: rgba(255, 255, 255, 0.5);
    opacity: 0.8;
    /* 阴影效果 */
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    .result {
      // background: rgba(0,30,0,1);
      display: flex;
      justify-content: center;
      padding: 20px;
      span {
        display: inline-block;
        font-size: 20px;
      }
    }
    .btext {
      margin: 3%;
      font-size: 40px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0px;
    }
    .info {
      width: 96%;
      display: grid;
      justify-content: space-between;
      grid-template-columns: repeat(auto-fill, 320px);
      grid-gap: 50px;
    }
  }
}
</style>
