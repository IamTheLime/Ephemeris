import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import "@/assets/styles/styles.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(Vuex);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");
