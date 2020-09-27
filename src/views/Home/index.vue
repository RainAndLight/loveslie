<template>
    <div>
        <el-container>
            <el-header class="header">
                <layout-header></layout-header>
            </el-header>
            <el-main class="content">
                <div class="center">
                    <router-view></router-view>
                </div>
            </el-main>
            <!-- <el-footer class="footer">Footer</el-footer> -->
        </el-container>
    </div>
</template>

<script>
import layoutHeader from '@/components/layout-header'
export default {
    name: 'home',
    props: {},
    data() {
        return {}
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {},
    components: {
        layoutHeader
    }
}
</script>

<style scoped lang="less">
.header {
    display: flex;
    justify-content: center;
}
.content {
    padding: 15px 0 0 0;
    background-color: rgb(249, 249, 249);
    min-height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    .center {
        padding: 10px 10px 0 10px;
        width: 900px;
        background-color: #fff;
    }
}
</style>
