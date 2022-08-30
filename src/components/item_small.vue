<template>
  <!-- <div class="container" :style="{ backgroundImage: 'bimg' }"></div> -->
  <div class="container">
    <img :src="bimg" class="pic" />
    <div class="title">
        <div class="ctitle">
        {{text}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "item_small",
  props: ["bimg", "text"],
  data() {
    return {};
  },
  mounted() {},
  created() {},
};
</script>

<style scoped lang="scss">
.container {
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  background: rgba(255,255,255,0.8);
  width: 100px;
  height: auto;
  margin: 0 0 10px 0;
  // display: inline-block;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  position: inherit;
  overflow: hidden;
  // flex-shrink: 0;
  .pic {
    max-width: 30%;
    height: auto;
    overflow: hidden;
  }
  .title{
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>