<template>
    <div class="box">
        <img src="@/assets/logo.jpg" style="width:100px;height:60px" />
        <p class="titleName">小小论坛</p>
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
            <el-menu-item index="/home">广 场</el-menu-item>
            <el-menu-item index="/home/bar">看 帖</el-menu-item>
            <el-menu-item index="3">日 记</el-menu-item>
            <!-- <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu> -->
            <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
            <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
        </el-menu>
        <div class="login">
            <el-button type="primary" round @click="toLogin">登录</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'layout-header',
    methods: {
        handleSelect(key, keyPath) {
            // console.log(key, keyPath)
            // if (key === 1) {
            //     this.$router.push('/home/square')
            // } else if (key === 2) {
            //     this.$router.push('/home/bar')
            // }
        },
        toLogin() {
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped lang="less">
.box {
    width: 1300px;
    background-color: #fff;
    display: flex;
    // justify-content: center;
    align-items: center;
    // padding: 0 100px;
    .titleName {
        font-family: mipro-medium;
        font-size: 16px;
        color: #000;
        margin-left: 10px;
        margin-right: 100px;
    }
    .login {
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }
}
</style>
