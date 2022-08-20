<template>
  <div class="container">
    <h_main></h_main>
    <div class="division"></div>
    <test></test>
  </div>
</template>

<script>
import h_main from "./modular/homemain.vue"
import test from "./modular/hometest.vue"
export default {
  components:{
    h_main,
    test
  },
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
.division{
  width: calc(100vw - 80px);
  height: 2px;
  // background-color: #DCDCDC;
  margin: 25px auto 25px auto
}
</style>
