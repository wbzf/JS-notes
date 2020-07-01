<template>
  <div>Child5</div>
</template>

<script>
import log from "../mixins/log.js";
export default {
  data() {
    return {
      name: "Child5",
    };
  },
  mixins: [log], // 复制过来
};
</script>
