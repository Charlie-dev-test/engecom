import Vue from 'vue'
import App from './App.vue'
import './assets/styles/bootstrap/scss/bootstrap.scss'
import './assets/styles/styles.scss';
import VueRouter from 'vue-router'
import router from './router/index'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: 'd287e75e-a1fc-4b81-bf13-b2ad221e6a72',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
};

Vue.config.productionTip = false;
Vue.use(YmapPlugin, settings);
Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  el: '#app',
  router
});
