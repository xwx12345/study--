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

export default {
  components:{
    
  },
  data () {
    return {
      courses:
      {
          cname: "乌鸦坐飞机",
          img_url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F-Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F35a85edf8db1cb1312bb31d7d154564e93584b27.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663562313&t=79b4eef8d2b9d16d5d6f3a07c006629c",
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