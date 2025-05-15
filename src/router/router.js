import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import baseIndex from '../components/baseIndex.vue'
import AMap from "../components/Maps/AMap.vue";
import AMapdemo from "../components/Maps/AMapdemo.vue";
import demo from "../components/demo.vue";
import demo2 from "../components/demo2.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/baseIndex',
        name: 'baseIndex',
        component: baseIndex
    },
    {
        path: '/AMapdemo',
        name: 'AMapdemo',
        component: AMapdemo
    },
    {
        path: '/AMap',
        name: 'AMap',
        component: AMap
    },
        {
        path: '/demo',
        name: 'demo',
        component: demo
    },
    {
        path: '/demo2',
        name: 'demo2',
        component: demo2
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
