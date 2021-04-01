import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import JwPagination from 'jw-vue-pagination';
import { BootstrapVue, BootstrapVueIcons  } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.component('jw-pagination', JwPagination);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
