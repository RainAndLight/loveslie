import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/login'
import Square from '@/views/Square'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home' // 强制跳转
    },
    {
        path: '*',
        component: () => import('@/views/404')
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '',
                component: Square
            },
            {
                path: 'bar',
                component: () => import('@/views/Bar')
            },
            {
                path: 'myDiary',
                component: () => import('@/views/MyDiary')
            },
            {
                path: 'article',
                component: () => import('@/views/Article')
            },
            {
                path: 'account',
                component: () => import('@/views/User/account')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
