<template>
  <div class="container">
    <div class="left">
      <div class="left_top">
        <div class="img">
          <img :src="main.img"/>
        </div>
        <div class="info">
          <span>WELCOME</span>
          <h1>{{main.title}}</h1>
          <span>
            {{main.info}}
            <router-link to="/recommend">..More</router-link>
          </span>
        </div>
      </div>
      <div class="left_bottom">
        <h1>{{sub.title}}</h1>
        <span>
        {{sub.info}}
        <router-link to="/recommend">..More</router-link>
        </span>
      </div>
    </div>
    <div class="right">
      <div class="right_top">
        <span><i class="el-icon-s-opportunity"></i>新鲜推送</span>
      </div>
      <div class="right_bottom">
        <div v-for="item in info_list" :key="item.id" class="card">
          <div class="picture">
            <img :src="item.img_info" />
          </div>
          <div class="word">
            <span>
              {{item.text}}<br />
              <router-link to="/recommend">..More</router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import home_main from '../../../assets/home_main.png'
export default {
  data () {
    return {
      main:{
        img:home_main,
        title:'SOS平台',
        info:'SOS是一款面向全国大学生的移动学习平台，大学生可以通过文本搜索迅速得到题目的详细解析、具体考点。同时，我们收录包含大学基础课程、专业课程在内的多门课程，更涵盖考研题库，帮助大学生高效学习。'
      },
      sub:{
        title:'雅思备考需要准备什么',
        info:'避开换题月1、5、9月考试。因为每个季度的口语都是有题库的，而1、5、9月将会更新本季度的一部分考题。决定好考期后一定要尽早报名！越早越好！因为报名后会给自己带来紧迫感，自控力不高的同学如果一直拖着不报名就很可能也一直拖着不复习建议在备考前摸清自己的水平，才能合理的进行备考规划。如果对自己没有一个清晰的认知，最好还是找一个专业的老师，针对你的自身情况进行辅导和制定学习计划。如果是第一次考试，建议备考时间在40-50天，每天8小时左右的备考时长，是一个比较轻松愉悦的备考期。'
      },
      info_list:[
        {
          id:1,
          img_info:'..//..//..//..//public//poster.png',
          text:'今日话题||今天你学习快乐吗'
        },
        {
          id:2,
          img_info:'..//..//..//..//public//home_p2.png',
          text:'专业课解析||24张图帮你彻底了解九大常见数据结构'
        },
        {
          id:3,
          img_info:'..//..//..//..//public//home_p3.png',
          text:'热门课程||高等数学基本知识点大全'
        },
        {
          id:4,
          img_info:'..//..//..//..//public//home_p4.png',
          text:'考研专题||复习过程中常见的十大弊病及方案'
        },
        {
          id:5,
          img_info:'..//..//..//..//public//home_p5.png',
          text:'课外拓展||面试中脱颖而出，面试常用小技巧'
        }]
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
  display: flex;
  // background: #F4EAEA;
  background: linear-gradient(120deg,#e8efff,#F3E8F0,#F4EAEA);
  padding-top: 10px;
  .left{
    width: 70%;
    .left_top{
      background: #ffffff;
      display: flex;
      transition: 1s;
      box-shadow:0px 5px 5px rgba(0,0,0,0.1);
      .img{
        width: 600px;
        height: 500px;
        img{
          width: 600px;
          height: 500px;
        }
      }
      .info{
        height: 500px;
        display: flex;
        padding-left: 15px;
        padding-right: 25px;
        flex-direction: column;
        background: #ffffff;
        span{
          margin-top: 60px;
          font-size: 18px;
          letter-spacing: 1px;
          color: #4d7474;
          a{
            text-decoration: none;
            color: #B8A8DA;
            font-weight: 600;
          }
        }
        h1{
          font-size: 38px;
          letter-spacing: 1px;
          margin-bottom: -20px;
        }
      }
    }
    .left_top:hover{
      box-shadow:0px 10px 5px rgba(0,0,0,0.1);
    }
    .left_bottom{
      margin-top: 20px;
      margin-bottom: 20px;
      padding: 10px;
      background: #ffffff;
      border: #fff solid 2px;
      border-radius: 10px;
      box-shadow:0px 6px 5px rgba(0,0,0,0.1);
      h1{
        font-size: 28px;
        color: #52527b;
      }
      span{
        font-size: 16px;
        letter-spacing: 1px;
        color: #4d7474;
        line-height: 24px;
        a{
          text-decoration: none;
          color: #B8A8DA;
          font-weight: 600;
          transition: 1s;
        }
        a:hover{
          color: #ffb6a3;
        }
      }
    }
  }
  .right{
    width: 30%;
    // background: #ffffff;
    margin: 8px;
    display: flex;
    flex-direction: column;
    .right_top{
      background: #ffffff;
      border-radius: 18px;
      margin-bottom: 10px;
      padding: 15px;
      span{
        font-size: 22px;
        letter-spacing: 1.5px;
        font-weight: 700;
        color: #8585c8;
        margin-left: 10px;
      }
    }
    .right_bottom{
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .card{
        background: #ffffff;
        // margin:15px;
        margin-left: 15px;
        padding: 10px;
        display: flex;
        border-radius: 10px;
        box-shadow:0px 0px 10px rgba(170,170,255,0.3);
        .picture{
          flex-shrink:0;
          height: 100px;
          width: 100px;
          img{
            height: 100%;
            width: 100%;
          }
        }
        .word{
          margin: 10px;
          margin-left: 20px;
          span{
            letter-spacing: 1px;
            font-size: 16px;
            font-weight: 700;
            color: #4d7474;
            a{
              text-decoration: none;
              color: #B8A8DA;
              font-weight: 600;
              transition: 1s;
            }
            a:hover{
              color: #ffb6a3;
            }
          }
        }
      }
    }
  }
}
</style>
