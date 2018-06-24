import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routers = [
    {path:'/Login/',component:require('./user/user.vue.html').default},
    {path:'/Login/admin',component:require('./admin/admin.vue.html').default}
]

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routers }),
    render:h=>h(require('./app/app.vue.html').default)
})