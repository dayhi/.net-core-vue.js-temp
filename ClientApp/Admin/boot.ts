import Vue from "vue";
import "bootstrap";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    { path: "/Admin/", component: require('./index/index.vue.html').default },
    { path: "/Admin/user", component: require('./index/index.vue.html').default }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./app/app.vue.html').default)
});