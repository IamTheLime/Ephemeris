import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import '@/assets/styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import routes from './routing/RoutingTree';

Vue.use(Vuex);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
});

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app');
