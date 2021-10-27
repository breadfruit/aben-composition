import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index'

const  constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/redirect',
        component: Layout,
        meta: { hidden: true },
        children: [
          {
            path: '/redirect/:path(.*)',
            component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect/Index.vue')
          }
        ]
      },
    
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
})