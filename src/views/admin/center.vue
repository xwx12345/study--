<template>
  <div class="container">
    <centerHeader></centerHeader>
    <div class="main">
      <div class="left">
        <el-menu
          :default-active="activeIndex"
          :router="true"
          class="el-menu-vertical-demo"
          background-color="#fdf6f9"
          text-color="#7E789A"
          active-text-color="#DCA55F">
          <el-menu-item index="/admin/">
            <i class="el-icon-user-solid"></i>
            个人信息
          </el-menu-item>
          <el-menu-item index="/admin/feedback">
            <i class="el-icon-question"></i>
            反馈中心
          </el-menu-item>
          <el-menu-item index="/admin/add">
            <i class="el-icon-upload"></i>
            增加中心
          </el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <router-view :key='$route.fullPath' />
      </div>
    </div>
  </div>
</template>

<script>
import centerHeader from '../../components/centerheader.vue'
export default {
  components: {
    centerHeader
  },
  data () {
    return {
      activeIndex:'/admin/'
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
    display: flex;
    .left{
      width: 15%;
      background: #fdf6f9;
    }
    .right{
      width: 85%;
      background: linear-gradient(120deg,#e8efff,#F3E8F0,#F4EAEA);
    }
  }
}
</style>
