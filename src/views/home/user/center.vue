<template>
  <div class="container">
    <centerHeader></centerHeader>
    <div class="main">
      <div class="sub_div">
        <el-menu
          :default-active="activeIndex"
          :router="true"
          class="el-menu-vertical-demo"
          background-color="#fdf6f9"
          text-color="#7E789A"
          active-text-color="#DCA55F">
          <el-menu-item index="/usercenter/">
            <i class="el-icon-user-solid"></i>
            个人信息
          </el-menu-item>
          <el-menu-item index="/usercenter/collection">
            <i class="el-icon-star-on"></i>
            收藏夹
          </el-menu-item>
          <el-menu-item index="/usercenter/feedback">
            <i class="el-icon-question"></i>
            反馈中心
          </el-menu-item>
        </el-menu>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import centerHeader from '../../../components/centerheader.vue'
export default {
  components:{
    centerHeader
  },
  data () {
    return {
      activeIndex:'/usercenter/'
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
  width: 1200px;
  margin: 0 auto;
  .main{
    background: #ffaa00;
    display: flex;
  }
}
</style>
