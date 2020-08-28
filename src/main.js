import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install Vue Router
Vue.use(VueRouter)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: () => import('./components/Home') },
    { path: '/companion', component: () => import('./components/Companion') },
    { path: '*', component: () => import('./components/NotFound') }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
