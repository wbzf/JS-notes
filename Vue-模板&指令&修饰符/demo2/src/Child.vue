<template>
  <div class="child">
    {{money}}
    <button @click="$emit('update:money', money-100)">
      <!-- <button @click="add"> -->
      <span>花钱</span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["money"],
  methods: {
    add() {
      this.$emit("update:money", this.money - 100);
    }
  }
};
</script>

<style>
.child {
  border: 3px solid green;
}
</style>