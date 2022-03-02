/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
// import store from "./store";
import { createRouter } from "./router";
import { createStore } from "./store";
Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount("#app");

export function createApp() {
  const router = createRouter();
  const store = createStore();
  const app = new Vue({
    router,
    store,
    render: (h) => h(App),
  });
  return { app, router, store };
}
