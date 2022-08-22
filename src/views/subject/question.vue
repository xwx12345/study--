<template>
  <div class="container">
    <div class="top">
      <span>待回答</span>
      <el-table
          :data="unfinishedList"
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
            prop="post_time"
            label="日期"
            width="150">
          </el-table-column>
          <el-table-column
            prop="question_stem"
            label="题干"
            width="400">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="题目编号"
            width="180">
            <template slot-scope="scope">
              <span @click="Jump(scope.row.question_id)" class="button">{{scope.row.question_id}}</span>
            </template>
          </el-table-column>
        </el-table>
    </div>
    <div class="bottom">
      <span>已回答</span>
      <el-table
          :data="finishedList"
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
            prop="post_time"
            label="时间"
            width="150">
          </el-table-column>
          <el-table-column
            prop="question_stem"
            label="题干"
            width="400">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="题目编号"
            width="180">
            <template slot-scope="scope">
              <span @click="Jump(scope.row.question_id)" class="button">{{scope.row.question_id}}</span>
            </template>
          </el-table-column>
        </el-table>
    </div>
  </div>
</template>

<script>
import {getExpertQuestionList,getQuestion} from '../../api/subject.js'
export default {
  data () {
    return {
      unfinishedList:[],
      finishedList:[]
    }
  },
  methods: {
    Jump(data){
      this.$router.push({
        path: "/subject/answer",
        query: { id: data }
      })
    }
  },
  mounted () {
  },
  created () {
    getExpertQuestionList(this.$store.getters.user.user_id).then((r)=>{
        if(r.header.code === -1){
          this.$message.error(r.header.message)
          return
        }
        else{
          var result=r.data
          var finished=result.finishedIDList
          var unfinished=result.unfinishedIDList
          for(var i=0;i<finished.length;i++){
            var j=0;
            getQuestion(parseInt(finished[i])).then((r1)=>{
              if(r1.header.code === 0){
                this.finishedList.push(r1.data)
                j++;
              }
              else{
                this.$message.error(r1.header.message)
                return
              }
            })
          }
          for(var i=0;i<unfinished.length;i++){
            var j=0;
            getQuestion(parseInt(unfinished[i])).then((r2)=>{
              if(r2.header.code === 0){
                this.unfinishedList.push(r2.data)
                j++;
              }
              else{
                this.$message.error(r2.header.message)
                return
              }
            })
          }
        }
      }).catch((err)=>{
        console.log(err)
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
