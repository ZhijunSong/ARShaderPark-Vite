import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Intro from '/src/components/Intro.vue'
import About from '/src/components/About.vue'
import Guide from '/src/components/Guide.vue'
const routes = [
    {
        path: '/app',
        name: 'Home',
        component: Home,
    },
    {
        path:'/about',
        name:'About',
        component: About,
    },
    {
        path:'/',
        name:'Intro',
        component: Intro,
    }, 
    {
        path:'/guide',
        name:'Guide',
        component:Guide,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router