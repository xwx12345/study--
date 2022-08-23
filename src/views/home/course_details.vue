<template>
  <el-container>
    <el-main class="container">
      <div class="header"></div>
      <div class="detail">
        <h1>{{courses.cname}}</h1>
        <div class="image">
          <img :src="courses.img_url" width="90%" >
        </div>
        <el-button icon="el-icon-star-off" circle></el-button>
        <div class="outline">
          简介：............
        </div>
      </div>
      <div class="related">
        <h3>相关书籍与题目</h3>
        <p>书籍</p>
          <img :src="details.img_url" width="40%" float="left">
          <img :src="details.img_url" width="40%" float="left">
          <img :src="details.img_url" width="40%" float="left">
        <p>题目</p>
        <p>题目1</p>
        <p>题目2</p>
      </div>
      <div class="footer"></div>
    </el-main>
  </el-container>
</template>

<script>
import { getCourse } from '@/api/subject';


export default {
  components:{
    
  },
  data () {
    return {
      courses:{
        course_id:'',
        outline:'',
        cname:'',
        img_url:'',
      },
      
    }
  },
  methods: {

  },
  mounted () {
  },
  created () {
    this.courses.cname=this.$route.query.cname;
    getCourse()
  }
  
}
</script>

<style scoped lang="scss">
.container{
  .header{
    height:2px;
  }
  .detail{
    width:60%;
    margin: 10px ;
    background:rgb(238, 237, 246);
    border-radius: 14px;
    float:left;
    .image{
      float:left;
      width:50%;
    }
    .outline{
      width:100%;
      display:flex;
    }
  }
  .related{
    width:30%;
    margin: 10px;
    background: rgb(238, 237, 246);
    border-radius: 14px;
    float:left;
    
  }
  .footer{
    height:2px;
  }
}
</style>