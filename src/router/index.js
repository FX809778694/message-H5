import Vue from 'vue';
import VueRouter from 'vue-router';
import { setSessionStorage } from '../common/utils';

Vue.use(VueRouter);

const routersMap = [
  { path: '', redirect: '/index', hidden: true },
  { path: '/', redirect: '/index', hidden: true },
  {
    path: '/index',
    component: () => import('@/views/index/index'),
    name: 'home',
    beforeEnter: (to, from, next) => {
      if (to.query.token) {
        setSessionStorage('token', to.query.token)
      }
      next();
    },
  },
  {
    path: '/subjectList',
    component: () => import('@/views/subject-list/index'),
    name: 'subjectList',
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    name: 'login',
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
