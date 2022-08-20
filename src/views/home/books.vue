<template>
  <div class="pc-container">
    <div class="o-header">
      <router-link to="/bookDetails">对不起我们要试试这个跳转</router-link>
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
            <book
              :img_url="item.img_url"
              :bname="item.bname"
              :author="item.author"
              :publisher="item.publisher"
              :publish_year="item.pub_year"
            ></book>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="o-footer"></div>
  </div>
</template>

<script>
import book from "../../components/book.vue";
export default {
  components: {
    book,
  },
  data() {
    return {
      content: "1",
      BooksList: [
        {
          isbn: "001",
          bname: "高等数学",
          author: "鼠来宝",
          publisher: "同济大学出版社",
          pub_year: 2001,
          img_url: "https://s3.bmp.ovh/imgs/2022/08/17/a45d18cbf6e41773.jpeg",
        },
        {
          isbn: "002",
          bname: "低等数学",
          author: "米老鼠",
          publisher: "同济大学出版社",
          pub_year: 2091,
          img_url: "https://s3.bmp.ovh/imgs/2022/08/17/a45d18cbf6e41773.jpeg",
        },
        {
          isbn: "003",
          bname: "中等数学",
          author: "马里奥",
          publisher: "同济大学出版社",
          pub_year: 2021,
          img_url: "https://s3.bmp.ovh/imgs/2022/08/17/a45d18cbf6e41773.jpeg",
        },
        {
          isbn: "004",
          bname: "没有数学",
          author: "马里奥",
          publisher: "同济大学出版社",
          pub_year: 2080,
          img_url: "https://s3.bmp.ovh/imgs/2022/08/17/a45d18cbf6e41773.jpeg",
        },
        {
          isbn: "004",
          bname: "全是数学",
          author: "胡锦辉",
          publisher: "同济大学出版社",
          pub_year: 2045,
          img_url: "https://s3.bmp.ovh/imgs/2022/08/17/a45d18cbf6e41773.jpeg",
        },
      ],
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
  },
};
</script>

<style scoped lang="scss">
.pc-container {
  .o-header {
    height: 25px;
  }
  .books {
    width: 96%;
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
      }
    }
  }
  .o-footer {
    height: 25px;
  }
}
</style>
