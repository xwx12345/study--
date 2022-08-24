<template>
  <div class="plate">
    <br/> 
    <div class="pc-container">
      <div class="left">
        <h2><center>{{main.title}}</center></h2>
        <h11>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{main.author}}</h11>
        <div class="word">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数据结构想必大家都不会陌生，对于一个成熟的程序员而言，熟悉和掌握数据结构和算法也是基本功之一。数据结构本身其实不过是数据按照特点关系进行存储或者组织的集合，特殊的结构在不同的应用场景中往往会带来不一样的处理效率。</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;常用的数据结构可根据数据访问的特点分为线性结构和非线性结构。线性结构包括常见的链表、栈、队列等，非线性结构包括树、图等。数据结构种类繁多，本文将通过图解的方式对常用的数据结构进行理论上的介绍和讲解，以方便大家掌握常用数据结构的基本知识。</p>
        </div>
        <div class="picture">
          <img :src="main.img" />
        </div>
        <div v-for="item in content_list" :key="item.id" class="content">
          <h7><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.id}}</strong></h7>
          <div class="word">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.text}}</p>
          </div>
          <div class="picture">
            <img :src="item.img_info" />
          </div>
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
    <br/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      main:{
        title:'24张图帮你彻底了解九大常见数据结构',
        author:'发布于：2022年8月24日 作者：嘿嘿',
        img:'..//..//..//..//public//p2_p1.png',
      },
      content_list:[
        {
          id:'1.数组',
          img_info:'..//..//..//..//public//p2_p2.png',
          text:'数组可以说是最基本最常见的数据结构。数组一般用来存储相同类型的数据，可通过数组名和下标进行数据的访问和更新。数组中元素的存储是按照先后顺序进行的，同时在内存中也是按照这个顺序进行连续存放。数组相邻元素之间的内存地址的间隔一般就是数组数据类型的大小。'
        },
        {
          id:'2.链表',
          img_info:'..//..//..//..//public//p2_p3.png',
          text:'链表相较于数组，除了数据域，还增加了指针域用于构建链式的存储数据。链表中每一个节点都包含此节点的数据和指向下一节点地址的指针。由于是通过指针进行下一个数据元素的查找和访问，使得链表的自由度更高。这表现在对节点进行增加和删除时，只需要对上一节点的指针地址进行修改，而无需变动其它的节点。不过事物皆有两极，指针带来高自由度的同时，自然会牺牲数据查找的效率和多余空间的使用。一般常见的是有头有尾的单链表，对指针域进行反向链接，还可以形成双向链表或者循环链表。'
        },
        {
          id:'链表和数组对比',
          img_info:'..//..//..//..//public//p2_p4.png',
          text:'一般常见的是有头有尾的单链表，对指针域进行反向链接，还可以形成双向链表或者循环链表。'
        }],
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
.pc-container{
  display:flex;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg,#e8efff,#F3E8F0,#F4EAEA);
  justify-content:left_top;
  align-items: center;
  .left{
    background: rgba(255,255,255,0.5);
    width: 70%;
    height: 80%;
    border-radius: 20px;
    .word{
      margin: 10px;
      margin-left: 20px;
    }
    .picture{
      flex-shrink:0;
      height: 350px;
      width: 600px;
      position: relative;
      left:175px;
      img{
        height: 100%;
        width: 100%;
      }
    }
  }
  .right{
    width: 30%;
    // background: #ffffff;
    margin: 8px;
    display: flex;
    flex-direction: column;
    position:relative;
    top:-640px;
    right:0px;

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