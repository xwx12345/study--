<template>
  <div class="container">
    <div class="text">
      <div class="tarea">
      <span v-html="display" class="qtext" />
      </div>
      <span v-html="acontent" class="atext" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["keyword", "qcontent", "acontent"],
  data() {
    return {
      display: this.qcontent,
    };
  },
  methods: {},
  mounted() {
    if (this.keyword) {
      // console.log(this.display);
      this.display = this.display.replace(
        new RegExp(this.keyword, "ig"),
        '<span style="color: goldenrod">' + this.keyword + "</span>"
      );
      // console.log(this.display);
    }
  },
  created() {},
};
</script>

<style scoped lang="scss">
.container {
  margin: 20px 0 0 0;
  padding: 0 0 30px 20px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  width: auto;
  height: auto;
  border-radius: 15px;
  text-align: left;
  overflow: hidden;
  display: flex;
  .text {
    height: 20%;
    width: 100%;
    padding: 30px 10px 20px 0px;
    .tarea{
      height: 58px;
      overflow: hidden;
    }
    .qtext {
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      font-size: 24px;
      font-weight: bold;
      line-height: 28px;
    }
    .atext {
      padding: 15px 0 0 0;
      font-size: 18px;
    }
  }
}
</style>