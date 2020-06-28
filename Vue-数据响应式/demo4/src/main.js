import Vue from "vue/dist/vue.js";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  data: {
    array: ["a", "b", "c"],
  },
  template: `
    <div>
      {{array}}
      <button @click="setD">set d</button>
    </div>
  `,
  methods: {
    setD() {
      // this.array[3] = "d"; // 页面中会显示d吗
      // 为什么不用this.array.push('d')
      // this.array.push("d");
      // console.log(this.array);
    },
  },
}).$mount("#app");
