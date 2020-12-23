import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import Navbar from './components/Navbar.vue'

Vue.config.productionTip = false;

Vue.component('nav-bar',Navbar)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
