<template>
  <el-container>
    <el-main class="container">
      <div class="header"></div>
      <div class="detail">
        <h1>{{details.bname}}</h1>
        <div class="image">
          <img :src="details.img_url" width="90%" >
        </div>
        <div class="info">
          <p>作者：{{details.author}}</p>
          <p>出版社：{{details.publisher}}</p>
          <p>出版年份：{{details.pub_year}}</p>
          <p>ISBN：{{details.isbn}}</p>
          <el-button icon="el-icon-star-off" circle></el-button>
        </div>
        <div class="outline">
          简介：............
        </div>
      </div>
      <div class="related">
        <h3>相关课程与题目</h3>
        <p>课程</p>
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
import book from "../../components/book.vue";
export default {
  components:{
    book,
  },
  data () {
    return {
       details: 
        {
          isbn: "001",
          bname: "高等数学",
          author: "鼠来宝",
          publisher: "同济大学出版社",
          pub_year: 2001,
          img_url: "https://s3.bmp.ovh/imgs/2022/08/17/a45d18cbf6e41773.jpeg",
        },
      
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
    .info{
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