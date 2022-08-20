<template>
  <div class="container">
    <div class="left">
      <div class="left_top">
        <div class="img">
          <img :src="main.img"/>
        </div>
        <div class="info">
          <span>welcome</span>
          <h1>{{main.title}}</h1>
          <span>
            {{main.info}}
            <router-link to="/">..More</router-link>
          </span>
        </div>
      </div>
      <div class="left_bottom">
        <h1>{{sub.title}}</h1>
        <span>
        {{sub.info}}
        <router-link to="/">..More</router-link>
        </span>
      </div>
    </div>
    <div class="right">
      <div class="right_top">
        <span>我也是标题</span>
      </div>
      <div class="right_bottom">
        <div v-for="item in info_list" :key="item.id" class="card">
          <div class="picture">
            <img :src="item.img_info" />
          </div>
          <span>
          {{item.text}}<br />
          <router-link to="/">..More</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      main:{
        img:'..//..//..//..//public//feedback.png',
        title:'title',
        info:'随便说点啥随便说点叭叭叭叭叭叭baba啊八八八八阿布阿八八八八八八八阿八八八八八八八吧嗷嗷叭叭叭叭叭叭吧'
      },
      sub:{
        title:'标题',
        info:'1231414我是乱写的后面随便按阿达v八点半v骄傲v啊是不是卡港口局啊v的vJava，的可靠的v阿达v绿卡女啊，的v啊的飞机奥巴马是v那'
      },
      info_list:[
        {
          id:1,
          img_info:'..//..//..//..//public//test1.png',
          text:'我是1'
        },
        {
          id:2,
          img_info:'..//..//..//..//public//test2.png',
          text:'我是2'
        },
        {
          id:3,
          img_info:'',
          text:'我是3'
        },
        {
          id:4,
          img_info:'',
          text:'我是4'
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
        padding-right: 30px;
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
      }
      span{
        font-size: 16px;
        letter-spacing: 1px;
        color: #4d7474;
        a{
          text-decoration: none;
          color: #B8A8DA;
          font-weight: 600;
        }
      }
    }
  }
  .right{
    width: 30%;
    // background: #ffffff;
    margin: 8px;
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
      // background: #ffffff;
      .card{
        background: #ffffff;
        margin:15px;
        padding: 10px;
        display: flex;
        border-radius: 10px;
        box-shadow:0px 0px 10px rgba(170,170,255,0.3);
        .picture{
          height: 100px;
          width: 100px;
          img{
            height: 100%;
            width: 100%;
          }
        }
        span{
          margin: 10px;
          margin-left: 20px;
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
</style>
