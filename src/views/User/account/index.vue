<template>
    <div v-loading="loading">
        <h3 style="text-align:center;margin-top:20px">个人信息</h3>
        <el-form ref="form" :model="form" :rules="rules" style="margin-left:100px;margin-top:60px" label-width="100px">
            <el-form-item prop="companyName" label="用户名称">
                <el-input v-model="form.companyName" style="width:40%" readonly></el-input>
            </el-form-item>
            <el-form-item prop="audit" label="账号权限">
                <!-- <el-checkbox v-model="form.audit" disabled>已通过</el-checkbox>
                    <el-checkbox v-model="form.audit1" disabled>未通过</el-checkbox> -->
                <el-switch
                    inactive-text="普通用户"
                    active-text="管理员"
                    disabled
                    v-model="form.audit"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                >
                </el-switch>
            </el-form-item>
            <el-form-item label="设置头像">
                <div class="select_photo">
                    <div
                        v-for="(item, index) in user_poto_src"
                        :key="item.fileName"
                        :class="{ photo_hover: index !== isActive ? false : isClick === index ? false : true }"
                        @click="photoClick(index)"
                        @mouseenter="onMouseEnter(index)"
                        @mouseleave="onMouseLeave"
                    >
                        <el-avatar
                            :class="{ photo_click: index === isClick, photo_item: true }"
                            shape="square"
                            :src="item.url"
                            :size="60"
                            fit="fill"
                            style="margin-right:10px"
                        >
                        </el-avatar>
                    </div>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'account',
    props: {},
    data() {
        return {
            isActive: '',
            isClick: '',
            user_poto_src: [
                {
                    url: require('@/assets/user_select_photo/1.jpg'),
                    fileName: '1.jpg'
                },
                {
                    url: require('@/assets/user_select_photo/2.jpg'),
                    fileName: '2.jpg'
                },
                {
                    url: require('@/assets/user_select_photo/3.jpg'),
                    fileName: '3.jpg'
                },
                {
                    url: require('@/assets/user_select_photo/4.jpg'),
                    fileName: '4.jpg'
                },
                {
                    url: require('@/assets/user_select_photo/5.jpg'),
                    fileName: '5.jpg'
                },
                {
                    url: require('@/assets/user_select_photo/6.jpg'),
                    fileName: '6.jpg'
                },
                {
                    url: require('@/assets/user_select_photo/7.jpg'),
                    fileName: '7.jpg'
                },
                {
                    url: require('@/assets/user_select_photo/8.jpg'),
                    fileName: '8.jpg'
                },
                {
                    url: require('@/assets/user_select_photo/9.jpg'),
                    fileName: '9.jpg'
                },
                {
                    url: require('@/assets/user_select_photo/10.jpg'),
                    fileName: '10.jpg'
                },
                {
                    url: require('@/assets/user_select_photo/11.jpg'),
                    fileName: '11.jpg'
                },
                {
                    url: require('@/assets/user_select_photo/12.jpg'),
                    fileName: '12.jpg'
                },
                // {
                //     url: require('@/assets/user_select_photo/13.jpg'),
                //     fileName: '13.jpg'
                // },
                {
                    url: require('@/assets/user_select_photo/14.jpg'),
                    fileName: '14.jpg'
                },
                {
                    url: require('@/assets/user_select_photo/15.jpg'),
                    fileName: '15.jpg'
                },
                {
                    url: require('@/assets/user_select_photo/16.jpg'),
                    fileName: '16.jpg'
                }
            ],
            loading: false,
            form: {
                companyName: 'RainAndLight',
                companyAccount: '',
                audit: false
            },
            rules: {
                //   用户名 邮箱
                name: [
                    { required: true, message: '用户名不能为空' },
                    {
                        min: 1,
                        max: 7,
                        message: '用户名长度在1到7个字符'
                    }
                ],
                email: [
                    { required: true, message: '邮箱不能为空' },
                    {
                        pattern: /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
                        message: '邮箱格式不正确'
                    }
                ]
            }
        }
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {
        onMouseEnter(index) {
            if (this.isActive !== index) {
                this.isActive = index
            }
        },
        onMouseLeave() {
            this.isActive = ''
        },
        photoClick(index, fileName, event) {
            this.isClick = index
            // let str = 'select_photo_' + index
            // if (this.$refs[str].style.border === '') {
            //     this.$refs[str].style.border === 'border: 1px solid #409eff;'
            // } else {
            //     this.$refs[str].style.border === ''
            // }
            // console.log(this.$refs[str].$el)
            // console.log(this.$refs[str])
            // if (this.$refs.select_photo[index].style.border === 'border: 1px solid #409eff;') {
            //     this.$refs.select_photo[index].style.border = ''
            // } else {
            //     this.$refs.select_photo[index].style.border = 'border: 1px solid #409eff;'
            // }
            // this.photo_class = 'photo_hover'
            // console.log(this.$refs.select_photo[index].attribute)
            // console.log(event)
        },
        uploadImg(params) {
            this.loading = true // 打开弹层
            let data = new FormData()
            data.append('photo', params.file)
            this.$axios({
                url: '/user/photo',
                method: 'patch',
                data
            }).then(result => {
                this.loading = false // 关闭弹层
                if (result.status === 200) {
                    this.formData.photo = result.data.photo // 给当前的头像赋值
                    // 认为保存成功 => 通知header组件 更新信息
                    // eventBus.$emit('updateUserInfo')
                }
            })
        }
    },
    components: {}
}
</script>

<style scoped lang="less">
.photo_item {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    align-items: center;
    // border: 1px solid rgb(255, 255, 255, 0.1);
}
.photo_hover {
    position: relative;
    transform: scale(1.2, 1.2);
    transition: all 0.3s;
}
.photo_click {
    border: 3px solid #409eff;
    transform: scale(1.2, 1.2);
}
.select_photo {
    // box-sizing: border-box;
    // padding-left: 100px;
    cursor: pointer;
    display: flex;
    width: 360px;
    flex-wrap: wrap;
    // & /deep/ .el-avatar {
    // margin-bottom: 10px;
    // }
}
</style>
