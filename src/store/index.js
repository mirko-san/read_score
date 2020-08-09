import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    note: ''
  },
  mutations: {
    updateNote(state, objKey) {
      state.note = objKey;
    }
  },
  actions: {},
  modules: {}
});
