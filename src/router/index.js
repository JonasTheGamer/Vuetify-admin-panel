import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'dashboard',
        component: () =>
            import ('./../views/Dashboard')
    },
    {
        path: '/settings/licenses',
        name: 'licenses',
        component: () =>
            import ('./../views/Licenses')
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('./../views/About')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router