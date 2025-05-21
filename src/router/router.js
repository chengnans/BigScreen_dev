import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import baseIndex from '../components/baseIndex.vue'
import AMap from "../components/Maps/AMap.vue";
import AMapdemo from "../components/Maps/AMapdemo.vue";
import demo from "../components/demo.vue";
import demo2 from "../components/demo2.vue";
import nsgl from "../components/nsgl/nsgl.vue";
import gggl from "../components/gggl/gggl.vue";
import sfgl from "../components/sfgl/sfgl.vue";
import xqhjc from "../components/xqhjc/xqhjc.vue";
import jcmx from "../components/jcmx/jcmx.vue";
import trjc from "../components/trjc/trjc.vue";
import syqgl from "../components/syqgl/syqgl.vue";
import bchjc from "../components/bchjc/bchjc.vue";

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
    },
    {
        path: '/nsgl',
        name: 'nsgl',
        component: nsgl
    },
    {
        path: '/gggl',
        name: 'gggl',
        component: gggl
    },
    {
        path: '/sfgl',
        name: 'sfgl',
        component: sfgl
    },
    {
        path: '/xqhjc',
        name: 'xqhjc',
        component: xqhjc
    },
    {
        path: '/jcmx',
        name: 'jcmx',
        component: jcmx
    },
    {
        path: '/trjc',
        name: 'trjc',
        component: trjc
    },
    {
        path: '/syqgl',
        name: 'syqgl',
        component: syqgl
    },
    {
        path: '/bchjc',
        name: 'bchjc',
        component: bchjc
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
