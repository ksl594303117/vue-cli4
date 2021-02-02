import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Table1 from "../views/Table1.vue";
import Table2 from "../views/Table2.vue";
import Table3 from "../views/Table3.vue";
import FormCreate from "../views/FormCreate.vue";
import speedJS from "../views/speedJS.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/table1",
    name: "Table1",
    component: Table1
  },
  {
    path: "/table2",
    name: "Table2",
    component: Table2
  },
  {
    path: "/table3",
    name: "Table3",
    component: Table3
  },
  {
    path: "/formCreate",
    name: "FormCreate",
    component: FormCreate
  },
  {
    path: "/speedJS",
    name: "SpeedJS",
    component: speedJS
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
