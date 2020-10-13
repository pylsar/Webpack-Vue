import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 5,
  },
mutations: {
    increment(state) {
        state.counter++;
    },
    decrement(state) {
        state.counter--;
    },
},
actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    },
},    
getters: {

  }
    
});
