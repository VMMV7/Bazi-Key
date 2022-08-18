const routes = [
  {
    path: "/",
    component: () => import("layouts/default.vue"),
    children: [
      { path: "", component: () => import("pages/index.vue") },
      { path: "/details/:id", component: () => import("pages/details.vue") },
      { path: "/store", component: () => import("pages/store.vue") }
    ],
  },
];

export default routes;
