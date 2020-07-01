import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.directive("x", {
  //当被绑定的元素插入到DOM中时
  inserted: function(el) {
    el.addEventListener("click", () => {
      console.log("x");
    });
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
