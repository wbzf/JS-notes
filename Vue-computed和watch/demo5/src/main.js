import Vue from "vue/dist/vue.js";
import App from "./App.vue";

Vue.config.productionTip = false;

const vm = new Vue({
  data: {
    n: 0,
    obj: {
      a: "a",
    },
  },
  template: `
    <div>
      <button @click="n += 1">n+1</button>
      <button @click="obj.a += 'hi'">obj.a + 'hi'</button>
      <button @click="obj = {a:'a'}">obj = 新对象</button>
    </div>
  `,
  watch: {
    n() {
      console.log("n 变了");
    },
    obj: {
      handler() {
        console.log("obj变了");
      },
      deep: true,
    },
    "obj.a": function() {
      console.log("obj.a 变了");
    },
  },
}).$mount("#app");

// vm.$watch(
//   "n",
//   function() {
//     console.log("我要透药娘");
//   }
//   { immediate: true }
// );
