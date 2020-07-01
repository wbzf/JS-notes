<template>
  <div>Child1</div>
</template>

<script>
import log from "../mixins/log.js";
export default {
  data() {
    //data数据会合并
    return {
      name: "Child1",
    };
  },
  created() {
    console.log("nihui nihui nihui");
  },
  mixins: [log], // 复制过来
};
</script>
