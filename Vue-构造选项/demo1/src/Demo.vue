<template>
  <div class="red">
    我要透药娘
  {{n}}
  <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 0
    };
  },
  methods: {
    add() {
      this.n += 1;
    }
  },
  destroyed(){
    console.log('药娘消失了')
  },
};
</script>

<style scoped>
.red {
  color: red;
}
</style>