<template>
  <div class="container">
    <div class="modular_title">
      <span style="font-size: 18px;color: #333333;">我的测试模块</span>
      <div class="main_nav">
        <ul>
          <li
           v-for="title in titles"
           :key="title.id"
           @mouseover="handleSelect(title)"
           :class="{'selected':title.id === activeIndex}">
            {{ title.name }}
          </li>
        </ul>
      </div>
      <router-link to="/" style="color: #777777;">更多 ></router-link>
    </div>
    <div class="cards">
      <div class="card">
        <div class="big_card">
          <img :src=section.img_info>
          <span class="main">{{ section.main_info }}</span>
          <br />
          <span class="sub">{{ section.sub_info }}</span>
          <div class="button">点击查看</div>
        </div>
        <div class="small_cards">
          <el-row>
            <el-col :span="8" v-for="item in item_selected" :key="item.id" @click="jump" class="card_hover">
                <div style="margin: 1px; background: white;">
                  <div style="padding: 24px;">
                    <span>{{ item.main_info }}</span>
                    <br />
                    <span style="font-size: 12px; color:#676767">{{ item.sub_info }}</span>
                  </div>
                  <div class="img_box">
                    <img :src=item.img_info class="image">
                  </div>
                </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="dot_nav">
        <ul>
          <li
            v-for="title in titles"
            :key="title.id"
            @click="changeValue(title)"
            :class="{'selected':title.id === activeIndex}">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      titles: [
        { name: '界面1', id: '1' },
        { name: '界面2', id: '2' },
        { name: '界面3', id: '3' },
        { name: '界面4', id: '4' },
        { name: '界面5', id: '5' },
        { name: '界面6', id: '6' }
      ],
      item_selected: [],
      section: {
        main_info: '我是主文本',
        sub_info: '我是副文本',
        img_info: '..//..//..//..//public//test2.png'
      },
      items: [
        [
          { id: 1,
            main_info: '主文本1',
            sub_info: '副文本1',
            img_info: '..//..//..//..//public//feedback.png'
          },
          { id: 2,
            main_info: '主文本a',
            sub_info: '副文本a',
            img_info: '..//..//..//..//public//poster.png'
            },
          { id: 3, main_info: '主文本1', sub_info: '副文本1' },
          { id: 4, main_info: '主文本1', sub_info: '副文本1' },
          { id: 5, main_info: '主文本1', sub_info: '副文本1' },
          { id: 6, main_info: '主文本1', sub_info: '副文本1' }
        ],
        [
          { id: 1,
            main_info: '主文本1',
            sub_info: '副文本1',
            img_info: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
          },
          {
            id: 2,
            main_info: '主文本2',
            sub_info: '副文本2',
            img_info: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
          },
          {
            id: 3,
            main_info: '主文本3',
            sub_info: '副文本3',
            img_info: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
          },
          {
            id: 4,
            main_info: '主文本4',
            sub_info: '副文本4',
            img_info: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
          },
          {
            id: 5,
            main_info: '主文本5',
            sub_info: '副文本5',
            img_info: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
          },
          {
            id: 6,
            main_info: '主文本6',
            sub_info: '副文本6',
            img_info: ''
          }
        ]]
    }
  },
  methods: {
    jump () {
      console.log('123')
    },
    changeValue (title) {
      this.activeIndex = title.id
      this.item_selected = this.items[this.activeIndex - '1']
    },
    handleSelect (title) {
      this.activeIndex = title.id
      this.item_selected = this.items[this.activeIndex - '1']
    }

  },
  mounted () {
    this.item_selected = this.items[0]
  },
  created () {

  }
}
</script>

<style scoped lang="scss">
  .container{
    width: calc(100vw - 80px);
    margin: 0 auto;
    background: linear-gradient(120deg,#e8efff,#F3E8F0,#F4EAEA);
    .modular_title{
      display: flex;
      justify-content: space-between;
      align-items:center;
    }
  }
  .main_nav{
    display: flex;
    justify-content: flex-end;
    ul{
      display: flex;
      li{
        display: inline-block;
        text-align: center;
        line-height: 40px;
        margin: 0;
        padding: 0;
        height: 40px;
        width: 100px;
        background-color: #ffffff;
        list-style: none;
        transition: 0.2s;
        transition-delay: 0.1;
      }
      .selected{
        width: 120px;
        border-radius: 2px;
        background:linear-gradient(150deg,#B8B4DF,#DBB2AE);
        box-shadow: 10px 10px rgba(233, 155, 116, 0.5);
        color: #ffffff;
        transform: translate(2px,0) rotate(2deg);
        transition-delay: 0.1;
        animation: float 2s ease-in-out infinite;
      }
    }
  }
  @keyframes float {
    0%{
      transform: translateY(0px);
    }
    50%{
      transform: translateY(-5px);
    }
    100%{
      transform: translateY(0px);
    }
  }
  .cards{
    display: flex;
    flex-direction: column;
    .card{
      display: flex;
      justify-content: center;
      .big_card{
        position: relative;
        width: 25%;
        transition: 0.2s;
        transition-delay: 0.1;
        img{
          width: 100%;
          height: 100%;
        }
        .main{
          top:20px;
          font-size: 20px;
          font-weight: 700;
          line-height: 50px;
          letter-spacing: 2px;
          width: 120px;
          height: 50px;
          border-bottom: 2px solid #ffffff;
        }
        .sub{
          top:80px;
          font-size: 15px;
          line-height: 50px;
          letter-spacing: 3px;
          width: 100px;
          height: 50px;
        }
        span{
          left:25px;
          position: absolute;
          display: inline-block;
          text-align: center;
          color: #ffffff;
        }
        .button{
          position: absolute;
          bottom: 40px;
          left:50%;
          margin-left: -60px;
          background-color: rgba(0,0,0,0.1);
          color: #ffffff;
          border: 1px solid #ffffff;
          text-align: center;
          line-height: 50px;
          font-size: 18px;
          letter-spacing: 2px;
          width: 120px;
          height: 50px;

          transition: 0.2s;
          transition-delay: 0.1;
        }
        .button:hover{
          background-color: #B8B4DF;
        }
      }
      .big_card:hover{
        transform: translate(0,-3px);
        box-shadow:0 10px 5px rgba(0,0,0,0.1);
      }
      .small_cards{
        width:75%;
        .img_box{
          height: 150px;
          width: 200px;
          margin:0px auto;
          padding:0 0 15px 0;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .card_hover{
          transition: 0.2s;
        }
        .card_hover:hover{
          transform: translate(0,-2px);
          color:#F4C1BA;
          box-shadow: 0 10px 5px rgba(0,0,0,0.15);
        }
      }
    }
    .dot_nav{
      display: flex;
      justify-content: center;
      ul{
        display: flex;
        li{
          display: inline-block;
          margin: 5px;
          padding: 0;
          height: 8px;
          width: 8px;
          background-color: #ffffff;
          list-style: none;
          border: 1px solid #ffffff;
          border-radius: 5px;
          transition: 0.2s;
          transition-delay: 0.1;
        }
        .selected{
          border: 1px solid #F4C1BA;
          background-color: #F4C1BA;
        }
        li:hover{
           border: 1px solid #F4C1BA;
           transition-delay: 0.1;
        }
      }
    }
  }
</style>
