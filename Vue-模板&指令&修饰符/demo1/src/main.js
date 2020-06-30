import Vue from "vue/dist/vue.js";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  template: `
    <div>
      <a @click.prevent="x" href="https://www.baidu.com">baidu</a>
      <input @keypress="y"/>
      <input @keypress.13="nihui"/>
      <button @click=add>+1</button>
    </div>
  `,
  data: { n: 0 },
  methods: {
    add() {
      this.n += 1;
    },
    x() {
      console.log("nihui nihui nihui");
    },
    y(e) {
      console.log(e.target.value);
    },
    nihui(e) {
      console.log(e.keyCode);
    },
  },
}).$mount("#app");
