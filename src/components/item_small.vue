<template>
  <!-- <div class="container" :style="{ backgroundImage: 'bimg' }"></div> -->
  <div class="container">
    <div class="img">
      <img :src="bimg" class="pic" />
    </div>
    <div class="title">
        {{text}}
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
  margin: 0 0 10px 0;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  .img{
    padding: 10px;
    width: 100%;
    .pic{
      width: 100%;
    }
  }
  .title{
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
