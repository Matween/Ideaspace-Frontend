import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
  },
});

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');
