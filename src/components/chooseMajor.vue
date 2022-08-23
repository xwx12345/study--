<template>
<div>
<el-menu :default-active="activeIndex" class="major" mode="horizontal" @select="handleSelect">
  <el-menu-item :index="0">全部学科</el-menu-item>
  <el-menu-item :index="item.major_id" v-for="item in menuList" :key="item.major_id">
    <template #title>
      <span>{{item.major_name}}</span>
    </template>
  </el-menu-item>
</el-menu>
<div class="line"></div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        menuList: [
          {
            major_id: 1,
            major_name: '软件工程',
          },
          {
            major_id: 2,
            major_name: '车辆工程',
          },
          {
            major_id: 3,
            major_name: '交通工程',
          },
          {
            major_id: 4,
            major_name: '材料工程',
          },
          {
            major_id: 5,
            major_name: '土木工程',
          },
          {
            major_id: 6,
            major_name: '测绘工程',
          },
          {
            major_id: 7,
            major_name: '数学',
          },
          {
            major_id: 8,
            major_name: '物理',
          },
          {
            major_id: 9,
            major_name: '生物医药',
          },
          {
            major_id: 10,
            major_name: '金融',
          },
          {
            major_id: 11,
            major_name: '法学',
          },
          {
            major_id: 12,
            major_name: '其他学科',
          }
        ]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.major {
  display: flex;
  justify-content: center;
}
</style>