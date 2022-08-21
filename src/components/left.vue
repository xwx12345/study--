<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu>
            <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>理科</template>
            <el-menu-item-group>
                <el-menu-item index="1-1">高等数学</el-menu-item>
                <el-menu-item index="1-2">大学物理</el-menu-item>
            </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>工科</template>
            <el-menu-item-group>
                <el-menu-item index="2-1">计算机科学与技术</el-menu-item>
                <el-menu-item index="2-2">软件工程</el-menu-item>
            </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>文科</template>
            <el-menu-item-group>
                <el-menu-item index="3-1">社会科学</el-menu-item>
                <el-menu-item index="3-2">心理学</el-menu-item>
            </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
            <template slot="title"><i class="el-icon-setting"></i>艺术</template>
            <el-menu-item-group>
                <el-menu-item index="4-1">设计学</el-menu-item>
                <el-menu-item index="4-2">音乐与舞蹈学</el-menu-item>
            </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script>
export default {
    data() {
        return {
        
        }
    }
};
</script>

<style>

</style>