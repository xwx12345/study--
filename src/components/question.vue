<template>
  <div class="container">
    <div class="text">● {{ display }}</div>
  </div>
</template>

<script>
export default {
  props: ["keyword", "content"],
  data() {
    return {
      display: this.content,
    };
  },
  mounted() {},
  created() {
    if (this.keyword) {
      this.display.replace(
        new RegExp(this.keyword, "g"),
        '<span class="keyword">${keyword}</span>'
      );
    }
  },
};
</script>

<style scoped lang="scss">
.container {
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  width: auto;
  height: 100px;
  border-radius: 15px;
  .text {
    padding: 30px;
    font-size: 20px;
    .keyword {
      color: goldenrod;
    }
  }
}
</style>