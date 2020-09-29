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
// import live2d from 'vue-live2d'
// import 'vue-live2d/dist/vue-live2d.css'
// const { L2Dwidget } = require('../../../static/live2dw/lib/L2Dwidget.min.js')
import layoutHeader from '@/components/layout-header'
export default {
    name: 'home',
    props: {},
    data() {
        return {}
    },
    computed: {},
    created() {
        // this.intLive2D()
    },
    mounted() {},
    watch: {},
    methods: {
        intLive2D() {
            L2Dwidget.init({
                pluginRootPath: 'static/live2dw/',
                pluginJsPath: 'lib/',
                pluginModelPath: 'live2d-widget-model-haru_2/assets/',
                tagMode: false,
                debug: false,
                model: { jsonPath: 'static/live2dw/live2d-widget-model-haru_2/assets/haru02.model.json' },
                display: { position: 'right', width: 150, height: 300 },
                mobile: { show: true },
                log: false
            })
        }
    },
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
        // padding: 10px 10px 0 10px;
        width: 900px;
        background-color: #fff;
    }
}
</style>
