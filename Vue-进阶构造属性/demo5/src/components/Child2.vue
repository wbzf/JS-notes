<template>
  <div>Child2</div>
</template>

<script>
import log from "../mixins/log.js";
export default {
  data() {
    return {
      name: "Child2",
    };
  },
  mixins: [log], // 复制过来
};
</script>
