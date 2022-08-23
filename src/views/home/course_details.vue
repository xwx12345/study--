<template>
  <el-container>
    <el-main class="container">
      <div class="header"></div>
      <div class="detail">
        <h1>{{courses.cname}}</h1>
        <div class="image">
          <img :src="courses.img_url" width="90%" >
        </div>
        <el-button icon="el-icon-star-off" circle @click="collectcourse(courses.cid)"></el-button>
        <div class="outline">
          简介...<br>{{courses.outline}}
        </div>
      </div>
      <div class="related">
        <h3>相关书籍与题目</h3>
        <p>书籍</p>
          <img src="" alt="">
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
          this.$message(r.message)
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