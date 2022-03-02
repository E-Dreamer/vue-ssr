/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {},
  });
}
