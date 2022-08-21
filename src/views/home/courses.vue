<template>
<el-container>
  <left></left>
  <el-main class="pc-container">
    <div class="o-header"></div>
    <div class="courses">
      <div class="cinfo">
        <el-row :gutter="24" class="box">
          <el-col
            :lg="8"
            :xs="24"
            v-for="(item, index) in CoursesList"
            :key="item.cname"
          >
            <course
              :img_url="item.img_url"
              :cname="item.cname"
            ></course>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="o-footer"></div>
  </el-main>
</el-container>
</template>

<script>
import course from "../../components/course.vue";
import left from "../../components/left.vue"
export default {
  components: {
    course,
    left,
  },
  data() {
    return {
      content: "1",
      CoursesList: [
        {
          cname: "乌鸦坐飞机",
          img_url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F-Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F35a85edf8db1cb1312bb31d7d154564e93584b27.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663562313&t=79b4eef8d2b9d16d5d6f3a07c006629c",
        },
        {
          cname: "脑袋砸核桃",
          img_url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cailicai.com%2Fuploads%2Fallimg%2F200921%2F121K15941_0.jpeg&refer=http%3A%2F%2Fwww.cailicai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663563550&t=bf324f2a6169a0c36c333816bf6f496d",
        },
        {
          cname: "黑虎掠过秃鹰",
          img_url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cailicai.com%2Fuploads%2Fallimg%2F200921%2F121K1Fb_0.jpeg&refer=http%3A%2F%2Fwww.cailicai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663563701&t=ec2fdd488acd31270617560a8ed58120",
        },
        {
          cname: "佛朗明哥舞步",
          img_url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.yxrb.net%2Fuploadfile%2F2019%2F1021%2F20191021052013695.jpg&refer=http%3A%2F%2Fnews.yxrb.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663563815&t=e1d968425444b9b8f3f922ed06688ba7",
        },
        {
          cname: "高等数学",
          img_url: "https://s3.bmp.ovh/imgs/2022/08/17/a45d18cbf6e41773.jpeg",
        },
      ],
    };
  },
  methods: {},
  mounted() {},
  watch: {
    $route(to, from) {
      if (to.query.id != from.query.id) {
        this.id = to.query.id;
        this.init();
      }
    },
  },
  created() {
    this.content = this.$route.query.searchtext;
  },
};
</script>

<style scoped lang="scss">
.pc-container {
  .o-header {
    height: 2px;
  }
  .courses {
    width: 99%;
    // padding: 20px;
    margin: 0 auto;
    background: rgb(238, 237, 246);
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    .cinfo {
      // background: #000;
      .box {
        // background: #ffaa7f;
        // width: 100%;
      }
    }
  }
  .o-footer {
    height: 2px;
  }
}
</style>
