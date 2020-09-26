<template>
    <div class="box">
        <div class="contentItem">
            <div class="contentItem_header">
                <div>
                    <img class="user_image" src="../../assets/user_photo.jpg" alt="" />
                </div>
                <div class="user_info">
                    <div class="user_name">RainAndLight</div>
                    <div class="user_time">发表于 2020年9月26日 21:53</div>
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
                    <img src="../../assets/detilImg01.jpg" alt="" />
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
                    <div class="user_time">发表于 2020年9月26日 21:53</div>
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
                    <img src="../../assets/detilImg01.jpg" alt="" />
                </div>
            </div>
            <el-divider></el-divider>
        </div>
    </div>
</template>

<script>
export default {
    name: 'square',
    components: {},
    data() {
        return {}
    },
    created() {},
    mounted() {},
    methods: {}
}
</script>

<style scoped lang="less">
.box {
    padding: 10px 10px 0 10px;
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
                -webkit-line-clamp: 2; /*控制文本行数，多少行以后开始省略号 */
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
    }
}
</style>
