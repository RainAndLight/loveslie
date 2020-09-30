<template>
    <div class="box">
        <el-backtop :bottom="100"></el-backtop>
        <el-backtop :bottom="150">
            <div
                style="{
                        height: 100%;
                        width: 100%;
                        background-color: #f2f5f6;
                        box-shadow: 0 0 6px rgba(0,0,0, .12);
                        text-align: center;
                        line-height: 40px;
                        color: #1989fa;
                    }"
            >
                UP
            </div>
        </el-backtop>
        <el-row>
            <el-col :span="18">
                <div class="conent_left">
                    <div class="contentItem">
                        <div class="contentItem_header">
                            <div>
                                <el-image class="user_image" :src="require('@/assets/user_photo.jpg')" alt="" />
                            </div>
                            <!-- <el-avatar
                                shape="square"
                                :src="require('@/assets/user_photo.jpg')"
                                :size="50"
                                fit="contain"
                                style="margin-right:10px"
                            >
                                user
                            </el-avatar> -->
                            <div class="user_info">
                                <div class="user_name">RainAndLight</div>
                                <div class="user_time">发表于 2020-9-26 21:53</div>
                            </div>
                        </div>
                        <div class="content">
                            <div class="title">
                                如何开通holer服务或申请holer服务端软件license？
                            </div>
                            <div class="detil">
                                Holer开源软件不以盈利为目的，用户可以以捐助的形式开通holer服务或申请holer服务端软件license，支持holer未来的开发和维护。捐款将用于holer的硬件、软件、服务器、网络以及其他费用，您的支持会让holer一直发展存活下来。使用公开的holer映射或者开通holer服务，通过holer客户端软件经holer服务器实现公网访问
                            </div>
                            <div class="detilImg">
                                <el-image :src="require('@/assets/detilImg01.jpg')">
                                    <div slot="placeholder" class="image-slot">加载中<span class="dot">...</span></div>
                                </el-image>
                            </div>
                        </div>
                        <div class="contentItem_footer">
                            <el-tag>{{ '#' + ' ' + '技术贴' }}</el-tag>
                            <div class="contentItem_footer_right">
                                <span style="margin-right:25px">
                                    <i class="el-icon-view"></i>

                                    {{ ' 10 ' + '人浏览过' }}
                                </span>
                                <span style="margin-right:25px">
                                    <i class="el-icon-chat-line-square"></i>
                                    {{ ' 3 ' + ' 条评论 ' }}
                                </span>
                                <span>
                                    <i class="el-icon-magic-stick"></i>
                                    {{ ' 2 ' + ' 人觉得很赞 ' }}
                                </span>
                            </div>
                        </div>
                        <el-divider></el-divider>
                    </div>
                    <div class="contentItem">
                        <div class="contentItem_header">
                            <div>
                                <img class="user_image" src="../../assets/user_photo.jpg" alt="" />
                            </div>
                            <div class="user_info">
                                <div class="user_name">RainAndLight</div>
                                <div class="user_time">发表于 2020-9-27 9:08</div>
                            </div>
                        </div>
                        <div class="content">
                            <div class="title">
                                git 放弃本地修改，强制拉取更新
                            </div>
                            <div class="detil">
                                git fetch --all git reset --hard origin/master git pull //可以省略
                            </div>
                            <div class="detilImg">
                                <!-- <img src="../../assets/detilImg01.jpg" alt="" /> -->
                            </div>
                        </div>
                        <div class="contentItem_footer">
                            <el-tag>{{ '#' + ' ' + '技术贴' }}</el-tag>
                            <div></div>
                        </div>
                        <el-divider></el-divider>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="conent_right">
                    <div class="conent_right_item" v-for="item in conent_right_item" :key="item.id">
                        <el-card shadow="hover" style="width:95%;height:95%;border-radius:0;border:0px solid #ccc">
                            <div>
                                <i :class="item.icon"></i>
                            </div>
                            <div>
                                {{ item.name }}
                            </div>
                        </el-card>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'square',
    components: {},
    data() {
        return {
            conent_right_item: [
                {
                    id: 1,
                    icon: 'el-icon-news',
                    name: '发动态'
                },
                {
                    id: 2,
                    icon: 'el-icon-edit',
                    name: '发文章'
                },
                {
                    id: 3,
                    icon: 'el-icon-refresh',
                    name: '刷新动态'
                },
                {
                    id: 4,
                    icon: 'el-icon-chat-dot-round',
                    name: '留言'
                }
            ]
        }
    },
    created() {},
    mounted() {},
    methods: {}
}
</script>

<style scoped lang="less">
.box {
    background-color: rgb(249, 249, 249);
    .conent_left {
        border-radius: 5px;
        margin-right: 10px;
        padding: 15px 15px 0 15px;
        background-color: #fff;
        .contentItem {
            .contentItem_header {
                display: flex;
                .user_image {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
                .user_info {
                    padding-left: 10px;
                    .user_name {
                        font-family: mipro-medium;
                        font-size: 15px;
                        color: #000;
                    }
                    .user_time {
                        margin-top: 8px;
                        color: rgba(0, 0, 0, 0.6);
                        font-size: 12px;
                    }
                }
            }
            .content {
                margin-top: 5px;
                .title {
                    font-size: 18px;
                    letter-spacing: 3px;
                }
                .detil {
                    margin-top: 10px;
                    font-size: 16px;
                    color: rgba(0, 0, 0, 0.8);
                    display: -webkit-box;
                    display: -moz-box;
                    text-overflow: -o-ellipsis-lastline;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    -webkit-line-clamp: 3; /*控制文本行数，多少行以后开始省略号 */
                    line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .detilImg {
                    margin-top: 10px;
                    img {
                        max-width: 100%;
                    }
                }
            }
            .contentItem_footer {
                display: flex;
                margin-top: 10px;
                & /deep/ .el-tag {
                    border-radius: 20px;
                }
                .contentItem_footer_right {
                    flex: 1;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                }
            }
        }
    }
    .conent_right {
        border-radius: 5px;
        width: 225px;
        height: 225px;
        background-color: #fff;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        .conent_right_item {
            cursor: pointer;
            width: 50%;
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            i {
                font-size: 22px;
                margin-bottom: 6px;
            }
        }
    }
}
</style>
