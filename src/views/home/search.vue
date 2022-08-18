<template>
  <div class="pc-container">
    搜索页面 搜索的内容是{{ content }}
    <div class="books">
      <p class="btext">书籍</p>
      <book></book>
    </div>
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
          bname: "高等数学",
          author: "鼠来宝",
          publisher: "同济大学出版社",
          pub_year: 2001,
          img_url: "https://s3.bmp.ovh/imgs/2022/08/17/a45d18cbf6e41773.jpeg",
        },
        {
          bname: "低等数学",
          author: "米老鼠",
          publisher: "同济大学出版社",
          pub_year: 2091,
          img_url: "https://s3.bmp.ovh/imgs/2022/08/17/a45d18cbf6e41773.jpeg",
        },
        {
          bname: "中等数学",
          author: "马里奥",
          publisher: "同济大学出版社",
          pub_year: 2021,
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
.books {
  width: auto;
  padding: 20px;
  margin: 5%;
  background: rgb(238, 237, 246);
  border-radius: 14px;
}

.btext {
  margin: 3%;
  font-size: 40px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
}
</style>
