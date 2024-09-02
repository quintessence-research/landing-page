import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/pages/Home.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/pages/About.vue')
        },
        {
            path: '/services',
            name: 'services',
            component: () => import('@/views/pages/Services.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('@/views/pages/Contact.vue')
        },
        // Wildcard route for redirecting to home
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ]
});

export default router;
