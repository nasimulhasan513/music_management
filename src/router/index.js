import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");
const Manage = () => import("@/views/Manage.vue");
const Song = () => import(/* webpackChunkName: "song" */ "@/views/Song.vue");

const routes = [
  {
    name: "home",
    path: "/",
    component: Home
  },
  {
    name: "about",
    path: "/about",
    component: About
  },
  {
    name: "manage",
    alias: "/manage",
    path: "/manage-music",
    meta: {
      requiresAuth: true
    },
    component: Manage
    // beforeEnter: (to, from, next) => {

    // }
  },
  // {
  //   path: "/manage",
  //   redirect: { name: "manage" }
  // },
  {
    name: "song",
    path: "/song/:id",
    component: Song
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500"
});

router.beforeEach((to, from, next) => {
  if (!to.matched.some(record => record.meta.requiresAuth)) {
    next();
    return;
  }

  if (store.state.auth.userLoggedIn) {
    next();
    return;
  }

  next({ name: "home" });
});

export default router;
