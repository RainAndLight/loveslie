<template>
    <div class="login">
        <el-card class="login-card" v-if="flag === 'login'">
            <div slot="header">
                <i class="el-icon-d-arrow-right"></i>
                <span class="title" style="marginLeft:10px">欢 迎 登 录 </span>
            </div>
            <el-form class="card-content" ref="form" :model="loginForm" :rules="loginRules">
                <el-form-item prop="user">
                    <el-input
                        placeholder="请输入用户名"
                        prefix-icon="el-icon-user-solid"
                        v-model="loginForm.user"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="请输入密码"
                        prefix-icon="el-icon-lock"
                        v-model="loginForm.password"
                    >
                    </el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <el-row :gutter="20">
                        <el-col :span="13">
                            <el-input
                                placeholder="请输入验证码"
                                prefix-icon="el-icon-message"
                                v-model="loginForm.code"
                                @keyup.enter.native="submitLogin"
                            >
                            </el-input>
                        </el-col>
                        <el-col :span="10" style="padding:0;height:40px">
                            <el-image style="width: 100%; height: 40px" :src="url" @click="getKey()"></el-image>
                        </el-col>
                    </el-row>
                </el-form-item>
                <div class="register_btn">
                    <el-link type="primary" @click="register_btn">还没有账号?点击注册</el-link>
                </div>
                <el-form-item>
                    <el-button @click="submitLogin" type="primary" style="width:100%">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <register @update="getKey()" ref="register" v-if="flag === 'register'"></register>
    </div>
</template>

<script>
import md5 from 'md5'
import register from './register'
// import eventBus from '@/utils/eventBus'
import routes from '@/router/index'
// import Home from '@/views/home'
// import Home2 from '@/views/home/home.vue'
export default {
    name: 'login',
    components: {
        register
    },
    data() {
        return {
            flag: 'login',
            url: '',
            loginForm: {
                user: '',
                password: '',
                code: ''
            },
            loginRules: {
                company: [{ required: true, message: '请输入公司名', trigger: 'change' }],
                user: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
            }
        }
    },
    methods: {
        /*  author：gongzheng
            createdTime： 2020-4-15
        */
        getKey() {
            this.$axios({
                url: '/api/captcha/fetch_captcha'
            }).then(res => {
                this.url = res.code
            })
        },
        submitLogin() {
            let _this = this
            this.$refs.form.validate(isOK => {
                if (isOK) {
                    let passwordUpperCase = md5(_this.loginForm.password).toUpperCase()
                    let params = {
                        userName: _this.loginForm.user,
                        password: passwordUpperCase,
                        code: _this.loginForm.code,
                        captchaIdentity: _this.loginForm.captchaIdentity
                    }
                    this.$axios({
                        url: '/api/authenticate',
                        method: 'post',
                        data: params
                    })
                        .then(data => {
                            if (data.returnCode === 200) {
                                window.localStorage.setItem('user-token', data.returnData.token)
                                if (data.returnData.userInfo.authority === 'A001') {
                                    window.localStorage.setItem('level', '1')
                                } else if (data.returnData.userInfo.authority === 'A002') {
                                    window.localStorage.setItem('level', '2')
                                } else if (data.returnData.userInfo.authority === 'A003') {
                                    window.localStorage.setItem('level', '3')
                                }
                                // eventBus.$emit('userInfo', data.returnData.userInfo)
                                window.localStorage.setItem('userInfo', JSON.stringify(data.returnData.userInfo))
                                this.$message({
                                    type: 'success',
                                    message: '登录成功'
                                })
                                this.$router.push('/home')
                            } else if (data.returnCode === 400) {
                                _this.loginForm.code = ''
                                _this.getKey()
                                this.$message({
                                    type: 'error',
                                    message: data.returnMsg
                                })
                            } else if (data.returnCode === 401 && data.returnMsg === 'Bad credentials') {
                                this.$message({
                                    type: 'error',
                                    message: '账号或密码错误'
                                })
                            } else {
                                this.$message({
                                    type: 'error',
                                    message: data.returnMsg
                                })
                            }
                        })
                        .catch(res => {
                            // console.log('res 66', res)
                        })
                }
            })
        },
        register_btn() {
            this.flag = 'register'
            setTimeout(() => {
                this.$refs.register.getKey()
            }, 0)
        }
    },
    created() {
        this.getKey()
    }
}
</script>

<style lang="less" scoped>
.login {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    // &:before {
    background-image: url('../../assets/loginBG.jpg');
    background-size: cover;
    // background: transparent url(../../assets/img/loginBG.jpg) center center no-repeat;
    // background: none\0;
    // content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: bottom;
    // }
    .login-card {
        position: absolute;
        right: 100px;
        top: 20vh;
        width: 300px;
        height: 350px;
        z-index: 2;
        background-color: rgba(255, 255, 255, 0.1);
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
