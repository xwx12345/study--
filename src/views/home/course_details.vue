<template>
  <div class="container">
    <div class="detail">
      <div class="title">
        {{courses.cname}}
      </div>
      <div class="middle">
        <div class="image">
          <img :src="courses.img_url" width="90%" >
        </div>
        <div class="info">
          <p>课程id:{{courses.cid}}</p>
        </div>
      </div>
      <div class="button">
        <span>收藏：</span>
         <el-button icon="el-icon-star-off" circle @click="collectcourse(courses.cid)"></el-button>
      </div>
      <div class="outline">
        <span>课程简介:</span>
        <br>
        {{courses.outline}}
      </div>
    </div>
    <div class="related">
      <div class="top">
        相关书籍与题目
      </div>
      <div class="books">
        <p>书籍</p>
          <img src="" alt="">
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
import { getCourse } from '@/api/subject';
import {CollectCourse} from '@/api/subject';

export default {
  components:{

  },
  data () {
    return {
      courses:{
        cid:'',
        outline:'',
        cname:'',
        img_url:'',
      },

    }
  },
  methods: {
    collectcourse(data){
      CollectCourse(this.$store.getters.user.user_id,data).then((r)=>{
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
    this.courses.cid=this.$route.query.cid;
    getCourse(this.courses.cid).then((r)=>{
      if(r.header.code===0){
        this.courses.cname=r.data.course_name;
        this.courses.outline=r.data.comprehension;
        this.courses.img_url=r.data.pic_url;
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
    .books,.questions{
      margin-left: 20px;
      p{
        font-size: 20px;
        color: #706A8C;
      }
    }
  }
}
</style>
