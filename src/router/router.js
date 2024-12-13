import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import baseIndex from '../components/baseIndex.vue'

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
