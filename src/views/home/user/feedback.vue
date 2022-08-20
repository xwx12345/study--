<template>
  <div class="pc-container">
    <div class="content">
      <p><i class="el-icon-edit"></i>反馈问题：</p>
      <el-input 
        placeholder="请输入您的反馈..."
        v-model="input" 
        type="textarea"
        :rows="3">
        </el-input>
       
      <el-button @click="success">submit</el-button>
   
    
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      input:'',
      
      
    }
  },
  methods: {
    success()
      {
        this.$message('反馈提交成功');
       
      }
  },
  mounted () {
  },
  created () {

  }
}
</script>

<style scoped lang="scss">

el-button{
  width:100%;
  background-color:black;
  color:white;
  padding:14px 20px;
  border:none;
  border-radius:4px;
  cursor:pointer;
}

.pc-container{
  display:flex;
  width: 100%px;
  height: 810px;
  top: 90px;
  left: 419px;
  background: rgba(0, 0, 0, 0.2);
  .content{
    position: relative;
    top:50px;
    left:50px;
  }
}
</style>