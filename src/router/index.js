import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../Views/Main'
import user from "../Views/User";
import home from "../Views/Home"
import mall from "../Views/Mall"
import page1 from "../Views/Other/Page1";
import page2 from "../Views/Other/Page2";

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'main',
        component: main,
        children: [
            {
                path: '/home',
                name: 'home',
                component: home
            },
            {
                path: '/user',
                name: 'user',
                component: user
            },
            {
                path: '/mall',
                name: 'mall',
                component: mall
            },
            {
                path: '/page1',
                name: 'page1',
                component: page1
            },
            {
                path: '/page2',
                name: 'page2',
                component: page2
            }
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;