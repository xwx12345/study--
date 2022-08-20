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
            type="index">
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            width="150">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="province"
            label="省份"
            width="120">
          </el-table-column>
          <el-table-column
            prop="city"
            label="市区"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="300">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <el-button
                @click="Jump(scope.$index, tableData1)"
                icon="el-icon-search"
                circle
                size="big">
              </el-button>
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
            type="index">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="province"
            label="省份"
            width="120">
          </el-table-column>
          <el-table-column
            prop="city"
            label="市区"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="300">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="题目编号"
            width="180">
            <template slot-scope="scope">
              <span @click="Jump(scope.row.date)" class="button">{{scope.row.date}}</span>
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
          name: '我乱写',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
         },
         {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
          },
          {
            date: '2016-05-06',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-07',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }],
      tableData2: [
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-08',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-06',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
           },
           {
            date: '2016-05-07',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
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
