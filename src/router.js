import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Extensions from "./views/Extensions.vue";
import Cuts from "./views/Cuts.vue";
import Massages from "./views/Massages.vue";
import Packages from "./views/Packages.vue";
import Other from "./views/Other.vue";
import Contact from "./views/Contact.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/extensions",
      name: "extensions",
      component: Extensions
    },
    {
      path: "/cuts",
      name: "cuts",
      component: Cuts
    },
    {
      path: "/massages",
      name: "massages",
      component: Massages
    },
    {
      path: "/packages",
      name: "packages",
      component: Packages
    },
    {
      path: "/other_services",
      name: "other",
      component: Other
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
