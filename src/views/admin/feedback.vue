<template>
  <div class="container">
    <div class="top">
      <span>反馈列表</span>
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
            prop="id"
            label="反馈编号"
            width="150">
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            width="150">
          </el-table-column>
          <el-table-column
            prop="content"
            label="反馈内容"
            width="400">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="180">
            <template slot-scope="scope">
              <span @click="check(scope.row.id)" class="button">确认</span>
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
          id: '01',
          content:'你有问题你有问题！'
        },
        {
          date: '2016-05-03',
          id: '02',
          content:'你才有问题你才有问题！'
        },
        {
          date: '2016-05-03',
          id: '我乱写',
          content:'你才有问题哼你才有问题！'
        },
        {
          date: '2016-05-03',
          id: '我乱写',
          content:'全是问题是问题！'
         },
         {
           date: '2016-05-03',
           id: '我乱写',
           content:'全是问题不是问题！'
          },
          {
            date: '2016-05-03',
            id: '我乱写',
            content:'全是问题哼哼！'
          },
          {
            date: '2016-05-03',
            id: '我乱写',
            content:'全是问题阿八八八八八！'
          }]
    }
  },
  methods: {
    check(data){
      console.log(data)
      location.reload()
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
