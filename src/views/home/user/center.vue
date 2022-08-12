<template>
  <div class="container">
    <div class="sub_div">
      我是左侧导航栏
      <router-link to="/usercenter/userinfo">个人信息</router-link>
      <router-link to="/usercenter/collection">收藏夹</router-link>
      <router-link to="/usercenter/feedback">反馈</router-link>
    </div>
    <div>
      <router-view></router-view>
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
  width: 1200px;
  background: #ffaa00;
  display: flex;
  .sub_div{
    background: #aa007f;
    display: flex;
    flex-direction:column;
  }
}
</style>
