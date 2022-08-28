<template>
<div>
<el-menu :default-active="activeIndex" class="major" mode="horizontal">
  <el-menu-item @click="handleAll">全部学科</el-menu-item>
  <div class="left">
    <i v-if="currentTabIndex" class="el-icon-caret-left" @click="menuLeft">
    </i>
  </div>
  <el-menu-item v-for="(item, index) in menuList" v-show="index >= currentTabIndex && currentTabIndex + 11 > index" :key="item.major_id" @click="handleClick(item.major_name)">
    <template #title>
      <span>{{item.major_name}}</span>
    </template>
  </el-menu-item>
  <div class="right">
    <i v-if="major_count - currentTabIndex > 11" class="el-icon-caret-right" @click="menuRight">
    </i>
  </div>
</el-menu>
<div class="line"></div>
</div>
</template>

<script>
import { getMajorInfo } from '@/api/query';
export default {
  data() {
    return {
      activeIndex: '1',
      major_count: 0,
      currentTabIndex: 0,
      menuList: [
        // {
        //   major_id: 1,
        //   major_name: '软件工程',
        // },
        // {
        //   major_id: 2,
        //   major_name: '车辆工程',
        // },
        // {
        //   major_id: 3,
        //   major_name: '交通工程',
        // },
        // {
        //   major_id: 4,
        //   major_name: '材料工程',
        // },
        // {
        //   major_id: 5,
        //   major_name: '土木工程',
        // },
        // {
        //   major_id: 6,
        //   major_name: '测绘工程',
        // },
        // {
        //   major_id: 7,
        //   major_name: '数学',
        // },
        // {
        //   major_id: 8,
        //   major_name: '物理',
        // },
        // {
        //   major_id: 9,
        //   major_name: '生物医药',
        // },
        // {
        //   major_id: 10,
        //   major_name: '金融',
        // },
        // {
        //   major_id: 11,
        //   major_name: '法学',
        // },
        // {
        //   major_id: 12,
        //   major_name: '其他学科',
        // }
      ]
    };
  },
  methods: {
    handleAll() {
      this.$emit('majorFilter', '所有专业');
    },
    handleClick(data) {
      this.$emit('majorFilter', data);
    },
    menuLeft() {
      this.currentTabIndex--;
    },
    menuRight() {
      this.currentTabIndex++;
    }
  },
  created() {
    getMajorInfo().then((r) => {
      r.data.nameList.forEach((major) => {
        if(major !== '所有专业') {
          this.major_count = this.major_count + 1;
          this.menuList.push({
            major_name: major
          })
        }
      });
    })
  }
}
</script>

<style scoped lang="scss">
.major {
  display: flex;
  justify-content: center;
  
  .left {
    // background-color: aquamarine;
    color: #aaaaff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }

  .right{
    // background-color: aquamarine;
    color: #aaaaff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
}
</style>