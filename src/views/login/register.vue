<template>
    <div>
        <el-card class="login-card">
            <div slot="header">
                <el-page-header @back="goBack" content="注册"> </el-page-header>
            </div>
            <el-form
                class="card-content"
                status-icon
                ref="form"
                :model="loginForm"
                :rules="loginRules"
                label-position="top"
            >
                <!-- <el-form-item prop="company" label="公司名称">
                    <el-input
                        clearable
                        placeholder="请输入公司名称"
                        prefix-icon="el-icon-user-solid"
                        v-model="loginForm.company"
                    ></el-input> -->
                <!-- <el-select
                        clearable
                        v-model="loginForm.company"
                        placeholder="请选择公司"
                        filterable
                        style="width:100%"
                    >
                        <el-option
                            clearable
                            v-for="item in companyOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select> -->
                <!-- </el-form-item> -->
                <el-form-item prop="userName" label="用户名">
                    <el-tooltip
                        content="一个企业仅允许注册一个用户，如有问题请联系管理员"
                        placement="top"
                        effect="light"
                    >
                        <el-input
                            clearable
                            placeholder="请输入用户名"
                            prefix-icon="el-icon-user-solid"
                            v-model="loginForm.userName"
                        ></el-input>
                    </el-tooltip>
                </el-form-item>
                <el-form-item prop="password" label="密码">
                    <el-input
                        clearable
                        show-password
                        type="password"
                        placeholder="请输入密码"
                        prefix-icon="el-icon-lock"
                        v-model="loginForm.password"
                    >
                    </el-input>
                    <!-- </el-tooltip> -->
                </el-form-item>
                <el-form-item prop="affirmPassword" label="确认密码">
                    <el-input
                        clearable
                        show-password
                        type="password"
                        placeholder="请输入密码"
                        prefix-icon="el-icon-lock"
                        v-model="loginForm.affirmPassword"
                        @keyup.enter.native="register"
                    >
                    </el-input>
                </el-form-item>
                <el-form-item prop="code" label="验证码">
                    <el-row :gutter="20">
                        <el-col :span="13">
                            <el-input
                                clearable
                                placeholder="请输入验证码"
                                prefix-icon="el-icon-message"
                                v-model="loginForm.code"
                                @keyup.enter.native="register"
                            >
                            </el-input>
                        </el-col>
                        <el-col :span="10" style="padding:0;height:40px">
                            <el-image @click="getKey()" style="width: 100%; height: 40px" :src="url"></el-image>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-button @click="register" type="primary" style="width:100%;margin-top:20px">注册</el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script>
// import api from '@/api/login'
import md5 from 'md5'
export default {
    name: 'register',
    props: {},
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'))
            } else {
                if (this.loginForm.password !== '') {
                    // let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~@#$%\*-\+=:,\\?\[\]\{}]).{6,16}$/
                    if (value.length < 6) {
                        return callback(new Error('密码不能少于6位！'))
                    } else if (value.length > 16) {
                        return callback(new Error('密码最长不能超过16位！'))
                    }
                    // } else if (!reg.test(value)) {
                    //     return callback(new Error('密码输入有误，请检查格式是否正确！'))
                    // } else {
                    //     callback()
                    // }
                    this.$refs.form.validateField('password1')
                }
                callback()
            }
        }
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.loginForm.password) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        }
        return {
            url: '',
            loginForm: {
                company: '',
                userName: '',
                password: '',
                code: ''
            },
            loginRules: {
                company: [{ required: true, message: '请输入公司名', trigger: 'blur' }],
                userName: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 1, max: 16, message: '长度在 1 到 16 个字符', trigger: 'blur' }
                ],
                password: [{ validator: validatePass, trigger: 'blur' }],
                password1: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                affirmPassword: [{ validator: validatePass2, trigger: 'blur' }],
                code: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                    { min: 4, max: 4, message: '长度为4个字符', trigger: 'blur' }
                ]
            }
        }
    },
    computed: {},
    created() {
        // this.getKey()
    },
    mounted() {},
    watch: {},
    methods: {
        getKey() {
            this.$axios({
                url: '/api/captcha/fetch_captcha'
            }).then(res => {
                this.url = res.code
            })
        },
        goBack() {
            this.$parent.flag = 'login'
        },
        register() {
            this.$refs.form.validate(isOK => {
                if (isOK) {
                    let passwordUpperCase = md5(this.loginForm.password).toUpperCase()
                    let params = {
                        company: this.loginForm.company,
                        userName: this.loginForm.userName,
                        password: passwordUpperCase,
                        code: this.loginForm.code
                    }

                    this.$axios({
                        url: '/api/user/registered',
                        method: 'post',
                        data: params
                    }).then(data => {
                        if (data.returnCode === 200) {
                            this.$parent.flag = 'login'
                            this.$emit('update')
                            this.$message({
                                type: 'success',
                                message: '注册成功'
                            })
                        } else {
                            this.$message({
                                type: 'error',
                                message: data.returnMsg
                            })
                        }
                    })
                }
            })
        }
    },
    components: {}
}
</script>

<style scoped lang="less">
.login {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &:before {
        // background-image: url('../../assets/loginBG.jpg');
        // background-size: cover;
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background-position: bottom;
    }
    .login-card {
        position: absolute;
        right: 100px;
        top: 5vh;
        width: 350px;
        height: 485px;
        // height: 480px;
        z-index: 2;
        background-color: rgba(255, 255, 255, 0.1);
        & /deep/ .el-form-item {
            margin-bottom: 5px;
        }
        & /deep/ .el-form-item__label {
            padding: 0;
        }
        & /deep/ .el-card__body {
            padding: 0 20px 20px 20px;
        }

        .title {
            color: #1c2438;
            font-weight: 800;
        }
        .register_btn {
            width: 100%;
            height: 30px;
            text-align: center;
            font-size: 16px;
        }
    }
}
</style>
