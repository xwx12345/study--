<template>
  <div class="container">
    <div class="box">
      <img  src="../../../public/feedback.png"/>
      <div class="write">
        写东西
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  mounted () {
  },
  created () {

  }
}
</script>

<style scoped lang="scss">
.container{
  display: flex;
  justify-content: center;
  .box{
    position: relative;
    margin-top: 10px;
    margin-left: 10px;
    width: 700px;
    height: 700px;
    img{
      width: 100%;
      height: 100%;
    }
    .write{
      position: absolute;
      top: 100px;
      left: 50%;
      margin-left: -250px;
      width: 500px;
      height: 500px;
      background: rgba(255,255,255,0.8);
    }
  }
}
</style>
