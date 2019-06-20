import Vue from 'vue';
import Vuex from 'vuex';

import App from '../components/App.vue';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    note: 'c4',
  },
  mutations: {
    updateNote (state, objKey) {
      state.note = objKey;
    }
  }
});

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: {
    App
  },
});
