import { createRouter, createWebHistory } from 'vue-router';
import { useAppStore } from '@/stores';

import {defineAsyncComponent} from "vue";

const Login = defineAsyncComponent(()=> import('../views/login.vue'));
const Register = defineAsyncComponent(()=> import('../views/register.vue'));
const LiveScore = defineAsyncComponent(()=> import('../views/pages/Home.vue'));
const Favorite = defineAsyncComponent(()=> import('../views/pages/Favorite.vue'));
const Result = defineAsyncComponent(()=> import('../views/pages/Result.vue'));
const Schedule = defineAsyncComponent(()=> import('../views/pages/Schedule.vue'));
const Tip = defineAsyncComponent(()=> import('../views/pages/Tip.vue'));
const Community = defineAsyncComponent(()=> import('../views/pages/Community.vue'));
const Statistic = defineAsyncComponent(()=> import('../views/pages/Statistic.vue'));

const routes = [
    { path: '/', name: 'home', component: LiveScore},
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/live-score', name: 'live-score', component: LiveScore},
    { path: '/favorites', name: 'favorites', component: Favorite},
    { path: '/results', name: 'results', component: Result},
    { path: '/schedule', name: 'schedule', component: Schedule},
    { path: '/tip', name: 'tip', component: Tip},
    { path: '/community', name: 'community', component: Community},
    { path: '/statistics', name: 'statistics', component: Statistic},

];

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});
router.beforeEach((to, from, next) => {
    const store = useAppStore();
    if (to?.meta?.layout - 'auth') {
        store.setMainLayout('auth');
    } else {
        store.setMainLayout('app');
    }
    next(true);
});
export default router;
