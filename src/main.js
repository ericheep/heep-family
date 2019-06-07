import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { store } from './store/store'
import Routes from './routes'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes
})

new Vue({
  store,
  router: router,
  render: h => h(App),
}).$mount('#app')
