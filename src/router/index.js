import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import UpdateView from '@/views/UpdateView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/update', component: UpdateView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
