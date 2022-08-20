<template>
  <div class="container">
    <div class="top">
      <span>待回答</span>
      <el-table
          :data="tableData1"
          class="table"
          style="width: 80%"
          max-height="400">
          <el-table-column
            fixed
            label="序号"
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            width="150">
          </el-table-column>
          <el-table-column
            prop="source"
            label="来源"
            width="200">
          </el-table-column>
          <el-table-column
            prop="stem"
            label="题干"
            width="400">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="题目编号"
            width="180">
            <template slot-scope="scope">
              <span @click="Jump(scope.row.id)" class="button">{{scope.row.id}}</span>
            </template>
          </el-table-column>
        </el-table>
    </div>
    <div class="bottom">
      <span>已回答</span>
      <el-table
          :data="tableData2"
          class="table"
          style="width: 80%"
          max-height="400">
          <el-table-column
            fixed
            label="序号"
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            width="150">
          </el-table-column>
          <el-table-column
            prop="source"
            label="来源"
            width="200">
          </el-table-column>
          <el-table-column
            prop="stem"
            label="题干"
            width="400">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="题目编号"
            width="180">
            <template slot-scope="scope">
              <span @click="Jump(scope.row.id)" class="button">{{scope.row.id}}</span>
            </template>
          </el-table-column>
        </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData1: [
        {
          date: '2016-05-03',
          id: '我乱写',
          source: '《上海》',
          stem:'abababbababababab'
        },
        {
          date: '2016-05-03',
          id: '我才不乱想',
          source: '《上海？》',
          stem:'abababbababababab'
        },
        {
          date: '2016-05-03',
          id: '我乱写',
          source: '上海',
          stem:'abababbababababab'
        },
        {
          date: '2016-05-03',
          id: '我乱写',
          source: '上海',
          stem:'abababbababababab'
         },
         {
           date: '2016-05-03',
           id: '我乱写',
           source: '上海',
           stem:'abababbababababab'
          },
          {
            date: '2016-05-03',
            id: '我乱写',
            source: '上海',
            stem:'abababbababababab'
          },
          {
            date: '2016-05-03',
            id: '我乱写',
            source: '上海',
            stem:'abababbababababab'
          }],
      tableData2: [
        {
          date: '2016-05-03',
          id: '我乱写',
          source: '上海',
          stem:'abababbababababab'
        },
        {
          date: '2016-05-03',
          id: '我乱写',
          source: '上海',
          stem:'abababbababababab'
        },
        {
          date: '2016-05-03',
          id: '我乱写',
          source: '上海',
          stem:'abababbababababab'
        },
        {
          date: '2016-05-03',
          id: '我乱写',
          source: '上海',
          stem:'abababbababababab'
         },
         {
           date: '2016-05-03',
           id: '我乱写',
           source: '上海',
           stem:'abababbababababab'
          },
          {
            date: '2016-05-03',
            id: '我乱写',
            source: '上海',
            stem:'abababbababababab'
          },
          {
            date: '2016-05-03',
            id: '我乱写',
            source: '上海',
            stem:'abababbababababab'
          }]
    }
  },
  methods: {
    Jump(data){
      console.log(data)
    }
  },
  mounted () {
  },
  created () {

  }
}
</script>

<style scoped lang="scss">
.container{
  .top{
    margin: 10px;
    span{
      display: inline-block;
      font-size: 20px;
      letter-spacing: 1px;
      font-weight: 600;
      padding: 12px;
      margin: 10px;
      background:#ffaa92;
      border-radius: 10px;
      color: #ffffff;
    }
    .button{
      font-size: 16px;
      padding: 10px;
      margin:0;
    }
    .button:hover{
      cursor: pointer;
    }
  }
  .bottom{
    margin: 10px;
    span{
      display: inline-block;
      font-size: 20px;
      letter-spacing: 1px;
      font-weight: 600;
      padding: 12px;
      margin: 10px;
      background:#aaaaff;
      border-radius: 10px;
      color: #ffffff;
    }
    .button{
      font-size: 16px;
      padding: 10px;
      margin:0;
    }
    .button:hover{
      cursor: pointer;
    }
  }
}
</style>
