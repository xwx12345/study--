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
    </div>
    <div class="bigbox">
      <div class="btext">
        <p>课程</p>
      </div>
      <div class="info">
        <div class="col-item" v-for="(item, index) in CoursesList" :key="index">
          <course :cname="item.cname" :img_url="item.img_url"> </course>
        </div>
      </div>
    </div>
    <div class="bigbox">
      <div class="btext">
        <p>题目</p>
        <div class="qinfo" v-for="(item, index) in QuestionsList" :key="index">
          <question
            :qcontent="item.qtext"
            :keyword="content"
            :acontent="item.atext"
          ></question>
        </div>
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
      content: "1",
      BooksList: [
        // {
        //   isbn: "001",
        //   bname: "高等数学",
        //   author: "鼠来宝",
        //   publisher: "同济大学出版社",
        //   pub_year: 2001,
        //   img_url: "https://s3.bmp.ovh/imgs/2022/08/17/a45d18cbf6e41773.jpeg",
        // },
        // {
        //   isbn: "002",
        //   bname: "低等数学",
        //   author: "米老鼠",
        //   publisher: "同济大学出版社",
        //   pub_year: 2091,
        //   img_url: "https://s3.bmp.ovh/imgs/2022/08/17/a45d18cbf6e41773.jpeg",
        // },
        // {
        //   isbn: "003",
        //   bname: "中等数学",
        //   author: "马里奥",
        //   publisher: "同济大学出版社",
        //   pub_year: 2021,
        //   img_url: "https://s3.bmp.ovh/imgs/2022/08/17/a45d18cbf6e41773.jpeg",
        // },
        // {
        //   isbn: "004",
        //   bname: "没有数学",
        //   author: "马里奥",
        //   publisher: "同济大学出版社",
        //   pub_year: 2080,
        //   img_url: "https://s3.bmp.ovh/imgs/2022/08/17/a45d18cbf6e41773.jpeg",
        // },
        // {
        //   isbn: "005",
        //   bname: "全是数学",
        //   author: "胡锦辉",
        //   publisher: "同济大学出版社",
        //   pub_year: 2045,
        //   img_url: "https://s3.bmp.ovh/imgs/2022/08/17/a45d18cbf6e41773.jpeg",
        // },
      ],
      CoursesList: [
        // {
        //   cname: "乌鸦坐飞机",
        //   img_url: "",
        // },
        // {
        //   cname: "乌鸦坐飞机",
        //   img_url: "",
        // },
        // {
        //   cname: "乌鸦坐飞机",
        //   img_url: "",
        // },
        // {
        //   cname: "乌鸦坐飞机",
        //   img_url: "",
        // },
        // {
        //   cname: "乌鸦坐飞机",
        //   img_url: "",
        // },
        // {
        //   cname: "乌鸦坐飞机",
        //   img_url: "",
        // },
      ],
      QuestionsList: [],
    };
  },
  methods: {},
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
        console.log(item, index);
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
    TextSearchCourses(this.content).then((r) =>
      r.data.idList.forEach((item, index) => {
        console.log(item, index);
        GetCourse(item).then((cr) => {
          console.log(cr.data.pic_url)
          this.CoursesList.push({
            cname: cr.data.course_name,
            img_url: cr.data.pic_url,
          });
        });
      })
    );
    TextSearchQuestions(this.content).then((r) =>
      r.data.idList.forEach((item, index) => {
        console.log(item, index);
        GetQuestion(item).then((qr) => {
          this.QuestionsList.push({
            qtext: qr.data.question_stem,
            atext: "现在还没有回答~",
          });
          if (qr.data.answer_id_list[0]) {
            GetAnswer(item.data.answer_id_list[0]).then((ar) => {
              this.QuestionsList[index].atext = ar.data.answer_content;
            });
          }
          console.log(this.QuestionsList[0]);
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
      grid-template-columns: repeat(auto-fill, 300px);
      grid-gap: 20px;
    }
  }
}
</style>
