import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",

    component: () => import("../views/Index.vue"),
  },
  {
    path: "/login",
    name: "Login",

    component: () => import("../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, form, next) => {
  const isLogin = localStorage.ele_login ? true : false;
  if (to.path === "/login") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
});
export default router;
