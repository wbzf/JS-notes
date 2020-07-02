import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

//全局混入 不要用
// Vue.mixin({
//   data() {
//     return {
//       name: undefined,
//       time: undefined,
//     };
//   },
//   created() {
//     if (!this.name) {
//       throw new Error("need name");
//     }
//     this.time = new Date();
//     console.log(`${this.name} 出生了`);
//   },
//   beforeDestroy() {
//     const now = new Date();
//     console.log(`${this.name} 死亡了`);
//     console.log(`共生存了${now - this.time} ms`);
//   },
// });

new Vue({
  render: (h) => h(App),
}).$mount("#app");
