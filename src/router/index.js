import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routersMap = [
  { path: '', redirect: '/index', hidden: true },
  { path: '/', redirect: '/index', hidden: true },
  {
    path: '/index',
    component: () => import('@/views/index/index'),
    name: 'home',
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    name: 'login',
  },
  {
    path: '/list',
    component: () => import('@/views/data-list/index'),
    name: 'DataList',
  },
];

const router = new VueRouter({
  routes: routersMap
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    document.body.scrollTop = 0;
  }

  if (to.matched.length === 0) {
    from.path ? next({ path: from.path}) : next('/404');
  } else {
    next();
  }
});

export default router
