<template>
  <div class="pc-container">

    <img src="..//..//..//..//public//userphoto.png" width="200px" height="200px">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username" :disable="true" value={{userinfo.username}}>{{userinfo.username}}</el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.tel" :disable="true" >{{userinfo.tel}}</el-input>
      </el-form-item>
      <el-form-item label="学校">
        <el-input v-model="form.school" >{{userinfo.school}}</el-input>
      </el-form-item>
      <el-form-item label="专业">
        <el-input v-model="form.major" >{{userinfo.major}}</el-input>
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
      }
       
      
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
  padding:50px;
}
.pc-container{
  display:flex;
  width: 1070px;
  height: 810px;
  top: 90px;
  left: 419px;
  background: rgba(0, 0, 0, 0.2);
  /* 阴影效果 */
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  .information{
    padding:50px;
    list-style-type:none;
    position: flex;
    color: rgb(255, 255, 255);
    
    font-size:20px;
    font-weight:400;
    line-height:53px;
    letter-spacing:0px;
    text-align:left;
 
  }
}
</style>