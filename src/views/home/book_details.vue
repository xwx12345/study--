<template>
  <div class="pc-container">
    <div class="detail">
      
    </div>
  </div>
</template>

<script>
import book from "../../components/book.vue";
export default {
  componets:{
    book,
  },
  data () {
    return {
       BooksList: 
        {
          isbn: "001",
          bname: "高等数学",
          author: "鼠来宝",
          publisher: "同济大学出版社",
          pub_year: 2001,
          img_url: "https://s3.bmp.ovh/imgs/2022/08/17/a45d18cbf6e41773.jpeg",
        },
      
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
     background: blue;
  .detail{
    display:flex;
    width:50%;
    height:90%;
    background-color: aqua;
  }
}
</style>