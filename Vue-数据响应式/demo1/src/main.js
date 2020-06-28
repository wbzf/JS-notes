// 引入完整版vue
import Vue from "vue/dist/vue.js";
import App from "./App.vue";

Vue.config.productionTip = false;

const myData = {
  n: 0,
};
console.log(myData);

const vm = new Vue({
  data: myData,
  template: `
    <div>{{n}}
    <button @click="add">+10</button>
    </div>
  `,
  methods: {
    add() {
      this.n += 10;
      // myData.n += 10;
    },
  },
}).$mount("#app");

setTimeout(() => {
  myData.n += 10;
  console.log(myData);
  // console.log(vm);
}, 3000);
