import Vue from "vue/dist/vue.js";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  data: {},
  template: `
    <div>{{n}}</div>
  `,
}).$mount("#app");
