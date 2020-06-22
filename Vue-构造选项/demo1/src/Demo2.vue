<template>
  <div class="blue">
      这里是药娘的内部
      {{message}}
      <button @click="fn">call fn</button>
  </div>
</template>

<script>
export default {
    props: ['message','fn']
};
</script>

<style scoped>
.blue {
  color: blue;
}
</style>