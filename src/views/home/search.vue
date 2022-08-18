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
    };
  },
  methods: {},
  mounted() {

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
