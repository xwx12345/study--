<template>
  <div class="pc-container">
    <router-link to="/usercenter/collection/collected_books">书籍</router-link>
    <router-link to="/usercenter/collection/collected_courses">课程</router-link>
    <router-link to="/usercenter/collection/collected_questions">题目</router-link>
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