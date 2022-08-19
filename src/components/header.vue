<template>
  <div class="container">
    <div class="logo">
      <img src="../../public/logo.png" />
    </div>
    <div class="search">
      <input type="text" placeholder=" 搜索关键词" v-model="searchContent" />
      <button @click="search()">
        <i class="el-icon-search"></i>
      </button>
      </el-input>
    </div>
    <div class="jump">
      <button @click="gotologin()">
        登录
      </button>
      <button @click="gotouser()" v-show="usertype === '1'">
        个人中心
      </button>
      <button @click="gotosubject()" v-show="usertype === '2'">
        专家中心
      </button>
      <button @click="gotoadmin()" v-show="usertype === '3'">
        管理员中心
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      // 这个实际上要从store里面取数据,现在没考虑store所以先写死
      usertype: "1",
      searchContent:""
    };
  },
  methods: {
    search() {
      if (this.searchContent != "") {
        this.$router.push({
          name: "search",
          query: { searchtext: this.searchContent },
        });
        console.log(this.searchContent);
      }
    },
    gotologin() {
      this.$router.push("/login");
    },
    gotouser() {
      this.$router.push("/usercenter");
    },
    gotosubject() {
      this.$router.push("/subject");
    },
    gotoadmin() {
      // this.$router.push('/admin')
    },


  },
  mounted() {

  },
  destroyed() {

  },
  created() {

  },
};
</script>

<style scoped lang="scss">
.container {
  background: #f4f7ff;
  display: flex;
  justify-content: space-between;

  .logo {
    margin: auto 10px;
    padding: 0;
    width: 90px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .search {
    margin: auto 0;

    input {
      background-color: #ffffff;
      color: #676767;
      border: 1px solid #ffffff;
      border-radius: 4px;
      height: 35px;
      width: 300px;
      font-size: 14px;
      margin: 6px 0;
      letter-spacing: 1px;
    }

    button {
      outline: none;
      border: none;
      //width: 20%;
      height: 37px;
      width: 37px;
      background: #ffbc7f;
      border-radius: 100%;
      font-size: 12px;
      letter-spacing: 2px;
      color: #fff;
      transition: 1s;
    }

    button:hover {
      background: #f4b8a8;
    }
  }

  .jump {
    margin: auto 6px;

    button {
      outline: none;
      border: none;
      padding: 10px;
      margin: 2px;
      background: #aaaaff;
      border-radius: 5px;
      font-size: 13px;
      letter-spacing: 2px;
      color: #fff;
      transition: 1s;
    }

    button:hover {
      background: #aaccff;
    }
  }
}
</style>
