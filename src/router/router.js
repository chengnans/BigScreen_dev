import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import baseIndex from '../components/baseIndex.vue'
import AMap from "../components/Maps/AMap.vue";
import AMapdemo from "../components/Maps/AMapdemo.vue";

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
