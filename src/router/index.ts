import { createRouter, createWebHistory } from 'vue-router'

import allRouter from './components/index'



const router = createRouter({
    history: createWebHistory(),
    routes: allRouter,
})

export default router