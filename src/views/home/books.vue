<template>
<el-container>
  <el-header><chooseMajor ref="chooseMajor" @majorFilter="majorFilter"></chooseMajor></el-header>
  <el-main class="pc-container">
    <div class="o-header">
    </div>
    <div class="books">
      <div class="binfo">
        <el-row :gutter="24" class="box">
          <el-col
            :lg="8"
            :xs="24"
            v-for="(item, index) in BooksList"
            :key="item.isbn"
          >
            <div @click="Jump(item.isbn)">
            <book
              :img_url="item.img_url"
              :bname="item.bname"
              :author="item.author"
              :publisher="item.publisher"
              :publish_year="item.pub_year"
            ></book>
            </div>
            <!-- <span @click="Jump(item.isbn)" class="button">{{item.isbn}}</span> -->
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="o-footer"></div>
    
 
  

    </el-main>
  </el-container>

</template>

<script>
import book from "../../components/book.vue";
import chooseMajor from "../../components/chooseMajor.vue";
import { getBookByMajor, getCourseByMajor } from "@/api/query";
import { getBook, getCourse } from "@/api/subject";
export default {
  components: {
    book,
    chooseMajor,
},
  data() {
    return {
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
        //   isbn: "4",
        //   bname: "没有数学",
        //   author: "马里奥",
        //   publisher: "同济大学出版社",
        //   pub_year: 2080,
        //   img_url: "https://s3.bmp.ovh/imgs/2022/08/17/a45d18cbf6e41773.jpeg",
        // },
        // {
        //   isbn: "004",
        //   bname: "全是数学",
        //   author: "胡锦辉",
        //   publisher: "同济大学出版社",
        //   pub_year: 2045,
        //   img_url: "https://s3.bmp.ovh/imgs/2022/08/17/a45d18cbf6e41773.jpeg",
        // },
      ],
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    Jump(data) {
      this.$router.push({
        path: '/bookDetails',
        query: { isbn: data }
      })
    },
    majorFilter(data) {
      console.log(data)
      this.BooksList = []
      getBookByMajor(data).then((r) => {
        r.data.idList.forEach((risbn) => {
          getBook(risbn).then((br) => {
            this.BooksList.push({
              isbn: risbn,
              bname: br.data.book_name,
              author: br.data.author,
              publisher: br.data.publisher,
              pub_year: br.data.publish_time.slice(0, 4),
              img_url: br.data.pic_url
            })
          })
        })
      })
    }
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
    getBookByMajor('所有专业').then((r) => {
      r.data.idList.forEach((risbn) => {
        getBook(risbn).then((br) => {
          this.BooksList.push({
            isbn: risbn,
            bname: br.data.book_name,
            author: br.data.author,
            publisher: br.data.publisher,
            pub_year: br.data.publish_time.slice(0, 4),
            img_url: br.data.pic_url
          })
        })
      })
    });
  },
};
</script>

<style scoped lang="scss">
.pc-container {
  .o-header {
    height: 2px;
  }
  .books {
    width: 100%;
    // padding: 20px;
    margin: 0 auto;
    background: rgb(238, 237, 246);
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    .binfo {
      // background: #000;
      .box {
        // background: #ffaa7f;
        // width: 100%;
          .el-col {
            
          }
      }
    }
  }
  .o-footer {
    height: 2px;
  }
}
</style>
