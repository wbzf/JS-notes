import Vue from "vue/dist/vue.js";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  data: {
    user: {
      email: "yaoniang@qq.com",
      name: "nihui",
      phone: "123456789",
    },
    displayName: "",
  },
  watch: {
    "user.email": {
      handler: "changed",
      immediate: true, // 第一次渲染也触发watch
    },
    "user.name": {
      handler: "changed",
      immediate: true,
    },
    "user.phone": {
      handler: "changed",
      immediate: true,
    },
  },
  template: `
    <div>
      {{displayName}}
      <button @click="user.name = undefined">remove name</button>
    </div>
  `,
  methods: {
    changed() {
      console.log(arguments);
      const user = this.user;
      this.displayName = user.name || user.email || user.phone;
    },
  },
}).$mount("#app");
