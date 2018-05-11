import Vue from "vue";
import Home from "./pages/Home.vue";
import HelloComponent from "./components/Hello.vue";
import HelloDecoratorComponent from "./components/HelloDecorator.vue";
import VueRouter from 'vue-router'
import App from "./App.vue"
import BootstrapVue from 'bootstrap-vue'


Vue.use(BootstrapVue);
Vue.use(VueRouter)

// global styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
  
const router = new VueRouter({    
    mode: "history",
    routes: [
        {path: '*', component: Home },
        {path: '/foo', component: Foo },
        {path: '/bar', component: Bar }
       ]
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
