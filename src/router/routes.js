const routes = [
  {
    path: "/",
    component: () => import("layouts/default.vue"),
    children: [
      { path: "", component: () => import("pages/index.vue") },
      { path: "/details", component: () => import("pages/details.vue") },
    ],
  },
];

export default routes;
