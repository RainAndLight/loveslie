<template>
    <div class="box">
        <img src="@/assets/logo.jpg" style="width:100px;height:60px" />
        <p class="titleName">小小论坛</p>
        <el-menu default-active="/home" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
            <el-menu-item index="/home">广场动态</el-menu-item>
            <el-menu-item index="/home/bar">小小圈子</el-menu-item>
            <el-menu-item index="/home/article">发表文章</el-menu-item>
            <el-menu-item index="/home/2">工 具</el-menu-item>
            <el-menu-item index="/home/myDiary">日 记</el-menu-item>
            <el-menu-item index="/home/admin">后台管理系统</el-menu-item>
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
        <div class="userInfo">
            <el-dropdown @command="clickMenu">
                <!-- 匿名插槽  下拉菜单显示的元素内容 -->
                <div class="userInfo_content">
                    <!-- <el-image :src="user_poto_src"></el-image> -->
                    <el-avatar shape="square" :src="user_poto_src" :size="40" fit="fill" style="margin-right:10px">
                        user
                    </el-avatar>
                    <span>{{ 'RainAndLight' }}</span>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="info">个人信息</el-dropdown-item>
                    <el-dropdown-item command="lgout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <!-- <el-button type="primary" round @click="toLogin">登录</el-button> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'layout-header',
    data() {
        return {
            // user_poto_src: 'https://w.wallhaven.cc/full/4x/wallhaven-4xkgk3.jpg'
            // user_poto_src: 'https://w.wallhaven.cc/full/md/wallhaven-md59dk.jpg'
            user_poto_src: require('@/assets/user_select_photo/1.jpg')
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            // console.log(key, keyPath)
            // if (key === 1) {
            //     this.$router.push('/home/square')
            // } else if (key === 2) {
            //     this.$router.push('/home/bar')
            // }
        },
        clickMenu(command) {
            if (command === 'info') {
                this.$router.push('/home/account') // 去到账户信息
            } else {
                //    退出
                window.localStorage.removeItem('user-token') // 删除令牌
                // window.sessionStorage.removeItem('routerList')
                window.localStorage.removeItem('userInfo')
                window.localStorage.removeItem('level')
                this.$router.push('/login') // 回到登录页
            }
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
    background-color: rgb(255, 255, 255);
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
    .userInfo {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        .userInfo_content {
            display: flex;
            align-items: center;
            & /deep/ .el-image {
                margin-right: 12px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
        }
    }
}
</style>
