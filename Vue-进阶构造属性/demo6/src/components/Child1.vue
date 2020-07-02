<template>
  <div>Child1</div>
</template>

<script>
import MyVue from "../MyVue.js";
export default {
  extends: MyVue,
  data() {
    //data数据会合并
    return {
      name: "Child1"
    };
  }
};
</script>
