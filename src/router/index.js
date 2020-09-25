import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

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
        path: '/home',
        name: 'Home',
        component: Home
    }
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: () => import('../views/About.vue')
    // }
]

const router = new VueRouter({
    // mode: 'history',
    routes
})

export default router
