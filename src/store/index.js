import Vue from 'vue'
import Vuex from 'vuex'
import publicStore from './modules/publicStore'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    publicStore,
  }
});

export default store
