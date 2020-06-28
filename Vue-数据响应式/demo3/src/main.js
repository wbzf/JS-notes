import Vue from "vue/dist/vue.js";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  data: {
    obj: {
      a: 0,
      // b: undefined,
    },
  },
  template: `
    <div>
      {{obj.b}}
      <button @click="setB">set b</button>
    </div>
  `,
  methods: {
    setB() {
      // this.obj.b = 1;
      // Vue.set(this.obj, "b", 1);
      this.$set(this.obj, "b", 1);
    },
  },
}).$mount("#app");
