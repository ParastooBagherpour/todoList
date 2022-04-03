import { createRouter, createWebHistory } from "vue-router";
//import List from "../views/List.vue";

const routes = [
  {
    path: "/",
    redirect: "/list",
    component: () => import("../views/List.vue"),
    children: [
      {
        path: "/list",
        name: "List",
        component: () => import("../views/List.vue"),
      },
    ],
  },
  {
    path: "/edit",
    name: "edit",
    component: () => import("../views/Edit.vue"),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(async (to, from, next) => {
  if (to.name != "edit") {
    next();
  } else {
    next();
  }
});
export default router;
