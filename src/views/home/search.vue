<template>
  <div class="pc-container">
    搜索页面 搜索的内容是{{ content }}
    <div>
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
      content:'1',
    };
  },
  methods: {},
  mounted() {},
  created() {
    this.content=this.$route.params.searchtext;
  },
};
</script>

<style scoped lang="scss">

</style>
