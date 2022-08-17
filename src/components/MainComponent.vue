<template>
  <div class="container">
    <div>
      <Header></Header>
    </div>
    <div>
      <el-menu
        :default-active="activeIndex"
        :router="true"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#fdf6f9"
        text-color="#7E789A"
        active-text-color="#DCA55F">
        <el-menu-item index="/"><i class="el-icon-s-home"></i>首页</el-menu-item>
        <el-menu-item index="/books"><i class="el-icon-reading"></i>书籍</el-menu-item>
        <el-menu-item index="/courses"><i class="el-icon-s-cooperation"></i>课程</el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './header.vue'
export default {
  components: {
    Header
  },
  data () {
    return {
       activeIndex: '/'
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
  width: calc(100vw - 80px);
  margin: 0 auto;
  .main{
    background: linear-gradient(rgba(222,223,251,1) 0%,rgba(255,255,255,0) 99.794%),linear-gradient(rgba(255,216,211,1) 0%,rgba(255,194,220,0.7647058823529411) 100%);;
  }
}
</style>
