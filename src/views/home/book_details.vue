<template>
  <div class="container">
    <div class="detail">
      <div class="title">
        <span>{{details.bname}}</span>
      </div>
      <div class="middle">
        <div class="image">
          <img :src="details.img_url" width="90%" >
        </div>
        <div class="info">
          <p>作者：{{details.author}}</p>
          <p>出版社：{{details.publisher}}</p>
          <p>出版年份：{{details.pub_year}}</p>
          <p>ISBN:{{details.isbn}}</p>
        </div>
      </div>
      <div class="button">
        <span>收藏 :</span>
        <el-button icon="el-icon-star-off" circle @click="collectbook(details.isbn)"></el-button>
      </div>
      <div class="outline">
        <span>内容简介:</span>
        <br />
        {{details.outline}}
      </div>
    </div>
    <div class="related">
      <div class="top">
        <span><i class="el-icon-s-grid"></i>相关课程与题目</span>
      </div>
      <div class="courses">
        <p>课程</p>
        <img :src="details.img_url" width="40%" float="left">
        <img :src="details.img_url" width="40%" float="left">
        <img :src="details.img_url" width="40%" float="left">
      </div>
      <div class="questions">
        <p>题目</p>
        <ul>
          <li>题目1</li>
          <li>题目2</li>
        </ul>
      </div>
    </div>
  </div>
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
        this.details.pub_year=r.data.publish_time.slice(0, 4);
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
  background: linear-gradient(120deg,#e8efff,#F3E8F0,#F4EAEA);
  width: 100%;
  display: flex;
  justify-content: center;
  .detail{
    width:60%;
    margin: 10px ;
    background:rgba(255, 255, 255,0.6);
    border-radius: 14px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    .title{
      margin: 25px 0 0 35px;
      font-size: 35px;
      font-weight: 600;
    }
    .middle{
      display: flex;
      margin: 10px;
      height: 50%;
      // background: #ffffff;
      .image{
        // background: #ffffff;
        padding: 10px;
        width:40%;
        display: flex;
        justify-content: center;
      }
      .info{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        // background: #ffffff;
        margin: 5px;
        padding-left: 10px;
        width:60%;
        font-size: 18px;
      }
    }
    .button{
      padding-left: 20px;
      span{
        display: inline-block;
        padding: 10px;
        border-radius: 10px;
        margin-right: 5px;
        font-size: 22px;
        font-weight: 600;
        color:#ffffff;
        background: #CBB7D0;
      }
    }
    .outline{
      padding: 20px;
      font-size: 18px;
      margin-left:10px;
      span{
        color:#8383c5;
        font-size: 26px;
        font-weight: 600;
        line-height: 49px;
        margin-left: -10px;
      }
    }
  }
  .related{
    width:30%;
    margin: 10px;
    background:rgba(255, 255, 255,0.6);
    border-radius: 14px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    .top{
      // background: #aaaaff;
      padding: 10px;
      margin-top: 10px;
      font-size: 24px;
      font-weight: 600;
      color: #8383c5;
    }
    .courses,.questions{
      margin-left: 20px;
      p{
        font-size: 20px;
        color: #706A8C;
      }
    }
  }
}
</style>
