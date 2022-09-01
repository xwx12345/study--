<template>
  <div class="container">
    <div class="major">
      <div class="button">
        <span>增加专业</span>
      </div>
      <div class="form">
        <div class="main">
          <span>增加专业:</span>
          <input v-model="major"/>
        </div>
        <div class="button" @click="addMajor()">
          <i class="el-icon-circle-plus-outline"></i>
        </div>
      </div>
    </div>
    <div class="course">
      <div class="button">
        <span>增加课程</span>
      </div>
      <div class="form">
        <div class="main">
          <span>课程名:</span>
          <input v-model="course.course_name"/>
          <br />
          <span>专业:</span>
          <input v-model="course.major_name"/>
          <br />
          <span>封面url:</span>
          <input v-model="course.pic_url"/>
          <br />
          <span>课程简介:</span>
          <textarea v-model="course.comprehension"></textarea>
          <br />
        </div>
        <div class="button" @click="addCourse()">
          <i class="el-icon-circle-plus-outline"></i>
        </div>
      </div>
    </div>
    <div class="book">
      <div class="button">
        <span>增加书籍</span>
      </div>
      <div class="form">
        <div class="main">
          <span>isbn:</span>
          <input v-model="book.isbn"/>
          <br />
          <span>书籍名:</span>
          <input v-model="book.book_name"/>
          <br />
          <span>课程名:</span>
          <input v-model="book.course_name"/>
          <br />
          <span>作者名:</span>
          <input v-model="book.author"/>
          <br />
          <span>出版社:</span>
          <input v-model="book.publisher"/>
          <br />
          <span>年:</span>
          <input v-model="book.year" style="width: 20%" />
          <span>月:</span>
          <input v-model="book.month" style="width: 20%" />
          <span>日:</span>
          <input v-model="book.day" style="width: 20%" />
          <br />
          <span>封面url:</span>
          <input v-model="book.pic_url"/>
          <br />
          <span>书本简介:</span>
          <textarea v-model="book.comprehension"></textarea>
          <br />
        </div>
        <div class="button" @click="addBook()">
          <i class="el-icon-circle-plus-outline" ></i>
        </div>
      </div>
    </div>
    <div class="question">
      <div class="button">
        <span>增加问题</span>
      </div>
      <div class="form">
        <div class="main">
          <span>相关课程:</span>
          <input v-model="question.course_name"/>
          <br />
          <span>相关书籍:</span>
          <input v-model="question.book_name"/>
          <br />
          <span>相关专业:</span>
          <input v-model="question.major_name"/>
          <br />
          <span>图片url:</span>
          <input v-model="question.pic_url"/>
          <br />
          <span>题干:</span>
          <textarea v-model="question.question_stem"></textarea>
          <br />
        </div>
        <div class="button" @click="addQuestion()">
          <i class="el-icon-circle-plus-outline"></i>
        </div>
      </div>
    </div>
    <div class="subject">
      <div class="button">
        <span>增加专家</span>
      </div>
      <div class="form">
        <div class="main">
          <span>用户名:</span>
          <input v-model="subject.username"/>
          <br />
          <span>手机号:</span>
          <input v-model="subject.tele"/>
          <br />
          <span>密码:</span>
          <input v-model="subject.password"/>
          <br />
          <span>专业:</span>
          <el-select v-model="subject.major" placeholder="请选择专业">
          <el-option
            v-for="item1 in subject.majorname"
            :key="item1"
            :label="item1"
            :value="item1"
            >
          </el-option>
          </el-select>
        </div>
        <div class="button" @click="addSubject()">
          <i class="el-icon-circle-plus-outline"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AddBook,AddMajor,AddCourse,AddQuestion,AddExpert } from '@/api/admin'
import { getMajorInfo } from '@/api/query'
export default {
  data () {
    return {
      major:'',
      book:{
        isbn:'',
        book_name:'',
        course_name:'',
        author:'',
        publisher:'',
        year:'',
        month:'',
        day:'',
        comprehension:'',
        pic_url:''
      },
      course:{
        course_name:'',
        major_name:'',
        comprehension:'',
        pic_url:''
      },
      question:{
        question_stem:'',
        major_name:'',
        course_name:'',
        book_name:'',
        pic_url:''
      },
      subject:{
        username:'',
        tele:'',
        password:'',
        major:'',
        majorname:[]
      }
    }
  },
  methods: {
    addMajor(){
      AddMajor({
        major_name:this.major
      }).then(r=>{
        if(r.code===0){
          this.$message(r.message)
        }
        else{
          this.$message.error(r.message)
        }
      })
    },
    addBook(){
      AddBook({
        isbn:this.book.isbn,
        book_name:this.book.book_name,
        course_name:this.book.course_name,
        author:this.book.author,
        publisher:this.book.publisher,
        year:this.book.year,
        month:this.book.month,
        day:this.book.day,
        comprehension:this.book.comprehension,
        pic_url:this.book.pic_url
      }).then(r=>{
        console.log(r)
        if(r.code===0){
          this.$message(r.message)
        }
        else{
          this.$message.error(r.message)
        }
      })
    },
    addCourse(){
      AddCourse({
        course_name:this.course.course_name,
        major_name:this.course.major_name,
        comprehension:this.course.comprehension,
        pic_url:this.course.pic_url
      }).then(r=>{
        if(r.code===0){
          this.$message(r.message)
        }
        else{
          this.$message.error(r.message)
        }
      })
    },
    addQuestion(){
      AddQuestion({
        question_stem:this.question.question_stem,
        course_name:this.question.course_name,
        major_name:this.question.major_name,
        book_name:this.question.book_name,
        pic_url:this.question.pic_url
      }).then(r=>{
        if(r.code===0){
          this.$message(r.message)
        }
        else{
          this.$message.error(r.message)
        }
      })
    },
    addSubject(){
      const reg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
      if (!reg.test(this.subject.password)) {
        this.$message.error("密码格式不正确，请至少输入八位密码，必须包括一个大写字母一个小写字母一个数字")
        return
      }
      AddExpert({
        expert_name:this.subject.username,
        phone_num:this.subject.tele,
        password:this.subject.password,
        major_name:this.subject.major
      }).then(r=>{
        console.log(r)
        if(r.code===0){
          this.$message(r.message)
        }else{
          this.$message.error(r.message)
        }
      })
    }
  },
  mounted () {
  },
  created () {
    getMajorInfo().then(r=>{
      if(r.header.code===0){
          this.subject.majorname=r.data.nameList;
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
  width: 100%;
  .major,.book,.course,.question,.subject{
    .button{
      margin: 10px;
      span{
        display: inline-block;
        border-radius: 10px;
        background: #aaaaff;
        color: #fff;
        padding: 10px;
      }
    }
    .form{
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(255,255,255,0.5);
      border-radius: 10px;
      margin: 10px;
      .main{
        padding: 10px;
        width: 50%;
        span{
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 1px;
          color: #d89f9f;
          margin-right: 10px;
        }
        input{
          color: #908eb4;
          width: 80%;
          border: 1px solid #ffffff;
          border-radius: 4px;
          height: 28px;
          font-size: 16px;
          margin: 6px 0;
          letter-spacing: 1px;
          transition: 1s;
        }
        input:focus{
          color: #d89f9f;
          font-size: 17px;
          letter-spacing: 2px;
        }
        textarea{
          color: #908eb4;
          width: 80%;
          border: 1px solid #ffffff;
          border-radius: 4px;
          height: 200px;
          font-size: 16px;
          margin: 6px 0;
          letter-spacing: 1px;
          transition: 1s;
        }
      }
      .button{
        border-radius: 10px;
        background: #aaaaff;
        font-size: 16px;
        color: #fff;
        padding: 10px;
      }
    }
  }
}
</style>
