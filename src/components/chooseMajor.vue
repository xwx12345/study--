<template>
<div>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">全部学科</el-menu-item>
  <el-submenu index="2">
    <template slot="title">理学</template>
    <el-menu-item index="2-1">数学</el-menu-item>
    <el-menu-item index="2-2">物理</el-menu-item>
    <el-menu-item index="2-3">化学</el-menu-item>
    <el-menu-item index="2-4">生物</el-menu-item>
  </el-submenu>
  <el-submenu index="3">
    <template slot="title">工学</template>
    <el-menu-item index="3-1">机械工程</el-menu-item>
    <el-menu-item index="3-2">土木工程</el-menu-item>
    <el-menu-item index="3-3">材料工程</el-menu-item>
    <el-menu-item index="3-4">软件工程</el-menu-item>
    <el-submenu index="3-5">
      <template slot="title">车辆工程</template>
      <el-menu-item index="3-5-1">智能汽车工程</el-menu-item>
      <el-menu-item index="3-5-2">新能源汽车工程</el-menu-item>
      <el-menu-item index="3-5-3">轨道交通工程</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-submenu index="4">
    <template slot="title">文学</template>
    <el-menu-item index="4-1">社会科学</el-menu-item>
    <el-menu-item index="4-2">心理学</el-menu-item>
    <el-menu-item index="4-3">哲学</el-menu-item>
    <el-menu-item index="4-4">法学</el-menu-item>
    <el-menu-item index="4-5">汉语言文学</el-menu-item>
    <el-submenu index="4-6">
      <template slot="title">外语</template>
      <el-menu-item index="4-6-1">英语</el-menu-item>
      <el-menu-item index="4-6-2">法语</el-menu-item>
      <el-menu-item index="4-6-3">德语</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-submenu index="5">
    <template slot="title">艺术</template>
    <el-menu-item index="5-1">设计学</el-menu-item>
    <el-menu-item index="5-2">美术学</el-menu-item>
    <el-menu-item index="5-3">戏剧与影视学</el-menu-item>
    <el-menu-item index="5-4">音乐与舞蹈学</el-menu-item>
  </el-submenu>
  <el-menu-item index="6">凑数学科</el-menu-item>
  <el-menu-item index="7">凑数学科</el-menu-item>
  <el-menu-item index="8">凑数学科</el-menu-item>
  <el-menu-item index="9">凑数学科</el-menu-item>
  <el-menu-item index="10">凑数学科</el-menu-item>
  <el-menu-item index="11">凑数学科</el-menu-item>
  <el-menu-item index="12">其他学科</el-menu-item>
</el-menu>
<div class="line"></div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1'
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
</style>