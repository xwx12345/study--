<template>
    <div class="el-container">
      <el-header>
        <div class="container">
          <el-button size="mini" round icon="el-icon-reading">书籍</el-button>
          <el-button size="mini" round icon="el-icon-s-cooperation">课程</el-button>
          <el-button size="mini" round icon="el-icon-edit">题目</el-button>
        </div>
        <div class="search">
          <input type="text" placeholder=" 搜索关键词" v-model="searchContent" />
            <button @click="search()">
              <i class="el-icon-search"></i>
            </button>
          </el-input>
        </div>
      </el-header>
      <el-main><el-empty description="暂无数据"></el-empty></el-main>
    </div>
    
</template>

<script>
import Header from '@/components/header.vue';
export default {
  data() {
      return {
      };
  },
  methods: {},
  mounted() {
  },
  created() {
  },
  components: { Header }
}
</script>

<style scoped lang="scss">
.el-container {
  display: flex;
  flex-direction: column;
  height: auto;

  .el-header {
    background-color: #e0e8ff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .container {
      margin: auto 0;

      .el-button {
        margin: auto 10px;
        font-size: smaller;
        color: #000;
      }
    }

    .search {
      margin: auto 0;

      input {
        background-color: #ffffff;
        color: #676767;
        border: 1px solid #ffffff;
        border-radius: 4px;
        height: 40px;
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
  }

  .el-main {
    width: 100%;
    height: 500px;
    background: rgba(0, 0, 0, 0.2);
    
    .el-empty {
      margin: 75px 0;
    }

  }
  
}
</style>