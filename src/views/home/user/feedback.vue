<template>
  <div class="pc-container">
    <div class="content">
      <form action="/actions.vue">
      <label for="feedback" style="font-size:20px">反馈问题：</label>
      <textarea id="feedback" name="fback" placeholder="您的反馈..." style="height:397px"></textarea>
      <input type="submit" value="Submit">
    </form>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {

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
textarea{
  position:flex;
  width:100%;
  height:397px;
  margin:8px 0;
  background: rgb(196, 196, 196);
  padding:12px 20px;
  box-sizing: border-box;
  border:2px solid white;
  border-radius:4px;
  top:100px;
  left:199px;
}

input[type=submit]{
  width:100%;
  background-color:black;
  color:white;
  padding:14px 20px;
  border:none;
  border-radius:4px;
  cursor:pointer;
}
input[type=submit]:hover{
  background-color:#45a049;
}
.pc-container{
  display:flex;
  width: 909px;
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