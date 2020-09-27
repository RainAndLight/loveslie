<template>
    <div class="box">
        <!-- <div class="channel">
            <h4 class="channel_title">所 有 频 道</h4>
            <div class="channel_item">
                <div v-for="(item, index) in channel_item" :key="index">
                    <el-link @click="channelClick(item.channelId)">{{ item.channelName }}</el-link>
                </div>
            </div>
        </div>
        <el-divider></el-divider> -->
        <!-- <div class="channel_detil">
            <div class="channel_detil_item" v-for="(item, index) in channel_item" :key="index">
                <h4>{{ item.channelName }}</h4>
                <el-row>
                    <el-col :span="8" class="card_father" v-for="i in item.children" :key="i.detilID">
                        <el-card class="itemCard" shadow="hover">
                            {{ i.detilName }}
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'bar',
    components: {},
    data() {
        return {
            channel_item: [
                {
                    channelId: 1,
                    channelName: '技术类',
                    children: [
                        {
                            detilID: 1,
                            detilName: '前端开发'
                        },
                        {
                            detilID: 2,
                            detilName: '后端开发'
                        },
                        {
                            detilID: 3,
                            detilName: 'HTTP'
                        },
                        {
                            detilID: 4,
                            detilName: ''
                        }
                    ]
                },
                {
                    channelId: 2,
                    channelName: '资源类'
                },
                {
                    channelId: 3,
                    channelName: '生活类'
                },
                {
                    channelId: 4,
                    channelName: '技术类'
                }
            ]
        }
    },
    created() {},
    mounted() {},
    methods: {
        channelClick(val) {}
    }
}
</script>

<style scoped lang="less">
.box {
    padding: 20px;
    .channel_detil {
        .channel_detil_item {
            h4 {
                display: block;
                font-weight: 400;
                font-size: 18px;
                line-height: 24px;
                color: rgb(0, 0, 0, 0.6);
            }
            .card_father {
                // display: flex;
            }
        }
    }
    // .channel {
    //     .channel_title {
    //         color: rgb(64, 158, 255);
    //         // text-align: center;
    //     }
    //     .channel_item {
    //         margin-top: 20px;
    //         display: flex;

    //         div {
    //             width: 20%;
    //             text-align: center;
    //         }
    //     }
    // }
}
</style>
