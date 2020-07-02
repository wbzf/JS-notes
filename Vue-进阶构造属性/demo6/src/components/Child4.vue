<template>
  <div>Child4</div>
</template>

<script>
import log from "../mixins/log.js";
export default {
  data() {
    return {
      name: "Child4",
    };
  },
  mixins: [log], // 复制过来
};
</script>
