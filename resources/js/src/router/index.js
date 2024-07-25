import { createRouter, createWebHistory } from 'vue-router';
import { useAppStore } from '@/stores/index';

import Home from '../views/pages/Home.vue';
import Login from '../views/login.vue'
import Register from '../views/register.vue';

const routes = [
    { path: '/', name: 'home', component: Home},
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
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
