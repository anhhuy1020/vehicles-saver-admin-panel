
import Vue from 'vue'
import App from './App.vue'

// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

// router setup
import router from './routes/router'
import {store} from './store'
import SlidingPagination from 'vue-sliding-pagination'

import './registerServiceWorker'
import { Table, TableColumn } from 'buefy/dist/components/table'
import BootstrapVue from 'bootstrap-vue'

Vue.component('b-table', Table);
Vue.component('b-table-column', TableColumn );
Vue.use(BootstrapVue);
Vue.use(LightBootstrap);
Vue.use(SlidingPagination);
Vue.component('sliding-pagination', SlidingPagination);

// configure router
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store:store,
  router
})
