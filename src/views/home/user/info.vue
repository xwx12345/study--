<template>
  <div class="pc-container">

    <img src="..//..//..//..//public//userphoto.png" width="200px" height="200px">
    <ul class="information">
       <li> 
        <i class="el-icon-user-solid"></i>
        用户名：{{userinfo.username}}
      </li>
      <li>
        <i class="el-icon-office-building"></i>
        专业：{{userinfo.major}}</li>
      <li>表单项：{{userinfo.item}}</li>
    </ul>
     
  </div>
  
  
</template>

<script>
export default {
  data () {
    return {
      userinfo:{
        username:'我是用户名',
        major:'我是专业',
        item:'我是表单项'
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