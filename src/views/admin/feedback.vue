<template>
  <div class="container">
    <div class="top">
      <span>未处理反馈</span>
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
    <div class="bottom">
      <span>已处理反馈</span>
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
import {getFeedbackList , getFeedback,changeFeedback} from '@/api/admin'
export default {
  data () {
    return {
      tableData1: [],
      tableData2: []
    }
  },
  methods: {
    check(data){
      console.log(data)
      changeFeedback(data).then(r=>{
        console.log(r)
        if(r.code===0){
          this.$message('已成功更改反馈状态，数据更新可能存在延迟！请后续进行手动刷新')
        }
        else{
          this.$message.error(r.message)
        }
      })
    }
  },
  mounted () {
  },
  created () {
    getFeedbackList().then((r)=>{
      console.log(r.data)
      if(r.header.code===0){
        // console.log(r.data.unfinishedList)
        // console.log(r.data.finishedList)
        r.data.unfinishedList.forEach((item) => {
          if (item) {
            getFeedback(item).then((br) => {
              if(br.header.code===0){
                console.log(br.data)
                this.tableData1.push({
                  date:br.data.time,
                  id:br.data.feedback_id,
                  content:br.data.content
                })
              }
            })
          }
        })
        r.data.finishedList.forEach((item) => {
          if (item) {
            getFeedback(item).then((br) => {
              if(br.header.code===0){
                console.log(br.data)
                this.tableData2.push({
                  date:br.data.time,
                  id:br.data.feedback_id,
                  content:br.data.content
                })
              }
            })
          }
        })
      }
    })
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
