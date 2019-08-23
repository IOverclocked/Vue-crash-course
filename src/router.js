import vue from "vue";
import Router from "vue-router";
import Home from "./components/views/Home.vue";

vue.use(Router);

export default new Router({
  router: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/above",
      name: "above",
      component: () => import("./components/views/Above.vue")
    }
  ]
});
