import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

export const router = new Router({
    mode: "history",
    routes, // short for routes: routes
    linkActiveClass: 'nav-item active',
    scrollBehavior: (to) => {
      if (to.hash) {
        return {selector: to.hash}
      } else {
        return { x: 0, y: 0 }
      }
    }
  });

router.beforeEach((to, from, next) => {
  // chuyển đến trang login nếu chưa được login
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})

export default router