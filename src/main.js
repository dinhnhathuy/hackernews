import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import Navbar from './components/Navbar.vue'
import { store } from './store/index';

Vue.config.productionTip = false;

Vue.component('nav-bar',Navbar)

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount("#app");
