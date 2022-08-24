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
          <el-button icon="el-icon-star-off" circle @click="collectbook(details.isbn)"></el-button>
        </div>
        <div class="outline">
          {{details.outline}}
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
import { getBook } from "@/api/subject";
import{CollectBook}from "@/api/subject";
import book from "../../components/book.vue";
export default {
  components:{
    book,
  },
  data () {
    return {
       details: 
        {
          isbn: "",
          bname: "",
          author: "",
          publisher: "",
          pub_year: '',
          img_url: "",
          outline:'',
        },
      
    }
  },
  methods: {
    collectbook(data) {
      CollectBook(this.$store.getters.user.user_id,data).then((r)=>{
        if(r.code===0)
        {
          this.$message(r.message)
        }
        else{
          this.$message.error(r.message)
        }
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  mounted () {
  },
  created () {
    this.details.isbn = this.$route.query.isbn;
    getBook(this.details.isbn).then((r)=>{
      if(r.header.code===0){
        this.details.bname=r.data.book_name;
        this.details.author=r.data.author;
        this.details.publisher=r.data.publisher;
        this.details.pub_year=r.data.publish_time;
        this.details.img_url=r.data.pic_url;
        this.details.outline=r.data.comprehension;
      }
      else{
        this.$message.error(r.header.message)
        return
      }
    }).catch((err)=>{
        console.log(err)
      })
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