<template>
  <div class="pc-container">
    <img src="..//..//..//..//public//userphoto.png" width="200px" height="200px">
    
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <span>{{userinfo.username}}</span>
      </el-form-item>
      <el-form-item label="电话">
        <span>{{userinfo.tel}}</span>
      </el-form-item>
      <el-form-item label="学校">
        <el-input v-model="userinfo.school" ></el-input>
      </el-form-item>
      <el-form-item label="专业">
        <el-input v-model="userinfo.major" ></el-input> 
      </el-form-item>
      <el-form-item>  
        <el-button type="primary" @click="">保存</el-button>  
      </el-form-item>
    </el-form>
  
    
    
     
  </div>
  
  
</template>

<script>
export default {
  data () {
    return {
      userinfo:{
        username:'我是用户名',
        major:'我是专业',
        tel:'我是电话',
        school:'我是学校'
        
      },
      form:{
        username:'',
        tel:'',
        school:'',
        major:''
      },
      reset_sch:false,
      reset_maj:false,

      
      
    }
  },
  methods: {
   

  },
  mounted () {
  },
  created () {

  }
}
</script>



<style scoped lang="scss">
img{
  border-radius:50%;
  margin:50px;
}
.pc-container{
  display:flex;
  width: 100%;
  height: 810px;
  top: 90px;
  left: 419px;
  background: rgba(0, 0, 0, 0.2);
  /* 阴影效果 */
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  
  .form{
    display:absolute;
    top:30px;
  }
  
}
</style>