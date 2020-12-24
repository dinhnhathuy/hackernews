import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import News from "../views/News.vue";
import Detail from "../components/Detail.vue"
import topNews from '../views/topNews.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },{
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/new/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/topnews',
    name: 'topnews',
    component: topNews
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
