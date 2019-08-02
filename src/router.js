import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Extensions from "./views/Extensions.vue";
import Cuts from "./views/Cuts.vue";
import Massages from "./views/Massages.vue";
import Packages from "./views/Packages.vue";
import Other from "./views/Other.vue";
import Contact from "./views/Contact.vue";
import PageNotFound from "./views/PageNotFound.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: "Tiffany's Salon - Home" }
    },
    {
      path: "/extensions",
      name: "extensions",
      component: Extensions,
      meta: { title: "Tiffany's Salon - Extensions" }
    },
    {
      path: "/cuts",
      name: "cuts",
      component: Cuts,
      meta: { title: "Tiffany's Salon - Cuts" }
    },
    {
      path: "/massages",
      name: "massages",
      component: Massages,
      meta: { title: "Tiffany's Salon - Massages" }
    },
    {
      path: "/packages",
      name: "packages",
      component: Packages,
      meta: { title: "Tiffany's Salon - Packages" }
    },
    {
      path: "/other_services",
      name: "other",
      component: Other,
      meta: { title: "Tiffany's Salon - Other Services" }
    },
    {
      path: "/about",
      name: "about",
      meta: { title: "Tiffany's Salon - About" },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: { title: "Tiffany's Salon - Contact" }
    },
    {
      path: "*",
      name: "error404",
      component: PageNotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
