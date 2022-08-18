<template>
  <div class="container">
      <img src="https://s3.bmp.ovh/imgs/2022/08/17/a45d18cbf6e41773.jpeg" class="cover"/>
    <div class="content">
        <p>书名:{{bname}}</p>
        <p>作者:{{author}}</p>
        <p>出版社:{{publisher}}</p>
        <p>出版年份:{{publish_year}}</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            bname:'高等数学很难很难版',
            author:'这是一个很长的作者',
            publisher:'SOS教育出版社',
            publish_year:2077
        }
    },
    mounted(){},
    created(){}
};
</script>

<style scoped lang="scss">
.container {
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  width: 352px;
  height: 270px;
  top: -6px;
  left: -1px;
  border-radius: 15px;
  .cover {
    margin: auto 10px;
    padding: 0;
    display: flex;
    width: 160px;
    height: 240px;
    top: 9px;
    left: 15px;
    object-fit: cover;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  }
  .content{
    text-align: left;
    margin: auto;
  }
}
</style>