<template>
  <div class="pc-container">
    <ul class="information">
      <li >用户名：{{userinfo.username}}</li>
      <li>专业：{{userinfo.major}}</li>
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
.pc-container{
  display:flex;
  width: 909px;
  height: 810px;
  top: 90px;
  left: 419px;
  background: rgba(0, 0, 0, 0.2);
  /* 阴影效果 */
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  .information{
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