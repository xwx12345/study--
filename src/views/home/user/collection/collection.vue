<template>
<div>
  <div class="container">
    <div class="search">
      <input type="text" placeholder=" 搜索关键词" v-model="searchContent" />
      <button @click="search()">
        <i class="el-icon-search"></i>
      </button>
      </el-input>
    </div>
  </div>
  <el-table
    ref="filterTable"
    :data="tableData"
    style="width: 100%"
    max-height="460">
    <el-table-column
      fixed
      prop="tag"
      label="标签"
      width="75"
      :filters="[{ text: '书籍', value: '书籍' }, { text: '课程', value: '课程' }, { text: '题目', value: '题目' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '书籍' ? 'primary' : (scope.row.tag === '课程' ? 'success' : 'warning')"
          disable-transitions>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      prop="title"
      label="收藏内容"
      width="1200">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleClick(scope.$index, scope.row)">查看</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import Header from '@/components/header.vue';
export default {
    methods: {
      handleClick(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      filterTag(value, row) {
        return row.tag === value;
      }
    },

    data() {
      return {
        tableData: [{
          tag: '书籍',
          title: '我太难了'
        }, {
          tag: '课程',
          title: '明明我更难'
        }, {
          tag: '题目',
          title: '我才是最难的'
        }, {
          tag: '题目',
          title: '天黑了该睡觉了，晚安唔西迪西，晚安玛卡巴卡，晚安依古比古，晚安小点点，晚安叮叮车，晚安飞飞鱼，晚安小朋友们。'
        }, {
          tag: '题目',
          title: 'Hi 小蜗，Hi 派大星，Hi 章鱼哥，Hi 珊迪，Hi 泡芙老师，Hi 蟹老板，Hi 珍妮。我准备好了，我准备好了，我准备好了，我准备好了，我准备好了，我准备好了，我准备好了，……'
        }, {
          tag: '课程',
          title: '乌鸦坐飞机'
        }, {
          tag: '课程',
          title: '脑袋砸核桃'
        }, {
          tag: '课程',
          title: '马尾拍苍蝇'
        }, {
          tag: '书籍',
          title: '花园宝宝'
        }, {
          tag: '书籍',
          title: '海绵宝宝'
        }, {
          tag: '书籍',
          title: '天线宝宝'
        }]
      }
    }
  }
</script>

<style scoped lang="scss">
.container {
  background-color: #e4e0ff;
  display: flex;
  justify-content: flex-end;

  .search {
    margin: auto 10px;
    
    input {
      background-color: #ffffff;
      color: #676767;
      border: 1px solid #ffffff;
      border-radius: 4px;
      height: 35px;
      width: 300px;
      font-size: 14px;
      margin: 9px 0;
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
</style>