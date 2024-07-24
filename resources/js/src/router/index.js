import { createRouter, createWebHistory } from 'vue-router';
import { useAppStore } from '@/stores/index';

import Country from '../views/pages/country.vue';
import League from '../views/pages/league.vue';
import Bookmaker from '../views/pages/bookmaker.vue';
import Schedule from '../views/pages/schedule.vue';
import Result from '../views/pages/result.vue';

import Login from '../views/login.vue'
import Register from '../views/register.vue';

const routes = [
    { path: '/', name: 'home', component: League},
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/country', name: 'country', component: Country},
    { path: '/league', name: 'league', component: League},
    { path: '/bookmaker', name: 'bookmaker', component: Bookmaker},
    { path: '/schedule', name: 'schedule', component: Schedule},
    { path: '/result', name: 'result', component: Result},
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
