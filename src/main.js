import Vue from 'vue'
import App from './App.vue'
import './assets/styles/bootstrap/scss/bootstrap.scss'
import './assets/styles/styles.scss';
import VueRouter from 'vue-router'
import router from './router/index'

Vue.config.productionTip = false;

Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  el: '#app',
  router
});
