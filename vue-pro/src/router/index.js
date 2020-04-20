import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routerMap = [
    {
        path: '/',
        name:'index',
        component: () => import('@/views/index.vue')
        // () => import('@')
    },
    {
        path:'/shopping',
        component: () => import('@/views/shopping.vue'),
        name:'shopping',
        descr:'购物车App-Vuex'
    },
    {
        path:'/test',
        component:() => import('@/views/test/testIndex.vue'),
        name:'test',
        descr:'测试页',
        redirect:'/lifecycle/camera',
        children: [
            {
                path:'/test/camera',
                component:() => import('@/views/test/cameraTest.vue'),
                name:'cameraTest',
                descr:'相机测试'
            },
            {
                path:'/test/tree',
                component:() => import('@/views/test/el-treeTest.vue'),
                name:'el-treeTest',
                descr:'el-tree测试'
            },
            {
                path:'/test/emailInput',
                component:() => import('@/views/test/emailInputTest.vue'),
                name:'emailInputTest',
                descr:'仿邮箱地址输入框'
            },
            {
                path:'/test/waterMark',
                component:() => import('@/views/test/waterMarkTest.vue'),
                name:'waterMark',
                descr:'水印测试'
            },
            {
                path:'/test/mockVuex',
                component:() => import('@/views/test/testMockVuex/index.vue'),
                name:'mock + vuex',
                descr:'mock + vuex 测试'
            },
            {
                path:'/test/lodopTest',
                component:() => import('@/views/test/lodopTest.vue'),
                name:'打印测试',
                descr:'打印测试'
            },
            {
                path:'/test/cryptoTest',
                component:() => import('@/views/test/cryptoTest.vue'),
                name:'加解密测试',
                descr:'加解密测试'
            }
        ]
    },
    {
        path:'/lifeCycle',
        component:() => import('@/views/lifeCycle/lifeCycle.vue'),
        redirect:'/lifecycle/single',
        name:'lifeCycle',
        descr:'Vue生命周期',
        children:[
            {
                path:'/lifeCycle/single',
                component:() => import('@/views/lifeCycle/lifeCycleSingle.vue'),
                name:'lifeCycleSingle',
                descr:'单组件生命周期'
            },
            {
                path:'/lifeCycle/nest',
                component:() => import('@/views/lifeCycle/lifeCycleNest.vue'),
                name:'lifeCycleNest',
                descr:'父子组件生命周期'
            },
            
        ]
    }
]

export default new Router({
    routes: routerMap
})