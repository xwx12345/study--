<template>
  <div>
    我是头部，需要导航栏搜索栏等
    先写点跳转的东西</br>
    <router-link to="/login">go to login...</router-link>
    <router-link to="/signup">go to signup...</router-link>
    <router-link to="/books">go to books...</router-link>
    <router-link to="/courses">go to courses...</router-link>
    <router-link to="/usercenter">go to usercenter...</router-link>
    <router-view></router-view>
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

</style>
