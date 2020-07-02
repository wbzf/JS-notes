import Vue from "vue";
const MyVue = Vue.extend({
  data() {
    return {
      name: undefined,
      time: undefined,
    };
  },
  created() {
    if (!this.name) {
      console.error("no name!");
    }
    this.time = new Date();
    console.log(`${this.name} 出生了`);
  },
  beforeDestroy() {
    const now = new Date();
    console.log(`${this.name} 死亡了`);
    console.log(`共生存了${now - this.time} ms`);
  },
});

export default MyVue;
