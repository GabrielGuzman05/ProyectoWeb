import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('../App'),
            children: [
                {
                    path: '/',
                    name: 'Main',
                    component: () => import('../views/Main')
                },
                {
                    path: '/productos',
                    name: 'Productos',
                    component: () => import('../views/Productos')
                },
                {
                    path: '/servicios',
                    name: 'Servicios',
                    component: () => import('../views/Servicios')
                },
                {
                    path: '/personal',
                    name: 'Personal',
                    component: () => import('../views/Personal')
                }
            ]
        }, {
            path: '/admin/',
            component: () => import('../App'),
            children: [
                {
                    path: '/',
                    name: 'Admin',
                    component: () => import('../views/admin/Home')
                },
                {
                    path: 'productos',
                    name: 'Productos',
                    component: () => import('../views/admin/Productos')
                },
                {
                    path: 'servicios',
                    name: 'Servicios',
                    component: () => import('../views/admin/Servicios')
                }]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
export default router